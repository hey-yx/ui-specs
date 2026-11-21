# GatewayDeck · 取值记录

- 需求：`briefs/gatewaydeck.md`（多账号网关控制台：账号、额度、签到、路由、失败重试）
- 基准规范：**Carbon**（IBM）
- 版式：**Workbench · N12 / Ft2**（Hallmark 三件，版式不进数值记录）
- 强调色：**`#00668e`**（`content/color/tdesign.tencent.com--color.md:186`，Carbon 色值缺口按 GAP_RULES 整套回源 TDesign）
- 交付：`examples/gatewaydeck/index.html`（单文件，CSS 与 JS 内联，零外部请求）

---

## 1. 设计前提

1. 使用者是 simultaneous 管多个上游账号的人，打开页面先要知道「现在有没有事」，再决定点哪个账号。首屏顺序是状态横幅、KPI、趋势、账号表，不能先放设置表单。
2. 控制台不是报表：每个数字都要能追到一张表或一次操作。KPI 的请求量与失败率来自同一组 24 小时数据，账号表的额度与签到能直接操作。
3. 演示数据必须自洽：12 个账号的请求量合计 84,216，失败 2,358，失败率 2.8%；额度平均 37%，最低 7%。改一个范围，KPI 与图表一起换，不留下两套数。
4. 危险动作要能撤销：签到、路由开关、添加账号都给撤销入口；重试失败保留失败原因，不把错误吞掉。
5. 文案用运维口吻：说账号、端点、状态码、额度、重试条件。不写「智能」「一站式」「赋能」这类词。

## 2. 场景命中

按指南「场景必选」表判：

| 场景 | 是否命中 | 处置 |
| --- | --- | --- |
| S1 页面基本功 | 必过 | 走完 |
| S2 数值层 | 必过 | 走完，逐条带行号 |
| S17 评审与体验底线 | 必过 | 逐条走查，见 FINDINGS |
| S3 无障碍 | 命中（对比度、焦点、键盘、弹层、减弱动效） | 走完 |
| S4 文案 | 命中（中文运维文案与错误提示） | 走完 |
| S5 组件 | 命中（按钮、输入、选择、开关、表格、抽屉、对话框、Toast） | 走完 |
| S7 导航 | 命中（顶栏、锚点、移动端菜单） | 走完 |
| S8 状态与反馈 | 命中（空、加载、错误、成功、撤销） | 逐态造出来看过 |
| S9 表单与流程 | 命中（添加账号校验、筛选、排序） | 走完 |
| S10 图表 | 命中（请求量面积图、失败率折线图） | 走完，几何参数标 derived |
| S12 后台与数据面板 | 命中（KPI、表格、筛选、排序、批量状态） | 走完 |
| S6 图标 | 命中（内联 SVG 图标） | 走完 |
| S11 落地页 | 未命中 | 跳过 |

## 3. 设计点与读过的原文

按 `points_by_task` 与 `select` 判据选点，逐点读 `articles` 原文：

- 版式与响应式：`layout-responsive-adaptation`、`layout-intrinsic-patterns`、`layout-sidebar`
- 方法层：`howto-ui-color-framework`、`howto-visual-hierarchy`
- 色彩与字阶：`color-token-tiers`、`type-hierarchy-recipe`
- 动效：`motion-duration`、`motion-easing`、`motion-reduced`、`motion-overlays`、`motion-loading`、`motion-feedback`
- 无障碍：`a11y-contrast-threshold`、`a11y-focus-visibility`、`a11y-modal-focus-trap`、`a11y-form-structure`
- 组件与反馈：`components-button-hierarchy`、`patterns-feedback-criteria`
- 图表：`dataviz-chart-anatomy`、`dataviz-axes-labels`
- 文案与评审：`markdown-cn-copywriting`、`patterns-review-checklist`

## 4. 口径分工

- 版式、区块顺序、反 slop 骨架归 Hallmark：Workbench，首屏是状态与账号表，不做 hero 大标语。
- 颜色、字号、间距、动效、断点归本库 Carbon 原文；Carbon 缺的色值与字阶按 GAP_RULES 回源 TDesign，逐条标 derived。
- 两套不互相加码：Hallmark 不覆盖 Carbon 的数值，Carbon 不决定版式。

## 5. 色彩

Carbon 色值篇只给 `#ffffff`、`#f4f4f4`、`#262626`、`#161616` 四个背景值（`content/color/carbondesignsystem.com--color.md:128-131`），没有完整语义色板。按 GAP_RULES「色值」条整套回源 TDesign，不混用 Carbon 单值与 TDesign 半套。

