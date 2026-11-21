---
title: "Shopify Polaris · Modal 对话框"
source: https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/overlays/modal
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-polaris-modal
publisher: "Shopify Polaris"
---

# Shopify Polaris · Modal 对话框

> 来源：[https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/overlays/modal](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/overlays/modal)

---

The modal component displays content in an overlay. Use modal to create a distraction-free experience for confirmations, settings panels, or data entry without navigating away from the current page.

A [button](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/actions/button) triggers the modal using the `commandFor` attribute. Content within the modal scrolls if it exceeds available height.

#### Use cases

* **Confirmation dialogs:** Display confirmation prompts for destructive or irreversible actions like deleting resources.
* **Settings panels:** Present focused settings or configuration forms in a distraction-free overlay.
* **Data entry:** Collect structured input through forms displayed in a modal with save and cancel actions.
* **Detail previews:** Show detailed information or previews without navigating away from the current page.

```html
<s-button commandFor="modal">Open</s-button>

<s-modal id="modal" heading="Details">
  <s-paragraph>Displaying more details here.</s-paragraph>

  <s-button slot="secondary-actions" commandFor="modal" command="--hide">
    Close
  </s-button>
  <s-button
    slot="primary-action"
    variant="primary"
    commandFor="modal"
    command="--hide"
  >
    Save
  </s-button>
</s-modal>
```

## Properties

Configure the following properties on the modal component.

* **accessibility​Label**

  **string**

  A label that describes the purpose of the modal. When set, it will be announced to users using assistive technologies and will provide them with more context.

  This overrides the `heading` prop for screen readers.

* **heading**

  **string**

  A title that describes the content of the modal.

* **hide​Overlay**

  **() => void**

  A method to programmatically hide the overlay.

* **padding**

  **"base" | "none"**

  **Default: 'base'**

  Adjust the padding around the modal content.

  `base`: applies padding that is appropriate for the element.

  `none`: removes all padding from the element. This can be useful when elements inside the modal need to span to the edge of the modal. For example, a full-width image. In this case, rely on box with a padding of 'base' to bring back the desired padding for the rest of the content.

* **show​Overlay**

  **() => void**

  A method to programmatically show the overlay.

* **size**

  **"small" | "small-100" | "base" | "large" | "large-100"**

  **Default: 'base'**

  The size of the modal component, controlling its width and height. Larger sizes provide more space for content while smaller sizes are more compact.

* **toggle​Overlay**

  **() => void**

  A method to programmatically toggle the visibility of the overlay.

### Events

The modal component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **afterhide**

  **CallbackEventListener\<TTagName> | null**

  A callback fired after the modal is hidden.

* **aftershow**

  **CallbackEventListener\<TTagName> | null**

  A callback fired after the modal is shown.

* **hide**

  **CallbackEventListener\<TTagName> | null**

  A callback fired when the modal is hidden.

* **show**

  **CallbackEventListener\<TTagName> | null**

  A callback fired when the modal is shown.

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

