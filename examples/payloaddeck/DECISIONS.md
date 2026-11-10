# DECISIONS · PayloadDeck

## 0. 一句话

日志解析 API 的开发者文档站。产品语境 = 开发者工具，基准规范 = Primer（`site/dist/ai/guide.md:25`）。版式三件按批次调度表执行：Component Playground + N8 + Ft8，强调色 GOV.UK `#1d70b8`（标 derived）。

## 1. 设计前提

需求只有 8 行（`briefs/payloaddeck.md`）：英文、开发者文档、日志解析 API、给要在半小时内接入的后端与平台工程师、技术说明口吻、第二人称、祈使句、不寒暄。

由需求推出的四条页面纪律：

1. **首屏不放主张，放一个能跑的请求。** 标题两句，一句给动作一句给结果（"Send one log line." / "Get a typed record back."），下面立刻是 playground 的第一块，800px 高度内能看到响应面板的字段表。
2. **每个区块 = 一个预览 + 一段可复制代码。** 预览是真实形状的响应（记录视图 / 结果表 / 终端回显 / 错误卡），代码是同一件事的请求。区块按「发送 → 查询 → 处理坏行 → 命令行验证 → 三十分钟路径 → 字段表」排，读者可以只读第 1、6 节就走。
3. **页面上的数字要能对上。** 表头写 `4 rows` 就真的四行，查询条件与结果行一致，错误码 `E_FORMAT_UNPARSED` 与 `unparsed[].reason` 说明一致。示例之间不打架（见 §8 第 5 条）。
4. **单文件、零外部请求。** 字体走系统栈（`content/type/primer.style--typography.md:53`），图形是内联 SVG，实测 `performance.getEntriesByType('resource').length === 0`。

## 2. 版式三件与理由

| 层 | 件 | 落点 | 理由 |
| --- | --- | --- | --- |
| 宏观结构 | **21 · Component Playground** | 全页 | 读者是来查的，不是来被说服的（`briefs/layouts.md:13`）。页面主体是四个「预览 + 代码」块，代码块与预览块本身就是内容；每个代码块带 Copy。 |
| 导航 | **N8 · 仿命令行提示符** | 页头 | 产品是 `/v1/parse` 这种 API，页面本身就是终端语境，`>` 与 flag 不是装饰（N8 的反模式正是把终端词汇用在非开发者站上）。左 `>payloaddeck`，右 `--parse --query --cli --fields`，光标 ▮ 只出现在这里。 |
| 页脚 | **Ft8 · 横向滚动重复标语条** | 页脚 | 品牌面收尾。`PARSE · NORMALISE · QUERY · SHIP` 重复条 + 两端遮罩淡出，`prefers-reduced-motion` 下停动。 |

### 偏离记录（三处，均记录不换件）

1. **Ft8 上方加了一行站内链接。** 原件的页脚只有滚动条 + visually-hidden 文本，文档站照抄会让页脚变成死路。标语条仍是页脚主体与页面最后一个元素，上面加一行 12px 的 `Quickstart · Errors · Reference · MIT licensed`。加的是行，不是件。
2. **版式件的 "Image: none" 与 brief 的「内联 SVG 画响应示意」并存。** 全页只有一张图：首屏右侧 `checkout.log → /v1/parse → record` 的三层示意图，纯内联 SVG、无外部请求，承担「一行日志怎么变成一条记录」的解释。除此之外不放插图，预览块就是图像。
3. **没有 hero。** GAP 的「首屏占比」兜底要求 hero 控制在一屏 85% 左右让下一节露头；本站开篇段（含示意图）290px，1280×800 下占 36%，第一个 playground 的响应面板在折叠线内露出 233px。目的相同（下一节必须露头），实现方式按文档站改成「开篇不占屏」。

## 3. 色彩表

Primer 只给语义角色不给 hex：`accent` = links / selected / active / focus（`content/color/primer.style--color.md:170`），base token 明确不许直接用（同上 `:67`）。按 GAP「色值」条回源 GOV.UK 调色板整套取值，**不混搭**：语义角色映射是 derived，hex 是 GOV.UK 原文值。

