# CartLane · 取值记录

- 需求：`briefs/cartlane.md`（8 行：中文 / 家居用品电商 / Vue / 从目录到购物车到结算）
- 基准规范：**project-tdesign**（TDesign 腾讯；Vue 组件库 `tdesign-vue-next` 1.20.11，Vue 3.5.45）
- 版式三件：**Ecosystem Index** 宏结构 · **N13 Inline ⌘K pill** 导航 · **Ft4 Dense typographic** 页脚
- 强调色：**#0052d9**（Tencent Blue，`content/color/tdesign.tencent.com--color.md:32`）
- 交付：`examples/cartlane/index.html`（单文件，CSS 与 Vue 模板内联；外部请求只有 esm.sh 的库文件与 jsdelivr 的 TDesign 样式）

---

## 1 设计前提

需求只给了四句话：家居用品、要有购物车、要能结算、Vue。页面结构与密度是自己推的。

1. 商品是**要挑的东西**，不是要说服人的落地页。用户的三件事依次是：先按房间缩小范围，再比价与比规格，最后凑单结算。所以首屏不放巨型主张，放的是「26 件、5 个房间、¥39 到 ¥688」的可操作索引。
2. 上一版只做了「商品网格 + 8 件商品线稿」，判断为太薄：网格只是这一个页面的一段，前面缺索引，后面缺详情、购物车与结算。这一版把一条完整的下单路径摊开在同一页上，段落顺序就是购买顺序。
3. 密度靠结构承接，不靠缩小字号：26 件商品、70 个规格组合、5 个房间、4 条价位带、3 种配送，都用表格与索引条排，正文底部落在 14px，没有一档低于 12px。
4. 腔调定在「实用、克制、以信息密度取胜」：不写「品质生活」，写「折起来只有 9 cm 厚，塞在沙发扶手边上不挡路」；库存写实际件数，售罄的组合直接禁选并给替代建议。

## 2 版式三件与落法

| 件 | 形态要点 | 为什么是它 | 落到本页 |
| --- | --- | --- | --- |
| **Ecosystem Index** | 多入口并列的索引页：每个入口自带计数与一句说明，点进去才是详情；索引不是导航条，是带数据的分区 | 这一页要同时承载主推、5 个房间、4 条价位带、26 件商品、70 个规格、购物车与结算，是并列多入口，没有单一巨型主张可撑首屏 | 主推 4 件（横排 4 列）→ 房间索引 5 条（每条给件数与起价）→ 价位带 4 条（给件数）→ 商品目录 26 件 → 详情 → 购物车 → 结算 |
| **N13 Inline ⌘K pill** | 搜索入口做成导航条里的一枚内联胶囊，右侧挂 `⌘K` 键帽；点开是全页搜索面板 | 26 件商品需要一条随时可用的搜索，而不是把搜索框塞进筛选条里占一整行 | 页头 480px 胶囊（`搜索 26 件商品 ⌘K`），点开 `.cmdk` 面板；面板内 ↑↓ 选、Enter 打开、Esc 关闭并把焦点还给胶囊 |
| **Ft4 Dense typographic** | 页脚用小字密排多行，字标、说明、元信息与链接压在一起，不做站点地图 | 演示案例需要把「数据是假的、不收款、不发货」讲清楚，密排小字比四条链接更合适 | 页脚 5 段 12px 密排：字标、免责声明、技术栈、数值来源、版本元信息与三个锚点链接 |

**为什么换掉 Catalogue**：上一版用 Catalogue（目录即页面主体，网格占满首屏）。这一版网格只占第 4 段，前面还有索引与主推、后面还有详情与结算，Catalogue 的单主体结构装不下，所以换成 Ecosystem Index，用「入口 + 计数」的并列结构承载多段。

## 3 色彩表

只用 TDesign 官方色板：白纸 + 14 级中性灰 + 一支品牌蓝，功能色只在状态上出现。中性色本身按亮度分 14 级，常用文字对比度都大于 4.5（`content/color/tdesign.tencent.com--color.md:91`），所以文字档直接从色板取，不自己调。

