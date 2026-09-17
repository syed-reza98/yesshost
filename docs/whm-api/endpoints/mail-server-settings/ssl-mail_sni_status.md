# Return domain's SNI mail services status

This function retrieves the status of the domain's SNI mail services.

Note:

Functions that disable Mail SNI fail and make no changes.

Endpoint: GET /mail_sni_status
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    The account's domain.
    Example: "example.com"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.enabled` (integer)
    Whether SNI for mail is enabled.
- 1 — Enabled.
- 0 — Disabled.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "mail_sni_status"

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


