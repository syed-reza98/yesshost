# Return Greylisting status

This function returns the status of Greylisting.

Endpoint: GET /cpgreylist_status
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.is_enabled` (integer)
    Whether Greylisting is enabled.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.is_exim_enabled` (integer)
    Whether Exim is enabled.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.service` (string)
    The name of the service.
    Example: "cPGreyList"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "cpgreylist_status"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result
field is 0. This field may display a success message when
a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


