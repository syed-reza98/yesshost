# Rebuild installed SSL database (no-op)

This function is a no-op and performs no actions.

Note:

This function previously rebuilt the database of installed SSL certificates,
but this operation is no longer necessary and the function always succeeds
without taking any action.

Endpoint: GET /rebuildinstalledssldb
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "rebuildinstalledssldb"

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

  - `metadata.warnings` (array)
    Warnings generated while running the function.
    Example: ["This function is now a no-op."]


