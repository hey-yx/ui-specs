# ChillGauge · 取值记录

- 需求：`briefs/chillgauge.md`（生鲜冷链物流温控调度中台：三大温区、04:00 断口混合图表、五大区域仓下钻与 12 条车次处置）
- 数值文章：**Carbon**（IBM），选型行 `project-carbon`
- frame: batch=2026-11-21-b; nav=N13; footer=Ft2; base=#ffffff
- 交付：`examples/chillgauge/index.html`（单文件，CSS 与 JS 内联，零外部请求）

---

## 1. 选型理由与 Carbon UI Shell + 齐平数据台语法

- 冷链调度员需要在首屏同时看完 4 项全局指标、04:00 断口走势、区域仓占比以及首批待处置超温车次，与 IBM Carbon 的 48px `#161616` Global UI Shell + Inline Notification + 齐平 `1px` 分割数据带 + `0px` DataTable 高度同构，因此采用 `project-carbon`。
- 彻底去掉前稿臃肿的左竖条旋转边框与灰白双层嵌套方盒，参考同源 `gatewaydeck` 的 Carbon 齐平指标带、平滑面积折线与紧凑横向占比条，把 `车次异常明细表` 直接推进 `1280×800` 首屏视线。

## 2. 色彩与实测对比度

| 用途 | 值 | 出处 | 实测对比度 |
| --- | --- | --- | --- |
| 全局背景（Carbon White） | `#ffffff` | `content/color/carbondesignsystem.com--color.md:128` | 主文字压它 **18.12:1** |
| 工具条 / 次级层（Carbon Gray 10） | `#f4f4f4` | `content/color/carbondesignsystem.com--color.md:129` | 主文字压它 **16.46:1** |
| Global Header / 主文字（Gray 100） | `#161616` | `content/color/carbondesignsystem.com--color.md:131` | 白字压它 **18.12:1** |
| 顶栏悬停 / 搜索框（Gray 90） | `#262626` | `content/color/carbondesignsystem.com--color.md:130` | 白字压它 **15.16:1** |
| 主操作蓝与悬停（TDesign Blue7 / Blue8） | `#0052d9` / `#003cab` | `content/color/tdesign.tencent.com--color.md:48-49` | 配白字 **6.54:1** / **10.02:1** |
| 选中浅蓝底（TDesign Blue1） | `#f2f3ff` | `content/color/tdesign.tencent.com--color.md:42` | 压 `#0052d9` **6.02:1** |
| 达标绿 / 警告橙 / 超温红与浅底 | `#006c45` / `#954500` / `#ad352f` | `content/color/tdesign.tencent.com--color.md:54,66,84` | 浅底上 >= **5.69:1** |
| 次要文本与分隔线（Gray9 / Gray3-4） | `#5e5e5e` / `#e8e8e8` / `#dddddd` | `content/color/tdesign.tencent.com--color.md:97-98,103` | `#5e5e5e` 压白底 **6.48:1** |

## 3. 字阶、间距、动效与派生项

| 维度 | 取值 | 出处 | 说明 |
| --- | --- | --- | --- |
| 间距尺度 | `$spacing-02` = 4 到 `$spacing-06` = 24 | `content/layout/carbondesignsystem.com--spacing.md:47-51` | 严格采用 Carbon spacing |
| 动效时长与缓动 | `110ms` / `150ms` | `content/motion/carbondesignsystem.com--motion.md:195-196` | productive 缓动见 `:161` |
| 回源字阶 | `12px` / `14px` / `24px` / `28px` | `content/type/tdesign.tencent.com--fonts.md:53-58` | 按 GAP_RULES「字阶」回源 |
| 字体栈、0px 直角与控件高度 | `IBM Plex Sans` / `0px` / `32px` / `44px` | derived（桌面 `32px` 满足 `>=24px` 下限，`<768px` 抬高至 `44px`） | — |

## 4. 外壳与避重

- **batch = `2026-11-21-b` · nav = `N13` · footer = `Ft2` · base = `#ffffff`**：采用 Carbon 48px Global Header 嵌入栏内检索框，页脚采用 `<footer class="cg-shift-foot">` 与同批次及全库其余站点区分。
