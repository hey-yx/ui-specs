# ALLParse Console · 取值记录

- 需求：`briefs/allparse-console.md`（解析 API 控制台：密钥与配额、9 个平台可用状态、最近 24 小时调用量、5 类错误码分布、失败请求样本诊断）
- 数值文章：**Primer**（GitHub），选型行 `project-primer`
- frame: batch=2026-11-21-b; nav=N8; footer=Ft4; base=#ffffff
- 交付：`examples/allparse-console/index.html`（单文件，CSS 与 JS 内联，零外部请求）

---

## 1. 选型理由与 GitHub Primer 真实工作台语法

- 面向后端工程师与对接运营的解析 API 控制台，与 GitHub 开发者控制台的 `PageHeader + UnderlineNav + SplitLayout + Box/DataTable` 语法高度同构，因此采用 `project-primer` **Light** 主题。
- 彻底去掉笨重黑框卡片墙，改以 GitHub 标志性的 `#f6f8fa` 浅灰顶栏配 `UnderlineNav`（coral `#fd8c73` 下划线）、顶部单行 4 栏 hairline 指标带、首屏 `SplitPageLayout`（左侧 24 小时平滑折线面积图 + 直接进首屏的 `DataTable` 失败样本，右侧 9 平台紧凑 `ActionList` 状态探针与 5 类错误码条），确保首屏即呈现全部核心信息流。

## 2. 色彩与实测对比度（Primer Light）

| 用途 | 值 | 出处 | 实测对比度 |
| --- | --- | --- | --- |
| 主页面与卡片表面（`bgColor-default`） | `#ffffff` | `content/tokens/primer.style--color-themes.md:20` | 主文字压它 **15.81:1** |
| 顶栏 / BoxHeader / 页脚底（`bgColor-muted`） | `#f6f8fa` | `content/tokens/primer.style--color-themes.md:21` | 次文字压它 **5.66:1** |
| 正文主文字（`fgColor-default`） | `#1f2328` | `content/tokens/primer.style--color-themes.md:24` | 白底 **15.81:1** |
| 次要元数据（`fgColor-muted`） | `#59636e` | `content/tokens/primer.style--color-themes.md:25` | 白底 **6.04:1**，浅灰 **5.66:1** |
| 链接与曲线强调蓝（`fgColor-accent`） | `#0969da` | `content/tokens/primer.style--color-themes.md:28` | 白底 **5.29:1** |
| 错误 / 成功 / 警示文字 | `#d1242f` / `#1a7f37` / `#9a6700` | `content/tokens/primer.style--color-themes.md:29-31` | 各自浅底上均 >= **4.52:1** |
| 边框发丝线（`borderColor-default`） | `#d1d9e0` | `content/tokens/primer.style--color-themes.md:32` | 1px 清晰面板分界 |
| 主按钮（`button-primary-bgColor-rest` / `-hover`） | `#1f883d` / `#1c8139` | `content/tokens/primer.style--color-themes.md:45-46` | 配 `#ffffff` **4.54:1** / **4.93:1** |
| 状态胶囊浅底与选中底 | `#ddf4ff` / `#dafbe1` / `#fff8c5` / `#ffebe9` | derived（由 Primer light semantic tokens 浅色域派生） | 严格维持前景 >= 4.5:1 |

## 3. 字阶、间距、动效与缺口回源

| 维度 | 取值 | 出处 | 说明 |
| --- | --- | --- | --- |
| 通知与图标字号锚点 | `12px` / `14px` | `content/patterns/primer--notification-messaging.md:42` | Primer 原文锚点 |
| 整套字阶回源 | `12px` / `14px` / `16px` / `24px` | `content/type/tdesign.tencent.com--fonts.md:53-57` | 按 GAP_RULES「字阶」回源 |
| 间距尺度回源 | `8px` / `16px` / `24px` | `content/layout/uisdc.com--code-for-design-of-spacing.md:102` | 按 GAP_RULES「间距」取 8px 基数 |
| 断点与内容边距 | `544px` / `768px` / `1012px` / `1280px` | `content/layout/primer.style--layout.md:96-99,110-115` | 窄屏 `16px`，宽屏 `24px` |
| 动效时长回源 | `100ms` / `200ms` | `content/motion/nngroup.com--animation-duration.md:80,82` | 按 GAP_RULES 回源 NN/g |
| 圆角与桌面/移动控件高度 | `4px` / `6px` / `32px` / `44px` | derived（桌面 `32px` 紧凑控件满足 `>=24px`，`<768px` 抬高至 `44px`） | — |

## 4. 外壳与避重

- **batch = `2026-11-21-b` · nav = `N8` · footer = `Ft4` · base = `#ffffff`**：采用 Primer 面包屑 + `UnderlineNav` 顶栏与 `<footer class="pr-gateway-foot">` 单行发行口径页脚，批内无重，全库页脚骨架唯一。
