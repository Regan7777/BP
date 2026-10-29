---
name: dev-workflow-discipline
description: >-
  Enforces development rhythm, communication-first alignment, and build discipline for the blog.
  Mandatory whenever modifying UI designs, creating visual assets, refactoring code, or executing builds.
---

# 博客开发纪律与沟通先行规范 (Dev Workflow Discipline)

本技能定义了在本博客项目开发过程中必须恪守的**最高工程纪律与沟通原则**。所有设计决策、代码修改与打包流程必须严格遵循本规范。

---

## 核心铁律一：沟通先行与样板对齐原则（Consult & Align First）

1. **涉及视觉、审美、配图、排版重大调整时**：
   - **严禁擅自直接批量生成或全盘修改代码**；
   - 必须先制作 **1 张高质量标杆样板** 或 **清晰的方案原型**；
   - 主动向用户汇报设计思路、亮点与对比维度；
   - **必须明确等待用户回复“确认”、“可以开始”或给出具体反馈后**，方可启动批量执行。
2. **拒绝盲目假设**：
   - 当用户提出“高级点”、“不够好看”等主观审美要求时，先拆解背后的视觉逻辑（如网站调色板、现有卡片互动细节），提出 2~3 个具体方向供用户推敲，而非盲目抓瞎。

---

## 核心铁律二：开发态与构建态严格解耦（Build Timing Discipline）

1. **开发调试期间**：
   - 本项目依托后台运行的 `npm run dev` 实时热更新（HMR）；
   - 所有在 `src/` 或 `public/` 下的改动均会在数百毫秒内生效；
   - **绝对禁止在局部小改动、单张配图生成或文字微调后随手执行 `npm run build`**；
   - 频繁 build 会严重浪费系统资源、拖慢响应节奏，并干扰用户的审查体验。
2. **仅在以下唯二时机执行 `npm run build`**：
   - 整个大型任务或全站所有文章的批量改动**全部完成，进行最终全栈验收时**；
   - 用户明确发出指令：“进行全站编译”、“执行 build 检查”、“上线前打包”。

---

## 核心铁律三：Windows 环境脚本与命令安全（Windows Execution Safety）

1. 在 Windows PowerShell 环境下：
   - 严禁在 `run_command` 的 `CommandLine` 中直接拼接含有多行双引号、反引号、模板字符串 `${var}` 或未转义 `? :` 的 Node.js 行内脚本（`-e "..."`）；
   - 凡涉及文件读写、JSON 修改、图片处理，**一律将逻辑写入 `.cjs` 独立脚本文件后再通过 `node path/to/script.cjs` 执行**。
