# Back up an account using the pkgacct script

This function backs up an account with the pkgacct script.

Note:

- The /usr/local/cpanel/scripts/pkgacct script logs results to the /var/cpanel/pkgacct_sessions/session_id/ directory, where session_id represents the backup session's ID.
- The target system streams the output of this function with the /usr/local/cpanel/whostmgr/docroot/cgi/live_tail_log.cgi script on the source system. Users should not directly call this script.

Endpoint: GET /start_background_pkgacct
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `user` (string, required)
    The cPanel account to back up.
    Example: "username"

  - `compressionsetting` (string,null)
    Whether to compress the data in .gzip format.
* compress - Compress the data.
* null - Do not compress the data.
    Enum: "compress"

  - `incremental` (integer)
    Whether to update the destination file with any new content since the previous backup.
This parameter also removes any content that no longer exists on the account.
If the destination file does not exist, the function creates a new file in that location.
* 1 — Create an incremental archive file.
* 0 — Do not create an incremental archive file.

Note:

 When you use this parameter, the system creates the backup as an uncompressed archive.
    Enum: 0, 1

  - `low_priority` (integer)
    Whether to run the background task with a reduced priority.
* 1 — Run the backup as a low priority task.
* 0 — Run the backup with normal priority.
    Enum: 0, 1

  - `mysqlver` (string)
    The minimum version of MySQL® that the system requires to restore the backed up database files.

Note:

- You can view the server's installed version of MySQL in the /var/cpanel/cpanel.config file.
- This parameter defaults to the current installed version of MySQL.
    Example: "5.5"

  - `serialized_output` (integer)
    Whether to encode each line of the script's output in JSON format in order to allow the live_tail_log.cgi script to stream it.
* 1 — Serialize the output.
* 0 — Do not serialize the output.
    Enum: 0, 1

  - `skipacctdb` (integer)
    Whether to exclude the account's databases from the cpmove archive.
* 1 — Do not back up the account's databases.
* 0 — Back up the account's databases.
    Enum: 0, 1

  - `skipapitokens` (integer)
    Whether to exclude the account's API tokens from the archive.
* 1 — Do not back up the account's API tokens.
* 0 — Back up the account's API tokens.
    Enum: 0, 1

  - `skipauthnlinks` (integer)
    Whether to exclude the account's external authentication credentials from the archive.
* 1 — Do not back up the account's external authentication credentials.
* 0 — Back up the account's external authentication credentials.
    Enum: 0, 1

  - `skipbwdata` (integer)
    Whether to exclude the account's bandwidth data from the archive.
* 1 — Do not back up the account's bandwidth data.
* 0 — Back up the account's data.
    Enum: 0, 1

  - `skipdnssec` (integer)
    Whether to exclude the account's DNSSEC configuration from the archive.
* 1 — Do not back up the account's DNSSEC configuration.
* 0 — Back up the account's DNSSEC configuration.
    Enum: 0, 1

  - `skipdnszones` (integer)
    Whether to exclude the account's DNS zone file information from the archive.
* 1 — Do not back up the account's DNS zone file information.
* 0 — Back up the account's DNS zone file information.
    Enum: 0, 1

  - `skipftpusers` (integer)
    Whether to exclude the account's FTP user accounts from the archive.
* 1 — Do not back up the account's FTP user accounts.
* 0 — Back up the account's FTP user accounts.
    Enum: 0, 1

  - `skiphomedir` (integer)
    Whether to skip the home directory's contents.
* 1 — Do not back up the account's home directory.
* 0 — Back up the account's home directory.
    Enum: 0, 1

  - `skiplinkednodes` (integer)
    Whether to exclude the account's cPanel & WHM linked server nodes configuration from the archive.
* 1 — Do not back up the account's linked server nodes configuration.
* 0 — Back up the account's linked server nodes configuration.
    Enum: 0, 1

  - `skiplogs` (integer)
    Whether to exclude the account's log files from the archive.
* 1 — Do not back up the account's log files.
* 0 — Back up the account's log files.
    Enum: 0, 1

  - `skipresellerconfig` (integer)
    Whether to exclude the account's reseller privileges from the archive.
* 1 — Do not back up the account's reseller privileges.
* 0 — Back up the account's reseller privileges.
    Enum: 0, 1

  - `skipshell` (integer)
    Whether to exclude the account's shell information and privileges from the archive.
* 1 — Do not back up the account's shell information and privileges.
* 0 — Back up the account's shell information and privileges.
    Enum: 0, 1

  - `skipvhosttemplates` (integer)
    Whether to exclude the account's virtual host (vhost) templates from the archive.
* 1 — Do not back up the account's vhost templates.
* 0 — Back up the account's vhost templates.
    Enum: 0, 1

  - `split` (integer)
    Whether to create the cpmove archive in chunks.
* 1 — Create the archive in chunks.
* 0 — Create a single archive file.
    Enum: 0, 1

  - `tarroot` (string)
    The path to the directory in which you wish to store the cpmove archive.

Note:

This parameter defaults to /home/user, where user represents the username of the account.
    Example: "/home/user"

  - `use_backups` (integer)
    Whether to use the account's last known successful backup as a template when the script creates the cpmove archive, if any exist.
* 1 — Use the account's last known successful backup as a template, if any exist.
* 0 — Do not use the account's last known successful backup.

Note:

 This parameter may reduce the amount of time that the backup process requires.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `data` (object)

  - `data.complete_master_error_log` (string)
    The name of the master error log.

Note:

 The target system streams the output of this file with the live_tail_log.cgi script; however, users should not directly call this script.
    Example: "master.error_log"

  - `data.complete_master_log` (string)
    The name of the master log.

Note:

 The target system streams the output of this file with the live_tail_log.cgi script; however, users should not directly call this script.
    Example: "master.log"

  - `data.session_id` (string)
    The backup's session ID.
    Example: "example20151109162046c4xzDp55q9u4tPj"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "start_background_pkgacct"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


