---
title: "GOV.UK · Component · Back link 返回链接"
source: https://design-system.service.gov.uk/components/back-link/
section: components
tag: "规范"
fetched: 2026-11-01
status: full
id: components-12
publisher: "GOV.UK Design System"
---

# GOV.UK · Component · Back link 返回链接

> 来源：[https://design-system.service.gov.uk/components/back-link/](https://design-system.service.gov.uk/components/back-link/)

> 版权：Crown copyright，按 [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/) 发布；本站代码 MIT 许可。本篇为 GOV.UK Design System 同源全文，引用时请署名 GOV.UK Design System。

---

Use the back link component to help users go back to the previous page in a multi-page transaction.

Although browsers have a back button, some sites break when you use it - so many users avoid it, instead of losing their progress in a service. Also, not all users are aware of the back button.

**示例：default**

```njk
{% from "govuk/components/back-link/macro.njk" import govukBackLink %}

{{ govukBackLink({
  text: "Back",
  href: "#"
}) }}
```

## When to use this component

Always include the Back link component on GOV.UK [Question pages in your service](https://design-system.service.gov.uk/patterns/question-pages/).

You can include a back link on other pages within a multi-page transaction, if it makes sense to do so.

## When not to use this component

Never use the back link component together with the [Breadcrumbs component](https://design-system.service.gov.uk/components/breadcrumbs/). If necessary, you should do research with your users to learn which they find more helpful in your service.

## How it works

Always place back links at the top of a page, before the `<main>` element. Placing them here means that the 'Skip to main content' link allows the user to skip all navigation links, including the back link.

Make sure the link takes users to the previous page they were on, in the state they last saw it.

Where possible, ensure the back link works even when JavaScript is not available. If this is not possible, you should hide the back link when JavaScript is not available.

There are 2 ways to use the back link component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

**示例：default (second)**

```njk
{% from "govuk/components/back-link/macro.njk" import govukBackLink %}

{{ govukBackLink({
  text: "Back",
  href: "#"
}) }}
```

Using the default link text ('Back') is ideal for services with a simple journey. For example, [applying for a National Insurance number](https://www.gov.uk/apply-national-insurance-number). Users will only ever go back to the previous page in the service.

For more complex user journeys, consider using different link text, like 'Go back to [page]'. For example, in an admin system with many different areas. In this case, if you used 'Back', it might not be clear to users what they are going back to.

### Back links on dark backgrounds

Use the `govuk-back-link--inverse` modifier class to show a white link on a dark background – for example, in headers, custom components, and patterns with darker backgrounds.

Make sure all users can see the back link – the background colour must have a contrast ratio of at least 4.5:1 with white to meet [WCAG 2.2 success criterion 1.4.3 Contrast (minimum), level AA](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

**示例：inverse**

```njk
{% from "govuk/components/back-link/macro.njk" import govukBackLink %}

{{ govukBackLink({
  classes: "govuk-back-link--inverse",
  text: "Back",
  href: "#"
}) }}
```

## Research on this component

We're not aware of any user issues with this component. However, automated accessibility checkers might warn that the component is not within a landmark.

### Known issues and gaps

After reports from service teams, we confirmed that some accessibility checkers raise a warning that [the back link is outside of landmarks](https://github.com/alphagov/govuk-frontend/issues/1604).

However, in the case of the back link we've not seen this to be an issue for actual users. While having all content within landmarks is usually best practice, moving the back link into a landmark might create a worse experience in this case.

This issue does not affect WCAG compliance.

If your service has tested pages with back links with screen reader users and have any insight into how it was used, [share your findings with us](https://github.com/alphagov/govuk-design-system/discussions/6081). We're particularly interested in understanding how easily the component can be found inside and outside of landmarks.
