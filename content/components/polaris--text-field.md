---
title: "Shopify Polaris · Text Field 文本输入"
source: https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/forms/text-field
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-polaris-text-field
publisher: "Shopify Polaris"
---

# Shopify Polaris · Text Field 文本输入

> 来源：[https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/forms/text-field](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/forms/text-field)

---

The text field component captures single-line text input. Use it to collect short, free-form information like names, titles, or identifiers.

The component supports various input configurations including placeholders, character limits, and validation. For multi-line text entry, use [text area](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/forms/text-area). For specialized input types, use [email field](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/forms/email-field), [URL field](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/forms/url-field), [password field](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/forms/password-field), or [search field](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/forms/search-field).

#### Use cases

* **General input:** Collect titles, names, SKUs, or other short text values.
* **Product attributes:** Capture product properties like brand, model, or category.
* **Configuration values:** Input configuration settings requiring single-line text.
* **Search queries:** Provide search input fields for filtering or finding resources.

```html
<s-text-field
  label="Store name"
  value="Jaded Pixel"
  placeholder="Become a merchant"
></s-text-field>
```

## Text​Field

Configure the following properties on the text field component.

* **autocomplete**

  **"on" | "off" | TextAutocompleteField | \`section-${string} one-time-code\` | "shipping one-time-code" | "billing one-time-code" | \`section-${string} shipping one-time-code\` | \`section-${string} billing one-time-code\` | \`section-${string} language\` | \`section-${string} organization\` | \`section-${string} additional-name...**

  **Default: 'on' for everything else**

  A hint as to the intended content of the field.

  When set to `on` (the default), this property indicates that the field should support autofill, but you do not have any more semantic information on the intended contents.

  When set to `off`, you are indicating that this field contains sensitive information, or contents that are never saved, like one-time codes.

  Alternatively, you can provide value which describes the specific data you would like to be entered into this field during autofill.

* **default​Value**

  **string**

  The initial value of the field when it first loads. Unlike `placeholder`, this is a real value that the user can edit and that gets submitted with the form. Once the user starts typing, their input replaces it. Changing this property after the field has loaded has no effect. To update the field value at any time, use `value` instead.

* **details**

  **ComponentChildren**

  Supplementary text displayed below the field to provide additional context, instructions, or help. Use this to clarify the expected input or provide guidance to users. This text is announced to screen readers.

* **disabled**

  **boolean**

  **Default: false**

  Whether the field is disabled, preventing any user interaction.

* **error**

  **ComponentChildren**

  An error message displayed below the field to indicate validation problems. When set, the field is styled with error indicators and the message is announced to screen readers.

* **icon**

  **"replace" | "search" | "split" | "link" | "edit" | "info" | "incomplete" | "complete" | "product" | "variant" | "collection" | "select" | "color" | "money" | "order" | "code" | ... 548 more ... | AnyString**

  **Default: ''**

  An icon displayed inside the field to provide visual context about the expected input or field purpose. Commonly used for search fields, currency inputs, or to indicate field type. Accepts any icon name from the icon library or a custom string identifier.

* **id**

  **string**

  A unique identifier for the element. Use this to reference the element in JavaScript, link labels to form controls, or target specific elements for styling or scripting.

* **label**

  **ComponentChildren**

  The text displayed as the field label, which identifies the purpose of the field to users. This label is associated with the field for accessibility and helps users understand what information to provide.

* **label​Accessibility​Visibility**

  **"visible" | "exclusive"**

  **Default: 'visible'**

  Controls whether the label is visible to all users or only to screen readers.

  * `visible`: The label is shown to everyone (default).
  * `exclusive`: The label is visually hidden but still announced by screen readers.

  Use `exclusive` when the surrounding context makes the label redundant visually, but screen reader users still need it for clarity.

* **max​Length**

  **number**

  **Default: Infinity**

  The maximum number of characters allowed in the field.

* **min​Length**

  **number**

  **Default: 0**

  The minimum number of characters required in the field.

* **name**

  **string**

  The name attribute for the field, used to identify the field's value when the form is submitted. Must be unique within the nearest containing form.

* **placeholder**

  **string**

  The placeholder text displayed in the field when it's empty, providing a hint about the expected input format or value.

* **prefix**

  **string**

  **Default: ''**

  A non-editable text value displayed immediately before the editable portion of the field. This is useful for displaying an implied part of the value, such as `https://` or `+353`.

  This text can't be edited by the user and is not included in the field's value. The prefix might not appear until the user interacts with the field. For example, an inline label might occupy the prefix position until the user focuses the field.

