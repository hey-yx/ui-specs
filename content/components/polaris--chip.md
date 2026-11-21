---
title: "Shopify Polaris · Chip 标签片"
source: https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/typography-and-content/chip
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-polaris-chip
publisher: "Shopify Polaris"
---

# Shopify Polaris · Chip 标签片

> 来源：[https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/typography-and-content/chip](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/typography-and-content/chip)

---

The chip component displays static labels, categories, or attributes that help classify and organize content. Use chip to show product tags, categories, or metadata near the items they describe, helping users identify items with similar properties.

Chips support multiple visual variants for different levels of emphasis and can include icons to provide additional visual context. For system-generated status indicators, use [badge](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/feedback-and-status-indicators/badge). For interactive or removable chips, use [clickable chip](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/actions/clickable-chip).

#### Use cases

* **Static labels:** Display non-interactive tags or labels to categorize content.
* **Status indicators:** Show category or attribute labels alongside content.
* **Content classification:** Help merchants identify items with shared properties.
* **Compact metadata:** Display compact attribute labels in lists or cards.

```html
<s-chip color="base" accessibilityLabel="Product status">Active</s-chip>
```

## Properties

Configure the following properties on the chip component.

* **accessibility​Label**

  **string**

  A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey the component's purpose.

* **color**

  **ColorKeyword**

  **Default: 'base'**

  The color emphasis level that controls visual intensity.

* **removable**

  **boolean**

  **Default: false**

  Whether the chip is removable.

### ColorKeyword

Defines the color intensity or emphasis level for text and UI elements. - \`subdued\`: Deemphasized color for secondary text, supporting labels, and less critical interface elements. - \`base\`: Primary color for body text, standard UI elements, and general content with good readability. - \`strong\`: Emphasized color for headings, key labels, and interactive elements that need prominence.

```ts
'subdued' | 'base' | 'strong'
```

### Slots

The chip component supports slots for additional content placement within the component. Learn more about [using slots](https://shopify.dev/docs/api/polaris/using-polaris-web-components#slots).

* **children**

  **HTMLElement**

  The text label displayed within the chip component, typically representing a selected filter, tag, or removable item.

* **graphic**

  **HTMLElement**

  An optional icon to display at the start of the chip. Accepts only icon components.

### Add a basic chip

Create a chip with a text label to categorize or tag content. This example shows the basic chip component with default styling.

```html
<s-chip color="base" accessibilityLabel="Product status">Active</s-chip>
```

### Set visual weight with color variants

Use color variants to control the visual emphasis of chips. This example shows `subdued` chips for secondary metadata, `base` chips for standard tags, and `strong` chips for important information.

### Add an icon to reinforce meaning

Combine an icon with a text label to make chip meanings clearer. This example shows a chip with an icon in the graphic slot to visually reinforce the category.

### Handle long text with truncation

Display chips with long labels in constrained spaces. This example shows how chip text automatically truncates with an ellipsis when the content exceeds the container width.

## Best practices

* **Use chips to label and categorize content:** Chip works best for displaying tags, statuses, and categories that help merchants quickly understand content attributes. Don't use chips for actions—they're visual indicators, not buttons. For interactive or dismissible chips, use [clickable chip](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/actions/clickable-chip) instead.
* **Keep chip text concise and scannable:** Short labels like "Featured" or "On sale" are instantly recognizable. Long chip text defeats the purpose of quick scanning and might truncate, hiding important information.
* **Choose the right visual weight:** Use subdued chips for secondary metadata, standard chips for typical tags and categories, and strong chips for important or verified information that needs emphasis.
* **Position chips near what they describe:** Place chips adjacent to the items they categorize for immediate context. In lists, position chips consistently to help merchants scan efficiently.
* **Add icons to reinforce meaning:** Icons can make chip meanings clearer at a glance, especially for status indicators or commonly recognized categories.

## Limitations

* Chip text is single-line only and truncates with an ellipsis when space is limited. There's no built-in way to show the full text on hover or through tooltips.
* Only predefined style variants are available. Custom colors, borders, or backgrounds can't be applied to chips.
* Icons in chips must come from the standard icon library. Custom icons, images, or other graphics aren't supported.
