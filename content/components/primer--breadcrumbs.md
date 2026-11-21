---
title: "GitHub Primer · Component · Breadcrumbs"
source: https://raw.githubusercontent.com/primer/design/main/content/components/breadcrumbs.mdx
section: components
tag: "规范"
fetched: 2026-11-14
status: full
id: comp-primer-breadcrumbs
publisher: "GitHub Primer"
---

# GitHub Primer · Component · Breadcrumbs

> 来源：https://primer.style/components/breadcrumbs

![An image of the breadcrumb component](https://github.com/primer/design/assets/2313998/712e582d-6b51-4b03-a141-747fd31a30e9)

## Usage

Breadcrumbs are used to show taxonomical context on pages that are many levels deep in a site’s hierarchy. Breadcrumbs show and link to pages higher up in the ancestry.

Breadcrumbs are most appropriate on pages that:

- Are many levels deep on a site
- Do not have a section-level navigation
- May need the ability to quickly go back to the previous (parent) page
- All items must contain links, with the last item as the user's current context

## Anatomy

Breadcrumbs are made of links (indicating parents), dividers, and the current page. The default breadcrumbs component can be modified to change the number of items within the chain.

![An image showing the anatomy of the breacrumb component](https://github.com/primer/design/assets/2313998/068d9757-0a9c-46cd-a3b8-2720447d9fad)

Note: The space between items is set to 0px as the divider has padding built into it.

## Options

### Breadcrumb length

By default the breadcrumbs component can show up to 10 items within the chain.

![An image showing various breadcrumbs with different numbers of items in the breadcrumb chain](https://github.com/primer/design/assets/2313998/0007110c-0e54-4775-aeac-d8de1dfc916a)

## Accessibility and usability expectations

Breadcrumbs provide users with a structured set of links to both help them understand where they are within the context of a site, and to allow them to more easily jump directly to previous sections within the site's structure.

The last item in the breadcrumb trail refers to the current page. To convey this visually, the link is styled differently from the preceding links. For screen reader users, this information is conveyed programmatically through the use of the `aria-current` attribute in the rendered output.

The text of each breadcrumb link should match the heading element (`h1`–`h6`) or the unique part of the `` element that it is linked to. If the breadcrumb link text is not unique, it should be made unique by adding additional context. While this approach should be used in the majority of cases, if the breadcrumb link text is overly verbose, it can be made more concise, as long as it still provides sufficient information to the user. For example, the last item in a breadcrumb trail for a blog post could be the full title of the blog post itself, or (as it is likely long, and arguably redundant) just be generically labelled as "Blog post".

### Built-in accessibility features

This component is rendered as a `` navigation landmark region, with an accessible name of "Breadcrumbs".

```html
 …
```

This makes the breadcrumb navigation easily discoverable for screen reader users who navigate via page landmarks.

The individual breadcrumb items are rendered as an `` ordered list, with each item marked up as a link in a separate `` list item.

### Implementation requirements

In the Rails implementation, the link in the last item is automatically given an `aria-current="page"`.

In the current React implementation, you need to explicitly mark the last item as `selected`, which results in `aria-current="page"` being added to the link.

```xml

   …
   …
  …
   …

```

### How to test the component

#### Integration tests

- Each breadcrumb link has appropriate and descriptive link text

- For the React implementation, the last breadcrumb item has been explicitly marked as `selected`, to visually and programmatically identify it as a link referring to the current page

#### Component tests

- The breadcrumb component is exposed as a navigation landmark with an appropriate name/label
- The breadcrumb items have an appropriate structure, such as an `` ordered list
- For the Rails implementation, the last item link is programmatically identified as a link to the current page using `aria-current="page"`
- For the React implementation, if a breadcrumb item has been marked as `selected`, the last item link in the rendered output is programmatically identified as a link to the current page using `aria-current="page"`

### Known accessibility issues (GitHub staff only)
