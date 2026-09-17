# Remove email account messages by Dovecot query

This function removes mail messages from a cPanel account that you select with a query.

Important:

  When you disable the Receive Mail role, the system disables this function.

Endpoint: GET /expunge_mailbox_messages
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `account` (string, required)
    An email account that exists on the server.
    Example: "user@example.com"

  - `mailbox` (string, required)
    A mailbox name on the account.

Note:

  Because you cannot escape wildcard characters such as (*), we recommend that you use functions that use the mailbox_guid parameter instead. For example, the WHM API 1 expunge_messages_for_mailbox_guid function.
    Example: "INBOX"

  - `query` (string, required)
    A Dovecot search query to select which messages you wish to remove from the mailbox.
    Example: "savedbefore 52w"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "expunge_mailbox_messages"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


