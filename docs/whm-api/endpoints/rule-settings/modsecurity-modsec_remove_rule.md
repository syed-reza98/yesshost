# Remove ModSecurity rule

This function removes a rule from a ModSecurity™ configuration file.

Important:

When you disable the
Web Server role,
the system disables this function.

Endpoint: GET /modsec_remove_rule
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `config` (string, required)
    The ModSecurity configuration file's path and filename, relative to the /usr/local/apache/conf/ directory.
    Example: "modsec_vendor_configs/example.conf"

  - `id` (integer, required)
    The rule's ID.
    Example: 1234567890

## Response 200 fields (application/json):

  - `data` (object)

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "modsec_remove_rule"

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


