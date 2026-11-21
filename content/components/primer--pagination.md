---
title: "GitHub Primer · Component · Pagination"
source: https://raw.githubusercontent.com/primer/design/main/content/components/pagination.mdx
section: components
tag: "规范"
fetched: 2026-11-14
status: full
id: comp-primer-pagination
publisher: "GitHub Primer"
---

# GitHub Primer · Component · Pagination

> 来源：https://primer.style/components/pagination

![](https://user-images.githubusercontent.com/2313998/228364032-c46c03b0-3ad9-4114-a76b-6aabd81f72d9.png)

## Usage

Pagination renders a list of page links that let users quickly navigate content that is split into sequential pages.

### Best practices

- Every page should have a URL.
- Paginate content that would be easier to browse when it is segmented.
- Place pagination at the end of the page content.
- If the content is only long enough for a single page, don't render pagination.
- Don't show too many or too few items per page.
  - Too many items per page could be overwhelming.
  - Too few items per page could be frustrating to browse.

## Anatomy

![](https://user-images.githubusercontent.com/2313998/228364036-bda8c774-d83c-4e54-afd6-aa1c04fac805.png)

- Previous page link: Always links to the page before the current page.
- Next page link: Always links to the page after the current page.
- Page numbers: Lets users skip to whatever page the number represents.
- Current page: The page the user is on right now.
- Truncation indicator: A visual hint that a chunk of page links are skipped.

## Options

### Number of pages shown at the beginning and end of the list

![](https://user-images.githubusercontent.com/2313998/228364038-d73a133b-33e1-48dd-9d77-517d76fb7404.png)

If it would be useful for users to be able to skip to a page near the beginning or end of the list, define how many page links should be shown at the beginning and end.

### Number of pages surrounding the current page

![](https://user-images.githubusercontent.com/2313998/228364039-660d4513-69eb-4953-93e5-8b50dbfad559.png)

You can specify how many page links before or after the current page will be shown. The first and last pages will always be shown, even if you set this value to 0.

### Without page links

![](https://user-images.githubusercontent.com/2313998/228364040-77788a24-56c1-4926-a49a-dabf885eccb9.png)

If you want to prevent users from skipping pages and force them to navigate sequentially, you may hide the page numbers and only show the previous and next page links.

## Accessibility

### Known accessibility issues (GitHub staff only)
