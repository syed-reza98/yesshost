# Return PHP-FPM conversion status

This function indicates whether the system's process to convert all of WHM's accounts to use PHP-FPM is in progress.

Important:

When you disable the Web Server role, the system disables this function.

Warning:

We strongly recommend that you only activate Apache PHP-FPM if your server has at least 2 GB of RAM available, or at least 30 MB of RAM per domain. If you enable PHP-FPM on a server with less than the required RAM, your server may experience severe performance issues.

Endpoint: GET /is_conversion_in_progress
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.inProgress` (integer)
    Whether the system's process to convert all of WHM's accounts to use PHP-FPM is in progress.
* 1 — In progress.
* 0 — Not currently in progress.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "is_conversion_in_progress"

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


