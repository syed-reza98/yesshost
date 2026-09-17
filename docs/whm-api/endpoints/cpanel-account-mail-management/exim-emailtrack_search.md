# Return email delivery records by search criteria

This function retrieves email delivery records.

Warning:

* On most servers, this function returns a large amount of output. We strongly
recommend that you filter and
sort the output.
* The following example uses the filter and sort options:

  https://hostname.example.com:2087/cpsess##########/json-api/emailtrack_search?api.version=1&api.filter.enable=1&api.filter.a.field=sendunixtime&api.filter.a.arg0=1628889719&api.filter.a.type=gt&api.filter.b.field=sendunixtime&api.filter.b.arg0=1629847321&api.filter.b.type=lt&api.sort.enable=1&api.sort.a.field=sendunixtime&api.sort.a.reverse=0&api.chunk.enable=1&api.chunk.size=25&api.chunk.start=1&success=1

Endpoint: GET /emailtrack_search
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `defer` (integer)
    Whether to return delivery deferral events.
* 1 — Return delivery deferral events.
* 0 — Do not return delivery deferral events.
    Enum: 0, 1

  - `deliverytype` (string)
    The type of delivery records to retrieve.
* all — Retrieve all delivery records.
* remote — Retrieve remote delivery records.
* local — Retrieve local delivery records.
    Enum: "all", "remote", "local"

  - `failure` (integer)
    Whether to return delivery failure events.
* 1 — Return delivery failure events.
* 0 — Do not return delivery failure events.
    Enum: 0, 1

  - `inprogress` (integer)
    Whether to return delivery attempts in progress.
* 1 — Return delivery attempts in progress.
* 0 — Do not return delivery attempts in progress.
    Enum: 0, 1

  - `max_results_by_type` (integer)
    The number of results to return for each type.

Note

If you set this parameter to 0, the function returns unlimited results.
    Example: 3

  - `success` (integer)
    Whether to return successful delivery attempts.
* 1 — Return successful delivery attempts.
* 0 — Do not return successful delivery attempts.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `data` (object)

  - `data.records` (array)
    An array of objects containing the delivery record.

  - `data.records.actiontime` (string)
    When the delivery attempt happened in YYYY-MM-DD HH-mm-SS format.
    Example: "2012-02-06T14:17:51.000Z"

  - `data.records.actionunixtime` (integer)
    When the delivery attempt happened.
    Example: 1328559471

  - `data.records.deliveredto` (string,null)
    The delivery attempt's final end point.

Note:

 If the message went to a mailing list, the address will be the mailing list member's address.

  - `data.records.deliverydomain` (string,null)
    The recipient's domain.

  - `data.records.deliveryuser` (string,null)
    The recipient's username.

  - `data.records.domain` (string)
    The sender's domain.
    Example: "example.com"

  - `data.records.host` (string,null)
    The hostname that received the message.

  - `data.records.ip` (string,null)
    The recipient's IP address.

  - `data.records.message` (string)
    The action taken.
    Example: "Domain example.com has exceeded the max defers and failures per hour (5/5 (100%)) allowed. Message discarded."

  - `data.records.msgid` (string)
    The message ID.
    Example: "1RuV0Z-0005NR-BN"

  - `data.records.recipient` (string)
    The recipient's mail address.
    Example: "user@example.com"

  - `data.records.router` (string)
    The mail server's internal router name.
    Example: "enforce_mail_permissions"

  - `data.records.sender` (string)
    The sender's full email address.
    Example: "user@example.com"

  - `data.records.senderauth` (string)
    The user authentication.
    Example: "localuser"

  - `data.records.senderhost` (string)
    The sender's hostname.
    Example: "localhost"

  - `data.records.senderip` (string)
    The sender's IP address.
    Example: "127.0.0.1"

  - `data.records.sendunixtime` (integer)
    When the message was sent.
    Example: 1328559471

  - `data.records.size` (integer)
    The message's size.
    Example: 1653

  - `data.records.spamscore` (integer)
    The message's spam score.

Note:

If the spam prevention engine uses a result range from 0 to 1 , the system multiplies the result by 10.
    Example: 5

  - `data.records.transport` (string,null)
    The mail transfer agent (MTA).

  - `data.records.transport_is_remote` (integer)
    Whether the mail transfer agent (MTA) is remote.
* 1 — Remote.
* 0 — Not remote.
    Enum: 0, 1

  - `data.records.type` (string)
    The delivery status.
* success
* defer
* failure
* inprogress
    Enum: "success", "defer", "failure", "inprogress"

  - `data.records.user` (string)
    The sender's username.
    Example: "cpanel1"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "emailtrack_search"

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


