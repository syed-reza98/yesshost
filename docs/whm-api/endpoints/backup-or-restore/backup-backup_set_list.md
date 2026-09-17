# Return backup files in the local disk

This function lists backup files for the server's accounts in the local disk.

Endpoint: GET /backup_set_list
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.backup_set` (object)
    hash of a user's backup information. This hash includes the user and backup_date returns.

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "backup_set_list"

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


