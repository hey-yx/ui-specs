---
title: "GitHub Primer · Pattern · Progressive disclosure 渐进披露"
source: https://primer.style/ui-patterns/progressive-disclosure/
section: patterns
tag: "规范"
fetched: 2026-11-09
status: full
id: patterns-33
publisher: "GitHub Primer"
---

# GitHub Primer · Pattern · Progressive disclosure 渐进披露

> 来源：[https://primer.style/ui-patterns/progressive-disclosure/](https://primer.style/ui-patterns/progressive-disclosure/)

---

Progressive disclosures are a design pattern that hides and shows information based on user interaction. They should be used sparingly, only when it's necessary to truncate information.

## Guiding principles
### Maintain context for users
When designing interfaces that incorporate progressive disclosure, refrain from creating interactions that drastically disorient the user’s initial point of focus.

### Pair icons with text
Pair progressive disclosure icons with descriptive text to provide context.

## Progressive disclosure UI patterns
The following table outlines common progressive disclosure solutions in use at GitHub.

| Component | Icon | Usage | Notes |
| --- | --- | --- | --- |
| [Chevron icon](https://primer.style/ui-patterns/progressive-disclosure/#chevron-icon) |  | When elements of content are collapsed and can be toggled open | Do not use this icon to trigger dropdown menus or navigation; the caret icon is the more suitable for this. |
| [Fold/Unfold icon](https://primer.style/ui-patterns/progressive-disclosure/#foldunfold) |  | Signify that there is content (typically text) to be revealed | Should generally stand alone, rather than being paired with text |
| [Ellipsis icon](https://primer.style/ui-patterns/progressive-disclosure/#ellipsis-icon) |  | For toggling truncated inline text content | Do not use this icon to trigger dropdown menus or navigation; the Kebab icon is the more suitable for this. |
| Text-only toggles |  |  | Usage of this solution is discouraged, as generally icons or icon+text pairings provide better accessibility and more information |
| Kebab |  | N/A | For toggling inline dropdowns and menus |
| Caret |  | N/A | Refrain from using this icon as a progressive disclosure solution |

### Chevron icon
The chevron icon is used when elements of content are collapsed and can be toggled open. Typically this icon is positioned vertically, and alternates between the “up” state when expanded and the “down” state when collapsed. This icon is quite flexible, and can stand alone, or be paired with text.

![A chevron icon is expanded within a progrssive disclosure to reveal more branches in mobile view.](https://user-images.githubusercontent.com/24916540/52079947-8a9f9580-254b-11e9-9e64-72a2a38f5ebd.png)

Chevron icon used to display more branches in mobile view

![A chevron icon appears with an adjacent text, 'Show more'.](https://user-images.githubusercontent.com/24916540/52094309-7b344280-2573-11e9-8f1a-d28cf78a0351.png)

![A chevron icon is used on a trigger for a dropdown control.](https://user-images.githubusercontent.com/24916540/52088378-892c9800-2560-11e9-9e36-0e72599da28a.png)

**Caution:**

  - The chevron should not be used as a call-to-action for dropdown menus
  - It should not be used for pagination, or indicate directional actions

### Fold/Unfold
This icon is used to signify that there is content that can be toggled open and closed. It is typically surrounded by text content above and below it. There are currently versions of this icon that expand the context in a singular direction, but are only used in GitHub’s code review editor.

![In the Contribution activity view on a profile page, the Fold/Unfold icon is used to keep the initial timeline view more compact.](https://user-images.githubusercontent.com/24916540/52096167-c43bc500-257a-11e9-9e20-a0371eb83720.png)

Fold/Unfold Icon used in Profiles context

![The Fold/Unfold icon is used in a file diff view to collapse part of the file content.](https://user-images.githubusercontent.com/24916540/52096601-47114f80-257c-11e9-92fc-d5a12f980372.png)

![The Fold/Unfold icon appears next to the text 'expand content in order to see more information'.](https://user-images.githubusercontent.com/24916540/52090486-5b4a5200-2566-11e9-8f29-3c26f3787409.png)

**Caution:**

  - This icon should generally be used to signify the expansion of text content
  - Generally this icon is not displayed with accompanying text

### Ellipsis icon
The ellipsis icon is used for toggling truncated inline text content. Its primary purpose is to serve as a method that designers to use to curtail bodies of texts, but sometimes other types of information.

![The ellipsis icon is used to represent truncated text.](https://user-images.githubusercontent.com/24916540/52093713-14ae2500-2571-11e9-9893-819b563639b1.png)

![The kebab icon is used to represent truncated text.](https://user-images.githubusercontent.com/24916540/52093714-1546bb80-2571-11e9-8799-9260792e40f5.png)

**Caution:**

  - While visually similar, the ellipsis icon is different from the kebab icon, which is used for dropdown menus or general call-to-actions. Be careful not to confuse them for one another
  - This icon generally stands alone within inline bodies of text.
