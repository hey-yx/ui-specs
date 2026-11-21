---
title: "GitHub Primer · Component · Radio group"
source: https://raw.githubusercontent.com/primer/design/main/content/components/radio-group.mdx
section: components
tag: "规范"
fetched: 2026-11-14
status: full
id: comp-primer-radio-group
publisher: "GitHub Primer"
---

# GitHub Primer · Component · Radio group

> 来源：https://primer.style/components/radio-group

![](https://user-images.githubusercontent.com/2313998/224133512-4e6bd321-5ad4-4c5e-865e-9e7f6b444cbf.png)

## Usage

Use radio group to allow users to select a single option from a short list of related options.

### Orientation

A vertical orientation makes options easier to visually scan. A horizontal orientation is not yet supported.

### Anatomy

![](https://user-images.githubusercontent.com/2313998/224133509-5df6e212-ca18-4950-87c8-7c90236ce29e.png)

**Label:** A title that labels the group of options and helps users understand the relationship between the options in the group

**Required indicator:** Indicates that a selection is required

**Caption:** May be used to provide additional context about the radio group when the label alone is not sufficient

**Options:** A list of mutually exclusive options represented using [radio buttons](https://primer.style/components/radio)

**Validation message:** A message explaining why the selection failed validation. See the form pattern documentation for more information on form validation patterns.

### Best practices

- Put radio buttons in a logical order
- Only use a radio group for a short list of options: aim for 6 or less options. For longer sets of options, consider using a `` input , an [action menu](https://primer.style/components/action-menu), or an [autocomplete input](https://primer.style/components/autocomplete).
- Radio buttons cannot be unchecked, so only use a radio group when a selection is required. Consider the following alternatives:
  - use a radio group, but with one option that equates to "none of these options"
  - use a [checkbox group](https://primer.style/components/checkbox-group) that fails validation if more than one option is selected
- If there is an option that's the most likely option to be checked, that option should be checked by default

## Accessibility

- Once a user checks an option from a radio group, the result should not be saved or applied until the user has explicitly submitted their input using a "save" or "submit" button. A radio group is a single tab stop, and the options can be navigated using the arrow keys: this means assistive technologies like a screen reader cannot "read" an option without selecting it. See the saving pattern guidelines for more information.
  - Alternative: you can use a [segmented control](https://primer.style/components/segmented-control) to immediately apply the selection as long as it's not in the context of a bigger form that applies other input values when submited
- Radio groups must be labeled. The label may be visually hidden, but visible labels are preferred.

### Known accessibility issues (GitHub staff only)

## Related links

- Forms
- [Form control](https://primer.style/components/form-control)
- Saving
- [Radio](https://primer.style/components/radio)
- [Checkbox](https://primer.style/components/checkbox)
- [Checkbox group](https://primer.style/components/checkbox-group)
