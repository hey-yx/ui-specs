---
title: "GOV.UK · Component · Textarea 文本域"
source: https://design-system.service.gov.uk/components/textarea/
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-45
publisher: "GOV.UK Design System"
---

# GOV.UK · Component · Textarea 文本域

> 来源：[https://design-system.service.gov.uk/components/textarea/](https://design-system.service.gov.uk/components/textarea/)

---

*   [HTML](https://design-system.service.gov.uk/components/textarea/#textarea-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/textarea/#textarea-example-nunjucks)

## When to use this component

Use the textarea component when you need to let users enter an amount of text that’s longer than a single line.

## When not to use this component

Users can find open-ended questions difficult to answer. It might be better to break up one complex question into a series of simple ones, for example where users can select from options using a [Radios component](https://design-system.service.gov.uk/components/radios/).

### If you need to ask an open question

Do not use the textarea component if you need to let users enter shorter answers no longer than a single line, such as a phone number or name. In this case, you should use the [Text input component](https://design-system.service.gov.uk/components/text-input/).

## How it works

You must label textareas. Placeholder text is not a suitable substitute for a label, as it disappears when users click inside the textarea.

Labels must be aligned above the textarea they refer to. They should be short, direct and written in sentence case. Do not use colons at the end of labels.

There are 2 ways to use the textarea component. You can use HTML or, if you’re using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk/), you can use the Nunjucks macro.

*   [HTML](https://design-system.service.gov.uk/components/textarea/#textarea-second-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/textarea/#textarea-second-example-nunjucks)

### Use appropriately-sized textareas

Make the height of a textarea proportional to the amount of text you expect users to enter. You can set the height of a textarea by specifying the `rows` attribute.

*   [HTML](https://design-system.service.gov.uk/components/textarea/#textarea-appropriately-sized-with-rows-textarea-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/textarea/#textarea-appropriately-sized-with-rows-textarea-example-nunjucks)

### Do not disable copy and paste

Users will often need to copy and paste information into a textarea, so do not stop them from doing this.

### If you’re asking more than one question on the page

If you’re asking more than one question on the page, do not set the contents of the `<label>` as the page heading. Read more about [asking multiple questions on Question pages](https://design-system.service.gov.uk/patterns/question-pages/#asking-multiple-questions-on-a-page).

*   [HTML](https://design-system.service.gov.uk/components/textarea/#textarea-without-a-heading-textarea-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/textarea/#textarea-without-a-heading-textarea-example-nunjucks)

### Limiting the number of characters

If there’s a good reason to limit the number of characters users can enter, you can use the [Character count component](https://design-system.service.gov.uk/components/character-count/).

### Error messages

Error messages should be styled like this:

*   [HTML](https://design-system.service.gov.uk/components/textarea/#textarea-with-error-textarea-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/textarea/#textarea-with-error-textarea-example-nunjucks)

Make sure errors follow the guidance in the [Error message component](https://design-system.service.gov.uk/components/error-message/) and have specific error messages for specific error states.

#### If the input is empty

Say ‘Enter [whatever it is]’.

For example, ‘Enter summary’.

#### If the input is too long

Say ‘[whatever it is] must be [number] characters or less’.

For example, ‘Summary must be 400 characters or less’.

#### If the input is too short

Say ‘[whatever it is] must be [number] characters or more’.

For example, ‘Summary must be 10 characters or more’.

#### If the input is too long or too short

Say ‘[whatever it is] must be between [number] and [number] characters’.

For example, ‘Summary must be between 10 and 400 characters’.

#### If the input uses characters that are not allowed and you know what the characters are

Say ‘[whatever it is] must not include [characters]’.

For example, ‘Summary must not include è and £’.

#### If the input uses characters that are not allowed and you do not know what the characters are

Say ‘[whatever it is] must only include [list of allowed characters]’.

For example, ‘Summary must only include letters a to z, hyphens, spaces and apostrophes.

## Recent changes

| Date | Changed | Description |
| --- | --- | --- |
| Mar 2025 | [GOV.UK Frontend v5.9.0](https://github.com/alphagov/govuk-frontend/releases/tag/v5.9.0) | Changed component `id` attribute to be based on `name` parameter by default. |
| Apr 2023 | [GOV.UK Frontend v4.6.0](https://github.com/alphagov/govuk-frontend/releases/tag/v4.6.0) | Added `disabled` parameter and updated disabled styles. |
| Jul 2020 | [GOV.UK Frontend v3.8.0](https://github.com/alphagov/govuk-frontend/releases/tag/v3.8.0) | Added `spellcheck` parameter. Updated component’s border thickness when in the error state. |
| Jan 2019 | [GOV.UK Frontend v2.6.0](https://github.com/alphagov/govuk-frontend/releases/tag/v2.6.0) | Added `autocomplete` parameter to help meet the WCAG 2.1 criterion [Identify Input Purpose](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html). |
| Nov 2018 | [GOV.UK Frontend v2.4.0](https://github.com/alphagov/govuk-frontend/releases/tag/v2.4.0) | Added option to set classes on component’s form group. |
