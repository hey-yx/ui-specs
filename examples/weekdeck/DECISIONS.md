# DECISIONS · WeekDeck（weekdeck）

## 1. 设计前提

| 项 | 判断 | 依据 |
| --- | --- | --- |
| 受众 | 一个 5 人小团队的负责人与成员；负责人周五下午要拿一页交代进度，成员要确认自己的周报被收进去 | `briefs/weekdeck.md`（受众、核心任务） |
| 用途 | 一页看完：本周完成数 → 燃尽 → 成员周报 → 一键生成摘要并复制 | 同上（页面必备内容 5 条） |
| 语气 | 克制、直陈事实：先给数字，再给一句解释。不写「赋能」「闭环」这类词 | 中文界面文案按 `content/markdown/github.com--chinese-copywriting-guidelines.md:27` `:44` `:55`（中英文、中文与数字、数字与单位之间加空格） |
| 产品语境 | **中文产品 UI（中后台 / 工具 / 协作）** | 界面文案全中文、团队协作场景、中后台任务形态；对应 `site/dist/ai/guide.md:27` 的「中文产品 UI」一行 |
| 基准规范 | **TDesign**（唯一基准规范，拥有全部数值决定权） | `site/dist/ai/guide.md:27` 指定 `content/color/tdesign.tencent.com--color.md`、`content/type/tdesign.tencent.com--fonts.md`、`content/layout/tdesign.tencent.com--layout.md`、`content/icons/tdesign.tencent.com--icon.md`、`content/motion/tdesign.tencent.com--motion.md` |
| 设计场景 | 主：s3 后台与数据面板；辅：s10 图表与数据可视化、s6 数值层、s5 组件设计、s19 状态与反馈、s9 无障碍验收、s13 文案、s18 导航与信息架构 | `design-points.json` 的 `points_by_task` 反查，选用标准见 §7 |

不选 Carbon 作基准规范的原因：本页是中文协作工具的一个页面，产品不是 BI / 图表产品；Carbon 只按 `site/dist/ai/guide.md:44`「构图原则回源 Carbon 图表解剖系列」取构图原则，不取它的色值与字号。

## 2. 结构决策

| 项 | 决定 | 依据 |
| --- | --- | --- |
| 版式 | **Long Document**：单栏、自上而下、段落即分区，无卡片阵列、无 hero、无编号步骤卡 | 需求里要求「收在一页」；`content/dataviz/carbondesignsystem.com--data-visualization-dashboards.md:32`（最重要的数据占最大面积、对比度最高）、`:34`（F 形：先左后下）、`:36`（指标数量砍到不干扰判读）、`:44-46`（留白当分隔）；字号只三档来自 `content/howto/nngroup.com--visual-hierarchy-ux-definition.md:76` |
| 导航 | **N6 报头（刊头式）**：期号行 → 品牌字 `WeekDeck` → 双细线 → 工具行（周期切换、更新时间）。不造多页导航 | 单页、无二级路由，造导航条是假接口；报头同时承担「第几周」的时间坐标。跳转链接放在首个可聚焦位置，依 `content/patterns/carbon--global-header.md:315` `:323` `:331` |
| 页脚 | **Ft2 单行小字**：产品名 + 「演示数据」声明 + 「零外部请求」 | `content/patterns/ui-specs--test-walkthrough.md:22`（虚构数据必须标明）；非 gov.uk 域名，`components-header-footer` 点的 GOV.UK 页脚不适用 |
| 强调色 | **#0052d9（Blue7 品牌色）**，只出现在四处：主按钮填充、折线「实际剩余」、选中 chip 的文字与描边（底色用 Blue1）、图例色块。实填面积 320 档 1.231%、1280 档 0.343% | `content/color/tdesign.tencent.com--color.md:34` `:45`（品牌色）、`:48`（Blue1）、`:42`（原文本色承白字 6.54:1）；面积按 `content/howto/learnui.design--color-in-ui-design-a-practical-framework.md:157`（深浅变体靠降亮度、不靠加色相）控制为一个基色的深浅 |

