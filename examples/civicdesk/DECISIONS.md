# CivicDesk 决策记录（第三轮，2026-11-15 夜）

基准规范：TDesign（单基准，数值不跨源拼）。需求见 `briefs/civicdesk.md`。上一轮 r2 是 88 分，这一轮按新提示词补版面与验收。

## 选件与去重

动手前读 `.hallmark/log.json`：上一站 PickBin 是 Narrative Workflow / N9 / Ft2，CivicDesk 旧版是 Service Chain / 自定 / Ft2，SwimBoard 是 Workbench 05 / N13 / Ft4。

- 宏观结构：Long Document，跟这三站都不同。
- 导航：N3 左缘竖条，前三站是 N9、自定、N13，不撞。
- 页脚：Ft1，前三站是 Ft2、Ft2、Ft4，不撞。
- 主题：Cyan7，最近三站是 Green7、Blue7、Orange7。

## 结构

- 单列文档，1200 以上拆成正文列加页边批注列：正文 36rem，批注 11rem，批注列 sticky，右侧不再留整屏空白。
- 材料区加一张内联 SVG 示例，标出窗口要对照的三处：姓名、编号、医院章。
- 办理条件之后加服务点表，三行地址与受理时间。
- 页脚写全四件：主办单位、服务点地址、热线、演示声明。

## 数值出处

| 用途 | 值 | 出处 |
| --- | --- | --- |
| 正文 | `#181818` | `content/color/tdesign.tencent.com--color.md:108` |
| 次要文字 | `#5e5e5e` | `content/color/tdesign.tencent.com--color.md:103` |
| 分隔线 | `#e8e8e8` | `content/color/tdesign.tencent.com--color.md:97` |
| 分区底 | `#f3f3f3` | `content/color/tdesign.tencent.com--color.md:95` |
| 页面底 | `#ffffff` | `content/color/tdesign.tencent.com--color.md:93` |
| 输入框边界 | `#8b8b8b` | `content/color/tdesign.tencent.com--color.md:101` |
| 主色 | `#00668e` | `content/color/tdesign.tencent.com--color.md:186` |
| 主色悬停 | `#004e6d` | `content/color/tdesign.tencent.com--color.md:187` |
| 主色浅底 | `#e8f5ff` | `content/color/tdesign.tencent.com--color.md:180` |
| 错误 | `#ad352f` | `content/color/tdesign.tencent.com--color.md:60` |
| 成功 | `#006c45` | `content/color/tdesign.tencent.com--color.md:84` |
| 字号 | `12px` 到 `36px` | `content/type/tdesign.tencent.com--fonts.md:53` 到 `content/type/tdesign.tencent.com--fonts.md:59` |
| 行高 | 字号加 `8` | `content/type/tdesign.tencent.com--fonts.md:69` |
| 字重 | `400` 与 `600` | `content/type/tdesign.tencent.com--fonts.md:87` |
| 网格基数 | `8px` | `content/layout/tdesign.tencent.com--layout.md:78` |
| 槽 | `16px` | `content/layout/tdesign.tencent.com--layout.md:92` |
| 安全边距 | `24px` | `content/layout/tdesign.tencent.com--layout.md:96` |
| 间距档 | 按 `8` 的倍数，另加 `4` 与 `12` 两档 | `content/layout/tdesign.tencent.com--layout.md:138` |
| 断点 | `768px` 到 `1200px` | `content/layout/tdesign.tencent.com--layout.md:156` 到 `content/layout/tdesign.tencent.com--layout.md:158` |
| 动效 | `200ms` 与 `240ms` | `content/motion/tdesign.tencent.com--motion.md:101` 到 `content/motion/tdesign.tencent.com--motion.md:102` |

派生两项，已标注：圆角 `4px`（整站一档），行长 36rem（14px 下约 41 字，落在中文 35 到 45 字）。

## 这一轮补的四件

1. 页边批注列：1200 以上出现的右侧承载物，四条要点，sticky。窄屏隐藏，四条在主文里都有，不丢信息。
2. 材料示例 SVG：三处虚线框加编号，说明窗口只看这三处，不用装饰插画。
3. 服务点表：地址与受理时间，可执行，不是罗列。
4. 页脚四件：主办、服务点、热线、演示声明。

## 复验改掉的两处

1. 行高：`figcaption` 与表格 `caption` 沿用父级 22px，改成按字号加 8；SVG 里的 `text` 同理。
2. 首屏块数从三块变成两块（材料区加了示例图，把办理条件顶下去），仍在上限三个以内，未改结构。

## 缺口与派生

- 缺口 1：TDesign 原文没给页边批注列的宽度与列间距离。按 8px 基数派生 11rem 与 32px，标 derived。
- 缺口 2：材料示例图的尺寸与描边。原文只有图片链接，没有可取值；按 1px 描边 `#e8e8e8`、圆角 4px 画，标 derived。
- 缺口 3：打印样式。基准规范未覆盖，按 A4 纸面常见做法写：11pt 正文、隐藏导航与批注、区块不跨页，标 derived。
- 例外：受理号格式 `CD-年份-四位` 是产品自定，不是设计取值，不进取值记录。
