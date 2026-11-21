# SamePaper · 取值记录

- 需求：`briefs/samepaper.md`（中文协作 SaaS 的营销落地页，卖点是文档、讨论、任务在同一张纸面上）
- 基准规范：**TDesign**（`site/dist/ai/guide.md:24`「中文产品 UI（中后台 / 工具 / 内容 / 协作）」行）
- 版式三件：**Marquee Hero · N5 · Ft5**（批内调度给定，未换件）
- 强调色：**Purple7 `#7137bf`**（`content/color/tdesign.tencent.com--color.md:198`）
- 交付：`examples/samepaper/index.html`（单文件，CSS 与 JS 内联，零外部请求）

---

## 1. 设计前提

需求只给了产品、受众和卖点，区块与语气自己推。

1. 这是营销页，卖点本身是一句主张。按形态表先判「首屏要不要一句主张撑住」（`briefs/layouts.md:11`），选 03 Marquee Hero（`briefs/layouts.md:24`）。
2. 受众是正在评估协作工具的团队，页面要能当场演示「同一张纸」，而不是列功能。首屏之后直接放一张可点的评审纸：段落、右边讨论、底部待办互相指向。
3. 结构：主张 → 纸面演示 → 三块能力 → 客户引语 → CTA → 收尾。首屏只有一个最大元素（h1），页脚大字是第二个，符合「最大的元素不超过 2 个」（`content/howto/nngroup.com--visual-hierarchy-ux-definition.md:77`）。
4. 文案自己定：短句、具体动作，不用「赋能」「闭环」「一站式」这类词。虚构客户在署名处标「示例客户」，虚构数字只出现在客户自述里。

## 2. 版式三件与落法

| 件 | 形态要点 | 为什么是它 | 落到本页 |
| --- | --- | --- | --- |
| **Marquee Hero** | 一句大字占满折叠线，下面换结构（`briefs/layouts.md:24`） | 卖点是一句可记住的主张 | h1 两行，最大档 64；下面直接换纸面演示，不接 hero 大图 |
| **N5** | 悬浮胶囊，带模糊底（`briefs/layouts.md:53`） | 现代极简营销页，导航不该抢主张 | 顶部居中胶囊，滚动后加阴影；窄屏只留品牌与 CTA |
| **Ft5** | 一句大字收尾，字标与链接压在小字里（`briefs/layouts.md:71`） | 需要一个收束，不需要站点地图 | 「纸上见。」48 档，下面一行版权与四个链接 |

反模板做法：

- 没有「大图英雄 + 三列图标卡 + logo 墙」这套默认组合。唯一的产品画面是一张能点的评审纸，纸上的评论和待办都真的会响应。
- 强调色只做动作与当前位置，不做整段底色。首屏强调色像素占 0.89%（1280×800 截图统计）。
- 三块能力用同一形状的浅灰容器，不叠边框、不叠投影；层级靠底色与间距。

## 3. 色彩

只用一个色相（紫，hue 约 274°）加 TDesign 中性色。配色框架先定主色与面积，再取色板原文值（`content/howto/learnui.design--color-in-ui-design-a-practical-framework.md:282`）。

| 用途 | 值 | 出处 | 实测对比度 |
| --- | --- | --- | --- |
| 主按钮 / 强调文字 | `#7137bf` Purple7 | `content/color/tdesign.tencent.com--color.md:198` | 白字压它 **7.00:1** |
| hover / 按下 | `#5610a4` Purple8 | `content/color/tdesign.tencent.com--color.md:199` | 白字 **10.47:1** |
| 选中评论卡 / 浅底 | `#fbf0ff` Purple1 | `content/color/tdesign.tencent.com--color.md:192` | 深字 **16.07:1**；说明字 **5.87:1** |
| 装饰浅档 | `#eedcff` Purple2 | `content/color/tdesign.tencent.com--color.md:193` | 不承载文字 |
| 正文 / 深色 CTA 底 | `#181818` Gray14 | `content/color/tdesign.tencent.com--color.md:108` | **17.76:1** |
| 次级正文 | `#4b4b4b` Gray10 | `content/color/tdesign.tencent.com--color.md:104` | **8.72:1** |
| 说明 / 时间戳 | `#5e5e5e` Gray9 | `content/color/tdesign.tencent.com--color.md:103` | 白底 **6.48:1**，紫底 **5.87:1** |
| 页面灰 | `#f3f3f3` Gray1 | `content/color/tdesign.tencent.com--color.md:95` | 不承载文字 |
| 浅灰块 | `#eeeeee` Gray2 | `content/color/tdesign.tencent.com--color.md:96` | 不承载文字 |
| 分隔线 | `#e8e8e8` Gray3 | `content/color/tdesign.tencent.com--color.md:97` | 装饰 |
| 控件边 | `#dddddd` Gray4 | `content/color/tdesign.tencent.com--color.md:98` | 非文本边界，另配 3:1 以上 |
| 成功 / 已完成 | `#008858` Green6 | `content/color/tdesign.tencent.com--color.md:83` | 图标与勾选，白字 **4.50:1** |
| 成功底 | `#e3f9e9` Green1 | `content/color/tdesign.tencent.com--color.md:78` | 深字 **16.06:1** |
| 纸白 | `#ffffff` White | `content/color/tdesign.tencent.com--color.md:93` | 主底色 |

