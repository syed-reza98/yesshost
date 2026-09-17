# Return RPM management build log

This function returns build log content.

Endpoint: GET /package_manager_get_build_log
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `build` (integer, required)
    The build process ID returned by the package_manager_submit_actions function.
    Example: 1234

  - `offset` (integer, required)
    The position in the build log from which you wish to display entries.
    Example: 4567

## Response 200 fields (application/json):

  - `data` (object)

  - `data.content` (array)
    The most recent build log entries.
    Example: ["line1","line2","line3"]

  - `data.offset` (integer)
    The last position that the system read in the build log.
    Example: 9672

  - `data.still_running` (integer)
    Whether the build process is in progress.

* 1 — In progress.
* 0 — Complete.
    Enum: 1, 0

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "package_manager_get_build_log"

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


