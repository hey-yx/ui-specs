# DECISIONS · EpDeck（epdeck）

本文件记录这一稿的每个决定与它的出处。数值引用一律 `content/<完整路径>:<行号>`。

---

## 1. 设计前提

| 项 | 结论 | 依据 |
| --- | --- | --- |
| 受众 | 重度追剧用户，晚上打开页面找剧、追更、接着上次继续看 | `briefs/epdeck.md:5` |
| 用途 | 发现一部剧 → 进入剧集详情 → 接着看；播放器只做界面模拟 | `briefs/epdeck.md:6`、`briefs/epdeck.md:16` |
| 语气 | 夜间、克制、信息优先。不做营销腔、不放插画氛围 | 场景判断：`content/color/tdesign.tencent.com--dark.md:20`（夜间友好）、`:29`（避免高饱和） |
| 产品语境 | 中文产品 UI（内容消费站点） | `site/dist/ai/guide.md:27` |
| 基准规范 | **TDesign**（唯一数值决定权） | `site/dist/ai/guide.md:27`、`:10` |
| 基准规范文章 | 色彩、字体、布局、图标、动效、深色模式 6 篇 | 见下表 |
| 设计场景 | S1 页面基本功 / S6 数值层 / S5 组件 / S18 导航 / S19 状态 / S9 无障碍 / S13 文案 / S16 评审底线 | `site/dist/ai/design-points.json` → `points_by_task` |
| 方法层必读 | 界面配色框架、视觉层级 | `design-points.json` → `method_required` |

基准规范六篇：`content/color/tdesign.tencent.com--color.md`、`content/color/tdesign.tencent.com--dark.md`、`content/type/tdesign.tencent.com--fonts.md`、`content/layout/tdesign.tencent.com--layout.md`、`content/icons/tdesign.tencent.com--icon.md`、`content/motion/tdesign.tencent.com--motion.md`。

## 2. 结构决策

**版式：目录索引 + 整幅主推带（单栏，Catalogue Index + Feature Band）。**
理由：内容型首页的第一任务是「今晚看什么」，主推带承担单一最大元素，其余区块按任务链排：接着看 → 热播 → 热榜 → 片库筛选。不用三栏仪表盘，也不用 bento，因为页面主体是「一条可扫读的剧集目录」而不是指标面板。首屏高度按「让下一节露头」处理（`site/dist/ai/guide.md:49`）：1280×900 实测 header 65 + hero 702 = 767px（85.2%），下一节标题 `#cwTitle` 位于 815–851px，完整可见。

**导航：顶部导航布局。** TDesign 明确「主要操作区域在内容区、导航效率要求不高」时用顶部导航，并给内容区固定宽度（`content/layout/tdesign.tencent.com--layout.md:49`-`51`）。
- 品牌只链回本站首页，站内链接不开新 tab（`content/patterns/carbon--global-header.md:42`、`:44`）。
- 产品级链接（首页/剧库/榜单/我的追剧）左对齐，系统级工具（搜索、通知）右对齐（同篇 `:150`）。
- `<768` 时主导航收进菜单抽屉，与「窄屏把 header 链接移入面板」一致（同篇 `:153`）。抽屉打开后焦点锁在面板内、Esc 关闭、关闭后焦点回触发按钮。
- 搜索图标不是导航，而是把焦点送到片库搜索框（「工具图标不直接导航」同篇 `:53`）。

**页脚：三段（品牌与声明 / 站内导航 / 法务与版权）。** TDesign 把底部区域定位为「辅助信息」（`content/layout/tdesign.tencent.com--layout.md:37`）。法务三项做成按钮打开说明面板，不写 `href="#"` 假链接，避免死点。

**强调色：腾讯蓝深色档。** 主色只承担三类角色（交互填充、选中态、进度），不铺底色；实填面积 0.68%（1280）～2.7%（320），见第 8 节。

**封面：没有图片可用。** 全站零外链，因此剧集封面由「深色色板渐变 + 字阶顶档 64px 的巨大字 + 1px 斜纹」构成，属于型排封面（derived），不是照片占位；封面上的剧名、评分、更新集数都是真实数据字段。

