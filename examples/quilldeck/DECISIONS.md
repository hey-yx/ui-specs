# DECISIONS · QuillDeck AI 写作助手营销落地页（quilldeck）

- 基准规范：**TDesign**（`site/dist/ai/guide.md:24`「中文产品 UI（中后台 / 工具 / 内容 / 协作）」行）
> 单文件产物：`index.html`。CSS/JS 全内联，零外部请求（实测 performance resource entries = []），中文文案。
> 数值主源：TDesign 色彩与字体两篇原文，本文件逐条标 `文件:行号`。TDesign 未覆盖的维度按 guide「主源缺口与派生」回源或走派生档，单列在 FINDINGS.md。
> 站名按需求 `briefs/quilldeck.md` 的 `name` 字段定为 QuillDeck（见 §1）。

---

## 0. 路线声明（七步 + Hallmark Design flow）

- **产品语境**：AI 写作助手营销落地页（中文产品 UI）→ 主源 **TDesign**（项目选型方案：content/ 两篇，见 guide.ts 的项目选型方案「中文产品 UI」行）。
- **设计场景**：s2 落地页与营销页（landing page anatomy：layouts-product-page、layouts-pricing-comparison、layouts-product-official）+ 首屏 hero（layouts-product-official / hero-centric 版型）。方法层必读两点已读（guide.ts 的 METHOD_REQUIRED）：界面配色框架、视觉层级。
- **Genre**：modern-minimal（SaaS 营销页）。
- **Macrostructure**：Bento Grid（能力矩阵 6 块不规则栅格）；与 examples/ 五站的 Ecosystem Index / Narrative Workflow / Stat-Led / Marquee Hero / Workbench 均不同。
- **Nav**：N12 公告条 + 收回式导航（公告条承载试用信息）；五站用过 N1b/N3/N5/N9/N13，避开。
- **Footer**：Ft7 newsletter-first（订阅写作信表单）；五站用过 Ft1/Ft2/Ft4/Ft5/Ft6，避开。
- **Hero**：H8 mockup split（floating no-frame、tilt 0°），纯 CSS 编辑器 mock，不画假浏览器外框。
- **Theme**：TDesign 主源色板（ui-specs 口径：跳过目录主题轮换，主源名即 theme），强调色取 TDesign 扩展色 Pink 色阶原文值。
- **Pre-emit critique**：P4 H4 E4 S4 R4 V4（stamp 在 `index.html` `<style>` 首行）。

---

## 1. 站名

站名按需求 `briefs/quilldeck.md` 的 `name` 字段定为 QuillDeck，入库时不另跑命名核验；原批次的起名候选与碰撞记录随改名撤下。

---

## 2. 色彩（主色取 TDesign 扩展色 Pink 色阶原文）

交互层级映射按 TDesign 色阶取档（hover 取浅一档、active 取深一档，映射规则为派生；色阶见 content/color/tdesign.tencent.com--color.md:206、208）。

