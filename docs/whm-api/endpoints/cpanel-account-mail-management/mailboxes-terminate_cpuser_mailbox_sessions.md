# Stop cPanel account IMAP and POP3 connections

This function terminates all IMAP and POP3 connections for a cPanel account.

Note:

This function ends connections for every email address, which includes the default address.

Endpoint: GET /terminate_cpuser_mailbox_sessions
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `username` (string, required)
    The cPanel account's username.
    Example: "username"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "terminate_cpuser_mailbox_sessions"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    - 1 - Success
- 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


