# Add IPv6 address range

This function adds a range of IPv6 addresses to the server.

Notes:

- This function cannot modify the server's shared IPv6 address. To update that address, modify the /etc/wwwacct.conf file, or use WHM's Basic WebHost Manager Setup interface (Home >> Server Configuration >> Basic WebHost Manager Setup).
- For all of cPanel & WHM's features to function properly on IPv6, the cpsrvd daemon must listen on IPv6 addresses. To enable this functionality, select On for the Listen on IPv6 Addresses setting in the System section of WHM's Tweak Settings interface (WHM >> Home >> Server Configuration >> Tweak Settings).

Important:

When you disable the Web Server role, the system disables this function.

Endpoint: GET /ipv6_range_add
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `name` (string, required)
    The IPv6 address range's name.

Note:

You cannot use SHARED as a range's name.
It is reserved for the server's shared IPv6 address.
    Example: "ExampleRange"

  - `range` (string, required)
    The IPv6 address range and network portion
in CIDR format.
    Example: "2001:db8:66ac:cafe::/64"

  - `enabled` (integer)
    Whether the IPv6 address range is available.

Note

* 1 - Available.
* 0 - Reserved.
    Enum: 0, 1

  - `note` (string,null)
    A note for the IPv6 address range.
    Example: "Initial IPv6 address pool"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "ipv6_range_add"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


