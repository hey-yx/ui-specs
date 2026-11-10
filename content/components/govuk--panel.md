---
title: "GOV.UK · Component · Panel 面板"
source: https://design-system.service.gov.uk/components/panel/
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-32
publisher: "GOV.UK Design System"
---

# GOV.UK · Component · Panel 面板

> 来源：[https://design-system.service.gov.uk/components/panel/](https://design-system.service.gov.uk/components/panel/)

---

The Panel component is a visible container used to highlight important content.

*   [HTML](https://design-system.service.gov.uk/components/panel/#panel-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/panel/#panel-example-nunjucks)

## When to use this component

Use the Panel component to display important information within:

*   [Confirmation pages](https://design-system.service.gov.uk/patterns/confirmation-pages/), which tell the user they’ve successfully completed the transaction
*   [Interruption pages](https://design-system.service.gov.uk/patterns/interruption-pages/), which pause the user journey to give important information

## When not to use this component

Never use the Panel component to highlight any other information.

## How it works

There are 2 ways to use the panel component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk/), you can use the Nunjucks macro.

### Confirmation panel

The confirmation panel is part of a [Confirmation page](https://design-system.service.gov.uk/patterns/confirmation-pages/) and tells the user the outcome of their journey as a heading. You might also give more detailed information as description text.

*   [HTML](https://design-system.service.gov.uk/components/panel/#panel-second-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/panel/#panel-second-example-nunjucks)

### How to write confirmation panel text

Keep your panel text brief, as it’s only meant for a high-level explanation of what has happened.

Aim to use short words and phrases to make sure highlighted information is easy to read at different screen sizes. For example, shorter amounts of information are less likely to wrap around the panel, which can happen when using the zoom function on mobiles.

## Interruption panel

The interruption panel is part of an [Interruption page](https://design-system.service.gov.uk/patterns/interruption-pages/) and shows the user important information that they’d miss if shown any other way.

Within the panel is a button that the user must interact with to resume their journey.

The information itself is usually shown as heading with some description text, possibly with bullet points and numbered steps.

*   [HTML](https://design-system.service.gov.uk/components/panel/#interruption-panel-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/panel/#interruption-panel-example-nunjucks)

## Recent changes

| Date | Changed | Description |
| --- | --- | --- |
| Jul 2026 | [GOV.UK Frontend v6.4.0](https://github.com/alphagov/govuk-frontend/releases/tag/v6.4.0) | Added interruption panel variant to pause the user’s journey and give important information. |
| Sept 2023 | Guidance | Updated guidance to advise keeping panel text brief. |
| Aug 2022 | [GOV.UK Frontend v4.3.0](https://github.com/alphagov/govuk-frontend/releases/tag/v4.3.0) | Added the ability to pass the `html` parameter using [Nunjucks call syntax](https://mozilla.github.io/nunjucks/templating.html#call). |
| Oct 2021 | Guidance | Added instructions on how to write heading text for panels. |
| Oct 2021 | [GOV.UK Frontend v3.14.0](https://github.com/alphagov/govuk-frontend/releases/tag/v3.14.0) | Fixed body text overflowing the container when zoomed in on mobile. |
