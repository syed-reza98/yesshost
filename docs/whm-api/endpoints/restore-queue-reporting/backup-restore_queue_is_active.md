# Validate restoration queue is active

This function checks whether the system's restoration queue is actively processing tasks.

Endpoint: GET /restore_queue_is_active
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.is_active` (integer)
    Whether the restoration queue is actively processing tasks.

* 1 — Currently active.
* 0 — Not currently active.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "restore_queue_is_active"

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


