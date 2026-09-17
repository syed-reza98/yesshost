# Create remote server transfer session

This function creates a transfer session with a non-root user to a remote server.

Important:

* The source and target servers must be able to communicate over port 2087 to use this feature.
* The source and target servers must also be able to communicate over the port that your servers use for SSH connections.
* For more information about the ports that cPanel & WHM uses, read our How to Configure Your Firewall for cPanel & WHM Services documentation.

Note:

For more information about how this function works with other functions in the transfer and restore process, read our Guide to Transfer and Restore API Functions documentation.

Endpoint: GET /create_remote_user_transfer_session
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `host` (string, required)
    The server hostname for the account.
    Example: "hostname.example.com"

  - `password` (string, required)
    The account's password.
    Example: "12345luggage"

  - `unrestricted_restore` (integer, required)
    Whether to skip the Restricted Restore process.
* 1 - Skip Restricted Restore.
* 0 - Use Restricted Restore.

Note:

You must set this parameter to a value of 1.
    Enum: 1

## Response 200 fields (application/json):

  - `data` (object)

  - `data.transfer_session_id` (string)
    The transfer session's ID.
    Example: "vm5docscpanelnoroo201402251939519hmy"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "create_remote_user_transfer_session"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


