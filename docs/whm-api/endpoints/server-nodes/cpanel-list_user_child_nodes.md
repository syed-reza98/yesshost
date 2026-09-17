# Return cPanel accounts with server name and type

This function returns the system's cPanel accounts and the linked cPanel & WHM server on which they exist.

Endpoint: GET /list_user_child_nodes
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (array)
    A list of cPanel accounts and the linked cPanel & WHM servers on which they exist.

  - `data.payload.alias` (string)
    The name (alias) of the linked cPanel & WHM server.
    Example: "MailServer1"

  - `data.payload.type` (string)
    The linked [cPanel & WHM server's profile](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles).
* Mail - A server set as a mail node.
    Enum: "Mail"

  - `data.payload.user` (string)
    The cPanel account username.
    Example: "username1"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "list_user_child_nodes"

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


