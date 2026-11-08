---
title: "W3C APG · Menu Button 菜单按钮模式"
source: https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/
section: a11y
tag: "规范"
fetched: 2026-10-20
status: full
id: a11y-13
publisher: "W3C ARIA APG"
---

# W3C APG · Menu Button 菜单按钮模式

> 来源：[https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/)

---

Menu Button Pattern

## About This Pattern

A menu button is a [button](https://www.w3.org/WAI/ARIA/apg/patterns/button/) that opens a menu as described in the [Menu and Menubar Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/). It is often styled as a typical push button with a downward pointing arrow or triangle to hint that activating the button will display a menu.

![](https://www.w3.org/WAI/content-images/wai-aria-practices/images/pattern-menu-button.svg)

## Examples

*   [Action Menu Button Example Using aria-activedescendant](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/examples/menu-button-actions-active-descendant/): A button that opens a menu of actions or commands where focus in the menu is managed using aria-activedescendant.
*   [Action Menu Button Example Using element.focus()](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/examples/menu-button-actions/): A menu button made from an HTML `button` element that opens a menu of actions or commands where focus in the menu is managed using `element.focus()`.
*   [Navigation Menu Button](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/examples/menu-button-links/): A menu button made from an HTML `a` element that opens a menu of items that behave as links.

## Keyboard Interaction

*   With focus on the button:
    *   Enter: opens the menu and places focus on the first menu item.
    *   Space: Opens the menu and places focus on the first menu item.
    *   (Optional) Down Arrow: opens the menu and moves focus to the first menu item.
    *   (Optional) Up Arrow: opens the menu and moves focus to the last menu item.
*   The keyboard behaviors needed after the menu is open are described in the [Menu and Menubar Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/).

## WAI-ARIA Roles, States, and Properties

*   The element that opens the menu has role [button](https://w3c.github.io/aria/#button).
*   The element with role `button` has [aria-haspopup](https://w3c.github.io/aria/#aria-haspopup) set to either `menu` or `true`.
*   When the menu is displayed, the element with role `button` has [aria-expanded](https://w3c.github.io/aria/#aria-expanded) set to `true`. When the menu is hidden, `aria-expanded` is set to `false`.
*   The element that contains the menu items displayed by activating the button has role [menu](https://w3c.github.io/aria/#menu).
*   Optionally, the element with role `button` has a value specified for [aria-controls](https://w3c.github.io/aria/#aria-controls) that refers to the element with role `menu`.
*   Additional roles, states, and properties needed for the menu element are described in the [Menu and Menubar Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/).
