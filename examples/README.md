# examples · 真实建站案例

这些站是「AI 读本库做设计」真实流程跑出来的案例。需求单独放在仓库根的 `briefs/`，站目录里只剩成品件，页面结构和取值由指南流程推出来。

每站五件：`index.html`（单文件；未开框架的零外部请求，开框架的只引 esm.sh 的框架与组件库）、`DECISIONS.md`（每条数值的出处：值 + `文件:行号` + 用在哪）、`FINDINGS.md`（数值文章缺口与被迫派生的维度）、`preview.png`（1280×800 首屏）、`meta.json`（案例卡展示用的站名、一句描述、主色、结构、版型）。放齐五件，构建时自动出现在 `/examples/` 和首页统计里，不用改代码；缺一件构建直接失败。生成前的需求不在站目录里，在 `briefs/<站>.md`。站内浏览在 `/examples/`。

旧案例的 DECISIONS 可能仍写「基准规范」，与「数值文章」同义；`check-ledger.py` 两种声明都认。

## 建站需求

生成前的建站需求不与案例站混放，真源是仓库根的 `briefs/`：一份 `<slug>.md` 一站，frontmatter 写 name、category、lang，另有可选的 framework（react 或 vue，省略即按静态 HTML 手写，开了用该站数值文章同体系的官方组件库）。产品只写是什么、给谁用，写在 frontmatter 之后的正文，不写页面区块，也不写文案语气：语气由生成时自己定，不写进需求。站名只有一个字段 `name`，分类 `category` 写一句中文短名（视频站、数据看板、写作工具这类），需求列表与详情页显示的就是它，slug 取文件名，只在 URL 与目录名里出现。页面要有哪些区块、用什么版式、取什么数值，都由指南流程在生成时定，需求里不写数值也不写版式。站点直接扫这个目录渲染，总览在 `/briefs/`，单站在 `/briefs/<站>/`；AI 可以拉 `/ai/case-briefs.json`。加一站就是加一个文件，没有第二份清单要同步；frontmatter 缺字段或正文为空会在构建时直接报错。换案例成品时只动 `examples/`，需求不受影响。

## 现有案例

目录里有几站就列几站，值从各站 `meta.json` 与 DECISIONS 抄。

