# 缺口与派生：Apple HIG 基准规范

## 基准规范缺口

- 色彩篇只有语义色名与用途，没有 hex。`content/color/developer.apple.com--color.md:99` 给背景分级，`:419` 给文字分级，`:562` 给分隔线，三处都读不到色值。
- 字号表只抓到 xSmall 档。`content/type/developer.apple.com--typography.md:363-589` 是 iOS 表，默认 Large 档的表头在 `:336`，数值没有落入正文，只有 xSmall 档可用。
- 布局篇没有通用网格或间距刻度。中文布局篇讲安全区、外边距原则与各平台网格，找不到一套可套用到 Web 的 8px 序列；该篇已删，平台安全区对 Web 无用。
- motion 篇没有时长或曲线。原文是概念页，没有毫秒值；该篇已删，内容属通用原则。
- 没有通用 radius 规范。

## 派生与回源

| 项 | 处理 | 依据 |
| --- | --- | --- |
| 全部色值 | 派生，亮暗两套 | Apple 色篇只给角色 |
| 正文 17px | 派生，取 Title 3 档 | xSmall 档 Body 14px 对中文长文偏小 |
| 正文行高 1.65 | 派生 | Apple 行高按界面文本给，中文长文需要更大 |
| 间距 8px 基数 | 回源 | `content/layout/atlassian.design--spacing.md:20-34` |
| 动效 100/200/300 | 回源 | `content/motion/nngroup.com--animation-duration.md:80-84` |
| 缓动曲线 | 回源 | `content/standards/w3c--css-easing-1.md:126-140` |
| 圆角 4/8 | 派生 | 基准规范无规范 |

## 没覆盖到的

- 浏览器只实测了 Chrome，Safari 与 Firefox 没跑。`:root` 里的双份暗色值不依赖新语法，兼容面比 `light-dark()` 宽，但没有实测记录。
- 对比度扫描覆盖 7 个页面，没扫全站 398 篇文章；文章页按同一套 token 渲染，抽样到文章页与分区页为零违规，其余按同源推断。
- 主题切换的过渡在后台标签页会冻结，自动化测量时注入 `transition: none` 才能读到目标色，真实前台不受影响。
- 方法层必读原先只有配色框架与视觉层级（`site/src/data/guide.ts` 的 METHOD_REQUIRED），没有布局搭配点。结果是一次改成三栏时数值都取对了、留白叠了两层。已加 `layout-intrinsic-patterns` 并同步 AI_PROMPT 与 README 副本，2026-11-08。
- 布局模式三篇（`content/layout/every-layout.dev--stack.md` 等）够用：Stack 第 28 行原文就是「margin 是相邻元素之间的关系，直接挂在元素上会叠」，正是这次双份留白的出处，不需要新增文章。
- 缺 Box 模式原文：Every Layout 的 Box 在付费书里，GitHub 只有第三方笔记与社区实现（`aprietof/every-layout` 等），按收文红线（只收官方原文全文）不收，记为缺口。
- 断点没有基准规范原文：Apple 布局篇只讲尺寸级别与栅格，不给 Web 断点；本站 1200 / 1024 / 768 是派生，768 那一档回源 NHS 间距篇。
- 指南包这次改过：`/ai/design-points.json` 的 method_required 由 2 条变 3 条，`/ai/guide.md` 与 `/starmap/` 的七步块同步。
- 示例站 `examples/*` 是成品产物，没跟着换皮；案例页模板跟随了新 token。
- 文章正文的小标题在采集时丢了标记。Apple 页面的 `Ensuring legibility` 这类节标题在源文件里是纯文本段落（`content/type/developer.apple.com--typography.md:20`），正文里没有 h2/h3，层级只能靠段距。属于采集问题，这轮没动源文。

## 基准规范覆盖普查

`python3 scripts/check-source-coverage.py` 按色值、尺寸、时长三个维度扫 16 套基准规范，11 套至少缺一个维度，明细在 `site/design/source-coverage.md`。

Apple 缺色与动效。色彩篇只有语义角色，动效篇是概念页，这两类数值本来就不在正文。布局篇与动效篇保留作原则来源，不替换：间距与时长按缺口规则回源，文章本身给安全区、适配与运动原则。若要把 Apple 当纯数值源，要重采 typography 的七档表，这是采集问题，不是选型问题。

## 引用体检

同一脚本的 `--refs` 模式扫了全库 1925 处 `content/*.md` 引用，坏链 0 处。删掉 Apple 两篇后出现的六处残引已清完。

反向验证过：临时插一条不存在的路径，脚本报出该条并返回 1；还原后回到 0。
