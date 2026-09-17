# Return PHP handlers

This function returns the PHP handlers on the system.

Important:

When you disable the
Web Server role,
the system disables this function.

Endpoint: GET /php_get_handlers
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `version` (string)
    An installed PHP version.

* ea-php54
* ea-php55
* ea-php56
* ea-php70
* ea-php71
* ea-php72
* inherit
* Any custom PHP package name.

Important:

We deprecated PHP 5.6 and PHP 7.0 and will remove them in a future version.
For more information, read our
cPanel Deprecation Plan
documentation.
    Example: "ea-php72"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.version_handlers` (array)
    An array of objects containing the available PHP handlers.

  - `data.version_handlers.available_handlers` (array)
    The installed PHP handlers.

* suphp
* cgi
* dso
* none
    Enum: "suphp", "cgi", "dso", "none"

  - `data.version_handlers.current_handler` (string)
    The PHP version's handler.

* suphp
* cgi
* dso
* none
    Enum: "suphp", "cgi", "dso", "none"

  - `data.version_handlers.version` (string)
    An installed PHP version.

* ea-php54
* ea-php55
* ea-php56
* ea-php70
* ea-php71
* ea-php72
* inherit
* Any custom PHP package name.

Important:

We deprecated PHP 5.6 and PHP 7.0 and will remove them in a future version.
For more information, read our
[cPanel Deprecation Plan](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan/)
documentation.
    Example: "ea-php72"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "php_get_handlers"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


