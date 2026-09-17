# Return staged ModSecurity configuration files

This function lists the ModSecurity™ configuration files that have staged changes.

Important:

When you disable the
Web Server role,
the system disables this function.

Endpoint: GET /modsec_get_configs_with_changes_pending
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.configs` (array)
    An array of strings containing one or more ModSecurity configuration files.
    Example: ["modsec2.user.conf","modsec2.user1.conf","modsec2.user2.conf"]

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "modsec_get_configs_with_changes_pending"

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


