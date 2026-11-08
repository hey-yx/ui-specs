# DECISIONS · SamePaper samepaper

> 交付：`examples/samepaper/index.html`（单文件，零外部请求）
> 基准规范：TDesign（腾讯）· 设计场景：S2 落地页与营销页
> 引用一律 `content/完整路径:行号`；实测数字均来自 `file://` 页面在真实浏览器里的运行结果。

## 1. 设计前提

| 项 | 结论 |
| --- | --- |
| 受众 | 产品、设计、研发团队的负责人与成员，正在评估要不要换协作工具（`briefs/samepaper.md:5`） |
| 用途 | 营销落地页：让人看懂产品做什么、相信自己团队用得上，然后开始试用（briefs/samepaper.md:6） |
| 语气 | 具体、可核对、不承诺数字。全页没有「赋能 / 一站式 / 无缝 / 极致」这类词，卖点都写成可验证的动作（评论贴段落、结论转任务、链接可收回） |
| 产品语境 | 原创品牌官网，中文（briefs/samepaper.md:3 语言=中文；briefs/samepaper.md:16 名字=SamePaper） |
| 基准规范 | TDesign。依据 `site/dist/ai/guide.md:20`：新品牌官网（非复刻既有品牌）中文走 TDesign。本稿是营销页而非产品内界面，所以没有走「协作与项目管理工具 → Atlassian」那一行（guide.md:26）：那一行管的是产品内界面，落地的数值气质要与营销页一致 |
| 设计场景 | S2 落地页与营销页（`site/dist/ai/guide.md:638`），辅以 S1 页面基本功、S6 数值层、S5 组件、S9 无障碍 |
| 交付边界 | 不做真注册。所有 CTA 打开同一个弹窗，提交后进入「已建好」的成功态并明确说明是演示环境（briefs/samepaper.md:15） |

基准规范文件（全部读完）：`content/color/tdesign.tencent.com--color.md`、`content/type/tdesign.tencent.com--fonts.md`、`content/layout/tdesign.tencent.com--layout.md`、`content/icons/tdesign.tencent.com--icon.md`、`content/motion/tdesign.tencent.com--motion.md`。

## 2. 结构决策

产品页版型的区块顺序是主视觉 → 价值主张 → 功能 → CTA → 页脚（`content/layouts/layout--hero-features-cta.md:58-62`），定价版型是价格卡 → 对比表 → FAQ → 收尾 CTA，每卡都放 CTA，导航放吸顶 CTA（`content/layouts/layout--pricing-page-cta.md:58-67`）。需求里要求的八项内容比这两个版型多（要客户 logo、评价、定价、FAQ），所以把它们串成一条单向叙事，而不是照抄版型：

| 区块 | 内容 | 依据 |
| --- | --- | --- |
| 首屏 | H1 + 主张 + 两个 CTA + 一张「纸面」示意（`role="img"`，不可交互） | `layout--hero-features-cta.md:58`；示意卡代替产品截图，遵守 briefs/samepaper.md:9「自己画，不用截图」 |
| 01 产品 | 三项能力，用带分隔线的行排，不用卡片墙 | `layout--hero-features-cta.md:61`（功能 3-5 项）；不用 bento：bento 适合多块不等权内容，三项等权会排成空格子（`site/dist/ai/design-points.json` 中 bento-grid-layout 的 select） |
| 02 演示 | 左边文档 + 评论，右边待办，点「转为任务」真的落一条任务 | `layout--product-demo-features` 思路（演示放在功能区）；也是需求「真实协作场景的界面演示」 |
| 03 客户 | logo 文字墙 + 一条大字评价 + 两条小评价 | briefs/samepaper.md:11；数据标注为示例（见 FINDINGS 缺口 7） |
| 04 定价 | 月/年切换 + 三档卡（免费/团队/企业），每卡一个 CTA | `layout--pricing-page-cta.md:58-69` |
| 05 FAQ | 五条手风琴，button + aria-expanded | `layout--pricing-page-cta.md:60`（用 FAQ 解顾虑） |
| 06 收束 | 一句反问 + 一个主按钮 | `layout--hero-features-cta.md:61` |

