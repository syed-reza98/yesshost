# Return cPanel account's email accounts

This function lists a cPanel account’s email accounts. To prevent falsified data or symlink exploitation, the function uses the specified cPanel account user, rather than root user, to read data from the user’s home directory. The system compares the collected data from the user’s home directory to a server-wide domains list. The comparison of the data validates whether you can trust the data.

Important:

  When you disable the Receive Mail role, the system disables this function.

Endpoint: GET /list_pops_for
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `user` (string, required)
    The cPanel account user for which to list all owned email accounts.
    Example: "example"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.pops` (array)
    An array of email accounts that the cPanel user owns.
    Example: ["example1@example.com"]

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "list_pops_for"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


