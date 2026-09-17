# Return completed restoration tasks list

This function lists the restoration queue's completed tasks.

Important:

This function's output varies dramatically. The /usr/local/cpanel/bin/backup_restore_manager script run with the list_finished option determines this output..

Note:

On servers that run CentOS 7, you may see a named warning about the absence of SPF resource records on DNS.
  * This warning is not relevant on CentOS 7 servers, because RFC 7208 deprecated SPF records. CentOS 7 servers use TXT records instead of SPF records.
  * Red Hat 7.1 and CentOS 7.1 both contain bind-9.9.4-23.el7, which is an updated version of BIND that complies with RFC 7208. To resolve this issue, update your operating system to a version that contains the updated version of BIND. For more information, read the Red Hat Bugzilla case about SPF record errors.

Endpoint: GET /restore_queue_list_completed
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.restore_job` (array)
    An array of objects that contain information about a completed task in the restoration queue.

  - `data.restore_job.restore_job` (object)
    An object that contains the task's settings.

  - `data.restore_job.restore_job.options` (object)
    An object that contains information about the task's options.

  - `data.restore_job.restore_job.options.destid` (string)
    The destination's identification string.
* local — The local directory.
* The destination ID string's value.
    Example: "LmTZCUpqqLSPH8AO7pVtIeNK"

  - `data.restore_job.restore_job.options.give_ip` (integer)
    Whether the task assigned the account a dedicated IP address.
* 1 - Assigned.
* 0 - Did not assign.
    Enum: 0, 1

  - `data.restore_job.restore_job.options.mail_config` (integer)
    Whether the function restored the account's email configuration.
* 1 - Restored.
* 0 - Did not restore.
    Enum: 0, 1

  - `data.restore_job.restore_job.options.mysql` (integer)
    Whether the task restored the account's MySQL® databases.
* 1 - Restored.
* 0 - Did not restore.
    Enum: 0, 1

  - `data.restore_job.restore_job.options.subdomains` (integer)
    Whether the function restored the account's subdomains.
* 1 - Restored.
* 0 - Did not restore.
    Enum: 0, 1

  - `data.restore_job.restore_job.restore_point` (string)
    The date of the backup that the task used.
    Example: "2015-10-21T00:00:00.000Z"

  - `data.restore_job.restore_job.user` (string)
    The cPanel account's username.
    Example: "username"

  - `data.restore_job.status_info` (object)
    An object that contains information about the task's status.

  - `data.restore_job.status_info.altered_items` (integer,null)
    The number of items that the restoration process changed.
    Example: 1

  - `data.restore_job.status_info.dangerous_items` (integer,null)
    The number of items in the restoration process that may cause problems on the account.
    Example: 1

  - `data.restore_job.status_info.finished` (string)
    The time that the restoration process completed this task.
    Example: "1355840823"

  - `data.restore_job.status_info.log` (string)
    The task's log information.
    Example: "Extracting Domain....Done Done Restoring cpanel user config file Done Restoring reseller packages and features (if any) Restoring reseller privs (if any) Restoring Locale Setting Restoring SSL keys and Certificates Done Restoring frontpage (if installed) Done Restoring access logs.... Done Restoring domain keys.... Done Restoring MySQL databases.... Database \"cptmpdb_azri8qf8_0KuzT3yEH7JFeeSi\" dropped Done Successful creation of roundcube cp_schema_version table Initial run through schema migration: from '0.2b' to '0.8.4' Please ignore non-fatal warnings, such as duplicate keys, columns, indexes, or tables already existing. Successfully saved version 0.8.4 to cp_schema_version table DBD::mysql::st execute failed: Table 'cptmpdb_azri8qf8_7WIKvg175f2M02yn.users' doesn't exist at /usr/local/cpanel/Cpanel/Email/RoundCube/DBI.pm line 503, line 1. DBD::mysql::st execute failed: Table 'cptmpdb_azri8qf8_7WIKvg175f2M02yn.users' doesn't exist at /usr/local/cpanel/Cpanel/Email/RoundCube/DBI.pm line 503, line 1. Transfer failed from temp database to Roundcube database. Done Done Restoring MySQL privs Done Reloading MySQL Done Restoring PostgreSQL databases.... ERROR: role \"azri8qf8\" already exists Restoring PostgreSQL privs Done Restoring Mailman lists Done Restoring Mailman Archives Done Restoring shell Current shell /usr/local/cpanel/bin/noshell is up to date. Done Restoring password Password for azri8qf8 has been changed Done Restoring proftpd file Done Resyncing FTP Passwords Updating ftp passwords for azri8qf8Ftp password files updated.Ftp vhost passwords syncedDone Linking old home directories Parsing Domain Databases ...Subdomains......ParkedDomains......AddonDomains... Restoring Domains Restoring Bandwidth Data Done Restoring Counter Data Restoring Homedir.... Done Doing fileprotect conversion Restoring nobody owned files Done Restoring Mail files Done Restoring userdata.... Done Restoring custom virtualhost templates.... Converting email to cPanel 5+ (if needed) Done Cleaning up filters (if needed) vfilter converter v3.0Updating vfilter files to latest format.Running for azri8qf8 only (force=0) (has_spam_acl=0)Processing azri8qf8......DoneDone Fixing mail permissions Done Restoring crontab Done Converting to maildir if needed Done Restoring Dns Zones Restoring zone: 28-ps1n25d.test.db Zone updates: 28-ps1n25d.test Adding missing subdomain DNS entries (if needed) Update Proxy subomains Adding proxy subdomains for domain 28-ps1n25d.test.28-ps1n25d.test [28-ps1n25d.test, 10.215.215.229, no changes needed]Done Updating SPF Records Done Restoring quota Done Update mail routing LOCAL MAIL EXCHANGER: This server will serve as a primary mail exchanger for 28-ps1n25d.test's mail.: This configuration has been manually selected. Done Rebuilding Apache Conf Built /usr/local/apache/conf/httpd.conf OK Restore Complete Account Restore Complete Unlocking password for user azri8qf8.passwd: Success."

  - `data.restore_job.status_info.restore_logfile` (string)
    The restoration log file's name.
    Example: "item-RESTORE_AccountLocal_example"

  - `data.restore_job.status_info.result` (integer)
    Whether the task completed successfully.
* 1 - Success.
* 0 - Failure.
* 2 - Warning.
    Enum: 0, 1, 2

  - `data.restore_job.status_info.skipped_items` (integer,null)
    The number of items that the restoration process skipped.
    Example: 1

  - `data.restore_job.status_info.started` (string)
    The restoration process's start time for this task.
    Example: "1355840811"

  - `data.restore_job.status_info.transfer_session_id` (string)
    The restoration transfer session's ID.
    Example: "userbackup20200406154758JqBa"

  - `data.restore_job.status_info.warnings` (array,null)
    Any warnings about the restoration process.

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "restore_queue_list_completed"

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


