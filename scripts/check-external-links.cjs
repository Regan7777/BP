const fs = require('node:fs');
const path = require('node:path');

const root = process.cwd();
const dist = path.join(root, 'dist');
const reportDir = path.join(root, 'reports');
const timeoutMs = 12000;
const concurrency = 5;

function walk(dir, result = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, result);
    else result.push(full);
  }
  return result;
}

async function request(url, method) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      method,
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; biaopiao-link-audit/1.0)' }
    });
    return { status: response.status, finalUrl: response.url };
  } finally {
    clearTimeout(timer);
  }
}

async function check(url) {
  const requestUrl = new URL(url);
  requestUrl.hash = '';
  try {
    let result = await request(requestUrl.href, 'HEAD');
    if ([400, 403, 405, 429, 500, 501, 503].includes(result.status)) {
      result = await request(requestUrl.href, 'GET');
    }
    const blocked = [401, 403, 429].includes(result.status);
    const dead = result.status === 404 || result.status === 410 || result.status >= 500;
    return { url, ...result, blocked, dead };
  } catch (error) {
    // DNS failures, TLS interception and bot protection do not prove that a URL is dead.
    // Only confirmed 404/410/5xx responses are treated as dead links.
    return { url, status: 0, finalUrl: '', blocked: true, dead: false, error: error.message };
  }
}

async function main() {
  if (!fs.existsSync(dist)) throw new Error('缺少 dist，请先执行 pnpm build。');
  const urls = new Set();
  for (const file of walk(dist).filter((item) => item.endsWith('.html'))) {
    const html = fs.readFileSync(file, 'utf8');
    for (const match of html.matchAll(/<a\b[^>]*href=["'](https?:\/\/[^"']+)["'][^>]*>/gi)) {
      const url = new URL(match[1]);
      if (url.hostname === 'baipiaojc.com' || url.hostname === 'www.baipiaojc.com') continue;
      urls.add(match[1]);
    }
  }

  const queue = [...urls];
  const results = [];
  async function worker() {
    while (queue.length) {
      const url = queue.shift();
      results.push(await check(url));
    }
  }
  await Promise.all(Array.from({ length: concurrency }, worker));
  results.sort((a, b) => a.url.localeCompare(b.url));

  fs.mkdirSync(reportDir, { recursive: true });
  fs.writeFileSync(path.join(reportDir, 'external-links.json'), JSON.stringify(results, null, 2));

  const dead = results.filter((item) => item.dead);
  const blocked = results.filter((item) => item.blocked);
  console.log(`检查 ${results.length} 个外链：死链 ${dead.length}，访问受限 ${blocked.length}。`);
  for (const item of dead) console.error(`DEAD ${item.status || 'ERR'} ${item.url}${item.error ? ` (${item.error})` : ''}`);
  for (const item of blocked) console.warn(`BLOCKED ${item.status || 'ERR'} ${item.url}${item.error ? ` (${item.error})` : ''}`);
  if (dead.length > 0) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error.message || error);
  process.exitCode = 1;
});
