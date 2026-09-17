# Return server's hostname

This function retrieves the server's hostname.

Endpoint: GET /gethostname
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.hostname` (string)
    The server's hostname.
    Example: "hostname.example.com"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "gethostname"

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


