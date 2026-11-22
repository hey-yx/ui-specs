# AnyTTL 控制台 · 密钥与用量

- frame: batch=2026-11-22-a; nav=N8; footer=Ft2; base=#ffffff

## 语境

- 产品：AnyTTL，团队自建的 API 网关，前端请求经它中转，按密钥计量与限流。
- 用户：3 到 10 人小团队的开发者，兼管额度的负责人；熟悉密钥前缀、HTTP 状态码与限流语义。
- 主任务：确认本月总额度还够不够，找出接近阈值的那把密钥，把它调到不超阈值，改完立刻生效。
- 硬事实：价格与结算口径 `[待确认]`，页面不出现金额，以常规行内文字标 `[待确认]`。

## 选型与主场景

- 选型行：`project-primer`（GitHub Primer）。理由：产品是开发者 API 网关控制台，主体是密钥清单、请求量、限额与行内配置；Primer 的 `PageHeader + UnderlineNav + 单行 hairline 指标带 + 单层 Box/DataTable`（32px 原生控件密度）与开发者控制台高度同构。
- 主场景：`s12`（后台、列表或数据面板）：主体是密钥清单与用量数字，需要按状态筛选、按本月请求排序与批量停用。
- 附加场景：`s9`（表单与提交，行内调额表单校验与错误恢复）、`s8`（四态完整造出）、`s5`（自建控件状态与层级）、`s7`（多分区导航占位）、`s6`（状态图标与文字配对）、`s17`（评审底线）。不点 `s10`（图表）：页面只用数字与一条单行进度条，不画复杂图表。

## 方向与必读点

- 语气：**技术（technical）**，直接呈现网关路径、密钥前缀 `sk-`、HTTP 429 与 `retry_after` 语义，不加营销修饰。
- 腔调锚取舍：
  1. `content/brands/designmd--vercel.md:45`：借其纯白底与高对比文字层级、等宽代码标签与细线分割的克制控制台感；不取其大面积 mesh 渐变。
  2. `content/brands/designmd--sentry.md`：借其面向调试者的直接错误码提示（`upstream_timeout`）；淘汰其暗紫背景与贴纸插画，因为中文团队日常调额看板以高密度白底扫描更省力。
- 首屏 3 个可见手法落点：
  1. 改变主数据形状：把三项总额度指标收成单行 1px hairline 齐平指标带，且「超阈值密钥 1」直接可点击筛选清单。
  2. 承担产品动作：密钥行内置「调整限额」行内展开表单，实时算新占用率与余量并即时生效。
  3. 终端面包屑顶栏 + UnderlineNav：`$ AnyTTL / prod-gateway / keys` 确立工具归属，二级导航占位「请求日志」「网关设置」。

| 点 id | 约束一句 | 落点件位 |
| --- | --- | --- |
| `flow-layout-basics` | 按断点调整容器内边距，窄屏单列无横向溢出 | `.main-shell` 与 `@media (max-width: 767px)` |
| `howto-visual-hierarchy` | 标题、指标巨数、表正文三级字阶拉开 | `.page-title` / `.kpi-value` / `.key-table` |
| `howto-ui-polish` | 对齐 1px hairline，消除卡片套卡片 | `.kpi-strip` 与 `.table-box` |
| `flow-values` | 色值、间距、动效全进 `:root` token，不写裸值 | `:root` 声明块 |
| `type-hierarchy-recipe` | 等宽前缀与 `tabular-nums` 数字对齐 | `.key-prefix` 与 `.num-cell` |
| `layout-spacing-values` | 整套取 8px 基数（4/8/12/16/24/32） | `--sp-1` 到 `--sp-8` |
| `flow-a11y` | 语义化地标、跳过导航、`aria-live` 播报 | `.skip-link` 与 `#live-banner` |
| `a11y-wcag-checklist` | 桌面可点目标 >= 24px，窄屏 >= 44px，可见焦点环 | `:focus-visible` 与响应式媒体查询 |
| `a11y-contrast-threshold` | 正文 >= 4.5:1，控件边框 `#59636e` 达 5.9:1 | `--fg-default` / `--border-control` |
| `flow-copywriting` | 动词准确、报错说明原因与出路 | 按钮文案与 `#error-panel` |
| `markdown-cn-copywriting` | 中英文混排留白、标点规范、无自检腔 | 全页中文文案 |
| `flow-states` | 加载、空态、读取失败、保存成功四态完整可切 | `#view-state-select` 与各状态面板 |
| `patterns-feedback-criteria` | 保存后立刻反馈，不阻塞用户 | `#live-banner` 与 `.js-save-edit` |
| `flow-form` | 行内校验正整数范围并就地提示 | `.js-edit-form` 与 `.js-limit-error` |
| `components-form` | 显式 `<label>` 绑定输入框 | `label[for="limit-input-..."]` |
| `a11y-form-structure` | 表单禁止静默失败，提交中 `aria-busy` | `.js-edit-form` 提交处理 |
| `flow-components` | 控件保持 Primer 32px 密度与 `:active` 反馈 | `.btn` 与 `.input-control` |
| `components-button-hierarchy` | 主操作绿底、危险操作红底、次操作灰底区分 | `.btn-primary` / `.btn-danger` / `.btn` |
| `flow-navigation` | 当前页标 `aria-current="page"`，未开放项 `aria-disabled` | `.subnav` |
| `patterns-global-nav` | 顶栏与二级导航分层清楚，不叠多排胶囊 | `.topbar` + `.subnav` |
| `flow-backoffice` | 1280×800 首屏直出前 7 行，勾选后才出批量栏 | `#key-table` 与 `#batch-bar` |
| `layouts-dashboard-density` | 单层 Box 表格，窄屏转键值堆叠 | `.table-box` 与 `< 768px` 规则 |
| `flow-icons` | 状态图标与文字并排，不单独靠颜色 | `.status-badge` 内嵌 SVG |
| `icons-unity` | 统一使用 14px/24px 线性/实心 Octicon 风格 | `.status-badge svg` 与 `.state-panel svg` |
| `flow-review` | 交付前跑完 `sloplint`、四档实测与交互复核 | 见 `FINDINGS.md` |
| `patterns-review-checklist` | 逐条核对无残留 FAIL 与遗漏状态 | 见 `FINDINGS.md` |

