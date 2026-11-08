---
title: "GOV.UK · Component · Phase banner 阶段横幅"
source: https://design-system.service.gov.uk/components/phase-banner/
section: components
tag: "规范"
fetched: 2026-11-01
status: full
id: components-34
publisher: "GOV.UK Design System"
---

# GOV.UK · Component · Phase banner 阶段横幅

> 来源：[https://design-system.service.gov.uk/components/phase-banner/](https://design-system.service.gov.uk/components/phase-banner/)

> 版权：Crown copyright，按 [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/) 发布；本站代码 MIT 许可。本篇为 GOV.UK Design System 同源全文，引用时请署名 GOV.UK Design System。

---

Use the phase banner component to show users your service is still being worked on.

**示例：default**

```njk
{% from "govuk/components/phase-banner/macro.njk" import govukPhaseBanner %}

{{ govukPhaseBanner({
  tag: {
    text: "Alpha"
  },
  text: "This is a new service. We're still working on ways to improve it."
}) }}
```

## When to use this component

Services hosted on a service.gov.uk domain must use the phase banner until they pass a live assessment.

## How it works

There are 2 ways to use the phase banner component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

Use an alpha banner when your service is in alpha, and a beta banner if your service is in private or public beta.

Show the Phase banner inside the `<header>` element, directly after either:

- the [Service navigation component](https://design-system.service.gov.uk/components/service-navigation/)
- the [GOV.UK header component](https://design-system.service.gov.uk/components/header/) (if your service does not use the Service navigation component)

If you use Nunjucks, use the `headerEnd` block to place the Phase banner on your page.

See ['Add extra content at the start or end of the `<header>` element' in 'Page template: Blocks and options'](https://design-system.service.gov.uk/styles/page-template/#add-extra-content-at-the-start-or-end-of-the-header-element).

Phase banners are shown across all pages of a service, so users should understand it as a service-level message.

You can choose to place the Phase banner in a more appropriate place for your service, however you’ll need to customise the component and provide your own CSS code to make it show correctly.

### Collect feedback from users

Use the [Feedback component](https://design-system.service.gov.uk/components/feedback/) to ask users to give feedback about your service and provide them with a link to a feedback page.

[Find out what feedback you need to collect at each phase](https://www.gov.uk/service-manual/measuring-success/measuring-user-satisfaction#user-satisfaction-through-each-service-phase) in the GOV.UK Service Manual.
