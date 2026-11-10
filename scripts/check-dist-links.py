#!/usr/bin/env python3
"""站内链接体检：扫 dist 里所有 HTML 的 href/src，找出指向不存在路径的内部链接。

用法：python3 check-dist-links.py <dist 目录> [--by-area]

判读：
- 站点骨架（导航、左栏、案例页、需求页）= 0 命中才算干净。
- 命中全在 a/ 文章页时，是采集层遗留：源文的相对链接与样例 HTML（example.css、
  /card-design-woes 这类）被按本站路径解析。单列报告，不夹在当次改动里顺手改。
"""
import collections
import os
import re
import sys
import urllib.parse

PAT = re.compile(r'(?:href|src)="([^"]+)"')
# 代码块里的 href/src 是示例文本，页面不会产生真链接，必须剥掉再扫
CODE_BLOCK = re.compile(r'<pre\b[\s\S]*?</pre>|<code\b[\s\S]*?</code>', re.I)


def main() -> int:
    if len(sys.argv) < 2:
        print("usage: check-dist-links.py <dist> [--by-area]")
        return 2
    root = os.path.abspath(sys.argv[1])
    by_area = '--by-area' in sys.argv
    broken = collections.Counter()
    where = {}
    areas = collections.Counter()

    for dp, _dn, fn in os.walk(root):
        for f in fn:
            if not f.endswith('.html'):
                continue
            p = os.path.join(dp, f)
            rel = os.path.relpath(p, root)
            try:
                html = open(p, encoding='utf-8', errors='ignore').read()
            except OSError:
                continue
            html = CODE_BLOCK.sub('', html)
            for u in PAT.findall(html):
                if u.startswith(('http', 'mailto', 'tel', '#', 'data:', 'javascript:')) or '://' in u:
                    continue
                clean = urllib.parse.unquote(u.split('#')[0].split('?')[0])
                if not clean:
                    continue
                if not clean.startswith('/'):
                    clean = '/' + os.path.relpath(
                        os.path.normpath(os.path.join(dp, clean)), root
                    )
                target = os.path.join(root, clean.lstrip('/'))
                if os.path.isdir(target):
                    target = os.path.join(target, 'index.html')
                if not os.path.exists(target):
                    broken[clean] += 1
                    where.setdefault(clean, rel)
                    area = 'a/ 文章页' if rel.startswith('a/') else rel.split('/')[0]
                    areas[area] += 1

    for u, n in broken.most_common(30):
        print(f"{n:3d}  {u}   <- {where[u]}")
    print(f"坏链目标 {len(broken)} 个，引用 {sum(broken.values())} 处")
    if by_area:
        print('按页面区域:', dict(areas))
    return 1 if broken else 0


if __name__ == '__main__':
    raise SystemExit(main())
