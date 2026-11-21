---
title: "GitHub Primer · Component · Radio"
source: https://raw.githubusercontent.com/primer/design/main/content/components/radio.mdx
section: components
tag: "规范"
fetched: 2026-11-14
status: full
id: comp-primer-radio
publisher: "GitHub Primer"
---

# GitHub Primer · Component · Radio

> 来源：https://primer.style/components/radio

## Usage

Use a radio button in a [radio group](https://primer.style/components/radio-group) to allow users to select one option from a short list of options.

See the [radio group guidelines](https://primer.style/components/radio-group) for more information about usage.

### States

Radio buttons have static dimensions and three different states when checked or unchecked: rest (default), focus, and disabled.

![](https://user-images.githubusercontent.com/2313998/224133514-c583baf4-6dfc-444d-8714-dfc88cc00ff9.png)

### Best practices

- A radio button may not be used on its own: it _must_ be rendered in a group of related radio buttons using a [radio group](https://primer.style/components/radio-group).
- Radio buttons cannot be unchecked, so only use radio buttons when a selection is required
- An individual radio should not have its own validation message or style. Instead, show a validation message on the [radio group](https://primer.style/components/radio-group). For more information, see the Validation Message section in the Forms documentation.
- An individual radio button cannot be marked as required. Instead, make a selection required using the [radio group](https://primer.style/components/radio-group). For more information, see the Required field indicator in the Forms documentation.

## Accessibility

### Known accessibility issues (GitHub staff only)

## Related links

- Forms
- [Form control](https://primer.style/components/form-control)
- [Checkbox](https://primer.style/components/checkbox)
- [Radio group](https://primer.style/components/radio-group)
