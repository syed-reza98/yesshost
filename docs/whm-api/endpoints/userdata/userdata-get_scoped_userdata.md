# Get scoped userdata

This function retrieves all userdata key/value pairs within the specified scope.

Endpoint: GET /get_scoped_userdata
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `scope` (string, required)
    The scope name whose userdata you wish to retrieve.
    Example: "example_scope"

## Response 200 fields (application/json):

  - `data` (object)
    A mapping of userdata keys to their string values for the given scope.
    Example: {"theme":"dark","items_per_page":"50"}

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_scoped_userdata"

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


