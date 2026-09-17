# Validate remote server's credentials

This function checks the remote server's credentials, which a transfer session uses to connect.

Endpoint: GET /analyze_transfer_session_remote
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `transfer_session_id` (string, required)
    The transfer session's ID.
    Example: "exampleservercopya20140206192428NtyW"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "analyze_transfer_session_remote"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


