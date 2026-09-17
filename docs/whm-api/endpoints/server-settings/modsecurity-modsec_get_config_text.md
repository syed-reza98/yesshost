# Return ModSecurity configuration file

This function retrieves a ModSecurity™ configuration file's contents.

Important:

When you disable the
Web Server role,
the system disables this function.

Endpoint: GET /modsec_get_config_text
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `config` (string, required)
    The ModSecurity configuration file's name.
    Example: "modsec2.example.conf"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.text` (string)
    The ModSecurity configuration file's contents.
    Example: "SecRule REQUEST_URI \"example\" \"deny:id:123456789\" SecAction \"pass:auditlog:id:444444444\""

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "modsec_get_config_text"

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