全站最低对比度 **5.87:1**，出现在选中评论卡上的时间戳（`#5e5e5e` 压 `#fbf0ff`）。白底与灰底的正文都在 6:1 以上，没有靠深色底硬压的做法。

## 4. 字阶与行高

只用 TDesign 九档里的八档（`content/type/tdesign.tencent.com--fonts.md:52-61`），行高按「字号 + 8」公式（`content/type/tdesign.tencent.com--fonts.md:69`）。

| 档 | 用在 | 行高 | 出处 |
| --- | --- | --- | --- |
| 64px | h1（1280 以上） | 72 | `content/type/tdesign.tencent.com--fonts.md:61` |
| 48px | h1（1200 以下）、页脚大字 | 56 | `content/type/tdesign.tencent.com--fonts.md:60` |
| 36px | h1（768 到 991）、页脚大字（窄屏） | 44 | `content/type/tdesign.tencent.com--fonts.md:59` |
| 28px | 区块标题、引语 | 36 | `content/type/tdesign.tencent.com--fonts.md:58` |
| 24px | 区块标题（窄屏） | 32 | `content/type/tdesign.tencent.com--fonts.md:57` |
| 20px | 首屏副文、卡片标题、客户结果 | 28 | `content/type/tdesign.tencent.com--fonts.md:56` |
| 16px | 正文、按钮、演示段落 | 24 | `content/type/tdesign.tencent.com--fonts.md:55` |
| 14px | 导航、任务、说明 | 22 | `content/type/tdesign.tencent.com--fonts.md:54` |
| 12px | 眉题、标签、时间戳、页脚 | 20 | `content/type/tdesign.tencent.com--fonts.md:53` |

12px 占比 **40.6%（41 / 101 个直接文本元素）**，高于前两个案例的 13% 与 27%。这是营销页信息密度带来的：版本号、参与人数、时间戳、标签、页脚都在 12 档。12px 是 TDesign 桌面端下限，仍可读，但这是本站最明显的字号分布特征，记在 FINDINGS。

## 5. 间距与栅格

| 项 | 值 | 出处 |
| --- | --- | --- |
| 网格基数 | 8px | `content/layout/tdesign.tencent.com--layout.md:78` |
| 槽 | 16px | `content/layout/tdesign.tencent.com--layout.md:92` |
| 安全边距 | 24px | `content/layout/tdesign.tencent.com--layout.md:96` |
| 小间距档 | 4 与 12 两档 | `content/layout/tdesign.tencent.com--layout.md:138` |
| 列结构 | 12 栅格 | `content/layout/tdesign.tencent.com--layout.md:104` |
| 断点 | 768px / 992px / 1200px | `content/layout/tdesign.tencent.com--layout.md:156-158` |

实际用的间距序列是 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96，全部落在 8 的倍数或 4、12 两个半档上。容器最大宽 1200，正文行长在纸面里约 36 字，首屏副文 26 字，同页只用一种行长口径。

## 6. 圆角、控件与派生值

TDesign 不给下表中的规格，全部按「成套自洽」派生，标 derived：

| 维度 | 值 | 性质 |
| --- | --- | --- |
| 圆角 | 4 / 8 / 胶囊 999 | derived |
| 动作高度 | 40 / 44 | derived |
| 勾选框 | 20 见方 | derived |
| 发丝线 | 1px | derived |
| 焦点环 | 2px 实线 + 2px 偏移 | derived（按 WCAG 2.2 原则） |
| 首屏高度 | 85vh，下一节露头 | derived |
| 评论卡阴影 | 两级，弱投影 | derived |
| 遮罩 | rgba(0, 0, 0, 0.45) | derived（本页未用弹层，预留给后续） |

