# 取值记录：站点设计（Apple HIG → GOV.UK）

本文按时间记录。2026-11-08 起基准规范是 GOV.UK Design System（`project-gov-uk` 的英国分支），见「重设计：换基准到 GOV.UK」；前面各节是 Apple HIG 时期的旧记录。文中 2026-11-08 前后的「七步」是当时流程，现行是六步（2026-11-13 起首页提示词与指南同步回 11.7 六步），步骤见 `site/src/data/guide.ts` 的 `USAGE_STEPS`。2026-11-13：GOV.UK 选型行与 71 篇文章、美国政务行与 13 篇文章已从库中移除，本文相关引用保留为历史记录，后续改版重定基准。当前数据以 `site/design/source-coverage.md` 与构建结果为准；下文出现的历史数字是当时状态。

基准规范 Apple HIG（项目选型 `project-apple-hig`）。版式由 Hallmark 介入，与本库的版型原型、数值共同作用；数值按下表，无障碍底线优先。

## 色值（派生）

Apple 色彩篇只给语义色角色与用途，不给 hex，全部色值按角色派生，对照原文：

- 背景色分级：`content/color/developer.apple.com--color.md:103-110`
- 文字色分级：`content/color/developer.apple.com--color.md:114`
- 分隔线：`content/color/developer.apple.com--color.md:119`

| token | 亮色 | 暗色 | 用途 | 性质 |
| --- | --- | --- | --- | --- |
| paper | #ffffff | #000000 | 页面底色 | 派生 |
| paper-2 | #f5f5f7 | #1c1c1e | 次要面、卡片 | 派生 |
| hover | #f2f2f6 | #2c2c2e | 悬停底色 | 派生 |
| ink | #1d1d1f | #f5f5f7 | 标题与主文字 | 派生 |
| ink-2 | #3a3a3c | #d1d1d6 | 正文 | 派生 |
| muted | #5f5f66 | #a1a1a6 | 说明文字 | 派生 |
| faint | #6e6e73 | #98989d | 元数据与篇数 | 派生 |
| accent | #0066cc | #0a84ff | 链接与焦点环 | 派生 |
| rule | #d2d2d7 | #38383a | hairline | 派生 |

## 字号（原文）

取 iOS Dynamic Type xSmall 档，出处 `content/type/developer.apple.com--typography.md:363-589`。

| token | 值 | 对应样式 |
| --- | --- | --- |
| text-xs | 11px | Caption 2 |
| text-sm | 12px | Caption 1 |
| text-ui | 13px | Callout |
| text-base | 14px | Body |
| text-lg | 17px | Title 3 |
| text-xl | 19px | Title 2 |
| text-2xl | 25px | Title 1 |
| text-display | 31px | Large Title |

正文用 17px（派生：桌面长文在 14px 上偏小，取 Title 3 档），行高 1.65（派生：中文长文）。

## 间距与圆角（派生）

间距引 8px 基数，出处 `content/layout/uisdc.com--code-for-design-of-spacing.md:98-102`。2px 与 4px 是半档，24 到 96 的倍数是同一基数的派生序列，均标派生。

圆角无规范可引，控件 8px、小组件 4px，标派生。

## 动效（回源）

基准规范 motion 篇没有时长与曲线。时长引 NN/g 三档，出处 `content/motion/nngroup.com--animation-duration.md:80-84`：100ms 微反馈、200ms 常规、300ms 大面积。缓动引 W3C 等价定义，出处 `content/standards/w3c--css-easing-1.md:126-140`。

## 对比度实测

浏览器实测计算，括号内为比值。正文与元数据在亮暗两态都过 4.5。

| 组合 | 亮色 | 暗色 |
| --- | --- | --- |
| ink 压 paper | 16.83 | 19.29 |
| ink-2 压 paper | 11.35 | 13.8 |
| muted 压 paper | 6.33 | 8.16 |
| faint 压 paper | 5.07 | 7.31 |
| muted 压 paper-2 | 5.82 | 6.61 |
| faint 压 paper-2 | 4.66 | 5.93 |
| accent 压 paper | 5.57 | 5.76 |
| faint 压 hover | 4.54 | 4.66 |

## 交互与响应（实测）

- 首页五组统计数值由内容集合实时算，不在文档写死。
- 主题三态循环：自动、浅色、深色，写入 `UISpecs-theme`；系统切浅色时自动跟随（Chrome，CDP 模拟）。
- 搜索展开 420px 输入框，输入 typography 出 8 条结果。
- 320 / 375 / 414 三档：首页、文章页、分区页、设计地图、流程、案例页无横向溢出。
- 焦点环：Tab 进入 skip link，2px accent，offset 2px。
- 减动效：`prefers-reduced-motion: reduce` 下过渡 0s，平滑滚动关闭。

## 版式改造：文档三栏（Apple 文档骨架）

走的是指南包路由：拉 `/ai/design-points.json`，按场景反查设计点，再读点里的原文。2026-11-08 这一轮覆盖 8 个场景，排除的场景见下表末尾。

### 场景与点

| 场景 | 选中的点 | 读的原文 | 用在哪 |
| --- | --- | --- | --- |
| s17 项目选型 | project-apple-hig | 选型行与 Apple HIG 原文 | 本站基准规范不变 |
| s18 导航 | patterns-global-nav | `content/patterns/carbon--global-header.md` | 顶栏：logo 回首页，产品链接左、全局链接右 |
| s18 导航 | components-nav-aids | GOV.UK 面包屑篇（已归档，2026-11-13 移除） | 扁平站且已有侧栏，文章页与分区页去掉面包屑 |
| s1 基本功 | howto-visual-hierarchy | `content/howto/nngroup.com--visual-hierarchy-ux-definition.md:74-77` | 字号最多 3 档，最大元素每页 1 个（h1） |
| s1 基本功 | type-measure-limit | 已删除的美国政务规范（2026-11-13） | 拉丁 measure 44-88ex，中文不适用 ex，正文按字数定 |
| s1 基本功 | layout-spacing-values | 原引 NHS 间距篇（2026-11-13 随基准规范删除） | 小屏间距降一档，见下表 |
| s6 数值层 | type-scale-steps | GOV.UK 字阶篇（已归档，2026-11-13 移除） | 行高与字号成对，字阶不随手加档 |
| s14 Web 标准 | standards-clreq-typesetting | `content/standards/w3c--clreq.md:1939-1957` | `line-break: strict` 处理行首行尾禁则 |
| s19 状态反馈 | principles-interaction-states | `content/principles/polaris.shopify.com--interaction-states.md:38-46` | 链接统一 hover 改色、focus 2px 环、当前项用字重 |
| s9 无障碍 | a11y-manual-acceptance | `content/a11y/w3c--easy-checks.md` | 按 Easy Checks 跑标题结构、对比度、键盘、缩放 |

排除：s2 落地页（本站不是营销页）、s3 后台面板、s4 表单流程、s5 组件（本轮没有新组件）、s8 图标（沿用现有 SVG）、s10 图表、s11 品牌语言（基准规范已定）、s12 token 标准（token 结构未动）、s13 文案、s15 案例库。

### 版式数值

| token | 值 | 性质 | 依据 |
| --- | --- | --- | --- |
| 外壳宽 | 1320 | 派生 | 216 左栏 + 正文 42em + 168 右栏 + 32 栏距，8px 基数 |
| 左栏 | 216 | 派生 | 侧栏容得下最长的分区名（文案与设计价值观）不折行 |
| 右栏 | 168 | 派生 | 目录条目最长的 h2 折两行仍可读 |
| 栏距 | 32 | 派生 | 8px 基数 |
| 正文宽 | 42em | 派生 | 中文约 42 字/行，落在中文行长区间；ex 刻度只适用拉丁 |
| 三栏断点 | 1200 | 派生 | 低于此宽度正文掉到 650 以下，右栏收掉 |
| 左栏断点 | 1024 | 派生 | 再窄正文不足 42em，左栏收起，导航回落到首页列表与分区页 |
| 小屏间距 | lg 24→16，xl 32→24，2xl 48→32，3xl 64→48，4xl 96→64 | 派生 | 原引 NHS 间距篇（2026-11-13 删除），值沿用旧稿，按 8px 基数成套 |

### 验收（本轮实测）

- build 452 页通过；首页、分区页、文章页、设计地图、案例页、流程、建站需求 7 个入口与 `/ai/design-points.json`、`/catalog.json` 两个端点均 200。
- 宽度 1440 / 1280 / 1200 / 1199 / 1024 / 1023 / 768 / 375 / 360 / 320 / 414：`scrollWidth === clientWidth`，无横向溢出；1200 起三栏、1024-1199 两栏、1023 以下单栏。
- 键盘：Tab 走到左栏「概述」，`:focus-visible` 生效，2px accent 环。
- 右栏目录条目来自本页 h2/h3，少于 2 条不占列（分区页、设计地图无右栏）。

### 间距修正（2026-11-08 复检）

第一版数值合规但组合出错，三处都是叠加或余量问题：

- 文章页标题比左栏低 38px：`.article-page` 顶部 32 与 `.doc-head` 顶部 32 叠加，改为 `.article-page > .doc-head { padding-top: 0 }`（Stack 模式：纵向间距只由一层给）。
- 三栏右侧多出 94px 空档：壳宽 1320 让正文轨道 776、正文 42em 只占 714，右栏隔着余量；壳宽收到 1264，正文轨道 720，余量 6。
- 侧栏条目 5px 不在 8px 基数上，改 4px。

### 正文间距回到刻度（2026-11-08 二次复检）

正文排版一直是 em 现算，没走间距刻度，量出来全是 4px 网格外的值：