**版式**：12 栅格（`content/layout/tdesign.tencent.com--layout.md:87`）。首屏 7/5、演示 7/5、评价 7/5、定价 4/4/4、页脚 4/2/2/2/2。左对齐、无居中大标题、无渐变球、无装饰性插图；节奏靠白底段与 `#f3f3f3` 灰色段的交替，以及区块编号 01–06 建立。

**导航**：吸顶页头（`position:sticky`），左品牌、右四个锚点、最右一个主按钮。导航里的 CTA 是定价版型要求的吸顶 CTA（`content/layouts/layout--pricing-page-cta.md:66`）。窄屏折叠成「菜单」按钮（`aria-expanded` + `hidden`），不引入抽屉。

**页脚**：品牌说明 + 四列链接（产品/资源/公司/法律）+ 一行法务与虚构声明。列宽按 12 栅格 4+2+2+2+2。

**强调色**：只用一支 Tencent Blue `#0052d9`，落在主按钮底、链接文字、焦点环、在线状态点、评论卡左边线。理由：配色框架的做法是「一个色相 + 深浅变体」而不是多色相拼盘（`content/howto/learnui.design--color-in-ui-design-a-practical-framework.md:208`）；NN/g 建议不复杂的设计限 2 主色 + 2 辅色，且不要靠颜色单独传层级（`content/howto/nngroup.com--visual-hierarchy-ux-definition.md:58`）。实测填色面积 0.50%（1280 档），远低于 5% 的上限。

## 3. 色彩表

WCAG 2.x 相对亮度公式实算，半透明字色按实际底色合成为不透明色后再算。

| token | 值 | 出处 | 用在哪 | 实测对比度 |
| --- | --- | --- | --- | --- |
| `--white` | `#ffffff` | `content/color/tdesign.tencent.com--color.md:187` | 页面底、卡片底 | — |
| `--gray-1` | `#f3f3f3` | `color...color.md:189` | 灰段底、示意卡底衬、禁用底 | 承载 `--ink` 15.68:1、`--ink-2` 5.17:1 |
| `--gray-3` | `#e8e8e8` | `color...color.md:193` | 装饰分隔线（不承担控件边界） | 1.23:1（装饰线，见 guide.md:42 发丝线一条） |
| `--gray-4` | `#dddddd` | `color...color.md:195` | 卡片/示意卡边框（装饰） | 1.36:1 |
| `--gray-7` | `#8b8b8b` | `color...color.md:201` | 输入框、次按钮、勾选框边框 | 3.41:1（非文本 ≥3 ✓） |
| `--gray-9` | `#5e5e5e` | `color...color.md:205` | 功能列表对勾、辅助说明 | 6.48:1 |
| `--brand` | `#0052d9` | `color...color.md:66`（Blue7） | 主按钮底、链接、焦点环 | 白字压底 6.54:1；白底上 6.54:1 |
| `--brand-hover` | `#003cab` | `color...color.md:69`（Blue8） | 主按钮 hover、强调按钮文字 | 8.52:1（压 `#f2f3ff`）；白底 9.40:1 |
| `--brand-active` | `#002a7c` | `color...color.md:72`（Blue9） | 主按钮 active | 白字压底 12.95:1 |
| `--brand-soft` | `#f2f3ff` | `color...color.md:48`（Blue1） | 强调按钮底、计费切换选中底 | 承载 `--brand-hover` 8.52:1 |
| `--brand-line` | `#d9e1ff` | `color...color.md:51`（Blue2） | 选中文本高亮、轻边框 | 装饰 |
| `--ink` | `rgba(0,0,0,.9)` | `content/type/tdesign.tencent.com--fonts.md:96`（Font Gy1） | 标题与正文 | 白底 17.40:1 |
| `--ink-2` | `rgba(0,0,0,.6)` | `fonts.md:98`（Font Gy2） | 次要文字、导航、页脚链接、价格单位 | 白底 5.74:1 |
| `--ink-3` | `rgba(0,0,0,.4)` | `fonts.md:100`（Font Gy3） | **只**给禁用态 | 压 `#f3f3f3` 2.81:1（WCAG 1.4.3 对禁用控件豁免，不做正文） |
| 错误边框 | `#d54941` | `color...color.md:80`（Red6） | 校验失败输入框边框 | 4.32:1（非文本 ≥3 ✓） |
| 错误文字 | `#ad352f` | `color...color.md:101`（Red7） | 字段错误文案 | 6.31:1 |
| 遮罩 | `rgba(0,0,0,.45)` | 派生（guide.md:50） | 弹窗背景 | — |

