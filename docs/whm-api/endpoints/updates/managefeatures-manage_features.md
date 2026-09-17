# Update Feature Showcase

This function lists and manages items in the
Feature Showcase.

Note:

* This function's output changes, depending on which value you pass to the action parameter.
* The example in this document displays the function's return when the action
parameter value is info.

Endpoint: GET /manage_features
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `action` (string, required)
    The function's action.

* info — List full details for all available features.
* list — List the feature IDs for all available features.
* enable — Enable the feature or features called in the features parameter.
* disable — Disable the feature or features called in the features parameter.
    Enum: "info", "list", "enable", "disable"

  - `features` (string)
    The feature's ID.

Note:

You must use this parameter if you pass the enable or disable value for
the action parameter.
    Example: "features_example1"

## Response 200 fields (application/json):

  - `data` (object)
    Example: {"feature":[{"description":"This feature does things.","enabled":1,"feature_key":"featured_example1","link":"https://go.cpanel.net/featureshowcasefeatured_example1","name":"Featured Example 1","recommended":1,"vendor":"Third Party, Inc."},{"description":"This feature also does things.","enabled":1,"feature_key":"featured_example2","link":"https://go.cpanel.net/featureshowcasefeatured_example2","name":"Featured Example 2","recommended":1,"vendor":"WebPros International, LLC"}]}

  - `data.action` (array)
    An array of objects containing feature information.

Note:

The function only returns this array if you pass the enabled
or disabled values to the action parameter.

  - `data.action.feature` (string)
    The feature's ID.
    Example: "mysql8"

  - `data.action.status` (string)
    The feature's state.
    Example: "Successfully performed 'enable' for mysql8"

  - `data.feature` (array)
    An array of objects containing feature information.

Note:

The function only returns this array if you pass the info
or list values to the action parameter.
    Example: [{"description":"This feature does things.","enabled":1,"feature_key":"featured_example1","link":"https://go.cpanel.net/featureshowcasefeatured_example1","name":"Featured Example 1","recommended":1,"vendor":"Third Party, Inc."},{"description":"This feature also does things.","enabled":1,"feature_key":"featured_example2","link":"https://go.cpanel.net/featureshowcasefeatured_example2","name":"Featured Example 2","recommended":1,"vendor":"WebPros International, LLC"}]

  - `data.feature.description` (string)
    The feature's description.

Note:

The function only returns this value if you pass the info
value to the action parameter.
    Example: "MySQL® 8 is now available in cPanel and WHM for all supported operated operating systems. For more information, read our documentation (https://go.cpanel.net/whmdocsUpgradeDBVersion)."

  - `data.feature.enabled` (integer)
    Whether the feature is enabled.

* 1 — Enabled.
* 0 — Disabled.

Note:

The function only returns this value if you pass the info
or list values to the action parameter.
    Enum: 1, 0

  - `data.feature.feature_key` (string)
    The feature's ID.

Note:

The function only returns this value if you pass the info
or list values to the action parameter.
    Example: "mysql8"

  - `data.feature.link` (string)
    The feature's documentation link.

Note:

The function only returns this value if you pass the info
value to the action parameter.
    Example: "https://go.cpanel.net/whmdocsUpgradeDBVersion"

  - `data.feature.name` (string)
    The feature's name.

Note:

The function only returns this value if you pass the info
value to the action parameter.
    Example: "MySQL® 8 Now Available For Upgrade"

  - `data.feature.recommended` (integer)
    Whether we recommend that you install the feature.

* 1 — Recommended.
* 0 — Not recommended.

Note:

The function only returns this value if you pass the info
value to the action parameter.
    Enum: 1, 0

  - `data.feature.vendor` (string)
    The feature's vendor.

Note:

The function only returns this value if you pass the info
value to the action parameter.
    Example: "WebPros International, LLC"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "manage_features"

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