## 3. 色彩表

全部取深色模式色板与深色文字 token，不跨源借色。

| token | 值 | 出处 | 用在哪 | 实测对比度 |
| --- | --- | --- | --- | --- |
| `--bg` | `#181818` | `content/color/tdesign.tencent.com--color.md:215`（Gray14 L8） | 页面底、播放器底 | — |
| `--surface` | `#242424` | `content/color/tdesign.tencent.com--color.md:213`（Gray13 L14） | 卡片浮层、输入框、播放条、侧栏 | 与底 1.13（装饰分层，不承担控件边界） |
| `--surface-2` | `#2c2c2c` | `content/color/tdesign.tencent.com--color.md:211`（Gray12 L18） | 进度条槽、计数胶囊 | 与底 1.31（同上） |
| `--line` | `#393939` | `content/color/tdesign.tencent.com--color.md:209`（Gray11 L24） | 1px 装饰发丝线、卡片描边 | 与底 1.55（装饰，不判 3:1） |
| `--line-ctl` | `#777777` | `content/color/tdesign.tencent.com--color.md:203`（Gray8 L50） | 输入框/下拉/次按钮的控件边界 | 3.97（底）/3.46（`--surface`），≥3:1 |
| `--t1` | `#ffffff` 90% | `content/color/tdesign.tencent.com--dark.md:44` | 标题、正文重点、按钮字 | 14.48 |
| `--t2` | `#ffffff` 60% | `content/color/tdesign.tencent.com--dark.md:45` | 次要文字、元信息、说明 | 7.01 |
| `--t3` | `#ffffff` 40% | `content/color/tdesign.tencent.com--dark.md:46` | 未更新集数（禁用） | 3.82（禁用态，WCAG 1.4.3 豁免） |
| `--t-dis` | `#ffffff` 26% | `content/color/tdesign.tencent.com--dark.md:47` | 按钮禁用字（「已全部读完」） | 2.36（同上豁免） |
| `--brand` | `#2174ff` | `content/color/tdesign.tencent.com--dark.md:69`（Blue6） | 未读点、选中下划线、进度填充、选中描边 | 4.23（非文本，≥3:1） |
| `--brand-ink` | `#0957d9` | `content/color/tdesign.tencent.com--dark.md:67`（Blue5） | 实填主按钮底 | 白字 6.22 |
| `--brand-ink-h` | `#084dcd` | `content/color/tdesign.tencent.com--dark.md:65`（Blue4） | 主按钮 hover | 白字 6.78 |
| `--brand-ink-a` | `#073ab5` | `content/color/tdesign.tencent.com--dark.md:63`（Blue3） | 主按钮 active | 白字 9.20 |
| `--brand-text` | `#478dff` | `content/color/tdesign.tencent.com--dark.md:71`（Blue7） | 链接文字、强调字、焦点环 | 5.51 |
| `--rate` | `#d29e08` | `content/color/tdesign.tencent.com--dark.md:206`（Yellow6） | 评分数字与评分徽标 | 7.30（底）/6.88（封面上） |
| `--scrim` | `rgba(0,0,0,.45)` | 派生（`site/dist/ai/guide.md:50`） | 播放器画面遮罩、抽屉遮罩 | 用于压暗，不承载文字 |

**为什么按钮用 Blue5 而不是品牌 Blue6。** Blue6 `#2174ff` 压白字实测 4.19:1，不到 4.5；按「色阶当文字」缺口规则（`site/dist/ai/guide.md:43`）在同一色板内换同族深档到 Blue5（6.22:1），hover / active 继续沿 Blue4 → Blue3 降亮度（`content/howto/learnui.design--color-in-ui-design-a-practical-framework.md:208`：深变体 = 降亮度 + 提饱和）。链接文字反向处理：Blue6 当文字只有 4.26，提亮到 Blue7（5.51）。

