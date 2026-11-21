---
title: "Shopify Polaris · Form 表单"
source: https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/forms/form
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-polaris-form
publisher: "Shopify Polaris"
---

# Shopify Polaris · Form 表单

> 来源：[https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/forms/form](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/forms/form)

---

The form component wraps form controls and enables implicit submission, allowing users to submit from any input by pressing **Enter**. Use form to group related input fields and handle form submission through JavaScript event handlers. Unlike HTML forms, form doesn't automatically submit data using HTTP.

You must register a `submit` event to process form data programmatically. If your handler performs async work, return a promise from it so the extension runtime can wait for the save to settle before tearing down. See [Handle async submission](#handle-async-submission).

#### Use cases

* **Product configuration:** Create forms for configuring product bundles or relationships.
* **Settings panels:** Build settings interfaces that integrate with the Contextual Save Bar.
* **Data entry:** Collect structured data from merchants with proper validation.
* **Bulk editing:** Enable bulk editing of product properties or inventory levels.

```html
<s-form>
  <s-text-field label="Email address" />
  <s-button variant="primary" type="submit">Submit</s-button>
</s-form>
```

### Events

The form component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **reset**

  **CallbackEventListener\<typeof tagName> | null**

  A callback that is run when the form is reset.

* **submit**

  **CallbackExtendableEventListener\<typeof tagName> | null**

  A callback that is run when the form is submitted.

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

### CallbackExtendableEventListener

A function that handles extendable events from UI components. This type represents an event listener callback that can use \`waitUntil\` to extend the event lifetime.

```ts
(EventListener & {
      (event: CallbackExtendableEvent<TTagName>): void;
    }) | null
```

### CallbackExtendableEvent

* AT\_TARGET

  ```ts
  2
  ```

* bubbles

  The \*\*\`bubbles\`\*\* read-only property of the Event interface indicates whether the event bubbles up through the DOM tree or not. \[MDN Reference]\(https://developer.mozilla.org/docs/Web/API/Event/bubbles)

  ```ts
  boolean
  ```

* BUBBLING\_PHASE

  ```ts
  3
  ```

* cancelable

  The \*\*\`cancelable\`\*\* read-only property of the Event interface indicates whether the event can be canceled, and therefore prevented as if the event never happened. \[MDN Reference]\(https://developer.mozilla.org/docs/Web/API/Event/cancelable)

  ```ts
  boolean
  ```

* cancelBubble

  The \*\*\`cancelBubble\`\*\* property of the Event interface is deprecated.

  ```ts
  boolean
  ```

* CAPTURING\_PHASE

  ```ts
  1
  ```

* composed

  The read-only \*\*\`composed\`\*\* property of the or not the event will propagate across the shadow DOM boundary into the standard DOM. \[MDN Reference]\(https://developer.mozilla.org/docs/Web/API/Event/composed)

  ```ts
  boolean
  ```

* composedPath

  The \*\*\`composedPath()\`\*\* method of the Event interface returns the event's path which is an array of the objects on which listeners will be invoked. \[MDN Reference]\(https://developer.mozilla.org/docs/Web/API/Event/composedPath)

  ```ts
  () => EventTarget[]
  ```

* currentTarget

  The \*\*\`currentTarget\`\*\* read-only property of the Event interface identifies the element to which the event handler has been attached. \[MDN Reference]\(https://developer.mozilla.org/docs/Web/API/Event/currentTarget)

  ```ts
  EventTarget | null
  ```

* defaultPrevented

  The \*\*\`defaultPrevented\`\*\* read-only property of the Event interface returns a boolean value indicating whether or not the call to Event.preventDefault() canceled the event. \[MDN Reference]\(https://developer.mozilla.org/docs/Web/API/Event/defaultPrevented)

  ```ts
  boolean
  ```

* eventPhase

  The \*\*\`eventPhase\`\*\* read-only property of the being evaluated. \[MDN Reference]\(https://developer.mozilla.org/docs/Web/API/Event/eventPhase)

  ```ts
  number
  ```

* initEvent

  The \*\*\`Event.initEvent()\`\*\* method is used to initialize the value of an event created using Document.createEvent().

  ```ts
  (type: string, bubbles?: boolean, cancelable?: boolean) => void
  ```

* isTrusted

  The \*\*\`isTrusted\`\*\* read-only property of the when the event was generated by the user agent (including via user actions and programmatic methods such as HTMLElement.focus()), and \`false\` when the event was dispatched via The only exception is the \`click\` event, which initializes the \`isTrusted\` property to \`false\` in user agents. \[MDN Reference]\(https://developer.mozilla.org/docs/Web/API/Event/isTrusted)

  ```ts
  boolean
  ```

* NONE

  ```ts
  0
  ```

* preventDefault

  The \*\*\`preventDefault()\`\*\* method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be. \[MDN Reference]\(https://developer.mozilla.org/docs/Web/API/Event/preventDefault)

  ```ts
  () => void
  ```

* returnValue

  The Event property \*\*\`returnValue\`\*\* indicates whether the default action for this event has been prevented or not.

  ```ts
  boolean
  ```

* srcElement

  The deprecated \*\*\`Event.srcElement\`\*\* is an alias for the Event.target property.

  ```ts
  EventTarget | null
  ```

* stopImmediatePropagation

  The \*\*\`stopImmediatePropagation()\`\*\* method of the If several listeners are attached to the same element for the same event type, they are called in the order in which they were added. \[MDN Reference]\(https://developer.mozilla.org/docs/Web/API/Event/stopImmediatePropagation)

  ```ts
  () => void
  ```

* stopPropagation

  The \*\*\`stopPropagation()\`\*\* method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases. \[MDN Reference]\(https://developer.mozilla.org/docs/Web/API/Event/stopPropagation)

  ```ts
  () => void
  ```

* target

  The read-only \*\*\`target\`\*\* property of the dispatched. \[MDN Reference]\(https://developer.mozilla.org/docs/Web/API/Event/target)

  ```ts
  EventTarget | null
  ```

* timeStamp

  The \*\*\`timeStamp\`\*\* read-only property of the Event interface returns the time (in milliseconds) at which the event was created. \[MDN Reference]\(https://developer.mozilla.org/docs/Web/API/Event/timeStamp)

  ```ts
  DOMHighResTimeStamp
  ```

* type

  The \*\*\`type\`\*\* read-only property of the Event interface returns a string containing the event's type. \[MDN Reference]\(https://developer.mozilla.org/docs/Web/API/Event/type)

  ```ts
  string
  ```

* waitUntil

  A method that accepts a promise signaling the duration and eventual success or failure of event-related actions. Can be called multiple times to add promises to the event, but must be called synchronously during event dispatch. Cannot be called after a \`setTimeout\` or within a microtask.

  ```ts
  (promise: Promise<void>) => void
  ```

### Submit a basic form

Group input fields that submit together when a merchant presses Enter or clicks a submit button. This example shows a basic form with a [text field](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/forms/text-field) and submit [button](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/actions/button).

```html
<s-form>
  <s-text-field label="Email address" />
  <s-button variant="primary" type="submit">Submit</s-button>
</s-form>
```

### Build a campaign form with date and money fields

Use specialized field types like [date field](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/forms/date-field) and [money field](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/forms/money-field) to collect structured campaign data. This example includes a reset button alongside submit so merchants can clear and start over.

### Show field validation errors

Display specific error messages on individual fields to guide merchants toward valid input. This example shows a required [text field](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/forms/text-field) and [number field](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/forms/number-field) with inline validation errors.

### Use select and checkbox fields

Mix text inputs with [selects](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/forms/select) and [checkboxes](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/forms/checkbox) to capture different kinds of merchant decisions. This example combines a text field, a select dropdown, and a checkbox for creating a discount.

### Group fields into sections

Organize a longer form into labeled groups so merchants can scan and complete it more easily. This example uses [sections](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/layout-and-structure/section) to separate contact information from shipping preferences.

### Handle async submission

Handle async work in a submit handler so the host waits for the save to settle before tearing down the extension runtime. Call `event.waitUntil(promise)` to signal that the form is still saving, and return the promise so the form integration can track completion. The optional chaining on `event?.waitUntil?.` keeps the handler safe in environments where the event or the API isn't available, such as local test harnesses.

```tsx
import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = (event) => {
    const promise = saveEntry({question, answer});
    event?.waitUntil?.(promise);
    return promise;
  };

  return (
    <s-form onSubmit={handleSubmit}>
      <s-stack direction="block" gap="base">
        <s-text-field
          label="Question"
          name="question"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          required
        />
        <s-text-area
          label="Answer"
          name="answer"
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
          required
        />
        <s-button variant="primary" type="submit">Save</s-button>
      </s-stack>
    </s-form>
  );
}

