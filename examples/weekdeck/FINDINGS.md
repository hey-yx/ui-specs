# FINDINGS · WeekDeck 看板自验记录（weekdeck）

运行环境：Browser Use 内置 Chromium，`file://` 直开单文件，零外部请求。
产物：`index.html`（单文件）· `DECISIONS.md`（数值出处）· 本文件（自验与缺口）。
测试流程：出稿 → 四档溢出与对比度实测 → 交互真跑 → **测试回炉一次**（对比度与排版审计发现 7 处问题，返修后复测归零）→ vision 走查 → 复测。

---

## 1. 四档横向溢出

`document.documentElement.scrollWidth / clientWidth`（body 同值）：

| 宽度 | scrollWidth | clientWidth | body |
| --- | --- | --- | --- |
| 1280 | 1280 | 1280 | 1280 / 1280 |
| 768 | 768 | 768 | 768 / 768 |
| 375 | 375 | 375 | 375 / 375 |
| 320 | 320 | 320 | 320 / 320 |

`html, body` 双 `overflow-x: clip`；返修后复测仍四档全等。

---

## 2. 对比度实测

扫描 168 个可见文本节点（rgba 合成到实际背景）：

- **最低 4.86:1**（选中 chip `#8b6600` on `#fff5e4`），**0 处低于阈值**（返修前 7 处，见 §6 回炉记录）。
- 正文 17.58:1 / 次级 5.74:1 / CTA 文字 10.52:1 / 状态文字 5.59-6.08:1。
- 非文本：focus ring `#b38500` 对白 3.35:1、对灰 3.02:1；状态点 3.12-4.48:1；图表标记 5.25:1 与 3.41:1，均达 content/patterns/primer--data-visualization.md:49 的 3:1 下限。

---

## 3. 字号 / 行高审计

页面出现的（font-size / line-height）组合：`10/18`、`12/20`、`14/22`、`16/24`、`20/28`、`28/36`、`36/44`、`48/56`、`64/72`。全部命中 content/type/tdesign.tencent.com--fonts.md:49-60 字阶，且全部满足 `lh = fs + 8`（content/type/tdesign.tencent.com--fonts.md:67），0 违例（返修前 SVG 标签继承 12/22、单位后缀 12/28 共 17 处，已补显式行高）。

---

## 4. 四项核心交互（前后数字，全部真跑）

| # | 操作 | 之前 | 之后 |
| --- | --- | --- | --- |
| 1 | 筛选：点「进行中」 | 显示 12 / 12，可见行 12 | 显示 **3 / 12**，可见行 **3**，播报「筛选结果：3 项任务」 |
| 2 | 筛选：点「已取消」 | 显示 12 / 12 | 显示 **0 / 12**，空状态出现（表格整体让位），文案「本周没有已取消的任务」 |
| 3 | 空状态「查看全部任务」 | 显示 0 / 12 | 恢复 **12 / 12**，空状态关闭 |
| 4 | 警告横幅「查看阻塞项」 | 显示 12 / 12 | 显示 **1 / 12**（唯一阻塞行），chip 同步切到「已阻塞」，区块滚入视野 |
| 5 | 图表悬停周四列区 | tooltip 不可见 | tooltip 可见：「周四 11-05（今天）/ 实际剩余 6 项 / 计划剩余 3 项」，十字线显形 |
| 6 | 直标悬停 / 点击 | 无类 | 悬停 `dim-plan`（计划系列 30% 透明）；点击 `iso-actual` 隔离实际系列；再点恢复 |
| 7 | 生成周报：空标题提交 | 弹窗开，焦点 `#f-title` | 错误「标题不能为空，收件人才知道这是哪一周。」，`aria-invalid=true`，焦点留在字段 |
| 8 | 生成周报：标题「周报」失焦 | 无 | 错误切换为「标题至少 4 个字，收件人才知道这是哪一周。」 |

### 生成 → 加载 → 反馈链

- 有效提交：按钮 `aria-busy=true` + disabled + spinner + 「正在生成周报…」（150ms 时点截获），600ms 后：报告全文生成（「# 第 45 周周报 · 平台组 / 发送范围：全体成员…」，含目标推进度 69%、任务 6/12、燃尽落后 3 项、阻塞风险，补充备注入文），弹窗内 success 提示「周报已生成，可直接复制。」，按钮转「重新生成」。
- 复制全文：绿勾 +「已复制到剪贴板」出现（clipboard API 或 execCommand 兜底）。
- 关闭（取消/Esc/遮罩）：弹窗关闭，焦点回 `#btn-report` 触发器。
- 导航锚点：概览/燃尽/目标/成员四链接点击平滑滚动到位（reduced-motion 下 auto）。

页面 `window.onerror`：0 条。

---

