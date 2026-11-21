---
title: "Spectrum · Layout spacing 布局间距"
source: https://spectrum.adobe.com/foundations/layout-and-structure/spacing/layout-spacing
section: layout
tag: "规范"
fetched: 2026-11-09
status: full
id: layout-12
publisher: "Spectrum"
---

# Spectrum · Layout spacing 布局间距

> 来源：[https://spectrum.adobe.com/foundations/layout-and-structure/spacing/layout-spacing](https://spectrum.adobe.com/foundations/layout-and-structure/spacing/layout-spacing)

---

## Layout spacing

![Faint, ghosted wireframe of a dashboard-style UI layout with a top navigation bar, a tall left sidebar panel, three smaller square panels, and a wide content area below, overlaid on a soft purple-to-peach gradient background.](https://spectrum.adobe.com/page/iconography/media_145959d12e2036f178463a7e45e822fa344fb1a76.png?width=750&format=png&optimize=medium)

## How it works

Layout spacing governs object relationships, such as the spacing between components, patterns, and regions of a UI. It’s implemented through global tokens, which follow a geometric progression with values that round to familiar numbers: 2, 4, 8, 16. If you're used to an 8 px grid, these will feel recognizable. The scale provides consistent perceptual difference between adjacent values across its full range.

![Scale of gray squares increasing in size from left to right, labeled with values 1, 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, and 96, with a dotted diagonal line showing the growth curve.](https://spectrum.adobe.com/page/iconography/media_115ea12e4cac857c4b8d7fccac0293a81ae114447.png?width=750&format=png&optimize=medium)

## Applying layout spacing

Global tokens govern object relationships in a layout. They create and distinguish the relationships between the components that make up a product UI. Smaller values create tighter relationships. Larger values create more visual independence. The choice should reflect the actual relationship between the objects being spaced.

![Screenshot of the Adobe GenStudio interface showing a top navigation bar with a search field, a green table icon with a loading placeholder bar, and a floating toolbar with icons for image approval, comment, Cr, and a highlighted gold icon; two callouts label the horizontal bands as spacing-100 and spacing-250.](https://spectrum.adobe.com/page/iconography/media_1a16efb69dea68171c4c4dcbcff449b7c21eaa2ad.png?width=750&format=png&optimize=medium)

## Why not a fixed grid?

A common approach to spacing is to pick a base unit and build all spacing values from its multiples, such as 8, 16, 24, 32. These values are familiar and easy to remember, which is part of their appeal. This approach is called a linear progression.

Linear progressions like this work well in many situations, but have two limitations. First, spacing needs to grow with the elements around it. A 4 px gap between an icon and label looks right in a small component, but as the component scales up, the nearest grid values (4 px or 8 px) no longer fit the relationship correctly. Second, linear scales lose differentiation at larger values. The difference between 4 px and 8 px is obvious. The difference between 72 px and 80 px is almost imperceptible.

![Scale of gray squares increasing in size from left to right beneath a pink upward curve, with a bracket over the first two squares labeled 100% increase and a bracket over the last two squares labeled 11% increase, illustrating a decelerating growth rate.](https://spectrum.adobe.com/page/iconography/media_10c237cd90839604eca53c6ac170d7cf2f3812435.png?width=750&format=png&optimize=medium)

## Tokens

Use global tokens for layout spacing.
