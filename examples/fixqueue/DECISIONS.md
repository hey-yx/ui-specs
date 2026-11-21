# FixQueue 一线工单台取值记录

基准规范：TDesign（腾讯），React 组件库 tdesign-react 1.18.6，React 18.3.1。需求真源 `briefs/fixqueue.md`，框架 react。

本记录逐条写「取值 → 出处」，出处格式为 `content/完整路径:行号`。基准规范没有给出、由我按规则推出来的数值，在行内标「派生」，并写明推法。交付前执行 `python3 scripts/check-ledger.py <本记录路径>`，退出码 0 即通过。

## 1 版式选型（Hallmark）

| 项 | 选型 | 理由 |
| --- | --- | --- |
| macrostructure | Stat-Led（04-stat-led） | 工单台每天第一个问题是「积压多少、最老多久」，单一巨型数字加限定语最先把这件事说清；上一版用 Index-First 的等宽索引列表，这次必须换结构，Stat-Led 与「先看量再看单」的操作顺序一致 |
| nav | N13 inline ⌘K search pill | 搜索要能从任何位置唤起，占一行工具栏会挤压筛选；药丸放进页头，把工具栏整行留给筛选与批量动作 |
| footer | Ft2 inline rule | 页脚只承载「演示数据 / 版本 / 规范溯源」三类元信息，一行横线足够，不抢台账的视觉重量 |
| tone | utilitarian-dense | 一线班中连续处理工单，信息密度优先于装饰 |

CSS 首行注记：`macrostructure: Stat-Led · tone: utilitarian-dense · anchor hue: blue`，与 `<head>` 里的溯源注释一致。

## 2 色板

全部取自 TDesign 色板原文，同名变量写在 `:root` 里。

| 用途 | 取值 | 出处 |
| --- | --- | --- |
| 页面底色（Gray1） | `#f3f3f3` | content/color/tdesign.tencent.com--color.md:95 |
| 卡片与表格底（White） | `#ffffff` | content/color/tdesign.tencent.com--color.md:93 |
| 分隔线（Gray3） | `#e8e8e8` | content/color/tdesign.tencent.com--color.md:97 |
| 次级分隔线（Gray4） | `#dddddd` | content/color/tdesign.tencent.com--color.md:98 |
| 正文（Gray14） | `#181818` | content/color/tdesign.tencent.com--color.md:108 |
| 次级文字（Gray9） | `#5e5e5e` | content/color/tdesign.tencent.com--color.md:103 |
| 非文本装饰（Gray6） | `#a6a6a6` | content/color/tdesign.tencent.com--color.md:100 |
| 控件边框（Gray7） | `#8b8b8b` | content/color/tdesign.tencent.com--color.md:101 |
| 品牌主色（Blue7） | `#0052d9` | content/color/tdesign.tencent.com--color.md:48 |
| 品牌 hover（Blue8） | `#003cab` | content/color/tdesign.tencent.com--color.md:49 |
| 品牌浅底（Blue1） | `#f2f3ff` | content/color/tdesign.tencent.com--color.md:42 |
| 危险色（Red7） | `#ad352f` | content/color/tdesign.tencent.com--color.md:60 |
| 危险浅底（Red1） | `#fff0ed` | content/color/tdesign.tencent.com--color.md:54 |
| 告警色（Orange7） | `#954500` | content/color/tdesign.tencent.com--color.md:72 |
| 告警浅底（Orange1） | `#fff1e9` | content/color/tdesign.tencent.com--color.md:66 |
| 成功色（Green7） | `#006c45` | content/color/tdesign.tencent.com--color.md:84 |
| 成功浅底（Green1） | `#e3f9e9` | content/color/tdesign.tencent.com--color.md:78 |
| 分布条 待处理段（Orange5） | `#e37318` | content/color/tdesign.tencent.com--color.md:70 |
| 分布条 处理中段（Blue6） | `#366ef4` | content/color/tdesign.tencent.com--color.md:47 |
| 分布条 已解决段（Green5） | `#2ba471` | content/color/tdesign.tencent.com--color.md:82 |
| 分布条 已关闭段（Gray7） | `#8b8b8b` | content/color/tdesign.tencent.com--color.md:101 |
| 组件变量 蓝 2 | `#d9e1ff` | content/color/tdesign.tencent.com--color.md:43 |
| 组件变量 蓝 3 | `#b5c7ff` | content/color/tdesign.tencent.com--color.md:44 |
| 组件变量 蓝 4 | `#8eabff` | content/color/tdesign.tencent.com--color.md:45 |
| 组件变量 蓝 5 | `#618dff` | content/color/tdesign.tencent.com--color.md:46 |
| 组件变量 蓝 9 | `#002a7c` | content/color/tdesign.tencent.com--color.md:50 |
| 组件变量 红 8 | `#881f1c` | content/color/tdesign.tencent.com--color.md:61 |

