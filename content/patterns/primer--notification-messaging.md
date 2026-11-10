---
title: "GitHub Primer · Pattern · Notification messaging 通知消息"
source: https://primer.style/ui-patterns/notification-messaging/
section: patterns
tag: "规范"
fetched: 2026-11-09
status: full
id: patterns-35
publisher: "GitHub Primer"
---

# GitHub Primer · Pattern · Notification messaging 通知消息

> 来源：[https://primer.style/ui-patterns/notification-messaging/](https://primer.style/ui-patterns/notification-messaging/)

---

Messaging components are used to provide important and relevant information to the user, including feedback, contextual information, product updates, and more.

Primer messaging components:

  - [Banner](https://primer.style/product/components/banner/)
  - [InlineMessage](https://primer.style/product/components/inline-message/)

## Message types
Messaging holds differing levels of prominence which can be used to determine the appropriate component to use. Most messages fall into one of the following categories, from most prominent to least:

**System updates**: These types of messages originate from GitHub and are not user initiated. System announcements related to a specific product area such as a single sign-on message should use the **Banner** component. System update type messages cannot be dismissed until the issue is resolved, or may be perminent if they are purely informative.

**Feedback**: Communicates the result of a user action (submitting a form, toggling a setting, etc.) Feedback can be positive, negative, or a warning. Feedback is shown in either a **Banner** or **InlineMessage**. For forms, an InlineMessage is used for individual field validation which may be combined with a Banner if multiple fields have errors. Banners are placed at the top of the page or section they are related to, but still within the body content. InlineMessages are placed near the action they are related to.

**Awareness**: Communicates information that is relevant to the user but not necessarily related to an action they've taken. This type of message is typically used to provide context or additional information about a feature or product. A **Banner** using the `info` state might be used to suggest an action, while an **InlineMessage** might suggest a helpful tip.

See the [message type flowchart](https://primer.style/ui-patterns/notification-messaging/#choosing-a-message-type) to help determine the appropriate message type for specific use cases. Also reference Accessibility’s Toast documentation to see how [banners](https://primer.style/product/components/banner/), [inline messages](https://primer.style/product/ui-patterns/forms/#validation-message), and [dialog](https://primer.style/product/components/dialog/)-based messaging can help in situations where you may be inclined to use toast notifications.

## Message states
![A group of labels showing the proper icon and color combination for each message state](https://github.com/primer/design/assets/18661030/bbcbe8a0-4d7f-47f0-9f20-c6cee406115f)

### Visual treatment
Primer offers six states for messaging components: info, warning, success, unavailable, critical, and upsell. Each state has a corresponding icon and color combination to help communicate the message's intent.

Icons sized at 12px utilize the filled variant, while 16px and 24px utilize the outline variant paired with 14px text or larger.

![An example of an input field with a 12px error message next to two examples of 14px icon usage, which uses an outline icon.](https://github.com/user-attachments/assets/2ee98e32-0a1c-4b40-8111-80cea6cf1177)

### Overview
Messaging components combine state with message type to provide the appropriate level of prominence. To determine which component to use for your message, start by identifying the message state.

| State | Use case |
| --- | --- |
| Info | Highlights important information that has an influence on the current view or offers an action. |
| Warning | Informs about a potential issue or consequence as the result of an action. |
| Critical | Informs about an error that occured or warns about loss of access or data as a result of an action. |
| Success | Informs about successfully completing an action. |
| Unavailable | Informs about degraded experiences or outages. |
| Upsell | Highlights features that are available for specific account types such as Enterprise. |

### Info
Use the `info` state to highlight messages that help users complete a task or that provide additional context.

Examples:

  - Single sign on or other account related notifications
  - General information about a feature or setting
![A single sign on info Banner on the GitHub homepage](https://github.com/primer/design/assets/18661030/1055049e-6db8-41d5-8cf8-e375bd0e8dea)

### Warning
Use the `warning` state to inform users of a potential issue, an important upcoming change that may impact their experience or a potentially unexpected consequence of an action.

Examples:

  - An account setting will become required soon
  - A [degraded experience](https://primer.style/product/ui-patterns/degraded-experiences/) due to connectivity or GitHub availability
  - A non-destructive action with side-effects like costs or access changes is about to take place
![A yellow warning Banner inside a repo Codespace settings page explaining that there may be a billable charge if settings are changed.](https://github.com/user-attachments/assets/91e138d2-15ce-438b-b133-ac807afb3bf1)

### Critical
Use the `critical` state to notify users that an action was unsuccessful, to display form errors, or to inform that an action is destructive.

Examples:

  - Form field is invalid upon submitting
  - A delete or transfer button
![A critical error message on an input field within GitHub Issues.](https://github.com/primer/design/assets/18661030/5da2e479-6bc7-46dc-9179-46002412b9f5)

### Success
Use the `success` state to notify users that the results of an action were successful if it is not apparent from other parts of the UI. **Use success messaging sparingly** and rely more on interaction context.

Examples where a success message is needed:

Copy button, the copy to clipboard action was successful.

Creating multiple new issues.

Examples where a success message is **not** needed:

  - Saving the comment edit or title edit of an Issue, where the success is indicated by the return to the updated comment or title in non-edit mode.
  - Creating a single new issue, where a user is brought to the newly created issue page upon successful creation.

### Unavailable
Reserve the `unavailable` state for **inline** system related degraded experiences, or for surfacing account related permission messages.

Examples:

  - A row of a DataTable or item in a list could not be loaded
  - User does not have permissions to perform an action
See [degraded experiences](https://primer.style/product/ui-patterns/degraded-experiences/) for more information.

### Upsell
Use the `upsell` state to highlight features that could be unlocked if the user upgrades their account.

Example:

Upgrade account to access a feature

![An upsell Banner inside the rulesets setting page on GitHub explaing that this feature can be used if the user upgrades to an Enterprise account.](https://github.com/primer/design/assets/18661030/924884b8-4b85-4967-898d-e0c2fcfaf785)

## Placement
Message proximity contributes to the prominence of a message. Whenever possible, place messages near the action they are related to.

### Top of body
If messaging pertains to an entire page or section, place it at the top of the body content. This is the most common placement for messaging components. Banners should fill the container width but maintain appropriate spacing between elements and not appear full width or flush under the global nav.

![Highlights a Banner at the top of the body inside a GitHub issue.](https://github.com/primer/design/assets/18661030/73a2ace1-e4fe-4255-850d-062c8d75b7a9)

### Inline
InlineMessages are used to provide feedback on a specific action or input field.

![Highlights an InlineMessage next to an input field inside a GitHub issue.](https://github.com/primer/design/assets/18661030/ea98bf69-1a7a-4061-8fce-2e2be4303b55)

### Inside a Dialog
Banners should be placed below the Dialog header and appear full width within the Dialog content area. Prioritize showing messaging *inside* the Dialog after an action rather than closing the Dialog and showing a Banner on the page.

![Highlights a Banner inside a Dialog showing an error state has occured.](https://github.com/primer/design/assets/18661030/f4e3a125-94b6-4b12-b9ec-6b881c25f82c)

### Placement recommendations
![A banner for a SelectPanel dialog is placed inside the dialog just before the SelectPanel options.](https://primer.style/_next/image/?url=%2Fimages%2Ffigma%2FYlBTqHTbdRwYQt0bfIHvGw-3305-74575.png&w=1080&q=75)
*Place Banners in close proximity to where the interaction occured.*
![A banner for a SelectPanel dialog is placed outside of the dialog at the top of the page.](https://primer.style/_next/image/?url=%2Fimages%2Ffigma%2FYlBTqHTbdRwYQt0bfIHvGw-3305-74651.png&w=1080&q=75)
*Don't place Banners related to internal Dialog content at the top of a page.*
![An issue created message is displayed under the create button for an issue form.](https://github.com/user-attachments/assets/3aae67be-e177-4d88-ae40-c00430388218)

![An issue created message is displayed in a banner above the issue created form.](https://github.com/user-attachments/assets/b52fcfaa-45e5-4e37-b17e-09033e950458)

## Choosing a message type
Picking a notification message for an experience can be tricky. Reference this flowchart to help pick the best component for your feature. For more nuanced scenarios, reach out to the Primer team.

![](https://github.com/user-attachments/assets/b8635f19-629c-42d6-9102-0014257288e5)

[View flowchart in full size](https://github.com/user-attachments/assets/b8635f19-629c-42d6-9102-0014257288e5)

### Success messaging flowchart
### Error messaging flowchart
#### We know what went wrong branch
#### We don't know what went wrong branch
