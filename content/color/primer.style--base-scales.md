---
title: "Primer · Color · 基础色阶 Base scales"
source: https://primer.style/foundations/color/base-scales
section: color
tag: "规范"
fetched: 2026-11-14
status: full
id: color-primer-base-scales
publisher: "GitHub Primer"
---

# Primer · Color · 基础色阶 Base scales

> 来源：https://primer.style/foundations/color/base-scales

## Neutral color scales

Primer's neutral scales offer shades of gray between 0 and 13, including white and black. There are two versions of the neutral scale: light, and dark.

The light and dark scale directions are inverted, with the light scale starting with white and the dark scale starting with black. By inverting the scales, light and dark themes are able to share many of the same functional color tokens without custom overrides.

### Background

The first six steps of the neutral scales are typically used for background colors. The two most commonly used background colors are `bgColor-default` and `bgColor-muted`. All contrast values for text and borders are calculated against `bgColor-muted` to ensure proper contrast ratios for both `muted` and `default`.

For control components with state, the scale accommodates rest, hover, and active.

### Borders and dividers

Steps 7 and 8 are typically used for borders and dividers in the default light/dark themes. Step 8 is considered the minimum contrast value for interactive control borders against `bgColor-muted`.

### Text and icons

Steps 9 and 10 are typically used for text and icons. Step 9 is considered the minimum contrast value for text against steps 0 through 4, while 10 meets the minimum against 5 and 6.

### Adjusting contrast

Contrast levels can be adjusted by moving up or down the scale. For example, the light high contrast theme utilizes steps 2 through 7 for backgrounds, 10 for borders, and 11 to 13 for text.

For high contrast themes, the goal is to hit a minimum of 7:1 for most text and interactive elements. If a softer background color must be used, make use of borders around elements to increase contrast.

## All color scales

Base color values should only be used to construct functional and component/pattern design tokens, never used directly in code

Use the theme menu to see how the base scales change per theme.
