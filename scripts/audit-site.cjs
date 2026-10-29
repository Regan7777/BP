const fs = require('node:fs');
const path = require('node:path');

const root = process.cwd();
const dist = path.join(root, 'dist');
const reportDir = path.join(root, 'reports');

function walk(dir, result = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, result);
    else result.push(full);
  }
  return result;
}

function routeFromHtml(file) {
  const relative = path.relative(dist, file).replace(/\\/g, '/');
  if (relative === 'index.html') return '/';
  if (relative === '404.html') return '/404';
  if (relative.endsWith('/index.html')) return `/${relative.slice(0, -11)}`.replace(/\/$/, '') || '/';
  return `/${relative.replace(/\.html$/, '')}`;
}

function normalizeRoute(value) {
  const withoutHash = value.split('#')[0].split('?')[0];
  if (!withoutHash) return '';
  const normalized = withoutHash.replace(/\/$/, '');
  return normalized || '/';
}

function decodeHtml(value = '') {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

function matchOne(html, pattern) {
  const match = html.match(pattern);
  return match ? decodeHtml(match[1]) : '';
}

function allMatches(html, pattern) {
  return [...html.matchAll(pattern)].map((match) => decodeHtml(match[1]));
}

function extractJsonLdTypes(html) {
  const types = new Set();
  for (const raw of allMatches(html, /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const parsed = JSON.parse(raw);
      for (const item of Array.isArray(parsed) ? parsed : [parsed]) {
        if (item && item['@type']) types.add(item['@type']);
      }
    } catch {
      types.add('INVALID_JSON_LD');
    }
  }
  return [...types];
}

if (!fs.existsSync(dist)) {
  console.error('缺少 dist，请先执行 pnpm build。');
  process.exit(1);
}

const htmlFiles = walk(dist).filter((file) => file.endsWith('.html'));
const pages = htmlFiles.map((file) => {
  const html = fs.readFileSync(file, 'utf8');
  // Inline scripts may contain template strings such as href="/posts/${item.slug}".
  // They are not rendered anchors and must not be counted as crawlable links.
  const markup = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
  const route = routeFromHtml(file);
  const hrefs = allMatches(markup, /<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi);
  const images = [...html.matchAll(/<img\b([^>]*)>/gi)].map((match) => match[1]);
  const h1s = allMatches(html, /<h1\b[^>]*>([\s\S]*?)<\/h1>/gi).map((value) => decodeHtml(value.replace(/<[^>]+>/g, '')));
  const title = matchOne(html, /<title>([\s\S]*?)<\/title>/i);
  const description = matchOne(html, /<meta\s+name=["']description["']\s+content=["']([^"']*)["'][^>]*>/i)
    || matchOne(html, /<meta\s+content=["']([^"']*)["']\s+name=["']description["'][^>]*>/i);
  const canonical = matchOne(html, /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["'][^>]*>/i)
    || matchOne(html, /<link\s+href=["']([^"']+)["']\s+rel=["']canonical["'][^>]*>/i);
  const robots = matchOne(html, /<meta\s+name=["']robots["']\s+content=["']([^"']+)["'][^>]*>/i);
  const faqs = (html.match(/<details\b[^>]*class=["'][^"']*faq-details/gi) || []).length;
  const types = extractJsonLdTypes(html);

  return { file, route, html, hrefs, images, h1s, title, description, canonical, robots, faqs, types };
});

const routeSet = new Set(pages.map((page) => normalizeRoute(page.route)));
const errors = [];
const warnings = [];
const incoming = new Map([...routeSet].map((route) => [route, 0]));
const titleOwners = new Map();
const descriptionOwners = new Map();

for (const page of pages) {
  const isRedirect = page.route.startsWith('/go/');
  const isNotFound = page.route === '/404';
  const isArticle = page.route.startsWith('/posts/');
  const strict = !isRedirect && !isNotFound;

  if (strict && !page.title) errors.push(`${page.route}: 缺少 title`);
  if (strict && !page.description) errors.push(`${page.route}: 缺少 meta description`);
  if (strict && page.h1s.length !== 1) errors.push(`${page.route}: H1 数量为 ${page.h1s.length}`);
  if (strict && !page.canonical) errors.push(`${page.route}: 缺少 canonical`);
  if (strict && /noindex/i.test(page.robots)) errors.push(`${page.route}: 错误设置 noindex`);
  if (strict && page.canonical && !page.canonical.startsWith('https://baipiaojc.com/')) {
    errors.push(`${page.route}: canonical 域名错误 ${page.canonical}`);
  }

  if (isArticle) {
    for (const type of ['BlogPosting', 'BreadcrumbList', 'FAQPage']) {
      if (!page.types.includes(type)) errors.push(`${page.route}: 缺少 ${type} 结构化数据`);
    }
    if (page.faqs < 3) errors.push(`${page.route}: FAQ 少于3项（${page.faqs}）`);
    const related = new Set(page.hrefs.filter((href) => href.startsWith('/posts/') && normalizeRoute(href) !== page.route));
    if (related.size < 3) errors.push(`${page.route}: 站内相关文章链接少于3条（${related.size}）`);
  }

  for (const attrs of page.images) {
    if (!/\balt=["'][^"']*["']/i.test(attrs)) errors.push(`${page.route}: 存在缺少 alt 的图片`);
    if (/\bsrc=["']https?:\/\//i.test(attrs)) warnings.push(`${page.route}: 仍有远程图片`);
  }

  for (const href of page.hrefs) {
    if (!href || href.startsWith('#') || /^(mailto:|tel:|javascript:)/i.test(href)) continue;
    let pathname = href;
    if (/^https?:\/\//i.test(href)) {
      try {
        const url = new URL(href);
        if (url.hostname !== 'baipiaojc.com' && url.hostname !== 'www.baipiaojc.com') continue;
        pathname = url.pathname;
      } catch {
        errors.push(`${page.route}: 无法解析链接 ${href}`);
        continue;
      }
    }
    if (!pathname.startsWith('/')) continue;
    const target = normalizeRoute(pathname);
    if (!target || /\.[a-z0-9]{2,5}$/i.test(target)) continue;
    if (!routeSet.has(target)) errors.push(`${page.route}: 站内死链 ${href}`);
    else incoming.set(target, (incoming.get(target) || 0) + 1);
  }

  if (strict && page.title) {
    const owners = titleOwners.get(page.title) || [];
    owners.push(page.route);
    titleOwners.set(page.title, owners);
  }
  if (strict && page.description) {
    const owners = descriptionOwners.get(page.description) || [];
    owners.push(page.route);
    descriptionOwners.set(page.description, owners);
  }
}

for (const [title, owners] of titleOwners) {
  if (owners.length > 1) errors.push(`重复 title: ${title} -> ${owners.join(', ')}`);
}
for (const [description, owners] of descriptionOwners) {
  if (owners.length > 1) errors.push(`重复 description: ${description.slice(0, 60)} -> ${owners.join(', ')}`);
}

for (const page of pages.filter((item) => item.route.startsWith('/posts/'))) {
  if ((incoming.get(page.route) || 0) === 0) errors.push(`${page.route}: 孤页，没有任何站内入链`);
}

const sitemapPath = path.join(dist, 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) errors.push('缺少 sitemap.xml');
else {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  for (const page of pages.filter((item) => item.route.startsWith('/posts/'))) {
    const expected = `https://baipiaojc.com${page.route}`;
    if (!sitemap.includes(`<loc>${expected}</loc>`)) errors.push(`${page.route}: 未进入 sitemap.xml`);
  }
}

for (const required of ['/robots.txt', '/llms.txt', '/llms-full.txt', '/baipiao-indexnow-key.txt']) {
  const target = path.join(dist, required.slice(1));
  if (!fs.existsSync(target)) errors.push(`缺少 ${required}`);
}

const summary = {
  checkedAt: new Date().toISOString(),
  pages: pages.length,
  articles: pages.filter((page) => page.route.startsWith('/posts/')).length,
  errors,
  warnings: [...new Set(warnings)],
  incoming: Object.fromEntries([...incoming].sort())
};

fs.mkdirSync(reportDir, { recursive: true });
fs.writeFileSync(path.join(reportDir, 'site-audit.json'), JSON.stringify(summary, null, 2));

console.log(`检查 ${summary.pages} 个页面，其中文章 ${summary.articles} 篇。`);
console.log(`错误 ${errors.length}，提醒 ${summary.warnings.length}。`);
for (const error of errors) console.error(`ERROR ${error}`);
for (const warning of summary.warnings) console.warn(`WARN  ${warning}`);

if (errors.length > 0) process.exitCode = 1;