The modal component supports slots for additional content placement within the component. Learn more about [using slots](https://shopify.dev/docs/api/polaris/using-polaris-web-components#slots).

* **children**

  **HTMLElement**

  The content displayed within the modal component, typically including form fields, information, or interactive elements.

* **primary-action**

  **HTMLElement**

  The main action button displayed in the modal footer, representing the primary action users should take.

  Only accepts a single button component with a `variant` of `primary`. This action should align with the modal's main purpose.

* **secondary-actions**

  **HTMLElement**

  Additional action buttons displayed in the modal footer, providing alternative or supporting actions.

  Only accepts button components with a `variant` of `secondary` or `auto`. These are visually de-emphasized to establish clear hierarchy.

### Confirm a merchant action

Focus merchant attention on a critical decision before proceeding. This example presents a delete confirmation with cancel and confirm buttons.

```html
<s-button commandFor="modal">Open</s-button>

<s-modal id="modal" heading="Details">
  <s-paragraph>Displaying more details here.</s-paragraph>

  <s-button slot="secondary-actions" commandFor="modal" command="--hide">
    Close
  </s-button>
  <s-button
    slot="primary-action"
    variant="primary"
    commandFor="modal"
    command="--hide"
  >
    Save
  </s-button>
</s-modal>
```

### Show information in a modal

Present information that needs merchant acknowledgment. This example displays a simple announcement with a heading and body text.

### Confirm an action with buttons

Provide clear choices with action buttons in the modal footer. This example pairs primary and secondary buttons for confirming or canceling.

### Collect input with a form

Gather information without leaving the current context. This example embeds a feedback form with text inputs and a submit button.

### Choose modal size

Adjust modal width to match your content needs. This example demonstrates small, base, and large size variations.

### Display full-width content

Display media or tables that need full-width space. This example sets the `padding` property to false for edge-to-edge content.

### Delete with async handling

Safely handle destructive operations with proper feedback. This example implements loading states, error handling, and async confirmation.

## Best practices

* Use for focused, specific tasks that require merchants to make a decision or acknowledge critical information.
* Include a prominent and clear call to action.
* Don't nest modals — avoid launching one modal from another.
* Use specific action verbs: label buttons with clear verbs like **Delete**, **Save**, or **Continue** rather than vague terms like **Yes**, **OK**, or **Submit**.
* For destructive actions, explain the consequences in the modal body.
* Use modals sparingly — don't create unnecessary interruptions for actions that could happen on the page directly.

## Limitations

* Modals can only be opened by user interaction, not programmatically on page load.
* The modal always renders centered in the viewport and can't be repositioned.
* Content within the modal scrolls if it exceeds the available height.

## 设计说明（旧站存档）

> 来源：[https://web.archive.org/web/20240201000000/https://polaris.shopify.com/components/modal](https://web.archive.org/web/20240201000000/https://polaris.shopify.com/components/modal)

Modals are overlays that require merchants to take an action before they can continue interacting with the rest of Shopify. They can be disruptive and should be used thoughtfully and sparingly.

Use as the default option for a modal.

## Props

Whether the modal is open or not.

The url that will be loaded as the content of the modal.

The name of the modal content iframe.

The content for the title of the modal.

Hide the title in the modal.

Defaults to false .

The content to display inside modal.

Inner content of the footer.

Disable animations and open modal instantly.

Automatically adds sections to modal.

Increases the modal width.

Decreases the modal width.

Limits modal height on large sceens with scrolling.

Replaces modal content with a spinner while a background action is being performed.

Callback when the modal is closed.

Callback when iframe has loaded.

Callback when modal transition animation has ended.

Callback when the bottom of the modal content is reached.

The element or the RefObject that activates the Modal.

Removes Scrollable container from the modal content.

Sets modal to the height of the viewport on small screens.

Primary action.

Collection of secondary actions.

## Best practices

Use modals for confirmations and conditional changes. They should be thought of as temporary and not be used for information or actions that need to live on in the UI in a persistent way. Don’t use modals to display complex forms or large amounts of information.

Modals should:

Require that merchants take an action.

Close when merchants press the `X` button, the `Cancel` button, the Esc key, or when merchants click or tap the area outside the modal.

Not have more than two buttons (primary and secondary) at the bottom. This prevents unclear action hierarchy and crowding on mobile screens. Since modals are for focused tasks, they should have focused actions. In some cases however, a tertiary action may be appropriate.

## Content guidelines

### Title

Modal titles should:

Use a clear {verb}+{noun} question or statement

Follow the content guidelines for headings and subheadings

#### Do

Edit email address

Delete customer?

Discard unsaved changes?

#### Don’t

Edit the email address for this order

Are you sure you want to delete customer?

Discard?

### Body content

Body content should be:

Actionable: start sentences with imperative verbs when telling a merchant what actions are available to them (especially something new). Don’t use permissive language like "you can".

#### Do

Notification emails will be sent to this address.

This can’t be undone.

#### Don’t

You can edit the email address where emails will be sent.

Are you sure you want to delete the variant Dark Blue Tee/Small/Silk? You cannot reverse this.

Structured for merchant success: always put the most critical information first.

Clear: use the verb “need” to help merchants understand when they’re required to do something.

#### Do

To buy a shipping label, you need to enter the total weight of your shipment, including packaging.

#### Don’t

To buy a shipping label, you must enter the total weight of your shipment, including packaging.

### Primary and secondary actions

Actions should be:

Clear and predictable: merchants should be able to anticipate what will happen when they click a button. Never deceive a merchant by mislabeling an action.

#### Do

Create order

Buy shipping label

#### Don’t

New order

Buy

Action-led: actions should always lead with a strong verb that encourages action. To provide enough context to merchants use the {verb}+{noun} format on actions except in the case of common actions like Save, Close, Cancel, or OK.

#### Do

Activate Apple Pay

View shipping settings

#### Don’t

Try Apple Pay

View your settings

Scannable: avoid unnecessary words and articles such as the, an, or a.

#### Do

Add menu item

#### Don’t

Add a menu item

### Tertiary actions

Tertiary actions should:

Only be used when the action requires the context of the content in the modal

Never be used to dismiss the modal

#### Do

Use a plain button for a tertiary action if needed

#### Don’t

Use a tertiary action for a destructive action

### Footer

Body content should be:

Actionable: start sentences with imperative verbs when telling a merchant what actions are available to them (especially something new). Don’t use permissive language like "you can".

#### Do

Notification emails will be sent to this address.

#### Don’t

You can edit the email address where emails will be sent.

Structured for merchant success: always put the most critical information first.

Clear: use the verb “need” to help merchants understand when they’re required to do something.

#### Do

To buy a shipping label, you need to enter the total weight of your shipment, including packaging.

#### Don’t

To buy a shipping label, you must enter the total weight of your shipment, including packaging.

## Related components

To present large amounts of additional information or actions that don’t require confirmation, use the collapsible component to expand content in place within the page

To present a small amount of content or a menu of actions in a non-blocking overlay, use the popover component

To communicate a change or condition that needs the merchant’s attention within the context of a page, use the banner component

## Accessibility

Modals use ARIA `role=”dialog”` to convey to screen reader users that they work like native dialog windows.

If you set the `title` prop to give the modal component a heading, then the `title` is used to label the dialog element with `aria-labelledby` . This helps to convey the purpose of the modal to screen reader users when it displays.

After a modal is closed, in order to return focus to the button that launched it, pass the button to the modal as an `activator` .

### Keyboard support

When a modal opens, focus moves automatically to the modal container so it can be accessed by keyboard users

While the modal is open, keyboard focus shouldn’t leave the modal

Merchants can dismiss the modal with the keyboard by activating the `X` button, the `Cancel` button if one is provided, or by pressing the Esc key

After a modal is closed, focus returns to the button that launched it
