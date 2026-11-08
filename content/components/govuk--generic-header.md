---
title: "GOV.UK · Component · Generic header 通用页头"
source: https://design-system.service.gov.uk/components/generic-header/
section: components
tag: "规范"
fetched: 2026-11-01
status: full
id: components-47
publisher: "GOV.UK Design System"
---

# GOV.UK · Component · Generic header 通用页头

> 来源：[https://design-system.service.gov.uk/components/generic-header/](https://design-system.service.gov.uk/components/generic-header/)

> 版权：Crown copyright，按 [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/) 发布；本站代码 MIT 许可。本篇为 GOV.UK Design System 同源全文，引用时请署名 GOV.UK Design System。

---

Use this generic version of the header to tell users they’re using a government service that’s not part of the GOV.UK website.

**示例：default**

```njk
{% from "govuk/components/generic-header/macro.njk" import govukGenericHeader %}

{% set logoContent %}
<svg width="28" height="30" viewBox="0 0 28 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <circle cx="13.5549" cy="4.21349" r="4.21349"/>
  <circle cx="13.5549" cy="25.7865" r="4.21349"/>
  <circle cx="22.8963" cy="9.6068" r="4.21349"/>
  <circle cx="4.2135" cy="20.3932" r="4.21349"/>
  <circle cx="22.8963" cy="20.3932" r="4.21349"/>
  <circle cx="4.21351" cy="9.60674" r="4.21349"/>
</svg> Service name
{% endset %}

{{ govukGenericHeader({
  url: "#",
  logoHtml: logoContent
}) }}
```

## When to use this component

Use the Generic header component if your service is both:

- a public-facing government service
- not on the GOV.UK website (meaning that your service is not part of the [GOV.UK proposition](https://www.gov.uk/government/publications/govuk-proposition/govuk-proposition))

This is to bring consistency and maintain user trust in journeys that move between the GOV.UK website and other government websites and services.

This component also helps ensure your non-GOV.UK service does not:

- identify itself as being part of GOV.UK
- use the crown or GOV.UK logotype in the header
- use the GDS Transport typeface
- use the [GOV.UK brand colours](https://brand.design-system.service.gov.uk/colour/govuk-blue/)

See the guidance on [if your service is not on GOV.UK in the Service manual](https://www.gov.uk/service-manual/design/making-your-service-look-like-govuk).

## When not to use this component

If your service is hosted on one of these gov.uk domains, you must use the [GOV.UK header component](https://design-system.service.gov.uk/components/header/) instead:

- gov.uk/[myservice]
- [myservice].service.gov.uk
- [myblog].blog.gov.uk

## How it works

If you use the [page template](https://design-system.service.gov.uk/styles/page-template/), you’ll first need to replace the default GOV.UK header in the page template with the Generic header component.

Use the Generic header component to display your own:

- brand logo
- homepage link
- font for your service name (instead of GDS Transport)

You must also follow the steps in the [Using GOV.UK Frontend without GOV.UK branding guidance](https://frontend.design-system.service.gov.uk/using-govuk-frontend-without-govuk-branding/) to remove other GOV.UK brand elements elsewhere in your service.

### Using your own brand logo

Follow your organisation’s guidelines and best practice to show your brand logo.

To make your logo image as accessible and optimised as possible, also see:

- Design System guidance on [using images](https://design-system.service.gov.uk/styles/images/)
- [Image guidance for GOV.UK content and publishers](https://guidance.publishing.service.gov.uk/formatting-content/images/)

### Homepage link

By default, the homepage link points to `/`, which is the top level of your service’s domain. You should customise the link to point to wherever makes the most sense for your service.

### Do not show navigation links in the Generic header component

As with the GOV.UK header component, you should not use the Generic header component to show navigation links. Use the [Service navigation component](https://design-system.service.gov.uk/components/service-navigation) instead to let users navigate to different parts of your service and find useful links and tools.

## Research on this component

When developing this component, we worked with a cross-government working group representing various government departments that work on services not hosted on GOV.UK.

We thank them for their work to gather the needs and considerations for consistent headers across all government services.
