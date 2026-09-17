# Update current user's public contact information

This function sets an account's public contact information.

Endpoint: GET /set_public_contact
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `name` (string)
    The public contact name of the reseller. If you do not use this
parameter, the system retains the current setting.
    Example: "Bob's Hosting"

  - `url` (string)
    The public contact URL. If you do not use this parameter, the
system retains the current setting.
    Example: "https://bobshosting.net"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "set_public_contact"

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


