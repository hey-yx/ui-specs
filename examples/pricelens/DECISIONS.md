# PriceLens · 取值记录

- 需求：`briefs/pricelens.md`（大模型 API 价格比价站：18 家服务商、42 个模型、旗舰/主力/轻量同档横向比、每日 09:00 抓取、1 USD = 7.2 CNY 换算与来源核对）
- 数值文章：**Polaris**（Shopify），选型行 `project-polaris`
- frame: batch=2026-11-21-b; nav=N12; footer=Ft1; base=#f7f7f7
- 交付：`examples/pricelens/index.html`（单文件，CSS 与 JS 内联，零外部请求）

---

## 1. 选型理由与 Shopify Polaris IndexTable 索引语法

- PriceLens 的本质是「42 个模型 SKU × 18 家服务商的多条件分档索引、多行勾选横向对比、调价前后核对」，与 Shopify Polaris `IndexTable` + `IndexFilters` 组件心智高度吻合，因此选用 `project-polaris` 替代此前与招聘板趋同的旧皮肤。
- 彻底去掉前稿堆砌在表格上方的 3 枚大框 + 8 枚调价芯片 + 18 枚方块服务商胶囊，全部收敛到 Polaris `#FFFFFF` 圆角 `12px` 抬高索引卡顶部的单一工具条中，让 `1280×800` 首屏在 `y = 210px` 起直接呈现 10 条真实同档报价。

## 2. 色彩与实测对比度（Polaris Core Tokens）

| 用途 | 值 | 出处 | 实测对比度 |
| --- | --- | --- | --- |
| 主页面浅灰画布（`--p-color-bg-surface-secondary`） | `#f7f7f7` | `content/tokens/polaris.shopify.com--tokens.md:30` | 主文字 `#303030` 压它 **12.24:1** |
| 索引表纯白表面（`--p-color-bg-surface`） | `#ffffff` | `content/tokens/polaris.shopify.com--tokens.md:29` | 主文字压它 **13.10:1** |
| 正文主文字与深色顶栏底色 | `#303030` | `content/tokens/polaris.shopify.com--tokens.md:23,31` | 白字压 `#303030` **13.10:1** |
| 深色悬停（`--p-color-bg-fill-brand-hover`） | `#1a1a1a` | `content/tokens/polaris.shopify.com--tokens.md:32` | 白字 **17.40:1** |
| 次要文字（`--p-color-text-secondary`） | `#616161` | `content/tokens/polaris.shopify.com--tokens.md:24` | 白底 **6.20:1**，浅灰 **5.79:1** |
| 公告条 / 来源链接 / 焦点蓝 | `#005bd3` | `content/tokens/polaris.shopify.com--tokens.md:25,35` | 白字压它 **6.26:1** |
| 降价绿 / 涨价黄 / 报错红文字与边界 | `#014b40` / `#4f4700` / `#8e0b21` | `content/tokens/polaris.shopify.com--tokens.md:26-28,36-38` | 对应浅底均 >= **6.25:1** |
| 默认边框与悬停边框 | `#e3e3e3` / `#cccccc` | `content/tokens/polaris.shopify.com--tokens.md:33-34` | Polaris 清晰表格分隔线 |

## 3. 字阶、间距、圆角、阴影与派生项

| 维度 | 取值 | 出处 | 说明 |
| --- | --- | --- | --- |
| 字阶大小 | `12px` / `13px` / `14px` / `15px` / `20px` | `content/tokens/polaris.shopify.com--tokens.md:45-50` | 表格 `13px`，标题 `20px` |
| 行高体系 | `16px` / `20px` / `24px` / `28px` | `content/tokens/polaris.shopify.com--tokens.md:57` | 对齐 `--p-font-line-height-*` |
| 字重 | `450` / `550` / `650` / `700` | `content/tokens/polaris.shopify.com--tokens.md:59` | 正文 450，控件 550/650，标题 700 |
| 间距尺度 | `4px` / `8px` / `12px` / `16px` / `24px` | `content/tokens/polaris.shopify.com--tokens.md:67-73` | 统一落于 Polaris 空间变量 |
| 圆角体系与阴影 | `4px` / `8px` / `12px` · `0 1px 0 0` / `0 8px 16px -4px` | `content/tokens/polaris.shopify.com--tokens.md:84-87,112,114` | 索引卡 `12px` 配轻底线影 |
| 动效时长与缓动 | `200ms` / `cubic-bezier(0.25, 0.1, 0.25, 1)` | `content/tokens/polaris.shopify.com--tokens.md:100,106` | — |
| 桌面/移动控件高度 | `32px` / `44px` | derived（桌面 `32px` 满足 `>=24px` 下限，`<768px` 抬高至 `44px`） | — |

## 4. 外壳与避重

- **batch = `2026-11-21-b` · nav = `N12` · footer = `Ft1` · base = `#f7f7f7`**：顶栏用可收起 `#005bd3` 09:00 调价公告条 + `#303030` 工具条，页脚用 `<footer class="pl-polaris-foot">` 单行词标结构，批内唯一、全库页脚骨架唯一。
