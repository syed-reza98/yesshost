# Return Support ticket status

This function lists all active and open support tickets from the
cPanel Customer Portal.

Note:

This function is not available through the command line. You must call
it as a request body.

Endpoint: GET /ticket_list
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `server_num` (integer, required)
    The server's ID number.
    Example: 2

  - `ticket_id` (integer, required)
    The ticket's ID number.
    Example: 999999999

  - `ssh_username` (string)
    The username for incoming SSH connections before they escalate to the root user. If you do not specify a value, the function will select the user from the ticket.
    Example: "username"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.auths` (array)
    An array of objects containing the ticket authorization information.

  - `data.auths.servers` (array)
    An array of objects containing the server information.

  - `data.auths.servers.auth_status` (string)
    The installation status.

* AUTHED
* NOT_AUTHED
* EXPIRED
    Enum: "AUTHED", "NOT_AUTHED", "EXPIRED"

  - `data.auths.servers.auth_time` (integer)
    When the grant happened, in
[Unix time format](http://en.wikipedia.org/wiki/Unix_time).
    Example: 1400603208

  - `data.auths.servers.server_name` (string)
    The server's human-readable description, from the
[cPanel Customer Portal](https://tickets.cpanel.net/).
    Example: "My Server"

  - `data.auths.servers.server_num` (integer)
    The server's ID number.
    Example: 2

  - `data.auths.servers.ssh` (string)
    The server's IP address and port number for SSH connections.
    Example: "10.11.12.13:22"

  - `data.auths.servers.ssh_username` (string)
    The username for incoming SSH connections before they escalate to the root user.
    Example: "username"

  - `data.auths.servers.whm_ip` (string)
    The server's IP address for WHM connections.
    Example: "10.11.12.13"

  - `data.auths.ticket_id` (integer)
    The ticket's ID number.
    Example: 999999999

  - `data.auths.ticket_status` (string)
    The ticket's status.

* OPEN
* CLOSED
* UNKNOWN
    Enum: "OPEN", "CLOSED", "UNKNOWN"

  - `data.auths.ticket_subject` (string)
    The ticket's subject line.
    Example: "Example ticket"

  - `data.non_fatals` (array)
    Any non-fatal errors.

* ticket_system_log_entry — The function could not record the grant
operation in the ticket.
* audit_log — The function could not record the grant operation in the
local audit log.

Note:

The system stores the local audit log in the
/var/cpanel/logs/supportauth/audit.log file.
    Example: []

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "ticket_list"

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


