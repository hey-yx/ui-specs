# Design · UISpecs 阅读站

锁定系统。改版式、配色、字号前先读这份；页面之间不一致按这里裁决。

基准规范 GOV.UK Design System（项目选型 `project-gov-uk-uswds` 的英国体系分支）。选它的理由是产品同构：GOV.UK Design System 本身就是一个设计规范库。版式由 Hallmark 介入，与本库的版型原型、数值共同作用；数值归 GOV.UK，无障碍底线高于两者。

## 版式家族

- 首页：Index-First。48 大标题、一句说明、搜索条、统计、一行取值示例，下面 18 个分区做成四列表行（编号、名称、说明、篇数），行间 hairline，不画卡片。
- 内容页（`/s/`、`/a/`、`/starmap/`、`/examples/`、`/briefs/`）：Long Document 加文档三栏。单栏正文、hairline 分隔、目录按需。

## 全站骨架（文档三栏）

常驻左导航 + 正文 + 本页目录。改骨架只动 `site/src/layouts/Base.astro` 与 `skin.css` 的 `.shell` 段。

- 宽度：外壳 1264，左栏 216，右栏 168，栏距 40（GOV.UK 5px 基数的 8 号单位）；正文上限 42em。
- 左栏：全部分区与篇数，篇数由内容集合算，不写死；当前分区用 `aria-current="page"` 标出。首页不显示左栏。
- 右栏：本页 h2/h3 目录，与 header 的目录抽屉共用一次 DOM 采集；少于 2 条或本页无小标题时不占列。
- 断点：≥1200 三栏；1024-1199 两栏（无右栏）；<1024 收起左栏，分区导航由首页目录与 `/s/` 分区页承担。
- 首页例外：不显示左栏，主栏拿到 1264 全宽，由 `.shell:has(.home-intro)` 判定。
- 顶栏：黑底加 10px 品牌蓝底边，白字；品牌 24，与主栏左缘对齐（`nav-inner` 与 `.shell` 同为 1264）。

## 主题

色值取 GOV.UK 色彩篇（`content/color/govuk--colour.md`）：text `#0b0c0c`、secondary-text `#484949`、link `#1a65a6`、link-hover `#0f385c`、focus `#ffdd00`。边框 `#b1b4b6` 与浅灰面 `#f3f2f1` 库内未收录，标派生。

- 纸面：`--paper` 白
- 主文字：`--ink`
- 次要文字：`--muted`
- 链接：`--accent`，下划线常驻
- 焦点：`--focus` 黄，3px 环
- 分隔线：`--rule`

只有一套亮色值，不提供主题切换：`skin.css` 的 `:root` 是唯一色值来源，`color-scheme: light`。

## 字体与字阶

全站系统字体，零外部请求。GDS Transport 是 GOV.UK 专有字体、不可再分发，按系统栈派生。

字阶取 GOV.UK type scale（`content/type/govuk--type-scale.md`）：14 / 16 / 19 / 24 / 36 / 48，行高逐档 20 / 20 / 25 / 30 / 40 / 50。

层级：页面标题 48（heading-xl），区块标题 36，条目 19，正文 19，元数据 16。品牌 24，不再承担全站最大字号，页面标题是全页最大。

## 间距与圆角

5px 基数（GOV.UK spacing scale）：5 / 10 / 15 / 20 / 30 / 40 / 50 / 60 / 70。圆角一律 0。

## 动效

100ms 微反馈，200ms 常规，300ms 大面积变化。缓动取 W3C 命名曲线的等价定义。`prefers-reduced-motion: reduce` 时过渡与平滑滚动全部关掉。

## 组件语气

- 链接：accent 色，下划线常驻，hover 颜色加深、下划线 3px；不做位移。
- 按钮：黑底白字，方角，无阴影。
- 卡片（案例、需求、步骤块）：浅灰底 `--paper-2`，1px 边框，方角，无阴影。
- 分隔：1px hairline，不叠阴影。
- 焦点：3px 黄环，offset 2px，立即出现。

## 页面之间

必须一致：字体、配色、圆角、分隔线、焦点环、动效档位、页脚。

允许不同：分区表的列宽、案例卡网格列数、目录出现方式、首页统计行的内容。

## 文件归属

- 皮肤与 token：`site/src/styles/skin.css`
- 布局与主题脚本：`site/src/layouts/Base.astro`
- 首页：`site/src/pages/index.astro`
- 取值记录：`site/design/DECISIONS.md`
- 缺口与派生：`site/design/FINDINGS.md`