async function saveEntry(entry) {
  // Replace with your own persistence (shopify.storage, your backend, and so on).
  await shopify.storage.set('faq:latest', entry);
}
```

## Best practices

* **Group related fields logically:** Organize fields by category or workflow step so merchants can complete forms efficiently.
* **Validate with specific error messages:** Instead of **Invalid input**, provide actionable feedback like **Email must include @ symbol** or **Password must be at least 8 characters**.
* **Mark required fields clearly:** Use the `required` property and show validation errors only after user interaction or submission attempt.
* **Choose field types that match data:** Use [email field](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/forms/email-field) for emails, [number field](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/forms/number-field) for quantities, and [date field](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/forms/date-field) for dates to provide appropriate keyboards and pickers.
* **Provide submission feedback:** Show loading states during processing and clear success or error messages after completion. Prevent duplicate submissions while processing.
* **Handle unsaved changes:** For long or complex forms, consider auto-saving drafts or prompting before navigation when changes exist.
* **Return a promise from async submit handlers:** When your `submit` handler performs async work, call `event.waitUntil(promise)` and return the promise. The host might unmount the extension runtime when a screen closes (for example, after a `page-stack` intent completes), so handlers that don't signal completion might be cut off before the save settles. See the [Handle async submission](#handle-async-submission) example.

## Limitations

* Unlike native HTML forms, the component doesn't automatically submit data using HTTP. You must register a `submit` event handler to process form data programmatically.
