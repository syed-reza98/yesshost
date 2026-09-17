# Validate username availability on target server

This function validates a system user for use on the target server.

Note:

  For more information about how this function works with other functions in the transfer and restore process, read our Guide to Transfer and Restore API Functions documentation.

Endpoint: GET /validate_system_user
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `user` (string, required)
    The system username.
    Example: "username"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.exists` (integer)
    Whether the username exists on the server.
* 1 — Exists.
* 0 — Does not exist.
    Enum: 0, 1

  - `data.reserved` (integer)
    Whether the username is reserved.
* 1 — Reserved.
* 0 — Not reserved.
    Enum: 0, 1

  - `data.valid_for_new` (integer)
    Whether the system can use the username to create a new account.
* 1 — Usable.
* 0 — Unusable.
    Enum: 0, 1

  - `data.valid_for_transfer` (integer)
    Whether the username is valid for a transferred account, but not a new account.
* 1 — Valid for transfer, but not a new account.
* 0 — Invalid.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "validate_system_user"

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


