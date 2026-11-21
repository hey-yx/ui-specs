# FINDINGS · QuillDeck 落地页（quilldeck）

记录本轮「TDesign 两篇没写、或写了但有坑」的部分、实际取舍，以及回流 guide「主源缺口与派生」（guide.ts 的 GAP_RULES 全表）的新缺口候选。凡未标行号的数值，都不是 TDesign 原文值。

---

## 1. 两篇原文覆盖不到的设计维度

| 维度 | 原文情况 | 本站处理 |
| --- | --- | --- |
| 间距 | color.md 无间距章节；fonts.md 只讲字 | 按 GAP 规则整套回源 Atlassian 8px 基数（atlassian.design--spacing.md:20-22 全表 :56-158（原文已下架）），全站一套，标「回源」不标 derived |
| 动效时长 / 缓动 | 两篇均无动效篇 | 按 GAP 规则回源 Atlassian + NN/g：150ms / 250ms 两档 + 三条定值曲线（出处见 DECISIONS §4），不标 TDesign |
| 圆角 | 两篇均无 | derived 4px / 8px 两档 + 胶囊 999px（guide 兜底档 guide.ts 的 GAP_RULES「圆角」） |
| 阴影 | 两篇均无 | derived，仅 hero mock 一处浮层（0 24px 60px -32px） |
| 断点 | 无 | derived 960px（结构折叠：导航、hero 单列、定价单列）/ 640px（排版降档、mock 单列） |
| 发丝线宽 | 只给颜色没给线宽 | 1px Gray3，derived（guide.ts 的 GAP_RULES「发丝线宽」）；控件边界另取 Gray7 |
| 组件尺寸 | 无按钮/输入框高度 | derived 全站统一 44px（兼命中区要求，guide.ts 的 GAP_RULES「组件尺寸」） |
| 内容最大宽度 | 无 | derived 1120px |
| 数字字体 | 指名 TCloud Number（content/type/tdesign.tencent.com--fonts.md:37） | 零外部请求拿不到，`font-variant-numeric: tabular-nums` 降级（guide.ts 的 GAP_RULES「数字字体」），不冒充原文值 |
| 焦点环样式 | 无 | 2px 实线 Pink8 + 2px offset（非文本对比 9.88），即时出现无过渡 |

## 2. 对比度陷阱（原文色值不是都能直接用）

1. **Pink6 `#c43695` 压 Pink1 `#fff0f6` 只有 4.42**，浅底带（公告条、FAQ、推荐卡）内的强调文字一律改用 Pink7（6.31）；主 CTA 只放白底/Gray1 底上。
2. Pink5 `#e851b3`（3.36）与 Pink3 `#ffaedc`（1.70）只进图形与装饰，不承担任何文字或边界职责。
3. Red6 `#d54941` on 白 = 4.32 不达标（原文自己也标 4.32），错误文字取 Red7 `#ad352f`（6.31）；Red6 若用只给非文本。
4. Gray3 发丝线 vs 白仅 1.23，装饰分隔不承担控件边界，控件边界走 Gray7（3.41 ≥3）。

## 3. 年付省额的取整

月付 29 → 年付 23：实为 20.7% 折扣；79 → 63 实为 20.3%。标注一律写「省 20%」（诚实下限，不写 21%）。年付折算 23×12 = ¥276、63×12 = ¥756，与卡片说明逐字一致（交互实测核对，DECISIONS §8.2）。

## 4. 字阶跳档

20px（content/type/tdesign.tencent.com--fonts.md:54）到 36px（content/type/tdesign.tencent.com--fonts.md:58）之间跳过 24 / 28 两档：营销页的卡片标题与区块标题需要拉开层级，直接取 36 作 h2。代价是字阶不连续，与 examples/landing 同款取舍；若要连续，h2 换 28、h3 保持 20，不动色板。

## 5. 字体配对：单字族是有意为之

