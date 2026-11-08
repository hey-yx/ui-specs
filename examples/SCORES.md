# 测试批次评分 · 2026-11-07

> 本文件是当天第一轮测试批次的评分，对应的是已被替换的旧稿。2026-11-07 晚十一站按需求重跑，评分待重做，重做时整份替换。

评分口径见 examples/README「生成新案例做法与评分」：出处与取值记录 40、页面质量 40、行为与回炉 20；出处或行为低于六成直接不合格。评分人是主会话独立复验（四档溢出、外链 grep、截图走查、交互抽查），子代理自报只做参考。

| 站 | 站名 | 出处 | 页面质量 | 行为回炉 | 总分 | 主要扣分 |
| --- | --- | --- | --- | --- | --- | --- |
| fixqueue | FixQueue | 39 | 36 | 19 | 94 | 标签对比偏软、数字加粗不统一 |
| weekdeck | WeekDeck | 37 | 38 | 19 | 94 | 图例 10px 小字、域名批量结果未逐条重放 |
| payloaddeck | PayloadDeck | 39 | 35 | 18 | 92 | 320 首轮越界（自修）、logo 偏通用 |
| tallylane | TallyLane | 38 | 35 | 18 | 91 | 视觉偏平庸、卡片与底色区分弱 |
| listenrail | ListenRail | 38 | 35 | 17 | 90 | 行高小违例 10 处、「低对比」经证伪为滚动淡入中间态 |
| quilldeck | QuillDeck | 38 | 31 | 16 | 85 | 行高 = 字号 + 8 真实违例 76 处（nav 14/24、brand 28/24），自查口径没扫到导航与页头行 |

六站全部过闸（出处与行为均过六成线）。

## 主会话复验证据（不采信自报的部分）

- 四档 320/375/768/1280：六站 scrollWidth === clientWidth 全过（浏览器实测）。
- 外链 grep：六站零加载资源；listenrail 的 3 个外链是订阅平台跳转链接，不算请求。
- 对比度抽样（浏览器实测）：最低值 budget 6.54、tickets 4.86、weekly 4.86、podcast 5.25、apidocs 4.51；writer 的 2.94 是禁用态按钮（WCAG 豁免）。
- 行高 = 字号 + 8 抽查：budget 0/95、tickets 0/153、weekly 0/169 违例；writer 76/112（真违例）；podcast 10/101；apidocs 基准规范非 TDesign，该口径不适用。
- 交互抽查（浏览器实测）：tickets 筛选共 49 条切到 11 条；budget 图表行筛选 12 条切到 4 条；podcast disclosure 开合生效。
- 证伪三条视觉误报：writer「Properly 拼错」（实为 0 处）、tickets「首行被遮挡」（工具栏底 354 < 首行顶 447）、podcast「文字对比不足」（.reveal 滚动淡入中间态，文字本色 rgb(24,24,24)）。
- budget 条形图口径核实为绝对值统一标度（288→370px、174.5→224px 等比），视觉评审的「混用逻辑」不成立。

## 疏漏处置

| 疏漏 | 来源 | 处置 |
| --- | --- | --- |
| check-ledger.py 在仓库外跑会崩（relative_to 抛 ValueError） | writer、apidocs | 已修，仓库内外都跑绿 |
| 基准规范给了用法没给值（Primer 类）时色值、字阶无规则可循 | apidocs | GAP_RULES 补「色值」「字阶」两行 |
| 行长、首屏占比、弹层遮罩、触控目标与焦点环无兜底 | writer、weekly、podcast | GAP_RULES 补 4 行（焦点环回源 WCAG 2.2） |
| 风格篇 600ms 与 NN/g 300ms 打架 | podcast | 动效行加裁决：交互微动效服从 UX 回源，装饰服从风格基准规范 |
| 色阶当文字存在跨源借色风险 | apidocs | 该行补「同源加深，不跨源借色」 |
| Primer 行缺布局篇与 patterns 指引 | apidocs | MAIN_SOURCES 补 primer.style--layout.md 与 note |
| 新品牌官网在项目选型表没有路由行 | podcast | 补一行（无固定文章，不派生节点） |
| 142/194 个点缺 value_notes | podcast、weekly | 语义澄清为选填（README），逐点补全需逐篇取值，留作数据补全任务 |
