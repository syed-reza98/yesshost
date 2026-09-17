# Update Market provider product

This function sets an attribute for a cPanel Market provider's product.

Endpoint: GET /set_market_product_attribute
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `attribute` (string, required)
    The attribute of the cPanel Market provider's product.

Note

Attributes vary between cPanel Market providers and products.
    Example: "price"

  - `product_id` (string, required)
    The cPanel Market provider product's name.
    Example: "12345"

  - `provider` (string, required)
    The cPanel Market provider's name.
    Example: "cPStore"

  - `value` (string, required)
    The value to set for the attribute.
    Example: "6.00"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "set_market_product_attribute"

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


