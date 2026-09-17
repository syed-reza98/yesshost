# Return Market providers

This function lists the available cPanel Market providers.

Endpoint: GET /get_market_providers_list
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (array)
    An array of objects with information about each cPanel Market provider.

  - `data.payload.display_name` (string)
    The cPanel Market provider's display name.
    Example: "cPanel Store"

  - `data.payload.enabled` (integer)
    Whether the cPanel Market provider is enabled.
* 1 - Enabled.
* 0 - Disabled.
    Enum: 0, 1

  - `data.payload.even_commission_divisor` (integer)
    The price of the Market provider's products must be a multiple of this value.

Note:

 This function returns the even_commission_divisor value only if the supports_commission value is 1.
    Example: 6

  - `data.payload.name` (string)
    The cPanel Market provider's name.
    Example: "cPStore"

  - `data.payload.supports_commission` (integer)
    Whether the cPanel Market provider supports sales commissions.
* 1 - The provider supports commissions.
* 0 - The provider does not support commissions.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_market_providers_list"

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


