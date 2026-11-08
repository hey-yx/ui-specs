# TallyLane · 记一笔（tallylane）—— 设计决策与取值记录

单文件页：`index.html`。零外部请求（无 CDN、无外链字体、无外链图片、无图标库），图标全是内联 SVG。
引用格式一律 `content/<完整路径>.md:行号`；指南条款引用 `site/dist/ai/guide.md:行号`。

---

## 1. 设计前提

| 项 | 内容 |
| --- | --- |
| 受众 | 想随手记账的上班族，手机上单手操作，一次停留十几秒 |
| 用途 | 记一笔支出 → 看懂本月花在哪 → 知道离预算还有多远 |
| 语气 | 工具化、直白（utilitarian）。不写营销句，不安慰人，数字先说话 |
| 产品语境 | **中文产品 UI（个人工具）** —— 按指南选型表落到 TDesign 行 |
| 基准规范 | **TDesign**（色彩 / 字体 / 布局 / 图标 / 动效五篇），拥有全部数值决定权 |
| 设计场景 | s4 表单与流程（记一笔、校验）、s6 数值层（色字距动效）、s10 图表（分类支出）、s19 状态与反馈（预算提醒、空态）、s1（层级） |
| 方法层 | `howto-ui-color-framework`（配色框架）、`howto-visual-hierarchy`（视觉层级），先定主辅与三档层级再取色值 |

基准规范判定依据：`site/dist/ai/guide.md:27` ——「中文产品 UI（中后台 / 工具 / 内容 / 协作）→ TDesign」。
本页是工具型单页应用，属于该行；不是看板（不选 Carbon 作基准规范），也不是品牌官网。

**基准规范缺口**按 `site/dist/ai/guide.md:34-52` 的「基准规范缺口与派生」回源或走兜底档；图表构图原则回源 Carbon 数据可视化系列（`guide.md:44` 指定），但**不取它的数值**，几何参数全部标 derived。

---

## 2. 结构决策

宏观结构：**Ledger Column（账本单栏）** —— 一屏一件事：先说钱，再说记，再摊开看。Hallmark 的宏观结构库是营销页骨架，本页是工具面，故取「工具面单栏」并只借它的门禁（禁止伪造 chrome、禁止假数据、移动端硬底线）。

| 决策 | 是什么 | 依据 |
| --- | --- | --- |
| 版式 | 顶部工具条 → 一句话结论（本月还剩 X 元，最大号）→ 预算提醒带 → 两栏主体（左：记一笔 + 本月预算；右：分类支出 + 最近记录）→ 页脚 | 层级按 `content/howto/nngroup.com--visual-hierarchy-ux-definition.md:77`「最重要的做成最大，最大的元素不超过 2 个」；分区靠留白分组 `:83` |
| 断点后两栏 | 320/375 单栏，768 单栏收在 640 行宽，≥992 分 5:7 两栏 | `content/layout/tdesign.tencent.com--layout.md:117-118`（sm 768 / md 992）；比例 5:7 是 derived，理由：左栏是表单（窄够了），右栏是列表与条图（要横向） |
| 导航 | N9 边缘对齐工具栏：左边字标 + 图标，右边月份。**没有跨页导航**，单屏应用强行加导航是假 chrome | 页面只有一个目的地；`patterns-test-walkthrough` 要求按任务链铺页，本产品只有一页 |
| 页脚 | Ft5 陈述式：一行身份 + 一行数据说明 + 一行数值来源。不放假链接、不放假备案号 | 空白与假链接是 slop；页脚承担「这是演示、刷新即回初始值」的诚实交代 |
| 强调色 | TDesign 腾讯蓝 `#0052d9`，只出现在：主按钮底、分类条、进度条正常档、选中项文字/描边 | `content/color/tdesign.tencent.com--color.md:34`；语义映射见 `:508-510`（button-bg:@brand-color） |
| 强调色面积 | 全页实填 8,787 px² = 视口 2.89% / 整页 1.29% | 实测，见 §8；NN/g「简单设计限 2 主色 2 辅色」`content/howto/nngroup.com--visual-hierarchy-ux-definition.md:58` |
| 大数字 | 全页只有两个 28px 元素：页首结论金额、金额输入框。其余一律 14/16px | `nngroup...:76`（正文 14-16、副标题 18-22、标题到 32）+ `:77`（最大元素 ≤2） |
| 图表形态 | 行内条（分类名 + 细条 + 右对齐金额），按金额降序，单一色，无图例 | `content/dataviz/carbondesignsystem.com--data-visualization-legends.md:28`「能直标就别做图例」、`:30`「单一系列不需要图例」；`...data-visualization-dashboards.md:42`「同一数据集始终用同一个颜色」、`:32`「按重要性排序」 |
| 表单 | 金额（大号输入）→ 分类（radio，5 项 3+2）→ 备注（选填）→ 清空/保存。**不预选分类**，不离开字段就校验 | `content/patterns/govuk--validation.md:80`（用户离开字段/点提交才校验）、`content/patterns/govuk--question-pages.md:93`「Never mark mandatory fields with asterisks」（本页只标「（选填）」） |

