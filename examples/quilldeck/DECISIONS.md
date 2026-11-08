# DECISIONS · QuillDeck 落地页（quilldeck）

取值记录口径：引用一律 `content/完整路径:行号`；行号是规范原文行号，取值前已逐条回读。基准规范 = TDesign（中文产品语境，见指南「项目选型方案」）。标 `derived` 的是基准规范没有该维度、按缺口表派生的值，理由写在行内。

## 1. 设计前提

| 项 | 判定 | 依据 |
| --- | --- | --- |
| 受众 | 内容与市场团队、独立写作者；写得多、要交稿、在意腔调一致 | `briefs/quilldeck.md:5` |
| 用途 | 一屏看懂它接手写作的哪几步，接着去申请试用 | `briefs/quilldeck.md:6` |
| 语气 | 克制、办事、不做励志腔；标题短、句子短、给具体动作 | 需求里的「边界」：不做真编辑器、不接模型 API（`briefs/quilldeck.md:16`），因此不承诺任何未实现的能力 |
| 产品语境 | 中文产品 UI / 新品牌中文营销页（非复刻既有品牌） | 指南「项目选型方案」：新品牌官网「中文走 TDesign」；中文产品 UI 行也是 TDesign |
| 基准规范 | TDesign（唯一数值决定权） | `site/dist/ai/guide.md:20` `site/dist/ai/guide.md:27` |
| 基准规范读的文章 | 色彩、字体、布局、动效、图标、中后台框架 | `content/color/tdesign.tencent.com--color.md` `content/type/tdesign.tencent.com--fonts.md` `content/layout/tdesign.tencent.com--layout.md` `content/motion/tdesign.tencent.com--motion.md` `content/icons/tdesign.tencent.com--icon.md` `content/layout/tdesign.tencent.com--page-framework.md` |
| 设计场景 | s2 落地页与营销页（主）+ s1 页面基本功 + s6 数值层 + s13 文案 + s19 状态反馈 + s16 评审底线 + s8 图标 + s4 表单 | `site/dist/ai/design-points.json` → `points_by_task` |
| 版型三步 | 先定版型（产品型 → 产品页版型），再定风格（项目选型定基准规范），最后定组件与交互 | `content/layouts/product-picker.md`（点 `layouts-page-selection-chain` 的 select） |

## 2. 结构决策

| 决策 | 结果 | 依据 |
| --- | --- | --- |
| Macrostructure | Narrative Workflow（1.0 → 4.0 的阶段叙事，页面就是一条写稿流程） | hallmark `references/macrostructures/14-narrative-workflow.md`：「Reach for it for products with explicit workflows — … writing tools」；需求里要求「工作流演示」，产品确实是一条有先后顺序的流程 |
| 区块顺序 | 首屏（主张 + 可操作演示稿）→ 能力矩阵 → 工作流 1.0–4.0 → 定价三档 → 常见问题 → 试用表单 → 页脚 | 落地页版型：Hero → 价值 → 功能（3–5）→ CTA → Footer（`content/layouts/layout--hero-features-cta.md:58-62` `content/layouts/layout--hero-features-cta.md:66`）；定价段按价格卡 → 常见问题 → 行动号召（`content/layouts/layout--pricing-page-cta.md:58-62`） |
| 导航 | N1b：字标在左、四个文字链接紧随、申请试用在右；≤991 收成「菜单」按钮 + 折叠面板 | hallmark cookbook 的 N1b；导航规则「logo 只链回本站首页、产品级链接归类、不开新 tab」（点 `patterns-global-nav`）；`content/patterns/carbon--global-header.md` |
| 页脚 | Ft2：一条发丝线 + 字标 + 三个链接 + 版权，单行排布 | hallmark cookbook 的 Ft2（modern-minimal 默认），避开 Ft3 四列 sitemap 指纹 |
| 强调色 | 腾讯蓝 #0052d9 只给主按钮、编号、徽标与链接；面积实测 0.73%（1280）/ 1.20%（375） | `content/color/tdesign.tencent.com--color.md:28`（主题色用于强调与引导操作）`content/color/tdesign.tencent.com--color.md:45` |
| 演示稿 | 文档面（白纸 + 发丝边框 + 提纲栏），不做浏览器假 chrome、不做假 model 窗口 | hallmark 禁令：不得手绘假浏览器/假 IDE chrome；需求「自己画，不用截图」（`briefs/quilldeck.md:10`） |
| 不做的区块 | 没有 logo 墙、客户证言、效率百分比；定价写真实数字与真实节省额 | 测试篇：虚构产品可以有虚构的产品名和价格，但要标明虚构，假证言、假 logo 墙、假指标不放（`content/patterns/ui-specs--test-walkthrough.md:22`）；hallmark 诚实文案纪律 |
| 首屏形态 | 左文案 / 右演示稿的两栏 diptych，不做整屏大图 | 首屏大图只会挤掉演示；演示稿本身是这页的「产品图」 |
| 层级 | 三档层级：展示（h1，全页仅 1 处）、区块标题（h2）、正文；辅助标签单列一档，不算层级档 | `content/howto/nngroup.com--visual-hierarchy-ux-definition.md:76`（最多 3 档、最大元素不超过 2 个） |

