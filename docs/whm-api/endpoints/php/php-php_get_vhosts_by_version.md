# Return virtual hosts per PHP version

This function lists the virtual hosts that use a specified version of PHP.

Note:

This document only applies to systems that run EasyApache 4.

Important:

When you disable the Web Server role, the system disables this function.

Endpoint: GET /php_get_vhosts_by_version
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `version` (string, required)
    The name of an installed PHP package.
- ea-php##, where ## represents the major and minor versions of PHP (for example, ea-php72 represents PHP 7.2).
- inherit
- Any custom PHP package name.
    Example: "ea-php56"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.vhosts` (array)
    An array of the virtual hosts that use the specified PHP version.
    Example: ["example.com"]

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "php_get_vhosts_by_version"

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


