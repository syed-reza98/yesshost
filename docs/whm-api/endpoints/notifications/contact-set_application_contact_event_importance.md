# Update app's event contact importance setting

This function sets the importance level of an application event for WHM's
Contact Manager
interface (WHM >> Home >> Server Contacts >> Contact Manager).

For a list of available modules, use the WHM API 1
get_all_contact_importances
function.

Note:

The system creates a notification setting for the application's events
if one does not already exist.

Endpoint: GET /set_application_contact_event_importance
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `app` (string, required)
    The cPanel & WHM application module's name.
    Example: "Check"

  - `event` (string, required)
    The event's name.
    Example: "SecurityAdvisorStateChange"

  - `importance` (string, required)
    The importance level at which to send the notification.

* High
* Medium
* Low
* Disabled
    Enum: "High", "Medium", "Low", "Disabled"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "set_application_contact_event_importance"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


