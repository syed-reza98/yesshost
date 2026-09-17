# Remove all staged ModSecurity rule changes

This function discards the staged ModSecurity™ rule changes, if present, for all of
the configuration files.

Important:

When you disable the
Web Server role,
the system disables this function.

Endpoint: GET /modsec_discard_all_rule_changes
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.failed` (array)
    The list of configuration files that contain changes that the system
could not discard.

Note:

The function only returns this value if an error occurs.
    Example: ["modsec_vendor_configs/MyVendor/one.conf"]

  - `data.outcomes` (array)
    An array of objects containing information about the discarded configuration changes.

  - `data.outcomes.config` (string)
    The file path to the configuration file.

* EasyApache 4 — A valid path, relative to the /etc/apache2/conf.d/modsec/ directory.
    Example: "modsec_vendor_configs/MyVendor/one.conf"

  - `data.outcomes.exception` (string)
    The error message for a failed discard.

Note:

 The function only returns this value if an error occurs. The reason for failure.
    Example: "The system could not remove the file /usr/local/apache/conf/modsec_vendor_configs/MyVendor/one.conf.STAGE: Invalid argument\n"

  - `data.outcomes.ok` (integer)
    Whether the system successfully discarded the rule change.

* 1 — Success.
* 0 — Failure.
    Enum: 1, 0

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "modsec_discard_all_rule_changes"

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


