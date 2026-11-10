# content/：采集与维护手册

本目录每篇 `<分区>/<来源域名>--<slug>.md` 是一篇全文（分区目录名 = frontmatter `section` = catalog 分区 key，新文章落 `content/<frontmatter.section>/`；文件名前缀取来源站点名，同一上游共用一个前缀，新条目向该来源既有条目对齐；`designmd--`（品牌包）、`govuk--`、`w3c--`、`dtcg--` 是约定俗成的伪域名前缀，采集来源仅这四个；`ui-specs--` 是本库原创文章前缀，不算采集来源，`source` 写仓库地址、`publisher` 写「UISpecs 本库原创」，正文来源行照常用 `> 来源：[本库原创](仓库地址)` 的格式）。本文件与 `PROJECT-SELECTION.md` 都是**手册不是文章**，不进内容集合（两者在 `listContentFiles` 的 SKIP 白名单里；在 content/ 新增手册要同步加白名单）。历史遗留 2 个无前缀文件：content/layouts/product-picker.md、content/patterns/ux-rules-checklist.md。
本项目没有采集脚本与体检脚本，加文章全靠本手册 + 人工（或 AI）按清单执行。

## 一、文件头格式（必须严格一致）

页面渲染端按这个格式剥头，写错会把元数据显示出来：

```markdown
---
title: "文章标题"
source: https://原始地址
section: 分区id
tag: "标签"
fetched: YYYY-MM-DD
status: full
id: 稳定标识（写入后不改）
publisher: "发布方"
---

# 文章标题

> 来源：[https://原始地址](https://原始地址)

---

（正文）
```

八个 frontmatter 字段缺一不可（id、publisher 也要写），`status` 必须是 `full`（本库只收全文，导读卡已废除）。

标题约定：选型方案专属文章的 `title` 与正文 H1 用 `来源 · 类型 · 英文标题 中文`，类型取 Foundation / Pattern / Component / Token / Standard / Style 等；例：`GOV.UK · Pattern · Addresses 地址`。Apple HIG 基础层 `Apple HIG · Foundation · ...`，模式 `... · Pattern · ...`，组件 `... · Component · ...`。

> 库里有早期采集的文件只有 frontmatter、没有后面的「# 标题 / 来源行 / ---」三段。两种形状页面都能正确渲染（规范头由 stripMyHeader 整段剥掉，裸 frontmatter 由 cleanMarkdown 剥掉），不必回头改；**新文件一律按上面的完整格式写**。

## 二、来源配方（每类来源怎么取）

每篇的原始地址在文章 frontmatter 的 `source` 字段里。按来源家族选取法：

### gh：GitHub 仓库同源 Markdown（首选，`curl -sSL https://raw.githubusercontent.com/<repo>/<ref>/<path>`）

| 仓库 @分支 | 路径模式 |
| ---- | ---- |
| ant-design/ant-design @master | `docs/spec/<页>.zh-CN.md` |
| arco-design/arco-design @main | `site/docs_spec/`（仓库仅有的中文规范页） |
| Shopify/polaris @main | `polaris.shopify.com/content/…`（design 与 components 下的 .mdx） |
| primer/design @main | `content/foundations/….mdx` |
| carbon-design-system/carbon-website @main | `src/pages/elements|components|guidelines|data-visualization/….mdx` |
| GoogleChrome/web.dev @main | `src/site/content/en/…` |
| design-tokens/community-group @main | `technical-reports/format/<x>.md` |
| VoltAgent/awesome-design-md @main | `design-md/<品牌>/DESIGN.md` |
| Jakubantalik/transitions-dev @main | `skills/transitions-dev/<NN>-<slug>.md`（组件动效，MIT License；收前 12 条） |
| Jakubantalik/transitions.dev @main | `transitions/<slug>/index.html`（组件动效，Transitions.dev License；收免费页 33 条，Pro 11 条未收） |
| alphagov/govuk-design-system @main | `src/patterns/<slug>/index.md`（场景模式分区）；`src/styles/<slug>/index.md`（styles 同源，但库内 GOV.UK styles 已收） |