## 3. 色彩表

全部取自 TDesign 色板，不跨源借色。对比度按 WCAG 公式对实际底色实算（正文 4.5:1、大字与非文本 3:1，`content/a11y/w3c--wcag-2.2.md:397` `content/a11y/w3c--wcag-2.2.md:401` `content/a11y/w3c--wcag-2.2.md:512`）。

| token | 值 | 出处 | 用在哪 | 实测对比度 |
| --- | --- | --- | --- | --- |
| `--paper` | #ffffff | `content/color/tdesign.tencent.com--color.md:187` | 页面底、卡片底、输入框底 | 底色 |
| `--paper-2` | #f3f3f3（Gray1） | `content/color/tdesign.tencent.com--color.md:189` | 示例块、试用区底、次级按钮 hover | 底色 |
| `--tint` | #f2f3ff（Blue1） | `content/color/tdesign.tencent.com--color.md:48` | 选中筛选项底 | 底色 |
| `--ink` | #000000 90%（实现 `rgba(0,0,0,.9)`） | `content/type/tdesign.tencent.com--fonts.md:96` | 标题、正文主色、金额 | 实测 17.40:1（白底）/ 15.84:1（灰底），原文自述 AAA 17.5 见 `content/color/tdesign.tencent.com--color.md:225` |
| `--ink-2` | #000000 60%（实现 `rgba(0,0,0,.6)`） | `content/type/tdesign.tencent.com--fonts.md:98` | 说明文字、表头、次要信息、状态文案 | 实测 5.74:1（白底）/ 5.58:1（灰底），原文自述 AA 5.7 见 `content/color/tdesign.tencent.com--color.md:233` |
| `--ink-3` | #000000 40%（实现 `rgba(0,0,0,.4)`） | `content/type/tdesign.tencent.com--fonts.md:100` | 仅禁用态文字与装饰 | 实测 2.85:1，只用于禁用控件（WCAG 豁免禁用态），任何正文/标签都不用这一档 |
| `--line` | #e8e8e8（Gray3） | `content/color/tdesign.tencent.com--color.md:193` | 装饰分隔线、卡片描边 | 实测 1.23:1，纯装饰，不承担控件边界 |
| `--line-2` | #8b8b8b（Gray7） | `content/color/tdesign.tencent.com--color.md:201` | 输入框、筛选项、次级按钮的边界 | 实测 3.41:1（白底）/ 3.07:1（灰底），≥ 3:1 非文本线 |
| `--accent` | #0052d9（Blue7 品牌色） | `content/color/tdesign.tencent.com--color.md:45` | 主按钮底、编号、链接、焦点环 | 实测 6.54:1（白底），与原文自述 6.54 一致（`content/color/tdesign.tencent.com--color.md:42`）；白字压蓝底同为 6.54:1 |
| `--accent-strong` | #003cab（Blue8） | `content/color/tdesign.tencent.com--color.md:69` | 主按钮 hover/active、选中态文字 | 实测 9.40:1（白底）/ 8.52:1（选中底色 #f2f3ff 上） |
| `--danger` | #ad352f（Red7） | `content/color/tdesign.tencent.com--color.md:101` | 表单错误文案与错误边框 | 实测 6.31:1（白底）/ 5.69:1（灰底）。Red6 #d54941 实测 4.32:1 不够 4.5，只作图标与装饰，文字换同族深档 |
| `--success` | #006c45（Green7） | `content/color/tdesign.tencent.com--color.md:171` | 表单成功文案 | 实测 5.86:1（灰底）。Green5 #2ba471 实测 3.16:1 不达 4.5，不用作文字 |

