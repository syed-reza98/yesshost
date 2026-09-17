# Remove Support IP addresses from firewall

This function removes cPanel Support's IP addresses from your server's firewall
whitelist. This function is firewall-specific and does not change the
cPHulk
whitelist.

Note:

* This function is not available through the command line. You must call it as
a request body.
* This function logs error messages to the
/usr/local/cpanel/logs/error_log
file.

Endpoint: GET /ticket_whitelist_unsetup
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.chain_status` (string)
    A message that indicates whether the whitelist removal succeeded.

* INACTIVE — Success.
* ERR_UNSETUP — An error occurred.
    Enum: "INACTIVE", "ERR_UNSETUP"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "ticket_whitelist_unsetup"

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


