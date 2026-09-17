# Return cPanel account email tracking statistics

This function retrieves email tracking statistics.

Endpoint: GET /emailtrack_stats
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `deliverytype` (string)
    The type of delivery to query. If you do not specify a value,
this function returns all types.
* remote
* remote-or-faildefer
* local
    Enum: "remote", "remote-or-faildefer", "local"

  - `enddate` (integer)
    The end date of the search window. This parameter defaults to the current time.

Note

This parameter is an alias for endtime and is provided for backwards compatibility.
    Example: 1471552781

  - `endtime` (integer)
    The end time of the search window. This parameter defaults to the current time.

Note

You can also call this the enddate parameter.
    Example: 1471552781

  - `nosize` (integer)
    Whether to return the TOTALSIZE parameter.
* 1 — Do not return.
* 0 — Return.
    Enum: 0, 1

  - `nosuccess` (integer)
    Whether to return the SUCCESSCOUNT parameter.
* 1 — Do not return.
* 0 — Return.
    Enum: 0, 1

  - `startdate` (integer)
    The start date of the search window.

Note

This parameter is an alias for starttime and is provided for backwards compatibility.
    Example: 1371552781

  - `starttime` (integer)
    The start time of the search window.

Note

You can also call this the startdate parameter.
    Example: 1371552781

  - `user` (string)
    The cPanel username to query. If you do not specify a value, the function retrieves statistics for all of the server's accounts.
    Example: "username"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.records` (array)
    An array of objects containing the message information.

  - `data.records.DEFERCOUNT` (integer)
    The number of deferral events.

  - `data.records.DEFERFAILCOUNT` (integer)
    The number of messages that the system deferred and failed to deliver.

  - `data.records.FAILCOUNT` (integer)
    The number of delivery failures.

Note:

 If a message has three recipients, it can have a total of three failed deliveries.

  - `data.records.INPROGRESSCOUNT` (integer)
    The number of messages currently in progress.

  - `data.records.SENDCOUNT` (integer)
    The number of sent messages.
    Example: 14

  - `data.records.SUCCESSCOUNT` (integer)
    The number of successful deliveries.

Note:

 If a message has three recipients, it can have a total of three successful deliveries.
    Example: 14

  - `data.records.TOTALSIZE` (integer)
    The total size of messages that the server sent.
    Example: 27444

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "emailtrack_stats"

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


