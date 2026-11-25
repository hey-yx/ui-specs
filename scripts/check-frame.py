#!/usr/bin/env python3
"""外壳避重核对：跨站比对页头、页脚、页底色，补 check-ledger 不查的那一层。

规则取自项目外壳避重规范：
  1. 同一批 nav 件号不重复；footer 件号每种最多 2 次。
  2. 同一批里「灰底」站点不超过半数。
  3. 页脚 DOM 骨架（footer 标签与子孙 class 路径）全库相同的站点不超过 2 个。

「同一批」= 同一个 `batch` 的 `<meta name="frame">` 站点（未写 `batch=` 的归入 `"default"` 批）。声明格式：
  <meta name="frame" content="batch=2026-11-21-b; nav=N13; footer=Ft2; base=#ffffff">
  （旧写法 `nav=N13; footer=Ft7; base=#ffffff` 同样兼容，默认归入 `"default"` 批）
同时要求该站 DECISIONS.md 里有同值的 `frame:` 行，防止只在页面里悄悄写。

用法：
  python3 scripts/check-frame.py            # 校验全库
  python3 scripts/check-frame.py --list     # 只列出每站的外壳指纹

退出码：0 通过；1 有违规。
"""

import json
import re
import sys
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
EXAMPLES = ROOT / "examples"
RE_META = re.compile(r'<meta\s+name="frame"\s+content="([^"]*)"', re.I)
RE_FRAME_LINE = re.compile(r"^\s*-?\s*frame\s*[:：]\s*(.+)$", re.I | re.M)
RE_NAV = re.compile(r"^N\d+[a-z]?$|^自定$")
RE_FT = re.compile(r"^Ft[1-8]$|^自定$")
RE_HEX = re.compile(r"^#[0-9a-fA-F]{6}$")


def parse_frame(text):
    out = {}
    for part in re.split(r"[;；]", text):
        if "=" in part:
            k, v = part.split("=", 1)
            out[k.strip()] = v.strip()
    return out


def is_gray(hex_color):
    h = hex_color.lstrip("#").lower()
    r, g, b = (int(h[i:i + 2], 16) for i in (0, 2, 4))
    return r == g == b and h != "ffffff"


def footer_skeleton(html):
    """footer 标签内所有开标签的 (tag.class) 序列，去重保序，作为骨架指纹。"""
    m = re.search(r"<footer\b.*?</footer>", html, re.S | re.I)
    if not m:
        return None
    seq = []
    for t in re.finditer(r'<([a-z0-9]+)\b([^>]*)>', m.group(0), re.I):
        tag = t.group(1).lower()
        cls = re.search(r'class="([^"]*)"', t.group(2))
        label = tag + ("." + ".".join(cls.group(1).split()) if cls else "")
        if label not in seq:
            seq.append(label)
    return " > ".join(seq[:12])


def main():
    list_only = "--list" in sys.argv
    sites = sorted(p.parent.name for p in EXAMPLES.glob("*/index.html"))
    frames, skeletons, errors = {}, {}, []

    for s in sites:
        html = (EXAMPLES / s / "index.html").read_text(encoding="utf8")
        skeletons[s] = footer_skeleton(html)
        m = RE_META.search(html)
        if not m:
            continue
        fr = parse_frame(m.group(1))
        frames[s] = fr
        for key, rx in (("nav", RE_NAV), ("footer", RE_FT)):
            if not rx.match(fr.get(key, "")):
                errors.append(f"{s}: frame.{key} 取值无效：{fr.get(key)!r}")
        base = fr.get("base", "")
        if not RE_HEX.match(base):
            errors.append(f"{s}: frame.base 要写 6 位十六进制色：{base!r}")
        ledger = EXAMPLES / s / "DECISIONS.md"
        decl = RE_FRAME_LINE.search(ledger.read_text(encoding="utf8")) if ledger.exists() else None
        if not decl:
            errors.append(f"{s}: DECISIONS.md 缺 `frame:` 行")
        elif parse_frame(decl.group(1)) != fr:
            errors.append(f"{s}: DECISIONS.md 的 frame 与页面 meta 不一致")

    if list_only:
        for s in sites:
            print(f"{s:18} frame={frames.get(s, '-')}  footer={skeletons[s]}")
        return 0

    # 规则 1、2：按 batch 分批核对（避免跨批次被仅有 14 个 nav 编号卡死）
    batches = defaultdict(dict)
    for s, fr in frames.items():
        batches[fr.get("batch", "default")][s] = fr

    all_navs = set()
    total_ft = Counter()
    for bname, bframes in batches.items():
        nav = defaultdict(list)
        ft = defaultdict(list)
        for s, fr in bframes.items():
            if fr.get("nav") and fr["nav"] != "自定":
                nav[fr["nav"]].append(s)
                all_navs.add(fr["nav"])
            if fr.get("footer") and fr["footer"] != "自定":
                ft[fr["footer"]].append(s)
                total_ft[fr["footer"]] += 1
        for k, v in nav.items():
            if len(v) > 1:
                errors.append(f"[{bname}] nav {k} 重复使用：{', '.join(v)}")
        for k, v in ft.items():
            if len(v) > 2:
                errors.append(f"[{bname}] footer {k} 用了 {len(v)} 次（上限 2）：{', '.join(v)}")
        grays = [s for s, fr in bframes.items() if RE_HEX.match(fr.get("base", "")) and is_gray(fr["base"])]
        if len(grays) * 2 > len(bframes):
            errors.append(f"[{bname}] 灰底站点 {len(grays)}/{len(bframes)} 超过半数：{', '.join(grays)}")

    # 规则 3：全库页脚骨架指纹
    by_sk = defaultdict(list)
    for s, sk in skeletons.items():
        if sk:
            by_sk[sk].append(s)
    for sk, v in by_sk.items():
        if len(v) > 2:
            errors.append(f"页脚骨架相同的站点有 {len(v)} 个（上限 2）：{', '.join(v)}  [{sk[:60]}]")

    for e in errors:
        print("FAIL", e)
    print(f"frame: {len(frames)}/{len(sites)} 站声明外壳（{len(batches)} 批），"
          f"nav {len(all_navs)} 种，footer {dict(total_ft)}")
    if errors:
        return 1
    print("frame: ok")
    return 0


if __name__ == "__main__":
    sys.exit(main())
