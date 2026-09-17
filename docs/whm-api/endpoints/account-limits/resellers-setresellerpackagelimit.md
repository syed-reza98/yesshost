# Update reseller's hosting plan limits

This function limits the packages that a reseller assigns to cPanel accounts.

Endpoint: GET /setresellerpackagelimit
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `user` (string, required)
    The reseller's username.
    Example: "username"

  - `allowed` (integer)
    Whether the reseller can access the package hosting plan.
* 1 — Enable access.
* 0 — Disable access

Note:

If you use this parameter, you must also include the package parameter.
    Enum: 0, 1

  - `no_limit` (integer)
    Whether to grant the reseller unlimited package use.
* 1 — Grant the reseller unlimited package use.
* 0 — Use package limits.
    Enum: 0, 1

  - `number` (integer)
    The maximum number of accounts to which the reseller can assign the package hosting plan.

Note:

* If you use this parameter, you must also include the package parameter.
* If you set a value for this parameter and set the allowed parameter to 0, the reseller cannot use the hosting plan.
    Example: 5

  - `package` (string)
    A hosting plan (package), to modify the reseller's access settings for it.

Note:

 Use this parameter with the number or allowed parameters.
    Example: "package1"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "setresellerpackagelimit"

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


