import type { APIRoute } from 'astro';
import { articles, categories, siteConfig } from '../data/site';

export const GET: APIRoute = async () => {
  const baseUrl = siteConfig.url;
  const now = new Date().toISOString().split('T')[0];

  const staticRoutes = [
    { url: `${baseUrl}/`, priority: '1.0', changefreq: 'daily', lastmod: now },
    { url: `${baseUrl}/category/recommendations`, priority: '0.9', changefreq: 'daily', lastmod: now },
    { url: `${baseUrl}/category/reviews`, priority: '0.9', changefreq: 'daily', lastmod: now },
    { url: `${baseUrl}/category/tutorials`, priority: '0.9', changefreq: 'daily', lastmod: now },
    { url: `${baseUrl}/tools`, priority: '0.8', changefreq: 'weekly', lastmod: now },
    { url: `${baseUrl}/archive`, priority: '0.7', changefreq: 'weekly', lastmod: now },
    { url: `${baseUrl}/about`, priority: '0.6', changefreq: 'monthly', lastmod: now }
  ];

  const categoryRoutes = categories.map((cat) => ({
    url: `${baseUrl}/category/${cat.slug}`,
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: now
  }));

  const articleRoutes = articles.map((art) => ({
    url: `${baseUrl}/posts/${art.slug}`,
    priority: art.trending || art.featured ? '0.9' : '0.8',
    changefreq: 'weekly',
    lastmod: art.updatedDate || now
  }));

  // Deduplicate URLs
  const allRoutes = [...staticRoutes, ...categoryRoutes, ...articleRoutes];
  const uniqueRoutesMap = new Map<string, typeof staticRoutes[0]>();
  for (const route of allRoutes) {
    if (!uniqueRoutesMap.has(route.url)) {
      uniqueRoutesMap.set(route.url, route);
    }
  }

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Array.from(uniqueRoutesMap.values())
  .map(
    (item) => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
