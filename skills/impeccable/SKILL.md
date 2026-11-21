---
name: impeccable
description: "本库只取它的质量底线与评审量规：改前端界面或评审 UI 前，读 references/craft-floor.md（编辑前底线）与 references/critique-rubric.md（评审量规）。它自己的 Rust 引擎与命令层没有入库，不要执行本文件的 Setup 与 Commands，那些走上游 CLI。"
license: Apache 2.0
---

这份 SKILL.md 是上游原文（commit `b49177d`）的节选，入本库只作两份参考的说明书：`references/craft-floor.md`（改 UI 前读的质量底线与禁令）与 `references/critique-rubric.md`（评审量规）。上游还有 24 个命令与一个 Rust 引擎（`npx impeccable detect` 等在本机运行时下载二进制），本项目不 vendor，也不执行下文的 Setup 与 Commands；需要跑检测时用上游 CLI，不依赖库内文件。

与项目品牌语法冲突的条目以项目为准：craft-floor 禁眉题，而本库案例页的 `JOB INDEX / 2026` 这类元信息条是有意保留的品牌语法，只取其中可机判的底线（对比度、层次、状态、浏览器表面）。

以下为上游原文节选：

This skill gives you the tools and permission to make design that earns the name out-of-distribution craft. Work as an award-winning design director would: production-grade code, a clear POV, a deep grasp of what the client and its users need, and exceptional craft.

Core principles:
- Finish the job. No hedging, no shortcuts: the deliverable is complete, except assets the user must provide.
- Scale ambition to the surface's mode (see Modes). Persuade and Experience get full commitment: bold, distinct work with a point of view. On Operate and Read, ambition shows as precision and restraint, and patterns the visitor already knows earn their place.
- Verify by looking at the rendered result at the sizes it ships at, and batch the checks: fix what one look shows before looking again.

## How to design

- **The brief wins.** Honor pinned aesthetics, eras, materials, fonts, and palettes even when they conflict with a saturated-pattern warning. Redirecting a clear brief toward your taste is failure.
- **Refinement preserves; redesign replaces.** Refinement keeps the incumbent identity, behavior, copy, and everything outside scope. Ask before replacing factual copy or adding claims. Redesign keeps product truth, content, function, native affordances, and constraints, but treats the old look as evidence and anti-reference; choose a replacement world in new-work and replace DESIGN.md. Never split the difference into polish on the discarded look.
- **Loaded symbols stay out of the decoration.** A subject's world does not license emblems tied to militarism, supremacy, or hate movements as motifs, badges, or ornament; reach for that world's neutral forms instead. Content that documents such a symbol as fact stays as it is.
- **Visual authority is evidence, not a filename.** Missing DESIGN.md alone does not make a project greenfield; new-work decides whether to preserve, expand, or replace the incumbent world.

## Modes

The mode names what the visitor's success looks like on this surface.

- **Persuade:** the visitor decides and acts; design is the product. Landing pages, marketing, campaigns, pricing. Earn attention and action.
- **Operate:** the visitor completes a task. App UI, dashboards, editors, admin, settings, tools. Scanability, consistency, native expectations, and the real usage scene outrank expression.
- **Read:** the visitor understands something. Docs, articles, guides, help, changelogs. Structure for comprehension, then make the reading experience worth staying in.
- **Experience:** the visitor is inside the work itself. Portfolios, galleries, showcases. Let the artifact lead from the first viewport; the interface recedes.

## Commands

上游 24 个命令表与 Setup 细节未入库（依赖运行时下载的引擎）；需要时看上游仓库 `skill/SKILL.src.md`。
