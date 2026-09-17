# Set Ecommerce URL (deprecated)

This function enables Sitejet Commerce for all users and allows the hosting provider to set a custom URL for their payment platform, which customers can use to purchase the Sitejet Commerce upgrade.

Endpoint: GET /set_ecommerce
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `allowEcommerce` (integer, required)
    * 1 - Sitejet Commerce is enabled.
* 0 - Sitejet Commerce is disabled.
    Enum: 0, 1

  - `storeurl` (string)
    The URL for the hosting provider's payment platform. If this value is not set, the URL will default to the Sitejet Commerce store.
    Example: "http://www.example-store.com/purchase"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "set_ecommerce"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result
field is 0. This field may display a success message when
a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


