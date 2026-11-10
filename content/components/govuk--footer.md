---
title: "GOV.UK · Component · GOV.UK footer 页脚"
source: https://design-system.service.gov.uk/components/footer/
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-26
publisher: "GOV.UK Design System"
---

# GOV.UK · Component · GOV.UK footer 页脚

> 来源：[https://design-system.service.gov.uk/components/footer/](https://design-system.service.gov.uk/components/footer/)

---

*   [History for](https://design-system.service.gov.uk/components/footer/history/)
*   [Use with Nunjucks for](https://design-system.service.gov.uk/components/footer/nunjucks/)

The GOV.UK footer provides copyright, licensing and other information about your service.

[Open this example in a new tab: footer](https://design-system.service.gov.uk/components/footer/default/)

*   [HTML](https://design-system.service.gov.uk/components/footer/#default-1-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/footer/#default-1-nunjucks)

HTML

```html
<div class="govuk-footer">
  <div class="govuk-width-container">
    <svg
      focusable="false"
      role="presentation"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 60"
      height="30"
      width="32"
      fill="currentcolor" class="govuk-footer__crown">
      <g>
        <circle cx="20" cy="17.6" r="3.7" />
        <circle cx="10.2" cy="23.5" r="3.7" />
        <circle cx="3.7" cy="33.2" r="3.7" />
        <circle cx="31.7" cy="30.6" r="3.7" />
        <circle cx="43.3" cy="17.6" r="3.7" />
        <circle cx="53.2" cy="23.5" r="3.7" />
        <circle cx="59.7" cy="33.2" r="3.7" />
        <circle cx="31.7" cy="30.6" r="3.7" />
        <path d="M33.1,9.8c.2-.1.3-.3.5-.5l4.6,2.4v-6.8l-4.6,1.5c-.1-.2-.3-.3-.5-.5l1.9-5.9h-6.7l1.9,5.9c-.2.1-.3.3-.5.5l-4.6-1.5v6.8l4.6-2.4c.1.2.3.3.5.5l-2.6,8c-.9,2.8,1.2,5.7,4.1,5.7h0c3,0,5.1-2.9,4.1-5.7l-2.6-8ZM37,37.9s-3.4,3.8-4.1,6.1c2.2,0,4.2-.5,6.4-2.8l-.7,8.5c-2-2.8-4.4-4.1-5.7-3.8.1,3.1.5,6.7,5.8,7.2,3.7.3,6.7-1.5,7-3.8.4-2.6-2-4.3-3.7-1.6-1.4-4.5,2.4-6.1,4.9-3.2-1.9-4.5-1.8-7.7,2.4-10.9,3,4,2.6,7.3-1.2,11.1,2.4-1.3,6.2,0,4,4.6-1.2-2.8-3.7-2.2-4.2.2-.3,1.7.7,3.7,3,4.2,1.9.3,4.7-.9,7-5.9-1.3,0-2.4.7-3.9,1.7l2.4-8c.6,2.3,1.4,3.7,2.2,4.5.6-1.6.5-2.8,0-5.3l5,1.8c-2.6,3.6-5.2,8.7-7.3,17.5-7.4-1.1-15.7-1.7-24.5-1.7h0c-8.8,0-17.1.6-24.5,1.7-2.1-8.9-4.7-13.9-7.3-17.5l5-1.8c-.5,2.5-.6,3.7,0,5.3.8-.8,1.6-2.3,2.2-4.5l2.4,8c-1.5-1-2.6-1.7-3.9-1.7,2.3,5,5.2,6.2,7,5.9,2.3-.4,3.3-2.4,3-4.2-.5-2.4-3-3.1-4.2-.2-2.2-4.6,1.6-6,4-4.6-3.7-3.7-4.2-7.1-1.2-11.1,4.2,3.2,4.3,6.4,2.4,10.9,2.5-2.8,6.3-1.3,4.9,3.2-1.8-2.7-4.1-1-3.7,1.6.3,2.3,3.3,4.1,7,3.8,5.4-.5,5.7-4.2,5.8-7.2-1.3-.2-3.7,1-5.7,3.8l-.7-8.5c2.2,2.3,4.2,2.7,6.4,2.8-.7-2.3-4.1-6.1-4.1-6.1h10.6,0Z" />
      </g>
    </svg>
    <div class="govuk-footer__meta">
      <div class="govuk-footer__meta-item govuk-footer__meta-item--grow">
        <svg
          aria-hidden="true"
          focusable="false"
          class="govuk-footer__licence-logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 483.2 195.7"
          height="17"
          width="41">
          <path
            fill="currentColor"
            d="M421.5 142.8V.1l-50.7 32.3v161.1h112.4v-50.7zm-122.3-9.6A47.12 47.12 0 0 1 221 97.8c0-26 21.1-47.1 47.1-47.1 16.7 0 31.4 8.7 39.7 21.8l42.7-27.2A97.63 97.63 0 0 0 268.1 0c-36.5 0-68.3 20.1-85.1 49.7A98 98 0 0 0 97.8 0C43.9 0 0 43.9 0 97.8s43.9 97.8 97.8 97.8c36.5 0 68.3-20.1 85.1-49.7a97.76 97.76 0 0 0 149.6 25.4l19.4 22.2h3v-87.8h-80l24.3 27.5zM97.8 145c-26 0-47.1-21.1-47.1-47.1s21.1-47.1 47.1-47.1 47.2 21 47.2 47S123.8 145 97.8 145" />
        </svg>
        <span class="govuk-footer__licence-description">
          All content is available under the
          <a
            class="govuk-footer__link"
            href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
            rel="license">Open Government Licence v3.0</a>, except where otherwise stated
        </span>
      </div>
      <div class="govuk-footer__meta-item">
        <a
          class="govuk-footer__link govuk-footer__copyright-logo"
          href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/">
          © Crown copyright
        </a>
      </div>
    </div>
  </div>
</div>
```

Nunjucks

[See options and how to use with Nunjucks](https://design-system.service.gov.uk/components/footer/nunjucks/)

```njk
{% from "govuk/components/footer/macro.njk" import govukFooter %}

{{ govukFooter({}) }}
```

If you use the page template, you’ll also get the footer without having to add it, as it’s included by default. However, if you want to customise the default footer, read the [page template guidance about customising components](https://design-system.service.gov.uk/styles/page-template/#changing-template-content).

## When to use this component

Use the footer at the bottom of every page of your service.

## How it works

Add a copyright notice to the footer to clarify who owns the copyright. For GOV.UK services, add the coat of arms to keep things consistent with the rest of GOV.UK.

Make it clear whether content is available for re-use - and if it is, under what sort of licence. Use an [Open Government Licence](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/) unless you have permission from the National Archives to use a [different type of licence](https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/open-government-licence/other-licences/).

### Footer without links

[Open this example in a new tab: footer second](https://design-system.service.gov.uk/components/footer/default/)

*   [HTML](https://design-system.service.gov.uk/components/footer/#footer-second-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/footer/#footer-second-example-nunjucks)

HTML

```html
<div class="govuk-footer">
  <div class="govuk-width-container">
    <svg
      focusable="false"
      role="presentation"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 60"
      height="30"
      width="32"
      fill="currentcolor" class="govuk-footer__crown">
      <g>
        <circle cx="20" cy="17.6" r="3.7" />
        <circle cx="10.2" cy="23.5" r="3.7" />
        <circle cx="3.7" cy="33.2" r="3.7" />
        <circle cx="31.7" cy="30.6" r="3.7" />
        <circle cx="43.3" cy="17.6" r="3.7" />
        <circle cx="53.2" cy="23.5" r="3.7" />
        <circle cx="59.7" cy="33.2" r="3.7" />
        <circle cx="31.7" cy="30.6" r="3.7" />
        <path d="M33.1,9.8c.2-.1.3-.3.5-.5l4.6,2.4v-6.8l-4.6,1.5c-.1-.2-.3-.3-.5-.5l1.9-5.9h-6.7l1.9,5.9c-.2.1-.3.3-.5.5l-4.6-1.5v6.8l4.6-2.4c.1.2.3.3.5.5l-2.6,8c-.9,2.8,1.2,5.7,4.1,5.7h0c3,0,5.1-2.9,4.1-5.7l-2.6-8ZM37,37.9s-3.4,3.8-4.1,6.1c2.2,0,4.2-.5,6.4-2.8l-.7,8.5c-2-2.8-4.4-4.1-5.7-3.8.1,3.1.5,6.7,5.8,7.2,3.7.3,6.7-1.5,7-3.8.4-2.6-2-4.3-3.7-1.6-1.4-4.5,2.4-6.1,4.9-3.2-1.9-4.5-1.8-7.7,2.4-10.9,3,4,2.6,7.3-1.2,11.1,2.4-1.3,6.2,0,4,4.6-1.2-2.8-3.7-2.2-4.2.2-.3,1.7.7,3.7,3,4.2,1.9.3,4.7-.9,7-5.9-1.3,0-2.4.7-3.9,1.7l2.4-8c.6,2.3,1.4,3.7,2.2,4.5.6-1.6.5-2.8,0-5.3l5,1.8c-2.6,3.6-5.2,8.7-7.3,17.5-7.4-1.1-15.7-1.7-24.5-1.7h0c-8.8,0-17.1.6-24.5,1.7-2.1-8.9-4.7-13.9-7.3-17.5l5-1.8c-.5,2.5-.6,3.7,0,5.3.8-.8,1.6-2.3,2.2-4.5l2.4,8c-1.5-1-2.6-1.7-3.9-1.7,2.3,5,5.2,6.2,7,5.9,2.3-.4,3.3-2.4,3-4.2-.5-2.4-3-3.1-4.2-.2-2.2-4.6,1.6-6,4-4.6-3.7-3.7-4.2-7.1-1.2-11.1,4.2,3.2,4.3,6.4,2.4,10.9,2.5-2.8,6.3-1.3,4.9,3.2-1.8-2.7-4.1-1-3.7,1.6.3,2.3,3.3,4.1,7,3.8,5.4-.5,5.7-4.2,5.8-7.2-1.3-.2-3.7,1-5.7,3.8l-.7-8.5c2.2,2.3,4.2,2.7,6.4,2.8-.7-2.3-4.1-6.1-4.1-6.1h10.6,0Z" />
      </g>
    </svg>
    <div class="govuk-footer__meta">
      <div class="govuk-footer__meta-item govuk-footer__meta-item--grow">
        <svg
          aria-hidden="true"
          focusable="false"
          class="govuk-footer__licence-logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 483.2 195.7"
          height="17"
          width="41">
          <path
            fill="currentColor"
            d="M421.5 142.8V.1l-50.7 32.3v161.1h112.4v-50.7zm-122.3-9.6A47.12 47.12 0 0 1 221 97.8c0-26 21.1-47.1 47.1-47.1 16.7 0 31.4 8.7 39.7 21.8l42.7-27.2A97.63 97.63 0 0 0 268.1 0c-36.5 0-68.3 20.1-85.1 49.7A98 98 0 0 0 97.8 0C43.9 0 0 43.9 0 97.8s43.9 97.8 97.8 97.8c36.5 0 68.3-20.1 85.1-49.7a97.76 97.76 0 0 0 149.6 25.4l19.4 22.2h3v-87.8h-80l24.3 27.5zM97.8 145c-26 0-47.1-21.1-47.1-47.1s21.1-47.1 47.1-47.1 47.2 21 47.2 47S123.8 145 97.8 145" />
        </svg>
        <span class="govuk-footer__licence-description">
          All content is available under the
          <a
            class="govuk-footer__link"
            href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
            rel="license">Open Government Licence v3.0</a>, except where otherwise stated
        </span>
      </div>
      <div class="govuk-footer__meta-item">
        <a
          class="govuk-footer__link govuk-footer__copyright-logo"
          href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/">
          © Crown copyright
        </a>
      </div>
    </div>
  </div>
</div>
```

Nunjucks

[See options and how to use with Nunjucks](https://design-system.service.gov.uk/components/footer/nunjucks/)

```njk
{% from "govuk/components/footer/macro.njk" import govukFooter %}

{{ govukFooter({}) }}
```

### Footer with links

[Open this example in a new tab: footer with links to meta information – footer](https://design-system.service.gov.uk/components/footer/with-meta/)

*   [HTML](https://design-system.service.gov.uk/components/footer/#footer-with-links-to-meta-information-footer-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/footer/#footer-with-links-to-meta-information-footer-example-nunjucks)

HTML

```html
<div class="govuk-footer">
  <div class="govuk-width-container">
    <svg
      focusable="false"
      role="presentation"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 60"
      height="30"
      width="32"
      fill="currentcolor" class="govuk-footer__crown">
      <g>
        <circle cx="20" cy="17.6" r="3.7" />
        <circle cx="10.2" cy="23.5" r="3.7" />
        <circle cx="3.7" cy="33.2" r="3.7" />
        <circle cx="31.7" cy="30.6" r="3.7" />
        <circle cx="43.3" cy="17.6" r="3.7" />
        <circle cx="53.2" cy="23.5" r="3.7" />
        <circle cx="59.7" cy="33.2" r="3.7" />
        <circle cx="31.7" cy="30.6" r="3.7" />
        <path d="M33.1,9.8c.2-.1.3-.3.5-.5l4.6,2.4v-6.8l-4.6,1.5c-.1-.2-.3-.3-.5-.5l1.9-5.9h-6.7l1.9,5.9c-.2.1-.3.3-.5.5l-4.6-1.5v6.8l4.6-2.4c.1.2.3.3.5.5l-2.6,8c-.9,2.8,1.2,5.7,4.1,5.7h0c3,0,5.1-2.9,4.1-5.7l-2.6-8ZM37,37.9s-3.4,3.8-4.1,6.1c2.2,0,4.2-.5,6.4-2.8l-.7,8.5c-2-2.8-4.4-4.1-5.7-3.8.1,3.1.5,6.7,5.8,7.2,3.7.3,6.7-1.5,7-3.8.4-2.6-2-4.3-3.7-1.6-1.4-4.5,2.4-6.1,4.9-3.2-1.9-4.5-1.8-7.7,2.4-10.9,3,4,2.6,7.3-1.2,11.1,2.4-1.3,6.2,0,4,4.6-1.2-2.8-3.7-2.2-4.2.2-.3,1.7.7,3.7,3,4.2,1.9.3,4.7-.9,7-5.9-1.3,0-2.4.7-3.9,1.7l2.4-8c.6,2.3,1.4,3.7,2.2,4.5.6-1.6.5-2.8,0-5.3l5,1.8c-2.6,3.6-5.2,8.7-7.3,17.5-7.4-1.1-15.7-1.7-24.5-1.7h0c-8.8,0-17.1.6-24.5,1.7-2.1-8.9-4.7-13.9-7.3-17.5l5-1.8c-.5,2.5-.6,3.7,0,5.3.8-.8,1.6-2.3,2.2-4.5l2.4,8c-1.5-1-2.6-1.7-3.9-1.7,2.3,5,5.2,6.2,7,5.9,2.3-.4,3.3-2.4,3-4.2-.5-2.4-3-3.1-4.2-.2-2.2-4.6,1.6-6,4-4.6-3.7-3.7-4.2-7.1-1.2-11.1,4.2,3.2,4.3,6.4,2.4,10.9,2.5-2.8,6.3-1.3,4.9,3.2-1.8-2.7-4.1-1-3.7,1.6.3,2.3,3.3,4.1,7,3.8,5.4-.5,5.7-4.2,5.8-7.2-1.3-.2-3.7,1-5.7,3.8l-.7-8.5c2.2,2.3,4.2,2.7,6.4,2.8-.7-2.3-4.1-6.1-4.1-6.1h10.6,0Z" />
      </g>
    </svg>
    <div class="govuk-footer__meta">
      <div class="govuk-footer__meta-item govuk-footer__meta-item--grow">
        <h2 class="govuk-visually-hidden">Support links</h2>
        <ul class="govuk-footer__inline-list">
          <li class="govuk-footer__inline-list-item">
            <a class="govuk-footer__link" href="#">
              Item 1
            </a>
          </li>
          <li class="govuk-footer__inline-list-item">
            <a class="govuk-footer__link" href="#">
              Item 2
            </a>
          </li>
          <li class="govuk-footer__inline-list-item">
            <a class="govuk-footer__link" href="#">
              Item 3
            </a>
          </li>
        </ul>
        <svg
          aria-hidden="true"
          focusable="false"
          class="govuk-footer__licence-logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 483.2 195.7"
          height="17"
          width="41">
          <path
            fill="currentColor"
            d="M421.5 142.8V.1l-50.7 32.3v161.1h112.4v-50.7zm-122.3-9.6A47.12 47.12 0 0 1 221 97.8c0-26 21.1-47.1 47.1-47.1 16.7 0 31.4 8.7 39.7 21.8l42.7-27.2A97.63 97.63 0 0 0 268.1 0c-36.5 0-68.3 20.1-85.1 49.7A98 98 0 0 0 97.8 0C43.9 0 0 43.9 0 97.8s43.9 97.8 97.8 97.8c36.5 0 68.3-20.1 85.1-49.7a97.76 97.76 0 0 0 149.6 25.4l19.4 22.2h3v-87.8h-80l24.3 27.5zM97.8 145c-26 0-47.1-21.1-47.1-47.1s21.1-47.1 47.1-47.1 47.2 21 47.2 47S123.8 145 97.8 145" />
        </svg>
        <span class="govuk-footer__licence-description">
          All content is available under the
          <a
            class="govuk-footer__link"
            href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
            rel="license">Open Government Licence v3.0</a>, except where otherwise stated
        </span>
      </div>
      <div class="govuk-footer__meta-item">
        <a
          class="govuk-footer__link govuk-footer__copyright-logo"
          href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/">
          © Crown copyright
        </a>
      </div>
    </div>
  </div>
</div>
```

Nunjucks

[See options and how to use with Nunjucks](https://design-system.service.gov.uk/components/footer/nunjucks/)

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

*   [your service’s privacy notice](https://www.gov.uk/service-manual/design/collecting-personal-information-from-users)
*   [your service’s accessibility statement](https://www.gov.uk/guidance/make-your-website-or-app-accessible-and-publish-an-accessibility-statement)
*   [your service’s Cookies page](https://design-system.service.gov.uk/patterns/cookies-page/)
*   terms and conditions
*   help content

Use ‘Privacy’, ‘Accessibility’, ‘Cookies’ and ‘Terms and conditions’ for the link text.

If you include links to ‘help’ pages within the GOV.UK footer component, make sure to place those links consistently within the footer content.

Also make sure that ‘help’ links always function in a similar way across each page. This is to comply with [WCAG 2.2 success criterion 3.2.6 Consistent help](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html).

## Adding secondary navigation

Only add secondary GOV.UK navigation if you’re creating a GOV.UK service, and you want users to be able to navigate away from the service to somewhere else on the GOV.UK website. For example, you probably don’t want to encourage a user to navigate away from a linear, form-type service.

### Footer with secondary navigation

[Open this example in a new tab: footer with secondary navigation – footer](https://design-system.service.gov.uk/components/footer/with-navigation/)

*   [HTML](https://design-system.service.gov.uk/components/footer/#footer-with-secondary-navigation-footer-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/footer/#footer-with-secondary-navigation-footer-example-nunjucks)

HTML

```html
<div class="govuk-footer">
  <div class="govuk-width-container">
    <svg
      focusable="false"
      role="presentation"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 60"
      height="30"
      width="32"
      fill="currentcolor" class="govuk-footer__crown">
      <g>
        <circle cx="20" cy="17.6" r="3.7" />
        <circle cx="10.2" cy="23.5" r="3.7" />
        <circle cx="3.7" cy="33.2" r="3.7" />
        <circle cx="31.7" cy="30.6" r="3.7" />
        <circle cx="43.3" cy="17.6" r="3.7" />
        <circle cx="53.2" cy="23.5" r="3.7" />
        <circle cx="59.7" cy="33.2" r="3.7" />
        <circle cx="31.7" cy="30.6" r="3.7" />
        <path d="M33.1,9.8c.2-.1.3-.3.5-.5l4.6,2.4v-6.8l-4.6,1.5c-.1-.2-.3-.3-.5-.5l1.9-5.9h-6.7l1.9,5.9c-.2.1-.3.3-.5.5l-4.6-1.5v6.8l4.6-2.4c.1.2.3.3.5.5l-2.6,8c-.9,2.8,1.2,5.7,4.1,5.7h0c3,0,5.1-2.9,4.1-5.7l-2.6-8ZM37,37.9s-3.4,3.8-4.1,6.1c2.2,0,4.2-.5,6.4-2.8l-.7,8.5c-2-2.8-4.4-4.1-5.7-3.8.1,3.1.5,6.7,5.8,7.2,3.7.3,6.7-1.5,7-3.8.4-2.6-2-4.3-3.7-1.6-1.4-4.5,2.4-6.1,4.9-3.2-1.9-4.5-1.8-7.7,2.4-10.9,3,4,2.6,7.3-1.2,11.1,2.4-1.3,6.2,0,4,4.6-1.2-2.8-3.7-2.2-4.2.2-.3,1.7.7,3.7,3,4.2,1.9.3,4.7-.9,7-5.9-1.3,0-2.4.7-3.9,1.7l2.4-8c.6,2.3,1.4,3.7,2.2,4.5.6-1.6.5-2.8,0-5.3l5,1.8c-2.6,3.6-5.2,8.7-7.3,17.5-7.4-1.1-15.7-1.7-24.5-1.7h0c-8.8,0-17.1.6-24.5,1.7-2.1-8.9-4.7-13.9-7.3-17.5l5-1.8c-.5,2.5-.6,3.7,0,5.3.8-.8,1.6-2.3,2.2-4.5l2.4,8c-1.5-1-2.6-1.7-3.9-1.7,2.3,5,5.2,6.2,7,5.9,2.3-.4,3.3-2.4,3-4.2-.5-2.4-3-3.1-4.2-.2-2.2-4.6,1.6-6,4-4.6-3.7-3.7-4.2-7.1-1.2-11.1,4.2,3.2,4.3,6.4,2.4,10.9,2.5-2.8,6.3-1.3,4.9,3.2-1.8-2.7-4.1-1-3.7,1.6.3,2.3,3.3,4.1,7,3.8,5.4-.5,5.7-4.2,5.8-7.2-1.3-.2-3.7,1-5.7,3.8l-.7-8.5c2.2,2.3,4.2,2.7,6.4,2.8-.7-2.3-4.1-6.1-4.1-6.1h10.6,0Z" />
      </g>
    </svg>
    <div class="govuk-footer__navigation">
      <div class="govuk-footer__section govuk-grid-column-two-thirds">
        <h2 class="govuk-footer__heading govuk-heading-m">Two column list</h2>
        <ul class="govuk-footer__list govuk-footer__list--columns-2">
          <li class="govuk-footer__list-item">
            <a class="govuk-footer__link" href="#">
              Navigation item 1
            </a>
          </li>
          <li class="govuk-footer__list-item">
            <a class="govuk-footer__link" href="#">
              Navigation item 2
            </a>
          </li>
          <li class="govuk-footer__list-item">
            <a class="govuk-footer__link" href="#">
              Navigation item 3
            </a>
          </li>
          <li class="govuk-footer__list-item">
            <a class="govuk-footer__link" href="#">
              Navigation item 4
            </a>
          </li>
          <li class="govuk-footer__list-item">
            <a class="govuk-footer__link" href="#">
              Navigation item 5
            </a>
          </li>
          <li class="govuk-footer__list-item">
            <a class="govuk-footer__link" href="#">
              Navigation item 6
            </a>
          </li>
        </ul>
      </div>
      <div class="govuk-footer__section govuk-grid-column-one-third">
        <h2 class="govuk-footer__heading govuk-heading-m">Single column list</h2>
        <ul class="govuk-footer__list">
          <li class="govuk-footer__list-item">
            <a class="govuk-footer__link" href="#">
              Navigation item 1
            </a>
          </li>
          <li class="govuk-footer__list-item">
            <a class="govuk-footer__link" href="#">
              Navigation item 2
            </a>
          </li>
          <li class="govuk-footer__list-item">
            <a class="govuk-footer__link" href="#">
              Navigation item 3
            </a>
          </li>
        </ul>
      </div>
    </div>
    <hr class="govuk-footer__section-break">
    <div class="govuk-footer__meta">
      <div class="govuk-footer__meta-item govuk-footer__meta-item--grow">
        <svg
          aria-hidden="true"
          focusable="false"
          class="govuk-footer__licence-logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 483.2 195.7"
          height="17"
          width="41">
          <path
            fill="currentColor"
            d="M421.5 142.8V.1l-50.7 32.3v161.1h112.4v-50.7zm-122.3-9.6A47.12 47.12 0 0 1 221 97.8c0-26 21.1-47.1 47.1-47.1 16.7 0 31.4 8.7 39.7 21.8l42.7-27.2A97.63 97.63 0 0 0 268.1 0c-36.5 0-68.3 20.1-85.1 49.7A98 98 0 0 0 97.8 0C43.9 0 0 43.9 0 97.8s43.9 97.8 97.8 97.8c36.5 0 68.3-20.1 85.1-49.7a97.76 97.76 0 0 0 149.6 25.4l19.4 22.2h3v-87.8h-80l24.3 27.5zM97.8 145c-26 0-47.1-21.1-47.1-47.1s21.1-47.1 47.1-47.1 47.2 21 47.2 47S123.8 145 97.8 145" />
        </svg>
        <span class="govuk-footer__licence-description">
          All content is available under the
          <a
            class="govuk-footer__link"
            href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
            rel="license">Open Government Licence v3.0</a>, except where otherwise stated
        </span>
      </div>
      <div class="govuk-footer__meta-item">
        <a
          class="govuk-footer__link govuk-footer__copyright-logo"
          href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/">
          © Crown copyright
        </a>
      </div>
    </div>
  </div>
</div>
```

Nunjucks

[See options and how to use with Nunjucks](https://design-system.service.gov.uk/components/footer/nunjucks/)

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

[Open this example in a new tab: footer with secondary navigation and links to meta information – footer](https://design-system.service.gov.uk/components/footer/full/)

*   [HTML](https://design-system.service.gov.uk/components/footer/#footer-with-secondary-navigation-and-links-to-meta-information-footer-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/footer/#footer-with-secondary-navigation-and-links-to-meta-information-footer-example-nunjucks)

HTML

```html
<div class="govuk-footer">
  <div class="govuk-width-container">
    <svg
      focusable="false"
      role="presentation"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 60"
      height="30"
      width="32"
      fill="currentcolor" class="govuk-footer__crown">
      <g>
        <circle cx="20" cy="17.6" r="3.7" />
        <circle cx="10.2" cy="23.5" r="3.7" />
        <circle cx="3.7" cy="33.2" r="3.7" />
        <circle cx="31.7" cy="30.6" r="3.7" />
        <circle cx="43.3" cy="17.6" r="3.7" />
        <circle cx="53.2" cy="23.5" r="3.7" />
        <circle cx="59.7" cy="33.2" r="3.7" />
        <circle cx="31.7" cy="30.6" r="3.7" />
        <path d="M33.1,9.8c.2-.1.3-.3.5-.5l4.6,2.4v-6.8l-4.6,1.5c-.1-.2-.3-.3-.5-.5l1.9-5.9h-6.7l1.9,5.9c-.2.1-.3.3-.5.5l-4.6-1.5v6.8l4.6-2.4c.1.2.3.3.5.5l-2.6,8c-.9,2.8,1.2,5.7,4.1,5.7h0c3,0,5.1-2.9,4.1-5.7l-2.6-8ZM37,37.9s-3.4,3.8-4.1,6.1c2.2,0,4.2-.5,6.4-2.8l-.7,8.5c-2-2.8-4.4-4.1-5.7-3.8.1,3.1.5,6.7,5.8,7.2,3.7.3,6.7-1.5,7-3.8.4-2.6-2-4.3-3.7-1.6-1.4-4.5,2.4-6.1,4.9-3.2-1.9-4.5-1.8-7.7,2.4-10.9,3,4,2.6,7.3-1.2,11.1,2.4-1.3,6.2,0,4,4.6-1.2-2.8-3.7-2.2-4.2.2-.3,1.7.7,3.7,3,4.2,1.9.3,4.7-.9,7-5.9-1.3,0-2.4.7-3.9,1.7l2.4-8c.6,2.3,1.4,3.7,2.2,4.5.6-1.6.5-2.8,0-5.3l5,1.8c-2.6,3.6-5.2,8.7-7.3,17.5-7.4-1.1-15.7-1.7-24.5-1.7h0c-8.8,0-17.1.6-24.5,1.7-2.1-8.9-4.7-13.9-7.3-17.5l5-1.8c-.5,2.5-.6,3.7,0,5.3.8-.8,1.6-2.3,2.2-4.5l2.4,8c-1.5-1-2.6-1.7-3.9-1.7,2.3,5,5.2,6.2,7,5.9,2.3-.4,3.3-2.4,3-4.2-.5-2.4-3-3.1-4.2-.2-2.2-4.6,1.6-6,4-4.6-3.7-3.7-4.2-7.1-1.2-11.1,4.2,3.2,4.3,6.4,2.4,10.9,2.5-2.8,6.3-1.3,4.9,3.2-1.8-2.7-4.1-1-3.7,1.6.3,2.3,3.3,4.1,7,3.8,5.4-.5,5.7-4.2,5.8-7.2-1.3-.2-3.7,1-5.7,3.8l-.7-8.5c2.2,2.3,4.2,2.7,6.4,2.8-.7-2.3-4.1-6.1-4.1-6.1h10.6,0Z" />
      </g>
    </svg>
    <div class="govuk-footer__navigation">
      <div class="govuk-footer__section govuk-grid-column-two-thirds">
        <h2 class="govuk-footer__heading govuk-heading-m">Services and information</h2>
        <ul class="govuk-footer__list govuk-footer__list--columns-2">
          <li class="govuk-footer__list-item">
            <a class="govuk-footer__link" href="#">
              Benefits
            </a>
          </li>
          <li class="govuk-footer__list-item">
            <a class="govuk-footer__link" href="#">
              Births, deaths, marriages and care
            </a>
          </li>
          <li class="govuk-footer__list-item">
            <a class="govuk-footer__link" href="#">
              Business and self-employed
            </a>
          </li>
          <li class="govuk-footer__list-item">
            <a class="govuk-footer__link" href="#">
              Childcare and parenting
            </a>
          </li>
          <li class="govuk-footer__list-item">
            <a class="govuk-footer__link" href="#">
              Citizenship and living in the UK
            </a>
          </li>
          <li class="govuk-footer__list-item">
            <a class="govuk-footer__link" href="#">
              Crime, justice and the law
            </a>
          </li>
          <li class="govuk-footer__list-item">
            <a class="govuk-footer__link" href="#">
              Disabled people
            </a>
          </li>
          <li class="govuk-footer__list-item">
            <a class="govuk-footer__link" href="#">
              Driving and transport
            </a>
          </li>
          <li class="govuk-footer__list-item">
            <a class="govuk-footer__link" href="#">
              Education and learning
            </a>
          </li>
          <li class="govuk-footer__list-item">
            <a class="govuk-footer__link" href="#">
              Employing people
            </a>
          </li>
          <li class="govuk-footer__list-item">
            <a class="govuk-footer__link" href="#">
              Environment and countryside
            </a>
          </li>
          <li class="govuk-footer__list-item">
            <a class="govuk-footer__link" href="#">
              Housing and local services
            </a>
          </li>
          <li class="govuk-footer__list-item">
            <a class="govuk-footer__link" href="#">
              Money and tax
            </a>
          </li>
          <li class="govuk-footer__list-item">
            <a class="govuk-footer__link" href="#">
              Passports, travel and living abroad
            </a>
          </li>
          <li class="govuk-footer__list-item">
            <a class="govuk-footer__link" href="#">
              Visas and immigration
            </a>
          </li>
          <li class="govuk-footer__list-item">
            <a class="govuk-footer__link" href="#">
              Working, jobs and pensions
            </a>
          </li>
        </ul>
      </div>
      <div class="govuk-footer__section govuk-grid-column-one-third">
        <h2 class="govuk-footer__heading govuk-heading-m">Departments and policy</h2>
        <ul class="govuk-footer__list">
          <li class="govuk-footer__list-item">
            <a class="govuk-footer__link" href="#">
              How government works
            </a>
          </li>
          <li class="govuk-footer__list-item">
            <a class="govuk-footer__link" href="#">
              Departments
            </a>
          </li>
          <li class="govuk-footer__list-item">
            <a class="govuk-footer__link" href="#">
              Worldwide
            </a>
          </li>
          <li class="govuk-footer__list-item">
            <a class="govuk-footer__link" href="#">
              Policies
            </a>
          </li>
          <li class="govuk-footer__list-item">
            <a class="govuk-footer__link" href="#">
              Publications
            </a>
          </li>
          <li class="govuk-footer__list-item">
            <a class="govuk-footer__link" href="#">
              Announcements
            </a>
          </li>
        </ul>
      </div>
    </div>
    <hr class="govuk-footer__section-break">
    <div class="govuk-footer__meta">
      <div class="govuk-footer__meta-item govuk-footer__meta-item--grow">
        <h2 class="govuk-visually-hidden">Support links</h2>
        <ul class="govuk-footer__inline-list">
          <li class="govuk-footer__inline-list-item">
            <a class="govuk-footer__link" href="#">
              Help
            </a>
          </li>
          <li class="govuk-footer__inline-list-item">
            <a class="govuk-footer__link" href="#">
              Cookies
            </a>
          </li>
          <li class="govuk-footer__inline-list-item">
            <a class="govuk-footer__link" href="#">
              Contact
            </a>
          </li>
          <li class="govuk-footer__inline-list-item">
            <a class="govuk-footer__link" href="#">
              Terms and conditions
            </a>
          </li>
          <li class="govuk-footer__inline-list-item">
            <a class="govuk-footer__link" href="#" lang="cy" hreflang="cy">
              Rhestr o Wasanaethau Cymraeg
            </a>
          </li>
        </ul>
        <div class="govuk-footer__meta-custom">
          Built by the <a href="#" class="govuk-footer__link">Government Digital Service</a>
        </div>
        <svg
          aria-hidden="true"
          focusable="false"
          class="govuk-footer__licence-logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 483.2 195.7"
          height="17"
          width="41">
          <path
            fill="currentColor"
            d="M421.5 142.8V.1l-50.7 32.3v161.1h112.4v-50.7zm-122.3-9.6A47.12 47.12 0 0 1 221 97.8c0-26 21.1-47.1 47.1-47.1 16.7 0 31.4 8.7 39.7 21.8l42.7-27.2A97.63 97.63 0 0 0 268.1 0c-36.5 0-68.3 20.1-85.1 49.7A98 98 0 0 0 97.8 0C43.9 0 0 43.9 0 97.8s43.9 97.8 97.8 97.8c36.5 0 68.3-20.1 85.1-49.7a97.76 97.76 0 0 0 149.6 25.4l19.4 22.2h3v-87.8h-80l24.3 27.5zM97.8 145c-26 0-47.1-21.1-47.1-47.1s21.1-47.1 47.1-47.1 47.2 21 47.2 47S123.8 145 97.8 145" />
        </svg>
        <span class="govuk-footer__licence-description">
          All content is available under the
          <a
            class="govuk-footer__link"
            href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
            rel="license">Open Government Licence v3.0</a>, except where otherwise stated
        </span>
      </div>
      <div class="govuk-footer__meta-item">
        <a
          class="govuk-footer__link govuk-footer__copyright-logo"
          href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/">
          © Crown copyright
        </a>
      </div>
    </div>
  </div>
</div>
```

Nunjucks

[See options and how to use with Nunjucks](https://design-system.service.gov.uk/components/footer/nunjucks/)

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

## Recent changes

| Date | Changed | Description |
| --- | --- | --- |
| Feb 2026 | [GOV.UK Frontend v6.0.0](https://github.com/alphagov/govuk-frontend/releases/tag/v6.0.0) | Removed rebrand feature flag. Changed containing HTML element from `footer` to `div`. |
| Jan 2026 | [GOV.UK Frontend v5.14.0](https://github.com/alphagov/govuk-frontend/releases/tag/v5.14.0) | Added option to remove content licence information. |
| Jun 2025 | Guidance | Added guidance on how the GOV.UK brand refresh impacts the Footer. |
| May 2025 | [GOV.UK Frontend v4.10.0](https://github.com/alphagov/govuk-frontend/releases/tag/v4.10.0) | Updated background colour from grey to light blue to align with the refreshed GOV.UK brand. Added GOV.UK logo to the Footer. Added blue border to the top of the Footer. Updated Royal Arms crest to use the same colour as text. |
| May 2025 | [GOV.UK Frontend v5.10.1](https://github.com/alphagov/govuk-frontend/releases/tag/v5.10.1) | Fixed licence link reflowing on focus in Safari browsers. |
