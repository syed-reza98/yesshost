# Return PHP version's directives

This function returns the directives in the selected PHP version's php.ini file. WHM's MultiPHP INI Editor interface (Home >> Software >> MultiPHP INI Editor) lists these directives in the Basic Mode section.

Important:

  When you disable the Web Server role, the system disables this function.

Endpoint: GET /php_ini_get_directives
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `version` (string, required)
    The name of an installed version of PHP.

* ea-php72
* ea-php73
* ea-php74
* Any custom PHP package name
    Example: "ea-php74"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.directives` (array)
    An array of directives that are available in the php.ini file of the selected version of PHP.

  - `data.directives.default_value` (string)
    The directive's default value.
    Example: "1"

  - `data.directives.info` (string)
    The purpose of the directive.
    Example: "This option enables the URL-aware fopen wrappers that enable accessing URL object like files. Default wrappers are provided for the access of remote files using the ftp or http protocol, some extensions like zlib may register additional wrappers."

  - `data.directives.key` (string)
    The directive's name.
    Example: "allow_url_fopen"

  - `data.directives.php_ini_mode` (string)
    The directive's [PHP_INI mode](http://php.net/manual/en/configuration.changes.modes.php).

* PHP_INI_SYSTEM
* PHP_INI_PERDIR
* PHP_INI_ALL
* PHPINI_ONLY
    Example: "PHP_INI_SYSTEM"

  - `data.directives.type` (string)
    The type of value that the directive uses.
* string
* boolean
* integer
* float
    Enum: "string", "boolean", "integer", "float"

  - `data.directives.value` (string)
    The directive's current value.
    Example: "On"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "php_ini_get_directives"

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


