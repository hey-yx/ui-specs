# NeedKnows（必知日刊）· 取值记录

- 需求：`briefs/needknows.md`（每日 07:30 更新行业情报门户：融资、新产品、开源项目、政策变化、人事变动 5 类 36 条样本、90 天往期切换、14 类信源核对、邮件 08:00 与分品类 RSS 订阅）
- 数值文章：**Carbon**（IBM），选型行 `project-carbon`
- frame: batch=2026-11-24-a; nav=N6; footer=Ft7; base=#ffffff
- Hallmark 标记：`macrostructure: Index-First · nav: N6 · footer: Ft7 · theme: IBM Carbon`
- 交付：`examples/needknows/index.html`（单文件，CSS 与 JS 内联，零外部请求）

---

## 1. 选型理由与 Index-First 主从情报流

- 产品是产品、投资、运营人员早间 10 分钟扫完当日要闻的超高密度结构化索引流，与 IBM Carbon 的 `0px` 直角、`#161616` 全局工具条、White/Gray 10 分层高度同构，故选用 `project-carbon`。
- 彻底去掉此前首屏被 4 个大 KPI 瓦片和大柱图挤占的报表结构，改为 **`Index-First` + `N6` 报头 + 主从分栏（Master-Detail）**：1280×800 首屏直接露出 5 条完整情报与右侧「结构化字段 + 原文核对」常驻面板，底部接 `Ft7` 08:00 邮件与分品类 RSS 订阅表单。

## 2. 色彩与实测对比度

Carbon 色彩概览仅给出 White `#ffffff`、Gray 10 `#f4f4f4`、Gray 90 `#262626`、Gray 100 `#161616` 四枚背景原色（`content/color/carbondesignsystem.com--color.md:128-131`），按 GAP_RULES「色值」条成套回源 TDesign 语义色阶，不混用半套。

| 用途 | 值 | 出处 | 实测对比度 |
| --- | --- | --- | --- |
| 全局顶栏底色（Carbon Gray 100） | `#161616` | `content/color/carbondesignsystem.com--color.md:131` | 顶栏白字压它 **18.12:1** |
| 顶栏悬停 / 深层块（Carbon Gray 90） | `#262626` | `content/color/carbondesignsystem.com--color.md:130` | 白字压它 **15.16:1** |
| 页面白底 / 表格层（Carbon White） | `#ffffff` | `content/color/carbondesignsystem.com--color.md:128` | 正文 `#161616` 压它 **18.12:1** |
| 交替灰底 / 期刊头 / 展开抽屉（Gray 10） | `#f4f4f4` | `content/color/carbondesignsystem.com--color.md:129` | 正文压它 **16.46:1** |
| 正文主色与强调蓝（TDesign Blue7 / Hover） | `#0052d9` / `#003cab` | `content/color/tdesign.tencent.com--color.md:48-49` | 配 `#ffffff` **6.54:1** / **10.02:1** |
| 融资标签浅底（TDesign Blue1） | `#f2f3ff` | `content/color/tdesign.tencent.com--color.md:42` | 压 `#0052d9` **6.02:1** |
| 新产品绿 / 浅底 | `#006c45` / `#e3f9e9` | `content/color/tdesign.tencent.com--color.md:78,84` | **5.88:1** |
| 政策告警棕 / 浅底 | `#954500` / `#fff1e9` | `content/color/tdesign.tencent.com--color.md:66,72` | **6.08:1** |
| 人事变动红 / 报错浅底 | `#ad352f` / `#fff0ed` | `content/color/tdesign.tencent.com--color.md:54,60` | **5.69:1** |
| 次要元数据 / 编号 | `#5e5e5e` | `content/color/tdesign.tencent.com--color.md:103` | 白底 **6.48:1**，Gray 10 **5.91:1** |
| 网格线 / 分割线 | `#e8e8e8` / `#dddddd` | `content/color/tdesign.tencent.com--color.md:97-98` | 装饰结构线 |

## 3. 字阶、间距、动效与派生项

| 用途 | 值 | 出处 | 说明 |
| --- | --- | --- | --- |
| 间距 4 到 64 档 | `$spacing-02` = 4 到 `$spacing-10` = 64 | `content/layout/carbondesignsystem.com--spacing.md:47-55` | 严格走 Carbon 间距倍数 |
| 断点与容器最大宽 | 320 / 672 / 1056 / 1312 | `content/layout/carbondesignsystem.com--2x-grid.md:135-138` | 主容器取 X-Large `1312px` |
| 动效时长与曲线 | `110ms` / `150ms` / `240ms` | `content/motion/carbondesignsystem.com--motion.md:195-197` | productive 标准缓动 `:161` |
| 回源字阶 | `12px` / `14px` / `16px` / `20px` / `24px` / `28px` / `36px` | `content/type/tdesign.tencent.com--fonts.md:53-59` | 按 GAP_RULES「字阶」回源，行高 `+8` 公式 |
| 字体栈、0px 直角与 44px 底线 | `IBM Plex Sans` + 中文回退 / `0px` | derived（Carbon 特征直角与字体回退） | — |

## 4. 外壳与避重

- **nav = N13（栏内可见 ⌘K 检索触发 + 命令面板）**：保留 Carbon `#161616`（`content/color/carbondesignsystem.com--color.md:131`）全局顶栏与 `0px` 直角语法，在顶栏中部嵌入 `#262626`（`content/color/carbondesignsystem.com--color.md:130`）搜索触发器与 `<kbd>⌘K</kbd>` 提示，支持 `Cmd+K / Ctrl+K`、`↑↓` 移动、Enter 定位并展开 36 条情报对应行、Esc 关闭。
- **footer = Ft3（三栏分类索引页脚）**：将原本 `#161616` 单行页脚改为 Carbon Layer-01 `#f4f4f4`（`content/color/carbondesignsystem.com--color.md:129`）配 `1px #dddddd` 顶线，分成「今日分类索引（36 条）」「90 天往期归档」「信源核对与推送」三栏，点击分类或期次可直接筛选联动。
- **移动折叠**：672px 以下顶栏搜索触发器自动弹性缩窄、右侧操作组横向可达，页脚三栏收为单列堆叠，320px 零横向溢出。
- **页底与带色取值**：全局 `body` 保持纯白 `#ffffff`（`content/color/carbondesignsystem.com--color.md:128`），期刊首带与 Ft3 页脚复用 Carbon Gray 10 `#f4f4f4`（`:129`），正文字色 `#161616` 压 `#f4f4f4` 实测 `16.46:1`。
