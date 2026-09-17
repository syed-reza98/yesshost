# Backup Settings

Backups / Backup Settings

## Return backup configuration file data

 - [GET /backup_config_get](https://api.docs.cpanel.net/specifications/whm.openapi/backup-settings/backup-backup_config_get.md): This function retrieves your backup destination configuration file data.

## Update the system's backup configuration

 - [GET /backup_config_set](https://api.docs.cpanel.net/specifications/whm.openapi/backup-settings/backup-backup_config_set.md): This function configures a server's backup system. The system saves these settings in the /var/cpanel/backups/config file.

## Return dates where backup files exist

 - [GET /backup_date_list](https://api.docs.cpanel.net/specifications/whm.openapi/backup-settings/backup-backup_date_list.md): This function lists the dates where backup file exists, whether stored locally or stored on remote backup destinations when local backups are disabled.

## Enable or disable backups

 - [GET /backup_skip_users_all](https://api.docs.cpanel.net/specifications/whm.openapi/backup-settings/backup-backup_skip_users_all.md): This function enables and disables the backup and legacy backups.

## Return backup configuration status

 - [GET /backup_skip_users_all_status](https://api.docs.cpanel.net/specifications/whm.openapi/backup-settings/backup-backup_skip_users_all_status.md): This function checks each user's backup configuration status while the backup_skip_users_all function runs.

## Return users with a backup file

 - [GET /backup_user_list](https://api.docs.cpanel.net/specifications/whm.openapi/backup-settings/backup-backup_user_list.md): This function lists users with a backup file, stored locally or on additional backup destinations, on a specified date.

## Enable or disable legacy backups

 - [GET /toggle_user_backup_state](https://api.docs.cpanel.net/specifications/whm.openapi/backup-settings/backup-toggle_user_backup_state.md): This function enables or disables legacy backups for a user.

