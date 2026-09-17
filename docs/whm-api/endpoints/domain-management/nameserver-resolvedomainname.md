# Return domain's IP address

This function resolves a domain's IPv4 address.

Endpoint: GET /resolvedomainname
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    The domain.
    Example: "example.com"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.ip` (string)
    The domain's IPv4 address.
    Example: "192.168.0.20"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "resolvedomainname"

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


