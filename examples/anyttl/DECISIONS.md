# AnyTTL 控制台 · 密钥与用量

## 语境

- 产品：AnyTTL，一个自建 API 网关，团队用它中转模型与第三方接口，管密钥与限额。
- 用户：3 到 10 人小团队的开发者，兼管额度的负责人。
- 主任务：确认本月总额度还够不够，把某个接近阈值的密钥限额调高。
- 硬事实：价格与结算口径 `[待确认]`，页面不写金额。

## 主场景与附加场景

| 场景 | 命中理由 |
| --- | --- |
| 主 s12 后台全流程 | 主体是密钥列表与用量数字，要按状态扫、按请求量排序、按行调整 |
| 附加 s9 表单与流程 | 调整限额是行内表单提交，有校验与错误恢复 |

不点 s10（图表）：页面只用数字与一条额度进度条，不画图表，避免把图表规范套到不存在的图上。

## 数值文章

数值文章：Primer（GitHub），选型行 `project-primer`。理由：产品是开发者工具，主体是密钥表与用量数字，Primer 这一行覆盖表格、令牌、表单与语义色。

| 用途 | 值 | 出处 |
| --- | --- | --- |
| 页面底色 | #ffffff | content/tokens/primer.style--color-themes.md:20 |
| 分区底色 | #f6f8fa | content/tokens/primer.style--color-themes.md:21 |
| 正文色 | #1f2328 | content/tokens/primer.style--color-themes.md:24 |
| 次文字 | #59636e | content/tokens/primer.style--color-themes.md:25 |
| 链接与进度 | #0969da | content/tokens/primer.style--color-themes.md:28 |
| 危险与阈值线 | #d1242f | content/tokens/primer.style--color-themes.md:29 |
| 成功 | #1a7f37 | content/tokens/primer.style--color-themes.md:30 |
| 分隔线 | #d1d9e0 | content/tokens/primer.style--color-themes.md:32 |
| 主按钮底 | #0969da | content/tokens/primer.style--color-themes.md:37 |
| 断点 | 320px 544px 768px 1012px 1280px 1400px | content/layout/primer.style--layout.md:95-100 |
| 栅格 gutter | 16px 24px | content/layout/primer.style--layout.md:110-114 |
| 间距档 | 8px 16px 24px 32px 48px | content/layout/uisdc.com--code-for-design-of-spacing.md:48 |

间距走缺口回源：Primer 行只有 gutter 16 与 24，没有 spacing scale，按 GAP_RULES「间距」条整套取 8px 基数，不混档。

## 派生与缺口

- 字号 derived：14 / 16 / 20 / 24 / 32，行高各加 8。Primer 的 `typography` 篇只有 rem 与 4px 网格约束（content/type/primer.style--typography.md:29），没有 px 档位，本行里也找不到了量的字号值，故按 4px 网格派生并成套使用。
- 控件边界 derived：输入框与按钮用 #59636e（fgColor-muted）而不是 borderColor-default。原因是 #d1d9e0 对白只有 1.43:1，做控件边界达不到非文本 3:1；文字色当边界可到 5.9:1。
- 缺口：暗色模式未做，Primer 的 color-themes 有 dark 列（同文件右侧列），本批没取。

## 版式件（Hallmark）

- macro：Data-Dense Dashboard（筛选条 → KPI 行 → 主内容），对得上「先看总量再逐条调」的动作。
- nav：Global Nav（顶部品牌 + 三项，当前位置用 aria-current）。
- footer：Site Footer（主体、联系、声明、导航四件）。
- `.hallmark/log.json` 最近三条为 Narrative Workflow / Long Document / Specimen，本件与之都不同，避重成立。

## 灰模三张与淘汰

- A 筛选 → KPI → 表 → 行内展开：480 宽下列多，但两件事（查用量、调限额）都在一屏，选它。
- B 左列表 + 右详情：480 宽下左右分栏把详情压到 300px 以内，且列表只有名字，扫不了用量。
- C 卡片流：读用量最舒服，但没有调整入口，第二件事做不到。

A 的三处硬伤在落稿时修掉：窄屏表格改逐行键值堆叠、调整面板插在被调整行的下一行、编辑值以当前限额为初值并实时算余量。

