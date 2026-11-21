#!/usr/bin/env python3
"""PayloadDeck 对比度自检。读 index.html 的 CSS token，不依赖外部服务。"""
import re
import sys
from pathlib import Path

HTML = Path(__file__).with_name("index.html")
text = HTML.read_text(encoding="utf-8")
tokens = dict(re.findall(r"--([a-z0-9-]+):\s*(#[0-9a-fA-F]{6})", text))
errors = []


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


def check(label, fg, bg, minimum):
    if fg not in tokens or bg not in tokens:
        print(f"FAIL {label} · token 缺失 ({fg} / {bg})")
        errors.append(label)
        return
    r = ratio(tokens[fg], tokens[bg])
    ok = r >= minimum
    print(f"{'PASS' if ok else 'FAIL'} {label} · {r:.2f}:1 (≥{minimum})")
    if not ok:
        errors.append(label)


# 正文与状态
check("正文 ink/paper", "ink", "paper", 4.5)
check("次要 muted/paper", "muted", "paper", 4.5)
check("次要 muted/surface", "muted", "surface", 4.5)
check("链接 accent/paper", "accent", "paper", 4.5)
check("链接 accent/surface", "accent", "surface", 4.5)
check("白字/accent", "paper", "accent", 4.5)
check("危险 danger/paper", "danger", "paper", 4.5)
check("危险 danger/danger-soft", "danger", "danger-soft", 4.5)
check("成功 success/paper", "success", "paper", 4.5)
check("成功 success/success-soft", "success", "success-soft", 4.5)
check("注意 attention/paper", "attention", "paper", 4.5)

# 代码 token 在代码底色上
check("代码关键字 accent/surface", "accent", "surface", 4.5)
check("代码字符串 success/surface", "success", "surface", 4.5)
check("代码数字 attention/surface", "attention", "surface", 4.5)

# 非文本与装饰
check("控件边界 control-border/paper", "control-border", "paper", 3.0)
check("焦点环 accent/paper", "accent", "paper", 3.0)
check("白字/emphasis", "paper", "emphasis", 4.5)

# 禁用与分隔线不承载正文，只记录
for label, fg, bg in (("禁用 disabled/paper", "disabled", "paper"), ("分隔线 rule/paper", "rule", "paper")):
    if fg in tokens and bg in tokens:
        print(f"INFO {label} · {ratio(tokens[fg], tokens[bg]):.2f}:1")

print()
if errors:
    print(f"结论：{len(errors)} 项未通过")
    sys.exit(1)
print("结论：全部通过")
