---
title: "GOV.UK · Component · Summary list 摘要列表"
source: https://design-system.service.gov.uk/components/summary-list/
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-39
publisher: "GOV.UK Design System"
---

# GOV.UK · Component · Summary list 摘要列表

> 来源：[https://design-system.service.gov.uk/components/summary-list/](https://design-system.service.gov.uk/components/summary-list/)

---

*   [History for](https://design-system.service.gov.uk/components/summary-list/history/)
*   [Use with Nunjucks for](https://design-system.service.gov.uk/components/summary-list/nunjucks/)

Use a summary list to summarise information, for example, a user’s responses at the end of a form.

[Open this example in a new tab: summary list](https://design-system.service.gov.uk/components/summary-list/default/)

*   [HTML](https://design-system.service.gov.uk/components/summary-list/#summary-list-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/summary-list/#summary-list-example-nunjucks)

HTML

```html
<dl class="govuk-summary-list">
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Name
    </dt>
    <dd class="govuk-summary-list__value">
      Sarah Phillips
    </dd>
    <dd class="govuk-summary-list__actions">
      <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> name</span></a>
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="govuk-summary-list__value">
      5 January 1978
    </dd>
    <dd class="govuk-summary-list__actions">
      <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> date of birth</span></a>
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Address
    </dt>
    <dd class="govuk-summary-list__value">
      72 Guild Street<br>London<br>SE23 6FH
    </dd>
    <dd class="govuk-summary-list__actions">
      <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> address</span></a>
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Contact details
    </dt>
    <dd class="govuk-summary-list__value">
      <p class="govuk-body">07700 900457</p>
      <p class="govuk-body">sarah.phillips@example.com</p>
    </dd>
    <dd class="govuk-summary-list__actions">
      <ul class="govuk-summary-list__actions-list">
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Add<span class="govuk-visually-hidden"> contact details</span></a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> contact details</span></a>
        </li>
      </ul>
    </dd>
  </div>
</dl>
```

Nunjucks

[See options and how to use with Nunjucks](https://design-system.service.gov.uk/components/summary-list/nunjucks/)

```njk
{% from "govuk/components/summary-list/macro.njk" import govukSummaryList %}

{{ govukSummaryList({
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Sarah Phillips"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "name"
          }
        ]
      }
    },
    {
      key: {
        text: "Date of birth"
      },
      value: {
        text: "5 January 1978"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "date of birth"
          }
        ]
      }
    },
    {
      key: {
        text: "Address"
      },
      value: {
        html: "72 Guild Street<br>London<br>SE23 6FH"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "address"
          }
        ]
      }
    },
    {
      key: {
        text: "Contact details"
      },
      value: {
        html: '<p class="govuk-body">07700 900457</p><p class="govuk-body">sarah.phillips@example.com</p>'
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Add",
            visuallyHiddenText: "contact details"
          },
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "contact details"
          }
        ]
      }
    }
  ]
}) }}
```

## When to use this component

Use a summary list to show information as a list of key facts.

You can use it to display metadata like ‘Last updated’ with a date like ‘22 June 2018’, or to summarise a user’s responses at the end of a form like the [Check answers pattern](https://design-system.service.gov.uk/patterns/check-answers/).

[Summary cards are a variant within this component](https://design-system.service.gov.uk/components/summary-list/#summary-cards). You can use summary cards to show multiple summary lists that describe the same type of thing, such as people. You can also add card actions that apply to the entire summary list.

## When not to use this component

The summary list uses the description list (`<dl>`) HTML element, so only use it to present information that has a key and at least one value.

Do not use it for tabular data or a simple list of information or tasks, like a [Task list component](https://design-system.service.gov.uk/components/task-list/). For those use a `<table>`, `<ul>` or `<ol>`.

## How it works

Each row of a summary list is made up of a:

*   ‘key’ that’s a description or label of a piece of information, like “Name”
*   ‘value’ which is the piece of information itself, such as “John Smith”

You can show a single or multiple summary lists on a page. If you’re showing multiple summary lists on a page, you can add structure by using headings or summary cards.

There are 2 ways to use the summary list component. You can use HTML or, if you’re using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk/), you can use the Nunjucks macro.

[Open this example in a new tab: without actions – summary list](https://design-system.service.gov.uk/components/summary-list/without-actions/)

*   [HTML](https://design-system.service.gov.uk/components/summary-list/#without-actions-summary-list-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/summary-list/#without-actions-summary-list-example-nunjucks)

HTML

```html
<dl class="govuk-summary-list">
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Name
    </dt>
    <dd class="govuk-summary-list__value">
      Sarah Phillips
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="govuk-summary-list__value">
      5 January 1978
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Address
    </dt>
    <dd class="govuk-summary-list__value">
      72 Guild Street<br>London<br>SE23 6FH
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Contact details
    </dt>
    <dd class="govuk-summary-list__value">
      <p class="govuk-body">07700 900457</p>
      <p class="govuk-body">sarah.phillips@example.com</p>
    </dd>
  </div>
</dl>
```

Nunjucks

[See options and how to use with Nunjucks](https://design-system.service.gov.uk/components/summary-list/nunjucks/)

```njk
{% from "govuk/components/summary-list/macro.njk" import govukSummaryList %}

{{ govukSummaryList({
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Sarah Phillips"
      }
    },
    {
      key: {
        text: "Date of birth"
      },
      value: {
        text: "5 January 1978"
      }
    },
    {
      key: {
        text: "Address"
      },
      value: {
        html: "72 Guild Street<br>London<br>SE23 6FH"
      }
    },
    {
      key: {
        text: "Contact details"
      },
      value: {
        html: '<p class="govuk-body">07700 900457</p><p class="govuk-body">sarah.phillips@example.com</p>'
      }
    }
  ]
}) }}
```

### Adding actions to each row

You can add ‘row actions’ to a summary list. For example, you can help users go back and edit an answer by adding a ‘change’ link.

When navigating visually, the borders above and below each row help to show which row action is tied to which piece of information.

Assistive technology users, including those who use a screen reader, might hear a row action link out of context and might not know what it will do. To give more context, add visually hidden text to the links. This means a screen reader user will hear the row action and the ‘key’ label for the information it will affect, like ‘Change name’ or ‘Change date of birth’.

If a user decides to go back to a previous answer through a card or row action, make sure information they’ve already entered is pre-populated.

[Open this example in a new tab: summary list second](https://design-system.service.gov.uk/components/summary-list/default/)

*   [HTML](https://design-system.service.gov.uk/components/summary-list/#summary-list-second-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/summary-list/#summary-list-second-example-nunjucks)

HTML

```html
<dl class="govuk-summary-list">
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Name
    </dt>
    <dd class="govuk-summary-list__value">
      Sarah Phillips
    </dd>
    <dd class="govuk-summary-list__actions">
      <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> name</span></a>
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="govuk-summary-list__value">
      5 January 1978
    </dd>
    <dd class="govuk-summary-list__actions">
      <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> date of birth</span></a>
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Address
    </dt>
    <dd class="govuk-summary-list__value">
      72 Guild Street<br>London<br>SE23 6FH
    </dd>
    <dd class="govuk-summary-list__actions">
      <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> address</span></a>
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Contact details
    </dt>
    <dd class="govuk-summary-list__value">
      <p class="govuk-body">07700 900457</p>
      <p class="govuk-body">sarah.phillips@example.com</p>
    </dd>
    <dd class="govuk-summary-list__actions">
      <ul class="govuk-summary-list__actions-list">
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Add<span class="govuk-visually-hidden"> contact details</span></a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> contact details</span></a>
        </li>
      </ul>
    </dd>
  </div>
</dl>
```

Nunjucks

[See options and how to use with Nunjucks](https://design-system.service.gov.uk/components/summary-list/nunjucks/)

```njk
{% from "govuk/components/summary-list/macro.njk" import govukSummaryList %}

{{ govukSummaryList({
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Sarah Phillips"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "name"
          }
        ]
      }
    },
    {
      key: {
        text: "Date of birth"
      },
      value: {
        text: "5 January 1978"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "date of birth"
          }
        ]
      }
    },
    {
      key: {
        text: "Address"
      },
      value: {
        html: "72 Guild Street<br>London<br>SE23 6FH"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "address"
          }
        ]
      }
    },
    {
      key: {
        text: "Contact details"
      },
      value: {
        html: '<p class="govuk-body">07700 900457</p><p class="govuk-body">sarah.phillips@example.com</p>'
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Add",
            visuallyHiddenText: "contact details"
          },
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "contact details"
          }
        ]
      }
    }
  ]
}) }}
```

#### Showing rows with and without actions

If you’re showing a mix of rows (where some rows include actions and some do not), add the `govuk-summary-list__row--no-actions` modifier class to the rows without actions. This is to ensure the bottom border is drawn correctly in some browsers.

[Open this example in a new tab: summary list with a mix of rows with and without actions – summary list](https://design-system.service.gov.uk/components/summary-list/mixed-actions/)

*   [HTML](https://design-system.service.gov.uk/components/summary-list/#summary-list-with-a-mix-of-rows-with-and-without-actions-summary-list-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/summary-list/#summary-list-with-a-mix-of-rows-with-and-without-actions-summary-list-example-nunjucks)

HTML

```html
<dl class="govuk-summary-list">
  <div class="govuk-summary-list__row govuk-summary-list__row--no-actions">
    <dt class="govuk-summary-list__key">
      Name
    </dt>
    <dd class="govuk-summary-list__value">
      Sarah Phillips
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="govuk-summary-list__value">
      5 January 1978
    </dd>
    <dd class="govuk-summary-list__actions">
      <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> date of birth</span></a>
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Address
    </dt>
    <dd class="govuk-summary-list__value">
      72 Guild Street<br>London<br>SE23 6FH
    </dd>
    <dd class="govuk-summary-list__actions">
      <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> address</span></a>
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Contact details
    </dt>
    <dd class="govuk-summary-list__value">
      <p class="govuk-body">07700 900457</p>
      <p class="govuk-body">sarah.phillips@example.com</p>
    </dd>
    <dd class="govuk-summary-list__actions">
      <ul class="govuk-summary-list__actions-list">
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Add<span class="govuk-visually-hidden"> contact details</span></a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> contact details</span></a>
        </li>
      </ul>
    </dd>
  </div>
</dl>
```

Nunjucks

[See options and how to use with Nunjucks](https://design-system.service.gov.uk/components/summary-list/nunjucks/)

```njk
{% from "govuk/components/summary-list/macro.njk" import govukSummaryList %}

{{ govukSummaryList({
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Sarah Phillips"
      }
    },
    {
      key: {
        text: "Date of birth"
      },
      value: {
        text: "5 January 1978"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "date of birth"
          }
        ]
      }
    },
    {
      key: {
        text: "Address"
      },
      value: {
        html: "72 Guild Street<br>London<br>SE23 6FH"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "address"
          }
        ]
      }
    },
    {
      key: {
        text: "Contact details"
      },
      value: {
        html: '<p class="govuk-body">07700 900457</p><p class="govuk-body">sarah.phillips@example.com</p>'
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Add",
            visuallyHiddenText: "contact details"
          },
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "contact details"
          }
        ]
      }
    }
  ]
}) }}
```

### Removing the borders

The summary list includes separating borders to help users by joining the information on each row and its action together.

Think carefully before you remove row borders. Borders help many users find and read information that’s laid out in rows, especially users who zoom in on pages or use assistive technologies to magnify their screen.

If your summary list does not have any actions, you can choose to remove the separating borders with the `govuk-summary-list--no-border` class.

[Open this example in a new tab: without borders – summary list](https://design-system.service.gov.uk/components/summary-list/without-borders/)

*   [HTML](https://design-system.service.gov.uk/components/summary-list/#without-borders-summary-list-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/summary-list/#without-borders-summary-list-example-nunjucks)

HTML

```html
<dl class="govuk-summary-list govuk-summary-list--no-border">
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Name
    </dt>
    <dd class="govuk-summary-list__value">
      Sarah Phillips
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="govuk-summary-list__value">
      5 January 1978
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Address
    </dt>
    <dd class="govuk-summary-list__value">
      72 Guild Street<br>London<br>SE23 6FH
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Contact details
    </dt>
    <dd class="govuk-summary-list__value">
      <p class="govuk-body">07700 900457</p>
      <p class="govuk-body">sarah.phillips@example.com</p>
    </dd>
  </div>
</dl>
```

Nunjucks

[See options and how to use with Nunjucks](https://design-system.service.gov.uk/components/summary-list/nunjucks/)

```njk
{% from "govuk/components/summary-list/macro.njk" import govukSummaryList %}

{{ govukSummaryList({
  classes: "govuk-summary-list--no-border",
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Sarah Phillips"
      }
    },
    {
      key: {
        text: "Date of birth"
      },
      value: {
        text: "5 January 1978"
      }
    },
    {
      key: {
        text: "Address"
      },
      value: {
        html: "72 Guild Street<br>London<br>SE23 6FH"
      }
    },
    {
      key: {
        text: "Contact details"
      },
      value: {
        html: '<p class="govuk-body">07700 900457</p><p class="govuk-body">sarah.phillips@example.com</p>'
      }
    }
  ]
}) }}
```

To remove borders on a single row, use the `govuk-summary-list__row--no-border` class.

### Showing missing information

In some contexts, you might need to show rows that have missing information. This can happen when:

*   a user returns to an incomplete journey
*   you’ve added or changed the questions in a service.

Show a link to the appropriate question page in the `value` column so the user can enter the missing information, instead of showing a ‘change’ link on that row.

[Open this example in a new tab: summary list with missing information – summary list](https://design-system.service.gov.uk/components/summary-list/with-missing-information/)

*   [HTML](https://design-system.service.gov.uk/components/summary-list/#summary-list-with-missing-information-summary-list-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/summary-list/#summary-list-with-missing-information-summary-list-example-nunjucks)

HTML

```html
<dl class="govuk-summary-list">
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Name
    </dt>
    <dd class="govuk-summary-list__value">
      Sarah Phillips
    </dd>
    <dd class="govuk-summary-list__actions">
      <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> name</span></a>
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="govuk-summary-list__value">
      5 January 1978
    </dd>
    <dd class="govuk-summary-list__actions">
      <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> date of birth</span></a>
    </dd>
  </div>
  <div class="govuk-summary-list__row govuk-summary-list__row--no-actions">
    <dt class="govuk-summary-list__key">
      Contact information
    </dt>
    <dd class="govuk-summary-list__value">
      <a href="#" class="govuk-link">Enter contact information</a>
    </dd>
  </div>
  <div class="govuk-summary-list__row govuk-summary-list__row--no-actions">
    <dt class="govuk-summary-list__key">
      Contact details
    </dt>
    <dd class="govuk-summary-list__value">
      <a href="#" class="govuk-link">Enter contact details</a>
    </dd>
  </div>
</dl>
```

Nunjucks

[See options and how to use with Nunjucks](https://design-system.service.gov.uk/components/summary-list/nunjucks/)

```njk
{% from "govuk/components/summary-list/macro.njk" import govukSummaryList %}

{{ govukSummaryList({
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Sarah Phillips"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "name"
          }
        ]
      }
    },
    {
      key: {
        text: "Date of birth"
      },
      value: {
        text: "5 January 1978"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "date of birth"
          }
        ]
      }
    },
    {
      key: {
        text: "Contact information"
      },
      value: {
        html: '<a href="#" class="govuk-link">Enter contact information</a>'
      }
    },
    {
      key: {
        text: "Contact details"
      },
      value: {
        html: '<a href="#" class="govuk-link">Enter contact details</a>'
      }
    }
  ]
}) }}
```

## Summary cards

If you’re showing multiple summary lists on a page, you can show each list within a summary card. This lets you visually separate each summary list and give each a title and some actions.

Use summary cards when you need to show:

*   multiple summary lists that all describe the same type of thing, such as people
*   actions that will apply to all the items in a list

Summary cards are often used in case working systems to help users quickly view a set of information and related actions.

Do not use summary cards if you only need to show a small amount of related information. Use summary lists instead, and structure them with headings if needed.

If you’re showing summary cards at the end of a longer journey, you might want to familiarise the user with them earlier on – such as when the user reviews individual sections.

### Card titles

Use the summary card’s header area to give each summary list a title.

Each title must be unique and help identify what the summary list describes. For example, this could be the name of a specific person, organisation or professional qualification.

Try to keep titles short and relevant. You can use one or two important values in the summary list – such as the first and last name of a person.

[Open this example in a new tab: summary in a card with a title – summary list](https://design-system.service.gov.uk/components/summary-list/card-with-title/)

*   [HTML](https://design-system.service.gov.uk/components/summary-list/#summary-in-a-card-with-a-title-summary-list-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/summary-list/#summary-in-a-card-with-a-title-summary-list-example-nunjucks)

HTML

```html
<div class="govuk-summary-card">
  <div class="govuk-summary-card__title-wrapper">
    <h2 class="govuk-summary-card__title">
      Lead tenant
    </h2>
  </div>
  <div class="govuk-summary-card__content">
    <dl class="govuk-summary-list">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Age
        </dt>
        <dd class="govuk-summary-list__value">
          38
        </dd>
        <dd class="govuk-summary-list__actions">
          <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> age (Lead tenant)</span></a>
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Nationality
        </dt>
        <dd class="govuk-summary-list__value">
          UK national resident in UK
        </dd>
        <dd class="govuk-summary-list__actions">
          <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> nationality (Lead tenant)</span></a>
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Working situation
        </dt>
        <dd class="govuk-summary-list__value">
          Part time – less than 30 hours a week
        </dd>
        <dd class="govuk-summary-list__actions">
          <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> working situation (Lead tenant)</span></a>
        </dd>
      </div>
    </dl>
  </div>
</div>
<div class="govuk-summary-card">
  <div class="govuk-summary-card__title-wrapper">
    <h2 class="govuk-summary-card__title">
      Person 2
    </h2>
  </div>
  <div class="govuk-summary-card__content">
    <dl class="govuk-summary-list">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Details known
        </dt>
        <dd class="govuk-summary-list__value">
          Yes
        </dd>
        <dd class="govuk-summary-list__actions">
          <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> whether details are known (Person 2)</span></a>
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Relationship to lead tenant
        </dt>
        <dd class="govuk-summary-list__value">
          Partner
        </dd>
        <dd class="govuk-summary-list__actions">
          <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> relationship to lead tenant (Person 2)</span></a>
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Age
        </dt>
        <dd class="govuk-summary-list__value">
          42
        </dd>
        <dd class="govuk-summary-list__actions">
          <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> age (Person 2)</span></a>
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Working situation
        </dt>
        <dd class="govuk-summary-list__value">
          Unable to work because of long-term sickness or disability
        </dd>
        <dd class="govuk-summary-list__actions">
          <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> working situation (Person 2)</span></a>
        </dd>
      </div>
    </dl>
  </div>
</div>
<div class="govuk-summary-card">
  <div class="govuk-summary-card__title-wrapper">
    <h2 class="govuk-summary-card__title">
      Person 3
    </h2>
  </div>
  <div class="govuk-summary-card__content">
    <dl class="govuk-summary-list">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Details known
        </dt>
        <dd class="govuk-summary-list__value">
          Yes
        </dd>
        <dd class="govuk-summary-list__actions">
          <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> whether details are known (Person 3)</span></a>
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Relationship to lead tenant
        </dt>
        <dd class="govuk-summary-list__value">
          Child
        </dd>
        <dd class="govuk-summary-list__actions">
          <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> relationship to lead tenant (Person 3)</span></a>
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Age
        </dt>
        <dd class="govuk-summary-list__value">
          7
        </dd>
        <dd class="govuk-summary-list__actions">
          <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> age (Person 3)</span></a>
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Working situation
        </dt>
        <dd class="govuk-summary-list__value">
          Child under 16
        </dd>
        <dd class="govuk-summary-list__actions">
          <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> working situation (Person 3)</span></a>
        </dd>
      </div>
    </dl>
  </div>
</div>
```

Nunjucks

[See options and how to use with Nunjucks](https://design-system.service.gov.uk/components/summary-list/nunjucks/)

```njk
{% from "govuk/components/summary-list/macro.njk" import govukSummaryList %}

{{ govukSummaryList({
  card: {
    title: {
      text: "Lead tenant"
    }
  },
  rows: [
    {
      key: {
        text: "Age"
      },
      value: {
        html: "38"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "age"
          }
        ]
      }
    },
    {
      key: {
        text: "Nationality"
      },
      value: {
        html: "UK national resident in UK"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "nationality"
          }
        ]
      }
    },
    {
      key: {
        text: "Working situation"
      },
      value: {
        html: "Part time – less than 30 hours a week"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "working situation"
          }
        ]
      }
    }
  ]
}) }}

{{ govukSummaryList({
  card: {
    title: {
      text: "Person 2"
    }
  },
  rows: [
    {
      key: {
        text: "Details known"
      },
      value: {
        html: "Yes"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "whether details are known"
          }
        ]
      }
    },
    {
      key: {
        text: "Relationship to lead tenant"
      },
      value: {
        html: "Partner"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "relationship to lead tenant"
          }
        ]
      }
    },
    {
      key: {
        text: "Age"
      },
      value: {
        html: "42"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "age"
          }
        ]
      }
    },
    {
      key: {
        text: "Working situation"
      },
      value: {
        html: "Unable to work because of long-term sickness or disability"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "working situation"
          }
        ]
      }
    }
  ]
}) }}

{{ govukSummaryList({
  card: {
    title: {
      text: "Person 3"
    }
  },
  rows: [
    {
      key: {
        text: "Details known"
      },
      value: {
        html: "Yes"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "whether details are known"
          }
        ]
      }
    },
    {
      key: {
        text: "Relationship to lead tenant"
      },
      value: {
        html: "Child"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "relationship to lead tenant"
          }
        ]
      }
    },
    {
      key: {
        text: "Age"
      },
      value: {
        html: "7"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "age"
          }
        ]
      }
    },
    {
      key: {
        text: "Working situation"
      },
      value: {
        html: "Child under 16"
      },
      actions: {
        items: [
          {
            href: "#",
            text: "Change",
            visuallyHiddenText: "working situation"
          }
        ]
      }
    }
  ]
}) }}
```

### Adding card actions

You can add card actions in the header, which will be shown after the summary card’s title.

For example, if you have multiple rows with “change” actions that all take the user to the same place, you can show a single “change” card action instead. This helps avoid repeating the same row action on every row.

Card actions are shown in bold text to make them visually distinct from row actions – and help alert the user that the card action will affect the entire summary card.

Write link text for card actions to tell the user what the card action will do and that it will apply to the entire summary card. It should also be as short as possible, usually 2 words.

Example card actions include:

*   Remove tenant
*   Edit qualification
*   Update issue
*   Approve application
*   Cancel order

Keep it short and do not add more than 2 to 3 actions in a header.

If a card action cannot easily be undone or might have serious consequences, consider adding a warning or asking the user for confirmation.

[Open this example in a new tab: summary in a card with a title and actions – summary list](https://design-system.service.gov.uk/components/summary-list/card-with-actions/)

*   [HTML](https://design-system.service.gov.uk/components/summary-list/#summary-in-a-card-with-a-title-and-actions-summary-list-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/summary-list/#summary-in-a-card-with-a-title-and-actions-summary-list-example-nunjucks)

HTML

```html
<div class="govuk-summary-card">
  <div class="govuk-summary-card__title-wrapper">
    <h2 class="govuk-summary-card__title">
      University of Gloucestershire
    </h2>
    <ul class="govuk-summary-card__actions">
      <li class="govuk-summary-card__action">
        <a class="govuk-link" href="#">Delete choice<span class="govuk-visually-hidden"> (University of Gloucestershire)</span></a>
      </li>
      <li class="govuk-summary-card__action">
        <a class="govuk-link" href="#">Withdraw<span class="govuk-visually-hidden"> (University of Gloucestershire)</span></a>
      </li>
    </ul>
  </div>
  <div class="govuk-summary-card__content">
    <dl class="govuk-summary-list">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Course
        </dt>
        <dd class="govuk-summary-list__value">
          English (3DMD)<br>PGCE with QTS full time
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Location
        </dt>
        <dd class="govuk-summary-list__value">
          School name<br>Road, City, SW1 1AA
        </dd>
      </div>
    </dl>
  </div>
</div>
<div class="govuk-summary-card">
  <div class="govuk-summary-card__title-wrapper">
    <h2 class="govuk-summary-card__title">
      University of Bristol
    </h2>
    <ul class="govuk-summary-card__actions">
      <li class="govuk-summary-card__action">
        <a class="govuk-link" href="#">Delete choice<span class="govuk-visually-hidden"> (University of Bristol)</span></a>
      </li>
      <li class="govuk-summary-card__action">
        <a class="govuk-link" href="#">Withdraw<span class="govuk-visually-hidden"> (University of Bristol)</span></a>
      </li>
    </ul>
  </div>
  <div class="govuk-summary-card__content">
    <dl class="govuk-summary-list">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Course
        </dt>
        <dd class="govuk-summary-list__value">
          English (Q3X1)<br>PGCE with QTS full time
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Location
        </dt>
        <dd class="govuk-summary-list__value">
          School name<br>Road, City, SW2 1AA
        </dd>
      </div>
    </dl>
  </div>
</div>
```

Nunjucks

[See options and how to use with Nunjucks](https://design-system.service.gov.uk/components/summary-list/nunjucks/)

```njk
{% from "govuk/components/summary-list/macro.njk" import govukSummaryList %}

{{ govukSummaryList({
  card: {
    title: {
      text: "University of Gloucestershire"
    },
    actions: {
      items: [
        {
          href: "#",
          text: "Delete choice"
        },
        {
          href: "#",
          text: "Withdraw"
        }
      ]
    }
  },
  rows: [
    {
      key: {
        text: "Course"
      },
      value: {
        html: "English (3DMD)<br>PGCE with QTS full time"
      }
    },
    {
      key: {
        text: "Location"
      },
      value: {
        html: "School name<br>Road, City, SW1 1AA"
      }
    }
  ]
}) }}

{{ govukSummaryList({
  card: {
    title: {
      text: "University of Bristol"
    },
    actions: {
      items: [
        {
          href: "#",
          text: "Delete choice"
        },
        {
          href: "#",
          text: "Withdraw"
        }
      ]
    }
  },
  rows: [
    {
      key: {
        text: "Course"
      },
      value: {
        html: "English (Q3X1)<br>PGCE with QTS full time"
      }
    },
    {
      key: {
        text: "Location"
      },
      value: {
        html: "School name<br>Road, City, SW2 1AA"
      }
    }
  ]
}) }}
```

## Research on this component

This component was developed and tested by the Government Digital Service as part of the [check answers pattern](https://design-system.service.gov.uk/patterns/check-answers/).

The Department for Education contributed the summary card. It’s being used in some of their services, such as:

*   [Apply for teacher training](https://www.gov.uk/apply-for-teacher-training), used by the general public
*   [Register trainee teachers](https://www.register-trainee-teachers.service.gov.uk/), used by people that work for training providers

The summary card is also used in services run by other departments, such us:

*   manage supervisions (Ministry of Justice)
*   submit social housing lettings and sales data (Department for Levelling Up, Housing & Communities)

### Next steps

We still want to learn more about when this component works well.

If you use this component in your service, we’d like to hear about how you use the summary list and summary card, as well as any research findings you might have.

## Recent changes

| Date | Changed | Description |
| --- | --- | --- |
| Mar 2026 | [GOV.UK Frontend v6.1.0](https://github.com/alphagov/govuk-frontend/releases/tag/v6.1.0) | Fixed alignment issue when inline block elements are longer than a single line. |
| May 2025 | Guidance | Removed guidance to not change the spacing of action links. |
| Mar 2025 | [GOV.UK Frontend v5.9.0](https://github.com/alphagov/govuk-frontend/releases/tag/v5.9.0) | Fixed card action link appearance when there are many links. |
| Jan 2024 | Guidance | Added guidance to not change spacing of action links in order to comply with WCAG 2.2. Added guidance to pre-populate previously entered information in order to comply with WCAG 2.2. |
| Dec 2023 | [GOV.UK Frontend v5.0.0](https://github.com/alphagov/govuk-frontend/releases/tag/v5.0.0) | Changed action link HTML to add the title of the summary card or list as visually hidden text after the link text. |
