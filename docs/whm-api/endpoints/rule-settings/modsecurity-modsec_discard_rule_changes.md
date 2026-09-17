# Remove staged ModSecurity rule changes

This function discards staged rule changes for a ModSecurity™ configuration file.
Staged rule changes reside in a .STAGE file (for example, the staged changes for
the example.conf file exist in the example.conf.STAGE file).
This function deletes the .STAGE file that corresponds to the configuration file that
you specify.

Note:

To stage rule changes, call WHM API 1's modsec_add_rule function.

Important:

When you disable the
Web Server role,
the system disables this function.

Endpoint: GET /modsec_discard_rule_changes
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `config` (string, required)
    The ModSecurity configuration file in the /usr/local/cpanel/apache/conf/ directory.
    Example: "modsec2.example.conf"

## Response 200 fields (application/json):

  - `data` (object)

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "modsec_discard_rule_changes"

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


