# WHM API 1 Filter Output

## Overview

You can use additional variables to filter WHM API 1 output.

**Notes:**

You can test WHM API 1 functions in WHM's [*API Shell*](https://go.cpanel.net/whmdocsAPIShell) interface (*Home >> Development >> API Shell*). Click *Show Sort/Filter/Paginate Options* to display the additional text boxes.

## Filter output

WHM API 1 filters use four basic variables:

### `api.filter.enable`

**Description:** Whether to enable filtering.

**Type:** *Boolean*

**Possible values:**

* `1` - Enable filtering.
* `0` - Disable filtering.


### `api.filter.a.field`

**Description:** The return to match against.

**Type:** *string*

**Possible values:**

The name of one of the function's returns.  You can use the asterisk character (`*`) to filter across all of a function's returns.

### `api.filter.a.arg0`

**Description:** The return value to match.

**Type:** *string*

**Possible values:**

An integer or string value.

### `api.filter.a.type`

**Description:** The match type. This variable defaults to `contains`.

* If the `api.filter.a.arg0` value is a string, use a string operator.
* If the `api.filter.a.arg0` value is an integer, use a numeric operator.


**Type:** *string*

**Possible Values:**

Numeric operators:

* `==` - The numeric value is equal to the match value.
* `lt` - The value is less than the match value. This match type **cannot** handle unlimited values.
* `lt_equal` - The value is less than or equal to the match value. This match type **cannot** handle unlimited values.
* `lt_handle_unlimited` - The value is less than the match value. This match type **can** handle unlimited values.
* `gt` - The value is greater than the match value. This match type **cannot** handle unlimited values.
* `gt_equal` - The value is greater than or equal to the match vale. This match type **cannot** handle unlimited values.
* `gt_handle_unlimited` - The value is greater than the match value. This match type **can** handle unlimited values.


String operators:

* `begins` - The value begins with the match value's string.
* `contains` - The value contains the match value's string.
* `eq` - The string value is equal to the match value.


## Examples

The following example function calls execute the [`listaccts`](/openapi/whm/operation/listaccts/) function and filter the results to return only accounts with a maximum of 400 subdomains:

**JSON API**


```
json-api/listaccts?api.version=1&api.filter.a.field=maxsub&api.filter.a.arg0=400&api.filter.a.type=%3D%3D&api.filter.enable=1
```

**Command Line**


```
whmapi1 listaccts api.filter.enable=1 api.filter.a.field=maxsub api.filter.a.arg0=400 api.filter.a.type=%3D%3D
```

### Use multiple filters

To use multiple filters on a single WHM API 1 call, increment the letter in each filter variable.

For example, use the following variables to pass two sets of filter information:

* Pass the first set of filter information to the `api.filter.a.field`, `api.filter.a.arg0`, and `api.filter.a.type` variables.
* Pass the second set of filter information to the `api.filter.b.field`, `api.filter.b.arg0`, and `api.filter.b.type`  variables


**Note:**

Do not include more than one `api.filter.enable` Boolean variable.

## More Examples

The following example function calls execute the [`listaccts`](/openapi/whm/operation/listaccts/) function and filter the results to return only accounts with a maximum of 400 subdomains that use the `paper_lantern` theme:

**JSON API**


```
json-api/listaccts?api.version=1&api.filter.a.field=maxsub&api.filter.a.arg0=400&api.filter.a.type=%3D%3D&api.filter.b.field=theme&api.filter.b.arg0=paper_lantern&api.filter.b.type=eq&api.filter.enable=1
```

**Command Line**


```
whmapi1 listaccts api.filter.enable=1 api.filter.a.field=maxsub api.filter.a.arg0=400 api.filter.a.type=%3D%3D api.filter.b.field=theme api.filter.b.arg=paper_lantern api.filter.b.type=eq
```