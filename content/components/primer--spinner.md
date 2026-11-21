---
title: "GitHub Primer · Component · Spinner"
source: https://raw.githubusercontent.com/primer/design/main/content/components/spinner.mdx
section: components
tag: "规范"
fetched: 2026-11-14
status: full
id: comp-primer-spinner
publisher: "GitHub Primer"
---

# GitHub Primer · Component · Spinner

> 来源：https://primer.style/components/spinner

## Usage

A spinner is an indeterminate loading indicator, meaning it's best for cases where the progress or duration of a process is variable or unknown.

A spinner may be shown on it's own or paired with a loading message. Spinners may be used as a placeholder for loading content, or just as an indicator that some action is being processed.

More detailed guidance about designing for loading states can be found in our [loading guidelines](https://primer.style/ui-patterns/loading).

## Options

### Size

The size of the spinner can be adjusted. The **medium** (default) variant works best for most cases. The **small** variant is optimized for being displayed inline with loading text. The **large** variant works well for replacing entire regions or pages that are still loading.

![](https://github.com/primer/design/assets/2313998/b31c4058-929f-471c-860e-6a8c2c6af21e)

## Accessibility and usability expectations

Use the `Spinner` component to provide a visible loading indicator for situations where an asynchronous API call or process may take a moderate amount of time (between 1 and 3 seconds) – see [Adapting to different wait times](https://primer.style/ui-patterns/loading#adapting-to-different-wait-times).

## Built-in accessibility features

The component only provides a visual, animated spinner icon. This icon is not exposed to screen readers, as it's an `` without a `role`, `aria-label`, or any text content.

```html
 …
```

The spinner icon uses the default `currentColor` of its parent container. Unless authors specifically override the default colors, the icon meets minimum color contrast requirements on the canvas default white background.

## Implementation requirements

Do not rely solely on the `Spinner` component as a loading indicator, as it currently isn't exposed to screen readers, and has no built-in announcement.

Only use it as part of a fully realised solution (including `aria-live` notifications) for conveying loading/processing states. Refer to the [loading guidelines](https://primer.style/ui-patterns/loading) for more details.

## How to test the component

### Integration tests

- The component only provides a visual indicator, and passes color contrast. Additional solutions are required (such as the use of `aria-live` notifications in our [loading guidelines](https://primer.style/ui-patterns/loading)) to convey the loading state for screen reader users.

- If you are using custom colors, verify that the spinner's "spinning" section meets the minimum color contrast requirement of `3:1` against the background it's presented on

### Component tests

- The component renders an `` element without any text content (as otherwise this would be announced by screen readers)
### Known accessibility issues (GitHub staff only)

## Related links

- [Loading guidelines](https://primer.style/ui-patterns/loading)
