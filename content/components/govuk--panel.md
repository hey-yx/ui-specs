---
title: "GOV.UK · Component · Panel 面板"
source: https://design-system.service.gov.uk/components/panel/
section: components
tag: "规范"
fetched: 2026-11-01
status: full
id: components-32
publisher: "GOV.UK Design System"
---

# GOV.UK · Component · Panel 面板

> 来源：[https://design-system.service.gov.uk/components/panel/](https://design-system.service.gov.uk/components/panel/)

> 版权：Crown copyright，按 [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/) 发布；本站代码 MIT 许可。本篇为 GOV.UK Design System 同源全文，引用时请署名 GOV.UK Design System。

---

The Panel component is a visible container used to highlight important content.
**示例：default**

```njk
{% from "govuk/components/panel/macro.njk" import govukPanel %}

{% call govukPanel({
  titleText: "Application complete"
}) %}
  Your reference number<br>
  <strong>HDJ2123F</strong>
{% endcall %}
```

## When to use this component

Use the Panel component to display important information within:

- [Confirmation pages](https://design-system.service.gov.uk/patterns/confirmation-pages/), which tell the user they’ve successfully completed the transaction
- [Interruption pages](https://design-system.service.gov.uk/patterns/interruption-pages/), which pause the user journey to give important information

## When not to use this component

Never use the Panel component to highlight any other information.

## How it works

There are 2 ways to use the panel component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

### Confirmation panel

The confirmation panel is part of a [Confirmation page](https://design-system.service.gov.uk/patterns/confirmation-pages/) and tells the user the outcome of their journey as a heading. You might also give more detailed information as description text.

**示例：default (second)**

```njk
{% from "govuk/components/panel/macro.njk" import govukPanel %}

{% call govukPanel({
  titleText: "Application complete"
}) %}
  Your reference number<br>
  <strong>HDJ2123F</strong>
{% endcall %}
```

### How to write confirmation panel text

Keep your panel text brief, as it's only meant for a high-level explanation of what has happened.

Aim to use short words and phrases to make sure highlighted information is easy to read at different screen sizes. For example, shorter amounts of information are less likely to wrap around the panel, which can happen when using the zoom function on mobiles.

## Interruption panel

The interruption panel is part of an [Interruption page](https://design-system.service.gov.uk/patterns/interruption-pages/) and shows the user important information that they’d miss if shown any other way.

Within the panel is a button that the user must interact with to resume their journey.

The information itself is usually shown as heading with some description text, possibly with bullet points and numbered steps.

**示例：interruption**

```njk
{% from "govuk/components/panel/macro.njk" import govukPanel %}
{% from "govuk/components/button/macro.njk" import govukButton %}

{% call govukPanel({
  classes: "govuk-panel--interruption",
  titleText: "Is your age correct?",
  actions: {
    items: [
      {
        text: "Yes, this is correct",
        href: "#",
        type: "button"
      }, {
        text: "No, change my age",
        href: "#"
      }
    ]
  }
}) %}
  <p class="govuk-body">You entered your age as <strong>109</strong>.</p>
{% endcall %}
```
