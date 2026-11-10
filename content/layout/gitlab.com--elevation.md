---
title: "GitLab Pajamas · Foundation · Elevation 层级"
source: https://design.gitlab.com/product-foundations/elevation/
section: layout
tag: "规范"
fetched: 2026-11-08
status: full
id: gitlab-layout-elevation
publisher: "GitLab"
---

# GitLab Pajamas · Foundation · Elevation 层级

> 来源：[https://design.gitlab.com/product-foundations/elevation/](https://design.gitlab.com/product-foundations/elevation/)

---

Elevation addresses dimensional hierarchy and content relationships — not just top-down or scale, but also depth (z-index) and dynamic changes based on state or overflow. Visual styles and affordance that indicate depth, content boundaries, and state are also encompassed within layers.

## Shadows

```vue
<!-- live-example -->
<div class="gl-grid md:gl-grid-cols-3 gl-gap-5 gl-text-base gl-p-8 gl-bg-subtle">
  <div class="gl-grid gl-place-items-center gl-p-5 gl-rounded-lg gl-bg-overlap gl-shadow-sm">
    sm
  </div>
  <div class="gl-grid gl-place-items-center gl-p-5 gl-rounded-lg gl-bg-overlap gl-shadow-md">
    md
  </div>
  <div class="gl-grid gl-place-items-center gl-p-5 gl-rounded-lg gl-bg-overlap gl-shadow-lg">
    lg
  </div>
</div>
```

### Small

Surfaces that need an indication they can be manually interacted with. For example, cards in issue boards.

- Passive, defines surface bounds when on a default background.
- Indicates surface can be interacted with.

```vue
<div class="gl-shadow-sm">…</div>
```

**Used in:** Elements with shadow boundaries

### Medium

Surfaces that need boundary definition and appear on hover. For example, [popovers](https://design.gitlab.com/components/popover).

- Surfaces that appear on hover.
- Components layered above other components. Stacked layers and static components that have content that scrolls beneath.

```vue
<div class="gl-shadow-md">…</div>
```

**Used in:** [popover](https://design.gitlab.com/components/popover), [date picker](https://design.gitlab.com/components/date-picker), [dropdown disclosure](https://design.gitlab.com/components/dropdown-disclosure), [dropdown combobox](https://design.gitlab.com/components/dropdown-combobox)
, navigation flyouts, stacked elevation components, cards when dragged

### Large

Large surfaces that present additional context to the user.

- Passive, defines large surfaces presented as additional context to the user.

```vue
<div class="gl-shadow-lg">…</div>
```

**Used in:** [modal](https://design.gitlab.com/components/modal), [drawer](https://design.gitlab.com/components/drawer)

## Stacking & overflowing layers

A layer that appears above another with an existing elevation should follow the stacking guidelines. By default, a stacked layer will use the medium shadow when content scrolls beneath it.

## Interactive layers

A layer that's being moved or dragged uses the large shadow to create a greater sense of depth in the UI and differentiates the element from other elements that may have an existing elevation.

## Code reference

Elevation is a set of three shadows, not a free parameter. Each one has a meaning — see [shadows](#shadows) — and picking the one that matches the surface's role is what keeps depth readable across the product.

### Utilities

| Purpose                 | Utilities                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------ |
| `box-shadow`            | `gl-shadow-sm`, `gl-shadow-md`, `gl-shadow-lg`, `gl-shadow-none`                     |
| `filter: drop-shadow()` | `gl-drop-shadow-sm`, `gl-drop-shadow-md`, `gl-drop-shadow-lg`, `gl-drop-shadow-none` |
| Stacking                | `gl-z-0` to `gl-z-4`, `gl-z-200`, `gl-z-9999`                                        |
| Focus ring              | `gl-focus`, `gl-focus-inset`                                                         |

`gl-shadow` on its own is the medium shadow. Prefer the explicit `gl-shadow-md` so the intent is readable.

The preset also carries a set of legacy inset shadows such as `gl-shadow-inner-1-gray-100` and `gl-shadow-x0-y2-b4-s0`. They're hard-coded values built on legacy color variables, so they don't respond to color mode. Don't add new usages: for a boundary use a [border](https://design.gitlab.com/product-foundations/border#code-reference), and for depth use one of the three shadows.

### Pick the shadow that matches the surface

```vue
<!-- live-example expanded color-mode="dark" title="Shadow from a token" -->
<div class="gl-rounded-lg gl-bg-overlap gl-p-5 gl-shadow-md">Filter results</div>
```

```vue
<!-- live-example expanded color-mode="dark" title="Hand-written shadow" -->
<div class="gl-rounded-lg gl-bg-overlap gl-p-5" style="box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2)">
  Filter results
</div>
```

A hand-written shadow uses a color that doesn't come from the shadow token, so it doesn't change with the color mode, and its blur and offset put the element at a depth nothing else in the product shares. Shadow color in particular has to differ between modes to read as depth at all.

Pair a shadow with the surface it belongs on. An overlapping surface uses `gl-bg-overlap`, which is designed to work with a shadow — see [overlap](https://design.gitlab.com/product-foundations/layout#overlap).

### Use `box-shadow` unless you need the silhouette

`gl-shadow-*` sets `box-shadow` and follows the element's border box. `gl-drop-shadow-*` sets `filter`, which follows the rendered shape, including pseudo-elements — the reason the [tooltip](https://design.gitlab.com/components/tooltip), [popover](https://design.gitlab.com/components/popover), and [dropdown](https://design.gitlab.com/components/dropdown-overview) tips use it.

```vue
<div class="gl-shadow-md">…</div>
```

```vue
<div class="gl-drop-shadow-md">…</div>
```

Default to `gl-shadow-md`. Reach for `gl-drop-shadow-*` only when a pseudo-element such as an arrow or tip has to be inside the shadow. `filter` also establishes a containing block for fixed and absolutely positioned descendants and creates a new stacking context, so switching to it can move child elements you weren't intending to touch.

### Don't use a shadow as a boundary

A shadow is depth, not an edge. In forced-colors modes shadows are dropped, so an element whose only boundary is a shadow loses its shape entirely.

```vue
<!-- live-example expanded title="Shadow with a border" -->
<div class="gl-border gl-rounded-lg gl-bg-overlap gl-p-5 gl-shadow-md">Filter results</div>
```

```vue
<!-- live-example expanded title="Shadow as the only boundary" -->
<div class="gl-rounded-lg gl-bg-overlap gl-p-5 gl-shadow-md">Filter results</div>
```

If the surface needs to be distinguishable from what's behind it, give it a border or a background as well as the shadow. See [containing an element](https://design.gitlab.com/product-foundations/border#containing-an-element).

### Stack deliberately

Depth is a shadow and a stacking order together. A shadow with no `z-index` renders behind whatever comes later in the document; a `z-index` with no shadow reads as a flat overlap.

```vue
<div class="gl-sticky gl-top-0 gl-z-1 gl-bg-overlap gl-shadow-md">…</div>
```

`z-index` needs a positioned element and only orders siblings within the same stacking context. See [stacking](https://design.gitlab.com/product-foundations/layout#stacking) before raising a value.

### Don't hand-roll a focus ring

The focus ring is a shadow built from focus ring tokens. `gl-focus` applies it, and `gl-focus-inset` applies the inset variant for elements whose ring would otherwise be clipped.

```vue
<!-- live-example expanded title="Focus ring from tokens" -->
<div class="gl-rounded-md gl-bg-subtle gl-p-3 focus:gl-focus" tabindex="0">Click or tab to me</div>
```

```vue
<!-- live-example expanded title="Focus ring from a shadow" -->
<div class="gl-rounded-md gl-bg-subtle gl-p-3 focus:gl-shadow-md" tabindex="0">
  Click or tab to me
</div>
```

Prefer a component that already handles focus. When you're building a custom interactive element, use `gl-focus` rather than a shadow of your own: it carries the correct two-color ring, in the right widths, in both modes. Never remove a focus style without replacing it with an equally visible one.

### Common pitfalls

#### Two shadow utilities

```vue
<div class="gl-shadow-lg gl-shadow-md">…</div>
```

Both set `box-shadow`, so one is dead. Decide which depth the surface is at. See [declare each property once](https://design.gitlab.com/product-foundations/css#declare-each-property-once) for how your editor can flag these as you type.

#### A shadow on a surface that isn't elevated

```vue
<div class="gl-bg-default gl-shadow-md">…</div>
```

An in-flow section of a page isn't above anything. Group content with whitespace, a background, or a border; reserve shadows for surfaces that genuinely overlap, appear on hover, or are being dragged. Shadows on everything is how depth stops meaning anything.

#### Escalating shadow instead of fixing stacking

```vue
<div class="gl-shadow-lg">…</div>
```

If a dropdown looks flat against the content behind it, the problem is usually stacking order or an ancestor's `overflow`, not the size of the shadow. Increasing the shadow makes the element louder without putting it in front.
