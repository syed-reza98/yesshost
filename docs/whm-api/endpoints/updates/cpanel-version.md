# Return cPanel & WHM version

This function returns the cPanel & WHM version that a server runs.

Endpoint: GET /version
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.version` (string)
    The server's cPanel & WHM version.
    Example: "11.88.0.9999"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "version"

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


