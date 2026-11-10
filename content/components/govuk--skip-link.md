---
title: "GOV.UK · Component · Skip link 跳转链接"
source: https://design-system.service.gov.uk/components/skip-link/
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-38
publisher: "GOV.UK Design System"
---

# GOV.UK · Component · Skip link 跳转链接

> 来源：[https://design-system.service.gov.uk/components/skip-link/](https://design-system.service.gov.uk/components/skip-link/)

---

Use the skip link component to help keyboard-only users skip to the main content on a page.

*   [HTML](https://design-system.service.gov.uk/components/skip-link/#skip-link-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/skip-link/#skip-link-example-nunjucks)

If you use the page template, you’ll also get the skip link without having to add it, as it’s included by default. However, if you want to customise the default skip link, read the [page template guidance about customising components](https://design-system.service.gov.uk/styles/page-template/#changing-template-content).

## When to use this component

All GOV.UK pages must include a skip link. Usually, you should place the skip link immediately after the opening `<body>` tag. However, if you’re using a [Cookie banner component](https://design-system.service.gov.uk/components/cookie-banner/), place the skip link immediately after the cookie banner.

Some automated accessibility testing tools may warn that the skip link element is not inside a landmark. This warning does not apply to skip links, so you can ignore it. Do not wrap the skip link in a `<nav>` region, or move it inside the header.

## How it works

Some people use the tab key on their keyboard to navigate through the links and form elements on a web page.

Including the skip link component gives users the option to bypass the top-level navigation links and jump to the main content on a page.

The skip link component is visually hidden until a keyboard press activates it.

There are 2 ways to use the skip link component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk/), you can use the Nunjucks macro.

*   [HTML](https://design-system.service.gov.uk/components/skip-link/#skip-link-second-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/skip-link/#skip-link-second-example-nunjucks)

## Research on this component

### Persisting skip anchors in URLs

When a user uses the skip link and then a button, any pages that load afterwards might automatically skip to main content in a way that they might not expect.

Usually, predictable and consistent behaviour is better for users. However, we’ve received mixed feedback on whether this unexpected behaviour is useful or confusing for users, particularly amongst users of assistive technology such as screen readers and keyboard-only navigation.

If you’ve done any user research with users who use the skip link, tell us what you’ve learned. You can see the discussion and [add a comment to the related GitHub issue](https://github.com/alphagov/govuk-frontend/issues/4465).

## Recent changes

| Date | Changed | Description |
| --- | --- | --- |
| Jan 2026 | [GOV.UK Frontend v5.14.0](https://github.com/alphagov/govuk-frontend/releases/tag/v5.14.0) | Fixed focus style appearing cut off in forced colours mode. |
| Apr 2024 | [GOV.UK Frontend v5.3.1](https://github.com/alphagov/govuk-frontend/releases/tag/v5.3.1) | Fixed regression that reintroduced the bug previously fixed in 3.5.0. |
| Apr 2022 | Guidance | Added guidance about where to place the skip link on a page. Added note that accessibility auditing tools may incorrectly flag the skip link as not being within a page landmark. Bypass links do not need to be within a landmark. |
| Dec 2021 | [GOV.UK Frontend v4.0.0](https://github.com/alphagov/govuk-frontend/releases/tag/v4.0.0) | Added JavaScript that moves focus to the skip link’s target to improve the consistency of screen reader behaviour. |
| Jan 2020 | [GOV.UK Frontend v3.5.0](https://github.com/alphagov/govuk-frontend/releases/tag/v3.5.0) | Fixed focus style lacking an underline when the [`$govuk-global-styles` option](https://frontend.design-system.service.gov.uk/v4/sass-api-reference/#global-styles) is enabled. |
