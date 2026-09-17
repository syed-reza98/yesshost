# Remove cPanel account service proxying

This function removes a cPanel account's
service proxying.

Note:

* If the cPanel account is a distributed account,
this function will also unset all service proxying for the cPanel account on the
child node.
* If the Web Server role is active on
the server, this function rebuilds the cPanel user's web virtual hosts (vhosts) and restarts
the web server.
* If the system cannot rebuild the cPanel user's vhosts, the API call will still succeed.
However, the function returns a failure warning in the metadata.
* To set a service proxying for a cPanel account, use the WHM API 1
set_service_proxy_backends function.

Endpoint: GET /unset_all_service_proxy_backends
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
    Example: "unset_all_service_proxy_backends"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


