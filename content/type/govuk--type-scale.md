---
title: "GOV.UK · Type scale 字阶"
source: https://design-system.service.gov.uk/styles/type-scale/
section: type
tag: "规范"
fetched: 2026-10-20
status: full
id: type-4
publisher: "GOV.UK Design System"
---

# GOV.UK · Type scale 字阶

> 来源：[https://design-system.service.gov.uk/styles/type-scale/](https://design-system.service.gov.uk/styles/type-scale/)

---

GOV.UK Frontend v6.0.0 and later includes an updated the type scale to increase the size of text on small screens, improving legibility and accessibility.

[See an overview of the changes to the type scale](https://design-system.service.gov.uk/get-started/new-type-scale/).

The type scale is a collection of font sizes and line heights that underpin all of the typographic styles on GOV.UK. It has been [tested and iterated](https://designnotes.blog.gov.uk/2022/12/12/making-the-gov-uk-frontend-typography-scale-more-accessible/) for readability on different devices.

When creating new components, always start by using the existing typography styles. If you need to create a new style, align it with one of the points on the type scale.

## How it works

Like the [spacing scale](https://design-system.service.gov.uk/styles/spacing/), every point on the type scale uses a line height in a multiple of 5px. This creates a consistent vertical rhythm, which makes pages easier to scan and read.

GOV.UK Frontend outputs CSS in relative units like `em` or `rem`. This helps the type resize better when zoomed or magnified. We’ve used pixels (px) here so it’s easier to understand.

## Responsive behaviour

The type scale changes based on screen size.

The scale for ‘large screens’ is used when the screen is wider than the tablet breakpoint (640px).

Large screens

Point on type scale

Used by

Font size

Line height

80

Only used in exceptional circumstances

80px

80px

48

`govuk-heading-xl`

48px

50px

36

`govuk-heading-l`

36px

40px

27

Only used in exceptional circumstances

27px

30px

24

`govuk-heading-m`, `govuk-body-l`

24px

30px

19

`govuk-heading-s`, `govuk-body`

19px

25px

16

`govuk-body-s`

16px

20px

Small screens

Point on type scale

Used by

Font size

Line height

80

Only used in exceptional circumstances

53px

55px

48

`govuk-heading-xl`

32px

35px

36

`govuk-heading-l`

27px

30px

27

Only used in exceptional circumstances

21px

25px

24

`govuk-heading-m`, `govuk-body-l`

21px

25px

19

`govuk-heading-s`, `govuk-body`

19px

25px

16

`govuk-body-s`

16px

20px

## Using the type scale in your own CSS

Include the [`govuk-font` mixin](https://frontend.design-system.service.gov.uk/sass-api-reference/#govuk-font) to use GOV.UK typography in your CSS.

For example, if you want a custom element to use type scale point 19, use:

```
@include govuk-font($size: 19);
```

You can add additional arguments to control font weight, use tabular font spacing, or to override the line height:

```
@include govuk-font($size: 19, $weight: bold, $tabular: true);
```

### If you only want to set the font size

Do not use `govuk-font` if you only want to change the font size and line height as it includes additional typography-related CSS like the New Transport font family. Instead, you should use the [`govuk-font-size` mixin](https://frontend.design-system.service.gov.uk/sass-api-reference/#govuk-font-size):

```
@include govuk-font-size($size: 19);
```

## Help improve this style

To help make sure that this page is useful, relevant and up to date, you can:

*   take part in the [‘Type scale’ discussion on GitHub](https://github.com/alphagov/govuk-design-system/discussions/6027/) and share your research
*   [propose a change on GitHub](https://github.com/alphagov/govuk-design-system/edit/main/src/styles/type-scale/index.md) – read more about [how to propose changes in GitHub](https://design-system.service.gov.uk/community/propose-a-content-change-using-github/)
