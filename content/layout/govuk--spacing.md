---
title: "GOV.UK · Spacing 间距"
source: https://design-system.service.gov.uk/styles/spacing/
section: layout
tag: "规范"
fetched: 2026-10-20
status: full
id: layout-4
publisher: "GOV.UK Design System"
---

# GOV.UK · Spacing 间距

> 来源：[https://design-system.service.gov.uk/styles/spacing/](https://design-system.service.gov.uk/styles/spacing/)

---

*   [Responsive spacing](#responsive-spacing)
*   [Static spacing](#static-spacing)
*   [Applying spacing in your own CSS](#applying-spacing-in-your-own-css)
*   [Overriding spacing](#overriding-spacing)

The Design System uses two different spacing scales – responsive and static.

## Responsive spacing

The responsive spacing scale adapts based on screen size.

The spacing for ‘large screens’ is used when the screen is wider than the tablet breakpoint (640px). Spacing for the smallest units (0-3) stays the same for all screen sizes.

The responsive spacing scale

Spacing unit

Small screens

Large screens

0

0

0

1

5px

5px

2

10px

10px

3

15px

15px

4

15px

20px

5

15px

25px

6

20px

30px

7

25px

40px

8

30px

50px

9

40px

60px

## Static spacing

The static spacing scale stays the same for all screen sizes, and uses the same spacing as ‘large screens’ in the responsive spacing scale.

The static spacing scale

Spacing unit

All screens

0

0

1

5px

2

10px

3

15px

4

20px

5

25px

6

30px

7

40px

8

50px

9

60px

## Applying spacing in your own CSS

If you want to reference the spacing scale in your CSS, use the spacing helpers.

### Using the responsive spacing helper

To use the responsive spacing scale, include either:

*   the [`govuk-responsive-margin`](https://frontend.design-system.service.gov.uk/sass-api-reference/#govuk-responsive-margin) mixin
*   the [`govuk-responsive-padding`](https://frontend.design-system.service.gov.uk/sass-api-reference/#govuk-responsive-padding) mixin

For example, to apply spacing unit 6 for 30px padding on large screens and 20px on small screens, use:

```
@include govuk-responsive-padding(6);
```

You can also add an argument to apply margin or padding in a single direction.

For example, to apply spacing unit 6 for a 30px bottom margin on large screens and a 20px bottom margin on small screens, use:

```
@include govuk-responsive-margin(6, "bottom");
```

### Using the static spacing helper

For the static spacing scale, use the [`govuk-spacing` function](https://frontend.design-system.service.gov.uk/sass-api-reference/#govuk-spacing).

For example, to apply spacing unit 6 for 30px top padding on all screens, use:

```
padding-top: govuk-spacing(6);
```

For negative spacing, use a negative spacing unit number.

For example, to apply spacing unit -3 for a negative 15px top margin all screens, use:

```
margin-top: govuk-spacing(-3);
```

## Overriding spacing

Occasionally, you might need to make minor adjustments like adding or removing spacing to elements of your design. You can use the spacing override classes for this.

### Responsive spacing override classes

The responsive spacing override classes start with: `govuk-!-`, followed by either `margin-` or `padding-`, and then a spacing unit number.

To apply spacing in a single direction, include `left-`, `right-`, `top-`, or `bottom-` just before the spacing unit.

For example, use:

*   `govuk-!-margin-9` to apply a 40px margin to all sides of the element on small screens, increasing to 60px on large screens
*   `govuk-!-padding-right-5` to apply 15px of padding to the right side of the element on small screens, increasing to 25px on large screens
*   `govuk-!-margin-0` to remove all margins at all screen sizes

### Static spacing override classes

The static spacing override classes start with `govuk-!-static`. Use them the same way as the responsive spacing override classes.

For example, use:

*   `govuk-!-static-margin-9` to apply a 60px margin to all sides of the element at all screen sizes
*   `govuk-!-static-padding-right-5` to apply 25px of padding to the right side of the element at all screen sizes
*   `govuk-!-static-margin-0` to remove all margins at all screen sizes, same as `govuk-!-margin-0`

### Examples

*   [HTML](#padding-scale-spacing-example-html)

```
<div class="govuk-!-padding-bottom-9"></div>
<div class="govuk-!-padding-bottom-8"></div>
<div class="govuk-!-padding-bottom-7"></div>
<div class="govuk-!-padding-bottom-6"></div>
<div class="govuk-!-padding-bottom-5"></div>
<div class="govuk-!-padding-bottom-4"></div>
<div class="govuk-!-padding-bottom-3"></div>
<div class="govuk-!-padding-bottom-2"></div>
<div class="govuk-!-padding-bottom-1"></div>
```

*   [HTML](#margin-scale-spacing-example-html)

```
<p class="govuk-body govuk-!-margin-bottom-9">A paragraph with a margin-bottom override (spacing unit 9).</p>
<p class="govuk-body govuk-!-margin-bottom-8">A paragraph with a margin-bottom override (spacing unit 8).</p>
<p class="govuk-body govuk-!-margin-bottom-7">A paragraph with a margin-bottom override (spacing unit 7).</p>
<p class="govuk-body govuk-!-margin-bottom-6">A paragraph with a margin-bottom override (spacing unit 6).</p>
<p class="govuk-body govuk-!-margin-bottom-5">A paragraph with a margin-bottom override (spacing unit 5).</p>
<p class="govuk-body govuk-!-margin-bottom-4">A paragraph with a margin-bottom override (spacing unit 4).</p>
<p class="govuk-body govuk-!-margin-bottom-3">A paragraph with a margin-bottom override (spacing unit 3).</p>
<p class="govuk-body govuk-!-margin-bottom-2">A paragraph with a margin-bottom override (spacing unit 2).</p>
<p class="govuk-body govuk-!-margin-bottom-1">A paragraph with a margin-bottom override (spacing unit 1).</p>
<p class="govuk-body govuk-!-margin-bottom-0">A paragraph with a margin-bottom override (spacing unit 0).</p>
```

## Help improve this style

To help make sure that this page is useful, relevant and up to date, you can:

*   take part in the [‘Spacing’ discussion on GitHub](https://github.com/alphagov/govuk-design-system/discussions/5947/) and share your research
*   [propose a change on GitHub](https://github.com/alphagov/govuk-design-system/edit/main/src/styles/spacing/index.md) – read more about [how to propose changes in GitHub](https://design-system.service.gov.uk/community/propose-a-content-change-using-github/)
