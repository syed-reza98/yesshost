# Return cPanel accounts total number

This function returns the number of cPanel accounts on the server.

Endpoint: GET /get_current_users_count
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.users` (integer)
    The number of cPanel accounts.
    Example: 100

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_current_users_count"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    - 1 - Success
- 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


