import type { APIRoute } from 'astro';
import { articles, categories, siteConfig } from '../data/site';

export const GET: APIRoute = () => {
  const categoryBlocks = categories.map((category) => {
    const rows = articles
      .filter((article) => article.categorySlug === category.slug)
      .map((article) => `- [${article.title}](${siteConfig.url}/posts/${article.slug})`)
      .join('\n');

    return `## ${category.name}\n${rows}`;
  });

  const body = [
    `# ${siteConfig.name} (${siteConfig.domain})`,
    `> ${siteConfig.description}`,
    '',
    ...categoryBlocks.flatMap((block) => [block, '']),
    '## 站点入口',
    `- [首页](${siteConfig.url}/)`,
    `- [文章归档](${siteConfig.url}/archive)`,
    `- [关于本站](${siteConfig.url}/about)`,
    `- [XML Sitemap](${siteConfig.url}/sitemap.xml)`
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