配色框架（方法层）：主色一套色相，hover 只沿蓝阶加深一档（Blue7 → Blue8），选中态只降亮度做浅底（Blue1 + Blue8 文字），一次只动一个维度（`content/howto/learnui.design--color-in-ui-design-a-practical-framework.md:242`）；全页只有蓝 + 中性两族，状态色（红/绿）只出现在表单反馈（`content/howto/learnui.design--color-in-ui-design-a-practical-framework.md:282` 的饱和/亮度基准之外，本页未新增第二色相）。

## 4. 字号 / 行高 / 字重

行高一律 = 字号 + 8，实现为 `:where(body, body *){line-height:calc(1em + 8px)}`（零特异性，每个元素按自身字号算，不用继承死值）。

| 用途 | 字号 | 行高（公式产物） | 字重 | 出处 |
| --- | --- | --- | --- | --- |
| 展示 h1（≥992） | 48px | 56px（派生，48+8） | 600 | `content/type/tdesign.tencent.com--fonts.md:59` 第二字阶 48；公式 `content/type/tdesign.tencent.com--fonts.md:67` |
| 展示 h1（<992） | 36px | 44px（派生，36+8） | 600 | `content/type/tdesign.tencent.com--fonts.md:58` |
| 区块标题 h2、价格数字 | 28px | 36px（派生，28+8） | 600 | `content/type/tdesign.tencent.com--fonts.md:57` |
| 正文、条目标题 h3 | 16px | 24px（派生，16+8） | 400 / 600 | `content/type/tdesign.tencent.com--fonts.md:53` |
| 辅助标签、按钮文字、表格表头 | 14px | 22px（派生，14+8） | 400 / 600 | `content/type/tdesign.tencent.com--fonts.md:52` |
| 字重档 | 400 / 600 两档，不引第三档 | — | — | `content/type/tdesign.tencent.com--fonts.md:81` |
| 字体栈 | 系统栈 -apple-system → BlinkMacSystemFont → Segoe UI → … → Source Han Sans CN → sans-serif | — | — | `content/type/tdesign.tencent.com--fonts.md:34`，零外部字体请求 |
| 数字 | `font-variant-numeric: tabular-nums` | — | — | TCloud Number 零外链拿不到，按缺口表降级为 tabular-nums（`content/type/tdesign.tencent.com--fonts.md:37`） |

行长：正文栏 30–42 字（hero 说明 30em、阶段说明 34em、FAQ 答案 38em、区块说明 ≤42em），同一页只用一种量级；中文按 35–45 字口径（`site/dist/ai/guide.md:48` 派生条目）。未用 `ch` 收紧。

## 5. 间距 / 圆角 / 容器 / 断点

间距刻度：4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96。规则来自基准规范（8 的倍数，另加 4、12 两档小间距，`content/layout/tdesign.tencent.com--layout.md:107`；网格基数 8px `content/layout/tdesign.tencent.com--layout.md:65`），具体档位是本页按该规则整套派生（`derived`），全站只用这一套，不掺 4pt 体系。

