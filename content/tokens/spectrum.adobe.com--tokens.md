---
title: "Adobe Spectrum · Token · Core Tokens 核心取值"
source: https://cdn.jsdelivr.net/npm/@adobe/react-spectrum@3.47.7/dist/private/vars_spectrum-global.css
section: tokens
tag: "取值快照"
fetched: 2026-11-11
status: partial
id: token-spectrum
publisher: "Adobe Spectrum"
known: partial
---

# Adobe Spectrum · Token · Core Tokens 核心取值

> 从官方 `@adobe/react-spectrum@3.47.7` 的 `vars_spectrum-global.css`、`vars_spectrum-light.css` 与 `vars_spectrum-medium.css` 摘出的取值，不是官方规范全文；用于核对具体数值，不构成选型方案。抓取 2026-11-11。

颜色只列 light 主题；dark 主题另有同名变量覆盖。尺寸单位是 px。

## 颜色

| Token | 值 | 用途 |
| --- | --- | --- |
| `--spectrum-alias-text-color` | `#222222` | 正文 |
| `--spectrum-alias-heading-text-color` | `#000000` | 标题 |
| `--spectrum-alias-label-text-color` | `#464646` | 标签 |
| `--spectrum-alias-text-color-disabled` | `#B1B1B1` | 禁用文字 |
| `--spectrum-alias-background-color-default` | `#F8F8F8` | 页面底色 |
| `--spectrum-alias-border-color` | `#909090` | 默认边框 |
| `--spectrum-alias-border-color-light` | `#E6E6E6` | 浅边框 |
| `--spectrum-alias-border-color-focus` | `#147AF3` | 焦点边框 |
| `--spectrum-alias-text-color-selected` | `#0054B6` | 选中文字 |
| `--spectrum-red-900` | `#D31510` | 错误 |
| `--spectrum-green-900` | `#007A4D` | 成功 |

## 字号与行高

| Token | 字号 |
| --- | ---: |
| `--spectrum-global-dimension-font-size-25` | `10px` |
| `--spectrum-global-dimension-font-size-50` | `11px` |
| `--spectrum-global-dimension-font-size-75` | `12px` |
| `--spectrum-global-dimension-font-size-100` | `14px` |
| `--spectrum-global-dimension-font-size-150` | `15px` |
| `--spectrum-global-dimension-font-size-200` | `16px` |
| `--spectrum-global-dimension-font-size-300` | `18px` |
| `--spectrum-global-dimension-font-size-400` | `20px` |
| `--spectrum-global-dimension-font-size-500` | `22px` |
| `--spectrum-global-dimension-font-size-600` | `25px` |
| `--spectrum-global-dimension-font-size-700` | `28px` |
| `--spectrum-global-dimension-font-size-800` | `32px` |
| `--spectrum-global-dimension-font-size-900` | `36px` |
| `--spectrum-global-dimension-font-size-1000` | `40px` |

行高：正文 `1.5`、中文正文 `1.7`、标题 `1.3`。字重：regular `400`、bold `700`。字体栈：`adobe-clean, "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Trebuchet MS", "Lucida Grande", sans-serif`，没有内置中文字体。

## 间距

| Token | 值 |
| --- | ---: |
| `--spectrum-global-dimension-size-25` | `2px` |
| `--spectrum-global-dimension-size-50` | `4px` |
| `--spectrum-global-dimension-size-100` | `8px` |
| `--spectrum-global-dimension-size-200` | `16px` |
| `--spectrum-global-dimension-size-300` | `24px` |
| `--spectrum-global-dimension-size-400` | `32px` |
| `--spectrum-global-dimension-size-500` | `40px` |
| `--spectrum-global-dimension-size-600` | `48px` |
| `--spectrum-global-dimension-size-800` | `64px` |

## 圆角与控件高度

| Token | 值 |
| --- | ---: |
| `--spectrum-alias-border-radius-xsmall` | `1px` |
| `--spectrum-alias-border-radius-small` | `2px` |
| `--spectrum-alias-border-radius-regular` | `4px` |
| `--spectrum-alias-border-radius-medium` | `8px` |
| `--spectrum-alias-border-radius-large` | `16px` |
| `--spectrum-alias-single-line-height` | `32px` |

按钮、输入框与下拉的默认高度都取 `--spectrum-alias-single-line-height`，即 32px。

## 动效

| Token | 值 |
| --- | ---: |
| `--spectrum-global-animation-duration-100` | `130ms` |
| `--spectrum-global-animation-duration-200` | `160ms` |
| `--spectrum-global-animation-duration-300` | `190ms` |
| `--spectrum-global-animation-duration-400` | `220ms` |
| `--spectrum-global-animation-duration-500` | `250ms` |
| `--spectrum-global-animation-duration-600` | `300ms` |
| `--spectrum-global-animation-duration-1000` | `500ms` |
| `--spectrum-global-animation-duration-2000` | `1000ms` |

缓动：`--spectrum-global-animation-ease-in` `cubic-bezier(0.5, 0, 1, 1)`、`--spectrum-global-animation-ease-out` `cubic-bezier(0, 0, 0.4, 1)`、`--spectrum-global-animation-ease-in-out` `cubic-bezier(0.45, 0, 0.4, 1)`。
