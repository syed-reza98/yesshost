# Return reseller's available IP addresses

This function lists a reseller's available IP addresses.

Endpoint: GET /getresellerips
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `user` (string)
    A reseller's username, to query only that reseller.

Note:

If you do not specify a value, the function lists available IP addresses for the root
user.
    Example: "username"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.all` (integer)
    Whether all of the reseller's IP addresses are available.
* 1 — All of the reseller's IP addresses are available.
* 0 — Some or all IP addresses are unavailable.
    Enum: 0, 1

  - `data.ip` (array)
    The reseller's available IP addresses.
    Example: ["192.168.0.20"]

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "getresellerips"

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


