---
title: "GitHub Primer · Component · UnderlinePanels"
source: https://raw.githubusercontent.com/primer/design/main/content/components/underline-panels.mdx
section: components
tag: "规范"
fetched: 2026-11-14
status: full
id: comp-primer-underline-panels
publisher: "GitHub Primer"
---

# GitHub Primer · Component · UnderlinePanels

> 来源：https://primer.style/components/underline-panels

The [underline nav](https://primer.style/components/underline-nav) guidelines cover the design guidelines not mentioned here.

  The guidelines on this page only highlight the differences between underline panels and underline nav.

## Usage

Underlined panels let users switch between 2 or more related panels of content without changing the URL or leaving their current context.

If you want to use this pattern for tabs that change the URL when activated, use the [underline nav](https://primer.style/components/underline-nav) component instead.

### Best practices

- One of the tabs should be selected by default when the user loads the page.
- Avoid overwhelming the user with too many tabs. If you have too many tabs, try grouping your content into broader categories or exposing more of the content on the page without requiring the user to click into a tab.
- Each view should have enough information so the user can complete their tasks without switching back and forth between tabs.
- Views should be able to be navigated in any order. This is not a pattern for navigating stepped flows.

## Accessibility

Underline panels are made of the following ARIA roles:

- `tablist`: the container wrapping the tabs
- `tab`: each individual tab
- `tabpanel`: the container wrapping the content associated with each tab

The active tab is conveyed to assistive technologies using the `aria-selected` attribute. Each tab is associated with it's corresponding panel using the `aria-controls` attribute.

Icons in [UnderlinePanels.Tab](https://primer.style/components/underline-panels/react/draft#underlinepanelstab) are purely decorative and are hidden from screen readers by default. If the icon does convey any informational meaning, the adjacent text inside of the tab must provide all the necessary information without relying on the icon itself.

![](https://github.com/primer/design/assets/2313998/63c0312a-1e74-4990-b4bf-1795e5f3640d)

### Keyboard navigation

Underline panels' tabs follow the [automatic activation pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-automatic/). This means that when a tab receives focus, the tab is activated and the associated panel is displayed.

| Key(s)                                                               | Description                                                                                                                                                                              |
| -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enter or Space | Activates the focused tab.                                                                                                                                                               |
| Tab                                       | When focus moves into the tab list, focus goes to the active tab.
 When the tab list contains focus, moves focus to the next element in the page tab sequence outside the tablist. |
| Arrow Left                           | Moves focus to the previous tab. If focus is on the first tab, focus moves to the last tab.
 The focused tab is activated.                                                         |
| Arrow Right                          | Moves focus to the next tab. If focus is on the last tab, focus moves to the first tab.
 The focused tab is activated.                                                             |
| Home                                      | Moves focus to the first tab and activates it.                                                                                                                                           |
| End                                       | Moves focus to the last tab and activates it.                                                                                                                                            |

### Known accessibility issues (GitHub staff only)

## Related links

- [Segmented control](https://primer.style/components/segmented-control)
- [Underline panels](https://primer.style/components/underline-panels)
- [Navigation](https://primer.style/ui-patterns/navigation)
