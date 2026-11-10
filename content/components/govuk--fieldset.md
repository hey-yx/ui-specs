---
title: "GOV.UK · Component · Fieldset 分组框"
source: https://design-system.service.gov.uk/components/fieldset/
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-24
publisher: "GOV.UK Design System"
---

# GOV.UK · Component · Fieldset 分组框

> 来源：[https://design-system.service.gov.uk/components/fieldset/](https://design-system.service.gov.uk/components/fieldset/)

---

Use the fieldset component to group related form inputs.

## When to use this component

Use the fieldset component when you need to show a relationship between multiple form inputs. For example, you may need to group a set of text inputs into a single fieldset when [asking for an address in your service](https://design-system.service.gov.uk/patterns/addresses/).

*   [HTML](https://design-system.service.gov.uk/components/fieldset/#address-group-fieldset-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/fieldset/#address-group-fieldset-example-nunjucks)

If you’re using the examples or macros for a [Radios component](https://design-system.service.gov.uk/components/radios/), [Checkboxes component](https://design-system.service.gov.uk/components/checkboxes/) or [Date input component](https://design-system.service.gov.uk/components/date-input/), the fieldset will already be included.

## How it works

The first element inside a fieldset must be a `legend` which describes the group of inputs. This could be a question, such as ‘What is your current address?’ or a statement like ‘Personal details’.

If you’re asking just [one question per page in your service](https://design-system.service.gov.uk/patterns/question-pages/#start-by-asking-one-question-per-page) as recommended, you can set the contents of the `<legend>` as the page heading, as shown in the example below. This is good practice as it means that users of screen readers will only hear the contents once.

Read more about [why and how to set legends as headings](https://design-system.service.gov.uk/get-started/labels-legends-headings/).

*   [HTML](https://design-system.service.gov.uk/components/fieldset/#fieldset-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/fieldset/#fieldset-example-nunjucks)

On [Question pages in your service](https://design-system.service.gov.uk/patterns/question-pages/) containing a group of inputs, including the question as the legend helps users of screen readers to understand that the inputs are all related to that question.

Include general help text in the legend if it would help the user fill in the form, and you [cannot write it as hint text](https://design-system.service.gov.uk/components/text-input/#hint-text). However, try to keep it as short as possible.

## Recent changes

| Date | Changed | Description |
| --- | --- | --- |
| Sept 2019 | [GOV.UK Frontend v3.2.0](https://github.com/alphagov/govuk-frontend/releases/tag/v3.2.0) | Fixed component legend text clipping when using a custom or fallback font. |
| Sept 2019 | [GOV.UK Frontend v3.1.0](https://github.com/alphagov/govuk-frontend/releases/tag/v3.1.0) | Added `role` parameter. |
| May 2019 | [GOV.UK Frontend v2.12.0](https://github.com/alphagov/govuk-frontend/releases/tag/v2.12.0) | Added `describedBy` parameter. |
| Apr 2019 | [GOV.UK Frontend v2.11.0](https://github.com/alphagov/govuk-frontend/releases/tag/v2.11.0) | Added styling to prevent fieldsets from exceeding their max width. |
| Jul 2018 | Guidance | Added guidance on setting legends as page headings. |
