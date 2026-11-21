---
title: "GitHub Primer · Component · Page header"
source: https://raw.githubusercontent.com/primer/design/main/content/components/page-header.mdx
section: components
tag: "规范"
fetched: 2026-11-14
status: full
id: comp-primer-page-header
publisher: "GitHub Primer"
---

# GitHub Primer · Component · Page header

> 来源：https://primer.style/components/page-header

## Usage

The page header arranges elements that apply context and provide navigation for the current page.

The elements within page header are rearranged and displayed accordingly depending on the [viewport size](https://primer.style/foundations/layout#viewport-ranges) and context of the page.

![Page header component](https://user-images.githubusercontent.com/586552/222194474-74b72ae3-f8d4-4336-9a2c-9d5c18d91c42.png)

## Anatomy

Page header can include a context bar, title bar, description, and contextual navigation (pertaining to the current page).

By default, the [context bar](#context-bar) is visible on narrow viewports only, the [title bar](#title-bar) is visible on all viewports, and the leading action and trailing action are visible on regular viewports.

![Page header anatomy](https://github.com/primer/design/assets/1446503/a17ac8aa-e7e5-45fd-9e03-00bbb7dcff75)

## Context bar

The context bar is intended to set context for the user on smaller viewports and provide any actions that fit within the context bar. As a reminder, by default, the context bar (including its actions) is only visible on narrow viewports.

      Parent link

      The default way to let users navigate up in the hierarchy on narrow viewports.

  ![](https://user-images.githubusercontent.com/586552/222194471-dfc56e9a-a2ab-48a0-8a04-41ebb5ec4adf.png)

      Context bar actions

      Actions that appear in the context bar specifically.

  ![](https://user-images.githubusercontent.com/586552/222194470-da8126b8-72c5-4078-968e-ebc5c2bf3140.png)

      Context bar area

      The context bar is a generic slot for any component above the title region. Use it for custom breadcrumbs and
      other navigation elements instead of parent link.

  ![](https://user-images.githubusercontent.com/586552/222194469-85131849-4a7a-41e6-abca-040d042110df.png)

## Title bar

The title bar can include a static page title, actions, and leading and trailing visuals.

      Default title variant

      Most common page title size. Use for static titles in most situations.

  ![](https://user-images.githubusercontent.com/586552/222194467-1031b33b-81e7-429b-9201-d154fd7e9d59.png)

      Large title variant

      Use large for for user-generated content such as issues, pull requests, or discussions.

  ![](https://user-images.githubusercontent.com/586552/222194464-6c477db6-bb11-445e-b27e-41a0c7267758.png)

      Subtitle variant

      Use subtitle when a title is already present in the page, such as in a Split page layout.

  ![](https://user-images.githubusercontent.com/586552/222215097-79bb0d77-af5c-4199-81a1-65d98a7a0556.png)

      Leading visual

      Leading visuals are optional and appear at the start of the title. They can be octicons, avatars, and other custom
      visuals that fit a small area. Leading visuals remain visible on all viewports.

  ![](https://user-images.githubusercontent.com/586552/222194458-922bd3bf-475d-4d76-97a1-bd8cda6af6f5.png)

      Trailing visual

      Trailing visual and trailing text can display auxiliary information. They're placed at the right of the item, and
      can denote status, privacy details, etc. Trailing visuals remain visible on all viewports.

  ![](https://user-images.githubusercontent.com/586552/222194459-daf8c4b8-0452-40a2-bdf3-2b74be06e7ef.png)

      Leading action

      A back button can be used as a leading action for local navigation. On narrow viewports, use parent link instead.

  ![](https://user-images.githubusercontent.com/586552/222503965-dc2d7727-6a45-402a-abb0-948a58866017.png)

      Trailing action

      Trailing action can display subtler actions aligned directly next to the title. On narrow viewports, replace the
      trailing action with an item in an overflow button.

  ![](https://user-images.githubusercontent.com/586552/222194453-0f3e29b8-28cb-4623-8039-f546e1ae6622.png)

## Accessibility

### Landmark usage

Pageheader allows usage of different HTML landmarks to create a more accessible UI.
The usage of `header` and `nav` regions are allowed within PageHeader, both with different use cases.

If the `PageHeader` is not contained within a landmark, consider using the `role` prop to indicate one and provide it with an accessible name (perhaps the same as `PageHeader.Title`) via `aria-label`:

```jsx

      Page Title

  ...

```

#### PageHeader with `header` landmark

When utilizing landmarks, it's best to ensure that you’re using them correctly. For the header landmark you should follow these guidelines.

- Only utilize `header` if one does not currently exist on the page.
- Utilize `header` if the `PageHeader` consists of site-oriented content, typically existing at the top of the page.
- Ensure that when used on `PageHeader`, that the component itself is not within other landmarks, such as `main`.

#### PageHeader with `nav` landmark

Navigation landmarks are best utilized to group links that pertain to navigation of the page.
You can have multiple navigation landmarks, but it’s important to ensure that each unique navigation element has a unique label attached, either via `aria-label` or `aria-labelledby`.
You can utilize `PageHeader.Navigation` as a `navigation` landmark through the `as` prop.
This further extends the accessibility of this component, as it allows users to navigate via landmarks easier.
It’s important to note that if you utilize a component with an existing `navigation` landmark such as `UnderlineNav` then you should not use `PageHeader.Navigation` as a navigation landmark, as this would be a duplicate.

For navigation, you should follow these guidelines:

- If you have a list or grouping of links within `PageHeader.Navigation`, you should utilize the `nav` type for this element.
- If you’re already utilizing a component with a navigation landmark (such as `UnderlineNav`), you should not use `PageHeader.Navigation` as a navigation landmark.
- If more than one `navigation` landmark exists on the page at a given time, you should add a unique label to each one.
  You can do this by either passing an `aria-label` or `aria-labelledby` attribute to `PageHeader.Navigation`.

### Heading Structure

`PageHeader.Title` renders its content as a heading in the background and most of the time it will have crucial information about the page, so it’s important to ensure that you’re using it in an accessible manner.

`PageHeader.Title` is shipped as an `H2` by default, but only if you do not pass a heading level to it via the `as` prop. You should modify the level of this component if the default heading `H2` does not make sense with the existing heading structure on the page.

### Known accessibility issues (GitHub staff only)