| Token | 值 | 原文行号 | 用途 | 实测对比度 |
| --- | --- | --- | --- | --- |
| `--pink7` | `#a12279` | content/color/tdesign.tencent.com--color.md:222 | **品牌基色**：主 CTA 填充、链接、推荐标签文字 | vs 白 6.95；白字压其上 6.95；vs Pink1 6.31 |
| `--pink6` | `#c43695` | content/color/tdesign.tencent.com--color.md:221 | hover 态填充（色阶 6，单维度变浅） | 白字压其上 4.87 |
| `--pink8` | `#800a5f` | content/color/tdesign.tencent.com--color.md:223 | active 态、focus 环（2px 派生，不与正文抢对比） | vs 白 9.88 |
| `--pink5` | `#e851b3` | content/color/tdesign.tencent.com--color.md:220 | 仅图形/装饰（列表点、mock 下划线、SVG） | vs 白 3.36（非文本 ≥3 ✓） |
| `--pink3` | `#ffaedc` | content/color/tdesign.tencent.com--color.md:218 | 仅 SVG 装饰 | vs 白 1.70（装饰，不承担边界） |
| `--pink2` | `#ffd8eb` | content/color/tdesign.tencent.com--color.md:217 | 「最多人选」标签底 | 无 |
| `--pink1` | `#fff0f6` | content/color/tdesign.tencent.com--color.md:216 | 公告条、推荐套餐卡、FAQ 浅底带 | 无 |
| `--white` | `#ffffff` | content/color/tdesign.tencent.com--color.md:93 | 纸面 | 无 |
| `--gray1` | `#f3f3f3` | content/color/tdesign.tencent.com--color.md:140 | 能力矩阵底、toggle 底、页脚底 | 无 |
| `--gray2` | `#eeeeee` | content/color/tdesign.tencent.com--color.md:142 | 禁用态底 | 无 |
| `--gray3` | `#e8e8e8` | content/color/tdesign.tencent.com--color.md:143 | 1px 发丝线（表格行线、FAQ 分隔、mock 边） | vs 白 1.23（装饰线） |
| `--gray7` | `#8b8b8b` | content/color/tdesign.tencent.com--color.md:147 | 次按钮 / 输入框边界（非文本） | vs 白 3.41（≥3 ✓） |
| `--gray9` | `#5e5e5e` | content/color/tdesign.tencent.com--color.md:149 | 公告条关闭钮 | vs 白 6.48 |
| `--gray14` | `#181818` | content/color/tdesign.tencent.com--color.md:154 | skip link 底 | 无 |
| `--ink` | `#191919`（Gy1 `#000000 90%` 合成） | content/type/tdesign.tencent.com--fonts.md:96 | 正文主色 | vs 白 17.58；vs Gray1 16.00；vs Pink1 16.06 |
| `--ink2` | `#666666`（Gy2 `#000000 60%` 合成） | content/type/tdesign.tencent.com--fonts.md:98 | 次要文字 | vs 白 5.74；vs Gray1 5.58；vs Pink1 5.58 |
| `--green7` | `#006c45` | content/color/tdesign.tencent.com--color.md:84 | 年付省额信号（一处） | vs 白 6.50；vs Pink1 5.90 |
| `--red7` | `#ad352f` | content/color/tdesign.tencent.com--color.md:60 | 表单错误文字（Red6 `#d54941` vs 白仅 4.32，不达标换深一档） | vs 白 6.31 |

- 色阶当文字前逐对复算（guide 的「色阶当文字」规则，guide.ts 的 GAP_RULES「色阶当文字」）：Pink6 压 Pink1 只有 4.42，浅底带内强调文字一律用 Pink7（6.31）；Pink5/Pink3 只进图形。
- 强调色实填面积 **0.68%**（34,472px² / 5,098,240px²，DOM 实测 <5%）。功能色仅年付省额一处。无渐变文字、无彩虹渐变。
- 配色方法先读方法层（guide.ts 的 METHOD_REQUIRED）：主色单色相 + 中性灰阶，状态变化走同一色阶的单维度位移（hover 浅一档、active 深一档），不换色相（content/howto/learnui.design--color-in-ui-design-a-practical-framework.md:242）；整体 1 个主色 + 中性灰，符合「简单设计 2 主 2 辅以内」（content/howto/nngroup.com--visual-hierarchy-ux-definition.md:58）。

---

## 3. 字阶与排版（TDesign 字体篇）

| 用途 | 字号 | 行高 | 原文行号 | 实测计算值 |
| --- | --- | --- | --- | --- |
| Hero 标题（顶档） | 64px | 72 | content/type/tdesign.tencent.com--fonts.md:61 | 实测 `64px / 72px` |
| 价格数字 | 48px | 56 | content/type/tdesign.tencent.com--fonts.md:60 | `48px / 56px` |
| 区块 h2 | 36px | 44 | content/type/tdesign.tencent.com--fonts.md:59 | 实测 `36px / 44px` |
| 卡片 h3 / hero 副文 | 20px | 28 | content/type/tdesign.tencent.com--fonts.md:56 | `20px / 28px` |
| 品牌词 / 页脚品牌 | 28px | 36 | content/type/tdesign.tencent.com--fonts.md:58 | 实测 `28px / 36px` |
| 正文 | 16px | 24 | content/type/tdesign.tencent.com--fonts.md:55 | 实测 `16px / 24px` |
| 小字 / 按钮 | 14px | 22 | content/type/tdesign.tencent.com--fonts.md:54 | `14px / 22px` |
| 页脚微型 | 12px | 20 | content/type/tdesign.tencent.com--fonts.md:53 | `12px / 20px` |