版式细节：品牌字与 KPI 主数字同为 36px（全页最大只此 2 个），区块标题 20px，其余全部 14px —— 三档，符合 `site/dist/ai/guide.md:59`、`content/howto/nngroup.com--visual-hierarchy-ux-definition.md:76`。

## 3. 色彩表

全部取自基准规范色板；「实测」列是浏览器里对真实元素跑 WCAG 公式的结果（前景 vs 该元素实际底色）。

| token | 值 | 出处 `content/…:行号` | 用在哪 | 实测对比度 |
| --- | --- | --- | --- | --- |
| `--paper` | `#ffffff` | `content/color/tdesign.tencent.com--color.md:187` | 页面底、抽屉底 | 正文 15.52:1 |
| `--paper-2` | `#f3f3f3` | `content/color/tdesign.tencent.com--color.md:189` | 摘要卡底、悬停底、图例选中底 | 正文 13.99:1 / 次要 5.84:1 |
| `--paper-3` | `#eeeeee` | `content/color/tdesign.tencent.com--color.md:191` | 禁用按钮底、进度槽 | 禁用文字 5.59:1 |
| `--line` | `#e8e8e8` | `content/color/tdesign.tencent.com--color.md:193` | 1px 分隔线、网格线（装饰，不承担控件边界） | 不适用（装饰） |
| `--line-strong` | `#8b8b8b` | `content/color/tdesign.tencent.com--color.md:201` | 控件描边、输入框描边、十字准线 | 非文本 3.41:1 |
| `--ink` | `#242424` | `content/color/tdesign.tencent.com--color.md:213` | 正文、主数字、摘要 | 15.52:1 |
| `--ink-2` | `#5e5e5e` | `content/color/tdesign.tencent.com--color.md:205` | 次要文字、期号、页脚、标签 | 6.48:1 |
| `--accent` | `#0052d9` | `content/color/tdesign.tencent.com--color.md:45` | 主按钮底、实际线、选中 chip 字 | 白字承底 6.54:1；选中 chip 字压 Blue1 5.93:1 |
| `--accent-hover` | `#003cab` | `content/color/tdesign.tencent.com--color.md:69` | 主按钮 hover | 白字承底 9.40:1 |
| `--accent-active` | `#002a7c` | `content/color/tdesign.tencent.com--color.md:72` | 主按钮按下 | 只出现在按下瞬间，未单独建表 |
| `--accent-soft` | `#f2f3ff` | `content/color/tdesign.tencent.com--color.md:48` | 选中 chip / 选中周期底 | 深字压底 14.07:1 |
| `--danger` | `#ad352f` | `content/color/tdesign.tencent.com--color.md:101` | 阻塞标记、校验错误文字、错误描边 | 6.31:1（压白）/ 5.69:1（压 Red1） |
| `--danger-soft` | `#fff0ed` | `content/color/tdesign.tencent.com--color.md:83` | 校验错误时的输入框底 | 同上 |
| `--success` | `#006c45` | `content/color/tdesign.tencent.com--color.md:171` | 生成成功提示、校验通过 | 6.50:1（压白）/ 5.88:1（压 Green1） |
| `--success-soft` | `#e3f9e9` | `content/color/tdesign.tencent.com--color.md:153` | 成功提示底 | 同上 |
| `--series-2` | `#00668e` | `content/color/tdesign.tencent.com--color.md:381` | 燃尽图「计划剩余」虚线 + 空心点 | 非文本 6.38:1 |

两条曲线**不靠颜色单通道区分**：实际=蓝色实线+实心点，计划=青色虚线+空心环，色相/线型/标记三重编码，满足 `content/a11y/w3c--wcag-2.2.md:512` 与 `content/howto/nngroup.com--visual-hierarchy-ux-definition.md:59`（对比变化不超过 3 种）。

