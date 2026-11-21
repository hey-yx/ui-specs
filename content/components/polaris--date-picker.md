---
title: "Shopify Polaris · Date Picker 日期选择"
source: https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/forms/date-picker
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-polaris-date-picker
publisher: "Shopify Polaris"
---

# Shopify Polaris · Date Picker 日期选择

> 来源：[https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/forms/date-picker](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/forms/date-picker)

---

The date picker component allows merchants to select dates using a calendar interface. Use it when merchants benefit from seeing dates in context of the full month, such as selecting dates relative to today or needing weekday context.

The component supports single dates, multiple dates, and date ranges. For text date entry, use [date field](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/forms/date-field).

#### Use cases

* **Visual date selection:** Provide calendar-based date selection with visual context.
* **Quick date navigation:** Enable fast navigation between months and years.
* **Date validation:** Enforce date constraints like minimum/maximum dates or disabled dates.
* **User-friendly input:** Offer intuitive date selection without requiring manual formatting.

```html
<s-date-picker
  view="2025-05"
  type="range"
  value="2025-05-28--2025-05-31"
></s-date-picker>
```

## Properties

Configure the following properties on the date picker component.

* **allow**

  **string**

  **Default: ""**

  Specifies which dates can be selected as a comma-separated list. An empty string (default) allows all dates.

  **Formats:**

  * `YYYY-MM-DD`: Single date
  * `YYYY-MM`: Whole month
  * `YYYY`: Whole year
  * `start--end`: Date range (inclusive, unbounded if start/end omitted)

  **Examples:**

  * `2024-02--2025`: February 2024 through end of 2025
  * `2024-05-09, 2024-05-11`: Only May 9th and 11th, 2024

* **allow​Days**

  **string**

  **Default: ""**

  Specifies which days of the week can be selected as a comma-separated list. Further restricts dates from `allow` and `disallow`. An empty string (default) has no effect.

  **Valid days**: `sunday`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`

  **Example:** `saturday, sunday` (only weekends)

* **default​Value**

  **string**

  **Default: ""**

  The initially selected date(s) when the component first renders. An empty string means no date is initially selected.

  * Single date in `YYYY-MM-DD` format when `type` is set to `"single"`
  * Date range in `YYYY-MM-DD--YYYY-MM-DD` format (inclusive) when `type` is set to `"range"`

* **default​View**

  **string**

  The default month to display in `YYYY-MM` format. Used until the `view` callback is set by user interaction or programmatically. Defaults to the current month in the user's locale.

* **disallow**

  **string**

  **Default: ""**

  Specifies which dates can't be selected as a comma-separated list. These dates are excluded from those specified in `allow`. An empty string (default) has no effect.

  **Formats:**

  * `YYYY-MM-DD`: Single date
  * `YYYY-MM`: Whole month
  * `YYYY`: Whole year
  * `start--end`: Date range (inclusive, unbounded if start/end omitted)

  **Examples:**

  * `--2024-02`: All dates before February 2024
  * `2024-05-09, 2024-05-11`: May 9th and 11th, 2024

* **disallow​Days**

  **string**

  **Default: ""**

  Specifies which days of the week can't be selected as a comma-separated list. Excludes days from `allowDays` and intersects with `allow` and `disallow`. An empty string (default) has no effect.

  **Valid days**: `sunday`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`

  **Example:** `saturday, sunday` (no weekends)

* **name**

  **string**

  The name attribute for the field, used to identify the field's value when the form is submitted. Must be unique within the nearest containing form.

* **type**

  **"single" | "range"**

  **Default: "single"**

  The type of date selection allowed.

  * `single`: Select a single date
  * `range`: Select a date range

* **value**

  **string**

  **Default: ""**

  The currently selected date(s). An empty string means no date is selected.

  * Single date in `YYYY-MM-DD` format when `type` is set to `"single"`
  * Date range in `YYYY-MM-DD--YYYY-MM-DD` format (inclusive) when `type` is set to `"range"`

* **view**

  **string**

  The currently displayed month in `YYYY-MM` format. When changed, the `viewchange` callback is triggered. Defaults to `defaultView`.

* **visible​Months**

  **"auto" | "1" | "2"**

  **Default: 'auto'**

  Controls how many months are displayed.

  * `'auto'`: Context-driven. Today this renders a single month, matching `'1'`.
  * `'1'`: Renders one month at a time.
  * `'2'`: Renders two consecutive months side-by-side.

### Events

The date picker component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **blur**

  **CallbackEventListener\<TagName> | null**

  A callback fired when the date picker loses focus.

  Learn more about the [blur event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event).

* **change**

  **CallbackEventListener\<TagName> | null**

  A callback fired when the date picker value changes.

  Learn more about the [change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event).

* **focus**

  **CallbackEventListener\<TagName> | null**

  A callback fired when the date picker receives focus.

  Learn more about the [focus event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event).

* **input**

  **CallbackEventListener\<TagName> | null**

  A callback fired when the user inputs data into the date picker.

  Learn more about the [input event](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event).

* **viewchange**

  **CallbackEventListener\<TagName> | null**

  A callback fired when the calendar view changes, such as when navigating between months.

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

### Add a date range picker

Add a calendar picker for selecting a date or date range. This example shows a range-type date picker with a pre-selected date range and a specific month view.

```html
<s-date-picker
  view="2025-05"
  type="range"
  value="2025-05-28--2025-05-31"
></s-date-picker>
```

### Select a single date

Configure the picker for single date selection when merchants need to choose one specific date. This example shows a single-type date picker with a pre-selected date and month view.

### Restrict selectable dates to a range

Restrict which dates merchants can select by defining an allowed range. This example shows a date picker that blocks past dates and limits selection to a specific month.

### Capture date selections with on​Change

Combine a date picker with other form elements. This example shows a range picker inside a form with a text field and submit button.

### Add quick preset date range buttons

Add preset buttons so merchants can quickly select common date ranges like "Last 7 days" or "This month." This example shows a range picker with quick-selection buttons that programmatically update the selected value.

## Best practices

* **Use smart defaults:** Pre-populate the picker with sensible dates to speed up the selection process.
* **Provide quick selections:** Offer preset date options for common selections (like **Today**, **Last 7 days**, or **This month**) to improve usability.
* **Use date ranges when appropriate:** Enable range selection mode when merchants need to select start and end dates for reports, analytics, or time-based filters.
* **Restrict dates appropriately:** Use the `allow` and `disallow` properties to prevent selection of invalid dates for your specific use case.
* **Provide adequate space:** Ensure sufficient spacing around the picker to avoid interfering with on-screen keyboards or other interactive elements.
* **Consider alternatives for distant dates:** Navigating month-by-month becomes impractical for dates more than a few years away. For dates outside a 5-10 year range, consider providing date presets or manual year input.
