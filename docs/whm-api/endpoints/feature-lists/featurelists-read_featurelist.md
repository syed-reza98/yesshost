# (Deprecated) Read feature list settings (deprecated)

DEPRECATED: Use get_featurelist_data instead.

This function reads a feature list and returns a hash that maps feature IDs to values indicating whether each feature is enabled.

Notes:

* The function requires the featurelist parameter to specify which feature list to read.
* Access is controlled based on user permissions. Resellers can only access their own feature lists.

Endpoint: GET /read_featurelist
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `featurelist` (string, required)
    The name of the feature list to read.
    Example: "default"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.featurelist` (string)
    The name of the feature list that was read.
    Example: "default"

  - `data.features` (object)
    A map of feature IDs to their enabled status.
    Example: {"addondomains":1,"changemx":1,"webmail":0,"ssl":1}

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "read_featurelist"

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


