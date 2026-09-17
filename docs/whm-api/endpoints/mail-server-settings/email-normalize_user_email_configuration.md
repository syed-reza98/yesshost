# Repair misconfigured email settings

This function fixes a user's misconfigured email settings. This includes any misconfigured email file and directory ownership and permissions.

Endpoint: GET /normalize_user_email_configuration
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `username` (string, required)
    The cPanel account's username.
    Example: "username"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "normalize_user_email_configuration"

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


