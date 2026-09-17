# Update Tweak Settings option

This function sets an option's value in WHM's
Tweak Settings
interface (WHM >> Home >> Server Configuration >> Tweak Settings). The
system stores the keys and values that this function updates in
the
/var/cpanel/cpanel.config
file.

Endpoint: GET /set_tweaksetting
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `key` (string, required)
    The cpanel.config setting name that corresponds to the desired
setting in WHM's
Tweak Settings
interface (WHM >>Home >> Server Configuration >> Tweak Settings).
    Example: "proxysubdomains"

  - `module` (string)
    The
Tweak Settings
interface section.

Note:

The possible section names are:
* Apache
* Basic
* Mail
* Main
    Enum: "Apache", "Basic", "Mail", "Main"

  - `value` (string)
    The value to assign to the setting. If you include this parameter in the call but
do not set a value, the value defaults to an empty value.

Note:

For more information about the requirements for values in the cpanel.config
file settings, read our
cpanel.config file
documentation.

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "set_tweaksetting"

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


