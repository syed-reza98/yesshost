# Return conversion status for additional domain

This function returns the status of the convert addon domain to
account process for specified conversion jobs. For data about the conversion
status of all jobs, use the WHM API 1 convert_addon_fetch_conversion_details
function.

Important:

When you disable the
Web Server role,
the system disables this function.

Endpoint: GET /convert_addon_get_conversion_status
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `job_id` (integer, required)
    The conversion's job identification number.

Note:

To list entries for multiple conversion jobs, increment the parameter name. For example: job_id-0, job_id-1, and job_id-2.

## Response 200 fields (application/json):

  - `data` (object)
    An object that contains details about the conversion job's status.
    Example: {"1":{"job_end_time":1462383658,"job_id":"1","job_status":"DONE","source_acct":"user1"}}

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "convert_addon_get_conversion_status"

  - `metadata.reason` (string)
    The reason the function failed when the metadata.result field is 0. This field may include a success message when the function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The API version of the function.
    Example: 1


