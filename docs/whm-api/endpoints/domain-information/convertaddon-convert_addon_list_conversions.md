# Return additional domains conversion queue

This function returns a list of addon domains undergoing conversion
into cPanel accounts.

Important:

When you disable the Web Server role, the system disables this function.

Endpoint: GET /convert_addon_list_conversions
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.conversions` (array)
    List of conversions from an addon domain to an independent cPanel account.

  - `data.conversions.domain` (string)
    The addon domain to convert into a cPanel account.
    Example: "example.com"

  - `data.conversions.end_time` (integer)
    A date in Unix time format that indicates when the process ended.
    Example: 1462216653

  - `data.conversions.job_id` (integer)
    The conversion's job number.
    Example: 1

  - `data.conversions.source_acct` (string)
    The cPanel account username that owned the domain at the time of conversion.
    Example: "example"

  - `data.conversions.start_time` (integer)
    A date in Unix time format that indicates when the process started.
    Example: 1462216639

  - `data.conversions.status` (string)
    The status of the conversion process.
* DONE — The conversion is finished.
* IN PROGRESS — The conversion is in progress.
* FAILED — The conversion failed.
    Enum: "DONE", "IN PROGRESS", "FAILED"

  - `data.conversions.target_acct` (string)
    The destination user account for the conversion.
    Example: "example2"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "convert_addon_list_conversions"

  - `metadata.reason` (string)
    The reason the function failed when the metadata.result field is 0. This field may include a success message when the function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The API version of the function.
    Example: 1


