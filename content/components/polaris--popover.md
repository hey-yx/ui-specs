---
title: "Shopify Polaris · Popover 浮层"
source: https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/overlays/popover
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-polaris-popover
publisher: "Shopify Polaris"
---

# Shopify Polaris · Popover 浮层

> 来源：[https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/overlays/popover](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/overlays/popover)

---

The popover component displays content in an overlay anchored to the button that opens it. Use popover for secondary information and actions that don't need to occupy permanent space on the page.

A popover is closed by default and is opened by a button whose `commandFor` matches the popover's `id`. It renders in the browser's top layer, so it escapes the bounds of surrounding containers without any positioning code.

#### Use cases

* **Secondary actions:** Group related actions behind a single trigger.
* **Supporting detail:** Show supplementary data without leaving the page.
* **Display settings:** Let merchants configure what a table or list shows.
* **Filtering:** Collect filter choices and apply them on confirmation.

```html
<s-button commandFor="product-options-popover">Product options</s-button>

<s-popover id="product-options-popover">
  <s-stack direction="block">
    <s-button variant="tertiary">Import</s-button>
    <s-button variant="tertiary">Export</s-button>
  </s-stack>
</s-popover>
```

## Properties

Configure the following properties on the popover component.

* **block​Size**

  **SizeUnitsOrAuto**

  **Default: 'auto'**

  The vertical size of the element in standard layouts (height in left-to-right or right-to-left writing modes).

  Block size adjusts based on the writing direction: in horizontal layouts, it controls the height; in vertical layouts, it controls the width. This ensures consistent behavior across different text directions.

  Learn more about the [block-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/block-size).

  * `SizeUnits`: Specific size values in pixels, percentages, or zero for precise control.
  * `auto`: Automatically sizes based on content and layout constraints.

* **inline​Size**

  **SizeUnitsOrAuto**

  **Default: 'auto'**

  The horizontal size of the element in standard layouts (width in left-to-right or right-to-left writing modes).

  Inline size adjusts based on the writing direction: in horizontal layouts, it controls the width; in vertical layouts, it controls the height. This ensures consistent behavior across different text directions.

  Learn more about the [inline-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size).

  * `SizeUnits`: Specific size values in pixels, percentages, or zero for precise control.
  * `auto`: Automatically sizes based on content and layout constraints.

* **max​Block​Size**

  **SizeUnitsOrNone**

  **Default: 'none'**

  The maximum vertical size of the element in standard layouts (max-height in left-to-right or right-to-left writing modes).

  Prevents the element from becoming larger than this size along the block axis.

  Learn more about the [max-block-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/max-block-size).

* **max​Inline​Size**

  **SizeUnitsOrNone**

  **Default: 'none'**

  The maximum horizontal size of the element in standard layouts (max-width in left-to-right or right-to-left writing modes).

  Prevents the element from becoming larger than this size along the inline axis.

  Learn more about the [max-inline-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/max-inline-size).

* **min​Block​Size**

  **SizeUnits**

  **Default: '0'**

  The minimum vertical size of the element in standard layouts (min-height in left-to-right or right-to-left writing modes).

  Prevents the element from becoming smaller than this size along the block axis.

  Learn more about the [min-block-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/min-block-size).

* **min​Inline​Size**

  **SizeUnits**

  **Default: '0'**

  The minimum horizontal size of the element in standard layouts (min-width in left-to-right or right-to-left writing modes).

  Prevents the element from becoming smaller than this size along the inline axis.

  Learn more about the [min-inline-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/min-inline-size).

### SizeUnitsOrAuto

