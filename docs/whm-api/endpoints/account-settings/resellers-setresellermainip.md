# Update reseller's main IP address

This function assigns a main IP address to a reseller's account.

Note:

  To assign additional IP addresses to a reseller's account, call the WHM API 1 setresellerips function.

Endpoint: GET /setresellermainip
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `ip` (string, required)
    The IP address to assign to the reseller's account as the main shared IP address.
    Example: "192.168.0.20"

  - `user` (string, required)
    The reseller's username.
    Example: "username"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "setresellermainip"

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


