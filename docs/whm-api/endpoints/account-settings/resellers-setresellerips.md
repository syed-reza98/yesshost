# Add IP addresses to reseller

This function adds IP addresses to a reseller's account.

Note:

To assign a main IP address to a reseller's account, call the WHM API 1 setresellermainip function.

For more information, read our Manage Reseller's IP Delegation documentation.

Endpoint: GET /setresellerips
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `user` (string, required)
    The reseller's username.
    Example: "username"

  - `delegate` (integer)
    Whether to allocate the reseller a dedicated IP address.

* 1 — Restrict the reseller's account to its dedicated IP address.
* 0 — Allow the user to dedicate any available IP address to an owned account.
    Enum: 1

  - `ips` (string)
    The IP addresses to allocate to the reseller's account.

Note:

* If you do not use this parameter, the function clears the reseller's IP address list.
* Use a comma-separated list to allocate multiple IP addresses.
    Example: "192.168.0.20"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.all` (integer)
    Whether the function allocated all available IP addresses to the reseller. This return only appears if you set the delegate parameter to 0.

Note:

1 is the only possible value.
    Enum: 1

  - `data.ip` (array)
    An array of the reseller's allocated IP addresses.
    Example: ["192.168.0.20"]

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "setresellerips"

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


