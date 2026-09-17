# Return cPanel account mailboxes status by name

This function lists the status of a cPanel's mail account's mailboxes.

Important:

  When you disable the Receive Mail role, the system disables this function.

Endpoint: GET /get_mailbox_status
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `account` (any, required)
    An email account or cPanel account's username.

Note:

_mainaccount is an alias representing the cPanel user's mailbox (for example, `_mainaccount@example.com represents the example mailbox.)
    Example: "user@example.com"

## Response 200 fields (application/json):

  - `data` (object)
    Example: {"INBOX":{"guid":"111111234560f0c58d158c92a000044f","messages":42000,"vsize":42},"INBOX.Drafts":{"guid":"11111111234560f0c58d158c92a00000","messages":5,"vsize":522},"INBOX.Sent":{"guid":"1111111234560f0c58d158c92a000004","messages":1,"vsize":56},"INBOX.Trash":{"guid":"1111234560f0c58d158c92a000044f0d","messages":2001,"vsize":5643},"INBOX.angel_face@example_com":{"guid":"11234560f0c58d158c92a000044f0d23","messages":3,"vsize":1524},"INBOX.marla_singer@example_com":{"guid":"1234560f0c58d158c92a000044f0d230","messages":5,"vsize":100},"INBOX.narrator@example_com":{"guid":"11111234560f0c58d158c92a000044f0","messages":0,"vsize":0},"INBOX.robert_paulsen@example_com":{"guid":"111111111234560f0c58d158c92a0001","messages":2,"vsize":2222},"INBOX.tyler_durden@example_com":{"guid":"111234560f0c58d158c92a000044f0d2","messages":55,"vsize":12244}}

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_mailbox_status"

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


