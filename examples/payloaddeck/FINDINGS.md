# FINDINGS · PayloadDeck

## 1. 合格线落点

浏览器实测，session `payloaddeck`，本地 `file://` 直开，1280 / 768 / 375 / 320 四档用 CDP 设备指标覆盖，量的是 `document.documentElement`。

| 项 | 门槛 | 320 | 375 | 768 | 1280 | 判定 |
| --- | --- | --- | --- | --- | --- | --- |
| `scrollWidth` / `clientWidth` | 相等 | 320 / 320 | 375 / 375 | 768 / 768 | 1280 / 1280 | 过（0px 溢出） |
| 外部资源 | 0 | 0 | 0 | 0 | 0 | 过（`performance.getEntriesByType('resource').length`） |
| 行高 = 字号 + 8 | 全过 | 215 / 215 | 215 / 215 | 225 / 225 | 225 / 225 | 过（0 违例，215–225 个含直接文本节点） |
| 代码块行高 = 1.5× | 全过 | 41 / 41 | 41 / 41 | 41 / 41 | 41 / 41 | 过（0 违例，均为 21px） |
| 12px 文本占比 | ≤ 30% | 38 / 256 = 14.8% | 38 / 256 = 14.8% | 48 / 266 = 18.0% | 48 / 266 = 18.0% | 过 |
| 最小文本对比度 | ≥ 4.5:1 | 4.83 | 4.83 | 4.83 | 4.83 | 过（`#ca3535` 压 `#f4f8fb`） |

分母口径：`body` 下所有含非空直接文本的节点，排除 `script` / `style` / `svg` / visually-hidden / `display:none` 的隐藏面板（隐藏的标签页面板不计入，切到前台才计）。

对比度口径：每个文本节点的前景色与其背景色（沿祖先链逐层做 alpha 合成，直到遇到不透明层）按 WCAG 相对亮度公式换算。全站最低值出现在结果表与错误卡里的红色文字，5.16（白底）与 4.83（淡底）。

逐档色值实测：

| 前景 | 背景 | 比值 |
| --- | --- | --- |
| `#0b0c0c` | `#ffffff` | 19.59 |
| `#0b0c0c` | `#f4f8fb` | 18.34 |
| `#484949` | `#ffffff` | 9.03 |
| `#484949` | `#f4f8fb` | 8.46 |
| `#1d70b8` | `#ffffff` | 5.17 |
| `#1d70b8` | `#f4f8fb` | 4.84 |
| `#0f385c` | `#ffffff` | 12.07 |
| `#ffffff` | `#1d70b8` | 5.17 |
| `#0f7a52` | `#f4f8fb` | 5.01 |
| `#ca3535` | `#ffffff` | 5.16 |
| `#ca3535` | `#f4f8fb` | 4.83（全站最低） |
| `#0b0c0c` | `#d2e2f1` | 14.82 |

页面体积 36,375 字节（单文件，CSS / JS / SVG 全内联）。1280 下文档高 3,980px。

## 2. 数值缺口（基准规范缺、按 GAP 回源的）

| 维度 | Primer 给到什么 | 回源 | 取的值 |
| --- | --- | --- | --- |
| 色值 | 只有语义角色与 token 名，明确不给 hex（`content/color/primer.style--color.md:67` `:170`） | GOV.UK 调色板（`content/color/govuk--colour.md`） | 整套 12 个值，见 DECISIONS §3；语义角色→值的映射标 derived |
| 字号 | 只给 rem、unitless 行高、4px 网格的原则（`content/type/primer.style--typography.md:29`），无档点 | GOV.UK type scale | 36 / 27 / 19 / 16（`:68` `:76` `:92` `:100`） |
| 间距 | 无 spacing scale，只有 content padding 16 / 24（`content/layout/primer.style--layout.md:111-118`） | Atlassian 8px 基数 | 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64（`content/layout/atlassian.design--spacing.md:70` 起） |
| 断点 | 有，320 / 544 / 768 / 1012 / 1280 / 1400（`content/layout/primer.style--layout.md:96-103`） | 直接用 | 取 544 / 768 / 1012 |
| 容器宽 | 1280 上限（`content/layout/primer.style--layout.md:225`） | 直接用 | 1280，padding 16（<1012）/ 24（≥1012） |
| 行长 | 建议 ≤80 字符（`content/type/primer.style--typography.md:67`），无具体 measure | GAP 正文行长条 | 58ch（落在 60–75 字符区间内），标 derived |
| 触控目标 | AA 24px，建议 AAA 44px（`content/layout/primer.style--responsive.md:54`） | 直接用 + 派生 | 标签页与按钮 28–32px，标 derived |

