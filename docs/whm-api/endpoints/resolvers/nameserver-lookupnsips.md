# Return nameserver's IPv4 and IPv6 addresses

This function retrieves a nameserver's IPv4 and IPv6 addresses.

Endpoint: GET /lookupnsips
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `host` (string, required)
    The nameserver's hostname.
    Example: "ns1.example.com"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.ipv4` (string)
    The nameserver's IPv4 address.

Note:

 The function returns this value only if a nameserver with an IPv4 address exists on the server.
    Example: "192.0.2.0"

  - `data.ipv6` (string)
    The nameserver's IPv6 address.

Note:

 The function returns this value only if a nameserver with an IPv6 address exists on the server.
    Example: "2001:0db8:0:0:1:0:0:1"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "lookupnsips"

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


