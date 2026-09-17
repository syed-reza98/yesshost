# Create Support SSH key

This function installs an SSH key from the
cPanel Customer Portal.

Note:

This function is not available through the command line. You must call
it as a request body.

Endpoint: GET /ticket_grant
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `secure_id` (string, required)
    The support ticket's secure ID token.
    Example: "rofh411bv8"

  - `server_num` (integer, required)
    The server's support ticket ID number.
    Example: 1

  - `ticket_id` (integer, required)
    The support ticket's ID number.
    Example: 999999999

  - `ssh_username` (string)
    The username for incoming SSH connections before they escalate to the root user. If you do not specify a value, the function retrieves the user from the support ticket.
    Example: "username"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.auth_status` (string)
    The installation status.
    Example: "AUTHED"

  - `data.auth_time` (integer)
    When the system authorized access.
    Example: 1477338450

  - `data.chain_status` (string)
    The status of the
[iptables](https://netfilter.org/projects/iptables/index.html)
whitelist entries.

* ACTIVE — The system added the appropriate iptables whitelist
entries or they already existed.
* INACTIVE — The iptables whitelist entries were successfully
removed or were already deleted.
* ERR_SETUP — The system failed to add the iptables whitelist
entries.
* ERR_UNSETUP — The system failed to remove the iptables whitelist
entries.
* ERR_UNKNOWN — An unknown error occurred.
    Enum: "ACTIVE", "INACTIVE", "ERR_SETUP", "ERR_UNSETUP", "ERR_UNKNOWN"

  - `data.csf_wl_status` (string)
    The status of the
[ConfigServer Security & Firewall (CSF)](https://www.configserver.com/)
whitelist entries.

* ACTIVE — The system added the appropriate CSF whitelist entries or they
already existed.
* INACTIVE — The CSF whitelist entries were successfully removed or they
were already deleted.
* ERR_SETUP — The system failed to add the CSF whitelist entries.
* ERR_UNSETUP — The system failed to remove the CSF whitelist entries.
* ERR_UNKNOWN — An unknown error occurred.

Note:

If CSF does not exist on the server, the function will not
display this return.
    Enum: "ACTIVE", "INACTIVE", "ERR_SETUP", "ERR_UNSETUP", "ERR_UNKNOWN"

  - `data.host_access_wl_status` (string)
    The status of the /etc/hosts.allow file's whitelist entries.

* ACTIVE — The system added the appropriate /etc/hosts.allow file whitelist
entries or they already existed.
* INACTIVE — The /etc/hosts.allow file whitelist entries were successfully
removed or they were already deleted.
* ERR_SETUP — The system failed to add the /etc/hosts.allow file whitelist
entries.
* ERR_UNSETUP — The system failed to remove the /etc/hosts.allow file
whitelist entries.
* ERR_UNKNOWN — An unknown error occurred.
    Enum: "ACTIVE", "INACTIVE", "ERR_SETUP", "ERR_UNSETUP", "ERR_UNKNOWN"

  - `data.hulk_wl_status` (string)
    The status of the
[cPHulk](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection/)
whitelist entries.

* ACTIVE — The system added the appropriate cPHulk whitelist entries or they
already existed.
* INACTIVE — The cPHulk whitelist entries were successfully removed or they
were already deleted.
* ERR_SETUP — The system failed to add the cPHulk whitelist entries.
* ERR_UNSETUP — The system failed to remove the cPHulk whitelist entries.
* ERR_UNKNOWN — An unknown error occurred.
    Enum: "ACTIVE", "INACTIVE", "ERR_SETUP", "ERR_UNSETUP", "ERR_UNKNOWN"

  - `data.non_fatals` (array)
    Any non-fatal errors.

* ticket_system_log_entry — The function could not record the grant
operation in the ticket.
* audit_log — The function could not record the grant operation in the
local audit log.

Note:

The system stores the local audit log in the
/var/cpanel/logs/supportauth/audit.log
file.
    Enum: "ticket_system_log_entry", "audit_log"

  - `data.server_name` (string)
    The server's human-readable description from the
[cPanel Customer Portal](https://tickets.cpanel.net/).
    Example: "example"

  - `data.server_num` (integer)
    The server's ID number.
    Example: 1

  - `data.ssh_username` (string)
    The username for incoming SSH connections before they escalate the root user.
    Example: "username"

  - `data.ticket_id` (integer)
    The support ticket's ID number.
    Example: 999999999

  - `data.ticket_status` (string)
    The support ticket's status.

* OPEN
* CLOSED
* UNKNOWN
    Enum: "OPEN", "CLOSED", "UNKNOWN"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "ticket_grant"

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


