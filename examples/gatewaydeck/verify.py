#!/usr/bin/env python3
"""GatewayDeck 数据与对比度自检。读 index.html，不依赖外部服务。"""
import json
import re
import sys
from pathlib import Path

HTML = Path(__file__).with_name("index.html")
text = HTML.read_text(encoding="utf-8")

m = re.search(r'<script type="application/json" id="data">(.*?)</script>', text, re.S)
if not m:
    sys.exit("找不到内嵌 JSON #data")
data = json.loads(m.group(1))
accounts = data["accounts"]
chart = data["chart"]
errors = []


def check(label, ok, detail):
    print(("PASS " if ok else "FAIL ") + label + " · " + detail)
    if not ok:
        errors.append(label)


# 账号与状态
check("账号数", len(accounts) == 12, f"{len(accounts)} 个")
counts = {s: sum(1 for a in accounts if a["status"] == s) for s in ("ok", "low", "error")}
check("状态分布", counts == {"ok": 9, "low": 2, "error": 1}, str(counts))

# 请求与额度
req = sum(a["req"] for a in accounts)
fail = sum(a["fail"] for a in accounts)
check("请求合计", req == 84216, f"{req:,}")
check("失败合计", fail == 2358, f"{fail:,}")
check("失败率", abs(fail / req * 100 - 2.80) < 0.01, f"{fail / req * 100:.2f}%")
avg = sum(a["quota"] for a in accounts) / len(accounts)
check("额度均值", abs(avg - 37.0) < 0.05, f"{avg:.1f}%")

# 图表逐点与总数
for key, expected_req, expected_fail in (("24", 84216, 2358), ("7", 572669, 14889), ("30", 2442264, 75710)):
    c = chart[key]
    check(f"{key} 点标签数", len(c["labels"]) == len(c["req"]) == len(c["fail"]), f"{len(c['labels'])} 点")
    check(f"{key} 请求合计", sum(c["req"]) == expected_req == c["totalReq"], f"{sum(c['req']):,}")
    check(f"{key} 失败合计", sum(c["fail"]) == expected_fail == c["totalFail"], f"{sum(c['fail']):,}")

# 对比度
def rgb(hex_value):
    h = hex_value.lstrip("#")
    return tuple(int(h[i:i + 2], 16) / 255 for i in (0, 2, 4))


def lum(hex_value):
    r, g, b = rgb(hex_value)
    f = lambda v: v / 12.92 if v <= 0.04045 else ((v + 0.055) / 1.055) ** 2.4
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b)


def ratio(fg, bg):
    a, b = sorted((lum(fg), lum(bg)), reverse=True)
    return (a + 0.05) / (b + 0.05)


tokens = dict(re.findall(r"--([a-z0-9-]+):\s*(#[0-9a-fA-F]{6})", text))
pairs = [
    ("正文 ink/paper", "ink", "paper", 4.5),
    ("次要 muted/paper", "muted", "paper", 4.5),
    ("次要 muted/surface", "muted", "surface", 4.5),
    ("强调 accent/paper", "accent", "paper", 4.5),
    ("白字/accent", "paper", "accent", 4.5),
    ("强调 accent/soft", "accent", "accent-soft", 4.5),
    ("成功 success/soft", "success", "success-soft", 4.5),
    ("注意 warning/soft", "warning", "warning-soft", 4.5),
    ("危险 danger/soft", "danger", "danger-soft", 4.5),
    ("控件边界 control-border/paper", "control-border", "paper", 3.0),
    ("图表请求量 chart-req/paper", "chart-req", "paper", 3.0),
    ("图表失败率 chart-fail/paper", "chart-fail", "paper", 3.0),
]
for label, fg, bg, minimum in pairs:
    if fg not in tokens or bg not in tokens:
        check(label, False, "token 缺失")
        continue
    r = ratio(tokens[fg], tokens[bg])
    check(label, r >= minimum, f"{r:.2f}:1 (≥{minimum})")

print()
if errors:
    print(f"结论：{len(errors)} 项未通过")
    sys.exit(1)
print("结论：全部通过")
