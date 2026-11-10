---
title: "Shopify Polaris · Banner 横幅提示"
source: https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/feedback-and-status-indicators/banner
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-polaris-banner
publisher: "Shopify Polaris"
---

# Shopify Polaris · Banner 横幅提示

> 来源：[https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/feedback-and-status-indicators/banner](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/feedback-and-status-indicators/banner)

---

The banner component highlights important information or required actions prominently within the interface. Use banner to communicate statuses, provide feedback, draw attention to critical updates, or guide users toward necessary actions.

Banners support multiple tones to convey urgency levels, optional actions for next steps, and can be positioned contextually within sections or page-wide at the top. For inline status indicators on individual items, use [badge](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/feedback-and-status-indicators/badge).

#### Use cases

* **Important announcements:** Communicate critical information about app features or requirements.
* **Error messages:** Display prominent error messages that require merchant attention.
* **Success confirmations:** Show success messages for important operations like saves or sync.
* **Warnings:** Alert merchants to potential issues like missing configuration or deprecated features.

```html
<s-banner heading="Order archived" tone="info" dismissible>
  This order was archived on March 7, 2017 at 3:12pm EDT.
</s-banner>
```

## Properties

Configure the following properties on the banner component.

* **dismissible**

  **boolean**

  **Default: false**

  Whether the banner displays a close button that allows users to dismiss it.

  When the close button is pressed, the `dismiss` event fires, then `hidden` is set to `true`, any animation completes, and the `afterhide` event fires.

* **heading**

  **string**

  **Default: ''**

  The heading text displayed at the top of the banner.

* **hidden**

  **boolean**

  **Default: false**

  Controls whether the banner is visible or hidden.

  When using a controlled component pattern and the banner is `dismissible`, update this property to `true` when the `dismiss` event fires.

  You can hide the banner programmatically by setting this to `true` even if it's not `dismissible`.

* **tone**

  **"info" | "success" | "warning" | "critical" | "auto"**

  **Default: 'auto'**

  The semantic meaning and color treatment of the component.

  * `info`: Informational content or helpful tips.
  * `success`: Positive outcomes or successful states.
  * `warning`: Important warnings about potential issues.
  * `critical`: Urgent problems or destructive actions.
  * `auto`: Automatically determined based on context.

### Events

The banner component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **afterhide**

  **CallbackEventListener\<typeof tagName> | null**

  A callback fired after the banner is hidden.

* **dismiss**

  **CallbackEventListener\<typeof tagName> | null**

  A callback fired when the banner is dismissed.

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