Transitions.dev License 允许商用、修改、随产品发布，限制只有一条：不得把 transitions 库本身作为竞品再分发。Pro 11 条未收；3D tilt、accordion、toast 等 21 条免费页已按此许可收进 `content/motion/`。

### glraw：GitLab 仓库同源 Markdown

- GitLab API：`curl -sSL "https://gitlab.com/api/v4/projects/<项目路径 URL 编码>/repository/files/<文件路径 URL 编码>/raw?ref=main"`；`source` 仍写设计站公开页，不写 API 地址。
- Pajamas（`gitlab-org/gitlab-services/design.gitlab.com`）的 `contents/product-foundations` 与 `contents/brand-design` 是完整 Markdown，色彩、字阶、间距、动效、层级、图标都能取到表值。
- 清洗：剥顶部 `name:` frontmatter；删 `<design-tokens-*>`、`<component-api>`、`<figure-img>`、`<video>`、`<todo>`、`<do>`/`<dont>` 与 Vue live-example 标签；保留 HTML 表和代码块；相对链接补 `https://design.gitlab.com`；尾部 `## Resources` 站点链接块切掉。

### GOV.UK patterns 的清洗要点

- 正文有 Nunjucks 残渣：`{% from "_example.njk" import example %}`（含 `{%- ... -%}` 变体）与正文里的 `{{ example({ group: "patterns", item: "...", example: "<名>", ... }) }}` 调用。**后者要替换成对应示例的真实代码**，示例源在 `src/patterns/<slug>/<示例名>/index.njk`，正文里的 `example:` 字段给出对应关系。
- 示例代码块里的 `{% from "govuk/components/..." import ... %}` 要保留：那是示例代码本体，抄进项目就要用这一行。门禁查残渣时只查散文区（代码围栏之外）。
- 上游部分 pattern 已归档废弃（ethnic-group / gender-or-sex / start-pages / task-list-pages / understand-the-impact-of-an-emergency），正文只是指向新页的链接，按选文标准不收。
- 站内链接原文是相对路径 `/patterns/<slug>/`、`/components/<slug>/`，要转绝对地址；上游偶有 slug 带空格（渲染站会转连字符）。

### curlx：网页抽取（curl + Readability 抽正文转 Markdown）

- **必须取渲染页、不能取仓库 raw 的**：USWDS（designsystem.digital.gov，raw 是 Liquid/include 碎片）
- **GOV.UK 已有同源 raw**：patterns 走 `alphagov/govuk-design-system` 的 `src/patterns/<slug>/index.md`，样式页走 `src/styles/<slug>/index.md`；清洗要点见上一节
- 其余网页源：service-manual.nhs.uk、atlassian.design、every-layout.dev、nngroup.com、developer.mozilla.org、practicaltypography.com
- USWDS 渲染页只取 `main` 内的正文与表，剥 `.usa-banner`、`.usa-header`、`.usa-footer`、`.usa-in-page-nav` 与反馈条；NHS 同理剥 header、footer、cookie banner。当前 USWDS 7 篇、NHS 4 篇扫过，无站点块。
- Fluent 2 官方站基础页取 `main .content-container .content`，剥 `.toc` 与视频控件残渣，保留文中表；`source` 写官方页，不写抽取脚本。
- TDesign 基础页正文在 `Tencent/tdesign` 的 `site/src/pages/design/*.vue` 与 `site/src/locales/pages/design-*.ts`；当前 9 篇站点正文已扫过，无站点导航/页脚/反馈块。
- W3C：`www.w3.org/TR` 单页 TR 文档；APG 交互模式在 `www.w3.org/WAI/ARIA/apg/patterns/<slug>/`

### plainx：AEM / Edge Delivery 分片页

