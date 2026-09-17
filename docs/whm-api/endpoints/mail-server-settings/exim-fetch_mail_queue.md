# Return server mail queue contents

This function retrieves the contents of the server's mail queue.

Endpoint: GET /fetch_mail_queue
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.records` (array)
    An array of objects that contain of the message information.

  - `data.records.frozen` (integer)
    Whether the mail message is frozen.
* 1 — Frozen.
* 0 — Not frozen.
    Enum: 0, 1

  - `data.records.msgid` (string)
    The mail message's ID.
    Example: "1UotX3-0002HX-Lr"

  - `data.records.recipients` (array)
    An array of the mail message's recipients.
    Example: ["pricilla@graceland.com"]

  - `data.records.sender` (string)
    The mail message's sender.
    Example: "elvis@graceland.com"

  - `data.records.size` (integer)
    The mail message's size in bytes.
    Example: 14336

  - `data.records.time` (integer)
    The mail message's timestamp.
    Example: 1371552781

  - `data.records.user` (string,null)
    The mail message's owner.

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "fetch_mail_queue"

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


