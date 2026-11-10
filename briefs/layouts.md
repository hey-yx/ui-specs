# 版式速查（Hallmark 版式库的项目内索引）

来源是 Hallmark skill 的 `references/macrostructures.md` 与 `references/component-cookbook.md`，这里只做选用标准的提炼，避免每次跑批去翻二十几个文件。件名与取舍以 Hallmark 版式库为准，本库不存版式全文；分配完用 `node scripts/check-rotation.mjs` 校验件名与不重复。

用法：跑批前按这张表给每站分配版式三件，写进 `briefs/rotation/<批次>.json`（一批一份；`briefs/rotation.json` 是 2026-11-08-b 那批的原址，新批次不要再往那里加），再用 `node scripts/check-rotation.mjs` 校验。批内不重复只在本批内算，换一批重排可以再用同一件。单站生成不用这张表，直接按指南七步走。

## 先判形态，再挑件

| 产品形态 | 首选 | 备选 | 选用标准 |
| --- | --- | --- | --- |
| 营销页（卖点与转化） | Marquee Hero · Feature Stack · Stat-Led | Bento Grid · Quote-Led · Split Studio | 首屏要不要一句主张撑住 |
| 应用页（打开就是工具） | Workbench · Index-First | Stat-Led · Bento Grid | 内容是界面本身，不是产品介绍 |
| 文档与参考 | Long Document · Component Playground | Index-First · Conversational FAQ | 读者来查，不是来被说服 |
| 内容发现（平台价值在浏览） | Ecosystem Index · Catalogue | Bento Grid · Portfolio Grid | 有多条发现路径，不靠一句宣言 |
| 流程型产品 | Narrative Workflow | Long Document | 产品本体就是一串步骤 |
| 个人叙事与宣言 | Letter · Manifesto | Quote-Led | 第一人称或立场先于卖点 |

## 21 个版式

| 编号 | 名称 | 首屏长什么样 | 适合 |
| --- | --- | --- | --- |
| 01 | Bento Grid | 不等跨距的格子，节奏靠大小变化 | 多块平权内容，没有单一巨型主张 |
| 02 | Long Document | 连续正文加行内小节，像备忘录 | 周报、规范、可打印长文 |
| 03 | Marquee Hero | 一句大字占满折叠线，下面换结构 | 品牌或主张本身就是信息 |
| 04 | Stat-Led | 一个巨大数字打头，其余支撑它 | 数据产品、看板、结果可量化 |
| 05 | Workbench | 带框的产品界面就是主要内容 | 工具类，讲「你用它做什么」 |
| 06 | Conversational FAQ | 粗体提问、简短回答，可折叠 | 顾虑多的产品、定价与合规答疑 |
| 07 | Manifesto | 大字宣言，海报感 | 立场型品牌、社区 |
| 08 | Photographic | 每屏一张大图，文字只做注脚 | 视觉先行的产品 |
| 09 | Quote-Led | 引语加署名打头，借他人之口 | 口碑驱动，播客、服务 |
| 10 | Specimen | 左缘编号、大衬线、非对称栏 | 字体厂牌、编辑气质 |
| 11 | Catalogue | 同质事物的等宽网格 | 片库、样式、SKU 索引 |
| 12 | Letter | 第一人称开场，折叠线里没按钮 | 个人化、给用户写信 |
| 13 | Index-First | 页面就是一张链接表，无 hero | 工单队列、目录站 |
| 14 | Narrative Workflow | 编号阶段讲一个随时间的过程 | 流程型产品、投递、开通 |
| 15 | Split Studio | 左右对切，文字与证据交替换边 | 有演示素材的营销页 |
| 16 | Feature Stack | 左标签常驻、右屏随滚动切换 | 能力多、要逐条演的产品 |
| 17 | Type Specimen | 字体本身就是设计 | 字体与设计系统产品 |
| 18 | Portfolio Grid | 可筛选的作品卡 | 工作室、设计师首页 |
| 19 | Map Diagram | 一张大图组织全页，空间化排版 | 系统图、流程地图 |
| 20 | Ecosystem Index | 主推、最新、分类、按人多条发现面 | 视频站、社区、平台 |
| 21 | Component Playground | 代码加预览块是主要内容 | API 文档、组件库 |

## 14 个导航

| 件 | 形态 | 默认给谁 |
| --- | --- | --- |
| N1a | 品牌字加两个文字链 | 真只有两个去处 |
| N1b | 品牌字、中间链接群、右侧 CTA | B2B 营销页的标准形态 |
| N2 | 角上一枚浮动芯片 | 单页工具 |
| N3 | 左缘竖条，品牌字旋转 | 文档、编辑气质 |
| N4 | 不显示导航，⌘K 打开 | 键盘优先的工具 |
| N5 | 悬浮胶囊，带模糊底 | 现代极简营销页 |
| N6 | 报纸报头，居中大字品牌 | 内容站、编辑气质 |
| N7 | 粗重通栏，大写加下边线 | 宣言型品牌 |
| N8 | 仿命令行提示符 | 开发者工具 |
| N9 | 品牌字硬左、CTA 硬右、中间全空 | 产品页、极简 |
| N10 | 滚动到阈值变成浮动胶囊 | 长页营销 |
| N11 | 触发式多栏大面板 | 目的地多的平台 |
| N12 | 通知条加可收起的导航 | 有促销或公告 |
| N13 | 栏内可见搜索框加 ⌘K | 搜索重的站 |

## 8 个页脚

| 件 | 形态 | 默认给谁 |
| --- | --- | --- |
| Ft1 | 品牌字加一句标语，旁边几枚小链接 | 编辑、营销页默认 |
| Ft2 | 一条横线下一行版权 | 现代极简 |
| Ft3 | 三四栏分类索引 | 文档根、站点地图清楚时 |
| Ft4 | 整块小字排版的版本说明 | 终端感、编辑气质 |
| Ft5 | 一句大字收尾 | 需要收束情绪 |
| Ft6 | 像信件落款 | 写作型页面 |
| Ft7 | 订阅表单当主角 | 媒体、订阅驱动 |
| Ft8 | 横向滚动的重复标语条 | 品牌感强的活动页 |

## 分配时的硬规则

- 同一批内 macrostructure 不重复，nav 不重复，footer 每种最多两次。
- 默认避开 N1a 与 Ft3：这两个是最容易被认出的模板指纹，只有真的符合才用。
- 版式件只是一层，配色另算：强调色在基准规范色板里取，同批色系不少于六种。
- 换件要写理由并记进 FINDINGS，不许悄悄换。
