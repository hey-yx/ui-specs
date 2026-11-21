# RoleRail（职轨）· 取值记录

- 需求：`briefs/rolerail.md`（12 城市招聘板职位列表页：按城市、经验、远程和薪资下限筛选，查看公司背景与薪资口径，免登录本地收藏与对比后跳转到公司页）
- 数值文章：**TDesign**（腾讯），选型行 `project-tdesign`
- frame: nav=N1b; footer=Ft7; base=#ffffff
- 交付：`examples/rolerail/index.html`（单文件，CSS 与 JS 内联，零外部请求）

---

## 1. 版式与数值口径

- 版式采用 `Catalogue` 目录检索结构：纯白底色与 Green1 `#e3f9e9` Hero 带配无框搜索条、右栏 Gray1 `#f3f3f3` 市场卡（内嵌 3 张纯白子阶卡与三段纯 CSS 薪资分布条）、12 城市筛选栏、Green1 `#e3f9e9` 最高薪自动置顶精选条，以及纯白零描边 1px `#e8e8e8` 发丝线 20 条职位列表。
- 强调色选用 TDesign Green7 `#006c45` 替代 Cyan7，用于主搜索按钮、当前筛选胶囊、最高薪精选与「去公司页投递」主按钮，视觉更贴近职场机会成长与「绿灯通关」语境，同时避开与纯信息蓝链接混淆。

## 2. 色彩与实测对比度

| 用途 | 值 | 出处 | 实测对比度 |
| --- | --- | --- | --- |
| 页面底色 / 列表容器 / 子卡 | `#ffffff` | `content/color/tdesign.tencent.com--color.md:93` | 正文压它 **17.76:1** |
| 画布灰底 / 市场卡 / 标签 | `#f3f3f3` | `content/color/tdesign.tencent.com--color.md:95` | 辅助字 `#5e5e5e` 压它 **5.84:1** |
| 悬停浅底 / 禁用填充 | `#eeeeee` | `content/color/tdesign.tencent.com--color.md:96` | 不单作正文底 |
| 列表发丝线 / 弹窗分割线 | `#e8e8e8` | `content/color/tdesign.tencent.com--color.md:97` | 纯结构分隔 |
| 强调分割线 / 按钮描边 | `#dddddd` | `content/color/tdesign.tencent.com--color.md:98` | 装饰分隔与外框 |
| 次要文字 / 页脚 / 占位符 | `#5e5e5e` | `content/color/tdesign.tencent.com--color.md:103` | 白底 **6.48:1**，灰底 **5.84:1** |
| 正文主墨 | `#181818` | `content/color/tdesign.tencent.com--color.md:108` | 白底 **17.76:1** |
| 主强调 / 主按钮底 | `#006c45` | `content/color/tdesign.tencent.com--color.md:84` | 配白字 **6.40:1** |
| 主按钮悬停 | `#005334` | `content/color/tdesign.tencent.com--color.md:85` | 配白字 **8.84:1** |
| 最高薪精选浅底 | `#e3f9e9` | `content/color/tdesign.tencent.com--color.md:78` | 压 `#006c45` **5.88:1** |
| 薪资分布条分段色 | `#92dab2` / `#2ba471` | `content/color/tdesign.tencent.com--color.md:80,82` | 非文本数据条，配文字用 `#5e5e5e` |
| 错误横幅浅底 | `#fff0ed` | `content/color/tdesign.tencent.com--color.md:54` | 承载 `#ad352f` 错误文字 |
| 错误主文 | `#ad352f` | `content/color/tdesign.tencent.com--color.md:60` | 压 `#fff0ed` **5.69:1** |

## 3. 字阶、间距、动效与派生项

| 维度 | 取值 | 出处 | 说明 |
| --- | --- | --- | --- |
| 最小号 / 标签 / 辅助说明 | `12px` | `content/type/tdesign.tencent.com--fonts.md:53,69` | 行高按「字号 + 8」公式计算 |
| 正文 / 输入框 / 列表元数据 | `14px` | `content/type/tdesign.tencent.com--fonts.md:54,69` | 行高按「字号 + 8」公式计算 |
| 职位名称 / 引导文案 / 副标题 | `16px` | `content/type/tdesign.tencent.com--fonts.md:55,69` | 行高按「字号 + 8」公式计算 |
| 精选标题 / 月薪数字 / 弹窗标题 | `20px` | `content/type/tdesign.tencent.com--fonts.md:56,69` | 行高按「字号 + 8」公式计算 |
| 市场子卡指标 / 列表区标题 | `24px` | `content/type/tdesign.tencent.com--fonts.md:57` | 行高 `32px` |
| 精选薪资数字 | `28px` | `content/type/tdesign.tencent.com--fonts.md:58` | 行高 `36px` |
| 主标题展示字号 | `36px` - `48px` | `content/type/tdesign.tencent.com--fonts.md:59-60` | 视口 `320` - `1280` 平滑缩放到 `48px` |
| 网格基数 / 槽距 / 安全边距 | `8px` / `16px` / `24px` | `content/layout/tdesign.tencent.com--layout.md:78,92,96` | 全站严格走 4/8 倍数节奏 |
| PC 断点基准 | `1200px` | `content/layout/tdesign.tencent.com--layout.md:158` | 主容器收口为 `1180px`（derived） |
| 动效时长与曲线 | `200ms` | `content/motion/tdesign.tencent.com--motion.md:101,115` | 标准缓动 + `prefers-reduced-motion` 关闭 |
| 圆角、触控与弹窗遮罩 | `4px` / `8px` / `12px` / `44px` | derived（GAP_RULES 兜底档） | 主要按钮与触控目标保 `44px` |

## 4. 外壳与避重

- **nav = N1b（三段式吸顶磨砂顶栏）**：左置词标、居中四枚锚点（在招职位、薪资分布、薪资口径、新岗订阅）、右置「对比」「收藏」与「订阅周报」主行动按钮；滚动超过 `24px` 时切入磨砂背景与轻阴影，区别于同批站点的 N9/N12/N13。
- **footer = Ft7（订阅表单为主角页脚）**：将「每周一封新岗提醒」订阅表单置于页脚主键位置（支持空邮箱、格式错误、纯前端模拟订阅成功三态及 `role="status"` 即时播报），并在顶栏先提供「新岗订阅」入口满足 Ft7 规范，底部附演示口径与跳转链接。
- **移动折叠**：840px 以下隐藏居中四链接并露出 44px 汉堡菜单抽屉；560px 以下将对比与收藏按钮收进移动菜单，顶栏只留词标、「订阅周报」与菜单钮，320px 零横向溢出。
- **页底与带色取值**：全局 `body` 改为纯白 `#ffffff`（`content/color/tdesign.tencent.com--color.md:93`），Hero 区铺 TDesign Green1 `#e3f9e9`（`content/color/tdesign.tencent.com--color.md:78`）浅色带并配 `#c6f3d7` 细底线，右栏市场卡与下方说明卡保持 Gray1 `#f3f3f3`（`content/color/tdesign.tencent.com--color.md:95`），不再整页灰底。
