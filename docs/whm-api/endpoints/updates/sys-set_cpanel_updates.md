# Update cPanel & WHM update frequency

This function sets the frequency of cPanel & WHM updates.

Endpoint: GET /set_cpanel_updates
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `updates` (string, required)
    The frequency with which to run cPanel & WHM updates on a server.
- daily — Run updates daily.
- manual — Run updates manually.
- never — Never run updates.
    Enum: "daily", "manual", "never"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.updates` (string)
    The new frequency of server updates.
- daily — Run updates daily.
- manual — Run updates manually.
- never — Never run updates.
    Enum: "daily", "manual", "never"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "set_cpanel_updates"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "Cpanel update frequency set to daily"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