| 项 | 值 | 出处 / 处理 |
| --- | --- | --- |
| 间距 | 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 | 规则 `content/layout/tdesign.tencent.com--layout.md:107`，档位 derived |
| 区块纵向留白 | 96px（≥992）/ 48px（<992） | derived |
| 栅格槽 | 16px | `content/layout/tdesign.tencent.com--layout.md:77` |
| 安全边距 | 24px（≥768）/ 16px（<768） | 24px 见 `content/layout/tdesign.tencent.com--layout.md:81`；16px 为 8 的倍数内收 derived |
| 内容容器 | 1200px | `content/layout/tdesign.tencent.com--layout.md:119`（lg 断点即内容宽上限） |
| 栅格 | 12 栅格，本页用它的 7/5 与 3 等分切法 | `content/layout/tdesign.tencent.com--layout.md:87` |
| 圆角 | 4px（控件）/ 8px（面板） | 库内无通用 radius 规范，按缺口表整站派生 `derived`，只这两档 |
| 断点 | 768 / 992 / 1200 | `content/layout/tdesign.tencent.com--layout.md:116-119` |
| 发丝线 | 1px | 库只给分隔线颜色不给线宽，1px derived（`derived`） |
| 触控目标 | ≥44 × 44 | 缺口表稳妥档 44（`content/a11y/w3c--wcag-2.2.md:871`），AA 下限 24 × 24 见 `content/a11y/w3c--wcag-2.2.md:907`；实测 30 个可交互元素全部 ≥44 |
| 焦点环 | 2px 实线 + 2px 偏移，色 #0052d9 | 缺口表派生态；焦点/非焦点对比 ≥3:1 的要求见 `content/a11y/w3c--wcag-2.2.md:792`，实测环色对白底 6.54:1 |
| 遮罩 | 无（本页无弹层/抽屉） | 移动端菜单是行内折叠面板，不用遮罩，避免叠第二层遮罩 |
| 金额 | 两位小数、千分位、tabular-nums | 缺口表派生态（`derived`）：39.00 / 99.00 / 299.00；年付 372.00 / 948.00 / 2,868.00 |

## 6. 动效

| 场景 | 时长 | 缓动 | 出处 |
| --- | --- | --- | --- |
| hover / 颜色与边框反馈 | 200ms | cubic-bezier(.38,0,.24,1) | `content/motion/tdesign.tencent.com--motion.md:99` `content/motion/tdesign.tencent.com--motion.md:111` |
| 导航吸顶描边、FAQ 加号旋转 | 240ms | cubic-bezier(.38,0,.24,1) | `content/motion/tdesign.tencent.com--motion.md:100` |
| 面板类变化上限（未使用） | 280ms | cubic-bezier(0,0,.15,1) | `content/motion/tdesign.tencent.com--motion.md:101` `content/motion/tdesign.tencent.com--motion.md:112` |
| 减少动效 | `prefers-reduced-motion: reduce` 下过渡压到 1ms | — | 可访问性底线；基准规范同样要求首次加载不用顺序动画（`content/motion/tdesign.tencent.com--motion.md:146`），故全页没有入场/滚动揭示动画 |

没有视差、没有滚动叙事、没有骨架屏：这页的全部变化都来自用户动作（点筛选、切周期、展开问答、按演示按钮），与「动效只解释状态变化」一致（`content/motion/tdesign.tencent.com--motion.md:40`）。

## 7. 设计点路由表

