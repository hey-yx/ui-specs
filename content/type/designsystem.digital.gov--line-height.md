---
title: "USWDS · Line height 行高"
source: https://designsystem.digital.gov/design-tokens/typesetting/line-height/
section: type
tag: "规范"
fetched: 2026-10-20
status: full
id: type-14
publisher: "USWDS"
---

# USWDS · Line height 行高

> 来源：[https://designsystem.digital.gov/design-tokens/typesetting/line-height/](https://designsystem.digital.gov/design-tokens/typesetting/line-height/)

---

Design tokens

USWDS has 6 normalized line height tokens to control the amount of space between lines in a block of text.

Please see the [Typesetting](https://designsystem.digital.gov/design-tokens/typesetting) section for more about font size normalization and how USWDS uses tokens for typesetting. Setting line height requires both a [line height](https://designsystem.digital.gov/design-tokens/typesetting/line-height) token and a [family](https://designsystem.digital.gov/design-tokens/typesetting/font-family) token. The documentation below displays a “target line-height” rather than the final output, which will be normalized depending on the targeted font family.

## Line height tokens

Token

Example

Usage

Output

`1`

In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.

**usage:** buttons, navigation, and text not meant to break over a line

1

`2`

In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.

**usage:** headings, introductory (lead or dek) text, no more than 1-2 sentences

1.15

`3`

In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.

**usage:** short text (under 1 paragraph), captions, text with a very short or very long measure

1.35

`4`

In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.

**usage:** short (1-2 paragraphs) of running text, especially with a short measure

1.5

`5`

In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.

**usage:** a good choice for most reading text, especially text meant for extended reading

1.62

`6`

In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.

**usage:** shorter text (1-2 paragraphs) meant to be distinguished from other page text, pullquotes

1.75

## Using line height tokens

Your context and coding style determine how you access USWDS line height tokens in code.

**Note:** Because line height is affected by [font size normalization](https://designsystem.digital.gov/design-tokens/typesetting/) all [letter spacing](https://designsystem.digital.gov/design-tokens/typesetting/letterspacing) tokens also require a [family](https://designsystem.digital.gov/design-tokens/typesetting/font-family) token.
