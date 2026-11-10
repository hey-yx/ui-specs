---
title: "W3C · CSS Box Alignment Level 3（对齐规范）"
source: https://www.w3.org/TR/css-align-3/
section: standards
tag: "语法标准"
fetched: 2026-10-20
status: full
id: standards-4
publisher: "W3C"
---

# W3C · CSS Box Alignment Level 3（对齐规范）

> 来源：[https://www.w3.org/TR/css-align-3/](https://www.w3.org/TR/css-align-3/)

---

## 1\. Introduction[](#intro)

CSS Levels 1 and 2 allowed for the alignment of text via [text-align](https://www.w3.org/TR/css-text-3/#propdef-text-align) and the alignment of blocks by balancing auto margins. However, except in table cells, vertical alignment was not possible. As CSS adds further capabilities, the ability to align boxes in various dimensions becomes more critical. This module attempts to create a cohesive and common box alignment model to share among all of CSS.

Note: The alignment of text and inline-level content is defined in [\[CSS-TEXT-3\]](#biblio-css-text-3 "CSS Text Module Level 3") and [\[CSS-INLINE-3\]](#biblio-css-inline-3 "CSS Inline Layout Module Level 3").

Note: This specification is not intended to change any of the behavior defined in [CSS2.1](https://www.w3.org/TR/CSS2/) when the properties defined here are set to their initial values. If implementors or anyone else notices a discrepancy, please report this to the CSSWG as an error.

_This section (above) is not normative._

### 1.1. Module Interactions[](#placement)

This module adds some new alignment capabilities to the block layout model described in [\[CSS2\]](#biblio-css2 "Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification") [chapters 9](https://www.w3.org/TR/CSS2/visuren.html) and [10](https://www.w3.org/TR/CSS2/visudet.html), [redefines how overconstrained block-level box margins are resolved](#justify-block), and defines the interaction of these new alignment properties with the alignment of table cell content using [vertical-align](https://www.w3.org/TR/CSS2/visudet.html#propdef-vertical-align), as defined in [\[CSS2\]](#biblio-css2 "Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification") [chapter 17](https://www.w3.org/TR/CSS2/tables.html#height-layout).

The interaction of these properties with Grid Layout [\[CSS-GRID-1\]](#biblio-css-grid-1 "CSS Grid Layout Module Level 1") and Flexible Box Layout [\[CSS-FLEXBOX-1\]](#biblio-css-flexbox-1 "CSS Flexible Box Layout Module Level 1") is defined in their respective modules. The property definitions here supersede those in [\[CSS-FLEXBOX-1\]](#biblio-css-flexbox-1 "CSS Flexible Box Layout Module Level 1") (which have a smaller, earlier subset of permissible values).

No properties in this module apply to the `::first-line` or `::first-letter` pseudo-elements.

### 1.2. Value Definitions[](#values)

This specification follows the [CSS property definition conventions](https://www.w3.org/TR/CSS2/about.html#property-defs) from [\[CSS2\]](#biblio-css2 "Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification") using the [value definition syntax](https://www.w3.org/TR/css-values-3/#value-defs) from [\[CSS-VALUES-3\]](#biblio-css-values-3 "CSS Values and Units Module Level 3"). Value types not defined in this specification are defined in CSS Values & Units [\[CSS-VALUES-3\]](#biblio-css-values-3 "CSS Values and Units Module Level 3"). Combination with other CSS modules may expand the definitions of these value types.

In addition to the property-specific values listed in their definitions, all properties defined in this specification also accept the [CSS-wide keywords](https://www.w3.org/TR/css-values-4/#css-wide-keywords) as their property value. For readability they have not been repeated explicitly.

### 1.3. Partial Implementations[](#partial)

Since it is expected that support for the features in this module will be deployed in stages corresponding to the various layout models affected, it is hereby clarified that the [rules for partial implementations](https://www.w3.org/TR/CSS/#partial) that require treating as invalid any unsupported feature apply to any alignment keyword which is not supported across all layout modules to which it applies for layout models in which the implementation supports the property in general.

For example, if an implementation supports [align-self](#propdef-align-self) in [\[CSS-GRID-1\]](#biblio-css-grid-1 "CSS Grid Layout Module Level 1") and [\[CSS-FLEXBOX-1\]](#biblio-css-flexbox-1 "CSS Flexible Box Layout Module Level 1"), then it must treat [start](#valdef-self-position-start) as invalid unless it is supported in both grid and flex containers. However if that same implementation does not support align-self for block-level elements at all, then a lack of implementation of align-self: start does not trigger this requirement to treat it as invalid.

## 2\. Overview of Alignment Properties[](#overview)

The box alignment properties in CSS are a set of 6 properties that control alignment of boxes within other boxes. They can be described along two axises:

*   which dimension they apply to ([main](https://www.w3.org/TR/css-flexbox-1/#main-axis)/[inline](https://www.w3.org/TR/css-writing-modes-4/#inline-axis) vs. [cross](https://www.w3.org/TR/css-flexbox-1/#cross-axis)/[block](https://www.w3.org/TR/css-writing-modes-4/#block-axis)), and
*   whether they control the position of the box within its parent, or the box’s content within itself.

Note: This specification uses the terms “justify” and “align” to distinguish between alignment in the main/inline and cross/block dimensions, respectively. The choice is somewhat arbitrary, but having the two terms allows for a consistent naming scheme that works across all of CSS’s layout models (including [CSS Flexbox 1 § 2 Flex Layout Box Model and Terminology](https://www.w3.org/TR/css-flexbox-1/#box-model))

The following table summarizes the [box alignment properties](#box-alignment-properties) and the display types they can apply to.

Common

Axis

Aligns

Applies to

[justify-content](#propdef-justify-content)

main/inline

![](https://www.w3.org/TR/css-align-3/images/content-example.svg) content within element (effectively adjusts padding)

[block containers](https://www.w3.org/TR/css-display-4/#block-container), [flex containers](https://www.w3.org/TR/css-flexbox-1/#flex-container), and [grid containers](https://www.w3.org/TR/css-grid-2/#grid-container)

[align-content](#propdef-align-content)

cross/block

[justify-self](#propdef-justify-self)

inline

![](https://www.w3.org/TR/css-align-3/images/self-example.svg) element within parent (effectively adjusts margins)

block-level boxes, absolutely-positioned boxes, and [grid items](https://www.w3.org/TR/css-grid-2/#grid-item)

[align-self](#propdef-align-self)

cross/block

absolutely-positioned boxes, [flex items](https://www.w3.org/TR/css-flexbox-1/#flex-item), and [grid items](https://www.w3.org/TR/css-grid-2/#grid-item)

[justify-items](#propdef-justify-items)

inline

![](https://www.w3.org/TR/css-align-3/images/items-example.svg) items inside box (controls child items’ justify-self: auto)

[block containers](https://www.w3.org/TR/css-display-4/#block-container) and [grid containers](https://www.w3.org/TR/css-grid-2/#grid-container)

[align-items](#propdef-align-items)

cross/block

[flex containers](https://www.w3.org/TR/css-flexbox-1/#flex-container) and [grid containers](https://www.w3.org/TR/css-grid-2/#grid-container)

Note: The \*-items properties don’t affect the element itself. When set on a container, they specify the interpretation of any \*-self: auto used on children of the container element.

## 3\. Alignment Terminology[](#terms)

Since this module defines alignment properties for all layout modes in CSS, some abstract terminology is introduced:

alignment subject

The [alignment subject](#alignment-subject) is the thing or things being aligned by the property. For [justify-self](#propdef-justify-self) and [align-self](#propdef-align-self), the alignment subject is the margin box of the box the property is set on, and assumes the [writing mode](https://www.w3.org/TR/css-writing-modes-4/#writing-mode) of that box. For [justify-content](#propdef-justify-content) and [align-content](#propdef-align-content), the alignment subject is defined by the layout mode and refers to some aspect of its contents; it also assumes the writing mode of the box the property is set on.

alignment container

The [alignment container](#alignment-container) is the rectangle that the [alignment subject](#alignment-subject) is aligned within. This is defined by the layout mode, but is usually the alignment subject’s containing block, and assumes the [writing mode](https://www.w3.org/TR/css-writing-modes-4/#writing-mode) of the box establishing the containing block.

fallback alignment

Some alignments can only be fulfilled in certain situations or are limited in how much space they can consume; for example, [space-between](#valdef-align-content-space-between) can only operate when there is more than one [alignment subject](#alignment-subject), and baseline alignment, once fulfilled, might not be enough to absorb all the excess space. In these cases a fallback alignment takes effect (as defined below) to fully consume the excess space.

## 4\. Alignment Keywords[](#alignment-values)

All of the alignment properties use a common set of keyword values, which are defined in this section. Keywords fall into three categories:

[positional alignment](#positional-values)

These keywords define alignment as an absolute position within the [alignment container](#alignment-container).

[baseline alignment](#baseline-values)

These keywords define alignment as a relationship among the baselines of multiple [alignment subjects](#alignment-subject) within an [alignment context](#shared-alignment-context).

[distributed alignment](#distribution-values)

These keywords define alignment as a distribution of space among [alignment subjects](#alignment-subject).

### 4.1. Positional Alignment: the [center](#valdef-self-position-center), [start](#valdef-self-position-start), [end](#valdef-self-position-end), [self-start](#valdef-self-position-self-start), [self-end](#valdef-self-position-self-end), [flex-start](#valdef-self-position-flex-start), [flex-end](#valdef-self-position-flex-end), [left](#valdef-justify-content-left), and [right](#valdef-justify-content-right) keywords[](#positional-values)

The positional alignment keywords specify a position for an [alignment subject](#alignment-subject) with respect to its [alignment container](#alignment-container).

Values have the following meanings:

center ([self](#self-alignment), [content](#content-distribution))

Centers the [alignment subject](#alignment-subject) within its [alignment container](#alignment-container).

start ([self](#self-alignment), [content](#content-distribution))

Aligns the [alignment subject](#alignment-subject) to be flush with the [alignment container](#alignment-container)’s start edge in the appropriate axis.

end ([self](#self-alignment), [content](#content-distribution))

Aligns the [alignment subject](#alignment-subject) to be flush with the [alignment container](#alignment-container)’s end edge in the appropriate axis.

self-start ([self](#self-alignment))

Aligns the [alignment subject](#alignment-subject) to be flush with the edge of the [alignment container](#alignment-container) corresponding to the alignment subject’s start side in the appropriate axis.

self-end ([self](#self-alignment))

Aligns the [alignment subject](#alignment-subject) to be flush with the edge of the [alignment container](#alignment-container) corresponding to the alignment subject’s end side in the appropriate axis.

flex-start ([self](#self-alignment), [content](#content-distribution))

**Only used in flex layout.** [\[CSS-FLEXBOX-1\]](#biblio-css-flexbox-1 "CSS Flexible Box Layout Module Level 1") Aligns the [alignment subject](#alignment-subject) to be flush with the edge of the [alignment container](#alignment-container) corresponding to the [flex container](https://www.w3.org/TR/css-flexbox-1/#flex-container)’s main-start or cross-start side, as appropriate.

When used outside of a [flex formatting context](https://www.w3.org/TR/css-flexbox-1/#flex-formatting-context), this value behaves as [start](#valdef-self-position-start). That is, on boxes that are not [flex items](https://www.w3.org/TR/css-flexbox-1/#flex-item) (or pretending to be flex items, such as when determining the [static position](https://www.w3.org/TR/css-position-3/#static-position) of an absolutely-positioned box that is a child of a [flex container](https://www.w3.org/TR/css-flexbox-1/#flex-container)), this value behaves as start when used in the [self-alignment properties](#self-alignment-properties), and on boxes that are not flex containers, this value behaves as start when used in the [content-distribution properties](#content-distribution-properties).

flex-end ([self](#self-alignment), [content](#content-distribution))

**Only used in flex layout.** Aligns the [alignment subject](#alignment-subject) to be flush with the edge of the [alignment container](#alignment-container) corresponding to the [flex container](https://www.w3.org/TR/css-flexbox-1/#flex-container)’s main-end or cross-end side, as appropriate.

When used outside of a [flex formatting context](https://www.w3.org/TR/css-flexbox-1/#flex-formatting-context), this value behaves as [end](#valdef-self-position-end). That is, on boxes that are not [flex items](https://www.w3.org/TR/css-flexbox-1/#flex-item) (or pretending to be flex items, such as when determining the [static position](https://www.w3.org/TR/css-position-3/#static-position) of an absolutely-positioned box that is a child of a [flex container](https://www.w3.org/TR/css-flexbox-1/#flex-container)), this value behaves as end when used in the [self-alignment properties](#self-alignment-properties), and on boxes that are not flex containers, this value behaves as end when used in the [content-distribution properties](#content-distribution-properties).

left (only justify-\*)

Aligns the [alignment subject](#alignment-subject) to be flush with the [alignment container](#alignment-container)’s [line-left](https://www.w3.org/TR/css3-writing-modes/#line-left) or [physical left](https://www.w3.org/TR/css-writing-modes-4/#physical-left) edge, whichever is in the appropriate axis.

If the property’s axis is not parallel with either left↔right axis, this value behaves as [start](#valdef-self-position-start). Currently, the only case where the property’s axis is not parallel with either left↔right axis is in a column flexbox.

right (only justify-\*)

Aligns the [alignment subject](#alignment-subject) to be flush with the [alignment container](#alignment-container)’s [line-right](https://www.w3.org/TR/css3-writing-modes/#line-right) or [physical right](https://www.w3.org/TR/css-writing-modes-4/#physical-right) edge, whichever is in the appropriate axis.

If the property’s axis is not parallel with either left↔right axis, this value behaves as [start](#valdef-self-position-start). Currently, the only case where the property’s axis is not parallel with either left↔right axis is in a column flexbox.

Two grammar terms are used to denote certain subsets of these values:

[<self-position>](#typedef-self-position)

This set is used by [justify-self](#propdef-justify-self) and [align-self](#propdef-align-self) to align the box within its [alignment container](#alignment-container), and also by [justify-items](#propdef-justify-items) and [align-items](#propdef-align-items) (to specify default values for justify-self and align-self).

<self-position> = center [|](https://www.w3.org/TR/css-values-4/#comb-one) start [|](https://www.w3.org/TR/css-values-4/#comb-one) end [|](https://www.w3.org/TR/css-values-4/#comb-one) self-start [|](https://www.w3.org/TR/css-values-4/#comb-one) self-end [|](https://www.w3.org/TR/css-values-4/#comb-one)
        flex-start [|](https://www.w3.org/TR/css-values-4/#comb-one) flex-end

[<content-position>](#typedef-content-position)

This set is used by [justify-content](#propdef-justify-content) and [align-content](#propdef-align-content) to align the box’s contents within itself.

<content-position> = center [|](https://www.w3.org/TR/css-values-4/#comb-one) start [|](https://www.w3.org/TR/css-values-4/#comb-one) end [|](https://www.w3.org/TR/css-values-4/#comb-one) flex-start [|](https://www.w3.org/TR/css-values-4/#comb-one) flex-end

Note: [left](#valdef-justify-content-left) and [right](#valdef-justify-content-right) are excluded from [<self-position>](#typedef-self-position) and [<content-position>](#typedef-content-position), despite being valid [positional alignment](#positional-alignment) values for [justify-content](#propdef-justify-content)/[justify-self](#propdef-justify-self)/[justify-items](#propdef-justify-items), because they are not allowed in the align-\* properties. They are instead explicitly included in the justify-\* properties’ grammars.

For most layout models (block, table, grid, etc), the justify-\* properties always align things in the [inline axis](https://www.w3.org/TR/css-writing-modes-4/#inline-axis), while the align-\* properties always align things in the [block axis](https://www.w3.org/TR/css-writing-modes-4/#block-axis).

Flexbox, on the other hand, has justify-\* align things in the [main axis](https://www.w3.org/TR/css-flexbox-1/#main-axis) and align-\* align things in the [cross axis](https://www.w3.org/TR/css-flexbox-1/#cross-axis). This depends on the value of [flex-direction](https://www.w3.org/TR/css-flexbox-1/#propdef-flex-direction): when flex-direction is [row](https://www.w3.org/TR/css-flexbox-1/#valdef-flex-direction-row) or [row-reverse](https://www.w3.org/TR/css-flexbox-1/#valdef-flex-direction-row-reverse), it matches the other layout modes ([inline axis](https://www.w3.org/TR/css-writing-modes-4/#inline-axis) with justify-\*, [block axis](https://www.w3.org/TR/css-writing-modes-4/#block-axis) with align-\*); when flex-direction is [column](https://www.w3.org/TR/css-flexbox-1/#valdef-flex-direction-column) or [column-reverse](https://www.w3.org/TR/css-flexbox-1/#valdef-flex-direction-column-reverse), it has the opposite correspondence.

Make it easier to understand the dual-axis nature of "start" and "end" wrt orthogonal flows.

### 4.2. Baseline Alignment: the [baseline](#valdef-justify-self-baseline) keyword and [first](#valdef-justify-self-first-baseline)/[last](#valdef-justify-self-last-baseline) modifiers[](#baseline-values)

See [CSS Writing Modes 3 § 4.1 Introduction to Baselines](https://www.w3.org/TR/css-writing-modes-3/#intro-baselines).

Baseline alignment is a form of positional alignment that aligns multiple [alignment subjects](#alignment-subject) within a [shared alignment context](#shared-alignment-context) (such as cells within a row) by matching up their [alignment baselines](#alignment-baseline). If the position of the alignment subjects within a [baseline-sharing group](#baseline-sharing-group) is not fully constrained by [baseline alignment](#baseline-alignment) (i.e., they could be shifted within their respective [alignment containers](#alignment-container) while maintaining baseline-alignment), they are [fallback-aligned](#fallback-alignment) insofar as possible while preserving their baseline alignment.

The baseline alignment keywords are represented with the [<baseline-position>](#typedef-baseline-position) grammar term:

<baseline-position> = \[ first [|](https://www.w3.org/TR/css-values-4/#comb-one) last \][?](https://www.w3.org/TR/css-values-4/#mult-opt) [&&](https://www.w3.org/TR/css-values-4/#comb-all) baseline

The [first](#valdef-justify-self-first-baseline) and [last](#valdef-justify-self-last-baseline) values give a box a baseline alignment preference: either “first” or “last”, respectively, defaulting to “first”.

Values have the following meanings:

baseline

Computes to [first baseline](#valdef-justify-self-first-baseline), defined below.

first baseline

Specifies participation in first-baseline alignment: aligns the [alignment baseline](#alignment-baseline) of the box’s [first baseline set](#first-baseline-set) with the corresponding baseline of its [baseline-sharing group](#baseline-sharing-group). See [§ 9.3 Aligning Boxes by Baseline](#align-by-baseline) for more details.

The [fallback alignment](#fallback-alignment) for [first baseline](#valdef-justify-self-first-baseline) is safe self-start (for [self-alignment](#self-align)) or safe start (for [content-distribution](#content-distribute)).

last baseline

Specifies participation in last-baseline alignment: aligns the [alignment baseline](#alignment-baseline) of the box’s [last baseline set](#last-baseline-set) with the corresponding baseline of its [baseline-sharing group](#baseline-sharing-group).̣ See [§ 9.3 Aligning Boxes by Baseline](#align-by-baseline) for more details.

The [fallback alignment](#fallback-alignment) for [last baseline](#valdef-justify-self-last-baseline) is safe self-end (for [self-alignment](#self-align)) or safe end (for [content-distribution](#content-distribute)).

When specified for [align-content](#propdef-align-content), these values trigger [baseline content-alignment](#baseline-content-alignment), shifting the content of the box within its content box, and may also affect the sizing of the box itself. See [§ 5.4 Baseline Content-Alignment](#baseline-align-content).

When specified for [align-self](#propdef-align-self)/[justify-self](#propdef-justify-self), these values trigger [baseline self-alignment](#baseline-self-alignment), shifting the entire box within its container, which may affect the sizing of its container. See [§ 6.4 Baseline Self-Alignment](#baseline-align-self).

When [baseline self-alignment](#baseline-self-alignment) is specified on a box, [content distribution](#content-distribute) is performed first, then the resulting box and its contents are self-aligned However, if the box also has [baseline content-alignment](#baseline-content-alignment) in the same axis or if its [content-distribution property](#content-distribution-properties) in the same axis is [normal](#valdef-justify-content-normal), its [used](https://www.w3.org/TR/css-cascade-5/#used-value) content-distribution property in that axis is [start](#valdef-self-position-start) or safe end for a [baseline alignment preference](#baseline-alignment-preference) of its baseline self-alignment of “first” or “last”, respectively.

Add example images here.

If a box does not belong to a [shared alignment context](#shared-alignment-context), then the [fallback alignment](#fallback-alignment) is used. For example, [align-content: baseline](#propdef-align-content) on a block box falls back to [start](#valdef-self-position-start) alignment. The fallback alignment is also used to align the [baseline-sharing group](#baseline-sharing-group) within its [alignment container](#alignment-container).

Note: Because they are equivalent, and [baseline](#valdef-justify-self-baseline) is shorter, the CSSOM serializes [first baseline](#valdef-justify-self-first-baseline) as baseline. See [CSSOM § 6.7.2 Serializing CSS Values](https://www.w3.org/TR/cssom-1/#serializing-css-values).

Note: For the somewhat-related [vertical-align](https://www.w3.org/TR/CSS2/visudet.html#propdef-vertical-align) property, due to inconsistent design decisions in CSS2.1, [baseline](#valdef-justify-self-baseline) is not equivalent to [first baseline](#valdef-justify-self-first-baseline) as an inline-level box’s [baseline alignment preference](#baseline-alignment-preference) depends on [display](https://www.w3.org/TR/css-display-3/#propdef-display). (E.g., [inline-block](https://www.w3.org/TR/css-display-4/#valdef-display-inline-block) uses its last baseline by default, while [inline-table](https://www.w3.org/TR/css-display-4/#valdef-display-inline-table) uses its first baseline by default.)

### 4.3. Distributed Alignment: the [stretch](#valdef-align-content-stretch), [space-between](#valdef-align-content-space-between), [space-around](#valdef-align-content-space-around), and [space-evenly](#valdef-align-content-space-evenly) keywords[](#distribution-values)

The distributed alignment values are used by [justify-content](#propdef-justify-content) and [align-content](#propdef-align-content) to disperse a container’s extra space among its [alignment subjects](#alignment-subject).

![space-between | space-around | space-evenly | stretch](https://www.w3.org/TR/css-align-3/images/distribute.svg)

The [distributed alignment](#distributed-alignment) values

When space cannot be distributed in this way, these values behave as their [fallback alignment](#fallback-alignment). Each distribution value has an associated default fallback alignment. (A future level of this module may allow the fallback alignment to be specified explicitly.)

space-between

The [alignment subjects](#alignment-subject) are evenly distributed in the [alignment container](#alignment-container). The first alignment subject is placed flush with the start edge of the alignment container, the last alignment subject is placed flush with the end edge of the alignment container, and the remaining alignment subjects are distributed so that the spacing between any two adjacent alignment subjects is the same.

![For example, given three items, all excess space is split in two and distributed: one half between the first two and one half between the last two items.](https://www.w3.org/TR/css-align-3/images/space-between.svg)

The default [fallback alignment](#fallback-alignment) for this value is safe flex-start. (For layout modes other than flex layout, [flex-start](#valdef-self-position-flex-start) is identical to [start](#valdef-self-position-start).)

space-around

The [alignment subjects](#alignment-subject) are evenly distributed in the [alignment container](#alignment-container), with a half-size space on either end. The alignment subjects are distributed so that the spacing between any two adjacent alignment subjects is the same, and the spacing before the first and after the last alignment subject is half the size of the other spacing.

![For example, given three items, all excess space is split into sixths and distributed: one sixth at the start, one at the end, and two sixths (one third) each between the first two and between the last two items.](https://www.w3.org/TR/css-align-3/images/space-around.svg)

The default [fallback alignment](#fallback-alignment) for this value is safe center.

space-evenly

The [alignment subjects](#alignment-subject) are evenly distributed in the [alignment container](#alignment-container), with a full-size space on either end. The alignment subjects are distributed so that the spacing between any two adjacent alignment subjects, before the first alignment subject, and after the last alignment subject is the same.

![For example, given three items, all excess space is split into fourths and distributed: to the start, to the end, to between the first two, and to between the last two items.](https://www.w3.org/TR/css-align-3/images/space-evenly.svg)

The default [fallback alignment](#fallback-alignment) for this value is safe center.

stretch

If the combined size of the [alignment subjects](#alignment-subject) is less than the size of the [alignment container](#alignment-container), any auto\-sized alignment subjects have their size increased equally (not proportionally), while still respecting the constraints imposed by [max-height](https://www.w3.org/TR/CSS2/visudet.html#propdef-max-height)/[max-width](https://www.w3.org/TR/CSS2/visudet.html#propdef-max-width) (or equivalent functionality), so that the combined size exactly fills the alignment container.

![For example, given three items, all excess space is split into thirds and distributed: one third to each item.](https://www.w3.org/TR/css-align-3/images/space-stretch.svg)

The default [fallback alignment](#fallback-alignment) for this value is [flex-start](#valdef-self-position-flex-start). (For layout modes other than flex layout, [flex-start](#valdef-self-position-flex-start) is identical to [start](#valdef-self-position-start).)

Note: This \`align-content/stretch\` definition applies to the [content-distribution properties](#content-distribution-properties); the [self-alignment properties](#self-alignment-properties) [justify-self](#propdef-justify-self)/[align-self](#propdef-align-self) have their own [stretch](#valdef-justify-self-stretch) value, which can grow _or shrink_ the [alignment subject](#alignment-subject) to ensure it exactly fits the [alignment container](#alignment-container).

These values are represented with the [<content-distribution>](#typedef-content-distribution) grammar term:

<content-distribution> = space-between [|](https://www.w3.org/TR/css-values-4/#comb-one) space-around [|](https://www.w3.org/TR/css-values-4/#comb-one) space-evenly [|](https://www.w3.org/TR/css-values-4/#comb-one) stretch

### 4.4. Overflow Alignment: the [safe](#valdef-overflow-position-safe) and [unsafe](#valdef-overflow-position-unsafe) keywords and scroll safety limits[](#overflow-values)

In some situations, aligning exactly as specified would cause the [alignment subject](#alignment-subject) to overflow its [alignment container](#alignment-container), possibly causing data loss. For example, if the contents of a sidebar are unconditionally centered, items large enough to overflow it might extend beyond the viewport’s start edge, which can’t be scrolled to.

The figure below illustrates the difference in “safe” versus “unsafe” centering, using a column flexbox as an example:

About

Authoritarianism

Blog

About

Authoritarianism

Blog

An example of "safe" (on the left) vs "unsafe" (on the right) centering, when the centered item is larger than its container.

The items in the figure on the left are centered unless they overflow, in which case all the overflow goes off the end edge, while those in the figure on the right are are all strictly centered, even if the one that is too long to fit overflows on both sides.

If the container was placed against the left edge of the page, the “safe” behavior would be more desirable, as the long item would be fully readable, rather than clipped by the left edge of the screen. In other circumstances, the “unsafe” centering behavior might be better, as it correctly centers all the items.

To control this situation, an overflow alignment mode can be explicitly specified. “Unsafe” alignment honors the specified alignment mode in overflow situations, even if it causes data loss, while “safe” alignment changes the alignment mode in overflow situations in an attempt to avoid data loss. The default behavior is to contain the alignment subject within the scrollable area, though at the time of writing this safety feature is not yet implemented.

<overflow-position> = unsafe [|](https://www.w3.org/TR/css-values-4/#comb-one) safe

safe

If the size of the [alignment subject](#alignment-subject) overflows the [alignment container](#alignment-container), the alignment subject is instead aligned as if the alignment mode were [flex-start](#valdef-self-position-flex-start). However for [absolutely positioned boxes](https://www.w3.org/TR/css-position-3/#absolute-position), see [§ 4.4.1.2 Self-Alignment for Absolutely Positioned Boxes](#auto-safety-position).

unsafe

Regardless of the relative sizes of the [alignment subject](#alignment-subject) and [alignment container](#alignment-container), the given alignment value is honored.

default (no value specified)

If the [overflow alignment](#overflow-alignment) isn’t explicitly specified, the [default overflow alignment](#overflow-position-default-overflow-alignment) is a blend of “safe” and “unsafe”. See [§ 4.4.1 Automatic Overflow Alignment Safety](#auto-safety) for details.

#### 4.4.1. Automatic Overflow Alignment Safety[](#auto-safety)

If no [overflow alignment](#overflow-alignment) mode is specified for a property, the default behavior lies somewhere between [safe](#valdef-overflow-position-safe) and [unsafe](#valdef-overflow-position-unsafe), and also varies by layout mode.

##### 4.4.1.1. Content Distribution for Scroll Containers[](#auto-safety-scroll)

In a [scrollable axis](https://drafts.csswg.org/css-overflow-3/#scrollable-axis) of a [scroll container](https://www.w3.org/TR/css-overflow-3/#scroll-container), the default [overflow alignment](#overflow-alignment) behavior for [content distribution](#content-distribute) is [unsafe](#valdef-overflow-position-unsafe). Non-[normal](#valdef-justify-content-normal) values of the [content-distribution properties](#content-distribution-properties) instead alter the [scrollable overflow area](https://www.w3.org/TR/css-overflow-3/#scrollable-overflow-region) in order to allow access to the overflowing content. See [§ 5.3 Alignment Overflow and Scroll Containers](#overflow-scroll-position).

##### 4.4.1.2. Self-Alignment for Absolutely Positioned Boxes[](#auto-safety-position)

For [absolutely positioned](https://www.w3.org/TR/css-position-3/#absolute-position) [alignment subjects](#alignment-subject) whose relevant [used](https://www.w3.org/TR/css-cascade-5/#used-value) [self-alignment property](#self-alignment-properties) is not [normal](#valdef-justify-self-normal), the [default](#overflow-position-default-overflow-alignment) and [safe](#valdef-overflow-position-safe) [overflow alignment](#overflow-alignment) behavior is as follows:

(For [absolutely-positioned](https://www.w3.org/TR/css-position-3/#absolute-position) [alignment subjects](#alignment-subject) that fail the above condition, see [§ 4.4.1.3 All Other Alignment](#auto-safety-default).)

Note: These rules constrain the position of the box to minimize overflow while honoring the specified alignment insofar as possible, and ensuring continuous behavior as the sizes of the boxes change.

Define “scrolls with the page” to be more precise, capturing any anchors that are either contained by or anchored into the [scrollable overflow area](https://www.w3.org/TR/css-overflow-3/#scrollable-overflow-region).

##### 4.4.1.3. All Other Alignment[](#auto-safety-default)

For all other elements:

1.  If the [alignment subject](#alignment-subject) overflows its [alignment container](#alignment-container), align as specified ([unsafe](#valdef-overflow-position-unsafe)).
    
2.  If the [alignment subject](#alignment-subject) would overflow the [scrollable overflow area](https://www.w3.org/TR/css-overflow-3/#scrollable-overflow-region) of its nearest ancestor [scroll container](https://www.w3.org/TR/css-overflow-3/#scroll-container), (thus extending into the “unscrollable” region), then its overflow in that direction is limited by biasing any remaining overflow to the opposite side.
    

It may not be Web-compatible to implement the “smart” default behavior (though we hope so, and believe it to be likely), so UAs should pass any feedback on this point to the WG. UAs that have not implemented the “smart” default behavior must behave as [safe](#valdef-overflow-position-safe) for [align-content](#propdef-align-content) on [block containers](https://www.w3.org/TR/css-display-4/#block-container) and [unsafe](#valdef-overflow-position-unsafe) otherwise.

## 5\. Content Distribution: Aligning a Box’s Contents Within Itself[](#content-distribution)

Content distribution controls alignment of the box’s content within its content box. It is specified by the content-distribution properties [align-content](#propdef-align-content) and [justify-content](#propdef-justify-content) (and their [place-content](#propdef-place-content) shorthand).

![Diagram showing that the alignment of the content within the element is affected.](https://www.w3.org/TR/css-align-3/images/content-example.svg)

### 5.1. The [justify-content](#propdef-justify-content) and [align-content](#propdef-align-content) Properties[](#align-justify-content)

Name:

align-content

[Value:](https://www.w3.org/TR/css-values/#value-defs)

normal [|](https://www.w3.org/TR/css-values-4/#comb-one) [<baseline-position>](#typedef-baseline-position) | [<content-distribution>](#typedef-content-distribution) | [<overflow-position>](#typedef-overflow-position)[?](https://www.w3.org/TR/css-values-4/#mult-opt) [<content-position>](#typedef-content-position)

[Initial:](https://www.w3.org/TR/css-cascade/#initial-values)

normal

[Applies to:](https://www.w3.org/TR/css-cascade/#applies-to)

block containers, multicol containers, flex containers, and grid containers

[Inherited:](https://www.w3.org/TR/css-cascade/#inherited-property)

no

[Percentages:](https://www.w3.org/TR/css-values/#percentages)

n/a

[Computed value:](https://www.w3.org/TR/css-cascade/#computed)

specified keyword(s)

[Canonical order:](https://www.w3.org/TR/cssom/#serializing-css-values)

per grammar

[Animation type:](https://www.w3.org/TR/web-animations/#animation-type)

discrete

Name:

justify-content

[Value:](https://www.w3.org/TR/css-values/#value-defs)

normal [|](https://www.w3.org/TR/css-values-4/#comb-one) [<content-distribution>](#typedef-content-distribution) | [<overflow-position>](#typedef-overflow-position)[?](https://www.w3.org/TR/css-values-4/#mult-opt) \[ [<content-position>](#typedef-content-position) | left | right \]

[Initial:](https://www.w3.org/TR/css-cascade/#initial-values)

normal

[Applies to:](https://www.w3.org/TR/css-cascade/#applies-to)

multicol containers, flex containers, and grid containers

[Inherited:](https://www.w3.org/TR/css-cascade/#inherited-property)

no

[Percentages:](https://www.w3.org/TR/css-values/#percentages)

n/a

[Computed value:](https://www.w3.org/TR/css-cascade/#computed)

specified keyword(s)

[Canonical order:](https://www.w3.org/TR/cssom/#serializing-css-values)

per grammar

[Animation type:](https://www.w3.org/TR/web-animations/#animation-type)

discrete

Aligns the contents of the box as a whole (as the [alignment subject](#alignment-subject)) within the box itself (as the [alignment container](#alignment-container)): along the inline/row/main axis of the box (for [justify-content](#propdef-justify-content)) or the block/column/cross axis of the box (for [align-content](#propdef-align-content)). Values other than normal are defined in [§ 4 Alignment Keywords](#alignment-values), above.

For all layout modes, the [alignment subject](#alignment-subject) and [alignment container](#alignment-container) both assume the [writing mode](https://www.w3.org/TR/css-writing-modes-4/#writing-mode) of the box the \*-content property is set on.

#### 5.1.1. Block Containers (Including Table Cells)[](#distribution-block)

[Alignment Container](#alignment-container)

The [block container](https://www.w3.org/TR/css-display-4/#block-container)’s content box.

[Alignment Subject(s)](#alignment-subject)

The entire contents of the block, as a unit.

[align-content](#propdef-align-content) Axis

The [block axis](https://www.w3.org/TR/css-writing-modes-4/#block-axis). If a [<content-distribution>](#typedef-content-distribution) is specified its [fallback alignment](#fallback-alignment) is used instead. If no [<overflow-position>](#typedef-overflow-position) is specified, and the [block container](https://www.w3.org/TR/css-display-4/#block-container) is not a [block-axis scroll container](https://drafts.csswg.org/css-overflow-3/#block-axis-scroll-container), then alignment is safe.

[justify-content](#propdef-justify-content) Axis

Does not apply to and has no effect on [block containers](https://www.w3.org/TR/css-display-4/#block-container).

[normal](#valdef-justify-content-normal) Behavior

All values other than [normal](#valdef-justify-content-normal) force the block container to [establish an independent formatting context](https://www.w3.org/TR/css-display-4/#establish-an-independent-formatting-context).

For table cells, the behavior of [align-content: normal](#propdef-align-content) depends on the computed value of [vertical-align](https://www.w3.org/TR/CSS2/visudet.html#propdef-vertical-align): [top](https://www.w3.org/TR/css-inline-3/#valdef-baseline-shift-top) makes it behave as [start](#valdef-self-position-start) and [bottom](https://www.w3.org/TR/css-inline-3/#valdef-baseline-shift-bottom) makes it behave as [end](#valdef-self-position-end); otherwise [middle](https://www.w3.org/TR/css-inline-3/#valdef-alignment-baseline-middle) makes it behave as [center](#valdef-self-position-center), and all other values make it behave as [baseline](#valdef-justify-self-baseline). [\[CSS2\]](#biblio-css2 "Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification")

[normal](#valdef-justify-content-normal) otherwise behaves as [start](#valdef-self-position-start).

#### 5.1.2. Multicol Containers[](#distribution-multicol)

[Alignment Container](#alignment-container)

The [multi-column container](https://www.w3.org/TR/css-multicol-1/#multi-column-container)’s content box.

[Alignment Subject(s)](#alignment-subject)

The column boxes, with any spacing inserted between column boxes added to the relevant column gaps.

[align-content](#propdef-align-content) Axis

The [block axis](https://www.w3.org/TR/css-writing-modes-4/#block-axis), treating the column boxes (and any column-spanning elements), as a singular unit. If a [<content-distribution>](#typedef-content-distribution) is specified its [fallback alignment](#fallback-alignment) is used instead.

[justify-content](#propdef-justify-content) Axis

The [inline axis](https://www.w3.org/TR/css-writing-modes-4/#inline-axis).

[normal](#valdef-justify-content-normal) Behavior

[normal](#valdef-justify-content-normal) behaves as [stretch](#valdef-align-content-stretch); both are defined as described in the column-sizing rules of [\[CSS-MULTICOL-1\]](#biblio-css-multicol-1 "CSS Multi-column Layout Module Level 1").

In the case of multi-column containers with a non-[auto](https://www.w3.org/TR/css-multicol-2/#valdef-column-width-auto) [column-width](https://www.w3.org/TR/css-multicol-2/#propdef-column-width), [justify-content](#propdef-justify-content) values other than [normal](#valdef-justify-content-normal) or [stretch](#valdef-align-content-stretch) cause the columns to take their specified column-width rather than stretching to fill the container. The column boxes are then aligned as specified by justify-content.

#### 5.1.3. Flex Containers[](#distribution-flex)

[Alignment Container](#alignment-container)

The [flex container](https://www.w3.org/TR/css-flexbox-1/#flex-container)’s content box.

[Alignment Subject(s)](#alignment-subject)

For [justify-content](#propdef-justify-content), the [flex items](https://www.w3.org/TR/css-flexbox-1/#flex-item) in each [flex line](https://www.w3.org/TR/css-flexbox-1/#flex-line).

For [align-content](#propdef-align-content), the [flex lines](https://www.w3.org/TR/css-flexbox-1/#flex-line). Note, this only has an effect on [multi-line flex containers](https://www.w3.org/TR/css-flexbox-1/#multi-line-flex-container).

[align-content](#propdef-align-content) Axis

The [cross axis](https://www.w3.org/TR/css-flexbox-1/#cross-axis).

[justify-content](#propdef-justify-content) Axis

The [justify-content](#propdef-justify-content) property applies along the [main axis](https://www.w3.org/TR/css-flexbox-1/#main-axis), but since stretching in the main axis is controlled by [flex](https://www.w3.org/TR/css-flexbox-1/#propdef-flex), [stretch](#valdef-align-content-stretch) behaves as [flex-start](#valdef-self-position-flex-start).

[normal](#valdef-justify-content-normal) Behavior

[normal](#valdef-justify-content-normal) behaves as [stretch](#valdef-align-content-stretch).

See [\[CSS-FLEXBOX-1\]](#biblio-css-flexbox-1 "CSS Flexible Box Layout Module Level 1") for details.

#### 5.1.4. Grid Containers[](#distribution-grid)

[Alignment Container](#alignment-container)

The [grid container](https://www.w3.org/TR/css-grid-2/#grid-container)’s content box.

[Alignment Subject(s)](#alignment-subject)

The [grid tracks](https://www.w3.org/TR/css-grid-2/#grid-track) in the appropriate axis, with any spacing inserted between tracks added to the relevant [gutters](https://www.w3.org/TR/css-align-3/#gutter), and treating [collapsed gutters](https://www.w3.org/TR/css-grid-1/#collapsed-gutter) as a single opportunity for space insertion.

[align-content](#propdef-align-content) Axis

The [block axis](https://www.w3.org/TR/css-writing-modes-4/#block-axis), aligning the [grid rows](https://www.w3.org/TR/css-grid-2/#grid-row).

[justify-content](#propdef-justify-content) Axis

The [inline axis](https://www.w3.org/TR/css-writing-modes-4/#inline-axis), aligning the [grid columns](https://www.w3.org/TR/css-grid-2/#grid-column).

[normal](#valdef-justify-content-normal) Behavior

[normal](#valdef-justify-content-normal) behaves as [stretch](#valdef-align-content-stretch).

See [\[CSS-GRID-1\]](#biblio-css-grid-1 "CSS Grid Layout Module Level 1") for details.

### 5.2. Content-Distribution Shorthand: the [place-content](#propdef-place-content) property[](#place-content)

Name:

place-content

[Value:](https://www.w3.org/TR/css-values/#value-defs)

[<'align-content'>](#propdef-align-content) [<'justify-content'>](#propdef-justify-content)[?](https://www.w3.org/TR/css-values-4/#mult-opt)

[Initial:](https://www.w3.org/TR/css-cascade/#initial-values)

normal

[Applies to:](https://www.w3.org/TR/css-cascade/#applies-to)

see individual properties

[Inherited:](https://www.w3.org/TR/css-cascade/#inherited-property)

no

[Percentages:](https://www.w3.org/TR/css-values/#percentages)

n/a

[Computed value:](https://www.w3.org/TR/css-cascade/#computed)

see individual properties

[Canonical order:](https://www.w3.org/TR/cssom/#serializing-css-values)

per grammar

[Animation type:](https://www.w3.org/TR/web-animations/#animation-type)

discrete

This [shorthand property](https://www.w3.org/TR/css-cascade-5/#shorthand-property) sets both the [align-content](#propdef-align-content) and [justify-content](#propdef-justify-content) properties in one declaration. The first value is assigned to align-content. The second value is assigned to justify-content; if omitted, it is copied from the first value, unless that value is a [<baseline-position>](#typedef-baseline-position) in which case it is defaulted to [start](#valdef-self-position-start).

### 5.3. Alignment Overflow and Scroll Containers[](#overflow-scroll-position)

When the [content-distribution properties](#content-distribution-properties) are set in a [scrollable axis](https://drafts.csswg.org/css-overflow-3/#scrollable-axis) of a [scroll container](https://www.w3.org/TR/css-overflow-3/#scroll-container) with an overflowing [alignment subject](#alignment-subject), they reduce the clipping of the [unreachable scrollable overflow region](https://www.w3.org/TR/css-overflow-3/#unreachable-scrollable-overflow-region) just enough to ensure that alignment subject can be scrolled into its [start](#valdef-self-position-start)\-aligned position.

For example, if a scrollable flex container is set to [justify-content: flex-end](#propdef-justify-content) (or justify-content: flex-start with [flex-flow: row-reverse](https://www.w3.org/TR/css-flexbox-1/#propdef-flex-flow)), its [in-flow](https://www.w3.org/TR/css-display-4/#in-flow) content will be initially positioned to align the main-end edge of its content to the main-end edge of the flex container, and its content will appear to overflow its main-start edge. However, the viewer will be able to scroll _up_ to view the overflowing in-flow content, just as if justify-content: flex-start had been specified.

![](https://www.w3.org/TR/css-align-3/images/scroll-align-padding.jpg)

Issue: Replace this image with a proper SVG.

Note: The [alignment subject](#alignment-subject) is not necessarily identical to the [scrollable overflow area](https://www.w3.org/TR/css-overflow-3/#scrollable-overflow-region): content overflowing the alignment subject—​such as an [out-of-flow](https://www.w3.org/TR/css-display-4/#out-of-flow) box—​grows the scrollable overflow area but not the alignment subject. Thus an [end](#valdef-self-position-end)\-aligned [scroll container](https://www.w3.org/TR/css-overflow-3/#scroll-container) might not be initially scrolled all the way to the bottom, and positioned content can still be clipped if it is further into the [unreachable scrollable overflow region](https://www.w3.org/TR/css-overflow-3/#unreachable-scrollable-overflow-region) than the [in-flow](https://www.w3.org/TR/css-display-4/#in-flow) content forming the alignment subject.

![](https://www.w3.org/TR/css-align-3/images/scroll-align-overflow.jpg)

Overflow is not part of the [alignment subject](#alignment-subject), even for a [scroll container](https://www.w3.org/TR/css-overflow-3/#scroll-container).

Replace this image too.

Note: The presence of scrollbars can change the size of the [scroll container’s](https://www.w3.org/TR/css-overflow-3/#scroll-container) [content box](https://www.w3.org/TR/css-box-4/#content-box)—​and thus the size of the [alignment container](#alignment-container) and/or [alignment subject](#alignment-subject).

### 5.4. Baseline Content-Alignment[](#baseline-align-content)

The content of boxes participating in row-like layout contexts ([shared alignment contexts](#shared-alignment-context)) can be baseline-aligned to each other. Baseline content-alignment effectively increases the **padding** on the box to align the [alignment baseline](#alignment-baseline) of its contents with that of other baseline-aligned boxes in its [baseline-sharing group](#baseline-sharing-group).

Note: Implementations that do not fully support [baseline content-alignment](#baseline-content-alignment) in applicable [formatting contexts](https://www.w3.org/TR/css-display-4/#formatting-context) [must not parse the baseline values as valid](https://www.w3.org/TR/css/#partial). Lack of test coverage in [WPT](https://web-platform-tests.org/) is not an excuse for shipping broken implementations. <—​Currently browsers are parsing it but not doing anything useful with it. :( https://github.com/w3c/csswg-drafts/issues/13421 -->

[Baseline content-alignment](#baseline-content-alignment) can only apply if the [align-content](#propdef-align-content) axis is parallel with the box’s [block axis](https://www.w3.org/TR/css-writing-modes-4/#block-axis) (i.e. it does not apply to “column” [flex containers](https://www.w3.org/TR/css-flexbox-1/#flex-container)); otherwise the [fallback alignment](#fallback-alignment) is used.

The set of boxes that participate in [baseline content-alignment](#baseline-content-alignment) depends on the layout model:

Table Cells:

A ([non-replaced](https://www.w3.org/TR/css-display-4/#non-replaced)) table cell participates in first/last [baseline content-alignment](#baseline-content-alignment) in its startmost/endmost row if its inline axis is parallel to that of the table itself and its computed [align-content](#propdef-align-content) is [first baseline](#valdef-justify-self-first-baseline) ([last baseline](#valdef-justify-self-last-baseline)).

Note: [Baseline content-alignment](#baseline-content-alignment) of cells sharing a column is not supported; however this may be added in a future level if there is sufficient demand and implementer interest.

Flex Items:

A [non-replaced](https://www.w3.org/TR/css-display-4/#non-replaced) [flex item](https://www.w3.org/TR/css-flexbox-1/#flex-item) participates in first/last [baseline content-alignment](#baseline-content-alignment) in its flex line if its computed [align-content](#propdef-align-content) is [first baseline](#valdef-justify-self-first-baseline)/[last baseline](#valdef-justify-self-last-baseline) and its [inline axis](https://www.w3.org/TR/css-writing-modes-4/#inline-axis) is parallel to the [main axis](https://www.w3.org/TR/css-flexbox-1/#main-axis).

Grid Items:

A [non-replaced](https://www.w3.org/TR/css-display-4/#non-replaced) [grid item](https://www.w3.org/TR/css-grid-2/#grid-item) participates in first/last [baseline content-alignment](#baseline-content-alignment) in its startmost/endmost row or column (whichever is parallel to its [inline axis](https://www.w3.org/TR/css-writing-modes-4/#inline-axis)) and if its computed [align-content](#propdef-align-content) is [first baseline](#valdef-justify-self-first-baseline)/[last baseline](#valdef-justify-self-last-baseline).

Additionally, in order to participate in [baseline content-alignment](#baseline-content-alignment) it must also have a coordinated self-alignment preference, to guarantee that the box lines up the relevant edge with other boxes in its [baseline-sharing group](#baseline-sharing-group). That is, the box’s [start](https://www.w3.org/TR/css-writing-modes-3/#start) ([end](https://www.w3.org/TR/css-writing-modes-3/#end)) [margin edge](https://www.w3.org/TR/css-box-4/#margin-edge) must be intended to align—​and actually align—​to the corresponding [edge](https://www.w3.org/TR/css-box-4/#box-box-edge) of its [containing block](https://www.w3.org/TR/css-display-4/#containing-block) when its [baseline alignment preference](#baseline-alignment-preference) is “first” (“last”). It otherwise takes its [fallback alignment](#fallback-alignment).

When is a self-alignment preference coordinated?

A box’s [start](https://www.w3.org/TR/css-writing-modes-3/#start) [margin edge](https://www.w3.org/TR/css-box-4/#margin-edge) is aligned to the corresponding edge of its [containing block](https://www.w3.org/TR/css-display-4/#containing-block) and it has a [coordinated self-alignment preference](#coordinated-self-alignment-preference) for a “first” [baseline alignment preference](#baseline-alignment-preference) when, in the relevant axis:

*   There are no auto [margins](https://www.w3.org/TR/css-box-4/#margin) and the relevant [self-alignment property](#self-alignment-properties) either is or aligns identically to [stretch](#valdef-align-self-stretch) or [self-start](#valdef-self-position-self-start); or
    
*   There is only an auto [end](https://www.w3.org/TR/css-writing-modes-3/#end)\-edge [margin](https://www.w3.org/TR/css-box-4/#margin), which absorbs any positive free space and disables the effects of any [self-alignment property](#self-alignment-properties), _and_ its [margin box](https://www.w3.org/TR/css-box-4/#margin-box) does not overflow its [containing block](https://www.w3.org/TR/css-display-4/#containing-block) under circumstances that would cause it to effectively end-align instead (such as having a containing block with an opposite [writing mode](https://www.w3.org/TR/css-writing-modes-4/#writing-mode)).
    

A box’s [end](https://www.w3.org/TR/css-writing-modes-3/#end) [margin edge](https://www.w3.org/TR/css-box-4/#margin-edge) is aligned to the corresponding edge of its [containing block](https://www.w3.org/TR/css-display-4/#containing-block) and it has a [coordinated self-alignment preference](#coordinated-self-alignment-preference) for a “last” [baseline alignment preference](#baseline-alignment-preference) when, in the relevant axis:

*   There are no auto [margins](https://www.w3.org/TR/css-box-4/#margin) and the relevant [self-alignment property](#self-alignment-properties) either is or aligns identically to [self-end](#valdef-self-position-self-end) _and_ its self-alignment is what would result from an [unsafe](#valdef-overflow-position-unsafe) [overflow alignment](#overflow-alignment); or
    
*   There is only an auto [start](https://www.w3.org/TR/css-writing-modes-3/#start)\-edge [margin](https://www.w3.org/TR/css-box-4/#margin), which absorbs any positive free space and disables the effects of any [self-alignment property](#self-alignment-properties) _and_ its [margin box](https://www.w3.org/TR/css-box-4/#margin-box) does not overflow its [containing block](https://www.w3.org/TR/css-display-4/#containing-block) under circumstances that would cause it to effectively start-align instead.
    

See [§ 9.3 Aligning Boxes by Baseline](#align-by-baseline) for additional details. [Baseline content-alignment](#baseline-content-alignment) can increase the intrinsic size of the box.

## 6\. Self-Alignment: Aligning the Box Within Its Parent[](#self-alignment)

Self-alignment controls alignment of the box within its containing block. It is specified by the self-alignment properties [align-self](#propdef-align-self) and [justify-self](#propdef-justify-self) (and their [place-self](#propdef-place-self) shorthand).

![Diagram showing that the alignment of the element within its containing block is affected.](https://www.w3.org/TR/css-align-3/images/self-example.svg)

### 6.1. Inline-Axis (or Main-Axis) Self-Alignment: the [justify-self](#propdef-justify-self) property[](#justify-self-property)

Name:

justify-self

[Value:](https://www.w3.org/TR/css-values/#value-defs)

auto [|](https://www.w3.org/TR/css-values-4/#comb-one) [<overflow-position>](#typedef-overflow-position)[?](https://www.w3.org/TR/css-values-4/#mult-opt) \[ normal | [<self-position>](#typedef-self-position) | left | right \]  
| stretch | [<baseline-position>](#typedef-baseline-position)

[Initial:](https://www.w3.org/TR/css-cascade/#initial-values)

auto

[Applies to:](https://www.w3.org/TR/css-cascade/#applies-to)

block-level boxes, absolutely-positioned boxes, and grid items

[Inherited:](https://www.w3.org/TR/css-cascade/#inherited-property)

no

[Percentages:](https://www.w3.org/TR/css-values/#percentages)

n/a

[Computed value:](https://www.w3.org/TR/css-cascade/#computed)

specified keyword(s)

[Canonical order:](https://www.w3.org/TR/cssom/#serializing-css-values)

per grammar

[Animation type:](https://www.w3.org/TR/web-animations/#animation-type)

discrete

Justifies the box (as the [alignment subject](#alignment-subject)) within its containing block (as the [alignment container](#alignment-container)) along the inline/row/main axis of the alignment container: the box’s outer edges are aligned within its alignment container [as described by its alignment value](#alignment-values). Values have the following meanings:

auto

Behaves as [normal](#valdef-justify-self-normal) if the box has no parent, or when determining the actual position of an absolutely positioned box. It behaves as the computed [justify-items](#propdef-justify-items) value of the parent box (minus any [legacy](#valdef-justify-items-legacy) keywords) otherwise (including when determining the _static_ position of an absolutely positioned box).

normal

Represents the “default” alignment for the layout mode. Its behavior depends on the layout mode, as described below.

[<self-position>](#typedef-self-position) | left | right

Shifts the position of the box as specified, see [§ 4 Alignment Keywords](#alignment-values).

[<overflow-position>](#typedef-overflow-position)

Controls how the box aligns when it overflows, see [§ 4.4 Overflow Alignment: the safe and unsafe keywords and scroll safety limits](#overflow-values).

stretch

When the box’s [computed](https://www.w3.org/TR/css-cascade-5/#computed-value) [width](https://www.w3.org/TR/css-sizing-3/#propdef-width)/[height](https://www.w3.org/TR/css-sizing-3/#propdef-height) (as appropriate to the axis) is [auto](https://www.w3.org/TR/css-sizing-3/#valdef-width-auto) and neither of its margins (in the appropriate axis) are auto, sets the box’s used size to the length necessary to make its outer size as close to filling the [alignment container](#alignment-container) as possible while still respecting the constraints imposed by [min-height](https://www.w3.org/TR/CSS2/visudet.html#propdef-min-height)/[min-width](https://www.w3.org/TR/CSS2/visudet.html#propdef-min-width)/[max-height](https://www.w3.org/TR/CSS2/visudet.html#propdef-max-height)/[max-width](https://www.w3.org/TR/CSS2/visudet.html#propdef-max-width).

Unless otherwise specified, this value falls back to [flex-start](#valdef-self-position-flex-start) generally, and to [self-start](#valdef-self-position-self-start) or [self-end](#valdef-self-position-self-end) if the box has also specified [first baseline](#first-baseline-set) or [last baseline](#last-baseline-set) [baseline content-alignment](#baseline-content-alignment) (respectively) in the same axis.

Note: The [stretch](#valdef-justify-self-stretch) keyword can cause elements to shrink, to fit their container.

[<baseline-position>](#typedef-baseline-position)

Indicates [baseline self-alignment](#baseline-self-alignment), as defined in [§ 4.2 Baseline Alignment: the baseline keyword and first/last modifiers](#baseline-values), [§ 6.4 Baseline Self-Alignment](#baseline-align-self), and [§ 9 Baseline Alignment Details](#baseline-rules).

Values other than [stretch](#valdef-justify-self-stretch) cause a [width](https://www.w3.org/TR/css-sizing-3/#propdef-width)/[height](https://www.w3.org/TR/css-sizing-3/#propdef-height) of [auto](https://www.w3.org/TR/css-sizing-3/#valdef-width-auto) to be treated as [fit-content](https://www.w3.org/TR/css-sizing-3/#valdef-width-fit-content).

Note: auto margins, because they effectively adjust the size of the margin area, take precedence over [justify-self](#propdef-justify-self).

#### 6.1.1. Block-Level Boxes[](#justify-block)

[justify-self](#propdef-justify-self) Axis

The block’s [containing block’s](https://www.w3.org/TR/css-display-4/#containing-block) [inline axis](https://www.w3.org/TR/css-writing-modes-4/#inline-axis), generally. The [static-position containing block](https://www.w3.org/TR/css-position-3/#static-position-containing-block)’s inline axis when determining the [static position](https://www.w3.org/TR/css-position-3/#static-position).

[Alignment Container](#alignment-container)

The box’s [containing block](https://www.w3.org/TR/css-display-4/#containing-block), except that for block-level elements that establish a [block formatting context](https://www.w3.org/TR/css-display-4/#block-formatting-context) and are placed next to a float, the [alignment container](#alignment-container) is reduced by the space taken up by the float, assuming the [writing mode](https://www.w3.org/TR/css-writing-modes-4/#writing-mode) of the containing block.

[Alignment Subject](#alignment-subject)

The block’s margin box, assuming the [writing mode](https://www.w3.org/TR/css-writing-modes-4/#writing-mode) of the block.

[normal](#valdef-justify-self-normal) Behavior

The box lays out according to the default rules for block layout (see [CSS2.1§10.3](https://www.w3.org/TR/CSS2/visudet.html#Computing_widths_and_margins)).

Other Details

The [automatic size](https://www.w3.org/TR/css-sizing-3/#automatic-size) of a [block-level box](https://www.w3.org/TR/css-display-4/#block-level-box) whose [justify-self](#propdef-justify-self) is not [normal](#valdef-justify-self-normal) is equivalent to [fit-content](https://www.w3.org/TR/css-sizing-4/#valdef-column-width-fit-content) (rather than e.g. [stretch](https://www.w3.org/TR/css-sizing-3/#valdef-width-stretch), as is typical for a [non-replaced](https://www.w3.org/TR/css-display-4/#non-replaced) block-level box). Additionally, in terms of CSS2.1 block-level formatting [\[CSS2\]](#biblio-css2 "Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification"), the rules for “over-constrained” computations in [section 10.3.3](https://www.w3.org/TR/CSS2/visudet.html#blockwidth) are ignored in favor of alignment as specified here and the used value of the margin properties are therefore not adjusted to correct for the over-constraint.

This property does not apply to floats.

Anonymous block boxes always behave as [normal](#valdef-justify-self-normal).

The effect of these rules is that an auto-sized block-level table, for example, can be aligned while still having side margins. If the table’s max-content size is narrower than its containing block, then it is shrink-wrapped to that size and aligned as specified. If the table’s max-content size is wider, then it fills its containing block, and the margins provide appropriate spacing from the containing block edges.

#### 6.1.2. Absolutely-Positioned Boxes[](#justify-abspos)

This section describes the effect of [justify-self](#propdef-justify-self) on how the margin box of an absolutely-positioned box is positioned with respect to its (absolute-positioning) containing block.

[justify-self](#propdef-justify-self) Axis

The block’s containing block’s [inline axis](https://www.w3.org/TR/css-writing-modes-4/#inline-axis).

[Alignment Container](#alignment-container)

The box’s [containing block](https://www.w3.org/TR/css-display-4/#containing-block), as modified by the [inset properties](https://www.w3.org/TR/css-logical-1/#inset-properties) ([top](https://www.w3.org/TR/css-position-3/#propdef-top)/[right](https://www.w3.org/TR/css-position-3/#propdef-right)/[bottom](https://www.w3.org/TR/css-position-3/#propdef-bottom)/[left](https://www.w3.org/TR/css-position-3/#propdef-left)), assuming the [writing mode](https://www.w3.org/TR/css-writing-modes-4/#writing-mode) of the containing block. If both inset properties in the relevant axis are [auto](https://www.w3.org/TR/css-position-3/#valdef-top-auto), then use the box’s [static-position rectangle](#static-position-rectangle) (i.e. set both insets to the box’s [static position](https://www.w3.org/TR/css-position-3/#static-position)) and assume the writing mode of the [static-position containing block](https://www.w3.org/TR/css-position-3/#static-position-containing-block).

[Alignment Subject](#alignment-subject)

The box’s margin box, assuming the [writing mode](https://www.w3.org/TR/css-writing-modes-4/#writing-mode) of the box.

[normal](#valdef-justify-self-normal) Behavior

Behaves as [stretch](#valdef-justify-self-stretch) or [start](#valdef-self-position-start), depending on the type of box. See [CSS Positioned Layout 3 § 4 Absolute Positioning Layout Model](https://www.w3.org/TR/css-position-3/#abspos-layout).

Other Details

In terms of CSS2.1 formatting [\[CSS2\]](#biblio-css2 "Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification"), the rules for “over-constrained” computations in [section 10.3.7](https://www.w3.org/TR/CSS2/visudet.html#abs-non-replaced-width) are ignored in favor of alignment as specified here, and the used value of the [inset properties](https://www.w3.org/TR/css-logical-1/#inset-properties) are not adjusted to correct for the over-constraint.

Values other than [stretch](#valdef-justify-self-stretch) or [normal](#valdef-justify-self-normal) cause [non-replaced absolutely-positioned boxes](https://www.w3.org/TR/CSS2/visudet.html#abs-non-replaced-width) to use [fit-content sizing](https://www.w3.org/TR/css-sizing-3/#fit-content-size) for calculating [auto](https://www.w3.org/TR/css-sizing-3/#valdef-width-auto) sizes in the affected axis.

Note that [stretch](#valdef-justify-self-stretch) _does_ cause replaced absolutely-positioned boxes to fill their containing block just as non-replaced ones do.

Note: If only one inset property is [auto](https://www.w3.org/TR/css-position-3/#valdef-top-auto), the computations in [CSS2 section 10.3.7](https://www.w3.org/TR/CSS2/visudet.html#abs-non-replaced-width) fully determine its size and position, and [justify-self](#propdef-justify-self) has no effect. (If both are auto, then the box is statically-positioned, see above, and can be aligned within the [static-position rectangle](#static-position-rectangle).)

#### 6.1.3. Table Cells[](#justify-cell)

This property does not apply to table cells, because their position and size is fully constrained by table layout.

#### 6.1.4. Flex Items[](#justify-flex)

This property does not apply to [flex items](https://www.w3.org/TR/css-flexbox-1/#flex-item), because there is more than one item in the [main axis](https://www.w3.org/TR/css-flexbox-1/#main-axis). See [flex](https://www.w3.org/TR/css-flexbox-1/#propdef-flex) for stretching and [justify-content](#propdef-justify-content) for main-axis alignment. [\[CSS-FLEXBOX-1\]](#biblio-css-flexbox-1 "CSS Flexible Box Layout Module Level 1")

#### 6.1.5. Grid Items[](#justify-grid)

[justify-self](#propdef-justify-self) Axis

The grid’s [inline axis](https://www.w3.org/TR/css-writing-modes-4/#inline-axis).

[Alignment Container](#alignment-container)

The [grid item’s](https://www.w3.org/TR/css-grid-2/#grid-item) [grid area](https://www.w3.org/TR/css-grid-2/#grid-area), assuming the [writing mode](https://www.w3.org/TR/css-writing-modes-4/#writing-mode) of the [grid container](https://www.w3.org/TR/css-grid-2/#grid-container).

[Alignment Subject](#alignment-subject)

The [grid item’s](https://www.w3.org/TR/css-grid-2/#grid-item) margin box, assuming the [writing mode](https://www.w3.org/TR/css-writing-modes-4/#writing-mode) of the grid item.

[normal](#valdef-justify-self-normal) Behavior

Sizes as either [stretch](#valdef-justify-self-stretch) (typical [non-replaced elements](https://www.w3.org/TR/css-display-4/#non-replaced)) or [start](#valdef-self-position-start) (typical [replaced elements](https://www.w3.org/TR/css-display-4/#replaced-element)); see [Grid Item Sizing](https://www.w3.org/TR/css-grid-1/#grid-item-sizing) in [\[CSS-GRID-1\]](#biblio-css-grid-1 "CSS Grid Layout Module Level 1"). The resulting box is then start-aligned.

See [\[CSS-GRID-1\]](#biblio-css-grid-1 "CSS Grid Layout Module Level 1") for details.

### 6.2. Block-Axis (or Cross-Axis) Self-Alignment: the [align-self](#propdef-align-self) property[](#align-self-property)

Name:

align-self

[Value:](https://www.w3.org/TR/css-values/#value-defs)

auto [|](https://www.w3.org/TR/css-values-4/#comb-one) [<overflow-position>](#typedef-overflow-position)[?](https://www.w3.org/TR/css-values-4/#mult-opt) \[ normal | [<self-position>](#typedef-self-position) \]  
| stretch | [<baseline-position>](#typedef-baseline-position)

[Initial:](https://www.w3.org/TR/css-cascade/#initial-values)

auto

[Applies to:](https://www.w3.org/TR/css-cascade/#applies-to)

flex items, grid items, and absolutely-positioned boxes

[Inherited:](https://www.w3.org/TR/css-cascade/#inherited-property)

no

[Percentages:](https://www.w3.org/TR/css-values/#percentages)

n/a

[Computed value:](https://www.w3.org/TR/css-cascade/#computed)

specified keyword(s)

[Canonical order:](https://www.w3.org/TR/cssom/#serializing-css-values)

per grammar

[Animation type:](https://www.w3.org/TR/web-animations/#animation-type)

discrete

Aligns the box (as the [alignment subject](#alignment-subject)) within its containing block (as the [alignment container](#alignment-container)) along the block/column/cross axis of the alignment container: the box’s outer edges are aligned within its alignment container [as described by its alignment value](#alignment-values). Values have the following meanings:

auto

Behaves as [normal](#valdef-align-self-normal) if the box has no parent, or when determining the actual position of an absolutely positioned box. It behaves as the computed [align-items](#propdef-align-items) value of the parent box (minus any [legacy](#valdef-justify-items-legacy) keywords) otherwise (including when determining the _static_ position of an absolutely positioned box).

normal

Represents the “default” alignment for the layout mode, as defined below.

[<self-position>](#typedef-self-position)

Shifts the position of the box as specified, see [§ 4 Alignment Keywords](#alignment-values).

[<overflow-position>](#typedef-overflow-position)

Controls how the box aligns when it overflows, see [§ 4.4 Overflow Alignment: the safe and unsafe keywords and scroll safety limits](#overflow-values).

stretch

As defined for [justify-self](#propdef-justify-self) in [§ 6.1 Inline-Axis (or Main-Axis) Self-Alignment: the justify-self property](#justify-self-property).

[<baseline-position>](#typedef-baseline-position)

Indicates [baseline self-alignment](#baseline-self-alignment), as defined in [§ 4.2 Baseline Alignment: the baseline keyword and first/last modifiers](#baseline-values), [§ 6.4 Baseline Self-Alignment](#baseline-align-self), and [§ 9 Baseline Alignment Details](#baseline-rules).

Note: auto margins, because they effectively adjust the size of the margin area, take precedence over [align-self](#propdef-align-self).

#### 6.2.1. Block-Level Boxes[](#align-block)

The [align-self](#propdef-align-self) property does not apply to block-level boxes (including floats), because there is more than one item in the [block axis](https://www.w3.org/TR/css-writing-modes-4/#block-axis).

#### 6.2.2. Absolutely-Positioned Boxes[](#align-abspos)

This section describes the effect of [align-self](#propdef-align-self) on how the margin box of an absolutely-positioned box is positioned with respect to its (absolute-positioning) containing block.

[align-self](#propdef-align-self) Axis

The box’s [containing block’s](https://www.w3.org/TR/css-display-4/#containing-block) [block axis](https://www.w3.org/TR/css-writing-modes-4/#block-axis), generally. The [static-position containing block](https://www.w3.org/TR/css-position-3/#static-position-containing-block)’s block axis when determining the [static position](https://www.w3.org/TR/css-position-3/#static-position).

[Alignment Container](#alignment-container)

The box’s [containing block](https://www.w3.org/TR/css-display-4/#containing-block), as modified by the [inset properties](https://www.w3.org/TR/css-logical-1/#inset-properties) ([top](https://www.w3.org/TR/css-position-3/#propdef-top)/[right](https://www.w3.org/TR/css-position-3/#propdef-right)/[bottom](https://www.w3.org/TR/css-position-3/#propdef-bottom)/[left](https://www.w3.org/TR/css-position-3/#propdef-left)), assuming the [writing mode](https://www.w3.org/TR/css-writing-modes-4/#writing-mode) of the containing block. If both inset properties in the relevant axis are [auto](https://www.w3.org/TR/css-position-3/#valdef-top-auto), then use the box’s [static-position rectangle](#static-position-rectangle) (i.e. set both insets to the box’s [static position](https://www.w3.org/TR/css-position-3/#static-position)) and assume the writing mode of the [static-position containing block](https://www.w3.org/TR/css-position-3/#static-position-containing-block).

[Alignment Subject](#alignment-subject)

The box’s margin box, assuming the [writing mode](https://www.w3.org/TR/css-writing-modes-4/#writing-mode) of the box.

[normal](#valdef-align-self-normal) Behavior

Behaves as [stretch](#valdef-align-self-stretch) or [start](#valdef-self-position-start), depending on the type of box. See [CSS Positioned Layout 3 § 4 Absolute Positioning Layout Model](https://www.w3.org/TR/css-position-3/#abspos-layout).

Other Details

In terms of CSS2.1 formatting [\[CSS2\]](#biblio-css2 "Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification"), the rules for "over-constrained" computations in [section 10.6.4](https://www.w3.org/TR/CSS2/visudet.html#abs-non-replaced-height) are ignored in favor of alignment as specified here and the used value of the [inset properties](https://www.w3.org/TR/css-logical-1/#inset-properties) are not adjusted to correct for the over-constraint.

Values other than [stretch](#valdef-justify-self-stretch) or [normal](#valdef-justify-self-normal) cause [non-replaced absolutely-positioned boxes](https://www.w3.org/TR/CSS2/visudet.html#abs-non-replaced-height) to use [fit-content sizing](https://www.w3.org/TR/css-sizing-3/#fit-content-size) for calculating [auto](https://www.w3.org/TR/css-sizing-3/#valdef-width-auto) sizes in the affected axis.

Note that [stretch](#valdef-justify-self-stretch) does cause replaced absolutely-positioned boxes to fill their containing block just as non-replaced ones do.

Note: If only one inset property is [auto](https://www.w3.org/TR/css-position-3/#valdef-top-auto), the computations in [CSS2 section 10.6.4](https://www.w3.org/TR/CSS2/visudet.html#abs-non-replaced-height) fully determine its size and position, and [align-self](#propdef-align-self) has no effect. (If both are auto, then the box is statically-positioned, see above, and can be aligned within the [static-position rectangle](#static-position-rectangle).)

#### 6.2.3. Table Cells[](#align-cell)

This property does not apply to table cells, because their position and size is fully constrained by table layout.

#### 6.2.4. Flex Items[](#align-flex)

[align-self](#propdef-align-self) Axis

The [flex container’s](https://www.w3.org/TR/css-flexbox-1/#flex-container) [cross axis](https://www.w3.org/TR/css-flexbox-1/#cross-axis).

[Alignment Container](#alignment-container)

The [flex line](https://www.w3.org/TR/css-flexbox-1/#flex-line) the [flex item](https://www.w3.org/TR/css-flexbox-1/#flex-item) is in, assuming the [writing mode](https://www.w3.org/TR/css-writing-modes-4/#writing-mode) of the [flex container](https://www.w3.org/TR/css-flexbox-1/#flex-container).

[Alignment Subject](#alignment-subject)

The [flex item’s](https://www.w3.org/TR/css-flexbox-1/#flex-item) margin box, assuming the [writing mode](https://www.w3.org/TR/css-writing-modes-4/#writing-mode) of the flex item.

[normal](#valdef-align-self-normal) Behavior

Behaves as [stretch](#valdef-align-self-stretch).

See [\[CSS-FLEXBOX-1\]](#biblio-css-flexbox-1 "CSS Flexible Box Layout Module Level 1") for details.

#### 6.2.5. Grid Items[](#align-grid)

[align-self](#propdef-align-self) Axis

The grid’s [block axis](https://www.w3.org/TR/css-writing-modes-4/#block-axis).

[Alignment Container](#alignment-container)

The [grid item’s](https://www.w3.org/TR/css-grid-2/#grid-item) [grid area](https://www.w3.org/TR/css-grid-2/#grid-area), assuming the [writing mode](https://www.w3.org/TR/css-writing-modes-4/#writing-mode) of the [grid container](https://www.w3.org/TR/css-grid-2/#grid-container).

[Alignment Subject](#alignment-subject)

The [grid item’s](https://www.w3.org/TR/css-grid-2/#grid-item) margin box, assuming the [writing mode](https://www.w3.org/TR/css-writing-modes-4/#writing-mode) of the grid item.

[normal](#valdef-align-self-normal) Behavior

Sizes as either [stretch](#valdef-justify-self-stretch) (typical [non-replaced elements](https://www.w3.org/TR/css-display-4/#non-replaced)) or [start](#valdef-self-position-start) (typical [replaced elements](https://www.w3.org/TR/css-display-4/#replaced-element)); see [Grid Item Sizing](https://www.w3.org/TR/css-grid-1/#grid-item-sizing) in [\[CSS-GRID-1\]](#biblio-css-grid-1 "CSS Grid Layout Module Level 1"). The resulting box is then start-aligned.

See [\[CSS-GRID-1\]](#biblio-css-grid-1 "CSS Grid Layout Module Level 1") for details.

### 6.3. Self-Alignment Shorthand: the [place-self](#propdef-place-self) property[](#place-self-property)

Name:

place-self

[Value:](https://www.w3.org/TR/css-values/#value-defs)

[<'align-self'>](#propdef-align-self) [<'justify-self'>](#propdef-justify-self)[?](https://www.w3.org/TR/css-values-4/#mult-opt)

[Initial:](https://www.w3.org/TR/css-cascade/#initial-values)

auto

[Applies to:](https://www.w3.org/TR/css-cascade/#applies-to)

see individual properties

[Inherited:](https://www.w3.org/TR/css-cascade/#inherited-property)

no

[Percentages:](https://www.w3.org/TR/css-values/#percentages)

n/a

[Computed value:](https://www.w3.org/TR/css-cascade/#computed)

see individual properties

[Canonical order:](https://www.w3.org/TR/cssom/#serializing-css-values)

per grammar

[Animation type:](https://www.w3.org/TR/web-animations/#animation-type)

discrete

This [shorthand property](https://www.w3.org/TR/css-cascade-5/#shorthand-property) sets both the [align-self](#propdef-align-self) and [justify-self](#propdef-justify-self) properties in a single declaration. The first value is assigned to align-self. The second value is assigned to justify-self; if omitted, it is copied from the first value.

### 6.4. Baseline Self-Alignment[](#baseline-align-self)

Boxes participating in row-like layout contexts ([shared alignment contexts](#shared-alignment-context)) can be baseline-aligned to each other. Baseline self-alignment effectively increases the **margins** on the box to align its [alignment baseline](#alignment-baseline) with that of other baseline-aligned boxes in its [baseline-sharing group](#baseline-sharing-group).

The set of boxes that participate in [baseline self-alignment](#baseline-self-alignment) depends on the layout model:

Flex Items:

A [flex item](https://www.w3.org/TR/css-flexbox-1/#flex-item) participates in first/last [baseline self-alignment](#baseline-self-alignment) in its flex line if its computed [align-self](#propdef-align-self) is [first baseline](#valdef-justify-self-first-baseline)/[last baseline](#valdef-justify-self-last-baseline). See [\[CSS-FLEXBOX-1\]](#biblio-css-flexbox-1 "CSS Flexible Box Layout Module Level 1") for details.

Grid Items:

A [grid item](https://www.w3.org/TR/css-grid-2/#grid-item) participates in first/last [baseline self-alignment](#baseline-self-alignment) in its startmost/endmost row or column if its [align-self](#propdef-align-self) or [justify-self](#propdef-justify-self) property (respectively) computes to [first baseline](#valdef-justify-self-first-baseline)/[last baseline](#valdef-justify-self-last-baseline).

See [§ 9.3 Aligning Boxes by Baseline](#align-by-baseline) for exact details. [Baseline self-alignment](#baseline-self-alignment) can increase the intrinsic size contribution of the box.

### 6.5. Effects on Sizing of Absolutely Positioned Boxes with Static-Position Insets[](#abspos-sizing)

For absolutely-positioned boxes whose inline-axis offsets are both [auto](https://www.w3.org/TR/css-position-3/#valdef-top-auto), the [available space](https://www.w3.org/TR/css-sizing-3/#available) for calculating the [inline size](https://www.w3.org/TR/css-sizing-3/#inline-size) is also affected by alignment.

Note: In [\[CSS2\]](#biblio-css2 "Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification"), the [available space](https://www.w3.org/TR/css-sizing-3/#available) is keyed off of the [direction](https://www.w3.org/TR/css-writing-modes-3/#propdef-direction) property of the [static-position containing block](https://www.w3.org/TR/css-position-3/#static-position-containing-block). (See [CSS2§10.3.7](https://www.w3.org/TR/CSS2/visudet.html#abs-non-replaced-width) and [CSS2§10.3.8](https://www.w3.org/TR/CSS2/visudet.html#abs-replaced-width).) Fundamentally these rules set one of the [auto](https://www.w3.org/TR/css-position-3/#valdef-top-auto) insets (by default, the start-edge inset) to the corresponding edge of the [static-position rectangle](#static-position-rectangle) and the other to the corresponding edge of the [containing block](https://www.w3.org/TR/css-display-4/#containing-block) (i.e. set the inset to zero). Just as the [self-alignment properties](#self-alignment-properties) replace the containing block’s direction lookup for placement, they also replace this lookup for sizing, as specified here.

Thus, when interpreting the rules in [CSS2§10.3.7](https://www.w3.org/TR/CSS2/visudet.html#abs-non-replaced-width) and [CSS2§10.3.8](https://www.w3.org/TR/CSS2/visudet.html#abs-replaced-width), wherever the [direction](https://www.w3.org/TR/css-writing-modes-3/#propdef-direction) property of the [static-position containing block](https://www.w3.org/TR/css-position-3/#static-position-containing-block) is referenced, instead reference the value of the [align-self](#propdef-align-self) or [justify-self](#propdef-justify-self) property (whichever is defined to apply to the relevant axis), treating left-equivalent alignment as defined for [ltr](https://www.w3.org/TR/css-writing-modes-4/#valdef-direction-ltr) and right-equivalent alignment as defined for [rtl](https://www.w3.org/TR/css-writing-modes-4/#valdef-direction-rtl). Treat [normal](#valdef-justify-self-normal) as [start](#valdef-self-position-start) and any [distributed alignment](#distributed-alignment) value as its [fallback alignment](#fallback-alignment).

In the case of [center](#valdef-self-position-center) alignment, the [available space](https://www.w3.org/TR/css-sizing-3/#available) for the box is double the distance between the center of the [static-position rectangle](#static-position-rectangle) and the closest edge of the [containing block](https://www.w3.org/TR/css-display-4/#containing-block) in the relevant axis.

the start edge of the static-position rectangle and the end edge of the containing block.
End alignment sizes into the space between
the end edge of the static-position rectangle and the start edge of the containing block.
Center alignment sizes into the space between
the two edges of the static-position rectangle.](https://www.w3.org/TR/css-align-3/images/place-content-abspos.svg)

Instead of always sizing within the available space between the [inline-start](https://www.w3.org/TR/css-writing-modes-4/#inline-start) [static position](https://www.w3.org/TR/css-position-3/#static-position) and the [inline-end](https://www.w3.org/TR/css-writing-modes-4/#inline-end) [containing block](https://www.w3.org/TR/css-display-4/#containing-block) edge as specified in [\[CSS2\]](#biblio-css2 "Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification"), an absolutely-positioned element with [auto](https://www.w3.org/TR/css-position-3/#valdef-top-auto) insets will be sized with reference to the [static-position rectangle](#static-position-rectangle)’s edge(s) _most appropriate_ to its specified [self-alignment](#self-align).

For example, when the box’s [containing block](https://www.w3.org/TR/css-display-4/#containing-block)’s [direction](https://www.w3.org/TR/css-writing-modes-3/#propdef-direction) is [ltr](https://www.w3.org/TR/css-writing-modes-4/#valdef-direction-ltr) and its own [justify-self](#propdef-justify-self) is [end](#valdef-self-position-end), apply the rules for direction: rtl; when direction is [rtl](https://www.w3.org/TR/css-writing-modes-4/#valdef-direction-rtl) and [justify-content](#propdef-justify-content) is [space-between](#valdef-align-content-space-between), apply the rules for direction: rtl; etc. For the case of [center](#valdef-self-position-center) (or its equivalent), set both sides to match the [static position](https://www.w3.org/TR/css-position-3/#static-position). The absolutely-positioned box is then sized into the resulting space (floored at zero).

Note: The [align-self](#propdef-align-self)/[justify-self](#propdef-justify-self) properties can also modify additional aspects of sizing: for example, justify-self: stretch will replace “shrink-to-fit” ([fit-content](https://www.w3.org/TR/css-sizing-3/#fit-content-size)) sizing into the [available space](https://www.w3.org/TR/css-sizing-3/#available) with [stretch-fit sizing](https://www.w3.org/TR/css-sizing-3/#stretch-fit-size) (consuming all of the available space). This is an independent effect from the available space adjustment here.

Note: This only affect how [available space](https://www.w3.org/TR/css-sizing-3/#available) is calculated for sizing the absolutely-positioned box; its alignment is as specified in previous sections.

## 7\. Default Alignment[](#default-alignment)

The [align-items](#propdef-align-items) and [justify-items](#propdef-justify-items) properties (and their [place-items](#propdef-place-items) shorthand) set the default [align-self](#propdef-align-self) and [justify-self](#propdef-justify-self) behavior of the element’s child boxes.

![Diagram showing that the alignment of grid items within the element is affected.](https://www.w3.org/TR/css-align-3/images/items-example.svg)

### 7.1. Inline-Axis (or Main-Axis) Default Alignment: the [justify-items](#propdef-justify-items) property[](#justify-items-property)

Name:

justify-items

[Value:](https://www.w3.org/TR/css-values/#value-defs)

normal [|](https://www.w3.org/TR/css-values-4/#comb-one) stretch | [<baseline-position>](#typedef-baseline-position) | [<overflow-position>](#typedef-overflow-position)[?](https://www.w3.org/TR/css-values-4/#mult-opt) \[ [<self-position>](#typedef-self-position) | left | right \] | legacy | legacy [&&](https://www.w3.org/TR/css-values-4/#comb-all) \[ left | right | center \]

[Initial:](https://www.w3.org/TR/css-cascade/#initial-values)

legacy

[Applies to:](https://www.w3.org/TR/css-cascade/#applies-to)

[all elements](https://www.w3.org/TR/css-pseudo/#generated-content "Includes ::before and ::after pseudo-elements.")

[Inherited:](https://www.w3.org/TR/css-cascade/#inherited-property)

no

[Percentages:](https://www.w3.org/TR/css-values/#percentages)

n/a

[Computed value:](https://www.w3.org/TR/css-cascade/#computed)

specified keyword(s), except for [legacy](#valdef-justify-items-legacy) (see prose)

[Canonical order:](https://www.w3.org/TR/cssom/#serializing-css-values)

per grammar

[Animation type:](https://www.w3.org/TR/web-animations/#animation-type)

discrete

This property specifies the default [justify-self](#propdef-justify-self) for all of the child boxes (including anonymous boxes) participating in this box’s formatting context. Values have the following meanings:

legacy

This keyword causes the value to effectively inherit into descendants.

If the [legacy](#valdef-justify-items-legacy) keyword appears on its own (without an accompanying [left](#valdef-justify-content-left), [right](#valdef-justify-content-right), or [center](#valdef-self-position-center) keyword): if the [inherited value](https://www.w3.org/TR/css-cascade-5/#inherited-value) of justify-items includes the legacy keyword, this value computes to the inherited value; otherwise it computes to normal.

When justify-self:auto references the value of [justify-items](#propdef-justify-items), only the alignment keyword, not the [legacy](#valdef-justify-items-legacy) keyword, is referenced by it. It exists to implement the legacy alignment behavior of HTML’s `<center>` element and `align` attribute.

Other values have no special handling and are merely referenced by [justify-self](#propdef-justify-self).

### 7.2. Block-Axis (or Cross-Axis) Default Alignment: the [align-items](#propdef-align-items) property[](#align-items-property)

Name:

align-items

[Value:](https://www.w3.org/TR/css-values/#value-defs)

normal [|](https://www.w3.org/TR/css-values-4/#comb-one) stretch | [<baseline-position>](#typedef-baseline-position) | [<overflow-position>](#typedef-overflow-position)[?](https://www.w3.org/TR/css-values-4/#mult-opt) [<self-position>](#typedef-self-position)

[Initial:](https://www.w3.org/TR/css-cascade/#initial-values)

normal

[Applies to:](https://www.w3.org/TR/css-cascade/#applies-to)

[all elements](https://www.w3.org/TR/css-pseudo/#generated-content "Includes ::before and ::after pseudo-elements.")

[Inherited:](https://www.w3.org/TR/css-cascade/#inherited-property)

no

[Percentages:](https://www.w3.org/TR/css-values/#percentages)

n/a

[Computed value:](https://www.w3.org/TR/css-cascade/#computed)

specified keyword(s)

[Canonical order:](https://www.w3.org/TR/cssom/#serializing-css-values)

per grammar

[Animation type:](https://www.w3.org/TR/web-animations/#animation-type)

discrete

This property specifies the default [align-self](#propdef-align-self) for all of the child boxes (including anonymous boxes) participating in this box’s formatting context.

Values have no special handling and are merely referenced by [align-self](#propdef-align-self).

### 7.3. Default Alignment Shorthand: the [place-items](#propdef-place-items) property[](#place-items-property)

Name:

place-items

[Value:](https://www.w3.org/TR/css-values/#value-defs)

[<'align-items'>](#propdef-align-items) [<'justify-items'>](#propdef-justify-items)[?](https://www.w3.org/TR/css-values-4/#mult-opt)

[Initial:](https://www.w3.org/TR/css-cascade/#initial-values)

see individual properties

[Applies to:](https://www.w3.org/TR/css-cascade/#applies-to)

[all elements](https://www.w3.org/TR/css-pseudo/#generated-content "Includes ::before and ::after pseudo-elements.")

[Inherited:](https://www.w3.org/TR/css-cascade/#inherited-property)

no

[Percentages:](https://www.w3.org/TR/css-values/#percentages)

n/a

[Computed value:](https://www.w3.org/TR/css-cascade/#computed)

see individual properties

[Canonical order:](https://www.w3.org/TR/cssom/#serializing-css-values)

per grammar

[Animation type:](https://www.w3.org/TR/web-animations/#animation-type)

discrete

This [shorthand property](https://www.w3.org/TR/css-cascade-5/#shorthand-property) sets both the [align-items](#propdef-align-items) and [justify-items](#propdef-justify-items) properties in a single declaration. The first value is assigned to align-items. The second value is assigned to justify-items; if omitted, it is copied from the first value.

## 8\. Gaps Between Boxes[](#gaps)

This section has been moved to [CSS Gaps 1 § 2 Gaps Between Boxes](https://www.w3.org/TR/css-gaps-1/#gaps).

## 9\. Baseline Alignment Details[](#baseline-rules)

Boxes in a [baseline-sharing group](#baseline-sharing-group) are aligned to each other using their [alignment baselines](#alignment-baseline). For example, in horizontal writing modes, specifying [align-content: baseline](#propdef-align-content) on table cells in the same row will align the baselines of their [first formatted lines](https://www.w3.org/TR/selectors-3/#first-formatted-line0). This section defines exactly how baseline alignment is performed in consideration of the myriad baselines and [writing modes](https://www.w3.org/TR/css-writing-modes-4/#writing-mode) that exist in internationalized modern CSS.

A baseline set is a set of baselines (alphabetic, central, etc.) associated with a common baseline table. Typically, a typesetting tradition will use only one of these, but different writing systems use different baselines, and mixing writing systems can result in using more than one within a single line. Refer to [CSS Writing Modes 3 § 4.1 Introduction to Baselines](https://www.w3.org/TR/css-writing-modes-3/#intro-baselines) for more information on baselines and writing modes.

### 9.1. Determining the Baselines of a Box[](#baseline-export)

Each box, for a given axis, has potentially a first baseline set (and last baseline set) that nominally corresponds to the [baseline set](#baseline-set) of the first/last line of text within the box. The alignment baseline, which is the baseline used to align the box in its [alignment context](#shared-alignment-context), is one of the baselines in its baseline set, usually the dominant baseline associated with the shared alignment context. (See the [dominant-baseline](https://www.w3.org/TR/css-inline-3/#propdef-dominant-baseline) and [alignment-baseline](https://www.w3.org/TR/css-inline-3/#propdef-alignment-baseline) properties in [\[CSS-INLINE-3\]](#biblio-css-inline-3 "CSS Inline Layout Module Level 3").)

The first and last [baseline sets](#baseline-set) of a box are determined differently based on the layout model, as follows:

line box

The first/last [baseline set](#baseline-set) of a line box is [generated](#generate-baselines) from the dominant baseline and the font settings of its [root inline box](https://www.w3.org/TR/css-inline-3/#root-inline-box).

block containers

The first/last [baseline set](#baseline-set) of a [block container](https://www.w3.org/TR/css-display-4/#block-container) is taken from the first/last [in-flow](https://www.w3.org/TR/css-display-4/#in-flow) line box in the block container or the first/last in-flow block-level child in the block container that contributes a set of first/last baselines, whichever comes first/last. If there is no such line box or child, then the block container has no baseline set.

However, for legacy reasons if its [baseline-source](https://www.w3.org/TR/css-inline-3/#propdef-baseline-source) is [auto](https://www.w3.org/TR/css-inline-3/#valdef-baseline-source-auto) (the [initial value](https://www.w3.org/TR/css-cascade-5/#initial-value)) a [block-level](https://www.w3.org/TR/css-display-4/#block-level) or [inline-level](https://www.w3.org/TR/css-display-4/#inline-level) [block container](https://www.w3.org/TR/css-display-4/#block-container) that is a [block-axis scroll container](https://drafts.csswg.org/css-overflow-3/#block-axis-scroll-container) always has a [last baseline set](#last-baseline-set), whose baselines all correspond to its [block-end](https://www.w3.org/TR/css-writing-modes-4/#block-end) [margin edge](https://www.w3.org/TR/css-box-4/#margin-edge).

multi-column containers

The first [baseline set](#baseline-set) of a [multi-column container](https://www.w3.org/TR/css-multicol-1/#multi-column-container) is the first baseline set of the [column](https://tc39.es/ecma426/#sec-terms-and-definitions-colun) or [multi-column spanner](https://www.w3.org/TR/css-multicol-2/#multi-column-spanner) with the highest ([block-start](https://www.w3.org/TR/css-writing-modes-4/#block-start)–most) baseline corresponding to the multi-column container’s [alignment baseline](#alignment-baseline). If there is no such line box or child, then the multi-column container has no first baseline set.

The last [baseline set](#baseline-set) is analogous, but uses the _last_ baseline set and _lowest_ ([block-end](https://www.w3.org/TR/css-writing-modes-4/#block-end)–most) baseline.

tables

The first/last [baseline set](#baseline-set) of a table box is the first/last baseline set of its first/last row (after any reordering of table row group box).

When finding the first/last baseline set of an inline-block, any baselines contributed by table boxes must be skipped. (This quirk is a legacy behavior from [\[CSS2\]](#biblio-css2 "Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification").)

table rows

The first [baseline set](#baseline-set) of a table row box is taken from the first available of:

1.  If any cells in the row participate in first [baseline alignment](#baseline-alignment) along the table’s [inline axis](https://www.w3.org/TR/css-writing-modes-4/#inline-axis), [generate](#generate-baselines) a [baseline set](#baseline-set) from their shared [alignment baseline](#alignment-baseline) and the row’s [first available font](https://www.w3.org/TR/css-fonts-4/#first-available-font), after alignment has been performed.
    
2.  Otherwise, if any cells in the row participate in last [baseline alignment](#baseline-alignment) along the table’s [inline axis](https://www.w3.org/TR/css-writing-modes-4/#inline-axis), [generate](#generate-baselines) from _that_ [alignment baseline](#alignment-baseline).
    
3.  Otherwise, if the row is not empty, [synthesize](#synthesize-baseline) from the lowest and highest [content edges](https://www.w3.org/TR/css-box-4/#content-edge) of all the cells in the row. See [CSS 2 § 17.5.3 Table height algorithms](https://www.w3.org/TR/CSS2/tables.html#height-layout).
    
4.  Otherwise, use the [block-start](https://www.w3.org/TR/css-writing-modes-4/#block-start) [content edge](https://www.w3.org/TR/css-box-4/#content-edge) of the table row box itself as the [alignment baseline](#alignment-baseline).
    

For this purpose, any table cell that spans multiple rows is ignored if it’s span does not start in this row; except that for step 2, it’s ignored if its span does not _end_ in this row.

_Last baselines are analogous (with “first”/“last” and “start”/“end” inverted)._

Spanning cells participate only in the first/last row that they span for the purpose of [first baseline](#valdef-justify-self-first-baseline)/[last baseline](#valdef-justify-self-last-baseline).

flex containers

See [Flex Baselines](https://www.w3.org/TR/css3-flexbox/#flex-baselines) in [\[CSS-FLEXBOX-1\]](#biblio-css-flexbox-1 "CSS Flexible Box Layout Module Level 1").

grid containers

See [Grid Baselines](https://www.w3.org/TR/css3-grid-layout/#grid-baselines) in [\[CSS-GRID-1\]](#biblio-css-grid-1 "CSS Grid Layout Module Level 1").

To generate baselines for a box from a single baseline, use the baseline table from the font settings and [first available font](https://www.w3.org/TR/css-fonts-4/#first-available-font) of that box, and align that baseline set to the given single baseline.

If a box that participates in [baseline alignment](#baseline-alignment) has no [baseline set](#baseline-set), then its [alignment baseline](#alignment-baseline) is [synthesized](#synthesize-baseline) according to the rules of the [formatting context](https://www.w3.org/TR/css-display-4/#formatting-context) in which it participates. To synthesize baselines from a rectangle (or two parallel lines), synthesize the alphabetic baseline from the [line-under](https://www.w3.org/TR/css-writing-modes-4/#line-under) line, and the central baseline by averaging the positions of the two edges or lines. See [CSS Inline Layout 3 § A Synthesizing Alignment Metrics](https://www.w3.org/TR/css-inline-3/#baseline-synthesis) for rules on synthesizing additional baselines.

Note: The edges used to [synthesize](#synthesize-baseline) baselines from a box depend on their [formatting context](https://www.w3.org/TR/css-display-4/#formatting-context): inline-level boxes synthesize from their margin edges [\[CSS-INLINE-3\]](#biblio-css-inline-3 "CSS Inline Layout Module Level 3"), table cells synthesize from their content edges [\[CSS2\]](#biblio-css2 "Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification"), and grid and flex items synthesize from their border edges [\[CSS-GRID-1\]](#biblio-css-grid-1 "CSS Grid Layout Module Level 1") [\[CSS-FLEXBOX-1\]](#biblio-css-flexbox-1 "CSS Flexible Box Layout Module Level 1").

In general, the [writing mode](https://www.w3.org/TR/css-writing-modes-4/#writing-mode) of the box, shape, or other object being aligned is used to determine the [line-under](https://www.w3.org/TR/css-writing-modes-4/#line-under) and [line-over](https://www.w3.org/TR/css-writing-modes-4/#line-over) edges for synthesis. However, when that writing mode’s [block flow direction](https://www.w3.org/TR/css-writing-modes-4/#block-flow-direction) is parallel to the axis of the [alignment context](#shared-alignment-context), an axis-compatible writing mode must be assumed:

*   If the box establishing the [alignment context](#shared-alignment-context) has a [block flow direction](https://www.w3.org/TR/css-writing-modes-4/#block-flow-direction) that is orthogonal to the axis of the alignment context, use its [writing mode](https://www.w3.org/TR/css-writing-modes-4/#writing-mode).
    
*   Otherwise:
    
    *   If the box’s own [writing mode](https://www.w3.org/TR/css-writing-modes-4/#writing-mode) is vertical, assume [horizontal-tb](https://www.w3.org/TR/css-writing-modes-4/#valdef-writing-mode-horizontal-tb).
        
    *   If the box’s own [writing mode](https://www.w3.org/TR/css-writing-modes-4/#writing-mode) is horizontal, assume [vertical-lr](https://www.w3.org/TR/css-writing-modes-4/#valdef-writing-mode-vertical-lr) if [direction](https://www.w3.org/TR/css-writing-modes-3/#propdef-direction) is [ltr](https://www.w3.org/TR/css-writing-modes-4/#valdef-direction-ltr) and [vertical-rl](https://www.w3.org/TR/css-writing-modes-4/#valdef-writing-mode-vertical-rl) if direction is [rtl](https://www.w3.org/TR/css-writing-modes-4/#valdef-direction-rtl).
        

For the purposes of finding the baselines of a box, it and all its [in-flow](https://www.w3.org/TR/css-display-4/#in-flow) descendants that are [block-axis scroll containers](https://drafts.csswg.org/css-overflow-3/#block-axis-scroll-container) must be considered as if scrolled to their initial scroll position. Additionally, if the position of a [scroll container](https://www.w3.org/TR/css-overflow-3/#scroll-container)’s first/last baseline is outside its border edge, that baseline’s position is clamped to the border edge.

### 9.2. Baseline Alignment Grouping[](#baseline-terms)

A baseline-sharing group is composed of boxes that participate in baseline alignment together. This is possible only if they both:

*   Share an [alignment context](#shared-alignment-context) along an axis perpendicular to the axis they’re being baseline-aligned in. (For example, grid items with [align-self: baseline](#propdef-align-self) are baseline-aligning along the grid’s block axis, and therefore participate with other items in their row.)
*   Have [compatible baseline alignment preferences](#compatible-baseline-alignment-preferences) (i.e., the baselines that want to align are on the same side of the alignment context).

Note: Boxes participating in [baseline content-alignment](#baseline-content-alignment) and boxes participating in [baseline self-alignment](#baseline-self-alignment) can be part of the same [baseline-sharing group](#baseline-sharing-group), and can thus align to each other. The difference between the two methods is in where extra space is inserted to perform the alignment (inside or outside the box’s own border).

Boxes share an alignment context, along a particular axis, and established by a particular box, when they are:

*   table cells in the same row, along the table’s row (inline) axis, established by the row box
*   grid items in the same row, along the grid’s row (inline) axis, established by the [grid container](https://www.w3.org/TR/css-grid-2/#grid-container)
*   grid items in the same column, along the grid’s column (block) axis, established by the [grid container](https://www.w3.org/TR/css-grid-2/#grid-container)
*   flex items in the same flex line, along the flex container’s main axis, established by the [flex container](https://www.w3.org/TR/css-flexbox-1/#flex-container)

Note: Conceptually, the inline-level boxes in a line box also share a self-alignment context and participate in a baseline-sharing group; however they only baseline-align in response to the [vertical-align](https://www.w3.org/TR/CSS2/visudet.html#propdef-vertical-align) property, not any of the properties defined in this module. See [\[CSS-INLINE-3\]](#biblio-css-inline-3 "CSS Inline Layout Module Level 3").

If a box spans multiple [shared alignment contexts](#shared-alignment-context), then it participates in first/last baseline alignment within its start-most/end-most shared alignment context along that axis. For example, a table cell spanning three rows participates in [first-baseline alignment](#first-baseline-alignment) with the table cells in the first row that it spans, or alternatively in [last-baseline alignment](#last-baseline-alignment) with the table cells in the last row that it spans.

The [baseline alignment preferences](#baseline-alignment-preference) of two boxes in a [baseline-sharing group](#baseline-sharing-group) are compatible if they have:

*   the same [block flow direction](https://www.w3.org/TR/css-writing-modes-4/#block-flow-direction) and same [baseline alignment preference](#baseline-alignment-preference)
    
*   opposite [block flow direction](https://www.w3.org/TR/css-writing-modes-4/#block-flow-direction) and opposite [baseline alignment preference](#baseline-alignment-preference)
    

### 9.3. Aligning Boxes by Baseline[](#align-by-baseline)

Given a set of [alignment subjects](#alignment-subject) and their baselines that all belong to a single [baseline-sharing group](#baseline-sharing-group), the alignment subjects are baseline-aligned as follows:

1.  Generate the [baseline-sharing group](#baseline-sharing-group)’s baseline table from the [first available font](https://www.w3.org/TR/css-fonts-4/#first-available-font) of the group’s [alignment context](#shared-alignment-context) and overlay also the mirror of this baseline table by aligning their central baselines. These are the baseline “grids” to which the [alignment subjects](#alignment-subject) will align.
    
2.  Align each [alignment subject](#alignment-subject) by its specified [alignment baseline](#alignment-baseline) to the group’s baseline table or its mirror, whichever matches the alignment subject’s [line orientation](https://www.w3.org/TR/css-writing-modes-4/#line-orientation). Unless otherwise specified (e.g. via the [alignment-baseline](https://www.w3.org/TR/css-inline-3/#propdef-alignment-baseline) property), the alignment baseline is the [dominant baseline](https://www.w3.org/TR/css-writing-modes-3/#dominant-baseline) of the [alignment context](#shared-alignment-context).
    
3.  Position the aligned [baseline-sharing group](#baseline-sharing-group) within the [alignment container](#alignment-container) according to its [fallback alignment](#fallback-alignment). The fallback alignment of a baseline-sharing group is the fallback alignment of its items as resolved to [physical directions](https://www.w3.org/TR/css-writing-modes-4/#physical-direction).
    
4.  For first/last [baseline _content_\-alignment](#baseline-content-alignment), then add the minimum necessary extra space between the [alignment container’s](#alignment-container) start/end content edge and the [alignment subject’s](#alignment-subject) edge to align the start/end margin edges of all the alignment containers in the [alignment context](#shared-alignment-context) while maintaining baseline alignment within the [baseline-sharing group](#baseline-sharing-group).
    

## Appendix A: Static Position Terminology[](#staticpos-rect)

When both [inset properties](https://www.w3.org/TR/css-logical-1/#inset-properties) in a given axis are [auto](https://www.w3.org/TR/css-position-3/#valdef-top-auto) on an [absolutely positioned box](https://www.w3.org/TR/CSS2/visuren.html#absolutely-positioned), CSS2 uses its [static position](https://www.w3.org/TR/css-position-3/#static-position) to resolve its size and position. See [CSS2.1§10.3.7](https://www.w3.org/TR/CSS2/visudet.html#abs-non-replaced-width). The [box alignment properties](#box-alignment-properties) modify these calculations, just as they do the sizing and positioning calculations in other layout modes. These modifications refer to a static-position rectangle, whose edges represent the static position of the box from each side of its [containing block](https://www.w3.org/TR/css-display-4/#containing-block).

The [static-position rectangle](#static-position-rectangle) and the [static positions](https://www.w3.org/TR/css-position-3/#static-position) to which it corresponds are defined by the layout model of its “hypothetical box”:

Block Layout

The [static positions](https://www.w3.org/TR/css-position-3/#static-position) of a [block-level box](https://www.w3.org/TR/css-display-4/#block-level-box) are defined in [\[CSS2\]](#biblio-css2 "Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification") Chapter 10. The [static-position rectangle](#static-position-rectangle) is a zero-thickness rectangle spanning between the inline-axis sides of the box’s [static-position containing block](https://www.w3.org/TR/css-position-3/#static-position-containing-block) (see [CSS2§10.3.7](https://www.w3.org/TR/CSS2/visudet.html#abs-non-replaced-width)); and positioned at its [block-start](https://www.w3.org/TR/css-writing-modes-4/#block-start) static position (see [CSS2§10.6.4](https://www.w3.org/TR/CSS2/visudet.html#abs-non-replaced-height)).

Inline Layout

The [static positions](https://www.w3.org/TR/css-position-3/#static-position) of an [inline-level box](https://www.w3.org/TR/css-display-4/#inline-level-box) are defined in [\[CSS2\]](#biblio-css2 "Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification") Chapter 10. The [static-position rectangle](#static-position-rectangle) is a zero-thickness rectangle spanning between the [line-over](https://www.w3.org/TR/css-writing-modes-4/#line-over)/[line-under](https://www.w3.org/TR/css-writing-modes-4/#line-under) sides of the [line box](https://www.w3.org/TR/CSS2/visuren.html#line-box) that would have contained its “hypothetical box” (see [CSS2§10.3.7](https://www.w3.org/TR/CSS2/visudet.html#abs-non-replaced-width)); and positioned at its [inline-start](https://www.w3.org/TR/css-writing-modes-4/#inline-start) static position.

Flex Layout

The [static-position rectangle](#static-position-rectangle) of the child of a [flex container](https://www.w3.org/TR/css-flexbox-1/#flex-container) corresponds to the [content edges](https://www.w3.org/TR/css-box-4/#content-edge) of the flex container. See [CSS Flexbox 1 § 4.1 Absolutely-Positioned Flex Children](https://www.w3.org/TR/css-flexbox-1/#abspos-items).

Grid Layout

By default, the [static-position rectangle](#static-position-rectangle) of the child of a [grid container](https://www.w3.org/TR/css-grid-2/#grid-container) corresponds to the [content edges](https://www.w3.org/TR/css-box-4/#content-edge) of the grid container. However, if that grid container also establishes the box’s actual [containing block](https://www.w3.org/TR/css-display-4/#containing-block), then the [grid area](https://www.w3.org/TR/css-grid-2/#grid-area) specified by the [grid-placement properties](https://www.w3.org/TR/css-grid-2/#grid-placement-property) establishes its static-position rectangle instead. See the [static position of a grid container child](https://www.w3.org/TR/css-grid-1/#static-position) in [\[CSS-GRID-1\]](#biblio-css-grid-1 "CSS Grid Layout Module Level 1").

## 10\. Changes[](#changes)

Changes since the [30 January 2026 Working Draft](https://www.w3.org/TR/2026/WD-css-align-3-20260130/) include:

*   Move [gap](https://www.w3.org/TR/css-align-3/#propdef-gap) properties to [\[css-gaps-1\]](#biblio-css-gaps-1 "CSS Gaps Module Level 1"). ([Issue 13312](https://github.com/w3c/csswg-drafts/issues/13089))
    
*   Use safe to constrain [absolutely positioned boxes](https://www.w3.org/TR/css-position-3/#absolute-position) to their [original containing block](https://www.w3.org/TR/css-position-3/#original-containing-block). ([Issue 14008](https://github.com/w3c/csswg-drafts/issues/14008))
    
*   Improve algorithm for finding baselines of tables and grid containers. ([Issue 7655](https://github.com/w3c/csswg-drafts/issues/7655), [Issue 7641](https://github.com/w3c/csswg-drafts/issues/7641))
    
*   Clarify special handling of [scroll containers](https://www.w3.org/TR/css-overflow-3/#scroll-container) to address each axis independently now that a container can be [scrollable](https://drafts.csswg.org/css-overflow-3/#scrollable-axis) in only one axis. ([Issue 12289](https://github.com/w3c/csswg-drafts/issues/12289))
    
*   Add a reminder that fundamentally unsupported values must not be parsed as valid. ([13421](https://github.com/w3c/csswg-drafts/issues/13421))
    

See also [previous changes](https://www.w3.org/TR/2025/WD-css-align-3-20250311/#changes).

## 11\. Privacy Considerations[](#privacy)

As a simple layout spec, this introduces no new privacy considerations.

## 12\. Security Considerations[](#security)

As a simple layout spec, this introduces no new security considerations.

## Acknowledgments[](#acknowledgments)

Special thanks goes to David Baron, Javier Fernandez, Markus Mielke, Alex Mogilevsky, and the participants in the CSSWG’s March 2008 F2F alignment discussions for their contributions to the alignment model described herein, and to Melanie Richards for her illustrations of the various [alignment keywords](#alignment-values).

Conformance requirements are expressed with a combination of descriptive assertions and RFC 2119 terminology. The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in the normative parts of this document are to be interpreted as described in RFC 2119. However, for readability, these words do not appear in all uppercase letters in this specification.

All of the text of this specification is normative except sections explicitly marked as non-normative, examples, and notes. [\[RFC2119\]](#biblio-rfc2119 "Key words for use in RFCs to Indicate Requirement Levels")

Examples in this specification are introduced with the words “for example” or are set apart from the normative text with `class="example"`, like this:

Informative notes begin with the word “Note” and are set apart from the normative text with `class="note"`, like this:

Note, this is an informative note.

Advisements are normative sections styled to evoke special attention and are set apart from other normative text with `<strong class="advisement">`, like this: **UAs MUST provide an accessible alternative.**

A style sheet is conformant to this specification if all of its statements that use syntax defined in this module are valid according to the generic CSS grammar and the individual grammars of each feature defined in this module.

A renderer is conformant to this specification if, in addition to interpreting the style sheet as defined by the appropriate specifications, it supports all the features defined by this specification by parsing them correctly and rendering the document accordingly. However, the inability of a UA to correctly render a document due to limitations of the device does not make the UA non-conformant. (For example, a UA is not required to render color on a monochrome monitor.)

An authoring tool is conformant to this specification if it writes style sheets that are syntactically correct according to the generic CSS grammar and the individual grammars of each feature in this module, and meet all other conformance requirements of style sheets as described in this module.

So that authors can exploit the forward-compatible parsing rules to assign fallback values, CSS renderers **must** treat as invalid (and [ignore as appropriate](https://www.w3.org/TR/CSS21/conform.html#ignore)) any at-rules, properties, property values, keywords, and other syntactic constructs for which they have no usable level of support. In particular, user agents **must not** selectively ignore unsupported component values and honor supported values in a single multi-value property declaration: if any value is considered invalid (as unsupported values must be), CSS requires that the entire declaration be ignored.

Once a specification reaches the Candidate Recommendation stage, non-experimental implementations are possible, and implementors should release an unprefixed implementation of any CR-level feature they can demonstrate to be correctly implemented according to spec.

To establish and maintain the interoperability of CSS across implementations, the CSS Working Group requests that non-experimental CSS renderers submit an implementation report (and, if necessary, the testcases used for that implementation report) to the W3C before releasing an unprefixed implementation of any CSS features. Testcases submitted to W3C are subject to review and correction by the CSS Working Group.
