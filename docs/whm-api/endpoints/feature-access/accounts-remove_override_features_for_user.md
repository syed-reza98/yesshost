# Remove cPanel account feature list overrides

This function removes feature overrides from a cPanel account.

Endpoint: GET /remove_override_features_for_user
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `features` (array, required)
    An array that contains the features' names.

Note:

* Call WHM API 1's get_feature_names function to view available features.
    Example: ["sslinstall","videotut"]

  - `user` (string, required)
    The user's username.
    Example: "username"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "remove_override_features_for_user"

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


