# Update IPv6 address range name or note

This function changes an IPv6 address range's name and/or note.

Notes:

- This function cannot modify the server's shared IPv6 address. To update that address, modify the /etc/wwwacct.conf file, or use WHM's Basic WebHost Manager Setup interface (Home >> Server Configuration >> Basic WebHost Manager Setup).
- For all of cPanel & WHM's features to function properly on IPv6, the cpsrvd daemon must listen on IPv6 addresses. To enable this functionality, select On for the Listen on IPv6 Addresses setting in the System section of WHM's Tweak Settings interface (WHM >> Home >> Server Configuration >> Tweak Settings).

Important:

When you disable the Web Server role, the system disables this function.

Endpoint: GET /ipv6_range_edit
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `name` (string, required)
    The IPv6 address range's current name.

Note:

You cannot edit the range named SHARED.
    Example: "ExampleRange"

  - `new_name` (string)
    The IPv6 address range's new name.

Note:

* If not supplied the range keeps its old name.
* You cannot change range name to SHARED.
    Example: "AnotherRange"

  - `note` (string)
    The IPv6 address range's new note.

Note:

If you don't specify this parameter, the function will not change the range's note.
    Example: "This is an update to the note."

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "ipv6_range_edit"

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