The banner component supports slots for additional content placement within the banner. Learn more about [using slots](https://shopify.dev/docs/api/polaris/using-polaris-web-components#slots).

* **children**

  **HTMLElement**

  The main message content displayed within the banner component, providing important information or guidance to users.

* **secondary-actions**

  **HTMLElement**

  Action buttons displayed at the bottom of the banner that let users respond to the message. Accepts up to two button components with `variant="secondary"` or `variant="auto"`.

### Add a dismissible info banner

Create an informational banner with a heading and body text. This example shows a basic banner communicating a status update that merchants can dismiss.

```html
<s-banner heading="Order archived" tone="info" dismissible>
  This order was archived on March 7, 2017 at 3:12pm EDT.
</s-banner>
```

### Create a warning banner with buttons for next steps

Use a warning-toned banner with secondary action [buttons](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/actions/button) to highlight a problem and give merchants clear next steps. This example shows a shipping weight issue with links to review products and access a setup guide.

### Alert merchants to critical issues requiring action

Use a critical-toned banner to signal an urgent issue that requires immediate merchant action. This example shows a fraud review alert with [buttons](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/actions/button) to review order details and adjust settings.

### Confirm a completed action with a dismissible banner

Use a success-toned banner with the `dismissible` property to confirm a completed operation. This example shows a product import confirmation that merchants can dismiss once acknowledged.

## Best practices

* **Focus on single actions:** Present one piece of information or required action per banner to maintain clarity and prevent confusion.
* **Keep messages concise:** Write scannable content that merchants can quickly understand without spending time deciphering meaning or next steps.
* **Provide clear actions:** Info, warning, and critical banners should include a call to action with specific next steps so merchants know how to proceed.
* **Make dismissible when appropriate:** Allow merchants to dismiss banners unless immediate action's required. Avoid persistent banners that can't be closed.
* **Position contextually:** Place banners outside sections for page-wide messages or inside sections for contextual messages relevant to specific content.

## Limitations

* The dismissed state doesn't persist across page loads or sessions. You must implement your own persistence logic using local storage, cookies, or server-side state.
* Multiple banners stack vertically without built-in prioritization or queueing. If you show multiple banners at once, all appear simultaneously. You must implement banner queueing logic yourself to show one at a time.
* Banners can't be fixed or sticky at the top of the viewport. They scroll with page content.
* Banners don't have built-in truncation or "read more" functionality. Very long banner messages will wrap to multiple lines, creating tall banners that dominate the screen.

## 设计说明（旧站存档）

> 来源：[https://web.archive.org/web/20240201000000/https://polaris.shopify.com/components/banner](https://web.archive.org/web/20240201000000/https://polaris.shopify.com/components/banner)

Informs merchants about important changes or persistent conditions. Use this component if you need to communicate to merchants in a prominent way. Banners are placed at the top of the page or section they apply to, and below the page or section header.

Use to convey general information or actions that aren’t critical. For example, you might show a banner that asks for merchant feedback. Default banners contain lower priority information and should always be dismissible.

## Props

Title content for the banner.

Icon to display in the banner. Use only major, duotone icons.

Sets the status of the banner.

The child elements to render in the banner.

Action for banner.

Action | Displays a secondary action.

Callback when banner is dismissed.

Disables screen reader announcements when changing the content of the banner.

## Best practices

Banners should:

Be used thoughtfully and sparingly for only the most important information.

Not be used to call attention to what a merchant needs to do in the UI instead of making the action clear in the UI itself.

Not be the primary entry point to information or actions merchants need on a regular basis.

Be dismissible unless they contain critical information or an important step merchants need to take.

Use the default icon for `success` , `info` , `warning` and `critical` statuses. If the icon is changed, use only major, duotone icons .

### Placement

Banners should be placed in the appropriate context:

Banners relevant to an entire page should be placed at the top of that page, below the page header. They should occupy the full width of the content area.

Banners related to a section of a page (like a card, popover, or modal) should be placed inside that section, below any section heading. These banners have less spacing and a pared-back design to fit within a content context.

Banners related to an element more specific that a section should be placed immediately above or below that element.

## Content guidelines

Banners should:

Focus on a single theme, piece of information, or required action to avoid overwhelming merchants.

Be concise and scannable—merchants shouldn’t need to spend a lot of time figuring out what they need to know and do.

Be limited to a few important calls to action with no more than one primary action.

Not be used for marketing information or upsell— use callout cards instead.

To learn about writing helpful and accessible error message text, see the guidelines for error messages .

### Title

Banner titles should follow the content guidelines for headings and subheadings .

### Body content

Body content should:

Be concise: keep content to 1 to 2 sentences where possible

Clarify the benefit of the main task

Be written in sentence case and use appropriate punctuation

Avoid repeating the heading

Explain how to resolve the issue, particularly for warning and critical banners

#### Do

Your online store has a maximum of 20 themes. Delete unused themes to add more.

#### Don’t

You have reached your theme limit. Your online store has reached its maximum of 20 themes. To add more themes, delete themes you’re no longer using.

### Button and links

Buttons and links should be:

Clear and predictable: merchants should be able to anticipate what will happen when they click a button. Never deceive merchants by mislabeling a button.

#### Do

Buy shipping label

#### Don’t

Buy

Action-led: buttons should always lead with a strong verb that encourages action. To provide enough context to merchants use the {verb}+{noun} format on buttons except in the case of common actions like Save, Close, Cancel, or OK.

#### Do

Activate Apple Pay

#### Don’t

Try Apple Pay

Scannable: avoid unnecessary words and articles such as the, an, or a.

#### Do

Add menu item

#### Don’t

Add a menu item

Link text should:

Set the expectation of where merchants will be taken

#### Do

Order #001

#### Don’t

Order

Use consistent content to label navigation. For example, if a navigational link leads to a page called Orders, label the link Orders.

#### Do

Payments

#### Don’t

Finance section

### Secondary body content

Body content should be:

Actionable: start sentences with imperative verbs when telling merchants what actions are available to them (especially something new). Don’t use permissive language like “you can”.

#### Do

Get performance data for all your sales channels.

#### Don’t

Now you can get performance data for all your sales channels.

Structured for merchant success: always put the most critical information first.

Clear: use the verb “need” to help merchants understand when they’re required to do something.

#### Do

To buy a shipping label, you need to enter the total weight of your shipment, including packaging.

#### Don’t

To buy a shipping label, you must enter the total weight of your shipment, including packaging.

## Related components

To inform merchants about a new feature or opportunity, use callout cards

To group similar concepts together in the interface, use a card

## Accessibility

Banners provide context and assist workflows for merchants with disabilities.

Critical and warning banners have a `role=”alert”` and are announced by assistive technologies when they appear.

All other banners have a `role=”status”` and are read after any critical announcements.

All banners have an `aria-live` attribute and are announced by assistive technologies when their content is updated. These announcements can be disabled by using the prop `stopAnnouncements` .

Banners use `aria-describedby` to describe their purpose to assistive technologies when they’re announced or receive focus. If a banner has a `title` , then the title content is used for the `aria-describedby` . If the banner doesn’t have a `title` , then all of the banner content is used for the `aria-describedby` .

Banner containers have a `tabindex=”0”` and display a visible keyboard focus indicator. Because of this, merchants can discover banners while tabbing through forms or other interactions, and developers can programmatically move focus to banners.

Banners use a combination of icons and colors to show their meaning and level of importance to merchants.

### Error notifications in forms

#### Critical banners

When merchants submit long or complex forms with errors, use a critical banner to summarize what went wrong. Place the banner at the top of the form and move focus to the banner when the form is submitted. This allows all merchants to move through the form in a logical order to correct the issues.

#### Inline errors

Always include inline error messages for specific form fields so that merchants know what to do in context as they correct their mistakes.

To learn about creating helpful and accessible error message text, see the guidelines for error messages .

#### Do

Put banners close in context to the problem they’re referring to

Give banners with a lot of information a clear title that summarizes their content

Move focus to banners if they’re relevant to the merchant’s current workflow and need to be addressed immediately

#### Don’t

Move focus to banners if they appear on page load, or outside the merchant’s current workflow

Use warning or critical ( `role=”alert”` ) banners to convey information that the merchant doesn’t need to address immediately
