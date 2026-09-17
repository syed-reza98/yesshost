# Update integration link token

This function refreshes the token for an integration link.

Endpoint: GET /update_integration_link_token
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `app` (string, required)
    The name of the application to link.

Note:

 To update the name of the application in the interface, you must delete it and then recreate it with WHM API 1's create_integration_link function.
    Example: "WHMCS_billing"

  - `token` (string, required)
    The new access token to use for the application.
    Example: "subway"

  - `user` (string, required)
    The cPanel account name.
    Example: "username"

## Response 200 fields (application/json):

  - `data` (any)

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "update_integration_link_token"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "Ok"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


