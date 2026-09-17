# Enable cPanel account's reseller status

This function grants reseller status to an account.

Note:

This function grants reseller status to an existing account. You cannot create a new account with this function.

Endpoint: GET /setupreseller
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `user` (string, required)
    The account's username.
    Example: "username"

  - `makeowner` (integer)
    Whether to set the account to own itself.
* 1 — Make the account own itself.
* 0 — Keep the account's current owner.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "setupreseller"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


