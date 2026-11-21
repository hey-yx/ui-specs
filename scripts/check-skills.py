#!/usr/bin/env python3
"""项目内 skill 核对：版本、来源、必需文件、无嵌套 .git、无主题照片。

用法：
  python3 scripts/check-skills.py
  python3 scripts/check-skills.py --json

退出码：0 通过；1 有失败；2 数据加载失败。
"""

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SKILLS = ROOT / "skills"
MANIFEST = SKILLS / "manifest.json"


def read_version(skill_md):
    text = skill_md.read_text(encoding="utf-8")
    # 顶层 version 或 metadata 下的缩进 version，允许引号
    m = re.search(r"^version:\s*\"?([0-9][0-9.]*)\"?\s*$", text, re.M)
    if not m:
        m = re.search(r"^\s+version:\s*\"?([0-9][0-9.]*)\"?\s*$", text, re.M)
    return m.group(1) if m else None


def check_skill(skill):
    name = skill.get("name", "(missing)")
    base = SKILLS / skill.get("path", "")
    ok = True
    if not base.is_dir():
        print(f"FAIL {name}: 缺目录 {base.relative_to(ROOT)}")
        return False
    skill_md = base / "SKILL.md"
    if not skill_md.is_file():
        print(f"FAIL {name}: 缺 SKILL.md")
        return False
    want = str(skill.get("version", ""))
    # 项目内版本统一 0.x，不跟随上游；上游版本只记录不校验（见 SOURCES.md）
    if not re.fullmatch(r"0\.[0-9]+", want):
        print(f"FAIL {name}: 项目内版本应写成 0.x，manifest 里是 {want or '未填'}")
        ok = False
    if re.fullmatch(r"[0-9][0-9.]*", str(skill.get("upstream_version", ""))):
        pass  # 上游语义版本，仅记录
    for rel in skill.get("requires", []):
        if not (base / rel).is_file():
            print(f"FAIL {name}: 缺 {rel}")
            ok = False
    for excluded in skill.get("excluded", []):
        if (base / excluded).is_dir() or (base / excluded).is_file():
            print(f"FAIL {name}: excluded 项 {excluded} 仍在库内")
            ok = False
    if list(base.rglob(".git")):
        print(f"FAIL {name}: 含嵌套 .git，应该是 vendored 副本")
        ok = False
    if name == "hallmark" and list(base.rglob("*.jpg")):
        print("FAIL hallmark: 含主题照片，可能引入 CC BY-SA 义务")
        ok = False
    layer = skill.get("layer", "?")
    print(f"{'PASS' if ok else 'FAIL'} {name} {want} (上游 {skill.get('upstream_version', '?')}, {layer})")
    return ok


def main(argv):
    if not MANIFEST.is_file():
        print(f"缺 {MANIFEST}", file=sys.stderr)
        return 2
    data = json.loads(MANIFEST.read_text(encoding="utf-8"))
    skills = data.get("skills", [])
    if not skills:
        print("manifest 没有 skills", file=sys.stderr)
        return 2
    results = [check_skill(s) for s in skills]
    print(f"\n{'PASS' if all(results) else 'FAIL'} {sum(results)}/{len(results)}")
    return 0 if all(results) else 1


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
