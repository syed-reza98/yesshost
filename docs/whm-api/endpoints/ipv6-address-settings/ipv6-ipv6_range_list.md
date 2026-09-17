# Return available IPv6 address ranges

This function lists available IPv6 address ranges.

Note:

For all of cPanel & WHM's features to function properly on IPv6, the cpsrvd daemon must listen on IPv6 addresses. To enable this functionality, select On for the Listen on IPv6 Addresses setting in the System section of WHM's Tweak Settings interface (WHM >> Home >> Server Configuration >> Tweak Settings).

Important:

When you disable the Web Server role, the system disables this function.

Endpoint: GET /ipv6_range_list
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.range` (array)
    An array of the IPv6 address ranges.

  - `data.range.CIDR` (string)
    The IPv6 address range, in CIDR format.
    Example: "2001:db8:100:6::/64"

  - `data.range.enabled` (integer)
    Whether the IPv6 address range is available.
* 1  Available.
* 0  Reserved.
    Enum: 0, 1

  - `data.range.first` (string)
    The first IPv6 address in the range.
    Example: "2001:db8:0100:0006:0000:0000:0000:0000"

  - `data.range.last` (string)
    The last IPv6 address in the range.
    Example: "2001:db8:0100:0006:ffff:ffff:ffff:ffff"

  - `data.range.mostrecent` (string)
    The most recently assigned address from the IPv6 address range.
    Example: "2001:db8:0100:0006:0000:0000:0002:00ce"

  - `data.range.name` (string)
    The IPv6 address range's name.

Note:

SHARED represents the server's main IPv6 address.
    Example: "test_range"

  - `data.range.note` (string)
    The IPv6 address range's note.
    Example: "This is used for development."

  - `data.range.owner` (string)
    The user who owns the IPv6 address range.
    Example: "root"

  - `data.range.range_users` (array)
    The user or users who use addresses in the IPv6 address range.
    Example: ["user1"]

  - `data.range.reclaimed` (array)
    IPv6 addresses within the range which have become available.
    Example: ["2001:db8:0100:0006:0000:0000:0000:0002"]

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "ipv6_range_list"

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


