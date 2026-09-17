# Validate Support SSH connection

This function initiates an SSH connection test.

Important:

This function is not available through the command line. You must call it
as a request body.

Endpoint: GET /ticket_ssh_test_start
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `server_num` (integer, required)
    An integer that represents the ticket's actionable server. Increment the value by one for each server in the support ticket.
    Example: 1

  - `ticket_id` (integer, required)
    The support ticket number that other functions can use to query or make additional changes to the support ticket.
    Example: 7648492

## Response 200 fields (application/json):

  - `data` (object)

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "ticket_ssh_test_start"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