## 数值文章

数值文章：Primer（GitHub），选型行 `project-primer`。主源包含 `content/tokens/primer.style--color-themes.md`、`content/layout/primer.style--layout.md`、`content/type/primer.style--typography.md`。

| 用途 | 值 | 出处 |
| --- | --- | --- |
| 页面底色 | #ffffff | content/tokens/primer.style--color-themes.md:20 |
| 分区与表头底色 | #f6f8fa | content/tokens/primer.style--color-themes.md:21 |
| 顶栏强调底色 | #25292e | content/tokens/primer.style--color-themes.md:23 |
| 正文色 | #1f2328 | content/tokens/primer.style--color-themes.md:24 |
| 次文字与控件边界 | #59636e | content/tokens/primer.style--color-themes.md:25 |
| 深色栏正文字色 | #f0f6fc | content/tokens/primer.style--color-themes.md:24 |
| 深色栏次文字色 | #9198a1 | content/tokens/primer.style--color-themes.md:25 |
| 深色栏提示符高亮 | #4493f8 | content/tokens/primer.style--color-themes.md:28 |
| 链接与进度条色 | #0969da | content/tokens/primer.style--color-themes.md:28 |
| 危险与阈值告警色 | #d1242f | content/tokens/primer.style--color-themes.md:29 |
| 危险主按钮底色 | #cf222e | content/tokens/primer.style--color-themes.md:38 |
| 成功语义色 | #1a7f37 | content/tokens/primer.style--color-themes.md:30 |
| 主操作按钮底色 | #1f883d | content/tokens/primer.style--color-themes.md:45 |
| 主操作按钮悬停色 | #1c8139 | content/tokens/primer.style--color-themes.md:46 |
| 1px 分隔线色 | #d1d9e0 | content/tokens/primer.style--color-themes.md:32 |
| 断点 | 320px 544px 768px 1012px 1280px 1400px | content/layout/primer.style--layout.md:95-100 |
| 间距基数 | 8px 16px 24px 32px 48px | content/layout/uisdc.com--code-for-design-of-spacing.md:48 |
| 微反馈与面板时长 | 100ms 200ms | content/motion/nngroup.com--animation-duration.md:80-82 |
| 缓动函数 | ease-out | content/standards/w3c--css-easing-1.md:44 |
| 触控最小目标（桌面） | 24 by 24 CSS pixels | content/a11y/w3c--wcag-2.2.md:907 |
| 触控最小目标（移动） | 44 by 44 CSS pixels | content/a11y/w3c--wcag-2.2.md:871 |

## 派生与缺口

- 字号 `derived`：12 / 14 / 16 / 20 / 24px，行高各加 8px（20 / 22 / 24 / 28 / 32px）。Primer 原文 `content/type/primer.style--typography.md:29` 仅定义 4px 网格与 `rem` 约束，未列 px 档位，故按 4px 网格成套派生。
- 控件尺寸与圆角 `derived`：桌面控件高度 32px（贴合 Primer 32px 原生密度），圆角 4px / 6px 两档，与 `--sp-1`/`--sp-2` 对齐。
- 浅色语义底与悬停态 `derived`：`--bg-success-subtle`（#dafbe1）、`--bg-danger-subtle`（#ffebe9）、`--bg-track`（#eaeef2）、`--btn-default-hover`（#eaeef2）、`--btn-danger-hover`（#a40e26），用于浅色状态标签与按钮悬停反馈，均已核对与对应前景文字的对比度 >= 4.5:1。
- 暗色模式缺口：本批仅实现浅色控制台，`content/tokens/primer.style--color-themes.md:23-28` 右侧 dark 列仅取了顶栏 `#25292e` 上的前景色（`#f0f6fc`、`#9198a1`、`#4493f8`）。

## 版式件与灰模三张

- `macrostructure`：`Workbench`（应用页首选，打开即操作区，避开 `.hallmark/log.json` 最近 3 条 `Ecosystem Index` / `Catalogue` / `Index-First`）。
- `nav`：`N8`（仿命令行提示符顶栏 `$ AnyTTL / prod-gateway / keys` 配 Primer `UnderlineNav`）。
- `footer`：`Ft2`（1px 横线下一行版权、支持邮箱 `support@anyttl.dev`、口径声明与导航链接，DOM 骨架全库独立）。
- 灰模三张（480px 宽，无颜色）：
  - A（选定）：N8 顶栏 + UnderlineNav → PageHeader → 单行 3 格 hairline 指标带 → 筛选工具条 → 单层 Box 密钥表（行内展开调额）。理由：1280×800 首屏同时露出总额度、超阈值告警与全部 7 把密钥，查用量与调限额一屏闭环。
  - B（淘汰）：左栏密钥列表 + 右栏详情表单。480px 窄屏下左右分栏把表单压窄到 300px 以内，且列表扫不了多列数字。
  - C（淘汰）：三列 KPI 大卡片 + 密钥卡片流。卡片套卡片占满首屏高度，无法纵向快速对比请求量与限额。
