---
title: "GitLab Pajamas · Foundation · Layout 布局"
source: https://design.gitlab.com/product-foundations/layout/
section: layout
tag: "规范"
fetched: 2026-11-08
status: full
id: gitlab-layout
publisher: "GitLab"
---

# GitLab Pajamas · Foundation · Layout 布局

> 来源：[https://design.gitlab.com/product-foundations/layout/](https://design.gitlab.com/product-foundations/layout/)

---

Layout defines how content and design system elements are organized and respond in the GitLab interface. A good layout creates clear hierarchy, predictability, and utility. To effectively use layout, you'll need to understand:

- **The Framework:** Rules and scaffolding that govern the layout system
- **Building blocks:** The things you build with to compose a layout
- **Behaviors:** How things in the layout act and respond
- **Graph canvas:** How information is arranged inside a zoomable node-edge surface

## Framework

The framework establishes the foundational structure and rules that govern how layouts are composed and behave. It defines the relationships between interface layers, how content adapts to different contexts, and the systematic approach to spacing and organization.

### Page composition

A page is everything visible in the viewport — the complete interface a user sees at any moment. It combines the application chrome with panels and their content to create a unified experience.

The application chrome provides the constant foundation while panels adapt to context and user needs. Content within panels works harmoniously with the application chrome elements and other visible panels. Consider how information flows between these layers and how the user navigates through them.

Effective page composition establishes clear visual hierarchy while maintaining parity with the DOM structure. Visual presentation should reinforce, not contradict, the underlying document order to ensure the interface works predictably for all users. When content reflows due to space constraints, maintain these structural relationships to avoid disorienting rearrangements.

### Application chrome

The application chrome is the lowest layer of the interface. It integrates several elements directly, and panels are a layer above to create depth and hierarchy in the layout. The application chrome is themeable, making it easier to differentiate instances or satisfy user preference. The following items are strategically organized and integrated into the application chrome:

1. **Global navigation and search:** Wayfinding across the entire application context
1. **User actions:** User-specific actions and authentication options
1. **Application navigation:** Access to features in the application that impact the static panel contents
1. **AI navigation:** Actions that intelligently control and interact with the AI panel

### Panel-based layout

Panels are **structural layout regions** in GitLab's UI. They host persistent or co-primary workflows that feel like part of the workspace, not an overlay on top of it.

Panels help a user navigate complex workflows by organizing related content and functionality into focused, manageable areas. This structure maintains clear context and relationships between different tasks, allowing a user to work more efficiently. The interface is organized into three distinct panel types. Up to one panel of each type can be open simultaneously, for a total of 1–3 panels at any time:

1. **Static panel** for the primary context
1. **Dynamic panel** (optional) that adapts to the primary context
1. **AI panel** (collapsible) for intelligent features

A dynamic panel is tied to the static panel and only appears while viewing that page. When the static panel updates, the dynamic panel updates or is removed accordingly. Navigating away removes the dynamic panel.

#### Panels vs. drawers

Panels and drawers are distinct patterns; the terms aren't interchangeable.

|              | Panel                                         | [Drawer](https://design.gitlab.com/components/drawer)                                 |
| ------------ | --------------------------------------------- | ------------------------------------------------------------ |
| **Role**     | Structural region of the workspace            | Transient overlay or push surface                            |
| **Duration** | Persistent across a workflow                  | Short-lived, dismissed when done                             |
| **Content**  | Co-primary or richer, multi-context workflows | Secondary, contextual tasks or reference                     |
| **Behavior** | Coexists with the main content                | Floats above or pushes the main content, anchored to an edge |

#### Responsive presentation

On smaller screens, a panel can slide in over the primary content instead of sitting beside it. This is a responsive adaptation of the panel, not the [drawer](https://design.gitlab.com/components/drawer) component.

#### Application panels vs. dashboard panels

The application panels described here are a layout concept. They are not the same as a [dashboard panel](https://design.gitlab.com/components/dashboard-panel), which is an analytics content container used inside [dashboards](https://design.gitlab.com/patterns/dashboards).

#### Names for external communication

Use these names to refer to parts of the UI in UI text messages, documentation, and marketing materials:

1. **Top bar**
1. **Left sidebar**
1. **Current context panel** based on the primary context, for example, if the context is a merge request, refer to it as the `merge request panel`
1. **Details panel** supports the primary context
1. **GitLab Duo panel** to match and enforce a user's mental model; it's not just any AI
1. **GitLab Duo sidebar**

With the exception of **GitLab Duo**, use lowercase for all terms.

Do not use the following terms externally as they're less descriptive and could cause confusion:

- AI panel
- Nav (or navigation)
- Chrome

### Media and container queries

The layout system uses different parameters to determine when and how content should adapt to varying contexts and constraints.

- **Media queries** conditionally apply CSS styles to an element based on the current user environment. For example viewport size, system light or dark mode, and input device.
- **Container queries** conditionally apply CSS styles to an element based on certain attributes of the parent container. For example, the parent's size, applied styles, or scroll state.

The layout system typically uses media queries to support major layout changes to the application chrome and panels based on viewport width, and container queries to support major layout changes to panel content based on panel width.

### Design tokens and spacing rules

## Building blocks

Building blocks work together to create organized, intuitive interfaces that help a user find and use what they need. A user can quickly understand and navigate content when related items are grouped through proximity, similar elements show clear relationships, and boundaries create distinct areas. Primary content should be immediately visible, secondary content easily accessible, and supporting information available through progressive disclosure.

The building blocks that follow provide the tools to create this clarity: alignment creates structure and order while containers define relationships between content. Each building block serves a specific purpose in making a user's workflow more organized and efficient.

### Alignment

Alignment supports a natural reading pattern, primarily the F-pattern where a user scans horizontally across the top, then down the left side, and across again. Alignment determines how elements relate to each other visually, providing invisible structure for organizing content.

Rather than apply uniform alignment rules across all elements, consider how each element should align based on its relationship to surrounding content and the general reading pattern. Alignment can flow from one element to the next to create better visual hierarchy and scannability.

Choose alignment based on content characteristics:

- **Similar-sized elements:** Often work well with centered alignment.
- **Varied content heights:** Typically benefit from top alignment for better visual anchoring.
- **Common edges:** Establish consistent left or right edges to create visual order and strengthen relationships.
- **User's task:** Consider whether the content requires comparison or sequential reading.
- **Content type:** Data tables, forms, and prose each have different alignment needs.
- **Natural flow:** Respect natural pauses versus continuity in the content.
- **Visual weight:** Balance heavier elements with appropriate alignment choices.
- **Responsive behavior:** Ensure alignment choices work across different viewport sizes.

### Content containers

Content containers define content boundaries within a layout. They group related content using background surfaces, [borders](https://design.gitlab.com/product-foundations/border), and whitespace to create clear groupings that help a user understand content relationships and navigate complex interfaces. Because content is already within a panel, use content containers sparingly to avoid the effect of too many nested boxes. There's a range of container types and visual presentation. The two container categories are:

- **Generic (presentational):** Establish visual hierarchy without specific meaning.
- **Semantic:** Associated with a container's purpose in the interface.

#### Generic (presentational)

Presentational containers create varying degrees of visual emphasis, from subtle organization to strong prominence, letting you choose the appropriate attention level for content groupings. Presentational intent remains consistent across modes, meaning that a strong container in light mode will also be strong in dark mode.

- **Default:** Provide standard visual separation without drawing excessive attention. Use default when you need clear content boundaries that don't compete with the other content for focus.
- **Subtle:** Create minimal visual presence while still defining content areas. Use subtle when grouping is helpful but shouldn't be visually prominent, or when you need to establish hierarchy without adding visual weight.
- **Strong:** Create pronounced emphasis and draw attention to important content. Use strong sparingly to highlight key information or critical interface areas that need to stand out from surrounding content.

Acceptable combinations (background + border):

```vue
<!-- live-example -->
<div class="gl-text-base gl-grid gl-grid-cols-3 gl-gap-5">
  <div class="gl-grid gl-place-items-center gl-p-5 gl-rounded-lg gl-bg-default gl-border gl-border-default">default + default</div>
  <div class="gl-grid gl-place-items-center gl-p-5 gl-rounded-lg gl-bg-default gl-border gl-border-subtle">default + subtle</div>
  <div class="gl-grid gl-place-items-center gl-p-5 gl-rounded-lg gl-bg-default gl-border gl-border-strong">default + strong</div>
  <div class="gl-grid gl-place-items-center gl-p-5 gl-rounded-lg gl-bg-subtle gl-border gl-border-subtle">subtle + subtle</div>
  <div class="gl-grid gl-place-items-center gl-p-5 gl-rounded-lg gl-bg-strong gl-border gl-border-strong">strong + strong</div>
</div>
```

#### Semantic

Semantic containers indicate their purpose in the interface through meaningful attributes that convey function rather than just visual hierarchy. Unlike generic containers, semantic containers may have different presentation goals between modes. For example, an overlap in light mode relies more on a border for visual distinction, while in dark mode it relies more on the background color. Refer to the [color design principles](https://design.gitlab.com/product-foundations/color#design-principles) for more details about color and mode.

- **Section:** Create complete content enclosures that are visually distinct from the panel background. Use sections to group major content areas that need clear boundaries.
- **Overlap:** Define content that appears above other interface elements. Use overlap for components and sticky elements that need to visually layer over existing content.
- **Disabled:** Indicate unavailable or non-interactive content areas. Use disabled containers to visually communicate that content or functionality is temporarily unavailable.

##### Section

A section encloses its content to literally create a visually defined _section_ that is distinct from the default panel background and other content. A section must:

- Be entirely enclosed in a section border.
- Only include section borders within its boundaries.
- Not include nested sections.
- Use the section background color at the parent level.

A section can also include nested containers that:

- Use a subtle background when visual hierarchy is needed.
- Use feedback or status backgrounds for feedback and status regions.
- Have no background or border applied.

```vue
<!-- live-example -->
<div class="gl-border gl-border-section gl-rounded-lg gl-overflow-hidden gl-text-base gl-mb-4">
  <div class="gl-border-b gl-border-b-section gl-bg-section gl-p-5">
    section + section
  </div>
  <div class="gl-bg-subtle gl-p-5">
    subtle + section
  </div>
</div>
<div class="gl-border gl-border-section gl-rounded-lg gl-overflow-hidden gl-text-base gl-mb-4">
  <div class="gl-border-b gl-border-b-section gl-bg-section gl-p-5">
    section + section
  </div>
  <div class="gl-bg-feedback-success gl-p-5">
    feedback success + section
  </div>
</div>
<div class="gl-border gl-border-section gl-rounded-lg gl-overflow-hidden gl-text-base">
  <div class="gl-border-b gl-border-b-section gl-bg-status-warning gl-p-5">
    status warning + section
  </div>
  <div class="gl-bg-section gl-p-5">
    section + section
  </div>
</div>
```

##### Overlap

An overlap container is useful for components and content that overlaps other content. For example, a [popover](https://design.gitlab.com/components/popover), [drawer](https://design.gitlab.com/components/drawer), [modal](https://design.gitlab.com/components/modal), or sticky header. Any generic border can be used in combination, but isn't required. Overlap is combined with [shadows](https://design.gitlab.com/product-foundations/elevation#shadows) to increase the perception of depth.

```vue
<!-- live-example -->
<div class="gl-text-base">
 <div class="gl-grid gl-place-items-center gl-p-5 gl-rounded-lg gl-bg-overlap gl-border gl-border-default">overlap + default</div>
</div>
```

##### Disabled

A disabled container is visually subdued to infer unavailability or non-interaction. Consider pairing with other disabled styles and a subtle border.

```vue
<!-- live-example -->
<div class="gl-text-base">
  <div class="gl-grid gl-place-items-center gl-p-5 gl-rounded-lg gl-bg-disabled gl-border gl-border-subtle gl-text-subtle">disabled + subtle</div>
</div>
```

## Behaviors

Behaviors define how layout elements respond to user interactions, content changes, and viewport variations. These dynamic aspects ensure layouts remain functional and accessible across different contexts and user needs.

### Responsive adaptation

Content should reflow gracefully when space constraints change, adapting to different viewport and container sizes while maintaining usability. Use the framework's media and container queries to ensure content remains functional across all contexts.

### Content truncation and overflow

Content should be fully visible whenever possible. Only truncate content when length or wrapping would break a component, negatively impact surrounding content, or cause content to flow off screen.

When truncation is necessary, provide clear methods for a user to access the full information. Use a [tooltip](https://design.gitlab.com/components/tooltip) for non-critical reference content, or [ellipsis button](https://design.gitlab.com/components/button#ellipsis) when a user needs access to complete text for comparison or critical tasks.

For scrollable content areas, provide visual indication when content extends beyond the visible area. Use scrims (gradient overlays) or other visual cues to signal scrollable content or additional information that a user can access.

### Sticky and anchored elements

Sticky and anchored elements remain visible during scrolling to keep relevant actions accessible. Use sparingly and with [elevation](https://design.gitlab.com/product-foundations/elevation) to clearly indicate the sticky behavior. Avoid crowding the interface or significantly reducing content area.

### Focus management

Layout should support clear focus indication and logical tab order. Interactive elements need sufficient space for focus indicators, and related actions should be grouped to create predictable navigation patterns.

When panels or content areas change dynamically, manage focus appropriately. If a user action opens a panel or modal, focus should move to the new content. When closing panels, return focus to the element that triggered the action, maintaining the user's place in the interface.

## Code reference

Layout utilities cover display, flex and grid, alignment, sizing, positioning, and stacking.

Layout is where correctness problems concentrate, because most layout properties work only in a specific context. `align-items` does nothing on a block container, `gap` does nothing without flex or grid, and `z-index` does nothing without a positioned element. A layout utility that has no effect is quick to add and hard to notice.

### Utilities

| Purpose        | Utilities                                                                                            |
| -------------- | ---------------------------------------------------------------------------------------------------- |
| Display        | `gl-block`, `gl-inline-block`, `gl-flex`, `gl-inline-flex`, `gl-grid`, `gl-hidden`                   |
| Flex direction | `gl-flex-col`, `gl-flex-wrap`, `gl-flex-nowrap`                                                      |
| Flex sizing    | `gl-grow`, `gl-shrink-0`, `gl-flex-1`, `gl-basis-0`                                                  |
| Alignment      | `gl-items-center`, `gl-items-start`, `gl-self-center`, `gl-justify-between`, `gl-place-items-center` |
| Grid           | `gl-grid-cols-*`, `gl-grid-rows-*`, `gl-col-span-*`                                                  |
| Sizing         | `gl-w-full`, `gl-min-w-0`, `gl-max-w-limited`, `gl-h-full`, `gl-min-h-*`, `gl-size-*`                |
| Position       | `gl-relative`, `gl-absolute`, `gl-sticky`, `gl-inset-0`, `gl-top-0`                                  |
| Stacking       | `gl-z-0`, `gl-z-1`, `gl-z-2`, `gl-z-3`, `gl-z-4`, `gl-z-200`, `gl-z-9999`                            |
| Overflow       | `gl-overflow-hidden`, `gl-overflow-auto`, `gl-overflow-y-auto`                                       |

Spacing between items is covered in [spacing](https://design.gitlab.com/product-foundations/spacing#code-reference).

### Compose with flex and grid

Flex and grid describe a relationship between elements, so they hold up when content changes length, wraps, or is conditionally rendered.

```vue
<!-- live-example expanded title="Header composed with flex" -->
<div class="gl-flex gl-items-center gl-justify-between gl-gap-3">
  <h2 class="gl-heading-3 !gl-mb-0">Merge requests awaiting your review</h2>
  <gl-button>New</gl-button>
</div>
```

```vue
<!-- live-example expanded title="Header composed with absolute positioning" -->
<div class="gl-relative gl-h-8">
  <h2 class="gl-heading-3 !gl-mb-0">Merge requests awaiting your review</h2>
  <gl-button class="gl-absolute gl-right-0 gl-top-0">New</gl-button>
</div>
```

The second example takes the button out of flow, so it overlaps the heading — as it already does here — and the fixed height clips the row when the button grows. Absolute positioning is for elements that genuinely sit outside the flow, such as an overlay or a badge on an avatar.

### Align with alignment properties

Use the alignment properties for alignment. A margin, a padding, or a line height chosen to make two things line up is tied to the current font size and icon size, and drifts when either changes.

```vue
<!-- live-example expanded title="Aligned on the baseline" -->
<div class="gl-flex gl-items-baseline gl-gap-2">
  <span class="gl-heading-3 !gl-mb-0">12</span>
  <span class="gl-text-sm gl-text-subtle">open</span>
</div>
```

```vue
<!-- live-example expanded title="Aligned with a margin" -->
<div class="gl-flex gl-gap-2">
  <span class="gl-heading-3 !gl-mb-0">12</span>
  <span class="gl-mt-2 gl-text-sm gl-text-subtle">open</span>
</div>
```

`gl-items-*` aligns every child of the container; `gl-self-*` overrides it for one child.

### Truncate inside a flex container

`gl-truncate` needs the element to be able to be narrower than its content. A flex item defaults to `min-width: auto`, which resolves to the width of its content, so it refuses to shrink and overflows the container instead. Add `gl-min-w-0` to the flex item that wraps the truncating element.

```vue
<!-- live-example expanded resizable="400" title="Truncation with min-w-0" -->
<div class="gl-flex gl-items-center gl-gap-3">
  <div class="gl-flex gl-min-w-0 gl-flex-1 gl-items-center gl-gap-2">
    <gl-icon name="branch" />
    <span class="gl-truncate">feature/a-very-long-branch-name-that-keeps-going</span>
  </div>
  <gl-badge>Draft</gl-badge>
</div>
```

```vue
<!-- live-example expanded resizable="400" title="Truncation without min-w-0" -->
<div class="gl-flex gl-items-center gl-gap-3">
  <div class="gl-flex gl-flex-1 gl-items-center gl-gap-2">
    <gl-icon name="branch" />
    <span class="gl-truncate">feature/a-very-long-branch-name-that-keeps-going</span>
  </div>
  <gl-badge>Draft</gl-badge>
</div>
```

Drag either preview narrower to compare: the second pushes the badge out of the row rather than truncating the branch name.

`gl-min-w-0` isn't needed when `gl-truncate` is on the flex item itself. `overflow: hidden` already resolves that item's automatic minimum size to `0`, which is why the wrapper — not the truncating element — is where the fix belongs.

Truncated text needs a way to read the full value — see [content truncation and overflow](#content-truncation-and-overflow).

### Size to content

Content length changes with data, translation, and user settings. Constrain what has to be constrained and let the rest size itself.

- Use `gl-min-h-*` rather than `gl-h-*` when an element needs a minimum presence but must be able to grow.
- Use `gl-max-w-limited` for readable prose measures rather than a fixed width.
- Don't set a fixed height on a container of text. It clips at larger font sizes, in other languages, and at higher zoom levels.

### Stacking

`z-index` only orders elements within the same stacking context, and only applies to positioned elements.

```vue
<div class="gl-sticky gl-top-0 gl-z-1 gl-bg-overlap gl-shadow-md">…</div>
```

```vue
<div class="gl-sticky gl-top-0" style="z-index: 9999">…</div>
```

The scale is deliberately short: `gl-z-0` to `gl-z-4` for ordering within a local context, and `gl-z-200` and `gl-z-9999` for the application-level layers that components such as [modals](https://design.gitlab.com/components/modal) and [tooltips](https://design.gitlab.com/components/tooltip) already use. Escalating to a large arbitrary value is how stacking bugs get moved rather than fixed — check whether the element is in the stacking context you think it is, and whether an ancestor's `overflow` or `transform` is the real cause.

### Responsive layout

Layout changes are `min-width` first:

```vue
<!-- live-example expanded title="Responsive grid" -->
<div class="gl-grid gl-grid-cols-1 gl-gap-5 md:gl-grid-cols-2 lg:gl-grid-cols-3">
  <gl-card>Pipelines</gl-card>
  <gl-card>Jobs</gl-card>
  <gl-card>Schedules</gl-card>
</div>
```

For content inside a panel, the viewport isn't a reliable proxy for available width. Prefer a container query so the content responds to its actual container; see [media and container queries](#media-and-container-queries).

### Position canvas overlays

A [graph canvas](https://design.gitlab.com/patterns/graph-canvas) is one of the few places where absolute positioning is the right tool, because the view controls and minimap genuinely sit outside the flow of the graph.

```vue
<div class="gl-relative gl-overflow-hidden gl-rounded-lg gl-border gl-border-section gl-bg-section">
  <!-- graph renders here -->
  <gl-button-group vertical class="gl-absolute gl-right-5 gl-top-5 gl-z-1">
    <gl-button icon="search-plus" aria-label="Zoom in" />
    <gl-button icon="search-minus" aria-label="Zoom out" />
    <gl-button icon="maximize" aria-label="Fit to view" />
    <gl-button aria-label="Reset zoom to 100%">100%</gl-button>
  </gl-button-group>
  <div class="gl-absolute gl-bottom-5 gl-right-5 gl-z-1 gl-h-13 gl-w-20 gl-rounded-base gl-border gl-border-default gl-bg-overlap gl-shadow-sm">
    <!-- minimap renders here -->
  </div>
</div>
```

`gl-overflow-hidden` is intentional here: it clips nodes that pan beyond the canvas boundary, which is the one case where clipping is the goal. See [overflow used to hide a layout problem](#overflow-used-to-hide-a-layout-problem) for when it isn't.

### Common pitfalls

#### Two display utilities

```vue
<div class="gl-flex gl-hidden">…</div>
```

Both set `display`. Which one wins is decided by the compiled stylesheet, not by the order you wrote them. To hide an element at some widths, use one display utility with a variant: `gl-hidden md:gl-flex`. See [declare each property once](https://design.gitlab.com/product-foundations/css#declare-each-property-once) for how your editor can flag these as you type.

#### Alignment or gap without a flex or grid container

```vue
<!-- live-example expanded title="Alignment without a flex container" -->
<div class="gl-items-center gl-justify-between gl-gap-3">
  <gl-badge>Draft</gl-badge>
  <gl-badge variant="warning">Blocked</gl-badge>
</div>
```

None of these apply to a block container. Adding `gl-flex` activates all three at once, which is why this pitfall often looks like "three utilities that do nothing" rather than a visible bug.

#### Hiding content that should stay available

```vue
<span class="gl-sr-only gl-hidden">Loading</span>
```

`gl-hidden` is `display: none`, which removes the element from the accessibility tree, so nothing is announced. Use `gl-sr-only` alone for text that should only be available to assistive technology, and `gl-hidden` alone for content that should be gone for everyone.

#### Overflow used to hide a layout problem

```vue
<div class="gl-flex gl-overflow-hidden">…</div>
```

`gl-overflow-hidden` on a container clips whatever doesn't fit, including focus rings, tooltips, and dropdowns rendered inside it. Use it when clipping is the intent — for example, keeping children inside a rounded corner — not to suppress content that's overflowing for another reason.
