---
title: "GitHub Primer · Component · Label"
source: https://raw.githubusercontent.com/primer/design/main/content/components/label.mdx
section: components
tag: "规范"
fetched: 2026-11-14
status: full
id: comp-primer-label
publisher: "GitHub Primer"
---

# GitHub Primer · Component · Label

> 来源：https://primer.style/components/label

Guidelines for this component are in progress
  Interested in contributing? Review the guidelines for writing component documentation and open a pull request in our documentation repository.

![](https://github.com/primer/design/assets/2313998/c2bfee0c-8443-4076-aba8-27e6f2fbb4e0)

## Usage

A label is a piece of text that is visually stylized to differentiate it as contextual metadata. It can be used to add a status, category, or other metadata to a design.

## Accessibility and usability expectations

By itself, this component only provides a consistent visual styling to text. Authors should consider how the `Label`s will be used, and how to provide semantic/programmatic information for screen reader users.

### Built-in accessibility features

The `Label` component only provides a styled visual wrapper around its content. By default, the component results in a `` element with an appropriate CSS class.

The selectable variant/scheme colors meet minimum color contrast requirements.

### Implementation requirements

#### Add structure when needed

The component itself does not convey any semantics or meaning, so you will need to provide this in the code/structures where the `Label` is used. For instance, if `Label` components represent a list of tags/labels, make sure to group them in an actual `` unordered list, with each `Label` wrapped in a separate `` list item.

#### Convey meaning with more than color

`Label` has different schemes/variants (such as `accent`, `attention`, `success`, `danger`), which result in different colors for the text, background, and borders. These differences are purely visual, so they may be difficult to distinguish for users with impaired color perception. They also won't be perceived by screen reader users. For this reason, you can't rely on the scheme/variant alone to give meaning to your content.

Make sure that the label text provides sufficient meaning/context on its own, regardless of its visual presentation. For example, if `Label` components are used to list a series of successes and failures, do not rely solely on the use of the `success` and `danger` schemes/variants to communicate that meaning. Make each label's meaning clear by prefixing it with an appropriate "Pass: …" and "Fail: …" string.

### How to test the component

#### Integration tests

- The `Label` is not used in a way where it relies solely on the use of color (the specific scheme/variant used) to convey its meaning
- If the `Label` is intended to provide additional meaning/semantics (such as being part of a list of labels), it is wrapped in an appropriate structure (such as an actual list)

#### Component tests

- Content passed into the component is output as the label's visible text
- The contrast for all variants/schemes meets the minimum requirement of 4.5:1 between foreground and background colors

### Known accessibility issues (GitHub staff only)

## Related links

- [Counter label](https://primer.style/components/counter-label/)
- [Label group](https://primer.style/components/label-group/)
- [State label](https://primer.style/components/state-label/)
- [Token](https://primer.style/components/token/)
- Feature onboarding
