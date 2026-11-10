---
title: "GOV.UK · Component · Details 详情折叠"
source: https://design-system.service.gov.uk/components/details/
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-19
publisher: "GOV.UK Design System"
---

# GOV.UK · Component · Details 详情折叠

> 来源：[https://design-system.service.gov.uk/components/details/](https://design-system.service.gov.uk/components/details/)

---

Make a page easier to scan by letting users reveal more detailed information only if they need it.

*   [HTML](https://design-system.service.gov.uk/components/details/#details-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/details/#details-example-nunjucks)

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

There are 2 ways to use the details component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk/), you can use the Nunjucks macro.

*   [HTML](https://design-system.service.gov.uk/components/details/#details-second-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/details/#details-second-example-nunjucks)

### Write clear link text

Make the link text short and descriptive so users can quickly work out if they need to click on it.

## Research on this component

There is [evidence that some users avoid clicking the link to show more details](https://github.com/alphagov/govuk-design-system/discussions/6095#discussioncomment-18812380), as they think it will take them away from the page.

There are [concerns that some users of voice assist software will not be able to interact with the component](https://github.com/alphagov/govuk-design-system/discussions/6095#discussioncomment-18812377). Some software might require the user to specifically refer to the link to show more details as a button in order to interact with it.

## Recent changes

| Date | Changed | Description |
| --- | --- | --- |
| Oct 2024 | [GOV.UK Frontend v5.7.0](https://github.com/alphagov/govuk-frontend/releases/tag/v5.7.0) | Fixed incorrect bottom margin when component is collapsed. Fixed expanded state not being announced on iOS. |
| Dec 2023 | [GOV.UK Frontend v5.0.0](https://github.com/alphagov/govuk-frontend/releases/tag/v5.0.0) | Removed JavaScript polyfill for older browsers. |
| Aug 2022 | [GOV.UK Frontend v4.3.0](https://github.com/alphagov/govuk-frontend/releases/tag/v4.3.0) | Added the ability to pass the `html` parameter using [Nunjucks call syntax](https://mozilla.github.io/nunjucks/templating.html#call). Removed redundant `aria-hidden` attribute. |
| Sept 2021 | [GOV.UK Frontend v3.13.1](https://github.com/alphagov/govuk-frontend/releases/tag/v3.13.1) | Removed unnecessary right-side padding. |
| Feb 2021 | Guidance | Added research section to component guidance. |
