# Return Market providers' products metadata

This function lists all available cPanel Market providers' products and the attributes of
each product that can be managed by an administrator.

The return list includes different attribute data depending the product_group for each product.


  
    Product Group
    Attributes Returned
    Description
  
  
    ssl_certificate
    SSLMarketProviderMetaData
    Contains additional attributes only applicable to SSL Certificates
  
  
    *
    MarketProviderMetaData
    Any products not in a product_group listed above will include only these attributes.
  


Note:

The function does not return the product_group name.

To get the product_group name for a product_id, run WHM API 1's get_market_providers_products function.

Endpoint: GET /get_market_providers_product_metadata
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.product_metadata` (array)

  - `data.product_metadata.attributes` (any)

  - `data.product_metadata.product_id` (string)
    The product's ID.
    Example: "123"

  - `data.product_metadata.provider_display_name` (string)
    The cPanel Market provider's display name.
    Example: "cPanel Store"

  - `data.product_metadata.provider_name` (string)
    The cPanel Market provider's name.
    Example: "cPStore"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_market_providers_product_metadata"

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