两条换档记录：

- **hover 不用 Blue6。** 基准规范的语义 token 是 `brand-color-hover:@blue-color-6`（`color...color.md:508`），但 `#366ef4` 白字实测 4.47:1，差 0.03 不达 AA。按 guide.md:43「hover/active 按实际底色复算，不达 AA 就同族换档」，改用同色板的 Blue8 `#003cab`（9.40:1），`brand-color-active` 用 Blue9。
- **40% 字色不进正文。** `fonts.md:89` 自述「文字显示色彩对比满足至少 1:4.5（AA 级别）」，但 40% 档压白底实测 2.85:1、压 `#f3f3f3` 2.81:1。按 guide.md:43，该档只给禁用与装饰，正文只用 90%/60% 两档。

## 4. 字号 / 行高 / 字重

字阶取自 `content/type/tdesign.tencent.com--fonts.md:51-60`（12/14/16/20/24/28/36/48/64）。每档断点内**只有 3 个字号**，符合「字号最多 3 档、最大的元素不超过 2 个」（`content/howto/nngroup.com--visual-hierarchy-ux-definition.md:76-77`）。全页只有 1 个大标题（H1）。

| 档位 | ≥1200px | 768–1199 | 360–767 | ≤359 | 用在哪 |
| --- | --- | --- | --- | --- | --- |
| L | 64px | 48px | 36px | 28px | 只有 H1 |
| M | 28px | 28px | 24px | 20px | 区块 H2、价格数字、主评价 |
| S | 16px | 16px | 16px | 16px | 正文、导航、按钮、表格外的其余全部 |

其余标题（卡片名、FAQ 问题、页脚列名）统一在 S 档，靠字重 600 与色阶 90%/60% 拉开层级，不新增字号。

| 字号 | 行高 | 说明 |
| --- | --- | --- |
| 64 | 72px | 公式产物（字号+8） |
| 48 | 56px | 公式产物 |
| 36 | 44px | 公式产物 |
| 28 | 36px | 公式产物 |
| 24 | 32px | 公式产物 |
| 20 | 28px | 公式产物 |
| 16 | 24px | 公式产物 |

实现：`line-height = font size + 8`（`fonts.md:67`、`:73-74`），用零特异性通配 `:where(body, body *){line-height:calc(1em + 8px)}`，让每个元素按自身字号算，避免在 `body` 上写死被继承成固定值。

字重只有 400 / 600 两档（`fonts.md:81`，原文说明 Windows 下小于 600 会回落成常规体，所以只用这两档）。

## 5. 间距 / 圆角 / 容器 / 断点

