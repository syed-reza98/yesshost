# Return PHP-FPM preconfigured status

This function determines whether your system runs with a preconfigured PHP-FPM configuration.

Important:

When you disable the Web Server role, the system disables this function.

Endpoint: GET /php_get_old_fpm_flag
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.old_fpm_flag` (integer)
    The status of the preconfigured FPM.
* 0 — No preconfigured FPM exists.
* 1 — Preconfigured FPM exists.
* 2 — Preconfiguration dialogue dismissed.
    Enum: 0, 1, 2

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "php_get_old_fpm_flag"

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


