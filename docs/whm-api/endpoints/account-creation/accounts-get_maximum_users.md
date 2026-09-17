# Return maximum accounts for license

This function returns the maximum number of cPanel accounts that the server's license allows.

Endpoint: GET /get_maximum_users
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.users` (integer)
    The maximum number of cPanel accounts that the server's license allows.
* 0 - Unlimited
    Example: 100

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_maximum_users"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


