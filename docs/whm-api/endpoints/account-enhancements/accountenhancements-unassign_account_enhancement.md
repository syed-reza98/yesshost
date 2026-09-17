# Unassign Account Enhancement

This function removes an Account Enhancement from a cPanel account.

Endpoint: GET /unassign_account_enhancement
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `account` (string, required)
    The username of the account.
    Example: "username"

  - `name` (string, required)
    The name of the account enhancement.
    Example: "enhancement 5000"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "unassign_account_enhancement"

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


