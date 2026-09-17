# Enable or disable legacy backups

This function enables or disables legacy backups for a user.

Endpoint: GET /toggle_user_backup_state
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `user` (string, required)
    The cPanel account's username.
    Example: "username"

  - `legacy` (integer)
    Whether the account should use the legacy backup system.
* 1 - Use the legacy backup system.
* 0 - Use the standard backup system.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `data` (object)

  - `data.toggle_status` (integer)
    Whether backups are active on the account.
* 1 - Active.
* 0 - Inactive.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "toggle_user_backup_state"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result
field is 0. This field may display a success message when
a function succeeds.
    Example: "Backup state modified"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


