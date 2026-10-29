---
name: chinese-seo-audit
description: >-
  Standard procedures for Chinese SEO optimization, Bing/Google search crawler indexing, structured data schemas, and internal link graph integrity.
  Use whenever modifying pages, creating articles, reviewing meta tags, or optimizing crawl performance.
---

# 中文 SEO 深度优化与搜索引擎抓取规范 (Chinese SEO Audit)

本技能确保本站每一篇文章和页面均满足搜索引擎（特别针对于 **Bing 搜索、AI Copilot 引用与各大搜索引擎 Webmaster**）的最佳抓取标准，最大化收录率与富摘要展示点击率。

---

## 核心规范一：TDK 与 HTML 语义规范

1. **Title 标签（标题）**：
   - 长度控制在 **24 ~ 32 个汉字**（避免在 SERP 搜索结果页被截断）；
   - 结构模式：`核心长尾词 + 实战利益点 ｜ biaopiao`；
   - 必须包含用户搜索高频词（如“保姆级教程”、“防封封号原因”、“实测报告”）。
2. **Meta Description 标签（描述）**：
   - 长度控制在 **80 ~ 130 个汉字**；
   - 包含文章核心解决的问题、覆盖工具名单以及具体的避坑关键词，提升在 Bing 摘要中的点击吸引力（CTR）。
3. **Headings 层次结构**：
   - 页面必须有且仅有 1 个 `<h1>`（即文章主标题）；
   - 章节标题严格使用 `<h2>`，子分段使用 `<h3>`，杜绝跳级标题。
4. **Canonical 标签与 Robots**：
   - 每一页必须包含绝对路径 `<link rel="canonical" href="https://baipiaojc.com/posts/[slug]" />`；
   - `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">`。

---

## 核心规范二：网状内链互锁（No Orphan Pages）

1. **零孤岛页面原则**：
   - 任何文章均不得孤立存在；
   - 每一篇文章底部必须通过 `relatedSlugs` 自动推荐 **3 篇强相关上下文内链文章**；
   - 形成网状拓扑互锁，引导爬虫深层抓取，最大化 PageRank 权重传递。
2. **严禁外链虚假无属性**：
   - 所有跳往第三方工具或官网的链接（如 OpenAI 状态页、BrowserLeaks、Speedtest 等），必须强制附加 `target="_blank" rel="noopener noreferrer"`。

---

## 核心规范三：Schema.org 结构化数据三件套

每个文章页必须输出完整的 JSON-LD 结构化数据，确保 Bing 与 Google 能够呈现富媒体卡片：
1. **`BlogPosting`**：包含 `headline`, `description`, `image`, `datePublished`, `dateModified`, `author`, `publisher`；
2. **`BreadcrumbList`**：首页 → 分类专栏 → 文章页，支持面包屑导航路径；
3. **`FAQPage`**：自动抓取本篇 `faq` 列表，输出结构化问答，极大增加搜索引擎前排折叠卡片展示面积。

---

## 核心规范四：LLMs 索引文件自动同步

每当文章增删或标题修改时：
- 自动同步更新 `public/llms.txt`（轻量元数据与摘要）；
- 自动同步更新 `public/llms-full.txt`（全文结构化索引），为现代化 AI 搜索引擎（如 Perplexity, ChatGPT Search, Bing Copilot）提供第一手纯净上下文。
