# Update domain or cPanel account IP address

This function changes a site's or account's IP address.

Endpoint: GET /setsiteip
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `ip` (string, required)
    The site's or user's IPv4 address.
    Example: "192.168.4.10"

  - `domain` (string)
    The domain's name.

Note:

You must use either the user parameter or domain parameter.
    Example: "example.com"

  - `user` (string)
    The user's username.

Note:

You must use either the user parameter or domain parameter.
    Example: "username"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "setsiteip"

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


