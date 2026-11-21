---
title: "Microsoft Fluent 2 · Color · 暗色模式"
source: https://fluent2.microsoft.design/color
section: color
tag: "规范"
fetched: 2026-11-14
status: full
id: color-fluent-dark
publisher: "Microsoft Fluent 2"
---

# Microsoft Fluent 2 · Color · 暗色模式

> 来源：https://fluent2.microsoft.design/color 与官方 token 仓库 `@fluentui/tokens`。页面对暗色只给规则，具体色值以别名映射提供，取值见 `content/tokens/fluent-2--dark-tokens.md`。

## 官方原文

- 共享色在暗色模式下整体调整饱和度与亮度，降低视觉疲劳并满足无障碍需要。官方原话：

> In dark mode, the colors of the shared palette shift in saturation and brightness to reduce eye strain and accommodate visual accessibility needs
- 交互态随操作逐级变深，从最浅的静止态到 hover，再到 selected 最深。官方原话：

> a component will get darker as someone interacts with it, from the lightest rest state, to a darker hover, all the way to the darkest selected state
- 中性色用于表面、文字与布局，要突出的区域用更浅的中性色。官方原话：

> Use lighter neutrals on surfaces to highlight areas of primary focus

## 暗色取值怎么读

Fluent 不给「暗色色板」单独一套十六进制表，而是每个语义别名在 light 与 dark 两套映射里各指一个色阶。改主题等于换映射，不改组件。

| 语义别名 | 浅色 | 深色 |
| --- | --- | --- |
| `colorNeutralBackground1` | #ffffff | #292929 |
| `colorNeutralForeground1` | #242424 | #ffffff |
| `colorBrandBackground` | #0078d4 | #106ebe |
| `colorNeutralForegroundOnBrand` | #ffffff | #ffffff |

完整对照见 token 快照；取色时连 `content/tokens/fluent-2--dark-tokens.md:行号` 一起记。
