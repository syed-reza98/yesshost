# Update PHP version's directives

This function sets the value of a PHP version's directives.

Note:

  This document only applies to systems that run EasyApache 4.

Important:

  When you disable the Web Server role , the system disables this function.

Endpoint: GET /php_ini_set_directives
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `directive` (string, required)
    The name of a PHP directive and its value.

Note:

 To change the directive's value for multiple PHP directives, duplicate or increment the parameter name. For example, to change three directives, use the directive parameter multiple times or use the directive-1, directive-2 , and directive-3 parameters.

  - `version` (string, required)
    PHP version on the system.

Note

* ea-php56
* ea-php70
* ea-php71
* ea-php72
* Any custom PHP package name.
    Example: "ea-php72"

## Response 200 fields (application/json):

  - `data` (object)
    Example: {}

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "php_ini_set_directives"

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