| 用途 | 值 | 出处 | 实测对比度 |
| --- | --- | --- | --- |
| 品牌蓝 / 主按钮 / 选中态 | `#0052d9` Blue7 | `content/color/tdesign.tencent.com--color.md:48` | 白字压它 6.54:1，与原文自述一致（`:40`） |
| 悬停 | `#366ef4` Blue6 | `content/color/tdesign.tencent.com--color.md:47` | 白字 3.62:1，只用于底色加深，不当文字 |
| 深一档链接（浅蓝底上） | `#003cab` Blue8 | `content/color/tdesign.tencent.com--color.md:49` | 压 `#f2f3ff` 9.06:1 |
| 品牌浅底（选中行、提示条） | `#f2f3ff` Blue1 | `content/color/tdesign.tencent.com--color.md:42` | 无 |
| 纸白 | `#ffffff` White | `content/color/tdesign.tencent.com--color.md:93` | 无 |
| 卡底 / 筛选条底 | `#f3f3f3` Gray1 | `content/color/tdesign.tencent.com--color.md:95` | 无 |
| 分隔线 / 卡片描边 | `#e8e8e8` Gray3 | `content/color/tdesign.tencent.com--color.md:97` | 1.23:1，装饰线，不承担控件边界 |
| 控件描边（输入框、选项、次按钮） | `#8b8b8b` Gray7 | `content/color/tdesign.tencent.com--color.md:101` | 压白 3.41:1、压 `#f3f3f3` 3.07:1 |
| 次级文字 | `#5e5e5e` Gray9 | `content/color/tdesign.tencent.com--color.md:103` | 压白 6.48:1、压 `#f3f3f3` 5.84:1 |
| 主文字 | `#181818` Gray14 | `content/color/tdesign.tencent.com--color.md:108` | 压白 17.76:1 |
| 成功底 / 成功字 | `#e3f9e9` Green1 / `#006c45` Green7 | `content/color/tdesign.tencent.com--color.md:78` | 字压底 6.34:1 |
| 告警底 / 告警字 | `#fff1e9` Orange1 / `#954500` Orange7 | `content/color/tdesign.tencent.com--color.md:66` | 字压底 6.09:1 |
| 错误底 / 错误字 | `#fff0ed` Red1 / `#ad352f` Red7 | `content/color/tdesign.tencent.com--color.md:54` | 字压底 6.23:1 |

全页文字节点实测 373 个（1280 宽）/ 365 个（375 与 320 宽），最低 5.84:1，出现在 `#5e5e5e` 压 `#f3f3f3` 的键帽与小标签上，没有一项低于阈值。功能色只做状态，不做装饰底：品牌蓝不出现在大面积底色上，深色底一处也没有。

色板当文字前逐个复算过（GAP_RULES「色阶当文字」条）：Blue6 `#366ef4` 压白只有 3.62:1，所以它只做 hover 底色，文字一律用 Blue7；Gray5 `#c6c6c6` 与 Gray6 `#a6a6a6` 压白都不够 4.5:1，只用于装饰线，不用于文字。

## 4 字阶与行高

字阶取 TDesign 原文两段字阶表，本页只用 6 档：12 / 14 / 16 / 20 / 24 / 36。

| 档 | 用在 | 行高 |
| --- | --- | --- |
| 36px | 首屏标题、详情商品名 | 44px |
| 24px | 分区标题 | 32px |
| 20px | 卡片名、结算小标题 | 28px |
| 16px | 正文、按钮、输入值 | 24px |
| 14px | 明细行、规格、次级说明 | 22px |
| 12px | 标签、键帽、页脚密排 | 18px |

- 桌面端 Body 设 14px、Base 取 12px、最小 12px（`content/type/tdesign.tencent.com--fonts.md:46`），本页最小档就是 12px，没有再小。
- 字阶原文：10px 移动端最小、12px 桌面端最小（`content/type/tdesign.tencent.com--fonts.md:52-53`），20px 与 36px 是第二字阶（`content/type/tdesign.tencent.com--fonts.md:56`、`:59`）。
- 行高按「字号 + 8」逐元素算（`content/type/tdesign.tencent.com--fonts.md:69`）。落地写成 `calc(1em + 8px)` 挂在零特异性选择器上，让 em 跟各自字号走；若写在 body 上会先按 16px 算成固定值再向下继承，大号字的行高就跟着塌了。
- 字重只有 400 与 600 两档（`content/type/tdesign.tencent.com--fonts.md:87`），没有 500 与 700。
- 金额用 `font-variant-numeric: tabular-nums` 近似等距数字（GAP_RULES「数字字体」条，标降级；TCloud Number 零外部请求拿不到），金额不带小数（整元），列表右对齐。
- 行长：说明段 `max-width: 34em`（中文约 34 字），页脚密排 88ch（GAP_RULES「正文行长」条，标派生）。

## 5 间距、圆角、组件尺寸