| 位置 | 改前 | 现在 | 依据 |
| --- | --- | --- | --- |
| 段落 | 0.7em（11.9px） | 下 16 | 8px 基数（Atlassian 间距篇） |
| 标题上/下 | 1.3em / 0.5em（32.5 / 12.5） | 32 / 12 | 同上，h3 用 24 / 8 |
| 列表 | 0.7em / 1.4em（11.9 / 23.8） | 16 / 24 | 同上 |
| 列表项 | 0.25em（4.25） | 4 | 4px 半档 |
| 引用、代码块 | 1em（17） | 24 | 8px 基数 |
| 分隔线 | 1.4em（23.8） | 32 | 8px 基数 |
| 页面标题上边距 | 1.3em 穿透到容器外（+32.5） | 0 | Stack：间距由容器一段给 |
| 正文首元素 | 自带 margin-top | 0 | 同上 |

另修采集清洗：来源块引是多行时 `stripSourceHeader` 没剥掉，页面顶部会重复一次标题与来源，影响 7 篇；正则改成按行吃 `>` 开头的块引用。

### 指南并入设计地图、需求页换清单（2026-11-08）

- 七步流程原来是独立页 `/flow/`，与 `/starmap/` 的设计地图分两处讲同一件事。现在七步块嵌在设计地图页内（`#flow`），任务轨最右的「项目选型」标明是第 5 步；`/flow/` 走 301 到 `/starmap/`，顶栏与左栏去掉「流程」「AI 用法」两个入口。依据：扁平站同一主题不拆两页（GOV.UK 面包屑篇（已归档，2026-11-13 移除） 同类判断）。
- 建站需求总览从 `brief-grid` 卡片墙改成 `brief-list` 清单行：一条需求一行，名称 + slug + 两个动作（需求 / 成品），下面两行小字给产品、受众、核心任务、必备条数。依据：这一页是索引不是成品展示，卡片语汇留给 `/examples/`；行距与分隔线沿用首页 index-row 的 `--space-lg` + hairline。
- 测试回炉补浏览器自动化：AI_PROMPT 第 6 步从「真跑交互」改成「用浏览器自动化真跑（表单、筛选、导航、弹窗、主题切换），逐个点过并量四档宽度与溢出」。

### 七步改成单一来源 + 每步判断依据（2026-11-08）

原来同一套七步有三份文案：`USAGE_STEPS`（生成 `/ai/guide.md`）、`AI_PROMPT`（页面提示词）、`/starmap/` 手写七个 `li`。三份已经不一致：guide.md 那份没有方法层必读、没有浏览器自动化，提示词却是 7 条、页面又是另一套标题。

现在 `USAGE_STEPS` 是唯一来源，带 `title / desc / gate`（判断依据），`branch` 只给第 3 步的两条进路用；guide.md 与 AI_PROMPT 都由它拼，页面七个 `li` 改成 `map` 渲染。每步补了判断依据：第 1 步「语境 + 基准规范」写成一句、第 4 步加组合检查（单值合规不等于组合合规）、第 5 步覆盖改版项目、第 7 步浏览器自动化加四档宽度与回退规则。

### 提示词以一处为准，README 由构建回写（2026-11-08）

README 里那份提示词原来是手抄的，改一处就得记着改两处。现在 README 只留一对 `<!-- AI-PROMPT:START/END -->` 标记，内容由 `site/scripts/sync-readme-prompt.mjs` 在构建后从 `dist/starmap/index.html` 回写，`npm run build` 自动跑。

唯一来源仍是 `src/data/guide.ts` 的 `USAGE_STEPS`：页面七个 li、`/ai/guide.md` 的七步、`AI_PROMPT`、README 四处都从它派生。实测：给第 6 步判断依据加一个临时标记，构建后 README / guide.md / 页面三处同时出现，撤回后三处同时归零。

2026-11-09 起 README 不再内联提示词：正文只留一句指路（首页复制、`/ai/guide.md` 看细节），回写脚本与构建里的那一步一并删除。提示词仍只有 `USAGE_STEPS` 一份来源，出口是首页面板与 `/ai/design-points.json` 的使用说明。

### 指南页下线，七步只留提示词与端点（2026-11-09）

`/guide/` 删掉两块说明卡之后只剩七步，与首页提示词面板逐字相同，等于同一份文案的第二个渲染面。判断依据也在提示词里（每条末尾的「判断依据：」），不是页面额外加的。页面整体下线：顶栏入口去掉（案例、需求、地图三件），`/guide` 与 `/flow` 重定向到首页，`.flow-*` 样式与 `SITE_ROUTE_RE` 里的 guide 前缀一并清掉。人类读流程走首页提示词面板，机器读 `/ai/guide.md` 与 `/ai/guide.json`。

### 需求页压成两列索引（2026-11-08 第三次）

上一版一行 173px（名称行 + 产品 3 行 + 受众/任务/必备一行 + 两个动作），11 条要滚两屏，页面像文档堆砌而不是索引。

现在一条需求 63px：左列固定 264px 放名称与 slug，右列放一句产品说明（单行截断，不换行）；不再渲染受众、核心任务、必备条数与成品链接，这些留在详情页。窄屏（≤768）折成两行，产品说明最多 2 行。

踩到的坑：详情页的 `.brief-product` 带 `-webkit-line-clamp: 3` 与 `min-height`，同名类把列表版挤成 3 行；列表规则改成 `.brief-list .brief-product` 限定作用域才生效。

### 设计地图补区块标题（2026-11-08）

设计地图页里提示词块与七步块各有 h2，地图本身没有：筛选按钮直接跟在流程块后面，看不出下面是「设计点 + 场景轨」的图。地图前补 `h2 设计地图` 与 `18 个设计场景`（场景数从 `star-points.json` 的 tasks 取），区块与另两块同构：上边 48 留白 + hairline，标题走 `.sec-title` 的既有 25px 档，不新增字号。原来在页首描述地图的那句说明下移到地图标题下，页首不再重复导语。

依据：标题要贴近它的内容，组与组之间才是大间距（`content/howto/nngroup.com--visual-hierarchy-ux-definition.md:87` 邻近原则）；标题与内容成组后，筛选按钮与地图不再像一条孤立工具条。目录侧不新增条目：指南页的抽屉目录本来就复用筛选芯片，按 `Toc.astro` 的芯片优先分支返回。

### 首页改成目录门户（2026-11-08）

需求：给本站自己做设计。基准规范不变：Apple HIG（项目选型 `project-apple-hig`）。设计地图节点名从「Apple 平台」改为「Apple HIG」，`context` 仍写原生应用（iOS / macOS / visionOS）；`source` 与选型表基准规范列写「Apple HIG（人机界面规范）」。其余容易看不出归属的规范补了来源：TDesign（腾讯）、Carbon（IBM）、Polaris（Shopify）、Primer（GitHub）、Spectrum（Adobe）、NHS.UK（英国医疗），政务行标英国 / 美国；GOV.UK、W3C、DTCG 本身是规范名，未加括号。首页从单列链接表改成可检索的目录门户：首屏左文案 + 搜索，右一枚「Apple HIG 取值示例」卡；下方 19 个分区改成等宽卡片网格。

#### 场景与点

| 场景 | 选中的点 | 读的原文 | 用在哪 |
| --- | --- | --- | --- |
| s15 案例库 | macrostructure-11 Catalogue | `Hallmark 版式库 references/macrostructures/11-catalogue.md` | 等宽分区卡，4 / 3 / 2 / 1 列；每格同权 |
| s1 页面基本功 | howto-visual-hierarchy | `content/howto/nngroup.com--visual-hierarchy-ux-definition.md:76-77` | 字号 25 / 19 / 17 三档，最大元素控制在品牌与示例值 |
| s1 页面基本功 | layout-intrinsic-patterns | `content/layout/every-layout.dev--stack.md:28-44` | 首屏两栏、卡片网格；纵向间距只由容器给 |
| s6 数值层 | layout-spacing-scale | `content/layout/uisdc.com--code-for-design-of-spacing.md:98-102` | 8px 基数、4px 半档；卡片内边距与栅格间距 16 |
| s6 数值层 | type-hierarchy-recipe | `content/type/developer.apple.com--typography.md:363-438` | 品牌 31、页题 25、区块 19、条目 17、说明 13、元数据 12 |
| s14 Web 标准 | standards-clreq-typesetting | `content/standards/w3c--clreq.md:1939-1957` | 中文行首行尾禁则 `line-break: strict`（沿用） |
| s19 状态反馈 | principles-interaction-states | `content/principles/polaris.shopify.com--interaction-states.md:38-46` | 卡片 hover 只换底色；焦点 2px 环（沿用） |
| s9 无障碍验收 | a11y-manual-acceptance | `content/a11y/w3c--easy-checks.md` | 标题结构、键盘、对比度、缩放逐项实测 |

排除：s2 落地页（本站不是营销页）、s3 后台、s4 表单、s5 组件（无新组件）、s8 图标（沿用现有 SVG）、s10 图表、s11 品牌语言（基准规范已定）、s12 token 标准（token 结构未动）、s13 文案、s16 评审（并入 s9）、s17 项目选型（基准规范不变）。

#### 版式数值

| 项 | 值 | 性质 | 依据 |
| --- | --- | --- | --- |
| 首页外壳 | 1264，主栏 1168 | 派生 | 内容页三栏反推；首页不显示左栏 |
| 分区卡列数 | 4 / 3 / 2 / 1 | 派生 | `minmax(260px, 1fr)`；1168 落 4 列，1024 三列，900 两列，600 以下单列 |
| 卡片内边距与栅格间距 | 16 | 原文 | Atlassian `space.200`，8px 基数 ×2 |
| 品牌 | 31 | 原文 | Apple Large Title，`typography.md:363-379` |
| 页题 | 25 | 原文 | Apple Title 1，`typography.md:384-400` |
| 区块标题 | 19 | 原文 | Apple Title 2，`typography.md:405-421` |
| 条目 | 17 | 原文 | Apple Title 3，`typography.md:426-438` |
| 说明 | 13 | 原文 | Apple Callout，`typography.md:489-505` |
| 元数据 | 12 | 原文 | Apple Subhead，`typography.md:510-526` |
| 搜索框高 | 约 50 | 派生 | 17 字号行高 25.5 + 上下 12，落在 8px 半档 |
| 示例卡数值 | 17pt / 22pt | 原文 | Apple Title 3 的 xSmall 档 Size (points) 与 Leading (points)；卡面写 xSmall，下面注明网页按 1pt = 1px 落到 17px |

