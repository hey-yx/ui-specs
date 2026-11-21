---
title: "GitHub Primer · Component · Action menu"
source: https://raw.githubusercontent.com/primer/design/main/content/components/action-menu.mdx
section: components
tag: "规范"
fetched: 2026-11-14
status: full
id: comp-primer-action-menu
publisher: "GitHub Primer"
---

# GitHub Primer · Component · Action menu

> 来源：https://primer.style/components/action-menu

Submenus are only available in the React implementation.

## Usage

An action menu comprises a set of [action list](https://primer.style/components/action-list) items, where each item represents an action, command, submenu, or the current selection that can be either a single or multi-select. The action menu can be invoked by clicking on a [button](https://primer.style/components/button), [icon button](https://primer.style/components/icon-button), or right-clicking on the list items.

![Three instances of action menus. The initial one comprises an icon button that provides two actions. The second one displays a button labeled View:Table and presents three choices (Table, Board, and Roadmap), with Table being the currently selected option. Finally, the third menu is a context menu that appears on right-click and contains a diverse set of options, including single select, submenus, and actions.](https://user-images.githubusercontent.com/980622/233374605-cee72894-fc5e-46f4-a1ea-e82aa26084ef.png)

The action menu is an extremely versatile component that is not restricted to a single type of action list items at a time. It can be used to create a combination of single select, multi-select, commands, and submenus.

By using dividers and section titles, a hierarchy can be established within the action menu, making it easier to navigate and understand. This allows users to quickly find and access the actions they need, while also providing a clear and organized structure to the menu.

![Five examples of how an action menu can be utilized, which includes a context menu, multi-select, single-select, actions, and a combination of multi-select and single-select.](https://user-images.githubusercontent.com/980622/234302061-4a6c820f-5467-4648-b70e-04d16ff2b5a5.png)

As the action menu is a highly adaptable component, it's crucial to keep the interactions with individual items limited. The following interactions are recommended:

- `enter`, `click`, or `tap`: These actions trigger an action or navigate into a submenu, based on the selected item.
- `arrow left`, `arrow up`, `arrow down`, `arrow right`: These actions can be used to navigate the menu, allowing the user to move between items and submenus with ease.

Menus are a commonly used feature across multiple platforms, and both [Apple](https://developer.apple.com/design/human-interface-guidelines/components/menus-and-actions/menus) and [Microsoft]() have detailed documentation on their menus. To create a pleasant user experience, it's important to follow their expected behavior closely.

## Anatomy

![Action menu opened with an internal `Settings` label. Several elements are emphasized, such as the trigger, actions, overlay menu, trailing visual shortcuts, trailing visual submenu indicator, and the 3 dot dialog indicator.](https://user-images.githubusercontent.com/980622/234074196-f67bf01e-29b6-4be1-a6fc-47fc532f536b.png)

## Content

### Open

Action menus can be opened through a [button](https://primer.style/components/button), [icon button](https://primer.style/components/icon-button) or by right clicking list items that have a custom context menu associated with them.

    ![](https://user-images.githubusercontent.com/18661030/226486473-9cf0c64f-5ae6-40a5-bd0f-87d3ed34f90d.png)
    Use a button to open a menu.

    ![](https://user-images.githubusercontent.com/18661030/226486474-08b75358-bfcb-483d-bba0-25947a71c8de.png)
    Don’t use a link to open a menu.

When using a button the menu can be opened by clicking or tapping it. When it's focused it can also be opened by hitting `return`, `space` or any `arrow` key.

    ![](https://user-images.githubusercontent.com/18661030/226486479-52730f0f-cc41-41e0-a996-a974899cbc4e.png)
    Open by clicking the trigger button with a mouse

    ![](https://user-images.githubusercontent.com/18661030/226486480-4a807f86-b2b0-4d12-8a43-8cc95d36d995.png)
    Open by focusing the trigger button and hitting return, space, or any arrow key

### Close

The menu will close when pressing the `esc` or `tab` key or when pressing `enter` when a item is focused.
Additionally clicking outside the menu item or clicking on a item will close the menu as well.

    ![](https://user-images.githubusercontent.com/18661030/226486482-fc457572-342d-42d3-9da6-fa87ef009cea.png)

      Close the menu by clicking on an item, clicking on the trigger, or clicking anywhere outside the menu.

    ![](https://user-images.githubusercontent.com/18661030/226486483-e3d658ea-4148-47d6-95ed-5ca90cc55b38.png)
    Close the menu by hitting enter on an item, esc or tab.

#### Single and multi select

    Single select menu closes upon selection and may update the button label.

    Multi select menu closes upon selection and can be re-opened to select more options.

### Avoid input controls

The focus should always remain on menu items, and therefore the menu shouldn't include additional form elements like `button`, `input`, or `checkbox`.

    ![](https://user-images.githubusercontent.com/980622/234083626-6d8f4def-eccd-429b-b815-81071502a2a7.png)
    Use action menu for quick actions.

    ![](https://user-images.githubusercontent.com/980622/234083619-40ebf8b6-6194-4e66-a7e8-597ee43f9ed8.png)

      Don't add form controls like a filterable input, use select panel{' '}
      instead.

While single and multi selection is offered within a menu, the underlying semantics are not true form elements.

    ![](https://user-images.githubusercontent.com/980622/234080409-c2a50287-c215-48e6-96fa-3fb48c636fc7.png)
    Use a checkmark icon for selections.

    ![](https://user-images.githubusercontent.com/980622/234080401-42a48754-b120-4077-84d1-59cc08f71367.png)
    Don't use form elements within a menu.

### Alignment

Consistent alignment of icons, titles, and trailing visuals is critical to ensure that the menu is easily scannable. This is especially important when combining single or multi-select items with non-select items.

    ![](https://user-images.githubusercontent.com/980622/234072131-9d984962-61d4-4590-94db-43aa7135d7d2.png)

      When a menu includes a single select or multi select then all the items in the menu should be indented.

    ![](https://user-images.githubusercontent.com/980622/232518089-417184b7-336e-440a-a302-0c1f7c8c4dda.png)
    Don't create invidiual alignments when your menu contains a single or multi select.

### Icons

When designing menus, it is crucial to adhere to the meaning of the icons used. If any item in the menu does not have a corresponding icon, then all items in that menu should be presented without icons.

    ![](https://user-images.githubusercontent.com/980622/234294137-0438d55e-0839-4d6a-9be9-9cd9332c09a8.png)
    When one of the items doesn't have an icon then remove icons altogether.

    ![](https://user-images.githubusercontent.com/980622/234294131-fcc8558b-4837-4d9a-b1d6-360384ed48b7.png)
    Don't mix items with or without icons as this makes it harder to read.

Especially when providing single or multi select items that rely on a crossmark icon should be avoided as they could be confused with the item's checkmark.

    ![](https://user-images.githubusercontent.com/980622/232508225-59f21afe-1613-4ad0-8088-a8f2f6eb2ba9.png)
    Avoid the usage of icons if the icon conflicts with the selected states checkmark.

    ![](https://user-images.githubusercontent.com/980622/232508233-78d0460d-c891-42be-929d-ff0465313805.png)
    Don't use crossmark icons for single or multi select items.

### Dividers

To enhance the readability of menus that contain numerous item descriptions, it is recommended to incorporate dividers. This can effectively prevent the menu from becoming overwhelming.

    ![](https://user-images.githubusercontent.com/980622/234297298-76d14987-2ecb-4165-9f5d-ada0fd1c7e17.png)
    Introduce dividers for items with heavy descriptions to improve readability.

    ![](https://user-images.githubusercontent.com/980622/234297304-0cfdd597-fc79-4394-bb74-b37ec1276bd6.png)
    Don't forget to add dividers when the menu content starts to look heavy.

### Trailing visuals

Avoid using trailing visuals to add additional interactions, which reserves them for submenu indicators or keyboard shortcuts.

    ![](https://user-images.githubusercontent.com/980622/234299628-3c8a8613-7a2f-4f4a-83da-14eab2f28032.png)
    Create a new section for additional functionality.

    ![](https://user-images.githubusercontent.com/980622/234299623-927d9309-9991-496c-b707-b6f358583928.png)
    Don't store additional toggleable functionality in trailing visuals.

### Multi-level

A menu with multiple levels is a common UI component used in desktop and mobile applications. It allows users to access nested subitems without cluttering the screen.

![Action menu opened with a label for the trigger (button), overlay (menu), and the internal action list.](https://user-images.githubusercontent.com/980622/232519615-d10c928d-5253-4c54-bc66-7fa1e0f85b08.png)

It's important to understand that menus can't include additional form elements like inputs. That means if you want to provide a input that filters the subitems that you can't rely on this component. Alternatively, you can use a [select panel](https://primer.style/components/selectpanel) or open a [dialog](https://primer.style/components/dialog) instead of a submenu.

    ![](https://user-images.githubusercontent.com/980622/232558685-0874d0dd-6d58-42d6-a19b-be19cdf32cf8.png)
    If you want to present filterable data open a dialog instead of a submenu.

    ![](https://user-images.githubusercontent.com/980622/232547208-aa63f85b-cc9c-4fd2-8222-c26ac993c0cc.png)
    Don't use form elements inside a menu.

Since you can't include form elements within a menu that also means that you can't combine a [select panel](https://primer.style/components/selectpanel) with a action menu.

    ![](https://user-images.githubusercontent.com/980622/234094256-abf3f1ad-2d90-48f9-84aa-a8e17cc64c47.png)
    If you want to present filterable data do this through a dialog.

    ![](https://user-images.githubusercontent.com/980622/234094263-399afdd0-b2e5-45dc-a218-db4a7dcdd9be.png)
    Don't mix select panels with action menus.

When using submenus, don't use the trailing visual to communicate selected values within its submenu.
Leave this space for submenu indicators.

    ![](https://user-images.githubusercontent.com/980622/232562573-a687110d-06cb-4756-8fb3-6b7e05665dd4.png)
    Use trailing visuals for submenu indicators or keyboard shortcuts.

    ![](https://user-images.githubusercontent.com/980622/232562567-bb96a0cb-a796-4834-bf91-e3ddff86c312.png)
    Don't use trailing visual to communicate selected items in submenus.

On smaller viewports, the menu should always be re-positioned to fit within the viewport. This could mean that a submenu overlaps it's parent menu.

    ![](https://user-images.githubusercontent.com/980622/233361999-3b5ab994-152d-455e-b9bc-a9170a1951b1.png)
    Reposition menus to stay within the viewport, especially on narrow viewports.

    ![](https://user-images.githubusercontent.com/980622/233361993-cf3e0b21-e584-4780-a0e1-42f03fc4d395.png)
    Don't position menus off screen, especially on narrow viewports.

## Options

### Trigger

![](https://user-images.githubusercontent.com/980622/234255983-8db23940-e60f-408a-a697-c9846ae4334b.png)

  Menus can be triggered through a button, icon button or right clicking list items. For simple select menus that
  display the selection in a button, a label must be persist either internally or externally.

### Items

![](https://user-images.githubusercontent.com/980622/234249718-84155711-6b31-4529-bf27-63f99c964957.png)

Here is an overview of [action list](https://primer.style/components/action-menu) items that are compatible with menus:

- **Action**: Triggers an action or dialog. Trailing visuals can be used for keyboard shortcuts.
- **Single/multi select**: Represented by a [check](https://primer.style/foundations/icons/check-16) and never a HTML checkbox. Trailing visuals can be used for keyboard shortcuts.
- **Submenu**: Represented by a [chevron-right](https://primer.style/foundations/icons/chevron-right-16) as a trailing visual.
- **Section header**: To add clarification to a section.
- **Divider**: To create sections for your selections, actions or submenus.

#### Inactive items

![Three examples: 1. An action menu that works just fine; 2. An action menu with some items disabled; 3. An action menu with all items disabled](https://github.com/primer/design/assets/2313998/c49774be-9bf3-4e93-8537-5810d3f5579a)

If items in a menu have been affected by a system error such as an outage, they may be put into an inactive state with a message in each item explaining why it's disabled.

If an action menu contains menu items that are very closely related (for example: the action menu for adding a file to a repo) and we can detect that none of the menu items are available, then put the button that triggers the action menu into an [inactive state](https://primer.style/components/button#inactive).

Inactive action menu items follow the same patterns as inactive action list items except:

- The message explaining why it's unavailable is renderd in the item, not a tooltip. Action menu items don't hide the message in a tooltip because the menu is already hidden until the user opens it.
  - Hiding the message in a tooltip would require the user to do another interaction, and the UI could feel chaotic with so many layers.
- No [alert icon](https://primer.style/foundations/icons/alert-16) leading visual is necessary since it would be redundant with the error message

## Accessibility and usability expectations

When an `ActionMenu` is opened, focus moves to the first item in the menu.

Users can move between the different menu items – and, if present, submenus – using cursor keys.

If a keyboard user navigates away from an open `ActionMenu` using Tab / Shift+Tab, the `ActionMenu` is closed.

An open `ActionMenu` can be closed using Esc.

Menu items must have a clear and descriptive label. The label is the visible content of the button and will usually be text. The label should be concise and descriptive of the action that will be performed when the menu item is activated.

When using Octicons for leading and trailing visuals on individual menu items, note that icons don't have any text alternative. They are purely visual, and not conveyed to screen readers. Don't rely on these icons alone to convey meaning – make sure that the text label of the menu item provides sufficient meaning/context on its own.

Every menu item must have a minimum target size of 24×24 CSS pixels. This is to ensure that the button is large enough to be easily activated by users with motor impairments.

The currently focused menu item can be activated using Space or Enter. When a menu item is activated, the `ActionMenu` is closed, and the relevant functionality is executed. In the case of selectable menu items, the focused item is checked/unchecked, and the `ActionMenu` is closed.

When the `ActionMenu` is closed, focus returns to the most logical location in the page – in general, this is the trigger control that originally opened the `ActionMenu`.

See [focus management](https://primer.style/guides/accessibility/focus-management) for more information.

  ![](https://user-images.githubusercontent.com/18661030/226486487-b03672c1-c314-4be0-b96b-d4c348b2ff4d.png)

    Menu mnemonics
    When a menu is open, hitting a letter key for the first letter in an item to be selected will move focus to that item.
    If two items have the same first letter, the first item in the list will be focused first, and hitting the letter key
    again will focus the next item.

### Inactive menu items vs disabled menu items

Inactive menu items are still focusable and may execute actions, so they **should not** be marked as disabled using `aria-disabled`. For example, they might trigger a modal with information about an outage, which is still a valid action.

This behavior is consistent with the behavior of inactive buttons. See the [button component accessibility guidelines](https://primer.style/components/button#inactive-buttons-and-aria-disabled) and [inactive button guidelines](https://primer.style/components/button#inactive) for more details.

#### Inactive menu items:

- Can be activated
- Need to be able to get focus so screen reader users can "read" the message about it being inactive

#### Disabled menu items:

- Do not get focus
- Cannot be activated

### Built-in accessibility features

The component handles all aspects of focus management and keyboard interaction.

The `role` (`"menu"`) and structure of the `ActionMenu` are correctly conveyed to screen readers – including the state of selectable menu items, and the correct association of grouped items with their group title/label.

Menu items meet the minimum target size requirement, 24px × 24px.

### Keyboard navigation

#### Trigger button

| Key                                                                                                                                                            | Action          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Enter      | Opens the menu. |
| Space      | Opens the menu. |
| ArrowDown  | Opens the menu. |
| ArrowUp    | Opens the menu. |
| ArrowLeft  | Opens the menu. |
| ArrowRight | Opens the menu. |

#### Menu items

| Key                                                                                                                                                            | Action                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| ArrowUp    | Cycle through items starting with current item to previous item |
| ArrowDown  | Cycle through items starting with current item to next item     |
| ArrowLeft  | Closes submenu and sets focus back to the parent item           |
| ArrowRight | Opens a submenu                                                 |
| Enter      | Triggers the focused item                                       |
| Space      | Triggers the focused item                                       |
| Home       | Move focus to first item                                        |
| PageUp     | Move focus to first item                                        |
| End        | Move focus to last item                                         |
| PageDown   | Move focus to last item                                         |
| Esc        | Close menu                                                      |

### Implementation requirements

The `ActionMenu` allows the use of `inactive` controls – controls that can still be focused, and even activated (for instance, to trigger an informative modal dialog informing the user why a particular item is marked as inactive). Currently, this state of a menu item is not conveyed programmatically, meaning that screen readers won't announce that an item is inactive. Make sure to include descriptive `inactiveText` to an `inactive` menu item, to clearly explain the status of the item to all users – and in particular, screen reader users, who won't otherwise be informed of the fact that an item is inactive.

### How to test the component

#### Integration tests

- The menu items have sufficiently descriptive labels
- If menu items include icons for their leading or trailing visuals, the purpose of the items is clear even without the icons (as these are only decorative and are not conveyed to screen reader users)
- When using an `inactive` menu item, provide a descriptive `inactiveText` that explains why the item is inactive

#### Component tests

- The component exposes an appropriate set of `role`, `aria-*` attributes, and overall structure in its rendered output:
  - the component itself has a `role="menu"`
  - each item within the menu has a `role="menuitem"`, `role="menuitemcheckbox`, or `role="menuitemradio`
  - when items are grouped into sections, each section is identified using a container with `role="group`, and the group has an accessible name (either using `aria-label` or referencing an existing element with `aria-labelledby`) that matches the visible section label
  - selectable items have an `aria-checked` attribute, and correctly reflect their state (`aria-checked="true"` when checked, `aria-checked="false"` when not checked)
- When a menu is opened, focus moves to the first menu item
- The correct keyboard interactions have been implemented
- The menu can be closed using `Esc`
- When moving keyboard focus away from the menu (using `Tab` / `Shift+Tab`) the menu is closed
- When a menu item is selected, the menu is closed
- When the menu is closed, focus is programmatically moved back to the most appropriate element in the page – in general, the trigger element that opened the menu; this does not apply when the menu was closed as a result of a keyboard user explicitly navigating away from the menu (using `Tab` / `Shift+Tab`)
- When a menu item is `disabled`, the item has `aria-disabled="true"`, but still receives focus
- When a menu item is `inactive`, the item still receives focus

Refer to the [W3C ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/) for [menu button](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/) and [actions menu button](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/examples/menu-button-actions/).

### Known accessibility issues (GitHub staff only)

## Related components

- [Action list](https://primer.style/components/action-list)
- [Button](https://primer.style/components/button)
- [Icon button](https://primer.style/components/icon-button)
- [Select panel](https://primer.style/components/selectpanel)