| 语义角色（Primer） | token | 值 | 出处 | 用处 | 实测对比度 |
| --- | --- | --- | --- | --- | --- |
| fgColor-default | `--ink` | `#0b0c0c` | `content/color/govuk--colour.md:44` | 正文、标题、代码 | 19.59 白底 / 18.34 淡底 |
| fgColor-muted | `--ink-2` | `#484949` | `content/color/govuk--colour.md:48` | 元数据、类型标签、注释 | 9.03 / 8.46 |
| bgColor-default | `--paper` | `#ffffff` | `content/color/govuk--colour.md:94` | 页面底、面板底 | — |
| bgColor-inset | `--tint` | `#f4f8fb` | `content/color/govuk--colour.md:88`（同 `:144` surface-background / `:204` blue tint-95） | 预览面板、代码面板、页脚条 | — |
| accent-emphasis | `--accent` | `#1d70b8` | `content/color/govuk--colour.md:138`（brand） | 链接、提示符、区块编号、选中下划线 | 5.17 白底 / 4.84 淡底 |
| accent 深档 | `--accent-deep` | `#0f385c` | `content/color/govuk--colour.md:216`（blue shade-50，同 `:64` link-hover） | 链接 hover、数字值、关键字 | 12.07 / 11.30 |
| accent-muted | `--accent-wash` | `#d2e2f1` | `content/color/govuk--colour.md:200`（blue tint-80） | 方法 chip 底、选区 | 14.82（黑字压其上） |
| accent border | `--accent-line` | `#8eb8dc` | `content/color/govuk--colour.md:196`（blue tint-50，同 `:152` surface-border） | 嵌套记录左侧标尺、链接下划线 | 2.09（只做装饰，不承担文本或控件边界） |
| borderColor-default | `--rule` | `#cecece` | `content/color/govuk--colour.md:78` | 分隔线、面板边框 | 1.47（装饰分隔） |
| borderColor-emphasis | `--rule-ink` | `#0b0c0c` | `content/color/govuk--colour.md:82`（input-border） | 页脚顶线、步骤顶线 | 19.59 |
| success | `--ok` | `#0f7a52` | `content/color/govuk--colour.md:122` | 状态点、字符串值 | 5.35 / 5.01 |
| danger | `--err` | `#ca3535` | `content/color/govuk--colour.md:114` | 错误徽章、错误行、告警卡左线 | 5.16（白字压其上）/ 4.83 淡底（全站最低） |

配色面积：3 个中性色承担 95% 面积，强调蓝只出现在链接、编号、光标、选中态与代码关键字上；绿色只做状态与字符串，红色只做错误。NN/g 的「2 主 2 辅」没有超（`content/howto/nngroup.com--visual-hierarchy-ux-definition.md:58`）。

**全部实测对比度最小值 4.83:1**（错误红 `#ca3535` 压淡底 `#f4f8fb`，14px 普通文本，过 AA）。逐节点扫描含 alpha 合成的祖先背景，见 FINDINGS §1。

## 4. 字阶与行高

Primer 不给字号（`content/type/primer.style--typography.md` 全文只有 rem、unitless 与 4px 网格的原则，`:29`）。按 GAP「字阶」条回源 GOV.UK type scale 的档点，不自己凑：

| 元素 | 档点 | 字号 | 行高 | 出处 |
| --- | --- | --- | --- | --- |
| h1 | 36 | 36px | 44px | `content/type/govuk--type-scale.md:68` |
| h2 | 27 | 27px | 35px | `content/type/govuk--type-scale.md:76` |
| h3 / 正文 / 导语 | 19 | 19px | 27px | `content/type/govuk--type-scale.md:92` |
| 表格说明、正文小号、步骤正文 | 16 | 16px | 24px | `content/type/govuk--type-scale.md:100` |
| 等宽（代码、路径、终端） | — | 14px | 21px（1.5×，另算） | derived，见下 |
| 元数据（编号、类型标签、图注、页脚） | — | 12px | 20px | derived，见下 |

**行高 = 字号 + 8，逐元素结算。** 实现上不在每个类里重复 `line-height`，而是在根上一条：

```css
* { line-height: calc(1em + 8px) }
```

`em` 在计算值阶段就按元素自身字号解算，所以嵌套的 `<code>`、`<span>`、`<strong>` 各自拿到「自己字号 + 8」，不会继承到父级那一档。实测 225 个含直接文本的节点，`lineHeight - fontSize === 8` 全部通过（0 违例）。

**代码块另算。** 等宽 14px / 21px（1.5 倍），标 derived：等宽代码 1.5 倍是行业惯例，且 14+8=22 与 1.5×14=21 只差 1px，但对齐感差别明显。代价是 21 不在 4 的倍数上，与 Primer 的 4px 网格原则（`content/type/primer.style--typography.md:29`）不严格一致，记 FINDINGS。代码块内部行高实测 41 个节点全部 21px，0 违例。

