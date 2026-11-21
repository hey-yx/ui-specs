---
title: "Shopify Polaris · Token · Core Tokens 核心取值"
source: https://cdn.jsdelivr.net/npm/@shopify/polaris@13.9.5/build/esm/styles.css
section: tokens
tag: "取值快照"
fetched: 2026-11-11
status: partial
id: token-polaris
publisher: "Shopify Polaris"
known: partial
---

# Shopify Polaris · Token · Core Tokens 核心取值

> 从官方 `@shopify/polaris@13.9.5` 的构建样式摘出的取值，不是官方规范全文；用于核对具体数值，不构成选型方案。抓取 2026-11-11。

CSS 里的尺寸单位是 rem，下表按 16px 根字号换算成 px；颜色把 `rgba(..., 1)` 写成 hex。

## 颜色

| Token | 值 | 用途 |
| --- | --- | --- |
| `--p-color-text` | `#303030` | 正文 |
| `--p-color-text-secondary` | `#616161` | 次级文字 |
| `--p-color-text-emphasis` | `#005BD3` | 链接与焦点 |
| `--p-color-text-critical` | `#8E0B21` | 危险文字 |
| `--p-color-text-caution` | `#4F4700` | 警示文字 |
| `--p-color-text-success` | `#014B40` | 成功文字 |
| `--p-color-bg-surface` | `#FFFFFF` | 主表面 |
| `--p-color-bg-surface-secondary` | `#F7F7F7` | 次级表面 |
| `--p-color-bg-fill-brand` | `#303030` | 主按钮底色 |
| `--p-color-bg-fill-brand-hover` | `#1A1A1A` | 主按钮悬停 |
| `--p-color-border` | `#E3E3E3` | 默认边框 |
| `--p-color-border-hover` | `#CCCCCC` | 边框悬停 |
| `--p-color-border-focus` | `#005BD3` | 焦点边框 |
| `--p-color-border-critical` | `#FEC1C7` | 危险边框 |
| `--p-color-border-caution` | `#FFEB78` | 警示边框 |
| `--p-color-border-success` | `#92FCAC` | 成功边框 |

## 字号与行高

| Token | 字号 |
| --- | ---: |
| `--p-font-size-275` | `11px` |
| `--p-font-size-300` | `12px` |
| `--p-font-size-325` | `13px` |
| `--p-font-size-350` | `14px` |
| `--p-font-size-400` | `16px` |
| `--p-font-size-450` | `18px` |
| `--p-font-size-500` | `20px` |
| `--p-font-size-550` | `22px` |
| `--p-font-size-600` | `24px` |
| `--p-font-size-750` | `30px` |
| `--p-font-size-800` | `32px` |
| `--p-font-size-1000` | `40px` |

行高：`--p-font-line-height-300` 12px、`-400` 16px、`-500` 20px、`-600` 24px、`-700` 28px、`-800` 32px、`-1000` 40px、`-1200` 48px。

字重：regular `450`、medium `550`、semibold `650`、bold `700`。字体栈：`Inter, -apple-system, BlinkMacSystemFont, "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif`。

## 间距

| Token | 值 |
| --- | ---: |
| `--p-space-025` | `1px` |
| `--p-space-050` | `2px` |
| `--p-space-100` | `4px` |
| `--p-space-150` | `6px` |
| `--p-space-200` | `8px` |
| `--p-space-300` | `12px` |
| `--p-space-400` | `16px` |
| `--p-space-500` | `20px` |
| `--p-space-600` | `24px` |
| `--p-space-800` | `32px` |
| `--p-space-1000` | `40px` |
| `--p-space-1200` | `48px` |
| `--p-space-1600` | `64px` |

## 圆角

| Token | 值 |
| --- | ---: |
| `--p-border-radius-050` | `2px` |
| `--p-border-radius-100` | `4px` |
| `--p-border-radius-150` | `6px` |
| `--p-border-radius-200` | `8px` |
| `--p-border-radius-300` | `12px` |
| `--p-border-radius-400` | `16px` |
| `--p-border-radius-full` | `624.9375rem` |

组件默认取 `--p-border-radius-200`，即 8px；小型控件取 4 到 6px。

## 动效

| Token | 值 |
| --- | ---: |
| `--p-motion-duration-50` | `50ms` |
| `--p-motion-duration-100` | `100ms` |
| `--p-motion-duration-150` | `150ms` |
| `--p-motion-duration-200` | `200ms` |
| `--p-motion-duration-250` | `250ms` |
| `--p-motion-duration-300` | `300ms` |
| `--p-motion-duration-400` | `400ms` |
| `--p-motion-duration-500` | `500ms` |

缓动：`--p-motion-ease` `cubic-bezier(0.25, 0.1, 0.25, 1)`、`--p-motion-ease-in` `cubic-bezier(0.42, 0, 1, 1)`、`--p-motion-ease-out` `cubic-bezier(0.19, 0.91, 0.38, 1)`、`--p-motion-ease-in-out` `cubic-bezier(0.42, 0, 0.58, 1)`。

## 阴影

| Token | 值 |
| --- | --- |
| `--p-shadow-100` | `0 1px 0 0 rgba(26, 26, 26, 0.07)` |
| `--p-shadow-300` | `0 4px 6px -2px rgba(26, 26, 26, 0.20)` |
| `--p-shadow-400` | `0 8px 16px -4px rgba(26, 26, 26, 0.22)` |
| `--p-shadow-500` | `0 12px 20px -8px rgba(26, 26, 26, 0.24)` |
