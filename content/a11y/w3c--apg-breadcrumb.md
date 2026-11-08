---
title: "W3C APG · Breadcrumb 面包屑模式"
source: https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/
section: a11y
tag: "规范"
fetched: 2026-10-23
status: full
id: a11y-26
publisher: "W3C ARIA APG"
---

# W3C APG · Breadcrumb 面包屑模式

> 来源：[https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/)

---

Breadcrumb Pattern

## About This Pattern

A breadcrumb trail consists of a list of links to the parent pages of
the current page in hierarchical order. It helps users find their place
within a website or web application. Breadcrumbs are often placed
horizontally before a page's main content.

![](../../../../content-images/wai-aria-practices/images/pattern-breadcrumb.svg)

## Example

[Breadcrumb design pattern example](examples/breadcrumb/)

## Keyboard Interaction

Not applicable.

## WAI-ARIA Roles, States, and Properties

- Breadcrumb trail is contained within a navigation landmark region.
- The landmark region is labelled via
  <a href="https://w3c.github.io/aria/#aria-label"
  class="property-reference">aria-label</a> or
  <a href="https://w3c.github.io/aria/#aria-labelledby"
  class="property-reference">aria-labelledby</a>.
- The link to the current page has
  <a href="https://w3c.github.io/aria/#aria-current"
  class="property-reference">aria-current</a> set to `page`. If the
  element representing the current page is not a link, aria-current is
  optional.
