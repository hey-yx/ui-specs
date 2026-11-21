---
title: "GitHub Primer · Component · Form control"
source: https://raw.githubusercontent.com/primer/design/main/content/components/form-control.mdx
section: components
tag: "规范"
fetched: 2026-11-14
status: full
id: comp-primer-form-control
publisher: "GitHub Primer"
---

# GitHub Primer · Component · Form control

> 来源：https://primer.style/components/form-control

## Usage

Use form controls when requiring data input from the user. For example, creating a new repo configuring settings, and logging in.

This component is a helper component to keep layouts consistent and ensure the correct ARIA attributes are set. You can find some of Primer's form components listed in the [Related links](#related-links) section.

## Anatomy

![diagrams labeling the anatomy of a text field and a checkbox field](https://user-images.githubusercontent.com/2313998/171692166-43d45c4b-509a-4f68-9e8b-1577658b493e.png)

Form controls allow users to provide data. At a minimum, they include an input and label. They may also include a caption and required field indicator.

To learn more about anatomy, input methods, forms structure, validation, and more, please refer to our [Forms guidance](https://primer.style/ui-patterns/forms/overview).

## Accessibility

### Required Fields

When using symbols -e.g., an asterisk (*)- to indicate particular fields are required within a form, consider adding a "Required fields are marked with an asterisk (\*)" message at the top of the form for extra clarity.

When marking a control as required, opt to mark the form control as required instead of the input contained within it. The form control will ensure that the required state is passed down to the input element.

        {`

    Form Input Label

    `}
    Set the required field in the form control

    {`

    Form Input Label

    `}
    Don’t set the required field on the underlying input

### Known accessibility issues (GitHub staff only)

## Related links

- [Forms](https://primer.style/ui-patterns/forms/overview)
- [Checkbox](https://primer.style/components/checkbox)
- [Checkbox group](https://primer.style/components/checkbox-group)
- [Radio](https://primer.style/components/radio)
- [Radio group](https://primer.style/components/radio-group)
- [Text input](https://primer.style/components/text-input)
- [Textarea](https://primer.style/components/textarea)
- [Select](https://primer.style/components/select)
