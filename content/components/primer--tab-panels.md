---
title: "GitHub Primer · Component · Tab panels"
source: https://raw.githubusercontent.com/primer/design/main/content/components/tab-panels.mdx
section: components
tag: "规范"
fetched: 2026-11-14
status: full
id: comp-primer-tab-panels
publisher: "GitHub Primer"
---

# GitHub Primer · Component · Tab panels

> 来源：https://primer.style/components/tab-panels

![](https://user-images.githubusercontent.com/2313998/231862745-5099ccae-9f65-4a8e-a6f5-cf5c1b6ba3c2.png)

## Usage

Tab panels are used to group related content into views that are shown and hidden. Each view has a corresponding tab that provides a label and controls the panel's visibility.

Tabs in a tab panel should not be links that navigate the user to a new URL. If you want tab-like navigation, use a [tab nav](https://primer.style/components/tab-nav) instead.

For example, a tab panel is used to switch between the "Branches" and "Tags" views in the branch selection dialog.

  ![](https://user-images.githubusercontent.com/2313998/231862746-9f35f3a6-6f31-4733-b1af-2bad9cd84745.png)

### Best practices

The same best practices apply to tab panels as they do to [tab nav](https://primer.style/components/tab-nav#best-practices).

## Anatomy

![](https://user-images.githubusercontent.com/2313998/231862747-ea4e4b3b-847f-4ead-8b73-aa9bfc99fb32.png)

**Tab list:** A set of buttons used to switch between views. Each tab should concisely label the view it's associated with.

**Tab panel:** The view associated with the active tab.

## Options

The same options are available to tab panels as they are to [tab nav](https://primer.style/components/tab-nav#options).

## Accessibility

### Keyboard navigation

Tabs, like all interactive elements, can be activated using a cursor or keyboard.

When a user moves focus into the `tablist` using the Tab key, the active tab should be focused. A `tablist` is only a single Tab stop. Once focused, navigation through the `tablist` can then conducted with Left, Right, Home, and End keypresses.

### Other a11y guidance

Tab nav and tab panels are almost identical. Reference the [tab nav accessibility guidelines](https://primer.style/components/tab-nav#accessibility) for more guidance.

| Key(s)                                                                                                                                                         | Description                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Tab        | Moves focus from the tablist to the tab panel or next focusable node.                                |
| Enter      | Activates the focused tab.                                                                           |
| ArrowLeft  | Activates the previous tab. If a user is focused on the first tab, wrap to activate the last tab.    |
| ArrowRight | Activates the mext tab. If a user is focused on the last tab, wrap to activate the first tab.        |

### Known accessibility issues (GitHub staff only)

## Related links

- [Tab nav](https://primer.style/components/tab-nav)
- [Underline nav](https://primer.style/components/underline-nav)