| 用途 | 值 | 出处 | 实测对比度 |
| --- | --- | --- | --- |
| 页面底 | `#ffffff` | `content/color/tdesign.tencent.com--color.md:93` | 正文压它 17.76:1 |
| 正文 | `#181818` | `content/color/tdesign.tencent.com--color.md:108` | 白底 **17.76:1** |
| 次要文字 | `#5e5e5e` | `content/color/tdesign.tencent.com--color.md:103` | 白底 **6.48:1**，灰底 5.84:1 |
| 禁用 | `#8b8b8b` | `content/color/tdesign.tencent.com--color.md:101` | 白底 3.41:1，仅禁用 |
| 强调 / 主按钮 | `#00668e` | `content/color/tdesign.tencent.com--color.md:186` | 白字 **6.38:1** |
| 强调悬停 | `#004e6d` | `content/color/tdesign.tencent.com--color.md:187` | 白字 **9.09:1** |
| 强调浅底 | `#e8f5ff` | `content/color/tdesign.tencent.com--color.md:180` | 强调字 **5.75:1** |
| 成功 | `#006c45` | `content/color/tdesign.tencent.com--color.md:84` | 浅底 **5.88:1** |
| 成功浅底 | `#e3f9e9` | `content/color/tdesign.tencent.com--color.md:78` | 不承载正文 |
| 注意 / 延迟 | `#954500` | `content/color/tdesign.tencent.com--color.md:72` | 浅底 **6.08:1** |
| 注意浅底 | `#fff1e9` | `content/color/tdesign.tencent.com--color.md:66` | 不承载正文 |
| 错误 / 失败 | `#ad352f` | `content/color/tdesign.tencent.com--color.md:60` | 浅底 **5.69:1** |
| 错误浅底 | `#fff0ed` | `content/color/tdesign.tencent.com--color.md:54` | 不承载正文 |
| 页面灰 | `#f3f3f3` | `content/color/tdesign.tencent.com--color.md:95` | 不承载正文 |
| 分隔线 | `#dddddd` | `content/color/tdesign.tencent.com--color.md:98` | 1.36:1，仅装饰 |
| 控件边界 | `#777777` | `content/color/tdesign.tencent.com--color.md:102` | 白底 **4.48:1** |
| 灰色分隔 | `#e8e8e8` | `content/color/tdesign.tencent.com--color.md:97` | 装饰 |

强调色挑 TDesign Cyan7，不沿用 Carbon 默认蓝：这是监控台，蓝会被读成「链接」，深青同时承担主按钮、当前导航和图表面积，颜色少而稳；Cyan 也在 TDesign 同族里有完整的浅底与深档，能通过对比度复算。

## 6. 字阶与字体

| token | 字号 / 行高 | 出处 |
| --- | --- | --- |
| xs | 12 / 20 | `content/type/tdesign.tencent.com--fonts.md:53,69` |
| sm | 14 / 22 | `content/type/tdesign.tencent.com--fonts.md:54,69` |
| md | 16 / 24 | `content/type/tdesign.tencent.com--fonts.md:55,69` |
| lg | 20 / 28 | `content/type/tdesign.tencent.com--fonts.md:56,69` |
| xl | 24 / 32 | `content/type/tdesign.tencent.com--fonts.md:57,69` |
| 2xl | 36 / 44 | `content/type/tdesign.tencent.com--fonts.md:59,69` |

- 字重只用 400 与 600：`content/type/tdesign.tencent.com--fonts.md:87`。
- Carbon 只给字阶公式（`content/type/carbondesignsystem.com--typography.md:81`），没有可枚举的字阶表；按 GAP_RULES「字阶」条回源 TDesign 六档，标 derived。
- 字体栈用 Carbon 原文的 `'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif`（`content/type/carbondesignsystem.com--typography.md:61`），追加中文回退字体标 derived；等宽栈取原文（`:73`）。

## 7. 间距、尺寸与断点

