# Update remote DNS server's nameserver software

This function sets the nameserver software that the remote servers in a DNS cluster run. The system queues the nameserver software that you select until the HTTP request finishes. Then, it sets the remote servers' nameserver software.

Endpoint: GET /set_nameserver
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `nameserver` (string, required)
    The nameserver software.
* BIND
* PowerDNS
* Disabled
    Enum: "BIND", "PowerDNS", "Disabled"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.message` (string)
    A confirmation message from the system.
    Example: "Queued task to set nameserver to bind successfully."

  - `data.nameserver` (string)
    The nameserver software.
* bind
* powerdns
* disabled
    Enum: "bind", "powerdns", "disabled"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "set_nameserver"

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


