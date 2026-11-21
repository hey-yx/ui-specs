# FINDINGS · ListenRail（listenrail）

本轮「AI 读本库做设计」真实测试中，UISpecs 路由与取值整体走通（设计点命中 10 个，数值逐条落到 `content/...:行号`，无一处凭记忆编数值）。下面是流程摩擦与库缺口，按「库数据问题 / 规则冲突 / 缺口 / 跨工具」分节。凡未标行号的数值都不是库内原文值。

## 1. 路由包 schema 不齐：layouts / styles 点没有 value_notes

`site/dist/ai/design-points.json` 里 `points[]` 的 `value_notes` 字段不是每点都有，layouts 类点（如 `layouts-content-community`）读该字段直接 KeyError，消费端必须 `.get()`。values 类点都有，schema 不统一。核实方式：python 遍历 `points[]` 读 `value_notes`，两类点行为不一致。影响有限（版型/风格本来不给数值），但机器入口最好齐平或在 `usage` 里写明哪些 type 没有该字段。

## 2. 动效数值冲突：风格篇示意变量 vs GAP_RULES 回源篇

已下线的风格篇曾给 `--reveal-duration: 600ms`，与 GAP_RULES 的动效回源（NN/g 时长篇，100-500ms 区间，进场 300ms：content/motion/nngroup.com--animation-duration.md:78、84）打架。风格层下线后这类冲突消失，时长一律按 GAP_RULES 取；本站 300ms 记录保留。

## 3. 触控/命中区目标尺寸在库内没有可引用原文

按钮、输入框 44px 高、命中区 44px 只能标 derived（GAP_RULES「组件尺寸」兜底）。`content/` 的 components / patterns 分区没有 target-size 篇，WCAG 2.5.8/2.5.5 的目标尺寸条款未入库。这类数值每个站都要用一次，属高频缺口，优先收文。

## 4. 焦点环只有要求没有规格

可访问性清单里 visible-focus 只有要求没有规格（原风格篇已下线），但环宽、颜色、offset 没有任何原文可引，本站 2px 墨色环是 derived。另有数值陷阱：TDesign Yellow 系对白全部不足 3:1（Yellow3 1.42 / Yellow4 1.76 / Yellow5 2.33，实算），当环色必挂，只能换墨色，「扩展色能不能做焦点环」值得在色彩篇或 GAP_RULES 补一句判据。

## 5. 项目选型表对「新品牌中文官网」语境有缺口

「品牌官网 / 营销页」行指向 brands 分区的对应品牌 DESIGN.md（`guide.ts 的项目选型方案「品牌官网 / 营销页」行`），那是复刻语境，新品牌没有对应篇目；「中文产品 UI」行只有 fonts / color 两篇。结果是：版型、风格、转化要点全部来自 `content/layouts/`、`content/styles/` 的 ui-ux-pro-max CSV 二手数据集（landing.csv / styles.csv 转制），能定区块顺序与做法，但没有一手数值，数值仍要回 TDesign。对「新品牌 + 中文 + 营销页」这种常见组合，选型表给不出一条完整路线，只能两行拼。建议在「品牌官网 / 营销页」行补注「新品牌无对应 DESIGN.md 时：数值回 TDesign，版型/风格走 layouts+styles」。

## 6. 设计点 select 判据的字面层级与大纲位置冲突

`components-cards` 的 select 写「同级卡片用同级标题 h2」，源头（content/components/inclusive-components.design--cards.md:57-58）的语境是卡片本身即顶级区块；但单集条目挂在「往期单集」h2 之下时同级原则应落成 h3。select 是选点判据没错，但按字面执行会造出「区块 h2 与 8 个条目 h2 同级」的坏大纲。本站保留同级原则、层级随大纲取 h3。建议 select 补「层级随大纲位置」。

## 7. 产物自留项（不构成库问题）

- 375px 下三个收听平台按钮并排偏紧（gap 12px 是刻度值，不溢出、可点）；如要更松可断点换行。
- Hero 副文衬线字族链是派生写法（ui-design-library 技能口径），库内原文只有「长文用衬线」的原则（designsystem.digital.gov--typography.md:86、88（原文已下架）），没有给成链的字族表。

## 8. 跨工具摩擦：naming skill 引用的 domain-cli.ts 已不在工作树

naming skill 默认核验命令 `bun scripts/domain-cli.ts`（skill 原文三处引用）在 NameYouLike 当前工作树不存在（`scripts/` 只有 `domain-check-fast.py` 与 `learn-naming.ts`，`domain-cli` 只存于 git 历史；核实方式：ls + 全仓文件搜索）。本轮域名闸改走 prompt.txt 指定的 `python3 scripts/domain-check-fast.py`（同属仓内件路线，48 查 0 unknown）。skill 已补注缺失时的改道方式；若 domain-cli.ts 是被误删，建议恢复到 scripts/。

## 9. 走通的部分（正面发现）

- 六步路由真被走通：任务 → 拉 design-points.json → 按 `points_by_task` 与 select 选点 → 读原文取值 → 项目选型 → 出稿；没有退回「直接翻 content/ 目录」的路径。
- GAP_RULES 确实管住了「禁止现场各自派生」：间距回 uisdc 8px 刻度（content/layout/uisdc.com--code-for-design-of-spacing.md:42）、动效回 NN/g、圆角/发丝线/组件尺寸全标 derived，无一处冒充原文值。
- method_required 两篇直接落进实现：3 档层级 + 最大元素 ≤2（content/howto/nngroup.com--visual-hierarchy-ux-definition.md:76-77）、hover/选中各只动一个维度（content/howto/learnui.design--color-in-ui-design-a-practical-framework.md:242）。
- 主源的 token 映射（content/color/tdesign.tencent.com--color.md:508-510）与状态色搭配规则可以直接对上，不需要自行发明。

## 回流建议（供主会话汇总，本轮未改库）

按 MAINTENANCE_RULES 的回流口径，本报告的新缺口建议回填：§3 target-size 收文、§4 焦点环判据、§2 动效冲突注记、§5 项目选型表补注。同一缺口若在第二个站再出现，说明规则没写进 guide。
