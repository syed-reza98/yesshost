# Update PHP version's php.ini file

This function changes the contents of a PHP version's php.ini file.

Notes:

 - This document only applies to systems that run EasyApache 4.
 - Due to the limited field length of HTTP GET method calls, we strongly recommend that you use the HTTP POST method.

Important:
  When you disable the Web Server role, the system disables this function.

Endpoint: POST /php_ini_set_content
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `content` (string, required)
    The contents of the php.ini file that you wish to change.
    Example: "[PHP]\n; About php.ini\n; php.ini is responsible for configuring many of the aspects of PHP's behavior.\npcre.backtrack_limit=100000\n"

  - `version` (string, required)
    The version of PHP for which you wish to change the php.ini file.

* ea-php72
* ea-php73
* ea-php74
* Any custom PHP package name
    Example: "ea-php74"

## Response 200 fields (application/json):

  - `data` (object)

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "php_ini_set_content"

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