#### 验收（本轮实测）

- `npm run build` 通过，当前 490 页；首页、`/a/type/developer.apple.com--typography/`、`/starmap/`、`/examples/`、`/briefs/` 均 200。
- 首页 19 张分区卡；宽度 1440 / 1280 / 1200 / 1024 / 900 / 768 / 390 / 375 / 320 逐档 `scrollWidth === clientWidth`，无横向溢出；列数 4 / 4 / 4 / 3 / 2 / 2 / 1 / 1 / 1。
- 搜索入口真点：打开 ⌘K 面板，焦点落到 `#cmdk-input`；关闭后焦点回首页搜索按钮（`Search.astro` 补 `lastTrigger`，不再一律丢给 header 按钮）。
- 对比度实算：示例卡来源 `muted` 压 `paper-2` 5.82 / 6.61，卡片篇数 `faint` 压 `paper-2` 4.66 / 5.93，示例卡链接 `accent` 压 `paper-2` 5.11 / 4.66，正文与标题均高于 4.5。
- 亮暗两态截图走查；390px 统计行按项换行，不出现「案例站」被拆开的孤词。

#### 骨架坑

首页用 `.shell:has(.home-intro)` 切成单栏，但被后置的 `.shell:not(:has(.toc-rail:not([hidden])))`（特异性更高）压回两栏，主栏只剩 216px。修法是把后者改成 `.shell:not(:has(.home-intro)):not(:has(.toc-rail:not([hidden])))`，让首页不命中该规则；只加 `.shell:has(.home-intro)` 不够。

### Apple HIG 基础层扩到 18 篇（2026-11-08）

问题：选型以 Apple HIG 为基准，库里却只有 Color / Typography / Layout / Icons 四篇；官方 Foundations 其余 14 个方向是 Accessibility、App icons、Branding、Dark Mode、Images、Immersive experiences、Inclusion、Materials、Motion、Privacy、Right to left、SF Symbols、Spatial layout、Writing。这轮把 Foundations 补齐。

补 14 篇全文，落分区：

| 文章 | 分区 | 官网 |
| --- | --- | --- |
| Accessibility | a11y | `.../accessibility` |
| App icons | icons | `.../app-icons` |
| Branding | principles | `.../branding` |
| Dark Mode | color | `.../dark-mode` |
| Images | icons | `.../images` |
| Immersive experiences | principles | `.../immersive-experiences` |
| Inclusion | a11y | `.../inclusion` |
| Materials | color | `.../materials` |
| Motion | motion | `.../motion` |
| Privacy | principles | `.../privacy` |
| Right to left | layout | `.../right-to-left` |
| SF Symbols | icons | `.../sf-symbols` |
| Spatial layout | layout | `.../spatial-layout` |
| Writing | type | `.../writing` |

取法：浏览器取 `main.innerText`；切掉文首更新日期/变更提示、重复 H1、文末 `Change log` 与 `Resources/Related`；保留正文与 `Platform considerations`。图片不搬，正文里指向原图。

同步：`guide.ts` 的 Apple `files` 从 4 条加到 18 条；项目选型派生点 `project-apple-hig` 自动列 18 篇。`content/README.md` 补了这条单篇例外，避免下一次又按「JS 渲染不收录」跳过。

验收：build 通过，504 页；新文章页 200；⌘K 搜「SF Symbols」首条命中；390 / 320 宽无横向溢出；文章页无 footer 与 change log。

标题先按 `Apple HIG · Foundation · 英文标题 中文` 统一，18 篇都改了；Patterns / Components 与全站选型标题的规范化见下一节。

当时还差 Patterns、Components、Inputs、Technologies；下一节补齐前两项，现仅剩 Inputs 20 篇、Technologies 若干。

### Apple HIG Patterns 与 Components 补齐（2026-11-08）

问题：Apple HIG 只有 Foundations，选这个基准做具体控件时没有模式与组件原文。这轮补官方 Patterns 25 篇、Components 八个分类 64 篇，Apple 语料从 18 篇到 107 篇。

- Patterns 25：Charting data、Collaboration and sharing、Drag and drop、Entering data、Feedback、File management、Going full screen、Launching、Live-viewing apps、Loading、Managing accounts、Managing notifications、Modality、Multitasking、Offering help、Onboarding、Playing audio、Playing haptics、Playing video、Printing、Ratings and reviews、Searching、Settings、Undo and redo、Workouts。
- Components 64：Content 4、Layout and organization 10、Menus and actions 12、Navigation and search 5、Presentation 8、Selection and input 11、Status 4、System experiences 10。
- 取法同 Foundations：`main.innerText`，切文首日期/重复 H1/文末 `Change log` 与 `Resources/Related`；图片不搬。
- 同步：`guide.ts` 的 Apple `files` 18 → 107，`project-apple-hig` 自动列 107 篇；build 593 页。

标题规范化扩到全部选型：176 篇选型方案专属文章统一 `来源 · 类型 · 英文 中文`，类型取 Foundation / Pattern / Component / Token / Standard。GOV.UK 的 Pattern / Component 原本已是；Primer 的 `UI Pattern` 标题统一改成 `Pattern`（含选型里的 Notification messaging）；TDesign、Carbon、Atlassian、Polaris、Primer、GOV.UK、NHS.UK、Spectrum、DTCG、WCAG 的存量补了类型段。

验收：build 通过，593 页；新页 200；⌘K 搜「Onboarding」首条是 `Apple HIG · Pattern · Onboarding 引导`；390 无横向溢出；文章页无 `Change log` / `Resources`。

未补：Inputs 20 篇、Technologies 若干。

### 新增 GitLab Pajamas 选型（2026-11-08）

- 依据 `gitlab-org/gitlab-services/design.gitlab.com` 的 `contents/product-foundations/` 与 `contents/brand-design/color.md`：原文是 Markdown，色彩、字阶、间距、动效、层级、图标均有表值，符合基准规范四条。
- 收 10 篇：品牌色彩、字体基础、标题、间距、布局、动效基础、反馈动效、层级、边框、图标；`MAIN_SOURCES` 新增 `project-gitlab-pajamas`，语境「研发协作平台（代码托管 / CI/CD / 代码评审）」，`source` 写 `Pajamas（GitLab）`。
- `site/src/data/sources.ts` 加 GitLab Pajamas 来源组；`PROJECT-SELECTION.md` 现状表与候选池同步。
- TDesign 完整基础页其实在 `Tencent/tdesign` 的 `site/src/pages/design/*.vue` 与 `site/src/locales/pages/design-*.ts`，但是 Vue/TS 源码，不是 Markdown；现有 6 篇站点正文保持。

### 选型来源清洗（2026-11-08）

- 切掉站侧尾巴 14 个文件：Apple `layout` / `color` / `typography` / `icons` 4 篇的整块 Developer 页脚，`progress-indicators` / `live-activities` / `status-bars` 3 篇的 `Resources` 块；GOV.UK 3 篇的 `Help improve this style`；Atlassian 4 处 `Contents` / `Related`。只删尾部，正文行号不变，build 仍通过。
- GitHub 直取边界：Carbon、Polaris、Primer、DTCG、GOV.UK 的正文本身是 Markdown，可直接取；NHS、TDesign 基础页是 Liquid/Nunjucks 或不在仓里，raw 不含渲染后的数值；Atlassian、Spectrum 没有公开正文仓；Apple HIG 没有官方文本仓，社区镜像只作结构核对。
- 新候选复核结论见 `content/PROJECT-SELECTION.md` 的 2026-11-08 节：Salesforce Lightning、Backpack 只有组件用法，GitLab Pajamas 不在 GitHub，均不满足基准规范四条；未新增选型行。

## 版式复核：按现行指南包重跑（2026-11-08）

把站点当成改动项目重走一遍指南包：拉 `/ai/design-points.json`，按场景反查点，读点里的原文，再拿原文对现有版式逐项裁决。基准规范不变（Apple HIG，`project-apple-hig`）。

这一轮的重点是 Apple HIG 从 18 篇扩到 107 篇之后，Patterns 与 Components 第一次参与站点评审。

### 场景与点

| 场景 | 选中的点 | 读的原文 | 裁决了什么 |
| --- | --- | --- | --- |
| s17 项目选型 | project-apple-hig | `content/components/developer.apple.com--sidebars.md:32,34` | 左栏只放一层分区，不加深第二层，不默认隐藏 |
| s18 导航 | components-nav-aids | GOV.UK 面包屑篇（已归档，2026-11-13 移除） | 扁平站加常驻侧栏，不再上面包屑（沿用） |
| s18 导航 | patterns-global-nav | `content/patterns/carbon--global-header.md` | 顶栏三段：品牌、搜索、页面入口（沿用） |
| s17 项目选型 | project-apple-hig | `content/patterns/developer.apple.com--searching.md:28,30,32` | 搜索只开一个面板，两个入口指向同一处，占位文字写清搜什么 |
| s1 页面基本功 | howto-visual-hierarchy | `content/howto/nngroup.com--visual-hierarchy-ux-definition.md:76-77` | 页面同时出现的字号层级收敛到三档，最大元素不超过两个 |
| s1 页面基本功 | layout-intrinsic-patterns | `content/layout/every-layout.dev--stack.md:28-44` | 首屏两栏、分区网格；纵向间距只由一层给（沿用） |
| s6 数值层 | type-hierarchy-recipe | `content/type/developer.apple.com--typography.md:363-438` | 页面标题 25，区块标题 19，条目 17，正文 17 |
| s6 数值层 | layout-spacing-scale | `content/layout/uisdc.com--code-for-design-of-spacing.md:98-102` | 8px 基数，4px 半档（沿用） |
| s15 案例库 | macrostructure-11 Catalogue | `Hallmark 版式库 references/macrostructures/11-catalogue.md` | 首页是等宽卡网格，行间用 hairline 分隔 |
| s19 状态反馈 | principles-interaction-states | `content/principles/polaris.shopify.com--interaction-states.md:38-46` | 链接 hover 改色加下划线，卡片 hover 换底色，焦点 2px 环 |
| s9 无障碍 | a11y-manual-acceptance | `content/a11y/w3c--easy-checks.md` | 键盘、对比度、缩放逐项实测 |
| s14 Web 标准 | standards-clreq-typesetting | `content/standards/w3c--clreq.md:1939-1957` | 中文行首行尾禁则 `line-break: strict`（沿用） |

