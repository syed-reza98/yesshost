# Enable or disable Digest Authentication

This function enables or disables Digest Authentication for an account. Windows Vista®,
Windows® 7, and Windows® 8 requires that you enable Digest Authentication support in order
to access your Web Disk over a clear text,
unencrypted connection.

Note:

If the server has an SSL certificate that a recognized certificate authority signed and you
can make an SSL connection over port 2078, you do not need to enable Digest Authentication.

Endpoint: GET /set_digest_auth
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `enabledigest` (integer, required)
    Whether to enable Digest Authentication for the account.

* 1 — Enable.
* 0 — Disable.
    Enum: 0, 1

  - `password` (string, required)
    The account's password.
    Example: "123456luggage"

  - `user` (string, required)
    The account's username.
    Example: "username"

  - `digestauth` (integer)
    Whether to enable Digest Authentication for the account. This is an alias for the enabledigest parameter.

* 1 — Enable.
* 0 — Disable.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "set_digest_auth"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result
field is 0. This field may display a success message when
a function succeeds.
    Example: "Digest Authentication enabled."

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