**三档层级**：36 / 27 / 19（display 三档），最大的元素只有 h1 一个（NN/g：字号最多 3 档 `:76`，最大元素 ≤2 `:77`）。14 与 12 是功能字号（等宽与元数据），不参与展示层级。

**不调字距**：Primer 明确要求不动 letter-spacing（`content/type/primer.style--typography.md:73`），所以页脚标语条的大写排布靠等宽与间距，不靠 tracking。

## 5. 间距、圆角与其它派生

| 维度 | 基准规范有什么 | 处理 | 出处 |
| --- | --- | --- | --- |
| 间距 | Primer 无 spacing scale，只给 content padding 16 / 24（`content/layout/primer.style--layout.md:111-118`） | 按 GAP 回源 Atlassian 8px 基数，全站一套 | `content/layout/atlassian.design--spacing.md:26`（8px 基数）、token 值 `:70` 4px、`:86` 8px、`:94` 12px、`:102` 16px、`:118` 24px、`:126` 32px、`:142` 48px、`:150` 64px |
| 纵向节奏 | — | 只用一层：区块 `padding-block` + 元件间距，不用 margin 叠加（Every Layout 的相邻兄弟做法，`content/layout/every-layout.dev--stack.md:83`） | derived |
| 圆角 | 库无通用原文 | 4px（chip / 按钮 / 输入 / 徽章）+ 8px（面板 / 卡片 / 表格容器）两档，标 derived | GAP 圆角条 |
| 发丝线 | 只有颜色没有线宽 | 1px，标 derived；装饰用 `#cecece`，控件边界用 `#0b0c0c` | GAP 发丝线条 |
| 焦点环 | Primer 未给规格 | 2px 实线 + 2px 偏移，颜色 `#0b0c0c`，标 derived | GAP 触控与焦点环条；`content/a11y/w3c--apg-tabs.md` 的键盘模型 |
| 触控目标 | Primer 给 AA 24px、建议 AAA 44px（`content/layout/primer.style--responsive.md:54`） | 按钮与标签页最小 28–32px 高，行内链接靠 27px 行高保证 ≥24 | 同上 |
| 正文行长 | Primer 建议 ≤80 字符（`content/type/primer.style--typography.md:67`） | 导语与说明列 `max-width: 58ch`（≈ 60–75 字符区间），标 derived | GAP 正文行长条 |
| 断点 | 320 / 544 / 768 / 1012 / 1280 / 1400（`content/layout/primer.style--layout.md:96-103`），容器 1280（`:225`） | 只用 544（记录行堆叠）、768（三步并排）、1012（预览与代码并排）三个 | 同上 |
| 顶栏 | Primer：app header 从不固定（`content/layout/primer.style--layout.md:141`） | 页头随页面滚，不做 sticky | 同上 |

## 6. 设计点路由

从 `site/dist/ai/design-points.json` 取，先读方法层三篇再选点。

| 设计点 | 读的原文 | 落到哪 |
| --- | --- | --- |
| `project-primer` | color / typography / layout / responsive / notification-messaging | 基准规范判定，全站数值归属 |
| `macrostructure-21` | `Hallmark 版式库 references/macrostructures/21-component-playground.md` | 页面主体是预览 + 代码块，每块带 Copy，分类带分隔 |
| `howto-visual-hierarchy` | `content/howto/nngroup.com--visual-hierarchy-ux-definition.md`（`:58` `:76` `:77`） | 三档字号、最大元素 ≤2、配色 2+2 |
| `howto-ui-color-framework` | `content/howto/learnui.design--color-in-ui-design-a-practical-framework.md`（`:208` `:242`） | 只用同色相降亮/降饱和做 hover 与选中，不换色相 |
| `layout-intrinsic-patterns` | `content/layout/every-layout.dev--stack.md` / `sidebar` / `switcher` | 区块内单一间距层；预览与代码在 1012 断点切换横排/纵排 |
| `project-primer` | `content/layout/atlassian.design--spacing.md` | 8px 基数一套刻度 |
| `project-primer` / `project-primer` / `project-primer` | `content/type/govuk--type-scale.md`、`designsystem.digital.gov--measure.md` | 36/27/19/16 档点；正文不下探到 16 以下；行长 58ch 封顶 |
| `type-type-in-code` | `content/type/primer.style--typography.md` | 单条 `line-height` 规则落在根上，token 不写裸值 |
| `a11y-contrast-threshold` | `content/color/govuk--colour.md`、`designsystem.digital.gov--color-overview.md` | 正文 4.5:1、大字与非文本 3:1；每档色值定稿前实测 |
| `project-primer` / `a11y-tabs-tree-keys` | `content/a11y/w3c--apg-tabs.md:59`（左右方向键）、`:83-85`（aria-controls / aria-selected / aria-labelledby） | 预览视图与语言切换两组标签页，方向键 + 自动激活 |
| `a11y-focus-visibility` | `content/a11y/web.dev--a11y-focus.md`、`carbondesignsystem.com--a11y-keyboard.md` | `:focus-visible` 焦点环、页首 skip link、纯键盘可完成全部交互 |
| `motion-duration` / `motion-reduced` | `content/motion/nngroup.com--animation-duration.md`、`carbondesignsystem.com--motion.md` | 只保留两处动效（光标闪烁 1.05s、标语条 38s），reduced-motion 全关 |
| `project-primer` | `patterns/primer--saving.md`、`carbon--status-indicator-pattern.md` | Copy 的「Copied」态 1.6s 回退 + `aria-live` 播报；状态点与 207 部分成功 |