行高按公式派生（`line-height = font size + 8`，content/type/tdesign.tencent.com--fonts.md:69）：全站 `calc(1em + 8px)`，上表 8 档逐档满足。
- 字重只用 400 / 600（content/type/tdesign.tencent.com--fonts.md:79-81）；标题 `font-style: normal`，无斜体标题。
- 字族用 TDesign 原文系统栈（content/type/tdesign.tencent.com--fonts.md:34），零外部字体请求。
- 数字用 `font-variant-numeric: tabular-nums` 降级 TCloud Number（GAP 规则「数字字体」，guide.ts 的 GAP_RULES「数字字体」；原文数字字体在 content/type/tdesign.tencent.com--fonts.md:37）。
- Hero 标题 12 字（「从提纲到成稿，只差一次回车。」，≤20 字）→ 顶档 64px；hero 副文实测 39 个汉字（要求 35-45 字区间）。
- 层级方法（content/howto/nngroup.com--visual-hierarchy-ux-definition.md:76-77）：页面最大元素只有 hero 标题 1 个（≤2），字号档位 7 档但每档用途固定，正文/副标/标题三层差序清晰。

---

## 4. 间距、圆角、动效（主源缺口：回源与派生）

- **间距**：TDesign 两篇无 spacing scale，按 GAP 规则整套回源 8px 基数（guide.ts 的 GAP_RULES「间距」）：基数与 8、16、24、32、48、64 六档常用梯度（content/layout/uisdc.com--code-for-design-of-spacing.md:102）、倍数与纠偏规则（content/layout/uisdc.com--code-for-design-of-spacing.md:156）。全站只用这一套（4/8/12/16/20/24/32/40/48/64/80）；4、20、40、80 是梯度外补档，记派生。
- **圆角**：库无通用 radius 规范，走派生档 4px / 8px 两档 + 胶囊 999px（derived，guide.ts 的 GAP_RULES「圆角」）。
- **发丝线**：1px Gray3（derived，guide.ts 的 GAP_RULES「发丝线宽」）；控件边界另取 Gray7 满足非文本 3:1。
- **组件尺寸**：按钮与输入框高 44px（derived 全站统一 + 44px 命中区，guide.ts 的 GAP_RULES「组件尺寸」）。
- **动效**：TDesign 无动效篇，按 GAP 规则回源（guide.ts 的 GAP_RULES「动效时长与缓动」）：
  - 时长分档：面板与弹窗 250ms 进、150ms 出（content/motion/ui-specs--motion-implementation.md:28）；微交互 150 到 200ms（content/motion/ui-specs--motion-implementation.md:30）；hover/press 取微交互下限 150ms（派生自同一档）。
  - 缓动：进场 ease-out、退场 ease-in（content/motion/nngroup.com--animation-duration.md:92、content/motion/nngroup.com--animation-duration.md:94）；具体曲线 `cubic-bezier(0, 0.4, 0, 1)` 为派生写法，ease-out 关键字等价曲线备查 content/standards/w3c--css-easing-1.md:138。不使用 bounce / elastic。
  - 进场略长于退场（content/motion/nngroup.com--animation-duration.md:84）；动效总区间 100-500ms（content/motion/nngroup.com--animation-duration.md:78），全站只动 transform / opacity / background。
  - `prefers-reduced-motion: reduce` 下动效全关、即时变化（content/motion/nngroup.com--animation-duration.md:24），实测 transitionDuration 全部 `0s`。

---

## 5. 版型与区块顺序

- 主版型 Hero + Features + CTA（content/layouts/layout--hero-features-cta.md:62-66）：Hero（主视觉）→ 价值主张（并入 hero 副文）→ 功能卡 3-5+（本站 6 块，见下）→ CTA → 页脚；CTA 首屏 + 页尾各一次（content/layouts/layout--hero-features-cta.md:65）。
- 能力矩阵取 Feature-Rich Showcase 的功能卡 4-6 块与「一张卡一个信息」（content/layouts/layout--feature-rich-showcase.md:57-61、68），6 块进 Bento 不规则栅格。
- 首屏 hero 取 Hero-Centric 的「主视觉 + 单一价值条 + 主 CTA」并保留下一屏内容提示（content/layouts/layout--hero-centric-design.md:53-57、63）；CTA 文字对按钮底 ≥4.5:1（content/layouts/layout--hero-features-cta.md:68），实测白字压 Pink7 = 6.95。
- 定价段照 Pricing Page + CTA 顺序（content/layouts/layout--pricing-page-cta.md:62-66）：定价标题 → 价格卡 ×3 → 对比表 → FAQ → 结尾 CTA；每卡带 CTA、突出目标档、年付省额写真实数字、FAQ 解顾虑（content/layouts/layout--pricing-page-cta.md:65-68）。
- 最终 DOM 顺序：公告条 + 导航 → Hero → 能力矩阵（Gray1 带）→ 定价（白）→ FAQ（Pink1 带）→ 结尾 CTA（白）→ Ft7 页脚（Gray1）。区块靠底色切换，不加框线。

