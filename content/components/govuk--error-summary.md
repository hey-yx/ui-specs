---
title: "GOV.UK · Component · Error summary 错误汇总"
source: https://design-system.service.gov.uk/components/error-summary/
section: components
tag: "规范"
fetched: 2026-11-01
status: full
id: components-21
publisher: "GOV.UK Design System"
---

# GOV.UK · Component · Error summary 错误汇总

> 来源：[https://design-system.service.gov.uk/components/error-summary/](https://design-system.service.gov.uk/components/error-summary/)

> 版权：Crown copyright，按 [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/) 发布；本站代码 MIT 许可。本篇为 GOV.UK Design System 同源全文，引用时请署名 GOV.UK Design System。

---

Use this component at the top of a page to summarise any errors a user has made.

When a user makes an error, you must show both an error summary and an [Error message component](https://design-system.service.gov.uk/components/error-message/) next to each answer that contains an error.

**示例：default**

```njk
{% from "govuk/components/error-summary/macro.njk" import govukErrorSummary %}

{{ govukErrorSummary({
  titleText: "There is a problem",
  errorList: [
    {
      text: "Enter your full name",
      href: "#"
    },
    {
      text: "The date your passport was issued must be in the past",
      href: "#"
    }
  ]
}) }}
```

## When to use this component

Always show an error summary when there is a validation error, even if there’s only one.

## How it works

You must:

- move keyboard focus to the error summary (the govuk-frontend javascript will do this for you)
- include the heading ‘There is a problem’
- link to each of the answers that have validation errors
- make sure the error messages in the error summary are worded the same as those which appear next to the inputs with errors

As well as showing an error summary, follow the [Validation pattern](https://design-system.service.gov.uk/patterns/validation/) - for example, by adding ‘Error: ’ to the beginning of the page `<title>` so screen readers read it out as soon as possible.

And [make your error messages clear and concise](https://design-system.service.gov.uk/components/error-message/#be-clear-and-concise).

There are 2 ways to use the error summary component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

**示例：default (second)**

```njk
{% from "govuk/components/error-summary/macro.njk" import govukErrorSummary %}

{{ govukErrorSummary({
  titleText: "There is a problem",
  errorList: [
    {
      text: "Enter your full name",
      href: "#"
    },
    {
      text: "The date your passport was issued must be in the past",
      href: "#"
    }
  ]
}) }}
```

### Linking from the error summary to each answer

You must link the errors in the error summary to the answer they relate to.

For questions that require a user to answer using a single field, like a file upload, select, textarea, text input or character count, link to the field.

**示例：linking**

```njk
{% from "govuk/components/error-summary/macro.njk" import govukErrorSummary %}
{% from "govuk/components/input/macro.njk" import govukInput %}

{{ govukErrorSummary({
  titleText: "There is a problem",
  errorList: [
    {
      text: "Enter your full name",
      href: "#full-name-input"
    }
  ]
}) }}

<h1 class="govuk-heading-l">Your details</h1>

{{ govukInput({
  label: {
    text: "Full name"
  },
  id: "full-name-input",
  name: "name",
  autocomplete: "name",
  errorMessage: {
    text: "Enter your full name"
  }
}) }}
```

When a user has to enter their answer into multiple fields, such as the day, month and year fields in the date input component, link to the first field that contains an error.

If you do not know which field contains an error, link to the first field.

**示例：linking-multiple-fields**

```njk
{% from "govuk/components/date-input/macro.njk" import govukDateInput %}
{% from "govuk/components/error-summary/macro.njk" import govukErrorSummary %}

{{ govukErrorSummary({
  titleText: "There is a problem",
  errorList: [
    {
      text: "Passport issue date must include a year",
      href: "#passport-issued-year"
    }
  ]
}) }}

{{ govukDateInput({
  fieldset: {
    legend: {
      isPageHeading: true,
      text: "When was your passport issued?",
      classes: "govuk-fieldset__legend--l"
    }
  },
  id: "passport-issued",
  namePrefix: "passport-issued",
  errorMessage: {
    text: "Passport issue date must include a year"
  },
  values: {
    day: 5,
    month: 12
  },
  year: {
    error: true
  }
  })
}}
```

For questions that require a user to select one or more options from a list using radios or checkboxes, link to the first radio or checkbox.

**示例：linking-checkboxes-radios**

```njk
{% from "govuk/components/error-summary/macro.njk" import govukErrorSummary %}
{% from "govuk/components/checkboxes/macro.njk" import govukCheckboxes %}

{{ govukErrorSummary({
  titleText: "There is a problem",
  errorList: [
    {
      text: "Select if you are British, Irish or a citizen of a different country",
      href: "#nationality"
    }
  ]
}) }}

{{ govukCheckboxes({
  name: "nationality",
  fieldset: {
    legend: {
      text: "What is your nationality?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "If you have dual nationality, select all options that are relevant to you"
  },
  errorMessage: {
    text: "Select if you are British, Irish or a citizen of a different country"
  },
  items: [
    {
      value: "british",
      text: "British",
      hint: {
        text: "including English, Scottish, Welsh and Northern Irish"
      }
    },
    {
      value: "irish",
      text: "Irish"
    },
    {
      value: "other",
      text: "Citizen of another country"
    }
  ]
}) }}
```

### Where to put the error summary

Put the error summary at the top of the `main` container. If your page includes breadcrumbs or a back link, place it below these, but above the `<h1>`.

**示例：full-page-example**

```njk
{% extends "example-wrappers/full-page.njk" %}

{% from "govuk/components/back-link/macro.njk" import govukBackLink %}
{% from "govuk/components/button/macro.njk" import govukButton %}
{% from "govuk/components/date-input/macro.njk" import govukDateInput %}
{% from "govuk/components/error-summary/macro.njk" import govukErrorSummary %}

{% block containerStart %}
  {{ govukBackLink({
    text: "Back"
  }) }}
{% endblock %}

{% block content %}
  <div class="govuk-grid-row">
    <div class="govuk-grid-column-two-thirds">
      <form action="/form-handler" method="post" novalidate>
        {{ govukErrorSummary({
          titleText: "There is a problem",
          errorList: [
            {
              text: "Passport issue date must include a year",
              href: "#passport-issued-year"
            }
          ]
        }) }}

        {{ govukDateInput({
          fieldset: {
            legend: {
              isPageHeading: true,
              text: "When was your passport issued?",
              classes: "govuk-fieldset__legend--l"
            }
          },
          id: "passport-issued",
          namePrefix: "passport-issued",
          errorMessage: {
            text: "Passport issue date must include a year"
          },
          day: {
            value: 5
          },
          month: {
            value: 12
          },
          year: {
            error: true
          }
          })
        }}

        {{ govukButton({
          text: "Continue"
        }) }}

      </form>
    </div>
  </div>
{% endblock %}
```
