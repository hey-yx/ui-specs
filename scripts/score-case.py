#!/usr/bin/env python3
"""案例打分器：按仓库现行口径出分，不自造分制。

口径来源：
- 分数与不合格线：Readspec-test-runs/SCORES.md 的「出处与台账 40、页面质量 40、行为与回炉 20，
  出处或行为低于六成直接不合格」，与 examples/weekdeck/FINDINGS.md 的分项写法一致。
- 硬门槛：examples/README 的正文明写「任一项不过就回炉，不设总分」，四项为对账、四档溢出、
  对比度实测、交互前后记录。总分只作参考，不进闸门。

静态项自动判；视口、对比度、键盘这类必须浏览器实测的项标 browser，用 --set 注入读数，
不注入就记「待测」并给出当前上限，不拿推断顶替实测。

用法：
  python3 scripts/score-case.py examples/civicdesk
  python3 scripts/score-case.py examples/civicdesk --set four=pass contrast=pass
  python3 scripts/score-case.py --all --json
"""

import argparse
import json
import pathlib
import re
import subprocess
import sys
from html.parser import HTMLParser

ROOT = pathlib.Path(__file__).resolve().parent.parent

# (组, 名称, 分值, 来源, key)
ITEMS = [
    ("出处", "取值记录能对账", 22, "auto", None),
    ("出处", "引用写全路径", 8, "auto", None),
    ("出处", "派生值标注", 6, "auto", None),
    ("出处", "缺口与例外有记录", 4, "auto", None),
    ("页面", "四档无横向溢出", 10, "browser", "four"),
    ("页面", "对比度有实测值", 8, "browser", "contrast"),
    ("页面", "行高等于字号加 8", 6, "browser", "lineheight"),
    ("页面", "触控目标不小于 44px", 4, "browser", "touch"),
    ("页面", "首屏与 375 落点", 6, "browser", "firstscreen"),
    ("页面", "支撑内容（图或表）", 3, "auto", None),
    ("页面", "页脚四件", 3, "judge", "footer"),
    ("行为", "状态与加载有实测", 6, "browser", "states"),
    ("行为", "键盘焦点与顺序", 5, "browser", "keyboard"),
    ("行为", "跨内核对比", 3, "browser", "crossengine"),
    ("行为", "交互前后有记录", 3, "judge", "interact"),
    ("行为", "可跳过导航", 3, "auto", None),
]

GATE_KEYS = {"four": "四档无横向溢出", "contrast": "对比度有实测值"}


