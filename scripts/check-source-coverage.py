#!/usr/bin/env python3
"""基准规范覆盖检测 + 引用体检。

1. 覆盖：读构建产物 site/dist/ai/design-points.json 里 project-* 设计点的 articles，
   统计每套基准规范原文的数值密度，标出取不到值的维度。
2. 引用：扫全库对 content/*.md 的路径引用，检查目标文件是否存在（抓删文后的残引）。

用法：
  python3 scripts/check-source-coverage.py            两项都跑，输出 markdown
  python3 scripts/check-source-coverage.py --write    把报告写进 site/design/source-coverage.md
  python3 scripts/check-source-coverage.py --check    只比对报告与当前数据，不一致退出 1（每日巡检用）
  python3 scripts/check-source-coverage.py --json     覆盖结果输出 JSON
  python3 scripts/check-source-coverage.py --refs     只跑引用体检
退出码：0 全过；1 有缺口、坏链或报告过期；2 缺构建产物。
"""

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PACK = ROOT / "site/dist/ai/design-points.json"
CONTENT = ROOT / "content"

RE_HEX = re.compile(r"#[0-9a-fA-F]{3,8}\b")
RE_LEN = re.compile(r"\b\d+(?:\.\d+)?\s?(?:px|pt)\b")
RE_TIME = re.compile(r"\b\d+(?:\.\d+)?\s?(?:ms|毫秒|秒)\b")
RE_REF = re.compile(r"(?<![\w/.\-])content/[A-Za-z0-9_\-./]+\.md")

# 一个维度算覆盖的最低命中数。低于这个数说明正文里没有可取的成组数值。
MIN_HITS = 8

# 构建产物与缓存里有整库正文，扫进来又慢又误报。
SKIP_DIRS = {"site/dist", "site/.astro", "site/node_modules", "node_modules", ".git"}


def scan(path: Path):
    if not path.exists():
        return None
    text = path.read_text(encoding="utf-8", errors="ignore")
    return {
        "chars": len(text),
        "hex": len(RE_HEX.findall(text)),
        "len": len(RE_LEN.findall(text)),
        "time": len(RE_TIME.findall(text)),
    }


def coverage_rows():
    pack = json.loads(PACK.read_text(encoding="utf-8"))
    rows = []
    for point in pack.get("points", []):
        pid = point.get("id", "")
        if not pid.startswith("project-"):
            continue
        files = []
        missing = []
        for art in point.get("articles", []):
            rel = art.get("path")
            if not rel:
                continue
            stat = scan(CONTENT / rel)
            if stat is None:
                missing.append(rel)
                continue
            files.append({"file": rel, **stat})
        if not files and not missing:
            continue
        total = {k: sum(f[k] for f in files) for k in ("hex", "len", "time")}
        dims = {
            "色": total["hex"] >= MIN_HITS,
            "尺寸": total["len"] >= MIN_HITS,
            "动效": total["time"] >= MIN_HITS,
        }
        rows.append(
            {
                "point": pid,
                "name": point.get("name", ""),
                "files": len(files),
                "missing": missing,
                "chars": sum(f["chars"] for f in files),
                "hex": total["hex"],
                "len": total["len"],
                "time": total["time"],
                "gaps": [k for k, ok in dims.items() if not ok],
            }
        )
    return rows


def ref_targets():
    """扫全库的 content/*.md 路径引用，返回 [(出现处, 目标)]。"""
    found = []
    for path in ROOT.rglob("*"):
        if not path.is_file():
            continue
        rel = path.relative_to(ROOT).as_posix()
        if any(rel == d or rel.startswith(d + "/") for d in SKIP_DIRS):
            continue
        if path.suffix not in {".md", ".json", ".ts", ".astro", ".mjs", ".py", ".css", ".html"}:
            continue
        if rel == "scripts/check-source-coverage.py":
            continue
        try:
            text = path.read_text(encoding="utf-8", errors="ignore")
        except OSError:
            continue
        for m in RE_REF.finditer(text):
            found.append((rel, m.group(0)))
    return found


REPORT = ROOT / "site/design/source-coverage.md"


def render(rows: list, bad: int, refs: list, broken: list) -> str:
    out = [
        "由 `python3 scripts/check-source-coverage.py --write` 生成。数据源是构建产物 "
        "`site/dist/ai/design-points.json` 与全库路径引用；单套基准规范某维度命中少于 "
        f"{MIN_HITS} 处记缺口。",
        "",
        "## 基准规范数值覆盖",
        "",
        "| 基准规范 | 文章 | 字数 | 色值 | 尺寸 | 时长 | 缺口 |",
        "| --- | --- | --- | --- | --- | --- | --- |",
    ]
    for r in rows:
        gaps = "、".join(r["gaps"]) if r["gaps"] else "无"
        if r["missing"]:
            gaps += "（缺文件 " + "、".join(r["missing"]) + "）"
        out.append(
            f"| {r['name'] or r['point']} | {r['files']} | {r['chars']} | "
            f"{r['hex']} | {r['len']} | {r['time']} | {gaps} |"
        )
    out += ["", f"基准规范 {len(rows)} 套，缺维度或缺文件 {bad} 套。", "", "## 引用体检", ""]
    out.append(f"扫到 {len(refs)} 处 content 引用，坏链 {len(broken)} 处。")
    if broken:
        out += ["", "| 引用 | 出现在 |", "| --- | --- |"]
        out += [f"| `{target}` | {where} |" for where, target in broken]
    return "\n".join(out) + "\n"


def main() -> int:
    args = set(sys.argv[1:])
    refs_only = "--refs" in args
    bad = 0
    rows = []

    if not refs_only:
        if not PACK.exists():
            print("缺少 site/dist/ai/design-points.json，先跑 npm run build", file=sys.stderr)
            return 2
        rows = coverage_rows()
        if "--json" in args:
            print(json.dumps(rows, ensure_ascii=False, indent=2))
            return 0 if all(not r["gaps"] and not r["missing"] for r in rows) else 1
        bad = sum(1 for r in rows if r["gaps"] or r["missing"])

    refs = ref_targets()
    broken = sorted({(w, t) for w, t in refs if not (ROOT / t).exists()})
    text = render(rows, bad, refs, broken)

    if "--check" in args:
        current = REPORT.read_text(encoding="utf-8") if REPORT.exists() else ""
        if current != text:
            print(
                "site/design/source-coverage.md 与当前数据不一致："
                "跑 python3 scripts/check-source-coverage.py --write"
            )
            return 1
        return 0
    if "--write" in args:
        REPORT.write_text(text, encoding="utf-8")
    else:
        print(text, end="")
    return 1 if (bad or broken) else 0


if __name__ == "__main__":
    raise SystemExit(main())