**一处同族换档（按 `site/dist/ai/guide.md:43`「色阶当文字」实算后改）**：基准规范的语义映射是 `brand-color-hover:@blue-color-6`（`content/color/tdesign.tencent.com--color.md:508`），Blue6 `#366ef4` 承白字复算只有 **4.47:1**，不到 4.5 —— 主按钮 hover 改用同族深一档 Blue8 `#003cab`（9.40:1），按下用 Blue9 `#002a7c`。没有跨源借色，只在 TDesign 色板内加深。

## 4. 字号 / 行高 / 字重

行高列全部是公式产物：`line-height = font size + 8`（`content/type/tdesign.tencent.com--fonts.md:67`、`:74` 给出 `n = 8`）。

| 用途 | 字号 | 行高（公式产物） | 字重 | 出处 |
| --- | --- | --- | --- | --- |
| 正文、标签、按钮、表格、轴标签、图例 | 14px | 22px | 400；强调处 600 | 字号 `content/type/tdesign.tencent.com--fonts.md:52`；字重 `:81` |
| 区块标题、KPI 分母、抽屉标题 | 20px | 28px | 600 | 字号 `content/type/tdesign.tencent.com--fonts.md:54` |
| 品牌字「WeekDeck」、KPI 主数字 | 36px | 44px | 600 | 字号 `content/type/tdesign.tencent.com--fonts.md:58` |

- 实现：`:where(body, body *) { line-height: calc(1em + 8px) }`，零特异性、按元素自身字号算；`head` 另加一条同规则，保证全量普查遍历到脚本/样式节点也不违例。**没有任何一处写死 line-height**。
- 字体栈：`content/type/tdesign.tencent.com--fonts.md:34` 原样照抄。
- 数字：`font-variant-numeric: tabular-nums` 近似等距 —— 规范点名的 TCloud Number（`content/type/tdesign.tencent.com--fonts.md:37`）在零外部请求下拿不到，按 `site/dist/ai/guide.md:41` 标**降级**，不冒充原值。

## 5. 间距 / 圆角 / 容器 / 断点

| 项 | 值 | 出处 / 规则 |
| --- | --- | --- |
| 间距尺度 | 4 / 8 / 12 / 16 / 24 / 32 / 48 | 8px 网格基数 `content/layout/tdesign.tencent.com--layout.md:65`；另加 4、12 两档小间距 `:107`；32/48 为 8 的倍数，同条允许 |
| 栅格与槽 | 内容区 12 栅格、槽 16px | `content/layout/tdesign.tencent.com--layout.md:87` `:77` |
| 安全边距 | 320 档 16px，768 档起 24px | 默认 24px、建议 8 的倍数 `content/layout/tdesign.tencent.com--layout.md:81` |
| 容器 | `max-width: 45em`（14px 下 = 630px ≈ 中文 45 字/行） | **derived**：`site/dist/ai/guide.md:48`「中文 35–45 字，同页只用一种」 |
| 圆角 | 4px（控件）/ 8px（摘要卡） | **derived**：`site/dist/ai/guide.md:40`「4px / 8px 两档起步，整站统一」 |
| 发丝线 | 1px | **derived**：`site/dist/ai/guide.md:42` |
| 控件高 | 44px（按钮、chip、输入框、手风琴标题、图例项、抽屉关闭钮） | **derived**：`site/dist/ai/guide.md:51` 明确「触控目标稳妥取 44px」，下限来自 `content/a11y/w3c--wcag-2.2.md:907`（24×24 是下限，44 更稳） |
| 断点 | 只用 768px（sm）一档切换页边距与抽屉宽度 | 基准规范三档 768/992/1200（`content/layout/tdesign.tencent.com--layout.md:117-119`），`:114` 允许按业务只取其中部分 |
| 抽屉宽 | `min(100%, 520px)` | **derived**：随内容定，窄屏整宽，无横向截断（320 档实测 drawer 宽 320） |
| 图表几何 | 绘图区高 200px、5 个横坐标点、2px 线宽、实际点 9px、计划环 11px、网格 1px、点半径按 4.5px 偏移 | **derived**：`site/dist/ai/guide.md:44`（几何参数标 derived，构图原则回源 Carbon） |

