---
title: "GitHub Primer · Component · Timeline"
source: https://raw.githubusercontent.com/primer/design/main/content/components/timeline.mdx
section: components
tag: "规范"
fetched: 2026-11-14
status: full
id: comp-primer-timeline
publisher: "GitHub Primer"
---

# GitHub Primer · Component · Timeline

> 来源：https://primer.style/components/timeline

Guidelines for this component are in progress
  Interested in contributing? Review the guidelines for writing component documentation and open a pull request in our documentation repository.

![timeline component item](https://github.com/primer/design/assets/586552/f1ef5e7c-86fb-4131-be14-4831923065cf)

## Usage

Timeline displays items on a connected vertical timeline. It's primarily used to document the history and activity of a given pull request or issue.

![timeline component](https://github.com/primer/design/assets/586552/d44a8384-44fc-4879-9f1b-a4d33a53d994)

## Accessibility

### Timeline breaks

The `Timeline.Break` component allows for content in `Timeline` to be visually seperated. This should be used for decorative purposes only. Since this component is decorative, it is not conveyed to assistive technologies like screen readers.

The content within `Timeline.Item` should clearly communicate the status and state of that item, so that if there is a need to seperate content, the context of the seperation is communicated in `Timeline.Item`.

### Known accessibility issues (GitHub staff only)
