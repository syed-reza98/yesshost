# Return server's IP addresses

This function lists a server's IP addresses.

Endpoint: GET /listips
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.ip` (array)
    An array of objects that contain IP address information.

  - `data.ip.active` (integer)
    Whether the IP address is active.
* 1 — Active.
* 0 — Inactive.
    Enum: 0, 1

  - `data.ip.dedicated` (integer)
    Whether the IP address is dedicated.
* 1 — Dedicated.
* 0 — Shared.
    Enum: 0, 1

  - `data.ip.if` (string)
    The IP address' network interface.
    Example: "eth0"

  - `data.ip.ip` (string)
    The IP address.
    Example: "192.168.0.20"

  - `data.ip.mainaddr` (integer)
    Whether the IP address is the server's main IP address.
* 1 — Main IP address.
* 0 — Not the main IP address.
    Enum: 0, 1

  - `data.ip.netmask` (string)
    The IP address' netmask.
    Example: "255.255.0.0"

  - `data.ip.network` (string)
    The IP address' network value.
    Example: "192.168.0.0"

  - `data.ip.public_ip` (string)
    The public IP for the IP address.
    Example: "10.1.32.177"

  - `data.ip.removable` (integer)
    Whether the IP address can be removed.
* 1 — Removable.
* 0 — Not removable.
    Enum: 0, 1

  - `data.ip.used` (integer)
    Whether the IP address is in use.
* 1 — In use.
* 0 — Not in use.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "listips"

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


