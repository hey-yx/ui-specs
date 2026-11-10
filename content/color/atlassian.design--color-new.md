---
title: "Atlassian · Foundation · Color 色彩"
source: https://atlassian.design/foundations/color-new
section: color
tag: "规范"
fetched: 2026-11-09
status: full
id: color-6
publisher: "Atlassian"
---

# Atlassian · Foundation · Color 色彩

> 来源：[https://atlassian.design/foundations/color-new](https://atlassian.design/foundations/color-new)

---

1. [Top Bar](https://atlassian.design/foundations/color#top-navigation)
    2. [Sidebar](https://atlassian.design/foundations/color#side-navigation)
    3. [Main Content](https://atlassian.design/foundations/color#main-content)

## Color

![Banner for Color page](https://atlassian.design/assets/b2fdc5c48ef1/static/hero.light-5647e8315c2f39dab08e391086e0e35c.png)

![Banner for Color page](https://atlassian.design/assets/b2fdc5c48ef1/static/hero.dark-5a00805c9d28e3407ba5fd837241da6c.png)

## Color anatomy

### Saturated colors

Saturated colors can infuse meaning to an experience, highlight UI, or create associations with similar colored UI.

### Neutral colors

Neutral colors apply to most backgrounds, text, and shapes in our experiences. They don’t typically have a meaning associated with them, though they can imply things like disabled states.

![There are dedicated neutrals for both light and dark mode.](https://atlassian.design/assets/b2fdc5c48ef1/static/color-neutral-palette-light-c52618642373f28dd327bbb8779745ac.png)

Color ramp for light neutrals, and a separate color ramp for dark neutrals.

### Alpha colors

Alpha colors have varying levels of transparency or opacity. Transparency helps UI adapt to different background colors and elevations.

![Light and dark alpha neutral ramps with a circle appearing behind part of the ramps, which demonstrate the transparent quality of the colors.](https://atlassian.design/assets/b2fdc5c48ef1/static/color-alpha-palette-light-7e152f2d654b174d91b1e7957f7d188e.png)

If you aren't using design tokens, see our [color palette page](https://atlassian.design/foundations/color/color-palette) for hex codes and RGBa values.

## Applying color with design tokens

For most Atlassian app experiences, colors are applied using [design tokens](https://atlassian.design/tokens/design-tokens). This means rather than choosing a certain shade or value, you’ll choose a design token to apply colors.

For the full list of color design tokens and their values, see our [design token reference list](https://atlassian.design/components/tokens/all-tokens). Every token comes with a description to help you ensure you’re using the correct one.

![Screenshot of a Jira board mapped to different token examples. The board title uses “color.text”, task icon uses “color.icon.accent.green”, and the button background uses “color.background.brand.bold.](https://atlassian.design/assets/b2fdc5c48ef1/static/color-tokens-in-screen-light-a8f655089174afd3fa8710dc030fe65f.png)

All color design tokens start with the word “color”, followed by the property that it's applied to, such as a background, border, or icon.

![The design token name, “color.background.danger.bold.hovered”, broken down into parts. The property is “background”, and the modifier is “danger.bold.hovered.](https://atlassian.design/assets/b2fdc5c48ef1/static/color-applying-color-2-light-4778b21e3721f45fe3a25e9768f3150b.png)

After the property name, the token may have one or more modifiers that represent the different parts of our color system: color role, emphasis level, and interaction state.

## Color roles

Color roles describe the intention behind the color. For example, color roles are applied to buttons to differentiate between primary, secondary, warning, or dangerous actions.

![Examples of color roles applied to button backgrounds. Primary button uses the brand color role, default button uses the neutral color role, warning button uses the warning color role, and danger uses the danger color role.](https://atlassian.design/assets/b2fdc5c48ef1/static/color-roles-light-b53c12ad6ea6f261fc1edb3492ab2a9c.png)

| Role | Description |
| --- | --- |
| `neutral` | Use for default text and secondary UI elements, such as secondary buttons or navigation elements. |
| `brand` | Use for primary actions or elements that communicate the Atlassian brand. |
| `information` | Use for informative UI, such as an information icon, or UI that communicates something is in progress. |
| `success` | Use to communicate a favorable outcome, such as a success message. |
| `warning` | Use for UI that communicates caution to prevent a mistake or error from occurring. |
| `danger` | Use for UI that communicates danger or serious error states. |
| `discovery` | Use for UI that communicates something new, such as onboarding or new feature information. |
| `accent` | Use for colors that don't have any specific meaning tied to them. You should be able to exchange one accent color for another, and the experience would remain unchanged.    Accent colors: gray, red, green, blue, yellow, orange, teal, purple, magenta, and lime. |
| `inverse` | Use for UI elements that sit on bold [emphasis](https://atlassian.design/foundations/color#use-inverse-tokens-on-bold-backgrounds) backgrounds. |
| `input` | Use for form fields. (Note that design system form fields will already have tokens applied.) |
![](https://atlassian.design/assets/b2fdc5c48ef1/static/color-role-do-light-749d3ca931af3c330c1a9869f25d0c1d.png)

#### Do

Use the right color role for your situation.

![](https://atlassian.design/assets/b2fdc5c48ef1/static/color-role-dont-light-381f0648af2f3b44a2637df0b14a3b93.png)

#### Don’t

Don’t use an accent when the color has semantic meaning.

## Emphasis levels

Emphasis determines the amount of contrast a color has against the default surface. Emphasis can range from subtlest to boldest. Bolder colors have more contrast against the default surface, which adds more attention than subtle colors.

![Comparing differences between bold and default lozenges. Bold lozenges have much more contrast than the default lozenges.Comparing differences between default, subtle, and subtlest text. Default text has the highest contrast, subtlest has the least.](https://atlassian.design/assets/b2fdc5c48ef1/static/color-emphasis-levels-status-light-8f91d5df4c65aa3cdef47ef8a08afd4a.png)

![Comparing differences between default, subtle, and subtlest text. Default text has the highest contrast, subtlest has the least.](https://atlassian.design/assets/b2fdc5c48ef1/static/color-emphasis-levels-text-light-a77e4a50873b82cfbee40792f7c575ca.png)

### Use inverse tokens on bold backgrounds

Inverse tokens are designed to show on bold backgrounds. There are inverse tokens for text, borders, and icons on bold backgrounds.

For bold warning backgrounds, which are yellow, there are special `warning.inverse` tokens designed to pass WCAG AA contrast requirements.

![A danger banner and warning banner with text. The danger banner text is using “color.text.inverse”, and the warning banner text is using “color.text.warning.inverse.](https://atlassian.design/assets/b2fdc5c48ef1/static/color-emphasis-level-inverse-light-486d2b177308037c3d9af0b35ff6b20e.png)

## Interaction states

States communicate the status of an interactive element.

![Button interaction states, which include default, hovered, and pressed states.](https://atlassian.design/assets/b2fdc5c48ef1/static/color-interaction-states-light-fb7d971a43d1dd288bcd4bd5d9ad66d4.png)

### Keep selected and focused states distinct

A selected state persists after an interaction to show someone’s current choice. A focused state shows where keyboard or input focus is currently located.

           - Use `color.background.selected`, `color.text.selected`, `color.icon.selected`, or `color.border.selected` to communicate selection.
           - Use `color.border.focused` only for focus indicators.
           - Don’t use link, brand, or focused tokens to communicate selection.
           - When an element is both selected and focused, preserve the selected treatment and add the focus indicator.
Pair selected colors with another visual cue, such as a checkmark, underline, border, or change in shape. This helps people identify selection without relying on color alone.

### Layer hovered and pressed states onto the current state

Hovered and pressed states are temporary. Use the matching `hovered` or `pressed` token for the element’s current state, and keep a selected item recognizable during interaction.

### Hovered and pressed for icons

There are no dedicated hovered and pressed tokens for icons. Instead, we recommend using a subtle neutral background to indicate state changes.

![Icon interaction states. The default icon background uses “color.background.neutral.subtle”, the hovered icon background uses “color.background.neutral.subtle.hovered”, and the pressed icon background uses “color.background.neutral.subtle.pressed.](https://atlassian.design/assets/b2fdc5c48ef1/static/color-interaction-states-icons-light-105dbf20be94d1666baf3f2c6359bcde.png)

## Accessibility in color

We comply with WCAG AA standard contrast ratios:

           - **Must pass 3:1 contrast:** Any UI essential to understanding the experience and text 24px or larger ([WCAG 1.4.11](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html))
           - **Must pass 4.5:1:** Text smaller than 24px ([WCAG 1.4.3](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html))
See our [color accessibility](https://atlassian.design/foundations/accessibility#colors) guidance for more information.

## Designing in dark mode

Design tokens currently support two color themes: light and dark. Each color design token maps to a different value for each theme so their appearance differs depending on which theme is being used.

           - To learn the basics of tokens and themes, go to [design tokens](https://atlassian.design/tokens/design-tokens).
           - For detailed mappings from light to dark colors, see [picking colors for dark mode](https://atlassian.design/foundations/color/color-palette#picking-colors-for-dark-mode). Note that if you are using design tokens, you shouldn’t have to map your own values.