| 设计点 | 选用标准（select 摘要） | 落在哪 |
| --- | --- | --- |
| `layouts-page-selection-chain` | 先定版型，再定风格（基准规范），最后定组件；不用版型决定组件 | 选版型前先读 product-picker，确认是产品页版型；风格由 TDesign 定；组件在版型之后才定 |
| `layouts-product-page` | 区块顺序主视觉→价值主张→功能→CTA→页脚；CTA 首屏与页尾各一次 | 首屏两组 CTA，页尾试用表单；功能区只放能力矩阵一段 |
| `layouts-pricing-comparison` | 每张套餐卡里放 CTA；突出匹配目标受众的套餐；年付省多少写真实数字；FAQ 解顾虑 | 三卡各带 CTA，中间「团队」卡高亮 + 徽标，年付写 ¥96/¥240/¥720 真实差额，FAQ 六条接住异议（`content/layouts/layout--pricing-page-cta.md:66-69`） |
| `howto-visual-hierarchy`（method_required） | 字号最多 3 档，最大元素 ≤2；层级靠字号+字重+颜色叠加 | h1 一档、h2 一档、正文一档；h3 与正文同号不同重；大元素只有 h1 与价格数字 |
| `howto-ui-color-framework`（method_required） | 主辅与面积：状态只动一个维度 | hover 加深（Blue8）、选中降亮度（Blue1 底 + Blue8 字） |
| `type-scale-steps` | 字阶要有规律，TDesign 一级字阶等距 | 直接取 TDesign 12/14/16/…/64，不自造步进 |
| `type-line-height-box` | 字号与行高成对定义 | 行高 = 字号 + 8 的公式全站统一 |
| `type-measure-limit` | 长行要收窄，宽屏下封顶 | 30–42 字栏宽，1280 下也不拉满 1200 |
| `type-weight-restraint` | 一套界面只用两档字重 | 400 / 600 |
| `layout-grid-columns` | 先定栅格再排版 | 12 栅格 + 1200 容器 + 16 槽 + 24 安全边距 |
| `layout-spacing-values` | 间距按固定步长递增 | 8 基数 + 4/12 两档，宽度收窄时整体递减 |
| `layout-adaptive-guides` | 移动端优先、有最大宽度、断点分档 | 768/992/1200 三档，移动优先写 CSS |
| `patterns-global-nav` | logo 只回首页，链接不开新 tab | 页内锚点导航，字标回 #top |
| `patterns-states-feedback` | 默认禁用不可点、读屏不读，用降透明度 | 「撤销」按钮 disabled + 2.85:1 低对比文字，无历史时不可点 |
| `principles-interaction-states` | hover/focus/active/disabled 统一；反馈是信息不是装饰 | 四态各自一套，不加阴影戏法 |
| `patterns-form-validation` | 空字段用祈使句；失败保留输入 | 「先填一个邮箱再提交。」/「这个地址缺个 @ 或域名…」，失败不动用户输入；单字段未建错误摘要（见 FINDINGS） |
| `a11y-manual-acceptance` | 交付前跑手工检查：标题结构、对比度、标签、键盘 | 标题 h1→h2→h3 无跳级；30 个可交互元素都有可读名；Tab 可达，焦点环 2px |
| `motion-semantics` | 先问为什么再加动效 | 只保留状态反馈类过渡，删掉入场与滚动动画 |
| `patterns-feedback-criteria` | 可感知、及时、真实、可行动 | 每个动作当帧改文案与数字，状态行写明「改了哪一句」 |
| `patterns-test-walkthrough` | 三张清单逐项走查，记录前后值 | 本文件的第 8 节即走查记录 |
| `markdown-cn-copywriting` | 中英文之间加空格、数字与单位之间加空格、全形标点、直角引号 | 全页文案按此排版（`content/markdown/github.com--chinese-copywriting-guidelines.md:27` `content/markdown/github.com--chinese-copywriting-guidelines.md:44` `content/markdown/github.com--chinese-copywriting-guidelines.md:55` `content/markdown/github.com--chinese-copywriting-guidelines.md:115` `content/markdown/github.com--chinese-copywriting-guidelines.md:217`） |
| `icons` (TDesign icon) | 24 栅格、2px 描边、线性 | 内联 SVG 统一 24 viewBox / stroke-width 2（`content/icons/tdesign.tencent.com--icon.md:38` `content/icons/tdesign.tencent.com--icon.md:56`） |

