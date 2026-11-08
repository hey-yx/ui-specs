---
title: "GOV.UK · Component · Pagination 分页导航"
source: https://design-system.service.gov.uk/components/pagination/
section: components
tag: "规范"
fetched: 2026-11-01
status: full
id: components-31
publisher: "GOV.UK Design System"
---

# GOV.UK · Component · Pagination 分页导航

> 来源：[https://design-system.service.gov.uk/components/pagination/](https://design-system.service.gov.uk/components/pagination/)

> 版权：Crown copyright，按 [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/) 发布；本站代码 MIT 许可。本篇为 GOV.UK Design System 同源全文，引用时请署名 GOV.UK Design System。

---

Help users navigate forwards and backwards through a series of pages. For example, search results or guidance that's divided into multiple website pages.

**示例：default**

```njk
{% from "govuk/components/pagination/macro.njk" import govukPagination %}

{{ govukPagination({
  previous: {
    href: "#"
  },
  next: {
    href: "#"
  },
  items: [
    {
      number: 1,
      href: "#"
    },
    {
      number: 2,
      current: true,
      href: "#"
    },
    {
      number: 3,
      href: "#"
    }
  ]
}) }}
```

## When to use this component

Consider using pagination when:

- showing all the content on a single page makes the page take too long to load
- most users will only need the content on the first page or first few pages

## When not to use this component

Only break up content onto separate pages if it improves the performance or usability of your service.

Avoid using the 'infinite scroll' technique to automatically load content when the user approaches the bottom of the page. This causes problems for keyboard users.

Do not use this Pagination component for linear journeys – for example, where you’re asking the user to complete a form. Instead, use the [Button component](https://design-system.service.gov.uk/components/button/) (usually a 'Continue' button) to let the user move to the next page – and a [Back link component](https://design-system.service.gov.uk/components/back-link/) to let them move to the previous page.

## How it works

Add the pagination component after the content on each page that you're paginating.

[View an example of Pagination in a standard GOV.UK page template](in-page/index.html).

Do not show pagination if there's only one page of content.

Redirect users to the first page if they enter a URL of a page that no longer exists.

## For navigating between content pages

Use the 'block' style of pagination to let users navigate through related content that has been split across multiple pages. Stack the links vertically, so they’re more obvious to screen magnifier users when they’re zoomed in.

You can use link labels to give context on what the neighbouring pages are about.

**示例：for-content-pages**

```njk
{% from "govuk/components/pagination/macro.njk" import govukPagination %}

{{ govukPagination({
  previous: {
    labelText: "Applying for a provisional lorry or bus licence",
    href: "#"
  },
  next: {
    labelText: "Driver CPC part 1 test: theory",
    href: "#"
  }
}) }}
```

## For navigating between pages of items

Use a list-type layout if users need to navigate through pages of similar items. For example, a list of search results or a list of cases in a case working system.

**示例：for-list-pages**

```njk
{% from "govuk/components/pagination/macro.njk" import govukPagination %}

{{ govukPagination({
  previous: {
    href: "#"
  },
  next: {
    href: "#"
  },
  items: [
    {
      number: 1,
      href: "#"
    },
    {
      ellipsis: true
    },
    {
      number: 6,
      href: "#"
    },
    {
      number: 7,
      current: true,
      href: "#"
    },
    {
      number: 8,
      href: "#"
    },
    {
      ellipsis: true
    },
    {
      number: 42,
      href: "#"
    }
  ]
}) }}
```

Show the page number in the page `<title>` so that screen reader users know they’ve navigated to a different page. For example, 'Search results (page 1 of 4)'.

Show an appropriate number of pages to fit the horizontal space available.

For smaller screens, show page numbers for:

- the current page
- previous and next pages
- first and last pages

For larger screens, show page numbers for:

- the current page
- at least one page immediately before and after the current page
- first and last pages

Use ellipses (…) to replace any skipped pages. For example:

- **[1]** 2 … 100
- 1 **[2]** 3 … 100
- 1 2 **[3]** 4 … 100
- 1 2 3 **[4]** 5 … 100
- 1 … 4 **[5]** 6 … 100
- 1 … 97 **[98]** 99 100
- 1 … 98 **[99]** 100
- 1 … 99 **[100]**

### First and last pages

Do not show the previous page link on the first page – and do not show the next page link on the last page.

**示例：first-page**

```njk
{% from "govuk/components/pagination/macro.njk" import govukPagination %}

{{ govukPagination({
  next: {
    href: "#"
  },
  items: [
    {
      number: 1,
      current: true,
      href: "#"
    },
    {
      number: 2,
      href: "#"
    },
    {
      number: 3,
      href: "#"
    }
  ]
}) }}
```

**示例：last-page**

```njk
{% from "govuk/components/pagination/macro.njk" import govukPagination %}

{{ govukPagination({
  previous: {
    href: "#"
  },
  items: [
    {
      number: 1,
      href: "#"
    },
    {
      number: 2,
      href: "#"
    },
    {
      number: 3,
      current: true,
      href: "#"
    }
  ]
}) }}
```

### Filtering and sorting

Consider adding filtering or sorting options if it helps users to find what they need in a long list of pages. For example, [the business support finder on GOV.UK](https://www.gov.uk/business-finance-support) has filtering options.

If the user filters or sorts the list of pages, apply this to the whole list (not just the current page) and redirect them back to the first page of the new results.

Set defaults to minimise how many pages most users have to click through to find what they need.

## Research on this component

This component is based on similar ones developed and used successfully by the Government Digital Service, Ministry of Justice and the Home Office, and on feedback in the Design System backlog.
