# Return transfer session's status

This function retrieves the state of a transfer session.

Note:

For more information about how this function works with other functions in the transfer and restore process, read our Guide to Transfer and Restore API Functions documentation.

Endpoint: GET /get_transfer_session_state
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `transfer_session_id` (string, required)
    The transfer session's ID.
    Example: "exampleservercopya20140206192428NtyW"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.state_name` (string)
    The transfer session's state.
* TRANSFER_PENDING
* TRANSFER_INPROGRESS
* RESTORE_PENDING
* RESTORE_INPROGRESS
* RUNNING
* PAUSED
* PENDING
* COMPLETED
* ABORTED
* FAILED
    Enum: "TRANSFER_PENDING", "TRANSFER_INPROGRESS", "RESTORE_PENDING", "RESTORE_INPROGRESS", "RUNNING", "PAUSED", "PENDING", "COMPLETED", "ABORTED", "FAILED"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_transfer_session_state"

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


