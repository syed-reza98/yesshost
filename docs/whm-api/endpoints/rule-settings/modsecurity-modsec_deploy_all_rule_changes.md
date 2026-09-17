# Enable all staged ModSecurity rule changes

This function deploys the staged changes for all of the ModSecurity™ configuration files
into the live configuration files. After the function deploys the configuration files, it
restarts Apache. If the new configuration is invalid, the system restores the original
configuration and preserves the staged changes.

Important:

When you disable the
Web Server role,
the system disables this function.

Endpoint: GET /modsec_deploy_all_rule_changes
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.failed` (array)
    The list of configuration files that the system could not deploy.

Note:

The function only returns this value if an error occurs.
    Example: ["modsec_vendor_configs/MyVendor/one.conf"]

  - `data.outcomes` (array)
    An array of objects containing information about the configuration deployment.

  - `data.outcomes.config` (string)
    The file path to the configuration file.

* EasyApache 4 — A valid path, relative to the /etc/apache2/conf.d/modsec/ directory.
    Example: "modsec_vendor_configs/MyVendor/one.conf"

  - `data.outcomes.exception` (string)
    The error message for a failed deployment.

Note:

The function only returns this output if an error occurs.
    Example: "The system could not deploy changes for modsec_vendor_configs/MyVendor/one.conf: The system could not validate the new Apache configuration, because httpd exited with a nonzero value. Apache produced the following error: httpd: Syntax error on line 37 of /usr/local/apache/conf/httpd.conf: Syntax error on line 26 of /usr/local/apache/conf/modsec2.conf: Syntax error on line 27 of /usr/local/apache/conf/modsec2.cpanel.conf: Could not open configuration file /usr/local/apache/conf/modsec_vendor_configs/MyVendor/one.conf: No such file or directory\n\n\n"

  - `data.outcomes.ok` (integer)
    Whether the rule change deployment succeeded.

* 1 — Successful deployment.
* 0 — Unsuccessful deployment.
    Enum: 1, 0

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "modsec_deploy_all_rule_changes"

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


