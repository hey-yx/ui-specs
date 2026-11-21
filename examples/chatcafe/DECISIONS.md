# ChatCafe（茶话会）· 取值记录

- 需求：`briefs/chatcafe.md`（浏览器端即开即聊 AI 助手平台：12 个预设助手 + 空白开聊、手机号验证码免密登录、游客 3 次/登录后每日 10 次/会员 ¥19 含 300 次/加油包 ¥6 含 50 次、上下文 20 轮、历史 30 天与 7 天删除承诺）
- 数值文章：**Apple HIG**（人机界面规范），选型行 `project-apple-hig`
- frame: nav=自定; footer=Ft2; base=#ffffff
- 交付：`examples/chatcafe/index.html`（单文件，CSS 与 JS 内联，零外部请求）

---

## 1. 选型理由与 iPadOS 分栏即聊结构

- ChatCafe 主用户是「移动与桌面浏览器打开即聊」的轻工具人群，最核心的是像原生 iMessage / iPadOS 分栏消息应用那样**一开页就是角色列表、开场白卡片和底部胶囊输入条**，完全不做占屏宣传横幅，与 Apple HIG 的分组背景（Grouped Background）、半透明材质顶栏（Translucent Bar）与胶囊交互语言高度契合，故选用 `project-apple-hig`。
- 手机端（`<= 740px`）自动收起左侧列表并展示横向滚动助手胶囊，保住一屏核心对话区和底部胶囊输入区不跑版。

## 2. 分层语义、色彩与实测对比度

Apple HIG 色彩篇给出了 `groupedBackground` / `secondaryGroupedBackground` 的分组底色层次与 `label` / `secondaryLabel` 前景定义（`content/color/developer.apple.com--color.md:103-119`），未直接标注十六进制值。按 GAP_RULES「色值」条成套回源 TDesign 浅色底座与蓝绿语义色，严格保证实测对比度：

| 用途 | 值 | 出处 | 实测对比度 |
| --- | --- | --- | --- |
| 分组总背景 / AI 气泡底 / 输入胶囊底 | `#f3f3f3` | `content/color/tdesign.tencent.com--color.md:95` | 承载 `#181818`（**15.80:1**）与 `#5e5e5e`（**5.84:1**） |
| 次级分组白卡（助手目录/对话舞台） | `#ffffff` | `content/color/tdesign.tencent.com--color.md:93` | 正文压它 **17.76:1** |
| 悬停浅灰填充 | `#eeeeee` | `content/color/tdesign.tencent.com--color.md:96` | 胶囊按钮悬停底 |
| Apple HIG `separator` 分割发丝线 | `#e8e8e8` | `content/color/tdesign.tencent.com--color.md:97` | 顶栏底边与列表条目分割 |
| 主文字 `label` | `#181818` | `content/color/tdesign.tencent.com--color.md:108` | 白卡 **17.76:1**，灰卡 **15.80:1** |
| 次要说明 `secondaryLabel` | `#5e5e5e` | `content/color/tdesign.tencent.com--color.md:103` | 白底 **6.48:1**，灰底 **5.84:1** |
| 品牌交互蓝（发送气泡 / 登录 / 选定） | `#0052d9` | `content/color/tdesign.tencent.com--color.md:48` | 配白字 **6.54:1** |
| 按钮悬停深蓝 | `#003cab` | `content/color/tdesign.tencent.com--color.md:49` | 配白字 **10.02:1** |
| 选中助手浅蓝底 | `#f2f3ff` | `content/color/tdesign.tencent.com--color.md:42` | 承载 `#0052d9` 与 `#181818` |
| 隐私达标绿与浅底 | `#006c45` / `#e3f9e9` | `content/color/tdesign.tencent.com--color.md:78,84` | **5.88:1** |
| 警告棕与浅底 | `#954500` / `#fff1e9` | `content/color/tdesign.tencent.com--color.md:66,72` | **6.08:1** |
| 清除/报错红与浅底 | `#ad352f` / `#fff0ed` | `content/color/tdesign.tencent.com--color.md:54,60` | **5.69:1** |

## 3. 字阶原型、间距、动效与派生项

| 维度 | 取值 | 出处 | 说明 |
| --- | --- | --- | --- |
| 默认正文基准与最小护栏 | `17 pt` / `11 pt` | `content/type/developer.apple.com--typography.md:25` | iOS/iPadOS 原文默认与最小值规范 |
| 分级比例原型（Title3/Subhead/Footnote/Caption1） | 20/25、15/20、13/18、12/16 | `content/type/developer.apple.com--typography.md:213,217-219` | 按 Apple HIG 原表 pt 映射为 px 落实于对话标题与卡片正文（derived） |
| 间距体系 | `8px` / `16px` / `24px` / `32px` | `content/layout/uisdc.com--code-for-design-of-spacing.md:102` | Apple HIG 无固定 px 间距表，按 GAP_RULES 回源优设 8px 基数 |
| 动效时长 | `200ms` / `300ms` | `content/motion/nngroup.com--animation-duration.md:82` | Apple HIG 无固定 ms 表，按 GAP_RULES 回源 NN/g |
| 圆角、玻璃模糊与 44px 底线 | `10px` / `16px` / `999px` / `44px` | derived | 对话气泡与顶栏半透明材质借鉴 iOS 风格 |

## 4. 外壳与避重

- **nav = 自定（Apple HIG iPadOS 分栏半透明工具栏）**：依据 `content/layout/developer.apple.com--layout.md:33` 与 `content/color/developer.apple.com--materials.md:33` 的工具栏与毛玻璃材质（`rgba(255, 255, 255, 0.85)` 搭配饱和度与背景模糊滤镜），左侧放「助手栏」折叠按钮与词标、居中显示当前会话助手名与剩余额度胶囊、右侧放导出与免密登录操作，区别于同批通用三段顶栏。
- **footer = Ft2（发丝线单行页脚）**：采用 `<footer class="foot-line">` 单条 1px `#e8e8e8` 发丝线配单行版权与本地演示声明，去掉旧版统一 `foot-in` 链接栏。
- **移动折叠**：740px 以下隐藏「助手栏」开关按钮与左侧目录列，由横向滚动的 `#mobileBotStrip` 胶囊条接管切换，工具栏三区自动折行且当前会话标题做 `26ch` 截断防超长名撑破 320px 视口。
- **页底与侧栏分级**：全局 `body` 改为纯白 `#ffffff`（`content/color/tdesign.tencent.com--color.md:93`），中央对话舞台保持纯白；左右两栏目录与额度卡片遵循侧栏常规材质分层语义（`content/color/developer.apple.com--materials.md:134`）。浅灰填充色值 `#f3f3f3` 回源自 `content/color/tdesign.tencent.com--color.md:95`，不扩大跨源混用。
