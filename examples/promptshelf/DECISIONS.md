# PromptShelf（词架）· 取值记录

- 需求：`briefs/promptshelf.md`（AI 页面设计提示词画廊：8 类 120 条摘要、每类 2 条完整提示词共 16 条、中文场景说明、变量填充说明、示例输出与免登录本地收藏）
- 数值文章：**Primer**（GitHub），选型行 `project-primer`
- frame: nav=N8; footer=Ft1; base=#ffffff
- 交付：`examples/promptshelf/index.html`（单文件，CSS 与 JS 内联，零外部请求）

---

## 1. 选型理由与页面骨架

- 产品形态是「研发与设计工具化的提示词模板仓库」（含版本更新时间、复制次数、变量代码高亮 `{{产品名}}`、左右分栏调试预览台），与 GitHub 仓库及代码/模板探索器同构，因此按 `project-primer` 选型行落盘。
- 顶部沿用 Primer 深色全局条 `#25292e` 加浅灰 `#f6f8fa` 带有计数胶囊的 UnderlineNav 分类条，下方分为「左栏 16 条 Box 风格卡片目录 + 右栏吸顶变量填充与整段装配调试台」，彻底摆脱通用白纸灰卡皮肤。

## 2. 色彩与实测对比度

| 用途 | 值 | 出处 | 实测对比度 |
| --- | --- | --- | --- |
| 主页面底色 / 卡片底 / 调试台 | `#ffffff` | `content/tokens/primer.style--color-themes.md:20` | 主文字压它 **15.81:1** |
| 子导航条 / 卡片头 / 代码底 | `#f6f8fa` | `content/tokens/primer.style--color-themes.md:21` | 次级文字压它 **5.66:1** |
| 全局顶栏底色 | `#25292e` | `content/tokens/primer.style--color-themes.md:23` | 白字压它 **14.66:1** |
| 正文主文字 | `#1f2328` | `content/tokens/primer.style--color-themes.md:24` | 白底 **15.81:1** |
| 次要文字 / 页脚 / 元数据 | `#59636e` | `content/tokens/primer.style--color-themes.md:25` | 白底 **6.04:1**，浅灰 **5.66:1** |
| 顶栏白字 | `#ffffff` | `content/tokens/primer.style--color-themes.md:26` | 压 `#25292e` **14.66:1** |
| 链接 / 选中底线 / 变量高亮字 | `#0969da` | `content/tokens/primer.style--color-themes.md:28` | 白底 **5.29:1** |
| 错误文字 | `#d1242f` | `content/tokens/primer.style--color-themes.md:29` | 浅错底 >= **4.90:1** |
| 可直接用绿字 | `#1a7f37` | `content/tokens/primer.style--color-themes.md:30` | 浅绿底 **4.52:1** |
| 需补变量警示字 | `#9a6700` | `content/tokens/primer.style--color-themes.md:31` | 浅黄底 >= **4.50:1** |
| 边框 / 卡片与表格线 | `#d1d9e0` | `content/tokens/primer.style--color-themes.md:32` | 1px 清晰控件边界 |
| 复制主按钮底 / 悬停 | `#1f883d` / `#1c8139` | `content/tokens/primer.style--color-themes.md:45-46` | 配 `#ffffff` **4.54:1** / **4.93:1** |
| 变量与状态微透明浅底 | `rgba(...)` | derived（由对应前景色低透明度派生） | 严格维持前景 >= 4.5:1 |

## 3. 字阶、间距、动效与缺口回源

| 维度 | 取值 | 出处 | 说明 |
| --- | --- | --- | --- |
| 通知与图标字号锚点 | `12px` / `14px` | `content/patterns/primer--notification-messaging.md:42` | Primer 原文锚点（需扩展整套字阶） |
| 整套字阶回源 | `12px` / `14px` / `16px` / `20px` | `content/type/tdesign.tencent.com--fonts.md:53-56` | 按 GAP_RULES「字阶」条整套回源 |
| 间距尺度回源 | `8px` / `16px` / `24px` / `32px` | `content/layout/uisdc.com--code-for-design-of-spacing.md:102` | 按 GAP_RULES「间距」条取 8px 基数 |
| 动效时长回源 | `200ms` / `300ms` | `content/motion/nngroup.com--animation-duration.md:82` | Primer 动效篇不足，按 GAP_RULES 回源 NN/g |
| 边框圆角与按钮高度 | `4px` / `6px` / `8px` / `36px` / `44px` | derived（GAP_RULES 组件尺寸与圆角） | 主要提交操作 `44px`，紧凑芯片 `36px` |

## 4. 外壳与避重

- **nav = N8（终端命令面包屑深色顶栏）**：保留 GitHub Primer `#25292e`（`content/tokens/primer.style--color-themes.md:23`）深色顶栏，将品牌区改为 `$ promptshelf / 词架 / <当前分类>` 等宽面包屑加闪烁光标（在 `prefers-reduced-motion: reduce` 下停止闪烁），分类切换实时同步路径最后一段，并保留搜索框与收藏/说明操作。
- **footer = Ft1（词标标语页脚）**：采用 `<footer class="gh-colophon">` 左右分布骨架（左叠等宽词标与仓库标语，右排站内导航与使用说明按钮，底行分隔线承接本地演示口径），与 `coursedeck` 的居中纵向 `foot-mast` 骨架完全区分，也避开通用 `foot-in`。
- **移动折叠**：640px 以下搜索框与按钮组自动折行至全宽，320px 零横向溢出。
- **页底与右栏分级**：全局 `body` 保持纯白 `#ffffff`（`content/tokens/primer.style--color-themes.md:20`），右栏吸顶填词台改用 Primer 次级表面 `#f6f8fa`（`content/tokens/primer.style--color-themes.md:21`）托起纯白变量输入框与预览代码盒。
