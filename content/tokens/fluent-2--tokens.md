---
title: "Fluent 2 · Token · Core Tokens 核心取值"
source: https://github.com/microsoft/fluentui/blob/master/packages/tokens/src/global/fonts.ts
section: tokens
tag: "取值快照"
fetched: 2026-11-08
status: partial
id: token-fluent-2
publisher: "Microsoft"
known: partial
---

# Fluent 2 · Token · Core Tokens 核心取值

> 从官方 Fluent UI token 源摘出的取值，不是官方规范全文；用于核对具体数值，不构成选型方案。抓取 2026-11-08。

## 字号与行高

| Token | Font size | Line height |
| --- | --- | --- |
| base100 | `10px` | `14px` |
| base200 | `12px` | `16px` |
| base300 | `14px` | `20px` |
| base400 | `16px` | `22px` |
| base500 | `20px` | `28px` |
| base600 | `24px` | `32px` |
| hero700 | `28px` | `36px` |
| hero800 | `32px` | `40px` |
| hero900 | `40px` | `52px` |
| hero1000 | `68px` | `92px` |

字重：regular `400`、medium `500`、semibold `600`、bold `700`。来源：[`fonts.ts`](https://github.com/microsoft/fluentui/blob/master/packages/tokens/src/global/fonts.ts)、[`typographyStyles.ts`](https://github.com/microsoft/fluentui/blob/master/packages/tokens/src/global/typographyStyles.ts)。

## 间距

| Token | Value |
| --- | --- |
| none | `0` |
| xxs | `2px` |
| xs | `4px` |
| sNudge | `6px` |
| s | `8px` |
| mNudge | `10px` |
| m | `12px` |
| l | `16px` |
| xl | `20px` |
| xxl | `24px` |
| xxxl | `32px` |

来源：[`spacings.ts`](https://github.com/microsoft/fluentui/blob/master/packages/tokens/src/global/spacings.ts)。

## 动效

| Token | Value |
| --- | --- |
| ultraFast | `50ms` |
| faster | `100ms` |
| fast | `150ms` |
| normal | `200ms` |
| gentle | `250ms` |
| slow | `300ms` |
| slower | `400ms` |
| ultraSlow | `500ms` |

常用曲线：accelerateMax `cubic-bezier(0.9,0.1,1,0.2)`、decelerateMax `cubic-bezier(0.1,0.9,0.2,1)`、easyEase `cubic-bezier(0.33,0,0.67,1)`、linear `cubic-bezier(0,0,1,1)`。来源：[`durations.ts`](https://github.com/microsoft/fluentui/blob/master/packages/tokens/src/global/durations.ts)、[`curves.ts`](https://github.com/microsoft/fluentui/blob/master/packages/tokens/src/global/curves.ts)。

## 圆角与描边

| Token | Value |
| --- | --- |
| radiusSmall | `2px` |
| radiusMedium | `4px` |
| radiusLarge | `6px` |
| radiusXLarge | `8px` |
| radius2XLarge | `12px` |
| radius3XLarge | `16px` |
| radius4XLarge | `24px` |
| radiusCircular | `10000px` |
| strokeThin | `1px` |
| strokeThick | `2px` |
| strokeThicker | `3px` |
| strokeThickest | `4px` |

来源：[`borderRadius.ts`](https://github.com/microsoft/fluentui/blob/master/packages/tokens/src/global/borderRadius.ts)、[`strokeWidths.ts`](https://github.com/microsoft/fluentui/blob/master/packages/tokens/src/global/strokeWidths.ts)。

## 品牌色

`brandWeb` 的 10 到 160 阶：`#061724`、`#082338`、`#0a2e4a`、`#0c3b5e`、`#0e4775`、`#0f548c`、`#115ea3`、`#0f6cbd`、`#2886de`、`#479ef5`、`#62abf5`、`#77b7f7`、`#96c6fa`、`#b4d6fa`、`#cfe4fa`、`#ebf3fc`。来源：[`brandColors.ts`](https://github.com/microsoft/fluentui/blob/master/packages/tokens/src/global/brandColors.ts)。

## 阴影

`shadow2` 到 `shadow64` 由 ambient 与 key 两个颜色变量组成，结构分别为 `0 0 2px` 加 `0 1px 2px`、`0 2px 4px`、`0 4px 8px`、`0 8px 16px`、`0 14px 28px`、`0 32px 64px`。来源：[`shadows.ts`](https://github.com/microsoft/fluentui/blob/master/packages/tokens/src/utils/shadows.ts)。
