# Return Contact Manager event importance settings

This function lists the importance of all application events in
WHM's
Contact Manager
interface (WHM >> Home >> Server Contacts >> Contact Manager).

Endpoint: GET /get_all_contact_importances
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.importances` (array)
    An array of objects containing event importance information.

  - `data.importances.app` (string)
    The cPanel & WHM module's name.
    Example: "wwwacct"

  - `data.importances.event` (string)
    The event's name.

Note:

An asterisk character (*) represents all events in the module.
    Example: "*"

  - `data.importances.importance` (integer)
    The importance of the contact event:

* 1 — High.
* 2 — Medium.
* 3 — Low.
* 0 — Disabled.

  - `data.importances.name` (string)
    The contact event's name:

* High
* Medium
* Low
* Disabled
    Example: "High"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_all_contact_importances"

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


