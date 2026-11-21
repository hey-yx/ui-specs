# DECISIONS · ListenRail · 中文播客节目官网（listenrail）

> 单文件产物：`index.html`。CSS/JS 全内联，零外部请求（实测 performance resource entries = 0），中文文案。
> 流程：UISpecs 真实建站审计（拉 `/ai/design-points.json` → 选点 → 读原文取值 → 建站 → 自验），站名按需求定。
> 数值主源：TDesign 色彩与字体两篇，逐条标 `content/...:行号`；库内没有的标 derived 或「凭记忆补」。
- 基准规范：**TDesign**（`site/dist/ai/guide.md:24`「中文产品 UI（中后台 / 工具 / 内容 / 协作）」行）

---

## 0. 路线声明

- **设计场景命中**（`site/dist/ai/design-points.json` 的 `tasks`）：s2 落地页与营销页（主场景「营销页叙事」）、s13 文案与写作、s1 通用页面基本功；s11 品牌设计语言、s7 视觉风格作选型参考。
- **设计点命中（9 个）**：`howto-visual-hierarchy`、`howto-ui-color-framework`（method_required 两篇，出稿前必读）、`layouts-content-community`（版型）、`components-cards`、`patterns-global-nav`、`markdown-cn-copywriting`、`type-scale-steps`、`layout-spacing-values`、`layouts-page-selection-chain`（选型三步法）。
- **项目选型**：「中文产品 UI（中后台 / 工具 / 内容 / 协作）」行 → TDesign 主源（`guide.ts 的项目选型方案「中文产品 UI」行`）。中文内容站取真数字只此一行。「品牌官网 / 营销页」行指向 brands DESIGN.md 是复刻语境，新品牌没有对应篇目，缺口记 FINDINGS §5。
- **选型三步链**（`layouts-page-selection-chain`）：版型定 `layouts-content-community`（订阅版型：主张+订阅表单进首屏，往期内容与订阅数殿后）→ 风格由项目选型定（产品语境 → 主源）→ 组件与交互走 `components-cards` + `patterns-global-nav`。
- **站名**：按需求 `briefs/listenrail.md` 定为 ListenRail，详见 §7。

## 1. 色彩（TDesign color.md + fonts.md 字色）

| Token | 值 | 原文行号 | 用途 / 页面落点 | 实测对比度 |
| --- | --- | --- | --- | --- |
| `--paper` | `#ffffff` | content/color/tdesign.tencent.com--color.md:93 | 纸面底色 | 无 |
| `--paper-2` | `#f3f3f3` | content/color/tdesign.tencent.com--color.md:140 | 「听友说」分节底、按钮禁用底 | 无 |
| `--ink` | `#181818` | content/color/tdesign.tencent.com--color.md:154 | 标题色、焦点环、CTA 墨字 | vs 白 17.76 |
| `--text-1` | `rgba(0,0,0,.9)` | content/type/tdesign.tencent.com--fonts.md:96 | 正文主色（Font Gy1） | vs 白 17.58 |
| `--text-2` | `rgba(0,0,0,.6)` | content/type/tdesign.tencent.com--fonts.md:98 | 次要文字（Font Gy2） | vs 白 5.74；vs 黄底带 5.61 |
| `--text-3` | `rgba(0,0,0,.4)` | content/type/tdesign.tencent.com--fonts.md:100 | **仅禁用态**（Font Gy3） | 2.85，AA 豁免，不做正文 |
| `--line` | `#e8e8e8` | content/color/tdesign.tencent.com--color.md:143 | 1px 发丝装饰线（单集分隔） | vs 白 1.23（装饰线，不承担控件边界） |
| `--line-strong` | `#8b8b8b` | content/color/tdesign.tencent.com--color.md:147 | 输入框 / 描边按钮边界 | vs 白 3.41（非文本 3:1 达标） |
| `--accent` | `#f5ba18`（Yellow4） | content/color/tdesign.tencent.com--color.md:207 | 订阅 CTA 填充（墨字压其上） | 墨字 vs 黄底 10.08 |
| `--accent-hover` | `#ffd36d`（Yellow3） | content/color/tdesign.tencent.com--color.md:206 | CTA hover | 墨字 12.51 |
| `--accent-active` | `#d8a100`（Yellow5） | content/color/tdesign.tencent.com--color.md:208 | CTA active | 墨字 7.62 |
| `--accent-text` | `#8b6600`（Yellow7） | content/color/tdesign.tencent.com--color.md:210 | 链接、期号强调字 | vs 白 5.25；vs 黄底带 4.86；vs Gray1 4.73 |
| `--accent-tint` | `#fff5e4`（Yellow1） | content/color/tdesign.tencent.com--color.md:204 | 「节目介绍」「订阅带」分节底 | 主文字 vs 其 16.41 |
| `--ok` | `#006c45`（Green7） | content/color/tdesign.tencent.com--color.md:84 | 订阅成功状态文字 | vs 白 6.50 |
| `--err` | `#ad352f`（Red7） | content/color/tdesign.tencent.com--color.md:60 | 表单错误文字与错误边框 | vs 白 6.31 |

