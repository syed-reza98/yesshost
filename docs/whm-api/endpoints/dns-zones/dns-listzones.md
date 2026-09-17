# Return server's DNS zones

This function lists the server's DNS zones.

Important:

When you disable the DNS role, the system disables this function.

Endpoint: GET /listzones
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.zone` (array)
    An array of objects of zone information.

  - `data.zone.domain` (string)
    The domain name.
    Example: "example.com"

  - `data.zone.zonefile` (string)
    The zone file's name.
    Example: "example.net.db"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "listzones"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


