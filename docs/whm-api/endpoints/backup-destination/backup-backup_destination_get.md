# Return a backup destination's settings

Use this function to obtain a backup destination's settings.

Endpoint: GET /backup_destination_get
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `id` (string, required)
    The backup destination's ID.
    Example: "0W1ei2rd3A4lI5sT6he7Be8st"

## Response 200 fields (application/json):

  - `data` (any)

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "backup_destination_get"

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


