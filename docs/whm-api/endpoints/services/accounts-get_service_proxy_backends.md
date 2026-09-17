# Return a cPanel account’s service proxying setup

This function reports a cPanel account's
service proxying
configuration.

Endpoint: GET /get_service_proxy_backends
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `username` (string, required)
    The cPanel account's username.
    Example: "example"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (array)
    The account’s service proxying backends.

  - `data.payload.backend` (string)
    The name of the server to which the system will proxy requests for this service group.
    Example: "example.com"

  - `data.payload.service_group` (string,null)
    The name of the proxying service group, if applicable.
* null — The account’s general service proxying backend.
    Example: "Mail"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_service_proxy_backends"

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


