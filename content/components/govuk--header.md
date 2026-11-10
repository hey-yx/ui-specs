---
title: "GOV.UK · Component · GOV.UK header 页头"
source: https://design-system.service.gov.uk/components/header/
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-27
publisher: "GOV.UK Design System"
---

# GOV.UK · Component · GOV.UK header 页头

> 来源：[https://design-system.service.gov.uk/components/header/](https://design-system.service.gov.uk/components/header/)

---

The GOV.UK header component tells users they’re using a service on GOV.UK and lets them use GOV.UK-wide tools. Also known as the GOV.UK masthead.

*   [HTML](https://design-system.service.gov.uk/components/header/#default-1-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/header/#default-1-nunjucks)

If you use the page template, you’ll also get the GOV.UK header without having to add it, as it’s included by default. However, if you want to customise the default GOV.UK header, read the [page template guidance about customising components](https://design-system.service.gov.uk/styles/page-template/#changing-template-content).

## When to use this component

If your service is being hosted on one of these domains, use the GOV.UK header component:

*   gov.uk/[myservice]
*   [myservice].service.gov.uk
*   [myblog].blog.gov.uk

You must use the GOV.UK header component at the top of every page. This is to maintain user trust as they move around the GOV.UK website and other government websites and services.

The Service Manual explains why it’s important for you to [make your service look like GOV.UK](https://www.gov.uk/service-manual/design/making-your-service-look-like-govuk).

## When not to use this component

If your service is not hosted on one of the gov.uk domains outlined, you must not use the GOV.UK header component as it’s not considered part of GOV.UK.

Use the [Generic header component](https://design-system.service.gov.uk/components/generic-header/) instead to show your own organisation’s branding.

## How it works

Together, the GOV.UK header and [Service navigation component](https://design-system.service.gov.uk/components/service-navigation/) both ensure users get a consistent experience on GOV.UK.

This also assures users that they’re in the right place to use your service and to understand that GOV.UK functions as one website.

For guidance on how to plan your header and navigation, see the [Help users navigate a service pattern](https://design-system.service.gov.uk/patterns/navigate-a-service).

Most services on GOV.UK should use the default GOV.UK header.

It should only show the GOV.UK logo and any GOV.UK-wide links and tools to help your users. [Do not add the menu of GOV.UK topic links](https://insidegovuk.blog.gov.uk/2021/11/11/launching-gov-uks-new-menu-bar/) to your service’s GOV.UK header.

You can no longer use the GOV.UK header to show service name or navigation links. Use the [Service navigation component](https://design-system.service.gov.uk/components/service-navigation) instead.

The [Help users navigate a service pattern](https://design-system.service.gov.uk/patterns/navigate-a-service) shows how the GOV.UK header and Service navigation components work together to help users know they’re using your service and navigate around it.

GOV.UK One Login maintains their own header on the [Let users navigate to their GOV.UK One Login and sign out easily](https://www.sign-in.service.gov.uk/documentation/design-recommendations/let-users-navigate-sign-out) page.

## Brand refresh of the GOV.UK header component

In June 2025, we updated this component to support a wider refresh of the GOV.UK brand.

You should now use the refreshed GOV.UK branding. If your service has updated to GOV.UK Frontend v6.0.0 or later, you no longer need to use the `govukRebrand` feature flag and should remove it.

With these changes, the GOV.UK header and GOV.UK footer components should now only be used by [services on the GOV.UK website](https://www.gov.uk/service-manual/design/making-your-service-look-like-govuk). Services outside of [the GOV.UK proposition](https://www.gov.uk/government/publications/govuk-proposition) should stop using the header and footer components and instead create their own.

## Research on this component

See the [research section in the Help users navigate a service pattern](https://design-system.service.gov.uk/patterns/navigate-a-service/#research-on-this-pattern) for a summary of our research on the GOV.UK header and navigation, and how you can share your feedback with us.

## Recent changes

| Date | Changed | Description |
| --- | --- | --- |
| Jun 2026 | Guidance | Added guidance to use the [Generic header](https://design-system.service.gov.uk/components/generic-header/) component if your service is not part of GOV.UK. |
| Jun 2026 | [GOV.UK Frontend v6.2.0](https://github.com/alphagov/govuk-frontend/releases/tag/v6.2.0) | Fixed logo link hover state in Safari browsers. |
| Feb 2026 | [GOV.UK Frontend v6.0.0](https://github.com/alphagov/govuk-frontend/releases/tag/v6.0.0) | Removed `rebrand` parameter to no longer allow use of the previous GOV.UK logo and colour palette. Changed containing HTML element from `header` to `div`. Changed naming of the GOV.UK logo link class. Removed parameters for setting service name and navigation. Removed `useTudorCrown` parameter so that only the Tudor crown logo can be used. |
| Feb 2026 | Guidance | Updated guidance on service name and navigation to recommend using [Service navigation](https://design-system.service.gov.uk/components/service-navigation/) to show these in your service. |
| Jan 2026 | [GOV.UK Frontend v5.14.0](https://github.com/alphagov/govuk-frontend/releases/tag/v5.14.0) | Fixed GOV.UK branded blue background being visible when printed. |
