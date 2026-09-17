# Return ModSecurity module status

This function checks whether the ModSecurity™ module is installed.

Important:

When you disable the Web Server role, the system disables this function.

Endpoint: GET /modsec_is_installed
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.data` (object)

  - `data.data.installed` (integer)
    Whether ModSecurity is installed on the server.
* 1 — Installed.
* 0 — Not installed.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "modsec_is_installed"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result
field is 0. This field may display a success message when
a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