- **Red6 `#d54941`（content/color/tdesign.tencent.com--color.md:59）实测 vs 白 = 4.32**，当文字不达 4.5，按 GAP_RULES「色阶当文字」只给非文本用途；错误文字换 Red7。
- **状态规律**：hover 只降饱和、选中只降亮度（content/howto/learnui.design--color-in-ui-design-a-practical-framework.md:242），落成 Yellow3（hover）/ Yellow5（active）；同构于 TDesign 自己的 token 映射（hover 取浅一档、active 取深一档，色阶见 content/color/tdesign.tencent.com--color.md:206、208，映射规则为派生）。
- **强调色纪律**（主源配色框架 + NN/g）：黄底上一律墨字（白字压黄底仅 1.76，不可用）；强调色实填只出现在订阅 CTA 与期号，实测占页面面积 **0.35%**（<5%）；功能色只进状态（成功/错误），不做装饰。简单设计限 2 主 2 辅（content/howto/nngroup.com--visual-hierarchy-ux-definition.md:58）。

## 2. 字阶与排版（TDesign fonts.md）

| 用途 | 字号 / 行高 | 原文行号 | 实测计算值 |
| --- | --- | --- | --- |
| Hero 品牌 h1（顶档） | 64 / 72 | content/type/tdesign.tencent.com--fonts.md:60 | `64px / 72px / 600` |
| 页头品牌字样 | 28 / 36 | content/type/tdesign.tencent.com--fonts.md:57 | `28px / 36px / 600` |
| 分区 h2 | 24 / 32 | content/type/tdesign.tencent.com--fonts.md:56 | `24px / 32px / 600` |
| 单集 h3 / Hero 副文 | 20 / 28（副文衬线行高 34） | content/type/tdesign.tencent.com--fonts.md:54 | `20px / 28px / 600` |
| 正文 | 16 / 24 | content/type/tdesign.tencent.com--fonts.md:53 | `16px / 24px / 400` |
| 辅助 / meta | 14 / 22 | content/type/tdesign.tencent.com--fonts.md:52 | `14px / 22px / 400` |
| 页脚版权 | 12 / 20 | content/type/tdesign.tencent.com--fonts.md:51 | `12px / 20px / 400` |

