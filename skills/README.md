# 项目内 skill

这里是 UISpecs 自带的项目能力，不是本机缓存。换机器 clone 仓库后，`skills/` 里的文件直接可用。

本机 `~/.hermes/skills` 下的同名目录只是 Hermes 直接加载的工作副本；项目以仓库这份为准。两份不要各自改，升级时一起换。

## 四个 skill 的分工

| skill | 层 | 项目内版本 | 上游版本 | 管什么 | 不管什么 |
| --- | --- | --- | --- | --- | --- |
| `hallmark` | 生成 | 0.1 | 2.0.0 | 新页面的形状、app screens 分支、防模板化门禁、`sloplint` | 色值、字号、间距、品牌文章里的数值 |
| `ui-ux-design` | 生成 | 0.1 | 3.0.0 | 交互状态、ARIA、信息架构、四态、设计 token | 审美方向、配色方案、页面构图 |
| `interfaces` | 评审 | 0.1 | 2026-11-19 | 七域评审报告、按改动的增量评审、参考站拆解 | 改代码、定方向；评审默认只读 |
| `impeccable` | 评审 | 0.1 | 2026-11-18 | 质量底线（craft-floor）与评审量规（critique-rubric）；检测器按上游 CLI 用 | 生成新页面；本项目不 vendor 它的 Rust 引擎 |

生成层与评审层分开：Hallmark 与 Taste Skill 这类「从零生成」的 skill 只接一个，同时装会互相抢「建新页」的活。评审层只在页面成型后进入；生成阶段不加载。评审层内部的分工：`ui-ux-design` 的四态清单在生成时用（写页面），`interfaces` 的 better-interface 在页面成型后评审时用（读页面出报告），一个管写、一个管评，不重复跑。

## 生成时怎么读

1. 单站生成先读 `briefs/<slug>.md`；项目级方向看 `design.md`。
2. 读本文件，确认这次用哪个 skill。
3. 读 `content/` 里选中的选型行与方法篇；数值和表面语言只从选中选型行取。
4. 读 `.hallmark/log.json` 与 `briefs/layouts.md`，按产品动作独立挑 `macrostructure`、`nav`、`footer` 与页底色，批内避重不套固定外壳。
5. 由 Hallmark 结合产品动作生成页面形状与版式件；不拿预制外壳硬套所有品类。
6. 状态、ARIA、空态、错误态按 `ui-ux-design` 的清单过。
7. 落稿后要评审时走 `interfaces` 的 better-interface，量规与底线按 `impeccable` 的两份参考。
8. 跑 `python3 scripts/check-skills.py`、`python3 scripts/check-ledger.py --all` 与 `python3 scripts/check-frame.py`（检查同批页头不重、页脚每种不超过 2 次、灰底不超过半数，且同步更新 `.hallmark/log.json`）。

## 边界

- `skills/` 只给流程、参考与门禁，不替代 `content/` 的文章。项目选型行（7 套官方体系按产品同构分流，不固定单一皮肤）决定数值与表面语法，a11y 是否决项；`content/brands` 仅在明确复刻品牌官网时作视觉源。
- Hallmark 的 Floor 与项目实用密度或品牌语法冲突时，不整包照单。本项目同样禁用英文大写装饰眉题；仅列表/页脚的紧凑中点元信息（如 `云梯云 · 深圳`）或明确复刻海外品牌语境在冲突登记放行，项目只取 app 分支与可用的门禁。
- Impeccable 的 craft-floor 与项目规则冲突时以项目为准；本项目同样禁用装饰眉题，只取其中可机判的底线（对比度、层次、状态、浏览器表面）。
- 评审层的证据标准是「path:line 加现状」，风格偏好不算 finding；评审发现要修时，修完只复测受影响项。
- 不把项目规则写进 `skills/` 下四个 skill 的文件里。项目规则写 `AGENTS.md`、本文件与 `briefs/layouts.md`，升级 skill 时才不会被覆盖。
- Hallmark 的 50 张主题照片没有入库，避免把 CC BY 与 CC BY-SA 素材带进公开仓库。项目视觉与数值来源是项目选型行（如 TDesign）及按语境指定的 `content/brands`，不用 Hallmark 的图片主题。需要完整 theme deal 时用本机安装或上游仓库。

## 目录

- `manifest.json`：机器可读索引：项目内版本（0.x）、上游版本、commit、许可、必需文件
- `hallmark/`：Hallmark，文本与脚本，不含主题照片
- `ui-ux-design/`：UI/UX Design，全量
- `interfaces/`：Interfaces Skills，评审层，9 个 skill；上游另 5 个无关 skill 不入库
- `impeccable/`：Impeccable 文档层，SKILL.md、craft-floor、critique-rubric 与 LICENSE；引擎不入库
- `SOURCES.md`：来源、上游版本、commit、许可与同步方式

## 升级

1. 从上游取一份干净 checkout。
2. 用 `rsync` 覆盖对应目录，排除 `.git`、`.DS_Store` 与 `*.jpg`；interfaces 另排除 `afk`、`break`、`upskill`、`state-machine`、`variant`。
3. 更新 `manifest.json` 的 `version` 与 `commit`。
4. 跑 `python3 scripts/check-skills.py`。
5. 本机 `~/.hermes/skills` 的同名目录同步覆盖，避免会话里读旧版。

不要用 git submodule：项目要能一次 clone 离线可用，也不希望在公开仓库里多两个外部指针。

Taste Skill 评估过、不接：它和 Hallmark 同为「从零生成」的生成器，同时装会冲突；本项目已有 Hallmark 加构图库，生成层不再加第二个。Mobbin/Refero 是竞品截图库，只在竞品研究时开，不是流程 skill，不入库。
