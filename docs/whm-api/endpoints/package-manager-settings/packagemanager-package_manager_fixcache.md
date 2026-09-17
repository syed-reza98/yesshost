# Repair RPM management yum cache issues

This function attempts to repair yum cache issues.

Endpoint: GET /package_manager_fixcache
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.cache_seems_ok_now` (integer)
    Whether the system resolved the current error.

* 1 — Resolved.

Note:

* The function only returns this value if the function succeeds.
* If the function fails, it only returns metadata.
    Enum: 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "package_manager_fixcache"

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


