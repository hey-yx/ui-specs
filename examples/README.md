# examples · 真实建站案例

这十一个站是「AI 读本库做设计」真实流程跑出来的案例。2026-11-07 晚这一轮改成需求驱动：需求单独放在仓库根的 `briefs/`，站目录里只剩成品件，页面结构和取值全部由指南七步重新推出来，旧成品已删，备份在仓库外。

每站五件：`index.html`（单文件，零外部请求）、`DECISIONS.md`（每条数值的出处：值 + `文件:行号` + 用在哪）、`FINDINGS.md`（基准规范缺口与被迫派生的维度）、`preview.png`（1280×800 首屏）、`meta.json`（案例卡展示用的站名、一句描述、主色、结构、版型）。放齐五件，构建时自动出现在 `/examples/` 和首页统计里，不用改代码；缺一件构建直接失败。生成前的需求不在站目录里，在 `briefs/<站>.md`。站内浏览在 `/examples/`。

## 建站需求

生成前的建站需求不与案例站混放，真源是仓库根的 `briefs/sites.json`：每站一条，字段固定为名字、分类、语言、产品、受众、核心任务、语气、差异化约束、页面必备内容、边界。站名只有一个字段 `name`，分类 `category` 写一句中文短名（视频站、数据看板、写作工具这类），需求列表与详情页显示的就是它，slug 只在 URL 与目录名里出现。语气决定文案腔调，差异化约束给一个色相方向或结构倾向，具体色值与尺寸仍按基准规范取，需求里不写数值。站点直接读这份数据渲染，总览在 `/briefs/`，单站在 `/briefs/<站>/`；AI 可以拉 `/ai/case-briefs.json`。每站的 `briefs/<站>.md` 由 `scripts/build-briefs.mjs` 从 JSON 生成（`--check` 只比对不写盘），改需求改 JSON 一处就够，缺一条或对不上案例清单会在构建时直接报错。换案例成品时只动 `examples/`，需求不受影响。

## 十一个站

| 站 | 站名 | 基准规范 | 强调色 | 结构（macrostructure / nav / footer） |
| --- | --- | --- | --- | --- |
| epdeck | EpDeck | TDesign（含暗色板） | Blue6 `#2174ff` | Catalogue Index / 顶部导航 / 三段页脚 |
| pickbin | PickBin | TDesign | Blue7 `#0052d9` | 柜面双栏 / 页头 / 简洁页脚 |
| metricrail | MetricRail | TDesign | Blue7 `#0052d9` | Stat-Led / N9 / Ft2 |
| samepaper | SamePaper | TDesign | Blue7 `#0052d9` | 编辑式长页 / 吸顶页头 / 四列页脚 |
| swimboard | SwimBoard | TDesign | Blue7 `#0052d9` | 应用骨架 / 侧栏导航 / 署名条 |
| tallylane | TallyLane | TDesign | Blue7 `#0052d9` | Ledger Column / N9 / Ft5 |
| fixqueue | FixQueue | TDesign | Blue7 `#0052d9` | Workbench / 侧栏 / 队列页脚 |
| quilldeck | QuillDeck | TDesign | Blue7 `#0052d9` | Narrative Workflow / N1b / Ft2 |
| listenrail | ListenRail | TDesign | Blue7 `#0052d9` | Marquee Hero / N9 / Ft5 |
| weekdeck | WeekDeck | TDesign | Blue7 `#0052d9` | Long Document / N6 / Ft2 |
| payloaddeck | PayloadDeck | Primer（色值与字阶回源 GOV.UK） | GOV.UK Purple `#54319f` | Long Document / 三栏文档 / 单行页脚 |

十一站的名字都按 NameYouLike 的起名提示词生成（英文名，它不出汉字名），并按同一套核验口径跑过 npm、GitHub 同名仓、同赛道产品与 RDAP 域名四道；生成在会话里执行，域名查询走仓内 `scripts/domain-check-fast.py`。提示词与核验方法见 [NameYouLike · 取名台](https://github.com/hey-yx/NameYouLike)。评分口径见 [`SCORES.md`](SCORES.md)，本轮评分待重做。

有一点值得先看：不预设四轴后，十一站里有九站都选了 TDesign Blue7 作强调色，epdeck 走同族暗色 Blue6，只有 payloaddeck 因为基准规范不同落在紫色。结构也集中在中性骨架（文档、列表、看板）上，这是本轮的实测结果，不是刻意安排。

## 验收口径（各站都过）

- 单文件 HTML，零外部请求；中文站用中文真实文案，英文站用英文真实文案。
- 320 / 375 / 768 / 1280 四档无横向溢出（`scrollWidth === clientWidth`）。
- 核心交互真跑：筛选、表单校验、数据联动、弹层开合逐个实测，前后数字记在 DECISIONS。
- 对比度：正文 ≥ 4.5:1，非文本 ≥ 3:1，实测值进取值记录。
- 质量六条：首屏字号按字阶档位取（英文站按 measure 判，每行 60-75 字符）、层次靠底色不靠框线、强调色面积 < 5%、封面与图表内联 SVG、交互态齐全、行高 = 字号 + 8。

## 取值纪律（看取值记录时重点看这些）

1. 一个项目一个基准规范，基准规范拥有数值决定权，其余来源只取原则。跨源拼数值（GOV.UK 间距配 TDesign 字阶）是缺陷不是创意。
2. 基准规范没给的维度按 guide 的「基准规范缺口与派生」回源取次源或走统一兜底档，标「派生」写清规则并记进 FINDINGS；禁止各自现场组合，不凭记忆补一个看起来合理的数。
3. 强调色优先在基准规范自己的色板里取原文值，不自行推导色值；推导只在基准规范只有单色相时用，且必须逐档算对比度。
4. 品牌 DESIGN.md（brands/ 分区）是「复刻品牌语气」的语境，拿它当产品 UI 的基准规范会做出品牌仿站。
5. 交付前主会话独立复验：四档溢出、外链 grep、行高普查、截图走查，子代理自报不算数。
6. 取值记录引用一律写 `content/ 完整路径:行号`（如 content/color/tdesign.tencent.com--color.md:374），缩写不算出处。本轮人工核过三关：引用格式、行号区间、值-引对账。仓库里的自动检查器已按用户要求删除，不再有脚本闸。
7. 每站 FINDINGS 收官把新缺口回填 guide 的「基准规范缺口与派生」；同一缺口在第二个站再出现，说明规则没写进 guide。

## 生成新案例做法与评分

走 `/starmap/` 的七步：定语境选基准规范 → 拉指南包 → 选设计点 → 读原文 → 出稿 → 测试回炉。需求驱动的做法是先把 `briefs/<站>.md` 定下来，再跑七步，结构不预设。

测试批次每站 100 分，三块：

| 块 | 分 | 看什么 |
| --- | --- | --- |
| 出处与取值记录 | 40 | DECISIONS 值/出处/用在哪逐条齐；引用全是 `content/ 完整路径:行号`；派生值标 derived 记 FINDINGS |
| 页面质量 | 40 | 验收口径六条逐项打分；四档无横向溢出；对比度实测值在取值记录；首屏字号档位、强调色面积、行高逐项核 |
| 行为与回炉 | 20 | 核心交互实测前后数字；测试回炉真跑并留记录；新缺口回填缺口表 |

出处或行为低于六成直接不合格，页面质量分不救。