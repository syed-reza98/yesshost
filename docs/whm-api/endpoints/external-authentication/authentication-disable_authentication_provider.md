# Disable identity provider

This function disables a external authentication identity provider for a specified service.

Endpoint: GET /disable_authentication_provider
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `provider_id` (string, required)
    A valid identity provider's identification key.
    Example: "cpanelid"

  - `service_name` (string, required)
    The cPanel & WHM service's name:

* cpaneld
* webmaild
* whostmgrd
    Enum: "cpaneld", "webmaild", "whostmgrd"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "disable_authentication_provider"

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


