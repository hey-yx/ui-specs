#!/usr/bin/env python3
"""取值记录核对：引用格式、行号区间、值-引对账、跨源数值。

指南第 3 步要求每个值连 `content/完整路径:行号` 记账，交付前跑这个脚本。
核对四件事：

1. 引用格式：`content/<目录>/<文章>.md:行号` 能解析；相对引用（`:67`）有可继承的锚点；
   带值的引用必须写行号，只写文件名的算缺口。缩写路径（`fonts.md:52`）能唯一定位
   到基准规范的文章时照常核对，另记一条提示，按规则应写 `content/` 完整路径。
2. 行号区间：文件存在，行号在文件范围内，区间不反向。
3. 值-引对账：引用旁边写的 hex / px / pt / ms 必须能在被引的那几行里找到。
   表格按引用格与左边一格比，正文按引用前那一小段比；找不到时表格算违规、正文算提示。
4. 跨源数值：带值的引用只能落在基准规范那一行的 files 里；缺口回源按
   GAP_RULES 放行。原则引用（不带数值）可以来自任何来源。

基准规范从取值记录的「基准规范」声明里认，也可以用 --source 指定。声明是
粘性的：文件中途换源（本站自己的 site/design/DECISIONS.md 就是按时间记录的）
以后面的声明为准，换源前的引用仍按当时那套核。

用法：
  python3 scripts/check-ledger.py examples/tallylane/DECISIONS.md
  python3 scripts/check-ledger.py --all
  python3 scripts/check-ledger.py <文件> --source project-tdesign
  python3 scripts/check-ledger.py <文件> --json
  python3 scripts/check-ledger.py --all --strict     # 提示也算不通过
退出码：0 通过（可能带提示）；1 有违规；2 用法或数据加载失败。
"""

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
GUIDE = ROOT / "site/src/data/guide.ts"
def _default_ledgers():
    """--all 扫全部案例记录加本站记录；新加案例不用改脚本。"""
    cases = sorted((ROOT / "examples").glob("*/DECISIONS.md"))
    return cases + [ROOT / "site/design/DECISIONS.md"]


DEFAULT_LEDGERS = _default_ledgers()

# 引用：任意 .md 路径，行号可省；行号支持 12 / 12-14 / 32,34 / 32,34-36
RE_CITE = re.compile(
    r"(?P<path>(?:[\w.\-]+/)*[\w.\-]+\.md)(?::(?P<lines>\d+(?:[-,]\d+)*))?"
    r"|`:(?P<rel>\d+(?:[-,]\d+)*)`"
)
# 值：hex 色值、带单位的尺寸与时长。比例（4.5:1）是实测算出来的，不算原文值。
RE_VALUE = re.compile(r"#[0-9a-fA-F]{3,8}\b|(?<![\w.])\d+(?:\.\d+)?\s?(?:px|pt|ms)\b")
# 数值来源声明：旧称「基准规范」，现行口径「数值文章」；两种都认
# `基准规范：TDesign`、`数值文章是 TDesign`、`数值文章 TDesign`
RE_DECL = re.compile(r"(?:基准规范|数值文章)\s*[:：=是为]?\s*")


def die(msg):
    print(msg, file=sys.stderr)
    return 2


def ts_block(src, marker):
    start = src.index(marker)
    end = src.index("\n]", start)
    return src[start : end + 2]


def ts_entries(block):
    """按列 2 的 `{` … `},` 切对象字面量；嵌套对象都写在行内，不会误切。"""
    return re.findall(r"^  \{\n(.*?)^  \},?$", block, re.S | re.M)


def ts_str(entry, key):
    m = re.search(rf"\b{key}:\s*[\"']([^\"']*)[\"']", entry)
    return m.group(1) if m else None


def ts_files(entry):
    m = re.search(r"\bfiles:\s*\[(.*?)\]", entry, re.S)
    return re.findall(r"[\"']([^\"']+\.md)[\"']", m.group(1)) if m else []


