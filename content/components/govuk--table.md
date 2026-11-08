---
title: "GOV.UK · Component · Table 表格"
source: https://design-system.service.gov.uk/components/table/
section: components
tag: "规范"
fetched: 2026-11-01
status: full
id: components-40
publisher: "GOV.UK Design System"
---

# GOV.UK · Component · Table 表格

> 来源：[https://design-system.service.gov.uk/components/table/](https://design-system.service.gov.uk/components/table/)

> 版权：Crown copyright，按 [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/) 发布；本站代码 MIT 许可。本篇为 GOV.UK Design System 同源全文，引用时请署名 GOV.UK Design System。

---

Use the table component to make information easier to compare and scan for users.

**示例：default**

```njk
{% from "govuk/components/table/macro.njk" import govukTable %}

{{ govukTable({
  caption: "Dates and amounts",
  captionClasses: "govuk-table__caption--m",
  firstCellIsHeader: true,
  head: [
    {
      text: "Date"
    },
    {
      text: "Amount"
    }
  ],
  rows: [
    [
      {
        text: "First 6 weeks"
      },
      {
        text: "£109.80 per week"
      }
    ],
    [
      {
        text: "Next 33 weeks"
      },
      {
        text: "£109.80 per week"
      }
    ],
    [
      {
        text: "Total estimated pay"
      },
      {
        text: "£4,282.20"
      }
    ]
  ]
}) }}
```

## When to use this component

Use the table component to let users compare information in rows and columns.

## When not to use this component

Never use the table component to layout content on a page. Instead, use the [grid system](https://design-system.service.gov.uk/styles/layout/#using-the-grid-system).

## How it works

### Table captions

Use the `<caption>` element to describe a table in the same way you would use a heading. A caption helps users find, navigate and understand tables.

There are other styling options for table captions. You can use `govuk-table__caption--s`, `govuk-table__caption--m`, `govuk-table__caption--l` and `govuk-table__caption--xl` classes to make them larger or smaller from the default.

**示例：caption-l**

```njk
{% from "govuk/components/table/macro.njk" import govukTable %}

{{ govukTable({
  caption: "Months and rates",
  captionClasses: "govuk-table__caption--l",
  firstCellIsHeader: true,
  head: [
    {
      text: "Month you apply"
    },
    {
      text: "Rate for vehicles"
    }
  ],
  rows: [
    [
      {
        text: "January"
      },
      {
        text: "£95"
      }
    ],
    [
      {
        text: "February"
      },
      {
        text: "£55"
      }
    ],
    [
      {
        text: "March"
      },
      {
        text: "£125"
      }
    ]
  ]
}) }}
```

### Table headers

Use table headers to tell users what the rows and columns represent. Use the `scope` attribute to help users of assistive technology distinguish between row and column headers.

There are 2 ways to use the table component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk), you can use the Nunjucks macro.

**示例：default (second)**

```njk
{% from "govuk/components/table/macro.njk" import govukTable %}

{{ govukTable({
  caption: "Dates and amounts",
  captionClasses: "govuk-table__caption--m",
  firstCellIsHeader: true,
  head: [
    {
      text: "Date"
    },
    {
      text: "Amount"
    }
  ],
  rows: [
    [
      {
        text: "First 6 weeks"
      },
      {
        text: "£109.80 per week"
      }
    ],
    [
      {
        text: "Next 33 weeks"
      },
      {
        text: "£109.80 per week"
      }
    ],
    [
      {
        text: "Total estimated pay"
      },
      {
        text: "£4,282.20"
      }
    ]
  ]
}) }}
```

## Numbers in a table

When comparing columns of numbers, align the numbers to the right in table cells.

**示例：numbers**

```njk
{% from "govuk/components/table/macro.njk" import govukTable %}

{{ govukTable({
  caption: "Months and rates",
  captionClasses: "govuk-table__caption--m",
  firstCellIsHeader: true,
  head: [
    {
      text: "Month you apply"
    },
    {
      text: "Rate for bicycles",
      format: "numeric"
    },
    {
      text: "Rate for vehicles",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "January"
      },
      {
        text: "£85",
        format: "numeric"
      },
      {
        text: "£95",
        format: "numeric"
      }
    ],
    [
      {
        text: "February"
      },
      {
        text: "£75",
        format: "numeric"
      },
      {
        text: "£55",
        format: "numeric"
      }
    ],
    [
      {
        text: "March"
      },
      {
        text: "£165",
        format: "numeric"
      },
      {
        text: "£125",
        format: "numeric"
      }
    ]
  ]
}) }}
```

## Custom column widths

You can use the [width override classes](https://design-system.service.gov.uk/styles/layout/#width-override-classes) to set the width of table columns.

**示例：column-widths**

```njk
{% from "govuk/components/table/macro.njk" import govukTable %}

{{ govukTable({
  caption: "Month you apply",
  captionClasses: "govuk-table__caption--m",
  firstCellIsHeader: true,
  head: [
    {
      text: "Date",
      classes: "govuk-!-width-one-half"
    },
    {
      text: "Rate for vehicles",
      classes: "govuk-!-width-one-quarter"
    },
    {
      text: "Rate for bicycles",
      classes: "govuk-!-width-one-quarter"
    }
  ],
  rows: [
    [
      {
        text: "First 6 weeks"
      },
      {
        text: "£109.80 per week"
      },
      {
        text: "£59.10 per week"
      }
    ],
    [
      {
        text: "Next 33 weeks"
      },
      {
        text: "£159.80 per week"
      },
      {
        text: "£89.10 per week"
      }
    ],
    [
      {
        text: "Total estimated pay"
      },
      {
        text: "£4,282.20"
      },
      {
        text: "£2,182.20"
      }
    ]
  ]
}) }}
```

If the [width override classes](https://design-system.service.gov.uk/styles/layout/#width-override-classes) do not meet your needs you can create your own width classes and apply them to the cells in the table head. These can be added using the `classes` option in the Nunjucks macro or adding the class directly to the individual cells within `govuk-table__head` as below.

To learn more about this, read guidance on [extending and modifying components in production](https://design-system.service.gov.uk/get-started/extending-and-modifying-components/).

**示例：column-widths-custom-classes**

```njk
{% from "govuk/components/table/macro.njk" import govukTable %}

{{ govukTable({
  caption: "Month you apply",
  captionClasses: "govuk-table__caption--m",
  firstCellIsHeader: true,
  head: [
    {
      text: "Date",
      classes: "app-custom-class"
    },
    {
      text: "Rate for vehicles",
      classes: "app-custom-class"
    },
    {
      text: "Rate for bicycles",
      classes: "app-custom-class"
    }
  ],
  rows: [
    [
      {
        text: "First 6 weeks"
      },
      {
        text: "£109.80 per week"
      },
      {
        text: "£59.10 per week"
      }
    ],
    [
      {
        text: "Next 33 weeks"
      },
      {
        text: "£159.80 per week"
      },
      {
        text: "£89.10 per week"
      }
    ],
    [
      {
        text: "Total estimated pay"
      },
      {
        text: "£4,282.20"
      },
      {
        text: "£2,182.20"
      }
    ]
  ]
}) }}
```

## Tables with a lot of data

If possible, you should aim to have less data in your tables. If you have a lot of data, try to organise it into multiple tables or multiple pages.

If you cannot split your data, you can use the CSS class `govuk-table--small-text-until-tablet`. This class reduces the size of the text on small screens so large amounts of data has more empty space around it. This makes it easier to visually differentiate between each piece of data when read on small screens.


  <p>The CSS class <code>govuk-table--small-text-until-tablet</code> is only available in version 5.2 of GOV.UK Frontend and later.</p>
  <p>Read about <a href="/get-started/new-type-scale/">updating your service to use the new type scale</a>.</p>

You should not use this class on tables unless your table has a lot of data, because a smaller amount of data is easier to read if the text is larger.

**示例：lots-of-data**

```njk
{% from "govuk/components/table/macro.njk" import govukTable %}

{{ govukTable({
  caption: "Dates and amounts",
  captionClasses: "govuk-table__caption--m",
  firstCellIsHeader: true,
  classes: "govuk-table--small-text-until-tablet",
  head: [
    {
      text: "Date"
    },
    {
      text: "First amount"
    },
    {
      text: "Second amount"
    }
  ],
  rows: [
    [
      {
        text: "First 3 weeks"
      },
      {
        text: "£27.45 per week"
      },
      {
        text: "£33.90 per week"
      }
    ],
    [
      {
        text: "Next 6 weeks"
      },
      {
        text: "£27.45 per week"
      },
      {
        text: "£33.90 per week"
      }
    ],
    [
      {
        text: "Next 24 weeks"
      },
      {
        text: "£27.45 per week"
      },
      {
        text: "£33.90 per week"
      }
    ],
    [
      {
        text: "Next 33 weeks"
      },
      {
        text: "£27.45 per week"
      },
      {
        text: "£33.90 per week"
      }
    ],
    [
      {
        text: "Total estimated pay"
      },
      {
        text: "£4,282.20"
      },
      {
        text: "£5,288.40"
      }
    ]
  ]
}) }}
```