---

## 3. 色彩表

基准规范：TDesign 色彩（`content/color/tdesign.tencent.com--color.md`）与字体（`content/type/tdesign.tencent.com--fonts.md`）两篇。对比度为 Chromium 实测（WCAG 2.x 公式，前景若含 alpha 先按实际底色合成）。

| token | 值 | 出处 | 用在哪 | 实测对比度 |
| --- | --- | --- | --- | --- |
| `--c-bg` | `#f3f3f3` | `content/color/tdesign.tencent.com--color.md:189`（Gray1 L96 #f3f3f3） | 页面底色 | — |
| `--c-surface` | `#ffffff` | `content/color/tdesign.tencent.com--color.md:187`（White #ffffff） | 卡片、输入框 | — |
| `--c-text` | `rgba(0,0,0,.9)`（= #000000 90% 换算，合成 #191919，实测） | `content/type/tdesign.tencent.com--fonts.md:96` | 正文、金额、标题 | 白底 **17.49:1**；灰底 **15.96:1** |
| `--c-text-2` | `rgba(0,0,0,.6)`（= #000000 60% 换算，合成 #666666，实测） | `content/type/tdesign.tencent.com--fonts.md:98` | 次要文字、说明、日期、单位 | 白底 **5.74:1**；灰底 **5.56:1**（原文自述 AA 5.7，`:233` 同量级） |
| `--c-text-dis` | `rgba(0,0,0,.26)`（= #000000 26% 换算） | `content/type/tdesign.tencent.com--fonts.md:102` | 仅禁用按钮文字（当前无渲染） | 灰底 **1.87:1**（禁用态，WCAG 豁免；不用于占位符与任何正文） |
| `--c-brand` | `#0052d9` | `content/color/tdesign.tencent.com--color.md:34` | 主按钮底、分类条、进度条、选中项文字 | 白字压它 **6.54:1**（与原文 `:42` 自述的 6.54:1 同值）；作文字压白 **6.54:1**、压 `#f2f3ff`（`content/color/tdesign.tencent.com--color.md:48`）**5.93:1**（实测） |
| `--c-brand-hover` | `#003cab` | `content/color/tdesign.tencent.com--color.md:69`（Blue8 #003cab） | 主按钮 hover 底 | 白字 **9.40:1**（**换档**，见下） |
| `--c-brand-active` | `#002a7c` | `content/color/tdesign.tencent.com--color.md:72`（Blue9 #002a7c） | 主按钮 active 底 | 白字 **12.95:1**（**换档**） |
| `--c-brand-weak` | `#f2f3ff` | `content/color/tdesign.tencent.com--color.md:48`（Blue1 #f2f3ff） | 选中筛选项/分段控件的底 | 其上品牌色文字 **5.93:1** |
| `--c-danger` | `#d54941` | `content/color/tdesign.tencent.com--color.md:98`（Red6 #d54941） | 错误边框 2px（derived）、超支进度条 | 白底 **4.32:1**（与 `:77` 自述同值）——**只作非文本（≥3:1），不作小字** |
| `--c-danger-text` | `#ad352f` | `content/color/tdesign.tencent.com--color.md:102`（Red7 #ad352f） | 错误文字、错误汇总标题 | 白底 **6.31:1**；浅红底 **5.69:1** |
| `--c-danger-weak` | `#fff0ed` | `content/color/tdesign.tencent.com--color.md:83`（Red1 #fff0ed） | 错误汇总底、超支提醒底 | — |
| `--c-warn` | `#e37318` | `content/color/tdesign.tencent.com--color.md:130`（Orange5 #e37318） | 预警进度条、提醒带描边与图标 | 白底 3.12:1（与 `:112` 自述同值）——**只作非文本** |
| `--c-warn-text` | `#954500` | `content/color/tdesign.tencent.com--color.md:136`（Orange7 #954500） | 预警提醒文字 | 浅橙底 **6.08:1** |
| `--c-warn-weak` | `#fff1e9` | `content/color/tdesign.tencent.com--color.md:118`（Orange1 #fff1e9） | 预警提醒底 | — |
| `--c-line` | `#dddddd` | `content/color/tdesign.tencent.com--color.md:195`（Gray4 #dddddd） | 纯装饰分隔线（列表行、页头页脚） | 白底 1.4:1，**只承担分隔、不承担控件边界** |
| `--c-line-strong` | `#8b8b8b` | `content/color/tdesign.tencent.com--color.md:201`（Gray7 #8b8b8b） | 输入框/次要按钮边界（非文本 3:1） | 白底 **3.41:1** |
| `--c-track` | `#e8e8e8` | `content/color/tdesign.tencent.com--color.md:193`（Gray3 #e8e8e8） | 进度条与数据条的空轨道 | 白底 1.23:1，装饰 |
| `--c-on-brand` | `#ffffff` | `content/color/tdesign.tencent.com--color.md:187` | 品牌底上的文字 | 见 `--c-brand` 行 |

