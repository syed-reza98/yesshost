# Validate public IP address for NAT

This function validates a public IP address on a NAT-configured server.

Endpoint: GET /nat_checkip
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `ip` (string, required)
    The local IPv4 address.
    Example: "192.168.4.10"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.checked_ip` (string)
    The local IPv4 address.
    Example: "192.168.4.10"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "nat_checkip"

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


