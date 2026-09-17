# Return available RPM packages

This function lists a key's available RPMs. For more information, read our
rpm.versions system
documentation.

Endpoint: GET /get_rpm_version_data
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `section` (string, required)
    The RPM's section.
    Example: "rpm_groups"

  - `key` (string)
    The RPM's key. If you do not specify a value, the function returns all RPM categories.
    Example: "3rdparty"

## Response 200 fields (application/json):

  - `data` (any)
    The RPM section and its associated RPMs.

Note:

* This function uses the RPM section's name and RPM key's name for each return value.
* If you specify the key parameter, this function returns only the called RPM key.
* If you do not specify the key parameter, the function returns all RPM keys
in the called section parameter.

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_rpm_version_data"

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


