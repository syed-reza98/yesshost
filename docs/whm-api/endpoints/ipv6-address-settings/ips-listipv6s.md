# Return server's IPv6 addresses

This function lists the IPv6 addresses bound to a server’s network interfaces.

Endpoint: GET /listipv6s
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.ip` (array)
    An array of objects that contain IPv6 address information.

  - `data.ip.ip` (string)
    The IPv6 address.
    Example: "2001:0db8:0:0:1:0:0:1"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "listipv6s"

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


