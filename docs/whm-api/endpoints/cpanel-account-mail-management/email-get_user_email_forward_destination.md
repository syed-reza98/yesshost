# Return cPanel account forward destination

This function retrieves the destination to which the system forwards a system account's email.

Note:

* Usually, the system sends notices about the server's problems and activity to the root account.
* If you do not use the suexec module, the nobody user receives bounce messages from email that CGI scripts send.

Endpoint: GET /get_user_email_forward_destination
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `user` (string, required)
    The system account name.
    Example: "root"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.forward_to` (array)
    The system accounts or email addresses to which the system forwards the account's email.
    Example: ["user@example.com"]

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_user_email_forward_destination"

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


