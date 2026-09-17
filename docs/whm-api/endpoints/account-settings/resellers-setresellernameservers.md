# Update reseller's assigned nameservers

This function assigns nameservers to a reseller's account.

Endpoint: GET /setresellernameservers
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `user` (string, required)
    The reseller's username.
    Example: "username"

  - `nameservers` (string)
    A comma-separated list of the nameserver domains to assign to the reseller's account.

Note:

If you do not use this parameter, the function resets the reseller's nameservers
to use the server default.

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "setresellernameservers"

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


