# Return RPM package update status

This function checks the activity of the process that you executed in the WHM API 1 package_manager_submit_actions function.

Endpoint: GET /package_manager_is_performing_actions
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `build` (integer, required)
    The process's build number returned by the WHM API 1 package_manager_submit_actions function.
    Example: 10053

## Response 200 fields (application/json):

  - `data` (object)

  - `data.active` (integer)
    Whether the process is active.

* 1 — Active.
* 0 — Inactive.
    Enum: 1, 0

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "package_manager_is_performing_actions"

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


