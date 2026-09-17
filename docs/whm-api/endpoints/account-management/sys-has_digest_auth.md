# Validate cPanel account Digest Authentication

This function checks whether Digest Authentication is enabled for
a cPanel user. Windows® Vista, Windows® 7, and Windows® 8 require Digest Authentication
support in order to access Web Disk over an unencrypted connection.

Endpoint: GET /has_digest_auth
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `user` (string, required)
    The cPanel account username.
    Example: "username"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.digestauth` (integer)
    Whether Digest Authentication support is enabled.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "has_digest_auth"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result
field is 0. This field may display a success message when
a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


