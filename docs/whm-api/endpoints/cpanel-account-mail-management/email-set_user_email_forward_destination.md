# Update cPanel account email forward destination

This function sets the destination to which the system forwards a system account's email.

Notes:

* Usually, the system sends notices about the server's problems and activity to the root account.
* If you do not use the suexec module, the nobody user receives bounce messages from email that CGI scripts send.

Endpoint: GET /set_user_email_forward_destination
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `forward_to` (string, required)
    The system account name or email address to which you wish to forward email.

Note:

To forward messages to multiple accounts or email addresses, use a comma-separated list.
    Example: "user"

  - `user` (string, required)
    The system account name to forward.
    Example: "root"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "set_user_email_forward_destination"

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


