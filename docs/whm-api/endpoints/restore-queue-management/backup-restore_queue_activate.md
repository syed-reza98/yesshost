# Start restoration

This function activates the restore queue. This triggers a process that restores all queued accounts.

Endpoint: GET /restore_queue_activate
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "restore_queue_activate"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "Restore queue processing initiated"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