- Spectrum（spectrum.adobe.com）：取 `URL + '.plain.html'`（纯内容分片，没有 article 容器，普通 Readability 会判空壳），整 body 转 Markdown
- 抽完后手工清：自带 H1（与本库标题重复）、`#### Jump to` 块、空小节标题、尾部兄弟页链接

### 选文红线：AI 已内置的通用知识不收

通用设计法则与心智模型（可用性启发式、设计原则类文章、交互原则类文章）、Markdown 语法标准与速查、纯趋势叙述文：模型本来就会，收进库只压低信噪比。判断依据是读完能否取出**具体数值、权威规则或有出处的研究结论**，只给「应该怎么做」的不收。

### 特殊备忘（踩过坑的）

- Apple HIG 文字版：切掉 "Navigator is ready" / 「导航器准备就绪」之前的站点导航块
- 内嵌 base64 图片替换为 `（示例图见原文）`（体积会放大十几倍）
- learnui.design 首篇开头有 "Skip to content / UI Course…" 导航残渣，人工清
- 上游 GitHub 文件常自带 YAML frontmatter，落盘前剥掉，避免双 frontmatter
- JS 渲染且无公开仓库源的站点不整页收录：Apple HIG 总览、Arco 字体/暗色页、Salesforce Lightning；M3 与 Fluent 2 已改走官方仓库的 docs/token，站点正文仍不整页抓
- Apple HIG 单篇是例外：总览页不收，单篇用浏览器取 `main.innerText`，切文首更新日期/变更提示、重复 H1、文末 `Change log` 与 `Resources/Related`；正文保留 `Platform considerations`。基础层、模式、组件都按此收；输入方式与技术特性待补
- GitHub 直取只适用于正文本身是 Markdown/MDX 的来源（Carbon、Polaris、Primer、DTCG、GOV.UK 等）；Liquid/Nunjucks 模板与 `_data` 循环渲染的页面（USWDS、NHS、TDesign 基础页）raw 不是完整正文，仍需渲染页或解析模板
- 部分条目 frontmatter 的 `source` 是 raw.githubusercontent 抓取地址而非网页展示地址（gh 配方「原始地址」约定），catalog 的 src 原样取用，阅读站「来源」链接点开是纯文本；要展示网页 URL 需人工定夺
- `brands/designmd--slack.md` 上游是第三方再创作，不是 Slack 官方规范，引用时按这个口径说明

### 渠道清洗备忘（重抓同渠道条目时对齐）

- Microsoft Writing Style Guide（gh_raw）：剥上游 YAML frontmatter，`~/` 相对链接改写为 learn.microsoft.com 绝对链接
- adobe.design（plainx）：剥 article-header div 与尾部「Up next」兄弟页链接，相对 media 图片补 `https://adobe.design/stories/leading-design/` 前缀
- W3C WAI（curlx）：`/WAI/...` 链接与图片补全域名，剥 Back-to-Top base64 图标
- W3C APG（curlx）：图片路径补 `https://www.w3.org/WAI/` 前缀
- inclusive-components.design（curlx）：剥「Get the book!」推广块与尾部组件目录链接，相对图片补站点域名
- `designmd--*`（gh_raw）：整体保留（含上游 YAML token 块）
- carbon dataviz（gh_raw）：剥上游 frontmatter 与 MDX 组件壳（第三节清单），正文解折行

## 三、MDX / 模板残渣清洗清单（抓取时就清干净）

页面渲染端的清洗会兜底最常见的几种，但落盘前清干净最稳：

- shortcode `{% … %}`、JSX 注释 `{/* … */}`、import 语句（含多行花括号列表）
- 标题锚点 `{#xxx}`、Polaris 的 `{frontmatter.title}` / `{frontmatter.description}` 行
- 站点专属组件壳（剥标签留文字）：AnchorLinks、DoDont、Tabs、TypeScaleTable、Lede、Subnav、InlineNotification、Heading 等；`<PageDescription>x</PageDescription>` → `> x`；`<ResourceCard title href description>` → Markdown 链接条目
- 独占一行的自闭合 JSX（如 `<IbmSecurity size={32} />`）、video/source 标签、`style={{…}}` / `sx={{…}}`、HTML 注释（**代码围栏内保留**）
- 实体：`&rarr;` → `→`、`&nbsp;` → 空格
- 注意：上游文档里的 `<DIV>`、`<MAILTO>`、`<Warning>` 等是文档示例，**不能当组件删**

