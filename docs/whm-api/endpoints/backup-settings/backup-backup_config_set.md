# Update the system's backup configuration

This function configures a server's backup system. The system saves these settings in the /var/cpanel/backups/config file.

Endpoint: GET /backup_config_set
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `backup_daily_enable` (integer)
    Whether to enable daily backups.

* 1 — Enable.
* 0 — Disable.
    Enum: 0, 1

  - `backup_daily_retention` (integer)
    The number of daily backups to retain.
    Example: 5

  - `backup_monthly_dates` (integer)
    Which days of the month to run backups.

Note:

To add multiple days, use a comma-delimited list.
    Example: 1

  - `backup_monthly_enable` (integer)
    Whether to enable monthly backups.

* 1 — Enable.
* 0 — Disable.
    Enum: 0, 1

  - `backup_monthly_retention` (integer)
    The number of monthly backups to retain.
    Example: 5

  - `backup_weekly_day` (integer)
    Which day of the week to run weekly backups.

* 0 — Sunday.
* 1 — Monday.
* 2 — Tuesday.
* 3 — Wednesday.
* 4 — Thursday.
* 5 — Friday.
* 6 — Saturday.
    Example: 1

  - `backup_weekly_enable` (integer)
    Whether to enable weekly backups.

* 1 — Enable.
* 0 — Disable.
    Enum: 0, 1

  - `backup_weekly_retention` (integer)
    The number of weekly backups to retain.
    Example: 4

  - `backupaccts` (integer)
    Whether to back up cPanel user accounts.

* 1 — Back up.
* 0 — Do not back up.

Note:

This setting affects whether the system enables the File and Directory Restoration
interfaces in
cPanel
and in
WHM.
For more information, read the
How to Manage Metadata Settings
documentation.
    Enum: 0, 1

  - `backupbwdata` (integer)
    Whether to back up bandwidth tracking data.

* 1 — Back up.
* 0 — Do not back up.
    Enum: 0, 1

  - `backupdays` (string)
    Which days of the week to run daily backups.

* 0 — Sunday.
* 1 — Monday.
* 2 — Tuesday.
* 3 — Wednesday.
* 4 — Thursday.
* 5 — Friday.
* 6 — Saturday.

Note:

For multiple days, use a comma-delimited list.
    Example: "0,1,2,3,4,5,6"

  - `backupdir` (string)
    The primary backup directory.
    Example: "/backup"

  - `backupenable` (integer)
    Whether to enable backups.

* 1 — Enable.
* 0 — Disable.

Note:

This setting affects whether the system enables the File and Directory Restoration
interfaces in
cPanel
and in
WHM.
For more information, read the
How to Manage Metadata Settings
documentation.
    Enum: 0, 1

  - `backupfiles` (integer)
    Whether to back up system files.

* 1 — Back up.
* 0 — Do not back up.
    Enum: 0, 1

  - `backuplogs` (integer)
    Whether to back up the error logs.

* 1 — Back up.
* 0 — Do not back up.
    Enum: 0, 1

  - `backupmount` (integer)
    Whether to mount a backup partition.

* 1 — Mount.
* 0 — Do not mount.

Note:

This setting affects whether the system enables the File and Directory Restoration
interfaces in
cPanel
and in
WHM.
For more information, read the
How to Manage Metadata Settings
documentation.
    Enum: 0, 1

  - `backupsuspendedaccts` (integer)
    Whether to back up suspended accounts.

* 1 — Back up.
* 0 — Do not back up.
    Enum: 0, 1

  - `backuptype` (string)
    The type of backup to create.

* compressed
* uncompressed
* incremental
    Enum: "compressed", "uncompressed", "incremental"

  - `check_min_free_space` (integer)
    Whether to ensure that the destination server possesses the minimum
free disk space available.

* 1 — Check the free disk space on the destination server.
* 0 — Do not check the free disk space on the destination server.
    Enum: 0, 1

  - `disable_metadata` (integer)
    Whether the backup system will create metadata when a backup runs.

* 1 — Disable metadata creation.
* 0 — Enable metadata creation.

Note:

