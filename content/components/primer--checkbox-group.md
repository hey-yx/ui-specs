---
title: "GitHub Primer · Component · Checkbox group"
source: https://raw.githubusercontent.com/primer/design/main/content/components/checkbox-group.mdx
section: components
tag: "规范"
fetched: 2026-11-14
status: full
id: comp-primer-checkbox-group
publisher: "GitHub Primer"
---

# GitHub Primer · Component · Checkbox group

> 来源：https://primer.style/components/checkbox-group

![An image of a checkbox group showing two selections](https://user-images.githubusercontent.com/586552/205333350-f767c1ee-61b9-49e8-963d-0fad537749e9.png)

## Usage

Use checkbox group to allow users to select multiple items from a list of individual items, or to mark one individual item as selected.

### Best practices

- Put checkboxes in a logical order
- If users are only allowed to select a single option, consider using a [radio group](https://primer.style/components/radio-group) instead
- Each checkbox's state should be independent from other checkboxes in the group. For example: checking one checkbox should not check or disable any other checkboxes

## Anatomy

![](https://user-images.githubusercontent.com/2313998/224140255-57987086-f2b3-47be-9ee7-99af26ea6846.png)

**Label:** A title that labels the group of options and helps users understand the relationship between the options in the group.

**Required indicator:** Indicates that a selection is required.

**Caption:** May be used to provide additional context about the checkbox group when the label alone is not sufficient

**Options:** A list of options represented using [checkboxes](https://primer.style/components/checkbox).

**Validation message:** A message explaining why the selection failed validation. See the form pattern documentation for more information on form validation patterns.

## Accessibility

Once a user checks an option from a checkbox group, the result should not be saved or applied until the user has explicitly submitted their input using a "save" or "submit" button. See the saving pattern guidelines for more information.
Alternative: you can use a [toggle switch](https://primer.style/components/toggle-switch) to immediately toggle something on and off as long as it's not in the context of a bigger form that applies other input values when submited

### Known accessibility issues (GitHub staff only)

## Related links

- Forms
- [Form control](https://primer.style/components/form-control)
- [Checkbox](https://primer.style/components/checkbox)
- [Radio](https://primer.style/components/radio)
- [Radio group](https://primer.style/components/radio-group)