## 3. 新缺口（库内无对应原文，成套派生）

以下 7 项库里没有任何一篇给出数值，按 GAP 兜底成套自定，全站只此一套，不逐处随手取：

1. **行高 = 字号 + 8。** 批次硬规则，与 GOV.UK 的字号/行高配对（19/25 给 +6）冲突，听批次规则。代价：36px 的 h1 只有 44px 行高（1.22 倍），大标题偏紧，单行标题看不出，两行标题（本站 h1 强制两行）行间比常规排版紧一档。
2. **代码块行高 1.5×（14/21）。** 行业惯例，标 derived。21 不在 4px 网格上，与 Primer 的网格原则（`content/type/primer.style--typography.md:29`）不严格一致；换来的是等宽块的可扫读性。
3. **圆角 4 / 8 两档。** 无原文。
4. **发丝线 1px。** 无原文。装饰分隔 `#cecece`（1.47:1，只做分隔不承担边界），控件边界用 `#0b0c0c`。
5. **焦点环 2px 实线 + 2px 偏移，`#0b0c0c`。** 没用 GOV.UK 的黄色焦点底 `#ffdd00`：黄压白底只有 1.3:1，不满足非文本 3:1，改用高对比黑环。
6. **组件尺寸。** 标签页高 28px、Copy 32px、方法 chip 20px、表格行 44–50px。Primer 不给组件尺寸，成套自定。
7. **插图的几何参数。** 首屏内联 SVG 的框高、箭头、字号（12 / 11.5）自定，标 derived；构图原则照响应结构本身，不引外部图。

## 4. 已知局限

1. **只做浅色。** Primer 的 color 篇要求 light / dark 双模式（`content/color/primer.style--color.md:31`），本案例只交付浅色一套 token。深色要另一套语义映射并对每个 text/background 组合复算对比度，不属于本次范围，未做。
2. **示例数据是虚构的。** `api.payloaddeck.dev` 与所有响应、耗时、行数是产品设定的示例，不是真实测量。页面上写死的 `200 · 24 ms`、`207 · 1 unparsed` 是示意值。
3. **12px 占比随视口变化。** 320/375 是 14.8%，768/1280 是 18.0%：小屏时记录行堆叠，类型标签被 `display:none` 隐藏，分母也小。同一份内容在两档宽度下分子分母都不同，报数时要带视口。
4. **`preview.png` 只覆盖首屏。** 1280×800，滚动后的四个区块没有成品图，视觉验收需要打开 `index.html`。
5. **动效只有两处**（导航光标 1.05s、页脚标语条 38s），`prefers-reduced-motion: reduce` 下全部停掉，此时标语条静止在第一帧，靠两端遮罩淡出收边。没有做滚动进场、没有做过渡曲线（因此 motion 的回源文章只用于「有没有必要」的裁决，时长没进 token）。
6. **剪贴板依赖浏览器权限。** `navigator.clipboard` 不可用时退到 `execCommand('copy')`，再不行会静默失败但按钮状态仍会回退；无 JS 时 Copy 按钮无效，代码本身仍可手选。
7. **12px 元数据与 14px 等宽的分工是设计判断。** 库内没有任何一篇给「元数据字号」，12px 的下限来自 TDesign 的桌面端最小字号（`content/type/tdesign.tencent.com--fonts.md:44`），本次只在纯元数据上用，未用于任何成句文本。
