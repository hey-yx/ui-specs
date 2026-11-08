---
title: "GOV.UK · Component · Select 下拉选择框"
source: https://design-system.service.gov.uk/components/select/
section: components
tag: "规范"
fetched: 2026-11-01
status: full
id: components-36
publisher: "GOV.UK Design System"
---

# GOV.UK · Component · Select 下拉选择框

> 来源：[https://design-system.service.gov.uk/components/select/](https://design-system.service.gov.uk/components/select/)

> 版权：Crown copyright，按 [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/) 发布；本站代码 MIT 许可。本篇为 GOV.UK Design System 同源全文，引用时请署名 GOV.UK Design System。

---

**示例：default**

```njk
{% from "govuk/components/select/macro.njk" import govukSelect %}

{{ govukSelect({
  id: "sort",
  name: "sort",
  label: {
    text: "Sort by"
  },
  items: [
    {
      value: "published",
      text: "Recently published"
    },
    {
      value: "updated",
      text: "Recently updated",
      selected: true
    },
    {
      value: "views",
      text: "Most views"
    },
    {
      value: "comments",
      text: "Most comments"
    }
  ]
}) }}
```

## When to use this component

The select component should only be used as a last resort in public-facing services because research shows that some users find selects very difficult to use.

## When not to use this component

The select component allows users to choose an option from a long list. Before using the select component, try asking users questions which will allow you to present them with fewer options.

Asking questions means you’re less likely to need to use the select component, and can consider using a different solution, such as a [Radios component](https://design-system.service.gov.uk/components/radios/).

## How it works

If you use the component for settings, you can make an option pre-selected by default when users first see it.

If you use the component for questions, you should not pre-select any of the options in case it influences users' answers.

There are 2 ways to use the select component. You can use HTML or, if you’re using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

**示例：default (second)**

```njk
{% from "govuk/components/select/macro.njk" import govukSelect %}

{{ govukSelect({
  id: "sort",
  name: "sort",
  label: {
    text: "Sort by"
  },
  items: [
    {
      value: "published",
      text: "Recently published"
    },
    {
      value: "updated",
      text: "Recently updated",
      selected: true
    },
    {
      value: "views",
      text: "Most views"
    },
    {
      value: "comments",
      text: "Most comments"
    }
  ]
}) }}
```

### Select with hint

You can add hint text to help the user understand the options and choose one of them.

Keep hint text to a single short sentence, without any full stops.

Do not use links in hint text. While screen readers will read out the link text, they usually do not tell users the text is a link.

**示例：with-hint**

```njk
{% from "govuk/components/select/macro.njk" import govukSelect %}

{{ govukSelect({
  id: "location",
  name: "location",
  label: {
    text: "Choose location"
  },
  hint: {
    text: "This can be different to where you went before"
  },
  items: [
    {
      value: "choose",
      text: "Choose location",
      selected: true
    },
    {
      value: "eastmidlands",
      text: "East Midlands"
    },
    {
      value: "eastofengland",
      text: "East of England"
    },
    {
      value: "london",
      text: "London"
    },
    {
      value: "northeast",
      text: "North East"
    },
    {
      value: "northwest",
      text: "North West"
    },
    {
      value: "southeast",
      text: "South East"
    },
    {
      value: "southwest",
      text: "South West"
    },
    {
      value: "westmidlands",
      text: "West Midlands"
    },
    {
      value: "yorkshire",
      text: "Yorkshire and the Humber"
    }
  ]
}) }}
```

### Error messages

Display an error message if the user has not selected an option.

Style error messages as shown in the example:

**示例：error**

```njk
{% from "govuk/components/select/macro.njk" import govukSelect %}

{{ govukSelect({
  id: "location",
  name: "location",
  label: {
    text: "Choose location"
  },
  hint: {
    text: "This can be different to where you went before"
  },
  errorMessage: {
    text: "Select a location"
  },
  items: [
    {
      value: "choose",
      text: "Choose location",
      selected: true
    },
    {
      value: "eastmidlands",
      text: "East Midlands"
    },
    {
      value: "eastofengland",
      text: "East of England"
    },
    {
      value: "london",
      text: "London"
    },
    {
      value: "northeast",
      text: "North East"
    },
    {
      value: "northwest",
      text: "North West"
    },
    {
      value: "southeast",
      text: "South East"
    },
    {
      value: "southwest",
      text: "South West"
    },
    {
      value: "westmidlands",
      text: "West Midlands"
    },
    {
      value: "yorkshire",
      text: "Yorkshire and the Humber"
    }
  ]
}) }}
```

### Avoid adding functionality to allow selecting multiple options

The select component does not support selecting multiple options, [as there’s a history of poor usability and assistive technology support for `<select multiple>`](https://www.24a11y.com/2019/select-your-poison/). If you need to ask the user to pick more than one item from a list, it’s almost always better to use another method, such as a list of checkboxes.

## Research on this component

User research has shown that some users struggle with selects.

### Known issues and gaps

Research shows that users can struggle with selects, particularly when users have:

- been unable to close the select
- tried to type into the select
- confused focused items with selected items
- tried to pinch zoom select options on smaller devices
- not understood that they can scroll down to see more items, or how to

For more detail watch this video with [examples of users struggling with selects](https://www.youtube.com/watch?v=-dH6a6eMdXE).

This blog shows [an example where a text input is used over a select](https://designnotes.blog.gov.uk/2013/12/05/asking-for-a-date-of-birth/) for asking a user for a date.