## 6. 动效

| 用途 | 时长 | 缓动 | 出处 |
| --- | --- | --- | --- |
| 颜色/底色的 hover、press 反馈 | 100ms | `cubic-bezier(.38,0,.24,1)` | `content/motion/tdesign.tencent.com--motion.md:96`（mobile-base 100ms）、`:111`（standard easing） |
| 手风琴箭头翻转、进度条推进 | 200ms / 240ms | 同上 | `content/motion/tdesign.tencent.com--motion.md:99`（desktop-base 200ms）、`:100`（desktop-moderate 240ms） |
| 抽屉开合 | 即时（`hidden` 切换，无过渡） | — | 见下 |
| 减少动效 | `prefers-reduced-motion: reduce` 下所有 transition/animation 关闭 | — | `content/motion/atlassian.design--motion.md:168` `:170`（reduced motion 时「motion is off and instant」，不是变慢） |

**为什么不回源 NN/g 取时长**：`site/dist/ai/guide.md:39` 的条件是「基准规范没有动效篇时」。TDesign 有动效篇且被 `site/dist/ai/guide.md:27` 列为基准规范文件，按时长 token 取 100/200/240ms；这三档与 `content/motion/nngroup.com--animation-duration.md` 的 100/200/300 同一量级，不冲突也不同源拼值。缓动只用基准规范三条定值曲线（`:111-113`），没有自造 cubic-bezier。

**抽屉为什么不做过渡**：抽屉承载「进度 → 摘要 → 成功」三段状态，开合动画会和进度条推进抢帧；改为即时切换后，`hidden` 状态与 `aria` 状态一一对应，自验时读到的开合前后数字没有过渡中间态。这条是**派生决策**，不是基准规范值。

## 7. 设计点路由表

点了 28 个点。选用标准列是 `design-points.json` 里 `select` 的要点，落地列写它在本页变成了什么。

