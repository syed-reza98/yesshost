# Validate Support IP addresses on firewall

This function checks whether the server's firewall whitelist correlates
with the granted support tickets. You can view granted support tickets in
WHM's
Grant cPanel Support Access
interface (WHM >> Home >> Support >> Grant cPanel Support Access).

Note:

This function is not available through the command line. You must call it as
a request body.

Endpoint: GET /ticket_whitelist_check
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.chain_status` (string)
    The status of the server's firewall whitelist.

* ACTIVE — The whitelist is active.
* INACTIVE — The whitelist is inactive.
    Enum: "ACTIVE", "INACTIVE"

  - `data.problem` (string)
    message that indicates whether a problem exists with the current status.
* NO — The firewall does not require changes.
* NEED_SETUP — You have granted cPanel Support access, but the system's
firewall whitelist does not contain support's IP addresses.
* NEED_UNSETUP — The system detected that no cPanel Support access
grants exist, but the system's firewall whitelist contains support's IP
addresses.
    Enum: "NO", "NEED_SETUP", "NEED_UNSETUP"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "ticket_whitelist_check"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


