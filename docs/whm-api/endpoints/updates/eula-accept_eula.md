# Save EULA acceptance

This function records acceptance of cPanel & WHM's legal terms. To do this, the function creates a touchfile in the /var/cpanel/activate/ directory and writes an acceptance audit record to /var/cpanel/activate/eula_acceptance.json. The audit record captures the accepting user, timestamp, remote IP address, agreement version, and agreement URLs.

Important:

  Server owners must accept these agreements before they use cPanel & WHM.

Endpoint: GET /accept_eula
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "accept_eula"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result
field is 0. This field may display a success message when
a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


