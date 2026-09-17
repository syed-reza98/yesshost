# Remove application connection information

Remove the connected application from the server. This only removes the connection
information from the configuration file. It does not clean up any allocated
resources, such as API tokens and public/private keys. Any tokens or keys need to be
removed from the system separately.

Endpoint: POST /remove_connected_application
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `name` (string, required)
    The name of the connected application.
    Example: "application-1"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "remove_connected_application"

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


