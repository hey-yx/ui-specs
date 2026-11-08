# DECISIONS · fixqueue / FixQueue

## 1 设计前提

| 项 | 结论 |
| --- | --- |
| 受众 | 企业 IT 服务台一线支持工程师与值班主管，一天要扫 40–60 条工单 |
| 用途 | 一屏扫完队列，按状态与关键字定位，批量指派/关闭，点开看详情 |
| 语气 | utilitarian：操作台腔，陈述句，不用「赋能」「一站式」这类营销词 |
| 产品语境 | 中文产品 UI（中后台） |
| 基准规范 | **TDesign**（`site/dist/ai/guide.md:27` 选型行「中文产品 UI（中后台 / 工具 / 内容 / 协作）」，读 color / fonts / layout / icon / motion 五篇 + dark 篇） |
| 设计场景 | S3 后台与数据面板为主（`design-points.json` `points_by_task.s3`），S5 组件 / S18 导航 / S19 状态反馈 / S4 表单流程 / S6 数值层作交叉取点 |

基准规范缺的维度一律回源或走兜底，派生项在第 10 节逐条列出。数值只认一个来源：本项目所有色值、字号、间距、时长、缓动都出自 TDesign 五篇原文；GOV.UK / Polaris / Carbon / Primer / W3C 只取行为规则与文案口径，**不取数值**。

## 2 结构决策

- **版式**：侧边导航布局——顶栏 + 232px 侧栏 + 单列内容区。依据 `content/layout/tdesign.tencent.com--layout.md:47`（侧边导航布局「页面间切换效率较高」），本页类型是「同一队列反复切换筛选」，不是顶部导航适合的内容型页面。内容区不建 12 栅格：列表页是单列铺满，栅格只保留 8px 网格与 24px 安全边距（`:65`、`:81`、`:87`）。
- **不做营销骨架**：页面没有 hero、没有卡片阵列、没有编号步骤、没有插画。理由不是「后台都这样」，而是需求里核心任务只有「扫队列→定位→批量动作→看详情」，任何首屏装饰都会挤掉可见行数。首屏在 1280×900 下可见 11 行整行。
- **导航**：左侧四项（工单队列 / 我的工单 / 资产取值记录 / 值班报表），当前项用品牌 tint 底 + 品牌色文字。宽度 232px、992px 以下收成 64px 图标栏、767px 以下切成顶部横向导航条（`content/layout/tdesign.tencent.com--layout.md:97`、`:101`、`:103`；窄屏切顶部布局的依据是该篇 `:51` 对顶部导航布局的描述）。
- **页脚**：没有全站页脚。运维台的价值密度在表格里，页脚只在侧栏底部放一行队列元信息（队列名 + 积压数）。
- **强调色**：腾讯蓝 `#0052d9`，只出现在主按钮底、当前导航文字/图标、工单号链接、焦点环、选中行 tint 底。1280×900 空闲态可见区实测实填面积 **0%**；选中一整页（主按钮启用 + 12 个选中复选框）时 **0.478%**，是可见峰值（< 5%）。
- **层级**（`method_required` 的 howto-visual-hierarchy）：全页字号只用 3 档——12px 辅助、14px 正文/表格、20px 页面标题；20px 元素全页只有 1 个（`h1`）。依据 `content/howto/nngroup.com--visual-hierarchy-ux-definition.md:76`（字号最多 3 档）、`:77`（最大元素不超过 2 个）。品牌字样放在后台 chrome 里取 14px/600，不跟页面标题抢层级，避免出现「logo 比 h1 还大」的另一类失衡。
- **配色面积**（`method_required` 的 howto-ui-color-framework）：一个主色（腾讯蓝）+ 一个中性阶（Gray1–Gray13），功能色只做状态语义，且一律浅底深字。依据 `content/howto/learnui.design--color-in-ui-design-a-practical-framework.md:208`（深变体 = 降亮度 + 提饱和）——TDesign 的 Blue1/Blue7/Blue8 正是这套关系，不另配第二色相。

## 3 色彩表