def load_catalog():
    if not GUIDE.exists():
        raise SystemExit(die(f"缺数据源：{GUIDE}"))
    src = GUIDE.read_text(encoding="utf-8")
    rows = []
    for entry in ts_entries(ts_block(src, "export const MAIN_SOURCES")):
        rows.append(
            {
                "id": ts_str(entry, "id"),
                "source": ts_str(entry, "source") or "",
                "context": ts_str(entry, "context") or "",
                "files": ts_files(entry),
                "archived": "archived: true" in entry,
            }
        )
    gaps = []
    for entry in ts_entries(ts_block(src, "export const GAP_RULES")):
        gaps.append({"dim": ts_str(entry, "dim") or "", "files": ts_files(entry)})
    if len(rows) < 5 or len(gaps) < 5:
        raise SystemExit(die(f"解析 guide.ts 失败：选型行 {len(rows)}、缺口规则 {len(gaps)}"))
    return rows, gaps


def source_keyword(source):
    return source.split("（")[0].strip()


def detect_declarations(text, rows):
    """逐行认「基准规范」声明，返回 [(行号, 行)]，粘性生效由调用方维护。"""
    out = []
    for lineno, line in enumerate(text.splitlines(), 1):
        for m in RE_DECL.finditer(line):
            window = line[m.end() : m.end() + 24]
            for row in rows:
                if row["id"] and row["id"] in window:
                    out.append((lineno, row))
                elif row["source"] and source_keyword(row["source"]) in window:
                    out.append((lineno, row))
    return out


def expand_lines(spec):
    """'51-60' / '32,34' / '32,34-36' → 行号列表；区间反向返回 None。"""
    out = []
    for part in spec.split(","):
        part = part.strip()
        if not part:
            continue
        if "-" in part:
            a, b = (int(x) for x in part.split("-", 1))
            if a > b:
                return None
            out.extend(range(a, b + 1))
        else:
            out.append(int(part))
    return out


def values_in(text):
    return {tok.lower().replace(" ", "") for tok in RE_VALUE.findall(text)}


def scope_text(line, pos, prev_end):
    """取引用所在的那一段：表格取引用格加左边一格，正文取引用前（上一条引用之后）的一小段。

    表格只看相邻两格：左边一格是取值表里放值的那格，右侧一列通常是「落到本页」的
    实测值，不当作原文值；更左的描述列也不当作取值的出处。
    """
    if line.lstrip().startswith("|"):
        cell_start = line.rfind("|", 0, pos)
        cell_end = line.find("|", pos)
        end = cell_end if cell_end != -1 else len(line)
        if cell_start == -1:
            return line[:end]
        prev_cell = line.rfind("|", 0, cell_start)
        left = line[prev_cell + 1 : cell_start]
        # 左格只在像「取值格」时才纳入：短、基本就是一个值。长句子是描述或改法，不当作原文值。
        if len(left.strip()) > 24:
            left = ""
        return left + line[cell_start:end]
    start = max(prev_end, line.rfind("。", 0, pos) + 1, line.rfind("；", 0, pos) + 1)
    ends = [i for i in (line.find("。", pos), line.find("；", pos)) if i != -1]
    return line[start : min(ends) if ends else len(line)]


class Resolver:
    """把引用路径落到文件：完整路径、本库文档、缩写、外部文档。"""

    def __init__(self, rows, gaps):
        self.rows = rows
        self.gaps = gaps
        self.content_files = sorted((ROOT / "content").rglob("*.md"))

    def resolve(self, path_str, owned):
        if path_str.startswith("content/"):
            target = ROOT / path_str
            return (target, "ok") if target.exists() else (None, "missing")
        target = ROOT / path_str
        if target.exists():
            return target, "internal"
        pool = [ROOT / f for f in owned]
        hits = [
            p
            for p in pool
            if p.name == path_str or p.name.endswith(path_str) or str(p).endswith("/" + path_str)
        ]
        pool_name = "基准规范"
        if len(hits) != 1:
            hits = [
                p
                for p in self.content_files
                if p.name == path_str or str(p.relative_to(ROOT)).endswith("/" + path_str)
            ]
            pool_name = "全库"
        if len(hits) == 1:
            return hits[0], "shorthand"
        if len(hits) > 1:
            return None, f"ambiguous({pool_name} {len(hits)} 篇)"
        return None, "external"


