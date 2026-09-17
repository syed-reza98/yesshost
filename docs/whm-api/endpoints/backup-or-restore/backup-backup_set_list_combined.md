# Return backup files for the server's accounts

This function lists locally-stored and backup-destination stored backup files for the server's accounts.

Endpoint: GET /backup_set_list_combined
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.backup_set` (object)
    An object that contains an object of backup destination information.
    Example: {"cpusername1":[{"when":"2020-01-25T00:00:00.000Z","where":"local"},{"when":"2020-01-26T00:00:00.000Z","where":"local"}],"cpusername2":[{"when":"2020-01-25T00:00:00.000Z","where":"local"},{"when":"2020-01-26T00:00:00.000Z","where":"local"}]}

  - `data.destination_legend` (object)
    An object containing objects that contain the backup's destination and type information.
    Example: {"GLT1vFsVO8cqk2UWWFpJ9kSQ":{"name":"More Backups","type":"Local"}}

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "backup_set_list_combined"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


