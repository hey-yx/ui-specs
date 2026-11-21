# ClinicDesk（晴川门诊预约台）· 取值记录

- 需求：`briefs/clinicdesk.md`（社区医院 6 科室 12 位医生在线预约挂号：提前 7 天 08:00 放号、30 分钟时段余号、普通 ¥10/专家 ¥30/中医 ¥20、多家人信息管理与可取消二维码凭条存根）
- 数值文章：**Fluent 2**（Microsoft），选型行 `project-fluent-2`
- frame: nav=N6; footer=Ft6; base=#ebf3fc
- 交付：`examples/clinicdesk/index.html`（单文件，CSS 与 JS 内联，零外部请求）

---

## 1. 选型理由与双栏存根骨架

- 产品形态是典型的「高频日程与行政流程填报控制台」（科室选择 -> 日期与医生排班 -> 30 分钟时段网格 -> 就诊人表单 -> 右栏即时凭条存根），与 Microsoft Fluent 2（Outlook/Teams/预约管理）高效稳重的商务办公语言高度契合，故选用 `project-fluent-2`。
- 结构上结合吸顶右侧凭条存根模式：居民无论在左边改选哪天或哪位家人，右侧凭条的费用、房间号、就诊时间与二维码取号码都实时跟随并在一屏内完成锁号或退号取消。

## 2. 色彩与实测对比度

Fluent 2 token 篇给出 `brandWeb` 10-160 完整品牌青蓝色阶（`content/tokens/fluent-2--tokens.md:88`），中性底座与红绿黄语义状态按 GAP_RULES 回源 TDesign，不跨源混造半套。

| 用途 | 值 | 出处 | 实测对比度 |
| --- | --- | --- | --- |
| 品牌主色 / 提交主按钮 / 选中日 | `#0f6cbd` | `content/tokens/fluent-2--tokens.md:88` | 配白字 **5.28:1** |
| 主按钮悬停深蓝 | `#115ea3` | `content/tokens/fluent-2--tokens.md:88` | 配白字 **6.65:1** |
| 选中文字深蓝 | `#0c3b5e` | `content/tokens/fluent-2--tokens.md:88` | 压浅蓝底 **9.74:1** |
| 品牌浅蓝选中底 | `#ebf3fc` | `content/tokens/fluent-2--tokens.md:88` | 承载 `#0c3b5e` 与 `#181818` |
| 品牌存根细边框 | `#b4d6fa` / `#cfe4fa` | `content/tokens/fluent-2--tokens.md:88` | 结构轻区分边框与头像底 |
| 卡片纯白表面 | `#ffffff` | `content/color/tdesign.tencent.com--color.md:93` | 正文压它 **17.76:1** |
| 全局画布浅灰 | `#f3f3f3` | `content/color/tdesign.tencent.com--color.md:95` | 承托卡片层次 |
| 分割线 | `#e8e8e8` | `content/color/tdesign.tencent.com--color.md:97` | 发丝分割 |
| 正文主墨 | `#181818` | `content/color/tdesign.tencent.com--color.md:108` | 白底 **17.76:1** |
| 次要说明文字 | `#5e5e5e` | `content/color/tdesign.tencent.com--color.md:103` | 白底 **6.48:1**，灰底 **5.84:1** |
| 余号充足 / 预约成功绿与浅底 | `#006c45` / `#e3f9e9` | `content/color/tdesign.tencent.com--color.md:78,84` | **5.88:1** |
| 爽约限制提醒棕与浅底 | `#954500` / `#fff1e9` | `content/color/tdesign.tencent.com--color.md:66,72` | **6.08:1** |
| 校验错误 / 退号红与浅底 | `#ad352f` / `#fff0ed` | `content/color/tdesign.tencent.com--color.md:54,60` | **5.69:1** |

## 3. 字阶、间距、圆角与动效

| 维度 | 取值 | 出处 | 说明 |
| --- | --- | --- | --- |
| 正文与辅助字阶 | `12px` / `14px` / `16px` / `24px` / `32px` | `content/tokens/fluent-2--tokens.md:22-28` | 原文对应行高 `16px` / `20px` / `22px` / `32px` / `40px` |
| 字重规范 | `400` / `600` | `content/tokens/fluent-2--tokens.md:32` | 正文 400，标题/按钮/标签 600 |
| 间距体系 | `4px` / `6px` / `8px` / `12px` / `16px` / `20px` / `24px` | `content/tokens/fluent-2--tokens.md:40-46` | 与卡片和时段网格严格对齐 |
| 圆角与描边 | `4px` / `6px` / `8px` / `12px` / `10000px` | `content/tokens/fluent-2--tokens.md:71-78` | 卡片 `12px`，按钮/输入框 `6px-8px` |
| 动效时长与曲线 | `150ms` | `content/tokens/fluent-2--tokens.md:58,65` | `cubic-bezier(0.33,0,0.67,1)` |
| 容器与触控底线 | `1180px` / `44px` | derived（GAP_RULES 组件与无障碍底线） | 主提交/取消按钮高 `44px` |

## 4. 外壳与避重

- **nav = N6（报头式居中院名顶栏）**：依据门诊服务公告气质，采用 `<header class="nav-mast">` 居中大字院名「晴川社区医院」，上方配放号与取消规则细行，下方配快捷导航与 `#b4d6fa`（`content/tokens/fluent-2--tokens.md:88`）双细分隔线；避开同批通栏三段顶栏。
- **footer = Ft6（落款式页脚）**：采用 `<footer class="foot-letter">` 写入社区门诊代挂号与急诊分诊温馨提示、院方落款与咨询热线、出诊时段及「6 科室 12 位医生、号源余量与挂号价格均为本地演示数据，不接真实医院 HIS」口径。
- **移动折叠**：640px 以下报头收束为单行院名加右侧「菜单」展开按钮（`aria-expanded`），导航行默认收起可展开，320px 零横向溢出。
- **页底与带色取值**：全局 `body` 改为 Fluent `brandWeb` 160 品牌浅蓝 `#ebf3fc`（`content/tokens/fluent-2--tokens.md:88`），替代原 `#f3f3f3` 灰底，次要文字 `#5e5e5e` 压 `#ebf3fc` 实测 `5.82:1`，卡片与右栏存根保留纯白 `#ffffff`。