---

## 6. 组件与交互决策

- **N12 导航**：公告条（Pink1）+ 吸顶导航（blur）；≤960px（断点派生）链接收进「菜单」disclosure（`aria-expanded` + `aria-controls`），Esc 在 document 级监听，任意焦点位置都能关并回焦到菜单按钮（content/a11y/w3c--apg-disclosure.md:38-39、44-45 的 disclosure 模式用于 FAQ；菜单同模式实现）。
- **Hero mock**：纯 CSS + 文本三区（提纲状态列 / 文稿 / 状态栏），不画假浏览器外框；提纲项用「已写 / 当前 / 待写」三态点区分，文稿末尾给「建议」卡与「↵ 按回车续写本节」的键盘提示，直接对应 headline 的「只差一次回车」。字数只有一处口径：底部状态栏「2,180 / 5,000 字」是全篇，顶部状态行写「第 3 节」，不再放第二个字数。阴影为 mock 浮层（derived）。
- **能力矩阵**：六块卡片内嵌 mini 片段，用真实写作场景代替「图标 + 一句解释」：提纲树（当前节高亮）、续写光标、改前划线 / 改后加粗的对照、模板与术语 chip、导出格式 chip。片段内文字用 14px 正文档，不降到 12px 可读性下限。
- **定价切换**：`aria-pressed` 分段控件，价格与说明整组联动；省额标注取诚实下限（见 FINDINGS §3）。三档 CTA 统一等宽；副标题写「专业与团队档都能先试 14 天，免费档永久免费」，与按钮文案一致。
- **FAQ**：W3C APG disclosure，button + `aria-expanded` + `aria-controls`（content/a11y/w3c--apg-disclosure.md:44-45），Enter/Space 切换（:38-39），互斥展开，Esc 关闭并把焦点还给按钮。
- **订阅表单**：空值 disabled → 非法邮箱 error（`aria-invalid` + `role=status`）→ loading（`data-loading` + 文案）→ success；错误文案结构化（问题 + 动作）。
- **焦点**：`:focus-visible` 2px 实线 Pink8 + 2px offset，出现即时无过渡（键盘 Tab 实测 `:focus-visible` 命中，实测 outline `2px solid rgb(128,10,95)`）。
- **可访问性底线**：skip link、语义 landmark、命中区 ≥44px、`overflow-x: clip`（html + body）、表格行头 `scope`、按钮文案不换行。

---

## 7. checks 盲测题自查（数值类设计点，答不出即回原文）

| 设计点 | 问题 | 答案 | 出处 |
| --- | --- | --- | --- |
| 字号阶梯 | TDesign 第一字阶增长步数？桌面 Body 与桌面最小字号？ | +2px；Body 14px、桌面最小 12px | content/type/tdesign.tencent.com--fonts.md:46 |
| 行高定标 | 为什么行高公式是字号 + 8 而不是固定 1.5 倍？ | 固定 1.5 倍在大字号下行高过大、多字号混排割裂；+8 让不同字号呼吸空间一致 | content/type/tdesign.tencent.com--fonts.md:67 |
| 字重克制 | TDesign 为什么只提供 400 和 600？ | Windows 下小于 600 都渲染为常规体，两档才能跨系统稳定区分 | content/type/tdesign.tencent.com--fonts.md:79 |
| 动效时长 | 进场与退场时长差别？弹窗例子？ | 进场比退场略长：弹窗进 300ms、退 200-250ms | content/motion/nngroup.com--animation-duration.md:84 |
| 动效时长 | 每天触发几十次的高频动效上限？ | 150ms 到 200ms | content/motion/ui-specs--motion-implementation.md:30 |
| 缓动曲线 | ease-out 关键字等价哪条曲线？ | cubic-bezier(0, 0, 0.58, 1) | content/standards/w3c--css-easing-1.md:138 |
| 减少动效 | reduced motion 生效时怎么处理？ | 动效全关、即时变化；禁止闪烁与大幅扫动，界面在无动效下仍完整可用 | content/motion/nngroup.com--animation-duration.md:24 |
| 视觉层级 | 字号最多分几档、范围？ | 最多 3 档：正文 14-16、副标 18-22、标题最大 32（UI 字号档；营销页 hero 展示字用 TDesign 第二字阶 64px，档数与大元素 ≤2 的原则照守） | content/howto/nngroup.com--visual-hierarchy-ux-definition.md:76-77（顶档见 §3 字阶表） |
| 界面配色框架 | 基准色相盘怎么取？ | 色相 30° 间隔、饱和度与亮度 100% 做基准，状态色再降饱和/降亮度单维度变化 | content/howto/learnui.design--color-in-ui-design-a-practical-framework.md:282、242 |
| 对比度达标线 | 普通文本与大字的 AA 基线？ | 普通文本 4.5:1，大字（19px+ 粗或 24px+ 常规）3:1 | content/a11y/w3c--wcag-2.2.md:397 |

