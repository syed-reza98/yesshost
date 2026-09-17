# Return IPv6 address usage

This function retrieves usage information for IPv6 addresses in an IPv6 range.

Note:

For all of cPanel & WHM's features to function properly on IPv6, the cpsrvd daemon must listen on IPv6 addresses. To enable this functionality, select On for the Listen on IPv6 Addresses setting in the System section of WHM's Tweak Settings interface (WHM >> Home >> Server Configuration >> Tweak Settings).

Important:

When you disable the Web Server role, the system disables this function.

Endpoint: GET /ipv6_range_usage
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `name` (string, required)
    The IPv6 address range's name.
    Example: "TestRange"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.usage` (object)
    The IPv6 address range's information.

  - `data.usage.forbidden` (integer)
    The number of reserved IPv6 addresses.
    Example: 65536

  - `data.usage.free` (integer)
    The number of available IPv6 addresses.
    Example: 1000000

  - `data.usage.used` (integer)
    The number of assigned IPv6 addresses.
    Example: 20

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "ipv6_range_usage"

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


