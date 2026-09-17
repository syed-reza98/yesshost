# Delete script hook

This function removes a script hook.

Endpoint: GET /delete_hook
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `id` (string, required)
    The script hook's ID.

Note:

To retrieve a hook's ID, use the WHM API 1 list_hooks function.
    Example: "HzEpGvT6QGUYwxuX3hWB8AUq"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "delete_hook"

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