## 7. 交互实测

浏览器 session `payloaddeck`，本地 `file://` 直开，坐标真点。

| 交互 | 初始 | 操作 | 结果 |
| --- | --- | --- | --- |
| 响应视图切标签 | `record` 选中，`json` 隐藏；可见文本 285 字 | 点 `json` | `json` 选中，record 面板 `hidden=true`，可见文本 233 字；`aria-selected` 与面板同步 |
| curl 示例换语言 | `curl`，代码 173 字 | 点 `python` → `node` | 215 字 → 271 字，面板逐一替换；再点回 `curl` 复原 |
| 代码复制 | 按钮 `Copy` | 点 `Copy` | 剪贴板回读到 `curl -X POST https://api.payloaddeck.dev/v1/parse \` 开头同一段；按钮变 `Copied` 并置 `data-done`，1.6s 后回 `Copy` |
| 键盘标签页 | 焦点在 `curl` | `ArrowRight` | 焦点与选中同步移到 `python`（自动激活），可见面板从 `p1-a` 变 `p1-b` |
| 320 代码横向滚动 | — | 量 | 三个代码块 `scrollWidth` 462 / 521 / 487 vs `clientWidth` 286：块内滚动，文档 `320/320`，playground 右缘 304 < 320 |

`Copy` 在 `navigator.clipboard` 不可用时走 `execCommand` 兜底，不静默失败；成功与失败共用同一条 `aria-live` 播报。

## 8. 回炉记录

1. **首屏第一版太满。** 第一稿 intro 383px、facts 两行、示意图 236 高，playground 响应面板落在 658px，800px 视口只剩 142px。改：导语砍到两句、facts 改同行、示意图压到 176 高、区块 padding 收到 24。响应面板提到 567px，露出 233px。
2. **行高 11 处违例，全在 button。** `button { font: inherit }` 把父级 line-height 一起继承了，按钮 12px 字拿到 27px 行高。改显式 `font-family / font-size / font-weight` + `line-height: calc(1em + 8px)`，违例归零。
3. **12px 一度 68/253 = 26.9%。** 逼近三成上限，且满屏小字。把标签页、Copy、记录键名、facts 标签提到 14px，12px 只留纯元数据（编号、类型标签、图注、页脚、状态），降到 48/266 = 18.0%。
4. **加 inline code `nowrap` 后 320/768 破了。** 步骤三那句 `level = "error" and duration_ms > 5000` 是个 39 字符的不可断串，把 grid 的 min-content 撑到 397px / 903px。改：拆成两个 code 片段，步骤列 `minmax(0,1fr)`，四档回到无溢出。
5. **示例数据打架。** 查询写了 `level = "error"` 而结果表第三行是 `warn`；记录视图有 `received_at` 而查询筛 `ts`。改：去掉 level 过滤并在导语里说明「不论级别」，记录视图补 `ts` 行。页面上每个数字都要能对上，这条比好看重要。

## 9. 自验结论

四档 `scrollWidth === clientWidth`（320/375/768/1280 全部相等）、资源计数 0、行高 0 违例（225 个文本节点 + 41 个代码节点）、12px 占比 18.0%、最小对比度 4.83:1、五个交互全部真跑通过。逐项数字见 `FINDINGS.md` §1。