**两处换档（不是抄错，是按规矩改的）**：

1. 原文把 `brand-color-hover` 映射到 Blue6 `#366ef4`（`content/color/tdesign.tencent.com--color.md:63`，映射写在 `:508`）。实测白字压 `#366ef4` = **4.47:1**，不到 4.5，按 `guide.md:43`「语义 token 映射出的 hover/active 同样按实际底色复算，不达 AA 就同族换档并记取值记录」加一档到 Blue8；active 取 Blue9。同族加深也与 learnui 的结论一致：hover 是「更深的变体」，不是更浅（`content/howto/learnui.design--color-in-ui-design-a-practical-framework.md:238`）。
2. 功能色 Red6/Orange5 的对比度原文自己就写着 4.32 / 3.12（`:77`、`:112`），按 `guide.md:43`「色阶值不等于能当文字」只给边框、图标、进度条；文字换同族 Red7 / Orange7（`:102`、`:136`）。

**配色框架的用法**（`howto-ui-color-framework`）：一个基色（腾讯蓝）派生 hover/active 两档，只动明度一维，不换色相；界面里只有 1 个品牌色 + 3 个功能色（红/橙/绿），绿只用于「节奏正常」这一处文案状态，凑不满 NN/g 的「2 主色 2 辅色」。

---

## 4. 字号 / 行高 / 字重

| 档 | 字号 | 行高 | 字重 | 用在哪 | 出处 |
| --- | --- | --- | --- | --- | --- |
| 正文 | 14px | 22px（派生：字号+8） | 400 | 所有正文、标签、说明、列表 | `content/type/tdesign.tencent.com--fonts.md:52`（第一字阶 +2 = 14px 正文） |
| 次标题 | 16px | 24px（派生：字号+8） | 600 | 卡片标题、段落标题、输入框标签 | `content/type/tdesign.tencent.com--fonts.md:53`（+2 = 16px） |
| 展示 | 28px | 36px（派生：字号+8） | 600 | 只有两个：页首结论金额、金额输入 | `content/type/tdesign.tencent.com--fonts.md:57`（第二字阶 +4 = 28px） |