## 四、写盘前自检（原采集脚本的质量门禁，逐条过）

1. **长度**：正文软线 600 字符，规范类建议 800+；确实短的短文需注明理由
2. **非 JSON 垃圾**：正文开头不是 `"`、`{`（SPA 接口误存的标志）
3. **可打印占比 ≥ 90%**（前 4000 字符；防 gzip 乱码 / 二进制）
4. **内容性质**（头部 3000 字符内，命中即拒）：
   - 营销/首页特征 ≥2 处：View pricing、Book chapters、Get started、开始使用、给这个风格评分、N/100 评分、npm i xxx、点击关注公众号、跳过导航、Skip Navigation
   - 导读页口吻："Unsure where to start"、"collection of links to our articles"
   - 空图行 `[]` ≥5（图片教程丢图，zcool 教训）
   - `{frontmatter` 模板变量未渲染
   - 纯文本 <500 字符且链接 ≥10（链接目录页，不是可独立读的全文）
5. **描述性垃圾门禁**（全文粗扫，不限于头部；命中即拒，对应维护规则 `/ai/guide.json` 的 `maintenance` 里的收文标准）：
   - 空洞修辞成灾：赋能、助力、沉淀、抓手、闭环、极致体验、无缝衔接、颠覆式，每千字 ≥2 处即拒（正文引用反例、双语原文对照里的词不算）
   - 总结腔骨架：通篇靠「综上所述/总而言之」式段落收束、结尾是展望式空话，且全文没有可复用的数值/规则/对比数据
   - 流水账复盘：背景-目标-过程叙事但拿不出「为什么这么定」的依据（决策理由、数据、方案对比至少有一样；只有结果没有论证即拒）
   - 判断基准：AI 读这篇能不能取到具体的值或可复用的做法。取不到，就是描述性垃圾，不收。

## 五、加条目后的同步清单（原体检脚本的检查项，逐条过）

1. frontmatter 八字段齐全，`status: full`
2. 任务路由补一行：在 `site/src/data/guide.ts` 与 `star-points.json` 里补该篇的归属（真实 `content/` 路径），同一主题内不重复出现
3. 落对分区目录：该条 `file` 的目录段 = 分区 key = frontmatter `section`
4. 手写文档（README / content/README.md / guide.ts 注释）不出现篇数、分区数等计数，数字写死必漂移；篇数由站点端点 `catalog.json` 按内容集合实时算
5. 跑 `cd site && npm run build`：指南里的文章引用会被校验，路径写错构建直接失败
6. 浏览器实测（`python3 -m http.server` 后）：展开该文章渲染正常、⌘K 能搜到、亮暗两态正常、375/320 宽无横向溢出

来源数值冲突时：一个项目只选一个基准规范拥有数值决定权，其他来源只取原则和反例；可访问性底线高于任何风格；禁止跨源拼数值。

## 六、落选候选池（试抓过但不收，按原因跳过）

- `https://webtypography.net/current/`：内容页 HTTP 500，站点当前不可抓；恢复后可收，属 type 分区优质候选
- `https://baymard.com/blog/ecommerce-checkout-usability`：正文疑似 SPA 动态加载，抓不到稳定正文，过不了写盘门禁；有静态文章页可收，属研究/案例分区候选
- carbon-website `data-visualization/simple-charts/`：正文仅两句说明，图表全在 Storybook 演示里，过不了内容性质门禁；要图表用法需另行评估 carbon-charts Storybook
- carbon-website `data-visualization/getting-started/`：资源/教程链接目录页，按「不做链接目录」不收
