---
title: "GOV.UK · Component · Breadcrumbs 面包屑导航"
source: https://design-system.service.gov.uk/components/breadcrumbs/
section: components
tag: "规范"
fetched: 2026-11-01
status: full
id: components-13
publisher: "GOV.UK Design System"
---

# GOV.UK · Component · Breadcrumbs 面包屑导航

> 来源：[https://design-system.service.gov.uk/components/breadcrumbs/](https://design-system.service.gov.uk/components/breadcrumbs/)

> 版权：Crown copyright，按 [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/) 发布；本站代码 MIT 许可。本篇为 GOV.UK Design System 同源全文，引用时请署名 GOV.UK Design System。

---

The breadcrumbs component helps users to understand where they are within a website’s structure and move between levels.

**示例：default**

```njk
{% from "govuk/components/breadcrumbs/macro.njk" import govukBreadcrumbs %}

{{ govukBreadcrumbs({
  items: [
    {
      text: "Home",
      href: "#"
    },
    {
      text: "Passports, travel and living abroad",
      href: "#"
    },
    {
      text: "Travel abroad",
      href: "#"
    }
  ]
}) }}
```

## When to use this component

Use the breadcrumbs component when you need to help users understand and move between the multiple levels of a website.

## When not to use this component

Do not use the breadcrumbs component on websites with a flat structure, or to show progress through a linear journey or transaction.

If you’re using other navigational elements on the page, such as a sidebar, consider whether your users need the additional support of breadcrumbs.

## How it works

Always place breadcrumbs at the top of a page, before the `<main>` element. Placing them here means that the 'Skip to main content' link allows the user to skip all navigation links, including breadcrumbs.

The breadcrumbs should start with your 'home' page and end with the parent section of the current page.

There are 2 ways to use the breadcrumbs component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

**示例：default (second)**

```njk
{% from "govuk/components/breadcrumbs/macro.njk" import govukBreadcrumbs %}

{{ govukBreadcrumbs({
  items: [
    {
      text: "Home",
      href: "#"
    },
    {
      text: "Passports, travel and living abroad",
      href: "#"
    },
    {
      text: "Travel abroad",
      href: "#"
    }
  ]
}) }}
```

### Collapsing breadcrumbs on mobile devices

If you have long breadcrumbs you can configure the component to only show the first and last items on mobile devices.

To do this, add a `govuk-breadcrumbs--collapse-on-mobile` class to the outer `<div>` element of the component HTML. Or if you’re using Nunjucks, add `collapseOnMobile: true` to the Nunjucks macro as shown in this example.

**示例：collapse-mobile**

```njk
{% from "govuk/components/breadcrumbs/macro.njk" import govukBreadcrumbs %}

{{ govukBreadcrumbs({
  collapseOnMobile: true,
  items: [
    {
      text: "Home",
      href: "#"
    },
    {
      text: "Environment",
      href: "#"
    },
    {
      text: "Rural and countryside",
      href: "#"
    },
    {
      text: "Rural development and land management",
      href: "#"
    },
    {
      text: "Economic growth in rural areas",
      href: "#"
    }
  ]
}) }}
```

### Breadcrumbs on dark backgrounds

Use the `govuk-breadcrumbs--inverse` modifier class to show white links and arrows on dark backgrounds – for example, in headers, custom components, and patterns with darker backgrounds.

Make sure all users can see the breadcrumbs – the background colour must have a contrast ratio of at least 4.5:1 with white to [meet WCAG 2.2 success criterion 1.4.3 Contrast (minimum), level AA](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

**示例：inverse**

```njk
{% from "govuk/components/breadcrumbs/macro.njk" import govukBreadcrumbs %}

{{ govukBreadcrumbs({
  classes: "govuk-breadcrumbs--inverse",
  items: [
    {
      text: "Home",
      href: "#"
    },
    {
      text: "Passports, travel and living abroad",
      href: "#"
    },
    {
      text: "Travel abroad",
      href: "#"
    }
  ]
}) }}
```
