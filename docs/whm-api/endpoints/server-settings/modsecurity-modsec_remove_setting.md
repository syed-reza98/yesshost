# Remove ModSecurity configuration

This function removes a global ModSecurity™ configuration directive.

Important:

When you disable the
Web Server role,
the system disables this function.

Endpoint: GET /modsec_remove_setting
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `setting_id` (integer, required)
    The setting's ID. For a list of available settings and their IDs, call the modsec_get_settings function.
    Example: 3

## Response 200 fields (application/json):

  - `data` (object)

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "modsec_remove_setting"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


