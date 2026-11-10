---
title: "GOV.UK · Component · Language navigation 语言切换导航"
source: https://design-system.service.gov.uk/components/language-navigation/
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-29
publisher: "GOV.UK Design System"
---

# GOV.UK · Component · Language navigation 语言切换导航

> 来源：[https://design-system.service.gov.uk/components/language-navigation/](https://design-system.service.gov.uk/components/language-navigation/)

---

**Trial**

This component is being developed and may change as we improve it. Read more about [the lifecycle of our components](https://design-system.service.gov.uk/community/component-lifecycle-statuses/).

Read these sections to see why this component is in trial:

*   [Research on this component](https://design-system.service.gov.uk/components/language-navigation/#research-on-this-component)
*   [Help improve this component](https://design-system.service.gov.uk/components/language-navigation/#help-improve-this-page)

The Language navigation component helps users choose and switch between languages when using a service.

*   [HTML](https://design-system.service.gov.uk/components/language-navigation/#language-navigation-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/language-navigation/#language-navigation-example-nunjucks)

## When to use this component

Use the Language navigation component when you can provide your service in more than one language.

For example, to help users switch from a page in English to a version of the same page in Welsh.

How you use this component will depend on whether you offer a choice of languages for:

*   [specific pages within your service](https://design-system.service.gov.uk/components/language-navigation/#if-you-only-offer-specific-pages-in-another-language)
*   [your whole service](https://design-system.service.gov.uk/components/language-navigation/#if-you-offer-your-whole-service-in-another-language)

## When not to use this component

Do not use this component unless you can provide all the same key information on a page in another language.

## How it works

The Language navigation component shows users a choice of languages and helps the user choose and switch between them.

Use the native name of each language, such as Cymraeg for Welsh. This helps speakers of that language recognise the link.

The component does not translate content. You’ll need to create, test and maintain content for all the languages you offer your service in.

See some of the other things you might need to do as part of [designing services that offer multiple languages](https://design-system.service.gov.uk/components/language-navigation/#designing-services-that-offer-multiple-languages).

Make sure the user does not lose any data they’ve entered when they navigate to another language. Do not ask the user to re-enter information they’ve already given.

### Placement on pages

Where you place the Language navigation component helps users understand whether they can use your entire service or only specific pages in another language.

Choose a single consistent location that works best for your users.

Use the same placement throughout your service in all languages. This helps users in many ways. For example, some users often switch languages throughout their journey as a way to check their understanding of a page.

### If you only offer specific pages in another language

You could place the language navigation at the top of a page, after the `h1` element.

If you choose to place the language navigation elsewhere on a page, it should be in a sensible place in the page heading structure with its own visible or hidden heading.

*   [HTML](https://design-system.service.gov.uk/components/language-navigation/#language-navigation-after-h1-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/language-navigation/#language-navigation-after-h1-example-nunjucks)

### If you offer your whole service in another language

If users can change the language for your whole service, you can place the [Language navigation component into the Service navigation component](https://design-system.service.gov.uk/components/service-navigation/#adding-language-navigation).

The Service navigation component includes options to align the language navigation with navigation items as shown in this example.

*   [HTML](https://design-system.service.gov.uk/components/language-navigation/#service-navigation-with-inline-end-slot-service-navigation-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/language-navigation/#service-navigation-with-inline-end-slot-service-navigation-example-nunjucks)

### Ensure hidden text and attributes are in the correct languages

The code in this component contains a navigation landmark and some hidden text to help users, including users of assistive technology. Make sure to translate these attributes as needed.

`aria-label` (or `ariaLabel` in Nunjucks) labels the component’s navigation landmark. By default the label is ‘language’, which will be announced by a screen reader as ‘language navigation’. Translate this label to the language of the page it’s on.

Hidden text within the link for each language option (or `languageDescriptionText` in Nunjucks) explains what the link will do. For example, ‘Change the language to English’. Translate these to the language you’re linking to.

### Language navigation on dark backgrounds

Use the `govuk-language-navigation--inverse` modifier class to show white links and text on a dark background – for example, inside a Service navigation with a dark background.

Make sure all users can see the language navigation – the background colour must have a contrast ratio of at least 4.5:1 with white to [meet WCAG 2.2 success criterion 1.4.3 Contrast (minimum), level AA](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

*   [HTML](https://design-system.service.gov.uk/components/language-navigation/#invers-language-navigation-language-navigation-example-html)
*   [Nunjucks](https://design-system.service.gov.uk/components/language-navigation/#invers-language-navigation-language-navigation-example-nunjucks)

## Designing services that offer multiple languages

GOV.UK Content and publishing guidance gives some advice on things you need to [consider when translating content](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/plan-manage-content/consider-translations/).

Test your service with users in your intended language to spot potential issues such as word inaccuracies and cultural differences. The Service Manual for Wales shows how you can [consider bilingualism in your research](https://digitalpublicservices.gov.wales/guidance-and-standards/service-manual/researching-your-users-and-testing-your-service/considering-bilingualism-in-your-research/).

### Internationalisation and localisation

If you choose to show larger parts of your service in another language, consider if you need to translate the text within components such as navigation, buttons and accordions.

Our components use English by default but include methods to translate text within them. Follow our documentation on how to [localise GOV.UK Frontend](https://frontend.design-system.service.gov.uk/localise-govuk-frontend/#localise-gov-uk-frontend/).

For some languages, you’ll need to [modify components](https://design-system.service.gov.uk/get-started/extending-and-modifying-components/) to make sure text displays well and is understandable by users of assistive technologies. For example, to show languages using scripts that read from right to left, such as Arabic, you’ll need to make changes to components and layouts.

See [W3C’s introduction to internationalisation](https://www.w3.org/International/i18n-drafts/nav/about) for more about some of the things you might need to consider.

Keep in mind that language and regional differences can affect the format users expect to see and enter information such as names, numbers and addresses.

## Research on this component

We’ve released this Language navigation component in trial status.

Thank you to the teams in departments across government who worked with us to contribute and share their research to get the component to this point.

We know from research contributed that users:

*   want the option to change language to be easy to find and recognise
*   want data to persist so they can navigate between languages and understand unfamiliar words
*   want navigating languages across government services to be consistent
*   want to change the language for a whole journey or page whilst moving through a service

If you use this component, we’d like to get your feedback to help us improve it.

We’d particularly like to know more about how different services use language navigation and how well users find it.

Until we’re confident we’re providing well-defined guidance for services to use language navigation consistently in a way that meets user needs, we’ll keep this component in trial status.

**Trial**

In August 2026 we moved Language navigation to trial status so we can learn how well it works for services.

See the information we're looking for and how you can help move this component into stable status:

[Tell us how well Language navigation works in your service](https://github.com/alphagov/govuk-design-system/discussions/5620)