- 栅格以 8 点为基数（`content/layout/tdesign.tencent.com--layout.md:78`），间距刻度只用 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64：8 的倍数为主，4 与 12 是原文允许的两档小间距（`content/layout/tdesign.tencent.com--layout.md:138`）。
- 栅格槽 16px（`content/layout/tdesign.tencent.com--layout.md:92`），商品网格的列间距就是它。
- 安全边距 24px（`content/layout/tdesign.tencent.com--layout.md:96`），窄屏收到 16px，仍是 8 的倍数。
- 断点取原文 sm 768 / md 992 两档（`content/layout/tdesign.tencent.com--layout.md:156-157`），另加 320 与 375 两个手机档；网格列数 2 / 2 / 3 / 4 / 5 分别落在 320 到 767、768 到 991、992 到 1279、1280 以上。
- 圆角两档：卡片 8px、控件 4px（GAP_RULES「圆角」条，库内无通用 radius 规范，整站派生一套，标派生）。
- 发丝线 1px（GAP_RULES「发丝线宽」条，标派生）；1px `#e8e8e8` 只做分隔，控件边界一律用 1.5px `#8b8b8b`，因为浅灰线压白只有 1.23:1，不能承担控件边界。
- 组件高度按 TDesign 组件默认（输入框与按钮 32px、主行动按钮 40px、规格按钮 36px），原文只给 small / medium / large 三档没给像素，像素按组件库实现值取，标派生（GAP_RULES「组件尺寸」条）。
- 触控目标按 WCAG 2.2 的 2.5.8 下限核对：控件类 32 到 40px，复选框与单选 20px 见方、外层 label 36px 高，label 才是实际点击区；导航与页脚的内联链接 24 像素高，符合 2.5.8 对内联文本的例外。原文 `content/a11y/w3c--wcag-2.2.md:875` 给的是 44 by 44 的增强档，AA 下限是 24 by 24，本页取 AA 且控件类做到 32 以上。
- 焦点环 2px 实线加 2px 偏移（派生，GAP_RULES「触控目标与焦点环」条），颜色取 Blue7 `#0052d9`（`content/color/tdesign.tencent.com--color.md:48`），压白 6.54:1、压 `#f3f3f3` 5.90:1。只挂 `:focus-visible`，不抹掉浏览器默认样式。焦点指示的原文要求见 `content/a11y/web.dev--a11y-focus.md:154`，同篇 `:171` 点名 outline 0 这类写法是常见错误。

## 6 动效

时长直接取 TDesign 桌面三档 token：基础 200ms、中等 240ms、慢速 280ms。

| 场景 | 时长 | 缓动 | 出处 |
| --- | --- | --- | --- |
| 悬停、描边、底色 | `200ms` | `cubic-bezier(.2,0,.38,.9)` | `content/motion/tdesign.tencent.com--motion.md:101` |
| 搜索面板进、提示条进 | `240ms` | 同上 | `content/motion/tdesign.tencent.com--motion.md:102` |
| 骨架屏呼吸 | `280ms` | 同上 | `content/motion/tdesign.tencent.com--motion.md:103` |

- 桌面端 200 到 600ms、移动端 100 到 400ms 是合适区间（`content/motion/tdesign.tencent.com--motion.md:90`），本页全部落在 200 到 280ms，没有超过区间上限。
- 缓动是组件层给的定值曲线，不自己造（GAP_RULES「动效时长与缓动」条）。
- 加载态用骨架屏而不是顺序入场，原文对骨架屏的口径见 `content/motion/tdesign.tencent.com--motion.md:153`。
- `prefers-reduced-motion: reduce` 时把动画与过渡压到 0.01ms 并停掉骨架屏呼吸，实测这条媒体查询在样式表里生效。

## 7 设计点路由

方法层三篇读过再出稿，数值层的点按场景取。

