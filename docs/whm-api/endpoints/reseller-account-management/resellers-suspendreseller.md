# Suspend reseller

This function suspends a reseller account.

Endpoint: GET /suspendreseller
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `user` (string, required)
    The reseller's username.
    Example: "username"

  - `disallow` (integer)
    Whether to allow only the root user to unsuspend the account.
* 1 — Only the root user can unsuspend the account.
* 0 — The root user or the account's owner can unsuspend the account.
    Enum: 0, 1

  - `reason` (string)
    The reason for the reseller's suspension.

Note:

 We strongly recommend that you always include a reason for suspension.
    Example: "Nonpayment"

  - `reseller-only` (integer)
    Whether to suspend only the reseller account.
* 1 — The function only suspends the reseller account. The function will not suspend the accounts that the reseller account owns.
* 0 — The function suspends the reseller account and the accounts that it owns.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "suspendreseller"

  - `metadata.output` (object)

  - `metadata.output.raw` (string)
    The raw output from the function.

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


