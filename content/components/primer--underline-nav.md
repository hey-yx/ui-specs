---
title: "GitHub Primer · Component · Underline nav"
source: https://raw.githubusercontent.com/primer/design/main/content/components/underline-nav.mdx
section: components
tag: "规范"
fetched: 2026-11-14
status: full
id: comp-primer-underline-nav
publisher: "GitHub Primer"
---

# GitHub Primer · Component · Underline nav

> 来源：https://primer.style/components/underline-nav

## Usage

The underline nav provides navigation links to let users switch between 2 or more related views without leaving their current context.

If you want to use this pattern without any linked items, use the [underline panels](https://primer.style/components/underline-panels) component.

### Best practices

- Each tab panel should have discrete content with a unique URL, not just different formats to view the same content.
- One of the tabs should be selected by default when the user loads the page.
- Avoid overwhelming the user with too many tabs. Instead consider a navigation structure like a [nav list](https://primer.style/components/nav-list) that's meant to handle more links.
- Each view should have enough information so the user can complete their tasks without switching back and forth between tabs.
- Views should be able to be navigated in any order. This is not a pattern for navigating stepped flows.

## Anatomy

![Anatomy of the UnderlineNav component](https://user-images.githubusercontent.com/175638/186432408-c2479dd2-31fe-4261-9f9a-e67d49b28e72.png)

- **Item**: Tabs to switch between views when activated.
- **Current item**: The item currently selected is highlighted with an underline.
- **Label text**: Describes the navigation item.
- **Leading icon (optional)**: An icon that identifies the navigation item.
- **Counter (optional)**: Displays a count next to the label.
- **Overflow menu**: A disclosure menu that displays additional items when there are too many to fit in the available space.

### Label text

The title of the view associated with that tab. Keep labels clear, short, and concise.

Do not rely on leading visuals, tooltips, or supplemental descriptions to communicate what the tab represents.

    ![](https://github.com/primer/design/assets/2313998/b96d853e-3a03-47c7-854b-cd69914f6d80)
    Use label text that clearly communicates what the tab represents.

    ![](https://github.com/primer/design/assets/2313998/8d703e04-73f2-4d0c-898d-3a136d193af3)
    Don't rely on supplemental content to communicate what the tab represents.

### Leading icons

Use an [Octicon](https://primer.style/foundations/icons) to improve the scannability of common items, but only when relevant. When adding leading icons, all items in the navigation should have one.

Make sure that icons used are consistent across views, and that they are not repeated for different navigations across the product.

Label text is required. Leading icons are just a "bonus" affordance and should not be the only way to identify the navigation item.

    ![](https://github.com/primer/design/assets/2313998/58b54936-37d4-41d6-a263-7ec49993deb0)
    Use leading icons as an enhancement.

    ![](https://github.com/primer/design/assets/2313998/ad989a92-f078-454b-9649-7add73785c92)
    Don't exclude label text.

### Counters

You may include a counter to indicate the number of related resources contained in the desitination page, such as the number of open issues.

When loading multiple counters asynchronously, wait for all the data to be ready before displaying the counters, so you can avoid multiple layout shifts. Use the counter loading state while waiting for the data.

## Hierarchy

Tabs may be used to switch between content at different levels of hierarchy:

- subpages within a larger context
- content panels within a section of a page

        ![A page with three top-level tabs. Then, a placeholder heading and description followed by more tabs to separate subpage content. Top-level tabs are highlighted.](https://github.com/primer/design/assets/2313998/bd6732fc-3e62-4e2e-afc2-d3312a22e8c2)
        Subpage tabs

        ![A page with three top-level tabs. Then, a placeholder heading and description followed by more tabs to separate subpage content. Inner subpage content tabs are highlighted.](https://github.com/primer/design/assets/2313998/314e0800-3dcc-4bb6-91de-7608db202a0c)
        Page content tabs

Avoid more than 2 levels of tab hierarchy. If you need more than 2 levels of hierarchy, consider:

- rethinking your information architecture
- removing a layer of hierarchy and putting more content on the page
- using a [nav list](https://primer.style/components/nav-list) for a level of hierarchy

### Stacking

Don't stack multiple underline navs or underline panels directly on top of eachother to convey hierarchical levels of navigation. Instead, consider using a [nav list](https://primer.style/components/nav-list) for a higher level of hierarchy.

    ![](https://github.com/primer/design/assets/2313998/3b9c4160-3f9d-4a28-854f-9d50dcce4aaa)
    Limit the levels of tab hierarchy

    ![](https://github.com/primer/design/assets/2313998/72a9b78d-3227-48ab-a62c-bb44ed4d3be2)
    Don't stack tabs or create deep levels of tab hierarchy

## Layout

### Placement

Underline nav should be placed directly above the content it affects.

### Alignment

Align the the underline nav to the left and, when possible, make the component span the available width.

The left and right edges of the underline nav should not extend beyond the width of the content it affects.

### Clear beginning and end

It should be clear where the tab-switchable content begins and ends. Use spacing, borders, headings, or other visual cues to make it clear where the tab-switchable content ends.

### Responsive design

![The underline nav without overflowing items and the component on a smaller viewport showing the overflow menu](https://user-images.githubusercontent.com/175638/229456836-bfa1ddbb-5cef-4dbc-a0db-da77814c63a2.png)

Underline nav handles overflowing items automatically by collapsing them into a disclosure menu. When some of the items don't fit the available space, the component will first hide leading icons to economize space and then move items to the overflow menu one by one.

## Accessibility

Set `aria-current` to `"page"` to indicate that the item represents the current page. Set `aria-current` to `"location"` to indicate that the item represents the current location on a page.

### Keyboard navigation

Items can be activated using a cursor or keyboard

| Key(s)                           | Description                   |
| -------------------------------- | ----------------------------- |
| Enter | Activates the focused item.   |
| Tab   | Moves focus to the next item. |

### Known accessibility issues (GitHub staff only)

## Related links

- [Nav list](https://primer.style/components/nav-list)
- [Segmented control](https://primer.style/components/segmented-control)
- [Underline panels](https://primer.style/components/underline-panels)
- [Navigation](https://primer.style/ui-patterns/navigation)