**状态变化只动一个维度**（同篇 `:242`）：hover 只降亮度、选中只加一层 14% 品牌底，不换色相。全站色相只有一个（腾讯蓝）+ 一个评分黄，符合「简单设计限 2 主色 2 辅色」（`content/howto/nngroup.com--visual-hierarchy-ux-definition.md:58`）。

## 4. 字号 / 行高 / 字重

字阶取 TDesign 一级字阶（12/14/16/20）与二级字阶（24/28/36/48/64）中的 7 档（`content/type/tdesign.tencent.com--fonts.md:44`-`60`）。

| 用途 | 字号 | 行高 | 字重 | 出处 |
| --- | --- | --- | --- | --- |
| 首屏剧名 h1 | 48（≤767 为 28） | 56 / 36（公式产物） | 600 | 字号 `content/type/tdesign.tencent.com--fonts.md:59` |
| 详情剧名 h1 | 36（≤767 为 28） | 44 / 36（公式产物） | 600 | `content/type/tdesign.tencent.com--fonts.md:58` |
| 区块标题 h2 | 28（≤767 为 24） | 36 / 32（公式产物） | 600 | `content/type/tdesign.tencent.com--fonts.md:56` |
| 卡片标题 h3 / 按钮 / 导语 | 16 | 24（公式产物） | 600 / 400 | `content/type/tdesign.tencent.com--fonts.md:53` |
| 正文 | 14 | 22（公式产物） | 400 | `content/type/tdesign.tencent.com--fonts.md:52` |
| 辅助信息（集数、评分、时间） | 12 | 20（公式产物） | 400 | `content/type/tdesign.tencent.com--fonts.md:51` |
| 封面巨大字（装饰） | 64 | 72（公式产物） | 600 | `content/type/tdesign.tencent.com--fonts.md:60` |

- 行高**不是**写死的值：CSS 只有一条 `:where(body, body *){line-height:calc(1em + 8px)}`，每个元素按自身字号算「字号 + 8」（公式出处 `content/type/tdesign.tencent.com--fonts.md:67`）。表里的行高列是公式在该字号下的产物，仅用于核对。
- 字重只用 400 / 600 两档（`content/type/tdesign.tencent.com--fonts.md:79`-`81`）。
- 字体栈直接用 TDesign 系统栈，不引外链字体（`content/type/tdesign.tencent.com--fonts.md:34`）。
- 数字一律 `font-variant-numeric: tabular-nums`（TCloud Number 取不到时的降级，`content/type/tdesign.tencent.com--fonts.md:37`、`site/dist/ai/guide.md:41`）。

## 5. 间距 / 圆角 / 容器 / 断点

| 项 | 值 | 出处 |
| --- | --- | --- |
| 间距刻度 | 4 / 8 / 12 / 16 / 24 / 32 / 48 | `content/layout/tdesign.tencent.com--layout.md:107`（8 倍数 + 4、12 两档） |
| 区块纵向 | 48（≤767 为 32） | 同上，取刻度内两档 |
| 卡片与列表间距 | 16（槽宽） | `content/layout/tdesign.tencent.com--layout.md:77` |
| 页面安全边距 | 24（≤767 为 16） | `content/layout/tdesign.tencent.com--layout.md:81`（建议 8 的倍数） |
| 栅格 | 12 列，hero 7/5 分栏 | `content/layout/tdesign.tencent.com--layout.md:87` |
| 内容容器 | max-width 1200，居中 | derived：直接取 `lg` 断点值 `1200`（`content/layout/tdesign.tencent.com--layout.md:119`），不新造数字 |
| 断点 | 768 / 992 / 1200 | `content/layout/tdesign.tencent.com--layout.md:116`-`119` |
| 圆角 | 4（chip、输入、集数）/ 8（卡片、按钮、面板） | derived，库无通用圆角规范（`site/dist/ai/guide.md:40`） |
| 发丝线 | 1px | derived（`site/dist/ai/guide.md:42`） |
| 控件高度 | 44（按钮、chip、输入、集数、图标按钮） | derived（`site/dist/ai/guide.md:45`、`:51`） |
| 正文行长 | 34em（约 34 个中文字/行） | derived（`site/dist/ai/guide.md:48`：中文 35–45 字） |
| 封面比例 | 2:3（卡）/ 16:9（继续看、播放器） | derived，库无媒体封面规范（记入 FINDINGS 缺口） |
| 集数格 | 6 / 8 / 12 列（随断点） | derived，避免 1280 下 auto-fill 排出 18 列 |

