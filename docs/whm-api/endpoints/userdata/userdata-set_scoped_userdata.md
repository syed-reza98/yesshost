# Set scoped userdata

This function sets (creates or updates) a userdata key/value pair within the specified scope and returns the full updated mapping.

Endpoint: GET /set_scoped_userdata
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `scope` (string, required)
    The scope name to modify.
    Example: "example_scope"

  - `json` (string)
    A json string to save to the specified scope.

Note: The "json" argument cannot be used with the "key" or "value" arguments.
    Example: "{\"theme\":\"dark\"}"

  - `key` (string)
    The userdata key to set.

Note: The "json" argument cannot be used with the "key" or "value" arguments.
    Example: "theme"

  - `value` (string)
    The value to assign to the key.

Note: The "json" argument cannot be used with the "key" or "value" arguments.
    Example: "dark"

## Response 200 fields (application/json):

  - `data` (object)
    The updated mapping of all userdata in the scope.
    Example: {"theme":"dark","items_per_page":"50"}

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "set_scoped_userdata"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result
field is 0. This field may display a success message when
a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


