---
title: "GOV.UK · Component · Breadcrumbs 面包屑导航"
source: https://design-system.service.gov.uk/components/breadcrumbs/
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-13
publisher: "GOV.UK Design System"
---

# GOV.UK · Component · Breadcrumbs 面包屑导航

> 来源：[https://design-system.service.gov.uk/components/breadcrumbs/](https://design-system.service.gov.uk/components/breadcrumbs/)

---

The breadcrumbs component helps users to understand where they are within a website’s structure and move between levels.

## When to use this component

Use the breadcrumbs component when you need to help users understand and move between the multiple levels of a website.

## When not to use this component

Do not use the breadcrumbs component on websites with a flat structure, or to show progress through a linear journey or transaction.

If you’re using other navigational elements on the page, such as a sidebar, consider whether your users need the additional support of breadcrumbs.

## How it works

Always place breadcrumbs at the top of a page, before the `<main>` element. Placing them here means that the ‘Skip to main content’ link allows the user to skip all navigation links, including breadcrumbs.

The breadcrumbs should start with your ‘home’ page and end with the parent section of the current page.

There are 2 ways to use the breadcrumbs component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk/), you can use the Nunjucks macro.

If you have long breadcrumbs you can configure the component to only show the first and last items on mobile devices.

To do this, add a `govuk-breadcrumbs--collapse-on-mobile` class to the outer `<div>` element of the component HTML. Or if you’re using Nunjucks, add `collapseOnMobile: true` to the Nunjucks macro as shown in this example.

Use the `govuk-breadcrumbs--inverse` modifier class to show white links and arrows on dark backgrounds – for example, in headers, custom components, and patterns with darker backgrounds.

Make sure all users can see the breadcrumbs – the background colour must have a contrast ratio of at least 4.5:1 with white to [meet WCAG 2.2 success criterion 1.4.3 Contrast (minimum), level AA](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

## Recent changes

| Date | Changed | Description |
| --- | --- | --- |
| Jul 2024 | [GOV.UK Frontend v5.4.1](https://github.com/alphagov/govuk-frontend/releases/tag/v5.4.1) | Updated component to use the `nav` HTML element with an `aria-label`, to better describe the component to assistive technologies. |
| Jul 2023 | [GOV.UK Frontend v4.7.0](https://github.com/alphagov/govuk-frontend/releases/tag/v4.7.0) | Added inverse appearance modifier. |
| Jan 2023 | [GOV.UK Frontend v4.5.0](https://github.com/alphagov/govuk-frontend/releases/tag/v4.5.0) | Fixed chevrons not scaling with text size. |
| Dec 2021 | Guidance | Added guidance on where to place the Breadcrumbs component on a page. |
| Jun 2020 | [GOV.UK Frontend v3.7.0](https://github.com/alphagov/govuk-frontend/releases/tag/v3.7.0) | Added `collapseOnMobile` parameter. Removed guidance that advised including the current page’s name in the Breadcrumbs. |