| 用途 | 值 | 出处 |
| --- | --- | --- |
| 间距 4 | `$spacing-02` = 4 | `content/layout/carbondesignsystem.com--spacing.md:47` |
| 间距 8 | `$spacing-03` = 8 | `content/layout/carbondesignsystem.com--spacing.md:48` |
| 间距 12 | `$spacing-04` = 12 | `content/layout/carbondesignsystem.com--spacing.md:49` |
| 间距 16 | `$spacing-05` = 16 | `content/layout/carbondesignsystem.com--spacing.md:50` |
| 间距 24 | `$spacing-06` = 24 | `content/layout/carbondesignsystem.com--spacing.md:51` |
| 间距 32 | `$spacing-07` = 32 | `content/layout/carbondesignsystem.com--spacing.md:52` |
| 间距 40 | `$spacing-08` = 40 | `content/layout/carbondesignsystem.com--spacing.md:53` |
| 间距 48 | `$spacing-09` = 48 | `content/layout/carbondesignsystem.com--spacing.md:54` |
| 间距 64 | `$spacing-10` = 64 | `content/layout/carbondesignsystem.com--spacing.md:55` |
| 间距 80 | `$spacing-11` = 80 | `content/layout/carbondesignsystem.com--spacing.md:56` |
| 断点 320 | 320 | `content/layout/carbondesignsystem.com--2x-grid.md:135` |
| 断点 672 | 672 | `content/layout/carbondesignsystem.com--2x-grid.md:136` |
| 断点 1056 | 1056 | `content/layout/carbondesignsystem.com--2x-grid.md:137` |
| 断点 1312 | 1312 | `content/layout/carbondesignsystem.com--2x-grid.md:138` |
| 内容最大宽 | 1312 | `content/layout/carbondesignsystem.com--2x-grid.md:138` |
| 顶栏高 | 48px | derived（Carbon 间距档 48） |
| 状态横幅高 | 44px | derived（触控下限与间距档组合） |
| 控件高度 | 40px | derived（GAP_RULES 组件尺寸） |
| 表格行高 | 48px | derived（GAP_RULES 组件尺寸） |
| 圆角 | 0 | derived（Carbon 组件直角语言） |
| 发丝线 | 1px | derived（GAP_RULES 发丝线宽） |
| 焦点环 | 2px 实线 + 2px 偏移 | `site/src/data/guide.ts:350`（GAP） |
| 触控下限 | 24 / 44 CSS px | `content/a11y/w3c--wcag-2.2.md:907,875` |
| 遮罩 | `rgba(0,0,0,.45)` | `site/src/data/guide.ts:345`（GAP） |

Carbon 的间距表头单位是 px（`content/layout/carbondesignsystem.com--spacing.md:44`），上表写 token 与数值，CSS 里按 px 落。组件内部 6px / 10px 内距属于控件尺寸，标 derived，不另立间距档。

## 8. 动效

| 用途 | 值 | 出处 |
| --- | --- | --- |
| 按钮、开关等微交互 | 70ms | `content/motion/carbondesignsystem.com--motion.md:194` |
| 淡入淡出 | 110ms | `content/motion/carbondesignsystem.com--motion.md:195` |
| 小展开、短位移 | 150ms | `content/motion/carbondesignsystem.com--motion.md:196` |
| 弹层、Toast | 240ms | `content/motion/carbondesignsystem.com--motion.md:197` |
| 大展开、重要通知 | 400ms | `content/motion/carbondesignsystem.com--motion.md:198` |
| 标准曲线 | `cubic-bezier(0.2, 0, 0.38, 0.9)` | `content/motion/carbondesignsystem.com--motion.md:96` |
| 进场曲线 | `cubic-bezier(0, 0, 0.38, 0.9)` | `content/motion/carbondesignsystem.com--motion.md:116` |
| 退场曲线 | `cubic-bezier(0.2, 0, 1, 0.9)` | `content/motion/carbondesignsystem.com--motion.md:140` |
| 减弱动效 | 0.01ms | `site/src/data/guide.ts:285`（GAP 兜底） |

横幅收起用 240ms 标准曲线，抽屉用 240ms 进场、Toast 用 240ms；微交互只到 70ms，避免整页一起动。`prefers-reduced-motion: reduce` 下全部压到 0.01ms，实测见 FINDINGS。

## 9. 图表

图表是内联 SVG 的双图：请求量面积图与失败率折线图，共用 x 轴刻度，失败率单独一条 y 轴，避免双轴误读。图表的轴档数、网格、点宽、圆点半径属于几何参数，标 derived（`site/src/data/guide.ts:310`）；构图原则按 Carbon 图表解剖的「标题、轴标签、基线、图例、数据表」组织（`content/dataviz/carbondesignsystem.com--data-visualization-chart-anatomy.md` 原则引用，不带数值）。

图表颜色改用 Carbon 数据可视化色板，不再沿用界面的 accent / danger：

