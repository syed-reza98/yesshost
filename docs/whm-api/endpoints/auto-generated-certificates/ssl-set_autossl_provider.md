# Update the AutoSSL provider

This function sets the provider that the AutoSSL feature uses.

Note:

  To disable AutoSSL, call WHM API 1's disable_autossl function.

Endpoint: GET /set_autossl_provider
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `provider` (string, required)
    The AutoSSL provider's name. For example:
* cPanel
* LetsEncrypt
    Example: "cPanel"

  - `x_*` (string)
    Additional parameters which you wish to pass to the AutoSSL provider.

  Note:

  These additional parameters begin with the  x_  prefix. For example, the Let's Encrypt provider accepts the x_terms_of_service_accepted parameter, to which you would pass the URL of the terms of service that you accept.
    Example: "(varies)"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "set_autossl_provider"

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