This setting affects whether the system enables the File and Directory Restoration
interfaces in
cPanel
and in
WHM.
For more information, read the
How to Manage Metadata Settings
documentation.
    Enum: 0, 1

  - `errorthreshhold` (integer)
    The number of times that the system will try to use the additional backup destination.
    Example: 3

  - `force_prune_daily` (integer)
    Whether to strictly enforce the value of the backup_daily_retention
parameter.

* 1 — Strictly enforce the backup_daily_retention parameter.
* 0 — Only enforce the backup_daily_retention parameter after a
successful complete backup.
    Enum: 0, 1

  - `force_prune_monthly` (integer)
    Whether to strictly enforce the value of the backup_monthly_retention
parameter.

* 1 — Strictly enforce the backup_monthly_retention parameter.
* 0 — Only enforce the backup_monthly_retention parameter after a
successful complete backup.
    Enum: 0, 1

  - `force_prune_weekly` (integer)
    Whether to strictly enforce the value of the backup_weekly_retention
parameter.

* 1 — Strictly enforce the backup_weekly_retention parameter.
* 0 — Only enforce the backup_weekly_retention parameter after a
successful complete backup.
    Enum: 0, 1

  - `gziprsyncopts` (string)
    The gzip environment variables.
    Example: "--rysncable"

  - `keeplocal` (integer)
    Whether to delete backups from the local directory.

* 1 — Delete.
* 0 — Do not delete.

Note:

This setting affects whether the system enables the File and Directory Restoration
interfaces in
cPanel
and in
WHM.
For more information, read the
How to Manage Metadata Settings
documentation.
    Enum: 0, 1

  - `linkdest` (integer)
    Whether to check the rsync function for hardlink support.

* 1 — Check.
* 0 — Do not check.
    Enum: 0, 1

  - `localzonesonly` (integer)
    Whether to use a local zone file from the /var/named/domain.tld
file or the dnsadmin daemon, where domain.tld represents the target domain.

* 1 — Use the /var/named/domain.tld file.
* 0 — Use dnsadmin.
    Enum: 0, 1

  - `maximum_restore_timeout` (integer)
    How long a restoration will attempt to run, in seconds. If the restoration does not succeed in this amount of time, it will stop.
    Example: 21600

  - `maximum_timeout` (integer)
    How long a backup will attempt to run, in seconds. If the backup does not succeed in this amount of time, it will stop.
    Example: 7200

  - `min_free_space` (integer)
    The minimum amount of free disk to check for on the destination server.

Note:

If the value of the min_free_space_unit parameter is percent, the maximum
value is 100.
    Example: 1024

  - `min_free_space_unit` (string)
    The units of measurement of disk space for the min_free_space return.

* MB — Megabytes.
* percent — Percent available.
    Enum: "MB", "percent"

  - `mysqlbackup` (string)
    The backup method to use for MySQL® databases.

* accounts — Back up databases in each account's archive.
* dir — Back up the entire MySQL directory.
* both — Back up databases in each account's archive and the entire
MySQL directory.
    Enum: "accounts", "dir", "both"

  - `postbackup` (integer)
    Whether to run the /usr/local/cpanel/scripts/postcpbackup script after
the backup finishes.

* 1 — Run.
* 0 — Do not run.
    Enum: 0, 1

  - `prebackup` (integer)
    Whether to run the /usr/local/cpanel/scripts/precpbackup script before
the system processes backups.

* 1 — Run.
* 0 — Do not run.
    Enum: 0, 1

  - `psqlbackup` (integer)
    Whether to back up PostgreSQL® databases.

* 1 — Back up.
* 0 — Do not back up.
    Enum: 0, 1

  - `remote_restore_staging_dir` (string)
    The directory that temporarily stores a remote backup's data during a backup restoration.
The data is a compressed (.tar.gz) or uncompressed (.tar) account tarball.

Important:

The system restores backups one at a time. The backup staging directory must
be large enough to contain the largest remote backup file that you wish to restore.
For example, if you wish to restore three backups, sized 1.5 GB, 528 MB, and
950 MB each, your backup staging directory must be able to hold at least 1.5 GB.

Note:

The system empties the directory after the system restores the backup.
    Example: "/backup"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "backup_config_set"

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