| 点 | 选用标准（select 要点） | 落在哪 |
| --- | --- | --- |
| `howto-visual-hierarchy`（方法必读） | 字号最多 3 档，最大的元素不超过 2 个 | 14 / 20 / 36 三档；36px 只有品牌字与 KPI 主数字 |
| `howto-ui-color-framework`（方法必读） | 一个基色推深浅变体，hover 只动饱和、选中只动亮度 | 只用 Blue7 一个基色；hover/active 走基准规范 Blue8/Blue9 语义 token |
| `type-scale-steps` | 字阶按任务跨度选步长，一套系统只用少数几号 | 只取基准规范字阶的 14/20/36 三档（`content/type/tdesign.tencent.com--fonts.md:52` `:54` `:58`） |
| `type-line-height-box` | 字号与行高成对定义 | 22/28/44，全部由 `content/type/tdesign.tencent.com--fonts.md:67` 公式产出 |
| `type-weight-restraint` | 一套界面通常只用两档字重 | 只用 400 / 600（`content/type/tdesign.tencent.com--fonts.md:81`） |
| `type-font-stack-selection` | 定字体栈、字阶、字重组合 | 栈原样用 `content/type/tdesign.tencent.com--fonts.md:34`，不额外引外链字体 |
| `type-measure-limit` | 行太长会串行，宽屏要收窄正文栏 | 容器 45em 封顶（derived，`site/dist/ai/guide.md:48`） |
| `layout-spacing-scale` | 间距按一套尺度取，不随手写 | 4/8/12/16/24/32/48，全部落在 `content/layout/tdesign.tencent.com--layout.md:65` `:107` |
| `layout-density` | 密度是显式选择，组件内间距不当页面留白 | 区块间 48px、组件内 4–12px，两层分开 |
| `dataviz-chart-anatomy` | 矩形图九要素；数据能直标就别做长图例；tooltip 给两轴数值 | 标题+一句结论、轴标签、刻度、图例、绘图区、tooltip（「周五 · 实际 6 项 · 计划 0 项」）、数据表兜底 |
| `dataviz-axes-legends` | 比大小的图必须从零起；只有一个系列不用图例；图例交互是悬停高亮+点击筛选 | 纵轴 0 起、未截断；两条系列所以保留图例；悬停他条降 0.3、点击只看一条（`content/dataviz/carbondesignsystem.com--data-visualization-legends.md:86` `:92` `:98`） |
| `dataviz-data-palette` | 分类色板严格按顺序取色，保证相邻色对比 | 两系列取品牌蓝 + 扩展色 Cyan7（`content/color/tdesign.tencent.com--color.md:357` 说明扩展色用于数据可视化，`:381` 给值） |
| `dataviz-dashboard-design` | 展示型：最重要的数据放顶部、按 F 形铺开、砍指标数 | 首屏顺序：完成数 → 燃尽 → 成员 → 生成；只留 1 个主指标 |
| `layouts-dashboard-density` | 数据密集看板适合 BI/运营，不适合营销看板 | 去掉 KPI 卡阵列，用单栏文档节奏，避免营销式卡片墙 |
| `patterns-search-filter` | 筛选必须带「全部/任意」项；收起态也要显示已应用；每类可一键清空 | 4 个 chip，默认「全部」；`aria-pressed` 常显；点「全部」即清空；筛选后 `role=status` 播报「共 N 条」 |
| `patterns-loading` | 加载指示放内容原位；筛选用常驻 `role=status` 播报结果数 | 进度条与文案在抽屉原位；`#filterCount` 常驻 `role="status" aria-live="polite"` |
| `components-progressive-disclosure` | 次要信息收起，主流程不打断 | 成员周报默认收起；「查看数据表」用 `<details>` |
| `a11y-expand-collapse-keys` | 标题按钮 Enter/Space 展开，展开态挂 `aria-expanded`，内容区 `aria-controls` | 每个成员标题是原生 `<button>`，带 `aria-expanded` / `aria-controls`（`content/a11y/w3c--apg-accordion.md:44` `:56` `:57`） |
| `components-button-hierarchy` | 每屏一个 primary；页头/弹窗/侧栏不算；切换按钮 `aria-pressed` 显式写 | 页内唯一 primary 是「一键生成本周周报」；抽屉内唯一 primary 是「复制摘要」；周期切换与 chip 都用 `aria-pressed`，文案不随状态改 |
| `a11y-focus-visibility` | 用 `focus-visible`；顶部放跳转链接；纯键盘可完成 | 全局 `:focus-visible` 2px 实线 + 2px 偏移；首个可聚焦元素是「跳到本周内容」 |
| `a11y-contrast-threshold` | 选完色要实算；信息不能只靠颜色 | 全部文字 ≥ 5.59:1，非文本 ≥ 3.41:1；阻塞用「· 有阻塞」文字 + 红色双通道 |
| `a11y-modal-focus-trap` | 打开锁焦点、Esc 关闭、关闭后焦点还原 | 抽屉 `role="dialog" aria-modal="true"`，Tab 循环、Esc 关闭、焦点回「一键生成本周周报」 |
| `motion-duration` | 时长按场景分档，别一个值用到底 | 100ms 反馈 / 200ms 箭头 / 240ms 进度条，全部基准规范 token |
| `motion-easing` | 进场 ease-out、出场 ease-in，常规 UI 不用 bounce | 只用基准规范三条 cubic-bezier，无弹性曲线 |
| `motion-reduced` | reduce 下关闭或即时，不能只变慢 | `@media (prefers-reduced-motion: reduce)` 关闭全部过渡 |
| `patterns-form-validation` | 标题前加 `Error: `；空字段用祈使句、超长给描述句；超字数不拦输入只提示 | 校验失败时 `document.title` 前加 `Error: `；「请填写周报标题，发送前必须有一个名字。」/「标题请控制在 24 字以内，当前 31 字。」；输入框不限长 |
| `patterns-notification` | 信息/警告/错误分层；`aria-live` 默认 polite，不播报一切 | 成功、错误、复制状态各自 `role="status" aria-live="polite"`，无 assertive |
| `markdown-cn-copywriting` | 中英文、中文与数字、数字与单位之间加空格 | 全文照做（「24 项」「11 月 2 日」「第 45 周」） |

