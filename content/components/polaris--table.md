---
title: "Shopify Polaris · Table 表格"
source: https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/layout-and-structure/table
section: components
tag: "规范"
fetched: 2026-11-09
status: full
id: components-polaris-table
publisher: "Shopify Polaris"
---

# Shopify Polaris · Table 表格

> 来源：[https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/layout-and-structure/table](https://shopify.dev/docs/api/app-home-ui-extension/latest/web-components/layout-and-structure/table)

---

The table component displays data clearly in rows and columns, helping users view, analyze, and compare structured information. Use table to present datasets, product lists, order details, or any tabular content that benefits from organized rows and columns.

Tables automatically adapt to screen size, rendering as lists on small screens and tables on larger ones for optimal readability across devices.

#### Use cases

* **Data tables:** Display tabular data with headers, rows, and cells.
* **Sortable columns:** Create tables with sortable column headers.
* **Paginated data:** Show large datasets with pagination controls.
* **Structured data:** Present structured data in accessible table format.

```html
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header>Name</s-table-header>
      <s-table-header>Email</s-table-header>
      <s-table-header format="numeric">Orders placed</s-table-header>
      <s-table-header>Phone</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>John Smith</s-table-cell>
        <s-table-cell>john@example.com</s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>123-456-7890</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Jane Johnson</s-table-cell>
        <s-table-cell>jane@example.com</s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>234-567-8901</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Brandon Williams</s-table-cell>
        <s-table-cell>brandon@example.com</s-table-cell>
        <s-table-cell>42</s-table-cell>
        <s-table-cell>345-678-9012</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

## Properties

Configure the following properties on the table component.

* **has​Next​Page**

  **boolean**

  **Default: false**

  Whether there's an additional page of data.

* **has​Previous​Page**

  **boolean**

  **Default: false**

  Whether there's a previous page of data.

* **loading**

  **boolean**

  **Default: false**

  Whether the table is in a loading state, such as during initial page load or when loading the next page in a paginated table. When `true`, the table might be in an inert state that prevents user interaction.

* **paginate**

  **boolean**

  **Default: false**

  Whether to use pagination controls.

* **variant**

  **"auto" | "list"**

  **Default: 'auto'**

  The layout variant of the table component.

  * `list`: Always displays as a list layout.
  * `auto`: Automatically displays as a table on wide screens and as a list on narrow screens.

### Slots

The table component supports slots for additional content placement within the component. Learn more about [using slots](https://shopify.dev/docs/api/polaris/using-polaris-web-components#slots).

* **children**

  **HTMLElement**

  The table structure defining headers and data rows.

  Accepts table header row (for column headers) and table body (for data rows) components. Structure your table with a table header row first, followed by table body.

* **filters**

  **HTMLElement**

  Filter controls displayed above the table.

  Accepts input components like search field or select for filtering table data. These controls appear in a dedicated area above the table content.

### Events

The table component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **nextpage**

  **CallbackEventListener\<typeof tagName> | null**

  A callback fired when the user navigates to the next page.

* **previouspage**

  **CallbackEventListener\<typeof tagName> | null**

  A callback fired when the user navigates to the previous page.

### CallbackEventListener

A function that handles events from UI components. This type represents an event listener callback that receives a \`CallbackEvent\` with a strongly-typed \`currentTarget\`. Use this for component event handlers like \`click\`, \`focus\`, \`blur\`, and other DOM events.

```ts
(EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
```

### CallbackEvent

An event object with a strongly-typed \`currentTarget\` property that references the specific HTML element that triggered the event. This type extends the standard DOM \`Event\` interface and ensures type safety when accessing the element that fired the event.

```ts
Event & {
  currentTarget: HTMLElementTagNameMap[T];
}
```

## Table body

The table body component represents the main content area of a table, containing the data rows. Use table body as a child of table to structure your table data, with each table row within the body representing a single record or entry.

Table body must contain table row components, which in turn contain table cell components for the actual data values.

* **declare class TableBody extends PolarisCustomElement implements TableBodyProps { /** @private */ [elementInternals]: ElementInternals; constructor(); }**

### Slots

The table body component supports slots for additional content placement within the component. Learn more about [using slots](https://shopify.dev/docs/api/polaris/using-polaris-web-components#slots).

* **children**

  **HTMLElement**

  The data rows displayed in the table body.

  Accepts table row components, with each row representing a single record or entry in the table.

## Table cell

The table cell component represents a single data cell within a table row. Use table cell as a child of table row to display individual data values, with each cell corresponding to a column in the table.

Table cell automatically inherits styling and alignment from its parent table structure and supports text content or other inline components.

* **declare class TableCell extends PolarisCustomElement implements TableCellProps { /** @private */ [elementInternals]: ElementInternals; constructor(); /** @private */ get [headerFormatSymbol](): HeaderFormat; /** @private */ set [headerFormatSymbol](format: HeaderFormat); }**

### Slots

The table cell component supports slots for additional content placement within the component. Learn more about [using slots](https://shopify.dev/docs/api/polaris/using-polaris-web-components#slots).

* **children**

  **HTMLElement**

  The data value displayed in this cell.

  Accepts text content or inline components representing the cell's data value.

## Table header

The table header component represents a single column header within a table header row. Use table header as a child of table header row to define column headings and optionally enable column sorting.

Table header provides semantic meaning for screen readers and can include sorting controls when configured. Each header corresponds to a column in the table body.

* **format**

  **HeaderFormat**

  **Default: 'base'**

  The format of the column that controls styling and alignment of cell content.

* **list​Slot**

  **ListSlotType**

  **Default: 'labeled'**

  The content designation for this column when the table displays in list variant on mobile devices.

### HeaderFormat

Represents the format options for table headers that control styling and alignment of column content. Available values: - \`base\`: Standard format for text columns - \`currency\`: Right-aligned format for monetary values - \`numeric\`: Right-aligned format for numeric values

```ts
'base' | 'numeric' | 'currency'
```

### ListSlotType

Represents the semantic type of content slots within list items. - \`primary\`: The main content or title of the list item. - \`secondary\`: Supporting or descriptive content below the primary content. - \`kicker\`: A small label or tag displayed above the primary content. - \`inline\`: Content displayed inline with the primary content. - \`labeled\`: Content with an associated label.

```ts
'primary' | 'secondary' | 'kicker' | 'inline' | 'labeled'
```

### Slots

The table header component supports slots for additional content placement within the component. Learn more about [using slots](https://shopify.dev/docs/api/polaris/using-polaris-web-components#slots).

* **children**

  **HTMLElement**

  The column heading text.

  This text labels the column in table variant and appears as a label for data in list variant.

## Table header row

The table header row component represents the header row of a table, containing column headings. Use table header row as the first child of table (before table body) to define the table structure and provide column labels.

Table header row must contain table header components for each column. These headers provide context for the data columns and can support sorting functionality.

* **declare class TableHeaderRow extends PolarisCustomElement implements TableHeaderRowProps { /** @private */ [elementInternals]: ElementInternals; constructor(); /** @private */ connectedCallback(): void; /** @private */ disconnectedCallback(): void; }**

### Slots

The table header row component supports slots for additional content placement within the component. Learn more about [using slots](https://shopify.dev/docs/api/polaris/using-polaris-web-components#slots).

* **children**

  **HTMLElement**

  The column headers displayed in the table header row.

  Accepts table header components, with each header defining a column and providing its label.

## Table row

The table row component represents a single row of data within a table body. Use table row as a child of table body to structure individual records or entries in the table.

Table row must contain table cell components, with each cell representing a data value for the corresponding column. The number of cells should match the number of headers in the table.

* **click​Delegate**

  **string**

  The ID of an interactive element, such as `s-link`, in the row that will be the target of the click when the row is clicked. This is the primary action for the row; it should not be used for secondary actions.

  This is a click-only affordance, and does not introduce any keyboard or screen reader affordances. Which is why the target element must be in the table; so that keyboard and screen reader users can interact with it normally.

### Slots

The table row component supports slots for additional content placement within the component. Learn more about [using slots](https://shopify.dev/docs/api/polaris/using-polaris-web-components#slots).

* **children**

  **HTMLElement**

  The data cells displayed in this table row.

  Accepts table cell components, with each cell containing a data value for the corresponding column.

### Add a data table

Create a data table with header columns and rows of structured content. This example shows a customer table with name, email, order count, and phone columns.

```html
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header>Name</s-table-header>
      <s-table-header>Email</s-table-header>
      <s-table-header format="numeric">Orders placed</s-table-header>
      <s-table-header>Phone</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>John Smith</s-table-cell>
        <s-table-cell>john@example.com</s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>123-456-7890</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Jane Johnson</s-table-cell>
        <s-table-cell>jane@example.com</s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>234-567-8901</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Brandon Williams</s-table-cell>
        <s-table-cell>brandon@example.com</s-table-cell>
        <s-table-cell>42</s-table-cell>
        <s-table-cell>345-678-9012</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

### Configure columns for mobile list layout

Use the `listSlot` property on table headers to control how columns are displayed when the table is converted to a list layout on mobile. This example shows a product table with badges and appropriate slot assignments for mobile readability.

### Add pagination for large datasets

Use the `paginate`, `hasPreviousPage`, and `hasNextPage` properties to display pagination controls for navigating large datasets. This example shows a paginated product table with next and previous page buttons.

### Show a loading state while fetching data

Set the `loading` property to display a loading overlay while fetching or refreshing table data. This example shows a product table with the loading state active.

### Add a search filter to a table

Use the `filters` slot to add search or filter controls above the table. This example shows a search field that lets merchants filter products by name.

### Display data in list format

Use the `variant` property to display data as stacked key-value pairs instead of as a grid. This is the default layout on mobile devices. This example shows a customer table rendered in list format.

## Best practices

* **Use for structured, comparable data:** The component works best when displaying multiple records with consistent attributes that merchants need to scan and compare. For simple lists without comparison needs, consider using a simpler component.
* **Design for mobile transformation:** The component automatically converts to a list layout on mobile devices. Ensure your column headers and data make sense when displayed as stacked key-value pairs rather than a grid.
* **Keep column counts reasonable:** Tables with many columns become difficult to scan and require horizontal scrolling. Aim for the minimum columns needed to support user tasks, and consider whether some data could be revealed on demand.
* **Provide clear column headers:** Column headers help merchants understand what each column represents. Write concise, descriptive headers that clearly identify the data type or attribute.
* **Consider data volume:** Large tables impact performance and user experience. Use pagination for datasets with more than 50-100 rows, or consider whether filtering or search would help merchants find specific records more efficiently.

## Limitations

* The component doesn't include built-in sorting or search functionality. You'll need to implement these features yourself if merchants need to organize data within the table. For filtering, use the `filters` slot to add filter UI such as a search field.
* The component doesn't support sticky headers that remain visible during scrolling. If merchants need to reference column headers while viewing data further down the table, consider using pagination to keep datasets smaller.

## 设计说明（旧站存档）

> 来源：[https://web.archive.org/web/20240201000000/https://polaris.shopify.com/components/data-table](https://web.archive.org/web/20240201000000/https://polaris.shopify.com/components/data-table)

Data tables are used to organize and display all information from a data set. While a data visualization represents part of data set, a data table lets merchants view details from the entire set. This helps merchants compare and analyze the data.

Use to present small amounts of data for merchants to view statically.

## Props

List of data types, which determines content alignment for each column. Data types are "text," which aligns left, or "numeric," which aligns right.

List of column headings.

List of numeric column totals, highlighted in the table’s header below column headings. Use empty strings as placeholders for columns with no total.

Custom totals row heading.

Placement of totals row within table.

Lists of data points which map to table body rows.

Hide column visibility and navigation buttons above the header when the table horizontally collapses to be scrollable.

Defaults to false .

Truncate content in first column instead of wrapping.

Defaults to true .

Vertical alignment of content in the cells.

Defaults to 'top' .

Content centered in the full width cell of the table footer row.

Table row has hover state. Defaults to true.

List of booleans, which maps to whether sorting is enabled or not for each column. Defaults to false for all columns.

The direction to sort the table rows on first click or keypress of a sortable column heading. Defaults to ascending.

Defaults to 'ascending' .

The index of the heading that the table rows are initially sorted by. Defaults to the first column.

Defaults to 0 .

Callback fired on click or keypress of a sortable column heading.

Increased density.

Add zebra striping to data rows.

Header becomes sticky and pins to top of table when scrolling.

Warning Add a fixed first column on horizontal scroll. Use fixedFirstColumns={n} instead.

Add fixed columns on horizontal scroll.

Specify a min width for the first column if neccessary.

## Best practices

Data tables should:

Show values across multiple categories and measures.

Allow for filtering and ordering when comparison is not a priority.

Help merchants visualize and scan many values from an entire data set.

Help merchants find other values in the data hierarchy through use of links.

Minimize clutter by only including values that supports the data’s purpose.

Include a summary row to surface the column totals.

Not include calculations within the summary row.

Wrap instead of truncate content. This is because if row titles start with the same word, they’ll all appear the same when truncated.

Not to be used for an actionable list of items that link to details pages. For this functionality, use the resource list component .

### Alignment

Column content types are built into the component props so the following alignment rules are followed:

Numerical = Right aligned

Textual data = Left aligned

Align headers with their related data

Don’t center align

## Content guidelines

Headers should:

Be informative and descriptive

Concise and scannable

Include units of measurement symbols so they aren’t repeated throughout the columns

Use sentence case (first word capitalized, rest lowercase)

#### Do

Temperature °C

#### Don’t

Temperature

Column content should:

Be concise and scannable

Not include units of measurement symbols (put those symbols in the headers)

Use sentence case (first word capitalized, rest lowercase)

### Decimals

Keep decimals consistent. For example, don’t use 3 decimals in one row and 2 in others.

## Related components

To create an actionable list of related items that link to details pages, such as a list of customers, use the resource list component .

## Accessibility

### Structure

Native HTML tables provide a large amount of structural information to screen reader users. Merchants who rely on screen readers can navigate tables and identify relationships between data cells ( `<td>` ) and headers ( `<th>` ) using keys specific to their screen reader.

Sortable tables use the `aria-sort` attribute to convey which columns are sortable (and in what direction). They also use `aria-label` on sorting buttons to convey what activating the button will do.

#### Do

Use tables for tabular data.

#### Don’t

Use tables for layout. For a table-like layout that doesn’t use table HTML elements, use the resource list component .

### Keyboard support

Sorting controls for the data table component are implemented with native HTML buttons.

Give buttons keyboard focus with the tab key (or shift + tab when tabbing backwards)

Activate buttons with the enter / return and space keys
