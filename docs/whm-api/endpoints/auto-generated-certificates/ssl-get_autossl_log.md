# Return AutoSSL log file's contents

This function returns the contents of an AutoSSL log file.

Endpoint: GET /get_autossl_log
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `start_time` (string, required)
    When the system created the log file.
    Example: "2016-06-09T14:25:37.000Z"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (array)
    Entries from an AutoSSL log.

  - `data.payload.contents` (string)
    The contents of an entry.
    Example: "This system has AutoSSL set to use cPanel (powered by Sectigo)."

  - `data.payload.indent` (integer)
    The level of indentation to display.

  - `data.payload.partial` (integer)
    We do not currently use this return.
    Enum: 0

  - `data.payload.pid` (integer)
    The AutoSSL process’s ID.
    Example: 29189

  - `data.payload.timestamp` (string)
    When the system created the log file entry.
    Example: "2016-06-09T14:25:37.000Z"

  - `data.payload.type` (string)
    The type of log file entry.

* out (WHM's _Manage AutoSSL_ interface represents this type as info.)
* warn
* success
* failure
    Enum: "out", "warn", "success", "failure"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_autossl_log"

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


