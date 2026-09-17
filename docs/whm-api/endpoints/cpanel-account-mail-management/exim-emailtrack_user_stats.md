# Return all cPanel accounts email tracking statistics

This function retrieves email tracking statistics for each user.

Endpoint: GET /emailtrack_user_stats
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `deliverytype` (string)
    The type of delivery to query. If you do not specify a value,
this function returns all types.
* remote
* remote-or-faildefer
* local
    Enum: "remote", "remote-or-faildefer", "local"

  - `endtime` (integer)
    The end time of the search window.
    Example: 1471552781

  - `sender` (string)
    The sender's email address. If you do not specify a value, this function returns entries for mail from all senders.
    Example: "username@example.com"

  - `starttime` (integer)
    The start time of the search window.
    Example: 1371552781

## Response 200 fields (application/json):

  - `data` (object)

  - `data.records` (array)
    An array of objects containing the message information.

  - `data.records.DEFERCOUNT` (integer)
    The number of deferral events.

  - `data.records.DEFERFAILCOUNT` (integer)
    The number of messages that the system deferred and failed to deliver.

  - `data.records.DOMAIN` (string)
    The mailbox's domain.
    Example: "example.com"

  - `data.records.FAILCOUNT` (integer)
    The number of delivery failures.

Note:

 If you assign a message three recipients, the system can fail to deliver the message three times.

  - `data.records.OWNER` (string)
    The mailbox's account owner.
    Example: "root"

  - `data.records.PRIMARY_DOMAIN` (string)
    The mailbox account's primary domain.
    Example: "example.com"

  - `data.records.REACHED_MAXDEFERFAIL` (integer)
    Whether the mailbox reached the maximum number of failed deferred messages.
* 1 — Reached.
* 0 — Has not reached.
    Enum: 0, 1

  - `data.records.REACHED_MAXEMAILS` (integer)
    Whether the mailbox has reached the maximum number of messages allowed per hour.
* 1 — Reached.
* 0 — Has not reached.
    Enum: 0, 1

  - `data.records.SENDCOUNT` (integer)
    The number of sent messages.
    Example: 14

  - `data.records.SUCCESSCOUNT` (integer)
    The number of successful deliveries.

Note:

 If you assign a message three recipients, the system can successfully deliver the message three times.
    Example: 14

  - `data.records.TOTALSIZE` (integer)
    The total size of messages sent by the server.
    Example: 27444

  - `data.records.USER` (string)
    The mailbox's owner.
    Example: "example"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "emailtrack_user_stats"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success
* 0 — Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


