# Register NAT IP address to public IP address

This function pairs a local IP address with a public IP address on NAT-configured servers.

Endpoint: GET /nat_set_public_ip
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `local_ip` (string, required)
    The local IPv4 address.
    Example: "192.168.4.10"

  - `public_ip` (string, required)
    The public IPv4 address.
    Example: "10.5.3.33"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "nat_set_public_ip"

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


