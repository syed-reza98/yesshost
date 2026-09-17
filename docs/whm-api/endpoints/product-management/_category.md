# Product Management

cPanel Market / Product Management

## Return Market providers' products adjusted prices

 - [GET /get_adjusted_market_providers_products](https://api.docs.cpanel.net/specifications/whm.openapi/product-management/market-get_adjusted_market_providers_products.md): This function lists all available cPanel Market products from enabled providers,
with the prices that the adjustments database modifies.

## Return Market providers' products metadata

 - [GET /get_market_providers_product_metadata](https://api.docs.cpanel.net/specifications/whm.openapi/product-management/market-get_market_providers_product_metadata.md): This function lists all available cPanel Market providers' products and the attributes of
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

## Return Market providers products

 - [GET /get_market_providers_products](https://api.docs.cpanel.net/specifications/whm.openapi/product-management/market-get_market_providers_products.md): This function lists products available in the server's cPanel Market.

## Update Market provider product

 - [GET /set_market_product_attribute](https://api.docs.cpanel.net/specifications/whm.openapi/product-management/market-set_market_product_attribute.md): This function sets an attribute for a cPanel Market provider's product.

