---
title: "GOV.UK · Component · Inset text 插入文字块"
source: https://design-system.service.gov.uk/components/inset-text/
section: components
tag: "规范"
fetched: 2026-11-01
status: full
id: components-28
publisher: "GOV.UK Design System"
---

# GOV.UK · Component · Inset text 插入文字块

> 来源：[https://design-system.service.gov.uk/components/inset-text/](https://design-system.service.gov.uk/components/inset-text/)

> 版权：Crown copyright，按 [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/) 发布；本站代码 MIT 许可。本篇为 GOV.UK Design System 同源全文，引用时请署名 GOV.UK Design System。

---

**示例：default**

```njk
{% from "govuk/components/inset-text/macro.njk" import govukInsetText %}

{% call govukInsetText() %}
  It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.
{% endcall %}
```

## When to use this component

Use the inset text component to differentiate a block of text from the content that surrounds it, for example:

- quotes
- examples
- additional information about the page

## When not to use this component

Some users do not notice inset text if it’s used on complex pages or near to other visually prominent elements. For this reason, avoid using inset text as a way of highlighting very important information that users need to see.

If you need to draw attention to very important content, like legal information, use the [Warning text component](https://design-system.service.gov.uk/components/warning-text/) instead.

## How it works

Use inset text very sparingly - it’s less effective if it’s overused.

There are 2 ways to use the inset text component. You can use HTML or, if you’re using Nunjucks or the GOV.UK Prototype Kit, you can use the Nunjucks macro.

**示例：default (second)**

```njk
{% from "govuk/components/inset-text/macro.njk" import govukInsetText %}

{% call govukInsetText() %}
  It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.
{% endcall %}
```