---

## 8. 交付自验

### 8.1 四档横向溢出（headless Chrome CDP 实测 `documentElement.scrollWidth / clientWidth`）

| 宽度 | scrollWidth | clientWidth | 结果 |
| --- | --- | --- | --- |
| 320 | 305 | 305 | 相等 ✓ |
| 375 | 360 | 360 | 相等 ✓ |
| 768 | 753 | 753 | 相等 ✓ |
| 1280 | 1265 | 1265 | 相等 ✓ |

（1930 视口下滚动条占 15px，所以两列同减，判据是两值相等；2026-11-07 v2 复测）

375 下对比表在 `.compare-scroll` 内横向滚动（容器 scrollWidth 560 / clientWidth 343），页面本身不横溢。

### 8.2 交互实测（真实事件驱动，前后数字）

| 操作 | 前 | 后 |
| --- | --- | --- |
| 点「按年付」 | 价格 0 / **29** / 79；说明「按月计费，随时取消。」；`aria-pressed=false` | 价格 0 / **23** / 63；说明「年付 ¥276，比月付省 ¥72。」；`aria-pressed=true` |
| 点回「按月付」 | 无 | 价格回到 29，说明回「按月计费，随时取消。」 |
| 点 FAQ 第 1 条 | `aria-expanded=false`，max-height 0 | `aria-expanded=true`，max-height 48px = scrollHeight 48px |
| 再点第 2 条 | 第 1 条 true | 第 1 条 false、第 2 条 true（互斥） |
| 对第 2 条按 Esc | 展开中 | `aria-expanded=false`，焦点回 faq-q2 |
| 提交 `abc` | 无 | `aria-invalid=true`，提示「邮箱格式看起来不对，检查一下再提交。」 |
| 输入 `lin@example.com` 提交 | 按钮 enabled | loading：文案「正在订阅…」、`data-loading=true`；0.6s 后 success「确认邮件已发到 lin@example.com，点一下确认就订阅好了。」 |
| 清空邮箱 | 按钮 enabled | `disabled=true` |
| 375 点「菜单」 | `data-open=false` | `data-open=true`、`aria-expanded=true`、display flex |
| 菜单按 Esc | 展开中 | `data-open=false`，焦点回 menu-btn |
| 点公告条 × | 无 | `data-dismissed=true`（公告条隐藏） |

### 8.3 对比度实测（脚本按实际色值计算，WCAG 2.1 比值）

- 正文 Gy1 on 白 **17.58**｜on Gray1 **16.00**｜on Pink1 **16.06**
- 次要文字 Gy2 on 白 **5.74**｜on Gray1 **5.58**｜on Pink1 **5.58**
- 白字 on Pink7 **6.95**（CTA ≥4.5 ✓）｜on Pink6 **4.87**（hover）｜on Pink8 **9.88**（active）
- 链接 Pink7 on 白 **6.95**；Pink7 on Pink1 **6.31**（浅底带内强调）
- 套餐清单 Gray9 on 白 **6.48**；年付省额 Green7 on Pink1 **5.90**；错误文字 Red7 on 白 **6.31**
- 输入框/次按钮边界 Gray7 on 白 **3.41**（非文本 ≥3 ✓）；focus 环 Pink8 vs 白 **9.88**
- Gray3 发丝线 vs 白 1.23（装饰分隔，不承担控件边界）

### 8.4 质量六条（逐条证据）

