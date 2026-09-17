# WHM API 1 Output Columns

## Overview

You can limit the results of WHM API version 1 functions to display selected columns with the following variables:

**Notes:**

If you [sort](/whm/sort-output) the results of your API function call, you must use a displayed column as a sort key.

## Columns output

WHM API 1 columns use two basic variables:

### `api.columns.enable`

**Description:** Whether to enable columns.

**Type:**	*Boolean*

**Possible Values:**

* `1` - Enable columns.
* `0` - Disable columns.


### `api.columns.a`

**Description:** The return to display.

To display additional columns, add a variable and increment the letter (for example, `api.columns.b`, `api.columns.c`, `api.columns.d`).

**Type:**	*string*

**Possible Values:**

The name of one of the function's returns.

## Examples

The following example function calls execute the [`listaccts`](/openapi/whm/operation/listaccts/) function and limit the results to return only the user and domain columns:

### JSON API


```
/json-api/listaccts?api.version=1&api.columns.a=user&api.columns.b=domain&api.columns.enable=1
```

### Command Line


```
whmapi1 listaccts api.columns.enable=1 api.columns.a=user api.columns.b=domain
```