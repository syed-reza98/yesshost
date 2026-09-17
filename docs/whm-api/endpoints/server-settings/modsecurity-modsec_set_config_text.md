# Update ModSecurity configuration file

This function sets the contents of a specified ModSecurity™ configuration file. The system
stages any changes to the configuration file. To deploy the changes, call WHM API 1's
modsec_deploy_rule_changes function.

Important:

When you disable the
Web Server role,
the system disables this function.

Endpoint: GET /modsec_set_config_text
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `config` (string, required)
    The configuration file name.
    Example: "modsec2.example.conf"

  - `text` (string, required)
    The configuration text.
    Example: "SecRule REQUEST_URI \"example\" \"deny,id:123456789\" SecAction \"pass,auditlog,id\""

## Response 200 fields (application/json):

  - `data` (any)

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "modsec_set_config_text"

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


