# Enable or disable backups

This function enables and disables the backup and legacy backups.

Endpoint: GET /backup_skip_users_all
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `backupversion` (string, required)
    The type of backup.
  * backup - Standard backups.
  * legacy - Legacy backups.
    Enum: "backup", "legacy"

  - `state` (integer, required)
    Whether to enable the backup type that the backupversion parameter
specifies for all users.
  * 1 - Enable.
  * 0 - Disable.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "backup_skip_users_all"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result
field is 0. This field may display a success message when
a function succeeds.
    Example: "Configuration update process started"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