排除的场景：s2 落地页（本站不是营销页）、s3 后台面板、s4 表单流程、s5 组件（本轮没有新增交互组件）、s8 图标（沿用现有 SVG）、s10 图表、s11 品牌语言（基准规范已定）、s12 token 标准（token 结构不动）、s13 文案（本站文案口径另立）、s16 评审底线（并入 s9 一起跑）。

### 复核结论与改动

| # | 发现 | 依据 | 处置 |
| --- | --- | --- | --- |
| 1 | 区块标题 `.sec-title` 在页面里是 25，与页面标题同档，`/starmap/`、`/examples/`、`/briefs/` 的 h1 与 h2 一样大，层级塌 | 字号最多三档且逐级递减（NN/g 76）；Apple Title 1 25 与 Title 2 19 分工（typography.md:384-421） | 区块标题回到 19；`h1.sec-title` 单列 25 |
| 2 | 首页示例卡的值用 31，与品牌同档，卡片抢过页面标题 | 最大元素不超过两个（NN/g 77） | 值降到 25，品牌仍是全站唯一 31 |
| 3 | 页面级元数据 25 处用 11，首页 12px 及以下文本占比 43.4%，整页偏说明书 | Apple Caption 2 11 用于控件内极小字（typography.md:537-553），页面元数据用 Caption 1 12（:510-526） | 页面元数据统一 12，11 只留 kbd 与浮层 |
| 4 | 设计地图的任务标签用 10px，不在 Apple 字阶上 | 同上 | 提到 11 |
| 5 | 首页 19 张分区卡是灰底色块，没有 Catalogue 要求的行间分隔 | Catalogue 要求等宽卡加 hairline rules between rows（Hallmark 版式库 references/macrostructures/11-catalogue.md） | 卡片改白底加顶部 hairline，hover 换底色 |
| 6 | `Base.astro` 引了 Bricolage Grotesque 字体包，skin.css 一次没用，白打包一份字体 | 全站系统字体（typography.md:12） | 删 import |
| 7 | 三处 `font-size` 直写（31、11、10），不在 token 上 | 数值走 token，不散写 | 改走 `--text-display` / `--text-xs`，10px 那条并进 11 |

Catalogue 的 specimen thumbnail 一条不采纳：本库分区的产物是规范文本，没有可缩略的图形；卡片里的名称、一句说明、篇数已经承担了「库存条目」的职责，硬造图形是装饰。

### 验收（本轮实测）

- `npm run build` 通过，603 页；`/`、`/starmap/`、`/examples/`、`/briefs/`、`/s/color/`、`/a/type/developer.apple.com--typography/`、`/ai/design-points.json`、`/catalog.json`、`/briefs/sites.json`、`/md/type/developer.apple.com--typography.md` 全部 200。
- 宽度 1440 / 1280 / 1200 / 1199 / 1024 / 1023 / 900 / 768 / 390 / 320：`scrollWidth === clientWidth`，无横向溢出；分区卡列数 4 / 4 / 4 / 4 / 3 / 3 / 3 / 2 / 1 / 1。
- 对比度（浏览器实算，含背景 alpha 合成）：亮色最低 4.66（`toc-count` 11px 压 `paper-2`），暗色最低 5.93，其余全部高于 4.5。
- 键盘：首 Tab 落在 skip link，2px 实心 accent 环、offset 2px，`:focus-visible` 生效；序列 skip link → 品牌 → 搜索 → 案例 / 需求 / 指南 → GitHub。
- 字号分布（首页）：11px 从 31 处降到 10 处，12px 从 31 增到 52，25px 从 1 增到 2（页面标题与示例值），31px 从 2 降到 1（只剩品牌）。设计地图的 10px 清零。
- 层级实测：`/starmap/` h1 25 / h2 19；文章页标题 25 / 正文 h2 19 / 正文 17；首页 h1 25 / 区块标题 19 / 品牌 31。

已知偏差：首页 12px 及以下文本占比仍是 43.4%。这轮只是把 11 提到 12，让元数据可读；要压低占比得减少元数据条目，属于内容取舍，不与版式一起做。19 张分区卡在 4 列下最后一行空一格，是网格的固有结果，不为此加第 20 张卡。

## 重设计：换基准到 GOV.UK（2026-11-08）

用户授权完全脱离现有设计重做一版，不再受「品牌必须最大」这类旧规则约束。这一版换掉基准规范，版式家族、字号、间距、圆角、配色全部换源，不是在上文那套 Apple 体系上微调。

### 为什么换基准

| 候选 | 原文在库 | 与本站的关系 | 结论 |
| --- | --- | --- | --- |
| Apple HIG | 107 篇 | 原生应用规范，不是 Web 文档站 | 旧基准，退出 |
| TDesign | 有 | 中文产品 UI，界面语言中文时贴 | 做过样张，卡片网格与旧版差异小 |
| Primer | 有 | 开发者工具，GitHub 风 | 与 TDesign 视觉接近，都靠蓝链接加卡片 |
| GOV.UK Design System | 有 | 它本身就是设计规范库，产品同构 | 采用 |

选型落到 `project-gov-uk` 的英国分支：按产品同构选，不按「政务」字面。

### 变了什么

| 维度 | 改前 | 改后 | 依据 |
| --- | --- | --- | --- |
| 基准规范 | Apple HIG | GOV.UK Design System | 产品同构 |
| 首页版式 | Catalogue 卡片网格 | Index-First 四列表行 | `Hallmark 版式库 references/macrostructures/13-index-first.md`，适用面写的是 documentation hubs 与 design system entries |
| 字阶 | 11 / 12 / 13 / 14 / 17 / 19 / 25 / 31 | 14 / 16 / 19 / 24 / 36 / 48 | GOV.UK 字阶篇（已归档，2026-11-13 移除） |
| 正文 | 17 | 19，行高 1.5 | 同上，19/25 |
| 页面标题 | 25 | 48 | 同上，heading-xl 48/50 |
| 间距基数 | 8px | 5px | GOV.UK 间距篇（已归档，2026-11-13 移除） |
| 圆角 | 8 / 4 | 0 | GOV.UK 不用圆角 |
| 链接 | 默认无下划线 | 下划线常驻，hover 加深加粗 | GOV.UK 链接样式 |
| 焦点 | 2px 蓝环 | 3px 黄环 `#ffdd00` | GOV.UK 色彩篇（已归档，2026-11-13 移除） |
| 顶栏 | 白底 hairline | 黑底加 10px 品牌蓝 | GOV.UK header |
| 品牌字号 | 31，全站最大 | 24 | 页面标题 48 成为最大，层级回到内容 |
| 首页示例卡 | 280 宽灰卡 | 一行文字 | Index-First 不画卡片 |

### 保留

- 三栏骨架。19 个分区需要常驻导航，GOV.UK 的单栏放不下。
- 主题三态与暗色。GOV.UK 没有暗色模式，按派生补，两份变量同值。
- 搜索面板、目录抽屉、设计地图的数据结构，七步流程与端点。

### 验收（本轮实测）

- `npm run build` 通过，603 页。`/`、`/starmap/`、`/examples/`、`/briefs/`、`/s/color/`、`/a/a11y/w3c--wcag-2.2/`、`/ai/design-points.json`、`/catalog.json`、`/briefs/sites.json` 全部 200。
- 宽度 1440 / 1280 / 1200 / 1024 / 900 / 768 / 390 / 320：首页与文章页 `scrollWidth === clientWidth`，无横向溢出。设计地图的 SVG 在窄屏走容器的 `overflow-x: auto` 横滑，不算页面溢出。
- 对比度（浏览器实算，含背景 alpha 合成）：亮色最低 6.08（链接 `#1a65a6` 压白），暗色最低 8.07（`toc-count` 14px 压 `#1d1d1f`），全部高于 4.5。
- 键盘：首 Tab 落在 skip link，3px 黄环、`:focus-visible` 生效；序列 skip link → 品牌 → 搜索 → 案例 / 需求 / 指南 → GitHub。
- 字号实测：首页 h1 48、正文 19、品牌 24；文章页标题 36、正文 19；顶栏黑底 `#0b0c0c`。
- 320 宽顶栏原本溢出，`≤400` 加一档：入口降到 14、间距收紧后无溢出。

## 三页改版：案例 / 需求 / 指南（2026-11-08）

用户要求三页改元素，不只换风格。三页统一按 Index-First 文档列表重排，保留数据与交互。

### 场景与点

- 案例 `/examples/`：s15 案例库 + s18 导航。选 `macrostructure-13` Index-First：原文要求「The page IS a list of links」、正文是「vertical list of categorised links」、行间用 hairline（`Hallmark 版式库 references/macrostructures/13-index-first.md`）。不选 `macrostructure-11` Catalogue：它是等大卡片网格，只适合字体、色板、SKU 这类库存（`Hallmark 版式库 references/macrostructures/11-catalogue.md`），3 个案例用两列卡片会落单。
- 需求 `/briefs/`：s18 导航 + s1 页面基本功。同一套 Index-First 列表；摘要不再单行截断，截断会把「给谁用、核心动作」藏掉。
- 指南 `/starmap/`：s18 导航 + s1 页面基本功。首屏先给地图与筛选，七步流程收进折叠块放在地图后；Index-First 的开头只留一段索引说明，不让流程长文占首屏（`:18`）。
- 间距：行间只由列表容器给一层 border-bottom，行内不再叠 margin-bottom。Stack 原文说 margin 是相邻元素的关系，父容器统一注入，避免双份留白（`content/layout/every-layout.dev--stack.md:28-44`）。