* **read​Only**

  **boolean**

  **Default: false**

  Whether the field is read-only and can't be edited. Read-only fields remain focusable and their content is announced by screen readers.

* **required**

  **boolean**

  **Default: false**

  Whether the field requires a value before form submission. Displays a visual indicator and adds semantic meaning, but doesn't automatically validate or show errors. Use the `error` property to display validation messages.

* **suffix**

  **string**

  **Default: ''**

  A non-editable text value displayed immediately after the editable portion of the field. This is useful for displaying an implied part of the value, such as `@shopify.com` or `%`.

  This text can't be edited by the user and is not included in the field's value. The suffix might not appear until the user interacts with the field. For example, an inline label might occupy the suffix position until the user focuses the field.

* **value**

  **string**

  The current value for the field. If omitted, the field will be empty.

### TextAutocompleteField

Represents autocomplete values that are valid for text input fields. This is a subset of \`AnyAutocompleteField\` containing only fields suitable for text-based inputs. Available values: - \`name\` - Full name - \`given-name\` - First name - \`additional-name\` - Middle name - \`family-name\` - Last name - \`nickname\` - Nickname or handle - \`username\` - Username for login - \`honorific-prefix\` - Name prefix (Mr., Mrs., Dr.) - \`honorific-suffix\` - Name suffix (Jr., Sr., III) - \`organization\` - Company or organization name - \`organization-title\` - Job title or position - \`address-line1\` - Street address (first line) - \`address-line2\` - Street address (second line) - \`address-line3\` - Street address (third line) - \`address-level1\` - State or province - \`address-level2\` - City or town - \`address-level3\` - District or locality - \`address-level4\` - Neighborhood or suburb - \`street-address\` - Complete street address (multi-line) - \`postal-code\` - Postal or ZIP code - \`country\` - Country code (US, CA, GB) - \`country-name\` - Country name (United States, Canada) - \`language\` - Preferred language - \`sex\` - Gender or sex - \`one-time-code\` - One-time codes for authentication - \`transaction-currency\` - Currency code (USD, EUR, GBP) - \`cc-name\` - Name on credit card - \`cc-given-name\` - First name on credit card - \`cc-additional-name\` - Middle name on credit card - \`cc-family-name\` - Last name on credit card - \`cc-type\` - Credit card type (Visa, Mastercard)

```ts
'language' | 'organization' | 'additional-name' | 'address-level1' | 'address-level2' | 'address-level3' | 'address-level4' | 'address-line1' | 'address-line2' | 'address-line3' | 'country-name' | 'country' | 'family-name' | 'given-name' | 'honorific-prefix' | 'honorific-suffix' | 'name' | 'nickname' | 'one-time-code' | 'organization-title' | 'postal-code' | 'sex' | 'street-address' | 'transaction-currency' | 'username' | 'cc-additional-name' | 'cc-family-name' | 'cc-given-name' | 'cc-name' | 'cc-type'
```

### ComponentChildren

Represents any valid children that can be rendered within a component, including elements, strings, numbers, or arrays of these types. This is an alias for Preact's \`ComponentChildren\` type.

```ts
preact.ComponentChildren
```

### AnyString

A utility type that enables autocomplete for specific string literals while still accepting any string value. By intersecting \`string\` with an empty object type, this prevents TypeScript from widening literal types, preserving IDE suggestions for known values while maintaining flexibility for custom strings.

```ts
string & {}
```

### Slots

The text field component supports slots for additional content placement within the component. Learn more about [using slots](https://shopify.dev/docs/api/polaris/using-polaris-web-components#slots).

* **accessory**

  **HTMLElement**

  Additional interactive content displayed within the text field.

  Accepts button and clickable components with text content only. Other component types or complex layouts are not supported.

### Events

The text field component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **blur**

  **CallbackEventListener<'input'>**

  A callback fired when the text field loses focus.

  Learn more about the [blur event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event).

* **change**

  **CallbackEventListener<'input'>**

  A callback fired when the text field value changes.

  Learn more about the [change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event).

* **focus**

  **CallbackEventListener<'input'>**

  A callback fired when the text field receives focus.

  Learn more about the [focus event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event).

* **input**

  **CallbackEventListener<'input'>**

  A callback fired when the user inputs data into the text field.

  Learn more about the [input event](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event).

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

### Add a basic text field

Add a single-line text input for collecting short-form information from merchants. This example shows a text field with a label, pre-filled value, and placeholder.

```html
<s-text-field
  label="Store name"
  value="Jaded Pixel"
  placeholder="Become a merchant"
