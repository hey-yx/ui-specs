---
title: "GOV.UK · Component · GOV.UK footer 页脚"
source: https://design-system.service.gov.uk/components/footer/
section: components
tag: "规范"
fetched: 2026-11-01
status: full
id: components-26
publisher: "GOV.UK Design System"
---

# GOV.UK · Component · GOV.UK footer 页脚

> 来源：[https://design-system.service.gov.uk/components/footer/](https://design-system.service.gov.uk/components/footer/)

> 版权：Crown copyright，按 [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/) 发布；本站代码 MIT 许可。本篇为 GOV.UK Design System 同源全文，引用时请署名 GOV.UK Design System。

---

The GOV.UK footer provides copyright, licensing and other information about your service.

**示例：default**

```njk
{% from "govuk/components/footer/macro.njk" import govukFooter %}

{{ govukFooter({}) }}
```

If you use the page template, you'll also get the footer without having to add it, as it's included by default. However, if you want to customise the default footer, read the [page template guidance about customising components](https://design-system.service.gov.uk/styles/page-template/#changing-template-content).

## When to use this component

Use the footer at the bottom of every page of your service.

## How it works

Add a copyright notice to the footer to clarify who owns the copyright. For GOV.UK services, add the coat of arms to keep things consistent with the rest of GOV.UK.

Make it clear whether content is available for re-use - and if it is, under what sort of licence. Use an [Open Government Licence](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/) unless you have permission from the National Archives to use a [different type of licence](https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/open-government-licence/other-licences/).

### Footer without links

**示例：default (second)**

```njk
{% from "govuk/components/footer/macro.njk" import govukFooter %}

{{ govukFooter({}) }}
```

### Footer with links

**示例：with-meta**

```njk
{% from "govuk/components/footer/macro.njk" import govukFooter %}

{{ govukFooter({
  meta: {
    items: [
      {
        href: "#",
        text: "Item 1"
      },
      {
        href: "#",
        text: "Item 2"
      },
      {
        href: "#",
        text: "Item 3"
      }
    ]
  }
}) }}
```

## Adding links

You can add links to:

- [your service's privacy notice](https://www.gov.uk/service-manual/design/collecting-personal-information-from-users)
- [your service's accessibility statement](https://www.gov.uk/guidance/make-your-website-or-app-accessible-and-publish-an-accessibility-statement)
- [your service's Cookies page](https://design-system.service.gov.uk/patterns/cookies-page/)
- terms and conditions
- help content

Use ‘Privacy’, ‘Accessibility’, ‘Cookies’ and ‘Terms and conditions’ for the link text.

If you include links to ‘help’ pages within the GOV.UK footer component, make sure to place those links consistently within the footer content.

Also make sure that ‘help’ links always function in a similar way across each page. This is to comply with [WCAG 2.2 success criterion 3.2.6 Consistent help](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html).

## Adding secondary navigation

Only add secondary GOV.UK navigation if you’re creating a GOV.UK service, and you want users to be able to navigate away from the service to somewhere else on the GOV.UK website. For example, you probably don’t want to encourage a user to navigate away from a linear, form-type service.

### Footer with secondary navigation

**示例：with-navigation**

```njk
{% from "govuk/components/footer/macro.njk" import govukFooter %}

{{ govukFooter({
  navigation: [
    {
      title: "Two column list",
      width: "two-thirds",
      columns: 2,
      items: [
        {
          href: "#",
          text: "Navigation item 1"
        },
        {
          href: "#",
          text: "Navigation item 2"
        },
        {
          href: "#",
          text: "Navigation item 3"
        },
        {
          href: "#",
          text: "Navigation item 4"
        },
        {
          href: "#",
          text: "Navigation item 5"
        },
        {
          href: "#",
          text: "Navigation item 6"
        }
      ]
    },
    {
      title: "Single column list",
      width: "one-third",
      items: [
        {
          href: "#",
          text: "Navigation item 1"
        },
        {
          href: "#",
          text: "Navigation item 2"
        },
        {
          href: "#",
          text: "Navigation item 3"
        }
      ]
    }
  ]
}) }}
```

### Footer with links and secondary navigation

**示例：full**

```njk
{% from "govuk/components/footer/macro.njk" import govukFooter %}

{{ govukFooter({
  navigation: [
    {
      title: "Services and information",
      width: "two-thirds",
      columns: 2,
      items: [
        {
          href: "#",
          text: "Benefits"
        },
        {
          href: "#",
          text: "Births, deaths, marriages and care"
        },
        {
          href: "#",
          text: "Business and self-employed"
        },
        {
          href: "#",
          text: "Childcare and parenting"
        },
        {
          href: "#",
          text: "Citizenship and living in the UK"
        },
        {
          href: "#",
          text: "Crime, justice and the law"
        },
        {
          href: "#",
          text: "Disabled people"
        },
        {
          href: "#",
          text: "Driving and transport"
        },
        {
          href: "#",
          text: "Education and learning"
        },
        {
          href: "#",
          text: "Employing people"
        },
        {
          href: "#",
          text: "Environment and countryside"
        },
        {
          href: "#",
          text: "Housing and local services"
        },
        {
          href: "#",
          text: "Money and tax"
        },
        {
          href: "#",
          text: "Passports, travel and living abroad"
        },
        {
          href: "#",
          text: "Visas and immigration"
        },
        {
          href: "#",
          text: "Working, jobs and pensions"
        }
      ]
    },
    {
      title: "Departments and policy",
      width: "one-third",
      items: [
        {
          href: "#",
          text: "How government works"
        },
        {
          href: "#",
          text: "Departments"
        },
        {
          href: "#",
          text: "Worldwide"
        },
        {
          href: "#",
          text: "Policies"
        },
        {
          href: "#",
          text: "Publications"
        },
        {
          href: "#",
          text: "Announcements"
        }
      ]
    }
  ],
  meta: {
    items: [
      {
        href: "#",
        text: "Help"
      },
      {
        href: "#",
        text: "Cookies"
      },
      {
        href: "#",
        text: "Contact"
      },
      {
        href: "#",
        text: "Terms and conditions"
      },
      {
        href: "#",
        text: "Rhestr o Wasanaethau Cymraeg",
        attributes: {
          lang: "cy",
          hreflang: "cy"
        }
      }
    ],
    html: 'Built by the <a href="#" class="govuk-footer__link">Government Digital Service</a>'
  }
}) }}
```

## Brand refresh of the GOV.UK footer component

In June 2025, we updated this component to support a wider refresh of the GOV.UK brand.

You should now use the refreshed GOV.UK branding. If your service has updated to GOV.UK Frontend v6.0.0 or later, you no longer need to use the `govukRebrand` feature flag and should remove it.

With these changes, the GOV.UK header and GOV.UK footer components should now only be used by [services on the GOV.UK website](https://www.gov.uk/service-manual/design/making-your-service-look-like-govuk). Services outside of [the GOV.UK proposition](https://www.gov.uk/government/publications/govuk-proposition) should stop using the header and footer components and instead create their own.