class Doc(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.css, self.text, self.links = [], [], []
        self.svg = self.tables = 0
        self.sections = []
        self.nav_lis = 0
        self._in_nav = 0
        self._in_style = None
        self._in_footer = 0
        self.footer_text = ""

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "style":
            self._in_style = "style"
        elif tag == "script":
            self._in_style = "script"
        elif tag in ("svg", "table"):
            self.svg += tag == "svg"
            self.tables += tag == "table"
        elif tag == "section":
            self.sections.append(a.get("id") or a.get("aria-labelledby") or "")
        elif tag == "nav":
            self._in_nav = 1
        elif tag == "li" and self._in_nav:
            self.nav_lis += 1
        elif tag == "footer":
            self._in_footer = 1
        if tag == "link" and (a.get("href") or "").startswith("http"):
            self.links.append(a["href"])
        if tag in ("script", "img", "iframe") and (a.get("src") or "").startswith("http"):
            self.links.append(a["src"])

    def handle_endtag(self, tag):
        if tag in ("style", "script"):
            self._in_style = None
        elif tag == "nav":
            self._in_nav = 0
        elif tag == "footer":
            self._in_footer = 0

    def handle_data(self, data):
        if self._in_style == "style":
            self.css.append(data)
        elif self._in_style is None:
            self.text.append(data)
            if self._in_footer:
                self.footer_text += data


def ledger(case_dir):
    f = case_dir / "DECISIONS.md"
    if not f.exists():
        return {"pass": False, "value": 0, "abbrev": 0, "msg": "没有 DECISIONS.md"}
    r = subprocess.run([sys.executable, str(ROOT / "scripts/check-ledger.py"), str(f), "--json"],
                       capture_output=True, text=True)
    try:
        data = json.loads(r.stdout)
    except Exception:
        data = {}
    st = data.get("stats") or {}
    return {"pass": r.returncode == 0, "value": st.get("value_citations", 0),
            "abbrev": st.get("shorthand", 0), "msg": ""}


def footer_hits(text):
    groups = [
        ("主办", "版权", "©", "公司", "团队", "工作室"),
        ("热线", "电话", "联系", "tel:", "邮箱", "@"),
        ("备案", "许可证", "演示", "声明", "隐私", "条款"),
    ]
    return sum(1 for g in groups if any(k in text for k in g))


def judge(case_dir, case_dir_decisions):
    html = (case_dir / "index.html").read_text(encoding="utf-8")
    p = Doc()
    p.feed(html)
    css = "\n".join(p.css)
    dec = case_dir_decisions
    led = ledger(case_dir)
    findings = (case_dir / "FINDINGS.md").read_text(encoding="utf-8") if (case_dir / "FINDINGS.md").exists() else ""

    small_touch = [int(m) for m in re.findall(r"min-height:\s*(\d+)px", css) if int(m) < 44]
    full_path = len(re.findall(r"content/[a-z-]+/[a-z0-9.\-]+\.md:\d+", dec))
    verdicts = {
        "取值记录能对账": (led["pass"], f"带值 {led['value']} 处，缩写 {led['abbrev']} 处" + (f"，{led['msg']}" if led["msg"] else "")),
        "引用写全路径": (full_path >= 8, f"全路径 {full_path} 处"),
        "派生值标注": ("derived" in html.lower() or "派生" in dec, ""),
        "缺口与例外有记录": ("缺口" in dec, ""),
        "支撑内容（图或表）": (bool(p.svg or p.tables), f"图 {p.svg} 表 {p.tables}"),

        "可跳过导航": (bool(re.search(r"跳到|跳过", html)), ""),
    }
    return verdicts, {"nav_lis": p.nav_lis, "sections": len(p.sections), "links": len(p.links)}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("case", nargs="?")
    ap.add_argument("--all", action="store_true")
    ap.add_argument("--set", nargs="*", default=[], help="注入浏览器读数，如 four=pass contrast=pass")
    ap.add_argument("--json", action="store_true")
    args = ap.parse_args()

    injected = {}
    for kv in args.set:
        k, _, v = kv.partition("=")
        injected[k.strip()] = v.strip().lower() in ("pass", "ok", "true", "1", "y")

    if args.all:
        dirs = sorted(x for x in (ROOT / "examples").iterdir() if (x / "index.html").exists())
    elif args.case:
        dirs = [pathlib.Path(args.case).resolve()]
    else:
        ap.error("给一个案例目录，或 --all")

    results = []
    for d in dirs:
        if not (d / "index.html").exists():
            continue
        dec = (d / "DECISIONS.md").read_text(encoding="utf-8") if (d / "DECISIONS.md").exists() else ""
        verdicts, meta = judge(d, dec)
        rows, got, cap = [], {}, 0
        for group, name, pts, src, key in ITEMS:
            cap += pts
            if src == "auto":
                ok, note = verdicts.get(name, (False, ""))
                if ok:
                    got[group] = got.get(group, 0) + pts
            else:
                if key in injected:
                    ok, note = injected[key], "实测注入"
                    if ok:
                        got[group] = got.get(group, 0) + pts
                else:
                    ok, note = None, ("待实测" if src == "browser" else "待人工判定")
            rows.append({"group": group, "name": name, "points": pts, "ok": ok, "note": note,
                         "source": src, "key": key})
        total = sum(got.values())
        gates = {
            "取值记录能对账": verdicts["取值记录能对账"][0],
            "四档无横向溢出": injected.get("four"),
            "对比度有实测值": injected.get("contrast"),
            "交互前后有记录": injected.get("interact"),
        }
        unknown = [k for k, v in gates.items() if v is None]
        failed = [k for k, v in gates.items() if v is False]
        group_of = {"出处": 40, "页面": 40, "行为": 20}
        pending = sum(r["points"] for r in rows if r["ok"] is None)
        # 六成线只看已判定的部分：待测项还有翻盘空间时不下「不合格」
        weak = [g for g in ("出处", "行为")
                if got.get(g, 0) < group_of[g] * 0.6 and got.get(g, 0) + pending < group_of[g] * 0.6]
        if failed or weak:
            verdict = "不合格"
        elif unknown:
            verdict = "待测"
        else:
            verdict = "合格"
        results.append({"case": str(d), "name": d.name, "score": total, "max": cap,
                        "groups": {g: f"{got.get(g,0)}/{group_of[g]}" for g in group_of},
                        "gates": gates, "verdict": verdict, "rows": rows, "meta": meta})

    if args.json:
        print(json.dumps(results, ensure_ascii=False, indent=1))
        return

    for r in results:
        print(f"\n{r['name']}  {r['score']} / {r['max']}   结论：{r['verdict']}")
        print("  " + "  ".join(f"{g} {v}" for g, v in r["groups"].items()))
        for row in r["rows"]:
            if row["ok"] is False:
                print(f"  缺  {row['name']} {row['points']}分 {row['note']}")
            elif row["ok"] is None:
                print(f"  待测 {row['name']} {row['points']}分")
        print("  闸门：" + "，".join(f"{k}={'过' if v else ('待测' if v is None else '不过')}" for k, v in r["gates"].items()))
        pend = sum(x["points"] for x in r["rows"] if x["ok"] is None)
        if pend:
            print(f"  注：待测 {pend} 分未计入，最终分区间 {r['score']} 到 {r['score'] + pend}")


if __name__ == "__main__":
    main()
