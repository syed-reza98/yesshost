# Save data to NVData file

This function is used to save personalization data for a WHM user to a
datastore on disk.

We call this system cPanel NVData. 

cPanel NVData is a per-login configuration storage mechanism that you can use to
maintain persistent user interface settings across multiple sessions.

This includes custom settings for your own themes and plugins.

This function is used to save personalzation data for WHM users only. If you want to save personalization data for cPanel users, use the
UAPI function personalization_set.

Endpoint: POST /personalization_set
Version: 11.138.0.6
Security: BasicAuth

## Request fields (application/json):

  - `api.version` (integer, required)
    The WHM API version number
    Enum: 1

  - `personalization` (object, required)
    An object you want to store.
    Example: {"coffee":"hot","milk":"cold"}

  - `store` (string)
    The name under which the values will be stored.
    Example: "beverages"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.personalization` (object)
    The saved personalization information on the server.
    Example: {"coffee":{"reason":"OK","success":1,"value":"hot"},"milk":{"reason":"OK","success":1,"value":"cold"}}

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "personalization_set"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


