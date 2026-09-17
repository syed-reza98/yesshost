# (Deprecated) Get available feature lists (deprecated)

DEPRECATED: Use get_featurelists instead.

This function lists the authenticated user's available feature lists.

Notes:

* This function is deprecated because it treats a lack of available feature lists as an error for non-admin resellers, which is incorrect behavior.
* When you call this function with the root account, it returns all feature lists on the server.
* When you call this function with a reseller account, it only returns feature lists that the account owns.

Endpoint: GET /get_available_featurelists
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.available_featurelists` (array)
    An array of available feature lists.
    Example: ["default","disabled","reseller1_test1"]

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_available_featurelists"

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


