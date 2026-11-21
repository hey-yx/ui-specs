---
title: "Shopify Polaris · Button 按钮"
source: https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/actions/button
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-polaris-button
publisher: "Shopify Polaris"
---

# Shopify Polaris · Button 按钮

> 来源：[https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/actions/button](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/actions/button)

---

The button component triggers actions or events, such as submitting forms, opening dialogs, or navigating to other pages. Use buttons to let users perform specific tasks or initiate interactions throughout the interface.

Buttons support various visual styles, tones, and interaction patterns to communicate intent and hierarchy. They can also function as links, guiding users to internal or external destinations. For navigation-focused interactions within text, use [link](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/actions/link). For grouping multiple related buttons, use [button group](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/actions/button-group).

#### Use cases

* **Form submission:** Create submit buttons for forms that save product configurations or settings.
* **Primary actions:** Implement primary actions like "Save changes," "Create resource," or "Apply settings."
* **Secondary actions:** Provide supporting actions such as "Cancel," "Reset," or "View details."
* **Loading states:** Show loading indicators during API calls while preventing duplicate submissions.

```html
<s-button>Save</s-button>
```

## Properties

Configure the following properties on the button component.

* **accessibility​Label**

  **string**

  A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey the component's purpose.

* **command**

  **'--auto' | '--show' | '--hide' | '--toggle'**

  **Default: '--auto'**

  The action that [command](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#command) should take when this component is activated.

  * `--auto`: A default action for the target component.
  * `--show`: Shows the target component.
  * `--hide`: Hides the target component.
  * `--toggle`: Toggles the visibility of the target component.

* **command​For**

  **string**

  The component that [commandFor](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#commandfor) should act on when this component is activated.

* **disabled**

  **boolean**

  **Default: false**

  Whether the button is disabled, preventing it from being clicked or receiving focus.

* **download**

  **string**

  Prompts the browser to download the linked URL rather than navigate to it. When set, the value specifies the suggested filename for the downloaded file.

  The filename suggestion is only respected for same-origin URLs, `blob:`, and `data:` schemes. Cross-origin URLs can still trigger downloads, but browsers might ignore the suggested filename.

  Learn more about the [download attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download).

* **href**

  **string**

  The URL to navigate to when clicked. The `click` event fires first, then navigation occurs. If `commandFor` is also set, the command executes instead of navigation.

* **icon**

  **"" | "replace" | "search" | "split" | "link" | "edit" | "info" | "incomplete" | "complete" | "product" | "variant" | "collection" | "select" | "color" | "money" | "order" | "code" | ... 547 more ... | "x-circle-filled"**

  **Default: ''**

  An icon displayed inside the button, typically positioned before the button text. Use icons to help users quickly identify the button's action or to improve scannability. Accepts any icon name from the icon library or a custom string identifier.

* **inline​Size**

  **"auto" | "fill" | "fit-content"**

  **Default: 'auto'**

  The displayed inline width of the Button.

  * `auto`: the size of the button depends on the surface and context.
  * `fill`: the button will takes up 100% of the available inline size.
  * `fit-content`: the button will take up the minimum inline-size required to fit its content.

* **interest​For**

  **string**

  The ID of the component to show when users hover over or focus on this component. Use this to connect interactive components to popovers or tooltips that provide additional context or information.

* **loading**

  **boolean**

  **Default: false**

  Whether to replace the button content with a loading indicator while a background action is being performed.

  This also disables the button component.

* **target**

  **"auto" | AnyString | "\_blank" | "\_self" | "\_parent" | "\_top"**

  **Default: 'auto'**

  The browsing context where the linked URL should be displayed.

  * `auto`: The target is automatically determined based on the origin of the URL.
  * `_blank`: Opens the URL in a new window or tab.
  * `_self`: Opens the URL in the same browsing context as the current one.
  * `_parent`: Opens the URL in the parent browsing context of the current one. If there is no parent, behaves as `_self`.
  * `_top`: Opens the URL in the topmost browsing context (the highest ancestor of the current one). If there is no ancestor, behaves as `_self`.

* **tone**

  **"critical" | "auto" | "neutral"**

  **Default: 'auto'**

  The semantic meaning and color treatment of the component.

  * `critical`: Urgent problems or destructive actions.
  * `auto`: Automatically determined based on context.
  * `neutral`: General information without specific intent.

* **type**

  **"button" | "reset" | "submit"**

  **Default: 'button'**

  The behavior of the button component.

  * `button`: Used to indicate the component acts as a button, meaning it has no default action.
  * `reset`: Used to indicate the component acts as a reset button, meaning it resets the closest form (returning fields to their default values).
  * `submit`: Used to indicate the component acts as a submit button, meaning it submits the closest form.

  This property is ignored if the component supports `href` or `commandFor`/`command` and one of them is set.

* **variant**

  **"auto" | "primary" | "secondary" | "tertiary"**

  **Default: 'auto'**

  The visual appearance of the button component.

  * `auto`: The variant is automatically determined by the button component's context.
  * `primary`: High emphasis button for the primary action on the page. Should be used sparingly.
  * `secondary`: Medium emphasis button for secondary actions.
  * `tertiary`: Low emphasis button for less important actions.

### AnyString

A utility type that enables autocomplete for specific string literals while still accepting any string value. By intersecting \`string\` with an empty object type, this prevents TypeScript from widening literal types, preserving IDE suggestions for known values while maintaining flexibility for custom strings.

```ts
string & {}
```

### Events

The button component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **blur**

  **CallbackEventListener\<TTagName> | null**

  A callback fired when the button loses focus.

  Learn more about the [blur event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event).

* **click**

  **CallbackEventListener\<TTagName> | null**

  A callback fired when the button is clicked.

  Learn more about the [click event](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event).

* **focus**

  **CallbackEventListener\<TTagName> | null**

  A callback fired when the button receives focus.

  Learn more about the [focus event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event).

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

The button component supports slots for additional content placement within the component. Learn more about [using slots](https://shopify.dev/docs/api/polaris/using-polaris-web-components#slots).

* **children**

  **HTMLElement**

  The label text or elements displayed inside the button component, describing the action that will be performed when clicked.

### Add a basic button

Create a button with a text label to let merchants trigger an action. This example shows the basic button component with default styling.

```html
<s-button>Save</s-button>
```

### Add primary and secondary buttons

Create buttons for actions like saving, creating, or navigating. This example shows primary and secondary buttons with clear, action-oriented labels.

### Set visual emphasis with variants

Use variants to establish a clear visual hierarchy between primary, secondary, and supplementary actions. This example shows all four variant options: primary, secondary, tertiary, and auto.

### Communicate intent with tones

Apply tones to signal the purpose and potential impact of an action through color. This example shows critical tone for destructive actions, neutral tone for less prominent actions, and the default auto tone.

### Add an icon alongside a text label

Combine an icon with a text label to help merchants identify what a button does. This example shows a button with both a text label and an icon to reinforce the action.

### Create compact icon-only buttons for toolbars

Create icon-only buttons to save space in dense interfaces like toolbars and action bars. This example shows multiple icon-only buttons with an `accessibilityLabel` for screen reader support.

### Show loading feedback during async operations

Add a loading state to prevent duplicate submissions and reassure merchants that an action is being processed. This example shows buttons with the loading prop across different variants.

### Disable buttons and submit forms

Disable buttons to prevent interaction when prerequisites are not met, and set type to submit to integrate with HTML forms. This example shows a disabled button alongside a submit button.

### Use buttons for navigation and downloads

Set the `href` property to make buttons navigate like links while maintaining button styling. This example shows internal navigation, opening external URLs in new tabs, and triggering file downloads.

### Confirm destructive actions with critical tone

Pair a cancel button with a critical-toned action button to help merchants avoid accidental destructive operations. This example shows a confirmation pattern for deleting a resource.

### Trigger actions on other components

Use `commandFor` to connect a button to another component by ID, triggering built-in actions like toggling a menu or showing a modal. This example shows a button that opens a menu with a list of additional actions.

## Best practices

* **Label buttons clearly:** Use strong, actionable verbs that clearly and accurately describe the action (like **Save**, **Edit**, or **Add tags**). Write labels in sentence case and avoid unnecessary words and articles (like **a**, **an**, **the**). Don't use punctuation.
* **Use appropriate button tones:** Apply established button tones appropriately. Use critical tone only for destructive actions that are difficult or impossible to undo. Match the tone to the action's impact and importance.
* **Establish clear hierarchy:** Prioritize the most important actions to avoid confusion. Use primary buttons for main actions, secondary buttons for supporting actions, and tertiary buttons for supplementary actions.
* **Position consistently:** Place buttons in consistent locations throughout the interface to create predictable interaction patterns.
* **Icon-only buttons:** For icon-only buttons, always use `accessibilityLabel` to describe the action for screen reader users.

## Limitations

* When using `href` for navigation, external URLs (domains outside Shopify admin) might be blocked or show security warnings depending on the extension context and merchant's browser security settings.
* Setting `loading={true}` provides visual feedback and prevents form submission or multiple clicks. You must implement additional logic to debounce or disable the button action during async operations.
* Icon-only buttons have a minimum touch target size but don't expand to fill available space. They maintain a fixed size based on the icon and padding, which might create layout inconsistencies if mixed with text buttons in the same container.
* Disabled buttons (`disabled={true}`) are removed from the tab order and can't receive keyboard focus. If you disable a button temporarily (for example, while waiting for form validation), then provide visible text explaining why it's disabled. For async operations, use `loading` over `disabled` because `loading` communicates that an action is in progress.

## 设计说明（旧站存档）

> 来源：[https://web.archive.org/web/20240201000000/https://polaris.shopify.com/components/button](https://web.archive.org/web/20240201000000/https://polaris.shopify.com/components/button)

Buttons are used primarily for actions, such as “Add”, “Close”, “Cancel”, or “Save”. Plain buttons, which look similar to links, are used for less important or less commonly used actions, such as “view shipping settings”.

Used most in the interface. Only use another style if a button requires more or less visual weight.

## Props

The content to display inside the button.

Provides extra visual weight and identifies the primary action in a set of buttons.

Indicates a dangerous or potentially negative action.

Changes the size of the button, giving it more or less padding.

Defaults to 'medium' .

Changes the inner text alignment of the button.

Gives the button a subtle alternative to the default button styling, appropriate for certain backdrops.

Allows the button to grow to the width of its container.

Displays the button with a disclosure icon. Defaults to `down` when set to true.

Renders a button that looks like a link.

Makes `plain` and `outline` Button colors (text, borders, icons) the same as the current text color. Also adds an underline to `plain` Buttons.

Removes underline from button text (including on interaction) when `monochrome` and `plain` are true.

Icon to display to the left of the button content.

Disclosure button connected right of the button. Toggles a popover action list.

Indicates whether or not the button is the primary navigation link when rendered inside of an `IndexTable.Row`.

A unique identifier for the button.

A destination to link to, rendered in the href attribute of a link.

Forces url to open in a new tab.

Tells the browser to download the url instead of opening it. Provides a hint for the downloaded filename if it is a string value.

Allows the button to submit a form.

Disables the button, disallowing merchant interaction.

Replaces button text with a spinner while a background action is being performed.

Sets the button in a pressed state.

Visually hidden text for screen readers.

A valid WAI-ARIA role to define the semantic value of this element.

Id of the element the button controls.

Tells screen reader the controlled element is expanded.

Indicates the ID of the element that describes the button.

Indicates the current checked state of the button when acting as a toggle or switch.

Callback when clicked.

Callback when button becomes focussed.

Callback when focus leaves button.

Callback when a keypress event is registered on the button.

Callback when a keyup event is registered on the button.

Callback when a keydown event is registered on the button.

Callback when mouse enter.

Callback when element is touched.

Callback when pointerdown event is being triggered.

## Best practices

Buttons should:

Be clearly and accurately labeled.

Lead with a strong, actionable verb.

Use established button colors appropriately. For example, only use a red button for an action that’s difficult or impossible to undo.

Prioritize the most important actions. Too many calls to action can cause confusion and make merchants unsure of what to do next.

Be positioned in consistent locations in the interface.

### Buttons versus links

Buttons are used primarily for actions, such as “Add”, “Close”, “Cancel”, or “Save”. Plain buttons, which look similar to links, are used for less important or less commonly used actions, such as “view shipping settings”.

Links are used primarily for navigation, and usually appear within or directly following a sentence.

The HTML that renders for the `Button` and `Link` components carries meaning. Using these components intentionally and consistently results in:

a more inclusive experience for assistive technology users

a more cohesive visual experience for sighted users

products that are easier to maintain at scale

## Content guidelines

Buttons should follow the content guidelines for buttons .

## Related components

To combine or lay out multiple buttons, use the button group component

For navigational actions that appear within or directly following a sentence, use the link component

## Accessibility

Buttons can have different states that are visually and programmatically conveyed to merchants.

Use the `ariaControls` prop to add an `aria-controls` attribute to the button. Use the attribute to point to the unique `id` of the content that the button manages.

If a button expands or collapses adjacent content, then use the `ariaExpanded` prop to add the `aria-expanded` attribute to the button. Set the value to convey the current expanded ( `true` ) or collapsed ( `false` ) state of the content.

Use the `disabled` prop to set the `disabled` state of the button. This prevents merchants from being able to interact with the button, and conveys its inactive state to assistive technologies.

Use the `pressed` prop to add an `aria-pressed` attribute to the button.

#### Navigation

Merchants generally expect buttons to submit data or take action, and for links to navigate. If navigation is required for the button component, use the `url` prop. The control will output an anchor styled as a button, instead of a button in HTML, to help convey this difference.

For more information on making accessible links, see the link component .

### Labeling

The `accessibilityLabel` prop adds an `aria-label` attribute to the button, which can be accessed by assistive technologies like screen readers. Typically, this label text replaces the visible text on the button for merchants who use assistive technology.

Use `accessibilityLabel` for a button if:

The button’s visible text doesn’t adequately convey the purpose of the button to non-visual merchants

The button has no text and relies on an icon alone to convey its purpose

To help support merchants who use speech activation software as well as sighted screen reader users, make sure that the `aria-label` text includes any button text that’s visible. Mismatches between visible and programmatic labeling can cause confusion, and might prevent voice recognition commands from working.

When possible, give the button visible text that clearly conveys its purpose without the use of `accessibilityLabel` . When no additional content is needed, duplicating the button text with `accessibilityLabel` isn’t necessary.

#### Do

#### Don’t

#### External links

When you use the button component to create a link to an external resource:

Use the `external` prop to make the link open in a new tab (or window, depending on the merchant’s browser settings)

Use the `icon` prop to add the `external` icon to the button

Use the `accessibilityLabel` prop to include the warning about opening a new tab in the button text for non-visual screen reader users

For more information on making accessible links, see the link component .

#### Do

#### Don’t

### Keyboard support

Buttons use browser defaults for keyboard interactions.

Give buttons keyboard focus with the tab key (or shift + tab when tabbing backwards)

Activate buttons with the enter / return key or the space key

#### Custom key events

Use the `onKeyDown` , `onKeyPress` , and `onKeyUp` props to create custom events for buttons. With these props, you can use buttons to create complex, custom interactions like drag-and-drop interfaces.

Since these props introduce non-standard features to buttons, make sure to include accessible instructions so that merchants can understand how to use these features.
