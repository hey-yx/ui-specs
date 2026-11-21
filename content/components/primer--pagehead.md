---
title: "GitHub Primer · Component · Pagehead"
source: https://raw.githubusercontent.com/primer/design/main/content/components/pagehead.mdx
section: components
tag: "规范"
fetched: 2026-11-14
status: full
id: comp-primer-pagehead
publisher: "GitHub Primer"
---

# GitHub Primer · Component · Pagehead

> 来源：https://primer.style/components/pagehead

![Pagehead component](https://github.com/primer/design/assets/586552/a3f4a112-bb48-44c8-9c57-ab011a3cd032)

## Usage

Pagehead is a heading component for the title and start of a given page section. The same component in our Rails framework is called Subhead.

### Options

**Basic pagehead**: The basic pagehead is the simplest form of the pagehead component which shows only a text layer.

**Pagehead with avatars and actions**: Avatars can be included next to the pagehead title, and actions can be added after the title.

![Pagehead component showing variations including avatars and actions](https://github.com/primer/design/assets/586552/b972eb5b-9af5-46dc-bf2b-6d3c2dc4ea53)

## Accessibility

### Heading usage
`Pagehead` does not provide a heading by default. Since this component is intended to be used for the title and start of a given page section, it should include a heading (`-`) in most cases.

```xml

    Heading title for Pagehead

```

### Known accessibility issues (GitHub staff only)
