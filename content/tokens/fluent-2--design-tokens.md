---
title: "Fluent 2 · Foundation · Design tokens 设计 Token"
source: https://fluent2.microsoft.design/design-tokens
section: tokens
tag: "规范"
fetched: 2026-11-08
status: full
id: fluent-2--design-tokens
publisher: "Microsoft"
---

# Fluent 2 · Foundation · Design tokens 设计 Token

> 来源：[https://fluent2.microsoft.design/design-tokens](https://fluent2.microsoft.design/design-tokens)

Design tokens are stored values used to assign Fluent styles like color, typography, spacing, or elevation, without hardcoding pixels and hex codes. Our token system allows us to speak a common language and ensure consistent designs across platforms and disciplines.

Fluent Web UI kit Token guidance for web

Fluent iOS UI kit Token guidance for mobile

## Global tokens

Fluent uses two layers of tokens. First, global tokens are context-agnostic and store raw values, like hex codes for color. Global tokens also store information for typography, border radius, stroke width, and animation.

## Alias tokens

Alias tokens are Fluent’s second token layer and add semantic meaning to the stored values.

For more complex elements, like shadows and type, alias tokens condense many values into one easily digestible format.

### Alias naming

We name alias tokens so that their function is immediately recognizable. At a glance, you’ll get an idea of where and how to apply consistent styles without worrying about the exact values.

## Theming

Fluent’s robust design tokens were built for flexibility and accessibility. That means that right out of the box, our tokens support OS theming for light, dark, high-contrast, and branded elements, as well as ensure sufficient color contrast across the system.

