# Return start_background_pkgacct session state

This function returns the state of a start_background_pkgacct session.

Endpoint: GET /get_pkgacct_session_state
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `session_id` (string, required)
    The start_background_pkgacct session ID.
    Example: "username20200323154328kDJ2Kx4xua2KtG"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.state` (string)
    The start_background_pkgacct session's state.
* COMPLETED
* FAILED
* RUNNING
    Enum: "COMPLETED", "FAILED", "RUNNING"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_pkgacct_session_state"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result
field is 0. This field may display a success message when
a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


