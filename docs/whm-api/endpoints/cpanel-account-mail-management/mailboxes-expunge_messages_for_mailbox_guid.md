# Remove email account messages by mailbox GUID

This function removes mail messages from a cPanel account.

Important:

  When you disable the Receive Mail role, the system disables this function.

Endpoint: GET /expunge_messages_for_mailbox_guid
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `account` (string, required)
    The email account's name.
    Example: "user@example.com"

  - `mailbox_guid` (string, required)
    The mailbox's globally unique identifier (GUID).

Note:

To find the mailbox GUID, use the WHM API 1 - get_mailbox_status function.
    Example: "2550860f0c58d158c92a000044f0d230"

  - `query` (string, required)
    The Dovecot search query to select which messages you wish to remove from the mailbox. For more information, read Dovecot's Search Query documentation.
    Example: "savedbefore 52w"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "expunge_messages_for_mailbox_guid"

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


