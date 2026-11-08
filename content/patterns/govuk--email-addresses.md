---
title: "GOV.UK · Pattern · Email addresses 邮箱地址"
source: https://design-system.service.gov.uk/patterns/email-addresses/
section: patterns
tag: "规范"
fetched: 2026-11-01
status: full
id: patterns-3
publisher: "GOV.UK Design System"
---

# GOV.UK · Pattern · Email addresses 邮箱地址

> 来源：[https://design-system.service.gov.uk/patterns/email-addresses/](https://design-system.service.gov.uk/patterns/email-addresses/)

> 版权：Crown copyright，按 [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/) 发布；本站代码 MIT 许可。本篇为 GOV.UK Design System 同源全文，引用时请署名 GOV.UK Design System。

---

This guidance is for government teams that build online services. [To find information and services for the public, go to GOV.UK](https://www.gov.uk/).

**示例：default**

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}

{{ govukInput({
  label: {
    text: "Email address"
  },
  hint: {
    text: "We’ll only use this to send you a receipt"
  },
  id: "email",
  name: "email",
  type: "email",
  autocomplete: "email",
  spellcheck: false
}) }}
```

## When to use this pattern

Follow this pattern whenever you need to capture an email address.

## How it works

When asking users for their email address, you must:

- make it clear why you’re asking
- make sure the field works for all of your users
- help users to enter a valid email address

You may also need to check that users have access to the email account they give you.

**示例：default**

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}

{{ govukInput({
  label: {
    text: "Email address"
  },
  hint: {
    text: "We’ll only use this to send you a receipt"
  },
  id: "email",
  name: "email",
  type: "email",
  autocomplete: "email",
  spellcheck: false
}) }}
```

### Tell users why you want the email address

Make it clear what the email address will be used for so that:

- users feel confident that you’re not going to abuse it
- users with multiple email addresses can choose which one to give you

If the email address field is part of a sign-in box, you do not need to say ‘We need your email so we can sign you in’.

### Make sure the field works for all of your users

Make sure the field can accommodate up to 254 characters, which is the [longest an email address can be](https://www.rfc-editor.org/errata_search.php?rfc=3696&eid=1690).

### Help users to enter a valid email address

Help your users to enter a valid email address by:

- checking they have entered the correct format
- allowing users to paste the email address
- setting the `type` attribute to `email` so that devices display the correct keyboard
- setting the `spellcheck` attribute to `false` so that browsers do not spellcheck the email address
- confirming their address back to them so they can check and change it

You should also set the `autocomplete` attribute to `email`. This lets browsers autofill the email address on a user's behalf if they’ve entered it previously.

If you are working in production you’ll need to do this to meet [WCAG 2.2 success criterion 1.3.5 Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html). You will not normally need to use the `autocomplete` attribute in prototypes, as users will not generally be using their own devices.

The field should be wide enough for most users to see their entire email address once they have entered it. A good rule of thumb is to make sure you can see at least 30 characters at once. You can analyse your user data to refine this.

You can check for common misspellings of popular email providers, for example ‘homtail.com’ instead of ‘hotmail.com’. Warn users if you detect one, but allow them to proceed in case it’s a genuine email address.

Some services ask users to repeat their email address. Only do this if your user research shows it to be effective.

### Check the user has access to their email account

If email is an essential part of your service - for example to send a password reset - you can confirm whether the user has access to the email address they give you [using an email confirmation loop](https://design-system.service.gov.uk/patterns/confirm-an-email-address/).

However, these are disruptive and should be avoided as far as possible.

### Error messages

Error messages should be styled like this:

**示例：error**

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}

{{ govukInput({
  label: {
    text: "Email address"
  },
  hint: {
    text: "We’ll only use this to send you a receipt"
  },
  id: "email",
  name: "email",
  type: "email",
  value: "Not an email address",
  autocomplete: "email",
  errorMessage: {
    text: "Enter an email address in the correct format, like name@example.com"
  },
  spellcheck: false
}) }}
```

Make sure errors follow the guidance in the [Error message component](https://design-system.service.gov.uk/components/error-message/) and have specific error messages for specific error states.

#### If the email address is not in the correct format and there is no example

Say ‘Enter an email address in the correct format, like name<i></i>@example.com’.

#### If the email address is not in the correct format and there is an example

Say ‘Enter an email address in the correct format’.
