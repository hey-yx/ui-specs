---
title: "Spectrum · Component spacing 组件间距"
source: https://spectrum.adobe.com/foundations/layout-and-structure/spacing/component-spacing
section: layout
tag: "规范"
fetched: 2026-11-09
status: full
id: layout-13
publisher: "Spectrum"
---

# Spectrum · Component spacing 组件间距

> 来源：[https://spectrum.adobe.com/foundations/layout-and-structure/spacing/component-spacing](https://spectrum.adobe.com/foundations/layout-and-structure/spacing/component-spacing)

---

## Component spacing

![Frosted-glass style UI mockup on a purple-to-peach gradient background, showing a Subscribe button with an app icon, a close (X) button, and a layer panel row labeled Layer 1 with a drag handle, expand arrow, thumbnail, and visibility eye icon.](https://spectrum.adobe.com/page/iconography/media_13877deedffd2fff65afeca3121a99c8e583d6145.png?width=750&format=png&optimize=medium)

## How it works

Internal component spacing governs the space within components. It follows its own geometric scales, each designed to reconcile the type scale and component sizes as needed. This is why some values are less round than you might expect. They are calculated to produce balanced proportional relationships for their specific context at every size.

![Diagram showing how Base gap medium spacing between a layer thumbnail and its label combines with an Action group of eye and lock icons to form a List item component, which uses List gap medium spacing between its elements.](https://spectrum.adobe.com/page/iconography/media_1093862bea5fe456337910a0401c4d9f316872067.png?width=750&format=png&optimize=medium)

## Applying component spacing

Spectrum organizes components into common structural types called structural templates. Each template type has a corresponding set of [semantic tokens](https://spectrum.adobe.com/foundations/design-data/design-tokens) that handle its internal spacing relationships.

When designing a component, start by identifying which structural type it most closely matches. That identification points you to the right token category. A component that behaves like a list uses list-level tokens. One that behaves like a container uses container-level tokens. One built around a single interactive element uses base-level tokens.

Components can also combine multiple structures. A list item, for example, is made up of base and group elements. Each structural type within the composition uses its own tokens.

![Diagram showing component spacing application with base components on the left (Layer 1 with thumbnail and action icons) and how they're spaced in a list item on the right, with Base gap medium and List gap medium labels indicating spacing between elements.](https://spectrum.adobe.com/page/iconography/media_1c38a7177a98b59473f8f820d236ea4a411cb0905.png?width=750&format=png&optimize=medium)

### Structural templates

Spectrum's spacing values are accessed through [semantic tokens](https://spectrum.adobe.com/foundations/design-data/design-tokens), which encode the purpose and context of each spacing decision directly into the system. Repeated patterns for how to use these tokens are implemented through structural templates. These are blueprints or recipes for how to design or build a component in a modular, flexible, and scalable way.

**Working with tokens makes this seamless.** A hardcoded `8px` is just a number. The token `base-gap-large` gives you both a number and its context, relationships, size variants, and future system updates. Designers who skip tokens get the spacing that exists today, but they lose future enhancements to the system.

### ![Diagram showing three UI structure types stacked vertically: a Base element with an icon, radio circle, label, and description text; an empty Container box; and a List item row combining a folder icon, label, and two radio circles.](https://spectrum.adobe.com/page/iconography/media_14597f05908fb1ba90ed338d764edb72e40c79d04.png?width=750&format=png&optimize=medium)

## Component density

Component density controls the internal spacing of a component, independent of its size tier. To make a component more compact, decrease each spacing token by one step. To make it more spacious, increase by one step. For example, if the regular variant uses `spacing-200`, compact uses `spacing-100` and spacious uses `spacing-300`.

![Three versions of a labeled radio button component, each annotated with three spacing measurements—gaps (1, pink), vertical paddings (2, green), and horizontal paddings (3, blue)—shown increasing in size from left to right, with corresponding scaling squares below each category.](https://spectrum.adobe.com/page/iconography/media_1584dbdc041e6ba6e4cf11b739494f7b1064b2b40.png?width=750&format=png&optimize=medium)

![Three Table cell examples labeled Table item padding compact, regular, and spacious, each showing increasing vertical spacing around the cell text.](https://spectrum.adobe.com/page/iconography/media_1a4757920ba552b38711823f4f6394b669ca3de0f.png?width=750&format=png&optimize=medium)

![Diagram showing a dark toast notification reading Toast message describing what happened. with a Label button and close icon, with its left and right edge padding labeled Banner padding horizontal and Banner padding horizontal compact.](https://spectrum.adobe.com/page/iconography/media_18e87a92eedea2792741e3b4d764a160b02c2954d.png?width=750&format=png&optimize=medium)

Not all components support density as a configurable option. Only collections and containers do.

Collections are components made of repeated child elements, such as lists, groups, and tables. Containers hold compositions of other components, such as cards and toolbars. Basic components such as buttons and text fields don't support density variants

### Collections

For most collections, density affects only the gap between items. An action group, for example, adjusts the gap between its buttons; a list adjusts the gap between its items.

### ![Two labeled radio button groupings compared side by side: Compact and Regular, each showing a vertical pair and a horizontal pair of radio labels with a thin pink divider indicating the different spacing between them.](https://spectrum.adobe.com/page/iconography/media_1aa4656d804e67121b98c5b95cc78fdadf5367904.png?width=750&format=png&optimize=medium)

### Containers

Density affects all padding, both vertical and horizontal. Containers such as cards may appear in full grids or unidirectional lists, so both axes need to respond to density changes.

### ![Three versions of the same gradient card component (purple-to-red-to-pink with Card title and Card description) labeled Compact, Regular, and Spacious, showing progressively larger card sizes and spacing.](https://spectrum.adobe.com/page/iconography/media_1932de08aa0bbe4a7e377ac9ff72e954dc9bd9f08.png?width=750&format=png&optimize=medium)

## Tokens

Spectrum's internal component spacing is defined by a comprehensive set of semantic tokens. Each of these tokens corresponds to a specific structural context. These tokens are built into every Spectrum component, and available to designers in the S2 / Variables Figma library. A full token reference will be available on this site in the future.
