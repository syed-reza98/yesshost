# Return Market providers' commission configuration

This function returns the commission configuration of all available cPanel Market providers.

Endpoint: GET /get_market_providers_commission_config
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (array)
    An array of objects that contains commission ID information about a cPanel Market provider.

  - `data.payload.local_commission_id` (string)
    The locally-cached commission ID that the server owner uses for the cPanel Market provider.
    Example: "user@example.com"

  - `data.payload.provider_display_name` (string)
    The cPanel Market provider's display name.
    Example: "cPanel Store"

  - `data.payload.provider_name` (string)
    The cPanel Market provider's name.
    Example: "cPStore"

  - `data.payload.remote_commission_id` (string)
    The commission ID that the server owner uses for the cPanel Market provider.
    Example: "user@example.com"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_market_providers_commission_config"

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


