---
title: "GitHub Primer · Component · Truncate"
source: https://raw.githubusercontent.com/primer/design/main/content/components/truncate.mdx
section: components
tag: "规范"
fetched: 2026-11-14
status: full
id: comp-primer-truncate
publisher: "GitHub Primer"
---

# GitHub Primer · Component · Truncate

> 来源：https://primer.style/components/truncate

Guidelines for this component are in progress
  Interested in contributing? Review the guidelines for writing component documentation and open a pull request in our documentation repository.

## Accessibility and usability expectations

This component is intended to show a truncated version of its content, with the option for the user to expand it to see the content in its entirety.

### Built-in accessibility features

The component uses CSS to truncate text to a fixed size, with a `title` attribute – containing the full content of the component – that triggers a native browser tooltip when the component is hovered with the mouse. This means that currently, the component is not accessible to keyboard users, as there is no browser-native mechanism to show `title` tooltips when navigating with a keyboard.

As the truncation is done purely via CSS, screen reader users will be able to read the entire content of the component.

### Implementation requirements

Due to the current shortcomings of this component, you should consider alternative ways to provide a shortened/truncated version of content.

The specific way to achieve this will depend on the context of what you are building. For instance, you could use a truncated version of the content in your actual markup, rather than relying on CSS to truncate content to a specific length. Then, provide the full content in a subsequent details view, or in a dialog that shows more information for an individual item. Alternatively, provide a toggle or user setting that allows users to switch all instances of truncated content to the full, non-truncated version of the content.

### How to test the component

#### Integration tests

* Whenever the truncated content is presented to the user, there is a way for users to see the content in full. This method must work for all users – including keyboard users.

### Known accessibility issues (GitHub staff only)
