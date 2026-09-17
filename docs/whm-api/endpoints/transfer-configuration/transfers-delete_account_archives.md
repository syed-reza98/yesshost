# Remove cPanel account's archives

This function removes a cPanel user account's archives.

Endpoint: GET /delete_account_archives
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `user` (string, required)
    The cPanel account username.
    Example: "username"

  - `mountpoint` (string)
    The filepath to the archive storage location.
    Example: "/home/example/"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "delete_account_archives"

  - `metadata.output` (object)

  - `metadata.output.messages` (array)
    An array of status messages.
    Example: ["Found archive: /home/example/example.tar.gz"]

  - `metadata.output.warnings` (array)
    An array of warning messages.
    Example: ["This is a warning message."]

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