def check_ledger(path, rows, gaps, source_override=None):
    text = path.read_text(encoding="utf-8")
    lines = text.splitlines()
    resolver = Resolver(rows, gaps)
    issues = []
    stats = {"citations": 0, "value_citations": 0, "principle": 0, "shorthand": 0}

    if source_override:
        baselines = [
            r
            for r in rows
            if source_override in (r["id"], r["source"]) or source_override == source_keyword(r["source"])
        ]
        if not baselines:
            issues.append(("基准规范", 0, f"--source {source_override} 不在 MAIN_SOURCES 里"))
        declarations = []
    else:
        baselines = []
        declarations = detect_declarations(text, rows)
        if not declarations:
            issues.append(("数值来源", 0, "没写数值文章声明（旧称基准规范），跨源检查无法执行"))

    def owned_at(lineno):
        owned = set()
        for row in baselines:
            owned |= set(row["files"])
        for decl_line, row in declarations:
            if decl_line <= lineno:
                owned |= set(row["files"])
        for gap in gaps:
            owned |= set(gap["files"])
        return owned

    cache = {}
    last_path = None
    skipped = {}
    shorthand_paths = {}
    for lineno, line in enumerate(lines, 1):
        prev_end = 0
        for m in RE_CITE.finditer(line):
            if m.group("path"):
                path_str = m.group("path")
                spec = m.group("lines")
                last_path = path_str
            else:
                spec = m.group("rel")
                path_str = last_path
                if not path_str:
                    issues.append(("引用格式", lineno, f"相对引用 `:{spec}` 前没有可继承的完整路径"))
                    continue

            owned = owned_at(lineno)
            target, kind = resolver.resolve(path_str, owned)
            if target is None:
                if kind == "missing":
                    issues.append(("坏引用", lineno, f"{path_str} 不存在"))
                else:
                    skipped.setdefault(path_str, (lineno, kind))
                continue
            if kind == "shorthand":
                stats["shorthand"] += 1
                shorthand_paths.setdefault(path_str, (lineno, target))

            scope = scope_text(line, m.start(), prev_end)
            prev_end = m.end()
            # 派生值与本站自己的设计文档不核对原文值：前者本来就不在原文里
            is_source = str(target).startswith(str(ROOT / "content"))
            derived = "derived" in scope or "派生" in scope

            if spec is None:
                wanted = values_in(scope) if is_source and not derived else set()
                later_rel = any(x.group("rel") and x.start() > m.start() for x in RE_CITE.finditer(line))
                if wanted and not later_rel:
                    vals = "、".join(sorted(wanted)[:3])
                    issues.append(("引用格式", lineno, f"{path_str} 缺行号，同一段里有值 {vals}"))
                continue

            nums = expand_lines(spec)
            if nums is None:
                issues.append(("行号区间", lineno, f"{path_str}:{spec} 区间反向"))
                continue
            if target not in cache:
                cache[target] = target.read_text(encoding="utf-8", errors="ignore").splitlines()
            body = cache[target]
            over = [n for n in nums if n < 1 or n > len(body)]
            if over:
                issues.append(("行号区间", lineno, f"{path_str}:{spec} 超出文件行数 {len(body)}"))

            stats["citations"] += 1
            wanted = values_in(scope) if is_source and not derived else set()
            if not wanted:
                stats["principle"] += 1
                continue
            stats["value_citations"] += 1
            got = set()
            for n in nums:
                if 1 <= n <= len(body):
                    got |= values_in(body[n - 1])
            if not wanted & got:
                near = body[nums[0] - 1].strip()[:90] if 1 <= nums[0] <= len(body) else ""
                vals = "、".join(sorted(wanted)[:3])
                sev = "值-引不符" if line.lstrip().startswith("|") else "提示"
                issues.append((sev, lineno, f"{path_str}:{spec} 里找不到 {vals}（该行：{near}）"))
            if str(target).startswith(str(ROOT / "content")) and str(target) not in {str(ROOT / f) for f in owned}:
                vals = "、".join(sorted(wanted)[:2])
                rel = target.relative_to(ROOT)
                issues.append(("跨源数值", lineno, f"{rel} 不在基准规范与缺口回源里，引用值 {vals}"))

    for path_str, (lineno, kind) in skipped.items():
        note = "不是本库文件，未核" if kind == "external" else f"{kind}，跳过核对"
        issues.append(("提示", lineno, f"{path_str} {note}"))
    if shorthand_paths:
        first_line, first_target = next(iter(shorthand_paths.values()))
        issues.append(
            (
                "提示",
                first_line,
                f"缩写引用 {stats['shorthand']} 处（{len(shorthand_paths)} 条路径，首条 {first_target.relative_to(ROOT)}），按规则应写 content/ 完整路径",
            )
        )

    errors = [i for i in issues if i[0] in ("坏引用", "引用格式", "行号区间", "值-引不符", "跨源数值", "基准规范")]
    warnings = [i for i in issues if i not in errors]
    shown_base = [r["id"] or r["source"] for r in baselines]
    if not source_override:
        for _, row in declarations:
            key = row["id"] or row["source"]
            if key not in shown_base:
                shown_base.append(key)
    return {
        "file": str(path.relative_to(ROOT)) if str(path).startswith(str(ROOT)) else str(path),
        "baselines": shown_base,
        "stats": stats,
        "errors": [{"kind": k, "line": n, "message": m} for k, n, m in errors],
        "warnings": [{"kind": k, "line": n, "message": m} for k, n, m in warnings],
        "ok": not errors,
    }


