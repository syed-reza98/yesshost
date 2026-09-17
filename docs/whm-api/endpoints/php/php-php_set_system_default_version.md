# Update default PHP version

The version of PHP that you wish to set as the system's default.

* ea-php81
* inherit
* Any custom PHP package name.

Important:

When you disable the Web Server role, the system disables this function.

Endpoint: GET /php_set_system_default_version
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `version` (string, required)
    The version of PHP that you wish to set as the system's default.
    Example: "ea-php81"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "php_set_system_default_version"

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


