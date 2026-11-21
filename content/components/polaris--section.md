---
title: "Shopify Polaris · Section 区块"
source: https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/layout-and-structure/section
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-polaris-section
publisher: "Shopify Polaris"
---

# Shopify Polaris · Section 区块

> 来源：[https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/layout-and-structure/section](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/layout-and-structure/section)

---

The section component groups related content into clearly-defined thematic areas with consistent styling and structure. Use section to organize page content into logical blocks, each with its own heading and visual container.

Sections automatically adapt their styling based on nesting depth and adjust heading levels to maintain meaningful, accessible page hierarchies. For simple visual separation without headings, use [divider](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/layout-and-structure/divider).

#### Use cases

* **Content grouping:** Group related content with automatic semantic heading levels.
* **Form organization:** Organize complex forms into logical, visually distinct sections.
* **Nested structure:** Create nested sections for hierarchical content organization.
* **Contextual styling:** Benefit from context-aware section styling controlled by Shopify.

```html
<s-section heading="Online store dashboard">
  <s-paragraph>View a summary of your online store’s performance.</s-paragraph>
</s-section>
```

## Properties

Configure the following properties on the section component.

* **accessibility​Label**

  **string**

  A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey the component's purpose.

* **heading**

  **string**

  The heading text displayed at the top of the section. This heading provides a title for the section's content and automatically uses the appropriate semantic heading level (h2, h3, h4) based on nesting depth to maintain proper document structure.

* **padding**

  **"base" | "none"**

  **Default: 'base'**

  The padding applied to all edges of the element's content.

  * `base`: applies padding that is appropriate for the element. Note that it might result in no padding if this is the right design decision in a particular context.
  * `none`: removes all padding from the element's content. This can be useful when elements inside the section need to span to the edge of the section. For example, a full-width image. In this case, rely on `s-box` with a padding of 'base' to bring back the desired padding for the rest of the content. The `heading` and header actions keep their padding, so they can be combined with `none`.

* **subheading**

  **string**

  Supporting text that expands on the heading, rendered beneath it in a subdued treatment.

  This is not a heading: it adds no entry to the document outline, doesn't change the heading level of the section's children, and isn't announced as part of the heading. Keep whatever distinguishes this section from another in `heading`, since that is what someone navigating by heading hears.

### Slots

The section component supports slots for additional content placement within the component. Learn more about [using slots](https://shopify.dev/docs/api/polaris/using-polaris-web-components#slots).

* **accessory**

  **HTMLElement**

  Additional contextual information that qualifies the heading, rendered inline beside the heading text.

  Only accepts Badge, Icon, Button, Menu, Text, Avatar, Thumbnail, and Tooltip elements. Text must use `tone`, `fontSize`, and `fontWeight` of `auto`; Icon, Avatar, and Thumbnail must use `size="base"`; Badge must use `size="base"` and `color="base"`; Button must use `inlineSize="auto"`.

  A Tooltip an accessory element's `interestFor` points at can be slotted here beside it.

* **children**

  **HTMLElement**

  The content displayed within the section component, which groups related elements together in a logical unit with an optional heading.

* **graphic**

  **HTMLElement**

  A decorative visual that reinforces the heading, rendered before it.

  Accepts a single Icon with a `size` of `base`, or an icon-only Badge (`icon` set, no text content) with a `size` of `large`. The heading identifies the section, so this content is not announced by assistive technologies, and it is not rendered at all when the section has no `heading`.

* **primary-action**

  **HTMLElement**

  The primary action button or link, representing the main or most important action available in this context. Typically displayed with higher visual prominence than secondary actions to establish clear hierarchy.

* **secondary-actions**

  **HTMLElement**

  Additional action buttons or links that provide alternative or supporting actions. Visually de-emphasized compared to the primary action.

  A ButtonGroup holding an action and the icon-only activator for its Menu renders as one segmented group with a chevron activator. The group needs an `accessibilityLabel`, and must hold exactly one Button with text followed by one Button with no text that has an `accessibilityLabel` and a `commandFor` opening a Menu, both with a `variant` of `secondary` or `auto`.

* **supplemental**

  **HTMLElement**

  Status or metadata that describes the section as a whole rather than qualifying its heading, rendered at the inline-end of the header before any actions.

  This is not an action. Only accepts Badge, Avatar, Text, Icon, and Thumbnail elements, under the same prop constraints as `accessory`.

### Add a content section with a heading

Create a section with a heading to group related content. This example shows a basic section with a title and description text.

```html
<s-section heading="Online store dashboard">
  <s-paragraph>View a summary of your online store’s performance.</s-paragraph>
</s-section>
```

### Group form fields in a section

Use a section with a heading and form fields to group related inputs. This example shows a customer information form with text and email fields inside a top-level section.

### Create nested sections with automatic visual hierarchy

Nest sections to create visual and semantic hierarchy that automatically adjusts heading levels and styling. This example shows three levels of nesting for order details, customer information, and a billing address.

### Add an accessibility label for screen readers

Use the `accessibilityLabel` property to provide screen readers with additional context beyond the visible heading. This example shows a payment summary section and a label describing the contents of the section.

### Remove padding for full-width content

Set the `padding` property to `none` so that content like tables can extend to the section edges. This example shows a product table rendered full-width within a section.

## Best practices

* **Use to group related content:** The component provides semantic structure and visual hierarchy for grouping related content. Each section should contain a cohesive set of information or controls that belong together.
* **Provide meaningful headings:** Section headings help merchants scan and navigate content. Write headings that clearly describe what's in the section rather than using vague labels.
* **Nest thoughtfully:** Nested sections create visual and semantic hierarchy, but excessive nesting creates overly complex structures. Limit nesting to 2-3 levels where the hierarchy is meaningful and helps merchants understand the content organization.
* **Consider when to remove padding:** Full-width content like tables or images might need to extend to section edges. Remove padding when the content design requires it, but ensure nested content within has appropriate spacing.
* **Use accessibility labels when needed:** When the visible heading doesn't fully convey the section's purpose to screen reader users, provide an accessibility label with additional context.

## Limitations

* The component doesn't include expand/collapse functionality. If you need collapsible sections, you'll need to implement this using additional state management and accessibility attributes.
* Section headings automatically increment their semantic level based on nesting depth, but they stop at h4 for deeply nested sections. Content nested beyond three levels might have less clear document structure.
