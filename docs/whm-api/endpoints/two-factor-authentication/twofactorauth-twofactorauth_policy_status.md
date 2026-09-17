# Return 2FA policy status

This function displays the Two-Factor Authentication (2FA) policy status on the server.

Endpoint: GET /twofactorauth_policy_status
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.is_enabled` (integer)
    Whether the 2FA security policy is enabled.
- 1 — Enabled.
- 0 — Not enabled.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "twofactorauth_policy_status"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