Represents size values that can also be set to \`auto\` for automatic sizing. - \`SizeUnits\`: Specific size values in pixels, percentages, or zero for precise control. - \`auto\`: Automatically sizes based on content and layout constraints.

```ts
SizeUnits | 'auto'
```

### SizeUnits

Represents size values in pixels, percentages, or zero. - \`${number}px\`: Absolute size in pixels for fixed dimensions (such as \`100px\`, \`24px\`). - \`${number}%\`: Relative size as a percentage of the parent container (such as \`50%\`, \`100%\`). - \`0\`: Zero size, equivalent to no dimension.

```ts
`${number}px` | `${number}%` | `0`
```

### SizeUnitsOrNone

Represents size values that can also be set to \`none\` to remove the size constraint. - \`SizeUnits\`: Specific size values in pixels, percentages, or zero for precise control. - \`none\`: No size constraint, allowing unlimited growth.

```ts
SizeUnits | 'none'
```

### Events

The popover component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **afterhide**

  **CallbackEventListener\<TTagName> | null**

  A callback fired after the popover is hidden.

* **aftershow**

  **CallbackEventListener\<TTagName> | null**

  A callback fired after the popover is shown.

* **aftertoggle**

  **CallbackEventListener\<TTagName> | null**

  A callback fired after the popover is toggled.

* **hide**

  **CallbackEventListener\<TTagName> | null**

  A callback fired when the popover is hidden.

* **show**

  **CallbackEventListener\<TTagName> | null**

  A callback fired when the popover is shown.

* **toggle**

  **CallbackEventListener\<TTagName> | null**

  A callback fired when the popover is toggled.

### CallbackEventListener

A function that handles events from UI components. This type represents an event listener callback that receives a \`CallbackEvent\` with a strongly-typed \`currentTarget\`. Use this for component event handlers like \`click\`, \`focus\`, \`blur\`, and other DOM events.

```ts
(EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
```

### CallbackEvent

An event object with a strongly-typed \`currentTarget\` property that references the specific HTML element that triggered the event. This type extends the standard DOM \`Event\` interface and ensures type safety when accessing the element that fired the event.

```ts
Event & {
  currentTarget: HTMLElementTagNameMap[T];
}
```

### Slots

The popover component supports slots for additional content placement within the component. Learn more about [using slots](https://shopify.dev/docs/api/polaris/using-polaris-web-components#slots).

* **children**

  **HTMLElement**

  The content displayed within the popover component, which appears in an overlay positioned relative to its trigger element.

### Show a menu of actions

Group related actions behind a single trigger. This example shows a button that opens a popover containing tertiary import and export actions.

```html
<s-button commandFor="product-options-popover">Product options</s-button>

<s-popover id="product-options-popover">
  <s-stack direction="block">
    <s-button variant="tertiary">Import</s-button>
    <s-button variant="tertiary">Export</s-button>
  </s-stack>
</s-popover>
```

### Display a notification list

Surface recent activity without navigating away. This example shows a notification button that opens a popover listing three updates separated by dividers.

### Configure table display options

Let merchants choose which columns a table shows. This example shows a settings button that opens a popover with a choice list and a primary button to apply the selection.

### Show inventory details

Expand on a value shown elsewhere on the page. This example shows an info button that opens a popover breaking stock down into available, reserved, and in-transit quantities.

### Filter with apply and clear

Collect filter choices and close the popover once the merchant confirms. This example sets `inlineSize` for a wider overlay and closes it from buttons that target the popover with `command="--hide"`.

## Best practices

* **Reserve popovers for secondary content:** Primary content and primary actions belong on the page. Use a popover for detail or actions that only some merchants need, some of the time.
* **Trigger on press, never on hover:** A popover manages focus and returns it to the activator on close, which hover activation breaks. If you want content to appear on hover, use [tooltip](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/typography-and-content/tooltip) instead.
* **Label the activator with the content:** Name the button after what opens, using the `{verb}+{noun}` format or a plain noun like **Columns**. Avoid vague triggers like **More** or **Options**.
* **Use a default or tertiary button as the trigger:** A primary button signals the main action on the page, which a popover isn't.
* **Close the popover after a confirming action:** When a popover collects input, have the confirming button target it with `command="--hide"` so the merchant isn't left dismissing it manually.
* **Size only when the content needs it:** The popover sizes to its content by default. Reach for `inlineSize` or `maxBlockSize` only when the default is genuinely too narrow or too tall.

## Limitations

* Popovers render in the top layer and reposition to stay within the viewport, but in very constrained spaces the overlay can still be cut off. Prefer compact content.
* Size properties accept fixed values such as `250px` or `50%`. They aren't responsive, so a size that suits a wide viewport can crowd a narrow one.
* The activator relationship is established by `commandFor` matching the popover's `id`. If the `id` is missing, duplicated, or the popover isn't in the document, the trigger silently does nothing.
* A popover isn't a modal. It doesn't trap focus or block interaction with the rest of the page, so use [modal](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/overlays/modal) for content that must be acknowledged.
