---
title: "W3C APG · Disclosure 展开收起模式"
source: https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/
section: a11y
tag: "规范"
fetched: 2026-10-20
status: full
id: a11y-18
publisher: "W3C ARIA APG"
---

# W3C APG · Disclosure 展开收起模式

> 来源：[https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)

---

Disclosure (Show/Hide) Pattern

## About This Pattern

A disclosure is a widget that enables content to be either collapsed (hidden) or expanded (visible). It has two elements: a disclosure [button](https://www.w3.org/WAI/ARIA/apg/patterns/button/) and a section of content whose visibility is controlled by the button. When the controlled content is hidden, the button is often styled as a typical push button with a right-pointing arrow or triangle to hint that activating the button will display additional content. When the content is visible, the arrow or triangle typically points down.

![](https://www.w3.org/WAI/content-images/wai-aria-practices/images/pattern-disclosure.svg)

## Examples

*   [Disclosure (Show/Hide) of Image Description](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-image-description/)
*   [Disclosure (Show/Hide) of Answers to Frequently Asked Questions](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-faq/)
*   [Disclosure (Show/Hide) Navigation Menu](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/)
*   [Disclosure (Show/Hide) Navigation Menu with Top-Level Links](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation-hybrid/)
*   [Disclosure (Show/Hide) Card](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-card/)

## Keyboard Interaction

When the disclosure control has focus:

*   Enter: activates the disclosure control and toggles the visibility of the disclosure content.
*   Space: activates the disclosure control and toggles the visibility of the disclosure content.

## WAI-ARIA Roles, States, and Properties

*   The element that shows and hides the content has role [button](https://w3c.github.io/aria/#button).
*   When the content is visible, the element with role `button` has [aria-expanded](https://w3c.github.io/aria/#aria-expanded) set to `true`. When the content area is hidden, it is set to `false`.
*   Optionally, the element with role `button` has a value specified for [aria-controls](https://w3c.github.io/aria/#aria-controls) that refers to the element that contains all the content that is shown or hidden.