全部取自 `content/color/tdesign.tencent.com--color.md` 与 `content/type/tdesign.tencent.com--fonts.md`。对比度一列是浏览器里按 WCAG 公式对**实际底色**实算的值（脚本取值：`getComputedStyle` 前景色 + 向上找到的第一个不透明背景色），不是抄原文标注。

| Token | 值 | 出处 | 用在哪 | 实测对比度 |
| --- | --- | --- | --- | --- |
| `--color-brand` | `#0052d9` | `content/color/tdesign.tencent.com--color.md:66` | 主按钮底、工单号链接、当前导航 | 白字 **6.54**；作文字对白 **6.54** |
| `--color-brand-hover` | `#003cab` | `content/color/tdesign.tencent.com--color.md:69`（Blue8） | 主按钮 hover | 白字 **9.40** |
| `--color-brand-active` | `#002a7c` | `content/color/tdesign.tencent.com--color.md:72`（Blue9） | 主按钮 active | 白字 **12.95** |
| `--color-brand-tint` | `#f2f3ff` | `content/color/tdesign.tencent.com--color.md:48`（Blue1） | 当前导航底、选中行底、待处理标签底 | 其上 `#003cab` **8.52**；正文 **15.78** |
| `--color-text-1` | `rgba(0,0,0,.9)` | `content/type/tdesign.tencent.com--fonts.md:96`（Font Gy1） | 正文、表格标题 | 白底 **17.49** |
| `--color-text-2` | `rgba(0,0,0,.6)` | `content/type/tdesign.tencent.com--fonts.md:98`（Font Gy2） | 副标题、表头、时间戳、字段名 | 白底 **5.74**；`#f3f3f3` 上 **5.17**；tint 上 **5.21** |
| `--color-text-3` | `rgba(0,0,0,.4)` | `content/type/tdesign.tencent.com--fonts.md:100`（Font Gy3） | 只给禁用与装饰，不给正文 | 白底 2.85 → **不当文字用** |
| `--color-surface` | `#ffffff` | `content/color/tdesign.tencent.com--color.md:187` | 页面底、表体、抽屉 | — |
| `--color-surface-1` | `#f3f3f3` | `content/color/tdesign.tencent.com--color.md:189`（Gray1） | 表头底、批量条底、hover 底 | — |
| `--color-surface-2` | `#e8e8e8` | `content/color/tdesign.tencent.com--color.md:193`（Gray3） | 按钮 active 底 | — |
| `--color-line` | `#e8e8e8` | 同上 | 表格行分隔、区块分隔（纯装饰） | 1.23，**不承担控件边界** |
| `--color-line-strong` | `#8b8b8b` | `content/color/tdesign.tencent.com--color.md:201`（Gray7） | 输入框/复选框/次按钮边界 | 非文本 **3.41** |
| `--color-error` / `-bg` | `#881f1c` / `#fff0ed` | `…--color.md:104`（Red8）/ `:83`（Red1） | 校验错误文字、紧急标签 | 白底 **9.29**；`#f3f3f3` 上 **8.38** |
| `--color-warn` / `-bg` | `#713300` / `#fff1e9` | `…--color.md:139`（Orange8）/ `:118`（Orange1） | 处理中标签 | **8.74** |
| `--color-attn` / `-bg` | `#654900` / `#fff5e4` | `…--color.md:450`（Yellow8）/ `:429`（Yellow1） | 待确认标签 | **7.75** |
| `--color-ok` / `-bg` | `#006c45` / `#e3f9e9` | `…--color.md:171`（Green7）/ `:153`（Green1） | 复制成功态、提示条对勾 | **5.88** |
| `--color-neutral-fg` | `#4b4b4b` | `…--color.md:207`（Gray10） | 已关闭标签文字 | `#f3f3f3` 上 **7.86** |
| `--color-focus` | `#003cab` | `…--color.md:69` | 焦点环 | 白底 **9.40**（≥3:1） |

**两处按规则改了原值，都记在这里：**