></s-text-field>
```

### Add an icon to a text field

Add an icon to a text field to help merchants quickly identify its purpose. This example shows a text field with a search icon and placeholder text.

### Provide specific error messages for merchant context

Provide specific error messages to tell merchants what went wrong and what correction is needed. This example shows three text fields contrasting a vague error, a specific validation error, and a business rule error.

### Add a prefix and suffix

Add a prefix or suffix to provide context for the expected value, such as a country code or card type. This example shows a phone number field with a prefix and a credit card field with a suffix.

### Add an accessory to a text field

Place an interactive element like an icon or button inside a text field using the accessory slot. This example shows a text field with an info icon that triggers a tooltip.

### Disable or make a text field read-only

Prevent editing by making a text field read-only or fully disabled. This example shows a read-only store URL that merchants can copy and a disabled account ID.

## Best practices

* **Make expected input clear:** Merchants should immediately understand what to enter and in what format. Ambiguous labels and placeholders force merchants to guess, leading to validation errors and frustration.
* **Provide visual context:** Prefixes and suffixes help merchants understand the type of value expected and its format. Without context, merchants might not know whether they're entering a complete URL or just a subdomain, a full price or just the amount.
* **Set constraints that match requirements:** Define character limits and validation rules based on actual business needs, not arbitrary numbers. Communicate these constraints clearly so merchants know what's expected.
* **Give helpful feedback:** Show merchants whether their input is valid as they type, not just after they submit. When input is invalid, explain specifically what's wrong and how to fix it rather than showing generic error messages.

## Limitations

* The `maxLength` attribute prevents typing beyond the limit, but in some edge cases, pasted or programmatically set content might exceed `maxLength`. Always validate length server-side.
* The `accessory` slot renders content at the end of the field. For best results, use [button](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/actions/button) or [clickable](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/actions/clickable) components with text content.

## 设计说明（旧站存档）

> 来源：[https://web.archive.org/web/20240201000000/https://polaris.shopify.com/components/text-field](https://web.archive.org/web/20240201000000/https://polaris.shopify.com/components/text-field)

A text field is an input field that merchants can type into. It has a range of options and supports several text formats including numbers.

Use to allow merchants to provide text input when the expected input is short. For longer input, use the auto grow or multiline options.

## Props

This component defines its props in a way that our website can't automatically parse. The type definition is shown below, but it might be hard to read.

## Best practices

Text fields should:

Be clearly labeled so it’s obvious to merchants what they should enter into the field

Be labeled as “Optional” when you need to request input that’s not required

Only ask for information that’s really needed

Validate input as soon as merchants have finished interacting with a field (but not before)

### Autocomplete

The autocomplete attribute in an `input` field controls two types of browser behavior:

Browser autofill : a feature that automatically populates form fields with previously-saved information, such as passwords, addresses, and credit card data.

Autofill is an important feature for our users. Google has found that "users complete forms up to 30% faster" when using autofill.

The WHATWG has a list of supported autofill values for the `autocomplete` attribute. Review the section "4.10.18.7 Autofill" for all the input types and their corresponding autocomplete attribute values.

Browser autocomplete - a feature that displays previously submitted values for that field.

When this is on for a field, a user is presented a list with previously submitted values for the input

Recommendation

Always add an autocomplete attribute and value to inputs if the type is: color, date, datetime-local, email, month, number, password, range, search, tel, text, time, url, or week.

#### Turning autofill/autocomplete off

Even if you do not want the browser to autofill a user's information, it is recommended you still have an autocomplete attribute with the value off or nope.

Unfortunately, not all browsers support or respect autocomplete="off". This makes things challenging. Chrome, for example, has a long outstanding bug and won't add support for off for now.

Chrome does seem to turn autocomplete off when using the value nope (or any non valid string). However, we have seen some inconsistencies even with that support.

Recommendation (Chrome only)

Turning off both autofill and browser autocomplete (previously submitted values) in Chrome Use `autocomplete=nope` and also must have a `name` attribute .

Use `autocomplete=nope` and also must have a `name` attribute .

Turning off browser autocomplete (previously submitted values) in Chrome If you don't have `name` attribute and the field is not a typical autofill input (address, email, etc), use `autocomplete=off` .

If you don't have `name` attribute and the field is not a typical autofill input (address, email, etc), use `autocomplete=off` .

### Virtual keyboard

The `inputMode` property should be set to select the appropriate virtual keyboard for the type of data expected to be entered by the user. Above are examples of different number keyboards set with `inputMode` .

## Content guidelines

For text field content guidelines, reference the text fields experience page.

## Related components

To lay out the elements in a responsive form, use the form layout component

To describe an invalid form input with a separate validation error, use the inline error component

It’s common to use a select component connected to the left or right of a text field.

## Accessibility

### Structure

Screen readers convey information about text fields automatically through native HTML.

Use the `disabled` prop to add the HTML `disabled` attribute to the text field.

Use the `readOnly` prop to add the HTML `readonly` attribute to the text field.

If you use the `type` prop, then some assistive technologies adapt the software keyboard to the current task. This helps merchants with mobility, vision, and cognitive issues to enter information more easily.

Use the `id` prop to provide a unique `id` attribute value for the text field. If you don't provide an `id` , then the component generates one automatically. All text fields need to have unique `id` values.

### Labeling

The `label` prop is required to convey the purpose of the checkbox to all merchants.

If there are separate visual cues that convey the purpose of the text field to sighted merchants, then the label can be visually hidden with the `labelHidden` prop.

When you provide help text via the `helpText` prop or an inline error message via the `error` prop, the help or error content is conveyed to screen reader users with the `aria-describedby` attribute. This attribute causes the content to be read along with the label, either immediately or after a short delay.

Use the `placeholder` prop to provide additional instructions. However, don’t rely on placeholders alone since the content isn’t always conveyed to all merchants.

#### Do

Use the label to provide instructions critical to using the text field

Use help text and placeholder text to provide additional, non-critical instructions

#### Don’t

Use the placeholder to provide information that’s required to use the text field.

### Keyboard support

Text fields have standard keyboard support.

Merchants who rely on the keyboard expect to move focus to each text field using the tab key (or shift + tab when tabbing backwards)

If the `type` is set to `number` , then merchants can use the up and down arrow keys to adjust the value typed into the field

Using the `disabled` prop will prevent the text field from receive keyboard focus or inputs

The `readOnly` prop allows focus on the text field but prevents input or editing

The `inputMode` prop can be used to bring up a relevant keyboard for merchants on mobile; it’s passed down to the input as an `inputmode` attribute

#### Automatically focusing

Although you can use the `autoFocus` prop to automatically move focus to the text field, it’s generally best to avoid focusing on fields automatically. The `autoFocus` prop is set to `false` by default and should only be used in cases where it won’t force focus to skip other controls or content of equal or greater importance.
