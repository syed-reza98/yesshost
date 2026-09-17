# Return PHP version's php.ini file

This function returns the contents of a PHP version's php.ini file.

Note:

  This document only applies to systems that run EasyApache 4.

Important:

  When you disable the Web Server role, the system disables this function.

Endpoint: GET /php_ini_get_content
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `version` (string, required)
    The name of an installed PHP version's package.
   - ea-php##, where ## represents the major and minor versions of PHP (for example, ea-php74 represents PHP 7.4).
   - inherit
   - Any custom PHP package name.
    Example: "ea-php74"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.content` (string)
    The contents of the requested PHP version's php.ini file.
    Example: "display_errors; Default Value: On; Development Value: On; Production Value: Off;"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "php_ini_get_content"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "Ok"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


