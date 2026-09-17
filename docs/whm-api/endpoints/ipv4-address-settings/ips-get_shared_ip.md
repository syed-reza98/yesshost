# Return shared IP address

This function retrieves the IP address that an account shares with the accounts that it owns.

Endpoint: GET /get_shared_ip
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `user` (string)
    The WHM user's username.

Note:

This parameter defaults to the currently-authenticated user.
    Example: "example"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.ip` (string)
    The IP address that the WHM user shares.

Note:

 If the user does not have a shared IP address, the function returns the tilde ( ~ ) character.
    Example: "192.168.0.1"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_shared_ip"

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


