---
title: "USWDS · Typesetting 排版 token 总览"
source: https://designsystem.digital.gov/design-tokens/typesetting/overview/
section: type
tag: "规范"
fetched: 2026-10-20
status: full
id: type-13
publisher: "USWDS"
---

# USWDS · Typesetting 排版 token 总览

> 来源：[https://designsystem.digital.gov/design-tokens/typesetting/overview/](https://designsystem.digital.gov/design-tokens/typesetting/overview/)

---

Typesetting in USWDS means understanding the relationship between font family, font size, and line height.

## Normalization

Typefaces vary in optical size. This means that at any specific pixel value, an optically small typeface like Source Sans Pro will appear smaller than an optically large typeface like Merriweather. Optical size is a function of internal font metrics and typeface design choices like x-height.

### Fonts at native size

![optical size of native typefaces. shows merriweather as optically large, source sans pro as optically small, and public sans in the middle.](https://designsystem.digital.gov/assets/img/design-tokens/font-comparison.svg)

USWDS 3 is designed so each size token outputs a consistent optical size regardless of the typeface. This makes our guidance more reliable and our theming more flexible.

### Fonts with normalization applied

![optical size of normalized typefaces. shows each font having a similar optical size.](https://designsystem.digital.gov/assets/img/design-tokens/font-comparison-normalized.svg)

To make different typefaces appear the same size (here called the _target size_) at each step of the scale (below, we see the output of [size](https://designsystem.digital.gov/design-tokens/typesetting/font-size/) token `10`), the absolute size of each token’s output varies depending on the font family.

Each [supported typeface](https://designsystem.digital.gov/design-tokens/typesetting/font-family/) is normalized to a target value determined by the optical size of common system fonts — specifically Apple’s typeface San Francisco and Google’s typeface Roboto.

For [size](https://designsystem.digital.gov/design-tokens/typesetting/font-size/) token `10` (24px) we see the following normalized ouput:

Supported typeface

Normalization

Final output (px)

Georgia

1.05

25.11

Helvetica

1.01

24.34

Merriweather

0.98

23.42

Open Sans

1.01

24.34

Public Sans

1.0

24.0

Roboto Mono

0.95

22.86

Source Sans Pro

1.06

25.55

System fonts

1.0

24.0

Tahoma

1.0

23.93

Verdana

0.99

23.87

### Rem-based font sizing

In USWDS, the final font size is output not in pixels but in `rem` (a multiple of the page’s root font size). If you have `$theme-respect-user-font-size` set to `true` in your theme settings, the root font size is set to `100%` and typescale is calculated based on `16px`. If `$theme-respect-user-font-size` set to `false`, the root font size is set to the value of `$theme-root-font-size` and typescale is calculated based on that root.

Since both the `rem` and absolute `px` values change depending on the theme settings and the typeface, our documentation displays only the `px` value of the target.

### Normalization and line height

USWDS has six target line heights in its [line-height](https://designsystem.digital.gov/design-tokens/typesetting/line-height/) token system. These targets are unitless numbers, multipliers of the font size of the affected text. For example, if the target line height were `2` in text with a target font size of `16px`, the final line height would be the `target line height * target font size` or `2 * 16px` or `32px`.

Since we use normalization on font sizing, we must also normalize line height to hit the target line height:

For [size](https://designsystem.digital.gov/design-tokens/typesetting/font-size/) token `10` (24px) and [line-height](https://designsystem.digital.gov/design-tokens/typesetting/line-height/) token `3` (1.35 / 32.4px) we see the following normalized ouput:

Supported typeface

Normalization

Final size (px)

Final line height

Final line height (px)

Georgia

1.05

25.11

1.29

32.4

Helvetica

1.01

24.34

1.33

32.4

Merriweather

0.98

23.42

1.38

32.4

Open Sans

1.01

24.34

1.33

32.4

Public Sans

1.0

24.0

1.35

32.4

Roboto Mono

0.95

22.86

1.42

32.4

Source Sans Pro

1.06

25.55

1.27

32.4

System fonts

1.0

24.0

1.35

32.4

Tahoma

1.0

23.93

1.35

32.4

Verdana

0.99

23.87

1.36

32.4

## Typesetting with tokens

USWDS uses **functions**, **mixins**, and **utility classes** to style its components with design tokens. Because we use normalized values, as described above, font size and line height functions, mixins, and utility classes differ from many others in the system by requiring _two_ tokens: a [family](https://designsystem.digital.gov/design-tokens/typesetting/font-family/) token and either a [size](https://designsystem.digital.gov/design-tokens/typesetting/font-size/) or a [line-height](https://designsystem.digital.gov/design-tokens/typesetting/line-height/) token.

The individual design token sections go into this in more detail, but here’s a summary:

### Font family

Token

Function

Mixin

Utility class

[family](https://designsystem.digital.gov/design-tokens/typesetting/font-family/)

family([family](https://designsystem.digital.gov/design-tokens/typesetting/font-family/))

u-font-family([family](https://designsystem.digital.gov/design-tokens/typesetting/font-family/))

.font-family-[family](https://designsystem.digital.gov/design-tokens/typesetting/font-family/)

'body'

family('body')

u-font-family('body')

.font-family-body

'sans'

family('sans')

u-font-family('sans')

.font-family-sans

### Font size

Token

Function

Mixin

Utility class

[family](https://designsystem.digital.gov/design-tokens/typesetting/font-family/), [size](https://designsystem.digital.gov/design-tokens/typesetting/font-size/)

size([family](https://designsystem.digital.gov/design-tokens/typesetting/font-family/), [size](https://designsystem.digital.gov/design-tokens/typesetting/font-size/))

u-font-size([family](https://designsystem.digital.gov/design-tokens/typesetting/font-family/), [size](https://designsystem.digital.gov/design-tokens/typesetting/font-size/))

.font-size-[family](https://designsystem.digital.gov/design-tokens/typesetting/font-family/)\-[size](https://designsystem.digital.gov/design-tokens/typesetting/font-size/)

'ui', 'micro'

size('ui', 'micro')

u-font-size('ui', 'micro')

—

'sans', 6

size('sans', 6)

u-font-size('sans', 6)

—

### Family and size together

Token

Function

Mixin

Utility class

[family](https://designsystem.digital.gov/design-tokens/typesetting/font-family/), [size](https://designsystem.digital.gov/design-tokens/typesetting/font-size/)

—

u-font([family](https://designsystem.digital.gov/design-tokens/typesetting/font-family/), [size](https://designsystem.digital.gov/design-tokens/typesetting/font-size/))

.font-[family](https://designsystem.digital.gov/design-tokens/typesetting/font-family/)\-[size](https://designsystem.digital.gov/design-tokens/typesetting/font-size/)

'ui', 'micro'

—

u-font('ui', 'micro')

.font-ui-micro

'sans', 6

—

u-font('sans', 6)

.font-sans-6

### Line height

### Family, size, and line height together

The `typeset()` mixin allows you to set family, size, and line height all in one line. It accepts the tokens listed as well as a special `null` value. If either of the three properties get `null` instead of a token, the system will use a default value from [typography settings](https://designsystem.digital.gov/documentation/settings/#typography-settings): either `$theme-body-font-family`, `$theme-body-font-size`, or `$theme-body-line-height` depending on the property passed the `null` value.

We use the `typeset()` mixin on all our components to get the effect of default `<body>` element styling without having to explicitly style the `<body>` element.

Token

Function

Mixin

Utility class

[family](https://designsystem.digital.gov/design-tokens/typesetting/font-family/), [size](https://designsystem.digital.gov/design-tokens/typesetting/font-size/), [line-height](https://designsystem.digital.gov/design-tokens/typesetting/line-height/)

—

typeset([family](https://designsystem.digital.gov/design-tokens/typesetting/font-family/), [size](https://designsystem.digital.gov/design-tokens/typesetting/font-size/), [line-height](https://designsystem.digital.gov/design-tokens/typesetting/line-height/))

—

'ui', 'micro', 1

—

typeset('ui', 'micro', 1)

—

'ui', null, 3

—

typeset('ui', null, 3)

—

'ui', xs, null

—

typeset('ui', xs)

—

'ui', null, null

—

typeset('ui')

—

See this example:

#### Example: Settings and typesetting

```
// In your settings configuration:

@use "uswds-core" with (
  $theme-respect-user-font-size: true,
  $theme-font-type-sans: "public-sans",
  $theme-font-role-ui: "sans",
  $theme-type-scale-sm: 5,
  $theme-body-font-size: "sm",
  $theme-body-line-height: 5
);

// in component code:

.usa-component {
  @include typeset('ui');
}

// is the equivalent of:

.usa-component {
  font-family: family('ui');
  font-size: size('ui', $theme-body-font-size);
  line-height: line-height('ui', $theme-body-line-height);
}

// compiles as:

.usa-component {
  font-family: 'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 1rem;
  line-height: 1.62;
}

```

## Latest updates

Meaningful code and guidance updates are listed in the following table:

Date

USWDS version

Affects

Breaking

Description

2024-05-15

N/A

*   Guidance

No

**Updated the value for `$theme-font-role-ui` in the settings configuration example.** More information: [uswds-site#2379](https://github.com/uswds/uswds-site/pull/2379)
