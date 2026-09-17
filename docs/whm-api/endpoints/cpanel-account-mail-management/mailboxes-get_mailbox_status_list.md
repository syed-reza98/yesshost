# Return cPanel account mailboxes status list

This function lists the status of a cPanel's mail account's mailboxes.

Important:

  When you disable the Receive Mail role, the system disables this function.

Endpoint: GET /get_mailbox_status_list
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `account` (string, required)
    The email account's name.
    Example: "user@example.com"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.mailboxes` (array)
    An array that contains information about the mailbox's contents.

  - `data.mailboxes.guid` (string)
    The alpha-numeric 32-byte mailbox GUID.
    Example: "1234560f0c58d158c92a000044f0d230"

  - `data.mailboxes.mailbox` (string)
    The mailbox name.
    Example: "INBOX.marla_singer@example_com"

  - `data.mailboxes.messages` (integer)
    The total number of messages in the mailbox.

  - `data.mailboxes.vsize` (integer)
    The total virtual size of the mailbox's contents, computed with CRLF line terminators.

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_mailbox_status_list"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


