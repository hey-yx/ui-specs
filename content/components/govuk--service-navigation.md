---
title: "GOV.UK · Component · Service navigation 服务导航"
source: https://design-system.service.gov.uk/components/service-navigation/
section: components
tag: "规范"
fetched: 2026-11-01
status: full
id: components-37
publisher: "GOV.UK Design System"
---

# GOV.UK · Component · Service navigation 服务导航

> 来源：[https://design-system.service.gov.uk/components/service-navigation/](https://design-system.service.gov.uk/components/service-navigation/)

> 版权：Crown copyright，按 [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/) 发布；本站代码 MIT 许可。本篇为 GOV.UK Design System 同源全文，引用时请署名 GOV.UK Design System。

---

Service navigation helps users understand that they’re using your service and lets them navigate around your service.

**示例：default**

```njk
{% from "govuk/components/service-navigation/macro.njk" import govukServiceNavigation %}

{{ govukServiceNavigation({
  navigation: [
    {
      href: "#",
      text: "Navigation item 1"
    },
    {
      href: "#",
      text: "Navigation item 2",
      active: true
    },
    {
      href: "#",
      text: "Navigation item 3"
    }
  ]
}) }}
```

If you use the page template, you'll also get the Service navigation without having to add it, as it's included by default. However, if you want to customise the default Service navigation, read the [page template guidance about customising components](https://design-system.service.gov.uk/styles/page-template/#changing-template-content).

## When to use this component

Use the Service navigation to help users understand that they’re using your service.

To decide when to use navigation links in your service, see the [Help users to navigate a service pattern](https://design-system.service.gov.uk/patterns/navigate-a-service/).

## How it works

Together, the [GOV.UK header component](https://design-system.service.gov.uk/components/header/) and Service navigation component ensure users get a consistent experience on GOV.UK.

This also assures users that they’re in the right place to use your service and to understand that GOV.UK functions as one website.

For guidance on how to plan your header and navigation, see the [Help users navigate a service pattern](https://design-system.service.gov.uk/patterns/navigate-a-service/).

### Showing your service name only

Use the Service navigation component to show your service name.

**示例：with-service-name**

```njk
{% from "govuk/components/service-navigation/macro.njk" import govukServiceNavigation %}

{{ govukServiceNavigation({
  serviceName: "Service name",
  serviceUrl: "#"
}) }}
```

### Showing service name and navigation links

Show navigation links to let users navigate to different parts of your service and find useful links and tools.

**示例：with-service-name-and-navigation**

```njk
{% from "govuk/components/service-navigation/macro.njk" import govukServiceNavigation %}

{{ govukServiceNavigation({
  serviceName: "Service name",
  serviceUrl: "#",
  navigation: [
    {
      href: "#",
      text: "Navigation item 1"
    },
    {
      href: "#",
      text: "Navigation item 2",
      active: true
    },
    {
      href: "#",
      text: "Navigation item 3"
    }
  ]
}) }}
```

See when and how to show navigation links in the [Help users navigate a service pattern](https://design-system.service.gov.uk/patterns/navigate-a-service/).

## Use ‘slots’ to add custom HTML code

The Service navigation includes the option to use ‘slots’ to render custom HTML code at specific places inside the component.

You must provide your own styles and JavaScript for the custom HTML code within a slot, particularly if you’re not adding an existing component. You’ll need to decide on the most appropriate layout and positioning.

**示例：with-slots**

```njk
{% from "govuk/components/service-navigation/macro.njk" import govukServiceNavigation %}

{% set startHtml %}
  <div class="app-annotate-block">
    <span class="app-annotate-block__label">slot: start</span>
  </div>
{% endset %}

{% set endHtml %}
  <div class="app-annotate-block">
    <span class="app-annotate-block__label">slot: end</span>
  </div>
{% endset %}

{% set navigationStart %}
  <!--
    Notice the wrapping `<li>` as the `navigationStart` slot
    injects content at the start of the `<ul>` listing the navigation items
  -->
  <li class="govuk-service-navigation__item">
    <div class="app-annotate-block app-annotate-block--short">
      <span class="app-annotate-block__label">slot: navigationStart</span>
    </div>
  </li>
{% endset %}

{% set navigationEnd %}
  <!--
    Notice the wrapping `<li>` as the `navigationStart` slot
    injects content at the end of the `<ul>` listing the navigation items
  -->
  <li class="govuk-service-navigation__item">
    <div class="app-annotate-block app-annotate-block--short">
      <span class="app-annotate-block__label">slot: navigationEnd</span>
    </div>
  </li>
{% endset %}

{{ govukServiceNavigation({
  serviceName: "Service name",
  serviceUrl: "#",
  navigation: [
    {
      href: "#",
      text: "Item 1"
    },
    {
      href: "#",
      text: "Item 2",
      active: true
    }
  ],
  slots: {
    start: startHtml,
    end: endHtml,
    navigationStart: navigationStart,
    navigationEnd: navigationEnd
  }
}) }}
```

The Help users to navigate a service pattern includes some guidance on ‘[Adding other header and navigation elements](https://design-system.service.gov.uk/patterns/navigate-a-service/#adding-other-header-and-navigation-elements)’.

### Adding language navigation

If you use the [trial Language navigation component](https://design-system.service.gov.uk/components/language-navigation) and provide your whole service in more than one language, you can use the 'end' slot to show language options within the Service navigation and align it with navigation items.

### Align the end slot with the navigation items

When enough space is available on screen, the Service navigation component can render custom HTML inline with navigation items, to their right, rather than underneath the navigation items.

If you use HTML:

1. Place the custom HTML code in the end slot before the closing `</div>` of the `<div class="govuk-width-container">` element.
2. Add the `govuk-service-navigation__inlining-container` to the `<div class="govuk-width-container">` element.

If you use Nunjucks:

1. Place the custom HTML code in the `html` option of the `end` slot.
2. Set the `align` option of the `end` slot to `"inline"`.

This can help save space when showing tools users expect to see in that area, like a [language navigation](https://design-system.service.gov.uk/components/language-navigation), or authentication and account links.

**示例：with-inline-end-slot**

```njk
{% from "govuk/components/service-navigation/macro.njk" import govukServiceNavigation %}
{% from "govuk/components/language-navigation/macro.njk" import govukLanguageNavigation %}

{% set languageNavigationHtml %}
  {{ govukLanguageNavigation({
    items: [
      {
        text: "English",
        lang: "en",
        href: "#",
        current: true
      },
      {
        text: "Cymraeg",
        lang: "cy",
        href: "#"
      }
    ]
  }) }}
{% endset %}

{{ govukServiceNavigation({
  serviceName: "Service name",
  serviceUrl: "#",
  navigation: [
    {
      href: "#",
      text: "Item 1"
    },
    {
      href: "#",
      text: "Item 2",
      active: true
    }
  ],
  slots: {
    end: {
      html: languageNavigationHtml,
      align: 'inline'
    }
  }
}) }}
```

### Make sure the ‘aria-label’ is accurate for users of assistive technology

When a service name is shown, we let users know that there’s information about the service with a ‘region landmark’ using the `<section>` element.

Depending on what you add in the slots, you might need to rename the `aria-label` to accurately describe what’s in the section.

### Test with each update of GOV.UK Frontend

There’s a risk that slot contents may look or work differently in a future release of GOV.UK Frontend.

You’ll need to ensure that slot content still works as intended after each update.

## Brand refresh of the Service navigation component

In June 2025, we updated this component to support a wider refresh of the GOV.UK brand.

You should now use the refreshed GOV.UK branding. If your service has updated to GOV.UK Frontend v6.0.0 or later, you no longer need to use the `govukRebrand` feature flag and should remove it.

## Research on this component

See the [research section in the Help users navigate a service pattern](https://design-system.service.gov.uk/patterns/navigate-a-service/#research-on-this-pattern) for a summary of our research on the GOV.UK header and Service navigation, and how you can share your feedback with us.
