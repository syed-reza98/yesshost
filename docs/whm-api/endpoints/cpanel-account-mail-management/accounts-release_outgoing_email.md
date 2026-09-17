# Release cPanel account queued outgoing emails

This function releases outgoing email in the email queue for a single cPanel account user.

Note:

If mail for a cPanel user's account is suspended, the system will reject their email before the mail server puts it in queue.

Endpoint: GET /release_outgoing_email
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `user` (string, required)
    The cPanel account.
    Example: "example"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "release_outgoing_email"

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