未采用：`components-header-footer`（GOV.UK 页头页脚绑定 gov.uk 域名与服务名，本页不适用）、`components-tabs`（周期只有两项且互斥，用 `aria-pressed` 的双按钮比 tablist 更少语义负担，也不涉及 roving tabindex）。

**一处偏离并说明**：`patterns-form-validation` 还要求「错误摘要放 main 顶部并把焦点移过去」。本页校验发生在抽屉内的单字段上，把焦点抢到抽屉顶部会把用户从输入框踢走，实际体验更差；改为字段旁消息 + 页面标题前缀（两条照做），不做页面级摘要。

## 8. 交付自验

全部数字来自 `browser_exec` 打开 `file:///Users/mac/workspace/active/UISpecs/examples/weekdeck/index.html` 的真实测量（Chrome，DPR 1，视口高 900；320 档另用 DPR 2 复看）。

**四档溢出与零资源**

| 视口 | `scrollWidth / clientWidth` | 资源条目 | 页面高 |
| --- | --- | --- | --- |
| 320 | 320 / 320 | 0 | 1927 |
| 375 | 375 / 375 | 0 | 1841 |
| 768 | 768 / 768 | 0 | 1731 |
| 1280 | 1280 / 1280 | 0 | 1731 |

零资源同时做了静态核对：全文 `http(s)://` 0 处、`<link>` 0 个、`@import` 0 处、`url(` 0 处、`src=` 0 处、`<img>` 0 个；1 个 `<style>`、1 个 `<script>`、3 个内联 `<svg>`（勾选图标、关闭图标、燃尽图）。

**行高全量普查**：遍历 `body` 下所有含直接文本且可见的元素，比对 `lineHeight` 与 `fontSize + 8`。闭合态 113 个节点 0 违例；抽屉打开态 116 个节点 0 违例。

**强调色实填面积**（`background-color` 恰为 `rgb(0,82,217)` 的可见元素面积之和 ÷ 页面面积）

| 视口 | 面积 px² | 占比 |
| --- | --- | --- |
| 320 | 7,593 | 1.231% |
| 375 | 7,593 | 1.100% |
| 768 | 7,593 | 0.571% |
| 1280 | 7,593 | 0.343% |
| 1280（抽屉打开） | 5,129 | 0.231% |

**核心交互前后**

