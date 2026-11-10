---
title: "Shopify Polaris · Progress 进度"
source: https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/feedback-and-status-indicators/progress
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-polaris-progress
publisher: "Shopify Polaris"
---

# Shopify Polaris · Progress 进度

> 来源：[https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/feedback-and-status-indicators/progress](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/feedback-and-status-indicators/progress)

---

The progress component displays a horizontal bar showing how far a task or goal has advanced. Use progress to communicate measurable work like uploads, imports, checkout steps, and shipping thresholds.

Progress is determinate when you set a `value`, and indeterminate when you leave it off. For loading with no measurable end, use the [spinner](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/feedback-and-status-indicators/spinner) component instead.

#### Use cases

* **Measurable tasks:** Show how much of an upload, import, or export has completed.
* **Goal thresholds:** Show how close a value is to a target, like a free shipping threshold.
* **Multi-step flows:** Show how far a merchant has moved through a sequence of steps.
* **Capacity and usage:** Show consumption against a limit, like storage or a rate limit.

```html
<s-progress accessibilityLabel="Order fulfillment" value="3" max="5"></s-progress>
```

## Properties

Configure the following properties on the progress component.

* **accessibility​Label**

  **string**

  A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey what is progressing.

* **max**

  **number**

  **Default: 1**

  How much work the task requires in total. Must be greater than `0`.

* **tone**

  **"info" | "success" | "warning" | "critical" | "auto" | "neutral" | "caution"**

  **Default: 'auto'**

  The semantic meaning and color treatment of the component.

  * `auto`: Automatically determined based on context.
  * `neutral`: General information without specific intent.
  * `info`: Informational content or helpful tips.
  * `success`: Positive outcomes or successful states.
  * `caution`: Advisory notices that need attention.
  * `warning`: Important warnings about potential issues.
  * `critical`: Urgent problems or destructive actions.

* **value**

  **number**

  **Default: 0**

  How much of the task has been completed, as a number between `0` and `max`.

  Without a `value` the progress is indeterminate: the task is ongoing with no indication of how long it is expected to take.

### Show progress toward a goal

Set `value` and `max` to show determinate progress. This example shows three of five orders fulfilled, with an accessibility label describing what is progressing.

```html
<s-progress accessibilityLabel="Order fulfillment" value="3" max="5"></s-progress>
```

### Show an indeterminate progress bar

Omit `value` when the work is ongoing and you can't measure how much is left. The indicator sweeps the track until you set a value or remove the component.

### Convey status with tone

Use the `tone` property to color the indicator by what the progress means. This example shows an informational sync, a usage level approaching its limit, and a limit that's nearly exhausted.

### Pair progress with a label

Progress has no built-in text. Pair it with [text](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/typography-and-content/text) when merchants need to read what is progressing and how far along it is.

## Best practices

* **Use progress for measurable work:** Reach for progress when you can express the work as a fraction. When the duration is unknown and there's nothing to measure, a [spinner](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/feedback-and-status-indicators/spinner) communicates the same thing with less visual weight.
* **Always name what is progressing:** Set `accessibilityLabel` to something specific like **Importing products** or **Storage used**. Assistive technology announces a progress bar by its name, and the component never invents one.
* **Pair the bar with text:** Progress renders no label or percentage of its own. Add adjacent text when merchants need the numbers, and keep the text and the `value` in sync.
* **Keep `max` meaningful:** Use the real total, such as the number of files or the size of a quota, rather than always converting to a percentage. It keeps `value` easy to update as work completes.
* **Match tone to meaning:** Use `critical` and `warning` for progress that signals a problem, like an exhausted limit. A neutral task that's simply underway should stay on the default tone.

## Limitations

* The component renders no text. It shows neither a label nor a percentage, so any wording is yours to add alongside it.
* The bar has one thickness. There's no size scale, so it can't be made denser for compact layouts or heavier for emphasis.
* Progress is display-only. It isn't form-associated, has no `name`, and never participates in form submission.
* The component doesn't advance on its own. It renders the `value` you set, so animating toward completion means updating `value` as the work progresses.
* Values outside the scale are clamped to `0` through `max`, and a `max` of `0` or less falls back to `1`. A bar can't report progress its scale can't express.
* The indeterminate state runs until you change it. It has no timeout and no error state, so you must remove the component or set a `value` when the work ends.
