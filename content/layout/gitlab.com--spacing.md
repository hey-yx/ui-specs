---
title: "GitLab Pajamas · Foundation · Spacing 间距"
source: https://design.gitlab.com/product-foundations/spacing/
section: layout
tag: "规范"
fetched: 2026-11-08
status: full
id: gitlab-layout-spacing
publisher: "GitLab"
---

# GitLab Pajamas · Foundation · Spacing 间距

> 来源：[https://design.gitlab.com/product-foundations/spacing/](https://design.gitlab.com/product-foundations/spacing/)

---

All GitLab components follow an 8px spacing system. We’ve defined this as our memorable base number to build upon in order to establish spatial values that are utilized by every component. By following a set spatial convention, we decrease design complexity while increasing consistency across the application.

## Geometric progression

We use 8px as the base for determining our spacial system. In order to create a scale that offers flexibility in spacing without providing an abundance of choices, we’ve defined a set of values using geometric progression: `8 * 2^n`. We have augmented the progression in order to provide the flexibility that a complex application needs to accommodate a large amount of content. To do this, we’ve added values after 16px using `n * 1.5`, where `n` is the previous value from the geometric progression.

### 12px outlier

We include 12px as one of our measures, but it should only be reserved for right and left padding of horizontal tabs, buttons, and form elements. This special padding amount allows for better alignment of stacked items while giving elements enough room to breathe. 12px should not be using for any other measurement other than those defined here.

## Standard spacing guidelines

`2px` or `4px` is used for spacing within a component.

（间距示例见原文）

`8px` is used to separate related elements.

（间距示例见原文）

`16px` is used to separate unrelated elements.

（间距示例见原文）

`24px` is used to separate sub-sections of content.

（间距示例见原文）

`32x` is used to separate sections of content.

（间距示例见原文）

## Design tokens

The table is based on the configuration of `1rem = 16px`.

| Design token         | Value      | Pixel size |
| -------------------- | ---------- | ---------- |
| `spacing-scale.0`    | `0`        | `0`        |
| `spacing-scale.px`   | `1px`      | `1px`      |
| `spacing-scale.1`    | `0.125rem` | `2px`      |
| `spacing-scale.2`    | `0.25rem`  | `4px`      |
| `spacing-scale.2-5`  | `0.375rem` | `6px`      |
| `spacing-scale.3`    | `0.5rem`   | `8px`      |
| `spacing-scale.4`    | `0.75rem`  | `12px`     |
| `spacing-scale.5`    | `1rem`     | `16px`     |
| `spacing-scale.6`    | `1.5rem`   | `24px`     |
| `spacing-scale.7`    | `2rem`     | `32px`     |
| `spacing-scale.8`    | `2.5rem`   | `40px`     |
| `spacing-scale.9`    | `3rem`     | `48px`     |
| `spacing-scale.10`   | `3.5rem`   | `56px`     |
| `spacing-scale.11`   | `4rem`     | `64px`     |
| `spacing-scale.11-5` | `4.5rem`   | `72px`     |
| `spacing-scale.12`   | `5rem`     | `80px`     |
| `spacing-scale.13`   | `6rem`     | `96px`     |
| `spacing-scale.15`   | `7.5rem`   | `120px`    |
| `spacing-scale.18`   | `9rem`     | `144px`    |
| `spacing-scale.20`   | `10rem`    | `160px`    |

View the [design tokens directory](https://design.gitlab.com/product-foundations/design-tokens-directory) for spacing transforms and utilities.

## Code reference

Spacing utilities resolve to `spacing-scale` design tokens, so every value on the page comes from the same 8px-based scale. This section covers how to apply those values: which property to use, and where the value belongs in the markup.

### Utilities

| Property          | Utilities                                                                  |
| ----------------- | -------------------------------------------------------------------------- |
| `padding`         | `gl-p-*`, `gl-px-*`, `gl-py-*`, `gl-pt-*`, `gl-pr-*`, `gl-pb-*`, `gl-pl-*` |
| `margin`          | `gl-m-*`, `gl-mx-*`, `gl-my-*`, `gl-mt-*`, `gl-mr-*`, `gl-mb-*`, `gl-ml-*` |
| `gap`             | `gl-gap-*`, `gl-gap-x-*`, `gl-gap-y-*`                                     |
| Negative `margin` | `-gl-mt-*`, `-gl-mx-*`, and so on — the `-` goes before the prefix         |

The suffix is the token name, not a pixel value: `gl-p-5` is `spacing-scale.5`. For each step's value, see [spacing design tokens](#design-tokens).

Two steps need care. `gl-p-4` is `12px`, which is [reserved](#12px-outlier) for the horizontal padding of tabs, buttons, and form elements, so don't reach for it as a general step between `8px` and `16px`. Steps past `7` are layout-level values.

### Take values from the scale

```vue
<div class="gl-mb-6 gl-p-5">…</div>
```

```vue
<div class="gl-mb-[22px] gl-p-[15px]" style="margin-top: 10px">…</div>
```

Off-scale values can't line up with anything else on the page, and they don't move when the scale does. [Arbitrary values](https://design.gitlab.com/product-foundations/css#dont-use-arbitrary-values) are also an ESLint error, and inline `style` attributes bypass the design system altogether.

### Prefer gap over margins between siblings

`gap` puts the rhythm of a list in one place, on the container, and only between items.

```vue
<!-- live-example expanded title="Gap on the container" -->
<div class="gl-flex gl-flex-col gl-gap-3">
  <gl-card>Pipelines</gl-card>
  <gl-card>Jobs</gl-card>
  <gl-card>Schedules</gl-card>
</div>
```

```vue
<!-- live-example expanded title="Margin on each child" -->
<div class="gl-border gl-border-dashed">
  <gl-card class="gl-mb-3">Pipelines</gl-card>
  <gl-card class="gl-mb-3">Jobs</gl-card>
  <gl-card class="gl-mb-3">Schedules</gl-card>
</div>
```

The dashed border shows the trailing `8px` the margins leave under the last card. They also have to be repeated for every new item, and need a `:last-child` exception or a `!gl-mb-0` override to remove. When items are rendered in a loop, the exception usually gets forgotten.

`gl-space-y-*` also exists, but it works by applying `margin-top` to every child except the first. Prefer `gl-gap-*` on a flex or grid container: it has no effect on the children, so it survives reordering, wrapping, and conditional items.

### Put padding on the container

Padding is the container's own inset. Spacing content away from an edge with margins on the content instead pushes the decision onto every child.

```vue
<!-- live-example expanded title="Padding on the container" -->
<section class="gl-border gl-rounded-lg gl-p-5">
  <h2 class="gl-heading-3">Pipelines</h2>
  <p class="gl-m-0">Runs on every push to a protected branch.</p>
</section>
```

```vue
<!-- live-example expanded title="Margins on the content" -->
<section class="gl-border gl-rounded-lg">
  <h2 class="gl-heading-3 gl-mx-5 gl-mt-5">Pipelines</h2>
  <p class="gl-mx-5 gl-mb-5">Runs on every push to a protected branch.</p>
</section>
```

Margins can also collapse or escape the container in ways padding can't, so the same value produces a different result depending on what's around it.

### Don't use spacing to align

A margin that exists to nudge an element into position is a layout problem solved in the wrong place. It's tied to the current font size, icon size, and line height, so it drifts the moment any of those change.

```vue
<!-- live-example expanded title="Aligned with items-center" -->
<div class="gl-flex gl-items-center gl-gap-2">
  <gl-icon name="clock" />
  <span>Scheduled</span>
</div>
```

```vue
<!-- live-example expanded title="Aligned with a margin" -->
<div class="gl-flex gl-gap-2">
  <gl-icon name="clock" class="gl-mt-1" />
  <span>Scheduled</span>
</div>
```

Use the [alignment properties](https://design.gitlab.com/product-foundations/layout#alignment) for alignment, and spacing utilities for space.

### Common pitfalls

#### Two spacing utilities for the same property

```vue
<!-- live-example expanded title="Conflicting margins" -->
<div class="gl-border gl-border-dashed">
  <div class="gl-m-0 gl-m-4 gl-bg-strong gl-p-3">Margin</div>
</div>
```

The dashed border marks the parent, so the space around the child is the margin that won: `12px`, not `0`. `gl-m-0` is emitted before `gl-m-4` in the compiled stylesheet, and writing the two class names in either order changes nothing. The same applies to a shorthand and a longhand together, such as `gl-p-0 gl-px-3` — write only the utilities you need. See [declare each property once](https://design.gitlab.com/product-foundations/css#declare-each-property-once) for how your editor can flag these as you type.

#### Gap without a flex or grid container

```vue
<!-- live-example expanded title="Gap without a flex container" -->
<div class="gl-gap-3">
  <gl-badge>Draft</gl-badge>
  <gl-badge variant="warning">Blocked</gl-badge>
</div>
```

The only space between the badges is the whitespace between the tags: `gap` applies to flex, grid, and multi-column containers only. On a block container it does nothing. Add `gl-flex` or `gl-grid`.

#### Spacing on a visually hidden element

```vue
<span class="gl-sr-only gl-mb-3">3 open issues</span>
```

`gl-sr-only` takes the element out of the visual layout and sets its own margin, so the spacing utility has no effect and misleads the next reader.

#### Negative margins to cancel a component's spacing

```vue
<gl-card class="-gl-mt-5">…</gl-card>
```

A negative margin tuned to another element's padding breaks silently when that padding changes, and it can pull content over a neighboring element's focus ring. Use negative margins for deliberate optical adjustments, such as pulling a full-bleed element out of its container's padding — not to correct spacing you disagree with. If a component's spacing is wrong for the design, raise it with the design system team.
