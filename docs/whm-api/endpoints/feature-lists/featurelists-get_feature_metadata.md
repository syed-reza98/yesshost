# Return current user's available feature lists info

This function lists the details of the authenticated user's available feature lists.

Endpoint: GET /get_feature_metadata
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.features` (array)
    An array of objects containing information about a feature.

  - `data.features.id` (string)
    The feature's ID.
    Example: "addondomains"

  - `data.features.is_plugin` (integer)
    Whether the feature is a plugin.

* 1 — Plugin.
* 0 — Not a plugin.
    Enum: 1, 0

  - `data.features.name` (string)
    The feature's name.
    Example: "Addon Domain Manager"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_feature_metadata"

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


