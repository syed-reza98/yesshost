# Return backup configuration status

This function checks each user's backup configuration status while the backup_skip_users_all function runs.

Endpoint: GET /backup_skip_users_all_status
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.reason` (object)
    An object that contains backup configuration status information.

  - `data.reason.msg` (string)
    The function's status.
    Example: "Done"

  - `data.reason.perc` (integer)
    The percentage of users whose backup status has changed.
    Example: 100

  - `data.reason.running` (integer)
    Whether user configuration changes are still in progress.

* 1 - In Progress.
* 0 - Finished.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "backup_skip_users_all_status"

  - `metadata.reason` (any)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK."

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