def print_result(res):
    base = "、".join(res["baselines"]) or "（未声明）"
    s = res["stats"]
    print(f"取值记录：{res['file']}")
    print(f"基准规范：{base}")
    print(f"引用 {s['citations']} 处：带值 {s['value_citations']}，原则 {s['principle']}，缩写 {s['shorthand']}")
    for item in res["errors"]:
        print(f"- {item['kind']} 第 {item['line']} 行：{item['message']}")
    for item in res["warnings"]:
        print(f"- {item['kind']} 第 {item['line']} 行：{item['message']}")
    if res["errors"]:
        print(f"结论：不通过（{len(res['errors'])} 条）")
    elif res["warnings"]:
        print(f"结论：通过，另有 {len(res['warnings'])} 条提示")
    else:
        print("结论：通过")


HELP = """取值记录核对：引用格式、行号区间、值-引对账、跨源数值。

用法：
  python3 scripts/check-ledger.py <取值记录.md>     核一份记录
  python3 scripts/check-ledger.py --all            核仓库里的全部记录
  python3 scripts/check-ledger.py <文件> --source project-tdesign   指定基准规范
  python3 scripts/check-ledger.py <文件> --json     输出 JSON
  python3 scripts/check-ledger.py <文件> --strict   提示也算不通过
退出码：0 通过；1 有违规；2 用法或数据加载失败。"""

FLAGS = {"--all", "--json", "--strict", "--source", "--help", "-h"}


def main(argv):
    flags = {a for a in argv[1:] if a.startswith("-")}
    unknown = flags - FLAGS
    if unknown:
        return die(f"不认识的参数：{' '.join(sorted(unknown))}\n\n{HELP}")
    if flags & {"--help", "-h"}:
        print(HELP)
        return 0
    args = [a for a in argv[1:] if not a.startswith("--")]
    as_json = "--json" in flags
    run_all = "--all" in flags
    strict = "--strict" in flags
    source = None
    if "--source" in argv:
        idx = argv.index("--source")
        if idx + 1 >= len(argv):
            return die("--source 后面要跟选型行 id 或基准规范名")
        source = argv[idx + 1]
        args = [a for a in args if a != source]

    rows, gaps = load_catalog()

    if run_all:
        targets = [p for p in DEFAULT_LEDGERS if p.exists()]
    elif args:
        given = Path(args[0])
        if given.is_absolute():
            targets = [given]
        elif given.exists():
            targets = [given.resolve()]
        else:
            targets = [ROOT / given]
    else:
        guess = Path.cwd() / "DECISIONS.md"
        if not guess.exists():
            return die("用法：check-ledger.py <取值记录路径>，或 --all 检查仓库里的全部记录")
        targets = [guess]

    missing = [str(p) for p in targets if not p.exists()]
    if missing:
        return die(f"找不到取值记录：{', '.join(missing)}")

    results = [check_ledger(p, rows, gaps, source) for p in targets]
    if as_json:
        print(json.dumps(results if run_all else results[0], ensure_ascii=False, indent=1))
    else:
        for i, res in enumerate(results):
            if i:
                print()
            print_result(res)
    ok = all(r["ok"] and not (strict and r["warnings"]) for r in results)
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main(sys.argv))
