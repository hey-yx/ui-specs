---
title: "GitHub Primer · Component · Popover"
source: https://raw.githubusercontent.com/primer/design/main/content/components/popover.mdx
section: components
tag: "规范"
fetched: 2026-11-14
status: full
id: comp-primer-popover
publisher: "GitHub Primer"
---

# GitHub Primer · Component · Popover

> 来源：https://primer.style/components/popover

## Usage

The popover component is used to deliver context-specific information and functionality. It’s a small dialog to bring attention to specific user interface elements. It can provide additional information, options, or actions related to a specific element or task. Popovers can be helpful for flows that require light onboarding or instruction.

Popovers may contain text, links, and buttons.

Popover supports various caret positions, which you can specify, though the default is top. Note that the top-left, bottom-left, top-right, and bottom-right values modify the horizontal alignment of the popover.

![A popover component example](https://user-images.githubusercontent.com/586552/227022626-625dad35-47d5-46ac-ba64-3c1285a37410.png)

## Best practices

Use sparingly to avoid cognitive overload. Though they can be used for a variety of things, they should be used sparingly to avoid cognitive overload. It's important to consider the context in which the popover appears. Are there other popovers on the page? Does it appear on page load, or require the user to open the popover?

Unlike other messaging components, popovers should never include critical information (such as errors) and should always include a dismiss action.

## Accessibility and usability expectations

- Popovers should be operable using the keyboard alone, without requiring the use of a mouse or other pointing device.

- When a popover is opened, focus should be moved to the popover so that keyboard users can interact with it. When the popover is closed, focus should be returned to the element that triggered it. For more on this, see the accessibility guidelines [on focus management](https://primer.style/guides/accessibility/focus-management).

### Built-in accessibility features

Beyond generating a visual container, the component has no built-in accessibility features.

### Implementation requirements

As `Popover` currently lacks an explicit `role`, make sure to add an explicit `role="complementary"` – this will identify the component as a content that is "tangentially" related to its surroundings (the equivalent of an `` element).

When using the component, make sure that the component follows the element that it relates to. This will ensure that the content of the `Popover` will be read/announced by screen readers immediately after its related element. It will also ensure that any focusable elements inside the `Popover` will logically follow the related element.

Make sure that there is a clear way for a user to dismiss the `Popover` – for instance, if the component is used to provide additional information, include a button (such as a "Got it" control) that dismisses the `Popover`. When the component is closed, move focus back to the element that the `Popover` related to. See the accessibility guidelines on [focus management](https://primer.style/guides/accessibility/focus-management).

### How to test the component

#### Integration tests

- The `Popover` follows its related element in the underlying rendered document structure
- If the `Popover` contains any focusable controls, these controls logically follow their related element in the overall focus order
- The `Popover` has been given an appropriate `role`, such as `role="complementary"`
- There is a way for users to close the `Popover`

### Known accessibility issues (GitHub staff only)

## Related links

- Feature onboarding
