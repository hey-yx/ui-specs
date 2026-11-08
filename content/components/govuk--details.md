---
title: "GOV.UK · Component · Details 详情折叠"
source: https://design-system.service.gov.uk/components/details/
section: components
tag: "规范"
fetched: 2026-11-01
status: full
id: components-19
publisher: "GOV.UK Design System"
---

# GOV.UK · Component · Details 详情折叠

> 来源：[https://design-system.service.gov.uk/components/details/](https://design-system.service.gov.uk/components/details/)

> 版权：Crown copyright，按 [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/) 发布；本站代码 MIT 许可。本篇为 GOV.UK Design System 同源全文，引用时请署名 GOV.UK Design System。

---

Make a page easier to scan by letting users reveal more detailed information only if they need it.

**示例：default**

```njk
{% from "govuk/components/details/macro.njk" import govukDetails %}

{% call govukDetails({
  summaryText: "Help with nationality"
}) %}
  We need to know your nationality so we can work out which elections you’re entitled to vote in.
  If you cannot provide your nationality, you’ll have to send copies of identity documents through the post.
{% endcall %}
```

## When to use this component

Use the details component to make a page easier to scan when it contains information that only some users will need.

## When not to use this component

Do not use the details component to hide information that the majority of your users will need.

## Decide between using details, accordions and tabs

The Details component, [Accordion component](https://design-system.service.gov.uk/components/accordion/), and [Tabs component](https://design-system.service.gov.uk/components/tabs/) all hide sections of content which a user can choose to reveal.

Use the details component instead of tabs or an accordion if you only have 1 section of content.

The details component is less visually prominent than tabs and accordions, so tends to work better for content which is not as important to users.

## How it works

The details component is a short link that shows more detailed help text when a user clicks on it.

There are 2 ways to use the details component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

**示例：default (second)**

```njk
{% from "govuk/components/details/macro.njk" import govukDetails %}

{% call govukDetails({
  summaryText: "Help with nationality"
}) %}
  We need to know your nationality so we can work out which elections you’re entitled to vote in.
  If you cannot provide your nationality, you’ll have to send copies of identity documents through the post.
{% endcall %}
```

### Write clear link text

Make the link text short and descriptive so users can quickly work out if they need to click on it.

## Research on this component

There is [evidence that some users avoid clicking the link to show more details](https://github.com/alphagov/govuk-design-system/discussions/6095#discussioncomment-18812380), as they think it will take them away from the page.

There are [concerns that some users of voice assist software will not be able to interact with the component](https://github.com/alphagov/govuk-design-system/discussions/6095#discussioncomment-18812377). Some software might require the user to specifically refer to the link to show more details as a button in order to interact with it.
