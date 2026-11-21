# ProbeShelf · 取值记录

- 需求：`briefs/probeshelf.md`（高校科研仪器与中试产线共享索引：电镜、示波器、高低温箱、SMT 贴片线四类 16 台、6 城筛选、最快档期置顶、多台对比与新机台登记）
- 数值文章：**Spectrum**（Adobe），选型行 `project-spectrum`
- frame: batch=2026-11-21-b; nav=N9; footer=Ft6; base=#ffffff
- 交付：`examples/probeshelf/index.html`（单文件，CSS 与 JS 内联，零外部请求）

---

## 1. 选型理由与科研工程工作台语法

- ProbeShelf 面向需要高精度实验仪器与中试打样参数对表的研发工程师与高校实验员，强调精密参数对照、`32px` 紧凑筛选与高可扫视密度，与 Adobe Spectrum 的理性工程层级（`#000000`/`#222222`/`#464646` 清晰字阶、`#0054B6` 选中态、`#007A4D` 可加急状态、`32px` `--spectrum-alias-single-line-height`）高度同构，因此改用 `project-spectrum` 替代此前与 `RoleRail` 撞车的旧版 `job-index` 套壳。
- 首屏取消占屏宣传大字，直接以 `N9` 极简顶栏 + `44px` 粘性四维过滤带 + 左列 16 台仪器名录与右列 `#F8F8F8` 在库档期分布直出，1280×800 首屏即可同时完成筛选与多机台下单对比。

## 2. 色彩与实测对比度（Adobe Spectrum Tokens）

| 用途 | 值 | 出处 | 实测对比度 |
| --- | --- | --- | --- |
| 主页面与列表画布 | `#ffffff` | derived（Spectrum 浅色层亮白纸面，配 `#F8F8F8` 右栏分级） | `#222222` 压它 **15.9:1** |
| 右栏快览与筛选工控带底色 | `#f8f8f8` | `content/tokens/spectrum.adobe.com--tokens.md:27` | `#222222` 压它 **15.0:1** |
| 标题字色（`--spectrum-alias-heading-text-color`） | `#000000` | `content/tokens/spectrum.adobe.com--tokens.md:24` | 白底 **21.0:1** |
| 正文字色（`--spectrum-alias-text-color`） | `#222222` | `content/tokens/spectrum.adobe.com--tokens.md:23` | 白底 **15.9:1** |
| 次要说明字色（`--spectrum-alias-label-text-color`） | `#464646` | `content/tokens/spectrum.adobe.com--tokens.md:25` | 白底 **9.45:1**，浅灰 **8.91:1** |
| 控件默认边框与浅分隔线 | `#909090` / `#e6e6e6` | `content/tokens/spectrum.adobe.com--tokens.md:28-29` | 非文本边界清晰 |
| 主操作与选中强调蓝 | `#0054b6` | `content/tokens/spectrum.adobe.com--tokens.md:31` | 白底 **7.52:1**，配白字 **7.52:1** |
| 焦点边框蓝 | `#147af3` | `content/tokens/spectrum.adobe.com--tokens.md:30` | 2px 清晰焦点环 |
| 可加急成功绿与报错红 | `#007a4d` / `#d31510` | `content/tokens/spectrum.adobe.com--tokens.md:32-33` | 对应浅底上均 >= **4.75:1** |
| 浅蓝/浅绿/浅红状态柔和底 | `#eef5fc` / `#eaf7f1` / `#fdf1f1` | derived（由对应前景色高明度派生） | 严格维持前景 >= 4.5:1 |

## 3. 字阶、间距、控件高度、圆角与动效

| 维度 | 取值 | 出处 | 说明 |
| --- | --- | --- | --- |
| 字阶大小与行高 | `11px` / `12px` / `14px` / `15px` / `16px` / `18px` / `20px` | `content/tokens/spectrum.adobe.com--tokens.md:40-46` | 正文行高 `1.5`，标题 `1.3`（`:54`） |
| 间距尺度 | `4px` / `8px` / `16px` / `24px` / `32px` / `48px` | `content/tokens/spectrum.adobe.com--tokens.md:61-67` | 严格落于 Spectrum dimension scale |
| 圆角与桌面控件高度 | `2px` / `4px` / `8px` · `32px` | `content/tokens/spectrum.adobe.com--tokens.md:75-79` | 桌面按钮/输入统一 `32px`，`<768px` 扩至 `44px` |
| 动效时长与缓动 | `130ms` / `190ms` / `cubic-bezier(0,0,0.4,1)` | `content/tokens/spectrum.adobe.com--tokens.md:87,89,96` | — |

## 4. 外壳与避重

- **batch = `2026-11-21-b` · nav = `N9` · footer = `Ft6` · base = `#ffffff`**：与同批 `allparse-console`（`N8`/`Ft4`）、`chillgauge`（`N13`/`Ft2`）、`pricelens`（`N12`/`Ft1`）形成完整批内 4 选型 × 4 外壳分化；页脚 `<footer class="ps-lab-colophon">` 全库骨架唯一。