## 7. 动效

时长只取 TDesign 桌面 token（`content/motion/tdesign.tencent.com--motion.md:101-103`），曲线用标准缓动（`content/motion/tdesign.tencent.com--motion.md:115`）。

| 场景 | 动的属性 | 入场 / 出场 | 出处 |
| --- | --- | --- | --- |
| 导航吸顶 | box-shadow、background | 240ms / 200ms | `content/motion/tdesign.tencent.com--motion.md:102` |
| 评论选中、解决 | background、opacity | 240ms / 240ms | `content/motion/tdesign.tencent.com--motion.md:102` |
| 新评论出现 | opacity、transform | 240ms / 200ms | `content/motion/tdesign.tencent.com--motion.md:102` |
| 任务进度条 | width | 240ms / 240ms | `content/motion/tdesign.tencent.com--motion.md:102` |
| 按钮、链接悬停 | background、color | 200ms / 200ms | `content/motion/tdesign.tencent.com--motion.md:101` |

TDesign 的 token 不区分进场与出场。本站按「入场比出场稍长」的惯例取 240 进、200 出，两个值都在 token 内，没有自造时长。勾选框与评论卡的动作属性参考 transitions.dev 的配方（`content/motion/transitions.dev--25-checkbox-check.md:41`），毫秒仍按 TDesign 覆盖。

实测：新评论插入后 `getAnimations()` 返回 2 条过渡（opacity、transform），时长 240ms；跑完后 opacity 为 1。`prefers-reduced-motion: reduce` 下所有过渡清零，功能结果不变。

## 8. 交互实测

| 动作 | 操作前 | 操作后 |
| --- | --- | --- |
| 定位评论 | 周野的评论未选中 | 卡片加 `is-active`，对应段落 b3 加 `is-anchor`，背景变紫 |
| 标记已解决 | 待处理 2 | 待处理 1；按钮 `aria-pressed` 由 false 变 true，文案变「已解决」，卡片变灰 |
| 发一条评论 | 3 条评论 | 4 条；作者「你」，时间「刚刚」，落在当前段落旁，待处理回到 2 |
| 勾选待办 | 1 / 4，进度 25% | 2 / 4，进度 50% |
| 滚动 600 | nav 无阴影 | `nav is-stuck`，阴影出现，胶囊仍在 top 16 |
| 键盘 Tab | 页面无焦点 | 焦点落到「跳到正文」，`:focus-visible` 为 true，2px 紫环 |

## 9. 验收

| 项 | 结果 |
| --- | --- |
| 横向溢出 | 320 / 375 / 414 / 767 / 768 / 991 / 992 / 1199 / 1200 / 1280 / 1440 十一档，`scrollWidth === clientWidth` 全部相等 |
| 外部请求 | `performance.getEntriesByType('resource')` 过滤本地后为 0 |
| 行高普查 | 101 个直接文本元素，`lineHeight - fontSize = 8` 违例 0 |
| 最低对比度 | 5.87:1 |
| 强调色面积 | 0.89%（1280×800 首屏像素统计） |
| 形状一致 | 动作件胶囊 999（导航 40、主按钮 44、标签 24），容器件 8，勾选框 4；同排导航项高度实测都是 40 |
| 单文件 | 约 32KB，无外链标签 |
| 核心交互 | 6 条全过，数字见第 8 节 |

## 10. 与需求的对应

| 需求信息 | 页面落点 |
| --- | --- |
| 团队协作 SaaS 的营销落地页 | 整页是营销结构，CTA 两处，价格口径在 CTA 文案里 |
| 给产品、设计、研发团队看 | 用评审、版本、待办、回滚这些团队日常词，不用行业黑话 |
| 文档、讨论、任务写在同一张纸面上 | 首屏主张，加上可点的纸面演示；三块能力各讲一层 |
| 站名 | 需求给定 `SamePaper`，未另起名；没有走 NameYouLike 的新起名流程 |

---

参考：TDesign 选型行与基准规范全文见 `site/dist/ai/guide.md:24`；版式件名与取舍见 `briefs/layouts.md`。
