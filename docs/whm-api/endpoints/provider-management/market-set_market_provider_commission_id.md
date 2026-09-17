# Update Market provider commission contact ID

This function sets the contact ID to which a cPanel Market provider will send commission.

Endpoint: GET /set_market_provider_commission_id
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `commission_id` (string, required)
    The cPanel Store ID to which to send cPanel Market commissions.
    Example: "user@example.com"

  - `provider` (string, required)
    The cPanel Market provider's name.
    Example: "cPStore"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "set_market_provider_commission_id"

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


