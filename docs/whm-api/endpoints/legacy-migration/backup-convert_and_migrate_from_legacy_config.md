# Migrate server to new backup system

This function converts and migrates a server from the Legacy Backup system to the Backup system.

Endpoint: GET /convert_and_migrate_from_legacy_config
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `no_convert` (integer)
    Whether to convert the server from the Legacy Backup system to
the Backup system.
 * 1 — Convert.
 * 0 — Do not convert.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "convert_and_migrate_from_legacy_config"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "Legacy Backup configuration was renamed from /etc/cpbackup.conf to /etc/cpbackup.conf-1485958451 as a backup copy for your records."

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


