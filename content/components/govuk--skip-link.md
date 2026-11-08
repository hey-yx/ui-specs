---
title: "GOV.UK · Component · Skip link 跳转链接"
source: https://design-system.service.gov.uk/components/skip-link/
section: components
tag: "规范"
fetched: 2026-11-01
status: full
id: components-38
publisher: "GOV.UK Design System"
---

# GOV.UK · Component · Skip link 跳转链接

> 来源：[https://design-system.service.gov.uk/components/skip-link/](https://design-system.service.gov.uk/components/skip-link/)

> 版权：Crown copyright，按 [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/) 发布；本站代码 MIT 许可。本篇为 GOV.UK Design System 同源全文，引用时请署名 GOV.UK Design System。

---

Use the skip link component to help keyboard-only users skip to the main content on a page.

**示例：default**

```njk
<p class="govuk-body">To view the skip link component tab to this example, or click inside this example and press tab.</p>

{% from "govuk/components/skip-link/macro.njk" import govukSkipLink %}

{{ govukSkipLink({
  text: "Skip to main content",
  href: "#"
}) }}
```

If you use the page template, you'll also get the skip link without having to add it, as it's included by default. However, if you want to customise the default skip link, read the [page template guidance about customising components](https://design-system.service.gov.uk/styles/page-template/#changing-template-content).

## When to use this component

All GOV.UK pages must include a skip link. Usually, you should place the skip link immediately after the opening `<body>` tag. However, if you're using a [Cookie banner component](https://design-system.service.gov.uk/components/cookie-banner/), place the skip link immediately after the cookie banner.

Some automated accessibility testing tools may warn that the skip link element is not inside a landmark. This warning does not apply to skip links, so you can ignore it. Do not wrap the skip link in a `<nav>` region, or move it inside the header.

## How it works

Some people use the tab key on their keyboard to navigate through the links and form elements on a web page.

Including the skip link component gives users the option to bypass the top-level navigation links and jump to the main content on a page.

The skip link component is visually hidden until a keyboard press activates it.

There are 2 ways to use the skip link component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

**示例：default (second)**

```njk
<p class="govuk-body">To view the skip link component tab to this example, or click inside this example and press tab.</p>

{% from "govuk/components/skip-link/macro.njk" import govukSkipLink %}

{{ govukSkipLink({
  text: "Skip to main content",
  href: "#"
}) }}
```

## Research on this component

### Persisting skip anchors in URLs

When a user uses the skip link and then a button, any pages that load afterwards might automatically skip to main content in a way that they might not expect.

Usually, predictable and consistent behaviour is better for users. However, we've received mixed feedback on whether this unexpected behaviour is useful or confusing for users, particularly amongst users of assistive technology such as screen readers and keyboard-only navigation.

If you’ve done any user research with users who use the skip link, tell us what you’ve learned. You can see the discussion and [add a comment to the related GitHub issue](https://github.com/alphagov/govuk-frontend/issues/4465).