### 版式数值

- 案例列表：单列；缩略图 200 宽、8/5、1px `--rule` 边框、方角；标题 19；摘要 16；元数据一行 14；行上下 `--space-lg`；≤768 缩略图移到标题上方。
- 需求列表：单列；名称 19、分类 14 用 `--muted`；摘要 16，正常换行不截断；行上下 `--space-md`；首段拆成一句导语加 `<details>` 数据说明。
- 指南：地图在七步之前；七步放进 `<details>`，summary 保留「七步流程 · 7 步 · 1 个端点」；地图容器 `max-height: 72vh` 内部滚动，加 `tabindex="0"` 与 `aria-label`。
- 圆角 0、间距走 GOV.UK 5px 刻度、链接下划线常驻，沿用 `design.md`。

### 验收（本轮实测）

- `npm run build` 通过，607 页；`/examples/`、`/briefs/`、`/starmap/` 200。
- 1440 / 1024 / 768 / 390 / 320：三页 `scrollWidth === clientWidth`，无横向溢出；案例列表 3 行、缩略图 200 宽、390 下单列；需求 11 行、摘要 `white-space: normal`、`-webkit-line-clamp: none`；指南七步折叠默认收起，390 标题单行、计数另起一行。
- 键盘：`summary` 可聚焦展开；地图容器 `tabindex="0"`；案例与需求的标题链接可 Tab 到。

## Material 3 / Fluent 2 / Ant Design 转选型（2026-11-08）

- 先以 `reference` 分区收了三套官方 token 的具体值；用户随后要求不要停在附录，改成正式选型，并把该有的文章一起集成；随后按要求删掉参考值分区，token 文档迁入 `content/tokens/`。
- `MAIN_SOURCES` 新增三行：`project-material-3`（Android / 跨端 Material 生态）、`project-fluent-2`（Windows / Microsoft 365 Fluent 生态）、`project-ant-design`（中文中后台 React / Ant Design 既有项目）。`MAIN_SOURCES` 从 16 行增到 19 行，含文章行从 13 增到 16。
- 新增 25 篇官方文章：`material-components/material-web` 的 docs、`microsoft/fluentui` 的 docs/token、`ant-design/ant-design` 的 docs/spec 与组件文档，以及 `fluent2.microsoft.design` 的六篇官方站基础页。三篇 `tokens/*--tokens.md` 也分别填进三行 `files`，作为 Token 快照，不再游离于选型之外。
- Material 3 9 篇：色彩、字体、形状、层级、按钮、文本框、对话框、标签页 + token；Fluent 2 13 篇：色彩、字体、布局、动效、层级、Token、介绍、样式、焦点、按钮、对话框、菜单 + token；Ant Design 9 篇：色彩、字体、布局、动效、阴影、图标、按钮、表格 + token。
- 标题统一 `来源 · Foundation/Component · 英文 中文`；Ant 原有 button/icon/shadow 三篇同步改三段式标题，保留原文件以免设计地图行号漂移。构建 632 页。
- 参考值分区已取消：三篇 token 文档迁到 `content/tokens/`，`section: tokens`，仍随三套选型的 `files` 使用；`sections.ts` 从 20 个分区回到 19 个，`validate.ts` 不再为 reference 开例外。

## 指南与设计地图拆两页（2026-11-09）

上一轮的「三页改版」把七步与地图塞在同一页：提示词与七步都收在 `<details>` 里，打开页面只剩一张 2410 高的 SVG 装在 777 高的框里内滚。实测 `.star-map-wrap` 的 `scrollHeight - clientHeight` 是 1633，页面主体看得见的东西只有地图，怎么用的内容全在折叠里；两块又都由 `USAGE_STEPS` 渲染，等于同一份内容出现两遍。这一轮按「一次只服务一个任务」拆开。

### 场景与点

- 指南 `/guide/`：s18 导航 + s1 页面基本功。一个页面一个主任务，七步直接铺开当正文，不再折叠；层级只靠标题档位、间距与分隔线，颜色只用在序号与链接上，不靠第四种对比区分区块（`content/howto/nngroup.com--visual-hierarchy-ux-definition.md:59`）。
- 分组靠留白与容器边界，不画卡片框：七步卡片沿用 `--section-surface` 面，块之间由 `.map-block` 的上边距与 hairline 分隔（`content/howto/nngroup.com--visual-hierarchy-ux-definition.md:79-83`）。
- 块间距由父容器统一注入，行内不再叠 margin（`content/layout/every-layout.dev--stack.md:28-44`）；刻度仍是 GOV.UK 的 5px 基数（GOV.UK 间距篇（已归档，2026-11-13 移除））。
- 设计地图 `/starmap/`：只放图、图例、筛选与弹窗，回指南的入口写在导语里；导航加「地图」一项，指南与地图各占一个入口。

### 版式数值

- 地图容器去掉 `max-height: 72vh` 与纵向内滚，改整页滚动；只保留 `overflow-x: auto`，窄屏按 SVG 的 `min-width: 820` 横滑，不裁图。
- 连线整组移到标签之前渲染（`.star-lines`），每个标签加 `--paper` 底纸 rect（`.star-label-bg`，高 18、左右各留 4 到 5）：线从文字后面被截断，不再压在字上；悬停与聚焦用 `.star-line-unit.is-hot` 高亮对应那条线，筛选时线与点一起淡出到 0.18。
- 七步：列表 `ol.flow` 直接铺开，序号 40 定宽、卡片 `--space-lg / --space-xl` 内边距；不再有 `summary` 折叠条。
- 提示词只放首页（用户要求）：一个「复制提示词」按钮，悬停或点按展开 1080×720 上限的大面板看全文（2026-11-09 用户嫌 720 窄，加宽到 1080，右边放不下自动左移），面板内可滚；下上都不足 480 时改视口居中，窄屏宽 `min(720, 100vw-32)`。`pre.ai-prompt` 在面板里，供构建回写 README 与手动复制；指南页只留「提示词在首页复制」一句。
- 地图页只留必要文字（用户要求去冗余）：导语压到 39 字，图例一段只写必选类别；筛选按钮上的必选／动效／评审徽标与任务轨蓝框已删（2026-11-09 用户要求），必选信息由图例一句加各点弹窗的「必选／验收」承担，「第 7 步逐页走查」这类流程细节只在指南里讲一次。
- 项目选型点的弹窗顶部放一张该基准规范的主题系统截图：已收 15 家（16 个有文章的选型行里，政务服务两套已删除，缺图问题作废）。图存 `site/public/img/select/<点 id>.png`（1280×800 视口、2 倍像素截，缩到 1600 宽，合计约 4.3 MB），数据在 `site/src/data/select-shots.ts`，`buildProjectPoints` 按点 id 带出，没收录的点不显示图。只收官方站，caption 写截的哪一页，caption 末尾「原页」链到截图来源；图是本站存档，不直链上游（防防盗链与改版失效）。页面类型随各行基准规范走：多数截色彩页，数据可视化截图表页，WCAG 截快速参考，DTCG 截社区官网。
- 入口在页题右侧一个「复制提示词」（2026-11-09 用户定，先后试过搜索条右侧与行尾，最后贴标题、垂直居中、间距 15）：用站内链接语言，accent 文字加下划线，不加边框也不加第二块实底，整行唯一的实底仍是搜索条右侧那块黑（零描边、信号色面积小）；≤600 放不下一排时退到搜索条下一行、左对齐。复制失败不跳页，面板展开并选中全文，按钮写「剪贴板受限，已选中」。悬停展开只在 `(hover: hover)` 下绑，触屏走点按。

### 覆盖与排除

- 覆盖：s18 导航、s1 页面基本功、s6 布局与间距，以及 method_required 的视觉层级与布局模式。
- 排除：s4 表单、s10 图表、s3 后台面板（本站没有这三类界面）；s5 动效、s19 状态反馈（本次只改了地图悬停与筛选，没有新增交互件）。

### 验收（本轮实测）

- `npm run build` 通过，610 页；README 提示词由 `dist/guide/index.html` 回写，构建尾部打印「已是最新（2145 字）」。
- `/guide/`、`/starmap/` 200；`/flow/` 与 `/roadmapx/` 是 meta refresh，分别指向 `/guide/` 与 `/starmap/`。
- 指南页：7 个 `.flow-step`、7 条「判断依据」、提示词 2161 字且已替换成当前站点地址；折叠项只剩提示词全文。
- 地图页：160 个节点、160 条线、160 个标签底纸；`.star-map-wrap` 纵向内滚 0，页面高 3061。
- 宽度 1800 / 1280 / 768 / 375 / 320：两页 `scrollWidth === clientWidth`；768 以下地图容器 `scrollWidth 820 > clientWidth`（可横滑），页面本身不溢出；顶栏四个入口在 320 仍单行。
- 交互：选场景 s1 后 136 个点与 136 条线同时淡出，再点一次归零；悬停 `layout-spacing-values` 只高亮 1 条线；点开弹窗标题与正文正常，关闭回焦；复制按钮在无剪贴板权限时回退为选中全文。
- 首页提示词：悬停展开面板 1080 宽（实测 1080×486，内容高 948 内部滚动），按钮 105×52 贴页题右侧（间距 15、垂直居中），≤375 折到标题下一行；点击后剪贴板受限时按钮写「剪贴板受限，已选中」，选中 2160 字；Esc 关闭且不因回焦重开；外点关闭；375 / 320 走居中面板（343×534 / 288×512），不溢出；宽 1800 / 768 / 375 / 320 首页无横向溢出；`/guide/` 已无提示词块（页面高 4335）。

