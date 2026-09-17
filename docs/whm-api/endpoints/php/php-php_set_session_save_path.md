# Update PHP default save path

This function sets the location of PHP's default session save path.

Important:

When you disable the Web Server role, the system disables this function.

Endpoint: GET /php_set_session_save_path
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `overwrite` (integer)
    Whether to overwrite the existing session save path in the php.ini
file.
* 1 — Overwrite the existing value in the php.ini file.
* 0 — Do not overwrite the existing value in the php.ini file.
    Enum: 0, 1

  - `path` (string)
    The directory in which to save session information.

Warning:

For security reasons, do not set this value to /tmp or another insecure location.
    Example: "/var/cpanel/php/sessions"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "php_set_session_save_path"

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


