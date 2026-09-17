# Return AutoSSL log files

This function lists the AutoSSL feature's log files.

Endpoint: GET /get_autossl_logs_catalog
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (array)
    An array of objects that contain information about an AutoSSL log file.

  - `data.payload.in_progress` (integer)
    Whether AutoSSL is in progress.
* 1 — AutoSSL is in progress.
* 0 — AutoSSL is not in progress.
    Enum: 0, 1

  - `data.payload.provider` (string)
    The AutoSSL provider's name.
    Example: "cPanel"

  - `data.payload.start_time` (string)
    When the system created the log file.
    Example: "2016-06-09T14:25:37.000Z"

  - `data.payload.username` (string)
    The user that corresponds to the AutoSSL log entry.
* The username of a cPanel user that the account owns.
  — All users.
    Example: "username"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_autossl_logs_catalog"

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


