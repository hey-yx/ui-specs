---
title: "W3C · CSS Transitions Level 1（过渡规范）"
source: https://www.w3.org/TR/css-transitions-1/
section: standards
tag: "语法标准"
fetched: 2026-10-20
status: full
id: standards-0
publisher: "W3C"
---

# W3C · CSS Transitions Level 1（过渡规范）

> 来源：[https://www.w3.org/TR/css-transitions-1/](https://www.w3.org/TR/css-transitions-1/)

---

## 1\. Introduction[](#introduction)

_This section is not normative._

This document introduces new CSS features to enable _implicit transitions_, which describe how CSS properties can be made to change smoothly from one value to another over a given duration.

Tests

crashes

*   [delete-image-set.html](https://wpt.fyi/results/css/css-transitions/crashtests/delete-image-set.html "css/css-transitions/crashtests/delete-image-set.html") [(live test)](http://wpt.live/css/css-transitions/crashtests/delete-image-set.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/crashtests/delete-image-set.html)
*   [size-container-transition-crash.html](https://wpt.fyi/results/css/css-transitions/crashtests/size-container-transition-crash.html "css/css-transitions/crashtests/size-container-transition-crash.html") [(live test)](http://wpt.live/css/css-transitions/crashtests/size-container-transition-crash.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/crashtests/size-container-transition-crash.html)
*   [transition-during-style-attr-mutation.html](https://wpt.fyi/results/css/css-transitions/crashtests/transition-during-style-attr-mutation.html "css/css-transitions/crashtests/transition-during-style-attr-mutation.html") [(live test)](http://wpt.live/css/css-transitions/crashtests/transition-during-style-attr-mutation.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/crashtests/transition-during-style-attr-mutation.html)
*   [transition-large-word-spacing-001.html](https://wpt.fyi/results/css/css-transitions/crashtests/transition-large-word-spacing-001.html "css/css-transitions/crashtests/transition-large-word-spacing-001.html") [(live test)](http://wpt.live/css/css-transitions/crashtests/transition-large-word-spacing-001.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/crashtests/transition-large-word-spacing-001.html)

* * *

### 1.1. Value Definitions[](#values)

This specification follows the [CSS property definition conventions](https://www.w3.org/TR/CSS2/about.html#property-defs) from [\[CSS2\]](#biblio-css2 "Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification") using the [value definition syntax](https://www.w3.org/TR/css-values-3/#value-defs) from [\[CSS-VALUES-3\]](#biblio-css-values-3 "CSS Values and Units Module Level 3"). Value types not defined in this specification are defined in CSS Values & Units \[CSS-VALUES-3\]. Combination with other CSS modules may expand the definitions of these value types.

In addition to the property-specific values listed in their definitions, all properties defined in this specification also accept the [CSS-wide keywords](https://www.w3.org/TR/css-values-4/#css-wide-keywords) as their property value. For readability they have not been repeated explicitly.

## 2\. Transitions[](#transitions)

Normally when the value of a CSS property changes, the rendered result is instantly updated, with the affected elements immediately changing from the old property value to the new property value. This section describes a way to specify gradual transitions using new CSS properties. These properties are used to animate smoothly from the old state to the new state over time.

For example, suppose that transitions of one second have been defined on the [left](https://www.w3.org/TR/CSS2/visuren.html#propdef-left) and [background-color](https://www.w3.org/TR/CSS2/colors.html#propdef-background-color) properties. The following diagram illustrates the effect of updating those properties on an element, in this case moving it to the right and changing the background from red to blue. This assumes other transition parameters still have their default values.

![Example showing the initial, intermediate, and final states of a box whose color and position is interpolated](https://www.w3.org/TR/css-transitions-1/images/transition-example.svg)

Transitions of [left](https://www.w3.org/TR/CSS2/visuren.html#propdef-left) and [background-color](https://www.w3.org/TR/CSS2/colors.html#propdef-background-color).

Transitions are a presentational effect. The [computed value](https://www.w3.org/TR/css-cascade-5/#computed-value) of a property transitions over time from the old value to the new value. Therefore if a script queries the computed value of a property (or other data depending on it) as it is transitioning, it will see an intermediate value that represents the current animated value of the property.

The transition for a property is defined using a number of new properties. For example:

div {
  transition-property: opacity;
  transition-duration: 2s;
}

The above example defines a transition on the [opacity](https://www.w3.org/TR/css-color-4/#propdef-opacity) property that, when a new value is assigned to it, will cause a smooth change between the old value and the new value over a period of two seconds.

Each of the transition properties accepts a comma-separated list, allowing multiple transitions to be defined, each acting on a different property. In this case, the individual transitions take their parameters from the same index in all the lists. For example:

div {
  transition-property: opacity, left;
  transition-duration: 2s, 4s;
}

This will cause the [opacity](https://www.w3.org/TR/css-color-4/#propdef-opacity) property to transition over a period of two seconds and the left property to transition over a period of four seconds.

In the case where the lists of values in transition properties do not have the same length, the length of the [transition-property](#propdef-transition-property) list determines the number of items in each list examined when starting transitions. The lists are matched up from the first value: excess values at the end are not used. If one of the other properties doesn’t have enough comma-separated values to match the number of values of transition-property, the user agent must calculate its used value by repeating the list of values until there are enough. This truncation or repetition does not affect the computed value. Note: This is analogous to the behavior of the background-\* properties, with [background-image](https://www.w3.org/TR/css-backgrounds-3/#propdef-background-image) analogous to [transition-property](#propdef-transition-property).

div {
  transition-property: opacity, left, top, width;
  transition-duration: 2s, 1s;
}

The above example defines a transition on the [opacity](https://www.w3.org/TR/css-color-4/#propdef-opacity) property of 2 seconds duration, a transition on the [left](https://www.w3.org/TR/CSS2/visuren.html#propdef-left) property of 1 second duration, a transition on the [top](https://www.w3.org/TR/CSS2/visuren.html#propdef-top) property of 2 seconds duration and a transition on the [width](https://www.w3.org/TR/CSS2/visudet.html#propdef-width) property of 1 second duration.

While authors can use transitions to create dynamically changing content, dynamically changing content can lead to seizures in some users. For information on how to avoid content that can lead to seizures, see [Guideline 2.3: Seizures: Do not design content in a way that is known to cause seizures](https://www.w3.org/TR/WCAG20/#seizure) ([\[WCAG20\]](#biblio-wcag20 "Web Content Accessibility Guidelines (WCAG) 2.0")).

Tests

*   [animate-with-color-mix.html](https://wpt.fyi/results/css/css-transitions/animations/animate-with-color-mix.html "css/css-transitions/animations/animate-with-color-mix.html") [(live test)](http://wpt.live/css/css-transitions/animations/animate-with-color-mix.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/animations/animate-with-color-mix.html)
*   [color-transition-premultiplied.html](https://wpt.fyi/results/css/css-transitions/animations/color-transition-premultiplied.html "css/css-transitions/animations/color-transition-premultiplied.html") [(live test)](http://wpt.live/css/css-transitions/animations/color-transition-premultiplied.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/animations/color-transition-premultiplied.html)
*   [text-shadow-composition.html](https://wpt.fyi/results/css/css-transitions/animations/text-shadow-composition.html "css/css-transitions/animations/text-shadow-composition.html") [(live test)](http://wpt.live/css/css-transitions/animations/text-shadow-composition.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/animations/text-shadow-composition.html)
*   [text-shadow-interpolation.html](https://wpt.fyi/results/css/css-transitions/animations/text-shadow-interpolation.html "css/css-transitions/animations/text-shadow-interpolation.html") [(live test)](http://wpt.live/css/css-transitions/animations/text-shadow-interpolation.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/animations/text-shadow-interpolation.html)
*   [vertical-align-composition.html](https://wpt.fyi/results/css/css-transitions/animations/vertical-align-composition.html "css/css-transitions/animations/vertical-align-composition.html") [(live test)](http://wpt.live/css/css-transitions/animations/vertical-align-composition.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/animations/vertical-align-composition.html)
*   [vertical-align-interpolation.html](https://wpt.fyi/results/css/css-transitions/animations/vertical-align-interpolation.html "css/css-transitions/animations/vertical-align-interpolation.html") [(live test)](http://wpt.live/css/css-transitions/animations/vertical-align-interpolation.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/animations/vertical-align-interpolation.html)
*   [z-index-interpolation.html](https://wpt.fyi/results/css/css-transitions/animations/z-index-interpolation.html "css/css-transitions/animations/z-index-interpolation.html") [(live test)](http://wpt.live/css/css-transitions/animations/z-index-interpolation.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/animations/z-index-interpolation.html)
*   [idlharness.html](https://wpt.fyi/results/css/css-transitions/idlharness.html "css/css-transitions/idlharness.html") [(live test)](http://wpt.live/css/css-transitions/idlharness.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/idlharness.html)
*   [inherit-background-color-transition.html](https://wpt.fyi/results/css/css-transitions/inherit-background-color-transition.html "css/css-transitions/inherit-background-color-transition.html") [(live test)](http://wpt.live/css/css-transitions/inherit-background-color-transition.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/inherit-background-color-transition.html)
*   [inheritance.html](https://wpt.fyi/results/css/css-transitions/inheritance.html "css/css-transitions/inheritance.html") [(live test)](http://wpt.live/css/css-transitions/inheritance.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/inheritance.html)
*   [properties-value-001.html](https://wpt.fyi/results/css/css-transitions/properties-value-001.html "css/css-transitions/properties-value-001.html") [(live test)](http://wpt.live/css/css-transitions/properties-value-001.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/properties-value-001.html)
*   [properties-value-002.html](https://wpt.fyi/results/css/css-transitions/properties-value-002.html "css/css-transitions/properties-value-002.html") [(live test)](http://wpt.live/css/css-transitions/properties-value-002.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/properties-value-002.html)
*   [properties-value-003.html](https://wpt.fyi/results/css/css-transitions/properties-value-003.html "css/css-transitions/properties-value-003.html") [(live test)](http://wpt.live/css/css-transitions/properties-value-003.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/properties-value-003.html)
*   [properties-value-implicit-001.html](https://wpt.fyi/results/css/css-transitions/properties-value-implicit-001.html "css/css-transitions/properties-value-implicit-001.html") [(live test)](http://wpt.live/css/css-transitions/properties-value-implicit-001.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/properties-value-implicit-001.html)
*   [retargetted-transition-with-box-sizing.html](https://wpt.fyi/results/css/css-transitions/retargetted-transition-with-box-sizing.html "css/css-transitions/retargetted-transition-with-box-sizing.html") [(live test)](http://wpt.live/css/css-transitions/retargetted-transition-with-box-sizing.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/retargetted-transition-with-box-sizing.html)
*   [shadow-root-insertion.html](https://wpt.fyi/results/css/css-transitions/shadow-root-insertion.html "css/css-transitions/shadow-root-insertion.html") [(live test)](http://wpt.live/css/css-transitions/shadow-root-insertion.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/shadow-root-insertion.html)
*   [transition-base-response-001.html](https://wpt.fyi/results/css/css-transitions/transition-base-response-001.html "css/css-transitions/transition-base-response-001.html") [(live test)](http://wpt.live/css/css-transitions/transition-base-response-001.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-base-response-001.html)
*   [transition-base-response-002.html](https://wpt.fyi/results/css/css-transitions/transition-base-response-002.html "css/css-transitions/transition-base-response-002.html") [(live test)](http://wpt.live/css/css-transitions/transition-base-response-002.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-base-response-002.html)
*   [transition-base-response-003.html](https://wpt.fyi/results/css/css-transitions/transition-base-response-003.html "css/css-transitions/transition-base-response-003.html") [(live test)](http://wpt.live/css/css-transitions/transition-base-response-003.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-base-response-003.html)
*   [transition-in-iframe-001.html](https://wpt.fyi/results/css/css-transitions/transition-in-iframe-001.html "css/css-transitions/transition-in-iframe-001.html") [(live test)](http://wpt.live/css/css-transitions/transition-in-iframe-001.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-in-iframe-001.html)

### 2.1. The [transition-property](#propdef-transition-property) Property[](#transition-property-property)

The [transition-property](#propdef-transition-property) property specifies the name of the CSS property to which the transition is applied.

Name:

transition-property

[Value:](https://www.w3.org/TR/css-values/#value-defs)

none [|](https://www.w3.org/TR/css-values-4/#comb-one) [<single-transition-property>](#single-transition-property)[#](https://www.w3.org/TR/css-values-4/#mult-comma)

[Initial:](https://www.w3.org/TR/css-cascade/#initial-values)

all

[Applies to:](https://www.w3.org/TR/css-cascade/#applies-to)

[all elements](https://www.w3.org/TR/css-pseudo/#generated-content "Includes ::before and ::after pseudo-elements.")

[Inherited:](https://www.w3.org/TR/css-cascade/#inherited-property)

no

[Percentages:](https://www.w3.org/TR/css-values/#percentages)

N/A

[Computed value:](https://www.w3.org/TR/css-cascade/#computed)

the keyword [none](#valdef-transition-property-none) else a list of identifiers

[Canonical order:](https://www.w3.org/TR/cssom/#serializing-css-values)

per grammar

[Animation type:](https://www.w3.org/TR/web-animations/#animation-type)

not animatable

Tests

*   [move-after-transition.html](https://wpt.fyi/results/css/css-transitions/animations/move-after-transition.html "css/css-transitions/animations/move-after-transition.html") [(live test)](http://wpt.live/css/css-transitions/animations/move-after-transition.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/animations/move-after-transition.html)
*   [transition-end-event-shorthands.html](https://wpt.fyi/results/css/css-transitions/animations/transition-end-event-shorthands.html "css/css-transitions/animations/transition-end-event-shorthands.html") [(live test)](http://wpt.live/css/css-transitions/animations/transition-end-event-shorthands.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/animations/transition-end-event-shorthands.html)
*   [transition-property-computed.html](https://wpt.fyi/results/css/css-transitions/parsing/transition-property-computed.html "css/css-transitions/parsing/transition-property-computed.html") [(live test)](http://wpt.live/css/css-transitions/parsing/transition-property-computed.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/parsing/transition-property-computed.html)
*   [transition-property-invalid.html](https://wpt.fyi/results/css/css-transitions/parsing/transition-property-invalid.html "css/css-transitions/parsing/transition-property-invalid.html") [(live test)](http://wpt.live/css/css-transitions/parsing/transition-property-invalid.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/parsing/transition-property-invalid.html)
*   [transition-property-valid.html](https://wpt.fyi/results/css/css-transitions/parsing/transition-property-valid.html "css/css-transitions/parsing/transition-property-valid.html") [(live test)](http://wpt.live/css/css-transitions/parsing/transition-property-valid.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/parsing/transition-property-valid.html)
*   [pseudo-element-transform.html](https://wpt.fyi/results/css/css-transitions/pseudo-element-transform.html "css/css-transitions/pseudo-element-transform.html") [(live test)](http://wpt.live/css/css-transitions/pseudo-element-transform.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/pseudo-element-transform.html)
*   [pseudo-elements-001.html](https://wpt.fyi/results/css/css-transitions/pseudo-elements-001.html "css/css-transitions/pseudo-elements-001.html") [(live test)](http://wpt.live/css/css-transitions/pseudo-elements-001.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/pseudo-elements-001.html)
*   [pseudo-elements-002.html](https://wpt.fyi/results/css/css-transitions/pseudo-elements-002.html "css/css-transitions/pseudo-elements-002.html") [(live test)](http://wpt.live/css/css-transitions/pseudo-elements-002.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/pseudo-elements-002.html)
*   [transition-background-position-with-edge-offset.html](https://wpt.fyi/results/css/css-transitions/transition-background-position-with-edge-offset.html "css/css-transitions/transition-background-position-with-edge-offset.html") [(live test)](http://wpt.live/css/css-transitions/transition-background-position-with-edge-offset.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-background-position-with-edge-offset.html)
*   [transition-property-001.html](https://wpt.fyi/results/css/css-transitions/transition-property-001.html "css/css-transitions/transition-property-001.html") [(live test)](http://wpt.live/css/css-transitions/transition-property-001.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-001.html)
*   [transition-property-002.html](https://wpt.fyi/results/css/css-transitions/transition-property-002.html "css/css-transitions/transition-property-002.html") [(live test)](http://wpt.live/css/css-transitions/transition-property-002.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-002.html)
*   transition-property-003-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-003-manual.html)
*   transition-property-004-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-004-manual.html)
*   transition-property-005-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-005-manual.html)
*   transition-property-006-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-006-manual.html)
*   transition-property-007-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-007-manual.html)
*   transition-property-008-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-008-manual.html)
*   transition-property-009-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-009-manual.html)
*   transition-property-010-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-010-manual.html)
*   transition-property-011-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-011-manual.html)
*   transition-property-012-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-012-manual.html)
*   transition-property-013-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-013-manual.html)
*   transition-property-014-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-014-manual.html)
*   transition-property-015-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-015-manual.html)
*   transition-property-016-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-016-manual.html)
*   transition-property-017-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-017-manual.html)
*   transition-property-018-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-018-manual.html)
*   transition-property-019-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-019-manual.html)
*   transition-property-020-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-020-manual.html)
*   transition-property-021-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-021-manual.html)
*   transition-property-022-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-022-manual.html)
*   transition-property-023-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-023-manual.html)
*   transition-property-024-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-024-manual.html)
*   transition-property-025-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-025-manual.html)
*   transition-property-026-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-026-manual.html)
*   transition-property-027-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-027-manual.html)
*   transition-property-028-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-028-manual.html)
*   transition-property-029-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-029-manual.html)
*   transition-property-030-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-030-manual.html)
*   transition-property-031-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-031-manual.html)
*   transition-property-032-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-032-manual.html)
*   transition-property-033-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-033-manual.html)
*   transition-property-034-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-034-manual.html)
*   transition-property-035-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-035-manual.html)
*   transition-property-036-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-036-manual.html)
*   transition-property-037-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-037-manual.html)
*   transition-property-038-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-038-manual.html)
*   transition-property-039-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-039-manual.html)
*   transition-property-040-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-040-manual.html)
*   transition-property-041-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-041-manual.html)
*   transition-property-042-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-042-manual.html)
*   transition-property-043-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-043-manual.html)
*   transition-property-044-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-044-manual.html)
*   transition-property-045-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-property-045-manual.html)
*   [transition-test.html](https://wpt.fyi/results/css/css-transitions/transition-test.html "css/css-transitions/transition-test.html") [(live test)](http://wpt.live/css/css-transitions/transition-test.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-test.html)
*   [transition-zero-duration-with-delay.html](https://wpt.fyi/results/css/css-transitions/transition-zero-duration-with-delay.html "css/css-transitions/transition-zero-duration-with-delay.html") [(live test)](http://wpt.live/css/css-transitions/transition-zero-duration-with-delay.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-zero-duration-with-delay.html)

A value of none means that no property will transition. Otherwise, a list of properties to be transitioned, or the keyword all which indicates that all properties are to be transitioned, is given.

If one of the identifiers listed is not a recognized property name, the implementation must still start transitions on the animatable properties in the list using the duration, delay, and timing function at their respective indices in the lists for [transition-duration](#propdef-transition-duration), [transition-delay](#propdef-transition-delay), and [transition-timing-function](#propdef-transition-timing-function). In other words, unrecognized properties must be kept in the list to preserve the matching of indices.

The [<custom-ident>](https://www.w3.org/TR/css-values-4/#identifier-value) production in [<single-transition-property>](#single-transition-property) also excludes the keyword [none](#valdef-transition-property-none), in addition to the keywords always excluded from <custom-ident>. This means that none, [inherit](https://www.w3.org/TR/css-cascade-5/#valdef-all-inherit), and [initial](https://www.w3.org/TR/css-cascade-5/#valdef-all-initial) are not permitted as items within a list of more that one identifier; any list that uses them is syntactically invalid.

For the keyword [all](#valdef-transition-property-all), or if one of the identifiers listed is a shorthand property, implementations must start transitions for all its longhand sub-properties (or, for all, all properties), using the duration, delay, and timing function at the index corresponding to the shorthand.

If a property is specified multiple times in the value of [transition-property](#propdef-transition-property) (either on its own, via a shorthand that contains it, or via the [all](#valdef-transition-property-all) value), then the transition that starts uses the duration, delay, and timing function at the index corresponding to the _last_ item in the value of transition-property that calls for animating that property.

Note: The [all](#valdef-transition-property-all) value and [all](https://www.w3.org/TR/css-cascade-5/#propdef-all) shorthand property work in similar ways, so the all value is just like a shorthand that covers all properties.

### 2.2. The [transition-duration](#propdef-transition-duration) Property[](#transition-duration-property)

The [transition-duration](#propdef-transition-duration) property defines the length of time that a transition takes.

Name:

transition-duration

[Value:](https://www.w3.org/TR/css-values/#value-defs)

[<time \[0s,∞\]>](https://www.w3.org/TR/css-values-3/#time-value)[#](https://www.w3.org/TR/css-values-4/#mult-comma)

[Initial:](https://www.w3.org/TR/css-cascade/#initial-values)

0s

[Applies to:](https://www.w3.org/TR/css-cascade/#applies-to)

[all elements](https://www.w3.org/TR/css-pseudo/#generated-content "Includes ::before and ::after pseudo-elements.")

[Inherited:](https://www.w3.org/TR/css-cascade/#inherited-property)

no

[Percentages:](https://www.w3.org/TR/css-values/#percentages)

N/A

[Computed value:](https://www.w3.org/TR/css-cascade/#computed)

list, each item a duration

[Canonical order:](https://www.w3.org/TR/cssom/#serializing-css-values)

per grammar

[Animation type:](https://www.w3.org/TR/web-animations/#animation-type)

not animatable

Tests

*   [infinite-duration-crash.html](https://wpt.fyi/results/css/css-transitions/infinite-duration-crash.html "css/css-transitions/infinite-duration-crash.html") [(live test)](http://wpt.live/css/css-transitions/infinite-duration-crash.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/infinite-duration-crash.html)
*   [transition-duration-computed.html](https://wpt.fyi/results/css/css-transitions/parsing/transition-duration-computed.html "css/css-transitions/parsing/transition-duration-computed.html") [(live test)](http://wpt.live/css/css-transitions/parsing/transition-duration-computed.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/parsing/transition-duration-computed.html)
*   [transition-duration-invalid.html](https://wpt.fyi/results/css/css-transitions/parsing/transition-duration-invalid.html "css/css-transitions/parsing/transition-duration-invalid.html") [(live test)](http://wpt.live/css/css-transitions/parsing/transition-duration-invalid.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/parsing/transition-duration-invalid.html)
*   [transition-duration-valid.html](https://wpt.fyi/results/css/css-transitions/parsing/transition-duration-valid.html "css/css-transitions/parsing/transition-duration-valid.html") [(live test)](http://wpt.live/css/css-transitions/parsing/transition-duration-valid.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/parsing/transition-duration-valid.html)
*   [transition-duration-001.html](https://wpt.fyi/results/css/css-transitions/transition-duration-001.html "css/css-transitions/transition-duration-001.html") [(live test)](http://wpt.live/css/css-transitions/transition-duration-001.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-duration-001.html)
*   transition-duration-002-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-duration-002-manual.html)
*   transition-duration-003-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-duration-003-manual.html)
*   transition-duration-004-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-duration-004-manual.html)
*   [transition-duration-shorthand.html](https://wpt.fyi/results/css/css-transitions/transition-duration-shorthand.html "css/css-transitions/transition-duration-shorthand.html") [(live test)](http://wpt.live/css/css-transitions/transition-duration-shorthand.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-duration-shorthand.html)

This property specifies how long the transition from the old value to the new value should take. By default the value is 0s, meaning that the transition is immediate (i.e. there will be no animation). A negative value for [transition-duration](#propdef-transition-duration) renders the declaration invalid.

### 2.3. The [transition-timing-function](#propdef-transition-timing-function) Property[](#transition-timing-function-property)

The [transition-timing-function](#propdef-transition-timing-function) property describes how the intermediate values used during a transition will be calculated. It allows for a transition to change speed over its duration. These effects are commonly called _easing_ functions.

Timing functions are defined in the separate CSS Easing Functions module [\[css-easing-1\]](#biblio-css-easing-1 "CSS Easing Functions Level 1"). The [input progress value](https://www.w3.org/TR/css-easing-2/#input-progress-value) used is the percentage of the transition duration, and the [output progress value](https://www.w3.org/TR/css-easing-2/#output-progress-value) is used as the p value when [interpolating](https://www.w3.org/TR/css-values-4/#interpolation) the property value (see [§ 4 Application of transitions](#application)).

Name:

transition-timing-function

[Value:](https://www.w3.org/TR/css-values/#value-defs)

[<easing-function>](https://www.w3.org/TR/css-easing-2/#typedef-easing-function)[#](https://www.w3.org/TR/css-values-4/#mult-comma)

[Initial:](https://www.w3.org/TR/css-cascade/#initial-values)

ease

[Applies to:](https://www.w3.org/TR/css-cascade/#applies-to)

[all elements](https://www.w3.org/TR/css-pseudo/#generated-content "Includes ::before and ::after pseudo-elements.")

[Inherited:](https://www.w3.org/TR/css-cascade/#inherited-property)

no

[Percentages:](https://www.w3.org/TR/css-values/#percentages)

N/A

[Computed value:](https://www.w3.org/TR/css-cascade/#computed)

as specified

[Canonical order:](https://www.w3.org/TR/cssom/#serializing-css-values)

per grammar

[Animation type:](https://www.w3.org/TR/web-animations/#animation-type)

not animatable

Tests

*   [transition-timing-function.html](https://wpt.fyi/results/css/css-transitions/animations/transition-timing-function.html "css/css-transitions/animations/transition-timing-function.html") [(live test)](http://wpt.live/css/css-transitions/animations/transition-timing-function.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/animations/transition-timing-function.html)
*   [transition-timing-function-computed.html](https://wpt.fyi/results/css/css-transitions/parsing/transition-timing-function-computed.html "css/css-transitions/parsing/transition-timing-function-computed.html") [(live test)](http://wpt.live/css/css-transitions/parsing/transition-timing-function-computed.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/parsing/transition-timing-function-computed.html)
*   [transition-timing-function-invalid.html](https://wpt.fyi/results/css/css-transitions/parsing/transition-timing-function-invalid.html "css/css-transitions/parsing/transition-timing-function-invalid.html") [(live test)](http://wpt.live/css/css-transitions/parsing/transition-timing-function-invalid.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/parsing/transition-timing-function-invalid.html)
*   [transition-timing-function-valid.html](https://wpt.fyi/results/css/css-transitions/parsing/transition-timing-function-valid.html "css/css-transitions/parsing/transition-timing-function-valid.html") [(live test)](http://wpt.live/css/css-transitions/parsing/transition-timing-function-valid.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/parsing/transition-timing-function-valid.html)
*   transition-timing-function-002-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-timing-function-002-manual.html)
*   transition-timing-function-003-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-timing-function-003-manual.html)
*   transition-timing-function-004-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-timing-function-004-manual.html)
*   transition-timing-function-005-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-timing-function-005-manual.html)
*   transition-timing-function-006-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-timing-function-006-manual.html)
*   transition-timing-function-010-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-timing-function-010-manual.html)

### 2.4. The [transition-delay](#propdef-transition-delay) Property[](#transition-delay-property)

The [transition-delay](#propdef-transition-delay) property defines when the transition will start. It allows a transition to begin execution after some period of time from when it is applied. A transition-delay value of 0s means the transition will execute as soon as the property is changed. Otherwise, the value specifies an offset from the moment the property is changed, and the transition will delay execution by that offset.

If the value for [transition-delay](#propdef-transition-delay) is a negative time offset then the transition will execute the moment the property is changed, but will appear to have begun execution at the specified offset. That is, the transition will appear to begin part-way through its play cycle. In the case where a transition has implied starting values and a negative transition-delay, the starting values are taken from the moment the property is changed.

Name:

transition-delay

[Value:](https://www.w3.org/TR/css-values/#value-defs)

[<time>](https://www.w3.org/TR/css-values-3/#time-value)[#](https://www.w3.org/TR/css-values-4/#mult-comma)

[Initial:](https://www.w3.org/TR/css-cascade/#initial-values)

0s

[Applies to:](https://www.w3.org/TR/css-cascade/#applies-to)

[all elements](https://www.w3.org/TR/css-pseudo/#generated-content "Includes ::before and ::after pseudo-elements.")

[Inherited:](https://www.w3.org/TR/css-cascade/#inherited-property)

no

[Percentages:](https://www.w3.org/TR/css-values/#percentages)

N/A

[Computed value:](https://www.w3.org/TR/css-cascade/#computed)

list, each item a duration

[Canonical order:](https://www.w3.org/TR/cssom/#serializing-css-values)

per grammar

[Animation type:](https://www.w3.org/TR/web-animations/#animation-type)

not animatable

Tests

*   [transition-delay-computed.html](https://wpt.fyi/results/css/css-transitions/parsing/transition-delay-computed.html "css/css-transitions/parsing/transition-delay-computed.html") [(live test)](http://wpt.live/css/css-transitions/parsing/transition-delay-computed.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/parsing/transition-delay-computed.html)
*   [transition-delay-invalid.html](https://wpt.fyi/results/css/css-transitions/parsing/transition-delay-invalid.html "css/css-transitions/parsing/transition-delay-invalid.html") [(live test)](http://wpt.live/css/css-transitions/parsing/transition-delay-invalid.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/parsing/transition-delay-invalid.html)
*   [transition-delay-valid.html](https://wpt.fyi/results/css/css-transitions/parsing/transition-delay-valid.html "css/css-transitions/parsing/transition-delay-valid.html") [(live test)](http://wpt.live/css/css-transitions/parsing/transition-delay-valid.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/parsing/transition-delay-valid.html)
*   transition-delay-000-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-delay-000-manual.html)
*   [transition-delay-001.html](https://wpt.fyi/results/css/css-transitions/transition-delay-001.html "css/css-transitions/transition-delay-001.html") [(live test)](http://wpt.live/css/css-transitions/transition-delay-001.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-delay-001.html)
*   transition-delay-002-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-delay-002-manual.html)
*   transition-delay-003-manual.html (manual test) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-delay-003-manual.html)

### 2.5. The [transition](#propdef-transition) Shorthand Property[](#transition-shorthand-property)

The [transition](#propdef-transition) shorthand property combines the four properties described above into a single property.

Name:

transition

[Value:](https://www.w3.org/TR/css-values/#value-defs)

[<single-transition>](#single-transition)[#](https://www.w3.org/TR/css-values-4/#mult-comma)

[Initial:](https://www.w3.org/TR/css-cascade/#initial-values)

see individual properties

[Applies to:](https://www.w3.org/TR/css-cascade/#applies-to)

[all elements](https://www.w3.org/TR/css-pseudo/#generated-content "Includes ::before and ::after pseudo-elements.")

[Inherited:](https://www.w3.org/TR/css-cascade/#inherited-property)

no

[Percentages:](https://www.w3.org/TR/css-values/#percentages)

N/A

[Computed value:](https://www.w3.org/TR/css-cascade/#computed)

see individual properties

[Animation type:](https://www.w3.org/TR/web-animations/#animation-type)

not animatable

[Canonical order:](https://www.w3.org/TR/cssom/#serializing-css-values)

per grammar

Tests

*   [transition-computed.html](https://wpt.fyi/results/css/css-transitions/parsing/transition-computed.html "css/css-transitions/parsing/transition-computed.html") [(live test)](http://wpt.live/css/css-transitions/parsing/transition-computed.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/parsing/transition-computed.html)
*   [transition-invalid.html](https://wpt.fyi/results/css/css-transitions/parsing/transition-invalid.html "css/css-transitions/parsing/transition-invalid.html") [(live test)](http://wpt.live/css/css-transitions/parsing/transition-invalid.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/parsing/transition-invalid.html)
*   [transition-valid.html](https://wpt.fyi/results/css/css-transitions/parsing/transition-valid.html "css/css-transitions/parsing/transition-valid.html") [(live test)](http://wpt.live/css/css-transitions/parsing/transition-valid.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/parsing/transition-valid.html)
*   [transition-shorthand.html](https://wpt.fyi/results/css/css-transitions/parsing/transition-shorthand.html "css/css-transitions/parsing/transition-shorthand.html") [(live test)](http://wpt.live/css/css-transitions/parsing/transition-shorthand.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/parsing/transition-shorthand.html)
*   [transition-001.html](https://wpt.fyi/results/css/css-transitions/transition-001.html "css/css-transitions/transition-001.html") [(live test)](http://wpt.live/css/css-transitions/transition-001.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-001.html)

Note that order is important within the items in this property: the first value that can be parsed as a time is assigned to the transition-duration, and the second value that can be parsed as a time is assigned to transition-delay.

If there is more than one [<single-transition>](#single-transition) in the shorthand, and any of the transitions has [none](#valdef-transition-property-none) as the [<single-transition-property>](#single-transition-property), then the declaration is invalid.

## 3\. Starting of transitions[](#starting)

Implementations must maintain a set of running transitions, each of which applies to a specific element and non-shorthand property. Each of these transitions also has a start time, end time, start value, end value, reversing-adjusted start value, and reversing shortening factor. Transitions are added to this set as described in this section, and are removed from this set when they [complete](#dfn-complete) or when implementations are required to cancel them. For the rationale behind the [reversing-adjusted start value](#transition-reversing-adjusted-start-value) and [reversing shortening factor](#transition-reversing-shortening-factor), see [§ 3.1 Faster reversing of interrupted transitions](#reversing).

Tests

*   [transitioncancel-003.html](https://wpt.fyi/results/css/css-transitions/transitioncancel-003.html "css/css-transitions/transitioncancel-003.html") [(live test)](http://wpt.live/css/css-transitions/transitioncancel-003.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transitioncancel-003.html)

Implementations must also maintain a set of completed transitions, each of which (like [running transitions](#running-transition)) applies to a specific element and non-shorthand property. This specification maintains the invariant that there is never both a [running transition](#running-transition) and a [completed transition](#completed-transition) for the same property and element.

If an element is no longer in the document, implementations must [cancel](#transition-cancel) any [running transitions](#running-transition) on it and remove transitions on it from the [completed transitions](#completed-transition).

This set of completed transitions needs to be maintained in order to prevent transitions from repeating themselves in certain cases, i.e., to maintain the invariant that this specification tries to maintain that unrelated style changes do not trigger transitions.

An example where maintaining the set of completed transitions is necessary would be a transition on an inherited property, where the parent specifies a transition of that property for a longer duration (say, [transition: 4s text-indent](#propdef-transition)) and a child element that inherits the parent’s value specifies a transition of the same property for a shorter duration (say, transition: 1s text-indent). Without the maintenance of this set of completed transitions, implementations could start additional transitions on the child after the initial 1 second transition on the child completes.

Various things can cause the [computed values](https://www.w3.org/TR/css-cascade-5/#computed-value) of properties on an element to change. These include insertion and removal of elements from the document tree (which both changes whether those elements have computed values and can change the styles of other elements through selector matching), changes to the document tree that cause changes to which selectors match elements, changes to style sheets or style attributes, and other things. This specification does not define when computed values are updated, beyond saying that implementations must not use, present, or display something resulting from the CSS cascading, value computation, and inheritance process [\[CSS3CASCADE\]](#biblio-css3cascade "CSS Cascading and Inheritance Level 3") without updating the computed value (which means merely that implementations cannot avoid meeting requirements of this specification by claiming not to have updated the computed value as part of handling a style change). However, when an implementation updates the computed value of a property on an element to reflect one of these changes, or computes the computed value of a property on an element newly added to the document, it must update the computed value for all properties and elements to reflect all of these changes at the same time (or at least it must be undetectable that it was done at a different time). This processing of a set of simultaneous style changes is called a style change event. (Implementations typically have a [style change event](#style-change-event) to correspond with their desired screen refresh rate, and when up-to-date computed style or layout information is needed for a script API that depends on it.)

Tests

*   [no-transition-from-ua-to-blocking-stylesheet.html](https://wpt.fyi/results/css/css-transitions/render-blocking/no-transition-from-ua-to-blocking-stylesheet.html "css/css-transitions/render-blocking/no-transition-from-ua-to-blocking-stylesheet.html") [(live test)](http://wpt.live/css/css-transitions/render-blocking/no-transition-from-ua-to-blocking-stylesheet.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/render-blocking/no-transition-from-ua-to-blocking-stylesheet.html)

Since this specification does not define when a [style change event](#style-change-event) occurs, and thus what changes to computed values are considered simultaneous, authors should be aware that changing any of the transition properties a small amount of time after making a change that might transition can result in behavior that varies between implementations, since the changes might be considered simultaneous in some implementations but not others.

When a [style change event](#style-change-event) occurs, implementations must start transitions based on the [computed values](https://www.w3.org/TR/css-cascade-5/#computed-value) that changed in that event. If an element is not in the document during that style change event or was not in the document during the previous style change event, then transitions are not started for that element in that style change event. Otherwise, define the before-change style as the computed values of all properties on the element as of the previous style change event, except with any styles derived from declarative animations such as CSS Transitions, CSS Animations ([\[CSS3-ANIMATIONS\]](#biblio-css3-animations "CSS Animations Level 1")), and SMIL Animations ([\[SMIL-ANIMATION\]](#biblio-smil-animation "SMIL Animation"), [\[SVG11\]](#biblio-svg11 "Scalable Vector Graphics (SVG) 1.1 (Second Edition)")) updated to the current time. Likewise, define the after-change style as the computed values of all properties on the element based on the information known at the start of that style change event, but using the computed values of the animation-\* properties from the [before-change style](#before-change-style), excluding any styles from CSS Transitions in the computation, and inheriting from the [after-change style](#after-change-style) of the parent. Note that this means the after-change style does not differ from the before-change style due to newly created or canceled CSS Animations.

Tests

*   [after-change-style-inherited-try-fallback.html](https://wpt.fyi/results/css/css-transitions/after-change-style-inherited-try-fallback.html "css/css-transitions/after-change-style-inherited-try-fallback.html") [(live test)](http://wpt.live/css/css-transitions/after-change-style-inherited-try-fallback.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/after-change-style-inherited-try-fallback.html)
*   [after-change-style-inherited.html](https://wpt.fyi/results/css/css-transitions/after-change-style-inherited.html "css/css-transitions/after-change-style-inherited.html") [(live test)](http://wpt.live/css/css-transitions/after-change-style-inherited.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/after-change-style-inherited.html)
*   [change-duration-during-transition.html](https://wpt.fyi/results/css/css-transitions/animations/change-duration-during-transition.html "css/css-transitions/animations/change-duration-during-transition.html") [(live test)](http://wpt.live/css/css-transitions/animations/change-duration-during-transition.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/animations/change-duration-during-transition.html)

Note that this definition of the [after-change style](#after-change-style) means that a single change can start a transition on the same property on both an ancestor element and its descendant element. This can happen when a property change is inherited from one element with transition-\* properties that say to animate the changing property to another element with transition-\* properties that also say to animate the changing property.

When this happens, both transitions will run, and the transition on the descendant will override the transition on the ancestor because of the normal CSS cascading and inheritance rules ([\[CSS3CASCADE\]](#biblio-css3cascade "CSS Cascading and Inheritance Level 3")).

If the transition on the descendant completes before the transition on the ancestor, the descendant will then resume inheriting the (still transitioning) value from its parent. This effect is likely not a desirable effect, but it is essentially doing what the author asked for.

For each element with a [before-change style](#before-change-style) and an [after-change style](#after-change-style), and each property (other than shorthands), define the matching transition-property value as the last value in the [transition-property](#propdef-transition-property) in the element’s after-change style that matches the property, as described in [§ 2.1 The transition-property Property](#transition-property-property). If there is such a value, then corresponding to it, there is a matching transition duration, a matching transition delay, and a matching transition timing function in the values in the after-change style of [transition-duration](#propdef-transition-duration), [transition-delay](#propdef-transition-delay), and [transition-timing-function](#propdef-transition-timing-function) (see [the rules on matching lists](#list-matching)). Define the combined duration of the transition as the sum of max([matching transition duration](#matching-transition-duration), 0s) and the [matching transition delay](#matching-transition-delay).

When comparing the [before-change style](#before-change-style) and [after-change style](#after-change-style) for a given property, the property values are transitionable if they have an [animation type](https://www.w3.org/TR/web-animations-1/#animation-type) that is _neither_ [not animatable](https://www.w3.org/TR/web-animations-1/#not-animatable) _nor_ [discrete](https://www.w3.org/TR/web-animations-1/#discrete).

Note: Even if a _property_ is defined to have an [animation type](https://www.w3.org/TR/web-animations-1/#animation-type) that is _not_ [discrete](https://www.w3.org/TR/web-animations-1/#discrete), for a particular pair of _property values_ the animation type may be discrete. For example, the animation type of the [box-shadow](https://www.w3.org/TR/css-backgrounds-3/#propdef-box-shadow) property is [shadow list](https://www.w3.org/TR/web-animations-1/#combining-shadow-lists), which defines that when the [inset](https://www.w3.org/TR/css3-background/#shadow-inset) keyword is absent in one value but present in the other, discrete animation is used. As a result 0px 0px black and inset 10px 10px black are _not_ [transitionable](#transitionable).

For each element and property, the implementation must act as follows:

1.  If all of the following are true:
    
    *   the element does not have a [running transition](#running-transition) for the property,
    *   the [before-change style](#before-change-style) is different from the [after-change style](#after-change-style) for that property, and the values for the property are [transitionable](#transitionable),
    *   the element does not have a [completed transition](#completed-transition) for the property or the [end value](#transition-end-value) of the completed transition is different from the [after-change style](#after-change-style) for the property,
    *   there is a [matching transition-property value](#matching-transition-property-value), and
    *   the [combined duration](#transition-combined-duration) is greater than 0s,
    
    then implementations must remove the [completed transition](#completed-transition) (if present) from the set of completed transitions and start a transition whose:
    *   [start time](#transition-start-time) is the time of the [style change event](#style-change-event) plus the [matching transition delay](#matching-transition-delay),
    *   [end time](#transition-end-time) is the [start time](#transition-start-time) plus the [matching transition duration](#matching-transition-duration),
    *   [start value](#transition-start-value) is the value of the transitioning property in the [before-change style](#before-change-style),
    *   [end value](#transition-end-value) is the value of the transitioning property in the [after-change style](#after-change-style),
    *   [reversing-adjusted start value](#transition-reversing-adjusted-start-value) is the same as the [start value](#transition-start-value), and
    *   [reversing shortening factor](#transition-reversing-shortening-factor) is 1.
2.  Otherwise, if the element has a [completed transition](#completed-transition) for the property and the [end value](#transition-end-value) of the completed transition is different from the [after-change style](#after-change-style) for the property, then implementations must remove the completed transition from the set of completed transitions.
3.  If the element has a [running transition](#running-transition) or [completed transition](#completed-transition) for the property, and there is **not** a [matching transition-property value](#matching-transition-property-value), then implementations must [cancel](#transition-cancel) the running transition or remove the completed transition from the set of completed transitions.
4.  If the element has a [running transition](#running-transition) for the property, there is a [matching transition-property value](#matching-transition-property-value), and the [end value](#transition-end-value) of the running transition is **not** equal to the value of the property in the [after-change style](#after-change-style), then:
    1.  If the [current value](#current-value) of the property in the [running transition](#running-transition) is equal to the value of the property in the [after-change style](#after-change-style), or if these two values are not [transitionable](#transitionable), then implementations must [cancel](#transition-cancel) the running transition.
    2.  Otherwise, if the [combined duration](#transition-combined-duration) is less than or equal to 0s, or if the [current value](#current-value) of the property in the [running transition](#running-transition) is not [transitionable](#transitionable) with the value of the property in the [after-change style](#after-change-style), then implementations must [cancel](#transition-cancel) the running transition.
    3.  Otherwise, if the [reversing-adjusted start value](#transition-reversing-adjusted-start-value) of the [running transition](#running-transition) is the same as the value of the property in the [after-change style](#after-change-style) (see the [section on reversing of transitions](#reversing) for why these case exists), implementations must [cancel](#transition-cancel) the running transition and start a new transition whose:
        *   [reversing-adjusted start value](#transition-reversing-adjusted-start-value) is the [end value](#transition-end-value) of the [running transition](#running-transition) (Note: This represents the logical start state of the transition, and allows some calculations to ignore that the transition started before that state was reached, which in turn allows repeated reversals of the same transition to work correctly),
        *   [reversing shortening factor](#transition-reversing-shortening-factor) is the absolute value, clamped to the range \[0, 1\], of the sum of:
            
            1.  the output of the timing function of the old transition at the time of the [style change event](#style-change-event), times the [reversing shortening factor](#transition-reversing-shortening-factor) of the old transition
            2.  1 minus the [reversing shortening factor](#transition-reversing-shortening-factor) of the old transition.
            
            Note: This represents the portion of the space between the [reversing-adjusted start value](#transition-reversing-adjusted-start-value) and the [end value](#transition-end-value) that the old transition has traversed (in amounts of the value, not time), except with the absolute value and clamping to handle timing functions that have y1 or y2 outside the range \[0, 1\].
        *   [start time](#transition-start-time) is the time of the [style change event](#style-change-event) plus:
            1.  if the [matching transition delay](#matching-transition-delay) is nonnegative, the matching transition delay, or
            2.  if the [matching transition delay](#matching-transition-delay) is negative, the product of the new transition’s [reversing shortening factor](#transition-reversing-shortening-factor) and the matching transition delay,
        *   [end time](#transition-end-time) is the [start time](#transition-start-time) plus the product of the [matching transition duration](#matching-transition-duration) and the new transition’s [reversing shortening factor](#transition-reversing-shortening-factor),
        *   [start value](#transition-start-value) is the [current value](#current-value) of the property in the [running transition](#running-transition),
        *   [end value](#transition-end-value) is the value of the property in the [after-change style](#after-change-style),
    4.  Otherwise, implementations must [cancel](#transition-cancel) the [running transition](#running-transition) and start a new transition whose:
        *   [start time](#transition-start-time) is the time of the [style change event](#style-change-event) plus the [matching transition delay](#matching-transition-delay),
        *   [end time](#transition-end-time) is the [start time](#transition-start-time) plus the [matching transition duration](#matching-transition-duration),
        *   [start value](#transition-start-value) is the [current value](#current-value) of the property in the [running transition](#running-transition),
        *   [end value](#transition-end-value) is the value of the property in the [after-change style](#after-change-style),
        *   [reversing-adjusted start value](#transition-reversing-adjusted-start-value) is the same as the [start value](#transition-start-value), and
        *   [reversing shortening factor](#transition-reversing-shortening-factor) is 1.

Note that the above rules mean that when the computed value of an animatable property changes, the transitions that start are based on the values of the [transition-property](#propdef-transition-property), [transition-duration](#propdef-transition-duration), [transition-timing-function](#propdef-transition-timing-function), and [transition-delay](#propdef-transition-delay) properties at the time the animatable property would first have its new computed value. This means that when one of these transition-\* properties changes at the same time as a property whose change might transition, it is the _new_ values of the transition-\* properties that control the transition.

This provides a way for authors to specify different values of the transition-\* properties for the “forward” and “reverse” transitions, when the transitions are between two states (but see [below](#reversing) for special reversing behavior when an _incomplete_ transition is interrupted). Authors can specify the value of [transition-duration](#propdef-transition-duration), [transition-timing-function](#propdef-transition-timing-function), or [transition-delay](#propdef-transition-delay) in the same rule where they specify the value that triggers the transition, or can change these properties at the same time as they change the property that triggers the transition. Since it’s the new values of these transition-\* properties that affect the transition, these values will be used for the transitions _to_ the associated transitioning values. For example:

li {
  transition: background-color linear 1s;
  background: blue;
}
li:hover {
  background-color: green;
  transition-duration: 2s; /\* applies to the transition \*to\* the :hover state \*/
}

When a list item with these style rules enters the :hover state, the computed [transition-duration](#propdef-transition-duration) at the time that [background-color](https://www.w3.org/TR/CSS2/colors.html#propdef-background-color) would have its new value ([green](https://www.w3.org/TR/css-color-4/#valdef-color-green)) is 2s, so the transition from [blue](https://www.w3.org/TR/css-color-4/#valdef-color-blue) to green takes 2 seconds. However, when the list item leaves the :hover state, the transition from green to blue takes 1 second.

Note that once the transition of a property has started (including being in its delay phase), it continues running based on the original timing function, duration, and delay, even if the [transition-timing-function](#propdef-transition-timing-function), [transition-duration](#propdef-transition-duration), or [transition-delay](#propdef-transition-delay) property changes before the transition is complete. However, if the [transition-property](#propdef-transition-property) property changes such that the transition would not have started, the transition stops (and the property immediately changes to its final value).

Note that above rules mean that transitions do not start when the computed value of a property changes as a result of declarative animation (as opposed to scripted animation). This happens because the before-change style includes up-to-date style for declarative animations.

Tests

*   [before-load-001.html](https://wpt.fyi/results/css/css-transitions/before-load-001.html "css/css-transitions/before-load-001.html") [(live test)](http://wpt.live/css/css-transitions/before-load-001.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/before-load-001.html)
*   [changing-while-transition-001.html](https://wpt.fyi/results/css/css-transitions/changing-while-transition-001.html "css/css-transitions/changing-while-transition-001.html") [(live test)](http://wpt.live/css/css-transitions/changing-while-transition-001.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/changing-while-transition-001.html)
*   [changing-while-transition-002.html](https://wpt.fyi/results/css/css-transitions/changing-while-transition-002.html "css/css-transitions/changing-while-transition-002.html") [(live test)](http://wpt.live/css/css-transitions/changing-while-transition-002.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/changing-while-transition-002.html)
*   [changing-while-transition-003.html](https://wpt.fyi/results/css/css-transitions/changing-while-transition-003.html "css/css-transitions/changing-while-transition-003.html") [(live test)](http://wpt.live/css/css-transitions/changing-while-transition-003.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/changing-while-transition-003.html)
*   [changing-while-transition-004.html](https://wpt.fyi/results/css/css-transitions/changing-while-transition-004.html "css/css-transitions/changing-while-transition-004.html") [(live test)](http://wpt.live/css/css-transitions/changing-while-transition-004.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/changing-while-transition-004.html)
*   [currentcolor-animation-001.html](https://wpt.fyi/results/css/css-transitions/currentcolor-animation-001.html "css/css-transitions/currentcolor-animation-001.html") [(live test)](http://wpt.live/css/css-transitions/currentcolor-animation-001.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/currentcolor-animation-001.html)
*   [disconnected-element-001.html](https://wpt.fyi/results/css/css-transitions/disconnected-element-001.html "css/css-transitions/disconnected-element-001.html") [(live test)](http://wpt.live/css/css-transitions/disconnected-element-001.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/disconnected-element-001.html)
*   [dynamic-root-element.html](https://wpt.fyi/results/css/css-transitions/dynamic-root-element.html "css/css-transitions/dynamic-root-element.html") [(live test)](http://wpt.live/css/css-transitions/dynamic-root-element.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/dynamic-root-element.html)
*   [historical.html](https://wpt.fyi/results/css/css-transitions/historical.html "css/css-transitions/historical.html") [(live test)](http://wpt.live/css/css-transitions/historical.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/historical.html)
*   [inherit-height-transition.html](https://wpt.fyi/results/css/css-transitions/inherit-height-transition.html "css/css-transitions/inherit-height-transition.html") [(live test)](http://wpt.live/css/css-transitions/inherit-height-transition.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/inherit-height-transition.html)
*   [non-rendered-element-001.html](https://wpt.fyi/results/css/css-transitions/non-rendered-element-001.html "css/css-transitions/non-rendered-element-001.html") [(live test)](http://wpt.live/css/css-transitions/non-rendered-element-001.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/non-rendered-element-001.html)
*   [non-rendered-element-002.html](https://wpt.fyi/results/css/css-transitions/non-rendered-element-002.html "css/css-transitions/non-rendered-element-002.html") [(live test)](http://wpt.live/css/css-transitions/non-rendered-element-002.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/non-rendered-element-002.html)
*   [properties-value-inherit-001.html](https://wpt.fyi/results/css/css-transitions/properties-value-inherit-001.html "css/css-transitions/properties-value-inherit-001.html") [(live test)](http://wpt.live/css/css-transitions/properties-value-inherit-001.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/properties-value-inherit-001.html)
*   [properties-value-inherit-002.html](https://wpt.fyi/results/css/css-transitions/properties-value-inherit-002.html "css/css-transitions/properties-value-inherit-002.html") [(live test)](http://wpt.live/css/css-transitions/properties-value-inherit-002.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/properties-value-inherit-002.html)
*   [properties-value-inherit-003.html](https://wpt.fyi/results/css/css-transitions/properties-value-inherit-003.html "css/css-transitions/properties-value-inherit-003.html") [(live test)](http://wpt.live/css/css-transitions/properties-value-inherit-003.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/properties-value-inherit-003.html)
*   [starting-of-transitions-001.html](https://wpt.fyi/results/css/css-transitions/starting-of-transitions-001.html "css/css-transitions/starting-of-transitions-001.html") [(live test)](http://wpt.live/css/css-transitions/starting-of-transitions-001.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/starting-of-transitions-001.html)
*   [root-color-transition.html](https://wpt.fyi/results/css/css-transitions/root-color-transition.html "css/css-transitions/root-color-transition.html") [(live test)](http://wpt.live/css/css-transitions/root-color-transition.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/root-color-transition.html)
*   [transition-after-animation-001.html](https://wpt.fyi/results/css/css-transitions/transition-after-animation-001.html "css/css-transitions/transition-after-animation-001.html") [(live test)](http://wpt.live/css/css-transitions/transition-after-animation-001.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-after-animation-001.html)
*   [transition-remove-and-change-immediate.html](https://wpt.fyi/results/css/css-transitions/transition-remove-and-change-immediate.html "css/css-transitions/transition-remove-and-change-immediate.html") [(live test)](http://wpt.live/css/css-transitions/transition-remove-and-change-immediate.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-remove-and-change-immediate.html)
*   [transition-reparented.html](https://wpt.fyi/results/css/css-transitions/transition-reparented.html "css/css-transitions/transition-reparented.html") [(live test)](http://wpt.live/css/css-transitions/transition-reparented.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-reparented.html)
*   [transitions-retarget.html](https://wpt.fyi/results/css/css-transitions/transitions-retarget.html "css/css-transitions/transitions-retarget.html") [(live test)](http://wpt.live/css/css-transitions/transitions-retarget.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transitions-retarget.html)
*   [zero-duration-multiple-transition.html](https://wpt.fyi/results/css/css-transitions/zero-duration-multiple-transition.html "css/css-transitions/zero-duration-multiple-transition.html") [(live test)](http://wpt.live/css/css-transitions/zero-duration-multiple-transition.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/zero-duration-multiple-transition.html)

### 3.1. Faster reversing of interrupted transitions[](#reversing)

Many common transitions effects involve transitions between two states, such as the transition that occurs when the mouse pointer moves over a user interface element, and then later moves out of that element. With these effects, it is common for a running transition to be interrupted before it completes, and the property reset to the starting value of that transition. An example is a hover effect on an element, where a transition starts when the pointer enters the element, and then the pointer exits the element before the effect has completed. If the outgoing and incoming transitions are executed using their specified durations and timing functions, the resulting effect can be distractingly asymmetric because the second transition takes the full specified time to move a shortened distance. Instead, this specification makes second transition shorter.

The mechanism the above rules use to cause this involves the [reversing shortening factor](#transition-reversing-shortening-factor) and the [reversing-adjusted start value](#transition-reversing-adjusted-start-value). In particular, the reversing behavior is present whenever the reversing shortening factor is less than 1.

Note that these rules do not fully address the problem for transition patterns that involve more than two states.

Note that these rules lead to the entire timing function of the new transition being used, rather than jumping into the middle of a timing function, which can create a jarring effect.

This was one of several possibilities that was considered by the working group. See the [reversing demo](https://www.w3.org/TR/css-transitions-1/examples/transition-reversing-demo) demonstrating a number of them, leading to a working group resolution made on 2013-06-07 and edits made on 2013-11-11.

## 4\. Application of transitions[](#application)

When a property on an element is undergoing a transition (that is, when or after the transition has started and before the [end time](#transition-end-time) of the transition) the transition adds a style called the current value to the CSS cascade at the level defined for CSS Transitions in [\[CSS3CASCADE\]](#biblio-css3cascade "CSS Cascading and Inheritance Level 3").

Tests

*   [transition-important.html](https://wpt.fyi/results/css/css-transitions/transition-important.html "css/css-transitions/transition-important.html") [(live test)](http://wpt.live/css/css-transitions/transition-important.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-important.html)

Note that this means that computed values resulting from CSS transitions can inherit to descendants just like any other computed values. In the normal case, this means that a transition of an inherited property applies to descendant elements just as an author would expect.

Implementations must add this value to the cascade if and only if that property is not currently undergoing a CSS Animation ([\[CSS3-ANIMATIONS\]](#biblio-css3-animations "CSS Animations Level 1")) on the same element.

Note that this behavior of transitions not applying to the cascade when an animation on the same element and property is running does not affect whether the transition has started or ended. APIs that expose whether transitions are running (such as [transition events](#transition-events)) still report that a transition is running.

If the current time is at or before the [start time](#transition-start-time) of the transition (that is, during the delay phase of the transition), the [current value](#current-value) is a specified style that will compute to the [start value](#transition-start-value) of the transition.

If the current time is after the [start time](#transition-start-time) of the transition (that is, during the duration phase of the transition), the [current value](#current-value) is a specified style that will compute to the result of [interpolating](https://www.w3.org/TR/css-values-4/#interpolation) the property using the following values:

*   Va: [start value](#transition-start-value) of the transition
    
*   Vb: [end value](#transition-end-value) of the transition
    
*   p: the output of the [timing function](#transition-timing-function-property) for input (current time - start time) / (end time - start time)
    

The specific [interpolation](https://www.w3.org/TR/css-values-4/#interpolation) procedure to be used is defined by the property’s [animation type](https://www.w3.org/TR/web-animations-1/#animation-type).

## 5\. Completion of transitions[](#complete)

[Running transitions](#running-transition) complete at a time that is equal to or after their end time, but prior to the first [style change event](#style-change-event) whose time is equal to or after their [end time](#transition-end-time). When a transition completes, implementations must move all transitions that complete at that time from the set of running transitions to the set of [completed transitions](#completed-transition) and then fire the [events](#transition-events) for those completions. (Note that doing otherwise, that is, firing some of the events before doing all of the moving from [running transitions](#running-transition) to [completed transitions](#completed-transition), could allow a style change event to happen without the necessary transitions completing, since firing the event could cause a style change event, if an event handler requests up-to-date computed style or layout data.)

## 6\. Transition Events[](#transition-events)

The creation, beginning, completion, and cancellation of CSS transitions generate corresponding DOM Events. An event is [dispatched](https://html.spec.whatwg.org/multipage/infrastructure.html#concept-event-dispatch) to the element for each property that undergoes a transition on that element. This allows a content developer to perform actions that synchronize with changes to transitions.

Each event provides the name of the property the transition is associated with as well as the duration of the transition.

Tests

*   [transition-events-with-document-change.html](https://wpt.fyi/results/css/css-transitions/transition-events-with-document-change.html "css/css-transitions/transition-events-with-document-change.html") [(live test)](http://wpt.live/css/css-transitions/transition-events-with-document-change.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-events-with-document-change.html)

### 6.1. Interface `[TransitionEvent](#transitionevent)`[](#interface-transitionevent)

The `[TransitionEvent](#transitionevent)` interface provides specific contextual information associated with transitions.

#### 6.1.1. IDL Definition[](#interface-transitionevent-idl)

\[[Exposed](https://webidl.spec.whatwg.org/#Exposed)\=Window\]
interface `TransitionEvent` : [Event](https://dom.spec.whatwg.org/#event) {
  [constructor](#dom-transitionevent-transitionevent)([CSSOMString](https://www.w3.org/TR/cssom-1/#cssomstring) `type`, optional [TransitionEventInit](#dictdef-transitioneventinit) `transitionEventInitDict` = {});
  readonly attribute [CSSOMString](https://www.w3.org/TR/cssom-1/#cssomstring) [propertyName](#Events-TransitionEvent-propertyName);
  readonly attribute [double](https://webidl.spec.whatwg.org/#idl-double) [elapsedTime](#Events-TransitionEvent-elapsedTime);
  readonly attribute [CSSOMString](https://www.w3.org/TR/cssom-1/#cssomstring) [pseudoElement](#Events-TransitionEvent-pseudoElement);
};

dictionary `TransitionEventInit` : [EventInit](https://dom.spec.whatwg.org/#dictdef-eventinit) {
  [CSSOMString](https://www.w3.org/TR/cssom-1/#cssomstring) `propertyName` = "";
  [double](https://webidl.spec.whatwg.org/#idl-double) `elapsedTime` = 0.0;
  [CSSOMString](https://www.w3.org/TR/cssom-1/#cssomstring) `pseudoElement` = "";
};

Tests

*   [transitionevent-interface.html](https://wpt.fyi/results/css/css-transitions/transitionevent-interface.html "css/css-transitions/transitionevent-interface.html") [(live test)](http://wpt.live/css/css-transitions/transitionevent-interface.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transitionevent-interface.html)

#### 6.1.2. Attributes[](#interface-transitionevent-attributes)

`` `propertyName`, of type [CSSOMString](https://www.w3.org/TR/cssom-1/#cssomstring), readonly ``

The name of the CSS property associated with the transition.

Note: This is always the name of a longhand property. See [transition-property](#propdef-transition-property) for how specifying shorthand properties causes transitions on longhands.

`` `elapsedTime`, of type [double](https://webidl.spec.whatwg.org/#idl-double), readonly ``

The amount of time the transition has been running, in seconds, when this event fired not including any time spent in the delay phase. The calculation for of this member is defined along with each event type.

`` `pseudoElement`, of type [CSSOMString](https://www.w3.org/TR/cssom-1/#cssomstring), readonly ``

The name (beginning with two colons) of the CSS pseudo-element on which the transition occurred (in which case the target of the event is that pseudo-element’s corresponding element), or the empty string if the transition occurred on an element (which means the target of the event is that element).

`` `TransitionEvent(type, transitionEventInitDict)` `` is an [event constructor](http://w3c.github.io/dom/#constructing-events).

### 6.2. Types of `TransitionEvent`[](#event-transitionevent)

The different types of transition events that can occur are:

`transitionrun`

The `[transitionrun](#transitionrun)` event occurs when a transition is created (i.e., when it is added to the set of [running transitions](#running-transition)).

A negative [transition-delay](#propdef-transition-delay) will cause the event to fire with an `[elapsedTime](#Events-TransitionEvent-elapsedTime)` equal to the absolute value of the delay capped to the [transition-duration](#propdef-transition-duration) of the animation. That is, the elapsed time is equal to `min(max(-[transition-delay](#propdef-transition-delay), 0), [transition-duration](#propdef-transition-duration))`.

*   Bubbles: Yes
*   Cancelable: No
*   Context Info: propertyName, elapsedTime, pseudoElement

`transitionstart`

The `[transitionstart](#transitionstart)` event occurs when a transition’s delay phase ends.

The value of `[elapsedTime](#Events-TransitionEvent-elapsedTime)` for `[transitionstart](#transitionstart)` events is the same as the value used for `[transitionrun](#transitionrun)` events.

*   Bubbles: Yes
*   Cancelable: No
*   Context Info: propertyName, elapsedTime, pseudoElement

`transitionend`

The `[transitionend](#transitionend)` event occurs at the completion of the transition. In the case where a transition is removed before completion, such as if the [transition-property](#propdef-transition-property) is removed, then the event will not fire.

The value of `[elapsedTime](#Events-TransitionEvent-elapsedTime)` for this event is equal to the value of [transition-duration](#propdef-transition-duration).

*   Bubbles: Yes
*   Cancelable: No
*   Context Info: propertyName, elapsedTime, pseudoElement

Tests

*   [events-001.html](https://wpt.fyi/results/css/css-transitions/events-001.html "css/css-transitions/events-001.html") [(live test)](http://wpt.live/css/css-transitions/events-001.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/events-001.html)
*   [events-002.html](https://wpt.fyi/results/css/css-transitions/events-002.html "css/css-transitions/events-002.html") [(live test)](http://wpt.live/css/css-transitions/events-002.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/events-002.html)
*   [events-003.html](https://wpt.fyi/results/css/css-transitions/events-003.html "css/css-transitions/events-003.html") [(live test)](http://wpt.live/css/css-transitions/events-003.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/events-003.html)
*   [events-004.html](https://wpt.fyi/results/css/css-transitions/events-004.html "css/css-transitions/events-004.html") [(live test)](http://wpt.live/css/css-transitions/events-004.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/events-004.html)
*   [events-005.html](https://wpt.fyi/results/css/css-transitions/events-005.html "css/css-transitions/events-005.html") [(live test)](http://wpt.live/css/css-transitions/events-005.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/events-005.html)
*   [events-006.html](https://wpt.fyi/results/css/css-transitions/events-006.html "css/css-transitions/events-006.html") [(live test)](http://wpt.live/css/css-transitions/events-006.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/events-006.html)
*   [events-007.html](https://wpt.fyi/results/css/css-transitions/events-007.html "css/css-transitions/events-007.html") [(live test)](http://wpt.live/css/css-transitions/events-007.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/events-007.html)

`transitioncancel`

The `[transitioncancel](#transitioncancel)` event occurs when a transition is [canceled](#transition-cancel).

The `[elapsedTime](#Events-TransitionEvent-elapsedTime)` for `[transitioncancel](#transitioncancel)` events is the number of seconds from the end of the transition’s delay to the moment when the transition was canceled. If the transition had a negative [transition-delay](#propdef-transition-delay), the beginning of the transition is the moment equal to the absolute value of transition-delay seconds _prior_ to when the transition was actually triggered. Alternatively, if the transition had a positive transition-delay and the event is fired before the transition’s delay has expired, the `[elapsedTime](https://www.w3.org/TR/css-animations-1/#dom-animationevent-elapsedtime)` will be zero.

*   Bubbles: Yes
*   Cancelable: No
*   Context Info: propertyName, elapsedTime, pseudoElement

Tests

*   [transitioncancel-001.html](https://wpt.fyi/results/css/css-transitions/transitioncancel-001.html "css/css-transitions/transitioncancel-001.html") [(live test)](http://wpt.live/css/css-transitions/transitioncancel-001.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transitioncancel-001.html)
*   [transitioncancel-002.html](https://wpt.fyi/results/css/css-transitions/transitioncancel-002.html "css/css-transitions/transitioncancel-002.html") [(live test)](http://wpt.live/css/css-transitions/transitioncancel-002.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transitioncancel-002.html)

### 6.3. Event handlers on elements, `Document` objects, and `Window` objects[](#event-handlers-on-elements-document-objects-and-window-objects)

The following are the [event handlers](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers) (and their corresponding [event handler event types](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-event-type)) that must be supported by all [HTML elements](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements), as both [event handler content attributes](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-content-attributes) and [event handler IDL attributes](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-idl-attributes); and that must be supported by all `[Document](https://html.spec.whatwg.org/#document)` and `[Window](https://html.spec.whatwg.org/multipage/nav-history-apis.html#window)` objects, as event handler IDL attributes:

[Event handler](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers)

[Event handler event type](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-event-type)

`[ontransitionrun](#dom-globaleventhandlers-ontransitionrun)`

[transitionrun](#transitionrun)

`[ontransitionstart](#dom-globaleventhandlers-ontransitionstart)`

[transitionstart](#transitionstart)

`[ontransitionend](#dom-globaleventhandlers-ontransitionend)`

[transitionend](#transitionend)

`[ontransitioncancel](#dom-globaleventhandlers-ontransitioncancel)`

[transitioncancel](#transitioncancel)

## 7\. DOM Interfaces[](#interface-dom)

This specification extends the `[GlobalEventHandlers](https://html.spec.whatwg.org/multipage/webappapis.html#globaleventhandlers)` interface mixin from HTML to add [event handler IDL attributes](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-idl-attributes) for [transition events](#transition-events) as defined in [§ 6.3 Event handlers on elements, Document objects, and Window objects](#event-handlers-on-elements-document-objects-and-window-objects).

### 7.1. IDL Definition[](#interface-globaleventhandlers-idl)

partial interface mixin [GlobalEventHandlers](https://html.spec.whatwg.org/multipage/webappapis.html#globaleventhandlers) {
  attribute [EventHandler](https://html.spec.whatwg.org/multipage/webappapis.html#eventhandler) `ontransitionrun`;
  attribute [EventHandler](https://html.spec.whatwg.org/multipage/webappapis.html#eventhandler) `ontransitionstart`;
  attribute [EventHandler](https://html.spec.whatwg.org/multipage/webappapis.html#eventhandler) `ontransitionend`;
  attribute [EventHandler](https://html.spec.whatwg.org/multipage/webappapis.html#eventhandler) `ontransitioncancel`;
};

## 8\. Security Considerations[](#security)

_This section is not normative._

The security implications of this specification are limited because it doesn’t allow Web content to do things that it could not do before. Rather, it allows things that could previously be done with script to be done declaratively, and it ways that implementations can optimize (for frame rate and CPU usage).

One of the major categories of optimizations that implementations can make is implementing animation of certain high-value properties (such as [transform](https://www.w3.org/TR/css-transforms-1/#propdef-transform) and [opacity](https://www.w3.org/TR/css-color-4/#propdef-opacity)) run on a browser’s compositor thread or process without updating style or layout on the main Web content thread unless up-to-date style data are needed. This optimization often requires allocations of graphics memory to display the contents of the element being animated. Implementations should take care to ensure that Web content cannot trigger unsafe out-of-memory handling by using large numbers of animations or animations on elements covering large areas (where large may be defined in terms of pre-transform or post-transform size).

## 9\. Privacy Considerations[](#privacy)

_This section is not normative._

As for security, the privacy considerations of this specification are limited because it does not allow Web content to do things that it could not do before.

This specification may provide additional mechanisms that help to determine characteristics of the user’s hardware or software. However, ability to determine performance characteristics of the user’s hardware or software is common to many Web technologies, and this specification does not introduce new capabilities.

As described in [§ 10 Accessibility Considerations](#accessibility), implementations may provide mitigations to help users with disabilities. These mitigations are likely to be detectable by Web content, which means that users who would benefit from these mitigations may face a tradeoff between keeping their disability private from the Web content or benefiting from the mitigation.

## 10\. Accessibility Considerations[](#accessibility)

_This section is not normative._

### 10.1. Motion[](#accessibility-motion)

This specification provides declarative mechanisms for animations that previously needed to be done using script. Providing a declarative mechanism has multiple effects: it makes such animations easier to make and thus likely to be more common, but it also makes it easier for user agents to modify those animations if such modifications are needed to meet a user’s accessibility needs.

Thus, users who are sensitive to movement, or who require additional time to read or understand content, may benefit from user agent features that allow animations to be disabled or slowed down. (But see [§ 9 Privacy Considerations](#privacy) for information on the privacy implications of such mitigations.)

User agent implementors should be aware that Web content may depend on the firing of [transition events](#transition-events), so implementations of such mitigations may wish to fire transition events even if the transitions were not run as continuous animations. However, it is probably poor practice for Web content to depend on such events to function correctly.

### 10.2. Cascade[](#accessibility-cascade)

The CSS [cascade](https://www.w3.org/TR/css-cascade-6/#cascade) is a general mechanism in CSS that allows user needs to interact with author styles. This specification interacts with the cascade, but since it only allows animation between values that result from the existing cascade rules, it does not interfere with the user’s ability to force CSS properties to have particular values.

The cascade also allows users to disable transitions entirely by overriding the transition properties.

## 11\. Changes[](#changes)

### 11.1. Changes since Working Draft of 11 October 2018[](#changes-2018)

The following are the substantive changes made since the [Working Draft dated 11 October 2018](https://www.w3.org/TR/2018/WD-css-transitions-1-20181011/):

*   Clarified that `[GlobalEventHandlers](https://html.spec.whatwg.org/multipage/webappapis.html#globaleventhandlers)` is a mixin.
    
*   Replaced defunct `<timing-function>` by [<easing-function>](https://www.w3.org/TR/css-easing-2/#typedef-easing-function).
    
*   Added default value to `[transitionEventInitDict](#dom-transitionevent-transitionevent-type-transitioneventinitdict-transitioneventinitdict)` dictionary.
    
*   Removed trailing semicolon from [<single-transition-property>](#single-transition-property) syntax.
    
*   Associated event definitions with their `[GlobalEventHandlers](https://html.spec.whatwg.org/multipage/webappapis.html#globaleventhandlers)` container.
    
*   Added range definition notations to property values.
    
*   Added Web Platform Tests coverage.
    
*   Minor editorial fixes and improvements.
    

For more details on these changes, see the version control [change log](https://github.com/w3c/csswg-drafts/commits/main/css-transitions-1/Overview.bs).

### 11.2. Earlier changes[](#changes-earlier)

For changes in earlier working drafts:

1.  See the [changes section in the 11 October 2018 Working Draft](https://www.w3.org/TR/2018/WD-css-transitions-1-20181011/#changes).
    
2.  See the [changes section in the 30 November 2017 Working Draft](https://www.w3.org/TR/2017/WD-css-transitions-1-20171130/#changes).
    
3.  See the [changes section in the 19 November 2013 Working Draft](https://www.w3.org/TR/2013/WD-css3-transitions-20131119/#changes).
    
4.  See the [the ChangeLog](https://www.w3.org/TR/2013/WD-css3-transitions-20130212/ChangeLog) for changes in previous working drafts.
    
5.  For more details on these changes, see the version control change logs, which are split in many parts because of file renaming:
    
    *   [change log since 2017 October 12](https://github.com/w3c/csswg-drafts/commits/main/css-transitions-1/Overview.bs),
        

## 12\. Acknowledgments[](#acknowledgments)

Thanks especially to the feedback from Tab Atkins, Carine Bournez, Aryeh Gregor, Vincent Hardy, Anne van Kesteren, Cameron McCormack, Alex Mogilevsky, Jasper St. Pierre, Estelle Weyl, and all the rest of the [www-style](https://lists.w3.org/Archives/Public/www-style/) community.

Tests

Tests related to later levels of this specification

*   [allow-discrete-auto-inset.html](https://wpt.fyi/results/css/css-transitions/allow-discrete-auto-inset.html "css/css-transitions/allow-discrete-auto-inset.html") [(live test)](http://wpt.live/css/css-transitions/allow-discrete-auto-inset.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/allow-discrete-auto-inset.html)
*   [custom-property-and-allow-discrete.html](https://wpt.fyi/results/css/css-transitions/custom-property-and-allow-discrete.html "css/css-transitions/custom-property-and-allow-discrete.html") [(live test)](http://wpt.live/css/css-transitions/custom-property-and-allow-discrete.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/custom-property-and-allow-discrete.html)
*   [display-none-no-animations.html](https://wpt.fyi/results/css/css-transitions/display-none-no-animations.html "css/css-transitions/display-none-no-animations.html") [(live test)](http://wpt.live/css/css-transitions/display-none-no-animations.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/display-none-no-animations.html)
*   [idlharness-2.html](https://wpt.fyi/results/css/css-transitions/idlharness-2.html "css/css-transitions/idlharness-2.html") [(live test)](http://wpt.live/css/css-transitions/idlharness-2.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/idlharness-2.html)
*   [inert-while-transitioning-to-display-none.html](https://wpt.fyi/results/css/css-transitions/inert-while-transitioning-to-display-none.html "css/css-transitions/inert-while-transitioning-to-display-none.html") [(live test)](http://wpt.live/css/css-transitions/inert-while-transitioning-to-display-none.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/inert-while-transitioning-to-display-none.html)
*   [starting-style-parsing.html](https://wpt.fyi/results/css/css-transitions/parsing/starting-style-parsing.html "css/css-transitions/parsing/starting-style-parsing.html") [(live test)](http://wpt.live/css/css-transitions/parsing/starting-style-parsing.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/parsing/starting-style-parsing.html)
*   [transition-behavior.html](https://wpt.fyi/results/css/css-transitions/parsing/transition-behavior.html "css/css-transitions/parsing/transition-behavior.html") [(live test)](http://wpt.live/css/css-transitions/parsing/transition-behavior.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/parsing/transition-behavior.html)
*   [starting-style-adjustment.html](https://wpt.fyi/results/css/css-transitions/starting-style-adjustment.html "css/css-transitions/starting-style-adjustment.html") [(live test)](http://wpt.live/css/css-transitions/starting-style-adjustment.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/starting-style-adjustment.html)
*   [starting-style-cascade.html](https://wpt.fyi/results/css/css-transitions/starting-style-cascade.html "css/css-transitions/starting-style-cascade.html") [(live test)](http://wpt.live/css/css-transitions/starting-style-cascade.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/starting-style-cascade.html)
*   [starting-style-first-letter-crash.html](https://wpt.fyi/results/css/css-transitions/starting-style-first-letter-crash.html "css/css-transitions/starting-style-first-letter-crash.html") [(live test)](http://wpt.live/css/css-transitions/starting-style-first-letter-crash.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/starting-style-first-letter-crash.html)
*   [starting-style-name-defining-rules.html](https://wpt.fyi/results/css/css-transitions/starting-style-name-defining-rules.html "css/css-transitions/starting-style-name-defining-rules.html") [(live test)](http://wpt.live/css/css-transitions/starting-style-name-defining-rules.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/starting-style-name-defining-rules.html)
*   [starting-style-rule-basic.html](https://wpt.fyi/results/css/css-transitions/starting-style-rule-basic.html "css/css-transitions/starting-style-rule-basic.html") [(live test)](http://wpt.live/css/css-transitions/starting-style-rule-basic.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/starting-style-rule-basic.html)
*   [starting-style-rule-none.html](https://wpt.fyi/results/css/css-transitions/starting-style-rule-none.html "css/css-transitions/starting-style-rule-none.html") [(live test)](http://wpt.live/css/css-transitions/starting-style-rule-none.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/starting-style-rule-none.html)
*   [starting-style-rule-pseudo-elements.html](https://wpt.fyi/results/css/css-transitions/starting-style-rule-pseudo-elements.html "css/css-transitions/starting-style-rule-pseudo-elements.html") [(live test)](http://wpt.live/css/css-transitions/starting-style-rule-pseudo-elements.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/starting-style-rule-pseudo-elements.html)
*   [starting-style-size-container.html](https://wpt.fyi/results/css/css-transitions/starting-style-size-container.html "css/css-transitions/starting-style-size-container.html") [(live test)](http://wpt.live/css/css-transitions/starting-style-size-container.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/starting-style-size-container.html)
*   [transition-behavior.html](https://wpt.fyi/results/css/css-transitions/transition-behavior.html "css/css-transitions/transition-behavior.html") [(live test)](http://wpt.live/css/css-transitions/transition-behavior.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-behavior.html)
*   [transition-behavior-events.html](https://wpt.fyi/results/css/css-transitions/transition-behavior-events.html "css/css-transitions/transition-behavior-events.html") [(live test)](http://wpt.live/css/css-transitions/transition-behavior-events.html) [(source)](https://github.com/web-platform-tests/wpt/blob/master/css/css-transitions/transition-behavior-events.html)

* * *

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