Hallmark 2+1 字体规则被两条硬约束夹住：单文件零外部请求 + 数值必须走 TDesign。content/type/tdesign.tencent.com--fonts.md:34 只给系统字栈、没有第二族；自造衬线 display 会引入无出处字族。故全站单族，靠 64/48/36/20/16/14/12 字号与 400/600 字重拉层级，标题 `letter-spacing:-0.02em` 收紧。这是取舍，不是遗漏。

## 6. 浏览器与验证环境

- 截图与 DOM 断言在 headless Chrome（CDP）完成（browser_exec 本会话不可用，改走 CDP，交互用真实点击/键盘事件驱动）。
- `prefers-reduced-motion` 用 CDP `Emulation.setEmulatedMedia` 实测：全站 `transition-duration: 0s`。
- 焦点环用真实 Tab 键实测：`matches(':focus-visible')` = true，`outline: 2px solid rgb(128,10,95)`，offset 2px。
- 零外部请求：`performance.getEntriesByType('resource')` = []。
- 四档宽度在无滚动条 headless 窗口进行，`clientWidth` 与窗口宽一致（320/375/768/1280 全部 scrollWidth == clientWidth）。

## 7. 与 examples/landing（云笺）的边界（同主源不同指纹）

- 同用 TDesign 两篇主源，色相不同：本站 Pink 色阶（品牌基色 Pink7 `#a12279`），云笺 Purple6 `#8e56dd`；云笺的紫底对比陷阱（Purple6 压紫底 4.20）在本站复现为 Pink6 压粉底 4.42，同款规避手法（浅底带内换深一档）。
- 结构指纹不同：Bento Grid + N12 + Ft7 + H8 mock，云笺是 Marquee Hero + N5 + Ft1。
- 本站独有的行为面：公告条关闭、菜单 disclosure + Esc、订阅表单四态；云笺是定价切换 + FAQ + 留资表单。

## 8. 回流 guide「主源缺口与派生」的新缺口候选

1. **行长（measure）**：主源 TDesign 无行长概念，hero 副文的 35-45 字区间在本流程里没有出处（本轮按区间自查，实测 39 字）。建议在 GAP_RULES 加「行长」维度，回源 `designsystem.digital.gov--measure.md`（原文已下架） 或统一按中文 35-45 字兜底，现在各站都拿「需求书/案例口径」当出处，等于没有出处。
2. **首屏 hero 占比**：hero 主导首屏「但不遮下一屏提示」只有定性要求（content/layouts/layout--hero-centric-design.md:63），首屏露出多少、hero 区块的上下 padding 没有数值档；本轮 padding 取间距尺度 80/64 标 derived，各站会各拍一个数。建议补一条「首屏占比」派生档（如 hero 高度 ≤ 首屏 85%，露出下一屏提示）。

## 9. 遗留可改进项

- 对比表 375 下需要横向滚动（`.compare-scroll`，最小宽 560px）；这是表格型内容的常见处理，未改卡片列表。
- 公告条文字在 375 下折两行；若嫌高可在 640 以下缩短文案，未处理。
- 产品名、价格与 FAQ 文案是本测试的虚构产品数据；全页无编造指标、无假证言、无 logo 墙（无真实客户即不放）。

## 10. 本轮新增的流程缺口：行高自查漏继承

- **现象**：v1 只在「显式写了 line-height 的类」上核公式，`body { line-height: calc(1em + 8px) }` 被继承成固定 24px，14px 正文全部变成 14/24；浏览器实测 81 处违例，台账却写「7 档全部满足」。
- **根因**：`calc(1em + 8px)` 是相对声明处的 font-size 求值，计算值随继承下发，不会在子元素按自身字号重算。
- **修法**：零特异性通配 `:where(body, body *) { line-height: calc(1em + 8px) }`，让每个元素按自身字号算；再逐个核对 computedStyle。
- **建议回流**：examples/README 的验收口径把「行高 = 字号 + 8」改成「按 computedStyle 遍历全部含直接文本的节点，违例数为 0」；只查样式表里写了 line-height 的规则会漏掉继承。