- **行高公式**：`行高 = 字号 + 8`，`content/type/tdesign.tencent.com--fonts.md:67`（原文给 n=8 的推导，`:73-74` 同值）。实现用零特异性通配 `:where(body, body *){line-height:calc(1em + 8px)}`，每个元素按自身字号算，写成 `body{...}` 会被继承成固定值。
- **字重**：只有 400 / 600 两档，`content/type/tdesign.tencent.com--fonts.md:81`。
- **字体栈**：系统栈照抄 `content/type/tdesign.tencent.com--fonts.md:34`，零外链。
- **数字**：原文点名 TCloud Number（`content/type/tdesign.tencent.com--fonts.md:37`），零外部请求拿不到，按 `guide.md:41` 降级为 `font-variant-numeric: tabular-nums`，**标降级**，不冒充原文值。
- 字阶只用了 14 / 16 / 28 三档（10/12/20/24/36+ 未用），符合 NN/g「最多 3 档」（`content/howto/nngroup.com--visual-hierarchy-ux-definition.md:76`）。

---

## 5. 间距 / 圆角 / 容器 / 断点

| token | 值 | 出处 / 规则 |
| --- | --- | --- |
| `--sp-1` | 4px | `content/layout/tdesign.tencent.com--layout.md:107`（8 倍数基础上增加 4、12 两档） |
| `--sp-2` | 8px | `content/layout/tdesign.tencent.com--layout.md:65`（网格基数 8px） |
| `--sp-3` | 12px | `content/layout/tdesign.tencent.com--layout.md:107`（同上，12 档） |
| `--sp-4` | 16px | `content/layout/tdesign.tencent.com--layout.md:77`（槽默认 16px） |
| `--sp-6` | 24px | `content/layout/tdesign.tencent.com--layout.md:81`（安全边距默认 24px） |
| `--sp-8` | 32px | 派生：8 的倍数合成，依据 `content/layout/tdesign.tencent.com--layout.md:81`「建议使用 8 的倍数」 |
| `--sp-12` | 48px | 派生：同上（页面底部留白） |
| `--r-sm` | 4px | **derived**：库无通用圆角原文，按 `guide.md:40` 统一派生 4 / 8 两档 |
| `--r-md` | 8px | **derived**：同上（卡片、提醒带、抽屉） |
| `--shell` | 960px | **derived**：内容区 12 栅格（`content/layout/tdesign.tencent.com--layout.md:87`），画板按 1440 取一半上限 960 |
| `--measure` | 640px | **derived**：中文 35–45 字／行（`guide.md:48`），14px × 45 字 ≈ 630，取 640；768–991 单栏时收在此宽度内 |
| `--target` | 44px | **derived**：`guide.md:51` 触控目标稳妥取 44px（WCAG 2.2 下限） |
| 卡片内边距 | 16px（<768）/ 24px（≥768） | 16 为 8 倍数派生；24 取 `content/layout/tdesign.tencent.com--layout.md:81` |
| 金额输入框高 | 56px | **derived**：28px 字 + 上下各 8 + 边框，取 8 的倍数 |
| 进度条 / 数据条高 | 8px | **derived**：几何参数库无原文（`guide.md:44`），取网格基数一档 |
| 抽屉宽 | 480px（移动端满宽） | **derived**：`guide.md:45` 组件尺寸兜底档，全站统一 |
| 遮罩 | `rgba(0,0,0,.45)` | **derived**：`guide.md:50` 遮罩全站一档 |
| 焦点环 | 2px 实线 + 2px 偏移，色 `#0052d9` | **derived**：`guide.md:51`；环压白 6.54:1、压灰 5.96:1（实测） |

**断点**：768 / 992 取 `content/layout/tdesign.tencent.com--layout.md:117-118`（sm 768px、md 992px）；1200 未用（单页无第三档布局）。

---

## 6. 动效

| 用途 | 时长 | 缓动 | 出处 |
| --- | --- | --- | --- |
| 颜色/边框状态切换（hover、选中、错误） | 100ms | `cubic-bezier(.38,0,.24,1)` | `content/motion/tdesign.tencent.com--motion.md:96`（@duration-mobile-base 100ms）+ `:111`（@standard） |
| 一般容器变化 | 120ms | 同上 | `content/motion/tdesign.tencent.com--motion.md:97`（120ms） |
| 抽屉进场、进度条与数据条宽度 | 140ms | 进场 `cubic-bezier(0,0,.15,1)`；宽度 `cubic-bezier(.38,0,.24,1)` | `content/motion/tdesign.tencent.com--motion.md:98`（140ms）+ `:112`（@ease out 元素入画） |
| 出画曲线 token | 未用 | `cubic-bezier(0.82,0,1,.9)` | `content/motion/tdesign.tencent.com--motion.md:113`；**抽屉关闭取瞬时**（见 §9 第 7 条），故该曲线只登记不使用 |
| 减少动效 | `1ms` | — | `guide.md:39` 与 `content/motion/tdesign.tencent.com--motion.md` 的无障碍底线：`prefers-reduced-motion: reduce` 下全部过渡压到 1ms，实测 `transitionDuration: 0.001s` |