1. **Hero 字号按字数套档**：标题 12 字（≤20）→ 顶档，实测 h1 `64px / 72px`（content/type/tdesign.tencent.com--fonts.md:61）；h2 `36/44`、价格 `48/56`、卡片标题 `20/28` 逐档取值。
2. **层次靠底色不靠框线**：DOM 断言 `.tile / .plan / .faq__q` 均无非零 border；分区靠白 / Gray1 / Pink1 三种底切换；全页发丝线 54 处均为 1px Gray3 单一分隔。
3. **强调色面积 < 5%**：v2 实测 **0.60%**（Pink7/6/8 实填面积 / 页面总面积，DOM 计算）。
4. **无外部图片**：hero 是纯 CSS 编辑器 mock；能力矩阵改为六块内嵌 mini 片段（提纲树 / 续写光标 / 改前改后 / 模板 chip / 术语 chip / 导出 chip），全部由 DOM 与文本构成，比装饰图标更能说明能力，也不引入外部图片。
5. **交互八态**：default / hover（Pink6，实测 `rgb(196,54,149)`）/ focus（实测 `2px solid rgb(128,10,95)`）/ active（Pink8）/ disabled（表单按钮）/ loading（`data-loading`）/ error（`aria-invalid`）/ success（`role=status`）全部有实现与实测记录；`prefers-reduced-motion` 实测全站 transition `0s`。
6. **行高 = 字号 + 8**：v2 遍历全页 152 个含直接文本的节点（排除 SVG 内文字），实测 **0 违例**；修复前为 81 处，根因见 §10。

### 8.5 零外部请求与环境

- `performance.getEntriesByType('resource')` = []：无任何外链、字体、图片请求。
- 验证环境：headless Chrome（CDP）真实点击/键盘事件驱动，非内置 IAB；动效只做终态断言（`aria-expanded`、`max-height`、`data-loading`、computed style）。
- 截图：`examples/quilldeck/preview.png`（1280×800 首屏）；vision 走查无重叠、无溢出、无假浏览器框、无渐变文字。

---

## 9. 超出 TDesign 两篇的数值

间距、圆角、阴影、断点、动效时长/缓动、组件尺寸、内容最大宽度在两篇原文中均无定义，回源或派生规则与理由记在 FINDINGS.md，不冒充规范值。

---

## 10. v2 修订记录（2026-11-07）

本轮不改产品意图与四轴，只修缺陷、补可读性：

| 改动 | 前 | 后 | 依据 |
| --- | --- | --- | --- |
| 行高实现 | `body` 的 `calc(1em + 8px)` 被继承成固定 24px，14px 文字全变 14/24，实测 81 处违例 | 基座加 `:where(body, body *) { line-height: calc(1em + 8px) }`，按元素自身字号逐元素计算；实测 152 个文本节点 0 违例 | content/type/tdesign.tencent.com--fonts.md:67、73-74；旧自查只查显式声明 line-height 的元素，漏了继承链 |
| Hero mock | 只有提纲 + 两段正文，字数口径与状态缺失 | 补三态提纲点、建议卡、`↵ 按回车续写本节`；字数只留底部一处全篇口径 | headline「只差一次回车」需要有界面证据 |
| 能力矩阵 | 六张线性图标 + 一句解释，模板感重 | 六块 mini 片段（提纲树 / 续写光标 / 改前改后 / 模板 chip / 术语 chip / 导出 chip），片段文字用正文档字号 | content/layouts/layout--feature-rich-showcase.md:57-61、68（一张卡一个信息） |
| 对比表 | 全部左对齐、无推荐列高亮、符号无图例 | 行头左对齐、数据列居中、专业列 Pink1/Pink2 高亮、caption 带 ✓/无 图例 | 定价页对照的做法 content/layouts/layout--pricing-page-cta.md:62-67 |
| 定价 CTA | 副标题写「所有档位都能先试 14 天」，免费与团队按钮却不说试用 | 副标题改「专业与团队档都能先试 14 天，免费档永久免费」；三档按钮等宽 | 文案与承诺对齐，避免转化误解 |
| FAQ 图标 | `+` / `−` 字符，字重与正文不一致 | 2px chevron，展开旋转 135°，150ms | 图标线与 2px 焦点环同粗细 |
| 卡片小字对比 | gray7 `#8b8b8b` 作正文压在 Gray1 上只有 3.0 左右 | 统一 gray9 `#5e5e5e`（on Gray1 5.84、on white 6.48） | WCAG AA 正文 4.5:1 |
| 滚动淡入 | 曾尝试 IntersectionObserver，无头/后台标签页定时器节流会让区块停在 opacity 0 | 整段移除，不做滚动淡入；动效只保留按钮、FAQ、计费切换这些确定性的过渡 | 不稳定动效宁可不要 |
