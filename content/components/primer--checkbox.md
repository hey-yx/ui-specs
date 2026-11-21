---
title: "GitHub Primer · Component · Checkbox"
source: https://raw.githubusercontent.com/primer/design/main/content/components/checkbox.mdx
section: components
tag: "规范"
fetched: 2026-11-14
status: full
id: comp-primer-checkbox
publisher: "GitHub Primer"
---

# GitHub Primer · Component · Checkbox

> 来源：https://primer.style/components/checkbox

## Usage

Use checkboxes to allow users to select multiple items from a list of individual items, or to mark one individual item as selected.

### States

Checkboxes have static dimensions and three different states: rest (default), focus, and disabled.

![An image showing checkboxes with three different states, rest, focus, and disabled.](https://user-images.githubusercontent.com/586552/204882576-5b698ce7-c471-4f4e-9f33-c861842f5743.png)

### Selected states

Checkboxes are capable of showing two forms of selection: checked (left) or indeterminate (right).

![An image showing checkboxes selected as checked and indeterminate](https://user-images.githubusercontent.com/586552/204883614-01743d25-1f7d-4261-b59d-8dd7ceaf29d3.png)
The indeterminate state is colored in some browsers (e.g. Safari) and grey in others (e.g. Chrome).

### Best practices

- An individual checkbox should not have its own validation message or style. Instead, show a validation message on the [checkbox group](https://primer.style/components/checkbox-group). For more information, see the Validation Message section in the Forms documentation.
- While there are certain use cases where an individual checkbox may be required, the most common use case is to require a selection from a [checkbox group](https://primer.style/components/checkbox-group). In this case, an individual checkbox button should not be marked as required, but the checkbox group should be marked as required instead. For more information, see the Required field indicator in the Forms documentation.

## Accessibility

### Known accessibility issues (GitHub staff only)

## Related links

- Forms
- [Form control](https://primer.style/components/form-control)
- [Checkbox group](https://primer.style/components/checkbox-group)
- [Radio](https://primer.style/components/radio)
- [Radio group](https://primer.style/components/radio-group)