| 序列 | 色值 | 来源 |
| --- | --- | --- |
| 请求量面积与线 | `#6929c4` | Carbon 分类色板 01 Purple 70 |
| 失败率线与圆点 | `#da1e28` | Carbon Alert 色板 01 Red 60 |

请求量选紫色，不选分类 02 Cyan：主序列要和界面的青色强调分开，紫色在面积填充下也不容易和导航混。失败率是错误状态，Carbon 的 alert 段明确 red 表示 danger，所以用 Alert 01，不机械套分类第二色。

本地 `content/dataviz/carbondesignsystem.com--data-visualization-color-palettes.md:22` 的分类段只有 React 组件占位，没有 hex；这两个值按基准规范缺口回源公开页，取色记录在同目录 `carbon-palette.txt`，不冒充 content 行号。

图表不是装饰：每张图下方有「查看数据表」，表格给同一组数，键盘与读屏用户不依赖悬停。

## 10. 缺口与派生

| 维度 | Carbon 有没有 | 处置 |
| --- | --- | --- |
| 语义色板 | 只有四个背景 hex | 按 GAP 整套回源 TDesign 色阶 |
| 字阶 | 只给公式，无表 | 按 GAP 回源 TDesign 六档 |
| 圆角 | 组件直角，无 radius token | 派生 0，保持整套直角 |
| 控件高度 / 行高 | 无统一数值 | 派生 40 / 48 |
| 焦点环 | 只有可见性原则 | 派生 2px + 2px 偏移 |
| 图表几何 | 无轴档数、柱宽 | 派生，构图原则回源 Carbon 图表解剖 |
| 图表色值 | 数据可视化色板段只有组件占位，无 hex | 回源 Carbon 公开页，取色记录 `carbon-palette.txt` |
| 阴影 | 无 | 派生一级弱投影，只给弹层 |

## 11. 命名

名字 **GatewayDeck** 来自需求文件 `briefs/gatewaydeck.md`，英文、绑产品事实（gateway + deck：把多个网关账号收在一张控制台）。与页面里的账号卡组、路由表一致。按 NameYouLike 口径的碰撞检索：

| 检查 | 实测 |
| --- | --- |
| npm `gatewaydeck` / `gateway-deck` | 404 / 404，未占用 |
| GitHub `gatewaydeck` | 0 条同名仓库 |
| GitHub `gateway-deck` | 9 条，最高 2 star，都是 PiDeck 移动网关、Decker Gateway、Spring Cloud Gateway 演示等不同产品，没有同赛道在运营的同名产品 |
| `gatewaydeck.com` | 已注册（DoH NS），访问返回 404，没有上线产品 |
| `gatewaydeck.net` | 已注册（DoH NS） |
| `gatewaydeck.dev` / `.io` / `.app` | 可注册（RDAP，2026-11-14） |
| `gateway-deck.com` / `.net` / `.io` / `.ai` / `.dev` / `.app` | 全部可注册（RDAP，2026-11-14） |
| 商标 | 未查，USPTO 与 CNIPA 需人工检索 |

结论：**通过**。`gatewaydeck.com` 与 `.net` 已被注册但都没有站点，主域优先用 `gatewaydeck.dev`；风险是 `deck` 在 Kong 生态里读作 decK 配置命令行，页面文案不单独用 `deck` 指代产品；商标未查，发布前补。

NameYouLike 的内部审计（`auditCandidate`，带完整产品事实）结果为 `passed: true`，`productFit: 95`，`realness: 90`，`concreteness: 80`，`slopWarnings: 0`。

## 12. 核心交互

1. 时间范围：24 小时 / 7 天 / 30 天，KPI、两张图、数据表一起换，不出现 KPI 与图表两套数。
2. 账号表：搜索、状态筛选、按账号 / 额度 / 签到 / 成功率排序，`aria-sort` 跟着更新。
3. 账号抽屉：查看额度构成与最近失败，立即签到写回表格与 KPI，Toast 可撤销。
4. 路由开关：`role="switch"`，空格与回车都能切；停用后给撤销入口。
5. 失败表：按账号与状态码筛选；重试有加载态，local-vllm 故意保留 504 失败路径，错误原因写回行内。
6. 添加账号：名称、端点、Key、并发上限逐项校验，首个错误聚焦；提交后插入表格首行，Toast 可撤销。
7. 横幅：向下滚动收起，向上滚动回来，关闭后释放高度；移动端保留「查看失败记录」入口。
8. 图表：指针悬停给最近点的数值；「查看数据表」给键盘与读屏用户同一组数。
