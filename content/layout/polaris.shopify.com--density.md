---
title: "Polaris · Density 密度"
source: https://raw.githubusercontent.com/Shopify/polaris/main/polaris.shopify.com/content/design/layout/density.mdx
section: layout
tag: "规范"
fetched: 2026-10-20
status: full
id: layout-24
publisher: "Polaris"
---

# Polaris · Density 密度

> 来源：[https://raw.githubusercontent.com/Shopify/polaris/main/polaris.shopify.com/content/design/layout/density.mdx](https://raw.githubusercontent.com/Shopify/polaris/main/polaris.shopify.com/content/design/layout/density.mdx)

---

    ## High density

    Information-rich interfaces, like index pages or data tables, require high-density layouts for efficiency. By presenting information in a denser format, merchants can quickly access and compare data, enhancing the effectiveness of the Shopify admin.

> **Do**

    ![An index table with each row divided by a line](https://polaris-react.shopify.com/images/design/layout/layout-density-01-high-density-do@2x.png)

    Use divider lines and surface colors to create clear delineation between sections in a high density component.

  Another way to create visual zones in high density layouts is to [use
  different surface colors](/design/colors/using-color#surface). Secondary
  colors can be used to create visual hierarchy within a high density component,
  and to guide merchants to the data that matters most.

> **Do**

    ![A card with inset surfaces of different colors](https://polaris-react.shopify.com/images/design/layout/layout-density-02-high-density-inset-do@2x.png)

    Use different surface colors to style inset surfaces and create visual divisions without using lines.

    ### Grid and vertical divisions

    Dividing surfaces vertically and in a grid pattern also offers a way to increase density. This type of visual pattern is better suited for selections or data visualization and should be used accordingly. These divisions are made by using different surface colors instead of using line dividers.

> **Do**

    ![A grid layout depicting a packaging selection tool](https://polaris-react.shopify.com/images/design/layout/layout-density-03-high-density-selection-grid-do@2x.png)

    Divide surfaces into a grid pattern for complex components that expect an action, like a selection.

> **Don't**

    ![A card split in the middle with packaging options on the left in a list and customer details on the right](https://polaris-react.shopify.com/images/design/layout/layout-density-04-high-density-vertical-dont@2x.png)

    Divide and organize surfaces vertically by creating columns of unrelated content.

    ### Action components use high density

    Smaller components, like option lists or popovers, are built with high density in mind. Because their main purpose is to offer a set of actions to the merchant, they need to feel small and efficient.

    Effectively designed action components give the [feeling of a pro tool](/design/pro-design-language) in the Shopify admin and increase efficiency when using different features.

> **Do**

    ![A popover with different sorting options, all shown in a tight list](https://polaris-react.shopify.com/images/design/layout/layout-density-05-high-density-action-do@2x.png)

    Use high density consistently when offering lists of options to choose or select from.

> **Don't**

    ![A list of collections to choose from, with one section using images and the other using a list](https://polaris-react.shopify.com/images/design/layout/layout-density-06-high-density-sudden-change-dont@2x.png)

    Suddenly change density in an action component. Always offer the most condensed option possible instead.

    ## Low density

    Low density interfaces are best suited for focused editing interfaces, like a product detail page. These interfaces offer larger hit targets, wordier buttons, and are best suited to specialized UI that offers uncommon actions in the Shopify admin.

    Because low density interfaces offer more space, there is more for the merchant to analyze before taking action. Low density interfaces can also contain high density components, like a complex text editor within a card that serves to edit a product title and description.

    Top-to-bottom visual rhythm is often used to create a linear and predictable layout that is easy for merchants to understand.

> **Do**

    ![A detail shot of a product detail page](https://polaris-react.shopify.com/images/design/layout/layout-density-07-low-density-do@2x.png)

    Low density layouts are useful when switching contexts in the same page often, which happens often in the Shopify admin.

> **Don't**

    ![A product variant detail page with a vertical division between options and media](https://polaris-react.shopify.com/images/design/layout/layout-density-08-low-density-grid-dont@2x.png)

    Use grid or vertical dividers to create low density layouts. These can be confusing and hard to understand in a focused editing UI.

    ### Switching contexts

    Cards are the best way to switch context in low density layouts. Each card can be specialized in a set of features that requires the merchant to recenter their focus.

> **Do**

    ![The description card in the product detail page followed by the media card](https://polaris-react.shopify.com/images/design/layout/layout-density-09-low-density-switch-context-do@2x.png)

    Split each context into its own card.

> **Don't**

    ![A description box followed by a data table describing the size and weight of each image](https://polaris-react.shopify.com/images/design/layout/layout-density-10-low-density-mix-density-dont@2x.png)

    Mix low-density information with a high-density component in the same card.
