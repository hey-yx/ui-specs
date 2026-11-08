---
title: "GOV.UK · Component · Feedback 反馈"
source: https://design-system.service.gov.uk/components/feedback/
section: components
tag: "规范"
fetched: 2026-11-01
status: full
id: components-23
publisher: "GOV.UK Design System"
---

# GOV.UK · Component · Feedback 反馈

> 来源：[https://design-system.service.gov.uk/components/feedback/](https://design-system.service.gov.uk/components/feedback/)

> 版权：Crown copyright，按 [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/) 发布；本站代码 MIT 许可。本篇为 GOV.UK Design System 同源全文，引用时请署名 GOV.UK Design System。

---

Ask users to give feedback about their experience using your service.

**示例：default**

```njk
{% from "govuk/components/feedback/macro.njk" import govukFeedback %}

{% call govukFeedback({
  titleText: "Help us improve this service"
}) %}
  <p class="govuk-body">
    Tell us about your experience using this service. <a href="#" class="govuk-link">Give us your feedback</a>
  </p>
{% endcall %}
```

## When to use this component

Use the Feedback component to give users the opportunity to give feedback at any point in their journey. This helps you gather a wide range of feedback to understand how well your service performs and improvements you can make.

## How it works

Show the Feedback component on as many pages of your service as you can.

The component is designed to allow users to give feedback at any time without distracting them.

### Ask for feedback at the end of each page

Place the Feedback component just before the GOV.UK footer component.

If your service is using Nunjucks, you can use the [GOV.UK Frontend page template](https://design-system.service.gov.uk/styles/page-template/) to add the Feedback component by placing it in the `footerStart` template block.

### Asking users for feedback

The heading and message in the Feedback component should tell users:

- why you want feedback
- what you'll do with their feedback

Also try to give users some idea about:

- how long it'll take to give feedback
- the difference between giving feedback and asking for support

You must include a link to a feedback page, which could be either:

- [a GOV.UK feedback page](https://www.gov.uk/service-manual/service-assessments/get-feedback-page)
- a feedback page page of your own, if you need to ask specific questions

## Research on this component

During design exploration for this component, desk research suggested that services struggled to get enough feedback from users using a previous version of this component.

This version separates the feedback link from the [Phase banner component](https://design-system.service.gov.uk/components/phase-banner/).

We've released this Feedback component in trial status as we want to understand whether:

- moving the feedback link from the phase banner increases the amount of feedback services receive
- placing the feedback link its own dedicated location helps users know where to provide feedback when they need to, by overcoming potential 'banner blindness' of the phase banner.

Until we have enough evidence that these needs are being met, the component will remain in trial.

We thank the service teams across government who worked with us in the early stages of this component to measure its effectiveness.

We’d also like to thank the GOV.UK Forms team for helping us build this component.