| 交互 | 前 | 后 |
| --- | --- | --- |
| 周期切换（本周 → 上周） | 主数字 `18`、`/ 24 项`、`第 45 周 · 11 月 2 日 — 11 月 6 日` | 主数字 `15`、`/ 22 项`、`第 44 周 · 10 月 26 日 — 10 月 30 日`；图、成员、摘要一起重渲染 |
| 筛选（本周，已提交 / 待提交 / 有阻塞 / 全部） | 5 条 | 4 → 1 → 1 → 5 条 |
| 筛选（上周，已提交 / 待提交 / 有阻塞 / 全部） | 5 条 | 5 → 0（走空态，文案给下一步）→ 2 → 5 条 |
| 成员周报展开 | `aria-expanded="true"` 0 个，面板 `hidden=true` | 1 个，面板 `hidden=false`，面板文本 60 字；再点回 0 个 |
| 图例点击「计划剩余」 | 两线 opacity 1 / 1 | 计划 1、实际 0.3，`aria-pressed="true"`；再点复位 1 / 1 |
| 一键生成（进度态） | 摘要 0 字 | `aria-valuenow` 0 → 34 → 67 → 100，文案依次「正在读取 5 份周报…」「正在归并阻塞项…」「正在核对完成数与燃尽曲线…」「正在润色摘要…」 |
| 一键生成（摘要 + 成功提示） | 摘要 0 字，`#result` 隐藏 | 摘要 239 字，提示「本周周报已生成，共 239 字」 |
| 表单校验（空） | 无消息，`aria-invalid="false"` | 「请填写周报标题，发送前必须有一个名字。」`aria-invalid="true"`，`document.title` 变 `Error: WeekDeck · 第 45 周` |
| 表单校验（31 字） | 无消息 | 「标题请控制在 24 字以内，当前 31 字。」`aria-invalid="true"` |
| 表单校验（有效） | 无消息 | 「标题已保存，可以复制摘要了。」`aria-invalid="false"`，标题前缀撤掉 |
| 复制摘要 | 状态空 | 「已复制 239 字」（真鼠标手势，非脚本触发） |
| 抽屉开合 | `hidden=true`、`aria-expanded="false"`、焦点在触发按钮 | 打开：`hidden=false`、`aria-expanded="true"`、焦点落到关闭钮、`body` 锁滚动；Esc：`hidden=true`、焦点回「一键生成本周周报」 |

**对比度（WCAG 公式，读 computed style 与逐级解析出的实际底色）**

| 位置 | 前景 / 底色 | 比值 |
| --- | --- | --- |
| 正文（导语） | `#242424` / `#ffffff` | 15.52:1 |
| 主数字 | `#242424` / `#ffffff` | 15.52:1 |
| 次要文字（KPI 说明、列表元信息、期号、页脚） | `#5e5e5e` / `#ffffff` | 6.48:1 |
| 按钮文字（主按钮白字压品牌蓝） | `#ffffff` / `#0052d9` | 6.54:1 |
| 按钮 hover（同族深档） | `#ffffff` / `#003cab` | 9.40:1 |
| 禁用态（禁用按钮文字压禁用底） | `#5e5e5e` / `#eeeeee` | 5.59:1 |
| 选中 chip 文字 | `#0052d9` / `#f2f3ff` | 5.93:1 |
| 错误文字 / 阻塞标记 | `#ad352f` / `#ffffff` | 6.31:1 |
| 成功文字 | `#006c45` / `#ffffff` | 6.50:1 |
| 摘要正文（卡底） | `#242424` / `#f3f3f3` | 13.99:1 |
| 非文本：控件描边 | `#8b8b8b` / `#ffffff` | 3.41:1 |
| 非文本：实际线 | `#0052d9` / `#ffffff` | 6.54:1 |
| 非文本：计划线 | `#00668e` / `#ffffff` | 6.38:1 |

最低文字对比度 **5.59:1**（禁用态），最低非文本 **3.41:1**，均在 AA 之上。

**其他实测**：所有可点元素高度 44px（跳转链接聚焦后 44px；唯一例外是被 `clip-path` 收起的隐藏态，聚焦即展开）。图表容器 320 档宽 241.5px，5 个横轴标签各 48px 无重叠；悬停最右点（周五）时提示框 `right=304 < 320`，不溢出。

## 9. 回炉记录

第一版出稿后跑了四档与交互，改前改后如下：

