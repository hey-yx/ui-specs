---
title: "W3C APG · Alert 警告提示模式"
source: https://www.w3.org/WAI/ARIA/apg/patterns/alert/
section: a11y
tag: "规范"
fetched: 2026-10-20
status: full
id: a11y-22
publisher: "W3C ARIA APG"
---

# W3C APG · Alert 警告提示模式

> 来源：[https://www.w3.org/WAI/ARIA/apg/patterns/alert/](https://www.w3.org/WAI/ARIA/apg/patterns/alert/)

---

Alert Pattern

## About This Pattern

An [alert](https://w3c.github.io/aria/#alert) is an element that displays a brief, important message in a way that attracts the user's attention without interrupting the user's task. Dynamically rendered alerts are automatically announced by most screen readers, and in some operating systems, they may trigger an alert sound. It is important to note that, at this time, screen readers do not inform users of alerts that are present on the page before page load completes.

Because alerts are intended to provide important and potentially time-sensitive information without interfering with the user's ability to continue working, it is crucial they do not affect keyboard focus. The [Alert Dialog Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/) is designed for situations where interrupting work flow is necessary.

It is also important to avoid designing alerts that disappear automatically. An alert that disappears too quickly can lead to failure to meet [WCAG 2.0 success criterion 2.2.3](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-no-exceptions.html). Another critical design consideration is the frequency of interruption caused by alerts. Frequent interruptions inhibit usability for people with visual and cognitive disabilities, which makes meeting the requirements of [WCAG 2.0 success criterion 2.2.4](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html) more difficult.

![](https://www.w3.org/WAI/content-images/wai-aria-practices/images/pattern-alert.svg)

## Example

[Alert Example](https://www.w3.org/WAI/ARIA/apg/patterns/alert/examples/alert/)

## Keyboard Interaction

Not applicable.

## WAI-ARIA Roles, States, and Properties

The widget has a role of [alert](https://w3c.github.io/aria/#alert).
