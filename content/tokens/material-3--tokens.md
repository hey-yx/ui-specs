---
title: "Material 3 · Token · Core Tokens 核心取值"
source: https://github.com/material-components/material-web/blob/main/tokens/versions/latest/sass/_md-sys-typescale.scss
section: tokens
tag: "取值快照"
fetched: 2026-11-08
status: partial
id: token-material-3
publisher: "Google"
known: partial
---

# Material 3 · Token · Core Tokens 核心取值

> 从官方 Material Web token 源摘出的取值，不是官方规范全文；用于核对具体数值，不构成选型方案。Material Web 版本 34.0.21，抓取 2026-11-08。

## 字阶

| Style | Size | Line height | Weight |
| --- | --- | --- | --- |
| display-large | `3.5625rem` | `4rem` | 400 |
| display-medium | `2.8125rem` | `3.25rem` | 400 |
| display-small | `2.25rem` | `2.75rem` | 400 |
| headline-large | `2rem` | `2.5rem` | 400 |
| headline-medium | `1.75rem` | `2.25rem` | 400 |
| headline-small | `1.5rem` | `2rem` | 400 |
| title-large | `1.375rem` | `1.75rem` | 400 |
| title-medium | `1rem` | `1.5rem` | 500 |
| title-small | `0.875rem` | `1.25rem` | 500 |
| body-large | `1rem` | `1.5rem` | 400 |
| body-medium | `0.875rem` | `1.25rem` | 400 |
| body-small | `0.75rem` | `1rem` | 400 |
| label-large | `0.875rem` | `1.25rem` | 500 |
| label-medium | `0.75rem` | `1rem` | 500 |
| label-small | `0.6875rem` | `1rem` | 500 |

来源：[`_md-sys-typescale.scss`](https://github.com/material-components/material-web/blob/main/tokens/versions/latest/sass/_md-sys-typescale.scss)。原文单位 rem，按 16px 根字号换算：body-large 为 16px / 24px，label-small 为 11px / 16px。

## 圆角

| Token | Value |
| --- | --- |
| none | `0px` |
| small | `8px` |
| medium | `12px` |
| large | `16px` |
| extra-large | `28px` |
| full | `9999px` |

来源：[`_md-sys-shape.scss`](https://github.com/material-components/material-web/blob/main/tokens/versions/latest/sass/_md-sys-shape.scss)。

## 阴影层级

| Level | Value |
| --- | --- |
| level0 | `0px` |
| level1 | `1px` |
| level2 | `3px` |
| level3 | `6px` |
| level4 | `8px` |
| level5 | `12px` |

来源：[`_md-sys-elevation.scss`](https://github.com/material-components/material-web/blob/main/tokens/versions/latest/sass/_md-sys-elevation.scss)。

## 动效

| Token | Value |
| --- | --- |
| short1 | `50ms` |
| short2 | `100ms` |
| short3 | `150ms` |
| short4 | `200ms` |
| medium1 | `250ms` |
| medium2 | `300ms` |
| medium3 | `350ms` |
| medium4 | `400ms` |
| long1 | `450ms` |
| long2 | `500ms` |
| long3 | `550ms` |
| long4 | `600ms` |
| extra-long1 | `700ms` |
| extra-long2 | `800ms` |
| extra-long3 | `900ms` |
| extra-long4 | `1000ms` |

常用缓动：standard `cubic-bezier(0.2, 0, 0, 1)`，standard-accelerate `cubic-bezier(0.3, 0, 1, 1)`，standard-decelerate `cubic-bezier(0, 0, 0, 1)`，emphasized-accelerate `cubic-bezier(0.3, 0, 0.8, 0.15)`，emphasized-decelerate `cubic-bezier(0.05, 0.7, 0.1, 1)`。

来源：[`_md-sys-motion.scss`](https://github.com/material-components/material-web/blob/main/tokens/versions/latest/sass/_md-sys-motion.scss)。

## 颜色

Material 3 的颜色是动态 scheme，seed color 经过算法生成 palette；`md-sys-color` 只给角色名，具体 hex 由 palette 计算，不在这份 token 表里硬编码。需要固定色板时，以官方 [Material Theme Builder](https://material-foundations.netlify.app/) 或 `_md-ref-palette.scss` 的输出为准。
