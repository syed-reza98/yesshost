# Update background process stopper

This function configures the server's background process killer.

Endpoint: GET /configurebackgroundprocesskiller
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `processes_to_kill` (string, required)
    A process to kill in the /usr/local/cpanel/etc/sym directory.

Note:

To enable the background killer for multiple processes, duplicate or increment the parameter name.

For example, processes_to_kill, processes_to_kill-0, and processes_to_kill-1.

  - `trusted_users` (string)
    Unaffected users. If you do not specify a value, the function affects all of the users on the server.

Note:

To trust multiple users, duplicate or increment the parameter name.

For example, trusted_users, trusted_users-0, and trusted_users-1.
    Example: "user"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "configurebackgroundprocesskiller"

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