## 5. checks 盲测题逐题自查（13 题，答后对照 star-points.json 原答案一致）

| 点 | 自查答案（要点） | 原文 |
| --- | --- | --- |
| 视觉层级 | 最多 3 档（小/中/大）：正文 14-16px、副标题 18-22px、标题最大 32px；3 档够变化又保持层级清晰 | content/howto/nngroup.com--visual-hierarchy-ux-definition.md:76 |
| 视觉层级 | F 型适合文字密集页：先沿左侧竖扫找兴趣点，再横向阅读，形状像 F/E | content/howto/awwwards.com--understanding-web-ui-visual-hierarchy.md:48 |
| 界面配色框架 | Harvest：选中态只降亮度（饱和不变）、hover 只降饱和（亮度不变），各动一个维度 | content/howto/learnui.design--color-in-ui-design-a-practical-framework.md:242 |
| 界面配色框架 | 色相盘 30° 间隔取一组，全部 100% 饱和度 + 100% 亮度 | content/howto/learnui.design--color-in-ui-design-a-practical-framework.md:282 |
| 图表对比度 | 图表标记与背景至少 3:1 | content/patterns/primer--data-visualization.md:49 |
| 图表构成 | 九元素：图表标题、轴、刻度、轴标题、图例、工具栏、缩放条、绘图区、tooltip | content/dataviz/carbondesignsystem.com--data-visualization-chart-anatomy.md:31 |
| 图表构成 | 桑基图展示数据集两个指标及记录在其间的分布、突出相关性 | content/dataviz/carbondesignsystem.com--data-visualization-flow-charts.md:29 |
| 数据色板 | 分类色板顺序经编排以最大化相邻颜色对比，必须严格按序取色 | content/dataviz/carbondesignsystem.com--data-visualization-color-palettes.md:32 |
| 数据色板 | 顺序色板：浅色主题最深=最大值，深色主题最浅=最大值 | content/dataviz/carbondesignsystem.com--data-visualization-color-palettes.md:44 |
| 轴与图例 | 柱/面积比大小必须零起（截断 Y 夸大小差异）；折线/散点看趋势，裁剪 Y 反而帮看方向 | content/dataviz/carbondesignsystem.com--data-visualization-axes-and-labels.md:33 |
| 轴与图例 | 悬停某类别图例，其它类别透明度降到 30% | content/dataviz/carbondesignsystem.com--data-visualization-legends.md:86 |
| 仪表盘设计 | 展示型按重要性排层级，最重要放顶部，其余按 F 形，最不重要在最后 | content/dataviz/carbondesignsystem.com--data-visualization-dashboards.md:34 |
| 仪表盘设计 | 同一仪表盘内每个数据集始终用一致的颜色 | content/dataviz/carbondesignsystem.com--data-visualization-dashboards.md:42 |

13/13 自查通过，无需回炉重读。

---

## 6. 测试回炉记录（本轮真返修，不是走过场）

第一轮实测抓到 7 处问题，全部修完复测归零：

1. 正文行 meta 分隔符「·」与短横线（`#c6c6c6`）1.54:1 ， 连 3:1 都不到 → 删除装饰分隔符，改纯间距分组。
2. 「未开始」chip 文字 Gray8 on Gray2 3.86:1 ， 按 guide「色阶当文字」规则换同族深档 Gray9，5.59:1（规则真实生效的实例）。
3. SVG 轴标签/直标继承 body 行高 12/22 共 14 处 ， 补显式 `lh = fs + 8`。
4. 「%」单位后缀 12/28 3 处 ， 同上补行高。
5. KPI 第二卡注脚孤字换行（「工作日」落单行）， 文案缩短为单行。
6. Y 轴标题贴刻度数字 ， 移到轴线左上方独立基线。
7. 移动端导航链接命中区不足 ， ≤480px 提到 44px。

vision 走查（1280 与 375 两张）：层次金字塔清晰、图表克制无渐变/假 chrome、无溢出重叠；上述 5/6 即走查发现项。1280 首屏强调色像素占比 0.35%（饱和黄）+ 3.78%（浅黄底）= 4.13% < 5%。

---

## 7. 质量升级 6 条的证据

1. **标题与字号**：h1「本周周报」4 字取 64px/72 顶档（content/type/tdesign.tencent.com--fonts.md:60），KPI 主数字 48px，最大元素 2 个（content/howto/nngroup.com--visual-hierarchy-ux-definition.md:77）；≤640 48px、≤480 36px。
2. **层次不用框**：卡片无边框无静态阴影；层次靠白卡/灰画布/间距/字重；结构分隔只用 1px `#eeeeee`。
3. **色彩纪律**：功能色只在状态点/状态 chip/进度段/警告错误信号；强调色面积 4.13%（像素实测）。
4. **图形质感**：燃尽图（面积 + 双系列线 + 点 + 十字线 + 直标 + 今天标注 + 数据表）、横幅警示图标、空状态图形、按钮/表单图标全部手写内联 SVG，零位图零外链。
5. **状态与微交互**：八态全测（§4 + §8 DECISIONS）；错误三重信号；加载原位替换 + 专属播报；复制 success 绿勾；reduced-motion 全降级；焦点环无过渡。
6. **中文排版**：行高 = 字号 + 8 全站 0 违例；无负字距；数字 tabular-nums；正文行宽克制。

