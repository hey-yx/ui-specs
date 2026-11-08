---
title: "GOV.UK · Component · Fieldset 分组框"
source: https://design-system.service.gov.uk/components/fieldset/
section: components
tag: "规范"
fetched: 2026-11-01
status: full
id: components-24
publisher: "GOV.UK Design System"
---

# GOV.UK · Component · Fieldset 分组框

> 来源：[https://design-system.service.gov.uk/components/fieldset/](https://design-system.service.gov.uk/components/fieldset/)

> 版权：Crown copyright，按 [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/) 发布；本站代码 MIT 许可。本篇为 GOV.UK Design System 同源全文，引用时请署名 GOV.UK Design System。

---

Use the fieldset component to group related form inputs.

## When to use this component

Use the fieldset component when you need to show a relationship between multiple form inputs. For example, you may need to group a set of text inputs into a single fieldset when [asking for an address in your service](https://design-system.service.gov.uk/patterns/addresses/).

**示例：address-group**

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}
{% from "govuk/components/fieldset/macro.njk" import govukFieldset %}

{% call govukFieldset({
  legend: {
    text: "What is your address?",
    classes: "govuk-fieldset__legend--l",
    isPageHeading: true
  }
}) %}

  {{ govukInput({
    label: {
      text: "Address line 1"
    },
    id: "address-line-1",
    name: "addressLine1",
    autocomplete: "address-line1"
  }) }}

  {{ govukInput({
    label: {
      text: "Address line 2 (optional)"
    },
    id: "address-line-2",
    name: "addressLine2",
    autocomplete: "address-line2"
  }) }}

  {{ govukInput({
    label: {
      text: "Town or city"
    },
    classes: "govuk-!-width-two-thirds",
    id: "address-town",
    name: "addressTown",
    autocomplete: "address-level2"
  }) }}

  {{ govukInput({
    label: {
      text: "Postcode"
    },
    classes: "govuk-input--width-10",
    id: "address-postcode",
    name: "addressPostcode",
    autocomplete: "postal-code"
  }) }}

{% endcall %}
```

If you’re using the examples or macros for a [Radios component](https://design-system.service.gov.uk/components/radios/), [Checkboxes component](https://design-system.service.gov.uk/components/checkboxes/) or [Date input component](https://design-system.service.gov.uk/components/date-input/), the fieldset will already be included.

## How it works

The first element inside a fieldset must be a `legend` which describes the group of inputs. This could be a question, such as ‘What is your current address?’ or a statement like ‘Personal details’.

If you’re asking just [one question per page in your service](https://design-system.service.gov.uk/patterns/question-pages/#start-by-asking-one-question-per-page) as recommended, you can set the contents of the `<legend>` as the page heading, as shown in the example below. This is good practice as it means that users of screen readers will only hear the contents once.

Read more about [why and how to set legends as headings](https://design-system.service.gov.uk/get-started/labels-legends-headings/).

**示例：default**

```njk
{% from "govuk/components/fieldset/macro.njk" import govukFieldset %}

{{ govukFieldset({
  legend: {
    text: "Legend as page heading",
    classes: "govuk-fieldset__legend--l",
    isPageHeading: true
  }
}) }}
```

On [Question pages in your service](https://design-system.service.gov.uk/patterns/question-pages/) containing a group of inputs, including the question as the legend helps users of screen readers to understand that the inputs are all related to that question.

Include general help text in the legend if it would help the user fill in the form, and you [cannot write it as hint text](https://design-system.service.gov.uk/components/text-input/#hint-text). However, try to keep it as short as possible.
