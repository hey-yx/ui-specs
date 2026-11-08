---
title: "NHS.UK · Colour 色彩"
source: https://service-manual.nhs.uk/design-system/styles/colour
section: color
tag: "规范"
fetched: 2026-11-07
status: full
id: color-12
publisher: "NHS.UK"
---

# NHS.UK · Colour 色彩

> 来源：[https://service-manual.nhs.uk/design-system/styles/colour](https://service-manual.nhs.uk/design-system/styles/colour)

---

## Styles – Colour

Our colours, and how to apply them.

## Using colour

Our brand colours help people recognise and trust that our services come from the NHS.

We also use colour to help users prioritise and differentiate information – for example we use:

  * yellow for our [focus state styles](https://service-manual.nhs.uk/design-system/styles/focus-state) and for [warning callouts](https://service-manual.nhs.uk/design-system/components/warning-callout)
  * red for urgent care cards in the pattern to [help users decide when and where to get care](https://service-manual.nhs.uk/design-system/patterns/help-users-decide-when-and-where-to-get-care)

Our text and background colours are designed to meet accessibility needs. Read more about [accessibility and colour on this page](https://service-manual.nhs.uk/design-system/styles/colour#accessibility).

## Main colours

If you are using the [NHS.UK frontend](https://service-manual.nhs.uk/design-system/production) or the [NHS.UK prototype kit](https://service-manual.nhs.uk/design-system/prototyping), use the [Sass variables](https://sass-lang.com/guide#topic-2) provided rather than copying the hexadecimal (hex) colour values. For example, use `$nhsuk-text-colour` rather than `#212b32`. This means that your service will always use the most recent colour palette whenever you update.

Only use the variables in the context they're designed for. In all other cases, you should reference the colour palette directly. For example, if you wanted to use red to represent some data in a graph you should use `nhsuk-colour("red")` rather than `$nhsuk-error-colour`.

Text

| Colour token | Hex value |
| --- | --- |
| `$nhsuk-text-colour` | #212b32 |
| `$nhsuk-secondary-text-colour` Modifier class: `nhsuk-u-secondary-text-colour` | #4c6272 |

Links

| Colour token | Hex value |
| --- | --- |
| `$nhsuk-link-colour` | #005eb8 |
| `$nhsuk-link-hover-colour` | #7C2855 |
| `$nhsuk-link-visited-colour` | #330072 |
| `$nhsuk-link-active-colour` | #002f5c |

Focus state

| Colour token | Hex value |
| --- | --- |
| `$nhsuk-focus-colour` | #ffeb3b |
| `$nhsuk-focus-text-colour` | #212b32 |

Border

| Colour token | Hex value |
| --- | --- |
| `$nhsuk-border-colour` | #d8dde0 |
| `$nhsuk-input-border-colour` | #4c6272 |

Error state

| Colour token | Hex value |
| --- | --- |
| `$nhsuk-error-colour` | #d5281b |

Success state

| Colour token | Hex value |
| --- | --- |
| `$nhsuk-success-colour` | #007f3b |

Button

| Colour token | Hex value |
| --- | --- |
| `$nhsuk-button-colour` | #007f3b |
| `$nhsuk-secondary-button-border-colour` | #005eb8 |

### Page background colour

We use `$nhsuk-body-background-colour` or `nhsuk-colour("grey-5")` as a background tint. This is because:

  * it reduces overall page glare
  * the [British Dyslexia Association's style guide](https://www.bdadyslexia.org.uk/advice/employers/creating-a-dyslexia-friendly-workplace/dyslexia-friendly-style-guide) recommends dark text on a light, but not white, background
  * components with important information, like callouts, stand out

`$nhsuk-reverse-text-colour` or `nhsuk-colour("white")` is used to make important information stand out and for alternating backgrounds, for example on [the NHS website home page](https://www.nhs.uk/).

### Secondary text colour

You can use the `nhsuk-u-secondary-text-colour` class for text that should appear in the secondary text colour of dark grey.

For example, this could be used for text to describe missing data in a table or summary list.

## Colour palette

Avoid using the palette colours if there is a Sass variable that is designed for your context. For example, if you are styling the error state of a component you should use the `$nhsuk-error-colour` Sass variable rather than `nhsuk-colour("red")`.

### Blue

Table of blue colours

| Colour token | Hex value |
| --- | --- |
| `nhsuk-colour("dark-blue")` | #003087 |
| `nhsuk-colour("blue")` | #005eb8 |
| `nhsuk-colour("pale-blue")` | #ccdff1 |

### Aqua green

Table of aqua green colours

| Colour token | Hex value |
| --- | --- |
| `nhsuk-colour("dark-aqua-green")` | #004a45 |
| `nhsuk-colour("aqua-green")` | #00a499 |
| `nhsuk-colour("pale-aqua-green")` | #bae6e3 |

### Green

Table of green colours

| Colour token | Hex value |
| --- | --- |
| `nhsuk-colour("dark-green")` | #004c23 |
| `nhsuk-colour("green")` | #007f3b |
| `nhsuk-colour("pale-green")` | #cce5d8 |

### Yellow

Table of yellow colours

| Colour token | Hex value |
| --- | --- |
| `nhsuk-colour("dark-yellow")` | #595215 |
| `nhsuk-colour("yellow")` | #ffeb3b |
| `nhsuk-colour("pale-yellow")` | #fff9c4 |

### Warm yellow

Table of warm yellow colours

| Colour token | Hex value |
| --- | --- |
| `nhsuk-colour("dark-warm-yellow")` | #664a0b |
| `nhsuk-colour("warm-yellow")` | #ffb81c |
| `nhsuk-colour("pale-warm-yellow")` | #fff1d2 |

### Orange

Table of orange colours

| Colour token | Hex value |
| --- | --- |
| `nhsuk-colour("dark-orange")` | #5f3800 |
| `nhsuk-colour("orange")` | #ed8b00 |
| `nhsuk-colour("pale-orange")` | #fbe8cc |

### Red

Table of red colours

| Colour token | Hex value |
| --- | --- |
| `nhsuk-colour("dark-red")` | #801810 |
| `nhsuk-colour("red")` | #d5281b |
| `nhsuk-colour("pale-red")` | #f7d4d1 |

### Pink

Table of pink colours

| Colour token | Hex value |
| --- | --- |
| `nhsuk-colour("dark-pink")` | #6e234b |
| `nhsuk-colour("pink")` | #ae2573 |
| `nhsuk-colour("pale-pink")` | #efd3e3 |

### Purple

Table of purple colours

| Colour token | Hex value |
| --- | --- |
| `nhsuk-colour("dark-purple")` | #330072 |
| `nhsuk-colour("purple")` | #5c338e |
| `nhsuk-colour("pale-purple")` | #ded6e8 |

### Black, white and grey

Table of black, white and grey colours

| Colour token | Hex value |
| --- | --- |
| `nhsuk-colour("black")` | #212b32 |
| `nhsuk-colour("grey-1")` | #4c6272 |
| `nhsuk-colour("grey-2")` | #768692 |
| `nhsuk-colour("grey-3")` | #aeb7bd |
| `nhsuk-colour("grey-4")` | #d8dde0 |
| `nhsuk-colour("grey-5")` | #f0f4f5 |
| `nhsuk-colour("white")` | #ffffff |

## Extended colours

[The NHS Identity Guidelines have an extended colour palette](https://www.england.nhs.uk/nhsidentity/identity-guidelines/colours/). We haven't tested these colours yet for digital use.

## Accessibility

Make sure that what the colour is "saying" is available in other ways. Read "[Do not rely on colour or position alone](https://service-manual.nhs.uk/accessibility/design#do-not-rely-on-colour-or-position-alone)" in our accessibility guidance.

### Colour contrast

Text, interface components (like buttons) and graphic elements must have contrast ratios that meet [the contrast minimum for AA of the Web Content Accessibility Guidelines (WCAG 2.2)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html). We aim for AAA as far as possible.

This helps people with low vision and colour vision deficiency (colour blindness) who find it difficult to distinguish between certain colours, often shades of red, yellow and green.

Not all combinations from our colour palette meet the minimum contrast. For example, `$nhsuk-border-colour` has low contrast on our page background.

More about contrast in components and graphic elements

Use a tool to calculate the ratio between the element and the adjacent colour. For example, the white arrow (foreground) and the green circle (background) in an [action link](https://service-manual.nhs.uk/design-system/components/action-link).

If you rely on users understanding a graphic (like an icon) without text, it must meet the minimum contrast ratio. If it also has text, it does not have to meet the requirement but we recommend you try to meet it anyway.

Components that are visible but not currently active (like a submit button that is not active until the user has filled in the form) do not have to meet the requirement. But if you can meet the minimum contrast without it being confusing, it will help people with low vision.

#### WCAG 2.2 AA

The contrast ratio should be at least:

  * 4.5:1 for small text (smaller than 24px, or smaller than 19px if bold)
  * 3:1 for large text (24px or over, or 19px or over if bold) and components (like a text input field or button) and graphic elements (like an icon)

#### WCAG 2.2 AAA

The contrast ratio should be at least:

  * 7:1 for small text (smaller than 24px, or smaller than 19px if bold)
  * 4.5:1 for large text (24px or over, or 19px or over if bold) and components (like a text input field or button) and graphic elements (like an icon)

#### Testing tools

Use tools like these to check contrast:

  * [WebAIM's colour contrast checker](https://webaim.org/resources/contrastchecker/)
  * [Color Oracle (free colour blindness simulator)](https://colororacle.org/)

Also test colour contrast with people of all abilities.
