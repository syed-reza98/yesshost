# Return feature lists by package type

This function lists features grouped by package type.

Endpoint: GET /get_featurelists_by_package_types
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)
    Example: {"package_types_feature_lists":{"nova":["__default_nova","nova_custom"],"standard":["Mail Only","default","disabled","basic_plan"]}}

  - `data.package_types_feature_lists` (object)
    An object that contains package types as keys and arrays of feature list names as values.
    Example: {"nova":["__default_nova","nova_custom"],"standard":["Mail Only","default","disabled","basic_plan"]}

  - `data.package_types_feature_lists.nova` (array)
    An array of feature list names associated with this package type.
    Example: ["__default_nova","nova_custom"]

  - `data.package_types_feature_lists.standard` (array, required)
    An array of feature list names associated with this package type.
    Example: ["Mail Only","default","disabled","basic_plan"]

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_featurelists_by_package_types"

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