品牌蓝与白底的对比度原文自己给了数：`6.54:1`（content/color/tdesign.tencent.com--color.md:40）。状态段用的三个中间色，原文也各带一行对比度：橙 5 为 3.12、绿 5 为 3.16（content/color/tdesign.tencent.com--color.md:64、76），正好卡在图形元素 3:1 的线上，实测值见 evidence.json。

## 3 字号与行高

| 用途 | 取值 | 出处 |
| --- | --- | --- |
| 最小字号（桌面端） | 12px | content/type/tdesign.tencent.com--fonts.md:53 |
| 正文 | 14px | content/type/tdesign.tencent.com--fonts.md:54 |
| 区块标题 | 16px | content/type/tdesign.tencent.com--fonts.md:55 |
| 统计卡数字 | 24px | content/type/tdesign.tencent.com--fonts.md:57 |
| hero 数字 | 64px | content/type/tdesign.tencent.com--fonts.md:61 |
| 行高规则：字号 + 8 | 派生 20px、22px、24px、32px、72px | content/type/tdesign.tencent.com--fonts.md:69 |
| 表格数字用等距数字（tabular-nums） | 原则引用 | content/type/tdesign.tencent.com--fonts.md:40 |

行高推法：原文给「行高 = 字号 + n」，n 取 8，于是 12 号配 20、14 号配 22、16 号配 24、24 号配 32、64 号配 72。数字列（统计卡、等待时长、分布百分比）统一 `font-variant-numeric: tabular-nums`，依据是原文里表格数字那段。

## 4 间距、圆角、断点

| 用途 | 取值 | 出处 |
| --- | --- | --- |
| 网格基数 | 8px | content/layout/tdesign.tencent.com--layout.md:78 |
| 栅格槽宽 | 16px | content/layout/tdesign.tencent.com--layout.md:92 |
| 页面侧边距 | 24px | content/layout/tdesign.tencent.com--layout.md:96 |
| 8 倍数之外的两档小间距 | 派生 4px、12px | content/layout/tdesign.tencent.com--layout.md:138 |
| 卡片圆角 | 派生 8px | content/layout/tdesign.tencent.com--layout.md:78 |
| 标签与色块圆角 | 派生 4px | content/layout/tdesign.tencent.com--layout.md:78 |
| 平板断点 sm | 768px | content/layout/tdesign.tencent.com--layout.md:156 |
| 断点切换点（表格与卡片分界） | 派生 767px | content/layout/tdesign.tencent.com--layout.md:156 |
| 中等屏断点 md | 992px | content/layout/tdesign.tencent.com--layout.md:157 |
| 宽屏断点 lg | 1200px | content/layout/tdesign.tencent.com--layout.md:158 |
| 侧边导航收起断点 | 992px | content/layout/tdesign.tencent.com--layout.md:132 |

说明：4 与 12 两档是原文点名的小间距，不带单位，按 4px、12px 落到 CSS；断点以 768px 为界，卡片态取「小于 768px」，所以媒体查询写 `max-width: 767px`，767 是 768 减 1 的派生值。圆角两档取自 8 点网格的 4 与 8。

## 5 动效