| 维度 | 取值 | 依据 |
| --- | --- | --- |
| 间距 | 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 | 8px 基数（`content/layout/tdesign.tencent.com--layout.md:65`）+ 允许 4、12 两档（`layout.md:107`）；全部为 8 的倍数或原文点名的小档，未用字阶步进凑间距 |
| 栅格 | 12 列，列间距 16 / 区块间距 24 | `layout.md:87`；槽默认 16（`layout.md:77`），区块用 24 与安全边距同档（`layout.md:81`） |
| 容器 | 最大 1200px，左右 24px（≥1200 时 32px） | 设计画板 1440（`layout.md:25`），安全边距默认 24（`layout.md:81`） |
| 断点 | 768 / 992 / 1200 | `layout.md:117-119` |
| 断点（派生） | 359 | 320 档放不下 9 个 36px 字（见第 9 节回炉 c） |
| 圆角 | 4px（按钮、输入框、标签）/ 8px（卡片、示意卡、弹窗） | 库无通用 radius 原文，按 guide.md:40 成套派生两档 |
| 发丝线 | 1px | 库只给线色不给线宽，按 guide.md:42 派生；装饰线不承担控件边界 |
| 正文行长 | 40em（≈40 个汉字），窄栏 34em | guide.md:48：中文 35–45 字，同页只用一种主行长 |
| 首屏高度 | `calc(80vh - 64px)`，加页头合计约 80% 屏高 | guide.md:49：85% 上下并让下一节露头；实测 1280×900 时下一节标题能看到 |
| 触控目标 | 按钮/输入/链接 ≥44×44，间距 ≥8 | guide.md:51；WCAG 2.2 目标尺寸（`content/a11y/w3c--wcag-2.2.md:871`，2.5.8 的 24×24 下限之上取稳） |
| 焦点环 | 2px 实线 `#0052d9` + 2px 偏移 | guide.md:51；对比白底 6.54:1 ≥3 |
| 组件尺寸（派生） | 按钮高 44、输入框高 44、头像 28、勾选框 16、图标 24（行内 20） | guide.md:45：基准规范不给组件尺寸，整套自定 |
| 金额 | 两位小数、`tabular-nums`、¥ 在数字前 | guide.md:52；TCloud Number 拿不到，按 guide.md:41 降级为 tabular-nums |

## 6. 动效

时长与曲线全部来自基准规范 `content/motion/tdesign.tencent.com--motion.md`，没有跨源，也没有自造曲线：

| token | 值 | 出处 | 用在哪 |
| --- | --- | --- | --- |
| base | 200ms | `motion.md:99`（@duration-desktop-base） | 按钮 hover/active、输入框边框、焦点、轻提示 |
| moderate | 240ms | `motion.md:100` | 弹窗位移、任务新增行的高亮 |
| slow | 280ms | `motion.md:101` | 弹窗整体（进出） |
| standard | `cubic-bezier(.38,0,.24,1)` | `motion.md:111` | 颜色、位移的默认曲线 |
| ease out（入画） | `cubic-bezier(0,0,.15,1)` | `motion.md:112` | 弹窗进入 |
| ease in（出画） | `cubic-bezier(0.82,0,1,.9)` | `motion.md:113` | 弹窗退场 |

桌面端 200–600ms 是原文给的合适区间（`motion.md:89`），本页取区间下沿，因为都是小元素的反馈，不需要长时长。

`prefers-reduced-motion: reduce` 下把所有过渡压到 0.01ms、关掉平滑滚动、去掉弹窗位移。

**有意不做动效的地方**：FAQ 手风琴直接用 `hidden` 切换，不做高度过渡——动画期间内容仍在 DOM 里，屏读会读到收起的答案；宁可瞬切也不牺牲可读性。

## 7. 设计点路由表