未选的点：`bento-grid-layout`（能力是 5 条并列、有「谁接手/谁保留」两列语义，表格比 bento 更好扫读）、`layouts-showcase-story`（滚动叙事与本页的「不动效」决定冲突）、`brands-*`（新品牌不取品牌值，只学构成）、`layouts-dashboard-*`（不是数据产品）。

## 8. 交付自验（数字全部来自本机 Chromium，`file://` 打开）

| 项 | 结果 |
| --- | --- |
| 320 宽 | `scrollWidth 305 = clientWidth 305`（经典滚动条占 15px），页高 7496 |
| 375 宽 | `360 / 360`，页高 6972 |
| 768 宽 | `753 / 753`，页高 5592 |
| 1280 宽 | `1265 / 1265`，页高 3913 |
| 零外部请求 | `performance.getEntriesByType('resource').length === 0`；`document.images.length === 0`；`link[rel=stylesheet]` 0 个 |
| 行高普查 | 遍历含直接文本的节点 155 个，违例 0（1280 与 375 各测一遍，口径 `行高 == 字号 + 8`，容差 0.6px） |
| 强调色面积 | 1280：36,240 / 4,949,945 px² = 0.73%；375：1.20%（只统计 `background-color` 恰为 #0052d9 的元素面积 / 文档面积） |
| 焦点环 | 真实 Tab 键：`:focus-visible` 命中，`outline 2px solid rgb(0,82,217)` + `offset 2px`，环色对白底 6.54:1；跳转链接获得焦点时从 -100px 移到 12px，高 44px |
| 触控目标 | 375 宽下 30 个可交互元素，全部 ≥44 × 44（最小为字标 60 × 44） |
| 结构 | h1 一个，h2 五个，h3 七个，无跳级；无重复 id；1280 宽下 33 个可聚焦元素都有可读名 |

核心交互实测（前后值）：

| 交互 | 前 | 后 |
| --- | --- | --- |
| 能力筛选「成稿中」 | 5 行可见，状态「显示 5 项」 | 2 行可见，状态「显示 2 项」，`aria-pressed=true` |
| 能力筛选「定稿前」 | 5 行 | 1 行，状态「显示 1 项」 |
| 周期切到「按年」 | 39.00 / 99.00 / 299.00，注「按月开票，随时停。」 | 31.00 / 79.00 / 239.00，注「¥372.00 一次结清，比月付省 ¥96.00。」 |
| 周期切回「按月」 | 31.00 / 79.00 / 239.00 | 39.00 / 99.00 / 299.00（三卡同步） |
| FAQ 展开 | 0 项展开 | 第 1 项展开 → 1；再展开第 2 项 → 2 |
| 表单空提交 | 无提示 | `is-error`，「先填一个邮箱再提交。」，`aria-invalid=true`，焦点回输入框 |
| 表单格式错 | `is-error` | 文案换「这个地址缺个 @ 或域名，检查一下再提交。」，输入保留 `prosery@` |
| 表单合法 | — | `is-ok`，「已记下 editor@prosery.cn，入口开放时按这个地址联系你。」，输入框清空 |
| 演示稿「润色」 | 59 字 / 第 1 稿 | 48 字 / 第 2 稿，状态「润色：两句并成一句，删掉重复的「涨了」」 |
| 演示稿「撤销」 | 48 字 / 第 2 稿 | 59 字 / 第 1 稿，撤销按钮回到 disabled |
| 演示稿「复制这段」（真实鼠标点击） | 按钮「复制这段」 | 按钮「已复制」，状态「这段文字已复制到剪贴板。」，1.6s 后复位 |
| 移动端菜单（375） | `aria-expanded=false`，面板高 0 | `aria-expanded=true`，面板高 261px，再点回 0 |

对比度（按 WCAG 公式对实际底色实算）：正文 17.40:1；次要文字 5.74:1（白）/ 5.58:1（灰底）；按钮文字 白压蓝 6.54:1、hover 压 Blue8 9.40:1；禁用态 2.85:1（仅禁用，豁免）；非文本边界 3.41:1；错误文案 5.69:1；成功文案 5.86:1。最低正文值 5.58:1。

