# Return dates where backup files exist

This function lists the dates where backup file exists, whether stored locally or stored on remote backup destinations when local backups are disabled.

Endpoint: GET /backup_date_list
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.backup_set` (array)
    A list of dates containing the backup files.
    Example: ["2019-02-12T00:00:00.000Z","2019-02-12T00:00:00.000Z","2019-02-12T00:00:00.000Z"]

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "backup_date_list"

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


