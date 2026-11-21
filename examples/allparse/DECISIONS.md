# ALLParse（万析）· 取值记录

- 需求：`briefs/allparse.md`（9 平台短视频与图文无水印提取：免登录日 5 条、登录日 20 条、<=500MB/<=30m、3-8s 耗时、2h 直链、9 图图集结果、4 类失败提示与使用条款）
- 数值文章：**Spectrum**（Adobe），选型行 `project-spectrum`
- frame: nav=N9; footer=Ft4; base=#ffffff
- 交付：`examples/allparse/index.html`（单文件，CSS 与 JS 内联，零外部请求）

---

## 1. 选型理由与触觉物件结构

- ALLParse 是典型的「创作者视频与图文媒体物料解析工具」，视觉重心是**输入框直达 + 媒体解封装容器图解 + 视频/9图原画预览画布 + 清晰格式规格**，与 Adobe Spectrum 的创意媒体工具属性高度吻合，故落选 `project-spectrum`。
- 同时采用「左侧极简大输入框直达 + 右侧具象媒体分层流水图与动态 4.2s/2h 徽标」的工具流结构，避开千篇一律的通用三卡营销页。

## 2. 色彩与实测对比度

| 用途 | 值 | 出处 | 实测对比度 |
| --- | --- | --- | --- |
| 全局画布浅灰底 | `#F8F8F8` | `content/tokens/spectrum.adobe.com--tokens.md:27` | 正文 `#222222` 压它 **15.10:1** |
| 正文主色 | `#222222` | `content/tokens/spectrum.adobe.com--tokens.md:23` | 白卡压它 **15.93:1** |
| 标题深黑 | `#000000` | `content/tokens/spectrum.adobe.com--tokens.md:24` | 白底 **21.00:1** |
| 次要标签 / 元数据 | `#464646` | `content/tokens/spectrum.adobe.com--tokens.md:25` | 白底 **9.48:1**，浅灰 **8.99:1** |
| 卡片与控件纯白表面 | `#FFFFFF` | `content/color/tdesign.tencent.com--color.md:93` | Spectrum token 只给了画布 `#F8F8F8`，按 GAP_RULES 回源纯白卡片底 |
| 输入框与默认描边 | `#909090` | `content/tokens/spectrum.adobe.com--tokens.md:28` | 白底 **3.22:1**（满足 >= 3:1 控件边界） |
| 浅结构分隔线 | `#E6E6E6` | `content/tokens/spectrum.adobe.com--tokens.md:29` | 卡片内发丝分割 |
| 焦点边框蓝 | `#147AF3` | `content/tokens/spectrum.adobe.com--tokens.md:30` | 焦点 2px 外环与流线装饰 |
| 主操作按钮 / 选中文字蓝 | `#0054B6` | `content/tokens/spectrum.adobe.com--tokens.md:31` | 配白字 **7.39:1**（替代 `#147AF3` 浅蓝防对比度不足） |
| 错误警示红 | `#D31510` | `content/tokens/spectrum.adobe.com--tokens.md:32` | 压浅红底 **4.56:1** |
| 解析成功绿 | `#007A4D` | `content/tokens/spectrum.adobe.com--tokens.md:33` | 压浅绿底 **4.68:1** |

## 3. 字阶、间距、圆角、动效与派生项

| 维度 | 取值 | 出处 | 说明 |
| --- | --- | --- | --- |
| 字阶大小 | `12px` / `14px` / `15px` / `16px` / `18px` / `20px` / `28px` / `40px` | `content/tokens/spectrum.adobe.com--tokens.md:41-52` | 中文正文行高取约 1.5 到 1.6 倍 |
| 间距尺度 | `4px` / `8px` / `16px` / `24px` / `32px` / `40px` | `content/tokens/spectrum.adobe.com--tokens.md:60-66` | 卡片内距 24px，网格槽距 12/16px |
| 圆角体系 | `4px` / `8px` / `16px` | `content/tokens/spectrum.adobe.com--tokens.md:76-78` | 输入框 8px，微型徽标 4px，主图框 16px |
| 单行控件高度基准 | `32px` | `content/tokens/spectrum.adobe.com--tokens.md:79` | 示例胶囊取 32px，主按钮与输入放大到 `44px` |
| 动效时长与曲线 | `220ms` | `content/tokens/spectrum.adobe.com--tokens.md:90,96` | `ease-out` `cubic-bezier(0, 0, 0.4, 1)` |
| 浅底柔和透明衍生 | `rgba(...)` | derived（GAP_RULES 兜底） | 控制透明度保证前景色对比度 >= 4.5:1 |

## 4. 外壳与避重

- **nav = N9（极简两极顶栏）**：左置 `ALLParse 万析` 词标，右置单一行动按钮「登录领每日 20 条（演示）」，中间大面积留白不塞链接行；原有的每日额度胶囊与「9 平台清单 / 合规条款」锚点移入 Hero 区元信息行与下方说明行，避免与同批站点的 N1b/N12/N13 顶栏撞型。
- **footer = Ft4（密集等宽版式）**：采用 `<footer class="foot-dense mono">` 单块等宽排版收束支持平台数、每日额度、文件上限、2 小时直链时效与「本地演示数据，不连接真实解析后端」口径，配站内跳转锚点，替换旧版统一 `foot-in` 链接栏。
- **移动折叠**：420px 以下顶栏词标与按钮允许自动折行并维持 `44px` 触控高度，320px 零横向溢出。
- **页底与带色取值**：全局 `body` 改为纯白 `#FFFFFF`（`content/color/tdesign.tencent.com--color.md:93` 回源白底），Hero 区铺一条 Spectrum 焦点蓝 `#147AF3`（`content/tokens/spectrum.adobe.com--tokens.md:30`）衍生 8% 透明浅色带（混合后约 `#ecf4fe`，正文 `#222222` 与次要文字 `#464646` 对比度均大于 8:1），页脚底取 Spectrum `#F8F8F8`（`content/tokens/spectrum.adobe.com--tokens.md:27`）与 `#E6E6E6`（`content/tokens/spectrum.adobe.com--tokens.md:29`）顶线分隔。
