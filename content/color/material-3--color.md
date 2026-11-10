---
title: "Material 3 · Foundation · Color 色彩"
source: https://github.com/material-components/material-web/blob/main/docs/theming/color.md
section: color
tag: "规范"
fetched: 2026-11-08
status: full
id: color-material-3--color
publisher: "Google"
---

# Material 3 · Foundation · Color 色彩

> 来源：[https://github.com/material-components/material-web/blob/main/docs/theming/color.md](https://github.com/material-components/material-web/blob/main/docs/theming/color.md)

[Color](https://m3.material.io/styles/color/overview) creates meaning
and communicates hierarchy, state, and brand.

## Color scheme

A
[color scheme](https://m3.material.io/styles/color/the-color-system/color-roles#55d2b7d2-0202-4616-887e-f575a7946aac)
is the group of
[key color tones](https://m3.material.io/styles/color/the-color-system/key-colors-tones#5fdf196d-1e21-4d03-ae63-e802d61ad5ee)
assigned to specific roles that get mapped to components.

> Tip: use the
> [Material theme builder Figma plugin](https://www.figma.com/community/plugin/1034969338659738588/Material-Theme-Builder)
> to generate a color scheme.
>
> Alternatively, use the
> [`material-color-utilities` library](https://www.npmjs.com/package/@material/material-color-utilities)
> to generate color schemes at runtime.

### Tokens

A color scheme can be set using
[CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*).
Tokens follow the naming convention `--md-sys-color-`.

All tokens have a corresponding `--md-sys-color-on-` for content color
with accessible contrast.

Key color | Tokens
--------- | --------------------------------------------
Primary   | `--md-sys-color-primary`
     | `--md-sys-color-primary-container`
Secondary | `--md-sys-color-secondary`
     | `--md-sys-color-secondary-container`
Tertiary  | `--md-sys-color-tertiary`
     | `--md-sys-color-tertiary-container`
Error     | `--md-sys-color-error`
     | `--md-sys-color-error-container`
Neutral   | `--md-sys-color-background`
     | `--md-sys-color-surface`
     | `--md-sys-color-surface-bright` *
     | `--md-sys-color-surface-dim` *
     | `--md-sys-color-surface-container` *
     | `--md-sys-color-surface-container-lowest` *
     | `--md-sys-color-surface-container-low` *
     | `--md-sys-color-surface-container-high` *
     | `--md-sys-color-surface-container-highest` *
     | `--md-sys-color-outline`
     | `--md-sys-color-outline-variant`

*\* all surface tokens use `--md-sys-color-on-surface` or
`--md-sys-color-on-surface-variant` for their content.*

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-sys-color.scss)

```css
:root {
  /* Generated from Material Theme Builder Figma plugin
     or `material-color-utilities`. */
  --md-sys-color-primary: #006A6A;
  --md-sys-color-on-primary: #FFFFFF;
  --md-sys-color-primary-container: #6FF7F6;
  --md-sys-color-on-primary-container: #002020;
  /* ... */
}

/* Usage in custom components */
.primary {
  background: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
}
```
