# Update identity provider login interface appearance

This function sets the display configuration for the login button of an external authentication identity provider.

Endpoint: GET /set_provider_display_configurations
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `configurations` (object, required)
    The display configuration in JSON-encoded key-value format.
    Example: {"color":"6677aa","display_name":"Hosting Center Login","textcolor":"44ffbb"}

  - `provider_id` (string, required)
    The identity provider's key.
    Example: "cpanelid"

  - `service_name` (string, required)
    The cPanel & WHM service's name.
* cpaneld — The cPanel daemon.
* whostmgrd — The WHM daemon.
* webmaild — The Webmail daemon.
    Enum: "cpaneld", "whostmgrd", "webmaild"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "set_provider_display_configurations"

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


