---
title: "USWDS · Foundation · Spacing units 间距单位"
source: https://designsystem.digital.gov/design-tokens/spacing-units/
section: layout
tag: "规范"
fetched: 2026-11-09
status: full
id: layout-17
publisher: "USWDS"
---

# USWDS · Foundation · Spacing units 间距单位

> 来源：[https://designsystem.digital.gov/design-tokens/spacing-units/](https://designsystem.digital.gov/design-tokens/spacing-units/)

---

Design tokens

USWDS spacing unit tokens are based on multiples of 8px, with additional tokens for small sizes, named tokens for large sizes, and a more limited selection of negative tokens.

Any spacing value in utilities or component CSS should use the following spacing unit tokens, based on multiples of 8px. The documentation below displays a target value in pixels, but the final output for tokens above `2px` and below `-2px` is the eqivalent value in `rem`, which will vary depending on your project settings.

**Note:** Some units tokens come in two flavors: a **numeric token** (like `0.5` or `-2`) and a **string token** (like `'05'` or `'neg-2'`). _Utility classes use unquoted string tokens exclusively when they exist_ (like `.margin-x-neg-2`). Mixins and functions usually accept either, and we will note any exceptions.

## Spacing unit tokens

| Token | Multiple | Value | Example |
| --- | --- | --- | --- |
| `1px` | — | 1px |  |
| `2px` | — | 2px |  |
| `0.5`, `'05'` | 0.5 | 4px |  |
| `1` | 1 | 8px |  |
| `1.5`, `'105'` | 1.5 | 12px |  |
| `2` | 2 | 16px |  |
| `2.5`, `'205'` | 2.5 | 20px |  |
| `3` | 3 | 24px |  |
| `4` | 4 | 32px |  |
| `5` | 5 | 40px |  |
| `6` | 6 | 48px |  |
| `7` | 7 | 56px |  |
| `8` | 8 | 64px |  |
| `9` | 9 | 72px |  |
| `10` | 10 | 80px |  |
| `15` | 15 | 120px |  |
| `'card'` | 20 | 160px |  |
| `'card-lg'` | 30 | 240px |  |
| `'mobile'` | 40 | 320px |  |
| `'mobile-lg'` | 60 | 480px |  |
| `'tablet'` | 80 | 640px |  |
| `'tablet-lg'` | 110 | 880px |  |
| `'desktop'` | 128 | 1024px |  |
| `'desktop-lg'` | 150 | 1200px |  |
| `'widescreen'` | 175 | 1400px |  |
| `-1px`, `'neg-1px'` | — | -1px |  |
| `-2px`, `'neg-2px'` | — | -2px |  |
| `-0.5`, `'neg-05'` | -0.5 | -4px |  |
| `-1`, `'neg-1'` | -1 | -8px |  |
| `-1.5`, `'neg-105'` | -1.5 | -12px |  |
| `-2`, `'neg-2'` | -2 | -16px |  |
| `-2.5`, `'neg-205'` | -2.5 | -20px |  |
| `-3`, `'neg-3'` | -3 | -24px |  |
| `-4`, `'neg-4'` | -4 | -32px |  |
| `-5`, `'neg-5'` | -5 | -40px |  |
| `-6`, `'neg-6'` | -6 | -48px |  |
| `-7`, `'neg-7'` | -7 | -56px |  |
| `-8`, `'neg-8'` | -8 | -64px |  |
| `-9`, `'neg-9'` | -9 | -72px |  |
| `-10`, `'neg-10'` | -10 | -80px |  |
| `-15`, `'neg-15'` | -15 | -120px |  |

## Using spacing unit tokens

Your context and coding style determine how you access USWDS spacing unit tokens in code.

Many mixins and utilities accept spacing unit tokens. See the [utilities section](https://designsystem.digital.gov/utilities/) for more on individual utilities and their matching mixins. We show only a few representative examples below.

| Context | Usage | Example |
| --- | --- | --- |
| function | units([units](https://designsystem.digital.gov/design-tokens/spacing-units/)) | padding-top: units(`3`); margin-left: units(`-2px`); border-radius: units(`0.5`); min-height: units(`'card'`); |
| mixin min-width media query | at-media([units](https://designsystem.digital.gov/design-tokens/spacing-units/)) | @include at-media(`'mobile-lg'`) |
| mixin max-width media query | at-media-max([units](https://designsystem.digital.gov/design-tokens/spacing-units/)) | @include at-media-max(`'mobile-lg'`) |
| setting | [units](https://designsystem.digital.gov/design-tokens/spacing-units/) | $theme-site-margin-mobile: `2` |
| utility | .padding-x-[units](https://designsystem.digital.gov/design-tokens/spacing-units/) .margin-x-[units](https://designsystem.digital.gov/design-tokens/spacing-units/) | .padding-x-`2` .margin-x-`neg-2` |

## Latest updates

Meaningful code and guidance updates are listed in the following table:

| Date | USWDS version | Affects | Breaking | Description |
| --- | --- | --- | --- | --- |
| 2023-08-23 | [3.6.0](https://github.com/uswds/uswds/releases/tag/v3.6.0) | * Styles | No | **Updated `0` token values to include units when needed.** Now, `units(0)` can be used in `calc()` functions. More information: [uswds#5325](https://github.com/uswds/uswds/pull/5325) |
| 2023-02-24 | N/A | * Guidance | No | **Corrected alternate token name for token `05`.** More information: [uswds-site#1949](https://github.com/uswds/uswds-site/pull/1949) |
| 2022-03-11 | N/A | * Guidance | No | **Reverted value of `tablet-lg` to `880px`.** More information: [uswds-site#1474](https://github.com/uswds/uswds-site/pull/1474) |
| 2022-02-24 | N/A | * Guidance | No | **Updated value of `tablet-lg` from `880px` to `800px`.** More information: [uswds-site#1455](https://github.com/uswds/uswds-site/pull/1455) |
