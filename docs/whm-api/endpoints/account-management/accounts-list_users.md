# Return root and cPanel accounts

This function lists the cPanel user accounts and the root user on the server.

Endpoint: GET /list_users
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.users` (array)
    A list of cPanel user accounts. The list may consist of the following types of accounts:

* A valid cPanel username.
* root
    Example: ["example","root"]

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "list_users"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0.

Note:

This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