| 设计点 | 选用标准（select 摘要） | 取舍 | 落在哪 |
| --- | --- | --- | --- |
| howto-visual-hierarchy | 字号最多 3 档、最大元素 ≤2、简单设计 2 主色 2 辅色 | 采用：3 档字号 + 唯一 H1 + 单强调色 | 第 4 节；全页只有 1 个 64/48/36px 元素 |
| howto-ui-color-framework（方法层必读） | 一个色相靠深浅变体表达状态，hover/选中各只动一个维度 | 采用原则，取值仍走基准规范色板（Blue6/7/8/9） | 第 3 节；hover 因对比度从 Blue6 换 Blue8 |
| bento-grid-layout | 内容块跨度不一、想用便当格时选 | 不选：三项等权，bento 会留空格 | 能力区改成带分隔线的行 |
| layouts-product-page | 主视觉→价值主张→功能→CTA→页脚；CTA 首屏+页尾 | 采用，并在中间插入需求里要求的演示、客户、定价、FAQ | 第 2 节区块表 |
| layouts-pricing-comparison | 每卡 CTA、导航吸顶 CTA、突出目标套餐、年付写真实数字、FAQ 解顾虑 | 采用；砍掉功能对比表（三档差异已用列表写清，加表只会拉长决策） | 04 定价 |
| components-cards | 卡片挂在区块 h2 下时卡内标题降 h3；无 hover 也完整可读 | 采用 | 价格卡、待办卡、评论卡都是 h3 挂在区块 h2 下 |
| components-button-hierarchy | 每屏一个 primary（页头/弹窗不算）；secondary 只配 primary | 采用：每个视口内正文区最多一个实底主按钮 | hero、pricing、收尾各一个；弹窗内一个 |
| components-modal-dialog | 打开后焦点落第一个输入框，Tab 不出框 | 采用：原生 `<dialog showModal>` 自带焦点陷阱 | 弹窗 |
| a11y-modal-focus-trap | 焦点锁在框内、Esc 关闭、关闭后焦点还原到触发元素 | 采用，并补一帧延迟修正原生回焦顺序 | 第 9 节回炉 g |
| a11y-expand-collapse-keys | 手风琴标题是 button，Enter/Space 可开合，`aria-expanded` + `aria-controls` | 采用 | FAQ |
| a11y-focus-visibility | `:focus-visible` 才出现焦点环；页首 skip link | 采用 | 全局；skip link 首个 Tab 停在 top:12px |
| icons-spec（TDesign） | 一个项目只跟一个图标源，网格/线宽/端点成套 | 采用 TDesign：24 栅格、2px 描边、端点直角 | 全站内联 SVG（`content/icons/tdesign.tencent.com--icon.md:38,56,60`） |
| patterns-states-feedback | 禁用态不可点、降透明度；只读有专门呈现 | 部分采用：禁用用第三档字色 + 灰底；没有只读态需求 | 转任务后的按钮 |
| patterns-feedback-criteria | 当帧有响应、失败保留输入并说明原因、数字与数据联动 | 采用 | 见第 8 节交互前后数字 |
| type-measure-limit / clreq | 中文行长有上限 | 采用 guide.md:48 的 35–45 字，取 40 | 正文 `max-width:40em` |

未取值的点：`brands-*` 全部只作气质参照、不取任何色值或字号（guide.md:20 明确新品牌不抄 brands 的值）；`dataviz-*` 无图表需求，未用。

## 8. 交付自验

全部为 `file:///Users/mac/workspace/active/UISpecs/examples/samepaper/index.html` 在 Chrome 中的实测值。

**四档宽度**（`documentElement.scrollWidth / clientWidth`）：

| 视口 | scrollWidth / clientWidth | 结论 | 文档高 |
| --- | --- | --- | --- |
| 320 | 320 / 320 | 无横向溢出 | 7956 |
| 375 | 375 / 375 | 无横向溢出 | 7710 |
| 768 | 753 / 753 | 无横向溢出（滚动条占 15） | 6888 |
| 1280 | 1265 / 1265 | 无横向溢出（滚动条占 15） | 5220 |

另测：320 档展开移动导航后面板宽 320、页面仍 320/320。

**零外链**：`performance.getEntriesByType('resource').length === 0`，四档均 0。CSS/JS 内联，图标与示意图全部是内联 SVG 或 HTML/CSS，没有字体文件、没有图片请求。

**行高普查**：遍历含直接文本节点的元素，逐个数 `computedStyle.lineHeight - (fontSize + 8)`，容差 0.6px。四档均 **177 个文本节点，0 违例**。

**字号档位**（同一普查顺带统计）：320 = {28×1, 20×10, 16×163}；375 = {36×1, 24×10, 16×163}；768 = {48×1, 28×10, 16×163}；1280 = {64×1, 28×10, 16×163}。每档恰好 3 个字号。

