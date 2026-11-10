---
title: "IBM Carbon · Accordion 手风琴用法"
source: https://carbondesignsystem.com/components/accordion/usage/
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-carbon-accordion
publisher: "IBM Carbon"
---

# IBM Carbon · Accordion 手风琴用法

> 来源：[https://carbondesignsystem.com/components/accordion/usage/](https://carbondesignsystem.com/components/accordion/usage/)

---

---

This live demo contains only a preview of functionality and styles available for this component. View the [full demo](https://react.carbondesignsystem.com/?path=/story/components-accordion--default&globals=theme:white) on Storybook for additional information such as its version, controls, and API documentation.

## Overview

The accordion component delivers large amounts of content in a small space through progressive disclosure. The header title gives the user a high level overview of the content allowing the user to decide which sections to read.

Accordions can make information processing and discovering more effective. However, it does hide content from users and it’s important to account for a user not noticing or reading all of the included content.

### When to use

            - To organize related information.
            - To shorten pages and reduce scrolling when content is not crucial to read in full.
            - When space is at a premium and long content cannot be displayed all at once, like on a mobile interface or in a side panel.

### When not to use

            - When organizing large amounts of information that can be nested, consider using [tree view](https://www.carbondesignsystem.com/building-blocks/core/components/tree-view/guidelines) instead.
            - If a user is likely to read all of the content, then don't use an accordion as it adds the burden of an extra click; instead use a full scrolling page with normal headers.

## Formatting

### Anatomy

![Accordion anatomy](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/accordion-anatomy.png)

            1. **Header:** contains the section title and is control for revealing the panel.
            2. **Icon:** indicates if the panel is open or closed.
            3. **Panel:** the section of content associated with an accordion header.

### Alignment

#### Flush alignment

Use flush alignment when designing within smaller spaces on a page such as side panels or sidebars to achieve better text alignment with other content. Flush alignment is also used to help avoid converging rule lines between components that are close to each other on a page.

![Accordion flush alignment](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/accordion-flush.png)

Flush alignment places the row title and chevron icons with 0px padding, keeping them flush to the rule dividers. For hover and focus interactive states, the left and right padding receives an additional 16px padding.

![Accordion flush alignment](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/accordion-flush-spec.png)

#### Icon alignment

By default the chevron icon is placed on the `end` side of the header. This allows for the title on the `start` side to align with other type elements in the layout, which is the preferred alignment scenario.

However, in some rare scenarios, the accordion may be modified to place the icon in `start` front of the title to function more like a tree. Most instances should use the default `end` alignment, especially for any pure content or documentation purposes. Icon placement in accordions should be consistent throughout your page and should not alternate.

![Do use the default end icon alignment to keep accordion text aligned with other content on the page.](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/accordion-alignment-do-1.png)

In most cases, use the default end icon alignment to keep accordion text aligned with other content on the page.

![Do place icons on the start side for tree like functionality.](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/accordion-alignment-do-2.png)

In rare cases, you can place icons on the start side for tree like functionality.

### Placement

Accordions can be placed with main page content or placed inside of a container such as a side panel or tile.

![accordion placement](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/accordion-placement-2.png)

#### Grid placement

When placing an accordion on the 2x Grid with its default alignment, the indented title and content align to the grid columns, and the top and bottom borders hang into the gutter. However, the accordion can be modified to have a [flush alignment](https://www.carbondesignsystem.com/building-blocks/core/components/button/guidelines#alignment) where the titles and content are instead flush aligned with the top and bottom borders having 0px padding.

![Accordion grid placement](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/accordion-placement-1.png)

## Content

### Main elements

#### Title

             - The title should be as brief as possible while still being clear and descriptive.
             - Each title should be wrapped in a [role heading](https://www.w3.org/TR/wai-aria-practices-1.1/#wai-aria-roles-states-and-properties) (h1-h6) that is appropriate for the information architecture of the page.

#### Body copy

             - Content inside of a section may be split into paragraphs and include sub-headers if needed.

### Scrolling content

When the accordion content is longer than the viewport the whole accordion should vertically scroll. Content should not scroll inside of an individual panel. Content should never scroll horizontally in an accordion.

### Further guidance

For further content guidance, see Carbon’s [content guidelines](https://www.carbondesignsystem.com/building-blocks/foundations/content/overview).

## Behaviors

### States

The accordion component has two main states: **collapsed** and **expanded**. The chevron icon at the end of the accordion indicates which state the accordion is in. The chevron points down to indicate collapsed and up to indicate expanded.

Accordions begin by default in the collapsed state with all content panels closed. Starting in a collapsed state gives the user a high level overview of the available information.

![Accordion states](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/accordion-state-1.png)

A user can then independently expand each section of the accordion allowing for multiple sections to be open at once.

![Accordion with multiple sections expanded](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/accordion-state-2.png)

In addition to the collapsed and expanded states, accordions also have interactive states for focus, hover, and disabled. See the [specification tab](https://www.carbondesignsystem.com/building-blocks/core/components/accordion/specifications) for more details.

![accordion interactives states](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/accordion-state-3.png)

### Interactions

#### Mouse

Users can trigger a state change by clicking on the chevron or clicking anywhere in the header area.

![Accordion click targets](https://s3.us-south.cloud-object-storage.appdomain.cloud/cxp-prod-payload-cms/accordion-click-target-1.png)

#### Keyboard

Users can navigate between accordion headers by pressing `Tab` or `Shift-Tab`. Users can trigger a state change by pressing `Enter` or `Space` while the header area has focus. For additional keyboard interactions, see the [accessibility tab](https://www.carbondesignsystem.com/building-blocks/core/components/accordion/accessibility).

## Related

The following components are additional ways to organize content. Consider the type and length of content you are working with when choosing a content container. Longer form content may benefit from tabs or a content switcher while very short content might do better in a structured list.

           - [Content switchers](https://www.carbondesignsystem.com/building-blocks/core/components/content-switcher/guidelines) allow users to toggle between two or more content sections within the same space on the screen.
           - [Progress indicators](https://www.carbondesignsystem.com/building-blocks/core/components/progress-indicator/guidelines) guide users through any linear, multistep task by showing the user their completed, current, and future steps.
           - [Structured lists](https://www.carbondesignsystem.com/building-blocks/core/components/structured-list/guidelines) group content that is similar or related, such as terms and definitions.
           - [Tabs](https://www.carbondesignsystem.com/building-blocks/core/components/tabs/guidelines) organize related content by allowing the user to navigate between groups of information that appear within the same context.
           - [Tree view](https://www.carbondesignsystem.com/building-blocks/core/components/tree-view/guidelines) is a hierarchical structure that provides nested levels of navigation.

## References

           - Hoa Loranger, [Accordions Are Not Always the Answer for Complex Content on Desktops](https://www.nngroup.com/articles/accordions-complex-content/) (Nielsen Norman Group, 2014)
