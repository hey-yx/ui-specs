---
title: "GitHub Primer · Component · Dialog"
source: https://raw.githubusercontent.com/primer/design/main/content/components/dialog.mdx
section: components
tag: "规范"
fetched: 2026-11-14
status: full
id: comp-primer-dialog
publisher: "GitHub Primer"
---

# GitHub Primer · Component · Dialog

> 来源：https://primer.style/components/dialog

Dialogs can streamline the interface by allowing extra content to be disclosed as needed. Dialogs create a new modality to the user, and can expedite the completion of individual tasks.

## Anatomy

![](https://user-images.githubusercontent.com/18661030/185509649-50791e2f-0a4c-44d9-8b2b-e34b3f394315.png)
Anatomy of a Dialog.

### Header region

The **header** region provides context for the Dialog. By default, the region supports a title, description, and a close button. Titles and descriptions may wrap to multiple lines if necessary.

The title is required for all Dialogs, but may be visually hidden for custom scenarios such as a command palette. The close button is required and may **not** be visually hidden. The title has a default size along with a larger option for confirmation dialogs.

The header region provides a slot for custom content in place of the default title/description, though a title is still required and may be visually hidden. Secondary action icon buttons may be placed next to the close button.

    ![](https://user-images.githubusercontent.com/293280/175849372-a9d33d3b-96f3-497e-bad6-70df4d91072a.png)
    Header with the default title variant.

    ![](https://user-images.githubusercontent.com/293280/175849374-6a71d8a0-da61-4745-a059-4560d053089b.png)
    Header with large title variant.

    ![](https://user-images.githubusercontent.com/18661030/185478040-be5a3552-9ed1-40ef-a713-3d6ac8f6b697.png)
    Header with custom variant and a secondary action button.

    ![](https://user-images.githubusercontent.com/18661030/185990665-5cf39b59-420a-41bf-8d65-d431134d2738.png)
    Command palette with a visually hidden title.

### Subheader region

The subheader region is an optional space for interactive controls. Use it to display a search field, a filter menu, or a local navigation component.

    ![](https://user-images.githubusercontent.com/293280/175849377-ef70f4e7-2978-415c-9da1-a2ba2f33bdc3.png)
    Header displaying a subheader with a search field.

    ![](https://user-images.githubusercontent.com/293280/175849376-ef25a1ba-b5b7-4ae0-8d9a-78095932886a.png)
    Header displaying a subheader with a local navigation.

### Body region

The body region is the main content of the dialog. It can contain any content that is relevant to the task at hand. The body region is scrollable if the content exceeds the height of the dialog.

    ![](https://user-images.githubusercontent.com/18661030/185506131-1436b06b-a8fb-4de8-b9b2-4715ab0a63d2.png)
    Body content will scroll vertically if the content exceeds the overall dialog height.

    ![](https://user-images.githubusercontent.com/18661030/187487429-bef6924c-9f25-4ec9-9416-5800396a7b32.png)
    The body may contain additional content such as banners and form controls.

### Footer region

The footer region may be used to show confirmation actions, navigation links, or specialized actions. Primary actions should be aligned to the right of the footer, and grouped by additional related actions. Secondary actions may be shown aligned to the left side.

If the content area has overflow scrolling, a divider should be added between the footer and content area. Otherwise, showing a divider is optional.

![](https://user-images.githubusercontent.com/293280/175850630-9f3df284-c69b-4d16-9e57-ea04a0202d04.png)
Use buttons in a footer to let the user complete a task.

    ![](https://user-images.githubusercontent.com/293280/175850639-a77d537e-2807-47d2-b456-a298d5f44918.png)
    Footer with small buttons aligned to the right.

    ![](https://user-images.githubusercontent.com/293280/175850637-3b193552-b35f-4b07-b2d6-4ca546c8131a.png)
    Footer with an auxiliary action aligned to the left.

### Backdrop

Dialog displays with a **backdrop**, which dims the rest of the page. By default, clicking on the **backdrop** will dismiss the dialog. However, if the dialog contains a form that can have unsaved changes, the **backdrop** won't dismiss the dialog, regardless of the state of the form.

### Spacing

The edges of dialog are free of text and heavy visuals to visually distinguish the dialog as an elevated surface, alongside its shadow. Content within the body and header should remain within the 16px safe area. However, inner components that have transparent or discrete backgrounds may bleed into the padding for visual alignment.

![](https://user-images.githubusercontent.com/293280/174925634-603a27cf-2281-4a3a-9078-d1b8138e0d09.png)

  1. A search field in the Subheader region appears closer to the edges. While the search icon remains within the safe
  area.

  2. Close button placed `8px` away from the edges. Note that the "×" glyph remains within the safe area.

  3. Action list items in the Body region.

  4. Footer buttons always appear inside the safe area.

## Size

Dialog offers a range of sizes from `small` to `xlarge`, with the default size set to `medium`.

Each size defines a width and a maximum height. By default the dialog height will adjust to the body content. If the maximum height is reached, the body contents will scroll.

A dialog sizing is constrained by the viewport dimensions. Dialogs will not grow beyond the boundaries of the viewport.

Small viewports force dialogs to remain small. All dialogs need to work on viewports of at least `320px` of width, and `256px` of height.

### Small

![](https://user-images.githubusercontent.com/18661030/187552557-452e7253-9fdc-4f58-8ad7-9cd016d7786e.png)
Small dialogs have a width of 320px, and a max height of 256px.

### Medium (default)

Medium is the default size for Dialog and should be used for most tasks such as completing a form or selecting an option from a list. The medium portrait size is suitable for longer lists of items that require more vertical space for the body.

![](https://user-images.githubusercontent.com/18661030/187552600-06dcbd81-90b5-45aa-81ce-89f8d9763508.png)

  Medium dialogs have a width of 480px, and a max height of 320px. Medium portrait oriented Dialogs have a width of
  480px, and a max height of 600px.

### Large

Large dialogs are suitable for content that requires more horizontal space for the body compared to size medium, such as a comment box.

![](https://user-images.githubusercontent.com/18661030/187482693-04eb3780-89e1-4705-a55b-5fa8ba0f9865.png)
Large dialogs have a width of 640px, and a max height of 432px.

### Extra large

Before using an extra large dialog, consider whether or not the content would be more appropriate for a new page.

![](https://user-images.githubusercontent.com/18661030/187482817-9d82fe3e-c24d-4eca-9b4b-c74fa32450d4.png)
Extra large dialogs have a width of 960px, and a max height of 600px.

## Usage

### Keep content simple

Dialogs are meant to be interacted with in a single context. Avoid creating a whole page inside a dialog. Prefer single-column layouts that convey a clear goal from the moment the dialog is opened.

However, dialogs are powerful tools when creating space for single-context interfaces. When designing a new feature to support a main interface, start by considering if the new feature can be created under a single context.

If the answer is yes, designing the feature inside a dialog provides an easy way to add responsive support, and avoid deeper navigations. If the answer is no, or if a side navigation is required for the feature, consider designing a new page.

    ![](https://user-images.githubusercontent.com/18661030/185224257-a40112ff-aaf3-4947-acf0-6b4020e023df.png)
    Prefer a single column layout.

    ![](https://user-images.githubusercontent.com/18661030/185224316-0680b89a-8514-4336-9147-64aac722cd9a.png)
    Avoid side navigation within a Dialog.

### Nested dialogs

It is acceptable to have up to two nested dialogs as long as the dialog is implemented with [expected focus management behavior](#trigger-elements-and-keyboard-focus). Upon closing the second nested dialog, focus should return to the trigger control within the first dialog. When the two stacked dialogs are open, pressing `Esc` should only close the top-level dialog. When one clicks outside of the second dialog with a mouse, only the second dialog should close.

However, having more than three nested dialogs is discouraged because it adds unnecessary complexity to the user experience and can be disorienting for some users.

### Deep linking

It's crucial to consider if the dialog should be accessible via a link. For instance, if our users intend to link to this specific content from outside GitHub.

While we can rely on parameters in the URL to open dialogs on page load, this approach can disorient users because they might not understand to what context this dialog belongs to since the rest of the page will be dimmed by a [backdrop](#backdrop).

In such situations, it is often more advisable to avoid using a dialog altogether and instead display the additional information directly on the page or create a new dedicated page. This approach allows for better integration of the content within the overall website structure.

### Dialogs should work well on any device

Dialogs must adjust their designs to fit in smaller viewports. Make sure the overlay contents work with all supported sizes and input methods.

    Center aligned dialog becomes fullscreen on narrow viewport.

    Center aligned dialog becomes a bottom sheet on narrow viewport.

## Regular-viewport placement

### Centered

By default, dialog appears centered in the viewport, with a visible backdrop that dims the rest of the window for focus. Centered dialogs are surrounded by a safe area of `16px` between the frame and the viewport for all sizes.

![](https://user-images.githubusercontent.com/18661030/185224429-9f0af3ee-3e11-4f94-a5f6-746ed8a5c300.png)
Dialog centered within a desktop screen.

### Side sheets

Side sheets slide from the right or left edges of the viewport and are always fixed to both the top and bottom of the viewport. **Left side sheets are reserved for global navigation drawers. Right side sheets are used for global actions, but can also be considered for quick previews in full-width pages.**

Side sheets take the entire height of the viewport, and should be used sparingly. Don't use side sheets to present create/edit forms, or flows that may contain a lot of information. For that, use a page instead.

![placement-desktop-1](https://user-images.githubusercontent.com/18661030/185214096-8ad908b4-2cbd-467d-8e74-bad6948c5a2d.png)
Left aligned side sheet is reserved for global navigation only.

![placement-desktop-2](https://user-images.githubusercontent.com/18661030/185214094-419d2271-dbb9-4e78-90e6-4433ed9c42fb.png)

  Right aligned side sheet can be used for global actions, but may also be considered for quick previews or
  configuration panels.

Side sheets are still considered as dialogs, which means that interacting with the content in the background is not possible.
This needs to be indicated by a [backdrop](#backdrop) and should always cover the global navigation.
This prevents multiple side sheets from appearing simultaneously.

    ![](https://github.com/primer/design/assets/980622/6501c520-70da-49a2-8b29-a9f028c6a6e3)
    Side sheets appear on top of the page (including the navigation).

    ![](https://github.com/primer/design/assets/980622/f05aa559-a866-47cf-84a2-f4897f1da08c)
    Avoid side sheets that allow interactions with the rest of the page.

Right side sheets serve multiple purposes, including facilitating global actions and providing quick previews in full-width pages.
However, it is important to exercise caution when implementing side sheets in pages that are not full-width. The objective is to minimize the distance users need to travel with their mouse cursor to access the side sheet, especially on wide screens.
This consideration is essential for maximizing productivity.

    ![](https://github.com/primer/design/assets/980622/84585f5e-fad5-451c-8c53-87972f69030d)
    Use side sheets to provide a quick preview in full-width pages.

    ![](https://github.com/primer/design/assets/980622/df59604f-c459-4aff-8db7-3e23000c91ac)

      Unless it's a global action, avoid side sheets in pages where content does not stretch the full width of the page.

## Narrow-viewport placement

### Bottom sheets

A bottom sheet is a variant supported on narrow viewports made to facilitate reachability. dialogs that appear centered in large screens may adapt to appear as a bottom sheet on small screens.

A bottom sheet always dims the rest of the screen for focus and takes up the full width of the viewport. Tapping on the backdrop dismisses the dialog.

Use a bottom to indicate that the user is still in the context of the main page, and that the dialog is a secondary action.

![bottom-sheet](https://user-images.githubusercontent.com/18661030/185214084-43e9573a-1a3b-4b82-b121-bd03897f48ac.png)
Bottom sheet in portrait mode.

In landscape mode, a bottom sheet has a maximum width of `480px`, and is centered horizontally.

![overlay-sheet-landscape](https://user-images.githubusercontent.com/18661030/185214089-a1bb1a70-914b-4a8f-b395-9c279a88a1fe.png)
Bottom sheet in landscape mode.

### Full-screen

Full-screen dialogs may be used to present content that needs all the available space on narrow viewports, or to act as a new page without navigating away from the main page. Dialogs that have one or more input fields should always use the full-screen variant.

![](https://user-images.githubusercontent.com/18661030/185214079-d30342c1-6061-4a31-ab65-c0cef0f00278.png)
Full-screen Dialog in portrait mode.

## Accessibility and usability expectations

Modal dialogs must be clearly announced as dialogs by screen readers.

Modal dialogs need to have an accessible name that informs the user of the purpose of the dialog. Generally, this accessible name should be presented visually as the title of the dialog. The title should concisely describe the contents or purpose of the modal.

When a modal dialog is opened, focus must be programmatically moved into the dialog. In most cases, the first focusable control inside the dialog should receive focus.

Once inside the modal dialog, focus must remain in the dialog - users must be prevented from navigating out of the dialog and back into the underlying page.

The underlying page behind the modal dialog must be hidden from screen readers, to avoid users accidentally navigating out of the dialog (for instance, using browse mode or heading navigation).

Dialogs must have a way to be closed by the user. In most cases, this functionality will be provided as an explicit graphical "X" close control, though depending on the purpose of the dialog, users may instead have to activate more specific controls (such as "OK" / "Cancel" buttons).

When a dialog is closed, focus returns to the most logical location in the page – in general, this is the trigger control that originally opened the dialog.

Dialog's title and close button are required to ensure an accessible experience for everyone. Further, keyboard and focus behavior must be considered.

### Trigger elements and keyboard focus

Dialogs are initially hidden, and can be opened by an element with `role="button"`, called a **trigger**. The role `button` allows the **trigger** to be a relatively complex element, such as an action list item.

Dialogs must be fully functional using the keyboard and assistive technology. Pressing `Esc` must dismiss a dialog, also returning focus to the **trigger** that opened it.

Clicking the backdrop or hitting the `Esc` key should dismiss the dialog.

When a dialog is opened, the first interactive element (typically the close button) is focused. For a scenario like a command palette with an `` next to the close button, the `` will recieve focus first. Hitting `Tab` will cycle through all interactive elements within the dialog. To escape the focus trap, hitting the `Esc` key or clicking on the backdrop will close the dialog. While the dialog is open, page scrolling is disabled and becomes `inert`.

    ![](https://user-images.githubusercontent.com/18661030/185997280-fb36be9c-bfde-463b-b33c-9f25412683d2.png)
    Dialogs can be triggered by buttons with a mouse click or keypress.

    ![](https://user-images.githubusercontent.com/18661030/185997278-6fc2b938-6453-47d7-99ae-0411354eb06e.png)
    The first interactive item inside a dialog is focused when opened.

![](https://user-images.githubusercontent.com/18661030/185997276-25cd8796-42e2-41f6-b5be-551f6a02349b.png)
When a dialog is closed, focus is returned to the trigger button.

### Live region usage
Use extra caution when utilizing a live region that exists outside of the `` component.
This is because some browser and screen reader combinations may ignore the live region entirely if it does not already exist within the dialog.

If you need to use a live region while a dialog is active, place the live region within the dialog, rather than outside of it.

### Built-in accessibility features

The Rails version of the component generates a `` element with `aria-modal="true"`.

The React version of the component generates a `` element with `role="dialog"` and `aria-modal="true"`.

When provided, the `title` prop for the component is rendered as an `` heading, and is explicitly referenced by the dialog using `aria-labelledby` to provide an accessible name for the dialog.

By default, the generated dialog includes an "X" graphical close control, which receives focus automatically when the dialog is opened.

In the Rails version of the component, you can use the `autofocus` property on interactive elements in the dialog's content to move the initial focus directly to a specific control. However, you should carefully consider when this approach is necessary – in general, it is best to keep dialogs consistent and let focus go to the "X" close control.

Focus is maintained inside the dialog. The `aria-modal="true"` on the dialog hides the underlying page from screen readers.

When the dialog is closed, focus is automatically moved back to the last element in the underlying page that had focus - generally, the control the triggered the dialog.

### Implementation requirements

Make sure to provide a sufficiently descriptive title for the modal dialog. The title should concisely describe the contents or purpose of the modal.

In cases where the original trigger element that opened the dialog is not present in the page any more, or where the dialog was not opened as a result of a user action, you will need to explicitly handle which element will receive focus programmatically once the dialog is closed.

#### Integration tests

- The modal dialog has a sufficiently descriptive title rendered has a heading rendered as an `` heading
- Once the dialog is closed, focus is returned to the most appropriate location in the page

#### Component tests

- The modal dialog programmatically exposes its role - either using `` or `role="dialog"`
- The modal dialog programmatically conveys that it is modal with `aria-modal="true"`
- The `title` prop of the component is rendered as an `` heading, that it has an `id` attribute, and that this `id` is referenced from the dialog container itself with `aria-labelledby` to provide an accessible name
- When the modal dialog is opened, focus is moved into the dialog - generally, to the first focusable control inside the dialog

- In the Rails implementation, the control specified by the author with `autofocus` receives focus when the modal dialog is opened

- Focus remains inside the dialog - using `Tab`/`Shift+Tab` must not result in focus landing in the underlying page
- When the modal dialog is closed, focus is returned to the last element in the underlying page that was focused at the time the dialog was opened - typically, this will be the trigger element that opened the dialog

### Known accessibility issues (GitHub staff only)
