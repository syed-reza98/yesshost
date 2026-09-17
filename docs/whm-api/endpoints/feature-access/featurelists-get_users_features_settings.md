# Return cPanel accounts' feature settings

This function lists the features settings of cPanel accounts.

Endpoint: GET /get_users_features_settings
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `user` (string, required)
    The user's username.

Note:

To check multiple users, increment the parameter name. For example, user-1, user-2, and user-3.

  - `feature` (string)
    The feature's name.

Note:

* To check multiple features, increment the parameter name. For example, feature-1, feature-2, and feature-3.
* If you use this parameter, you must enter a feature name, or the function returns an error. If you do not use this parameter, the function returns data for all features on the server.

## Response 200 fields (application/json):

  - `data` (object)

  - `data.users_features_settings` (array)
    An array of objects that contain information about the feature list settings.

  - `data.users_features_settings.cpuser_setting` (integer,null)
    The user's setting for the feature in their cpuser file, which overrides the feature_list_setting return.
* 1 - Enabled.
* 0 - Disabled.
* null — The feature is not defined in the feature list.
    Enum: 1, 0

  - `data.users_features_settings.feature` (string)
    The feature name.
    Example: "autossl"

  - `data.users_features_settings.feature_list` (string)
    The feature list's name.
    Example: "autossl"

  - `data.users_features_settings.feature_list_setting` (integer)
    The user's feature list setting.
* 1 - Enabled.
* 0 - Disabled.
    Enum: 1, 0

  - `data.users_features_settings.user` (string)
    The user's username.
    Example: "example"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_users_features_settings"

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