| 站 | 站名 | 数值来源 | 强调色 | 结构（macrostructure / nav / footer） |
| --- | --- | --- | --- | --- |
| tallylane | TallyLane | TDesign | Yellow7 `#8b6600` | Bento Grid · N12 / Ft5 |
| metricrail | MetricRail | TDesign（React + tdesign-react 1.18.6） | Blue10 `#001a57` | Stat-Led · N3 左缘竖条 / Ft3 三栏索引 |
| samepaper | SamePaper | TDesign | Purple7 `#7137bf` | Marquee Hero · N5 / Ft5 |
| civicdesk | CivicDesk | TDesign | Blue7 `#0052d9` | Service Chain · 基准规范页头 / Ft2 |
| cartlane | CartLane | TDesign（Vue + tdesign-vue-next 1.20.11） | Blue7 `#0052d9` | Ecosystem Index · N13 / Ft4 |
| fixqueue | FixQueue | TDesign（React + tdesign-react 1.18.6） | Blue7 `#0052d9` | Stat-Led · N13 / Ft2 |
| swimboard | SwimBoard | TDesign（Vue + tdesign-vue-next 1.20.11） | Orange7 `#954500` | Workbench 05 · N13 / Ft4 |
| pickbin | PickBin | TDesign | Green7 `#006c45` | Narrative Workflow · N9 / Ft2 |
| gatewaydeck | GatewayDeck | Carbon（语义色回源 TDesign） | Cyan7 `#00668e` | Workbench · N12 / Ft2 |
| payloaddeck | PayloadDeck | Primer | Blue `#0969da` | Component Playground · N13 / Ft4 |
| listenrail | ListenRail | TDesign | Yellow4 `#f5ba18` | Content Community · 订阅版型 |
| epdeck | EpDeck | TDesign | Orange5 `#e37318` | Ecosystem Index · N1b / Ft5 |
| quilldeck | QuillDeck | TDesign | Pink7 `#a12279` | Bento Grid · N12 / Ft7 |
| weekdeck | WeekDeck | TDesign | Yellow4 `#f5ba18` | Stat-Led · N6 / Ft2 |
| annualdesk | AnnualDesk | TDesign | Cyan7 `#00668e` | Service Document · N2 / Ft2 |
| anyttl | AnyTTL | Primer | Blue accent `#0969da` | Data-Dense Dashboard · Nav3 / Ft4 |
| pricelens | PriceLens | Shopify Polaris | Polaris Action `#005bd3` | Index-First · N12 调价公告与 `#303030` 顶栏 / Ft1（Polaris IndexTable 首屏直出比价行） |
| allparse-console | ALLParse Console | GitHub Primer | Primer Accent `#0969da` | Split Studio · N8 面包屑与 UnderlineNav / Ft4（双栏面积图与 9 平台紧凑探针） |
| chillgauge | ChillGauge | IBM Carbon（语义色回源 TDesign） | Blue7 `#0052d9` | Stat-Led · N13 48px Carbon 全局头 / Ft2（齐平指标带、04:00 断口折线与首屏车次表） |
| probeshelf | ProbeShelf | Adobe Spectrum | Spectrum Accent `#0054b6` | Catalogue · N9 极简顶栏 / Ft6 实验室落款（32px Spectrum 过滤带 + 左名录右档期） |
| allparse | ALLParse | Adobe Spectrum | Spectrum Accent `#0054B6` | Narrative Workflow · N9 / Ft4（Spectrum 蓝浅带 Hero + 立体解封装矢量容器） |
| chatcafe | ChatCafe | Apple HIG | HIG Blue `#0052d9` | Workbench · 自定半透明工具栏 / Ft2（#f3f3f3 侧栏 + 纯白对话区） |
| clinicdesk | ClinicDesk | Microsoft Fluent 2 | Fluent Brand `#0f6cbd` | Service Document · N6 报头 / Ft6 落款（#ebf3fc 浅蓝底 + 右栏粘性存根） |
| coursedeck | CourseDeck | Shopify Polaris | Polaris Graphite `#303030` / Action `#005BD3` | Split Studio · N12 公告深栏 / Ft1（纯白主台 + #F7F7F7 侧栏） |
| ethanworks | EthanWorks | TDesign | Purple7 `#7137bf` | Marquee Hero · N5 悬浮胶囊 / Ft5 大字收尾（三栏项目对照工作台） |
| needknows | NeedKnows | IBM Carbon | Carbon Blue `#0052d9` / Header `#161616` | Index-First · N13 #161616 ⌘K 顶栏 / Ft3 Gray10 三栏索引 |
| promptshelf | PromptShelf | GitHub Primer | Primer Accent `#0969da` / Header `#25292e` | Component Playground · N8 #25292e 终端面包屑 / Ft1 水平词标（#f6f8fa 右栏填词台） |
| rolerail | RoleRail | TDesign | Green7 `#006c45` | Catalogue · N1b 三段磨砂顶栏 / Ft7 周报订阅（Green1 浅绿 Hero + Gray1 分布卡） |

SamePaper 与 CivicDesk 是 2026-11-13 同一批生成的两站，版式三件与色相按批内不重复分派：前者营销页，后者办事流程页。CivicDesk 在 2026-11-15 按 Service Chain 重做了一版，旧稿（Narrative Workflow）存档在仓库外，README 结构列已按新版更新。CartLane、FixQueue 与 SwimBoard 是随后两批的三站，CartLane 与 FixQueue 都在旧稿上重做了一版。

PayloadDeck 与 GatewayDeck 是 2026-11-14 的试跑批次，现放回 examples；两站另带 `verify.py`、`VERIFY.txt`（GatewayDeck 另有 `carbon-palette.txt`）作为自检与取色证据，案例卡仍只读五件。

ListenRail、EpDeck、QuillDeck 与 WeekDeck 是 2026-11-07 测试批次的作品，入库时按 `briefs/` 的需求名重新定名，取值记录里的行号按当前正文重新锚定。

AnnualDesk 是 2026-11-15 的单页案例：把「核对单」做成整页骨架，摘要联与正文共用一张纸，撕口、盖章与受理单号当记忆点。



