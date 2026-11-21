---
title: "Fluent 2 · Foundation · Elevation 层级"
source: https://fluent2.microsoft.design/elevation
section: layout
tag: "规范"
fetched: 2026-11-08
status: full
id: fluent-2--elevation
publisher: "Microsoft"
---

# Fluent 2 · Foundation · Elevation 层级

> 来源：[https://fluent2.microsoft.design/elevation](https://fluent2.microsoft.design/elevation)

Elevation is the perceived distance between an object and the surface behind it using shadows and light. Elevate UI elements to create visual cues, aid scannability, and convey levels of importance.

## Depth, shadow, and light

Fluent interfaces mimic three dimensional space by placing components at different elevations along the z-axis to increase the visual prominence of certain UI elements. This creates a clear hierarchy and sense of focus within an experience.

Elevation uses the interplay of shadow and light to imply the distance between two surfaces and illustrate how far an object appears from the surface behind it.

Shadow direction

Consistent shadow direction conveys a perceived light source.

Shadow size

Just like in the physical world, sharp and crisp shadows indicate closeness to a surface, while larger, softer shadows indicate a greater distance.

## Shadow system

Fluent uses a set of equations to generate consistent, cohesive shadows based on any given value. The shadow ramp references increasing blur values to indicate shadow size and, thereby, distance. For example, shadow 2 has 2 pixel blur and shadow 64 has 64 pixel blur. The six shadow types, token values, and use cases are listed in the following elevation tables.

Fluent shadows are created by combining sharp, directional shadows (key) to define the edges of an element and soft, diffused shadows (ambient) to imply distance.

**Platform distinction**

Windows uses strokes instead of key shadows to outline an object.

## Low elevation ramp

Shadow 1

Shadow 2

Dark

Shadow 1

Shadow 2

Light Shadow 2

Cards without an edge and floating action buttons when pressed

`$shadow2`

Dark Shadow 2

Ribbon, icons, and hero buttons

`$shadow2`

Light Shadow 4

Cards without an edge

`$shadow4`

**Dark Shadow 4**

Cards, grid items, and list items

`$shadow4`

Light Shadow 8

Floating action buttons, raised cards, and raised app bars

`$shadow8`

Dark Shadow 8

Command bars, command dropdowns, and tooltips

`$shadow8`

Light Shadow 16

Cards without edge and floating action buttons when pressed

`$shadow16`

Dark Shadow 16

Callouts and hover cards

`$shadow16`

## High elevation ramp

Shadow 1

Shadow 2

Shadow 1

Shadow 2

Light Shadow 28

Bottom sheet, side navigation, and raised tab bars

`$shadow28`

Dark Shadow 28

Bottom sheet, side navigation, and raised tab bars

`$shadow28`

Light Shadow 64

Pop-up dialogs

`$shadow64`

Dark Shadow 64

Panels and pop-up dialogs

`$shadow64`

Windows elevation system Learn about how Windows applies elevation

## Shadows on color surfaces

To convey the same level of elevation on color surfaces, we adjust the shadows using the luminosity equation. Use the provided brand shadow tokens to apply shadows to colors in an interface.

### Luminosity equation

When compared to neutrals, the same shadow value on brand colors may not give the impression of the same elevation levels. To bring elements to the same level of elevation visually, we use the luminosity equation to calculate the shadow opacity based on the color’s luminosity.

Use the brand shadow tokens to ensure consistent shadows throughout interfaces.

Luminosity

0.2126 * R + 0.7152 * G + 0.0722 * B

Shadow 1 opacity

Round ( 42 - 0.116 * luminosity )

Shadow 2 opacity

Round ( 34 - 0.09 * luminosity )

Adjust shadow opacity based on the luminosity of the surface color

Don’t use the main shadow ramp on colored surfaces
