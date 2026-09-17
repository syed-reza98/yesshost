# Return backup configuration file data

This function retrieves your backup destination configuration file data.

Endpoint: GET /backup_config_get
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.backup_config` (object)
    A list of backup configuration data.

  - `data.backup_config.backup_daily_enable` (integer)
    Whether daily backups are enabled.

* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.backup_config.backup_daily_retention` (integer)
    The number of retained daily backups.
    Example: 5

  - `data.backup_config.backup_monthly_dates` (string)
    A comma-seprated list of the days of the month on which the system runs monthly backups.
    Example: "1,15,22"

  - `data.backup_config.backup_monthly_enable` (integer)
    Whether monthly backups are enabled.

* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.backup_config.backup_monthly_retention` (integer)
    The number of retained monthly backups.
    Example: 5

  - `data.backup_config.backup_weekly_day` (string)
    The day of the week on which the system runs weekly backups.

* 0 — Sunday.
* 1 — Monday.
* 2 — Tuesday.
* 3 — Wednesday.
* 4 — Thursday.
* 5 — Friday.
* 6 — Saturday.
    Example: "1,3,5"

  - `data.backup_config.backup_weekly_enable` (integer)
    Whether weekly backups are enabled.

* 1 — Enable.
* 0 — Disable.
    Enum: 0, 1

  - `data.backup_config.backup_weekly_retention` (integer)
    The number of retained weekly backups.
    Example: 4

  - `data.backup_config.backupaccts` (integer)
    Whether to back up accounts.

* 1 — Back up.
* 0 — Do not back up.

Note:

This setting affects whether the system enables the *File and
Directory Restoration* interface in cPanel & WHM. For more
information, read the
[How to Manage Metadata Settings](https://go.cpanel.net/MetadataSettings)
documentation.
    Enum: 1, 0

  - `data.backup_config.backupbwdata` (integer)
    Whether bandwidth tracking data backups are enabled.

* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.backup_config.backupdays` (string)
    The days of the week on which the system runs daily backups.

* 0 — Sunday.
* 1 — Monday.
* 2 — Tuesday.
* 3 — Wednesday.
* 4 — Thursday.
* 5 — Friday.
* 6 — Saturday.
    Example: "0,2,4,6"

  - `data.backup_config.backupdir` (string)
    The aboslute file path to the server's local backup directory.
    Example: "/backup"

  - `data.backup_config.backupenable` (integer)
    Whether backups are enabled.

* 1 — Enabled.
* 0 — Disabled.
    Enum: 1, 0

  - `data.backup_config.backupfiles` (integer)
    Whether system file backups are enabled.

* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.backup_config.backuplogs` (integer)
    Whether error log backups are enabled.

* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.backup_config.backupmount` (integer)
    Whether the system mounts backup partitions as part of the
backup process.

* 1 — Mounted.
* 0 — Not mounted.

Note:

This setting affects whether the system enables the *File and
Directory Restoration* interface in cPanel & WHM. For more
information, read the
[How to Manage Metadata Settings](https://go.cpanel.net/MetadataSettings)
documentation.
    Enum: 0, 1

  - `data.backup_config.backupsuspendedaccounts` (integer)
    Whether suspended account backups are enabled.

* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.backup_config.backuptype` (string)
    The type of backup file the system creates.

* compressed — A compressed .tar file.
* uncompressed — An uncompressed .tar file.
* incremental — A full tree of files and directories.
    Enum: "compressed", "uncompressed", "incremental"

  - `data.backup_config.check_min_free_space` (integer)
    Whether the system performs a check of the minimum free disk space
available on the destination server.

* 1 — Check the free disk space on the destination server.
* 0 — Do not check the free disk space on the destination
server.
    Enum: 0, 1

  - `data.backup_config.disable_metadata` (integer)
    Whether the backup system creates metadata when a backup runs.

* 1 — Disables metadata creation.
* 0 — Enables metadata creation.
    Enum: 1, 0

  - `data.backup_config.errorthreshhold` (integer)
    The number of times that the system attempts to use the additional backup destination.
    Example: 3

  - `data.backup_config.force_prune_daily` (integer)
    Whether the backup_daily_retention parameter is strictly enforced.

* 1 — Enforced.
* 0 — The system only enforces the backup_daily_retention
setting after a backup successfully completes.
    Enum: 0, 1

  - `data.backup_config.force_prune_monthly` (integer)
    Whether the backup_monthly_retention parameter is strictly enforced.

* 1 — Enforced.
* 0 — The system only enforces the backup_monthly_retention
setting after a backup successfully completes.
    Enum: 0, 1

  - `data.backup_config.force_prune_weekly` (integer)
    Whether the backup_weekly_retention parameter is strictly enforced.

* 1 — Enforced.
* 0 — The system only enforces the backup_weekly_retention
setting after a backup successfully completes.
    Enum: 0, 1

  - `data.backup_config.gziprsyncopts` (string)
    The environment variables passed to the gzip application. The system uses these variables to adjust how the gzip application runs when compressing backups.
    Example: "--rysncable"

  - `data.backup_config.keeplocal` (integer)
    Whether the system deletes backups from the local directory.

* 1 — The system does not delete backups from the local backup
directory.
* 0 — The system deletes backups from the local
directory.

Note:

The backupdir return value contains the local backup directory.
    Enum: 0, 1

  - `data.backup_config.linkdest` (integer)
    Whether the system checks the rsync function for hardlink support.

* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.backup_config.localzonesonly` (integer)
    Whether the system uses a local zone file from the dnsadmin daemon
or /var/named/domain.tld file, where domain.tld is the target domain.

* 1 — The system uses the /var/named/domain.tld file.
* 0 — The system uses the dnsadmin daemon.
    Enum: 0, 1

  - `data.backup_config.maximum_restore_timeout` (integer)
    The maximum interval, in seconds, that the restoration attempts a run to completion. If the restoration takes longer than this interval, the system terminates the restoration.
    Example: 21600

  - `data.backup_config.maximum_timeout` (integer)
    The maximum interval, in seconds, that the backup attempts a run to completion. If the backup takes longer than this interval, the system terminates the backup.
    Example: 7200

  - `data.backup_config.min_free_space` (integer)
    The minimum amount of free disk space the system checks for on the destination server before attempting a backup to that server.
    Example: 1024

  - `data.backup_config.min_free_space_unit` (string)
    The unit of measure of disk space for the min_free_space return.

* MB — Megabytes.
* percent — Percentages.
    Enum: "MB", "percent"

  - `data.backup_config.mysqlbackup` (string)
    The method that the system uses to back up MySQL® databases.

* accounts — Backs up databases into each account's archive.
* dir — Backs up the entire MySQL directory.
* both — Back up databases into each account's archive and
the entire MySQL directory.
    Example: "accounts"

  - `data.backup_config.postbackup` (integer)
    Whether the /usr/local/cpanel/scripts/postcpbackup script runs
after the backup completes.

* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.backup_config.prebackup` (integer)
    Whether the /usr/local/cpanel/scripts/precpbackup script runs before
the system processes backups.

* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.backup_config.psqlbackup` (integer)
    Whether backups of PostgreSQL® databases are enabled.

* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.backup_config.remote_restore_staging_dir` (string)
    The directory on the local server where the system temporarily
stores a remote server's backup file during a backup restoration.
    Example: "/backup"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "backup_config_get"

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


