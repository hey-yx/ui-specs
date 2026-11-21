# DECISIONS · EpDeck（site key: epdeck）

- 需求：`briefs/epdeck.md`（追剧平台片库首页：继续观看进度、12 部剧集/电影/综艺筛选、追剧单更新提醒、本周热榜、1 到最新集点播与预告集锁定、线路失败重试）
- 数值文章：**TDesign**（腾讯），选型行 `project-tdesign`
- frame: batch=2026-11-21-c; nav=N13; footer=Ft3; base=#15181d
- Hallmark 标记：`genre: atmospheric · macrostructure: Ecosystem Index · nav: N13 · footer: Ft3 · theme: TDesign Dark`
- 交付：`examples/epdeck/index.html`（单文件，CSS 与 JS 内联，零外部请求）

---

## 1. 选型与扁平结构决策

- **为何选 `project-tdesign` + Dark Mode**：`briefs/epdeck.md` 为中文夜间追剧平台片库首页。7 套官方体系中 `project-tdesign` 唯一内置完整中文暗色规范 `content/color/tdesign.tencent.com--dark.md` 与 `BlueGray` 暗阶，且字体、布局、动效齐全，无需跨源拼数值。
- **扁平化与首屏直出**：按 `Ecosystem Index` 去掉大海报叠加遮罩首屏，改为顶部单行 `N13` 检索导航 + 首屏扁平引导带（`36px` 定位标题 + 两张 `继续观看` 进度条卡），让 `1280×800` 首屏直接露出「片库与更新进度」筛选条与前两行片库卡片；底部用 `1px` 发丝线并排收束「我的追剧单」与「本周热榜」。
- **外壳避重**：避开最近 3 条 `.hallmark/log.json` 记录的 `Catalogue` / `Index-First` / `Stat-Led` 与 `Ft6` / `Ft1` / `Ft2`，采用独立批次 `batch=2026-11-21-c` 搭配 `N13`（栏内检索加 `⌘K`）+ `Ft3`（三栏影院索引页脚，独立骨架 `.ep-flat-foot`）+ `base=#15181d`（BlueGray14 暗色画布）。

---

## 2. 色彩与对比度实测

| 用途 | 值 | 出处 | 实测对比度与说明 |
| --- | --- | --- | --- |
| 页面底色 / 按钮反白墨色 | `#15181d` | `content/color/tdesign.tencent.com--color.md:171` | BlueGray14 L8，暗色画布；压 `#ed8139` 按钮 **6.61:1** |
| 抬升面板 / 片库卡片 | `#20232b` | `content/color/tdesign.tencent.com--color.md:170` | BlueGray13 L14，承载片库卡片与选集面板 |
| 悬停面 / 继续观看卡 | `#272b34` | `content/color/tdesign.tencent.com--color.md:169` | BlueGray12 L18，用于继续观看条与卡片悬停面 |
| 发丝线分隔 | `#323843` | `content/color/tdesign.tencent.com--color.md:168` | BlueGray11 L24，区块、追剧行与热榜行分隔 |
| 控件边界线 | `#6f7686` | `content/color/tdesign.tencent.com--color.md:165` | BlueGray8 L50，压 `#15181d` **3.91:1**、压 `#20232b` **3.45:1**（≥ 3:1） |
| 主文字与标题 | `#ffffff 90%` | `content/color/tdesign.tencent.com--dark.md:48` | `@text-color-primary`，压 `#15181d` **14.50:1** |
| 次级文字与简介 | `#ffffff 60%` | `content/color/tdesign.tencent.com--dark.md:49` | `@text-color-secondary`，压 `#15181d` **7.01:1**、压 `#20232b` **6.53:1** |
| 占位符文字 | `#ffffff 40%` | `content/color/tdesign.tencent.com--dark.md:50` | `@text-color-placeholder`，仅作输入框占位 |
| 禁用态文字（预告集） | `#ffffff 26%` | `content/color/tdesign.tencent.com--dark.md:51` | `@text-color-disabled`，仅配 `aria-disabled="true"` 预告集 |
| 主强调与 CTA 填充 | `#ed8139` | `content/color/tdesign.tencent.com--dark.md:128` | Orange6，压 `#15181d` **6.61:1** |
| 悬停与焦点环、评分 | `#ff9852` | `content/color/tdesign.tencent.com--dark.md:129` | Orange7，压 `#15181d` **8.36:1**、压 `#20232b` **7.38:1** |
| 连载状态信号点 | `#37bf8e` | `content/color/tdesign.tencent.com--dark.md:153` | Green7，压 `#15181d` **7.63:1** |
| 断流错误横幅边线 | `#fb6e77` | `content/color/tdesign.tencent.com--dark.md:116` | Red6，仅作错误条边线与浅底信号 |
| 断流错误提示文案 | `#ff9195` | `content/color/tdesign.tencent.com--dark.md:117` | Red7，压 `#15181d` **8.25:1**、压 `#20232b` **7.28:1** |