## 6. 动效

| 场景 | 时长 | 缓动 | 出处 |
| --- | --- | --- | --- |
| hover / 按下 / 焦点色变 | 200ms | `cubic-bezier(.38,0,.24,1)` | `content/motion/tdesign.tencent.com--motion.md:99`、`:111` |
| 筛选 chip、状态切换 | 240ms | 同上 | `content/motion/tdesign.tencent.com--motion.md:100`、`:111` |
| 侧栏抽屉进场 | 280ms | `cubic-bezier(0,0,.15,1)`（入画） | `content/motion/tdesign.tencent.com--motion.md:101`、`:112` |
| 侧栏抽屉退场 | 200ms | `cubic-bezier(.82,0,1,.9)`（出画） | `content/motion/tdesign.tencent.com--motion.md:113`，进场比退场长按 NN/g `content/motion/nngroup.com--animation-duration.md:84` |
| 遮罩淡入 | 280ms | 标准曲线 | `content/motion/tdesign.tencent.com--motion.md:101`、`:111` |

- 只动 `transform` / `opacity` / 颜色，不动宽高与位置（`content/motion/nngroup.com--animation-duration.md:78`-`84`；`site/dist/ai/guide.md:39`）。
- `prefers-reduced-motion: reduce` 下所有过渡压到 1ms（实测 `0.001s`），不是「变慢」（`site/dist/ai/guide.md:39`、`content/motion/carbondesignsystem.com--motion.md:364`-`366`）。
- 页面加载不做入场编排（TDesign：首屏不建议顺序动画，`content/motion/tdesign.tencent.com--motion.md:146`）。

## 7. 设计点路由表