只动 `transform / opacity / width`（宽度是数据条与进度条的唯一表达方式，140ms 一次，限于两条细条，不构成每帧重排长文）。移动端三档（100/120/140）而非桌面档（200/240/280），因为本页主场景是手机（`content/motion/tdesign.tencent.com--motion.md:89`：移动端 100～400ms）。

---

## 7. 设计点路由表

| 设计点 | 类型 | 选用标准（select）读出来的取舍 | 落在这页的哪里 |
| --- | --- | --- | --- |
| `howto-ui-color-framework` | values·方法层 | 一个基色靠明度/饱和度派生状态，不换色相 | 品牌蓝三档（base/hover/active）只动明度；选中态用 Blue1 底 + 品牌字 |
| `howto-visual-hierarchy` | values·方法层 | 最多 3 档字号、最大元素 ≤2、2 主色 2 辅色 | 14/16/28 三档；两个 28px；一个品牌色 + 3 功能色 |
| `color-cn-picking` | values | TDesign 14 级中性色按亮度分层，文字档要复算对比度 | 灰阶 token（bg/track/line/line-strong）；26% 只给禁用 |
| `color-semantic-roles` | values | 先定语义角色再取色值，组件不知道具体色 | primary=Blue7，danger=Red6/Red7，warning=Orange5/Orange7，success=Green5/Green7 |
| `type-scale-steps` | values | TDesign 一级字阶等距 2px、二级 +4/+8 | 取 14 / 16 / 28，跳过 10/12/20/24 |
| `type-line-height-box` | values | 字号与行高成对定义，行高按网格取整 | `calc(1em + 8px)` 全局一条 |
| `layout-spacing-scale` | values | 间距按一套尺度取，不随手写 | 4/8/12/16/24/32/48 七个 token，全页只用这几个 |
| `motion-duration` | values | 时长按场景分档，移动端一套 | 100/120/140 三档 |
| `motion-easing` | values | 进场 ease-out、场内 standard，不用 bounce | 三个定值曲线 token |
| `motion-reduced` | values | reduce 下关闭而不是变慢 | `@media (prefers-reduced-motion: reduce)` 全量 1ms |
| `patterns-form-validation` | patterns | 错误汇总 + 字段旁错误文案措辞一致；空字段用祈使句 | 「这笔还没记上」汇总 + 「请输入这笔的金额」等文案 |
| `a11y-form-structure` | patterns | label 关联、错误绑字段、分组语义 | `<label for>`、`aria-describedby`、`fieldset/legend`、`aria-invalid` |
| `patterns-search-filter` | patterns | 立即生效式筛选 + 已应用筛选可见 | 最近记录的 6 个 chip，`aria-pressed` 显式标当前筛选 |
| `patterns-test-walkthrough` | patterns | 逐项真点真操作并记前后值 | §8 的交互表（7 组，全有前后数字） |
| `dataviz-chart-anatomy` | values | 能直标就不做长图例；标题要有信息量 | 分类名+金额直标，无图例、无轴标题 |
| `dataviz-axes-legends` | values | 比大小的图数值轴从零起 | 数据条长度从 0 起、按最大值归一 |
| `dataviz-data-palette` | values | 分类色板按顺序取，同系列同色 | 单系列 → 全用品牌蓝，不摆 5 种颜色 |
| `dataviz-dashboard-design` | values | 按重要性排序，最重要的占最大面积 | 分类条按金额降序；页首是金额结论 |
| `principles-interaction-states` | values | hover/focus/active/disabled 四态统一 | 按钮四态 + chip 选中态 + 输入 focus 边框 |
| `components-button-hierarchy` | patterns | 每屏一个 primary，secondary 只配 primary | 「保存这笔」唯一 primary；「取消/清空」是 text/secondary |
| `patterns-states-feedback` | patterns | 状态要显式、可感知，不藏 | 预算三档状态（正常/预警/超支）换底、换图标、换 role |
| `patterns-empty-onboarding` | patterns | 空态整体替换内容并给一个主行动 | 筛到无记录时给「这里还没有记录 + 看全部」 |
| `patterns-global-nav` / `layouts-*` | — | 未选：单屏工具没有跨页导航，也没有营销版型 | — |

