# Delete feature list

This function deletes a feature list.

Endpoint: GET /delete_featurelist
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `featurelist` (string, required)
    The feature list's name.
    Example: "TestList"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.deleted_featurelist` (string)
    The deleted feature list's name.
    Example: "TestList"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "delete_featurelist"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


