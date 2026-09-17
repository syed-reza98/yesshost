# Remove an Account Enhancement

This function removes an account enhancement.

Endpoint: GET /delete_account_enhancement
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `name` (string, required)
    The name of the account enhancement.
    Example: "enhancement 5000"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The name of the method called.
    Example: "delete_account_enhancement"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result
field is 0. This field may display a success message when
a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


