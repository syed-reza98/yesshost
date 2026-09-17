# Unsuspend reseller

This function unsuspends a reseller account.

Endpoint: GET /unsuspendreseller
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `user` (string, required)
    The reseller's username.
    Example: "username"

  - `reseller-only` (integer)
    Whether to unsuspend only the reseller account.
* 1 — The function only unsuspends the reseller account. The function will not unsuspend the accounts that the reseller account owns.
* 0 — The function unsuspends the reseller account and the accounts that it owns.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "unsuspendreseller"

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


