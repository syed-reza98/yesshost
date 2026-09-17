# Return Tweak Settings option's value

This function retrieves values from the
/var/cpanel/cpanel.config
file and the server's Exim configuration.

Endpoint: GET /get_tweaksetting
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `key` (string, required)
    The Tweak Settings option.
    Example: "defaultmailaction"

  - `module` (string)
    One of the following Tweak Settings module names:
* Apache
* Basic
* Mail
* Main
    Enum: "Apache", "Basic", "Mail", "Main"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.tweaksetting` (object)
    A list of the Tweak Settings option's information.

  - `data.tweaksetting.key` (string)
    A key name in the cpanel.config file.
    Example: "defaultmailaction"

  - `data.tweaksetting.value` (string)
    The value. This value depends on the key value's requirements.
    Example: "localuser"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_tweaksetting"

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