## 去掉主题切换，只留亮色（2026-11-09）

用户要求删掉全站主题，只保留亮色版。

- 删三处：`Base.astro` 的 head 内联脚本、顶栏 `#themeBtn` 按钮与循环切换脚本；`skin.css` 的 `@media (prefers-color-scheme: dark)`、`:root[data-theme='dark']`、`:root[data-theme='light']` 三段与按钮样式。
- `:root` 是唯一色值来源，`color-scheme: light`。亮色值不变，对比度沿用本文件 52 行起的实测结果。
- 站点现在不读 `prefers-color-scheme`，系统深色偏好下也是白底。

## 设计地图改矩阵（2026-11-11）

用户口径：现图把 107 个点画了 107 条常驻连线，且只连每个点的主场景；点与场景的关系实际有 204 条，图既糊又漏。改成「分区 × 场景」矩阵，格子里是数量，点格子展开具体设计点。

### 场景与点

- s1 页面基本功：行、列就是分组，靠 proximity 与 hairline 建立层级，不再给每个点画线（`content/howto/nngroup.com--visual-hierarchy-ux-definition.md:83`）；容器边界用得克制，不叠卡片（同文 `:96`）。
- s2 数值层：矩阵按数据密集版型排，一屏看到全部组合（`content/layouts/layout--dashboard-data-dense-dashboard.md:21`）。
- s18 导航：行头、列头本身就是入口按钮，点一次展开该行或该列的点；不另造筛选条，避免同一套导航出现两次。
- s9 无障碍：用原生 `table`，行头 `th[scope=row]`、列头 `th[scope=col]`；可点单元都是 `button`，保留 Tab 序与 `:focus-visible`。
- s16 评审底线：格子内数字对比度按正文 4.5:1 守，热力底色最深只到强调色 60%，数字仍用墨色（实测 7.3:1）。

### 版式数值

- 行头 168 宽，18 列按 `table-layout: fixed` 均分；正文列 912 时每格约 41 宽，不横向滚动。表格最小宽 640，低于该宽在容器内横滑（与旧图 `min-width` 的做法一致，页面本身不溢出）。
- 表头实测 124 高（16px 列名加 14px 计数）；行高 32，行名 14px、计数写成「16 点」；格子数字 14px，都是现有字阶，不新增档位。
- 热力色只用 `color-mix` 混强调色：10% 到 60%，按 `sqrt(n/max)` 分档；零格不画。强调色与墨色都走现有 token，不写裸色值。最深 60% 时墨字对比度约 7.3:1，正文阈值内。
- 展开区在矩阵下方，通栏两列（窄屏一列），行内是点名与分区标签，点名字开原弹窗；标题用页面第二档标题，不新增字号。
- 间距走 GOV.UK 5px 刻度：表头上 15、矩阵下 30、展开区上 15。
- 弹窗整窗滚动（`max-height: 84vh`），标题栏 `position: sticky` 钉顶；不在 dialog 上开 flex。原因：flex 项的 `flex-basis: 0` 在 Safari 里参与 dialog 的高度计算，正文会被压成零高，短内容的点只剩一条标题。
- 列名竖排用 `vertical-rl`，不加 180 度旋转：旋转后从下往上读，中文会读反。全名放在悬停与聚焦气泡里：`fixed` 定位、120ms 延迟、居中并留 8px 视口边距，表头贴顶时翻到下方。气泡不能放进矩阵的横滑容器，`overflow-x: auto` 会裁掉它。

### 覆盖与排除

- 覆盖：s1 页面基本功、s2 数值层、s18 导航、s9 无障碍、s16 评审底线。
- 排除：s4 表单、s10 图表、s3 后台面板（本站没有这三类界面）；s5 动效与 s19 状态反馈（本次只换了展开方式，没有新增过渡与状态件）。
- 取舍：矩阵放弃了「每点一条线」的空间关系，换来 204 条关系的完整计数；单个点的多场景归属仍能在弹窗里看全。列名竖排的阅读成本高于横排，18 列横排放不下，接受这一档。

### 验收（本轮实测）

- `npm run build` 通过，703 页；`/starmap/` 200，死链扫描 0 处。
- 矩阵 17 行 × 18 列，非空格 68 个；格子数字合计 204，与点、场景的关系数一致。
- 1400 宽：正文列 912，格子 41×32，表头 124，页面高 1611，`scrollWidth === clientWidth`，矩阵容器不横滑。
- 1200 / 1024 / 900 / 768 / 390 / 320 六档：页面均无横向溢出；390 以下矩阵容器最小 640，显示「左右滑动」提示，展开区单列。
- 交互：点品牌设计语言那一格（22 个点）展开，再点收起为空态；行头「动效」12 个点、列头「落地页与营销页」30 个点都能展开；点展开区的点名开弹窗，关闭后焦点回点名。
- 键盘：Tab 第 26 站进入矩阵容器（可滚区域），焦点环 2.5px 黄；行头、列头、格子都是原生 button，顺序与视觉一致。
- 热力：1 个点 21%，22 个点 60%；最深格墨字对比度 7.3:1。
- 弹窗：高度按内容走（品牌设计语言 466，视觉层级 777），上限 84vh；810 高视口下视觉层级 777 超上限（680），滚 40 后标题栏仍贴弹窗顶（`headTop === dialogTop`），关闭按钮可见。
- 列头气泡：1400 宽悬停「落地页与营销页」显示全名；最后一列气泡右边缘 1288，未越 1400 视口；表头贴顶时气泡翻到下方（top 171，按钮底 163）；键盘聚焦显示，Esc 与滚轮隐藏。

## 选型表清理：删除与降级（2026-11-11）

- 删除 Ant Design、GitLab Pajamas 两行：Ant 29 篇全删，GitLab 10 篇全删；Ant 的「中文文案与排版」点改用中文写作与排版两篇，删掉 Ant 专属 check；samepaper 取值记录里的 Ant 引用改指这两篇。
- 删除新品牌官网转发行（files 为空，只做路由）；品牌官网 / 营销页与复刻站点保留。
- DTCG 与 WCAG 从选型表降为方法点：`tokens-dtcg-structure`（s12，7 篇）与 `a11y-wcag-checklist`（s9/s16，2 篇），文章保留；两条 `SELECT_SHOTS` 与截图删除。
- 同步：TDesign 与 Primer 的 switchTo 去掉指向被删行的句子；`sections.ts` 设计 Token 说明去掉 Ant；`sources.ts` 去掉 GitLab 组，原「Ant Design / TDesign」组改成 TDesign；首页 description、README 来源列表、`PROJECT-SELECTION.md` 候选池与变更记录更新。
- 清理后 `MAIN_SOURCES` 11 行，含文章行 9 行；设计点 102 个（含 9 个项目选型点）；构建 649 页，死链 0。

## Polaris 与 Spectrum 补 token 快照（2026-11-11）

- 两行文章里没有数值：Polaris 39 篇 0 色值、12 尺寸，Spectrum 8 篇 0 色值、1 尺寸；数值在官方 CSS 包里。按 A 方案补快照，两行留在选型表。
- 新增 `content/tokens/polaris.shopify.com--tokens.md`（`@shopify/polaris@13.9.5`）与 `content/tokens/spectrum.adobe.com--tokens.md`（`@adobe/react-spectrum@3.47.7`），正文写变量名、值、来源文件与版本，`status: partial`。
- `MAIN_SOURCES` 两行 `files` 加快照，`note` 写「文章给原则，数值取快照」；`PROJECT-SELECTION.md` 的基准规范资格加 token 快照窄例外。
- 覆盖报告：Polaris 24 色值、64 尺寸、8 时长；Spectrum 11 色值、43 尺寸、8 时长；两套缺口清零。构建 651 页。

## 流程回到七步，去掉评分（2026-11-13）

- `USAGE_STEPS` 从六步改回七步：定语境、拉指南包、选设计点、读原文取值、项目选型、出稿、测试回炉。基准规范回到独立的第 5 步，不再并进第 1 步；选设计点从「拉包」里拆出来，方法层必读与版式候选留在这一步。
- 去掉旧的总分与 60 分线：交付看测试记录、独立审稿与 `FINDINGS.md`，不再设总分；步骤、判断依据与提示词里的相关句一起删净。
- 六步期间新增的内容保留：方法层必读 4 篇、出稿必选 4 类、版式两个候选与默认三件先淘汰、状态四态与过渡规则。命名与图表口径从收尾移到出稿，测试与回炉合成第 7 步。
- 同步：`AI_PROMPT`、`/ai/guide.md` 的「七步」标题、页面 li、README、`examples/README.md`、`briefs/layouts.md`、`case-briefs.json` 的流程名与步序。

## 首页提示词回到 11.7 六步，步骤收成单一来源（2026-11-13）

- 用户要求复跑 11.7 的生成体感，首页 `AI_PROMPT` 回到 11.7 六步原文，术语换成 UISpecs / 基准规范 / 取值记录。
- `USAGE_STEPS` 是唯一来源：`AI_PROMPT` 由它的 `prompt` 字段拼，`/ai/guide.md`、`/ai/guide.json`、`/ai/case-briefs.json`、`/examples/` 的步数与步名都从它派生；首页提示词面板从 `AI_PROMPT` 解析，所以也同步。
- README、examples/README、briefs/layouts 改成「按指南流程」，不再写步数；历史记录里的「七步」保留为当时状态。
- 构建验证：首页提示词 6 步、1016 字符、无「判断依据」；`/ai/guide.md` 与 `/ai/guide.json` 6 步；case-briefs 与 examples 的步名由数组生成。

## 提示词先骨架后选点（2026-11-14）

