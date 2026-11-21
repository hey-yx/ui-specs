---
title: "GitHub Primer · Component · Text input with tokens"
source: https://raw.githubusercontent.com/primer/design/main/content/components/text-input-with-tokens.mdx
section: components
tag: "规范"
fetched: 2026-11-14
status: full
id: comp-primer-text-input-with-tokens
publisher: "GitHub Primer"
---

# GitHub Primer · Component · Text input with tokens

> 来源：https://primer.style/components/text-input-with-tokens

![](https://user-images.githubusercontent.com/2313998/224812709-4bc4d525-92e5-49e8-9a36-264af2ac1c0c.png)

## Usage

Use a text input with tokens for a value that is a list. Items can be added or removed from the list, but the individual items cannot be edited inline.

This kind of input is most commonly used with an [autocomplete](https://primer.style/components/autocomplete) to let users select items from a predetermined list of options.

## Anatomy

Same as the [text input](https://primer.style/components/text-input), but the input's value is a list instead of a single string of text.

## Options

The text input can be configured with all of the same options as the regular [text input](https://primer.style/components/text-input) component.

### Wrapping

![](https://user-images.githubusercontent.com/2313998/224812712-c3552b98-3064-4cac-83f0-7a83eb3e2a11.png)

The list of tokens can be constrained to a single line or be wrapped to multiple lines. When wrapping is disabled and the list exceed the width of the input, the input will scroll horizontally.

### Max height

![](https://user-images.githubusercontent.com/2313998/224812714-c349ff71-7cf8-400f-b2be-01ef1e8cf997.png)

When tokens wrap, the height of the input can be constrained to a maximum height. Once the rows exceed the maximum height, the input will scroll vertically.

### Truncation

![](https://user-images.githubusercontent.com/2313998/224812715-7382f758-3122-4da7-b742-34180876042f.png)

You may choose to limit the number of tokens that are visible. However, all tokens will be visible while the text input is focused.

### Token variants

![](https://user-images.githubusercontent.com/2313998/224812717-20c412d7-24c0-4b94-a32a-7d3e7bc60468.png)

You may choose any of Primer's token components, but you cannot mix different token components in a single input. You may also choose the size of the tokens and whether or not the token's remove button is shown.

## Interactions

### Move focus between tokens

When tabbing to the input, the `` element receives focus. Then, when the text cursor is at the beginning of
the input, users can use the `Left Arrow` key to move focus to the last token. Once any token has focus, users can
use the `Right Arrow` and `Left Arrow` key to move focus to the previous or next token.

### Remove tokens

A token may be removed by focusing it and pressing the `Backspace` key, or by clicking the token's remove button.

If a user keys `Backspace` and the text cursor is at the begining of the input, the last token will be removed but
the input will be populated with it's text value.

## Accessibility

### Known accessibility issues (GitHub staff only)

## Related links

- Forms
- [Autocomplete](https://primer.style/components/autocomplete)
- [Text input](https://primer.style/components/text-input)
- [Tokens](https://primer.style/components/tokens)
