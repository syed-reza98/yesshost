# Remove IP address from Greylisting trusted hosts

This function deletes an IP address from the Greylisting _Trusted Hosts_ list.

Endpoint: GET /delete_cpgreylist_trusted_host
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `ip` (string, required)
    The record's IP address, or a range of IP addresses.

Note:

To add multiple IP addresses, increment the parameter name (for example, ip-1, ip-2, ip-3).
    Example: "192.168.0.1"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.ips_failed` (object)
    An object that contains the IP addresses that the function failed to remove from the _Trusted Hosts_ list.
    Example: {"5.5":"Invalid IP address or range: “5.5”"}

  - `data.ips_removed` (array)
    An array of IP addresses that the function removed from the _Trusted Hosts_ list.
    Example: ["192.168.0.1","2001:db8::1"]

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "delete_cpgreylist_trusted_host"

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