用户诊断：「文章多了不是错，是读的层级错了。」前一轮 PickBin 把 TDesign 的 button、input、upload 组件篇当页面结构源，先出表单再套版式，结果像 TDesign 表单；11.7 的 locker 只用 color、fonts 定值，版式走 Hallmark 的 Narrative Workflow，首屏靠自绘柜体插画撑住。

- 第 1 步在本仓库内改读 `site/dist/ai/design-points.json`（先 `cd site && pnpm build`）；没构建时读 `guide.ts` 的 `USAGE_STEPS`、`METHOD_REQUIRED`、`REQUIRED_SCENARIOS`、`MAIN_SOURCES`、`GAP_RULES`、`REQUIRED_RULES` 加 `star-points.json` 的 `tasks`、`points`。`star-points.json` 只有 `tasks` 与 `points`，单读它不算拿到包。
- `USAGE_STEPS` 第 2 步改成「定骨架与场景」：先定基准规范，再用 Hallmark 定版式骨架与首屏落点，写清候选与淘汰理由；默认组合先当淘汰项（应用页 Workbench + N1b + Ft3、营销页 Marquee Hero + N1b + Ft1），至少一件承担产品动作；只有产品确实没有第二种结构时才留；仓库内再读 `briefs/layouts.md` 与 `content/PROJECT-SELECTION.md` 取件名与完整规则；候选只进 DECISIONS，不另出第二份页面文件；结构没定不选组件点、不读组件文章。版式件名按 Hallmark 库的叫法，不把 macrostructure、nav、footer 写死成必选清单。结构定完后按 ① 选点、② 列读法、③ 判场景必选、④ 划需求边界四段执行，避免一段里混着五件事。
- 读的层级：选点先看 `points_by_task`、点的 `select` 与 articles 的标题、字数；不设总篇目上限，按命中场景与点列「要回答的问题 → 文章/章节」，能回答就停；一篇文章服务多个点只读一次，每个用到的组件至少读它的组件篇，基准规范主文件（`MAIN_SOURCES` 里列的那批）按维度读全；每篇读的文章与用途写进 DECISIONS 的「读的篇目与用途」表（场景/点 | 结构件 | 要回答的问题 | `文章:行号` | 用途），没用途的不读。5 到 8 篇是按单页小工具估的，场景一多就不够，撤掉。
- 选点顺序：结构定完再用 `points_by_task` 选点；组件类点必须标注服务的结构件名，挂不上就删；文案、状态、无障碍、动效四类必选点保留在出稿阶段，但排在结构之后，不许反推骨架。`REQUIRED_RULES` 的 `stage` 仍是 `build`，没有改成 `review`：这四类是出稿约束，不是验收项；改 stage 会把它们拖到验收，反而错。
- 需求边界：需求只给产品与受众；没写的产品行为（留存、过期、权限、数据边界）不自行补，要补写成设计假设并在 DECISIONS 标出；页面区块按 Hallmark 结构走，不把结构件当需求。
- 第 4 步改名「落稿与反 slop」：不再定结构，按第 2 步的骨架落稿；方法层 4 篇按节点读全：配色与层级在定主辅时读，布局模式在定间距前读，动效落地在有状态变化前读。第 6 步回退目标从「第 4 步补点」改成「第 2 步补点」。
- 场景规则统一：对不上直接跳过；命中但本期决定不做，在 DECISIONS 写一句理由。`REQUIRED_SCENARIOS` 注释、guide 正文与第 2 步提示词同口径。
- 单站也要读版式索引：`briefs/layouts.md` 给 21 个 macrostructure、14 个 nav、8 个 footer 与产品形态定位，`content/PROJECT-SELECTION.md` 给默认组合淘汰；之前只有多站段引用这两个文件，单站第 2 步没指到，会漏掉默认 Workbench / N1b / Ft3 的淘汰。
- 场景底子措辞：guide 原来写「下面三个」，但表前三是 S2、S3、S16，真正所有项目的是 S2、S3、S17；改成「标『所有项目』的三行（S2、S3、S17）」。
- 验收口径：需求已有名字就沿用，没给才走 NameYouLike；图表按项目形态分两种：未开框架的单文件案例用内联 SVG 不引外链，开了框架或有构建的用 ECharts / Chart.js 并锁版本。
- 首页提示词面板的「11.7 版」标签改成「现行版」；提示词已经改过多次，版本号不再指 11.7 原文。
- 不改文章：`content/` 没有增删，改的是读的顺序与权限。构建通过（本次 678 页）；`dist/ai/design-points.json` 的 `usage`、`guide`、`tasks`、`points`、`points_by_task` 都在，`dist/ai/guide.md` 第 1、2、4、5 步与场景规则已换成新文案。

## 生成层回 11.7 六步，选型表降为定稿核对（2026-11-15）

用户反馈：近期每次生成都写死同一套 header 与卡片，怀念 11.7 的生成体感；问是内容文章还是选型方案介入。

- 诊断：11.7 提示词 1,020 字符；11-13 回滚到 1,016 字符；11-14「先骨架后选点」把 `briefs/layouts.md` 与 `PROJECT-SELECTION.md` 塞进单站第 2 步，并列出 Workbench + N1b + Ft3；当天第 2 步已 11,313 字符。header 是生成时硬编码的，但选型表把它变成了默认。
- `USAGE_STEPS` 回到 11.7 六步：拉包、定语境与基准、读原文取值、落稿、交付前检查、测试回炉。第 2 步只保留 brief 三件、单基准、选点读 2 到 5 篇、Hallmark 定结构；不再提页面语法、视觉参照、素材配方、版式三件与默认组合。AI_PROMPT 1,511 字符。
- `PAGE_GRAMMAR_*`、`VISUAL_REF_*`、`MATERIAL_*` 从 `guide.ts`、`/ai/guide.json`、`buildGuideMarkdown` 删除；`design-points.json` 不再出现 Workbench + N1b、页面语法、视觉参照、material_rules。`briefs/layouts.md` 与 `PROJECT-SELECTION.md` 改成单站不前置，定稿记录实际件名核对；多站批开批前才分配。
- 项目方向记录同步：Hallmark 定版式，单站不预选三件；选型表只在定稿核对。
- 不改文章：`content/` 仍有 105 未跟踪、142 删除，属于另一次清理，不在本次处理。构建 688 页通过。
- clinicdesk 原型停在 `~/workspace/reports/UISpecs-clinicdesk-20261115/index.html`，不再按旧选型继续改。

## 删 TDesign 中后台框架篇，结构不再有选型行内的来源（2026-11-15）

用户问「不同选型方案里的文章在作祟是吧」，然后定：「删掉吧，别限制后续发展，也别丢去 slop 的味道」。

