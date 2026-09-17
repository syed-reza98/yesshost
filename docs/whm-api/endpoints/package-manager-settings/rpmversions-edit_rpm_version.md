# Update rpm.versions system configuration

This function edits RPM data. When you call this function, it performs the same actions
as the following command:

/usr/local/cpanel/scripts/update_local_rpm_versions --edit section.key value

For more information, read our
rpm.versions system
documentation.

Note:

After you call this function, we strongly recommend that you run the
/usr/local/cpanel/scripts/check_cpanel_pkgs script.

Endpoint: GET /edit_rpm_version
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `key` (string, required)
    The RPM's key.
    Example: "3rdparty"

  - `section` (string, required)
    The RPM's section.
    Example: "rpm_groups"

  - `value` (string, required)
    The RPM's value.
    Example: "cpanel-pcre"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.status` (integer)
    Whether the function succeeded.

* 1 — Success.
* 0 — Failure.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "edit_rpm_version"

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


