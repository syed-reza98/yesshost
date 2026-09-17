# Return backup transport events' status

This function retrieves the status of any backup transport events on the account.

Endpoint: GET /backup_get_transport_status
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `state` (string)
    That transport's current state. If you do not specify this parameter,
the function returns the status of all transports on the account.

* completed
* failed
* pending
* running
    Enum: "completed", "failed", "pending", "running"

  - `transport_id` (string)
    The transport's identification (ID). If you do not specify this parameter,
the function returns all transports on the account.

Note:

You can use this parameter or the transport_name parameter.
    Example: "transportname"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.pages` (integer)
    The number of pages that the backup transports contain.

Note:

This return's value depends on the
[pagination variables](https://go.cpanel.net/paginationvariables)
that you pass when you call the function.
    Example: 3

  - `data.transport_status` (array)
    A list of information about each transport event.

  - `data.transport_status.date` (string)
    The backup transport event's date.
    Example: "2019-08-30T00:00:00.000Z"

  - `data.transport_status.end_timestamp` (string)
    The transport event's end time, in YYYY-MM-DD HH:MM:SS format.
    Example: "2019-08-30T02:04:06.000Z"

  - `data.transport_status.start_timestamp` (string)
    The transport event's start time, in YYYY-MM-DD HH:MM:SS format.
    Example: "2019-08-30T02:04:08.000Z"

  - `data.transport_status.status` (string)
    The transport event's status.

* completed
* failed
* pending
* running
    Example: "running"

  - `data.transport_status.transport` (string)
    The transport event's name.

Note:

If multiple transports use the same name, the system returns the first
instance of the transport with that name.
    Example: "transportname"

  - `data.transport_status.user` (string)
    The user for whom the system transported the backup.
    Example: "username"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "backup_get_transport_status"

  - `metadata.reason` (string)
    The reason the function failed when the metadata.result field is 0. This field may include a success message when the function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    - 1 — Success.
- 0 — Failed. Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The API version of the function.
    Example: 1


