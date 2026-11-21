#!/usr/bin/env python3
"""校验设计地图三件一致：场景（tasks）→ 设计点（points[].tasks）→ 文章（points[].articles）。

只读仓库文件，不改数据；退出码 0 表示通过，1 表示有错。

用法：
    python3 scripts/check-map.py            # 在仓库根目录跑
    python3 scripts/check-map.py --quiet    # 只打印问题

检查项：
  1. tasks 的键是 s1..sN 连续编号，无重复、无跳号
  2. 每个点的 tasks 都是已定义的场景，1 到 3 个，不重复
  3. 每个点引用的文章都在 content/ 下真实存在
  4. content/ 下的文章要么被某个点带出，要么在选型行 files 里（dist/ai/guide.json 存在时才查）
  5. checks 每条 1 到 2 个，cite 是 content/<路径>:<行号>，文件存在且行号在范围内
  6. 必选场景表引用的场景都存在
  7. 场景按编号顺序排列，编号与顺序一致
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
STAR = ROOT / "site/src/data/star-points.json"
CONTENT = ROOT / "content"
GUIDE_JSON = ROOT / "site/dist/ai/guide.json"

CITE_RE = re.compile(r"^content/([^:]+\.md):(\d+)$")
TASK_RE = re.compile(r"^s(\d+)$")


def load_star() -> dict:
    return json.loads(STAR.read_text())


def content_files() -> set[str]:
    return {str(p.relative_to(CONTENT)) for p in CONTENT.rglob("*.md")}


def main() -> int:
    quiet = "--quiet" in sys.argv
    star = load_star()
    tasks: dict = star.get("tasks", {})
    points: list = star.get("points", [])
    files = content_files()
    errors: list[str] = []
    warnings: list[str] = []

    # 1. 场景编号
    nums = []
    for key in tasks:
        m = TASK_RE.match(key)
        if not m:
            errors.append(f"场景键格式不对：{key}")
            continue
        nums.append(int(m.group(1)))
    if nums:
        expected = list(range(1, len(nums) + 1))
        if sorted(nums) != expected:
            errors.append(f"场景编号不连续：实际 {sorted(nums)}，应为 {expected}")
        if nums != sorted(nums):
            errors.append("tasks 的书写顺序与编号不一致，页面会按书写顺序渲染")

    # 2. 点挂场景
    by_task: dict[str, list[str]] = {}
    for p in points:
        pid = p.get("id", "<无 id>")
        ptasks = p.get("tasks") or []
        if not isinstance(ptasks, list) or not ptasks:
            errors.append(f"{pid}：tasks 为空")
            continue
        if len(ptasks) > 3:
            errors.append(f"{pid}：tasks 有 {len(ptasks)} 个，上限 3")
        if len(set(ptasks)) != len(ptasks):
            errors.append(f"{pid}：tasks 有重复项 {ptasks}")
        for t in ptasks:
            if t not in tasks:
                errors.append(f"{pid}：引用了未定义的场景 {t}")
            else:
                by_task.setdefault(t, []).append(pid)

    # 3. 文章存在
    referenced: set[str] = set()
    for p in points:
        pid = p.get("id", "<无 id>")
        arts = p.get("articles") or []
        if not arts:
            errors.append(f"{pid}：没有 articles")
        for a in arts:
            rel = a[len("content/"):] if a.startswith("content/") else a
            if rel not in files:
                errors.append(f"{pid}：文章不存在 {a}")
            referenced.add(rel)

    # 4. 未牵引的文章（有构建包时查）
    if GUIDE_JSON.exists():
        guide = json.loads(GUIDE_JSON.read_text())
        for m in guide.get("main_sources", []):
            for f in m.get("files", []):
                referenced.add(f[len("content/"):] if f.startswith("content/") else f)
        # content/ 根目录下的说明类文档不算文章，不参与牵引检查
        docs = {f for f in files if "/" not in f}
        orphans = sorted(files - referenced - docs)
        if orphans:
            errors.append(f"未被牵引的文章 {len(orphans)} 篇：{', '.join(orphans[:5])}")

    # 5. checks 与 cite
    for p in points:
        pid = p.get("id", "<无 id>")
        checks = p.get("checks") or []
        if len(checks) > 2:
            errors.append(f"{pid}：checks 有 {len(checks)} 条，上限 2")
        if p.get("domain") == "howto" and checks and len(checks) < 1:
            errors.append(f"{pid}：checks 为空")
        for c in checks:
            cite = (c.get("cite") or "").strip()
            m = CITE_RE.match(cite)
            if not m:
                errors.append(f"{pid}：cite 格式应为 content/<路径>:<行号>，实际 {cite!r}")
                continue
            rel, line = m.group(1), int(m.group(2))
            path = CONTENT / rel
            if rel not in files:
                errors.append(f"{pid}：cite 指向的文件不存在 {cite}")
                continue
            total = sum(1 for _ in path.open(encoding="utf-8"))
            if line < 1 or line > total:
                errors.append(f"{pid}：cite 行号越界 {cite}（该文 {total} 行）")
            if not (c.get("q") or "").strip() or not (c.get("a") or "").strip():
                errors.append(f"{pid}：checks 有缺 q 或 a 的条目")

    # 6. 必选场景表（从 guide.ts 里读，避免依赖构建包）
    guide_ts = ROOT / "site/src/data/guide.ts"
    if guide_ts.exists():
        ts = guide_ts.read_text()
        block = ts.split("REQUIRED_SCENARIOS", 1)[-1].split("export function", 1)[0]
        used = re.findall(r"id:\s*'(s\d+)'", block)
        for t in used:
            if t not in tasks:
                errors.append(f"必选场景表引用了未定义的场景 {t}")
        dup = {t for t in used if used.count(t) > 1}
        if dup:
            errors.append(f"必选场景表有重复项 {sorted(dup)}")

    # 7. 重复点的信息汇总
    # 选型点（S1）由 site/src/data/project-points.ts 生成，不在 star-points.json 里；
    # 有构建包时用包里的 points_by_task 补齐，免得汇总里漏掉整个场景。
    pack = ROOT / "site/dist/ai/design-points.json"
    if pack.exists():
        pack_map = json.loads(pack.read_text()).get("points_by_task", {})
        for t, ids in pack_map.items():
            if t in tasks and t not in by_task:
                by_task[t] = list(ids)
    for t, ids in sorted(by_task.items()):
        if not ids:
            warnings.append(f"{t} 没有任何设计点")

    if not quiet:
        print(f"场景 {len(tasks)} 个，设计点 {len(points)} 个，文章 {len(files)} 篇")
        for t in sorted(by_task, key=lambda x: int(x[1:])):
            print(f"  {t} {tasks[t]['name']}：{len(by_task[t])} 点")

    if errors:
        print(f"\n发现 {len(errors)} 个问题：")
        for e in errors:
            print(f"  - {e}")
    if warnings:
        print(f"\n提醒 {len(warnings)} 条：")
        for w in warnings:
            print(f"  - {w}")
    if not errors:
        print("\nmap: ok")
    return 1 if errors else 0


if __name__ == "__main__":
    raise SystemExit(main())
