# Interfaces Skills（评审层）

来自 [jakubkrehel/skills](https://github.com/jakubkrehel/skills)，MIT，commit `672ae44`（2026-11-19），`LICENSE` 保留原文件。原作者的设计工程杂志是 [Interfaces](https://interfaces.dev/)。

这里存的是评审层，不是生成层：它不改页面长什么样，只对已有界面出有证据的评审报告。入口是 `better-interface/SKILL.md`（七域合并评审）与 `interface-review/SKILL.md`（只看一次改动引入了什么）。

## 目录

- `better-interface/`：七域合并评审，排序报告，上限 15 条；评审只读，不改代码
- `interface-review/`：按分支、PR 或未提交改动做增量评审
- `better-accessibility/`、`better-layout/`、`better-writing/`、`better-typography/`、`better-colors/`、`better-ui/`、`better-motion/`：七个域 skill，由 better-interface 调度，也可单独用
- `explain-interface/`：拆解一个参考站是怎么做出来的
- `build-design/`：Figma 交接辅助

## 不入库的五个

上游还有 `afk`、`break`、`upskill`、`state-machine`、`variant`，与界面评审无关，manifest 的 `excluded` 列了名单，`check-skills.py` 会核对它们没有混进来。

## 怎么用

1. 评审对象是已渲染的站或某次改动：按 `better-interface/SKILL.md` 的流程走，或点名 `interface-review`。
2. 它的证据标准是「path:line 加现状」，风格偏好不算 finding；与本项目「逐条交互回炉」的验收互补，不替代。
3. 评审发现要修时，修完只复测受影响项。