1. **主按钮 hover 不用 Blue6。** 原文语义 token 是 `brand-color-hover:@blue-color-6`（`content/color/tdesign.tencent.com--color.md:508`），但 Blue6 `#366ef4` 上白字实测 **4.47**，不到 4.5。按指南「色阶当文字」条同族换档，hover 用 Blue8 `#003cab`（**9.40**）、active 顺延到 Blue9 `#002a7c`（**12.95**）。
2. **优先级圆点不用亮档。** 圆点是非文本指示，需 3:1：原打算用 Red6 `#d54941`（**3.90**）与 Orange5 `#e37318`（**2.81**），后者不达标；换同族深档 Red7 `#ad352f`（**6.31**）、Orange7 `#954500`（**6.71**），「低」改成 `#8b8b8b` 空心环（3.41）。四个优先级同时有文字，颜色只是第二通道。

**标签一律浅底深字**：GOV.UK 的 Tag 篇记录了「深底白字会被用户当成按钮去点」的实测结论（`content/components/govuk--tag.md:390`），并且要求不靠颜色单独传达状态（`:249`）、标签不可交互、用形容词而非动词（`:40`）。本项目四个状态标签都是浅 tint 底 + 同族深档文字 + 文字本身写明状态。

## 4 字号 / 行高 / 字重

| 用途 | 字号 | 行高 | 字重 | 出处 |
| --- | --- | --- | --- | --- |
| 页面标题 `h1`、抽屉标题 | 20px | 28px（公式产物） | 600 | 字号 `content/type/tdesign.tencent.com--fonts.md:54`（第一字阶 +4 档）；字重 `:81` |
| 正文、表格标题、按钮、输入 | 14px | 22px（公式产物） | 400（强调 600） | `…--fonts.md:52`（桌面端 Body 14px）、`:81` |
| 辅助：副标题、表头、时间戳、标签、计数 | 12px | 20px（公式产物） | 400 / 标签 400 | `…--fonts.md:51`（桌面端最小字号 12px） |

- 行高是公式产物：`line-height = font-size + 8`（`content/type/tdesign.tencent.com--fonts.md:67`，`n = 8` 见 `:73-74`）。实现写成零特异性通配 `:where(body, body *){line-height:calc(1em + 8px)}`，每个元素按自身字号算；全页 181 个含直接文本的节点，实测违例 **0**。
- 字重只有 400 与 600 两档（`…--fonts.md:81`）：Windows 下 500 会落回 Regular，所以不设 500。
- 字体栈照抄 `…--fonts.md:34`，零外链，中文回落 PingFang / 微软雅黑。
- **数字字体降级**：原文点名 TCloud Number（`…--fonts.md:37`），零外部请求拿不到，用 `font-variant-numeric: tabular-nums` 近似等距，标「降级」，不冒充原字体。

## 5 间距 / 圆角 / 容器 / 断点

| 项 | 值 | 来源 |
| --- | --- | --- |
| 间距档 | 4 / 8 / 12 / 16 / 24 / 32 | `content/layout/tdesign.tencent.com--layout.md:107`（8 倍数 + 4、12 两档小间距） |
| 页面内边距 | 24px（≥768）/ 16px（768–1199）/ 12px（<768，用 12 档） | `…layout.md:81`（安全边距默认 24，建议 8 的倍数）；窄屏 12 为**派生** |
| 工具条与表格纵向节奏 | 24（区块）/ 16（组内）/ 8（紧邻） | 同上，全部落在档位上 |
| 圆角 | 4px（控件、标签、复选框）/ 8px（表格容器、抽屉、提示条） | **derived**：库无通用 radius 规范，整站两档成套自定 |
| 发丝线 | 1px | **derived**：库只给分隔线颜色不给线宽 |
| 容器 | 内容区 `max-width:1440px` | `…layout.md:25`（标准画板 1440） |
| 侧栏 | 232px / 收起 64px | `…layout.md:97`、`:101` |
| 断点 | 768 / 992 / 1200 | `…layout.md:116-119`（sm 768、md 992、lg 1200） |
| 组件尺寸 | 控件高 32、导航项 40、表格行 48、顶栏 56、复选框 16 | **derived**：基准规范不给组件尺寸，全站一套（`:45` 指南「组件尺寸」条） |
| 触控目标 | ≤767px 一律 44px；复选框命中区 44×48（<768 为 44×56） | **derived**：按 WCAG 2.2 目标尺寸稳妥取 44（指南「触控目标与焦点环」条） |
| 抽屉宽 | `min(46vw,620px)`，≤767px 全宽；从顶栏下沿开始（`top:56px`） | **derived**：按屏占比给，不按内容宽给 |
| 遮罩 | `rgba(0,0,0,.45)`，全站一档 | **derived**：指南「弹层遮罩」条 |
| 行长 | 抽屉描述 `max-width:40em`（中文约 40 字） | **derived**：指南「正文行长」条，同一页只用一种 |
| 焦点环 | `outline:2px solid #003cab; outline-offset:2px` | **derived**（指南条），对比度要求回源 `content/a11y/web.dev--a11y-focus.md:228-230`（≥3:1） |

