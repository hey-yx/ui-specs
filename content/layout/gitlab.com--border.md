---
title: "GitLab Pajamas · Foundation · Border 边框"
source: https://design.gitlab.com/product-foundations/border/
section: layout
tag: "规范"
fetched: 2026-11-08
status: full
id: gitlab-layout-border
publisher: "GitLab"
---

# GitLab Pajamas · Foundation · Border 边框

> 来源：[https://design.gitlab.com/product-foundations/border/](https://design.gitlab.com/product-foundations/border/)

---

A border defines an edge. It creates containers for content and boundaries between interface elements. When you strategically use a border, it shapes how users perceive relationships within the interface. This happens even when it's barely visible or only appears in specific contexts. The key is knowing when a border helps organize information and when it adds unnecessary visual noise.

When visually defining content areas:

- Consider white space as an alternative to reduce visual complexity and maintain a clean interface.
- Keep frequently repeated and universal elements borderless to minimize visual noise and improve scanning.
- Use a border to group related information, making content relationships immediately clear.
- Apply border styling consistently within similar contexts to establish predictable visual patterns.
- Avoid placing borders in close proximity to prevent visual clutter and maintain focus on content.
- Avoid nesting bordered containers to prevent the "boxes within boxes" effect that adds unnecessary depth.

## Containing an element

Surrounding content with a visible border creates an explicit boundary for one or more of the following purposes:

- Making a view scannable so users can quickly identify distinct or dissimilar pieces of information.
- Creating a logical association between related content.
- Defining a clickable area for an interactive component or element.
- Drawing attention to important information or a call-to-action.

## Separating elements

Using a border on a single, common edge creates a divider between elements for one or more of the following purposes:

- Separating content sections within the same region or container (horizontal dividers).
- Distinguishing content or actions that are horizontally adjacent (vertical dividers).
- Creating visual breaks when space alone is insufficient.

## Properties

### Color

- A **default** border or divider color provides visual separation without drawing excessive attention. Use the default color in most places where visual separation is needed.
- A **subtle** border or divider color creates minimal visual separation. Use when division needs to be present but minimal.
- A **strong** border or divider color creates pronounced separation and emphasis. Use sparingly to highlight distinct elements.
- A **section** border color should only be used with a [section](https://design.gitlab.com/product-foundations/layout/#section) container.
- Some borders are transparent to account for space and provide the ability to have a visible border in high contrast system modes.

The following examples demonstrate how border colors appear on different backgrounds.

Some borders may not be visible on surfaces in both modes, test accordingly.

```vue
<!-- live-example -->
<div class="gl-grid gl-grid-cols-3 gl-gap-5 gl-text-base">
  <div class="gl-grid gl-place-items-center gl-gap-5 gl-rounded-lg gl-bg-default gl-p-5">
    on default
    <div class="gl-border-b gl-w-full gl-border-default"></div>
    <div class="gl-border-b gl-w-full gl-border-subtle"></div>
    <div class="gl-border-b gl-w-full gl-border-strong"></div>
    <div class="gl-border-b gl-w-full gl-border-section"></div>
  </div>
  <div class="gl-grid gl-place-items-center gl-gap-5 gl-rounded-lg gl-bg-subtle gl-p-5">
    on subtle
    <div class="gl-border-b gl-w-full gl-border-default"></div>
    <div class="gl-border-b gl-w-full gl-border-subtle"></div>
    <div class="gl-border-b gl-w-full gl-border-strong"></div>
    <div class="gl-border-b gl-w-full gl-border-section"></div>
  </div>
  <div class="gl-grid gl-place-items-center gl-gap-5 gl-rounded-lg gl-bg-strong gl-p-5">
    on strong
    <div class="gl-border-b gl-w-full gl-border-default"></div>
    <div class="gl-border-b gl-w-full gl-border-subtle"></div>
    <div class="gl-border-b gl-w-full gl-border-strong"></div>
    <div class="gl-border-b gl-w-full gl-border-section"></div>
  </div>
  <div class="gl-grid gl-place-items-center gl-gap-5 gl-rounded-lg gl-bg-overlap gl-p-5">
    on overlap
    <div class="gl-border-b gl-w-full gl-border-default"></div>
    <div class="gl-border-b gl-w-full gl-border-subtle"></div>
    <div class="gl-border-b gl-w-full gl-border-strong"></div>
    <div class="gl-border-b gl-w-full gl-border-section"></div>
  </div>
  <div class="gl-grid gl-place-items-center gl-gap-5 gl-rounded-lg gl-bg-section gl-p-5">
    on section
    <div class="gl-border-b gl-w-full gl-border-default"></div>
    <div class="gl-border-b gl-w-full gl-border-subtle"></div>
    <div class="gl-border-b gl-w-full gl-border-strong"></div>
    <div class="gl-border-b gl-w-full gl-border-section"></div>
  </div>
</div>
```

### Radius

Border radius controls the curvature of element corners, from sharp angles (zero radius) to smooth curves. This curvature helps the eye move more naturally around shapes and makes interfaces feel less rigid. Beyond visual appeal, increasing border radius creates negative space (pockets of empty space at the corners) that make elements appear less cramped without using more screen space. This perceived spacing is especially valuable in dense interfaces where actual space is limited.

When manually choosing what border radius to apply (in the case that it isn't predefined on an element or component), make nested elements with border radius concentric using the following formula:

`outer radius - padding = inner radius`

  
  
  
  

The following radius values are available as design tokens. Which one to use depends on where an element sits in the nesting hierarchy, not on its size or visual weight. The outermost surface takes the largest radius, and each element nested inside it steps down using the concentric formula above. Elements at the same level should generally share a radius when not already defined as part of a component or layout spec.

| Design token         | Use                                                                                                                                                                                                                                                                                                                                                                             |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `border.radius.full` | Create circle and pill shapes (separate from the concentric radius hierarchy) in components like [avatars](https://design.gitlab.com/components/avatar) (circle), [labels](https://design.gitlab.com/components/label) (pill), [toggles](https://design.gitlab.com/components/toggle) (pill), and [progress bars](https://design.gitlab.com/components/progress-bar) (pill).                                                                                                        |
| `border.radius.3xl`  | A container that wraps a `2xl` container, or a large, page-level standalone container.                                                                                                                                                                                                                                                                                          |
| `border.radius.2xl`  | Components and containers that appear above the main page content, like [modals](https://design.gitlab.com/components/modal) and [drawers](https://design.gitlab.com/components/drawer).                                                                                                                                                                                                                                          |
| `border.radius.xl`   | Regions on the page that group content and components, such as [cards](https://design.gitlab.com/components/card).                                                                                                                                                                                                                                                                                       |
| `border.radius.lg`   | Most components: [buttons](https://design.gitlab.com/components/button), [text inputs](https://design.gitlab.com/components/text-input) and other form controls, [dropdowns](https://design.gitlab.com/components/dropdown-overview), [alerts](https://design.gitlab.com/components/alert), [popovers](https://design.gitlab.com/components/popover), [tooltips](https://design.gitlab.com/components/tooltip), and [toasts](https://design.gitlab.com/components/toast). They share a radius for component consistency irrespective of size or nesting level. |
| `border.radius.md`   | Child elements in a component. This is the value behind `border.radius.default`. Items inside a [dropdown](https://design.gitlab.com/components/dropdown-overview) and [tokens](https://design.gitlab.com/components/token) inside a filtered search input both use it.                                                                                                                                                           |
| `border.radius.sm`   | Child elements in an `md` element.                                                                                                                                                                                                                                                                                                                                              |
| `border.radius.xs`   | The innermost step of the hierarchy, for a child element in an `sm` element. At this size the corner reads almost as square, and the design token exists to keep it concentric with its parent.                                                                                                                                                                                 |
| `border.radius.none` | Elements with edges that sit flush with a container's edge, where the container's radius does the clipping. This covers things like a list item that spans the full width of a dropdown, an image that bleeds to the edge of its container, and the shared edges inside a [button group](https://design.gitlab.com/components/button-group).                                                             |

### Width

All borders are `1px` with the exception of some components that use a `2px` width for different states or emphasis.

## Design tokens

（数值表见原文）

## Code reference

A border needs three properties to be visible: a width, a style, and a color. The preset's `gl-border` utilities give you all three, and the width-only utilities give you one — which is the source of most "the border isn't showing" bugs.

### Utilities

| Purpose           | Utilities                                                                                                                                                                           |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Border, all sides | `gl-border`                                                                                                                                                                         |
| Border, one side  | `gl-border-t`, `gl-border-r`, `gl-border-b`, `gl-border-l`                                                                                                                          |
| Width             | `gl-border-0`, `gl-border-1`, `gl-border-2`, and per-side variants such as `gl-border-b-2`                                                                                          |
| Style             | `gl-border-solid`, `gl-border-none`, and per-side variants such as `gl-border-b-solid`                                                                                              |
| Color             | `gl-border-default`, `gl-border-subtle`, `gl-border-strong`, `gl-border-section`, `gl-border-feedback-*`, and per-side variants such as `gl-border-b-section`                       |
| Radius            | `gl-rounded-none`, `gl-rounded-xs`, `gl-rounded-sm`, `gl-rounded-md`, `gl-rounded-lg`, `gl-rounded-xl`, `gl-rounded-2xl`, `gl-rounded-3xl`, `gl-rounded-full`, `gl-rounded-default` |

Radius values come from the [spacing scale](https://design.gitlab.com/product-foundations/spacing#design-tokens), in ascending order from `xs` to `3xl`. `gl-rounded-default` is `md`. Corner-specific variants such as `gl-rounded-t-lg` are available for containers whose corners differ. See [border design tokens](#design-tokens) for each value.

The preset also carries older radius names — `gl-rounded-base`, `gl-rounded-small`, `gl-rounded-pill`, `gl-rounded-6` — which are hard-coded values rather than tokens. Use the token names above.

### `gl-border` gives you a complete border

In this preset, `gl-border` and its per-side variants set the style and the default color as well as a `1px` width. A width utility on its own sets only the width, and because Tailwind's preflight reset is disabled there's no global border style for it to fall back on.

```vue
<!-- live-example expanded title="Complete borders" -->
<div class="gl-border gl-rounded-lg gl-p-5">Default 1px border</div>
<div class="gl-border gl-mt-3 gl-rounded-lg gl-border-2 gl-border-strong gl-p-5">
  Strong 2px border
</div>
```

```vue
<!-- live-example expanded title="Width and color without a style" -->
<div class="gl-rounded-lg gl-border-2 gl-border-strong gl-p-5">Nothing renders</div>
```

The last example has a color and a width but no style, so `border-style` stays `none` and nothing renders. When you need a width other than `1px`, keep `gl-border` and add the width — or add `gl-border-solid` explicitly.

Because `gl-border-2` is emitted after `gl-border`, `gl-border gl-border-2` reliably gives you a `2px` border. Don't rely on that for conflicting widths, though: `gl-border-2 gl-border-0` also renders `2px`, in spite of the `gl-border-0` written last. See [declare each property once](https://design.gitlab.com/product-foundations/css#declare-each-property-once).

### Choose a color for the surface it sits on

`gl-border` alone uses the default border color. Set a color explicitly when the border needs to be less or more prominent, or when it's part of a [section](https://design.gitlab.com/product-foundations/layout#section).

```vue
<!-- live-example expanded color-mode="dark" title="Section colors" -->
<section class="gl-border gl-rounded-lg gl-border-section gl-bg-section gl-p-5">Pipelines</section>
```

```vue
<!-- live-example expanded color-mode="dark" title="Color scale border and background" -->
<section class="gl-border gl-rounded-lg gl-border-neutral-100 gl-bg-neutral-0 gl-p-5">
  Pipelines
</section>
```

Border color scale utilities are deprecated for the same reason as every other constant: they don't respond to color mode. Some semantic border colors are also intentionally transparent so that a boundary appears in modes such as Windows High Contrast Mode — a constant color can't do that.

`gl-border-section` belongs to the [section container](https://design.gitlab.com/product-foundations/layout#section), which has rules of its own: a section is fully enclosed by section borders, contains no nested sections, and uses the section background at its own level. Don't use the section color as a general-purpose border.

### Use a border, not a shadow, for a boundary

```vue
<!-- live-example expanded title="Boundary drawn with a border" -->
<div class="gl-border gl-rounded-lg gl-p-5">Pipelines</div>
```

```vue
<!-- live-example expanded title="Boundary drawn with a shadow" -->
<div class="gl-rounded-lg gl-p-5 gl-shadow-inner-1-border-default">Pipelines</div>
```

Shadows are dropped in forced-colors modes, so a boundary drawn with `box-shadow` disappears for the users who most need it. Use `border`, or `outline` where a border would affect layout. Shadows are for [elevation](https://design.gitlab.com/product-foundations/elevation#code-reference).

### Keep nested radii concentric

When a bordered element sits inside another with its own radius, derive the inner radius from the outer one: `outer radius - padding = inner radius`. See [radius](#radius).

```vue
<!-- live-example expanded title="Concentric radii" -->
<div class="gl-border gl-rounded-lg gl-p-2">
  <div class="gl-rounded-md gl-bg-strong gl-p-5">Inner radius derived from the outer one</div>
</div>
```

```vue
<!-- live-example expanded title="Repeated radii" -->
<div class="gl-border gl-rounded-lg gl-p-2">
  <div class="gl-rounded-lg gl-bg-strong gl-p-5">Inner radius copied from the outer one</div>
</div>
```

Reusing the outer radius on the inner element leaves a visibly uneven gap at the corners.

### Common pitfalls

#### Borders on both a container and its children

```vue
<!-- live-example expanded title="Borders on a container and its children" -->
<ul class="gl-border gl-m-0 gl-list-none gl-rounded-lg gl-p-0">
  <li class="gl-border gl-p-3">Pipelines</li>
  <li class="gl-border gl-p-3">Jobs</li>
</ul>
```

Adjacent borders double up and the container's own border sits alongside the first and last item's. Use a single edge on the items instead — `gl-border-b` on each item except the last — and check whether the container needs a border at all. Nested bordered containers create the "boxes within boxes" effect that [border](https://design.gitlab.com/product-foundations/border) advises against.

#### Divide utilities without a style

```vue
<!-- live-example expanded title="Divide utility without a style" -->
<ul class="gl-m-0 gl-list-none gl-divide-y gl-p-0">
  <li class="gl-p-3">Pipelines</li>
  <li class="gl-p-3">Jobs</li>
</ul>
```

`gl-divide-y` sets only a border width between children, so nothing renders. It needs `gl-divide-solid` and a color utility such as `gl-divide-default` to be visible. Prefer explicit `gl-border-b gl-border-default` on the items: it's the same result, it's obvious which element the border belongs to, and it doesn't depend on sibling selectors that break when an item is conditionally rendered.

#### A radius with nothing to clip it

```vue
<!-- live-example expanded title="Radius with nothing to clip it" -->
<div class="gl-rounded-lg gl-bg-subtle">
  <div class="gl-bg-strong gl-p-5">Square corners overflow the rounded parent</div>
</div>
```

A child's square corners overflow the parent's rounded ones. Add `gl-overflow-hidden` to the container, or round the child to match.

#### Removing a border with a color

```vue
<div class="gl-border gl-border-transparent">…</div>
```

If the intent is no border, use `gl-border-0` and remove `gl-border` so the element doesn't reserve the space. If the intent is to reserve the space — to prevent a layout shift on hover, or to expose a boundary in high contrast modes — that's a legitimate transparent border, and it's worth a comment saying so.
