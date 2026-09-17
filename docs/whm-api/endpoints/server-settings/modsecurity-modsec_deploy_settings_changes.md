# Enable staged ModSecurity configuration files

This function deploys the staged changes to your modsec2.cpanel.conf file and
attempts to restart Apache. If the new settings fail validation, the system restores
the /etc/apache2/conf.d/modsec/modsec2.cpanel.conf file.

Note:

Call the WHM API 1 modsec_set_setting function to prepare your changes for
the modsec2.cpanel.conf file.

Important:

When you disable the
Web Server role,
the system disables this function.

Endpoint: GET /modsec_deploy_settings_changes
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "modsec_deploy_settings_changes"

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