**核心交互**（真点，记录前后）：

| 交互 | 操作前 | 操作后 |
| --- | --- | --- |
| 计费周期切换（月付→年付） | 团队档 `39.00`，说明「月付 ¥39.00 / 人 / 月；换年付 ¥31.20，每年省 ¥93.60。」 | `31.20`，说明「年付：¥374.40 / 人 / 年，比月付省 ¥93.60。」 |
| 评论转任务（真实坐标点击） | 待办 `2 项` / 2 个 `li` | `3 项` / 3 个 `li`，新行「把迁移脚本的失败重试补上 · 林岚」；按钮变「已转为任务」并 `disabled` |
| 重置演示 | 3 项 | 回到 `2 项`，按钮恢复「转为任务」 |
| FAQ 展开 | 5 条全 `aria-expanded="false"` | `#qa2b` → `true`、面板 `hidden=false`、符号 `−`；再展开第 3 条时同时开 2 条；再点回 `false` |
| 弹窗空提交 | 0 条错误 | 2 条错误（团队名称、邮箱），两字段 `aria-invalid="true"`，边框转 `rgb(213,73,65)` 2px |
| 弹窗非法邮箱 `a@b` | 2 条错误 | 1 条错误「邮箱格式不完整，检查一下 @ 后面的域名。」；说明文字收起 |
| 弹窗合法提交 | 表单可见 | 表单 `hidden`，成功面板显示「测试团队的纸面已经建好」，焦点到「回到页面」 |
| Esc 关闭弹窗 | 打开 | 关闭，焦点回到触发按钮（页头「免费开始」） |
| 移动导航（375 与 320） | `hidden=true`，`display:none` | `hidden=false`，`display:flex`，面板高 193；点链接后自动收起 |
| 页脚占位链接 | — | 轻提示「更新日志还没写：这是演示页面，本稿只包含首页。」，`role="status"` 播报 |

**键盘**：首 Tab 落在 skip link（top 12px，可见），焦点环 `rgb(0,82,217) solid 2px`，offset 2px；第 3 个 Tab 到「产品」导航项，同样是 2px 实线环。

**对比度**（合成后半透明字色实算）：

| 位置 | 前景 / 背景 | 实测 |
| --- | --- | --- |
| 正文与标题 | `rgba(0,0,0,.9)` / `#fff` | 17.40:1 |
| 次要文字（主张、说明、页脚链接、导航） | `rgba(0,0,0,.6)` / `#fff` | 5.74:1 |
| 高亮按钮文字 | `#003cab` / `#f2f3ff` | 8.52:1 |
| 主按钮文字 | `#fff` / `#0052d9` | 6.54:1 |
| 错误文案 | `#ad352f` / `#fff` | 6.31:1 |
| 禁用按钮 | `rgba(0,0,0,.4)` / `#f3f3f3` | 2.81:1（禁用豁免） |
| 输入框边框（非文本） | `#8b8b8b` / `#fff` | 3.41:1 |
| 焦点环（非文本） | `#0052d9` / `#fff` | 6.54:1 |

**强调色实填面积**（统计所有 `background-color` 为 `rgb(0,82,217)` 的元素面积 ÷ 文档面积）：320 = 1.18%，375 = 1.12%，768 = 0.93%，1280 = 0.50%，均 < 5%。

**控制台**：装 `error` / `unhandledrejection` 监听后把 8 个交互跑一遍，捕获 0 条。

## 9. 回炉记录

第一版出稿后逐项测，下面每条都是实测或截图发现的问题，改完重测。

