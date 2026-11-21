---
title: "GitHub Primer · Component · Text"
source: https://raw.githubusercontent.com/primer/design/main/content/components/text.mdx
section: components
tag: "规范"
fetched: 2026-11-14
status: full
id: comp-primer-text
publisher: "GitHub Primer"
---

# GitHub Primer · Component · Text

> 来源：https://primer.style/components/text

## Usage

This component is used to style text using Primer's typographic styles as defined in our design token library, Primer Primitives.

## Options

### Color

Text can be colored using any of the functional color tokens. Only foreground colors should be used.

### Other typographic styles

See Primer Primitives typography for more details about Primer's typography system.

## Accessibility and usability expectations

The component provides no semantic information. It's only function is to provide access to color tokens for styling text content.

It is up to the designer / implemented to select the appropriate color token for the text content to ensure that it has sufficient contrast against the background color.

### Built-in accessibility features

None.

### Implementation requirements

When using the component, ensure that the color token used for the text content has sufficient contrast against the background color.

### How to test the component

#### Integration tests

None

#### Component tests

- The text output has sufficient contrast against the background color.

### Known accessibility issues (GitHub staff only)

## Related links

- Primer Primitives
