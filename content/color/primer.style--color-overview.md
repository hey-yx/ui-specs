---
title: "Primer · Color · 色彩系统总览"
source: https://primer.style/foundations/color
section: color
tag: "规范"
fetched: 2026-11-14
status: full
id: color-primer-overview
publisher: "GitHub Primer"
---

# Primer · Color · 色彩系统总览

> 来源：https://primer.style/foundations/color

## Overview

GitHub's UI offers two color modes, `light` and `dark`. Primer supports both color modes across nine themes. Every pattern in Primer is built to work across all color modes out of the box.

### Color modes in Figma

When designing product interfaces in Figma, we recommend using **light mode** or **dark mode** as the Primer Web Figma library provides components and tokens in those two modes.
You can learn more about using design tokens in Figma in our Figma guidelines.

### Color design tokens

Primer delivers colors in the form of design tokens. Design tokens are a layer of abstraction that allows for better maintainability, consistency and theming. Within Primer, design tokens are represented as CSS variables for code and Figma variables for design. For a full reference table of all available design tokens, see the color CSS variables page.

As an example of how color tokens work, when `bgColor-default` is referenced for a background color, the value of that token will automatically change depending on the color mode.

### Design token categories

Primer design tokens are categorized into three groups:

- Base
- Functional
- Component/pattern

To read more about the naming convention, see the design token naming guidelines page.

**Base** color tokens are the lowest level tokens and map directly to a raw value. They are only to be used as a reference for functional and component/pattern tokens. Base color tokens don't respect color modes and should never be used directly in code or design.

Example: `color-scale-pink-5`

**Functional** color tokens represent global UI patterns such as text, borders, shadows, and backgrounds. These are the most commonly used design tokens throughout all of Primer and GitHub UI. Functional color tokens reference base color tokens under the hood, and respect color modes.

Example: `borderColor-sponsors-emphasis`

**Component/pattern** tokens are used for values that are more specific or unique than functional tokens. These tokens are limited and functional tokens are preferred. Component/pattern color tokens may reference both base and functional tokens under the hood, and respect color modes.

Example: `focus-outlineColor`

## Neutral colors

Shades of gray used for text, borders, backgrounds, and shadows.

### Foreground

Foreground tokens use the `fgColor` property and are used for text and icons.

### Background

Background tokens use the `bgColor` property and are used for backgrounds and fills.

### Border

Border tokens use the `borderColor` property and are used for borders and dividers.

### Shadow

Shadow tokens use the `shadow` property and are used for shadows and elevation.

## Semantic colors

Semantic colors are typically used to communicate status, action, or emphasis. Each semantic color is tied to a [role](#color-roles) with a specific meaning. Color tokens are available for foreground, background, and border. Background and border colors have both a `muted` and `emphasis` option.

### Muted

Muted background and border colors are often combined to draw attention to a specific piece of content with a subtle emphasis.

### Emphasis

Emphasis background colors provide a stronger emphasis for UI elements and are always combined with `fgColor-onEmphasis` tokens for text and icons.

### Semantic foreground

Foreground semantic colors provide contrast against `muted` and default background colors and should be used for text and icons.

## Color roles

| Color roles                                                                       | Usage                                                               |
| :-------------------------------------------------------------------------------- | :------------------------------------------------------------------ |
|  `accent` | Links, selected, active, and focus states, and neutral information |
|  `success`     | Primary buttons, positive messaging and successful states                                |
|  `attention` | Warning states, active processes such as queued PRs and tests in progress   |
|  `danger`       | Danger buttons and error states |
|  `open`           | Open tasks, PRs or workflows           |
|  `closed`       | Closed tasks, PRs or workflows         |
|  `done`           | Completed tasks, PRs or workflows      |
|  `sponsors`           | Text and icons related to GitHub Sponsors      |

## Developers

Colors are available in the form of CSS variables and CSS utility classes that can be used across all frameworks including React and Rails. Check out the references below for more information.

- Color CSS variables
- Color CSS utility classes