- 实测：13 个 TDesign 案例里，引用七成在 `color.md` 与 `fonts.md`（200 / 155 次），组件篇站均 2.5 篇，`tdesign.tencent.com--page-framework.md` 只 3 站引用。篇数不是主因（该行 54 篇，少于 Primer 84、Apple HIG 107）。
- 但它是这一行唯一的结构文章：正文给「上下 / 左右 / 混合」三种布局，判据是「功能模块少于 9 个用上下布局」，还给 8 个中后台页面模板。`usage` 要求「基准规范主文件按维度读全」，所以每站都会读到它，读到就是「顶部区域 Header + 上下布局」。swimboard 的 DECISIONS 直接写「依据 page-framework.md:54 用上下布局」，pickbin 写「单页工具用上下布局，不套中后台侧栏」。
- 处置：删 `tdesign.tencent.com--page-framework.md`（原在 `content/layout/` 下），从 `MAIN_SOURCES` 的 TDesign 行去掉这条；没有挂到任何设计点（`star-points.json` 里 0 引用），也没有转进场景点，按项目硬约束「选型方案的文章只归该行的选型点」。
- 为什么删而不是挂去 s12：那篇的中文内容是模板清单，挂到场景点等于把模板推向所有中后台项目，正是要去的 slop。真正要恢复时从 tdesign.tencent.com/design/offices 重收，它本来不含数值（唯一数字是「模块数 < 9」这个经验阈值），删掉不影响任何数值出处。
- 保留能力：间距栅格仍由 `layout/tdesign.tencent.com--layout.md`（9/13 站引用）、`components/tdesign.tencent.com--layout.md`、`--grid.md` 提供；中后台任务模式仍在 `patterns/tdesign.tencent.com--backoffice-tasks.md`。
- 结构只留 Hallmark：单站按产品动作定，选型行不再给页面壳。
- 第 2 步加一条页头判据：先数真入口，单入口不做横排导航条（角标、左缘竖条或无页头），两个以上真入口才用顶部横条。AI_PROMPT 1,566 字符。
- 三个案例的引用改成「当时的中后台框架篇（已于 2026-11-15 移除）」，保留判断、不留死链。构建 687 页通过；引用体检 1436 处、坏链 6 处（与删前同数，未新增）；`source-coverage.md` 重新生成，顺带刷新了 Primer 的旧数（16 篇 → 84 篇）。
- 同日后补（2026-11-15 夜）：两站复评（fixqueue 86、tallylane 87，对 11.7 同语境的 94 与 91）把差距定位到页面质量，扣分项是首屏塞满与默认骨架；375 另查出提醒条被省略号截断、工单队列首屏只露一条。处置落在第 5 步交付检查，不动生成步骤：1280 首屏独立区块不超过三个且可操作对象只留一组，375 首屏露出核心任务第一条可操作对象，可执行信息不靠省略号截断，字号与行高配对逐组核。构建 687 页通过，三条端点都带上；AI_PROMPT 1,566 → 1,674 字符，比 11.7 的 1,020 高 64%，要回体量得先砍别的条目。
- 同日后补之二（骨架与探针）：用户否掉「定稿核对换一件」的写法，要求不引依赖、直接说用浏览器自动化。查根因：Hallmark 的 `references/ui-specs.md` 写着「用本库时跳过 catalog rotation 与 `.hallmark/log.json` 条目」，而它的跨构建去重（SKILL.md § Diversification、slop-test gate 8 与 32）全靠这个文件。工作区里 `.hallmark/` 从来没建过，所以每次生成都是「本项目第一次」，去重规则永远不触发。处置：① 建 `.hallmark/log.json`，15 站各一条（date、brief、theme 写基准规范名、macrostructure、nav、footer、accent、首屏落点），按时间倒序；`.gitignore` 的 `.hallmark/` 改成 `.hallmark/*` 加 `!.hallmark/log.json` 放行。② Hallmark 那一条改成「主题轮换不适用，但日志条目不许跳过」，并说明跳过会让每站都变成第一次。③ 第 2 步 desc 加一句「动手前读仓库根的 `.hallmark/log.json`」，第 5 步改成「用浏览器自动化」量四档与断点。构建 687 页通过，三个 AI 端点都带上 log 指引与浏览器自动化口径；AI_PROMPT 约 1,723 字符。
- 日志里现成的重复（正是 Hallmark 明令禁止项）：Ft2 六次、N13 四次、N12 三次、Ft5 三次、Ft4 三次；最近三站是 PickBin（Narrative Workflow / N9 / Ft2）、CivicDesk（Service Chain / 自定 / Ft2）、SwimBoard（Workbench 05 / N13 / Ft4）。
- 同日第二轮补记（按重跑得分补规则）：CivicDesk 重跑 88 分，扣分集中在三处，逐条写进提示词。① 宽屏版面：1280 下正文列居中、右侧空 500px，第 2 步加「正文列中文 35 到 45 字，1200 以上剩余宽度必须有承载物（页边批注、辅助列、示意图、数据表），不许窄列居中、两侧留白」。② 内容厚度与品牌感：第 4 步加「首屏之后至少一块非表单的业务支撑内容，优先可执行信息，用内联 SVG 或表格画」，并要求页脚写全主办单位、服务点或地址、热线、备案或演示声明四件。③ 行为验收：第 5 步把键盘改成「Tab 从页头走到最后一个可操作对象并记前五个焦点顺序」，加「换一种内核再开一遍记差异」「加载态用真延时并记录点击到出结果的读数」。第 6 步补 `scripts/check-ledger.py` 对账。同时收紧回问边界：只有价格、时效、资质、合规这类硬事实缺了才回问，版式宽度、密度、圆角、结构件、配色档这些表现层自己定并记账；去重按 Hallmark §Diversification 执行，动手前先写一行「上一站 nav 与 footer 是什么，本站用什么、为什么」。AI_PROMPT 1,723 → 2,155 字符，构建 687 页通过，三个 AI 端点均命中新规则。
- 同日第三轮补记（把缺陷前移成规则）：第三轮 94 分，但自查出六处可修缺陷，都是初版就能避免的。决定不改页面，改提示词，让下一轮初版直接带上。① 第 4 步 prompt 加「可访问性语义写进初稿」：必填带 aria-required、错误用 aria-describedby 挂字段、成组控件给 fieldset 加 legend、表头写 scope、第一个焦点是跳到正文的链接、加载态 aria-busy 且禁用重复提交、索引条数等于分节数、加打印样式（打印不带导航与批注）。② 同一步加「支撑内容放首屏之后，不把办理条件这类核心前提挤出首屏」。③ 第 5 步 prompt 与 gate 改成可数读数：触控目标逐个体量不小于 44px；aria-required 数等于必填数、aria-describedby 数等于错误数；组名与 scope 齐全；跳过链接排第一；加载态按钮禁用；切打印媒体复开一遍；索引条数等于分节数；1280 首屏除入口还要露一条关键前提。第 4、5 步 desc 与 gate 同步。AI_PROMPT 2,155 → 2,553 字符，构建 687 页通过，guide.json 与 design-points.json 均命中新条目（guide.md 只渲染 desc，不含 aria 细则）。
- 为什么不是重述规则：44px 触控目标本来就写在 GAP_RULES 的「触控目标与焦点环」条里，第三轮仍做成了 32px。所以这次把每条改成能数出来的读数，而不是再写一遍要求。
- 同日补记之四（去写死）：上一条把 aria-required、aria-describedby、aria-busy、scope、索引条数相等写进了提示词，属于过度规定。属性名会跟基准规范组件的既有语义打架，把 agent 逼到绕过组件手动补标记；写成结果口径更稳。改成「读屏能听出哪项必填、哪条错误属于哪个字段、哪几个控件是一组」「第一个焦点能跳过导航直达正文」「等待态不许重复提交」「索引与分节对得上」「打印时不带导航与批注」，验收侧改成「挑几处真验：触控目标不小于 44px、键盘与读屏能走完主流程、跳过导航、等待态不可连点、打印预览不带导航」。保留的数字只剩有出处的几项（44px 出自 GAP_RULES 触控条，对比度出自 WCAG AA，四档出自本库验收）。AI_PROMPT 2,553 → 2,381 字符，构建 687 页通过，JSON 端点里属性名出现 0 次。
- 同日补记之五（评分接进验收，不写门槛）：新增 `scripts/score-case.py`，静态 70 分自动算、浏览器 30 分列项待测，权重与判据都在脚本里。提示词只在第 6 步指路：「跑 `scripts/score-case.py` 取静态分与缺项，缺项要么修，要么在 FINDINGS 写明为什么不修」，gate 记「静态分与缺项有记录」。不写分数线、不写权重，避免两处维护同一套标准。AI_PROMPT 2,363 → 2,424 字符，构建 687 页通过；实测三个案例：旧版 62、第二轮 14、第三轮 48（满分 70）。脚本口径比口头评分严，第三轮缺的六项与人工复核一致。
- 同日后补记之六（撤回自造分制）：此前 `scripts/score-case.py` 用的是我自造的「静态 70 加浏览器 30」，跟仓库两套口径都不一致。改为按既有口径出分：出处与台账 40、页面质量 40、行为与回炉 20，出处或行为低于六成判不合格，对应 `Readspec-test-runs/SCORES.md` 与 `examples/weekdeck/FINDINGS.md` 的写法；硬门槛照 `examples/README` 的四项（对账、四档溢出、对比度实测、交互前后记录），任一不过即回炉。视口、对比度、行高、首屏、状态、键盘、跨内核七项标 browser，用 `--set four=pass contrast=pass …` 注入实测读数，不注入记待测并给分数区间，不拿推断顶替实测。实测：第三轮注入全部浏览器读数后 89 分（36/36/17），缺缺口记录 4、触控 4、跳过导航 3；旧版 civicdesk 静态 50 分待补测。静态项是启发式（触控看 min-height 声明、页脚看关键词），仍有漏判，最终以主会话复验为准。
- 同日后补记之七（判据纠偏）：全量跑 15 站发现两处误判。页脚四件用关键词组判，14/15 站判缺，实际是各站页脚措辞不同（weekdeck 写「示例数据，仅用于设计测试」，annualdesk 写「演示页」），不是真缺；触控目标用 CSS 里 `min-height` 声明判，会把装饰件算成触控件。处置：触控改成浏览器实测注入；页脚四件与交互记录这类内容判断改成人工判定注入（`--set footer=pass interact=pass`），不再自动扣分；支撑内容（图或表）保留自动。改后静态自动项满分 46（出处 40、支撑内容 3、跳过导航 3），15 站分布在 39 到 46：cartlane 39、tallylane 39、metricrail 40、epdeck 42、pickbin 42、samepaper 42、fixqueue 43、payloaddeck 43，其余 46。这个区间只说明缺哪几项结构性内容，不等于页面质量高低，真实分差要注入浏览器 54 分才看得出。

## 生成层统一到「数值文章」，第 3 步补四个表面 token（2026-11-18）

用户问「网站上有啥遗漏」，把生成层与选型层的旧称拆开，站点可见文案一并扫。

- 第 4 步「映射到基准规范」改为「数值文章」；`GAP_RULES` 标题改为「数值文章缺口与派生」；`examples/README.md`、`project-points.ts`、`case-briefs.json.ts`、`examples` 列表页、`star-points.json` 选点文案与 `briefs/layouts.md` 同步。`scripts/check-ledger.py` 的声明同时认「数值文章」与旧称「基准规范」，历史案例不改。
- 第 3 步 `prompt`、`desc`、`gate` 同时写入「这页像什么」与 `canvas / sheet / raised / inverse` 四个表面 token；`canvas` 不默认白灰，纸面可以白但桌面要有底色或材质。
- `examples/README.md` 的表头改「数值来源」，正文改「数值文章」，保留一句旧称说明；`site/public/examples/README.md` 同步后构建，`/examples/README.md` 不再有旧口径。
- 验收：构建 668 页通过；`check-map.py --quiet` 通过；`/ai/guide.md`、`/ai/design-points.json`、`/ai/case-briefs.json`、首页提示词里的「基准规范」均为 0；历史案例页与 starmap 选型弹窗仍保留旧称，选型层没有跟着改。

## 场景到点的两套索引分开命名（2026-11-18）

- 起因：包里同时有 `required_scenarios`（每场景 2 到 3 个必读点，本库判定）与 `points_by_task`（该场景全部相关点，s9 有 13 个、s5 有 48 个），两个名字都没说清谁是谁。第一次做政务三页时，只看到后者，就按页面类型自己抓了几篇数值文章，必读点一篇没读。
- 改法：`REQUIRED_SCENARIOS` 的 `task` 字段改名为 `id`（它装的是场景 id，不是任务名）；`tasks[id]` 现在同时带 `required_points`（必读）与 `related_points`（相关），另出 `required_points_by_task`；没有必读点的 5 个任务写 `points_note`，s1 是选型入口，s13 到 s18 是 how-to，不再留空。
- 验收：构建通过；`tasks.s9` 必读 3 个、相关 13 个；18 个任务都有两个字段；`guide.md` 场景表按 `id` 渲染，S9 行在；`check-map` ok；`guide.md` 与 `design-points.json` 无 `undefined`。
