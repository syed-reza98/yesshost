# Remove IP address

This function removes an IP address from the server.

Endpoint: GET /delip
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `ip` (string, required)
    The IPv4 address.
    Example: "10.1.1.1"

  - `ethernetdev` (string,null)
    The network alias to which the IPv4 address is bound.
    Example: "eth0"

  - `skipifshutdown` (integer)
    Whether to remove the IP address if the ethernet interface is down.
* 1 — Do not remove the IP address.
* 0 — Remove the IP address.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "delip"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "eth0:cp2 is now down, 10.1.1.1 has been removed"

  - `metadata.result` (integer)
    * 1 — Success
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


