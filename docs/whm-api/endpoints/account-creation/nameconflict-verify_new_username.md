# Validate new cPanel account username

This function checks for username conflicts during account creation.

Endpoint: GET /verify_new_username
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `user` (string, required)
    The account that you wish to create.
    Example: "username"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "verify_new_username"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result
field is 0. This field may display a success message when
a function succeeds.

Note:

If the function detects a username conflict, it returns an error
message in this field.
    Example: "OK"

  - `metadata.result` (integer)
    - 1 — Success.
- 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


