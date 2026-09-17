# Delete server from configuration cluster

This function removes a server from a configuration cluster. The function's return
data appears in the metadata section of its output.

Important:

If you log in to a configuration cluster server that is not the parent server,
nothing will indicate that the server is part of a configuration cluster. You can
only view and modify this information from the parent server.

Endpoint: GET /delete_configclusterserver
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `name` (string, required)
    The hostname or IP address of a remote configuration cluster server.
    Example: "example.com"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "delete_configclusterserver"

  - `metadata.name` (string)
    The remote configuration cluster server's name.
    Example: "example.com"

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


