# Update PHP version's handler

This function sets a PHP version's handler.

Important:

When you disable the Web Server role, the system disables this function.

Endpoint: GET /php_set_handler
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `handler` (string, required)
    An installed PHP handler.
* cgi
* suphp
* dso
* none
    Enum: "cgi", "suphp", "dso", "none"

  - `version` (string, required)
    An installed PHP version.
* ea-php54
* ea-php55
* ea-php56
* ea-php70
* ea-php71
* ea-php72
* inherit
* Any custom PHP package name.
    Example: "ea-php70"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "php_set_handler"

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


