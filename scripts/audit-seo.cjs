const fs = require('fs');
const path = require('path');

function walk(dir, result = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, result);
    else if (entry.name.endsWith('.html')) result.push(full);
  }
  return result;
}

const distDir = path.join(process.cwd(), 'dist');
if (!fs.existsSync(distDir)) {
  console.error('dist directory does not exist. Please run pnpm build first.');
  process.exit(1);
}

const files = walk(distDir);
console.log(`Auditing all ${files.length} HTML files in dist/...`);

let issues = 0;
let checked = 0;

for (const f of files) {
  const rel = path.relative(distDir, f).replace(/\\/g, '/');
  const html = fs.readFileSync(f, 'utf8');

  // Skip noindex pages (e.g. 404, /go/*)
  const robotsMatch = html.match(/<meta\s+name=["']robots["']\s+content=["']([^"']*)["']/i);
  const isNoindex = robotsMatch && robotsMatch[1].includes('noindex');
  if (isNoindex) continue;

  checked++;

  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i) ||
                    html.match(/<meta\s+content=["']([^"']*)["']\s+name=["']description["']/i);

  const title = titleMatch ? titleMatch[1].trim() : '';
  const desc = descMatch ? descMatch[1].trim() : '';

  let pageIssue = false;

  if (title.length < 25 || title.length > 70) {
    console.warn(`⚠️ [${rel}] Title length out of range (${title.length} chars): "${title}"`);
    pageIssue = true;
  }

  if (desc.length < 80 || desc.length > 165) {
    console.warn(`⚠️ [${rel}] Desc length out of range (${desc.length} chars): "${desc}"`);
    pageIssue = true;
  }

  if (pageIssue) {
    issues++;
  } else {
    console.log(`✅ [${rel}] Title (${title.length}c) | Desc (${desc.length}c)`);
  }
}

console.log(`\n=========================================`);
console.log(`Audited ${checked} indexable pages. Issues found: ${issues}`);
if (issues === 0) {
  console.log('🎉 100% OF INDEXABLE PAGES SATISFY BING WEBMASTER TOOLS CRITERIA!');
} else {
  process.exitCode = 1;
}
