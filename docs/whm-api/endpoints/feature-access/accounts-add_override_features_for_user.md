# Add cPanel account feature list overrides

This function adds feature overrides to a cPanel account.

Endpoint: GET /add_override_features_for_user
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `features` (object, required)
    A JSON-encoded list of features to override and whether to enable or disable them.
    Example: {"backup":1}

  - `user` (string, required)
    The cPanel username.
    Example: "username"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "add_override_features_for_user"

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


