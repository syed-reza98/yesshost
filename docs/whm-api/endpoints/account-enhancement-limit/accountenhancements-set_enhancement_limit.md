# Update account enhancement limit

This function sets account enhancement limits for a reseller account.

Endpoint: GET /set_enhancement_limit
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `account` (string, required)
    The reseller's username.
    Example: "username"

  - `id` (string, required)
    The account enhancement's identifier.

Note:
* You must use an account enhancement ID that a 3rd-party plugin defines.
* To return a list of valid account enhancement IDs, run the WHM API 1 list_account_enhancements function.
    Example: "sample-enhancement-id"

  - `limited` (integer, required)
    Whether the Account Enhancement assignment limit is unlimited.
* 0 - The assignment is unlimited.
* 1 - The assignment is limited.
    Enum: 1, 0

  - `limit` (integer)
    The account enhancement limit amount. This parameter is only
required if the limited parameter is 1.
    Example: 15

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "set_enhancement_limit"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result
field is 0. This field may display a success message when
a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


