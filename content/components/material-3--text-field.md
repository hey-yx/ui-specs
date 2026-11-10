---
title: "Material 3 · Component · Text field 文本框"
source: https://github.com/material-components/material-web/blob/main/docs/components/text-field.md
section: components
tag: "规范"
fetched: 2026-11-08
status: full
id: components-material-3--text-field
publisher: "Google"
---

# Material 3 · Component · Text field 文本框

> 来源：[https://github.com/material-components/material-web/blob/main/docs/components/text-field.md](https://github.com/material-components/material-web/blob/main/docs/components/text-field.md)

**This documentation is fully rendered on the
[Material Web catalog](https://material-web.dev/components/text-field/)**

[Text fields](https://m3.material.io/components/text-fields) let
users enter text into a UI.

*   [Design article](https://m3.material.io/components/text-fields)
*   [API Documentation](#api)
*   [Source code](https://github.com/material-components/material-web/tree/main/textfield)

## Types

1.  [Filled text field](#filled-text-field)
1.  [Outlined text field](#outlined-text-field)

## Usage

Text fields behave like
[``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
elements. They provide a container with labels for user input.

prefilled](images/textfield/usage.webp)

```html
<md-filled-text-field label="Label" value="Value">
</md-filled-text-field>

<md-outlined-text-field label="Label" value="Value">
</md-outlined-text-field>
```

### Input type

A text field's `type` attribute changes how the text field works, such as
displaying a different keyboard or providing default validation.

-   [`type="text"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text)
    (default)
-   [`type="email"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email)

-   [`type="number"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number)

-   [`type="password"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password)

-   [`type="search"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search)

-   [`type="tel"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel)

-   [`type="url"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/url)

-   [`type="textarea"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)

and the outlined one has a label of Password](images/textfield/usage-type.webp)

```html
<md-filled-text-field label="Username" type="email">
</md-filled-text-field>

<md-filled-text-field label="Password" type="password">
</md-filled-text-field>
```

> Tip: use the
> [`inputmode`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode)
> attribute for more control over the displayed keyboard.

### Labels

Text fields should label their value with a floating `label`, a `placeholder`,
or an external label. Labels help the user understand what value to input.

Favorite food, the second one a placeholder of email@domain.com and there is a
label that says First name and an empty outlined textfield next to
it](images/textfield/usage-label.webp)

```html
<md-outlined-text-field label="Favorite food">
</md-outlined-text-field>

<md-outlined-text-field placeholder="email@domain.com">
</md-outlined-text-field>

<div>First name</div>
<md-outlined-text-field aria-label="First name">
</md-outlined-text-field>
```

> Note: text fields do not currently support `aria-labelledby`. External labels
> must provide an `aria-label`. See b/276484803.

### Textarea

Multi-line text fields behave like
[``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
elements.

Textareas can specify the initial number of `rows`. Use CSS `width`, `height`,
and `resize` to control the resize behavior of a textarea.

resize](images/textfield/usage-textarea.webp)

```html
<style>
  md-filled-text-field {
    resize: vertical;
  }
</style>
<md-filled-text-field
    type="textarea"
    label="Vertical resize"
    rows="3">
</md-filled-text-field>
```

### Icons

Text fields may display optional icons. Use icons to describe the input method
(such as a search icon), provide additional functionality (such as a clear
icon), or to express errors.

the start the label Search Messages, the second a label that says Password and
an eye icon toggle button at the end, and a red, visually errored outlined
textfield with the label Username with an exclamation icon at the end and helper
error text under the field that says Username not
available](images/textfield/usage-icons.webp)

```html
<md-outlined-text-field placeholder="Search for messages" has-leading-icon>
  <md-icon slot="leading-icon">search</md-icon>
</md-outlined-text-field>

<md-outlined-text-field label="Password" type="password" has-trailing-icon>
  <md-icon-button toggle slot="trailing-icon">
    <md-icon>visibility</md-icon>
    <md-icon slot="selected">visibility_off</md-icon>
  </md-icon-button>
</md-outlined-text-field>

<md-outlined-text-field
    label="Username"
    error
    error-text="Username not available"
    has-trailing-icon>
  <md-icon slot="trailing-icon">error</md-icon>
</md-outlined-text-field>
```

### Prefix and suffix

Add `prefix-text` and `suffix-text` attributes to text fields to display
additional context for the value.

dollar sign, the number zero as a value and a suffix of decimal zero zero at the
end of the field](images/textfield/usage-prefix.webp)

```html
<md-outlined-text-field
    label="Dollar amount"
    type="number"
    value="0"
    prefix-text="$"
    suffix-text=".00">
</md-outlined-text-field>
```

### Supporting text

Supporting text conveys additional information about the input field, such as
how it will be used. Supporting text can be replaced with error text when
[validating](#validation).

and supporting text under the field that says Provide comments for the issue.
The second field has a label of Name with an asterisk and supporting text under
the field that has an asterisk followed by the word
required](images/textfield/usage-supporting-text.webp)

```html
<md-filled-text-field
    label="Comments"
    supporting-text="Provide comments for the issue">
</md-filled-text-field>

<md-filled-text-field
    label="Name"
    required
    supporting-text="*required"
    error-text="Please fill out this field">
</md-filled-text-field>
```

### Character counter

Text fields with a `maxlength` attribute will display a character counter.

that says Short and the text 5 / 10 under the field at the
end](images/textfield/usage-char-counter.webp)

```html
<md-outlined-text-field label="Title" value="Short" maxlength="10">
</md-outlined-text-field>
```

### Validation

Text fields that validate can use
[constraint validation](#constraint-validation) or
[manual validation](#manual-validation).

#### Constraint validation

Text fields may validate using the browser's
[constraint validation](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation)
API. Each [input type](#input-type) above links to an article that describes how
to validate it.

Text fields in a `` will validate on submission, or by calling
`textField.reportValidity()`.

```html
<form>
  <md-filled-text-field
      name="name"
      label="Name"
      required>
  </md-filled-text-field>
  <md-filled-text-field
      name="email"
      label="Email"
      pattern="[\w\d-]+"
      suffix-text="@gmail.com">
  </md-filled-text-field>
</form>
```

Use the following properties and methods to check and report validation errors.

-   `validity` is the text field's current
    [`ValidityState`](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState).
-   [`setCustomValidity()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setCustomValidity)
    sets a custom error message.
-   [`checkValidity()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checkValidity)
    dispatches an
    [`invalid` event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/invalid_event).
-   [`reportValidity()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/reportValidity)
    dispatches an
    [`invalid` event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/invalid_event)
    and displays the error in the text field's supporting text.

#### Manual validation

Alternatively, text fields can manually control their error state and error
message. Use manual validation if the text fields are driven by application
state logic.

```html
<md-outlined-text-field
    label="Username"
    value="jdoe"
    error
    error-text="Username is not available">
</md-outlined-text-field>
```

> Tip: Prefer [constraint validation](#constraint-validation) when possible for
> more platform features, such as `` validation and listening to `invalid`
> events.

## Accessibility

Add an
[`aria-label`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)
attribute to text fields with external labels or text fields whose labels need
to be more descriptive.

```html
<div>Username</div>
<md-filled-text-field aria-label="Username"></md-filled-text-field>

<md-filled-text-field label="First" aria-label="First name"></md-filled-text-field>
```

## Filled text field

Filled and outlined text fields are functionally identical. See
[choosing a text field](https://m3.material.io/components/text-fields/guidelines#83956188-4d8f-4c11-9389-aaba30b10214)
for guidance on which one to use.

```html
<md-filled-text-field label="Filled" value="Value"></md-filled-text-field>
```

## Outlined text field

Filled and outlined text fields are functionally identical. See
[choosing a text field](https://m3.material.io/components/text-fields/guidelines#83956188-4d8f-4c11-9389-aaba30b10214)
for guidance on which one to use.

```html
<md-outlined-text-field label="Outlined" value="Value"></md-outlined-text-field>
```

## Theming

Text fields support [Material theming](../theming/README.md) and can be
customized in terms of color, typography, and shape.

### Filled text field tokens

Token                                                 | Default value
----------------------------------------------------- | -------------
`--md-filled-text-field-container-shape`              | `--md-sys-shape-corner-extra-small`
`--md-filled-text-field-container-color`              | `--md-sys-color-surface-container-highest`
`--md-filled-text-field-focus-active-indicator-color` | `--md-sys-color-primary`
`--md-filled-text-field-input-text-font`              | `--md-sys-typescale-body-large-font`
`--md-filled-text-field-label-text-font`              | `--md-sys-typescale-body-large-font`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-filled-text-field.scss)

### Filled text field example

```html
<style>
:root {
  --md-filled-text-field-container-shape: 0px;
  --md-sys-typescale-body-large: 400 1rem system-ui;
  --md-sys-color-primary: #006a6a;
  --md-sys-color-surface-container-highest: #e0e3e2;
  --md-filled-text-field-label-text-color: #3f4948;
  --md-filled-text-field-input-text-color: #161d1d;
}
</style>

<md-filled-text-field label="Filled" value="Value">
</md-filled-text-field>
```

### Outlined text field tokens

Token                                          | Default value
---------------------------------------------- | -------------
`--md-outlined-text-field-container-shape`     | `--md-sys-shape-corner-extra-small`
`--md-outlined-text-field-focus-outline-color` | `--md-sys-color-primary`
`--md-outlined-text-field-input-text-font`     | `--md-sys-typescale-body-large-font`
`--md-outlined-text-field-label-text-font`     | `--md-sys-typescale-body-large-font`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-outlined-text-field.scss)

### Outlined text field example

```html
<style>
:root {
  --md-outlined-text-field-container-shape: 0px;
  --md-sys-typescale-body-large: 400 1rem system-ui;
  --md-sys-color-primary: #006a6a;
  --md-outlined-text-field-label-text-color: #3f4948;
  --md-outlined-text-field-input-text-color: #161d1d;
}
</style>

<md-outlined-text-field label="Outlined" value="Value"></md-outlined-text-field>
```

## API

### MdFilledTextField

#### Properties

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `error` | `error` | `boolean` | `false` | Gets or sets whether or not the text field is in a visually invalid state.This error state overrides the error state controlled by `reportValidity()`. |
| `errorText` | `error-text` | `string` | `''` | The error message that replaces supporting text when `error` is true. If `errorText` is an empty string, then the supporting text will continue to show.This error message overrides the error message displayed by `reportValidity()`. |
| `label` | `label` | `string` | `''` | The floating Material label of the textfield component. It informs the user about what information is requested for a text field. It is aligned with the input text, is always visible, and it floats when focused or when text is entered into the textfield. This label also sets accessibilty labels, but the accessible label is overriden by `aria-label`.Learn more about floating labels from the Material Design guidelines: https://m3.material.io/components/text-fields/guidelines |
| `noAsterisk` | `no-asterisk` | `boolean` | `false` | Disables the asterisk on the floating label, when the text field is required. |
| `required` | `required` | `boolean` | `false` | Indicates that the user must specify a value for the input before the owning form can be submitted and will render an error state when `reportValidity()` is invoked when value is empty. Additionally the floating label will render an asterisk `"*"` when true.https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required |
| `value` | `value` | `string` | `''` | The current value of the text field. It is always a string. |
| `prefixText` | `prefix-text` | `string` | `''` | An optional prefix to display before the input value. |
| `suffixText` | `suffix-text` | `string` | `''` | An optional suffix to display after the input value. |
| `hasLeadingIcon` | `has-leading-icon` | `boolean` | `false` | Whether or not the text field has a leading icon. Used for SSR. |
| `hasTrailingIcon` | `has-trailing-icon` | `boolean` | `false` | Whether or not the text field has a trailing icon. Used for SSR. |
| `supportingText` | `supporting-text` | `string` | `''` | Conveys additional information below the text field, such as how it should be used. |
| `textDirection` | `text-direction` | `string` | `''` | Override the input text CSS `direction`. Useful for RTL languages that use LTR notation for fractions. |
| `rows` | `rows` | `number` | `2` | The number of rows to display for a `type="textarea"` text field. Defaults to 2. |
| `cols` | `cols` | `number` | `20` | The number of cols to display for a `type="textarea"` text field. Defaults to 20. |
| `inputMode` | `inputmode` | `string` | `''` |  |
| `max` | `max` | `string` | `''` | Defines the greatest value in the range of permitted values.https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#max |
| `maxLength` | `maxlength` | `number` | `-1` | The maximum number of characters a user can enter into the text field. Set to -1 for none.https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#maxlength |
| `min` | `min` | `string` | `''` | Defines the most negative value in the range of permitted values.https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#min |
| `minLength` | `minlength` | `number` | `-1` | The minimum number of characters a user can enter into the text field. Set to -1 for none.https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#minlength |
| `noSpinner` | `no-spinner` | `boolean` | `false` | When true, hide the spinner for `type="number"` text fields. |
| `pattern` | `pattern` | `string` | `''` | A regular expression that the text field's value must match to pass constraint validation.https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#pattern |
| `placeholder` | `placeholder` | `string` | `''` | Defines the text displayed in the textfield when it has no value. Provides a brief hint to the user as to the expected type of data that should be entered into the control. Unlike `label`, the placeholder is not visible and does not float when the textfield has a value.https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/placeholder |
| `readOnly` | `readonly` | `boolean` | `false` | Indicates whether or not a user should be able to edit the text field's value.https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#readonly |
| `multiple` | `multiple` | `boolean` | `false` | Indicates that input accepts multiple email addresses.https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#multiple |
| `step` | `step` | `string` | `''` | Returns or sets the element's step attribute, which works with min and max to limit the increments at which a numeric or date-time value can be set.https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#step |
| `type` | `type` | `TextFieldType \| UnsupportedTextFieldType` | `'text'` | The `` type to use, defaults to "text". The type greatly changes how the text field behaves.Text fields support a limited number of `` types:- text - textarea - email - number - password - search - tel - urlSee https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types for more details on each input type. |
| `autocomplete` | `autocomplete` | `string` | `''` | Describes what, if any, type of autocomplete functionality the input should provide.https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete |
| `name` | `name` | `string` | `undefined` | The HTML name to use in form submission. |
| `disabled` | `disabled` | `boolean` | `undefined` | Whether or not the element is disabled. |
| `selectionDirection` |  | `"none" \| "forward" \| "backward"` | `undefined` |  |
| `selectionEnd` |  | `number` | `undefined` |  |
| `selectionStart` |  | `number` | `undefined` |  |
| `valueAsNumber` |  | `number` | `undefined` |  |
| `valueAsDate` |  | `Date` | `undefined` |  |
| `form` |  | `HTMLFormElement` | `undefined` | The associated form element with which this element's value will submit. |
| `labels` |  | `NodeList` | `undefined` | The labels this element is associated with. |
| `validity` |  | `ValidityState` | `undefined` | Returns a ValidityState object that represents the validity states of the element.https://developer.mozilla.org/en-US/docs/Web/API/ValidityState |
| `validationMessage` |  | `string` | `undefined` | Returns a validation error message or an empty string if the element is valid.https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/validationMessage |
| `willValidate` |  | `boolean` | `undefined` | Returns whether an element will successfully validate based on forms validation rules and constraints.Disabled and readonly elements will not validate.https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/willValidate |

#### Methods

| Method | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `select` | _None_ | `void` | Selects all the text in the text field.https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select |
| `setRangeText` | `args` | `void` |  |
| `setSelectionRange` | `start`, `end`, `direction` | `void` | Sets the start and end positions of a selection in the text field.https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange |
| `showPicker` | _None_ | `void` | Shows the browser picker for an input element of type "date", "time", etc.For a full list of supported types, see: https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/showPicker#browser_compatibilityhttps://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/showPicker |
| `stepDown` | `stepDecrement` | `void` | Decrements the value of a numeric type text field by `step` or `n` `step` number of times.https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepDown |
| `stepUp` | `stepIncrement` | `void` | Increments the value of a numeric type text field by `step` or `n` `step` number of times.https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepUp |
| `reset` | _None_ | `void` | Reset the text field to its default value. |
| `formResetCallback` | _None_ | `void` |  |
| `formStateRestoreCallback` | `state` | `void` |  |
| `checkValidity` | _None_ | `boolean` | Checks the element's constraint validation and returns true if the element is valid or false if not.If invalid, this method will dispatch an `invalid` event.https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/checkValidity |
| `reportValidity` | _None_ | `boolean` | Checks the element's constraint validation and returns true if the element is valid or false if not.If invalid, this method will dispatch a cancelable `invalid` event. If not canceled, a the current `validationMessage` will be reported to the user.https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/reportValidity |
| `setCustomValidity` | `error` | `void` | Sets the element's constraint validation error message. When set to a non-empty string, `validity.customError` will be true and `validationMessage` will display the provided error.Use this method to customize error messages reported.https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setCustomValidity |

#### Events

| Event | Type | [Bubbles](https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles) | [Composed](https://developer.mozilla.org/en-US/docs/Web/API/Event/composed) | Description |
| --- | --- | --- | --- | --- |
| `select` | `Event` | Yes | No | The native `select` event on [``](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select_event) |
| `change` | `Event` | Yes | No | The native `change` event on [``](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) |
| `input` | `InputEvent` | Yes | Yes | The native `input` event on [``](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) |

### MdOutlinedTextField

#### Properties

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `error` | `error` | `boolean` | `false` | Gets or sets whether or not the text field is in a visually invalid state.This error state overrides the error state controlled by `reportValidity()`. |
| `errorText` | `error-text` | `string` | `''` | The error message that replaces supporting text when `error` is true. If `errorText` is an empty string, then the supporting text will continue to show.This error message overrides the error message displayed by `reportValidity()`. |
| `label` | `label` | `string` | `''` | The floating Material label of the textfield component. It informs the user about what information is requested for a text field. It is aligned with the input text, is always visible, and it floats when focused or when text is entered into the textfield. This label also sets accessibilty labels, but the accessible label is overriden by `aria-label`.Learn more about floating labels from the Material Design guidelines: https://m3.material.io/components/text-fields/guidelines |
| `noAsterisk` | `no-asterisk` | `boolean` | `false` | Disables the asterisk on the floating label, when the text field is required. |
| `required` | `required` | `boolean` | `false` | Indicates that the user must specify a value for the input before the owning form can be submitted and will render an error state when `reportValidity()` is invoked when value is empty. Additionally the floating label will render an asterisk `"*"` when true.https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required |
| `value` | `value` | `string` | `''` | The current value of the text field. It is always a string. |
| `prefixText` | `prefix-text` | `string` | `''` | An optional prefix to display before the input value. |
| `suffixText` | `suffix-text` | `string` | `''` | An optional suffix to display after the input value. |
| `hasLeadingIcon` | `has-leading-icon` | `boolean` | `false` | Whether or not the text field has a leading icon. Used for SSR. |
| `hasTrailingIcon` | `has-trailing-icon` | `boolean` | `false` | Whether or not the text field has a trailing icon. Used for SSR. |
| `supportingText` | `supporting-text` | `string` | `''` | Conveys additional information below the text field, such as how it should be used. |
| `textDirection` | `text-direction` | `string` | `''` | Override the input text CSS `direction`. Useful for RTL languages that use LTR notation for fractions. |
| `rows` | `rows` | `number` | `2` | The number of rows to display for a `type="textarea"` text field. Defaults to 2. |
| `cols` | `cols` | `number` | `20` | The number of cols to display for a `type="textarea"` text field. Defaults to 20. |
| `inputMode` | `inputmode` | `string` | `''` |  |
| `max` | `max` | `string` | `''` | Defines the greatest value in the range of permitted values.https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#max |
| `maxLength` | `maxlength` | `number` | `-1` | The maximum number of characters a user can enter into the text field. Set to -1 for none.https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#maxlength |
| `min` | `min` | `string` | `''` | Defines the most negative value in the range of permitted values.https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#min |
| `minLength` | `minlength` | `number` | `-1` | The minimum number of characters a user can enter into the text field. Set to -1 for none.https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#minlength |
| `noSpinner` | `no-spinner` | `boolean` | `false` | When true, hide the spinner for `type="number"` text fields. |
| `pattern` | `pattern` | `string` | `''` | A regular expression that the text field's value must match to pass constraint validation.https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#pattern |
| `placeholder` | `placeholder` | `string` | `''` | Defines the text displayed in the textfield when it has no value. Provides a brief hint to the user as to the expected type of data that should be entered into the control. Unlike `label`, the placeholder is not visible and does not float when the textfield has a value.https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/placeholder |
| `readOnly` | `readonly` | `boolean` | `false` | Indicates whether or not a user should be able to edit the text field's value.https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#readonly |
| `multiple` | `multiple` | `boolean` | `false` | Indicates that input accepts multiple email addresses.https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#multiple |
| `step` | `step` | `string` | `''` | Returns or sets the element's step attribute, which works with min and max to limit the increments at which a numeric or date-time value can be set.https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#step |
| `type` | `type` | `TextFieldType \| UnsupportedTextFieldType` | `'text'` | The `` type to use, defaults to "text". The type greatly changes how the text field behaves.Text fields support a limited number of `` types:- text - textarea - email - number - password - search - tel - urlSee https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types for more details on each input type. |
| `autocomplete` | `autocomplete` | `string` | `''` | Describes what, if any, type of autocomplete functionality the input should provide.https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete |
| `name` | `name` | `string` | `undefined` | The HTML name to use in form submission. |
| `disabled` | `disabled` | `boolean` | `undefined` | Whether or not the element is disabled. |
| `selectionDirection` |  | `"none" \| "forward" \| "backward"` | `undefined` |  |
| `selectionEnd` |  | `number` | `undefined` |  |
| `selectionStart` |  | `number` | `undefined` |  |
| `valueAsNumber` |  | `number` | `undefined` |  |
| `valueAsDate` |  | `Date` | `undefined` |  |
| `form` |  | `HTMLFormElement` | `undefined` | The associated form element with which this element's value will submit. |
| `labels` |  | `NodeList` | `undefined` | The labels this element is associated with. |
| `validity` |  | `ValidityState` | `undefined` | Returns a ValidityState object that represents the validity states of the element.https://developer.mozilla.org/en-US/docs/Web/API/ValidityState |
| `validationMessage` |  | `string` | `undefined` | Returns a validation error message or an empty string if the element is valid.https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/validationMessage |
| `willValidate` |  | `boolean` | `undefined` | Returns whether an element will successfully validate based on forms validation rules and constraints.Disabled and readonly elements will not validate.https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/willValidate |

#### Methods

| Method | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `select` | _None_ | `void` | Selects all the text in the text field.https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select |
| `setRangeText` | `args` | `void` |  |
| `setSelectionRange` | `start`, `end`, `direction` | `void` | Sets the start and end positions of a selection in the text field.https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange |
| `showPicker` | _None_ | `void` | Shows the browser picker for an input element of type "date", "time", etc.For a full list of supported types, see: https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/showPicker#browser_compatibilityhttps://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/showPicker |
| `stepDown` | `stepDecrement` | `void` | Decrements the value of a numeric type text field by `step` or `n` `step` number of times.https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepDown |
| `stepUp` | `stepIncrement` | `void` | Increments the value of a numeric type text field by `step` or `n` `step` number of times.https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepUp |
| `reset` | _None_ | `void` | Reset the text field to its default value. |
| `formResetCallback` | _None_ | `void` |  |
| `formStateRestoreCallback` | `state` | `void` |  |
| `checkValidity` | _None_ | `boolean` | Checks the element's constraint validation and returns true if the element is valid or false if not.If invalid, this method will dispatch an `invalid` event.https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/checkValidity |
| `reportValidity` | _None_ | `boolean` | Checks the element's constraint validation and returns true if the element is valid or false if not.If invalid, this method will dispatch a cancelable `invalid` event. If not canceled, a the current `validationMessage` will be reported to the user.https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/reportValidity |
| `setCustomValidity` | `error` | `void` | Sets the element's constraint validation error message. When set to a non-empty string, `validity.customError` will be true and `validationMessage` will display the provided error.Use this method to customize error messages reported.https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setCustomValidity |

#### Events

| Event | Type | [Bubbles](https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles) | [Composed](https://developer.mozilla.org/en-US/docs/Web/API/Event/composed) | Description |
| --- | --- | --- | --- | --- |
| `select` | `Event` | Yes | No | The native `select` event on [``](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select_event) |
| `change` | `Event` | Yes | No | The native `change` event on [``](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) |
| `input` | `InputEvent` | Yes | Yes | The native `input` event on [``](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) |