| 用途 | 取值 | 出处 |
| --- | --- | --- |
| 微观变换、淡入淡出 | 200ms | content/motion/tdesign.tencent.com--motion.md:101 |
| 下拉、列表点击 | 240ms | content/motion/tdesign.tencent.com--motion.md:102 |
| 抽屉、消息通知 | 280ms | content/motion/tdesign.tencent.com--motion.md:103 |

缓动用 TDesign 桌面端固定三段：standard `cubic-bezier(.38,0,.24,1)`、ease-out `cubic-bezier(0,0,.15,1)`、ease-in `cubic-bezier(0.82,0,1,.9)`。三段贝塞尔是渲染实现细节，原文只给时值，属派生。

## 6 组件取值

| 项 | 取值 | 出处 |
| --- | --- | --- |
| 表格尺寸 | small | content/components/tdesign.tencent.com--table.md:435 |
| 表格能力（固定列、文本省略、空数据、悬浮态） | 原则引用 | content/components/tdesign.tencent.com--table.md:31 |
| 行高亮与键盘操作行 | 原则引用 | content/components/tdesign.tencent.com--table.md:57 |
| 行高属性只作滚动参考 | 原则引用 | content/components/tdesign.tencent.com--table.md:729 |
| 对话框按 ESC 关闭 | 默认 true，显式保留 | content/components/tdesign.tencent.com--dialog.md:84 |
| 对话框点蒙层关闭 | 默认 true | content/components/tdesign.tencent.com--dialog.md:85 |
| 对话框关闭即销毁子元素 | 派生 true（表单每次打开要干净） | content/components/tdesign.tencent.com--dialog.md:90 |
| 对话框宽度 | 派生 560 | content/components/tdesign.tencent.com--dialog.md:104 |
| 全局提示计时 | 3000（毫秒） | content/components/tdesign.tencent.com--message.md:61 |
| 图标尺寸 | 16、20、24（px） | content/icons/tdesign.tencent.com--icon.md:46 |
| 输入框三档高度 | 原则引用，选 medium | content/components/tdesign.tencent.com--input.md:44 |

对话框关闭即销毁这条：原文默认值是 false，我按「新建工单表单每次打开都要是干净状态」改成 true，属派生取舍，写在同目录的发现记录「取舍」一节。

## 7 派生项一览

以下数值原文没有直接给出，全部按上面的规则推出来，页面里也按这个口径写：

| 派生项 | 值 | 推法 |
| --- | --- | --- |
| 行高五档 | 20、22、24、32、72 | 字号 + 8 |
| 小间距两档单位 | 4px、12px | 原文点名 4 与 12，按 px 落地 |
| 圆角两档 | 4px、8px | 取 8 点网格的 4 与 8 |
| 卡片态分界 | 767px | 断点 768 减 1 |
| 表格最窄宽度 | 1080px | 十列列宽之和（116 + 250 + 150 + 96 + 88 + 80 + 80 + 66 + 100 + 96），窗口更窄时容器横向滚动 |
| 每页条数 | 12、20、40 | 演示数据 44 张，取三档让分页真实出现多页 |
| 演示工单总量 | 44 | 需求要求不少于 40 张，取 44 让四个状态计数都不为 0 且分页有 4 页 |
| 表格数字列对齐 | 右对齐 | 等距数字 + 右对齐便于纵向比较，原文只要求等距数字 |
| 状态标签高度 | 22px | 12 号字加 2x5px 内边距，落在行高 20 的视觉行内 |

## 8 缺口

| 缺口 | 处理 |
| --- | --- |
| drawer 抽屉组件在基准规范里没有独立文章 | 用 TDesign 组件默认行为，宽度 480px 为派生值，不引原文数值 |
| skeleton 骨架屏没有独立文章 | 占位条尺寸全部派生，只承担「加载中」的表意，不承诺具体数值规范 |
| 圆角没有独立篇目 | 见 §7，按网格推导 |
| 图标只给了尺寸没给线宽 | 用 TDesign 图标组件默认线宽，不另定数值 |
| 无「批量操作条」组件原文 | 批量条复用 Blue1 底 + 12 号字，配色仍取自色板原文 |