站名都按 NameYouLike 的起名提示词生成（英文名，它不出汉字名），并按同一套核验口径跑过 npm、GitHub 同名仓、同赛道产品与 RDAP 域名四道；生成在会话里执行。提示词与核验方法见 [NameYouLike · 取名台](https://github.com/hey-yx/NameYouLike)。

不预设四轴时会出现趋同：多数站会选 TDesign Blue7 当强调色，结构也集中在文档、列表、看板这类中性骨架上，这是实测结果，不是刻意安排。所以一次生成多站时按 `briefs/layouts.md` 临时分派版式与色相，选完直接用，不另存文件。

## 验收口径（现行案例）

- 单文件 HTML；未开框架的站零外部请求，开框架的站只允许 esm.sh 的框架与组件库请求（MetricRail 开了框架，映射与请求口径见其 FINDINGS 第 3 节）；中文站用中文真实文案，英文站用英文真实文案。
- 开框架的站：组件来自该行官方组件库，主题变量映射到数值文章的值，逐个组件量 `backgroundColor` / `fontSize` / `borderRadius` 对账；只改品牌色不算过。
- 320 / 375 / 768 / 1280 四档无横向溢出（`scrollWidth === clientWidth`），另按数值文章的断点逐个边界量一次。
- 核心交互真跑：筛选、表单校验、数据联动、弹层开合逐个实测，前后数字记在 DECISIONS。
- 对比度：正文 ≥ 4.5:1，非文本 ≥ 3:1，实测值进取值记录。
- 质量六条：首屏字号按字阶档位取（英文站按 measure 判，每行 60-75 字符）、层次靠底色不靠框线、强调色面积 < 5%、封面与图表内联 SVG、交互态齐全、行高按该站数值文章的字阶原文（8px 基线体系才用字号 + 8 校验）。
- 形状语言一致：胶囊或圆角容器里的悬停、选中、按下与本体同形，只换填充色不换形状；同排控件的圆角与高度实测相等。验收标准见下面「必选场景检验」。
- 素材与视觉方向：DECISIONS 写素材清单与来源、查看日期，三个候选与淘汰理由、视觉配方；首屏看得到业务物件；演示数字不凑整；抽三条文案换上别站品牌名不成立。

## 必选场景检验（每站都跑）

跑不过不算交付。验收标准都写成能测的量，不靠眼睛感觉。

| 场景 | 怎么跑 | 通过标准 |
| --- | --- | --- |
| 状态与本体同形 | 找出站内所有胶囊或圆角容器（悬浮导航、分段切换、标签、按钮组、卡片内操作行），逐个把悬停、选中、按下调出来，量 `border-radius`、高度、`background-color`、`text-decoration-line` | 三种状态只换填充与文字色，不出现下划线、方框、左侧竖条；同排控件圆角与高度实测相等；实心＝动作，浅色填充＝当前位置，两者形状同族、层级分得开 |

这条专拦一种错：胶囊导航里主按钮是实心胶囊，选中项却写成下划线，一个容器出现两种形状语言。对比度、溢出、行高、间距全部查不出来，只有形状一致性这一条能拦住。

分层不算违规：动作件（按钮、切换、徽标、标签、行内操作）统一胶囊；容器件（卡片、面板、任务块）用 4 至 8px 小圆角；输入框与文本域按数值文章的输入框圆角，不跟着胶囊走。判的是「同类件之间」和「同一件的三种状态之间」，不是全页一个圆角。

## 取值纪律（看取值记录时重点看这些）

1. 一个项目一套数值文章，数值文章拥有数值决定权，其余来源只取原则。跨源拼数值（Carbon 间距配 TDesign 字阶）是缺陷不是创意。
2. 数值文章没给的维度，按 guide 的「数值文章缺口与派生」去其他官方原文取缺失的值，取不到就按统一兜底档补。补出来的值标「派生」写清依据，禁止现场各自组合，也不凭记忆补一个看起来合理的数。
3. 强调色优先在数值文章自己的色板里取原文值，不自行推导色值；推导只在数值文章只有单色相时用，且必须逐档算对比度。
4. 品牌 DESIGN.md（brands/ 分区）是「复刻品牌语气」的语境，拿它当产品 UI 的数值来源会做出品牌仿站。
5. 交付前主会话独立复验：四档溢出、外链 grep、行高普查、截图走查，子代理自报不算数。
6. 取值记录引用一律写 `content/ 完整路径:行号`（如 content/color/tdesign.tencent.com--color.md:51），缩写不算出处。引用格式、行号区间、值-引对账、跨源数值四项由 `python3 scripts/check-ledger.py examples/<站>/DECISIONS.md` 核对，`--all` 扫全部记录；同批外壳（`nav` / `footer` / `base`）避重由 `python3 scripts/check-frame.py` 核对。
7. 每站 FINDINGS 收官把新缺口回填 guide 的「数值文章缺口与派生」；同一缺口在第二个站再出现，说明规则没写进 guide。

## 生成新案例做法

走 `/starmap/` 的流程，步骤以 `/ai/guide.md` 为准。需求驱动的做法是先把 `briefs/<站>.md` 定下来，再按流程做，结构不预设。

成站按四项判：取值记录能对账（`python3 scripts/check-ledger.py examples/<站>/DECISIONS.md` 全过）、四档无横向溢出、对比度有实测值、核心交互有前后记录。任一项不过就回炉，不设总分。
