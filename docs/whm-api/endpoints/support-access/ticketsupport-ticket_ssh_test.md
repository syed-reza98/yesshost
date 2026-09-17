# Validate Customer Portal connection

This function verifies the connection from the
cPanel Customer Portal
to the server.

Note:

This function is not available through the command line. You must call it as
a request body.

Endpoint: GET /ticket_ssh_test
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `server_num` (integer, required)
    The server's ID number.
    Example: 2

  - `ticket_id` (integer, required)
    The ticket's ID number.
    Example: 999999999

## Response 200 fields (application/json):

  - `data` (object)

  - `data.non_fatals` (array)
    A list of non-fatal errors, if any exist.

* ticket_system_log_entry — The function could not record the grant operation
in the ticket.
* audit_log — The function could not record the grant operation in the local
audit log. The system stores the local audit log in the /var/cpanel/logs/supportauth/audit.log
file.
    Enum: "ticket_system_log_entry", "audit_log"

  - `data.result` (string)
    The SSH test's result.
    Example: "SUCCESS"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "ticket_ssh_test"

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


