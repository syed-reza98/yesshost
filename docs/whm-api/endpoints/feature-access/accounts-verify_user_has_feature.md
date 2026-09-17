# Return cPanel account feature access

This function checks whether a user has access to a feature on a feature list.

Endpoint: GET /verify_user_has_feature
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `feature` (string, required)
    The feature's ID.

Note:

Call WHM API 1's get_feature_names function to view available features.
    Example: "sslinstall"

  - `user` (string, required)
    The cPanel account username.
    Example: "username"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.has_feature` (integer)
    Whether the user can access the feature.

* 1 — The user can access the feature.
* 0 — The user cannot access the feature.

Note:

This function returns a 1 value for any feature that does not exist in
a [feature list](https://go.cpanel.net/whmdocsFeatureManager). This is because
the system presumes users have access to features that exist outside of the
system's feature lists.
    Enum: 0, 1

  - `data.query_feature` (string)
    The queried feature's ID.
    Example: "sslinstall"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "verify_user_has_feature"

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