---

## 3. 字阶、布局、动效与派生项

| 维度 | 取值 | 出处 | 说明 |
| --- | --- | --- | --- |
| 最小标注 / 计数 | `12px` | `content/type/tdesign.tencent.com--fonts.md:53,69` | 行高按 `font-size + 8` 计算（`20px`） |
| 次级信息 / 按钮 / 导航 | `14px` | `content/type/tdesign.tencent.com--fonts.md:54,69` | 行高 `22px` |
| 正文 / 剧集卡片标题 | `16px` | `content/type/tdesign.tencent.com--fonts.md:55,69` | 浏览器实测 `body` `16px/24px` |
| 品牌字与空状态标题 | `20px` | `content/type/tdesign.tencent.com--fonts.md:56` | 行高 `28px` |
| 区块主标题 | `24px` | `content/type/tdesign.tencent.com--fonts.md:57` | 浏览器实测 `h2` `24px/32px` |
| 详情页剧名 / 移动主标题 | `28px` | `content/type/tdesign.tencent.com--fonts.md:58` | 行高 `36px` |
| 首页扁平主标题 | `36px` | `content/type/tdesign.tencent.com--fonts.md:59` | 浏览器实测 `h1` `36px/44px` |
| 字重与系统字体栈 | `400` / `600` | `content/type/tdesign.tencent.com--fonts.md:35,87` | 零外部字体请求，等距数字降级为 `tabular-nums` |
| 网格基数 / 槽距 / 边距 | `8px` / `16px` / `24px` | `content/layout/tdesign.tencent.com--layout.md:78,92,96` | 辅以 4、12 两档小间距（`content/layout/tdesign.tencent.com--layout.md:138`） |
| 响应式断点 | `768px` / `992px` / `1200px` | `content/layout/tdesign.tencent.com--layout.md:156-158` | 4 列 → 3 列 → 2 列 → 1 列折叠 |
| 动效时长 | `100ms` / `200ms` / `240ms` | `content/motion/tdesign.tencent.com--motion.md:98,101,102` | 仅做 `transform` / `opacity` / 色彩过渡，`prefers-reduced-motion` 关闭 |
| 缓动曲线 | `cubic-bezier(.38,0,.24,1)` | `content/motion/tdesign.tencent.com--motion.md:115,116` | 标准缓动与入画缓动 `cubic-bezier(0,0,.15,1)` |
| 圆角、容器宽、桌面/移动触控目标 | `4px` / `8px` / `1280px` / `32px-36px` / `44px` | derived（GAP_RULES 兜底档） | 桌面保持 32-36px 原生密度（≥ 24px），768px 以下与粗指针扩至 44px |

---

## 4. 浏览器实测与交互记录

- **外部请求与强调色占比**：Chrome 无头实测外部请求数 = **0**；1280×800 首屏强调色（`#ed8139`）实测面积占比 = **0.64%**（< 5%）。
- **四档响应式溢出**（Chrome CDP `scrollWidth / clientWidth`，首页与详情页双视图）：
  - `320px`：`320 / 320`（首页）、`320 / 320`（详情页）— 零溢出
  - `375px`：`375 / 375`（首页）、`375 / 375`（详情页）— 零溢出
  - `768px`：`768 / 768`（首页）、`768 / 768`（详情页）— 零溢出
  - `1280px`：`1280 / 1280`（首页）、`1280 / 1280`（详情页）— 零溢出
- **交互实测（操作 → 状态变化）**：
  1. 题材筛选点击「悬疑」→ 160ms 骨架屏过渡后片库从 **12 部 → 4 部**。
  2. 搜索框输入「不存在」→ 片库显示空状态（`role="status"` + 原因说明 + 重置按钮）；点击「显示全部 12 部剧集」→ 恢复 **12 部**。
  3. 卡片点击「+ 追剧」（《长安十二时》）→ 追剧单行数 **2 → 3**，顶栏角标同步更新。
  4. 点击继续观看「《深空回声》继续第 7 集」→ 打开详情播放器并触发 `role="alert"` 断流提示，播放键 `disabled`；点击「切换备用线路」→ 错误横幅关闭，播放键恢复可用。
  5. 点击播放键 → `aria-busy="true"` 缓冲 200ms 后切换为 `aria-pressed="true"`；切换第 5 集 → `aria-current="true"`；点击「第 16 集（预告）」→ `aria-disabled="true"` 保留焦点与提示，不切换播放。

## 5. 缺口与例外

- 原文未覆盖圆角、桌面/移动触控目标尺度与 48px 大间距步进，按 `GAP_RULES` 统一派生并记入上表 `derived`；TCloud Number 数字字体在单文件零请求约束下按 `GAP_RULES` 降级为 `font-variant-numeric: tabular-nums`。详情见同目录缺口记录。
