# 项目选型规范

项目选型把「做什么产品」映射到「读哪套官方原文」。基准规范是这个项目唯一的数值来源，别的来源只提供原则、反例和气质。

## 三条硬规则

1. 一个项目一个基准规范：颜色、字号、间距、动效的数值不跨源拼。
2. 只认官方原文：hex、px、ms 要能在原文里读到，并连 `文件:行号` 记账。
3. 缺口回源：基准规范没覆盖的维度按 guide 的「基准规范缺口与派生」取次源，回不到走兜底档，例外记取值记录。

## 基准规范资格

四条全过才能进表：

- 官方原文，不是二手总结或教程转述
- 数值在正文里，不是图片、组件占位符或代码仓里的 token 文件
- 覆盖色彩、字体、间距、动效、组件里至少三类
- 每篇一个来源地址，能按行号记账

不满足的进候选池，不进基准规范表。

## 进站方式

新卡落盘后重建即自动进站：文章页按分区生成，`catalog.json`、`search-index.json` 与 `/ai/meta.json` 都从同一份内容集合生成。项目选型点不在 `star-points.json` 里，由 `MAIN_SOURCES` 里 `files` 非空的行自动派生，所以把卡填进 `files` 就等于接上了选型。

## 现状

完整清单以 `site/src/data/guide.ts` 的 `MAIN_SOURCES` 为准，站点 `/starmap/` 的「项目选型」组与它同源。
下表按常用程度排序，中文产品 UI 置顶；顺序与 `MAIN_SOURCES`、设计地图「项目选型方案」组一致。

框架 / 组件库一列给该行的官方组件库，需求开了框架时按它引；GOV.UK 用 `govuk-frontend`、USWDS 用 `@uswds/uswds`、NHS.UK 用 `nhsuk-frontend`，三者是 HTML + CSS + JS 模板，不分 React / Vue；Material 3 用 `@material/web`（Web Components）；Apple HIG 是原生，W3C DTCG 是 token 规范，这两行没有组件库。新品牌官网、复刻站点、品牌官网三行自己不带库，跟随所选或所抽体系的库。

图表库不跟组件库绑定：默认 ECharts（当前 6.x），用主题与调色盘把颜色、字体、动效映射到该站基准规范；Carbon 体系的项目用 `@carbon/charts`。选 ECharts 看中主题可逐项覆盖、图表类型全；只在纯测试页或极简需求里手写 SVG。引库时锁版本，不用 latest。

| 语境 | 短名 | 基准规范 | 框架 / 组件库 |
| ---- | ---- | ---- | ---- |
| 中文产品 UI（中后台 / 工具 / 内容 / 协作） | 中文产品 UI（TDesign） | TDesign（腾讯） | React 用 tdesign-react、Vue 用 tdesign-vue-next |
| 中文中后台（React / Ant Design 既有项目） | Ant Design | Ant Design（蚂蚁集团） | React 用 antd |
| 企业产品 / 数据密集界面 | 企业数据密集（IBM Carbon） | Carbon（IBM） | React 用 @carbon/react |
| 数据看板 / 图表产品 | 数据看板（Carbon 数据可视化） | Carbon（IBM 数据可视化） | React 用 @carbon/charts |
| 协作与项目管理工具 | 协作工具（Atlassian） | Atlassian Design System | React 用 @atlaskit/button，其余组件按 @atlaskit/<组件> 取 |
| 商家后台 / 商家工具 | 商家后台（Shopify Polaris） | Polaris（Shopify） | React 用 @shopify/polaris |
| 开发者工具 / 代码协作 | 开发者工具（GitHub Primer） | Primer（GitHub） | React 用 @primer/react |
| 研发协作平台（代码托管 / CI/CD / 代码评审） | GitLab Pajamas | Pajamas（GitLab） | Vue 用 @gitlab/ui |
| 新品牌官网（非复刻既有品牌） | 新品牌官网（TDesign / Carbon） | 中文走 TDesign / 英文走 Carbon | 无 |
| 政务 / 公共服务网站（表单与流程密集） | 政务服务（GOV.UK / USWDS） | GOV.UK（英国）或 USWDS（美国）（按所在体系二选一） | govuk-frontend / @uswds/uswds（HTML + CSS + JS） |
| 医疗健康服务（NHS 体系） | 医疗健康（NHS.UK） | NHS.UK（英国医疗） | nhsuk-frontend（HTML + CSS + JS） |
| 创意与内容工具 | 创意工具（Adobe Spectrum） | Spectrum（Adobe） | React 用 @adobe/react-spectrum |
| 多产品线自建设计系统 | 自建设计系统（W3C DTCG） | W3C DTCG（Token 规范） | 无 |
| 无障碍整改 / 合规审查 | 无障碍整改（WCAG 2.2） | W3C（WCAG 2.2） | 无 |
| 复刻既有站点（Hallmark 识别） | 复刻站点（Hallmark 识别） | 该站抽取的 DESIGN.md | 无 |
| 品牌官网 / 营销页 | （对照行） | 对应品牌 DESIGN.md | 无 |
| Android / 跨端应用（Material 生态） | Material 3 | Material 3（Google） | @material/web（Web Components） |
| Windows / Microsoft 365 应用（Fluent 生态） | Fluent 2 | Fluent 2（Microsoft） | React 用 @fluentui/react-components |
| 原生应用（iOS / macOS / visionOS） | Apple HIG | Apple HIG（人机界面规范） | 无（原生，非 Web） |

Material 3、Fluent 2、Ant Design 的 token 快照放在 `content/tokens/`，随各自选型的 `files` 使用；不再有独立的参考值分区。

