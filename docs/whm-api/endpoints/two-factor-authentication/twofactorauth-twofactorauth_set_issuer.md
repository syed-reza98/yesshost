# Update 2FA issuer value

This function sets the issuer value that the system uses to generate the secret and otpurls values for Two-Factor Authentication on your accounts.

Endpoint: GET /twofactorauth_set_issuer
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `issuer` (string, required)
    The issuer's name.
    Example: "hostname.example.com"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "twofactorauth_set_issuer"

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


