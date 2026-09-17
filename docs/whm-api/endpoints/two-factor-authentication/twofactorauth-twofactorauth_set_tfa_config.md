# Update 2FA authentication secret and code

This function sets the secret and the authentication code for Two-Factor Authentication (2FA) for the root or reseller account. You can generate a random secret and an OTP authentication URL with WHM API 1's twofactorauth_generate_tfa_configorauth_generate_tfa_config function.

Endpoint: GET /twofactorauth_set_tfa_config
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `secret` (string, required)
    A generated code for use with 2FA in Base32 format.
    Example: "WJ73QJSKZBXCFIPZ"

  - `tfa_token` (string, required)
    The time-based one-time password (TOTP) that the authentication app provides.
    Example: "227174"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.success` (integer)
    Whether the account successfully enabled 2FA.
* 1 — Enabled.
* 0 — Not enabled.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "twofactorauth_set_tfa_config"

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


