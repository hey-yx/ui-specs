# Design · UISpecs 阅读站

锁定系统。改版式、配色、字号前先读这份；页面之间不一致按这里裁决。

基准规范 Apple HIG（项目选型 `project-apple-hig`）。结构归 Hallmark，数值归 UISpecs，无障碍底线高于两者。

## 版式家族

- 首页与索引页：Documentation Index。大标题、一行说明、入口链接、分区表。
- 内容页（`/s/`、`/a/`、`/starmap/`、`/examples/`、`/briefs/`）：Long Document。单栏、hairline 分隔、目录按需。七步流程并进 `/starmap/`，`/flow/` 重定向到那里。

## 全站骨架（文档三栏）

Apple 开发者文档的三栏：常驻左导航 + 正文 + 本页目录。改骨架只动 `site/src/layouts/Base.astro` 与 `skin.css` 的 `.shell` 段。

- 宽度：外壳 1320，左栏 216，右栏 168，栏距 32；正文上限 42em（`.article-page`），首页等内容页撑满正文列。
- 左栏：读法（概述 / 设计地图 / 案例站 / 建站需求 / AI 用法）+ 18 个分区与篇数，篇数由内容集合算，不写死；当前分区用 `aria-current="page"` 标出。
- 右栏：本页 h2/h3 目录，与 header 的目录抽屉共用一次 DOM 采集；少于 2 条或本页无小标题时不占列。
- 断点：≥1200 三栏；1024–1199 两栏（无右栏）；<1024 收起左栏，分区导航由首页列表与 `/s/` 分区页承担。
- 顶栏品牌与左栏左缘对齐（`nav-inner` 与 `.shell` 同为 1320）。

## 主题

Apple HIG 原文只给语义色角色，不给 hex。色值按角色派生，亮暗两份写在 `site/src/styles/skin.css` 的 `:root` 与暗色块里，对照表在 `site/design/DECISIONS.md`。

- 纸面：`--paper` 白 / 黑
- 主文字：`--ink`
- 次要文字：`--muted`
- 元数据：`--faint`
- 信号色：`--accent`，只给链接与焦点环
- 分隔线：`--rule`

暗色由 `prefers-color-scheme` 自动跟随，手动选择用 `html[data-theme]` 覆盖，三态循环：自动、浅色、深色。选择存 `UISpecs-theme`。

## 字体与字阶

全站系统字体，零外部请求。display 与 body 共用系统栈，mono 只给编号与代码。

字号取 Apple Dynamic Type iOS xSmall 档原文：11 / 12 / 13 / 14 / 17 / 19 / 25 / 31。正文 17 是桌面长文派生档，行高 1.65。

标题层级：页面标题 25，区块标题 19，条目 17，元数据 12。

## 间距与圆角

8px 基数，4px 半档。圆角两档：控件 8，小组件 4。

## 动效

100ms 微反馈，200ms 常规，300ms 大面积变化。缓动取 W3C 命名曲线的等价定义。`prefers-reduced-motion: reduce` 时过渡与平滑滚动全部关掉。

## 组件语气

- 链接：accent 色，hover 加下划线，不做位移。
- 按钮：图标按钮 hover 只换底色。
- 卡片：`--paper-2` 底，无阴影，无描边。
- 分隔：1px hairline，不叠阴影。
- 焦点：2px accent 环，offset 2px，立即出现。

## 页面之间

必须一致：字体、配色、圆角、分隔线、焦点环、动效档位、页脚。

允许不同：分区表的列宽、案例卡网格列数、目录出现方式、首页统计行的内容。

## 文件归属

- 皮肤与 token：`site/src/styles/skin.css`
- 布局与主题脚本：`site/src/layouts/Base.astro`
- 首页：`site/src/pages/index.astro`
- 取值记录：`site/design/DECISIONS.md`
- 缺口与派生：`site/design/FINDINGS.md`
