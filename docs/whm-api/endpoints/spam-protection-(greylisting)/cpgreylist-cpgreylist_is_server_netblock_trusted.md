# Return Greylisting trust status of server netblock

This function returns the Greylisting trusted status of the server's netblock.

Endpoint: GET /cpgreylist_is_server_netblock_trusted
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.ip_blocks` (object)
    A list containing the neighboring netblocks.
    Example: {"10.0.0.0-10.255.255.255":1,"199.0.0.0-199.3.255.255":1,"48.0.0.0-48.255.255.255":1}

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "cpgreylist_is_server_netblock_trusted"

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


