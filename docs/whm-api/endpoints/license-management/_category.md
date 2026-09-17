# License Management

The Server Administration module for WHM API 1.

## Return cPanel Store or Market checkout URL

 - [GET /purchase_a_license](https://api.docs.cpanel.net/specifications/whm.openapi/license-management/market-purchase_a_license.md): This function returns the checkout URL to use for a cPanel Store or cPanel Market provider purchase.

## Return server's cPanel license status

 - [GET /run_cpkeyclt](https://api.docs.cpanel.net/specifications/whm.openapi/license-management/sys-run_cpkeyclt.md): This function verifies the system's license status with WebPros International, LLC's
licensing servers. To do this, the function runs the /usr/local/cpanel/cpkeyclt
script.

For more information about this script and potential license problems,
read our
Installation Guide - Troubleshoot Your Installation
documentation.

