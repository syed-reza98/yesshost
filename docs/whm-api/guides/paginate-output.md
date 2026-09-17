# WHM API 1 Paginate Output

## Overview

You can use additional variables to paginate WHM API 1 output.

**Notes:**

* You can test WHM API 1 functions in WHM's [*API Shell*](https://go.cpanel.net/whmdocsAPIShell) interface (*Home >> Development >> API Shell*). Click *Show Sort/Filter/Paginate Options* to display the additional text boxes.
* We **strongly** recommend that you use pagination for Mail Delivery Report (MDR) functions.


## Paginate output

WHM API 1 pagination uses four basic variables:

### `api.chunk.enable`

**Description:** Whether to enable pagination.

**Type:** *Boolean*

**Possible values:**

* `1` - Enable pagination.
* `0` - Disable pagination.


### `api.chunk.size`

**Description:** The number of records to display in a single page.

**Type:** *integer*

**Possible values:**

An integer value that represents a number of records.

For example, to display ten records on a page, pass in an `api.chunk.size` value of `10`.

### `api.chunk.start`

**Description:** The first record to display.

**Type:** *integer*

**Possible values:**

An integer value that represents a number of records.

For example, to begin the page's list of records with the fifth record, pass in an `api.chunk.start` value of `5`.

**Note:**

This variable is 1-indexed rather than 0-indexed. For example, to start with the first record, specify a value of `1` rather than a value of `0`.

## Examples

The following example function calls execute the [`listaccts`](/openapi/whm/operation/listaccts/) function, begin output at the third record, and display five records in total on the page:

### JSON API


```
/json-api/listaccts?api.version=1&api.chunk.size=5&api.chunk.start=3&api.chunk.enable=1
```

### Command Line


```
whmapi1 listaccts api.chunk.enable=1 api.chunk.size=5 api.chunk.start=3
```