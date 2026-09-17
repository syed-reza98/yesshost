# Return app contact importance setting

This function retrieves the importance level of an application's events for WHM's
Contact Manager
interface (WHM >> Home >> Server Contacts >> Contact Manager).

Note:

The system creates a notification setting for the application's events if one does
not already exist.

Endpoint: GET /get_application_contact_importance
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `app` (string, required)
    The cPanel & WHM application module's name.
    Example: "Check"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.importance` (integer)
    The importance level at which to send the notification.
* 1 — High.
* 2 — Medium.
* 3 — Low.
* 0 — Disabled.
    Enum: 1, 2, 3, 0

  - `data.name` (string)
    The text version of the importance setting.
* High
* Medium
* Low
* Disabled
    Enum: "High", "Medium", "Low", "Disabled"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_application_contact_importance"

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


