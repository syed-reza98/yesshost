# Backup or Restore

Backups / Backup or Restore

## Return backup transport events' status

 - [GET /backup_get_transport_status](https://api.docs.cpanel.net/specifications/whm.openapi/backup-or-restore/backup-backup_get_transport_status.md): This function retrieves the status of any backup transport events on the account.

## Return backup files sent through transport

 - [GET /backup_list_transported](https://api.docs.cpanel.net/specifications/whm.openapi/backup-or-restore/backup-backup_list_transported.md): This function lists backup files that the system sent through a specified additional backup transport.

## Return backup files in the local disk

 - [GET /backup_set_list](https://api.docs.cpanel.net/specifications/whm.openapi/backup-or-restore/backup-backup_set_list.md): This function lists backup files for the server's accounts in the local disk.

## Return backup files for the server's accounts

 - [GET /backup_set_list_combined](https://api.docs.cpanel.net/specifications/whm.openapi/backup-or-restore/backup-backup_set_list_combined.md): This function lists locally-stored and backup-destination stored backup files for the server's accounts.

## Return start_background_pkgacct session log file

 - [GET /fetch_pkgacct_master_log](https://api.docs.cpanel.net/specifications/whm.openapi/backup-or-restore/backup-fetch_pkgacct_master_log.md): This function returns the contents of a start_background_pkgacct session's master log file.

## Return start_background_pkgacct session state

 - [GET /get_pkgacct_session_state](https://api.docs.cpanel.net/specifications/whm.openapi/backup-or-restore/backup-get_pkgacct_session_state.md): This function returns the state of a start_background_pkgacct session.

## Return users and domains with backup metadata

 - [GET /get_users_and_domains_with_backup_metadata](https://api.docs.cpanel.net/specifications/whm.openapi/backup-or-restore/backup-get_users_and_domains_with_backup_metadata.md): This function lists all users and their domains that have backup metadata.

## Return users with backup metadata

 - [GET /get_users_with_backup_metadata](https://api.docs.cpanel.net/specifications/whm.openapi/backup-or-restore/backup-get_users_with_backup_metadata.md): This function lists users with backup metadata.

## Return cparchive files list

 - [GET /list_cparchive_files](https://api.docs.cpanel.net/specifications/whm.openapi/backup-or-restore/backup-list_cparchive_files.md): This function lists all available cparchive files.

Note:

* MM.DD.YYYY represents the file's date in month, date, and year format.
* HH-MM-SS represents the file's timestamp in hour, minute, and second format.

The function checks the following filenames, where USER represents the cPanel account's filusername::
* cpmove-USER
* cpmove-USER.tar
* cpmove-USER.tar.gz
* USER.tar
* USER.tar.gz
* backup-{MM.DD.YYYY}{HH-MM-SS}{USER}.tar
* backup-{MM.DD.YYYY}{HH-MM-SS}{USER}.tar.gz

The function checks for these filenames in the following locations:
* /home
* /home2
* /home3
* /root
* /usr
* /usr/home
* /web

## Back up an account using the pkgacct script

 - [GET /start_background_pkgacct](https://api.docs.cpanel.net/specifications/whm.openapi/backup-or-restore/backup-start_background_pkgacct.md): This function backs up an account with the pkgacct script.

Note:

- The /usr/local/cpanel/scripts/pkgacct script logs results to the /var/cpanel/pkgacct_sessions/session_id/ directory, where session_id represents the backup session's ID.
- The target system streams the output of this function with the /usr/local/cpanel/whostmgr/docroot/cgi/live_tail_log.cgi script on the source system. Users should not directly call this script.

## Restore one cPanel account from a backup

 - [GET /start_local_cpmove_restore](https://api.docs.cpanel.net/specifications/whm.openapi/backup-or-restore/transfers-start_local_cpmove_restore.md): This function performs a full restoration of a single cPanel account from a cpmove tarball.

