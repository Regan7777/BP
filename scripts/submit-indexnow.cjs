const fs = require('node:fs/promises');
const path = require('node:path');

const host = 'baipiaojc.com';
const key = '636e8c7980a14681b268c19b714bbde3';
const keyLocation = `https://${host}/636e8c7980a14681b268c19b714bbde3.txt`;

async function main() {
  const sitemapPath = path.join(process.cwd(), 'dist', 'sitemap.xml');
  const sitemap = await fs.readFile(sitemapPath, 'utf8');
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

  if (urls.length === 0) {
    throw new Error('dist/sitemap.xml 中没有可提交的 URL，请先执行 pnpm build。');
  }

  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host, key, keyLocation, urlList: urls })
  });

  if (!response.ok) {
    throw new Error(`IndexNow 提交失败：HTTP ${response.status} ${await response.text()}`);
  }

  process.stdout.write(`IndexNow 已提交 ${urls.length} 个 URL，HTTP ${response.status}。\n`);
}

main().catch((error) => {
  console.error(error.message || error);
  process.exitCode = 1;
});