读过的原文（按点归组，均全文读完）：`howto/learnui.design--color-in-ui-design-a-practical-framework.md`、`howto/nngroup.com--visual-hierarchy-ux-definition.md`、`color/tdesign.tencent.com--color.md`、`type/tdesign.tencent.com--fonts.md`、`layout/tdesign.tencent.com--layout.md`、`motion/tdesign.tencent.com--motion.md`、`icons/tdesign.tencent.com--icon.md`、`patterns/govuk--validation.md`、`components/govuk--error-message.md`、`components/govuk--error-summary.md`、`a11y/web.dev--a11y-forms.md`、`patterns/tdesign.tencent.com--backoffice-tasks.md`、`dataviz/carbondesignsystem.com--data-visualization-{chart-anatomy,axes-and-labels,legends,color-palettes,dashboards}.md`。

---

## 8. 交付自验（数字全部来自 Chromium 实测）

### 8.1 四档宽度（`documentElement.scrollWidth / clientWidth`）

| 宽度 | scrollWidth | clientWidth | 结论 |
| --- | --- | --- | --- |
| 320 | 305 | 305 | 无横向溢出（15px 为经典滚动条） |
| 375 | 360 | 360 | 无横向溢出 |
| 768 | 753 | 753 | 无横向溢出 |
| 1280 | 1265 | 1265 | 无横向溢出 |

补充两条比 `scrollWidth` 更严的检查（`html,body` 上的 `overflow-x: clip` 会把溢出"藏"起来，光看 scrollWidth 会漏）：

- **元素级溢出普查**：遍历所有非隐藏元素，断言 `rect.right ≤ innerWidth`、`rect.left ≥ 0`，四档只有 `.visually-hidden`（读屏用，-1px）命中，其余 0 条。
- **卡片内容越界普查**：断言每个卡片子元素的 `rect.right ≤ 卡片右内边距线`，四档 0 条。

左右边缘也核对了：四档下 `h1` / 提醒带 / 卡片左边缘 `left` 完全一致（320：16 / 375：16 / 768：57 / 1280：177），页头分隔线用伪元素内缩到同一列。

### 8.2 零外部请求

`performance.getEntriesByType('resource').length === 0`，四档复测均为 0。

### 8.3 行高全量普查

遍历含直接文本节点的元素（浏览器实算，排除 0×0）：**86 个节点，违例 0**（验收标准 `|lineHeight − fontSize − 8| ≤ 0.6px`）。四档各跑一次，结果相同。

### 8.4 对比度（实测，WCAG 2.x 公式）

| 场景 | 实测 |
| --- | --- |
| 正文 / 白卡 | **17.49:1** |
| 次要文字 / 白卡 | **5.74:1** |
| 次要文字 / 灰底 | **5.56:1** |
| 主按钮白字 / 品牌蓝 | **6.54:1** |
| 主按钮 hover 白字 | **9.40:1** |
| 选中筛选项（品牌字 / Blue1 底） | **5.93:1** |
| 错误文字 / 浅红底 | **5.69:1** |
| 预警文字 / 浅橙底 | **6.08:1** |
| 输入框边界 / 白（非文本） | **3.41:1** |
| 装饰分隔线 / 白 | 1.40:1（纯装饰，不承担边界） |
| 禁用文字 / 灰底 | **1.87:1**（仅禁用态，WCAG 1.4.3 豁免；占位符已改用 60% 档 5.74:1） |

### 8.5 强调色实填面积

