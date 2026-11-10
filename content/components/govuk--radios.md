---
title: "GOV.UK · Component · Radios 单选按钮"
source: https://design-system.service.gov.uk/components/radios/
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-35
publisher: "GOV.UK Design System"
---

# GOV.UK · Component · Radios 单选按钮

> 来源：[https://design-system.service.gov.uk/components/radios/](https://design-system.service.gov.uk/components/radios/)

---

*   [History for](https://design-system.service.gov.uk/components/radios/history/)
*   [Use with Nunjucks for](https://design-system.service.gov.uk/components/radios/nunjucks/)

[Open this example in a new tab: radios](https://design-system.service.gov.uk/components/radios/default/)

*   [HTML](https://design-system.service.gov.uk/components/radios/#radios-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/radios/#radios-example-nunjucks)

HTML

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
      <h1 class="govuk-fieldset__heading">
        Where do you live?
      </h1>
    </legend>
    <div class="govuk-radios" data-module="govuk-radios">
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="whereDoYouLive" name="whereDoYouLive" type="radio" value="england">
        <label class="govuk-label govuk-radios__label" for="whereDoYouLive">
          England
        </label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="whereDoYouLive-2" name="whereDoYouLive" type="radio" value="scotland">
        <label class="govuk-label govuk-radios__label" for="whereDoYouLive-2">
          Scotland
        </label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="whereDoYouLive-3" name="whereDoYouLive" type="radio" value="wales">
        <label class="govuk-label govuk-radios__label" for="whereDoYouLive-3">
          Wales
        </label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="whereDoYouLive-4" name="whereDoYouLive" type="radio" value="northern-ireland">
        <label class="govuk-label govuk-radios__label" for="whereDoYouLive-4">
          Northern Ireland
        </label>
      </div>
    </div>
  </fieldset>
</div>
```

Nunjucks

[See options and how to use with Nunjucks](https://design-system.service.gov.uk/components/radios/nunjucks/)

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

If needed, add a hint explaining this, for example, ‘Select one option’.

Do not pre-select radio options as this makes it more likely that users will:

*   not realise they’ve missed a question
*   submit the wrong answer

Users cannot go back to having no option selected once they have selected one, without refreshing their browser window. Therefore, you should include ‘None of the above’ or ‘I do not know’ if they are valid options.

Order radio options alphabetically by default.

In some cases, it can be helpful to order them from most-to-least common options. For example, you could order options for ‘Where do you live?’ based on population size.

However you should do this with extreme caution as it can reinforce bias in your service. If in doubt, order alphabetically.

Group radios together in a `<fieldset>` with a `<legend>` that describes them, as shown in the examples on this page. This is usually a question, like ‘Where do you live?’.

### If you’re asking one question on the page

If you are asking just [one question per page in your service](https://design-system.service.gov.uk/patterns/question-pages/#start-by-asking-one-question-per-page) as recommended, you can set the contents of the `<legend>` as the page heading. This is good practice as it means that users of screen readers will only hear the contents once.

Read more about [why and how to set legends as headings](https://design-system.service.gov.uk/get-started/labels-legends-headings/).

There are 2 ways to use the radios component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk/), you can use the Nunjucks macro.

[Open this example in a new tab: radios second](https://design-system.service.gov.uk/components/radios/default/)

*   [HTML](https://design-system.service.gov.uk/components/radios/#radios-second-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/radios/#radios-second-example-nunjucks)

HTML

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
      <h1 class="govuk-fieldset__heading">
        Where do you live?
      </h1>
    </legend>
    <div class="govuk-radios" data-module="govuk-radios">
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="whereDoYouLive" name="whereDoYouLive" type="radio" value="england">
        <label class="govuk-label govuk-radios__label" for="whereDoYouLive">
          England
        </label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="whereDoYouLive-2" name="whereDoYouLive" type="radio" value="scotland">
        <label class="govuk-label govuk-radios__label" for="whereDoYouLive-2">
          Scotland
        </label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="whereDoYouLive-3" name="whereDoYouLive" type="radio" value="wales">
        <label class="govuk-label govuk-radios__label" for="whereDoYouLive-3">
          Wales
        </label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="whereDoYouLive-4" name="whereDoYouLive" type="radio" value="northern-ireland">
        <label class="govuk-label govuk-radios__label" for="whereDoYouLive-4">
          Northern Ireland
        </label>
      </div>
    </div>
  </fieldset>
</div>
```

Nunjucks

[See options and how to use with Nunjucks](https://design-system.service.gov.uk/components/radios/nunjucks/)

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

If you’re asking more than one question on the page, do not set the contents of the `<legend>` as the page heading. Read more about [asking multiple questions on Question pages](https://design-system.service.gov.uk/patterns/question-pages/#asking-multiple-questions-on-a-page).

[Open this example in a new tab: radios without a heading – radios](https://design-system.service.gov.uk/components/radios/without-heading/)

*   [HTML](https://design-system.service.gov.uk/components/radios/#radios-without-a-heading-radios-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/radios/#radios-without-a-heading-radios-example-nunjucks)

HTML

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
    <legend class="govuk-fieldset__legend">
      Where do you live?
    </legend>
    <div class="govuk-radios" data-module="govuk-radios">
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="whereDoYouLive" name="whereDoYouLive" type="radio" value="england">
        <label class="govuk-label govuk-radios__label" for="whereDoYouLive">
          England
        </label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="whereDoYouLive-2" name="whereDoYouLive" type="radio" value="scotland">
        <label class="govuk-label govuk-radios__label" for="whereDoYouLive-2">
          Scotland
        </label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="whereDoYouLive-3" name="whereDoYouLive" type="radio" value="wales">
        <label class="govuk-label govuk-radios__label" for="whereDoYouLive-3">
          Wales
        </label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="whereDoYouLive-4" name="whereDoYouLive" type="radio" value="northern-ireland">
        <label class="govuk-label govuk-radios__label" for="whereDoYouLive-4">
          Northern Ireland
        </label>
      </div>
    </div>
  </fieldset>
</div>
```

Nunjucks

[See options and how to use with Nunjucks](https://design-system.service.gov.uk/components/radios/nunjucks/)

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

In some cases, you can choose to display radios ‘inline’ beside one another (horizontally).

Only use inline radios when:

*   the question only has two options
*   both options are short

Remember that on small screens such as mobile devices, the radios will still be ‘stacked’ on top of one another (vertically).

[Open this example in a new tab: inline radios – radios](https://design-system.service.gov.uk/components/radios/inline/)

*   [HTML](https://design-system.service.gov.uk/components/radios/#inline-radios-radios-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/radios/#inline-radios-radios-example-nunjucks)

HTML

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="changedName-hint">
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
      <h1 class="govuk-fieldset__heading">
        Have you changed your name?
      </h1>
    </legend>
    <div id="changedName-hint" class="govuk-hint">
      This includes changing your last name or spelling your name differently
    </div>
    <div class="govuk-radios govuk-radios--inline" data-module="govuk-radios">
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="changedName" name="changedName" type="radio" value="yes">
        <label class="govuk-label govuk-radios__label" for="changedName">
          Yes
        </label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="changedName-2" name="changedName" type="radio" value="no">
        <label class="govuk-label govuk-radios__label" for="changedName-2">
          No
        </label>
      </div>
    </div>
  </fieldset>
</div>
```

Nunjucks

[See options and how to use with Nunjucks](https://design-system.service.gov.uk/components/radios/nunjucks/)

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

[Open this example in a new tab: radio items with hint – radios](https://design-system.service.gov.uk/components/radios/hint/)

*   [HTML](https://design-system.service.gov.uk/components/radios/#radio-items-with-hint-radios-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/radios/#radio-items-with-hint-radios-example-nunjucks)

HTML

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="signIn-hint">
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
      <h1 class="govuk-fieldset__heading">
        How do you want to sign in?
      </h1>
    </legend>
    <div id="signIn-hint" class="govuk-hint">
      You’ll need an account to prove your identity and complete your Self Assessment
    </div>
    <div class="govuk-radios" data-module="govuk-radios">
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="signIn" name="signIn" type="radio" value="government-gateway" aria-describedby="signIn-item-hint">
        <label class="govuk-label govuk-radios__label" for="signIn">
          Sign in with Government Gateway
        </label>
        <div id="signIn-item-hint" class="govuk-hint govuk-radios__hint">
          You’ll have a user ID if you’ve registered for Self Assessment or filed a tax return online before
        </div>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="signIn-2" name="signIn" type="radio" value="govuk-one-login" aria-describedby="signIn-2-item-hint">
        <label class="govuk-label govuk-radios__label" for="signIn-2">
          Sign in with GOV.UK One Login
        </label>
        <div id="signIn-2-item-hint" class="govuk-hint govuk-radios__hint">
          If you don’t have a GOV.UK One Login, you can create one
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

Nunjucks

[See options and how to use with Nunjucks](https://design-system.service.gov.uk/components/radios/nunjucks/)

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

[Open this example in a new tab: radios with a text divider – radios](https://design-system.service.gov.uk/components/radios/divider/)

*   [HTML](https://design-system.service.gov.uk/components/radios/#radios-with-a-text-divider-radios-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/radios/#radios-with-a-text-divider-radios-example-nunjucks)

HTML

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
      <h1 class="govuk-fieldset__heading">
        Where do you live?
      </h1>
    </legend>
    <div class="govuk-radios" data-module="govuk-radios">
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="whereDoYouLive" name="whereDoYouLive" type="radio" value="england">
        <label class="govuk-label govuk-radios__label" for="whereDoYouLive">
          England
        </label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="whereDoYouLive-2" name="whereDoYouLive" type="radio" value="scotland">
        <label class="govuk-label govuk-radios__label" for="whereDoYouLive-2">
          Scotland
        </label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="whereDoYouLive-3" name="whereDoYouLive" type="radio" value="wales">
        <label class="govuk-label govuk-radios__label" for="whereDoYouLive-3">
          Wales
        </label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="whereDoYouLive-4" name="whereDoYouLive" type="radio" value="northern-ireland">
        <label class="govuk-label govuk-radios__label" for="whereDoYouLive-4">
          Northern Ireland
        </label>
      </div>
      <div class="govuk-radios__divider">or</div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="whereDoYouLive-6" name="whereDoYouLive" type="radio" value="abroad">
        <label class="govuk-label govuk-radios__label" for="whereDoYouLive-6">
          I am a British citizen living abroad
        </label>
      </div>
    </div>
  </fieldset>
</div>
```

Nunjucks

[See options and how to use with Nunjucks](https://design-system.service.gov.uk/components/radios/nunjucks/)

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

You can ask the user a related question when they select a particular radio option, so they only see the question when it’s relevant to them.

This might make two related questions easier to answer by grouping them on the same page. For example, you could reveal a phone number input when the user selects the ‘Contact me by phone’ option.

[Open this example in a new tab: radios with conditionally revealing content – radios](https://design-system.service.gov.uk/components/radios/conditional-reveal/)

*   [HTML](https://design-system.service.gov.uk/components/radios/#radios-with-conditionally-revealing-content-radios-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/radios/#radios-with-conditionally-revealing-content-radios-example-nunjucks)

HTML

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="contact-hint">
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
      <h1 class="govuk-fieldset__heading">
        How would you prefer to be contacted?
      </h1>
    </legend>
    <div id="contact-hint" class="govuk-hint">
      Select one option
    </div>
    <div class="govuk-radios" data-module="govuk-radios">
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="contact" name="contact" type="radio" value="email" data-aria-controls="conditional-contact">
        <label class="govuk-label govuk-radios__label" for="contact">
          Email
        </label>
      </div>
      <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-contact">
        <div class="govuk-form-group">
          <label class="govuk-label" for="contact-by-email">
            Email address
          </label>
          <input class="govuk-input govuk-!-width-one-third" id="contact-by-email" name="contactByEmail" type="email" spellcheck="false" autocomplete="email">
        </div>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="contact-2" name="contact" type="radio" value="phone" data-aria-controls="conditional-contact-2">
        <label class="govuk-label govuk-radios__label" for="contact-2">
          Phone
        </label>
      </div>
      <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-contact-2">
        <div class="govuk-form-group">
          <label class="govuk-label" for="contact-by-phone">
            Phone number
          </label>
          <input class="govuk-input govuk-!-width-one-third" id="contact-by-phone" name="contactByPhone" type="tel" autocomplete="tel">
        </div>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="contact-3" name="contact" type="radio" value="text" data-aria-controls="conditional-contact-3">
        <label class="govuk-label govuk-radios__label" for="contact-3">
          Text message
        </label>
      </div>
      <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-contact-3">
        <div class="govuk-form-group">
          <label class="govuk-label" for="contact-by-text">
            Mobile phone number
          </label>
          <input class="govuk-input govuk-!-width-one-third" id="contact-by-text" name="contactByText" type="tel" autocomplete="tel">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

Nunjucks

[See options and how to use with Nunjucks](https://design-system.service.gov.uk/components/radios/nunjucks/)

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

[Open this example in a new tab: small radios – radios](https://design-system.service.gov.uk/components/radios/small/)

*   [HTML](https://design-system.service.gov.uk/components/radios/#small-radios-radios-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/radios/#small-radios-radios-example-nunjucks)

HTML

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--m">
      <h1 class="govuk-fieldset__heading">
        Filter
      </h1>
    </legend>
    <div class="govuk-radios govuk-radios--small" data-module="govuk-radios">
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="changedName" name="changedName" type="radio" value="month">
        <label class="govuk-label govuk-radios__label" for="changedName">
          Monthly
        </label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="changedName-2" name="changedName" type="radio" value="year">
        <label class="govuk-label govuk-radios__label" for="changedName-2">
          Yearly
        </label>
      </div>
    </div>
  </fieldset>
</div>
```

Nunjucks

[See options and how to use with Nunjucks](https://design-system.service.gov.uk/components/radios/nunjucks/)

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

*   selected any radios
*   answered a conditionally revealed question

Error messages should be styled like this:

[Open this example in a new tab: inline radios with error – radios](https://design-system.service.gov.uk/components/radios/error/)

*   [HTML](https://design-system.service.gov.uk/components/radios/#inline-radios-with-error-radios-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/radios/#inline-radios-with-error-radios-example-nunjucks)

HTML

```html
<div class="govuk-form-group govuk-form-group--error">
  <fieldset class="govuk-fieldset" aria-describedby="whereDoYouLive-error">
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
      <h1 class="govuk-fieldset__heading">
        Where do you live?
      </h1>
    </legend>
    <p id="whereDoYouLive-error" class="govuk-error-message">
      <span class="govuk-visually-hidden">Error:</span> Select the country where you live
    </p>
    <div class="govuk-radios" data-module="govuk-radios">
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="whereDoYouLive" name="whereDoYouLive" type="radio" value="england">
        <label class="govuk-label govuk-radios__label" for="whereDoYouLive">
          England
        </label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="whereDoYouLive-2" name="whereDoYouLive" type="radio" value="scotland">
        <label class="govuk-label govuk-radios__label" for="whereDoYouLive-2">
          Scotland
        </label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="whereDoYouLive-3" name="whereDoYouLive" type="radio" value="wales">
        <label class="govuk-label govuk-radios__label" for="whereDoYouLive-3">
          Wales
        </label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="whereDoYouLive-4" name="whereDoYouLive" type="radio" value="northern-ireland">
        <label class="govuk-label govuk-radios__label" for="whereDoYouLive-4">
          Northern Ireland
        </label>
      </div>
    </div>
  </fieldset>
</div>
```

Nunjucks

[See options and how to use with Nunjucks](https://design-system.service.gov.uk/components/radios/nunjucks/)

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

#### If it’s a conditionally revealed question

Include an [Error message component](https://design-system.service.gov.uk/components/error-message/) that is clearly related to the initial question.

[Open this example in a new tab: radios with conditionally revealing content showing an error – radios](https://design-system.service.gov.uk/components/radios/conditional-reveal-error/)

*   [HTML](https://design-system.service.gov.uk/components/radios/#radios-with-conditionally-revealing-content-showing-an-error-radios-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/radios/#radios-with-conditionally-revealing-content-showing-an-error-radios-example-nunjucks)

HTML

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="contact-hint">
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
      <h1 class="govuk-fieldset__heading">
        How would you prefer to be contacted?
      </h1>
    </legend>
    <div id="contact-hint" class="govuk-hint">
      Select one option
    </div>
    <div class="govuk-radios" data-module="govuk-radios">
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="contact" name="contact" type="radio" value="email" checked data-aria-controls="conditional-contact">
        <label class="govuk-label govuk-radios__label" for="contact">
          Email
        </label>
      </div>
      <div class="govuk-radios__conditional" id="conditional-contact">
        <div class="govuk-form-group govuk-form-group--error">
          <label class="govuk-label" for="contact-by-email">
            Email address
          </label>
          <p id="contact-by-email-error" class="govuk-error-message">
            <span class="govuk-visually-hidden">Error:</span> Email address cannot be blank
          </p>
          <input class="govuk-input govuk-!-width-one-half govuk-input--error" id="contact-by-email" name="contactByEmail" type="email" spellcheck="false" aria-describedby="contact-by-email-error" autocomplete="email">
        </div>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="contact-2" name="contact" type="radio" value="phone" data-aria-controls="conditional-contact-2">
        <label class="govuk-label govuk-radios__label" for="contact-2">
          Phone
        </label>
      </div>
      <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-contact-2">
        <div class="govuk-form-group">
          <label class="govuk-label" for="contact-by-phone">
            Phone number
          </label>
          <input class="govuk-input govuk-!-width-one-third" id="contact-by-phone" name="contactByPhone" type="tel" autocomplete="tel">
        </div>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="contact-3" name="contact" type="radio" value="text" data-aria-controls="conditional-contact-3">
        <label class="govuk-label govuk-radios__label" for="contact-3">
          Text message
        </label>
      </div>
      <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-contact-3">
        <div class="govuk-form-group">
          <label class="govuk-label" for="contact-by-text">
            Mobile phone number
          </label>
          <input class="govuk-input govuk-!-width-one-third" id="contact-by-text" name="contactByText" type="tel" autocomplete="tel">
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

Nunjucks

[See options and how to use with Nunjucks](https://design-system.service.gov.uk/components/radios/nunjucks/)

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

## Recent changes

| Date | Changed | Description |
| --- | --- | --- |
| Jun 2026 | [GOV.UK Frontend v6.3.0](https://github.com/alphagov/govuk-frontend/releases/tag/v6.3.0) | Fixed label text in small, inline Radio buttons wrapping unnecessarily. |
| Jan 2026 | [GOV.UK Frontend v5.14.0](https://github.com/alphagov/govuk-frontend/releases/tag/v5.14.0) | Fixed small radio buttons that were both hovered and focused not rendering the focus style. |
| Sept 2025 | [GOV.UK Frontend v5.12.0](https://github.com/alphagov/govuk-frontend/releases/tag/v5.12.0) | Follow-up to remove forced indentation in conditionally revealed content, as HTML was still indented when radios were used with a fieldset. |
| Jul 2024 | [GOV.UK Frontend v5.4.1](https://github.com/alphagov/govuk-frontend/releases/tag/v5.4.1) | Fixed conditionally revealed content not being aligned with the parent Radio button. |
| Apr 2024 | [GOV.UK Frontend v5.3.1](https://github.com/alphagov/govuk-frontend/releases/tag/v5.3.1) | Removed forced indentation in conditionally revealed content, due to rendering issues with whitespace-sensitive content such as `textarea` elements. |
