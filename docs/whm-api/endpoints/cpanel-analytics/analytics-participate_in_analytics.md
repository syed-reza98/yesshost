# Enable analytics data gathering

This function enables or disables
Interface Analytics.

Endpoint: GET /participate_in_analytics
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `enabled` (integer, required)
    Whether to enable Interface Analytics.

* 1 — Enable.
* 0 — Disable.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "participate_in_analytics"

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


