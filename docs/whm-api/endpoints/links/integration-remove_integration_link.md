# Remove integration link

This function removes an integration link from the cPanel interface.

Endpoint: GET /remove_integration_link
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `app` (string, required)
    The name of the integration link to remove.
    Example: "WHMCS_billing"

  - `user` (string, required)
    The cPanel account name.
    Example: "username"

## Response 200 fields (application/json):

  - `data` (any)

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "remove_integration_link"

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