- 行高公式 `line-height = font-size + 8`（content/type/tdesign.tencent.com--fonts.md:67），上表 7 档全部实测 +8；窄屏 hero 降档 36/44（36 为字阶原档，content/type/tdesign.tencent.com--fonts.md:58）。
- 字重只 400 / 600（content/type/tdesign.tencent.com--fonts.md:81）；字族用 TDesign 原文系统栈（content/type/tdesign.tencent.com--fonts.md:34），零外部字体请求。
- **叙事正文衬线**：Hero 副文与介绍段用衬线链（Georgia → Times New Roman → Songti SC → STSong → Source Han Serif SC → Noto Serif CJK SC → SimSun → serif），行高 1.7 倍。依据：衬线链与 1.7 倍行高为派生写法、宋体为中文最常用正文字体（content/standards/w3c--clreq.md:676 起「四种字体」节）；CJK 行高 1.7 倍系数（content/type/spectrum.adobe.com--typography-system.md:160）。字族链本身是派生写法（ui-design-library 技能的字体决策口径），非原文逐字值。
- 数字（期号、日期、时长、订阅数）等距排列 `font-variant-numeric: tabular-nums`（等距表格数字，content/type/tdesign.tencent.com--fonts.md:37；TCloud Number 零外部请求拿不到，按 GAP_RULES「数字字体」降级处理）。
- **层级三档**（content/howto/nngroup.com--visual-hierarchy-ux-definition.md:76-77）：正文 / 副文 / 标题三档拉层级，全页最大元素只有 Hero 品牌 h1 一个；品牌字样铁律实测成立，页头 brand 28px ≥ 分区 h2 24px > h3 20px，Hero 64px 为全页最大。

## 3. 版型与区块顺序（layout--newsletter-content-first.md）

- 区块顺序按版型原文（content/layouts/layout--newsletter-content-first.md:53-56）：Hero（价值主张 + 表单）→ 往期单集（Recent Issues/Archives）→ 听友说（Social Proof = 订阅数）→ 主播（About Author）。节目介绍 = 线框的段落块（content/layouts/layout--newsletter-content-first.md:25），放在 Hero 与单集之间。
- CTA 位置（content/layouts/layout--newsletter-content-first.md:60）：Hero 内联表单 + 页头常驻订阅入口，单文件变体为「页头按钮滚动并聚焦表单输入框」（实测 activeElement = email）。
- 转化要点（content/layouts/layout--newsletter-content-first.md:63）照做三条：表单只留邮箱一个字段；给样例单集入口（「先听一期」链到 EP.24）；订阅数只在带日期时展示（「截至 2026 年 11 月 7 日 · 全平台订阅 32,000+」，示意数据，页脚已声明虚构）。
- 配色策略（content/layouts/layout--newsletter-content-first.md:61）：纸感底、文字主导、强调色只给 Subscribe，与 §1 纪律一致。
- 风格（项目选型口径）：分节配色带节奏（白 → 黄底带 → 白 → 灰底 → 白 → 黄底带）；滚动进场按 NN/g 300ms 档（content/motion/nngroup.com--animation-duration.md:84）；衬线叙事字体；可访问性四要求对比度 4.5 / 键盘 / 可见焦点 / reduced-motion 逐条验过（§8）。原风格篇已随风格层下线，规则按库内回源篇目执行。

## 4. 间距、圆角、动效（缺口回源与派生）

| 维度 | 处理 | 出处 / 标注 |
| --- | --- | --- |
| 间距刻度 | 8px 增量（8/16/24/32/48/64）全站一套；96 为页面级派生 | content/layout/uisdc.com--code-for-design-of-spacing.md:92（GAP_RULES 间距回源篇） |
| 章节留白 | 桌面 96 / 移动 48（刻度值，标派生） | derived（GAP_RULES 间距：页面级派生） |
| 圆角 | 4px（输入框）/ 8px（按钮、卡片）两档 | derived（GAP_RULES 圆角：库内无通用 radius 规范，成套自定） |
| 发丝线 | 1px Gray3 | 1px 记 derived（GAP_RULES 发丝线），颜色见 §1 |
| 动效时长 | reveal 300ms、UI 200ms、微反馈 100ms | content/motion/nngroup.com--animation-duration.md:78（100-500ms）、:80（微反馈 ~100ms）、:84（进场 300ms / 退场 200-250ms，进场略长于退场） |
| 缓动 | 进场 ease-out、退场 ease-in | content/motion/nngroup.com--animation-duration.md:92 |
| reduced-motion | 移除全部动画，内容直接可见 | content/motion/nngroup.com--animation-duration.md:24；实测 transition 0s、opacity 1 |
| 组件尺寸 | 输入框 / 按钮 / 命中区高 44px | derived（GAP_RULES 组件尺寸）；库内无 target-size 原文，缺口记 FINDINGS §3 |
| 焦点环 | 2px `#181818`、offset 2px | derived；黄色系对白均 <3:1 做不了环色，改墨色实测处处 ≥3:1 |

