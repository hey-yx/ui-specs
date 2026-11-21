---
title: "GitHub Primer · Component · Inline message"
source: https://raw.githubusercontent.com/primer/design/main/content/components/inline-message.mdx
section: components
tag: "规范"
fetched: 2026-11-14
status: full
id: comp-primer-inline-message
publisher: "GitHub Primer"
---

# GitHub Primer · Component · Inline message

> 来源：https://primer.style/components/inline-message

![Image displaying each variation of InlineMessage, from top: critical, warning, success, unavailable.](https://github.com/primer/primitives/assets/813754/f9daa010-532a-42e2-b884-45ee6263e17c)

## Usage

Inline messages inform users about the result of an action they took. In contrast to a banner an inline message can be very close the where the action has taken place.
For example below an input field, next to a button or within a table.

## Anatomy
![A labeled diagram of the inline message component. The labeled parts are an icon and a message.](https://github.com/primer/primitives/assets/813754/d854b989-ff3b-426b-9eec-0355145e534a)

## Options

### Variants

  ![](https://github.com/primer/design/assets/813754/c4190734-b9d2-4978-b14e-6ff0e3716efc)

#### Critical

Use the `critical` variant for errors. For example, during form validation or when an action failed.

  ![](https://github.com/primer/design/assets/813754/7bc1679e-812c-41b6-953b-4ef2ffcd9257)

#### Warning

Use the `warning` variant to inform about potential issues or risky changes. For example, important settings and possible connectivity concerns.

  ![](https://github.com/primer/design/assets/813754/d3b919f2-4564-43e1-ad31-498d35a09aac)

  Success

  Use the `success` variant to indicate task completion or a successfully completed action. For example, to confirm settings have been saved.

  ![](https://github.com/primer/design/assets/813754/d0fb73bd-d060-444e-b8c5-0aaff2a54cdc)

#### Unavailable

Use the `unavailable` variant to inform users that a specific part of the UI could not be loaded. For example, when not being able to retrieve data in a table.

### Size

  ![](https://github.com/primer/design/assets/813754/a59439a4-5f1f-4bc5-b57e-c2e7581e909d)

The `InlineMessage` is available as size `small` and `default`. Use the size that best fits to the related UI section. If either works, choose `default`.

## Accessibility

### Known accessibility issues (GitHub staff only)
