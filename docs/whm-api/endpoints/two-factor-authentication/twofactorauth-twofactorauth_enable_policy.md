# Enable 2FA

This function enables the Two-Factor Authentication (2FA) security policy on the server.

Endpoint: GET /twofactorauth_enable_policy
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "twofactorauth_enable_policy"

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


