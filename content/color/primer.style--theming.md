---
title: "Primer · Color · 九套主题与切换 Theming"
source: https://primer.style/foundations/primitives/getting-started
section: color
tag: "规范"
fetched: 2026-11-14
status: full
id: color-primer-theming
publisher: "GitHub Primer"
---

# Primer · Color · 九套主题与切换 Theming

> 来源：https://primer.style/foundations/primitives/getting-started

## Installation

To get started using Primer Primitives, install the package with your package manager of choice:

npm:

```bash
npm install @primer/primitives
```

yarn:

```bash
yarn add @primer/primitives
```

## Usage

Primer Primitive design tokens are available to consume as CSS variables. Import the desired token files into the root of your project.

For sizing, spacing and typography tokens, import the following files:

```css
@import '@primer/primitives/dist/css/base/size/size.css';
@import '@primer/primitives/dist/css/base/typography/typography.css';
@import '@primer/primitives/dist/css/functional/size/border.css';
@import '@primer/primitives/dist/css/functional/size/breakpoints.css';
@import '@primer/primitives/dist/css/functional/size/size-coarse.css';
@import '@primer/primitives/dist/css/functional/size/size-fine.css';
@import '@primer/primitives/dist/css/functional/size/size.css';
@import '@primer/primitives/dist/css/functional/size/viewport.css';
@import '@primer/primitives/dist/css/functional/typography/typography.css';
```

Color tokens are grouped by individual theme files:

```css
@import '@primer/primitives/dist/css/functional/themes/light.css';
@import '@primer/primitives/dist/css/functional/themes/light-tritanopia.css';
@import '@primer/primitives/dist/css/functional/themes/light-high-contrast.css';
@import '@primer/primitives/dist/css/functional/themes/light-colorblind.css';
@import '@primer/primitives/dist/css/functional/themes/dark.css';
@import '@primer/primitives/dist/css/functional/themes/dark-colorblind.css';
@import '@primer/primitives/dist/css/functional/themes/dark-dimmed.css';
@import '@primer/primitives/dist/css/functional/themes/dark-high-contrast.css';
@import '@primer/primitives/dist/css/functional/themes/dark-tritanopia.css';
```

Utilizing CSS variables in SCSS or CSS files:

```css
.Text {
  color: var(--fgColor-default);
}
```

Utilizing CSS variables in React with Primer React (styled components):

```javascript

```

**Note:** legacy variables in Primer React from the `theme` object all resolve to CSS variables under the hood. While the new naming convention is not available as a JS object, you can continue using the legacy variables in your React components or switch to using CSS variables directly (recommended).

## Theming

Primer color design tokens are made available within data-attribute selectors on the `body` tag or other high level dom element. There are three distinct data-attributes used to handle theming: `data-color-mode`, `data-light-theme`, and `data-dark-theme`.

### Color mode

The `data-color-mode` attribute is used to set the color mode of the theme. The value of the attribute should be either `auto`, `light`, or `dark`. When set to `auto`, the theme will automatically switch between light and dark based on the user's system preferences.

### Color theme

The `data-light-theme` and `data-dark-theme` attributes are used to set the theme. The value of the attribute should be the name of the theme file, replacing dashes `-` with underscore `_`. For example, to use the light theme, set the `data-light-theme` attribute to `light`.

```html

```

To see theming in action, toggle between the theme in the following example:

### Available themes

- light: `light`
- light-tritanopia: `light_tritanopia`
- light-high-contrast: `light_high_contrast`
- light-colorblind: `light_colorblind`
- dark: `dark`
- dark-colorblind: `dark_colorblind`
- dark-dimmed: `dark_dimmed`
- dark-high-contrast: `dark_high_contrast`
- dark-tritanopia: `dark_tritanopia`

## CSS variables

To see all available tokens, reference the following guides:

- [Colors](/docs/primitives/colors)
- [Spacing](/docs/primitives/spacing)
- [Typography](/docs/primitives/typography)