| 设计点 | 选用标准（select 摘要） | 落在哪 |
| --- | --- | --- |
| `howto-visual-hierarchy` | 字号最多 3 档、最大元素 ≤2、配色 2 主 2 辅 | 层级三档（标题/副标/正文）+ 展示档；每屏 48px 元素只有 1 个；色相只有蓝 + 评分黄 |
| `howto-ui-color-framework` | 一个基准色派生状态，选中只降亮度、hover 只降饱和 | 腾讯蓝 Blue3–Blue7 一套；hover 降亮度、选中加 14% 同族底 |
| `howto-ui-polish` | 留白舍得给；白字压图必须垫深色渐变 | 区块 48 间距；封面 40% 起加深色渐变遮罩 |
| `type-scale-steps` | 字阶有规律，一套系统只用少数几种字号 | 取 TDesign 7 档，全部来自原文序列 |
| `type-line-height-box` | 字号与行高成对定义 | 全站 `calc(1em + 8px)` |
| `type-weight-restraint` | 一套界面只用两档字重 | 400 / 600 |
| `layout-spacing-scale` | 间距按一套尺度取 | 4/8/12/16/24/32/48 |
| `layout-grid-columns` | 页面骨架先定栅格 | 12 栏，hero 7/5 |
| `layout-adaptive-guides` | 多端适配、断点成套 | 768 / 992 / 1200 三档 |
| `components-cards` | 链接放标题内再铺满整卡，卡内不加第二个链接 | `h3 > a` + `::after` 铺满；`:focus-within` 给整卡焦点样式 |
| `components-button-hierarchy` | 每屏一个 primary；切换按钮写 `aria-pressed` 且文案不随态改 | 首屏唯一实填按钮「继续观看」；详情唯一的实填操作按钮也是「继续观看」（播放圆钮属播放器控件，不算页面主操作）；「追剧」文案恒定 + `aria-pressed` |
| `components-tabs` | 选项组只有 hover / focus / 选中 / 禁用 | 类型 chip、状态分段按钮均为单组 `aria-pressed` |
| `components-nav-aids` | 扁平站不用面包屑；每页必备 skip link | 无面包屑，详情只有返回链接；skip link 在 body 第一个可聚焦位 |
| `patterns-global-nav` | logo 回首页、产品左系统右、窄屏入面板 | 见第 2 节 |
| `patterns-loading` | 筛选用常驻 `role=status` 播报结果数 | `#libCount` 常驻 `role="status" aria-live="polite"` |
| `patterns-states-feedback` + `carbon--disabled-states` | 禁用不可点、降透明度、读屏另有说明 | 未更新集数 `disabled` + `aria-label="第 N 集，未更新"` |
| `patterns-empty-onboarding` | 空态替换原内容并给一个主行动 | 搜不到时整块换成空态 + 「清空筛选」 |
| `a11y-focus-visibility` | focus-visible 才出现、skip link、纯键盘可达 | `:focus-visible` 2px + 2px 偏移；Tab 顺序 = DOM 顺序 |
| `a11y-modal-focus-trap` | 焦点锁在框内、Esc 关闭、关闭后焦点还原 | 通知/菜单/说明三个抽屉共用一套逻辑，实测 Tab 在 4 个元素内循环 |
| `motion-duration` / `motion-easing` / `motion-reduced` | 时长按场景分档；进场 ease-out；reduce 下关掉 | 见第 6 节 |
| `standards-clreq-typesetting` + `markdown-cn-copywriting` | 中英、中数、数字与单位之间加空格；全角标点 | 「第 24 集」「9.1 分」「128.4 万人」「45:00」；百分号不加空格 |
| `patterns-test-walkthrough` | 四档宽度 + 三张清单 + 前后值 | 见第 8、9 节 |
| `color-contrast-threshold` / `a11y-contrast-threshold` | 正文 4.5、大字与非文本 3，按实际底色复算 | 见第 3 节实测列 |

## 8. 交付自验

浏览器：Chromium，`file:///Users/mac/workspace/active/UISpecs/examples/epdeck/index.html`，用 CDP 设备模拟逐档测量。

**横向溢出（`documentElement.scrollWidth / clientWidth`）**

| 宽度 | 首页 | 详情 |
| --- | --- | --- |
| 320 | 320 / 320 | 320 / 320 |
| 375 | 375 / 375 | 375 / 375 |
| 768 | 753 / 753 | 753 / 753 |
| 1280 | 1265 / 1265 | 1265 / 1265 |

（768 与 1280 两侧差值是纵向滚动条占位，两侧数值相等。）

**零外链**：`performance.getEntriesByType('resource').length === 0`，四档均为 0；无字体、无图片、无脚本外链，图标全部内联 SVG。

**行高全量普查**（遍历含直接文本节点的元素，比对 `lineHeight` 与 `fontSize + 8`，容差 0.6px）：首页 209 个节点 0 违例；详情 93 个节点 0 违例。

**强调色实填面积**（只计 brand 实色填充的元素，排除封面/播放器画面，按首屏视口面积折算）：320 = 2.70%，375 = 2.30%，768 = 1.15%，1280 = 0.68%，均 < 5%。

**对比度（WCAG 公式实算，含 alpha 合成）**

| 对象 | 前景 / 背景 | 实测 |
| --- | --- | --- |
| 正文 16px（首屏简介） | `#fff` 60% / `#181818` | 7.01 |
| 次要文字 14px（元信息） | `#fff` 60% / `#181818` | 7.01 |
| 辅助 12px（卡片元信息、榜单数字） | `#fff` 60% / `#181818` | 7.01 |
| 封面底部说明 12px | `#fff` 60% / `#062e9a` | 4.95 |
| 按钮文字 16px | `#fff` / `#0957d9` | 6.22 |
| 评分数字 28px | `#d29e08` / `#181818` | 7.30 |
| 封面评分徽标 12px | `#d29e08` / 封面上 78% 深底 | 6.88 |
| 强调文字 12px | `#478dff` / `#181818` | 5.51 |
| 禁用集数 14px | `#fff` 40% / `#181818` | 3.82（禁用态，WCAG 1.4.3 豁免） |
| 禁用按钮 16px | `#fff` 26% / `#242424` | 2.36（同上豁免） |
| 控件边界（输入框、下拉） | `#777777` / `#181818`、`#242424` | 3.97 / 3.46（非文本 ≥3） |
| 焦点环 | `#478dff` / `#181818` | 5.51（WCAG 2.2 焦点 ≥3） |

