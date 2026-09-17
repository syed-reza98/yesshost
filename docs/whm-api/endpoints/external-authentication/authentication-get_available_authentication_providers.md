# Return available identity providers

This function lists available external authentication identity providers for all services.

Endpoint: GET /get_available_authentication_providers
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.providers` (array)
    An array of available identity provider names and settings. Each hash in the array includes the cpaneld_link , whostmgrd_link , webmaild_link , icon , icon_type , provider_name , display_name , documentation_url , color , configured , id , label , textcolor , whostmgr_enabled , cpaneld_enabled , and webmaild_enabled returns.

  - `data.providers.color` (string)
    The background color of the button on the cPanel interface. A valid RGB hexadecimal color value.
    Example: "dd4b39"

  - `data.providers.configured` (integer)
    Whether the identity provider is configured on the server.
- 1  The provider is configured.
- 0  The provider is not configured.
    Enum: 0, 1

  - `data.providers.cpaneld_enabled` (integer)
    Whether the identity provider is enabled for the cpaneld service.
- 1  The provider is enabled for the cpaneld service..
- 0  The provider is not enabled for the cpaneld service.
    Enum: 0, 1

  - `data.providers.cpaneld_link` (string)
    link to the identity provider's configuration for the cpaneld service on the system. A valid URL .
    Example: "https://hostname.example.com:2083/openid_connect/cpanelid"

  - `data.providers.display_name` (string)
    The display name of the identity provider. A valid string.
    Example: "cPanel"

  - `data.providers.documentation_url` (string)
    The URL to the identity provider's documentation. A valid URL.
    Example: "https://go.cpanel.net/cpanelidmanage"

  - `data.providers.icon` (string)
    The icon file to display in the button on the cPanel login interface. A valid Base64-encoded, JPG or PNG-formatted image file.
    Example: "Click to view...iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAV1JREFUeNrsVtGNwjAMJegGYIRucBmhtwEjdAMyQjYoG2SEG6HcBGUDugFskHOQg1zTlFaN\\/\\/KkqMh2yYvt53S3KygomIZaE+y9P8BDJ9xXpdSDxT9jwX7dxDJsDMvCuvl33GF1sBwS5O8GX7eVgCabGyRkGJF25v0sJHrcyDH7iMhWEl9zWSD1\\/xs1klJn8J\\/gZ4WxNdgu8KyiDXGIfmJ7LO6R8CI5rJnwO+Kv0Wb9Z7xlZr+wMt8f\\/ANmyCoCMF3CUmP8rOmHip1AM\\/8tdbLcjfnL5NigYmIp+ilp5iYRJNkmajtLIBuJiUZ1S+aDKGDjI8tGk+N\\/9yuy0ODcGIjL8UEmcXKLDelRDQ5tHcuIkSLQE1WYhIRfMRIEmiV1Z7NES5Rh9nIisRGVWGOyyyflC5fSkDsTmk1KnVBMbForqQw+IVtUCP3KEpdojffHnRGKcq3LZ3pBgST+BRgANXt+WPKE7tYAAAAASUVORK5CYII="

  - `data.providers.icon_type` (string)
    The icon file's MIME type. A valid image format's MIME type.
    Example: "image/svg+xml"

  - `data.providers.id` (string)
    The ID of the identity provider. A valid string.
    Example: "cpanelid"

  - `data.providers.label` (string)
    The text label that will appear on the cPanel login interface. A valid string.
    Example: "Log in with a cPanelID Account"

  - `data.providers.provider_name` (string)
    The name of the identity provider. A valid string.
    Example: "cpanel"

  - `data.providers.textcolor` (string)
    The color of the text label on the cPanel login interface. A valid RGB hexadecimal color value.
    Example: "FFFFFF"

  - `data.providers.webmaild_enabled` (integer)
    Whether the identity provider is enabled for the webmaild service.
- 1  The provider is enabled for the webmaild service.
- 0  The provider is not enabled for the webmaild service.
    Enum: 0, 1

  - `data.providers.webmaild_link` (string)
    link to the identity provider's configuration for the webmaild service on the system. A valid URL .
    Example: "https://hostname.example.com:2096/openid_connect/cpanelid"

  - `data.providers.whostmgr_enabled` (integer)
    Whether the identity provider is enabled for the whostmgr service.
- 1  The provider is enabled for the whostmgr service.
- 0  The provider is not enabled for the whostmgr service.
    Enum: 0, 1

  - `data.providers.whostmgrd_link` (string)
    link to the identity provider's configuration for the whostmgrd service on the system. A valid URL.
    Example: "https://hostname.example.com:2087/openid_connect/cpanelid"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_available_authentication_providers"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