## 6 动效

全部取 `content/motion/tdesign.tencent.com--motion.md` 的桌面端 token：

| 场景 | 时长 | 缓动 | 出处 |
| --- | --- | --- | --- |
| 按钮 hover/按下、复选框、筛选 chip 底色 | 200ms | `cubic-bezier(.38,0,.24,1)` | `…motion.md:99`（`@duration-desktop-base`）、`:111`（standard easing） |
| 分页、表格选中、列表行的底色变化 | 240ms | 同上 | `…motion.md:100`（moderate：列表点击、选项卡）、`:111` |
| 抽屉、全局提示 | 280ms | 入画 `cubic-bezier(0,0,.15,1)`；遮罩同步 | `…motion.md:101`（slow：抽屉、消息通知、全局提示）、`:112`（ease out 元素入画） |

- 只动 `transform / opacity / background-color / border-color`，不动布局属性；没有编排动画、没有数字滚动、没有骨架屏（`:146` 明确不建议首屏编排）。
- **减少动效**：基准规范无 `prefers-reduced-motion` 篇，按指南回源 `content/motion/carbondesignsystem.com--motion.md:358-366`（「始终为界面状态转换提供替代；确保总能用静态方式传达同样信息」）+ `content/standards/w3c--mediaqueries-5.md`，实现为 `@media (prefers-reduced-motion:reduce)` 里把过渡压到 1ms、抽屉取消位移。实测量到 `transition-duration: 0.001s`、`transform: none`。
- 入场态用「强制一次回流再切 `data-open`」（`reveal()`），不依赖 `requestAnimationFrame`——后台标签页 rAF 会被节流，实测第一版因此出现抽屉停在屏外。

## 7 设计点路由表

