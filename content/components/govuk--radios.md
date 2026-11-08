---
title: "GOV.UK · Component · Radios 单选按钮"
source: https://design-system.service.gov.uk/components/radios/
section: components
tag: "规范"
fetched: 2026-11-01
status: full
id: components-35
publisher: "GOV.UK Design System"
---

# GOV.UK · Component · Radios 单选按钮

> 来源：[https://design-system.service.gov.uk/components/radios/](https://design-system.service.gov.uk/components/radios/)

> 版权：Crown copyright，按 [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/) 发布；本站代码 MIT 许可。本篇为 GOV.UK Design System 同源全文，引用时请署名 GOV.UK Design System。

---

**示例：default**

```njk
{% from "govuk/components/radios/macro.njk" import govukRadios %}

{{ govukRadios({
  name: "whereDoYouLive",
  fieldset: {
    legend: {
      text: "Where do you live?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  items: [
    {
      value: "england",
      text: "England"
    },
    {
      value: "scotland",
      text: "Scotland"
    },
    {
      value: "wales",
      text: "Wales"
    },
    {
      value: "northern-ireland",
      text: "Northern Ireland"
    }
  ]
}) }}
```

## When to use this component

Use the radios component when users can only select one option from a list.

## When not to use this component

Do not use the radios component if users might need to select more than one option. In this case, you should use the [Checkboxes component](https://design-system.service.gov.uk/components/checkboxes/) instead.

## How it works

Always position radios to the left of their labels. This makes them easier to find, especially for users of screen magnifiers.

Unlike with checkboxes, users can only select one option from a list of radios. Do not assume that users will know how many options they can select based on the visual difference between radios and checkboxes alone.

If needed, add a hint explaining this, for example, 'Select one option'.

Do not pre-select radio options as this makes it more likely that users will:

- not realise they've missed a question
- submit the wrong answer

Users cannot go back to having no option selected once they have selected one, without refreshing their browser window. Therefore, you should include 'None of the above' or 'I do not know' if they are valid options.

Order radio options alphabetically by default.

In some cases, it can be helpful to order them from most-to-least common options. For example, you could order options for 'Where do you live?' based on population size.

However you should do this with extreme caution as it can reinforce bias in your service. If in doubt, order alphabetically.

Group radios together in a `<fieldset>` with a `<legend>` that describes them, as shown in the examples on this page. This is usually a question, like ‘Where do you live?’.

### If you’re asking one question on the page

If you are asking just [one question per page in your service](https://design-system.service.gov.uk/patterns/question-pages/#start-by-asking-one-question-per-page) as recommended, you can set the contents of the `<legend>` as the page heading. This is good practice as it means that users of screen readers will only hear the contents once.

Read more about [why and how to set legends as headings](https://design-system.service.gov.uk/get-started/labels-legends-headings/).

There are 2 ways to use the radios component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

**示例：default (second)**

```njk
{% from "govuk/components/radios/macro.njk" import govukRadios %}

{{ govukRadios({
  name: "whereDoYouLive",
  fieldset: {
    legend: {
      text: "Where do you live?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  items: [
    {
      value: "england",
      text: "England"
    },
    {
      value: "scotland",
      text: "Scotland"
    },
    {
      value: "wales",
      text: "Wales"
    },
    {
      value: "northern-ireland",
      text: "Northern Ireland"
    }
  ]
}) }}
```

### If you’re asking more than one question on the page

If you're asking more than one question on the page, do not set the contents of the `<legend>` as the page heading. Read more about [asking multiple questions on Question pages](https://design-system.service.gov.uk/patterns/question-pages/#asking-multiple-questions-on-a-page).

**示例：without-heading**

```njk
{% from "govuk/components/radios/macro.njk" import govukRadios %}

{{ govukRadios({
  name: "whereDoYouLive",
  fieldset: {
    legend: {
      text: "Where do you live?"
    }
  },
  items: [
    {
      value: "england",
      text: "England"
    },
    {
      value: "scotland",
      text: "Scotland"
    },
    {
      value: "wales",
      text: "Wales"
    },
    {
      value: "northern-ireland",
      text: "Northern Ireland"
    }
  ]
}) }}
```

### Inline radios

In some cases, you can choose to display radios 'inline' beside one another (horizontally).

Only use inline radios when:

- the question only has two options
- both options are short

Remember that on small screens such as mobile devices, the radios will still be 'stacked' on top of one another (vertically).

**示例：inline**

```njk
{% from "govuk/components/radios/macro.njk" import govukRadios %}

{{ govukRadios({
  classes: "govuk-radios--inline",
  name: "changedName",
  fieldset: {
    legend: {
      text: "Have you changed your name?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "This includes changing your last name or spelling your name differently"
  },
  items: [
    {
      value: "yes",
      text: "Yes"
    },
    {
      value: "no",
      text: "No"
    }
  ]
}) }}
```

### Radio items with hints

You can add hints to radio items to provide additional information about the options.

Keep each hint to a single short sentence, without any full stops. Screen readers will read out the entire text when users interact with an item. This could frustrate users if the text is long.

Do not use links in hint text. While screen readers will read out the link text when describing the item, they usually do not tell users the text is a link.

**示例：hint**

```njk
{% from "govuk/components/radios/macro.njk" import govukRadios %}

{{ govukRadios({
  name: "signIn",
  fieldset: {
    legend: {
      text: "How do you want to sign in?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "You’ll need an account to prove your identity and complete your Self Assessment"
  },
  items: [
    {
      value: "government-gateway",
      text: "Sign in with Government Gateway",
      hint: {
        text: "You’ll have a user ID if you’ve registered for Self Assessment or filed a tax return online before"
      }
    },
    {
      value: "govuk-one-login",
      text: "Sign in with GOV.UK One Login",
      hint: {
        text: "If you don’t have a GOV.UK One Login, you can create one"
      }
    }
  ]
}) }}
```

### Radio items with a text divider

If one or more of your radio options is different from the others, it can help users if you separate them using a text divider. The text is usually the word ‘or’.

**示例：divider**

```njk
{% from "govuk/components/radios/macro.njk" import govukRadios %}

{{ govukRadios({
  name: "whereDoYouLive",
  fieldset: {
    legend: {
      text: "Where do you live?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  items: [
    {
      value: "england",
      text: "England"
    },
    {
      value: "scotland",
      text: "Scotland"
    },
    {
      value: "wales",
      text: "Wales"
    },
    {
      value: "northern-ireland",
      text: "Northern Ireland"
    },
    {
      divider: "or"
    },
    {
      value: "abroad",
      text: "I am a British citizen living abroad"
    }
  ]
}) }}
```

### Conditionally revealing a related question

You can ask the user a related question when they select a particular radio option, so they only see the question when it's relevant to them.

This might make two related questions easier to answer by grouping them on the same page. For example, you could reveal a phone number input when the user selects the 'Contact me by phone' option.

**示例：conditional-reveal**

```njk
{% from "govuk/components/radios/macro.njk" import govukRadios %}
{% from "govuk/components/input/macro.njk" import govukInput %}

{% set emailHtml %}
{{ govukInput({
  id: "contact-by-email",
  name: "contactByEmail",
  type: "email",
  autocomplete: "email",
  spellcheck: false,
  classes: "govuk-!-width-one-third",
  label: {
    text: "Email address"
  }
}) }}
{% endset -%}

{% set phoneHtml %}
{{ govukInput({
  id: "contact-by-phone",
  name: "contactByPhone",
  type: "tel",
  autocomplete: "tel",
  classes: "govuk-!-width-one-third",
  label: {
    text: "Phone number"
  }
}) }}
{% endset -%}

{% set textHtml %}
{{ govukInput({
  id: "contact-by-text",
  name: "contactByText",
  type: "tel",
  autocomplete: "tel",
  classes: "govuk-!-width-one-third",
  label: {
    text: "Mobile phone number"
  }
}) }}
{% endset -%}

{{ govukRadios({
  name: "contact",
  fieldset: {
    legend: {
      text: "How would you prefer to be contacted?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "Select one option"
  },
  items: [
    {
      value: "email",
      text: "Email",
      conditional: {
        html: emailHtml
      }
    },
    {
      value: "phone",
      text: "Phone",
      conditional: {
        html: phoneHtml
      }
    },
    {
      value: "text",
      text: "Text message",
      conditional: {
        html: textHtml
      }
    }
  ]
}) }}
```

Keep it simple. If the related question is complicated or has more than one part, show it on the next page in the process instead.

Do not conditionally reveal questions to inline radios, such as ‘yes’ and ‘no’ options placed next to each other.

Conditionally reveal questions only - do not show or hide anything that is not a question.

#### Known issues

Users are not always notified when a conditionally revealed question is shown or hidden. This fails [WCAG 2.2 success criterion 4.1.2 Name, role, value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html).

However, we found that screen reader users did not have difficulty answering a conditionally revealed question - as long it’s kept simple. Users we tested with did get confused when complicated questions were conditionally revealed to them, particularly questions with more than one part.

We’ll keep looking for opportunities to [learn more about how conditionally revealed questions be used in services](https://github.com/alphagov/govuk-design-system/discussions/6055).

### Smaller radios

Use standard-sized radios in nearly all cases. However, smaller versions work well on pages where it’s helpful to make them less visually prominent.

For example, on a page of search results, the primary user need is to see the results. Using smaller radios lets users see and change search filters without distracting them from the main content.

**示例：small**

```njk
{% from "govuk/components/radios/macro.njk" import govukRadios %}

{{ govukRadios({
  classes: "govuk-radios--small",
  name: "changedName",
  fieldset: {
    legend: {
      text: "Filter",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--m"
    }
  },
  items: [
    {
      value: "month",
      text: "Monthly"
    },
    {
      value: "year",
      text: "Yearly"
    }
  ]
}) }}
```

Small radios can work well on information dense screens in services designed for repeat use, like caseworking systems.

In services like these, the risk that they will not be noticed is lower because users return to the screen multiple times.

### Error messages

Display an error message if the user has not:

- selected any radios
- answered a conditionally revealed question

Error messages should be styled like this:

**示例：error**

```njk
{% from "govuk/components/radios/macro.njk" import govukRadios %}

{{ govukRadios({
  name: "whereDoYouLive",
  fieldset: {
    legend: {
      text: "Where do you live?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  items: [
    {
      value: "england",
      text: "England"
    },
    {
      value: "scotland",
      text: "Scotland"
    },
    {
      value: "wales",
      text: "Wales"
    },
    {
      value: "northern-ireland",
      text: "Northern Ireland"
    }
  ],
  errorMessage: {
    text: "Select the country where you live"
  }
}) }}
```

Make sure errors follow the guidance in the [Error message component](https://design-system.service.gov.uk/components/error-message/) and have specific error messages for specific error states.

#### If it’s a ‘yes’ or ‘no’ question

Say ‘Select yes if [whatever it is is true]’. For example, ‘Select yes if Sarah normally lives with you’.

#### If there are two options which are not ‘yes’ and ‘no’

Say ‘Select if [whatever it is]’. For example, ‘Select if you are employed or self-employed’.

#### If there are more than two options

Say ‘Select [whatever it is]’. For example, ‘Select the day of the week you pay your rent’.

#### If it's a conditionally revealed question

Include an [Error message component](https://design-system.service.gov.uk/components/error-message/) that is clearly related to the initial question.

**示例：conditional-reveal-error**

```njk
{% from "govuk/components/radios/macro.njk" import govukRadios %}
{% from "govuk/components/input/macro.njk" import govukInput %}

{% set emailHtml %}
{{ govukInput({
  id: "contact-by-email",
  name: "contactByEmail",
  type: "email",
  autocomplete: "email",
  spellcheck: false,
  classes: "govuk-!-width-one-half",
  label: {
    text: "Email address"
  },
  errorMessage: {
    text: "Email address cannot be blank"
  }
}) }}
{% endset -%}

{% set phoneHtml %}
{{ govukInput({
  id: "contact-by-phone",
  name: "contactByPhone",
  type: "tel",
  autocomplete: "tel",
  classes: "govuk-!-width-one-third",
  label: {
    text: "Phone number"
  }
}) }}
{% endset -%}

{% set textHtml %}
{{ govukInput({
  id: "contact-by-text",
  name: "contactByText",
  type: "tel",
  autocomplete: "tel",
  classes: "govuk-!-width-one-third",
  label: {
    text: "Mobile phone number"
  }
}) }}
{% endset -%}

{{ govukRadios({
  name: "contact",
  fieldset: {
    legend: {
      text: "How would you prefer to be contacted?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "Select one option"
  },
  items: [
    {
      value: "email",
      text: "Email",
      checked: true,
      conditional: {
        html: emailHtml
      }
    },
    {
      value: "phone",
      text: "Phone",
      conditional: {
        html: phoneHtml
      }
    },
    {
      value: "text",
      text: "Text message",
      conditional: {
        html: textHtml
      }
    }
  ]
}) }}
```

## Research on this component

If you’ve done any user research involving conditionally revealed questions, particularly with users of assistive technologies, [tell us what you’ve learned by adding a comment to the discussion about this component](https://github.com/alphagov/govuk-design-system/discussions/6055).

Read a blog post about [an update to the radios and checkboxes components in 2016](https://designnotes.blog.gov.uk/2016/11/30/weve-updated-the-radios-and-checkboxes-on-gov-uk/).