## 9. 回炉记录

第一版出稿后按四档实测 + 截图走查，改了 7 处：

| # | 第一版的问题（实测证据） | 改法 | 改后 |
| --- | --- | --- | --- |
| 1 | h1「把成稿前那四道工序交出去」12 字，375 下断成 9 字 + 3 字，第二行右半空 | 换成 8 字「提纲之后，交给它」，并把「展开成稿、续写、改写、润色」移进说明句 | 320 / 375 / 768 / 1280 四档均单行，无孤行 |
| 2 | 说明句写「右边那份演示稿」，移动端演示稿在下方 | 改「演示区那份样例稿」，不指方位 | 四档指向都成立 |
| 3 | 375 首屏导航挤了「字标 + 开始试用 + 菜单」三件，品牌与按钮贴在一起 | ≤991 隐藏导航里的 CTA（折叠面板里仍有一项「申请试用」） | 导航只剩字标 + 菜单；面板展开 261px，5 项全在 |
| 4 | 工作流每步右侧空出约 400px（1280 截图） | ≥992 把每步改成「左说明 / 右示例」两栏，编号仍在左边距 | 页高 4201 → 3913，右栏被示例填满 |
| 5 | 能力表首列 20%，「不自己加论点」被拆成「论 / 点。」 | 列宽改 16 / 46 / 38；768–991 再单独调 14 / 43 / 43 | 1280 与 768 都不再出现两字孤行 |
| 6 | 计费切换的选中态只有白底 + 灰字，看不出选中 | 选中文字改 Blue8（9.40:1）并加 600 | 选中态与未选中态可辨 |
| 7 | 字标点击区只有 60 × 24 | 字标改 inline-flex + 44px 高 | 30 个可交互元素全部 ≥44 |

另一条是测试方法回炉：用 `element.click()` 测「复制」拿不到剪贴板（无用户激活，浏览器拦下），改成真实鼠标坐标点击后才拿到成功态。页面逻辑没改，只把测试手段改成真点。

## 10. 超出基准规范的数值清单

| 维度 | 值 | 处理 |
| --- | --- | --- |
| 间距档位（具体 px 组合） | 4/8/12/16/24/32/48/64/96 | 基准规范只给规则（8 倍数 + 4、12 两档），档位整套派生，标 `derived` |
| 圆角 | 4px / 8px | 库无通用规范，两档派生，`derived` |
| 发丝线宽 | 1px | 库无线宽，`derived` |
| 内容容器 1200px | 1200px | 借用基准规范 lg 断点值作内容上限，`derived`（原文没说容器宽，只给画板 1440/1920） |
| 安全边距 16px（<768） | 16px | 基准规范默认 24px，窄屏内收一档，8 的倍数，`derived` |
| 触控目标 44px / 焦点环 2+2 | 44px、2px+2px | 缺口表兜底档，`derived` |
| 金额排版 | 两位小数 + 千分位 + tabular-nums | 缺口表兜底档，`derived` |
| 正文行长 | 30–42 字 | 缺口表兜底档（中文 35–45 字），`derived` |
| 首屏高度 | 1280 下 hero 占视口 56%，下一节露头 44% | 缺口表建议 85% 上下；本页没把 hero 拉满（拉满要靠人为空白），下一节露头更明显，偏保守取 56%，`derived`，见 FINDINGS |
| 数字字体 | tabular-nums | TCloud Number 零外链不可得，按缺口表降级，标注「降级」 |
| 图标尺寸 | 16px 内联 SVG（24 栅格缩放） | 基准规范给 16/20/24/32 四档输出尺寸，取 16 为 UI 内联尺寸 |
| 品牌名 QuillDeck | — | 需求里已给；2026-11-08 按 NameYouLike 口径核验：npm 404、GitHub 无同名产品、`.io/.ai/.dev` 可注册（`briefs/quilldeck.md:17`） |
