---
title: "Material 3 · Foundation · Shape 形状"
source: https://github.com/material-components/material-web/blob/main/docs/theming/shape.md
section: layout
tag: "规范"
fetched: 2026-11-08
status: full
id: layout-material-3--shape
publisher: "Google"
---

# Material 3 · Foundation · Shape 形状

> 来源：[https://github.com/material-components/material-web/blob/main/docs/theming/shape.md](https://github.com/material-components/material-web/blob/main/docs/theming/shape.md)

[Shape](https://m3.material.io/styles/shape) can direct attention,
communicate state, and express brand.

## Shape

Corners use a
[range of shape scales](https://m3.material.io/styles/shape/shape-scale-tokens#b85fe884-325c-45e6-b7fb-e753c6e03c82)
for their roundness, from straight to fully round.

> Note: "cut" corners are not supported.

### Tokens

Shape corners can be set using
[CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*).
Tokens follow the naming convention `--md-sys-shape-`.

Shape  | Token
------ | -----------------------------------
Corner | `--md-sys-shape-corner-none`
  | `--md-sys-shape-corner-extra-small`
  | `--md-sys-shape-corner-small`
  | `--md-sys-shape-corner-medium`
  | `--md-sys-shape-corner-large`
  | `--md-sys-shape-corner-extra-large`
  | `--md-sys-shape-corner-full`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-sys-shape.scss)

```css
:root {
  --md-sys-shape-corner-small: 4px;
  --md-sys-shape-corner-medium: 6px;
  --md-sys-shape-corner-large: 8px;
}
```
