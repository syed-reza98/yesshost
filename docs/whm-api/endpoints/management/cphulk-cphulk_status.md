# Return login security status

This function returns the status of the cPHulk service.

Endpoint: GET /cphulk_status
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.is_enabled` (integer)
    Whether the cPHulk service is enabled.
* 1 - cPHulk is enabled.
* 0 - cPHulk is disabled.
    Enum: 0, 1

  - `data.service` (string)
    The cPHulk service's name.
    Example: "cPHulk"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "cphulk_status"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result
field is 0. This field may display a success message when
a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


