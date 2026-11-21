---
title: "IBM Carbon · 键盘可达"
source: https://raw.githubusercontent.com/carbon-design-system/carbon-website/main/src/pages/guidelines/accessibility/keyboard.mdx
section: a11y
tag: "规范"
fetched: 2026-10-19
status: full
id: a11y-1
publisher: "IBM Carbon"
---

# IBM Carbon · 键盘可达

> 来源：[https://raw.githubusercontent.com/carbon-design-system/carbon-website/main/src/pages/guidelines/accessibility/keyboard.mdx](https://raw.githubusercontent.com/carbon-design-system/carbon-website/main/src/pages/guidelines/accessibility/keyboard.mdx)

---

> Keyboard accessibility enables users who rely on or prefer using a keyboard to use your product. All interactive content and elements should include keyboard functionality.

## Keyboard accessibility

Common keyboard interactions include using the `tab` key to select different
interactive elements on a page and using the `enter` key or the `spacebar` to
activate an in-focus element.

  - [链接](https://www.ibm.com/able/requirements/requirements/#2_1_1)

![IBM bee icon](https://raw.githubusercontent.com/carbon-design-system/carbon-website/main/src/pages/guidelines/accessibility/images/bee.svg)

### Focus indicators

The `tab` key navigates through all interactive elements on a page in the order
they appear in the HTML document. A default visual indicator is provided by the
web browser in use. The display is a border around the focused element. When an
element is in focus, it can be further activated using the keyboard.

  - [链接](https://www.ibm.com/able/requirements/requirements/#2_4_7)

![IBM bee icon](https://raw.githubusercontent.com/carbon-design-system/carbon-website/main/src/pages/guidelines/accessibility/images/bee.svg)

### Navigation order

The order in which interactive elements receive focus should be logical and
predictable. Create the tab flow hierarchy by using the source code to arrange
the keyboard navigation. A common flow might begin with the header, followed by
the main navigation, then content navigation (from left to right, top to
bottom), and end with the footer. Try to give all your users the same
experience.

Use natively-accessible elements in navigation to activate links, buttons, and
form controls with a keyboard. Reinforce
[semantic HTML](./developers#use-semantic-html) to convey intent and meaning
instead of solely defining the look and feel of an element. Enhance with ARIA
(Accessible Rich Internet Application) labels when necessary.

  - [链接](https://www.ibm.com/able/requirements/requirements/#2_4_3)

![IBM bee icon](https://raw.githubusercontent.com/carbon-design-system/carbon-website/main/src/pages/guidelines/accessibility/images/bee.svg)

### Landmarks

For users of screen readers, communicate the different areas of the screen and
what they do with landmarks by using appropriate HTML5 labels. Screen reader
users can then quickly jump to any area they want.

  - [链接](https://www.ibm.com/able/requirements/requirements/#1_3_1)

![IBM bee icon](https://raw.githubusercontent.com/carbon-design-system/carbon-website/main/src/pages/guidelines/accessibility/images/bee.svg)
