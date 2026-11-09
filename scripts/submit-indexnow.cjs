const fs = require('node:fs/promises');
const path = require('node:path');

const host = 'baipiaojc.com';
const key = '636e8c7980a14681b268c19b714bbde3';
const keyLocation = `https://${host}/636e8c7980a14681b268c19b714bbde3.txt`;

async function getUrls() {
  const sitemapPath = path.join(process.cwd(), 'dist', 'sitemap.xml');
  try {
    const sitemap = await fs.readFile(sitemapPath, 'utf8');
    const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
    if (urls.length > 0) return urls;
  } catch {}

  // 线上 sitemap 兜底
  try {
    const res = await fetch(`https://${host}/sitemap.xml`, { signal: AbortSignal.timeout(10000) });
    if (res.ok) {
      const xml = await res.text();
      const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
      if (urls.length > 0) return urls;
    }
  } catch {}

  return [
    `https://${host}/`,
    `https://${host}/tools/`,
    `https://${host}/about/`
  ];
}

async function main() {
  const urls = await getUrls();

  const endpoints = [
    { name: 'Bing IndexNow', url: 'https://www.bing.com/indexnow' },
    { name: 'IndexNow API', url: 'https://api.indexnow.org/indexnow' }
  ];

  for (const ep of endpoints) {
    try {
      const response = await fetch(ep.url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({ host, key, keyLocation, urlList: urls })
      });
      console.log(`[IndexNow -> ${ep.name}] 提交 ${urls.length} 个 URL，HTTP ${response.status}`);
    } catch (err) {
      console.error(`[IndexNow -> ${ep.name}] 错误:`, err.message);
    }
  }
}

main().catch((error) => {
  console.error(error.message || error);
  process.exitCode = 1;
});
