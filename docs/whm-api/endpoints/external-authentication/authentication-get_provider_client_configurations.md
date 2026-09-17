# Return identity provider client configuration

This function retrieves the configuration details for the client of an external authentication identity provider.

Endpoint: GET /get_provider_client_configurations
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

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

  - `data` (object)

  - `data.client_configurations` (object)
    An object that contains the client configuration information.

  - `data.client_configurations.client_id` (string)
    The client ID for the identity provider.
    Example: "1234567890"

  - `data.client_configurations.client_secret` (string)
    The secret for the client ID.
    Example: "victoria"

  - `data.client_configurations.redirect_uris` (array)
    The redirection URIs for each interface that the identity provider uses.
    Example: ["https://hostname.example.com:2083/openid_connect_callback/cpanelid","https://hostname.example.com:2087/openid_connect_callback/cpanelid","https://hostname.example.com:2096/openid_connect_callback/cpanelid"]

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_provider_client_configurations"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