| 设计点 | 选用标准（select 摘要） | 取舍 | 落在哪 |
| --- | --- | --- | --- |
| `howto-visual-hierarchy`（s1，必读） | 大小/字重/颜色拉开主次，字号最多 3 档，最大元素 ≤2 个 | 取：3 档字号、1 个 20px 元素；不取「靠颜色堆层级」 | §2 层级、§4 字阶 |
| `howto-ui-color-framework`（s6，必读） | 一色多变体，深变体降亮度提饱和 | 取：主色 Blue1/7/8/9 拆深浅；不加第二色相 | §3 色彩表 |
| `color-cn-picking`（s6） | 中后台配色实操，色阶不等于可当文字 | 取：全部色值来自 TDesign 色板；每个当文字的色对实际底复算 | §3 两处换档 |
| `type-scale-steps` / `type-line-height-box` / `type-weight-restraint`（s6） | 字阶与行高同源、字重克制 | 取：12/14/20 三档、`字号+8`、400/600 两档 | §4 |
| `layout-spacing-scale`（s6） | 基准规范有 scale 就用基准规范整套 | 取：TDesign 4/8/12/16/24/32，不回源 Atlassian | §5 |
| `motion-duration` / `motion-easing` / `motion-reduced`（s5、s6） | 时长按场景档位，缓动引原文曲线 | 取 200/240/280 与三条 cubic-bezier；reduced 回源 Carbon | §6 |
| `icons-spec`（s5） | 图标栅格与描边统一 | 取 24×24 栅格、2px 描边（`content/icons/tdesign.tencent.com--icon.md:38`、`:56`），四个导航图标 + 搜索/复制/关闭/对勾全内联 | 页面内所有 SVG |
| `patterns-search-filter`（s3、s4） | 查询范围是否明确、是否反复改条件 | 取 **B 立即生效**（`content/patterns/tdesign.tencent.com--backoffice-tasks.md:32-36`）：值班场景反复改条件，实时出结果；配 Carbon 的即时更新与「可一键清空」原则（`content/patterns/carbon--filtering.md:102-107`、`:132-139`） | 工具条、结果行、重置按钮 |
| `components-bulk-lists`（s3、s5） | 批量操作是主操作还是次操作 | 取 **A 所见即所得**（`…backoffice-tasks.md:62-68`）：批量指派是需求里的核心任务，按钮常驻、未选中时禁用，而不是选后才冒出来 | 批量条 |
| `components-table-tag`（s3） | 表格承载同类型对象，标签表状态 | 取：索引表格（`content/components/polaris.shopify.com--index-table.md:23`）、行可点进详情（`:75`）、超过 50 条才分页（本项目 48 条仍分页，因为 12 行/页更利于扫读）；标签浅底深字 | 表格、状态标签 |
| `components-nav-aids`（s3、s18） | 长列表用分页，不用无限滚动 | 取：单页时不显示分页（`content/components/govuk--pagination.md:73`）、首页无「上一页」/末页无「下一页」（`:177`）、筛选后回第一页（`:237`）、页码省略号（`:164-173`） | 分页 |
| `components-modal-dialog` + `a11y-modal-focus-trap`（s4、s5） | 详情内容多、需要保留列表上下文 | 用右侧抽屉而非居中弹窗；`role=dialog` + `aria-modal` + `aria-labelledby`（`content/a11y/w3c--apg-dialog-modal.md:64-70`）、打开时焦点进标题、Tab 循环（`:39-46`）、Esc 关闭、关闭后焦点回触发元素（`:55-60`） | 抽屉 |
| `patterns-states-feedback` + `patterns-error-exit`（s19） | 状态要有文字而非只有颜色；禁用要可预期 | 取：状态标签四档 + 文字；禁用按 Carbon 的「opacity/文字降档 + not-allowed + 无 hover」（`content/patterns/carbon--disabled-states.md:45-55`），本项目用 TDesign 的 `#f3f3f3` 底 + `#8b8b8b` 字实现 | 标签、禁用按钮 |
| `patterns-empty-onboarding`（s19） | 空态要有主文案 + 次文案 + 一个主操作 | 取 Primer 空态结构（`content/patterns/primer--empty-states.md:28-42`）：标题说清「没有符合条件的工单」、次文案说清下一步、一个「重置筛选」 | 空态块 |
| `patterns-notification`（s19） | 成功提示少用，反馈就近 | 取：操作后就地提示（`content/patterns/primer--notification-messaging.md:114-116`）、成功用对勾 + 一句结果、可撤销；复制成功是「按钮文字变已复制」而非弹条（`:77-85`） | 提示条、复制 |
| `a11y-focus-visibility`（s5） | 焦点必须可见且不被遮挡 | 取：2px 实线 + 2px 偏移，环不断言动画；3:1 底（`content/a11y/web.dev--a11y-focus.md:210-213`、`:228-230`） | 全局 `:focus-visible` |
| `markdown-cn-copywriting`（s4、s13） | 中文文案按动作 + 对象写，标签用形容词 | 取：按钮「批量指派」「批量关闭」「记录备注」，标签「待处理/处理中/待确认/已关闭」全是状态形容词，没有动词标签 | 全站文案 |

## 8 交付自验（数字均来自 browser_exec 实测）

