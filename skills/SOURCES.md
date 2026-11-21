# 项目内 skill 来源

| skill | 上游版本 | 锁定 commit | 许可 | 来源 | 入库范围 |
| --- | --- | --- | --- | --- | --- |
| Hallmark | 2.0.0 | `04977e1` | MIT | https://github.com/Nutlope/hallmark | 说明、参考、脚本；50 张主题照片未入库 |
| UI/UX Design（SkillBox） | 3.0.0 | `3de351c` | MIT | https://github.com/AntJanus/skillbox | 全量 |
| Interfaces Skills | 2026-11-19 | `672ae44` | MIT | https://github.com/jakubkrehel/skills | 评审层 9 个 skill；`afk`、`break`、`upskill`、`state-machine`、`variant` 不入库 |
| Impeccable | 2026-11-18 | `b49177d` | Apache 2.0 | https://github.com/pbakaus/impeccable | 仅文档层：SKILL.md、craft-floor、critique-rubric、LICENSE；Rust 引擎与 CLI 不入库 |

项目内版本号统一用 0.x：每行 vendored skill 在 `manifest.json` 里的 `version` 从 `0.1` 起记，上游有大版本也不跟随；上游自己的版本记在「上游版本」列，升级时只动 commit 与上游版本。

评估过、不接的：

- Taste Skill（MIT）：与 Hallmark 同为「从零生成」的生成器，同时装会互相抢活；生成层只留一个。
- Mobbin / Refero：竞品截图库，商业订阅，只在竞品研究时用，不是流程 skill。
- Tailwind Plus：已停止新购（2026-09-09）；UI-Patterns 是 CC BY-NC-SA，非商用许可，均不接入。

## 项目内补丁

- `skills/hallmark/SKILL.md` 与 `skills/ui-ux-design/SKILL.md` 的 frontmatter 版本改为项目内 `0.1`，Hallmark 的 stamp 模板同步改成 `v0.1`；上游版本只记在本表与 `manifest.json`。
- `skills/ui-ux-design/references/EVAL.md` 里的 v2.0.0 是上游评分历史，不是项目版本，保留原样。

## 为什么没有照片

Hallmark 的 `references/themes/*.jpg` 来自 Wikimedia Commons，许可含 CC BY 与 CC BY-SA。项目是公开仓库，直接入库会把署名与 ShareAlike 义务带进来。项目本身用 `content/brands` 定视觉，不需要这组图片主题，所以只 vendor 文本与脚本。需要完整 theme deal 时，用本机 `~/.hermes/skills/hallmark` 或上游仓库。

## 为什么 Impeccable 只入库文档层

Impeccable 的检测器是 Rust 引擎，skill 脚本会在首次运行时下载对应平台的二进制，不适合 vendor 进公开仓库。项目只取两份纯文档：craft-floor（质量底线与禁令）和 critique-rubric（评审量规），作为评审层的补充量规；要跑它的 62 条确定性检测时用上游 CLI（`npx impeccable detect`），不依赖库内文件。

## 为什么不用 submodule

submodule 只存指针，换机器还要联网拉外部仓库，版本也容易和 `manifest.json` 漂移。这里直接 vendor，clone 一次就完整可用；代价是升级时要手动同步，`scripts/check-skills.py` 会核对版本、必需文件与 excluded 名单。

## 许可

- Hallmark：MIT，`skills/hallmark/LICENSE` 保留原文件。
- UI/UX Design：MIT，许可写在 `SKILL.md` 的 frontmatter；上游仓库根目录没有独立 LICENSE 文件。
- Interfaces Skills：MIT，`skills/interfaces/LICENSE` 保留上游根 LICENSE；库内各 SKILL.md 的 frontmatter 未单独携带许可。
- Impeccable：Apache 2.0，`skills/impeccable/LICENSE` 保留原文件。
- 本项目的构图、脚本与文档不与上述许可混同；引用时保留来源与版本。