1. **轴说明与图不符**：原写「两条曲线都从 0 项起算，没有截断」，但曲线起点是 24 项、0 只是纵轴下端。改为「纵轴为剩余待办（项），从 0 项起算、未截断；横轴为本周 5 个工作日」。
2. **燃尽图起点两点完全重合**：计划点被实际点盖住，只剩一个点。计划点从 9px 实心改成 11px 空心环（2px 青色描边），实际点仍 9px 实心带 2px 白描边 —— 叠加时呈「环抱实心点」，两个标记都能看见，且不引入第三种颜色。
3. **图例线型与图中不一致**：图例的「计划剩余」原是 20×3 实心色块，与图中虚线对不上。改成 `repeating-linear-gradient` 的 5/4 虚线纹理，与 `stroke-dasharray="5 4"` 对齐。
4. **窄屏悬停提示会溢出**：原按百分比定位并向右偏移 12px，悬停周五时提示框越出绘图区。改成先量提示宽，再按 `max(0, min(plotW - tipW, x))` 夹在绘图区内；320 档实测最右 `right=304`。
5. **跳转链接聚焦后只有 18px 高**：补 `min-height: 44px` 与 `inline-flex` 居中。
6. **生成结果挤在页面流里**：原来进度、摘要、成功三块直接堆在「本周周报摘要」小节，滚动位置会跳，且没有地方放「发之前改个标题」这件事。改成右侧抽屉：一次只在一个上下文里走完「进度 → 摘要 → 成功」，并补上标题字段（校验三态）、焦点陷阱、Esc 关闭、关闭后焦点还原。复制按钮升为抽屉内唯一 primary（`components-button-hierarchy` 选用标准明说「页头/弹窗/侧栏不算」）。
7. **图例到「查看数据表」空隙过大**：`margin-top` 24px → 4px，数据表入口贴回图例下方。
8. **缺少虚构数据声明**：页脚补「演示数据，非真实团队记录」，依 `content/patterns/ui-specs--test-walkthrough.md:22`。

## 10. 超出基准规范的数值清单

全部标 derived（或降级），规则写在这里，页面里同值只出现一次（走 CSS 变量）：

| 维度 | 值 | 规则与理由 | 对应 |
| --- | --- | --- | --- |
| 圆角 | 4px / 8px | 基准规范无通用 radius 规范，整站两档 | `site/dist/ai/guide.md:40` |
| 控件高 | 44px | 基准规范不给组件尺寸；按 WCAG 目标下限再留余量 | `site/dist/ai/guide.md:51`、`content/a11y/w3c--wcag-2.2.md:907` |
| 焦点环 | 2px 实线 + 2px 偏移 | 基准规范无焦点环规格 | `site/dist/ai/guide.md:51`、`content/a11y/w3c--wcag-2.2.md:791` `:792` |
| 发丝线 | 1px | 基准规范只给分隔线颜色（`content/color/tdesign.tencent.com--color.md:193`） | `site/dist/ai/guide.md:42` |
| 容器宽 | 45em（≈630px） | 中文 35–45 字/行，同页一种 | `site/dist/ai/guide.md:48` |
| 图表几何 | 绘图区 200px 高、2px 线、9px/11px 点、1px 网格、5 个横坐标点、内边距 4px | 基准规范不给轴档数与点径；构图原则回源 Carbon | `site/dist/ai/guide.md:44` |
| 抽屉宽 | `min(100%, 520px)` | 基准规范无抽屉宽度；窄屏整宽是断点推导结果 | 同 `site/dist/ai/guide.md:45` 自成套 |
| 遮罩 | `rgba(0,0,0,.45)` | 基准规范无弹层遮罩 | `site/dist/ai/guide.md:50` |
| 提示框定位 | 先量宽再夹取 | 基准规范无 tooltip 定位规则；窄屏防溢出 | 同 `site/dist/ai/guide.md:44` |
| 数字字体 | `tabular-nums` 降级 | TCloud Number 零外部请求拿不到 | `site/dist/ai/guide.md:41`、`content/type/tdesign.tencent.com--fonts.md:37` |
| 抽屉开合 | 即时无过渡 | 让开合状态与 `aria` 状态一一对应，见 §6 | 派生决策 |
| 栅格 | 未启用 12 栅格，单栏 | 单栏文档不需要列划分；槽 16px 与安全边距 24px 仍按基准规范 | `content/layout/tdesign.tencent.com--layout.md:77` `:81` `:87` |
