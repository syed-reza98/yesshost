# Remove IPv6 address range

This function removes an IPv6 address range from the server.

Note:

* This function cannot modify the server's shared IPv6 address. To update that address, modify the /etc/wwwacct.conf file, or use WHM's _Basic WebHost Manager Setup_ interface (_Home >> Server Configuration >> Basic WebHost Manager Setup_).
* For all of cPanel & WHM's features to function properly on IPv6, the cpsrvd daemon must listen on IPv6 addresses. To enable this functionality, select _On_ for the _Listen on IPv6 Addresses_ setting in the _System_ section of WHM's _Tweak Settings_ interface (_WHM >> Home >> Server Configuration >> Tweak Settings_).

Important:

When you disable the Web Server role, the system disables this function.

Endpoint: GET /ipv6_range_remove
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `name` (string, required)
    The IPv6 address range's name.
    Example: "Range1"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "ipv6_range_remove"

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


