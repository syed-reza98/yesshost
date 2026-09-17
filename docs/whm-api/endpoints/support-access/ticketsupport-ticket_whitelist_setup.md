# Add Support IP addresses to firewall

This function adds cPanel Support's IP addresses to your server's firewall
whitelist. This function is firewall-specific and does not change the
cPHulk
whitelist.

Note:

* This function is not available through the command line. You must call it as
a request body.
* This function logs error messages to the
/usr/local/cpanel/logs/error_log
file.

Endpoint: GET /ticket_whitelist_setup
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.chain_status` (string)
    A message that indicates whether the whitelist setup succeeded.

* ACTIVE — A successful setup.
* ERR_SETUP — An error occurred.
    Enum: "ACTIVE", "ERR_SETUP"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "ticket_whitelist_setup"

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


