# WHM API 1 Sort Output

## Overview

You can use additional variables to sort WHM API 1 output.

**Notes:**

You can test WHM API 1 functions in WHM's [*API Shell*](https://go.cpanel.net/whmdocsAPIShell) interface (*Home >> Development >> API Shell*). Click *Show Sort/Filter/Paginate Options* to display the additional text boxes.

## Sort output

WHM API 1 sorting uses four basic variables:

### `api.sort.enable`

**Description:** Whether to enable sorting.

**Type:** *Boolean*

**Possible values:**

* `1` - Enable sorting.
* `0` - Disable sorting.


### `api.sort.a.field`

**Description:** The return to sort by.

**Type:** *string*

**Possible values:**

The name of one of the function's returns.

### `api.sort.a.method`

**Description:** The type of sorting to use. This variable defaults to lexicographic.

**Warning:**

You **must** set this parameter whenever you sort numeric values, or the function will fail.

**Type:** *string*

**Possible values:**

* `ipv4` - Sort output by the numeric value of each octet in an IPv4 address.
* `numeric` - Sort output in numeric order, with `0` as the lowest number.
* `numeric_zero_as_max` - Sort output in numeric order, with `0` as the highest number.
* `lexicographic` - Sort output in alphabetical order.


### `api.sort.a.reverse`

**Description:** Whether to sort data in reverse order. This parameter defaults to 0.

**Type:** *Boolean*

**Possible values:**

* `1` - Sort in reverse order.
* `0` - Do not sort in reverse order.


## Examples

The following example function calls execute the [`listaccts`](/openapi/whm/operation/listaccts/) function and sort the output by the user parameter:

### JSON API


```
/json-api/listaccts?api.version=1&api.sort.a.field=user&api.sort.enable=1
```

### Command Line


```
whmapi1 listsuspended api.sort.enable=1 api.sort.a.field=owner
```

## Use multiple sort parameters

To sort output by multiple parameters in a single WHM API 1 call, increment the letter in each filter variable.

For example, use the following variables to pass two sets of sort information:

* Pass the first set of sort information to the `api.sort.a.field`, `api.sort.a.method`, and `api.sort.a.reverse` variables.
* Pass the second set of sort information to the `api.sort.b.field`, `api.sort.b.method`, and `api.sort.b.reverse` variables.


**Notes:**

* Do **not** include more than one `api.sort.enable` Boolean variable.
* The order of sort parameters determines the order in which WHM API 1 uses them to sort output. For example, the system applies the sort criteria from the `api.sort.a.field` parameter before it applies the criteria from the `api.sort.b.field` parameter.


### Examples

The following example function calls execute the [`listsuspended`](/openapi/whm/operation/listsuspended/) function and sort the results by the owner parameter's value, and then by the user parameter's value:

#### JSON API


```
/json-api/listsuspended?api.version=1&api.sort.a.field=owner&api.sort.b.field=user&api.sort.enable=1
```

#### Command Line


```
whmapi1 listsuspended api.sort.enable=1 api.sort.a.field=owner api.sort.b.field=user
```