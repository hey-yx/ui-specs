---
title: "GOV.UK · Component · Character count 字数统计"
source: https://design-system.service.gov.uk/components/character-count/
section: components
tag: "规范"
fetched: 2026-11-01
status: full
id: components-15
publisher: "GOV.UK Design System"
---

# GOV.UK · Component · Character count 字数统计

> 来源：[https://design-system.service.gov.uk/components/character-count/](https://design-system.service.gov.uk/components/character-count/)

> 版权：Crown copyright，按 [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/) 发布；本站代码 MIT 许可。本篇为 GOV.UK Design System 同源全文，引用时请署名 GOV.UK Design System。

---

Help users know how much text they can enter when there is a limit on the number of characters.

**示例：default**

```njk
{% from "govuk/components/character-count/macro.njk" import govukCharacterCount %}

{{ govukCharacterCount({
  name: "withHint",
  id: "with-hint",
  maxlength: 200,
  label: {
    text: "Can you provide more detail?",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  hint: {
    text: "Do not include personal or financial information like your National Insurance number or credit card details"
  }
}) }}
```

## When to use this component

Always test your service without a character count first.

Only use the character count component when there is a good reason for limiting the number of characters users can enter. For example, if there is:

- evidence that users are likely to enter more information than they need to
- a legal or technical reason that means an entry must be no more than a certain number of characters

## When not to use this component

If your users keep hitting the character limit imposed by the backend of your service then try to increase the limit rather than use a character count.

## How it works

It tells users how many characters they have remaining as they type into a [Textarea component](https://design-system.service.gov.uk/components/textarea/) with a character limit.

Users will get updates at a pace that works best for the way they interact with the textarea. This means:

- sighted users will see a count message that updates as they type
- screen reader users will hear the count announcement when they stop typing.

This component does not restrict the user from entering information. The user can enter more than the character limit, but are told they've entered too many characters. This lets them type or copy and paste their full answer, then edit it down.

The count message appears below the textarea so that:

- it’s clearly separate from any hint text or error message above the textarea
- if it’s below the visible screen area, users will still see it again when they scroll down to send their response

This component uses JavaScript. If JavaScript is not available, users will see a static message in place of the count message, telling them how many characters they can enter.

There are 2 ways to use the character count component. You can use HTML or, if you’re using Nunjucks or the GOV.UK Prototype Kit, you can use the Nunjucks macro.

**示例：default (second)**

```njk
{% from "govuk/components/character-count/macro.njk" import govukCharacterCount %}

{{ govukCharacterCount({
  name: "withHint",
  id: "with-hint",
  maxlength: 200,
  label: {
    text: "Can you provide more detail?",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  hint: {
    text: "Do not include personal or financial information like your National Insurance number or credit card details"
  }
}) }}
```

### If you’re asking more than one question on the page

If you're asking more than one question on the page, do not set the contents of the `<label>` as the page heading. Read more about [asking multiple questions on Question pages](https://design-system.service.gov.uk/patterns/question-pages/#asking-multiple-questions-on-a-page).

**示例：without-heading**

```njk
{% from "govuk/components/character-count/macro.njk" import govukCharacterCount %}

{{ govukCharacterCount({
  id: "label-as-page-heading",
  name: "labelAsPageHeading",
  maxlength: 200,
  label: {
    text: "Describe the nature of your event"
  }
}) }}
```

### Consider if a word count is more helpful

In some cases it may be more helpful to show a word count. For example, if your question requires a longer answer.

Do this by setting `data-count-type="words"` and then `data-maxlength` in the component markup.

For example, for a word limit of 150 set these options as: `data-count-type="words" data-maxlength="150"`.

**示例：word-count**

```njk
{% from "govuk/components/character-count/macro.njk" import govukCharacterCount %}

{{ govukCharacterCount({
  name: "wordCount",
  id: "word-count",
  maxlength: 150,
  countType: "words",
  label: {
    text: "Enter a job description",
    classes: "govuk-label--l",
    isPageHeading: true
  }
}) }}
```

### Avoid narrow limits

When using a character count, try to set the limit higher than most users will need. Find out what this is by doing user research and data analysis.

#### If the limit is far higher than users are likely to reach

You can choose to display a character count message when the length of text within the textarea passes a certain 'threshold' of characters. This is useful when a character limit is needed due to the technical limitations of the service, but users are unlikely to reach that limit.

To do this, set the threshold in the component markup as a percentage. For example, `data-threshold="75"` will show the count message only when the user has entered a length of text that's 75% of the limit or more.

Screen reader users will hear the character limit when they first interact with a textarea using the threshold option. Sighted users will not see anything until the count message is shown – though you might choose to include the character limit in the hint text.

**示例：threshold**

```njk
{% from "govuk/components/character-count/macro.njk" import govukCharacterCount %}

{% set textareaValue -%}
This example of a textarea has a character limit of 1000 characters. The character count is hidden, but will appear when more than 850 characters are entered in this textarea. Type some more text into this textarea to see the character count appear. This paragraph will now repeat 2 more times.

This example of a textarea has a character limit of 1000 characters. The character count is hidden, but will appear when more than 850 characters are entered in this textarea. Type some more text into this textarea to see the character count appear. This paragraph will now repeat 1 more time.

This example of a textarea has a character limit of 1000 characters. The character count is hidden, but will appear when more than 850 characters are entered in this textarea. Type some more text into this textarea to see the character count appear.
{%- endset %}

{{ govukCharacterCount({
  name: "threshold",
  id: "threshold",
  maxlength: 1000,
  threshold: 85,
  value: textareaValue,
  label: {
    text: "Can you provide more detail?",
    classes: "govuk-label--l",
    isPageHeading: true
  }
}) }}
```

### Error messages

Error messages should be styled like this:

**示例：error**

```njk
{% from "govuk/components/character-count/macro.njk" import govukCharacterCount %}

{{ govukCharacterCount({
  id: "exceeding-characters",
  name: "exceeding",
  maxlength: 350,
  value: "A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format.",
  label: {
    text: "Enter a job description",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  errorMessage: {
    text: "Job description must be 350 characters or less"
  }
}) }}
```

If a user tries to send their response with too many characters, you must show an error message above the field as well as the count message below it.

The error message tells users what went wrong and how to fix it. The count message provides live feedback and updates as a user types.

The input shows a red border only when the user tries to enter more than the character limit. If the number of characters is within the limit, the input does not show this border even when there's been an error. We felt it might cause the user difficulty if the border disappeared once they started typing.

Make sure errors follow GOV.UK guidance on [writing error messages](https://design-system.service.gov.uk/components/error-message/#be-clear-and-concise) and have specific error messages for specific error states.

#### If the input is empty

Say ‘Enter [whatever it is]’.<br>
For example, ‘Enter a summary’.

#### If the input is too long

Say ‘[whatever it is] must be [number] characters or less’.<br>
For example, ‘Summary must be 400 characters or less’.

## Research on this component

In 2017, the Government Digital Service (GDS) [developed and tested this component](https://github.com/alphagov/govuk-design-system/discussions/6043?sort=new#discussioncomment-19096551) in a prototype of the ‘Apply for a temporary event notice’ service. During this research, the component was tested with 17 users, including those with low digital skills and users with disabilities.

In 2022, the GOV.UK Design System team [updated the component to make it more accessible](https://github.com/alphagov/govuk-design-system/discussions/6043#discussioncomment-18811500), stopping the character count being announced twice by some screenreaders.

### Known issues and gaps

In Internet Explorer 11, JAWS will ignore any set threshold and announce the character count, even if the user entered less than the threshold.

In Chrome version 99, JAWS will not announce the hint or character count of a pre-populated textarea. This is a [known issue for the developer of JAWS](https://github.com/FreedomScientific/VFO-standards-support/issues/201).

Also, this component [counts some characters as multiple characters](https://github.com/alphagov/govuk-frontend/issues/1104). For example, emojis and some non-Latin characters.

### Services using this component

The component is used in a number of services, including the following.

**Department for Education**<br>
Publish teacher training courses

**Government Digital Service**<br>
Content publisher application

### Next steps

More user research is needed to find out:

- how to decide between a character limit and a word limit
- if highlighting characters over the limit in red would be helpful for users
- how the component might work with lower as well as upper limits
- if enabling a character count on text inputs would be useful

If you’ve used this component, get in touch to share your user research findings.
