# Return AutoSSL check script cron entry

This function returns the cron entry for the autossl_check.pl AutoSSL certificate check script.

Endpoint: GET /get_autossl_check_schedule
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.cron` (array)
    A list of the time elements of a cron entry that schedules when the script will run. For more information about each element in a cron entry, read the [Cron Wikipedia article](https://en.wikipedia.org/wiki/Cron).
    Example: ["54 1 * * *"]

  - `data.next_time` (string)
    The next time that the script will run. A time value, in [ISO-8601](http://www.iso.org/iso/home/standards/iso8601.htm) format.
    Example: "2016-06-09T06:00:00.000Z"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_autossl_check_schedule"

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