| 点 | 场景 | 读了什么 / 拿了哪条 | 落到本页 |
| --- | --- | --- | --- |
| `howto-visual-hierarchy` | s1 页面基本功 | `content/howto/nngroup.com--visual-hierarchy-ux-definition.md:41-45`：层级靠尺度、色彩对比与分组，不靠装饰 | 全页只有 36px 一档大字（首屏标题与详情商品名），其余压到 24px 以下；分区靠「眉题 12 → 标题 24 → 条目 14」三档拉开，不靠色块 |
| `howto-ui-color-framework` | s1 / s6 | `content/howto/learnui.design--color-in-ui-design-a-practical-framework.md:282`：先定一支色相基准再谈辅色 | 只用一个色相（蓝 217）+ 中性灰，第二色相一个也没有；品牌蓝只出现在主按钮、选中态、链接与焦点环 |
| `layout-intrinsic-patterns` | s1 / s6 | `content/layout/every-layout.dev--stack.md:41-44`：间距由共同父级注入，子元素不带 margin | `.rail`、`.grid`、`.cart`、`.form` 一律 `display: grid` 加 `gap`，子元素零 margin |
| `patterns-review-checklist` | s6 验收 | `content/patterns/ux-rules-checklist.md`：状态覆盖、反馈、空态与错误 | 空态两种（无结果、空购物车）、加载态、错误态、成功态各造一遍并存读数 |
| `a11y-contrast-threshold` | s6 验收 | `content/a11y/web.dev--a11y-color-contrast.md:156`：正文 4.5:1；`:158`：大字与图形 3:1 | 全页 373 个文字节点逐项实测，最低 5.84:1；控件边界最低 3.07:1 |
| `a11y-focus-visibility` | s6 验收 | `content/a11y/web.dev--a11y-focus.md:154`：焦点指示必须可见 | 2px 实线焦点环，Tab 走 112 步，落在页面元素上的 111 步全部有环 |
| `a11y-form-structure` | s2 表单 | `content/a11y/web.dev--a11y-forms.md:116`：标签与控件要显式关联；`:146`：提示用 aria-describedby 挂上 | 5 个字段全部 label 加 for，错误文案用 `aria-describedby` 挂到控件，`aria-invalid` 跟着切换 |
| `project-tdesign` | s6 | `content/color/tdesign.tencent.com--color.md:91`：中性色 14 级，文字对比度大于 4.5 | 文字只用 Gray9 与 Gray14 两档，中间档不当文字 |
| `project-tdesign` | s6 | `content/type/tdesign.tencent.com--fonts.md:52-61`：字阶表 | 只用 6 档，最小 12px |
| `project-tdesign` | s6 | `content/layout/tdesign.tencent.com--layout.md:92`：槽 16px；`:96`：边距 24px | 网格槽 16，壳宽 1200，边距 24 |
| `project-tdesign` | s1 / s6 | `content/motion/tdesign.tencent.com--motion.md:101-103`：三档时长 token | 200 / 240 / 280ms |
| `markdown-cn-copywriting` | s2 文案 | `content/markdown/github.com--chinese-copywriting-guidelines.md`：中英文之间加空格、全角标点 | 数字与单位之间留空格，标点全角，`¥` 与数字之间不空格 |
| `components-cards` | s2 卡片 | `content/components/inclusive-components.design--cards.md`：整卡可点会让卡内按钮失效，正文不要整块可点 | 卡片只有「打开详情」与「加入购物车」两个按钮可点，卡片本体不是链接，避免嵌套可点区 |
| `icons-usability` | s2 图标 | `content/icons/tdesign.tencent.com--icon.md`：图标配文字，纯图标按钮要有可读名 | 购物车图标带「购物车」文字与件数角标，搜索胶囊带可见文字，关闭按钮有 `aria-label` |

## 8 数据与内容规模

| 项 | 数 | 说明 |
| --- | --- | --- |
| 商品 | 26 件 | 每件有名称、材质、尺寸、重量、一句说明、保养、规格数、评价数与 2 到 3 条评价 |
| 房间分类 | 5 个 | 客厅 5 / 卧室 5 / 厨房 6 / 浴室 5 / 书房 5 |
| 规格组合 | 70 个 | 每件 2 到 4 个组合，组合各有独立价格与库存 |
| 价位带 | 4 条 | ¥39 到 ¥199、¥200 到 ¥399、¥400 到 ¥599、¥600 以上 |
| 库存状态 | 4 种 | 有货 11 / 部分售罄 10 / 仅剩个位数 3 / 售罄 2 |
| 评价 | 78 条明细 | 每件列 3 条，另有每件的评价数标签（17 到 88），都是演示数据，不展示评分与好评率 |

演示口径写在页脚与结算成功态里：不收款、不发货、不接支付、刷新即丢；页面不展示销量、评分、好评率与用户数这类无法核实的指标。

## 9 交互与状态

- 搜索、房间分类、排序、只看有货四者同时生效，结果计数实时更新（`26 件符合条件 ／ 共 26 件`），清空筛选一键回到全量。
- 筛选切换时进入加载态：10 张骨架卡、60 个呼吸色块，280ms 一档，筛选结果回来后替换。
- 空结果给「没有匹配的商品」加一句可操作建议与「清空全部筛选」按钮，不清空用户的输入。
- 规格切换即时改价、改库存、改按钮状态：售罄组合禁选并提示换一个，仅剩个位数时在库存行标出实际件数。
- 购物车多行加减、移除、运费切换（标准 / 加急 / 自提）联动小计与合计，未满 ¥199 时显示还差多少与 ¥12 运费。
- 结算表单 5 个字段逐个校验，错误文案挂在字段下方并用 `aria-describedby` 关联，首个错误字段自动获得焦点；提交成功给出订单号、明细与「刷新即丢」的说明，购物车清空。

## 10 未做与偏差

- 商品图：需求与外链约束都不允许加载图片，商品用 CSS 色块加线稿示意，不冒充实物图。
- 触控目标：GAP_RULES 建议稳妥取 44px，本页控件取 32 到 40px。理由是 2.5.8 的 AA 下限是 24px，且 TDesign 组件默认高度就是 32 与 40；44px 留给了加购、去结算、提交订单三个主行动按钮以外的场景没有强行拉高，密度优先。偏差记在此处。
- 库存与价格是演示数据，不接后端，刷新回到初始值。
