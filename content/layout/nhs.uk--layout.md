---
title: "NHS.UK · Foundation · Layout 布局"
source: https://service-manual.nhs.uk/design-system/styles/layout
section: layout
tag: "规范"
fetched: 2026-10-20
status: full
id: layout-20
publisher: "NHS.UK"
---

# NHS.UK · Foundation · Layout 布局

> 来源：[https://service-manual.nhs.uk/design-system/styles/layout](https://service-manual.nhs.uk/design-system/styles/layout)

---

## Styles – Layout

Structure your page content and elements.

## Screen size

Design for mobile first using a single-column layout and work up to wider layouts. Most visitors to the NHS website are on a mobile device, so it's our first consideration.

The default maximum page width is 960px, but you can make it wider if your content requires it. But lines of text content should be no longer than 70 to 80 characters so that it's easy to read.

### Responsive breakpoints

*   mobile: 320px
*   tablet: 641px
*   desktop: 769px
*   large desktop: 990px

## Containers

To set up your layout, you will need to create 2 wrappers. The first wrapper is a container which sets the maximum width of the content but does not add any vertical margin or padding.

You can choose from a fixed-width container (960px) or a fluid-width container (which spans the entire width of the viewport).

### Container

Use `nhsuk-width-container` for a container with a maximum width of 960px.

```
<div class="nhsuk-width-container">
  <!-- Main content wrapper here -->
</div>
```

### Fluid container

Use `nhsuk-width-container-fluid` for a full width container, spanning the entire width of the viewport.

```
<div class="nhsuk-width-container-fluid">
  <!-- Main content wrapper here -->
</div>
```

## Main content

The second wrapper is a `main` element with the `nhsuk-main-wrapper` class, which gives responsive padding to the top and bottom of the page and will be the wrapper for the main content of the page.

There should be only one `main` element and it should have a unique id of `maincontent`, which allows keyboard-only users to skip to the main content on a page with the [skip link component](https://service-manual.nhs.uk/design-system/components/skip-link).

```
<div class="nhsuk-width-container">
  <main class="nhsuk-main-wrapper" id="maincontent">
    <!-- Grid row wrapper here -->
  </main>
</div>
```

The vertical padding can be made larger or smaller by using the `nhsuk-main-wrapper--l` or `nhsuk-main-wrapper--s` modifier classes. We recommend using smaller vertical padding on transactional services.

## Grid system

The grid is structured with a `nhsuk-grid-row` wrapper which acts as a row to contain your grid columns.

You can add columns inside this wrapper to create your layout. To define your columns, add the class beginning with `nhsuk-grid-column-` to a new container followed by the width, for example `nhsuk-grid-column-one-third`, to make it the width you want.

### Full width

```
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-full">
    <p>nhsuk-grid-column-full</p>
  </div>
</div>
```

### One-half

```
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-one-half">
    <p>nhsuk-grid-column-one-half</p>
  </div>
</div>
```

### Two-thirds

```
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-two-thirds">
    <p>nhsuk-grid-column-two-thirds</p>
  </div>
</div>
```

### One-third

```
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-one-third">
    <p>nhsuk-grid-column-one-third</p>
  </div>
</div>
```

### Three-quarters

```
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-three-quarters">
    <p>nhsuk-grid-column-three-quarters</p>
  </div>
</div>
```

### One-quarter

```
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-one-quarter">
    <p>nhsuk-grid-column-one-quarter</p>
  </div>
</div>
```

### Nested grids

```
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-two-thirds">
    <p>nhsuk-grid-column-two-thirds</p>
    <div class="nhsuk-grid-row">
      <div class="nhsuk-grid-column-one-half">
        <p>nhsuk-grid-column-one-half</p>
      </div>
      <div class="nhsuk-grid-column-one-half">
        <p>nhsuk-grid-column-one-half</p>
      </div>
    </div>
  </div>
</div>
```

## Width override classes

If you need to constrain the width of an element independently of the grid system, you can use width override classes.

The width override classes start with `nhsuk-u-`. The second part of the class name indicates the width on larger screen sizes.

For example:

*   `nhsuk-u-width-one-half` will apply a width of one-half
*   `nhsuk-u-width-two-thirds` will apply a width of two-thirds

```
<h3 class="nhsuk-heading-m">Full</h3>

<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="full-name-full">
    Full name
  </label>
  <input class="nhsuk-input nhsuk-u-width-full" id="full-name-full" name="full-name" type="text">
</div>

<h3 class="nhsuk-heading-m">Three-quarters</h3>

<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="full-name-three-quarters">
    Full name
  </label>
  <input class="nhsuk-input nhsuk-u-width-three-quarters" id="full-name-three-quarters" name="full-name" type="text">
</div>

<h3 class="nhsuk-heading-m">Two-thirds</h3>

<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="full-name-two-thirds">
    Full name
  </label>
  <input class="nhsuk-input nhsuk-u-width-two-thirds" id="full-name-two-thirds" name="full-name" type="text">
</div>

<h3 class="nhsuk-heading-m">One-half</h3>

<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="full-name-one-half">
    Full name
  </label>
  <input class="nhsuk-input nhsuk-u-width-one-half" id="full-name-one-half" name="full-name" type="text">
</div>

<h3 class="nhsuk-heading-m">One-third</h3>

<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="full-name-one-third">
    Full name
  </label>
  <input class="nhsuk-input nhsuk-u-width-one-third" id="full-name-one-third" name="full-name" type="text">
</div>

<h3 class="nhsuk-heading-m">One-quarter</h3>

<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="full-name-one-quarter">
    Full name
  </label>
  <input class="nhsuk-input nhsuk-u-width-one-quarter" id="full-name-one-quarter" name="full-name" type="text">
</div>
```

## Common layouts

### Two-thirds in a fixed-width container

```
<div class="nhsuk-width-container">
  <main class="nhsuk-main-wrapper" id="maincontent">
    <div class="nhsuk-grid-row">
      <div class="nhsuk-grid-column-two-thirds">
        <h2>Two-thirds column</h2>
      </div>
    </div>
  </main>
</div>
```

### One-third and two-thirds in a fluid-width container

```
<div class="nhsuk-width-container-fluid">
  <main class="nhsuk-main-wrapper" id="maincontent">
    <div class="nhsuk-grid-row">
      <div class="nhsuk-grid-column-one-third">
        <h2>One-third column</h2>
      </div>
      <div class="nhsuk-grid-column-two-thirds">
        <h2>Two-thirds column</h2>
      </div>
    </div>
  </main>
</div>
```

## Layout override classes

### Reading width

To make it easy to read, lines of text should be no longer than 70 to 80 characters.

When using the fluid-width container or wider grid columns, wrap text content with `nhsuk-u-reading-width` to apply a maximum width and limit the number of characters per line.

```
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-full">
    <div class="nhsuk-u-reading-width">
      <p>This is example content which would exceed 70-80 characters per line, if used within a full width column. The .nhsuk-u-reading-width override class will apply a maximum width and limit the number of characters per line.</p>
    </div>
  </div>
</div>
```

### Tablet and mobile specific grid classes

By default, grid column widths are applied on desktop (769px) and above. These override classes will enforce column widths on all screen sizes.

To set your column width, add the `nhsuk-u-` override class followed by the width to an existing grid column. For example, `nhsuk-u-one-half` will set your column width to be one-half on all screen sizes.

```
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-one-half nhsuk-u-one-half">
    <p>nhsuk-grid-column-one-half nhsuk-u-one-half</p>
  </div>
</div>
```

### Tablet specific grid classes

These override classes will enforce column widths on tablet (641px) and above.

To set your column width, add the `nhsuk-u-` override class followed by the width and the suffix `-tablet` to an existing grid column. For example, `nhsuk-u-one-third-tablet` will set your column width to be one-third on screen sizes tablet and above.

```
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-one-third nhsuk-u-one-third-tablet">
    <p>nhsuk-grid-column-one-third nhsuk-u-one-third-tablet</p>
  </div>
</div>
```