**核心交互（真点真操作，记录前后值）**

| 交互 | 前 | 后 |
| --- | --- | --- |
| 类型筛选「悬疑」 | 12 部 | 3 部（长夜将明 / 雪线以上 / 镜中人） |
| 再叠「已完结」 | 3 部 | 1 部（镜中人） |
| 状态切「已完结」（类型回全部） | 12 部 | 5 部 |
| 搜索「陈默」 | 12 部 | 3 部（长夜将明 / 第六次日出 / 零号实验室） |
| 搜索「银河」 | 3 部 | 0 部，空态出现，计数「共 0 部」 |
| 点「清空筛选」 | 0 部 + 空态 | 12 部，空态隐藏，焦点回搜索框 |
| 导航「我的追剧」 | 12 部 | 3 部，计数「共 3 部（只看追剧）」 |
| 详情「追剧」开关 | aria-pressed=false，计数 3 | aria-pressed=true，计数 4；再点回 3 |
| 选集 24 → 3 | 第 24 集，12:40 / 45:00 | 第 3 集，00:00 / 45:00，进度 0% |
| 播放 3.2 秒 | 12:40 | 12:43（按真实经过时间推进），暂停后保持 12:43 |
| 通知面板 | 未读 3，铃铛蓝点 | 全部已读 3 条，按钮「已全部读完」并禁用，铃铛 aria-label「0 条未读」、蓝点消失 |
| 抽屉进场 | — | 280ms；第 120ms 实测位移 54.97px，结束位移 0 |
| Esc 关闭抽屉 | 面板打开，`body overflow:hidden` | 面板隐藏（从 Esc 到 hidden 约 290ms），滚动解锁，焦点回 `#newsBtn` |
| 抽屉焦点陷阱 | — | 面板内 4 个可聚焦元素，Tab 从末项回卷到首项，6 次连续 Tab 均未逃出面板 |
| 菜单（375） | `#navMain` display:none，菜单按钮 flex | 打开后 transform 位移 0；点「首页」后面板关闭、滚动解锁 |
| 搜索图标 | — | 滚到片库并把焦点落到 `#q` |
| 详情返回 | 焦点在详情 h1 | 回首页，焦点回落到来源卡片链接（`#hotGrid` 内） |
| 减少动效 | 抽屉 0.28s、按钮 0.2s | 模拟 `prefers-reduced-motion: reduce` 后全部 0.001s |

控制台：`window.__errs` 为空（无未捕获报错）。

## 9. 回炉记录

