---
title: "GOV.UK · Component · Warning text 警告文字"
source: https://design-system.service.gov.uk/components/warning-text/
section: components
tag: "规范"
fetched: 2026-11-01
status: full
id: components-46
publisher: "GOV.UK Design System"
---

# GOV.UK · Component · Warning text 警告文字

> 来源：[https://design-system.service.gov.uk/components/warning-text/](https://design-system.service.gov.uk/components/warning-text/)

> 版权：Crown copyright，按 [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/) 发布；本站代码 MIT 许可。本篇为 GOV.UK Design System 同源全文，引用时请署名 GOV.UK Design System。

---

**示例：default**

```njk
{% from "govuk/components/warning-text/macro.njk" import govukWarningText %}

{{ govukWarningText({
  text: "You can be fined up to £5,000 if you do not register.",
  iconFallbackText: "Warning"
}) }}
```

## When to use this component

Use the warning text component when you need to warn users about something important, such as legal consequences of an action, or lack of action, that they might take.

## How it works

There are 2 ways to use the warning text component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

**示例：default (second)**

```njk
{% from "govuk/components/warning-text/macro.njk" import govukWarningText %}

{{ govukWarningText({
  text: "You can be fined up to £5,000 if you do not register.",
  iconFallbackText: "Warning"
}) }}
```

You might need to rewrite the hidden text (‘Warning’ in the example) to make it appropriate for your context.
