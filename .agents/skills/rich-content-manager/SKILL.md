---
name: rich-content-manager
description: >-
  Procedures for managing, updating, and validating large-scale structured blog content across site.ts and richDetails.json.
  Use whenever adding new articles, editing article sections, updating FAQs, modifying table comparisons, or maintaining rich metadata.
---

# 结构化长篇博文与数据维护规范 (Rich Content Manager)

本站采用“双层数据模型”：基础文章索引在 `src/data/site.ts`，超大体量的深度评测章节、FAQ 错误排查字典、红黑榜与外部工具推荐存储在 `src/data/richDetails.json`。本技能保证对这套体系的修改**安全、无损、结构严谨**。

---

## 核心规范一：JSON 资产安全更新与转义原则

1. **大文件防损坏**：
   - `richDetails.json` 超过 300KB，包含上百个复杂的转义字符串与 HTML 片段；
   - 严禁通过整文件粗暴重写或正则简单匹配替换；
   - 推荐编写专用的 `.cjs` 脚本，通过 `JSON.parse` 导入内存，精准修改对应 article slug 下的对象，再通过 `JSON.stringify(data, null, 2)` 写回。
2. **HTML 转义安全**：
   - 段落内嵌入的外部工具卡片（`.external-tool-card`）、品牌展示网格（`.brand-showcase-grid`）、关键词高光（`.keyword-highlight`）必须保证标签对称闭合；
   - 双引号在 JSON 字符串内必须正确转义（`\"`）。

---

## 核心规范二：文章数据结构完备性检验清单

每篇核心长文在 `richDetails.json` 中必须具备以下 5 大模块：
1. **`directAnswer`（核心直答）**：120~180 字，浓缩全篇核心结论，直接针对搜索引擎 AI 生成式摘要优化；
2. **`keywords`（精准关键词列表）**：5~8 个高意图搜索词；
3. **`prosAndCons`（红黑榜决策矩阵）**：
   - `pros`: 3~4 条核心优势；
   - `cons`: 2~3 条新手高危误区或选购注意；
4. **`sections`（结构化段落）**：
   - 包含明确的编号、章节标题、引言导读；
   - 重点章节必须配有维度清晰的对比表格（`table: { headers, rows }`）；
5. **`faq`（高频疑问与排障手册）**：
   - 至少收录 4 个针对真实使用场景的痛点疑问；
   - 优先配带报错代码（如 `1020`、`disabled`）、修复类型（`terminal` / `gui`）与一键可复制修复指令。
