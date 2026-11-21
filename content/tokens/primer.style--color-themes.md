---
title: "GitHub Primer · Token · 九套主题色值"
source: https://unpkg.com/@primer/primitives/dist/css/functional/themes/dark.css
section: tokens
tag: "取值快照"
fetched: 2026-11-14
status: partial
id: token-primer-themes
publisher: "GitHub Primer"
---

# GitHub Primer · Token · 九套主题色值

> 从官方 `@primer/primitives` 的九份主题 CSS 摘出的语义色，不是官方规范全文；用于核对具体数值，不构成选型方案。取值抓于 2026-11-14，包内声明「Never use raw values, use semantic tokens」。

九套主题：light、light-tritanopia、light-high-contrast、light-colorblind、dark、dark-colorblind、dark-dimmed、dark-high-contrast、dark-tritanopia。下表 `var(--x)` 链已解析成最终色值，带透明度的值保留 hex 加两位 alpha（如 `#d1d9e0b3`）。

| Token | 浅色 | 浅色三色视弱 | 浅色高对比 | 浅色盲 | 深色 | 深色色盲 | 深色柔和 | 深色高对比 | 深色三色视弱 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `bgColor-default` | #ffffff | #ffffff | #ffffff | #ffffff | #0d1117 | #0d1117 | #212830 | #010409 | #0d1117 |
| `bgColor-muted` | #f6f8fa | #f6f8fa | #e6eaef | #f6f8fa | #151b23 | #151b23 | #262c36 | #151b23 | #151b23 |
| `bgColor-inset` | #f6f8fa | #f6f8fa | #eff2f5 | #f6f8fa | #010409 | #010409 | #151b23 | #010409 | #010409 |
| `bgColor-emphasis` | #25292e | #25292e | #25292e | #25292e | #3d444d | #3d444d | #3d444d | #3d444d | #3d444d |
| `fgColor-default` | #1f2328 | #1f2328 | #010409 | #1f2328 | #f0f6fc | #f0f6fc | #d1d7e0 | #ffffff | #f0f6fc |
| `fgColor-muted` | #59636e | #59636e | #454c54 | #59636e | #9198a1 | #9198a1 | #9198a1 | #b7bdc8 | #9198a1 |
| `fgColor-onEmphasis` | #ffffff | #ffffff | #ffffff | #ffffff | #ffffff | #ffffff | #f0f6fc | #ffffff | #ffffff |
| `fgColor-disabled` | #818b98 | #818b98 | #59636e | #818b98 | #656c76 | #656c76 | #656c76 | #656c76 | #656c76 |
| `fgColor-accent` | #0969da | #0969da | #023b95 | #0969da | #4493f8 | #4493f8 | #478be6 | #74b9ff | #4493f8 |
| `fgColor-danger` | #d1242f | #d1242f | #960d1e | #bc4c00 | #f85149 | #f0883e | #e5534b | #ff9492 | #f85149 |
| `fgColor-success` | #1a7f37 | #0969da | #04591f | #0969da | #3fb950 | #58a6ff | #57ab5a | #2bd853 | #58a6ff |
| `fgColor-attention` | #9a6700 | #9a6700 | #603700 | #9a6700 | #d29922 | #d29922 | #c69026 | #f0b72f | #d29922 |
| `borderColor-default` | #d1d9e0 | #d1d9e0 | #454c54 | #d1d9e0 | #3d444d | #3d444d | #3d444d | #b7bdc8 | #3d444d |
| `borderColor-muted` | #d1d9e0b3 | #d1d9e0b3 | #454c54 | #d1d9e0b3 | #3d444db3 | #3d444db3 | #3d444db3 | #b7bdc8 | #3d444db3 |
| `borderColor-accent-muted` | #54aeff66 | #54aeff66 | #368cf9 | #54aeff66 | #388bfd66 | #388bfd66 | #4184e466 | #5cacff | #388bfd66 |
| `borderColor-danger-muted` | #ff818266 | #ff818266 | #ee5a5d | #fff1e5 | #f8514966 | #db6d2866 | #e5534b66 | #ff8080 | #f8514966 |
| `borderColor-success-muted` | #4ac26b66 | #54aeff66 | #26a148 | #ddf4ff | #2ea04366 | #388bfd66 | #46954a66 | #0ac740 | #388bfd66 |
| `bgColor-accent-emphasis` | #0969da | #0969da | #0349b4 | #0969da | #1f6feb | #1f6feb | #316dca | #194fb1 | #1f6feb |
| `bgColor-danger-emphasis` | #cf222e | #cf222e | #a0111f | #bc4c00 | #da3633 | #bd561d | #c93c37 | #ad0116 | #da3633 |
| `bgColor-success-emphasis` | #1f883d | #0969da | #055d20 | #0969da | #238636 | #1f6feb | #347d39 | #006222 | #1f6feb |
| `bgColor-attention-emphasis` | #9a6700 | #9a6700 | #744500 | #9a6700 | #9e6a03 | #9e6a03 | #966600 | #7b4900 | #9e6a03 |
| `focus-outlineColor` | #0969da | #0969da | #0349b4 | #0969da | #1f6feb | #1f6feb | #316dca | #409eff | #1f6feb |
| `control-bgColor-rest` | #f6f8fa | #f6f8fa | #e0e6eb | #f6f8fa | #212830 | #212830 | #2a313c | #262c36 | #212830 |
| `control-borderColor-rest` | #d1d9e0 | #d1d9e0 | #454c54 | #d1d9e0 | #3d444d | #3d444d | #3d444d | #b7bdc8 | #3d444d |
| `control-fgColor-rest` | #25292e | #25292e | #25292e | #25292e | #f0f6fc | #f0f6fc | #d1d7e0 | #ffffff | #f0f6fc |
| `button-primary-bgColor-rest` | #1f883d | #0969da | #055d20 | #0969da | #238636 | #1f6feb | #347d39 | #006222 | #1f6feb |
| `button-primary-bgColor-hover` | #1c8139 | #0864d1 | #04571e | #0864d1 | #29903b | #2a7aef | #3b8640 | #08792b | #2a7aef |
| `button-primary-fgColor-rest` | #ffffff | #ffffff | #ffffff | #ffffff | #ffffff | #ffffff | #ffffff | #ffffff | #ffffff |
| `button-default-bgColor-rest` | #f6f8fa | #f6f8fa | #e0e6eb | #f6f8fa | #212830 | #212830 | #2a313c | #262c36 | #212830 |