| # | 问题 | 怎么发现 | 改法 | 改后 |
| --- | --- | --- | --- | --- |
| a | 字号出现第 4、第 5 档：`h3` 落回浏览器默认 18.72px，页脚/弹窗 `h2` 落回 24px | 字号普查：1280 档出现 `18.72px × 18`、`24px × 5` | 加 `h1,h2,h3{font-size:var(--fs-s)}`，具体类再覆盖 | 每档只剩 3 个字号 |
| b | 首屏示意卡里绝对定位的协作者光标压在正文上，被读成渲染错误 | 截图评审 | 去掉浮动光标，改成卡片内一行 presence「林岚 正在改第 2 段 / 周敏 正在看评论 / 陈可 在收尾待办」，2px 光标竖线做标记 | 正文不再被遮挡，协作信息可读 |
| c | 768 档标题断成「…写在同 / 一张纸上」，320 档把「任务」拆开、末行只剩「上」 | 分档截图 | H1 在逗号后强制断行；<359 再退到字阶 28/20 两档 | 各档都是 2 行，断在逗号后 |
| d | 演示区右栏比左栏矮 56px，「重置演示」挂在右栏下像局部操作 | 量两栏高度：409 / 353 | 重置提到区块说明下面作为整区动作，待办卡 `flex:1` 撑满 | 两栏 409 / 409 |
| e | 计费切换选中态是整块实蓝，像两个按钮；且月付选中时说明写「年付价…」有歧义 | 截图评审 | 选中改品牌浅底 + 1px 内描边；说明改成「月付 ¥39.00…换年付 ¥31.20，每年省 ¥93.60。」 | 像分段控件，文案无歧义 |
| f | 邮箱字段报错时，说明文字和错误提示同时挂在字段下 | 弹窗报错态截图 | 报错时收起 `#emailHint`，输入即恢复 | 一个字段只有一条提示 |
| g | 关闭弹窗后焦点回到文档里上一个焦点元素，而不是触发按钮 | 交互实测 | `close` 事件里 `requestAnimationFrame` 再还给 `lastTrigger` | 焦点回到页头「免费开始」 |
| h | 首屏与下一节之间留白过大，下一节只露出空白 | 截图评审 | hero 高度改 `calc(80vh - 64px)`，上下 padding 收到 48/64 | 1280×900 能看到「01 / 产品」与小标题 |
| i | 320 档按钮「免费档不限人数」断成孤字「人数」 | 375/320 截图 | 主张下方三段说明各自 `nowrap`，只在「·」处换行 | 断行落在分隔符 |

## 10. 超出基准规范的数值清单

全部标 derived，或回到基准规范原文；没有跨源借值。

| 维度 | 值 | 状态 | 规则 |
| --- | --- | --- | --- |
| 圆角 | 4 / 8 | derived | guide.md:40，两档成套 |
| 发丝线宽 | 1px | derived | guide.md:42 |
| 正文行长 | 40em / 34em | derived | guide.md:48，中文 35–45 字 |
| 首屏高度 | `calc(80vh - 64px)` | derived | guide.md:49，取 85% 下沿并留出下一节标题 |
| 弹层遮罩 | `rgba(0,0,0,.45)` | derived | guide.md:50 |
| 触控目标 | 44×44 | derived | guide.md:51（WCAG 2.2 下限之上取稳） |
| 焦点环 | 2px + 2px 偏移 | derived | guide.md:51 |
| 组件尺寸 | 按钮/输入 44，头像 28，勾选框 16 | derived | guide.md:45，整套自定 |
| 金额排版 | 两位小数 + tabular-nums | derived / 降级 | guide.md:52、:41（TCloud Number 零请求下拿不到） |
| 断点 359 | 28/20 两档 | derived | guide.md:47 的窄屏降档，值仍取 TDesign 字阶 |
| 栅格跨度 | 7/5、4/4/4、4/2/2/2/2 | derived（组合） | 12 栅格（`layout.md:87`）内的 span 组合，不是新数值 |
| 阴影 | 不使用 | 缺口 | 库内无 elevation/阴影数值，用 1px 边框代替，见 FINDINGS 缺口 4 |
| 图标尺寸 | 24 / 20 | 原文 | `content/icons/tdesign.tencent.com--icon.md:38` |
