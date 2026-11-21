# 缺口与派生：GOV.UK 基准规范

本站 2026-11-08 起以 GOV.UK Design System 为基准（项目选型 `project-gov-uk` 的英国分支）；版式、色值、字阶、间距与断点在 `design.md`，这里只记规范覆盖不到、必须派生或回源的部分。2026-11-13：GOV.UK 选型行与 71 篇文章已从库中移除，本文 GOV.UK 引用保留为历史记录。

## 基准规范缺口

- 没有动效篇。`content/motion/` 下没有 GOV.UK 的时长与缓动原文，动效按 GAP_RULES 回源 NN/g 与 W3C。
- 圆角没有单独规范。GOV.UK 组件一律方角，本站取 0，按组件形态定，不是原文数值。
- 字体不可再分发。GDS Transport 是 GOV.UK 专有字体，按系统字体栈派生。
- 边框 `#b1b4b6` 与浅灰面 `#f3f2f1` 不在色彩篇里；色彩篇给 `border #cecece` 与 `surface-background #f4f8fb`，站内这两个值标派生。
- 断点没有 Web 原文。1200 / 1024 / 768 三档是派生，768 这个分界原引 NHS 间距篇（2026-11-13 删除），沿用旧值。
- 字号 14px 不在 type scale 里，是元数据派生档；间距 70px 也不在 static spacing 0 到 9 的刻度里，是补档。

## 派生与回源

| 项 | 处理 | 依据 |
| --- | --- | --- |
| 正文 19 / 行高 25 | 原文 | GOV.UK 字阶篇（已归档，2026-11-13 移除） |
| 页面标题 48 / 50 | 原文 | GOV.UK 字阶篇（已归档，2026-11-13 移除） |
| 间距 5px 基数 | 原文 | GOV.UK 间距篇（已归档，2026-11-13 移除） |
| 链接 `#1a65a6`、焦点 `#ffdd00` | 原文 | GOV.UK 色彩篇（已归档，2026-11-13 移除）、`:56` |
| 分隔线与浅灰面 | 派生 | 色彩篇没有 `#b1b4b6`、`#f3f2f1` |
| 圆角 0 | 派生 | GOV.UK 组件形态 |
| 字体栈 | 派生 | GDS Transport 不可再分发 |
| 断点 1200 / 1024 / 768 | 派生 | 768 原引 NHS 间距篇（2026-11-13 删除），沿用旧值 |
| 动效 100 / 200 / 300 | 回源 | `content/motion/nngroup.com--animation-duration.md:80-84` |
| 缓动曲线 | 回源 | `content/standards/w3c--css-easing-1.md:126-140` |

## 没覆盖到的

- 只有亮色一套值，站点不读 `prefers-color-scheme`。
- 浏览器实测以 Chrome 为主；Safari 只抽测过弹窗宽度，Firefox 未测。
- 对比度在改版时实算过首页、文章页与列表页，没有逐篇扫全站文章。
- 方法层必读 4 条（配色框架、视觉层级、布局模式、动效落地）；指南与首页提示词都由 `USAGE_STEPS` 生成。
- 缺 Box 模式原文：Every Layout 的 Box 在付费书里，GitHub 只有第三方笔记与社区实现，按收文红线不收，记为缺口。
- 布局模式三篇够用：Stack 的「margin 是相邻元素之间的关系」是单层间距的出处，不需要新增文章。

## 基准规范覆盖普查

`python3 scripts/check-source-coverage.py` 按色值、尺寸、时长三个维度扫 9 套基准规范，4 套至少缺一个维度，明细在 `site/design/source-coverage.md`。

GOV.UK 缺动效时长；色值与尺寸从色彩篇、type scale、spacing scale 取原文，够用。

## 引用体检

同一脚本的 `--refs` 模式扫全库 693 处 `content/*.md` 引用，坏链 0 处。

反向验证过：临时插一条不存在的路径，脚本报出该条并返回 1；还原后回到 0。
