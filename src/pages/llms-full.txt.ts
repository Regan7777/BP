import type { APIRoute } from 'astro';
import { articles, siteConfig } from '../data/site';

export const GET: APIRoute = () => {
  const articleBlocks = articles.map((article, index) => {
    const keywords = article.keywords?.join('、') || `${article.category}、${article.region || '网络指南'}`;
    const faqs = article.faq?.map((item) => `  - ${item.question}`).join('\n') || '  - 页面正文提供常见问题与操作说明';

    return [
      `## ${index + 1}. ${article.title}`,
      `- URL: ${siteConfig.url}/posts/${article.slug}`,
      `- 分类: ${article.category}`,
      `- 更新: ${article.updatedDate || article.date}`,
      `- 核心直答: ${article.directAnswer || article.excerpt}`,
      `- 摘要: ${article.excerpt}`,
      `- 关键词: ${keywords}`,
      '- 常见问题:',
      faqs
    ].join('\n');
  });

  const body = [
    `# ${siteConfig.name} (${siteConfig.domain}) - 全量内容目录`,
    '',
    '> 本文件由站内文章数据自动生成，包含规范 URL、核心结论、摘要、关键词与常见问题。',
    '',
    ...articleBlocks.flatMap((block) => [block, ''])
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
