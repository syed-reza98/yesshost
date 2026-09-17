# Create a one-time authentication secret and code

This function generates a random secret and a one-time password authentication (OTP auth) URL for the user. Use the secret that this function returns and a valid verification token with WHM API 1's twofactorauth_set_tfa_config function to configure Two-Factor Authentication (2FA) on an account.

Endpoint: GET /twofactorauth_generate_tfa_config
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.otpauth_str` (string)
    A one-time authentication URL to encode as the QR code.
    Example: "otpauth://totp/Example:root?secret=CAOXW75HKYJJ6E5Y&issuer=Example"

  - `data.secret` (string)
    A generated security code for use with 2FA.
    Example: "WJ73QJSKZBXCFIPZ"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "twofactorauth_generate_tfa_config"

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