---

## 8. 已知限制与偏差（不藏）

1. **回源与派生标注**：间距（Atlassian 尺度）、动效（NN/g 档位）为 guide 规则指定回源；圆角 4/8/999、发丝线 1px、图表几何（viewBox/档距/线宽/点径/进度条高）、组件尺寸（控件 36px 高）、弹窗遮罩深度均为 derived，均已在 DECISIONS 标注，不冒充 TDesign 原文值。
2. **TCloud Number 不可用**：content/type/tdesign.tencent.com--fonts.md:37 的数字字体是外部资源，零外部请求约束下按 guide 规则降级 `font-variant-numeric: tabular-nums`。
3. **日期常量**：页面以 `TODAY = 2026-11-05`（周四）计算「今天/落后」，保证示例稳定；真实系统取本地日期。
4. **图表键盘路径**：tooltip 面向指针设备；键盘与读屏走图下折叠数据表兜底，未做逐点 focusable。
5. **字体栈回退**：字体栈逐字照抄 content/type/tdesign.tencent.com--fonts.md:34，无中文 WebFont；缺 Hiragino/YaHei 的环境会回退到系统中文默认（headless 截图即如此，真实 macOS Chrome 正常）。
6. **占位文字**：textarea placeholder 用 Font Gy3 40%（2.85:1），不承载正文，属已知取舍（与五个案例站同口径）。
7. **弹层交互**：遮罩点击/Esc 关闭依赖现代 `<dialog>`；IE 不支持。

---

## 9. 回流：GAP_RULES 命中情况与新缺口

guide「主源缺口与派生」8 条本轮**全部命中并按规则处理**：

| 缺口维度 | 本轮处理 | 结果 |
| --- | --- | --- |
| 间距 | 回源 Atlassian 8px 基数整套 | ✅ 4/8/12/16/24/32/48 一套到底 |
| 动效时长与缓动 | 回源 NN/g 档位 + ease-out/in | ✅ 100/200/300ms |
| 圆角 | 派生 4/8/999 成套 | ✅ |
| 数字字体 | tabular-nums 降级 | ✅ |
| 发丝线宽 | 1px derived | ✅ |
| 色阶当文字 | Gray8 作文字 3.86:1 不达标 → 换 Gray9 5.59:1 | ✅ 规则真实拦住一次 |
| 图表几何参数 | 全部 derived + 构图原则回源 content/dataviz/ | ✅ |
| 组件尺寸 | 控件高度成套 derived | ✅ |

**新缺口候选（建议回填 guide 的「主源缺口与派生」）**：

1. **弹层遮罩与浮层深度**：库内无遮罩透明度/浮层层级规范，本轮 `rgba(0,0,0,.4)` 标 derived。建议新增一行「浮层遮罩」：回源无处可回时整站统一派生档（0.4 遮罩 + 白面），标 derived。
2. （次级）**分段条分隔线宽度**：2px 白色分隔线出自 content/patterns/primer--data-visualization.md:47 的定性要求，具体宽度无原文，已被「图表几何参数」的 derived 规则覆盖，如求严谨可在该行规则里补一句。

本次产出范围限定 weekdeck 三件套，未改 `site/src/data/guide.ts`；上述两条按「每站 FINDINGS 收官回填」的口径留给维护流程执行。

---

## 10. 自评（需主会话独立复验，自报不算数）

| 块 | 自评 | 依据 |
| --- | --- | --- |
| 出处与台账（40） | 38 | DECISIONS 值/出处/用在哪逐条齐；引用全为 `content/ 完整路径:行号`；`check-ledger.py` 过；derived 全标注并记 FINDINGS（缺 2 分：部分闸门记录依赖子代理自报 + 主检抽验，未逐条重放） |
| 页面质量（40） | 38 | 六条逐项有据（§7）；四档无溢出；对比度 0 违例；hero 档位/面积/行高全核（缺 2 分：强调色面积按整屏含浅底算 4.13%，贴近 5% 线，余量不大） |
| 行为与回炉（20） | 19 | 8 组交互前后数字（§4）；回炉真返修 7 处（§6）；GAP_RULES 命中表 + 新缺口清单（§9）（缺 1 分：回填 guide 未执行，见 §9 说明） |