| 项 | 结果 |
| --- | --- |
| 四档横向溢出 `scrollWidth/clientWidth` | 320 **305/305**、375 **360/360**、768 **753/753**、1280 **1265/1265** |
| 外部请求 `performance.getEntriesByType('resource').length` | **0**（无 CDN、无外链字体、无外链图；图标与插图全内联 SVG / CSS） |
| 行高全量普查 | 含直接文本节点 **181** 个，`line-height - fontSize - 8` 超 0.6px 的 **0** 个 |
| 正文对比度 | 工单标题 **17.49**、抽屉正文 **17.49**、表头 **5.56**、次要文字 **5.74**、字段名 **5.74** |
| 按钮文字 | 主按钮白字 **6.54**、次按钮文字 **17.49**；禁用态 **3.07**（WCAG 1.4.3 对非活动控件豁免，边界另按 3.41 取） |
| 非文本 | 复选框/输入框描边 **3.41**、焦点环 **9.40**、表格分隔线 1.23（装饰线，不承担边界） |
| 强调色实填面积 | 空闲 **0%**、全选峰值 **0.478%**（1280×900，脚本只累加落在视口内的品牌色实填元素面积 / 视口面积） |
| 筛选 | 全部 48 条 → 待处理 **21** 条 → 关键字 `VPN` **3** 条 → `VPN`+紧急 **0** 条（空态 + 分页隐藏）→ 仅紧急 **6** 条 |
| 计数自洽 | 状态 chip 随筛选联动：搜索 `VPN` 后 `全部 3 / 待处理 1 / 处理中 0 / 待确认 0 / 已关闭 2`；批量关闭 12 条后 `已关闭 8→19`，撤销回 8 |
| 分页 | 第 1 页 `1–12`，第 2 页 `13–24`，末页 `37–48`；首页无「上一页」、末页无「下一页」；每页 12 → 24 时行数 12 → 24 |
| 批量指派校验三态 | 未选人点「批量指派」→ `arr=1`、`aria-invalid=true`、焦点回下拉 **0→1**；选人后错误清除 **1→0**；提交后 toast「已把 12 条工单指派给李静」，处理人列 **张伟/张伟/王倩/王倩 → 李静×4** |
| 撤销 | 点「撤销」后处理人回滚到 **张伟/张伟/王倩/王倩**，状态计数回滚到 `待处理 21 / 已关闭 8` |
| 抽屉 | 关闭态 `hidden=true`、`display:none`；打开后 `aria-modal=true`、`transform` `translateX(620px)→0`（280ms）、焦点 `BODY→drawerTitle`；Tab 在末尾 `closeTicketBtn` 上回到首个 `copyBtn`；Esc 后 `open=0` 且焦点回 `.no-btn` |
| 备注表单三态 | 空提交 `aria-invalid false→true`、错误块 `0→1`、焦点回 textarea；填后提交清错、时间线首条变新备注、toast「处理备注已记录」 |
| 状态流转 | 抽屉内 待确认 → 处理中：抽屉标签、行内标签、chip 计数同步；toast「工单 TC-2026-0428 已转为处理中」 |
| 提示条 | 打开 `opacity 1 / pointer-events auto`；6.0s 仍开，7.2s `open=0 / hidden=true / pointer-events none` |
| 复选框命中区 | label 命中区 **44×48**（<768 为 44×56），点 label 与按空格都能切换 |
| 减少动效 | 模拟 `prefers-reduced-motion:reduce`：`transition-duration 0.001s`、抽屉 `transform:none`，功能不受影响 |
| 复制 | **未实测成功态**：本机自动化浏览器的文档没有焦点（`document.hasFocus()=false`），`execCommand('copy')` 与 `navigator.clipboard.writeText` 都被拒（`NotAllowedError: Document is not focused`）。已实测的是失败态：按钮文字变「复制失败，请手动选择」并在 2s 后回到「复制工单号」 |

## 9 回炉记录

七步的第 7 步真跑后改了 9 处，前 5 处是缺陷，后 4 处是实测数据推翻设计假设：