| 轮 | 发现的问题（实测） | 怎么改 | 改后 |
| --- | --- | --- | --- |
| R1 | 行高普查 1 处违例：`.hero-fact b` 24px 字 / 24px 行高 | 首版给评分数字写了 `line-height:1`，删掉，交给全局公式 | 28px 字 / 36px 行高，违例 0 |
| R2 | 版心错位：header 品牌左边缘 57px，首屏内容 33px | `.hero-in` 的 `padding:48px 0` 覆盖了 `.wrap` 的左右 24px | 改为 `padding: var(--s12) var(--s6)`，两者同为 57px（移动端同为 16px 内边距） |
| R3 | 详情页 2 处行高违例：`<button class="btn">` 16px 字 / 22px 行高 | 重置里写的 `button{font:inherit}` 简写把 line-height 重置成「继承父级长度」（父级 14px → 22px）；改成 `font-family/font-size/font-weight` 分项继承 | 24px 行高，详情 93 节点违例 0 |
| R4 | 首屏 85vh + 64 头部 = 92% 视口，下一节只露出标题的一条边 | hero 最小高度改成 `calc(85vh - 64px)` | 65 + 702 = 767px（85.2%），下一节标题 815–851 完整可见 |
| R5 | 1280 下选集 auto-fill 排出 18 列，单格 54×44，扫描困难 | 按断点固定列数 6 / 8 / 12 | 1280 下 12 列，单格 ≥92×44 |
| R6 | 进入详情后 h1 带一圈蓝色焦点框（程序化聚焦触发 :focus-visible） | 只给 `.dt h1` 关掉焦点框（标题不可操作，焦点框是噪音） | 可操作元素的焦点环不受影响（按钮/链接实测 2px + 2px） |
| R7 | 播放器按 tick 计数，后台节流时少走（4.2s 实测只 +2s） | 改成按 `Date.now()` 差推进，每 250ms 重算 | 3.2s 实测 12:40 → 12:43 |
| R8 | 抽屉进场停在屏幕外（`inClass:false`）：rAF 在后台标签页不触发 | 改用强制回流（`void el.offsetWidth`）后再加 `.in`；退场改为 `transitionend` + 340ms 兜底 | 进场 120ms 时位移 54.97px、280ms 归零；退场约 290ms 完成 |
| R9 | 抽屉退场只用一个曲线，进场曲线被用在出画 | 拆成 `--ease-enter` / `--ease-exit`，退场 200ms 短于进场 280ms | 与 NN/g「进场比退场长」一致 |
| R10 | 5 个 token 声明了没用（`--ok`/`--s16`/`--d-mid`/`--ease-out`/`--t-dis`） | 删掉不用的；`--d-mid` 用于 chip 切换、`--t-dis` 用于按钮禁用 | 声明与引用一一对应 |

## 10. 超出基准规范的数值清单

| 维度 | 值 | 处理 | 依据 |
| --- | --- | --- | --- |
| 圆角 | 4 / 8 | derived 两档，全站成套 | `site/dist/ai/guide.md:40` |
| 发丝线 | 1px | derived | `site/dist/ai/guide.md:42` |
| 控件高度 | 44 | derived（触控目标取稳） | `site/dist/ai/guide.md:45`、`:51`；`content/a11y/w3c--wcag-2.2.md:907`（下限 24） |
| 焦点环 | 2px 实线 + 2px 偏移 | derived | `site/dist/ai/guide.md:51`；对比度 5.51 ≥ 3（`content/a11y/web.dev--a11y-focus.md:228`-`230`） |
| 内容容器 | 1200 | 取自 lg 断点值，不新造 | `content/layout/tdesign.tencent.com--layout.md:119` |
| 页面安全边距（窄屏） | 16 | 8 的倍数内自定 | `content/layout/tdesign.tencent.com--layout.md:81` |
| 正文行长 | 34em | derived | `site/dist/ai/guide.md:48` |
| 首屏高度 | 85%（扣掉 64 头部） | derived | `site/dist/ai/guide.md:49` |
| 遮罩 | `rgba(0,0,0,.45)` | derived，全站一档 | `site/dist/ai/guide.md:50` |
| 封面比例 | 2:3 / 16:9 | derived（库无媒体封面规范） | 记入 FINDINGS 新缺口 |
| 封面渐变与斜纹 | 深色色板两档 + 1px 斜纹 | derived 构图；色值仍取自基准规范色板 | `content/color/tdesign.tencent.com--dark.md:59`-`146` |
| 集数格列数 | 6 / 8 / 12 | derived，随断点 | 断点同上 |
| 数字字体 | `tabular-nums` | 降级，不冒充 TCloud Number | `site/dist/ai/guide.md:41`；`content/type/tdesign.tencent.com--fonts.md:37` |
| 品牌色落到深色板 | Blue6 / Blue5 / Blue4 / Blue3 / Blue7 | 同族换档，逐条复算后定 | `site/dist/ai/guide.md:43` |
