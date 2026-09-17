# Update cPanel account service proxying

This function lets you configure a cPanel account's
service proxying.

Note:

* If the cPanel account is a distributed account,
and you call this function on the account’s parent node,
the system will propagate the new service proxying to the child node.
* If the Web Server role is active
on the server, this function rebuilds the user's web virtual hosts (vhosts) and restarts
the web server.
* If the system cannot rebuild the user's vhosts, the API call will still succeed. However,
the function returns a failure warning in the metadata.
* To remove an account's service proxying, use the WHM API 1 unset_all_service_proxy_backends
function.

Endpoint: GET /set_service_proxy_backends
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `username` (string, required)
    The cPanel account's username.
    Example: "example"

  - `general` (any)
    The hostname or IP address to assign as the server that handles
the account's service proxy requests.

The proxy backend must be routable. As a security measure, the server
rejects non-routable IP literals (loopback, RFC 1918, CGNAT, and
cloud-metadata addresses), and obfuscated encodings of those addresses.
To use a private-network IPv4 or IPv6 (ULA) backend, this WHM API 1
function permits them, but the account's proxy will not function unless
the server can route to that backend.

This parameter defaults to the existing service proxy configuration,
if one exists.

  - `service_group` (string)
    The name of a service group for which to assign a proxy backend. The
corresponding service_group_backend value will be the service group's
new proxy backend.

* Mail — The Mail service group.

This parameter defaults to the existing setting, if one exists.

Note:

 * When you call this parameter, you must include a corresponding
 service_group_backend value.
 * To add multiple service_group values, increment the parameter name. For example,
 service_group-1, service_group-2, and service_group-3.
    Enum: "Mail"

  - `service_group_backend` (any)
    The hostname or IP address of the server to assign as the corresponding
service_group value's proxy backend server.

This parameter defaults to the existing setting, if one exists.

Note:

 * When you call this parameter, you must include a corresponding service_group
 value.
 * To add multiple service_group_backend values, increment the parameter name.
 For example, service_group_backend-1, service_group_backend-2,
 and service_group_backend-3.

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "set_service_proxy_backends"

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


