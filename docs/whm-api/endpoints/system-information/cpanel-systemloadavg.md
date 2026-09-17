# Return system load average

This function retrieves the system's load average.

Note:

The values the function returns represent a percentage of the CPU's processor capacity.

Endpoint: GET /systemloadavg
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.fifteen` (number)
    The server's load average over the previous fifteen minutes.
    Example: 0.19

  - `data.five` (number)
    The server's load average over the previous five minutes.
    Example: 0.18

  - `data.one` (number)
    The server's load average over the previous minute.
    Example: 0.17

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "systemloadavg"

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