## 约束表（点 → 约束 → 落点）

| 点 | 约束与出处 | 落点 |
| --- | --- | --- |
| flow-backoffice | 表头与数据行同高（content/components/carbondesignsystem.com--data-table-usage.md:82-83） | th 与 td 同为 12px 16px 内距 |
| 同上 | 表格放主内容区、给足宽度（:102-105） | main 最大 1080，表格外层仅窄屏横向滚动 |
| 同上 | 列标题 1 到 2 词、带单位（:161，content/components/polaris--table.md:475） | 「本月请求」「限额/万次」 |
| 同上 | 数字右对齐（content/components/polaris.shopify.com--index-table.md:74） | `.num` |
| 同上 | 默认一列已排序（content/components/carbondesignsystem.com--data-table-usage.md:293） | 默认按本月请求降序，并有排序控件 |
| 同上 | 行操作放最后一列、无表头（content/components/primer--data-table.md:271-273） | 操作列空表头 |
| 同上 | 多操作收进菜单（:279） | 停用只出现在批量条，行内只留一个主操作 |
| 同上 | 空单元格留白，不放占位符（:180-184） | 无数据处留空 |
| 同上 | 列数尽量少、超 50 行才分页（content/components/polaris--table.md:362-364） | 6 列（含选择与操作），4 行不分页 |
| 同上 | 窄屏转列表（:20，:361） | 768 以下逐行键值堆叠 |
| layouts-dashboard-density | 区块顺序：筛选 → KPI → 主内容（content/layouts/layout--dashboard-data-dense-dashboard.md:23-27） | 三段的顺序 |
| 同上 | 强调色与圆角按项目基准取（:31-32） | 不用它的 #22C55E 与 8px 圆角，圆角取 0 |
| 同上 | 筛选「立即生效」用于反复改条件（content/patterns/tdesign.tencent.com--backoffice-tasks.md:38） | 搜索与状态下拉实时过滤 |
| 同上 | 批量操作「选择后触发」（:86） | 勾选后浮出批量条 |
| flow-form / components-form / a11y-form-structure | 原生控件、label 常显、错误贴字段、给修正建议（content/a11y/web.dev--a11y-forms.md:48-51,110-113,164-167,179-184） | 调整表单用 number 输入 + 行内校验文案 |
| 同上 | 只能用固定值时用下拉（content/components/carbondesignsystem.com--text-input-usage.md:37） | 状态与排序用 select |
| 同上 | 相关字段用 fieldset 分组（content/a11y/web.dev--a11y-forms.md:128-130） | 调整表单包成 form + label |
| 同上 | 用 * 标必填要在顶部说明（content/components/primer--form-control.md:34） | 本页无必填标记，全部字段都必填，不标星 |
| 同上 | 表头带单位、单元格不重复单位（content/components/polaris--table.md:475,491） | 单位在表头 |

不适用：`content/components/carbondesignsystem.com--search-usage.md` 与 `content/components/developer.apple.com--search-fields.md` 属搜索场景（scope bar、token），本页搜索只做本地过滤。

## 交互与状态

逐个真点并记前后状态：

| 操作 | 前 | 后 |
| --- | --- | --- |
| 搜索 `worker` | 4 行 | 1 行，状态行显示「显示 1 / 4 个密钥」 |
| 状态选「接近阈值」 | 4 行 | 1 行（prod-worker 83%） |
| 排序「按占用比例」 | prod-web 在前 | prod-worker 83% 排首 |
| 勾选 2 行 | 批量条隐藏 | 批量条出现，文案「已选 2 个」 |
| 点 prod-worker「调整」 | 无表单 | 该行下方出现表单，初值 40 |
| 输入 60 | 提示 83%、余量 68,120 次 | 提示 55%、余量 268,120 次 |
| 保存 60 | 限额 40、接近阈值 83% | 限额 60、状态正常，状态行播报已改 |
| 点 ci-build「启用」 | 已停用、灰字 | 正常，按钮改「调整」 |
| 空值保存 | 表单在 | 不保存，播报「限额要大于 0」并聚焦输入 |

## 未做

- 暗色模式（Primer 的 dark 列未取）。
- 日志页与设置页只放导航，不做内容。
- 批量停用只出按钮，不接真实删除确认。
