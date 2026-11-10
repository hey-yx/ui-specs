---
title: "IBM Carbon · Search 搜索用法"
source: https://carbondesignsystem.com/components/search/usage/
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-carbon-search
publisher: "IBM Carbon"
---

# IBM Carbon · Search 搜索用法

> 来源：[https://carbondesignsystem.com/components/search/usage/](https://carbondesignsystem.com/components/search/usage/)

---

---

---

This live demo contains only a preview of functionality and styles available for this component. View the [full demo](https://react.carbondesignsystem.com/?path=/story/components-search--default&globals=theme:white) on Storybook for additional information such as its version, controls, and API documentation.

## Overview

Search offers users a way to explore a website or application using keywords. Search can be used as the primary means of discovering content or as a filter to aid the user in finding content.

### When to use

            - To help users find data more efficiently within a complex or large data set.
            - Use at a global level when searching an entire site.
            - Use at a page level when searching through content on one page specifically.
            - Use at a component level when searching data in a component, like a [data table](https://www.carbondesignsystem.com/building-blocks/core/components/data-table/guidelines).

### When not to use

            - Do not use when there is small or limited amounts of data.
            - Do not use when the information is simple and can be found easily within one view.

## Formatting

### Anatomy

            - **Field:**The place where a user enters their search query.
            - **Search icon:**Signifies a search field. The magnifying glass icon is a universal way to indicate search.
            - **Field text:**Inputted search text by the user. Placeholder text is visible before the user types into the field.
            - **Close icon:**Appears after the user has actively typed into the search field. Acts as a function to clear the search field.
![Default search anatomy](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/search-anatomy-fixed.png)

### Styling

There are two styles of search, default and fluid. They share the same functionality but look visually different, influencing where to use them.

| Style | Appearance | Use case |
| --- | --- | --- |
| Default | A traditional style where there is no label indicated. | Use when white space is needed between components. For example, a default search style is typically used at a global or page level. |
| Fluid | An alternative style where a label is placed inside of the search field and is stacked inline with the user input field text. | Use in expressive moments, fluid forms, and contained spaces. |
![A default style input is shown on the top and fluid style is on the bottom.](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/search-styles.png)

A default style input is shown on the top and fluid style is on the bottom.

### Sizing

#### Default input heights

There are four sizes of search: extra small, small, medium, and large. Use consistent component sizes throughout a layout to maintain alignment and visual harmony.

| Size | Height (px/rem) | Use case |
| --- | --- | --- |
| Extra small (xs) | 24/ 1.5 | Use for highly dense layouts where maximizing information within limited space is a priority. |
| Small (sm) | 32 / 2 | Use for compact interfaces that require reduced component height while maintaining comfortable readability and interaction. |
| Medium (md) | 40 / 2.5 | Use as the default and most commonly used size. Use when no specific density or spacing requirements exist. |
| Large (lg) | 48 / 3 | Use in spacious layouts where increased emphasis and easier interaction are important. The large size is typically at a global level when the user is searching content within a page view. |
![Default search sizes](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/search-sizes-fixed-1.png)

Sizes for select: extra small, small, medium, and large

#### Fluid input height

There is only one input height at 64px and it is visually larger than the default input height.

![Fluid search size](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/search-sizes-fluid.png)

Fluid input height size for search

#### Width

There is no minimum or maximum width for search. The width can be customized appropriately for its context.

### Placement

Place the search component within a user interface where users expect to find it and where it is appropriate for how it is being used in context, whether at a global level, page-specific level, or within a component.

The default search can be arranged on the grid to align the container with other components containers. Search can also hang to align with other hanging component containers on the same page, depending on the use case.

![Do align the default search container vertically with other text on the page.](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/search-do-fixed.png)

![Do hang the fluid search container with other hanging components.](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/search-do-fluid.png)

## Content

### Main elements

#### Placeholder text

Useful and short text hinting at what the user can search for. For example, "Search for networks or devices."

#### Field text

             - Key words entered by the user to find a search result.
             - Keep the field text concise and relate the field text as closely to the result you want to find.

### Further guidance

For further content guidance, see Carbon's [content guidelines](https://www.carbondesignsystem.com/building-blocks/foundations/content/overview).

## Behaviors

### States

The search component has four states: enabled, focus, filled, and disabled.

![Default search states](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/search-states-fixed.png)

### Interactions

#### Mouse

Click on the search field input to start typing. Once a user starts typing, a close icon ('x') will appear and provides a way to clear the input field by clicking on the Close icon.

#### Keyboard

Press `Enter` to submit text as a search term, or press `Esc` to clear the search field. Once a user starts typing, a Close icon ('x') will appear and provides a way to clear the input field by pressing the `Space` or `Enter` keys.

![Default search click areas](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/search-click-area-fixed.png)
