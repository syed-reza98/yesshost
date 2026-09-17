# Restore one cPanel account from a backup

This function performs a full restoration of a single cPanel account from a cpmove tarball.

Endpoint: GET /start_local_cpmove_restore
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `cpmovepath` (string, required)
    A filepath that contains the account's cpmove tarball or the directory path that contains the extracted cpmove tarball.

  Note:

You can use the pkgacct script to create a cpmove tarball.
    Example: "/home/cpmove-newacct.tar.gz"

  - `dedicated_ip` (integer)
    Whether to assign the account a dedicated IP address.
* 1 - Assign a dedicated IP address.
* 0 - Do not assign a dedicated IP address.

  Note:

The system must have an available IP address.
    Enum: 0, 1

  - `delete_archive` (integer)
    Whether to delete the cpmove tarball or extracted directory, given in the cpmovepath parameter, after the system completes the account restoration.
* 1 - Delete the cpmove tarball or extracted directory.
* 0 - Do not delete the cpmove tarball or extracted directory.
    Enum: 0, 1

  - `mail_location` (any)
    The server on which the account's email will reside after the system completes the transfer.
* .local - Use the local server the account is being restored on.
* .existing - Use the server location defined in the account's backup data. The system defaults to the .local parameter if this does not work.
* ALIAS - Use a cPanel & WHM linked node server's alias. For example, the example-alias for the servernode.example.com domain. The system defaults to the .local parameter if this does not work.

  - `overwrite` (integer)
    Whether to overwrite an existing account on the server, if one exists.
* 1 - Overwrite an existing account.
* 0 - Do not overwrite an existing account on the server.
    Enum: 0, 1

  - `restricted` (integer)
    Whether to perform a restricted restore for the account. The system will perform security checks on the backup file. If you do not trust the source of the account backup with root access to your server, use this parameter to protect your server.

* 1 - Perform a restricted restore.
* 0 - Do not perform a restricted restore.

Important:

* This parameter is experimental. Do not consider it as an effective security control. For more information, read our restricted restore documentation.
* If the account owns PostgreSQL® databases, your server must use PostgreSQL version 8.4 or newer.
* This parameter only allows restored accounts to use the noshell or jailshell environments. If the account uses a different shell, the system will set the account to use the noshell environment.
* If there is an issue with the backup file, the system will not restore that part of the backup file. It will also adds a warning to the log file.
    Enum: 0, 1

  - `update_a_records` (string)
    Whether to perform one of the following actions to the account's A records:
* all - Replace all instances of the original server's IP address with the new server's IP address.
* basic - Only replace the cPanel provided A records.
    Enum: "all", "basic"

  - `username` (string)
    The username to give to the restored cPanel account. This will default to the username provided in the backup files.
    Example: "example"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.transfer_session_id` (string)
    The background transfer process ID.
    Example: "example202003301756425ugO"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "start_local_cpmove_restore"

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


