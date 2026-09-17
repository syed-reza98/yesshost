# Disable ModSecurity vendor configuration files

This function disables a ModSecurity™ vendor's configuration files.

Important:

When you disable the
Web Server role,
the system disables this function.

Endpoint: GET /modsec_disable_vendor_configs
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `vendor_id` (string, required)
    The vendor's unique short name.
    Example: "SomeVendor"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.outcomes` (array)
    An array of objects containing elements that represent the outcome of each attempt to disable an operation.

  - `data.outcomes.active` (integer)
    Whether the configuration file is active.

* 1 — Active.
* 0 — Not active.
    Enum: 1, 0

  - `data.outcomes.config` (string)
    The configuration file path, relative to the /usr/local/apache/conf/ directory.
    Example: "modsec_vendor_configs/SomeVendor/example.conf"

  - `data.outcomes.exception` (string)
    If the function fails to disable the configuration file, this
return contains the error message.

Note:

This function only returns a value if an error occurred.
    Example: "This is an error message."

  - `data.outcomes.ok` (integer)
    Whether the function successfully disabled the configuration file.

* 1 — Disabled.
* 0 — Enabled.
    Enum: 1, 0

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "modsec_disable_vendor_configs"

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


