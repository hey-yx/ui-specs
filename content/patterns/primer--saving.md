---
title: "GitHub Primer · UI Pattern · Saving 保存"
source: https://primer.style/ui-patterns/saving/
section: patterns
tag: "规范"
fetched: 2026-11-01
status: full
id: patterns-32
publisher: "GitHub Primer"
---

# GitHub Primer · UI Pattern · Saving 保存

> 来源：[https://primer.style/ui-patterns/saving/](https://primer.style/ui-patterns/saving/)

---

When designing a form, start with an explicit saving pattern. Avoid mixing explicit and automatic save patterns on a single page with multiple forms, and never mix save patterns in a single form. For example: if I upload a profile photo in the "Public profile" form, that change should not be saved until I explicitly submit the whole form.

Explicitly saved forms can be saved by clicking a submit button or by pressing Enter while focused on an input.

If there is an error saving the data, the user's data should be preserved in the form and they should be given [feedback](#feedback) about the failure.

**Do**

![A form broken into two sections where one section has a dropdown that automatically saves](https://user-images.githubusercontent.com/2313998/159594852-aa1223c7-201e-42ea-9109-649371709d22.png)

*Separate auto-saving controls from an explicitly saved form*

**Don't**

![A form with a single section and it contains a dropdown that automatically saves](https://user-images.githubusercontent.com/2313998/159594854-8edb9736-bdd1-436c-a327-8525b6ddac0c.png)

*Don't mix auto-saving controls and explicitly saved controls in the same form*

If a user tries to navigate away from a page with a form that has unsaved changes, you have the option to warn them that their changes will be lost using the [`beforeunload` event](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event). Modern browsers prevent developers from customizing the `alert` message, so we're limited to a generic message like "Do you want to leave this site? Changes you made may not be saved."

To ensure your forms are accessible, you should use explicit saving (and not automatic saving) in declarative controls. These are:

- Text inputs
- Checkbox groups
- Radio button groups
- Browser-native `<select>` dropdown menus
- Multi-select dropdown menus

**Do**

![Use save and cancel buttons in dropdowns that allow multiple selections](https://user-images.githubusercontent.com/2313998/158658672-8a503a7c-3857-4929-a77f-c975153e366c.png)

**Don't**

![Don't automatically save selections once the dropdown is closed](https://user-images.githubusercontent.com/2313998/151623713-12028e6d-86ba-4ae6-b46b-d3c88c0fa2c0.png)

There are a few issues to bear in mind with autosaving declarative controls.

- Text inputs: Users expect to set a value and then submit. Sensitive information could be unintentionally submitted, such as a change password input.
- Checkbox groups: It could be unclear whether or not the selection has been saved. Users may accidentally submit a selection clicked by accident.
- Radio button groups: Screenreader users can't read the options without selecting them, which could accidentally apply a selection the user didn't want.
- Browser-native `<select>` dropdowns: Similarly to radio button groups, options could be selected when a user focuses the select and uses the arrow keys to read through each option.

When data is not automatically saved after the user makes changes, buttons are used to submit or cancel the changes.

All configuration flows should have calls to action that include an obvious active verb such as "Create", "Save", "Delete", or "Update" (for example, "Create" a new repository, "Add" an SSH key to your profile, "Save" security preferences, "Update" a repository's description, "Delete" an old email address).

When defining these calls to actions, make sure to:

1. Keep the text as succinct and clear as possible
2. Add the item’s name to the button text in cases where it may be unclear to the user what is being changed

**Do**

![Use descriptive text with an active verb](https://user-images.githubusercontent.com/2313998/152432685-08d8a944-c802-44ed-89e0-e9d3aa87771b.png)

**Don't**

![Don't use vague text](https://user-images.githubusercontent.com/2313998/152432682-2e102919-114a-43ce-a446-5501d287084a.png)

- If the save button is used to save every input on the page, use the **primary** button appearance.
- If the save button refers to a segment of controls on the page, use the **secondary** button appearance.
- If the save button has a corresponding cancel button, use the **primary** button appearance for the save button, and **secondary** for the cancel button.

For more guidance on button usage, see the [button documentation](https://primer.style/components/button).

![Appearance](https://user-images.githubusercontent.com/2313998/152432687-e119f44c-9325-4ae7-b277-e8559a4eb37b.png)

Controls all belong to one form

![A small form in a dialog that has 'Cancel' and 'Save' buttons at the bottom right](https://user-images.githubusercontent.com/2313998/151623724-d59d5967-5484-4e81-a4c2-1109409956ee.png)

A form with a button to save and a button to cancel

![Appearance](https://user-images.githubusercontent.com/2313998/152432688-e74f67b2-a777-4c5f-be45-37a43615e6ab.png)

Controls divided into multiple sections

Do not disable or hide a form's save button even if the form is invalid or has not been changed. Disabled buttons cannot be focused using the Tab key, and disabled button styles are typically low-contrast and difficult to read.

**Do**

![Always keep the save button enabled](https://user-images.githubusercontent.com/2313998/151623709-2a4257d6-e8d0-4156-b928-c7097981791c.png)

**Don't**

![Don't disable the save button if the form is invalid or unchanged](https://user-images.githubusercontent.com/2313998/151623715-3b298004-b624-43dc-875c-2590c08070e7.png)

Place save buttons somewhere intuitive and easily accessible.

- There should only be one save button on a page.
- Place save buttons somewhere intuitive and easily accessible. If all of the fields save automatically, do not include a save button. This makes it unclear when data is being saved. See the guidelines on [explicit saving](#explicit-saving) and [automatic saving](#automatic-saving) for more information.
- Allow only one edit mode activated at a time if you're designing a page with content that can be edited separately (such as an issue title). Pages that contain multiple save buttons can cause confusion about which save button saves which group. Multiple save buttons with the same label can cause confusion for people who use assistive technologies like screen readers and voice recognition software.

**Do**

![A form with one save button at the bottom](https://user-images.githubusercontent.com/2313998/151887934-cfcc5130-53a8-4f40-ba36-97148ead72c0.png)

*Have one save button per form*

**Don't**

![A form with two sections. Each section has it's own save button.](https://user-images.githubusercontent.com/2313998/151887938-1fa6b5d7-c5c1-4010-ab99-e5c37bff8c0a.png)

*Don't have one save button per section of a form*

##### Bottom-left (default)

If there is a button to submit and a button to cancel, the cancel button should go to the **right** of the submit button.

![A form with the controls and save button left aligned](https://user-images.githubusercontent.com/2313998/155623608-440c8f2c-dbb1-4b3c-a76e-7f01af63b3a8.png)

Default to placing the submit button at the bottom left of the form. Labels and inputs are left-aligned and run from
top-to-bottom, so users would naturally move their eyes down and to the left.

##### Bottom-right (dialogs and comments)

If there is a button to submit and a button to cancel, the button to cancel should go to the **left** of the submit button.

![A small form in a dialog that has 'Cancel' and 'Save' buttons at the bottom right](https://user-images.githubusercontent.com/2313998/151623724-d59d5967-5484-4e81-a4c2-1109409956ee.png)

If the save button is used in a dialog, place the button at the bottom right of the dialog. Right-aligned dialog
buttons feel familiar because it's a common pattern across various platforms such as Windows, macOS, and Android.

![A multi-line text input with 'Close with Comment' and 'Comment' buttons right-aligned below the input](https://user-images.githubusercontent.com/2313998/158623777-a4bb25ec-e1a0-4feb-bd56-e46a69c7f768.png)

If the button is used to send a message such as a comment on an issue, right-align the button below the text area.
This is where GitHub has traditionally placed the **Submit** button for issues and pull requests, and
it's common practice in other apps to place a **Send** button to the right.

##### Adjacent to inline editing input

To simplify the interface, some content may be edited inline without taking the user to a separate flow.

An input used for inline editing should have a save button placed very close to visually connect the input with the button.

![Two images of a pull request header. The first image shows the title as read-only text. The second image shows a text input to edit the pull request title with 'Cancel' and 'Save' buttons below the input.](https://user-images.githubusercontent.com/2313998/158624334-fcd4e268-d144-4420-98ed-819c51631e7e.png)

##### Other

If you believe your submit button will not be intuitive or easily accessible using any of the placement options listed here, you may consider alternatives and optionally propose a new Primer pattern.

Automatic saving applies changes as they are made. Automatic saving should be used when the user expects instant feedback from the change they made.

![Opening the 'Watch' dropdown menu and changing. It saves automatically.](https://user-images.githubusercontent.com/2313998/152013139-02eb5213-bb19-4c8d-8b19-01f1d73602d1.gif)

If a form field is saved automatically, it should be obvious whether or not it saved without using text or visual
indicators. A visual indicator for whether or not a form field has been saved successfully could be mistaken as a
validation status.

To reduce UI and give instant feedback, you should use automatic saving (and not explicit saving) for imperative controls. These are:

- [Toggle switches](https://primer.style/components/toggle-switch). The toggle switch behaves like a light switch: the light just switches on and off without you having to confirm each time you flip the switch.
- [Segmented controls](https://primer.style/components/segmented-control). The segmented control behaves like tabs: the tab changes as soon as you select it, and you can only select one at a time.
- Single-select dropdowns that are not native `<select>` dropdowns or part of an explicitly saved form. Single-select dropdowns behave like a radio dial: the station starts playing as soon as you select it.

Semantic menus should only have a list of options to select from and should not have a save button in their dropdown. As soon as additional features (search inputs, filters, tabs, etc) are added, the component should be treated like a dialog with a button to submit and a button to cancel.

If the change is not obvious within the user's viewport, provide feedback to let the user know that the change occurred successfully.

- If the change occurred without a redirect or page refresh, you can use the [inline message component](https://primer.style/components/inline-message).
- If the change occurred and the page refreshes or redirects, you can use a [banner component](https://primer.style/components/banner).

> If your design is being implemented in github.com, avoid using a toast for now. The toast components used on
github.com have accessibility issues that need to be fixed.

Before submitting a form with potentially destructive consequences (for example, delete a repository), ask the user to confirm they want to submit the form.

For risky changes, provide a way to undo those changes after saving.

![Error forgiveness](https://user-images.githubusercontent.com/2313998/152434199-a067b037-baf8-4093-8796-b0bb58344223.png)

After merging a pull request, a button appears to revert the changes

When creating new content like issues, discussions, or even larger entities such as repositories or organizations, you may redirect the user to the entity they just created at the end of the flow.

In some cases, such as forking or using a template, you may need to hold the user at a waiting page while the entity is generated. In these cases, make the user feel confident that something is happening and that their configuration details will not be lost.

![Screen recording of a user forking a repository](https://user-images.githubusercontent.com/2313998/151446009-58bfb92f-00e1-4a15-a2a3-f1afb6fb4031.gif)
