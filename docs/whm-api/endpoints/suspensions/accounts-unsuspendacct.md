# Unsuspend cPanel account

This function unsuspends an account.

Note:

Only the root account and root-enabled resellers can unsuspend a locked account.

Endpoint: GET /unsuspendacct
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `user` (string, required)
    The account to unsuspend.
    Example: "username"

  - `retain-service-proxies` (integer)
    Whether to retain any service proxies on an account.
* 1 — Retain service proxies.
* 0 — Do not retain service proxies.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "unsuspendacct"

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