品牌色 `rgb(0,82,217)` 的实填与描边合计 **8,787 px²**：
- 占 375×812 视口 = **2.89%**
- 占整页 360×1,892（681,120 px²）= **1.29%**

构成：主按钮 5,280 + 五条数据条 3,313 + 选中 chip 描边 196。均 < 5%。

### 8.6 交互实测（真跑，记前后值）

| 交互 | 前 | 后 |
| --- | --- | --- |
| 空表单提交 | 0 条错误 | 2 条（请输入这笔的金额 / 请选择这笔的分类），焦点落到错误汇总，2 个字段进 `is-error`，`aria-invalid=true` |
| 金额填 `1.234` | — | 1 条错误「金额最多两位小数」，焦点仍在汇总 |
| 合法提交 28.80 / 餐饮 / 早餐 | 已用 3,286.50，剩余 713.50，记录 6 条 | 已用 3,315.30，剩余 684.70，记录 7 条，餐饮 1,286.00→1,314.80，播报「已记下 餐饮 28.80 元」 |
| 筛选「餐饮」 | 7 条 | 3 条（`aria-pressed` 转移正确） |
| 筛选「居住」 | 3 条 | 0 条 + 空态「这里还没有记录。看全部」 |
| 周期切到「上月」 | 合计 3,315.30（11 月） | 合计 2,914.20（10 月），条宽 100%/81.7%/36.5%/27.2%/19.1% |
| 开预算抽屉 | `aria-expanded=false`，`hidden` | `aria-expanded=true`，`is-open`，落位 top=532（视口 812），遮罩 `rgba(0,0,0,.45)`，焦点进输入框 |
| Esc 关抽屉 | 开 | `hidden=true`、`inert=true`、`aria-expanded=false`、焦点回「调整」按钮；点遮罩同样关闭 |
| 预算 4,000→3,100 | 82%，提醒带 `banner`（status） | 107%，`banner banner--over`（role 切 alert），进度条 `is-over`，页首「本月超支 215.30 元」，`aria-valuenow=100`、标签「本月预算已用 107%，已超支」 |
| `prefers-reduced-motion: reduce` | 过渡 100/140ms | 全部 `0.001s`，抽屉仍在 532 处就位 |

### 8.7 结构核对

- 每屏一个 primary 按钮（保存这笔）；抽屉里的 primary 属于弹层，不算同屏。
- 所有输入都有可见 label；错误文案同时出现在汇总与字段旁，措辞逐字一致（GOV.UK `content/components/govuk--error-message.md:199`）。
- 表单 `novalidate`、不加 `required`（`content/patterns/govuk--validation.md:111-113`），校验全在提交时。
- 错误汇总放在 `<main>` 顶部、`<h1>` 之上（`content/components/govuk--error-summary.md:219`）。
- 图标的图形是 24×24 栅格、2px 描边（`content/icons/tdesign.tencent.com--icon.md:38`、`:56`），渲染尺寸 16/20px。

---

## 9. 回炉记录（第一版怎么错、怎么改）

第一版确实有问题，下面每条都有实测证据，不是事后修辞。