## 选型流程

1. 定语境：产品做什么、给谁用、表单还是图表、有没有既有品牌要复刻。
2. 定基准规范：同语境有多套体系时按项目实际情况二选一，例如政务服务按所在体系选 GOV.UK 或 USWDS，选定后整套值都从这一套取。需求开了框架的，只在有该框架官方组件库的行里选，选不到就换行。
3. 读基准规范：从基准规范的文章里取 3 到 5 个关键值，连 `文件:行号` 记进取值记录。
4. 补缺口：基准规范缺的维度回源取次源，回不到走兜底档，写进 FINDINGS。
5. 回炉：出稿后按设计点复测，值对不上引用行就重取。

## 新增官方基准规范

1. 在官方文档仓或官方站确认四条资格，先看数值是不是真在正文里。
2. 按 `content/README.md` 的配方收文，一节一文件，色彩、字体、布局、动效分开落分区。
3. 在 `MAIN_SOURCES` 加一行：`context`、`id`、`short`、`source`、`files`、`note`，有官方 React 或 Vue 组件库的再填 `stacks`（框架加 npm 包名）。`id` 显式写，别靠基准规范名派生，同一基准规范多语境会撞 id。图表库不进 `stacks`，按上文的默认 ECharts 或 Carbon 体系走。
4. 跑 `npm run build`：文章不存在会让构建失败；项目选型点由 `MAIN_SOURCES` 自动派生，出现在设计地图、`/ai/design-points.json` 与 guide 对照表里，不用再改 `star-points.json`。新收的文章只放文件不填进任何点的 `articles` 或 `files` 时，构建会以「文章未被牵引」拦下。
5. 更新本规范的现状表。

代码仓里的 token 文件不当文章收：那种文件没法带行号记账，也不能当叙述依据。

## 用 Hallmark 抽外部站点

复刻某个站点，或目标站没有公开设计系统时走这条线。

1. Hallmark 识别目标站：色板、字阶、间距、圆角、阴影、动效、组件语言、密度。
2. 落卡：`content/brands/designmd--<域名>.md`，frontmatter 八个字段照 `content/README.md`，`source` 写站点地址，`fetched` 写识别日期，`publisher` 写站点名加「站点抽取」。
3. 正文按 DESIGN.md 骨架写：
   - 概览：产品类型、气质一句话
   - 色板：hex 加用途
   - 字阶：字号、行高、字重
   - 间距与圆角：px 表
   - 动效：时长与缓动
   - 组件语言：按钮、卡片、表单的形状与状态
   - 可访问性：对比度实测结果
   - 边界：适合复刻什么，不适合什么
4. 在 `MAIN_SOURCES` 加一行：`context` 写「复刻 <站点>」，`id` 写 `project-<域名>`，`files` 指向刚落的卡。只落卡不填行时，构建会以「文章未被牵引」失败；填进 `files` 后重建，项目选型点自动生成。
5. 验收：抽 3 到 5 个关键值回原站复核，截图存证，证据等级标 derived。
6. 记账：取值记录引用写 `content/brands/designmd--<域名>.md:行号`。

抽取结果只服务这一个项目，不并进其他项目，也不拿来当通用规范。同一个站再抽取时覆盖旧卡，不并排留两份。

## 候选池：2026-11-07 GitHub 核查

- Ant Design：`docs/spec` 有七十多篇中文规范页，价值观、色彩、字体、布局、动效、对比度、暗色、图标、文案都有，但色板与字阶由组件和图片渲染，hex 与字号取不到，暂不进基准规范表。
- Arco Design：`site/docs_spec` 以组件规范为主，同样取不到数值。
- Semi Design：Token 文档由组件渲染，数值不在 Markdown 里。
- Fluent 2、Material 3：官方站是 JS 渲染，仓库里只有组件与架构文档，没有规范正文。
- Base Web、Gestalt：文档在仓库，内容以组件用法和文案规范为主，数值项待核查。

结论：仓库里能直接当基准规范用的没有。要数值就走站点抽取路线，或者等官方站可抽取时再收。

## 候选池：2026-11-08 复核

- Salesforce Lightning（`salesforce-ux/design-system`）：组件 `docs.mdx` 有用法与示例，基础色彩、字号、间距数值不在正文，暂不进。
- Backpack（`Skyscanner/backpack-docs`）：组件页为主，缺基础数值表，暂不进。
- GitLab Pajamas：已改走 GitLab 官方 Markdown，2026-11-08 收 10 篇进表（来源 `gitlab-org/gitlab-services/design.gitlab.com` 的 `contents/product-foundations` 与 `contents/brand-design`）。
- Ant Design、Fluent 2、Material 3 已在 2026-11-08 转为选型（官方 Markdown + token 快照）；Arco、Semi、Base Web、Gestalt 仍候选，数值在图片、组件占位符或 token 文件里，不进基准规范表。
- 补充核查 Mozilla Protocol、Wikimedia Codex、Evergreen：基础页有，但色彩/字号/间距由 `{{#each}}`、Vue token 表或组件占位符渲染，raw 不含最终值；满足不了 GitHub 直取，不新增。
- PatternFly（`patternfly/patternfly-org`）：Typography、Spacers、Iconography 有 Markdown 表值；Colors 是 React 色板组件与图片，Motion 没有时长，四类不齐，暂不进。

## 变更记录

- 2026-11-07 建立。政务两条合成一条，按体系二选一；新增数据看板、无障碍整改、自建设计系统三条；加复刻站点入口与 Hallmark 流程。