## 5. 组件与交互

- **页头导航**（content/patterns/carbon--global-header.md）：logo 只链回本站首页（:42，`href=#top`）；导航链接不开新 tab、不链外域（:44，全部同页锚点）；产品级链接左对齐、系统操作右对齐（:150-151）。收听平台外链放 Hero 平台区，不进全局导航。
- **单集条目**（content/components/inclusive-components.design--cards.md）：同级条目同级标题（:57-58，8 集全部 h3）；标题起头、内容随后（:696-697，:631-632 反例）；hover 用投影表达（:237-241）；有 hover 必有配对 focus 样式（:247-250）；hover 与 focus 样式不写进同一块（:278-280）。**未用整卡拉伸链接**（:229 的 stretched link）：卡内「本期提到」按钮会被拉伸层盖住，保留按钮优先；标题链接指向本集锚点，不做死链。
- **展开交互（disclosure）**：button + `aria-expanded` + `aria-controls`，展开态墨色填充；Esc 收起并把焦点还给按钮（实测三态：开 → Esc 关 → focus 回按钮）。
- **订阅表单**：空值 → 「请填写邮箱地址」+ `aria-invalid`；格式错 → 「邮箱格式看起来不对…」+ `aria-invalid`；合法 → 成功状态行（Green7）+ 按钮禁用「已订阅 ✓」。错误/成功文字对白实测 6.31 / 6.50。输入时清除错误态（实测三态全过）。
- **页头 / 页尾订阅按钮**：滚到表单并聚焦输入框（版型「Sticky header form」的单文件实现）。
- **装饰**：封面为内联 SVG 声波（零外部请求）；无渐变文字、无图标堆砌。

## 6. 文案规范（markdown-cn-copywriting）

- 中英文之间、中文与数字之间、数字与单位之间加空格（content/markdown/github.com--chinese-copywriting-guidelines.md:27、:44、:55）；度数/百分比除外（:64）；全形标点与其他字符之间不加空格（:78）。全站文案按此排过。

## 7. 站名

- 站名按需求 `briefs/listenrail.md` 的 `name` 字段定为 ListenRail，入库时不另跑命名核验；原批次的起名候选与碰撞记录随改名撤下。
- 页面落点：页头品牌字样、Hero h1、页脚版权行。

## 8. 交付自验

### 8.1 横向溢出（`documentElement.scrollWidth === clientWidth`）

| 视口 | scrollWidth | clientWidth | 结果 |
| --- | --- | --- | --- |
| 1280×900 | 1280 | 1280 | 无溢出 |
| 768×1024 | 768 | 768 | 无溢出 |
| 375×812 | 375 | 375 | 无溢出 |

（视口经 `setDeviceMetricsOverride` + deviceScaleFactor=1 校准，`innerWidth` 与目标一致。）

### 8.2 零外部请求与交互真跑

- `performance.getEntriesByType('resource')` = **0 条**（`<link rel="icon" href="data:,">` 抑制浏览器自动请求 /favicon.ico 后复测）。
- 交互实测：disclosure 开/关/Esc 回焦 ✓；表单空值/格式错/成功三态文案与 `aria-invalid` ✓；页头 CTA 聚焦表单输入框 ✓。
- 键盘：Tab 可达全部交互件，`:focus-visible` 2px 墨色环可见。
- `prefers-reduced-motion: reduce`：全部 reveal 元素 opacity 1 / transform none / transition 0s，内容不依赖动画。

### 8.3 视觉审查

- 1280 / 768 / 375 共 6 张截图过 vision 审查（截图留在批次目录）：层级清晰（品牌最大）、按钮无裁切、黄底黑字可读、无 AI 味装饰；窄屏平台按钮略紧但不溢出（记 FINDINGS §7）。
- 层级断言实测：brand 28 ≥ h2 24 > h3 20，hero 64 为全页最大；强调色面积 0.35%。
