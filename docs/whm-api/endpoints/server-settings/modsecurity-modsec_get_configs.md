# Return all ModSecurity configuration files

This function lists ModSecurity™ configuration files. The system stores the configuration
files in the /usr/local/apache/conf/modsec_vendor_configs directory.

Important:

When you disable the
Web Server role,
the system disables this function.

Endpoint: GET /modsec_get_configs
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.configs` (array)
    An array of objects containing information about ModSecurity configuration files.

  - `data.configs.active` (integer)
    Whether the configuration file is active.

* 1 — Active.
* 0 — Not active.

Note:

The file is active if an include for the configuration file appears
in the modsec2.cpanel.conf file.
    Enum: 1, 0

  - `data.configs.config` (string)
    The configuration file's location, relative to the /usr/local/apache/conf directory.
    Example: "modsec_vendor_configs/MyVendor/one.conf"

  - `data.configs.vendor_id` (string)
    The vendor's unique short name.
    Example: "MyVendor"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "modsec_get_configs"

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


