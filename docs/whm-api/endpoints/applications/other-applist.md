# Return WHM API 1 functions list

This function lists available WHM API 1 functions.

Endpoint: GET /applist
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.app` (array)
    An array of available WHM API 1 functions.
    Example: ["accountsummary","listaccts"]

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "applist"

  - `metadata.reason` (string)
    The reason the api failed when the metadata.result field is 0. The field may be set to a success message on a successful call.
    Example: "OK"

  - `metadata.result` (integer)
    - 1 - Success
- 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the api call.
    Example: 1


