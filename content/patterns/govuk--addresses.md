---
title: "GOV.UK · Pattern · Addresses 地址"
source: https://design-system.service.gov.uk/patterns/addresses/
section: patterns
tag: "规范"
fetched: 2026-11-01
status: full
id: patterns-0
publisher: "GOV.UK Design System"
---

# GOV.UK · Pattern · Addresses 地址

> 来源：[https://design-system.service.gov.uk/patterns/addresses/](https://design-system.service.gov.uk/patterns/addresses/)

> 版权：Crown copyright，按 [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/) 发布；本站代码 MIT 许可。本篇为 GOV.UK Design System 同源全文，引用时请署名 GOV.UK Design System。

---

This guidance is for government teams that build online services. [To find information and services for the public, go to GOV.UK](https://www.gov.uk/).

Help users provide an address using one of the following:

- address lookup
- multiple text inputs
- textarea

## Address lookup

An address lookup helps users find a full address from partial information such as a postcode.

### When to use an address lookup

Use an address lookup to collect UK addresses where possible.

### When not to use an address lookup

Address lookups generally only work for UK addresses.

If you expect both UK and international addresses, give users the option to either search for a UK address or manually enter an international address.

### How an address lookup works

An address lookup lets users specify a UK address by entering their postcode and selecting their address from a list. There is also an option to enter a street name or number.

When using an address lookup, you should:

- make it clear that it will only work for UK addresses
- provide a manual option for people with international addresses or addresses that are missing or not properly listed in the address lookup
- let people enter their postcodes in upper or lower case and with or without spaces

### Identify and match addresses with UPRN identifiers

Use an address lookup that can identify addresses with Unique Property Reference Numbers (UPRNs). UPRNs are 12-digit unique identifiers for every addressable location across the UK.

Open standards for government mandate that [services that store property information must use UPRN identifiers](https://www.gov.uk/government/publications/open-standards-for-government/identifying-property-and-street-information).

Using UPRN identifiers helps users enter addresses accurately. This helps your service by making address data more consistent and easier to handle, which reduces errors and removes the need for manual address matching in the future.

See a post on [The power of UPRNs in linking data on the Geospatial Insights blog](https://gdsgeospatial.blog.gov.uk/2026/01/23/unlocking-better-outcomes-the-power-of-uprns-in-linking-data/).

Your address lookup should only use data from a single API. One option for this is the [Ordnance Survey Places API](https://www.ordnancesurvey.co.uk/products/os-places-api). Public sector organisations can get access to OS Places API as part of the [Public Sector Geospatial Agreement (PSGA)](https://www.ordnancesurvey.co.uk/customers/public-sector/public-sector-geospatial-agreement).

### Allow different postcode formats

It's easier for users if you accept and ignore unwanted characters. This is better than rejecting the input and telling the user they have not provided a valid postcode.

You should let users enter postcodes that contain:

- upper and lower case letters
- no spaces
- additional spaces at the beginning, middle or end
- punctuation like hyphens, brackets, dashes and full stops

## Multiple text inputs

**示例：multiple**

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}
{% from "govuk/components/fieldset/macro.njk" import govukFieldset %}

{% call govukFieldset({
  legend: {
    text: "What is your address?",
    classes: "govuk-fieldset__legend--l",
    isPageHeading: true
  }
}) %}

  {{ govukInput({
    label: {
      text: "Address line 1"
    },
    id: "address-line-1",
    name: "addressLine1",
    autocomplete: "address-line1"
  }) }}

  {{ govukInput({
    label: {
      text: "Address line 2 (optional)"
    },
    id: "address-line-2",
    name: "addressLine2",
    autocomplete: "address-line2"
  }) }}

  {{ govukInput({
    label: {
      text: "Town or city"
    },
    classes: "govuk-!-width-two-thirds",
    id: "address-town",
    name: "addressTown",
    autocomplete: "address-level2"
  }) }}

  {{ govukInput({
    label: {
      text: "County (optional)"
    },
    classes: "govuk-!-width-two-thirds",
    id: "address-county",
    name: "addressCounty"
  }) }}

  {{ govukInput({
    label: {
      text: "Postcode"
    },
    classes: "govuk-input--width-10",
    id: "address-postcode",
    name: "addressPostcode",
    autocomplete: "postal-code"
  }) }}

{% endcall %}
```

### When to use multiple text inputs

Only use multiple text inputs to offer users a manual input option when you both:

- know which countries the addresses will come from
- can find a format that supports them all – this can be difficult to know if you’re asking for addresses outside of the UK

Using multiple text inputs means:

- you can easily extract and use specific parts of an address
- you can give help for individual text inputs
- you can validate each part of the address separately
- users can complete the form using their browser’s autocomplete function

The disadvantages of using multiple text inputs are that:

- it’s hard to find a single format that works for all addresses
- there’s no guarantee that users will use the text inputs the way you think they will
- users cannot easily paste addresses from their clipboards

### How multiple text inputs work

If you use multiple text inputs, you should:

- only make individual text inputs mandatory if you really need the information
- make the text inputs the appropriate length for the content – it helps people understand the form, for example, make postcode text inputs shorter than street text inputs
- <a href="#allow-different-postcode-formats">let users enter postcodes in different formats</a>

Make sure there are enough text inputs to accommodate longer addresses if you know your users will need them. For example, allow users to include a company name or flat number.

Make it optional for users to enter their county (such as Berkshire or Cumbria). It’s not part of a correct UK address, according to Royal Mail, and it’s not used to deliver post.

Remove the county field if you’re sure your users will not need it, and your service will not use it.

#### Use the autocomplete attribute on multiple address fields

Use the `autocomplete` attribute on each individual address field to help users enter their address more quickly. This lets you specify each input’s purpose so browsers can autofill the information on a user’s behalf if they’ve entered it previously.

[Check which input purpose to use](https://www.w3.org/TR/WCAG22/#input-purposes) for each field.

In production, you’ll need to do this to meet [WCAG 2.2 success criterion 1.3.5 Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html). You will not normally need to use the `autocomplete` attribute in prototypes, as users will not generally be using their own devices.

#### Error messages

Error messages should be styled like this:

**示例：error-messages**

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}
{% from "govuk/components/fieldset/macro.njk" import govukFieldset %}

{% call govukFieldset({
  legend: {
    text: "What is your address?",
    classes: "govuk-fieldset__legend--l",
    isPageHeading: true
  }
}) %}

  {{ govukInput({
    label: {
      text: 'Address line 1'
    },
    id: "address-line-1",
    name: "addressLine1",
    errorMessage: {
    text: "Enter address line 1, typically the building and street"
    },
    autocomplete: "address-line1"
  }) }}

  {{ govukInput({
    label: {
      text: 'Address line 2 (optional)'
    },
    id: "address-line-2",
    name: "addressLine2",
    autocomplete: "address-line2"
  }) }}

  {{ govukInput({
    label: {
      text: "Town or city"
    },
    classes: "govuk-!-width-two-thirds",
    id: "address-town",
    name: "addressTown",
    errorMessage: {
    text: "Enter town or city"
    },
    autocomplete: "address-level2"
  }) }}

  {{ govukInput({
    label: {
      text: "County (optional)"
    },
    classes: "govuk-!-width-two-thirds",
    id: "address-county",
    name: "addressCounty"
  }) }}

  {{ govukInput({
    label: {
      text: "Postcode"
    },
    classes: "govuk-input--width-10",
    id: "address-postcode",
    name: "addressPostcode",
    errorMessage: {
    text: "Enter postcode"
    },
    autocomplete: "postal-code"
  }) }}

{% endcall %}
```

If a postcode entered is not a real postcode, use a message like this:

**示例：error-postcode**

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}

{{ govukInput({
  label: {
    text: "Postcode"
  },
  classes: "govuk-input--width-10",
  id: "address-postcode",
  name: "addressPostcode",
  value: "Not a postcode",
  errorMessage: {
    text: "Enter a full UK postcode"
  },
  autocomplete: "postal-code"
}) }}
```

Make sure errors follow the guidance in the [Error message component](https://design-system.service.gov.uk/components/error-message/) and have specific error messages for specific error states.

## Textarea

**示例：textarea**

```njk
{% from "govuk/components/textarea/macro.njk" import govukTextarea %}

{{ govukTextarea({
  name: "address",
  id: "address",
  autocomplete: "street-address",
  label: {
    text: "What is your address?"
  }
}) }}
```

### When to use a textarea

Use a textarea to offer users a manual option to enter an address, such as for international addresses or when users cannot find their address using an address lookup.

A textarea is useful when you expect a broad range of address formats and you do not need to format the address for print or use specific sub-parts of the address (for example, street or postcode).

### When not to use a textarea

You should not use a textarea if you need to separate an address into accurate sub-parts (for example, street or postcode).

### How a textarea works

Textareas let users enter an address in any format and make it easy to copy and paste addresses from their clipboard.

#### Use the autocomplete attribute on a textarea

Use the `autocomplete` attribute on the textarea component when you're asking for an address. This lets browsers autofill the information on a user's behalf if they’ve entered it previously.

To do this, set the `autocomplete` attribute to `street-address` as shown in the HTML and Nunjucks tabs in the textarea example above.

If you are working in production you’ll need to do this to meet [WCAG 2.2 success criterion 1.3.5 Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html).

You will not normally need to use the `autocomplete` attribute in prototypes, as users will not generally be using their own devices.
