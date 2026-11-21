# CourseDeck（课栈）· 取值记录

- 需求：`briefs/coursedeck.md`（上班族碎片化数据分析课：6 章 24 节总长 6h 40m、前 2 节免费试听、断点续学、12 份练习数据、¥299 单课买断与 ¥39/月会员及结课证书进度）
- 数值文章：**Polaris**（Shopify），选型行 `project-polaris`
- frame: nav=N12; footer=Ft1; base=#ffffff
- 交付：`examples/coursedeck/index.html`（单文件，CSS 与 JS 内联，零外部请求）

---

## 1. 选型理由与页面结构

- CourseDeck 的核心任务是「浏览商品化课程大纲 -> 试听检验价值 -> 查看学习数据与课件 -> 按单课买断或会员下单转化」，在交互重心（SKU 定价对照、详情标签页、数据表格与秩序化白卡配浅灰画布）上与 Shopify Polaris 商家/商品工作台高度契合，故选用 `project-polaris`。
- 视觉上保持 Polaris 标志性的 `#F7F7F7` 浅灰画布、`#FFFFFF` 白卡搭配 `1px solid #E3E3E3` 描边、`8px`/`12px` 圆角、`1px` 底部微投影，以及 `#303030` 品牌碳黑主按钮配 `#005BD3` 强调蓝交互链接。

## 2. 色彩与实测对比度

| 用途 | 值 | 出处 | 实测对比度 |
| --- | --- | --- | --- |
| 正文主色 / 主品牌按钮底 | `#303030` | `content/tokens/polaris.shopify.com--tokens.md:23,31` | 白卡压字 **13.10:1**，按钮白字 **13.10:1** |
| 主按钮悬停深档 | `#1A1A1A` | `content/tokens/polaris.shopify.com--tokens.md:32` | 按钮白字 **17.40:1** |
| 次要文字 / 时长 / 页脚 | `#616161` | `content/tokens/polaris.shopify.com--tokens.md:24` | 白底 **6.20:1**，浅灰 `#F7F7F7` **5.79:1** |
| 强调蓝（链接/Tab 线/焦点框） | `#005BD3` | `content/tokens/polaris.shopify.com--tokens.md:25` | 白底 **6.26:1** |
| 错误文字与浅框 | `#8E0B21` / `#FEC1C7` | `content/tokens/polaris.shopify.com--tokens.md:26,36` | `#8E0B21` 压浅红底 **6.25:1** |
| 警示文字与黄框 | `#4F4700` / `#FFEB78` | `content/tokens/polaris.shopify.com--tokens.md:27,37` | 压浅黄底 **7.51:1** |
| 试听/达标绿文字与绿框 | `#014B40` / `#92FCAC` | `content/tokens/polaris.shopify.com--tokens.md:28,38` | 压浅绿底 **8.02:1** |
| 卡片纯白表面 | `#FFFFFF` | `content/tokens/polaris.shopify.com--tokens.md:29` | 承托全部卡片与表格 |
| 全局浅灰画布 / 次表面 | `#F7F7F7` | `content/tokens/polaris.shopify.com--tokens.md:30` | 承载次级区块与评价卡 |
| 卡片默认 / 悬停边框 | `#E3E3E3` / `#CCCCCC` | `content/tokens/polaris.shopify.com--tokens.md:33-34` | Polaris 招牌清晰卡片分割边界 |

## 3. 字阶、间距、圆角、动效与缺口说明

| 维度 | 取值 | 出处 | 说明 |
| --- | --- | --- | --- |
| 字阶大小 | `12px` / `13px` / `14px` / `16px` / `20px` / `24px` | `content/tokens/polaris.shopify.com--tokens.md:45-52` | 标题取 `24px`，卡片标题 `16px`，正文 `14px`/`13px` |
| 行高体系 | `16px` / `20px` / `24px` / `28px` / `32px` | `content/tokens/polaris.shopify.com--tokens.md:57` | 原文对应 `--p-font-line-height-*` 阶梯 |
| 字重 | `450` / `550` / `650` / `700` | `content/tokens/polaris.shopify.com--tokens.md:59` | 正文 450，强调/按钮 650，标题 700 |
| 间距尺度 | `4px` / `8px` / `12px` / `16px` / `20px` / `24px` | `content/tokens/polaris.shopify.com--tokens.md:67-73` | 统一落于 Polaris 空间变量 |
| 圆角体系 | `4px` / `8px` / `12px` | `content/tokens/polaris.shopify.com--tokens.md:84-87` | 卡片 `12px`，按钮与控件 `8px`，微型标签 `4px` |
| 阴影层级 | `0 1px 0 0` / `0 8px 16px -4px` | `content/tokens/polaris.shopify.com--tokens.md:112,114` | 卡片轻底线影，弹窗强层次影 |
| 动效时长与曲线 | `200ms` | `content/tokens/polaris.shopify.com--tokens.md:100,106` | `cubic-bezier(0.25, 0.1, 0.25, 1)` |
| 缺口记录 | 播放器黑底 / 触控高 `44px` | derived | Polaris 官方不支持暗色播放器画布，播放器容器按局部暗块处理且所有文本均保 >= 4.5:1 |

## 4. 外壳与避重

- **nav = N12（可收起公告条 + Polaris 深色顶栏）**：保留 Polaris `#303030`（`content/tokens/polaris.shopify.com--tokens.md:31`）与 `#1A1A1A`（`content/tokens/polaris.shopify.com--tokens.md:32`）深色顶栏，上方配一条 `#005BD3`（`content/tokens/polaris.shopify.com--tokens.md:25`）试听与 ¥299/¥39 口径公告条，支持向下滚动自动收起、上滑复现及点击 `×` 内存态关闭不留白。
- **footer = Ft1（词标标语页脚）**：采用 `<footer class="foot-mast">` 纵向排布词标 `CourseDeck 课栈`、课程简介标语与站内锚点/演示口径，避免与同批站复用 `foot-in` 横栏。
- **移动折叠**：640px 以下隐藏续学条 `.p-resume-banner` 保留主行动按钮，公告条自动折行、关闭按钮固定右侧 `32×32` 可达。
- **页底与侧栏分级**：全局 `body` 改为纯白 `#FFFFFF`（`content/tokens/polaris.shopify.com--tokens.md:29`），仅右侧大纲/进度/买断侧栏卡片采用 Polaris 次级表面 `#F7F7F7`（`content/tokens/polaris.shopify.com--tokens.md:30`），主播放器工作台保持纯白。
