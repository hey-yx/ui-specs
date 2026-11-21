# EthanWorks（林深工作室）· 取值记录

- 需求：`briefs/ethanworks.md`（独立开发者与前端工程师作品集：8 年交付经验、6 个项目复盘、12 篇技术文章、按项目或按月合作边界与档期联系方式）
- 数值文章：**TDesign**（腾讯），选型行 `project-tdesign`
- frame: nav=N5; footer=Ft5; base=#ffffff
- 交付：`examples/ethanworks/index.html`（单文件，CSS 与 JS 内联，零外部请求）

---

## 1. 版式与设计前提

- 版式采用「Marquee Hero + 真实协作工作区切片」架构：把个人作品集当成可交互的「工程能力工作台」来证明交付实力，避免常见个人站空摆三张占位截图盒子的自嗨模板。
- 首屏下方三栏工作台直接展示 6 个真实项目复盘，中栏含交付前后量化 SVG 柱图与客户评价，右侧带近期动态与快速备忘提交；下文承接「可接 vs 不接边界」Bento 卡、12 篇带摘要弹窗的技术文章索引，以及「按项目 / 按月」切换卡片。

## 2. 色彩与实测对比度

| 用途 | 值 | 出处 | 实测对比度 |
| --- | --- | --- | --- |
| 页面主底 / 卡片底 / 工作台 | `#ffffff` | `content/color/tdesign.tencent.com--color.md:93` | 正文压它 **17.76:1** |
| Bento 区块底 / 副按钮 / 侧栏 | `#f3f3f3` | `content/color/tdesign.tencent.com--color.md:95` | 辅助字 `#5e5e5e` 压它 **5.84:1** |
| 悬停次底 / 禁用填充 | `#eeeeee` | `content/color/tdesign.tencent.com--color.md:96` | 仅辅助层与禁用填充 |
| 发丝线与导航边框 | `#e8e8e8` | `content/color/tdesign.tencent.com--color.md:97` | 分割线与发丝线 |
| 描边辅助 / 输入框边框 | `#c6c6c6` | `content/color/tdesign.tencent.com--color.md:99` | 表单按钮边界 |
| 次要文字 / 说明 / 元数据 | `#5e5e5e` | `content/color/tdesign.tencent.com--color.md:103` | 白底 **6.48:1**，灰底 **5.84:1** |
| 深色主文 | `#181818` | `content/color/tdesign.tencent.com--color.md:108` | 白底 **17.76:1** |
| 主紫强调 / 主按钮 / 柱图主条 | `#7137bf` | `content/color/tdesign.tencent.com--color.md:198` | 配白字 **6.72:1** |
| 主紫悬停深档 | `#5610a4` | `content/color/tdesign.tencent.com--color.md:199` | 配白字 **9.96:1** |
| 品牌浅紫底（客户条/推荐卡） | `#fbf0ff` | `content/color/tdesign.tencent.com--color.md:192` | 压 `#7137bf` **6.08:1** |
| 品牌装饰线条紫 | `#8e56dd` | `content/color/tdesign.tencent.com--color.md:197` | 图标与线条装饰 |
| 档期可用绿 / 达标标签 | `#006c45` | `content/color/tdesign.tencent.com--color.md:84` | 配 `#e3f9e9` **5.88:1** |
| 成功浅底 | `#e3f9e9` | `content/color/tdesign.tencent.com--color.md:78` | 承载 `#006c45` |
| 不承接边界浅底 / 报错底 | `#fff0ed` | `content/color/tdesign.tencent.com--color.md:54` | 承载 `#ad352f` |
| 不承接警告 / 报错文字 | `#ad352f` | `content/color/tdesign.tencent.com--color.md:60` | 压 `#fff0ed` **5.69:1** |

## 3. 字阶、间距、动效与派生项

| 维度 | 取值 | 出处 | 说明 |
| --- | --- | --- | --- |
| 最小号 / 标签 / 元数据 | `12px` | `content/type/tdesign.tencent.com--fonts.md:53,69` | 行高按「字号 + 8」公式取 20 |
| 正文 / 列表 / 表单 | `14px` | `content/type/tdesign.tencent.com--fonts.md:54` | 行高 `22px` |
| 引导文案 / 正文大号 | `16px` | `content/type/tdesign.tencent.com--fonts.md:55` | 行高 `24px` |
| 卡片标题 / 项目名 | `20px` | `content/type/tdesign.tencent.com--fonts.md:56` | 行高 `28px` |
| 价格数字 / 区块大标题 | `36px` | `content/type/tdesign.tencent.com--fonts.md:59` | 行高 `44px` |
| 首屏展示主标题 | `64px` | `content/type/tdesign.tencent.com--fonts.md:61` | 响应式 `clamp(36px, 5.2vw, 64px)` |
| 网格基数 / 安全边距 / 最大宽 | `8px` / `24px` / `1200px` | `content/layout/tdesign.tencent.com--layout.md:78,96,158` | 容器收口为 `1140px`（derived） |
| 动效时长与曲线 | `200ms` | `content/motion/tdesign.tencent.com--motion.md:101,115` | 标准缓动，关闭动画偏好降为 0.01ms |
| 圆角、触控与遮罩 | `8px` / `16px` / `44px` | derived（GAP_RULES 兜底档） | 主要点击靶标 `>= 44px` |

## 4. 外壳与避重

- **nav = N5（悬浮毛玻璃胶囊导航）**：本站顶栏本已采用居中脱离页面边缘的毛玻璃胶囊导航（900px 以下折叠为汉堡菜单抽屉），保持原有 N5 结构并登记件号，与同批的 N1b/N9/N12/N13 区分。
- **footer = Ft5（收束宣言页脚）**：将原本左右分栏的 `footer__grid` 替换为 `<footer class="foot-stmt">`，以 `36px` 大字收尾句（「源码、规范与自动化基线成套移交，团队接手就能继续维护。」）统领页脚，下方用 `1px #e8e8e8` 顶线托起词标、四枚导航链与演示声明。
- **移动折叠**：900px 以下隐藏顶栏内联链接与状态条并露出汉堡抽屉按钮；640px 以下页脚链接触控高度拉至 `44px`，320px 零横向溢出。
- **页底与带色取值**：全局 `body` 保持纯白 `#ffffff`（`content/color/tdesign.tencent.com--color.md:93`），CTA 保留 Purple1 `#fbf0ff`（`content/color/tdesign.tencent.com--color.md:192`）浅紫带，页脚底为纯白 `#ffffff`。
