---
title: "USWDS · Foundation · Layout grid 布局网格"
source: https://designsystem.digital.gov/utilities/layout-grid/
section: layout
tag: "规范"
fetched: 2026-11-09
status: full
id: layout-16
publisher: "USWDS"
---

# USWDS · Foundation · Layout grid 布局网格

> 来源：[https://designsystem.digital.gov/utilities/layout-grid/](https://designsystem.digital.gov/utilities/layout-grid/)

---

Utilities

Use our flexible grid system to structure website content. The grid is mobile-first, powered by flexbox, and based on a 12-column system.

## How it works

The grid system uses a series of containers, rows, and columns to lay out and align content. The following row and corresponding code are an example of and in-depth look at how the grid comes together.

tablet:grid-col

tablet:grid-col

tablet:grid-col

```
<div class="grid-container">
  <div class="grid-row">
    <div class="tablet:grid-col">tablet:grid-col</div>
    <div class="tablet:grid-col">tablet:grid-col</div>
    <div class="tablet:grid-col">tablet:grid-col</div>
  </div>
</div>
```

This example code creates three equal-width columns on tablet, desktop, and widescreen devices by using our predefined grid classes. Those columns are centered in the page with the parent `grid-container` container.

The following sections break the layout grid down and describe how it works.

### Containers, rows, and columns

*   **Containers:**`grid-container` centers the container and gives it a maximum width of `desktop` (1024px). If you would like the grid to span the full width of the page, do not use `grid-container`. 
    *   `grid-container` can also accept any breakpoint width, like `tablet-lg` or `widescreen`. Set the default max width with `$theme-grid-container-max-width` in your [USWDS settings configuration](https://designsystem.digital.gov/documentation/settings) using [unit tokens](https://designsystem.digital.gov/design-tokens/spacing-units/).
    *   By default, `grid-container` has a `padding-x` of [2 units](https://designsystem.digital.gov/design-tokens/spacing-units/) at narrow widths, and a padding-x of [4 units](https://designsystem.digital.gov/design-tokens/spacing-units/) at `desktop` and wider. Control these values by customizing `$theme-site-margins-mobile-width`, `$theme-site-margins-width` and `$theme-site-margins-breakpoint` in your [USWDS settings configuration](https://designsystem.digital.gov/documentation/settings) using [unit tokens](https://designsystem.digital.gov/design-tokens/spacing-units/).

*   **Rows:** Columns must have a `grid-row` as a parent.
*   **Columns:**`grid-col-[1-12]` indicates the number of columns the item spans out of a possible 12 per row. So, if you want three equal-width columns across, use `grid-col-4` for each item.

### Additional functionality

*   **Equal-width columns:** With flexbox, grid columns without a specified width will display as equal-width columns. For example, four instances of `grid-col` will display as one-quarter-width columns across all sizes. Refer to the [auto-layout columns](https://designsystem.digital.gov/utilities/layout-grid/#auto-layout-columns) section for more examples.
*   **Gutters:** Rows and columns don’t have any gutters by default, but gutters can be added by including `grid-gap-sm`, `grid-gap`, or `grid-gap-lg` at the row level. Refer to [gutters](https://designsystem.digital.gov/utilities/layout-grid/#gutters) for more info.
*   **Media queries:** Grid breakpoints are based on minimum-width media queries, meaning they apply to that specific width and all greater widths (e.g., `tablet:col-4` applies to tablet, desktop, and widescreen devices but not at `mobile-lg` or any width below the tablet breakpoint). Refer to [responsive variants](https://designsystem.digital.gov/utilities/layout-grid/#responsive-variants) for a full list.
*   **Sass mixins:** You can use predefined grid classes (like `grid-col-4`) for presentational markup or [Sass utility mixins](https://designsystem.digital.gov/utilities/layout-grid/#utility-mixins) for more semantic markup.

## Auto layout columns

### Variable-width content

`.grid-col-auto` items fit the natural width of their content.

`.grid-col` and `.grid-col-fill` items flex to fill the available space as illustrated in the following example row and code.

.grid-col-auto

.grid-col

.grid-col-fill

.grid-col-auto

```
<div class="grid-container">
  <div class="grid-row">
    <div class="grid-col-auto">.grid-col-auto</div>
    <div class="grid-col">.grid-col</div>
    <div class="grid-col-fill">.grid-col-fill</div>
    <div class="grid-col-auto">.grid-col-auto</div>
  </div>
</div>
```

## Responsive classes

### Same at all breakpoints

For columns that should maintain the same proportion at any viewport width, use the `.grid-col` and `.grid-col-*` classes. Specify a numbered class when you need a column of a specific width; otherwise, use `.grid-col`.

`.grid-col-[1-12]` sets a fixed width of [n] grid columns in a 12-column grid.

1

2

3

4

5

6

7

8

9

10

11

12

.grid-col-1

.grid-col-2

.grid-col-3

.grid-col-4

.grid-col-2

.grid-col-8

.grid-col-2

.grid-col-2

```
<div class="grid-row">
  <div class="grid-col-1">.grid-col-1</div>
  <div class="grid-col-2">.grid-col-2</div>
  <div class="grid-col-3">.grid-col-3</div>
  <div class="grid-col-4">.grid-col-4</div>
  <div class="grid-col-2">.grid-col-2</div>
</div>

<div class="grid-row">
  <div class="grid-col-8">.grid-col-8</div>
  <div class="grid-col-2">.grid-col-2</div>
  <div class="grid-col-2">.grid-col-2</div>
</div>
```

### Stacked columns at narrow widths

Columns are full-width until the narrowest breakpoint specified in a `.grid-col` class. For instance, using a single set of `tablet:grid-col-*` classes, you can create a basic grid system that starts out stacked before displaying as columns at the tablet breakpoint (`tablet:`) as illustrated in the following rows and corresponding code.

.tablet:grid-col

.tablet:grid-col

.tablet:grid-col

.tablet:grid-col-4

.tablet:grid-col-8

```
<div class="grid-row">
  <div class="tablet:grid-col">.tablet:grid-col</div>
  <div class="tablet:grid-col">.tablet:grid-col</div>
  <div class="tablet:grid-col">.tablet:grid-col</div>
</div>

<div class="grid-row">
  <div class="tablet:grid-col-4">.tablet:grid-col-4</div>
  <div class="tablet:grid-col-8">.tablet:grid-col-8</div>
</div>
```

### Mix and match

Don’t want your columns to simply stack in some breakpoints? Use a combination of different classes for each breakpoint as needed. See the following example rows and corresponding code for a better idea of how it all works.

.tablet:grid-col-8

.grid-col-6 .tablet:grid-col-4

.grid-col-6 .tablet:grid-col-4

.grid-col-6 .tablet:grid-col-4

.grid-col-6 .tablet:grid-col-4

.grid-col-6

.grid-col-6

```
<!-- Stack the columns on mobile by making one full-width and the other half-width -->
<div class="grid-row">
  <div class="tablet:grid-col-8">.tablet:grid-col-8</div>
  <div class="grid-col-6 tablet:grid-col-4">.grid-col-6 .tablet:grid-col-4</div>
</div>

<!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
<div class="grid-row">
  <div class="grid-col-6 tablet:grid-col-4">.grid-col-6 .tablet:grid-col-4</div>
  <div class="grid-col-6 tablet:grid-col-4">.grid-col-6 .tablet:grid-col-4</div>
  <div class="grid-col-6 tablet:grid-col-4">.grid-col-6 .tablet:grid-col-4</div>
</div>

<!-- Columns are always 50% wide, on mobile and desktop -->
<div class="grid-row">
  <div class="grid-col-6">.grid-col-6</div>
  <div class="grid-col-6">.grid-col-6</div>
</div>
```

## Offsetting columns

`.grid-offset-[1-12]` offsets an item by the specified number of grid columns as shown in the following example.

1

2

3

4

5

6

7

8

9

10

11

12

.grid-col-8.grid-offset-4

```
<div class="grid-row">
  <div class="grid-col-8 grid-offset-4">.grid-col-8.grid-offset-4</div>
</div>
```

## Column wrapping

Items wrap when the sum of the grid columns is more than 12 as shown in the following example.

1

2

3

4

5

6

7

8

9

10

11

12

.grid-col-8

.grid-col-3

.grid-col-5

```
<div class="grid-row">
  <div class="grid-col-8">.grid-col-8</div>
  <div class="grid-col-3">.grid-col-3</div>
  <div class="grid-col-5">.grid-col-5</div>
</div>
```

## Gutters

### Default gutter

Add `grid-gap` to a grid row to add a gap (or gutter) between each column in the row. The default gap width is 2 units and 4 units at `desktop` and higher. Customize the width of the gap by adjusting the value of `$theme-column-gap` in project settings as shown in the following example.

1

2

3

4

5

6

7

8

9

10

11

12

.grid-col-4

.grid-col-4

.grid-col-4

```
<div class="grid-row grid-gap">
  <div class="grid-col-4">
    <div>.grid-col-4</div>
  </div>
  <div class="grid-col-4">
    <div>.grid-col-4</div>
  </div>
  <div class="grid-col-4">
    <div>.grid-col-4</div>
  </div>
</div>
```

### Large gutter

`grid-gap-lg` adds a larger gap (or gutter) between each column in a row than `grid-gap`. The default large-gap width is 32px (4 spacing units). Customize the width of the large gap by adjusting the value of `$theme-column-gap-lg` in project settings. There is also a `.grid-gap-sm` (2px) set with `$theme-column-gap-sm`. Also, you can add the following system values with `grid-gap`:

*   `grid-gap-2px`
*   `grid-gap-05`
*   `grid-gap-1`
*   `grid-gap-2`
*   `grid-gap-3`
*   `grid-gap-4`
*   `grid-gap-5`
*   `grid-gap-6`

The following example row and code illustrate large gutters.

1

2

3

4

5

6

7

8

9

10

11

12

.grid-col-4

.grid-col-4

.grid-col-4

```
<div class="grid-row grid-gap-lg">
  <div class="grid-col-4">
    <div>.grid-col-4</div>
  </div>
  <div class="grid-col-4">
    <div>.grid-col-4</div>
  </div>
  <div class="grid-col-4">
    <div>.grid-col-4</div>
  </div>
</div>
```

## Theme settings

You can redefine column gap token sizes, set the grid container max width, and update site margin by defining the relevant theme setting in your [USWDS settings configuration](https://designsystem.digital.gov/documentation/settings#configuring-custom-uswds-settings).

Find a full list of the available [grid settings](https://designsystem.digital.gov/documentation/settings#spacing-settings) on the settings page.

## Utility mixins

Utilities may be used in component Sass with **utility mixins**. Highlighted [tokens](https://designsystem.digital.gov/design-tokens/) are the USWDS design tokens that serve as the foundation for all design system styles. Each [token](https://designsystem.digital.gov/design-tokens/) is also a documentation link. Consult the [Design tokens section](https://designsystem.digital.gov/design-tokens/) for more information on tokens and how to use them in USWDS.

| Utility | Mixin | Accepted values |
| --- | --- | --- |
| .grid-container .grid-container-`container size` | @include grid-container; @include grid-container("tablet"); | card, card-lg, mobile, mobile-lg, tablet, tablet-lg, desktop, desktop-lg, or widescreen |
| .grid-row | @include grid-row; | - |
| .grid-col .grid-col-`column count` | @include grid-col; @include grid-col(6); @include grid-col("auto"); | auto, fill, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 |
| .grid-gap .grid-gap-`gap size` | @include grid-gap; @include grid-gap("lg"); | sm, md, lg, 0, 2px, 05, 1, 2, 3, 4, 5, 6 |
| .grid-offset-`column count` | @include grid-offset(4); | none, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 |

### Using utility mixins

*   Use single-quoted strings in utility mixins. Do not quote numbers or px values, with the exception of half (`05`) values like `'05'`, `'105'`, and `'205'` which should be treated as strings.
*   String tokens for half values (`05`) and negative values (like `neg-1`)may also be written with their unquoted number token equivalent: `0.5`, `1.5`, `2.5`, `2.5`, `-1`, `-1.5`, etc
*   If multiple utilities share the same prefix (ex: `.text-` or `.flex-`) or a single utility accepts multiple kinds of values (ex: `.border` accepts both border weight and border color), their shared mixin can accept multiple comma-separated values: `u-text('primary-darkest', 'no-underline', 'bold')` or `u-border-top(2px, 'accent-warm')`.
*   Output any utility mixin as `!important` by appending `!important` to the mixin’s argument list: `u-bg('red-warm-50v', !important)`.

## Advanced settings

### Responsive variants

Add a responsive breakpoint prefix separated with a `:` to target a utility at a responsive breakpoint and higher, following a mobile-first methodology.

#### Example

.tablet:padding-y-2

#### Output

@media screen and (min-width: 640px) {
  .tablet\:padding-y-2 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}

Set up which breakpoints are available to USWDS utilities by setting the `$theme-utility-breakpoints` variable in your [USWDS settings configuration](https://designsystem.digital.gov/documentation/settings).

| Breakpoint name | Width | Default |
| --- | --- | --- |
| card | 160px | false |
| card-lg | 240px | false |
| mobile | 320px | false |
| mobile-lg | 480px | true |
| tablet | 640px | true |
| tablet-lg | 880px | false |
| desktop | 1024px | true |
| desktop-lg | 1200px | false |
| widescreen | 1400px | false |

## Latest updates

Meaningful code and guidance updates are listed in the following table:

| Date | USWDS version | Affects | Breaking | Description |
| --- | --- | --- | --- | --- |
| 2024-11-06 | N/A | * Guidance | No | **Refactored guidance page.** Improved layout for easier scanning and consistency across other utility pages. More information: [uswds-site#2276](https://github.com/uswds/uswds-site/pull/2276) |
| 2022-03-11 | N/A | * Guidance * Styles | No | **Updated value of `tablet-lg` from `800px` to `880px`.** More information: [uswds-site#1474](https://github.com/uswds/uswds-site/pull/1474) |
| 2021-12-02 | N/A | * Guidance | No | **Updated value of `desktop` from `1040px` to `1024px`.** More information: [uswds-site#1361](https://github.com/uswds/uswds-site/pull/1361) |
