# Restart server

This function reboots the server.

Endpoint: GET /reboot
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `force` (integer)
    Whether to use a forceful reboot.
* 1 - Use a forceful reboot.
* 0 - Do not use a forceful reboot.

Warning:

 A forceful reboot may result in data loss if active processes exist on the server.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "reboot"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result
field is 0. This field may display a success message when
a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


