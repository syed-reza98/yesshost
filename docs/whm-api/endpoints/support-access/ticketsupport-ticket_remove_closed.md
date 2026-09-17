# Delete Support SSH key and closed tickets

This function removes cPanel Support's SSH keys and removes closed
support tickets. You can view closed support tickets in WHM's
Grant cPanel Support Access
interface (WHM >> Home >> Support >> Grant cPanel Support Access).

Note:

This function is not available through the command line. You must call
it as a request body.

Endpoint: GET /ticket_remove_closed
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.chain_status` (string)
    The status of the iptables whitelist entries.

* ACTIVE — The system added the appropriate iptables whitelist entries,
or they already existed.
* INACTIVE — The system successfully removed the iptables whitelist
entries, or they did not exist.
* ERR_SETUP — The system failed to add the iptables whitelist entries.
* ERR_UNSETUP — The system failed to remove the iptables whitelist entries.
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

* ticket_system_log_entry — The function could not record the grant operation
in the ticket.
* audit_log — The function could not record the grant operation in the local
audit log.

Note:

The system stores the local audit log in the
/var/cpanel/logs/supportauth/audit.log file.
    Enum: "ticket_system_log_entry", "audit_log"

  - `data.revoked_keys` (integer)
    The total number of SSH keys that the system removed.
    Example: 9

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "ticket_remove_closed"

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


