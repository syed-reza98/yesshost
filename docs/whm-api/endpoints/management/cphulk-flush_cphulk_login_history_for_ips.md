# Remove login security IP address block

This function removes specific login history entries from the cPHulk database. Use this function to unblock one or more IP addresses.

Endpoint: GET /flush_cphulk_login_history_for_ips
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `ip` (array, required)
    The record's IP address.

Note:

 To unblock multiple IP addresses, increment the parameter name (for example, to unblock three IP addresses, use the ip-1, ip-2, and ip-3 parameters).

## Response 200 fields (application/json):

  - `data` (object)

  - `data.iptable_bans_removed` (integer)
    The number of iptables temporary block rules that the function deleted.
    Example: 1

  - `data.records_removed` (integer)
    The number of entries that the function deleted.
    Example: 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "flush_cphulk_login_history_for_ips"

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