1. **关闭态的抽屉仍在文档里。** 第一版 `.drawer{display:flex}` 是作者样式，压过 UA 的 `[hidden]{display:none}`，于是「关闭」的抽屉只是被 `translateX(100%)` 推出屏外：8 个控件仍在 Tab 序列里，`aria-modal` 也是假的。修：加 `[hidden]{display:none !important}`，关闭态实测 `display:none`。
2. **rAF 被节流导致入场态丢失。** 打开抽屉/提示条靠 `requestAnimationFrame` 加 `data-open`，后台标签页 rAF 不跑，实测 `data-open` 一直 0、`transform` 停在 `translateX(620px)`。修：`reveal()` 强制一次回流后同步切状态，复测 200ms 时 `translateX(3.43px)`、600ms 时 `0`。
3. **提示条隐藏定时器竞态。** 撤销时先 `hideToast()` 再弹新提示，旧定时器 300ms 后把新提示一起隐藏。修：记 `hideTimer`，`toast()` 先清旧定时器，回调里再确认 `data-open === "0"` 才 `hidden`。
4. **提示条隐藏后仍吃点击。** `opacity:0` 不移除命中区，左下角会挡住表格最后一行。修：关闭态 `pointer-events:none`，打开态恢复。
5. **复制路径挂起。** 第一版 `await navigator.clipboard.writeText` 在 file:// 下等权限，按钮文字永远不更新（既不是成功也不是失败）。修：改用 `textarea + execCommand` 同步路径，失败再异步兜底 1s 超时，最终落到可读的失败态。
6. **375px 状态筛选换行出孤行。** 五个 chip 换行后「已关闭 8」独占一行且居中。修：窄屏 `.seg` 单行横向滚动（实测 `scrollWidth 391 / clientWidth 349`），页面本身仍不横溢。
7. **工单列被分类挤掉。** 窄屏「应用/账号」这类分类掉到标题下一行，标题被截更多。修：≤767px 隐藏分类（分类在抽屉里仍可见），标题单行省略。
8. **优先级圆点不达 3:1。** `#e37318` 对白 2.81、`#d54941` 3.90，前者低于非文本下限。修：换同族深档（6.71 / 6.31），「低」改空心环保留区分。
9. **抽屉初始焦点出现聚焦环包住标题。** 视觉噪音大于信息量。修：`#drawerTitle:focus{outline:none}`（标题非交互元素，抽屉出现本身即是焦点转移的视觉信号），交互元素的焦点环全部保留。

## 10 超出基准规范的数值清单

| 值 | 处理 | 理由 |
| --- | --- | --- |
| 圆角 4px / 8px | derived | 库无通用 radius 规范（指南「圆角」条），两档成套 |
| 发丝线 1px | derived | 库只给分隔线颜色（指南「发丝线宽」条） |
| 控件高 32 / 行高 48 / 顶栏 56 / 导航项 40 / 复选框 16 | derived | 基准规范不给组件尺寸（指南「组件尺寸」条），成套自定 |
| 触控目标 44px（≤767px 生效） | derived | 基准规范无规格，按 WCAG 2.2 稳妥取值（指南「触控目标与焦点环」条） |
| 焦点环 2px + 2px 偏移，色 `#003cab` | derived（色值回源 Blue8） | 同上条；对比度要求回源 web.dev a11y-focus |
| 遮罩 `rgba(0,0,0,.45)` | derived | 指南「弹层遮罩」条，全站一档 |
| 抽屉宽 `min(46vw,620px)` | derived | 屏占比给宽，不按内容宽 |
| 抽屉描述行长 `40em` | derived | 指南「正文行长」条（中文 35–45 字） |
| 窄屏内边距 12 / 抽屉内边距 12 | derived（档位取基准规范 12 档） | 320px 下 24px 边距会挤掉表单可用宽 |
| 数字 `tabular-nums` | 降级 | TCloud Number 零请求拿不到（指南「数字字体」条） |
| 表格数字左对齐 | 取原则不取值 | Polaris 建议数值右对齐（`content/components/polaris.shopify.com--index-table.md:81`），本表数字是时间戳不是可比较数值，改用 `tabular-nums` 对齐位数 |
| 复选框勾形、图标路径 | derived（绘制规格回源 TDesign 图标篇） | 24×24 栅格、2px 描边按原文；具体路径自绘 |
