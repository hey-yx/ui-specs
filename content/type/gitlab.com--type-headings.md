---
title: "GitLab Pajamas · Foundation · Headings 标题"
source: https://design.gitlab.com/product-foundations/type-headings/
section: type
tag: "规范"
fetched: 2026-11-08
status: full
id: gitlab-type-headings
publisher: "GitLab"
---

# GitLab Pajamas · Foundation · Headings 标题

> 来源：[https://design.gitlab.com/product-foundations/type-headings/](https://design.gitlab.com/product-foundations/type-headings/)

---

## Heading levels

```vue
<!-- live-example -->
<h1 class="gl-heading-display">Heading display</h1>
<h1 class="gl-heading-1">Heading 1</h1>
<h2 class="gl-heading-2">Heading 2</h2>
<h3 class="gl-heading-3">Heading 3</h3>
<h4 class="gl-heading-4">Heading 4</h4>
<h5 class="gl-heading-5">Heading 5</h5>
<h6 class="gl-heading-6">Heading 6</h6>
```

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=72017-103312&mode=design&t=CutnGvd6oRdmrYue-4)

## Guidelines

### Semantics

- Every page should have a level 1 (`h1`) heading. It can be visually hidden if the context of the page is clear for all users, but it must be present in the DOM.
- Headings should not skip levels, with the following exceptions:
  - When an alert, or other messaging component, gets inserted before the main page content. These components are designed to use a level 2 (`h2`) heading.
  - When a heading is used to identify a region, like navigation. Generally, a level 2 (`h2`) heading is used.
  - In user-generated Markdown content a user can order headings as they like. The visual appearance of a heading is the only guide provided for choosing the correct hierarchy.
- Styles correspond with semantics by default, for example, an `h3` is larger and has more visual weight than an `h4`.

### Contextual adjustments

By default, heading levels are mapped to the heading scale. However, in some cases, visual hierarchy can be established aside from [semantics](#semantics). For example:

In an [alert](https://design.gitlab.com/components/alert), its container already has sectioning affordances like color, spacing, and iconography. Because of this, a level 2 heading in the alert doesn't need the same emphasis as a level 2 heading for a content section elsewhere on the page.

```vue
<!-- live-example -->
<h2 class="gl-alert-title">Alert title</h2>
```

Similarly, in a [card](https://design.gitlab.com/components/card), the properties of the card itself indicate a section. Because of this, a level 3 heading may not require the same sectioning effect as a level 3 heading in body content.

```vue
<!-- live-example -->
<h2 class="gl-heading-scale-500">Card title</h2>
```

When in doubt, use the scale by default, consider the full page context, and reference existing patterns.

#### Display heading

A display style can be applied to a level 1 heading to emphasize the text in a more promotional manner. The larger size and weight creates a stronger visual anchor compared to other text on the page.

```vue
<!-- live-example -->
<h1 class="gl-heading-display">Display heading</h1>
```

## Code reference

Heading mixins and utility classes:

- `gl-heading-{1-6}` mixins and classes are the preferred approach to implementing heading typography. Usage should align with semantic heading levels, for example, `<h2 class="gl-heading-2">...</h2>`.
- `gl-heading-display` class is available to create a [display heading](#display-heading).
- `gl-heading-scale-{100-800}` mixins and classes are available for [contextual adjustments](#contextual-adjustments) where the semantic heading scale doesn't provide the desired visual hierarchy. However, the recommendation is to use the default scale and avoid contextual adjustments as much as possible.

Margins:

The `gl-heading-{1-6}` and `gl-heading-display` mixins and classes provide a default `margin-bottom` and remove `margin-top`. In order to opt-out of the margin, add a `!gl-mb-0` class:

```vue
<!-- live-example -->
<h2 class="gl-heading-2">Heading 2 with margin</h2>
<h2 class="gl-heading-2 !gl-mb-0">Heading 2 without margin</h2>
```

`gl-heading-scale-{100-800}` mixins and classes do not provide margins.

### Use the heading classes for headings

A `gl-heading-*` class sets font size, weight, line height, letter spacing, color, and margins from heading tokens in one place.

```vue
<!-- live-example expanded title="Heading class" -->
<h2 class="gl-heading-2">Pipeline status</h2>
```

```vue
<!-- live-example expanded title="Heading rebuilt by hand" -->
<h2 class="gl-text-600 gl-font-bold gl-leading-32 gl-text-heading">Pipeline status</h2>
```

The second example reproduces the heading definition by hand. It misses letter spacing and margins, and it won't follow a change to the heading tokens — so this heading gradually stops matching every other level 2 heading in the product.

Match the class to the element's level, and keep the level correct for the document outline. When the visual hierarchy needs to differ from the semantics — a title inside a card or an alert — use a `gl-heading-scale-*` class on the correct element rather than changing the element. See [contextual adjustments](#contextual-adjustments).

```vue
<!-- live-example expanded title="Heading scale on a level 3 heading" -->
<h3 class="gl-heading-scale-500">Card title</h3>
```

### Don't restate what a heading class already sets

`gl-heading-*` classes are Tailwind components, and utilities are emitted after components. So a utility always wins over the heading class, regardless of where it sits in the class attribute.

```vue
<h2 class="gl-heading-2 gl-font-bold gl-text-heading">Pipeline status</h2>
```

`gl-font-bold` and `gl-text-heading` here are redundant — the heading class sets both. They're worse than redundant: the heading's weight and color now come from two different tokens, so a change to `heading.2.font.weight` won't reach this element.

The one exception is the heading's `margin-bottom`, which you opt out of with `!gl-mb-0` as described above. That needs `!` precisely because the heading class sets the margin too.

### Using a heading class on a non-heading

```vue
<!-- live-example expanded title="Heading class on a span" -->
<span class="gl-heading-3">Filters</span>
```

If the text labels a section, use a heading element so it appears in the document outline. If it isn't a heading, use a text size and weight instead — `gl-heading-*` also brings heading margins and color with it.
