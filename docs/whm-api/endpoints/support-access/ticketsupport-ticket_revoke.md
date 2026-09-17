# Delete Support SSH key

This function removes a
cPanel Customer Portal
SSH key from the server.

Note:

This function is not available through the command line. You must call it
as a request body.

Endpoint: GET /ticket_revoke
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `server_num` (integer, required)
    The server's ID number.
    Example: 1

  - `ssh_username` (string, required)
    The username for incoming SSH connections before they escalate to the root user.
    Example: "username"

  - `ticket_id` (integer, required)
    The support ticket's ID number.
    Example: 999999999

## Response 200 fields (application/json):

  - `data` (object)

  - `data.chain_status` (string)
    The status of the
[iptables](https://netfilter.org/projects/iptables/index.html)
whitelist entries.

* ACTIVE — The system added the appropriate whitelist entries or they
already existed.
* INACTIVE — The whitelist entries were successfully removed or were
already deleted.
* ERR_SETUP — The system failed to add the whitelist entries.
* ERR_UNSETUP — The system failed to remove the whitelist entries.
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
    The status of the /etc/hosts.allow file's whitelist
entries.

* ACTIVE — The system added the appropriate /etc/hosts.allow file whitelist
entries or they already existed.
* INACTIVE — The /etc/hosts.allow file whitelist entries were successfully
removed or they were already deleted.
* ERR_SETUP — The system failed to add the /etc/hosts.allow file whitelist entries.
* ERR_UNSETUP — The system failed to remove the /etc/hosts.allow file whitelist
entries.
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

* ticket_system_log_entry — The function could not record the grant operation
in the ticket.
* audit_log — The function could not record the grant operation in the local
audit log.

Note:

The system stores the local audit log in the
/var/cpanel/logs/supportauth/audit.log file.
    Enum: "ticket_system_log_entry", "audit_log"

  - `data.revoked_keys` (integer)
    The total number of revoked SSH keys.
    Example: 1

  - `data.server_num` (integer)
    The server's ID number.
    Example: 2

  - `data.ssh_username` (string)
    The username for incoming SSH connections before they escalate to the root user.
    Example: "username"

  - `data.ticket_id` (integer)
    The revoked support ticket's ID number.
    Example: 999999999

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "ticket_revoke"

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


