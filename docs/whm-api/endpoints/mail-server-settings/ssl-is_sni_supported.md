# Return server SNI support status

This function checks whether the server supports SNI (Server Name Indication).

Note:

  * Functions that enable Mail SNI succeed with a warning that Mail SNI is always enabled.
  * Functions that disable Mail SNI fail and make no changes.

Endpoint: GET /is_sni_supported
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.sni` (integer)
    Whether the server supports SNI.
- 1 — SNI supported.
- 0 — SNI not supported.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "is_sni_supported"

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