| # | 问题 | 证据 | 改法 |
| --- | --- | --- | --- |
| 1 | 金额输入框套了两层边框 | `.field input[type=text]`（1px）盖住了内层 input 的 `border:0`，实测 `amount` 的 `borderTopWidth=1px` | 选择器收窄为 `.field > input[type=text]`；复测 input 0px、外层 1px `#8b8b8b` |
| 2 | 分类 5 项在 375 下排成 4+1，孤行 | 截图目视 + 宽度计算（5×54+4×8=302 > 296） | 分类组改 3 列网格，320/375 都是 3+2 |
| 3 | 分类条不按金额排序，看图得自己比 | 首版按固定分类顺序 | 改降序渲染（Carbon「按重要性排序」） |
| 4 | 320 下导语把「笔」挤到第二行，成孤字 | 截图目视 | 拆成三个 nowrap 段 + 伪元素分隔点；320 下实测单行 273px 放得下 |
| 5 | 提醒带把「713.50 / 元」拆到两行 | 320 截图目视 | 金额 + 单位包进 `.nb{white-space:nowrap}` |
| 6 | 抽屉打开后卡在屏外 | 首版用 `requestAnimationFrame` 上类名；后台标签页 rAF 被节流，实测 class 仍是 `drawer`、`top=812` | 改同步读一次布局（`void offsetWidth`）再上类名；复测 `is-open`、top=532 |
| 7 | 140ms 内关-开会把抽屉自己收掉；Esc 后状态卡住 | 实测重开后 `hidden=true`；Esc 后 350ms 仍 `hidden=false`（Timer 被节流） | 关闭改瞬时：立刻 `hidden` + `inert` + 焦点回位，不做退场动画；复测三个入口（Esc/取消/遮罩）都同步生效 |
| 8 | 超支时 `aria-valuenow=110` 超过 `aria-valuemax=100` | 实测 | 夹到 100，把「已超支」写进 `aria-label` |
| 9 | 页头分隔线与页脚横线比卡片宽 24px，右边缘参差 | 1280 实测：横线到 1112，卡片到 1088 | 横线改用 `::after/::before` 内缩到 padding 内侧，四档复测左边缘一致 |
| 10 | 占位符用 26% 黑，1.87:1 | 实测 | 占位符改 60% 档（5.74:1）；26% 只留给禁用按钮 |
| 11 | 主按钮 hover 用 Blue6，白字 4.47:1 | 实测 | 换 Blue8（9.40:1），active 取 Blue9（12.95:1），记取值记录 |
| 12 | 大标题在 1280 下只有 640 宽，和两栏右边缘不对齐 | 1280 截图目视 + 实测 h1 到 697、卡片到 1089 | 单栏限宽只在 768–991 生效；≥992 标题与网格同宽 |
| 13 | 金额输入框比卡片宽 45px，右侧顶出内容区（被 `overflow-x: clip` 掩盖，`scrollWidth` 仍是 360=360，看数字看不出来） | 实测 `.amount-wrap` 右边缘 373，卡片内容右边缘 328，输入框 intrinsic 宽度把 grid 的 `auto` 轨道撑开 | `.form` / `.field` 改 `grid-template-columns:minmax(0,1fr)`；输入框 `flex:1 1 0%` + `width:100%`；复测 wrap 32→328，与备注框、保存按钮同列 |

---

## 10. 超出基准规范的数值清单（全部标 derived / 降级）

| 维度 | 取的什么 | 为什么派生 | 依据 |
| --- | --- | --- | --- |
| 圆角 | 4px / 8px 两档 | 库内无通用 radius 原文 | `guide.md:40` |
| 组件尺寸 | 输入框 56、按钮 44、抽屉 480 | 基准规范不给控件尺寸 | `guide.md:45`（尺寸兜底） + `guide.md:51`（触控 44） |
| 图表几何 | 条高 8、条间距 12、条长按当期最大值归一到 100% | 基准规范不给轴档数、柱宽、环半径 | `guide.md:44`（构图原则回源 Carbon，数值自定） |
| 遮罩 | `rgba(0,0,0,.45)` | 库无遮罩档位 | `guide.md:50` |
| 焦点环 | 2px 实线 + 2px 偏移 | 基准规范无焦点环规格 | `guide.md:51` |
| 金额排版 | 两位小数、千分位、`-¥32.00`、`tabular-nums` | 库无金额排版原文 | `guide.md:52` + `guide.md:41`（数字字体降级） |
| 中文行长 | 640px 上限 | 库无行长原文 | `guide.md:48` |
| 容器宽 | 960px | 基准规范只给 12 栅格与 1440/1920 画板 | `content/layout/tdesign.tencent.com--layout.md:87` + derived |
| 页面留白 | 32 / 48px | 派生：8 的倍数合成 | `content/layout/tdesign.tencent.com--layout.md:81` |
| 两栏比 | 5:7 | 版式决策，非数值规范 | derived |
| 列表行高 / 日期格式 | 12px 上下内边距、`MM-DD` | 无原文 | derived |
| 数字字体 | `tabular-nums` | TCloud Number 零请求拿不到 | `guide.md:41`（降级，不冒充原文值） |
| 抽屉关闭 | 无退场动画（瞬时） | 基准规范只给进/出画时长，没给「关闭要不要动画」 | 决策：可见性与焦点优先，见 §9 第 7 条 |
