# WHM API

WHM API.

Version: 11.138.0.6
License: cPanel License

## Servers

A server running WHM.
```
https://{host}:{port}/json-api
```

Variables:
- `host`: The hostname of a server running WHM.
Default: "whm-server.tld"
- `port`: The WHM port.
Default: "2087"

## Security

### BasicAuth

Type: http
Scheme: basic

## Download OpenAPI description

[WHM API](https://api.docs.cpanel.net/_bundle/specifications/whm.openapi.yaml)

## Account Restoration

The Account Restoration module for WHM API 1.

### Restore user account from backup

 - [GET /restore_queue_add_task](https://api.docs.cpanel.net/specifications/whm.openapi/restore-account/backup-restore_queue_add_task.md): This function restores a user's cPanel account from a backup file.

### Restore account backup

 - [GET /restoreaccount](https://api.docs.cpanel.net/specifications/whm.openapi/restore-account/backup-restoreaccount.md): This function restores an account backup. You can use this function to restore daily,
weekly, or monthly backups.

Important:

* When you call this function, you must include at least one of
the all, mail, subs, or mysql parameters.

* On servers with a custom Whostmgr::Transfers module, the function may not return XML
output. To properly return XML output, the Whostmgr::Transfers module must allow
the system to use the Cpanel::Demultiplexer module to capture output.

Note:

On servers that run CentOS 7, you may see a named warning about the absence of SPF
resource records on DNS.

* This warning is not relevant on CentOS 7 servers, because
RFC 7208 deprecated SPF records.
CentOS 7 servers use TXT records instead of SPF records.

* Red Hat 7.1 and CentOS 7.1 both contain bind-9.9.4-23.el7, which is an updated
version of BIND that complies with RFC 7208. To resolve this issue, update your
operating system to a version that contains the updated version of BIND. For more
information, read the
Red Hat Bugzilla case about SPF record errors.

### Validate username during restoration

 - [GET /verify_new_username_for_restore](https://api.docs.cpanel.net/specifications/whm.openapi/restore-account/nameconflict-verify_new_username_for_restore.md): This function checks for username conflicts during account restoration. If the function detects a username conflict, it outputs an error message in the reason return.

### Start restoration

 - [GET /restore_queue_activate](https://api.docs.cpanel.net/specifications/whm.openapi/restore-queue-management/backup-restore_queue_activate.md): This function activates the restore queue. This triggers a process that restores all queued accounts.

### Remove all completed restoration tasks

 - [GET /restore_queue_clear_all_completed_tasks](https://api.docs.cpanel.net/specifications/whm.openapi/restore-queue-management/backup-restore_queue_clear_all_completed_tasks.md): This function removes successfully completed tasks from the restoration queue.

### Remove all failed restoration tasks

 - [GET /restore_queue_clear_all_failed_tasks](https://api.docs.cpanel.net/specifications/whm.openapi/restore-queue-management/backup-restore_queue_clear_all_failed_tasks.md): This function removes any failed tasks from the restoration queue.

### Remove all pending restoration tasks

 - [GET /restore_queue_clear_all_pending_tasks](https://api.docs.cpanel.net/specifications/whm.openapi/restore-queue-management/backup-restore_queue_clear_all_pending_tasks.md): This function removes any pending tasks from the restoration queue.

### Remove all restoration tasks

 - [GET /restore_queue_clear_all_tasks](https://api.docs.cpanel.net/specifications/whm.openapi/restore-queue-management/backup-restore_queue_clear_all_tasks.md): This function removes all tasks from the restoration queue.

### Remove completed restoration task

 - [GET /restore_queue_clear_completed_task](https://api.docs.cpanel.net/specifications/whm.openapi/restore-queue-management/backup-restore_queue_clear_completed_task.md): This function removes a single completed task from the restoration queue.

### Remove pending restoration task

 - [GET /restore_queue_clear_pending_task](https://api.docs.cpanel.net/specifications/whm.openapi/restore-queue-management/backup-restore_queue_clear_pending_task.md): This function removes a single pending task from the restoration queue.

### Return backup modules list

 - [GET /restore_modules_summary](https://api.docs.cpanel.net/specifications/whm.openapi/restore-queue-reporting/transfers-restore_modules_summary.md): This function lists backup modules and their descriptions.

### Validate restoration queue is active

 - [GET /restore_queue_is_active](https://api.docs.cpanel.net/specifications/whm.openapi/restore-queue-reporting/backup-restore_queue_is_active.md): This function checks whether the system's restoration queue is actively processing tasks.

### Return active restoration tasks list

 - [GET /restore_queue_list_active](https://api.docs.cpanel.net/specifications/whm.openapi/restore-queue-reporting/backup-restore_queue_list_active.md): This function lists the tasks that the restoration queue is actively processing.

### Return completed restoration tasks list

 - [GET /restore_queue_list_completed](https://api.docs.cpanel.net/specifications/whm.openapi/restore-queue-reporting/backup-restore_queue_list_completed.md): This function lists the restoration queue's completed tasks.

Important:

This function's output varies dramatically. The /usr/local/cpanel/bin/backup_restore_manager script run with the list_finished option determines this output..

Note:

On servers that run CentOS 7, you may see a named warning about the absence of SPF resource records on DNS.
  * This warning is not relevant on CentOS 7 servers, because RFC 7208 deprecated SPF records. CentOS 7 servers use TXT records instead of SPF records.
  * Red Hat 7.1 and CentOS 7.1 both contain bind-9.9.4-23.el7, which is an updated version of BIND that complies with RFC 7208. To resolve this issue, update your operating system to a version that contains the updated version of BIND. For more information, read the Red Hat Bugzilla case about SPF record errors.

### Return pending restoration tasks list

 - [GET /restore_queue_list_pending](https://api.docs.cpanel.net/specifications/whm.openapi/restore-queue-reporting/backup-restore_queue_list_pending.md): This function lists the tasks that the restoration queue has not yet processed.

### Return restoration tasks list

 - [GET /restore_queue_state](https://api.docs.cpanel.net/specifications/whm.openapi/restore-queue-reporting/backup-restore_queue_state.md): This function lists the tasks in the restoration queue.

## Restore Account

Account Restoration / Restore Account

### Restore user account from backup

 - [GET /restore_queue_add_task](https://api.docs.cpanel.net/specifications/whm.openapi/restore-account/backup-restore_queue_add_task.md): This function restores a user's cPanel account from a backup file.

### Restore account backup

 - [GET /restoreaccount](https://api.docs.cpanel.net/specifications/whm.openapi/restore-account/backup-restoreaccount.md): This function restores an account backup. You can use this function to restore daily,
weekly, or monthly backups.

Important:

* When you call this function, you must include at least one of
the all, mail, subs, or mysql parameters.

* On servers with a custom Whostmgr::Transfers module, the function may not return XML
output. To properly return XML output, the Whostmgr::Transfers module must allow
the system to use the Cpanel::Demultiplexer module to capture output.

Note:

On servers that run CentOS 7, you may see a named warning about the absence of SPF
resource records on DNS.

* This warning is not relevant on CentOS 7 servers, because
RFC 7208 deprecated SPF records.
CentOS 7 servers use TXT records instead of SPF records.

* Red Hat 7.1 and CentOS 7.1 both contain bind-9.9.4-23.el7, which is an updated
version of BIND that complies with RFC 7208. To resolve this issue, update your
operating system to a version that contains the updated version of BIND. For more
information, read the
Red Hat Bugzilla case about SPF record errors.

### Validate username during restoration

 - [GET /verify_new_username_for_restore](https://api.docs.cpanel.net/specifications/whm.openapi/restore-account/nameconflict-verify_new_username_for_restore.md): This function checks for username conflicts during account restoration. If the function detects a username conflict, it outputs an error message in the reason return.

## Restore Queue Management

Account Restoration / Restore Queue Management

### Start restoration

 - [GET /restore_queue_activate](https://api.docs.cpanel.net/specifications/whm.openapi/restore-queue-management/backup-restore_queue_activate.md): This function activates the restore queue. This triggers a process that restores all queued accounts.

### Remove all completed restoration tasks

 - [GET /restore_queue_clear_all_completed_tasks](https://api.docs.cpanel.net/specifications/whm.openapi/restore-queue-management/backup-restore_queue_clear_all_completed_tasks.md): This function removes successfully completed tasks from the restoration queue.

### Remove all failed restoration tasks

 - [GET /restore_queue_clear_all_failed_tasks](https://api.docs.cpanel.net/specifications/whm.openapi/restore-queue-management/backup-restore_queue_clear_all_failed_tasks.md): This function removes any failed tasks from the restoration queue.

### Remove all pending restoration tasks

 - [GET /restore_queue_clear_all_pending_tasks](https://api.docs.cpanel.net/specifications/whm.openapi/restore-queue-management/backup-restore_queue_clear_all_pending_tasks.md): This function removes any pending tasks from the restoration queue.

### Remove all restoration tasks

 - [GET /restore_queue_clear_all_tasks](https://api.docs.cpanel.net/specifications/whm.openapi/restore-queue-management/backup-restore_queue_clear_all_tasks.md): This function removes all tasks from the restoration queue.

### Remove completed restoration task

 - [GET /restore_queue_clear_completed_task](https://api.docs.cpanel.net/specifications/whm.openapi/restore-queue-management/backup-restore_queue_clear_completed_task.md): This function removes a single completed task from the restoration queue.

### Remove pending restoration task

 - [GET /restore_queue_clear_pending_task](https://api.docs.cpanel.net/specifications/whm.openapi/restore-queue-management/backup-restore_queue_clear_pending_task.md): This function removes a single pending task from the restoration queue.

## Restore Queue Reporting

Account Restoration / Restore Queue Reporting

### Return backup modules list

 - [GET /restore_modules_summary](https://api.docs.cpanel.net/specifications/whm.openapi/restore-queue-reporting/transfers-restore_modules_summary.md): This function lists backup modules and their descriptions.

### Validate restoration queue is active

 - [GET /restore_queue_is_active](https://api.docs.cpanel.net/specifications/whm.openapi/restore-queue-reporting/backup-restore_queue_is_active.md): This function checks whether the system's restoration queue is actively processing tasks.

### Return active restoration tasks list

 - [GET /restore_queue_list_active](https://api.docs.cpanel.net/specifications/whm.openapi/restore-queue-reporting/backup-restore_queue_list_active.md): This function lists the tasks that the restoration queue is actively processing.

### Return completed restoration tasks list

 - [GET /restore_queue_list_completed](https://api.docs.cpanel.net/specifications/whm.openapi/restore-queue-reporting/backup-restore_queue_list_completed.md): This function lists the restoration queue's completed tasks.

Important:

This function's output varies dramatically. The /usr/local/cpanel/bin/backup_restore_manager script run with the list_finished option determines this output..

Note:

On servers that run CentOS 7, you may see a named warning about the absence of SPF resource records on DNS.
  * This warning is not relevant on CentOS 7 servers, because RFC 7208 deprecated SPF records. CentOS 7 servers use TXT records instead of SPF records.
  * Red Hat 7.1 and CentOS 7.1 both contain bind-9.9.4-23.el7, which is an updated version of BIND that complies with RFC 7208. To resolve this issue, update your operating system to a version that contains the updated version of BIND. For more information, read the Red Hat Bugzilla case about SPF record errors.

### Return pending restoration tasks list

 - [GET /restore_queue_list_pending](https://api.docs.cpanel.net/specifications/whm.openapi/restore-queue-reporting/backup-restore_queue_list_pending.md): This function lists the tasks that the restoration queue has not yet processed.

### Return restoration tasks list

 - [GET /restore_queue_state](https://api.docs.cpanel.net/specifications/whm.openapi/restore-queue-reporting/backup-restore_queue_state.md): This function lists the tasks in the restoration queue.

## Account Creation

Accounts / Account Creation

### Create cPanel account

 - [GET /createacct](https://api.docs.cpanel.net/specifications/whm.openapi/account-creation/accounts-createacct.md): This function creates a cPanel account and sets up its domain information.

Note:

* On servers that run CentOS 7, you may see a named warning about the absence of SPF resource records on DNS.
* This warning is not relevant on CentOS 7 servers, because RFC 7208 deprecated SPF records. CentOS 7 servers use TXT records instead of SPF records.
* Red Hat 7.1 and CentOS 7.1 both contain bind-9.9.4-23.el7, which is an updated version of BIND that complies with RFC 7208. To resolve this issue, update your operating system to a version that contains the updated version of BIND. For more information, read the Red Hat Bugzilla case about SPF record errors.

### Return cPanel accounts total number

 - [GET /get_current_users_count](https://api.docs.cpanel.net/specifications/whm.openapi/account-creation/accounts-get_current_users_count.md): This function returns the number of cPanel accounts on the server.

### Return maximum accounts for license

 - [GET /get_maximum_users](https://api.docs.cpanel.net/specifications/whm.openapi/account-creation/accounts-get_maximum_users.md): This function returns the maximum number of cPanel accounts that the server's license allows.

### Validate new cPanel account username

 - [GET /verify_new_username](https://api.docs.cpanel.net/specifications/whm.openapi/account-creation/nameconflict-verify_new_username.md): This function checks for username conflicts during account creation.

## Account Enhancements

The Account Enhancements module for WHM.

### Assign Account Enhancement

 - [GET /assign_account_enhancement](https://api.docs.cpanel.net/specifications/whm.openapi/account-enhancements/accountenhancements-assign_account_enhancement.md): This function assigns an Account Enhancement to a cPanel account.

### Create Account Enhancement

 - [GET /create_account_enhancement](https://api.docs.cpanel.net/specifications/whm.openapi/account-enhancements/accountenhancements-create_account_enhancement.md): This function creates a new account enhancement.

### Remove an Account Enhancement

 - [GET /delete_account_enhancement](https://api.docs.cpanel.net/specifications/whm.openapi/account-enhancements/accountenhancements-delete_account_enhancement.md): This function removes an account enhancement.

### Return Account Enhancements

 - [GET /list_account_enhancements](https://api.docs.cpanel.net/specifications/whm.openapi/account-enhancements/accountenhancements-list_account_enhancements.md): This function retrieves all existing account enhancements on the system.

### Update Account Enhancement

 - [GET /modify_account_enhancement](https://api.docs.cpanel.net/specifications/whm.openapi/account-enhancements/accountenhancements-modify_account_enhancement.md): This function modifies an account enhancement.

Important:

* When you call this function, you must include at least one of
the id or name parameters. Lack of a second parameter will result
in no change.

### Unassign Account Enhancement

 - [GET /unassign_account_enhancement](https://api.docs.cpanel.net/specifications/whm.openapi/account-enhancements/accountenhancements-unassign_account_enhancement.md): This function removes an Account Enhancement from a cPanel account.

## Accounts

The Accounts module for WHM API 1.

### Return cPanel account summary

 - [GET /accountsummary](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/accounts-accountsummary.md): This function retrieves a summary of a user's account.

Note:

You must use either the user or domain parameters.

### Get upgrade opportunities

 - [GET /get_upgrade_opportunities](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/accounts-get_upgrade_opportunities.md): This function lists accounts that could benefit from upgrading to a different package.
The listed accounts may be nearing (or exceeding) resource usage thresholds.

### Validate cPanel account Digest Authentication

 - [GET /has_digest_auth](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/sys-has_digest_auth.md): This function checks whether Digest Authentication is enabled for
a cPanel user. Windows® Vista, Windows® 7, and Windows® 8 require Digest Authentication
support in order to access Web Disk over an unencrypted connection.

### Validate MySQL Configuration file

 - [GET /has_mycnf_for_cpuser](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/sys-has_mycnf_for_cpuser.md): This function checks whether a cPanel user's home directory contains
a valid .my.cnf file.

### Return cPanel accounts

 - [GET /listaccts](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/accounts-listaccts.md): This function lists the accounts on the server.

### Update multiple cPanel accounts

 - [GET /massmodifyacct](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/accounts-massmodifyacct.md): This function modifies multiple cPanel accounts.

Warning:

* We strongly recommend that you do not modify a cPanel account's settings
if that account uses a hosting plan (package). If the package values change, the
system will overwrite any of your custom values with the package's new values.
* This function uses case-sensitive parameters. You must enter parameters in
the correct case format. If you do not, the function will ignore that parameter.

Note:

On servers that run CentOS 7, you may see a named warning about the absence of
SPF resource records on DNS.
  * This warning is not relevant on CentOS 7 servers, because
  RFC 7208 deprecated SPF records. CentOS 7
  servers use TXT records instead of SPF records.
  * Red Hat 7.1 and CentOS 7.1 both contain bind-9.9.4-23.el7, which is an updated
  version of BIND that complies with RFC 7208. To resolve this issue, update your
  operating system to a version that contains the updated version of BIND. For more
  information, read the Red Hat Bugzilla case about SPF record errors.

### Update cPanel account

 - [GET /modifyacct](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/accounts-modifyacct.md): This function modifies a cPanel account.

Warning:

We strongly recommend that you do not modify a single cPanel account's settings if that cPanel account uses a hosting plan (package). If the package values change, the system will overwrite any of your custom values with the package's new values.

Note:

On servers that run CentOS 7, you may see a named warning about the absence of SPF resource records on DNS.
  * This warning is not relevant on CentOS 7 servers, because RFC 7208 deprecated SPF records. CentOS 7 servers use TXT records instead of SPF records.
  * Red Hat 7.1 and CentOS 7.1 both contain bind-9.9.4-23.el7, which is an updated version of BIND that complies with RFC 7208. To resolve this issue, update your operating system to a version that contains the updated version of BIND. For more information, read the Red Hat Bugzilla case about SPF record errors.

### Return cPanel account system privileges

 - [GET /myprivs](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/acls-myprivs.md): This function retrieves the current user's Access Control List (ACL) privileges.

### Enable or disable Digest Authentication

 - [GET /set_digest_auth](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/sys-set_digest_auth.md): This function enables or disables Digest Authentication for an account. Windows Vista®,
Windows® 7, and Windows® 8 requires that you enable Digest Authentication support in order
to access your Web Disk over a clear text,
unencrypted connection.

Note:

If the server has an SSL certificate that a recognized certificate authority signed and you
can make an SSL connection over port 2078, you do not need to enable Digest Authentication.

### Remove UID or GID from tracked list

 - [GET /untrack_acct_id](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/accounts-untrack_acct_id.md): This function removes a user identification number (UID) or group
identification number (GID) from the tracked ID list.

## Account Management

Accounts / Account Management

### Return cPanel account summary

 - [GET /accountsummary](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/accounts-accountsummary.md): This function retrieves a summary of a user's account.

Note:

You must use either the user or domain parameters.

### Update user hosting plan

 - [GET /changepackage](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/accounts-changepackage.md): This function changes a cPanel account's hosting plan (package).

### Return home directories list

 - [GET /get_homedir_roots](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/accounts-get_homedir_roots.md): This function returns all the directories where the system stores
users' home directories. It returns them in descending order, based on the
current amount of available free disk space for each directory. For example,
the first directory the function lists has the most available free disk space.

Note:

Use WHM's Basic WebHost Manager Setup (WHM >> Home >> Server Configuration >> Basic WebHost Manager Setup) to configure where the system will create a new user's home directory.

### Get upgrade opportunities

 - [GET /get_upgrade_opportunities](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/accounts-get_upgrade_opportunities.md): This function lists accounts that could benefit from upgrading to a different package.
The listed accounts may be nearing (or exceeding) resource usage thresholds.

### Validate cPanel account Digest Authentication

 - [GET /has_digest_auth](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/sys-has_digest_auth.md): This function checks whether Digest Authentication is enabled for
a cPanel user. Windows® Vista, Windows® 7, and Windows® 8 require Digest Authentication
support in order to access Web Disk over an unencrypted connection.

### Validate MySQL Configuration file

 - [GET /has_mycnf_for_cpuser](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/sys-has_mycnf_for_cpuser.md): This function checks whether a cPanel user's home directory contains
a valid .my.cnf file.

### Return root and cPanel accounts

 - [GET /list_users](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/accounts-list_users.md): This function lists the cPanel user accounts and the root user on the server.

### Return cPanel accounts

 - [GET /listaccts](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/accounts-listaccts.md): This function lists the accounts on the server.

### Update multiple cPanel accounts

 - [GET /massmodifyacct](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/accounts-massmodifyacct.md): This function modifies multiple cPanel accounts.

Warning:

* We strongly recommend that you do not modify a cPanel account's settings
if that account uses a hosting plan (package). If the package values change, the
system will overwrite any of your custom values with the package's new values.
* This function uses case-sensitive parameters. You must enter parameters in
the correct case format. If you do not, the function will ignore that parameter.

Note:

On servers that run CentOS 7, you may see a named warning about the absence of
SPF resource records on DNS.
  * This warning is not relevant on CentOS 7 servers, because
  RFC 7208 deprecated SPF records. CentOS 7
  servers use TXT records instead of SPF records.
  * Red Hat 7.1 and CentOS 7.1 both contain bind-9.9.4-23.el7, which is an updated
  version of BIND that complies with RFC 7208. To resolve this issue, update your
  operating system to a version that contains the updated version of BIND. For more
  information, read the Red Hat Bugzilla case about SPF record errors.

### Update cPanel account

 - [GET /modifyacct](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/accounts-modifyacct.md): This function modifies a cPanel account.

Warning:

We strongly recommend that you do not modify a single cPanel account's settings if that cPanel account uses a hosting plan (package). If the package values change, the system will overwrite any of your custom values with the package's new values.

Note:

On servers that run CentOS 7, you may see a named warning about the absence of SPF resource records on DNS.
  * This warning is not relevant on CentOS 7 servers, because RFC 7208 deprecated SPF records. CentOS 7 servers use TXT records instead of SPF records.
  * Red Hat 7.1 and CentOS 7.1 both contain bind-9.9.4-23.el7, which is an updated version of BIND that complies with RFC 7208. To resolve this issue, update your operating system to a version that contains the updated version of BIND. For more information, read the Red Hat Bugzilla case about SPF record errors.

### Return cPanel account system privileges

 - [GET /myprivs](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/acls-myprivs.md): This function retrieves the current user's Access Control List (ACL) privileges.

### Return data from NVData file

 - [POST /personalization_get](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/personalization-personalization_get.md): This function retrieves the data from an NVData file on disk. cPanel
NVData is a per-account configuration storage mechanism that you can use to
maintain persistent cPanel & WHM settings across multiple sessions. This includes
custom settings for your own themes.

Note:

You can only call this function as a JSON request. For more information about
additional output options, run the whmapi1 --help command.

### Save data to NVData file

 - [POST /personalization_set](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/personalization-personalization_set.md): This function is used to save personalization data for a WHM user to a
datastore on disk.

We call this system cPanel NVData. 

cPanel NVData is a per-login configuration storage mechanism that you can use to
maintain persistent user interface settings across multiple sessions.

This includes custom settings for your own themes and plugins.

This function is used to save personalzation data for WHM users only. If you want to save personalization data for cPanel users, use the
UAPI function personalization_set.

### Delete cPanel account

 - [GET /removeacct](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/accounts-removeacct.md): This function deletes a cPanel or WHM account.

### Enable or disable Digest Authentication

 - [GET /set_digest_auth](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/sys-set_digest_auth.md): This function enables or disables Digest Authentication for an account. Windows Vista®,
Windows® 7, and Windows® 8 requires that you enable Digest Authentication support in order
to access your Web Disk over a clear text,
unencrypted connection.

Note:

If the server has an SSL certificate that a recognized certificate authority signed and you
can make an SSL connection over port 2078, you do not need to enable Digest Authentication.

### Change document root for cPanel account primary domain

 - [GET /set_primary_domain_docroot](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/accounts-set_primary_domain_docroot.md): This function changes the document root for a cPanel account's primary domain.

To change the document root for an addon domain or subdomain, use the cPanel
UAPI SubDomain::changedocroot function instead.

Important:

- The target directory must already exist before you call this function.
  The API function does not create it.
- This function does not move any files. You must ensure that the files
  exist in the new path when you call this function.
- Any parked domains (ServerAlias entries) on the affected domain will
  inherit the new document root.
- AutoSSL HTTP-01 renewals will fail if the new document root is empty
  or missing at renewal time.
- To revert a document root change, call this function again with the
  original path.

### Remove UID or GID from tracked list

 - [GET /untrack_acct_id](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/accounts-untrack_acct_id.md): This function removes a user identification number (UID) or group
identification number (GID) from the tracked ID list.

## Packages

The Packages module for WHM API 1.

### Update user hosting plan

 - [GET /changepackage](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/accounts-changepackage.md): This function changes a cPanel account's hosting plan (package).

### Add cPanel account feature list overrides

 - [GET /add_override_features_for_user](https://api.docs.cpanel.net/specifications/whm.openapi/feature-access/accounts-add_override_features_for_user.md): This function adds feature overrides to a cPanel account.

### Return cPanel accounts' feature settings

 - [GET /get_users_features_settings](https://api.docs.cpanel.net/specifications/whm.openapi/feature-access/featurelists-get_users_features_settings.md): This function lists the features settings of cPanel accounts.

### Remove cPanel account feature list overrides

 - [GET /remove_override_features_for_user](https://api.docs.cpanel.net/specifications/whm.openapi/feature-access/accounts-remove_override_features_for_user.md): This function removes feature overrides from a cPanel account.

### Return cPanel account feature access

 - [GET /verify_user_has_feature](https://api.docs.cpanel.net/specifications/whm.openapi/feature-access/accounts-verify_user_has_feature.md): This function checks whether a user has access to a feature on a feature list.

### Create feature list

 - [GET /create_featurelist](https://api.docs.cpanel.net/specifications/whm.openapi/feature-lists/featurelists-create_featurelist.md): This function creates or updates a feature list.

Note:

A reseller must possess the
Add/Remove Package feature
to use this function.

### Delete feature list

 - [GET /delete_featurelist](https://api.docs.cpanel.net/specifications/whm.openapi/feature-lists/featurelists-delete_featurelist.md): This function deletes a feature list.

### Return dynamicui file

 - [GET /get_available_applications](https://api.docs.cpanel.net/specifications/whm.openapi/feature-lists/dynamicui-get_available_applications.md): This function returns the contents of a dynamicui file. For more
information, read our
Guide to WHM dynamicui Files
documentation.

### Return current user's available feature lists info

 - [GET /get_feature_metadata](https://api.docs.cpanel.net/specifications/whm.openapi/feature-lists/featurelists-get_feature_metadata.md): This function lists the details of the authenticated user's available feature lists.

### Return all features

 - [GET /get_feature_names](https://api.docs.cpanel.net/specifications/whm.openapi/feature-lists/featurelists-get_feature_names.md): This function lists all available features.

### Return feature list configuration

 - [GET /get_featurelist_data](https://api.docs.cpanel.net/specifications/whm.openapi/feature-lists/featurelists-get_featurelist_data.md): This function lists features in a specific feature list.

### Return current user's available feature lists

 - [GET /get_featurelists](https://api.docs.cpanel.net/specifications/whm.openapi/feature-lists/featurelists-get_featurelists.md): This function lists the authenticated user's available feature lists.

Notes:

* When you call this function with the root account, it returns all feature lists on the server.
* When you call this function with a reseller account, it only returns feature lists that the account owns.

### Return feature lists by package type

 - [GET /get_featurelists_by_package_types](https://api.docs.cpanel.net/specifications/whm.openapi/feature-lists/featurelists-get_featurelists_by_package_types.md): This function lists features grouped by package type.

### Update feature list

 - [GET /update_featurelist](https://api.docs.cpanel.net/specifications/whm.openapi/feature-lists/featurelists-update_featurelist.md): This function creates or updates a feature list.

### (Deprecated) Get available feature lists (deprecated)

 - [GET /get_available_featurelists](https://api.docs.cpanel.net/specifications/whm.openapi/feature-lists/featurelists-get_available_featurelists.md): DEPRECATED: Use get_featurelists instead.

This function lists the authenticated user's available feature lists.

Notes:

* This function is deprecated because it treats a lack of available feature lists as an error for non-admin resellers, which is incorrect behavior.
* When you call this function with the root account, it returns all feature lists on the server.
* When you call this function with a reseller account, it only returns feature lists that the account owns.

### (Deprecated) Read feature list settings (deprecated)

 - [GET /read_featurelist](https://api.docs.cpanel.net/specifications/whm.openapi/feature-lists/featurelists-read_featurelist.md): DEPRECATED: Use get_featurelist_data instead.

This function reads a feature list and returns a hash that maps feature IDs to values indicating whether each feature is enabled.

Notes:

* The function requires the featurelist parameter to specify which feature list to read.
* Access is controlled based on user permissions. Resellers can only access their own feature lists.

### Return hosting plan extension templates

 - [GET /_getpkgextensionform](https://api.docs.cpanel.net/specifications/whm.openapi/hosting-plan-extensions/accounts-_getpkgextensionform.md): This function retrieves a hosting plan's package extension templates. When you call this
function, the system checks the hosting plan's _PACKAGE_EXTENSIONS value.  The function
returns the contents of the /var/cpanel/packages/extensions/name.tt2 file for each package
extension in the list, where name represents the package extension's name.

For more information, read our
Guide to Package Extensions.

Note:

This function returns only metadata if the hosting plan does not use package extensions, or
if the extensions' template files are empty.

### Add hosting plan extension

 - [GET /addpkgext](https://api.docs.cpanel.net/specifications/whm.openapi/hosting-plan-extensions/packages-addpkgext.md): This function adds a package extension to a hosting plan (package).

Notes:

* If you need to edit a package extension's parameters, call this function again
with the same package extension name and the updated package extension variables.

* You can include the extension's variables in your function call, in key=value format.
  Consult the extension's documentation for a list of possible variables. Extension variables
  are case-sensitive.

### Remove hosting plan extension

 - [GET /delpkgext](https://api.docs.cpanel.net/specifications/whm.openapi/hosting-plan-extensions/packages-delpkgext.md): This function deletes a package extension from a hosting plan (package).

Note:

* You can additionally include extension's variables in your function call, in key=value format.
  Consult the extension's documentation for a list of possible variables. Extension variable names are case-sensitive.

### Create hosting plan

 - [GET /addpkg](https://api.docs.cpanel.net/specifications/whm.openapi/hosting-plans/packages-addpkg.md): This function creates a hosting plan (package).

Note:

The Access Control Lists
restricts some of this function's parameters, which limit the features that
WHM users can access.

### Update hosting plan

 - [GET /editpkg](https://api.docs.cpanel.net/specifications/whm.openapi/hosting-plans/packages-editpkg.md): This function edits a hosting plan (package).

Note:

* The
Access Control List (ACL)
restricts some of the function's parameters, which limit the features that WHM
users can access.
* This function applies any changes you make to all accounts that exist on
the hosting plan.
* This function cannot modify hosting plan names.

### Return hosting plan configuration

 - [GET /getpkginfo](https://api.docs.cpanel.net/specifications/whm.openapi/hosting-plans/packages-getpkginfo.md): This function lists a hosting plan's (package's) settings.

### Delete hosting plan

 - [GET /killpkg](https://api.docs.cpanel.net/specifications/whm.openapi/hosting-plans/packages-killpkg.md): This function deletes a hosting plan (package).

### Return current user's available hosting plans

 - [GET /listpkgs](https://api.docs.cpanel.net/specifications/whm.openapi/hosting-plans/packages-listpkgs.md): This function lists the authenticated user's available hosting plans (packages).

Important:

This function only returns packages that the authenticated user can access and
use during account creation.

### Return filtered hosting plans

 - [GET /matchpkgs](https://api.docs.cpanel.net/specifications/whm.openapi/hosting-plans/packages-matchpkgs.md): This function matches the server's hosting plans (packages) against
your criteria.

Note:

If you do not include any input parameters, the function lists all of
the server's packages.

### Update Feature Showcase

 - [GET /manage_features](https://api.docs.cpanel.net/specifications/whm.openapi/updates/managefeatures-manage_features.md): This function lists and manages items in the
Feature Showcase.

Note:

* This function's output changes, depending on which value you pass to the action parameter.
* The example in this document displays the function's return when the action
parameter value is info.

## Server Administration

The Server Administration module for WHM API 1.

### Return data from NVData file

 - [POST /personalization_get](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/personalization-personalization_get.md): This function retrieves the data from an NVData file on disk. cPanel
NVData is a per-account configuration storage mechanism that you can use to
maintain persistent cPanel & WHM settings across multiple sessions. This includes
custom settings for your own themes.

Note:

You can only call this function as a JSON request. For more information about
additional output options, run the whmapi1 --help command.

### Save data to NVData file

 - [POST /personalization_set](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/personalization-personalization_set.md): This function is used to save personalization data for a WHM user to a
datastore on disk.

We call this system cPanel NVData. 

cPanel NVData is a per-login configuration storage mechanism that you can use to
maintain persistent user interface settings across multiple sessions.

This includes custom settings for your own themes and plugins.

This function is used to save personalzation data for WHM users only. If you want to save personalization data for cPanel users, use the
UAPI function personalization_set.

### Return deprecated cPanel API 1 functions by date

 - [GET /get_api_calls](https://api.docs.cpanel.net/specifications/whm.openapi/api-statistics/sys-get_api_calls.md): This function returns the cPanel API 1 functions that the system called on specific dates.
This is useful, for example, to check whether your system calls any cPanel API 1 functions.

Important:

The function only returns cPanel API 1 functions. We deprecated cPanel API 1 and plan
to remove those functions at a later date. For more information, read our
Guide to Replacing cPanel API 1 Functions with UAPI Equivalents
documentation.

### Return deprecated cPanel API 1 functions

 - [GET /get_api_pages](https://api.docs.cpanel.net/specifications/whm.openapi/api-statistics/sys-get_api_pages.md): This function returns the daily interface use of cPanel API 1 functions. Use this function to find out which API calls your custom interfaces or third-party plugins use.

Important:

  The function only returns cPanel API 1 functions. We deprecated cPanel API 1 and plan to remove those functions at a later date. For more information, read our Guide to Replacing cPanel API 1 Functions with UAPI Equivalents documentation.

### Return registered applications

 - [GET /get_appconfig_application_list](https://api.docs.cpanel.net/specifications/whm.openapi/applications/sys-get_appconfig_application_list.md): This function lists registered AppConfig applications.

### Create a temporary user session

 - [GET /create_user_session](https://api.docs.cpanel.net/specifications/whm.openapi/session/session-create_user_session.md): This function creates a new temporary user session for a specified service.
This allows users with WHM access to log in to third-party applications
(for example, billing systems) without storing the account password.

Note:

* The system destroys the temporary session after 15 minutes of inactivity.
* For more information about the Single Sign On feature, read our
Guide to API Authentication
documentation.

### Create login link for Dashboard

 - [GET /wp_dashboard_create_login_link](https://api.docs.cpanel.net/specifications/whm.openapi/session/wpdashboard-wp_dashboard_create_login_link.md): This function creates a single-use WHM session for re-entry from WebPros Dashboard.

### Return remote access file's hash (deprecated)

 - [GET /get_remote_access_hash](https://api.docs.cpanel.net/specifications/whm.openapi/api-authentication/resellers-get_remote_access_hash.md): This function retrieves a hash from a remote access file.

Warning:

We deprecated this function. We strongly suggest that you use the WHM API 1 api_token_list function.

### Remove Exim configuration files after failed update

 - [GET /remove_in_progress_exim_config_edit](https://api.docs.cpanel.net/specifications/whm.openapi/mail-server-settings/exim-remove_in_progress_exim_config_edit.md): This function removes in-progress Exim configuration files after
a failed update to Exim. When cPanel & WHM attempts to update an Exim configuration,
the system creates dry run files to replace of the ordinary configuration
files.

Note:

* If the update fails, the system leaves these dry run files in place.
 When the user accesses the Advanced Editor section of WHM's Exim Configuration Manager*
interface (_Home >> Service Configuration >> Exim Configuration Manager_),
they access these dry run files instead of the actual configuration files.

### Add configuration cluster server

 - [POST /add_configclusterserver](https://api.docs.cpanel.net/specifications/whm.openapi/configuration-clusters/clusterserver-add_configclusterserver.md): This function adds a server to a configuration cluster. The function's return data appears in
the metadata section of its output.

We recommend that you run this function as a POST request with SSL enabled:

* The length of the remote access key may cause problems if you run the function with the GET
method (for example, a URL in your browser).
* You risk security problems if you enter a remote access key through the GET method.

Important:

* Run this function as a root-level user on the server that you wish to use as the parent server.
* If you log in to a configuration cluster server that is not the parent server, nothing
will indicate that the server is part of a configuration cluster. You can only view and modify
this information from the parent server.

### Delete server from configuration cluster

 - [GET /delete_configclusterserver](https://api.docs.cpanel.net/specifications/whm.openapi/configuration-clusters/clusterserver-delete_configclusterserver.md): This function removes a server from a configuration cluster. The function's return
data appears in the metadata section of its output.

Important:

If you log in to a configuration cluster server that is not the parent server,
nothing will indicate that the server is part of a configuration cluster. You can
only view and modify this information from the parent server.

### Return all configuration cluster servers

 - [GET /list_configclusterservers](https://api.docs.cpanel.net/specifications/whm.openapi/configuration-clusters/clusterserver-list_configclusterservers.md): This function lists the servers in the server's configuration cluster.

Warning:

* WHM's Remote Access Key feature is deprecated. We strongly recommend that you use API tokens instead.

* If you log in to a configuration cluster server that is not the parent server, nothing will indicate that the server is part of a configuration cluster. You can only view and modify this information from the parent server.

### Update configuration file from backup

 - [GET /restore_config_from_file](https://api.docs.cpanel.net/specifications/whm.openapi/configuration-clusters/cpanel-restore_config_from_file.md): This function restores a configuration backup from a file. If the backup file does not contain any changes, the system does not write to the configuration file.

### Update configuration file from backup via POST

 - [POST /restore_config_from_upload](https://api.docs.cpanel.net/specifications/whm.openapi/configuration-clusters/cpanel-restore_config_from_upload.md): This function restores a configuration backup file via HTTP POST
method. If the backup file does not contain any changes, the system does not write to the configuration file.

Note:

The format for this command line example differs from our standard format because the function only accepts an HTTP POST request. For more information about how to call this request method, read Mozilla's POST documentation.

### Update configuration cluster server credentials

 - [GET /update_configclusterserver](https://api.docs.cpanel.net/specifications/whm.openapi/configuration-clusters/clusterserver-update_configclusterserver.md): This function updates the username or remote access key for a cluster server.

Important:

 If you log in to a configuration cluster server that is not the parent server, nothing will indicate that the server is part of a configuration cluster. You can only* view and modify this information from the master server.

* We recommend that you run this function as a POST request with SSL enabled:
  * The length of the remote access key may cause problems if you run the function with the GET method (for example, a URL in your browser).
  * You risk security problems if you enter a remote access key through the GET method.

### Fetch application connection information

 - [POST /fetch_connected_application](https://api.docs.cpanel.net/specifications/whm.openapi/connected-applications/connectedapplications-fetch_connected_application.md): Retrieve the connection information related to a application that has been granted
access to this server. This data may include any number of properties, but its
primary purpose is to associate API tokens and public/private key pairs and similar
resources with a specific connected application.

### List application connection information

 - [POST /list_connected_applications](https://api.docs.cpanel.net/specifications/whm.openapi/connected-applications/connectedapplications-list_connected_applications.md): Retrieve the connection information for all the connected applications that have been
granted access to this server. This data may include any number of properties, but its
primary purpose is to associate API tokens and public/private key pairs and similar
resources with a specific connected application.

### Remove application connection information

 - [POST /remove_connected_application](https://api.docs.cpanel.net/specifications/whm.openapi/connected-applications/connectedapplications-remove_connected_application.md): Remove the connected application from the server. This only removes the connection
information from the configuration file. It does not clean up any allocated
resources, such as API tokens and public/private keys. Any tokens or keys need to be
removed from the system separately.

### Save application connection information.

 - [POST /save_connected_application](https://api.docs.cpanel.net/specifications/whm.openapi/connected-applications/connectedapplications-save_connected_application.md): Save or update connection data about a specific connected application.

### Return TCP IPv4 sockets data

 - [GET /get_tcp4_sockets](https://api.docs.cpanel.net/specifications/whm.openapi/connections/sys-get_tcp4_sockets.md): This function returns data about the system's transmission control protocol (TCP) IPv4 sockets.

### Return TCP IPv6 sockets data

 - [GET /get_tcp6_sockets](https://api.docs.cpanel.net/specifications/whm.openapi/connections/sys-get_tcp6_sockets.md): This function returns data about the system's transmission control protocol (TCP) IPv6 sockets.

### Return UDP IPv4 sockets data

 - [GET /get_udp4_sockets](https://api.docs.cpanel.net/specifications/whm.openapi/connections/sys-get_udp4_sockets.md): This function returns data about the system's user datagram protocol (UDP) IPv4 sockets.

### Return UDP IPv6 sockets data

 - [GET /get_udp6_sockets](https://api.docs.cpanel.net/specifications/whm.openapi/connections/sys-get_udp6_sockets.md): This function returns data about the system's user datagram protocol (UDP) IPv6 sockets.

Important:

  This function may perform slower on a CentOS 6 system with a large number of UDP sockets.

### Return cPanel Store or Market checkout URL

 - [GET /purchase_a_license](https://api.docs.cpanel.net/specifications/whm.openapi/license-management/market-purchase_a_license.md): This function returns the checkout URL to use for a cPanel Store or cPanel Market provider purchase.

### Return server's cPanel license status

 - [GET /run_cpkeyclt](https://api.docs.cpanel.net/specifications/whm.openapi/license-management/sys-run_cpkeyclt.md): This function verifies the system's license status with WebPros International, LLC's
licensing servers. To do this, the function runs the /usr/local/cpanel/cpkeyclt
script.

For more information about this script and potential license problems,
read our
Installation Guide - Troubleshoot Your Installation
documentation.

### Return Contact Manager event importance settings

 - [GET /get_all_contact_importances](https://api.docs.cpanel.net/specifications/whm.openapi/notifications/contact-get_all_contact_importances.md): This function lists the importance of all application events in
WHM's
Contact Manager
interface (WHM >> Home >> Server Contacts >> Contact Manager).

### Return app's event contact importance setting

 - [GET /get_application_contact_event_importance](https://api.docs.cpanel.net/specifications/whm.openapi/notifications/contact-get_application_contact_event_importance.md): This function retrieves the importance level of an application event for WHM's Contact Manager interface (Home >> Server Contacts >> Contact Manager).

Note:

  The system will create a notification setting for the application's events if one does not already exist.

### Return app contact importance setting

 - [GET /get_application_contact_importance](https://api.docs.cpanel.net/specifications/whm.openapi/notifications/contact-get_application_contact_importance.md): This function retrieves the importance level of an application's events for WHM's
Contact Manager
interface (WHM >> Home >> Server Contacts >> Contact Manager).

Note:

The system creates a notification setting for the application's events if one does
not already exist.

### Send notification URL via POST

 - [GET /send_test_posturl](https://api.docs.cpanel.net/specifications/whm.openapi/notifications/icontact-send_test_posturl.md): This function uses the specified URL to send a test message through the POST method of HTTP as form data.
The function automatically generates a message title and body and includes a unique string in the test message.
When the test message returns, the system searches for the ID string and returns it.

If the function does not detect the correct ID string in the returned message, the function fails.

The test's success or failure depends on various conditions. For example:
* Valid access token.
* Network configuration.
* Service outages.
* External server rate limit.

### Send Pushbullet™ test with access token

 - [GET /send_test_pushbullet_note](https://api.docs.cpanel.net/specifications/whm.openapi/notifications/icontact-send_test_pushbullet_note.md): This function uses the specified access token to send a test Pushbullet™ note. The function automatically generates a message title and body, and it includes a unique string in the test message. When the test message returns, the system searches for the ID string and returns it.

If the function does not detect the correct ID string in the returned message, the function fails. You can also review the user's Pushbullet channel history to confirm that the server sent and received the message.

The test's success or failure depends on various conditions. For example:
  * Valid access token.
  * Network configuration.
  * Service outages.
  * External server rate limit.

### Update app's event contact importance setting

 - [GET /set_application_contact_event_importance](https://api.docs.cpanel.net/specifications/whm.openapi/notifications/contact-set_application_contact_event_importance.md): This function sets the importance level of an application event for WHM's
Contact Manager
interface (WHM >> Home >> Server Contacts >> Contact Manager).

For a list of available modules, use the WHM API 1
get_all_contact_importances
function.

Note:

The system creates a notification setting for the application's events
if one does not already exist.

### Update app contact importance setting

 - [GET /set_application_contact_importance](https://api.docs.cpanel.net/specifications/whm.openapi/notifications/contact-set_application_contact_importance.md): This function sets the importance level of an application's events for WHM's
Contact Manager
interface (WHM >> Home >> Server Contacts >> Contact Manager).

For a list of available modules, use the WHM API 1
get_all_contact_importances
function.

Note:

The system creates a notification setting for the application's events if one
does not already exist.

### Update WHM contact email address

 - [GET /update_contact_email](https://api.docs.cpanel.net/specifications/whm.openapi/notifications/wwwacct-update_contact_email.md): This function updates the contact email address in the wwwacct.conf file.
For more information, read our 
Installation Guide - Customize Your Installation
documentation.

### Send notification URL via POST verification

 - [GET /verify_posturl_access](https://api.docs.cpanel.net/specifications/whm.openapi/notifications/icontact-verify_posturl_access.md): This function calls the WHM API 1 send_test_posturl function for
your specified POST notification URLs. Users can specify POST notification
URLs in the Contact Information section of WHM's
Basic WebHost Manager Setup
interface (WHM >> Home >> Server Configuration >> Basic WebHost Manager Setup).

Note:

If the Contact Information section of WHM's
Basic WebHost Manager Setup
interface (Home >> Server Configuration >> Basic WebHost Manager Setup) contains
multiple POST URLs, the function will return an array that contains the results
for each URL.

### Send Pushbullet™ access verification

 - [GET /verify_pushbullet_access](https://api.docs.cpanel.net/specifications/whm.openapi/notifications/icontact-verify_pushbullet_access.md): This function calls the WHM API 1 send_test_pushbullet_note function with the system's specified
Pushbullet™ accounts. You can specify Pushbullet accounts in the Contact Information section of WHM's
Basic WebHost Manager Setup
interface (Home >> Server Configuration >> Basic WebHost Manager Setup).

### Verify Slack® Webhook connection

 - [GET /verify_slack_access](https://api.docs.cpanel.net/specifications/whm.openapi/notifications/icontact-verify_slack_access.md): This function verifies the connection to a Slack® WebHook. You can specify Slack accounts in the Contact Information section of WHM's Basic WebHost Manager Setup  interface ( Home >> Server Configuration >> Basic WebHost Manager Setup ).

### Repair distributed accounts with data loss

 - [GET /force_dedistribution_from_node](https://api.docs.cpanel.net/specifications/whm.openapi/server-nodes/cpanel-force_dedistribution_from_node.md): This function converts cPanel accounts that use a given
child node
to use the local server instead.

Unlike the WHM API 1 modifyacct API call, this API does not
transfer users’ data from the child node as part of the conversion.
This API is useful for emergency repairs if, for example, a child
node goes permanently offline while accounts still use it.

Warning:

Because this API does not transfer users’ data from the child node,
all converted users will lose data. You should only call this API
as a last resort.

### Return linked remote server node settings

 - [GET /get_linked_server_node](https://api.docs.cpanel.net/specifications/whm.openapi/server-nodes/cpanel-get_linked_server_node.md): This function returns details about a linked remote server node.

### Return linked server node status

 - [GET /get_server_node_status](https://api.docs.cpanel.net/specifications/whm.openapi/server-nodes/cpanel-get_server_node_status.md): This function returns the status of a linked remote server node. It returns
the linked remote server's status with the WHM API 1 version and get_current_profile functions.

### Add linked server node

 - [GET /link_server_node_with_api_token](https://api.docs.cpanel.net/specifications/whm.openapi/server-nodes/cpanel-link_server_node_with_api_token.md): This function links your server to a remote server node. The server uses an API token
to communicate with the remote server node.

Important:

* This function only runs on a
Standard Node profile
server.
* The remote server node must use a version that is the same as or greater than your
server version.
* This function requires the use of an API token. For more information, read our
Guide to API Authentication - API Tokens in WHM
documentation.

### Return all linked server nodes

 - [GET /list_linked_server_nodes](https://api.docs.cpanel.net/specifications/whm.openapi/server-nodes/cpanel-list_linked_server_nodes.md): This function returns a list of all remote server nodes linked to the server. It also provides details about each remote server node.

### Return cPanel accounts with server name and type

 - [GET /list_user_child_nodes](https://api.docs.cpanel.net/specifications/whm.openapi/server-nodes/cpanel-list_user_child_nodes.md): This function returns the system's cPanel accounts and the linked cPanel & WHM server on which they exist.

### Remove linked server node

 - [GET /unlink_server_node](https://api.docs.cpanel.net/specifications/whm.openapi/server-nodes/cpanel-unlink_server_node.md): This function unlinks a remote server node from your server.

Important:

  This function does not unlink mail servers that are currently in use. 
  You must first delete any accounts that use the linked mail server.

### Update linked server node settings

 - [GET /update_linked_server_node](https://api.docs.cpanel.net/specifications/whm.openapi/server-nodes/cpanel-update_linked_server_node.md): This function updates a linked remote cPanel server node.

Important:

This function requires the use of an API token. For more information,
read our Guide to API Authentication - API Tokens in WHM
documentation.

### Return available server profiles

 - [GET /get_available_profiles](https://api.docs.cpanel.net/specifications/whm.openapi/server-profiles/cpanel-get_available_profiles.md): This function returns a list of available server profiles.

### Return server's node profile

 - [GET /get_current_profile](https://api.docs.cpanel.net/specifications/whm.openapi/server-profiles/cpanel-get_current_profile.md): This function returns details about the server's current
cPanel & WHM server profile.

### Return whether server role is enabled

 - [GET /is_role_enabled](https://api.docs.cpanel.net/specifications/whm.openapi/server-profiles/cpanel-is_role_enabled.md): This function checks whether a specific server role is currently enabled
for the server.

For more information about server roles, read our How to Use Server Profiles documentation.

### Update server node profile

 - [GET /start_profile_activation](https://api.docs.cpanel.net/specifications/whm.openapi/server-profiles/cpanel-start_profile_activation.md): This function activates a server profile.

Note:

 If a server profile enables a service, the system will also enable service monitoring. To disable a service's monitoring, use WHM's Service Manager interface (WHM >> Home >> Service Configuration >> Service Manager*).
* For a list of the server's available profiles, use the get_available_profiles function.

### Update background process stopper

 - [GET /configurebackgroundprocesskiller](https://api.docs.cpanel.net/specifications/whm.openapi/services/sys-configurebackgroundprocesskiller.md): This function configures the server's background process killer.

### Enable or disable a service and its monitoring

 - [GET /configureservice](https://api.docs.cpanel.net/specifications/whm.openapi/services/services-configureservice.md): This function enables or disables a service and its monitoring.

Note:

If the user only possesses the clustering
Access Control List (ACL),
then this function can only act on the named service.

### Enable monitoring for all services

 - [GET /enable_monitor_all_enabled_services](https://api.docs.cpanel.net/specifications/whm.openapi/services/services-enable_monitor_all_enabled_services.md): This function enables monitoring for all enabled services.

### Return service configuration settings

 - [GET /get_service_config](https://api.docs.cpanel.net/specifications/whm.openapi/services/advconfig-get_service_config.md): This function returns a service's configuration settings.

### Return service configuration key

 - [GET /get_service_config_key](https://api.docs.cpanel.net/specifications/whm.openapi/services/advconfig-get_service_config_key.md): This function returns a specific configuration key for a service.

### Restart service

 - [GET /restartservice](https://api.docs.cpanel.net/specifications/whm.openapi/services/services-restartservice.md): This function restarts a service, or daemon, on a server.

Note:

If the user only possesses the clustering
Access Control List (ACL)
then this function can only act on the named service.

### Return service status

 - [GET /servicestatus](https://api.docs.cpanel.net/specifications/whm.openapi/services/services-servicestatus.md): This function reports which services (daemons) are enabled, installed, and monitored on your server.

### Update service configuration key

 - [GET /set_service_config_key](https://api.docs.cpanel.net/specifications/whm.openapi/services/advconfig-set_service_config_key.md): This function configures global properties for specific services listed in the /var/cpanel/conf directory.

### Return server's drive partition information

 - [GET /getdiskusage](https://api.docs.cpanel.net/specifications/whm.openapi/system-information/sys-getdiskusage.md): This function retrieves the server's drive partition information.

### Return server's hostname

 - [GET /gethostname](https://api.docs.cpanel.net/specifications/whm.openapi/system-information/sys-gethostname.md): This function retrieves the server's hostname.

### Restart server

 - [GET /reboot](https://api.docs.cpanel.net/specifications/whm.openapi/system-information/sys-reboot.md): This function reboots the server.

### Update server's primary virtual host

 - [GET /set_primary_servername](https://api.docs.cpanel.net/specifications/whm.openapi/system-information/httpd-set_primary_servername.md): This function sets the primary domain hosted on an IP address and web server port. The primary domain refers to the virtual host that the server returns when a visitor directly accesses the IP address.

For example, if both example1.com and example2.com are name-based virtual hosts on IP address 192.168.0.1, the primary virtual host appears when the visitor accesses the http://192.168.0.1/ location.

Important:

When you disable the Web Server role, the system disables this function.

### Update server's hostname

 - [GET /sethostname](https://api.docs.cpanel.net/specifications/whm.openapi/system-information/hostname-sethostname.md): This function changes the server's hostname.

Warning:

* Do not select a hostname that begins with www or a number, or a
hostname that ends with a hyphen (-) character.
* You must use a fully-qualified domain name (FQDN) that contains two periods
(for example, hostname.example.com).
* Do not choose a hostname that a cPanel account on your server will use.
* Do not choose a potential service subdomain (proxy subdomain) as a hostname
(for example, cpanel.example.com or whm.example.com).

Important:

If you update your hostname, the system blocks user access to cPanel's Calendars and Contacts interface (cPanel >> Home >> Email >> Calendars and Contacts).

The system restores access to this interface after the hostname update finishes.
For more information, read our
Interface Lock Scripts
documentation.

Note:

Whenever you change the server's hostname, you must use one of the following methods:
  * Use WHM's
  Change Hostname
  interface (WHM >> Home >> Networking Setup >> Change Hostname).
  * Call WHM API 1's sethostname function.
  * Run the
  /usr/local/cpanel/bin/set_hostname utility
  as the root user.
These methods ensure that all of the necessary system and service changes occur.

### Return whether system needs reboot

 - [GET /system_needs_reboot](https://api.docs.cpanel.net/specifications/whm.openapi/system-information/applicationversions-system_needs_reboot.md): This function determines if your system requires a reboot to apply quotas, software package updates, or kernel updates.

Important:

This function cannot detect whether your system needs a reboot if you use cPanel & WHM inside of a Linux Container (LXC).

### Return system load average

 - [GET /systemloadavg](https://api.docs.cpanel.net/specifications/whm.openapi/system-information/cpanel-systemloadavg.md): This function retrieves the system's load average.

Note:

The values the function returns represent a percentage of the CPU's processor capacity.

### Return server's hostname

 - [GET /wp_dashboard_get_hostname](https://api.docs.cpanel.net/specifications/whm.openapi/system-information/wpdashboard-wp_dashboard_get_hostname.md): This function retrieves the server's hostname. WebPros Dashboard uses this function to discover the WHM API endpoint.

### Return if server uses the default update version

 - [GET /get_update_availability](https://api.docs.cpanel.net/specifications/whm.openapi/updates/update-get_update_availability.md): This function checks whether your server uses the
latest version of cPanel & WHM for your release tier.

### Start cPanel & WHM update

 - [GET /start_cpanel_update](https://api.docs.cpanel.net/specifications/whm.openapi/updates/cpanel-start_cpanel_update.md): This function starts an update of cPanel & WHM.

## Bandwidth and Disk Quotas

Accounts / Bandwidth and Disk Quotas

### Update cPanel account disk quota

 - [GET /editquota](https://api.docs.cpanel.net/specifications/whm.openapi/bandwidth-and-disk-quotas/accounts-editquota.md): This function modifies a user's disk quota.

### Return all cPanel accounts disk usage

 - [GET /get_disk_usage](https://api.docs.cpanel.net/specifications/whm.openapi/bandwidth-and-disk-quotas/diskusage-get_disk_usage.md): This function lists the disk usage status of the system's user accounts. This also lists information about file system object (inode) usage.

### Update cPanel account bandwidth quota

 - [GET /limitbw](https://api.docs.cpanel.net/specifications/whm.openapi/bandwidth-and-disk-quotas/bandwidth-limitbw.md): This function modifies a cPanel account's bandwidth quota.

### Validate cPanel account quotas

 - [GET /quota_enabled](https://api.docs.cpanel.net/specifications/whm.openapi/bandwidth-and-disk-quotas/quota-quota_enabled.md): This function checks if quotas are enabled on at least one of a user's /home directory mounts.

### Return cPanel account bandwidth information

 - [GET /showbw](https://api.docs.cpanel.net/specifications/whm.openapi/bandwidth-and-disk-quotas/bandwidth-showbw.md): This function retrieves account bandwidth information.

## Domain Information

Accounts / Domain Information

### Return additional domain conversion details

 - [GET /convert_addon_fetch_conversion_details](https://api.docs.cpanel.net/specifications/whm.openapi/domain-information/convertaddon-convert_addon_fetch_conversion_details.md): This function returns the details of a conversion from an addon
domain to an account. Use WHM API 1's convert_addon_domain_to_account
to start a conversion.

Important:

When you disable the
Web Server role,
the system disables this function.

### Return additional domain data

 - [GET /convert_addon_fetch_domain_details](https://api.docs.cpanel.net/specifications/whm.openapi/domain-information/convertaddon-convert_addon_fetch_domain_details.md): This function retrieves domain data for an addon domain.

Important:

When you disable the
Web Server role,
the system disables this function.

### Return conversion status for additional domain

 - [GET /convert_addon_get_conversion_status](https://api.docs.cpanel.net/specifications/whm.openapi/domain-information/convertaddon-convert_addon_get_conversion_status.md): This function returns the status of the convert addon domain to
account process for specified conversion jobs. For data about the conversion
status of all jobs, use the WHM API 1 convert_addon_fetch_conversion_details
function.

Important:

When you disable the
Web Server role,
the system disables this function.

### Start additional domain conversion

 - [GET /convert_addon_initiate_conversion](https://api.docs.cpanel.net/specifications/whm.openapi/domain-information/convertaddon-convert_addon_initiate_conversion.md): This function initiates the conversion process for an addon domain
into a cPanel account.

Note:

For information about the data that the system migrates when you convert an
addon domain, read our
Addon Domain Conversion List documentation.

Important:

When you disable the Web Server role,
the system disables this function.

### Return current user's additional domains

 - [GET /convert_addon_list_addon_domains](https://api.docs.cpanel.net/specifications/whm.openapi/domain-information/convertaddon-convert_addon_list_addon_domains.md): This function returns a list of addon domains that belong to the current user.

Important:
When you disable the Web Server role, the system disables this function.

### Return additional domains conversion queue

 - [GET /convert_addon_list_conversions](https://api.docs.cpanel.net/specifications/whm.openapi/domain-information/convertaddon-convert_addon_list_conversions.md): This function returns a list of addon domains undergoing conversion
into cPanel accounts.

Important:

When you disable the Web Server role, the system disables this function.

### Return domain user information

 - [GET /domainuserdata](https://api.docs.cpanel.net/specifications/whm.openapi/domain-information/accounts-domainuserdata.md): This function retrieves domain data.

### Return all domains information

 - [GET /get_domain_info](https://api.docs.cpanel.net/specifications/whm.openapi/domain-information/accounts-get_domain_info.md): This function returns information about each domain on the server.

### Return domain owner

 - [GET /getdomainowner](https://api.docs.cpanel.net/specifications/whm.openapi/domain-information/accounts-getdomainowner.md): This function lists the owner of a domain.

## Passwords

Accounts / Passwords

### Enable forced password update

 - [GET /forcepasswordchange](https://api.docs.cpanel.net/specifications/whm.openapi/passwords/accounts-forcepasswordchange.md): This function forces a user to change the account password after the next login attempt.

### Return password strength

 - [GET /get_password_strength](https://api.docs.cpanel.net/specifications/whm.openapi/passwords/accounts-get_password_strength.md): This function measures the strength of a password.

### Update cPanel account password

 - [GET /passwd](https://api.docs.cpanel.net/specifications/whm.openapi/passwords/sys-passwd.md): This function modifies a cPanel or reseller account's password.

Note

* When modifying the root password, this will only update the password for the root system user, but not for the root MySQL user.
* To update the MySQL root user's password, use set_local_mysql_root_password.

## Styles

The Server Administration module for WHM API 1.

### Return cPanel account theme's app keys and URLs

 - [GET /get_users_links](https://api.docs.cpanel.net/specifications/whm.openapi/styles/plugins-get_users_links.md): This function returns a list of
application keys
(appkeys) and the URLs that correspond to applications for the cPanel user's theme.
Use the appkey values for the app parameter's value in the WHM API 1 create_user_session
function.

## Suspensions

Accounts / Suspensions

### Return suspended cPanel accounts

 - [GET /listlockedaccounts](https://api.docs.cpanel.net/specifications/whm.openapi/suspensions/accounts-listlockedaccounts.md): This function lists locked accounts on the server. Only WHM users with
root-level privileges can unsuspend locked accounts.

### Return suspended cPanel accounts and information

 - [GET /listsuspended](https://api.docs.cpanel.net/specifications/whm.openapi/suspensions/accounts-listsuspended.md): This function lists suspended accounts on the server.

### Suspend cPanel account

 - [GET /suspendacct](https://api.docs.cpanel.net/specifications/whm.openapi/suspensions/accounts-suspendacct.md): This function suspends an account.

### Unsuspend cPanel account

 - [GET /unsuspendacct](https://api.docs.cpanel.net/specifications/whm.openapi/suspensions/accounts-unsuspendacct.md): This function unsuspends an account.

Note:

Only the root account and root-enabled resellers can unsuspend a locked account.

## API Execution

The Server Administration module for WHM API 1.

### Run multiple WHM API 1 functions

 - [GET /batch](https://api.docs.cpanel.net/specifications/whm.openapi/api-execution/other-batch.md): This function combines calls for multiple WHM API 1 functions.

### Enable CORS HTTP requests

 - [GET /cors_proxy_get](https://api.docs.cpanel.net/specifications/whm.openapi/api-execution/corsproxy-cors_proxy_get.md): This function allows your system to perform Cross-Origin Resource Sharing (CORS) HTTP requests.

### Run cPanel API or UAPI function

 - [GET /cpanel](https://api.docs.cpanel.net/specifications/whm.openapi/api-execution/other-cpanel.md): You can call cPanel API and UAPI functions through the WHM API.

This method is useful, for example, when you develop plugins for WHM users, particularly resellers, but need to access cPanel functions. You can make these calls from within either the WHM or cPanel interfaces.

Important:

We recommend that you use the WHM API 1 uapi_cpanel function. The uapi_cpanel function is a more flexible way to call cPanel API functions from WHM. For example, you can use the uapi_cpanel function with the WHM API 1 batch function.

Before calling a cPanel API function via this method, read its documentation. The cPanel API function may require other parameters not listed in this document.

### Run remote WHM API 1 function

 - [GET /execute_remote_whmapi1_with_password](https://api.docs.cpanel.net/specifications/whm.openapi/api-execution/cpanel-execute_remote_whmapi1_with_password.md): This function executes WHM API 1 functions on a remote server.

### Run UAPI function through WHM API

 - [GET /uapi_cpanel](https://api.docs.cpanel.net/specifications/whm.openapi/api-execution/cpanel-uapi_cpanel.md): This function calls a UAPI function through the WHM API. This function's output will match the UAPI function that it calls.

## API Statistics

API Development Tools / API Statistics

### Return deprecated cPanel API 1 functions by date

 - [GET /get_api_calls](https://api.docs.cpanel.net/specifications/whm.openapi/api-statistics/sys-get_api_calls.md): This function returns the cPanel API 1 functions that the system called on specific dates.
This is useful, for example, to check whether your system calls any cPanel API 1 functions.

Important:

The function only returns cPanel API 1 functions. We deprecated cPanel API 1 and plan
to remove those functions at a later date. For more information, read our
Guide to Replacing cPanel API 1 Functions with UAPI Equivalents
documentation.

### Return deprecated cPanel API 1 functions

 - [GET /get_api_pages](https://api.docs.cpanel.net/specifications/whm.openapi/api-statistics/sys-get_api_pages.md): This function returns the daily interface use of cPanel API 1 functions. Use this function to find out which API calls your custom interfaces or third-party plugins use.

Important:

  The function only returns cPanel API 1 functions. We deprecated cPanel API 1 and plan to remove those functions at a later date. For more information, read our Guide to Replacing cPanel API 1 Functions with UAPI Equivalents documentation.

## Authentication

The Authentication module for WHM API 1.

### Create WHM API token

 - [GET /api_token_create](https://api.docs.cpanel.net/specifications/whm.openapi/api-token-management/tokens-api_token_create.md): This function creates an API token. You can use API tokens instead of a password
or access hash key to execute WHM API 1 functions over HTTPS. For more information
about API tokens, read our
Manage API Tokens in WHM
documentation.

Important:

You must call this function over an SSL connection.

### Look up API token details

 - [GET /api_token_get_details](https://api.docs.cpanel.net/specifications/whm.openapi/api-token-management/tokens-api_token_get_details.md): This function looks up an API token’s details based on the token itself.

### Return WHM API tokens

 - [GET /api_token_list](https://api.docs.cpanel.net/specifications/whm.openapi/api-token-management/tokens-api_token_list.md): This function lists a WHM account's API tokens.

### Disable WHM API token

 - [GET /api_token_revoke](https://api.docs.cpanel.net/specifications/whm.openapi/api-token-management/tokens-api_token_revoke.md): This function revokes an API token from the WHM account.

### Update WHM API token's settings

 - [GET /api_token_update](https://api.docs.cpanel.net/specifications/whm.openapi/api-token-management/tokens-api_token_update.md): This function updates an API token's settings.

### Create API token for Dashboard

 - [GET /wp_dashboard_create_api_token](https://api.docs.cpanel.net/specifications/whm.openapi/api-token-management/wpdashboard-wp_dashboard_create_api_token.md): This function creates a WHM API token for WebPros Dashboard.

### Unregister cPanel account from authentication provider

 - [GET /unlink_user_authn_provider](https://api.docs.cpanel.net/specifications/whm.openapi/authentication-providers/accounts-unlink_user_authn_provider.md): This function unlinks a cPanel account from an external authentication identity provider.

### Disable identity provider

 - [GET /disable_authentication_provider](https://api.docs.cpanel.net/specifications/whm.openapi/external-authentication/authentication-disable_authentication_provider.md): This function disables a external authentication identity provider for a specified service.

### Disable identity provider modules that fail to load

 - [GET /disable_failing_authentication_providers](https://api.docs.cpanel.net/specifications/whm.openapi/external-authentication/authentication-disable_failing_authentication_providers.md): This function disables any enabled identity provider modules that fail to load.

### Enable identity provider

 - [GET /enable_authentication_provider](https://api.docs.cpanel.net/specifications/whm.openapi/external-authentication/authentication-enable_authentication_provider.md): This function enables an external authentication identity provider for a specified service.

### Return available identity providers

 - [GET /get_available_authentication_providers](https://api.docs.cpanel.net/specifications/whm.openapi/external-authentication/authentication-get_available_authentication_providers.md): This function lists available external authentication identity providers for all services.

### Return identity provider client configuration

 - [GET /get_provider_client_configurations](https://api.docs.cpanel.net/specifications/whm.openapi/external-authentication/authentication-get_provider_client_configurations.md): This function retrieves the configuration details for the client of an external authentication identity provider.

### Return identity provider configuration fields

 - [GET /get_provider_configuration_fields](https://api.docs.cpanel.net/specifications/whm.openapi/external-authentication/authentication-get_provider_configuration_fields.md): This function retrieves the configuration fields for a external authentication identity provider.

### Return identity provider login interface appearance

 - [GET /get_provider_display_configurations](https://api.docs.cpanel.net/specifications/whm.openapi/external-authentication/authentication-get_provider_display_configurations.md): This function retrieves the display configuration for the login button of an external authentication identity provider.

### Return accounts linked to identity providers

 - [GET /get_users_authn_linked_accounts](https://api.docs.cpanel.net/specifications/whm.openapi/external-authentication/accounts-get_users_authn_linked_accounts.md): This function lists all accounts that link to available external authentication identity providers.

### Add identity provider to cPanel account

 - [GET /link_user_authn_provider](https://api.docs.cpanel.net/specifications/whm.openapi/external-authentication/accounts-link_user_authn_provider.md): This function adds an External Authentication authorization link to an account.

### Update identity provider client configuration

 - [GET /set_provider_client_configurations](https://api.docs.cpanel.net/specifications/whm.openapi/external-authentication/authentication-set_provider_client_configurations.md): This function sets the values of configuration fields for an external authentication identity provider.

### Update identity provider login interface appearance

 - [GET /set_provider_display_configurations](https://api.docs.cpanel.net/specifications/whm.openapi/external-authentication/authentication-set_provider_display_configurations.md): This function sets the display configuration for the login button of an external authentication identity provider.

### Return cPanel Store or cPanel Market login URL

 - [GET /get_login_url](https://api.docs.cpanel.net/specifications/whm.openapi/login-url/market-get_login_url.md): This function retrieves the login URL for the cPanel Store or a
cPanel Market provider.

### Disable 2FA

 - [GET /twofactorauth_disable_policy](https://api.docs.cpanel.net/specifications/whm.openapi/two-factor-authentication/twofactorauth-twofactorauth_disable_policy.md): This function disables the Two-Factor Authentication (2FA) security policy on the server.

### Enable 2FA

 - [GET /twofactorauth_enable_policy](https://api.docs.cpanel.net/specifications/whm.openapi/two-factor-authentication/twofactorauth-twofactorauth_enable_policy.md): This function enables the Two-Factor Authentication (2FA) security policy on the server.

### Create a one-time authentication secret and code

 - [GET /twofactorauth_generate_tfa_config](https://api.docs.cpanel.net/specifications/whm.openapi/two-factor-authentication/twofactorauth-twofactorauth_generate_tfa_config.md): This function generates a random secret and a one-time password authentication (OTP auth) URL for the user. Use the secret that this function returns and a valid verification token with WHM API 1's twofactorauth_set_tfa_config function to configure Two-Factor Authentication (2FA) on an account.

### Return configured issuer for current user

 - [GET /twofactorauth_get_issuer](https://api.docs.cpanel.net/specifications/whm.openapi/two-factor-authentication/twofactorauth-twofactorauth_get_issuer.md): This function returns the currently configured issuer. The issuer appears within the authentication app.

### Return cPanel account 2FA data

 - [GET /twofactorauth_get_tfa_config_for_user](https://api.docs.cpanel.net/specifications/whm.openapi/two-factor-authentication/twofactorauth-twofactorauth_get_tfa_config_for_user.md): This function returns the Two-Factor Authentication (2FA) configuration for a cPanel account, its email accounts, and its team user accounts.

### Return cPanel accounts with 2FA enabled

 - [GET /twofactorauth_get_user_configs](https://api.docs.cpanel.net/specifications/whm.openapi/two-factor-authentication/twofactorauth-twofactorauth_get_user_configs.md): This function returns a list of user-controlled accounts and whether the accounts have Two-Factor Authentication (2FA) enabled.

### Return 2FA policy status

 - [GET /twofactorauth_policy_status](https://api.docs.cpanel.net/specifications/whm.openapi/two-factor-authentication/twofactorauth-twofactorauth_policy_status.md): This function displays the Two-Factor Authentication (2FA) policy status on the server.

### Remove 2FA settings

 - [GET /twofactorauth_remove_user_config](https://api.docs.cpanel.net/specifications/whm.openapi/two-factor-authentication/twofactorauth-twofactorauth_remove_user_config.md): This function removes the Two-Factor Authentication (2FA) settings for one or more specified user accounts.

Note:

If you remove the 2FA settings for an account, the user must perform the setup procedure again to re-configure 2FA on the account.

This function reports an account in the data.users_modified array
even if that account had no 2FA settings configured to begin with.
Check whether 2FA was actually configured beforehand (for example,
with the twofactorauth_get_tfa_config_for_user function) if your
integration needs to distinguish an actual removal from a no-op.

### Update 2FA issuer value

 - [GET /twofactorauth_set_issuer](https://api.docs.cpanel.net/specifications/whm.openapi/two-factor-authentication/twofactorauth-twofactorauth_set_issuer.md): This function sets the issuer value that the system uses to generate the secret and otpurls values for Two-Factor Authentication on your accounts.

### Update 2FA authentication secret and code

 - [GET /twofactorauth_set_tfa_config](https://api.docs.cpanel.net/specifications/whm.openapi/two-factor-authentication/twofactorauth-twofactorauth_set_tfa_config.md): This function sets the secret and the authentication code for Two-Factor Authentication (2FA) for the root or reseller account. You can generate a random secret and an OTP authentication URL with WHM API 1's twofactorauth_generate_tfa_configorauth_generate_tfa_config function.

### Update cPanel account's 2FA data

 - [POST /twofactorauth_set_tfa_config_for_user](https://api.docs.cpanel.net/specifications/whm.openapi/two-factor-authentication/twofactorauth-twofactorauth_set_tfa_config_for_user.md): This function updates the Two-Factor Authentication (2FA) configuration for the given cPanel user.

### Validate login token and return access token

 - [GET /validate_login_token](https://api.docs.cpanel.net/specifications/whm.openapi/market-integration/market-validate_login_token.md): This function validates a login token with the cPanel Store or a cPanel Market provider, and then returns access tokens.

## API Token Management

API Development Tools / API Token Management

### Create WHM API token

 - [GET /api_token_create](https://api.docs.cpanel.net/specifications/whm.openapi/api-token-management/tokens-api_token_create.md): This function creates an API token. You can use API tokens instead of a password
or access hash key to execute WHM API 1 functions over HTTPS. For more information
about API tokens, read our
Manage API Tokens in WHM
documentation.

Important:

You must call this function over an SSL connection.

### Look up API token details

 - [GET /api_token_get_details](https://api.docs.cpanel.net/specifications/whm.openapi/api-token-management/tokens-api_token_get_details.md): This function looks up an API token’s details based on the token itself.

### Return WHM API tokens

 - [GET /api_token_list](https://api.docs.cpanel.net/specifications/whm.openapi/api-token-management/tokens-api_token_list.md): This function lists a WHM account's API tokens.

### Disable WHM API token

 - [GET /api_token_revoke](https://api.docs.cpanel.net/specifications/whm.openapi/api-token-management/tokens-api_token_revoke.md): This function revokes an API token from the WHM account.

### Update WHM API token's settings

 - [GET /api_token_update](https://api.docs.cpanel.net/specifications/whm.openapi/api-token-management/tokens-api_token_update.md): This function updates an API token's settings.

### Create API token for Dashboard

 - [GET /wp_dashboard_create_api_token](https://api.docs.cpanel.net/specifications/whm.openapi/api-token-management/wpdashboard-wp_dashboard_create_api_token.md): This function creates a WHM API token for WebPros Dashboard.

## Applications

API Development Tools / Applications

### Return WHM API 1 functions list

 - [GET /applist](https://api.docs.cpanel.net/specifications/whm.openapi/applications/other-applist.md): This function lists available WHM API 1 functions.

### Return registered applications

 - [GET /get_appconfig_application_list](https://api.docs.cpanel.net/specifications/whm.openapi/applications/sys-get_appconfig_application_list.md): This function lists registered AppConfig applications.

## Session

API Development Tools / Session

### Create a temporary user session

 - [GET /create_user_session](https://api.docs.cpanel.net/specifications/whm.openapi/session/session-create_user_session.md): This function creates a new temporary user session for a specified service.
This allows users with WHM access to log in to third-party applications
(for example, billing systems) without storing the account password.

Note:

* The system destroys the temporary session after 15 minutes of inactivity.
* For more information about the Single Sign On feature, read our
Guide to API Authentication
documentation.

### Create login link for Dashboard

 - [GET /wp_dashboard_create_login_link](https://api.docs.cpanel.net/specifications/whm.openapi/session/wpdashboard-wp_dashboard_create_login_link.md): This function creates a single-use WHM session for re-entry from WebPros Dashboard.

## Authentication Providers

Authentication / Authentication Providers

### Unregister cPanel account from authentication provider

 - [GET /unlink_user_authn_provider](https://api.docs.cpanel.net/specifications/whm.openapi/authentication-providers/accounts-unlink_user_authn_provider.md): This function unlinks a cPanel account from an external authentication identity provider.

## External Authentication

Authentication / External Authentication

### Disable identity provider

 - [GET /disable_authentication_provider](https://api.docs.cpanel.net/specifications/whm.openapi/external-authentication/authentication-disable_authentication_provider.md): This function disables a external authentication identity provider for a specified service.

### Disable identity provider modules that fail to load

 - [GET /disable_failing_authentication_providers](https://api.docs.cpanel.net/specifications/whm.openapi/external-authentication/authentication-disable_failing_authentication_providers.md): This function disables any enabled identity provider modules that fail to load.

### Enable identity provider

 - [GET /enable_authentication_provider](https://api.docs.cpanel.net/specifications/whm.openapi/external-authentication/authentication-enable_authentication_provider.md): This function enables an external authentication identity provider for a specified service.

### Return available identity providers

 - [GET /get_available_authentication_providers](https://api.docs.cpanel.net/specifications/whm.openapi/external-authentication/authentication-get_available_authentication_providers.md): This function lists available external authentication identity providers for all services.

### Return identity provider client configuration

 - [GET /get_provider_client_configurations](https://api.docs.cpanel.net/specifications/whm.openapi/external-authentication/authentication-get_provider_client_configurations.md): This function retrieves the configuration details for the client of an external authentication identity provider.

### Return identity provider configuration fields

 - [GET /get_provider_configuration_fields](https://api.docs.cpanel.net/specifications/whm.openapi/external-authentication/authentication-get_provider_configuration_fields.md): This function retrieves the configuration fields for a external authentication identity provider.

### Return identity provider login interface appearance

 - [GET /get_provider_display_configurations](https://api.docs.cpanel.net/specifications/whm.openapi/external-authentication/authentication-get_provider_display_configurations.md): This function retrieves the display configuration for the login button of an external authentication identity provider.

### Return accounts linked to identity providers

 - [GET /get_users_authn_linked_accounts](https://api.docs.cpanel.net/specifications/whm.openapi/external-authentication/accounts-get_users_authn_linked_accounts.md): This function lists all accounts that link to available external authentication identity providers.

### Add identity provider to cPanel account

 - [GET /link_user_authn_provider](https://api.docs.cpanel.net/specifications/whm.openapi/external-authentication/accounts-link_user_authn_provider.md): This function adds an External Authentication authorization link to an account.

### Update identity provider client configuration

 - [GET /set_provider_client_configurations](https://api.docs.cpanel.net/specifications/whm.openapi/external-authentication/authentication-set_provider_client_configurations.md): This function sets the values of configuration fields for an external authentication identity provider.

### Update identity provider login interface appearance

 - [GET /set_provider_display_configurations](https://api.docs.cpanel.net/specifications/whm.openapi/external-authentication/authentication-set_provider_display_configurations.md): This function sets the display configuration for the login button of an external authentication identity provider.

## Login URL

Authentication / Login URL

### Return cPanel Store or cPanel Market login URL

 - [GET /get_login_url](https://api.docs.cpanel.net/specifications/whm.openapi/login-url/market-get_login_url.md): This function retrieves the login URL for the cPanel Store or a
cPanel Market provider.

## SSH Keys and Connections

Authentication / SSH Keys and Connections

### Enable SSH key for server

 - [GET /authorizesshkey](https://api.docs.cpanel.net/specifications/whm.openapi/ssh-keys-and-connections/ssh-authorizesshkey.md): This function authorizes a public SSH key to access the server.
When you call this function, it adds the key to the /root/.ssh/authorized_keys file.

Warning:

* Do not transfer private keys over insecure ports.
* Only root and root-enabled resellers can use this function, and it only affects
the root public SSH keys. To perform this function on a regular user account, call
the cPanel API 2 SSH::authkey function via the WHM API. For more information, read our
Use WHM API to Call cPanel API and UAPI
documentation.

### Validate SSH connection to another server

 - [GET /check_remote_ssh_connection](https://api.docs.cpanel.net/specifications/whm.openapi/ssh-keys-and-connections/ssh-check_remote_ssh_connection.md): This function tests an SSH connection to another server.

### Migrate OpenSSH key to PuTTY format

 - [GET /convertopensshtoputty](https://api.docs.cpanel.net/specifications/whm.openapi/ssh-keys-and-connections/ssh-convertopensshtoputty.md): This function converts an OpenSSH private key to a PuTTY key.

Warning:

Do not transfer private keys over insecure ports.

### Delete SSH key

 - [GET /deletesshkey](https://api.docs.cpanel.net/specifications/whm.openapi/ssh-keys-and-connections/ssh-deletesshkey.md): This function function deletes an SSH key from the server.

Warning:

Only the root account can use this function, and it only affects
the root keys. To perform this function on a cPanel user account, call the
cPanel API 2 SSH::authkey function through the WHM API.

### Create SSH key pair

 - [GET /generatesshkeypair](https://api.docs.cpanel.net/specifications/whm.openapi/ssh-keys-and-connections/ssh-generatesshkeypair.md): This function generates an SSH key pair.

### Import SSH key

 - [GET /importsshkey](https://api.docs.cpanel.net/specifications/whm.openapi/ssh-keys-and-connections/ssh-importsshkey.md): This function imports an SSH key.

### Return SSH keys list

 - [GET /listsshkeys](https://api.docs.cpanel.net/specifications/whm.openapi/ssh-keys-and-connections/ssh-listsshkeys.md): This function lists the server's SSH keys.

Warning:

Only the root account can use this function, and it only affects the root
keys. To perform this function on a regular user account, call the cPanel API
2 SSH::listkeys function through the WHM API.

### Return cPanel account access hash (deprecated)

 - [GET /accesshash](https://api.docs.cpanel.net/specifications/whm.openapi/ssh-keys-and-connections/resellers-accesshash.md): This function regenerates or retrieves a user's access hash. For more information about access hashes, read our Remote Access Key documentation.

Warning:

We deprecated this function. We strongly suggest that you use the WHM API 1 api_token_create function.

## Two-Factor Authentication

Authentication / Two-Factor Authentication

### Disable 2FA

 - [GET /twofactorauth_disable_policy](https://api.docs.cpanel.net/specifications/whm.openapi/two-factor-authentication/twofactorauth-twofactorauth_disable_policy.md): This function disables the Two-Factor Authentication (2FA) security policy on the server.

### Enable 2FA

 - [GET /twofactorauth_enable_policy](https://api.docs.cpanel.net/specifications/whm.openapi/two-factor-authentication/twofactorauth-twofactorauth_enable_policy.md): This function enables the Two-Factor Authentication (2FA) security policy on the server.

### Create a one-time authentication secret and code

 - [GET /twofactorauth_generate_tfa_config](https://api.docs.cpanel.net/specifications/whm.openapi/two-factor-authentication/twofactorauth-twofactorauth_generate_tfa_config.md): This function generates a random secret and a one-time password authentication (OTP auth) URL for the user. Use the secret that this function returns and a valid verification token with WHM API 1's twofactorauth_set_tfa_config function to configure Two-Factor Authentication (2FA) on an account.

### Return configured issuer for current user

 - [GET /twofactorauth_get_issuer](https://api.docs.cpanel.net/specifications/whm.openapi/two-factor-authentication/twofactorauth-twofactorauth_get_issuer.md): This function returns the currently configured issuer. The issuer appears within the authentication app.

### Return cPanel account 2FA data

 - [GET /twofactorauth_get_tfa_config_for_user](https://api.docs.cpanel.net/specifications/whm.openapi/two-factor-authentication/twofactorauth-twofactorauth_get_tfa_config_for_user.md): This function returns the Two-Factor Authentication (2FA) configuration for a cPanel account, its email accounts, and its team user accounts.

### Return cPanel accounts with 2FA enabled

 - [GET /twofactorauth_get_user_configs](https://api.docs.cpanel.net/specifications/whm.openapi/two-factor-authentication/twofactorauth-twofactorauth_get_user_configs.md): This function returns a list of user-controlled accounts and whether the accounts have Two-Factor Authentication (2FA) enabled.

### Return 2FA policy status

 - [GET /twofactorauth_policy_status](https://api.docs.cpanel.net/specifications/whm.openapi/two-factor-authentication/twofactorauth-twofactorauth_policy_status.md): This function displays the Two-Factor Authentication (2FA) policy status on the server.

### Remove 2FA settings

 - [GET /twofactorauth_remove_user_config](https://api.docs.cpanel.net/specifications/whm.openapi/two-factor-authentication/twofactorauth-twofactorauth_remove_user_config.md): This function removes the Two-Factor Authentication (2FA) settings for one or more specified user accounts.

Note:

If you remove the 2FA settings for an account, the user must perform the setup procedure again to re-configure 2FA on the account.

This function reports an account in the data.users_modified array
even if that account had no 2FA settings configured to begin with.
Check whether 2FA was actually configured beforehand (for example,
with the twofactorauth_get_tfa_config_for_user function) if your
integration needs to distinguish an actual removal from a no-op.

### Update 2FA issuer value

 - [GET /twofactorauth_set_issuer](https://api.docs.cpanel.net/specifications/whm.openapi/two-factor-authentication/twofactorauth-twofactorauth_set_issuer.md): This function sets the issuer value that the system uses to generate the secret and otpurls values for Two-Factor Authentication on your accounts.

### Update 2FA authentication secret and code

 - [GET /twofactorauth_set_tfa_config](https://api.docs.cpanel.net/specifications/whm.openapi/two-factor-authentication/twofactorauth-twofactorauth_set_tfa_config.md): This function sets the secret and the authentication code for Two-Factor Authentication (2FA) for the root or reseller account. You can generate a random secret and an OTP authentication URL with WHM API 1's twofactorauth_generate_tfa_configorauth_generate_tfa_config function.

### Update cPanel account's 2FA data

 - [POST /twofactorauth_set_tfa_config_for_user](https://api.docs.cpanel.net/specifications/whm.openapi/two-factor-authentication/twofactorauth-twofactorauth_set_tfa_config_for_user.md): This function updates the Two-Factor Authentication (2FA) configuration for the given cPanel user.

## Backups

The Backups module for WHM API 1.

### Add a backup destination

 - [GET /backup_destination_add](https://api.docs.cpanel.net/specifications/whm.openapi/backup-destination/backup-backup_destination_add.md): This function adds a backup destination.

### Delete a backup destination

 - [GET /backup_destination_delete](https://api.docs.cpanel.net/specifications/whm.openapi/backup-destination/backup-backup_destination_delete.md): This function removes a backup destination from the backup configuration file.

### Return a backup destination's settings

 - [GET /backup_destination_get](https://api.docs.cpanel.net/specifications/whm.openapi/backup-destination/backup-backup_destination_get.md): Use this function to obtain a backup destination's settings.

### Return a list of backup destinations

 - [GET /backup_destination_list](https://api.docs.cpanel.net/specifications/whm.openapi/backup-destination/backup-backup_destination_list.md): This function lists backup destinations.

### Update backup destination settings

 - [POST /backup_destination_set](https://api.docs.cpanel.net/specifications/whm.openapi/backup-destination/backup-backup_destination_set.md): Use this function to edit a backup destination's settings.

### Validate a backup destination

 - [GET /backup_destination_validate](https://api.docs.cpanel.net/specifications/whm.openapi/backup-destination/backup-backup_destination_validate.md): This function validates a backup destination.

### Return Google Drive™ client ID credentials

 - [GET /backup_does_client_id_have_google_credentials](https://api.docs.cpanel.net/specifications/whm.openapi/backup-destination/backup-backup_does_client_id_have_google_credentials.md): This function returns whether a Google Drive™ client ID credential file exists.

### Create Google Drive™ OAuth redirect URI

 - [GET /backup_generate_google_oauth_uri](https://api.docs.cpanel.net/specifications/whm.openapi/backup-destination/backup-backup_generate_google_oauth_uri.md): This function generates a
Google Drive™ OAuth redirect URI.

### Return backup transport events' status

 - [GET /backup_get_transport_status](https://api.docs.cpanel.net/specifications/whm.openapi/backup-or-restore/backup-backup_get_transport_status.md): This function retrieves the status of any backup transport events on the account.

### Return backup files sent through transport

 - [GET /backup_list_transported](https://api.docs.cpanel.net/specifications/whm.openapi/backup-or-restore/backup-backup_list_transported.md): This function lists backup files that the system sent through a specified additional backup transport.

### Return backup files in the local disk

 - [GET /backup_set_list](https://api.docs.cpanel.net/specifications/whm.openapi/backup-or-restore/backup-backup_set_list.md): This function lists backup files for the server's accounts in the local disk.

### Return backup files for the server's accounts

 - [GET /backup_set_list_combined](https://api.docs.cpanel.net/specifications/whm.openapi/backup-or-restore/backup-backup_set_list_combined.md): This function lists locally-stored and backup-destination stored backup files for the server's accounts.

### Return start_background_pkgacct session log file

 - [GET /fetch_pkgacct_master_log](https://api.docs.cpanel.net/specifications/whm.openapi/backup-or-restore/backup-fetch_pkgacct_master_log.md): This function returns the contents of a start_background_pkgacct session's master log file.

### Return start_background_pkgacct session state

 - [GET /get_pkgacct_session_state](https://api.docs.cpanel.net/specifications/whm.openapi/backup-or-restore/backup-get_pkgacct_session_state.md): This function returns the state of a start_background_pkgacct session.

### Return users and domains with backup metadata

 - [GET /get_users_and_domains_with_backup_metadata](https://api.docs.cpanel.net/specifications/whm.openapi/backup-or-restore/backup-get_users_and_domains_with_backup_metadata.md): This function lists all users and their domains that have backup metadata.

### Return users with backup metadata

 - [GET /get_users_with_backup_metadata](https://api.docs.cpanel.net/specifications/whm.openapi/backup-or-restore/backup-get_users_with_backup_metadata.md): This function lists users with backup metadata.

### Return cparchive files list

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

### Back up an account using the pkgacct script

 - [GET /start_background_pkgacct](https://api.docs.cpanel.net/specifications/whm.openapi/backup-or-restore/backup-start_background_pkgacct.md): This function backs up an account with the pkgacct script.

Note:

- The /usr/local/cpanel/scripts/pkgacct script logs results to the /var/cpanel/pkgacct_sessions/session_id/ directory, where session_id represents the backup session's ID.
- The target system streams the output of this function with the /usr/local/cpanel/whostmgr/docroot/cgi/live_tail_log.cgi script on the source system. Users should not directly call this script.

### Restore one cPanel account from a backup

 - [GET /start_local_cpmove_restore](https://api.docs.cpanel.net/specifications/whm.openapi/backup-or-restore/transfers-start_local_cpmove_restore.md): This function performs a full restoration of a single cPanel account from a cpmove tarball.

### Return backup configuration file data

 - [GET /backup_config_get](https://api.docs.cpanel.net/specifications/whm.openapi/backup-settings/backup-backup_config_get.md): This function retrieves your backup destination configuration file data.

### Update the system's backup configuration

 - [GET /backup_config_set](https://api.docs.cpanel.net/specifications/whm.openapi/backup-settings/backup-backup_config_set.md): This function configures a server's backup system. The system saves these settings in the /var/cpanel/backups/config file.

### Return dates where backup files exist

 - [GET /backup_date_list](https://api.docs.cpanel.net/specifications/whm.openapi/backup-settings/backup-backup_date_list.md): This function lists the dates where backup file exists, whether stored locally or stored on remote backup destinations when local backups are disabled.

### Enable or disable backups

 - [GET /backup_skip_users_all](https://api.docs.cpanel.net/specifications/whm.openapi/backup-settings/backup-backup_skip_users_all.md): This function enables and disables the backup and legacy backups.

### Return backup configuration status

 - [GET /backup_skip_users_all_status](https://api.docs.cpanel.net/specifications/whm.openapi/backup-settings/backup-backup_skip_users_all_status.md): This function checks each user's backup configuration status while the backup_skip_users_all function runs.

### Return users with a backup file

 - [GET /backup_user_list](https://api.docs.cpanel.net/specifications/whm.openapi/backup-settings/backup-backup_user_list.md): This function lists users with a backup file, stored locally or on additional backup destinations, on a specified date.

### Enable or disable legacy backups

 - [GET /toggle_user_backup_state](https://api.docs.cpanel.net/specifications/whm.openapi/backup-settings/backup-toggle_user_backup_state.md): This function enables or disables legacy backups for a user.

### Migrate server to new backup system

 - [GET /convert_and_migrate_from_legacy_config](https://api.docs.cpanel.net/specifications/whm.openapi/legacy-migration/backup-convert_and_migrate_from_legacy_config.md): This function converts and migrates a server from the Legacy Backup system to the Backup system.

## Backup Destination

Backups / Backup Destination

### Add a backup destination

 - [GET /backup_destination_add](https://api.docs.cpanel.net/specifications/whm.openapi/backup-destination/backup-backup_destination_add.md): This function adds a backup destination.

### Delete a backup destination

 - [GET /backup_destination_delete](https://api.docs.cpanel.net/specifications/whm.openapi/backup-destination/backup-backup_destination_delete.md): This function removes a backup destination from the backup configuration file.

### Return a backup destination's settings

 - [GET /backup_destination_get](https://api.docs.cpanel.net/specifications/whm.openapi/backup-destination/backup-backup_destination_get.md): Use this function to obtain a backup destination's settings.

### Return a list of backup destinations

 - [GET /backup_destination_list](https://api.docs.cpanel.net/specifications/whm.openapi/backup-destination/backup-backup_destination_list.md): This function lists backup destinations.

### Update backup destination settings

 - [POST /backup_destination_set](https://api.docs.cpanel.net/specifications/whm.openapi/backup-destination/backup-backup_destination_set.md): Use this function to edit a backup destination's settings.

### Validate a backup destination

 - [GET /backup_destination_validate](https://api.docs.cpanel.net/specifications/whm.openapi/backup-destination/backup-backup_destination_validate.md): This function validates a backup destination.

### Return Google Drive™ client ID credentials

 - [GET /backup_does_client_id_have_google_credentials](https://api.docs.cpanel.net/specifications/whm.openapi/backup-destination/backup-backup_does_client_id_have_google_credentials.md): This function returns whether a Google Drive™ client ID credential file exists.

### Create Google Drive™ OAuth redirect URI

 - [GET /backup_generate_google_oauth_uri](https://api.docs.cpanel.net/specifications/whm.openapi/backup-destination/backup-backup_generate_google_oauth_uri.md): This function generates a
Google Drive™ OAuth redirect URI.

## Backup or Restore

Backups / Backup or Restore

### Return backup transport events' status

 - [GET /backup_get_transport_status](https://api.docs.cpanel.net/specifications/whm.openapi/backup-or-restore/backup-backup_get_transport_status.md): This function retrieves the status of any backup transport events on the account.

### Return backup files sent through transport

 - [GET /backup_list_transported](https://api.docs.cpanel.net/specifications/whm.openapi/backup-or-restore/backup-backup_list_transported.md): This function lists backup files that the system sent through a specified additional backup transport.

### Return backup files in the local disk

 - [GET /backup_set_list](https://api.docs.cpanel.net/specifications/whm.openapi/backup-or-restore/backup-backup_set_list.md): This function lists backup files for the server's accounts in the local disk.

### Return backup files for the server's accounts

 - [GET /backup_set_list_combined](https://api.docs.cpanel.net/specifications/whm.openapi/backup-or-restore/backup-backup_set_list_combined.md): This function lists locally-stored and backup-destination stored backup files for the server's accounts.

### Return start_background_pkgacct session log file

 - [GET /fetch_pkgacct_master_log](https://api.docs.cpanel.net/specifications/whm.openapi/backup-or-restore/backup-fetch_pkgacct_master_log.md): This function returns the contents of a start_background_pkgacct session's master log file.

### Return start_background_pkgacct session state

 - [GET /get_pkgacct_session_state](https://api.docs.cpanel.net/specifications/whm.openapi/backup-or-restore/backup-get_pkgacct_session_state.md): This function returns the state of a start_background_pkgacct session.

### Return users and domains with backup metadata

 - [GET /get_users_and_domains_with_backup_metadata](https://api.docs.cpanel.net/specifications/whm.openapi/backup-or-restore/backup-get_users_and_domains_with_backup_metadata.md): This function lists all users and their domains that have backup metadata.

### Return users with backup metadata

 - [GET /get_users_with_backup_metadata](https://api.docs.cpanel.net/specifications/whm.openapi/backup-or-restore/backup-get_users_with_backup_metadata.md): This function lists users with backup metadata.

### Return cparchive files list

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

### Back up an account using the pkgacct script

 - [GET /start_background_pkgacct](https://api.docs.cpanel.net/specifications/whm.openapi/backup-or-restore/backup-start_background_pkgacct.md): This function backs up an account with the pkgacct script.

Note:

- The /usr/local/cpanel/scripts/pkgacct script logs results to the /var/cpanel/pkgacct_sessions/session_id/ directory, where session_id represents the backup session's ID.
- The target system streams the output of this function with the /usr/local/cpanel/whostmgr/docroot/cgi/live_tail_log.cgi script on the source system. Users should not directly call this script.

### Restore one cPanel account from a backup

 - [GET /start_local_cpmove_restore](https://api.docs.cpanel.net/specifications/whm.openapi/backup-or-restore/transfers-start_local_cpmove_restore.md): This function performs a full restoration of a single cPanel account from a cpmove tarball.

## Backup Settings

Backups / Backup Settings

### Return backup configuration file data

 - [GET /backup_config_get](https://api.docs.cpanel.net/specifications/whm.openapi/backup-settings/backup-backup_config_get.md): This function retrieves your backup destination configuration file data.

### Update the system's backup configuration

 - [GET /backup_config_set](https://api.docs.cpanel.net/specifications/whm.openapi/backup-settings/backup-backup_config_set.md): This function configures a server's backup system. The system saves these settings in the /var/cpanel/backups/config file.

### Return dates where backup files exist

 - [GET /backup_date_list](https://api.docs.cpanel.net/specifications/whm.openapi/backup-settings/backup-backup_date_list.md): This function lists the dates where backup file exists, whether stored locally or stored on remote backup destinations when local backups are disabled.

### Enable or disable backups

 - [GET /backup_skip_users_all](https://api.docs.cpanel.net/specifications/whm.openapi/backup-settings/backup-backup_skip_users_all.md): This function enables and disables the backup and legacy backups.

### Return backup configuration status

 - [GET /backup_skip_users_all_status](https://api.docs.cpanel.net/specifications/whm.openapi/backup-settings/backup-backup_skip_users_all_status.md): This function checks each user's backup configuration status while the backup_skip_users_all function runs.

### Return users with a backup file

 - [GET /backup_user_list](https://api.docs.cpanel.net/specifications/whm.openapi/backup-settings/backup-backup_user_list.md): This function lists users with a backup file, stored locally or on additional backup destinations, on a specified date.

### Enable or disable legacy backups

 - [GET /toggle_user_backup_state](https://api.docs.cpanel.net/specifications/whm.openapi/backup-settings/backup-toggle_user_backup_state.md): This function enables or disables legacy backups for a user.

## Legacy Migration

Backups / Legacy Migration

### Migrate server to new backup system

 - [GET /convert_and_migrate_from_legacy_config](https://api.docs.cpanel.net/specifications/whm.openapi/legacy-migration/backup-convert_and_migrate_from_legacy_config.md): This function converts and migrates a server from the Legacy Backup system to the Backup system.

## Market Integration

Commerce Integration / Market Integration

### Validate login token and return access token

 - [GET /validate_login_token](https://api.docs.cpanel.net/specifications/whm.openapi/market-integration/market-validate_login_token.md): This function validates a login token with the cPanel Store or a cPanel Market provider, and then returns access tokens.

## Sitejet

The Sitejet module for WHM API.

### Get Commerce Data

 - [GET /get_commerce](https://api.docs.cpanel.net/specifications/whm.openapi/sitejet/get_commerce.md): This function returns Sitejet Commerce data.

### Set Commerce URL

 - [GET /set_commerce](https://api.docs.cpanel.net/specifications/whm.openapi/sitejet/set_commerce.md): This function enables Sitejet Commerce for all users and allows the hosting provider to set a custom URL for their payment platform, which customers can use to purchase the Sitejet Commerce upgrade.

### Get Ecommerce Data (deprecated)

 - [GET /get_ecommerce](https://api.docs.cpanel.net/specifications/whm.openapi/sitejet/get_ecommerce.md): This function returns Sitejet Commerce data.

### Set Ecommerce URL (deprecated)

 - [GET /set_ecommerce](https://api.docs.cpanel.net/specifications/whm.openapi/sitejet/set_ecommerce.md): This function enables Sitejet Commerce for all users and allows the hosting provider to set a custom URL for their payment platform, which customers can use to purchase the Sitejet Commerce upgrade.

## Market

The Market module for WHM API 1.

### Return Market providers' products adjusted prices

 - [GET /get_adjusted_market_providers_products](https://api.docs.cpanel.net/specifications/whm.openapi/product-management/market-get_adjusted_market_providers_products.md): This function lists all available cPanel Market products from enabled providers,
with the prices that the adjustments database modifies.

### Return Market providers' products metadata

 - [GET /get_market_providers_product_metadata](https://api.docs.cpanel.net/specifications/whm.openapi/product-management/market-get_market_providers_product_metadata.md): This function lists all available cPanel Market providers' products and the attributes of
each product that can be managed by an administrator.

The return list includes different attribute data depending the product_group for each product.


  
    Product Group
    Attributes Returned
    Description
  
  
    ssl_certificate
    SSLMarketProviderMetaData
    Contains additional attributes only applicable to SSL Certificates
  
  
    *
    MarketProviderMetaData
    Any products not in a product_group listed above will include only these attributes.
  


Note:

The function does not return the product_group name.

To get the product_group name for a product_id, run WHM API 1's get_market_providers_products function.

### Return Market providers products

 - [GET /get_market_providers_products](https://api.docs.cpanel.net/specifications/whm.openapi/product-management/market-get_market_providers_products.md): This function lists products available in the server's cPanel Market.

### Update Market provider product

 - [GET /set_market_product_attribute](https://api.docs.cpanel.net/specifications/whm.openapi/product-management/market-set_market_product_attribute.md): This function sets an attribute for a cPanel Market provider's product.

### Disable Market provider

 - [GET /disable_market_provider](https://api.docs.cpanel.net/specifications/whm.openapi/provider-management/market-disable_market_provider.md): This function disables a cPanel Market provider.

### Enable Market provider

 - [GET /enable_market_provider](https://api.docs.cpanel.net/specifications/whm.openapi/provider-management/market-enable_market_provider.md): This function enables a cPanel Market provider.

### Return Market providers' commission configuration

 - [GET /get_market_providers_commission_config](https://api.docs.cpanel.net/specifications/whm.openapi/provider-management/market-get_market_providers_commission_config.md): This function returns the commission configuration of all available cPanel Market providers.

### Return Market providers

 - [GET /get_market_providers_list](https://api.docs.cpanel.net/specifications/whm.openapi/provider-management/market-get_market_providers_list.md): This function lists the available cPanel Market providers.

### Update Market provider commission contact ID

 - [GET /set_market_provider_commission_id](https://api.docs.cpanel.net/specifications/whm.openapi/provider-management/market-set_market_provider_commission_id.md): This function sets the contact ID to which a cPanel Market provider will send commission.

## Product Management

cPanel Market / Product Management

### Return Market providers' products adjusted prices

 - [GET /get_adjusted_market_providers_products](https://api.docs.cpanel.net/specifications/whm.openapi/product-management/market-get_adjusted_market_providers_products.md): This function lists all available cPanel Market products from enabled providers,
with the prices that the adjustments database modifies.

### Return Market providers' products metadata

 - [GET /get_market_providers_product_metadata](https://api.docs.cpanel.net/specifications/whm.openapi/product-management/market-get_market_providers_product_metadata.md): This function lists all available cPanel Market providers' products and the attributes of
each product that can be managed by an administrator.

The return list includes different attribute data depending the product_group for each product.


  
    Product Group
    Attributes Returned
    Description
  
  
    ssl_certificate
    SSLMarketProviderMetaData
    Contains additional attributes only applicable to SSL Certificates
  
  
    *
    MarketProviderMetaData
    Any products not in a product_group listed above will include only these attributes.
  


Note:

The function does not return the product_group name.

To get the product_group name for a product_id, run WHM API 1's get_market_providers_products function.

### Return Market providers products

 - [GET /get_market_providers_products](https://api.docs.cpanel.net/specifications/whm.openapi/product-management/market-get_market_providers_products.md): This function lists products available in the server's cPanel Market.

### Update Market provider product

 - [GET /set_market_product_attribute](https://api.docs.cpanel.net/specifications/whm.openapi/product-management/market-set_market_product_attribute.md): This function sets an attribute for a cPanel Market provider's product.

## Provider Management

cPanel Market / Provider Management

### Disable Market provider

 - [GET /disable_market_provider](https://api.docs.cpanel.net/specifications/whm.openapi/provider-management/market-disable_market_provider.md): This function disables a cPanel Market provider.

### Enable Market provider

 - [GET /enable_market_provider](https://api.docs.cpanel.net/specifications/whm.openapi/provider-management/market-enable_market_provider.md): This function enables a cPanel Market provider.

### Return Market providers' commission configuration

 - [GET /get_market_providers_commission_config](https://api.docs.cpanel.net/specifications/whm.openapi/provider-management/market-get_market_providers_commission_config.md): This function returns the commission configuration of all available cPanel Market providers.

### Return Market providers

 - [GET /get_market_providers_list](https://api.docs.cpanel.net/specifications/whm.openapi/provider-management/market-get_market_providers_list.md): This function lists the available cPanel Market providers.

### Update Market provider commission contact ID

 - [GET /set_market_provider_commission_id](https://api.docs.cpanel.net/specifications/whm.openapi/provider-management/market-set_market_provider_commission_id.md): This function sets the contact ID to which a cPanel Market provider will send commission.

## Support Tickets

The Support Tickets module for WHM API 1.

### Create Support SSH key

 - [GET /ticket_grant](https://api.docs.cpanel.net/specifications/whm.openapi/support-access/ticketsupport-ticket_grant.md): This function installs an SSH key from the
cPanel Customer Portal.

Note:

This function is not available through the command line. You must call
it as a request body.

### Delete Support SSH key and closed tickets

 - [GET /ticket_remove_closed](https://api.docs.cpanel.net/specifications/whm.openapi/support-access/ticketsupport-ticket_remove_closed.md): This function removes cPanel Support's SSH keys and removes closed
support tickets. You can view closed support tickets in WHM's
Grant cPanel Support Access
interface (WHM >> Home >> Support >> Grant cPanel Support Access).

Note:

This function is not available through the command line. You must call
it as a request body.

### Delete Support SSH key

 - [GET /ticket_revoke](https://api.docs.cpanel.net/specifications/whm.openapi/support-access/ticketsupport-ticket_revoke.md): This function removes a
cPanel Customer Portal
SSH key from the server.

Note:

This function is not available through the command line. You must call it
as a request body.

### Validate Customer Portal connection

 - [GET /ticket_ssh_test](https://api.docs.cpanel.net/specifications/whm.openapi/support-access/ticketsupport-ticket_ssh_test.md): This function verifies the connection from the
cPanel Customer Portal
to the server.

Note:

This function is not available through the command line. You must call it as
a request body.

### Validate Support SSH connection

 - [GET /ticket_ssh_test_start](https://api.docs.cpanel.net/specifications/whm.openapi/support-access/ticketsupport-ticket_ssh_test_start.md): This function initiates an SSH connection test.

Important:

This function is not available through the command line. You must call it
as a request body.

### Validate Support IP addresses on firewall

 - [GET /ticket_whitelist_check](https://api.docs.cpanel.net/specifications/whm.openapi/support-access/ticketsupport-ticket_whitelist_check.md): This function checks whether the server's firewall whitelist correlates
with the granted support tickets. You can view granted support tickets in
WHM's
Grant cPanel Support Access
interface (WHM >> Home >> Support >> Grant cPanel Support Access).

Note:

This function is not available through the command line. You must call it as
a request body.

### Add Support IP addresses to firewall

 - [GET /ticket_whitelist_setup](https://api.docs.cpanel.net/specifications/whm.openapi/support-access/ticketsupport-ticket_whitelist_setup.md): This function adds cPanel Support's IP addresses to your server's firewall
whitelist. This function is firewall-specific and does not change the
cPHulk
whitelist.

Note:

* This function is not available through the command line. You must call it as
a request body.
* This function logs error messages to the
/usr/local/cpanel/logs/error_log
file.

### Remove Support IP addresses from firewall

 - [GET /ticket_whitelist_unsetup](https://api.docs.cpanel.net/specifications/whm.openapi/support-access/ticketsupport-ticket_whitelist_unsetup.md): This function removes cPanel Support's IP addresses from your server's firewall
whitelist. This function is firewall-specific and does not change the
cPHulk
whitelist.

Note:

* This function is not available through the command line. You must call it as
a request body.
* This function logs error messages to the
/usr/local/cpanel/logs/error_log
file.

### Create initial Support ticket request

 - [GET /ticket_create_stub_ticket](https://api.docs.cpanel.net/specifications/whm.openapi/ticket-management/ticketsupport-ticket_create_stub_ticket.md): This function creates a stub ticket. The system uses the stub ticket
to create a cPanel support ticket.

Note:

This function is not available through the command line. You must call
it as a request body.

### Import Technical Support Agreement text

 - [GET /ticket_get_support_agreement](https://api.docs.cpanel.net/specifications/whm.openapi/ticket-management/ticketsupport-ticket_get_support_agreement.md): This function retrieves the WebPros International, LLC Technical Support Agreement text
and metadata about the user's agreement status from the
cPanel Customer Portal.

Note:
* This function is not available through the command line. You must call it
as a request body.
* To use this function, you must set up a cPanelID token in your current session.
For more information, read our
cPanelID
documentation.

### Import customer information from Customer Portal

 - [GET /ticket_get_support_info](https://api.docs.cpanel.net/specifications/whm.openapi/ticket-management/ticketsupport-ticket_get_support_info.md): This function retrieves the license holder's support-related information.

Note:

* This function is not available through the command line. You must call
it as a request body.
* To use this function, you must set up a cPanelID token in your current session.
For more information, read our
cPanelID
documentation.

### Return Support ticket status

 - [GET /ticket_list](https://api.docs.cpanel.net/specifications/whm.openapi/ticket-management/ticketsupport-ticket_list.md): This function lists all active and open support tickets from the
cPanel Customer Portal.

Note:

This function is not available through the command line. You must call
it as a request body.

### Enable Technical Support Agreement acceptance

 - [GET /ticket_update_service_agreement_approval](https://api.docs.cpanel.net/specifications/whm.openapi/ticket-management/ticketsupport-ticket_update_service_agreement_approval.md): This function records a user's acceptance of the Technical Support
Agreement (TSA). The cPanel Customer Portal stores each record with the user's
login, the date and time, and the TSA's version.

Note:

This function is not available through the command line.
You must call it as a request body.

### Validate Customer Portal OAuth2 code

 - [GET /ticket_validate_oauth2_code](https://api.docs.cpanel.net/specifications/whm.openapi/ticket-management/ticketsupport-ticket_validate_oauth2_code.md): This function validates the OAuth2 code from the
cPanel Customer Portal.
After the function validates the token, the system stores it on the current session.

Note:

This function is not available through the command line. You must call it
as a request body.

## Support Access

cPanel Support Tickets / Support Access

### Create Support SSH key

 - [GET /ticket_grant](https://api.docs.cpanel.net/specifications/whm.openapi/support-access/ticketsupport-ticket_grant.md): This function installs an SSH key from the
cPanel Customer Portal.

Note:

This function is not available through the command line. You must call
it as a request body.

### Delete Support SSH key and closed tickets

 - [GET /ticket_remove_closed](https://api.docs.cpanel.net/specifications/whm.openapi/support-access/ticketsupport-ticket_remove_closed.md): This function removes cPanel Support's SSH keys and removes closed
support tickets. You can view closed support tickets in WHM's
Grant cPanel Support Access
interface (WHM >> Home >> Support >> Grant cPanel Support Access).

Note:

This function is not available through the command line. You must call
it as a request body.

### Delete Support SSH key

 - [GET /ticket_revoke](https://api.docs.cpanel.net/specifications/whm.openapi/support-access/ticketsupport-ticket_revoke.md): This function removes a
cPanel Customer Portal
SSH key from the server.

Note:

This function is not available through the command line. You must call it
as a request body.

### Validate Customer Portal connection

 - [GET /ticket_ssh_test](https://api.docs.cpanel.net/specifications/whm.openapi/support-access/ticketsupport-ticket_ssh_test.md): This function verifies the connection from the
cPanel Customer Portal
to the server.

Note:

This function is not available through the command line. You must call it as
a request body.

### Validate Support SSH connection

 - [GET /ticket_ssh_test_start](https://api.docs.cpanel.net/specifications/whm.openapi/support-access/ticketsupport-ticket_ssh_test_start.md): This function initiates an SSH connection test.

Important:

This function is not available through the command line. You must call it
as a request body.

### Validate Support IP addresses on firewall

 - [GET /ticket_whitelist_check](https://api.docs.cpanel.net/specifications/whm.openapi/support-access/ticketsupport-ticket_whitelist_check.md): This function checks whether the server's firewall whitelist correlates
with the granted support tickets. You can view granted support tickets in
WHM's
Grant cPanel Support Access
interface (WHM >> Home >> Support >> Grant cPanel Support Access).

Note:

This function is not available through the command line. You must call it as
a request body.

### Add Support IP addresses to firewall

 - [GET /ticket_whitelist_setup](https://api.docs.cpanel.net/specifications/whm.openapi/support-access/ticketsupport-ticket_whitelist_setup.md): This function adds cPanel Support's IP addresses to your server's firewall
whitelist. This function is firewall-specific and does not change the
cPHulk
whitelist.

Note:

* This function is not available through the command line. You must call it as
a request body.
* This function logs error messages to the
/usr/local/cpanel/logs/error_log
file.

### Remove Support IP addresses from firewall

 - [GET /ticket_whitelist_unsetup](https://api.docs.cpanel.net/specifications/whm.openapi/support-access/ticketsupport-ticket_whitelist_unsetup.md): This function removes cPanel Support's IP addresses from your server's firewall
whitelist. This function is firewall-specific and does not change the
cPHulk
whitelist.

Note:

* This function is not available through the command line. You must call it as
a request body.
* This function logs error messages to the
/usr/local/cpanel/logs/error_log
file.

## Ticket Management

cPanel Support Tickets / Ticket Management

### Create initial Support ticket request

 - [GET /ticket_create_stub_ticket](https://api.docs.cpanel.net/specifications/whm.openapi/ticket-management/ticketsupport-ticket_create_stub_ticket.md): This function creates a stub ticket. The system uses the stub ticket
to create a cPanel support ticket.

Note:

This function is not available through the command line. You must call
it as a request body.

### Import Technical Support Agreement text

 - [GET /ticket_get_support_agreement](https://api.docs.cpanel.net/specifications/whm.openapi/ticket-management/ticketsupport-ticket_get_support_agreement.md): This function retrieves the WebPros International, LLC Technical Support Agreement text
and metadata about the user's agreement status from the
cPanel Customer Portal.

Note:
* This function is not available through the command line. You must call it
as a request body.
* To use this function, you must set up a cPanelID token in your current session.
For more information, read our
cPanelID
documentation.

### Import customer information from Customer Portal

 - [GET /ticket_get_support_info](https://api.docs.cpanel.net/specifications/whm.openapi/ticket-management/ticketsupport-ticket_get_support_info.md): This function retrieves the license holder's support-related information.

Note:

* This function is not available through the command line. You must call
it as a request body.
* To use this function, you must set up a cPanelID token in your current session.
For more information, read our
cPanelID
documentation.

### Return Support ticket status

 - [GET /ticket_list](https://api.docs.cpanel.net/specifications/whm.openapi/ticket-management/ticketsupport-ticket_list.md): This function lists all active and open support tickets from the
cPanel Customer Portal.

Note:

This function is not available through the command line. You must call
it as a request body.

### Enable Technical Support Agreement acceptance

 - [GET /ticket_update_service_agreement_approval](https://api.docs.cpanel.net/specifications/whm.openapi/ticket-management/ticketsupport-ticket_update_service_agreement_approval.md): This function records a user's acceptance of the Technical Support
Agreement (TSA). The cPanel Customer Portal stores each record with the user's
login, the date and time, and the TSA's version.

Note:

This function is not available through the command line.
You must call it as a request body.

### Validate Customer Portal OAuth2 code

 - [GET /ticket_validate_oauth2_code](https://api.docs.cpanel.net/specifications/whm.openapi/ticket-management/ticketsupport-ticket_validate_oauth2_code.md): This function validates the OAuth2 code from the
cPanel Customer Portal.
After the function validates the token, the system stores it on the current session.

Note:

This function is not available through the command line. You must call it
as a request body.

## Customizations

The Customizations module for WHM API 1.

### Delete customization data

 - [GET /delete_customizations](https://api.docs.cpanel.net/specifications/whm.openapi/customizations/customizations-delete_customizations.md): This function deletes customization data.

Customization data includes brand logos and colors.

Server owners and resellers can supply customization data to whitelabel portions
of the product or customize the cPanel experience for their users.

This function is used to delete customization data for the Jupiter theme only.

If you provide the optional path parameter, the API will removed only the specific element specified in the . separated path.
See the parameter for more details.

### Retrieve customization data

 - [GET /retrieve_customizations](https://api.docs.cpanel.net/specifications/whm.openapi/customizations/customizations-retrieve_customizations.md): This function retrieves customization data.

Customization data includes brand logos and colors.

This function is used to retrieve customization data for the Jupiter theme only.

### Update customization data

 - [POST /update_customizations](https://api.docs.cpanel.net/specifications/whm.openapi/customizations/customizations-update_customizations.md): This function supplies branding data for a specific application and theme.

Customization data includes brand logos and colors.

This function is used to save customization data for the Jupiter theme only.

## Databases

The Databases module for WHM API 1.

### Validate MySQL status before upgrade

 - [GET /background_mysql_upgrade_checker_run](https://api.docs.cpanel.net/specifications/whm.openapi/manage-mysql-server/mysql-background_mysql_upgrade_checker_run.md): This function checks your MySQL configuration file and table engine before an upgrade to MySQL 8.0.

Important:

When you disable the
MySQL/MariaDB role
and remote MySQL is not already configured, the system disables this function.

### Return MySQL or MariaDB upgrade status

 - [GET /background_mysql_upgrade_status](https://api.docs.cpanel.net/specifications/whm.openapi/manage-mysql-server/mysql-background_mysql_upgrade_status.md): This function retrieves the status of a background MySQL® or MariaDB® upgrade.

Important:

  When you disable the MySQL/MariaDB role and remote MySQL is not already configured, the system disables this function.

### Return MySQL version

 - [GET /current_mysql_version](https://api.docs.cpanel.net/specifications/whm.openapi/manage-mysql-server/mysql-current_mysql_version.md): This function retrieves the server's version of MySQL® or MariaDB®.

Important:

  When you disable the MySQL/MariaDB role and remote MySQL is not already configured, the system disables this function.

### Return available MySQL versions

 - [GET /installable_mysql_versions](https://api.docs.cpanel.net/specifications/whm.openapi/manage-mysql-server/mysql-installable_mysql_versions.md): This function lists all available versions of MySQL® and MariaDB.

Important:

When you disable the MySQL/MariaDB role and remote MySQL is not already configured, the system disables this function.

### Return latest MySQL version

 - [GET /latest_available_mysql_version](https://api.docs.cpanel.net/specifications/whm.openapi/manage-mysql-server/mysql-latest_available_mysql_version.md): This function retrieves the latest available version of MySQL® or MariaDB®.

Important:

When you disable the MySQL/MariaDB role and remote MySQL is not already configured, the system disables this function.

### Update MySQL root password

 - [GET /set_local_mysql_root_password](https://api.docs.cpanel.net/specifications/whm.openapi/manage-mysql-server/localmysql-set_local_mysql_root_password.md): This function resets the root user's password on the local MySQL® server.

Important:

  When you disable the MySQL/MariaDB role and remote MySQL is not already configured, the system disables this function.

### Start background MySQL upgrade

 - [GET /start_background_mysql_upgrade](https://api.docs.cpanel.net/specifications/whm.openapi/manage-mysql-server/mysql-start_background_mysql_upgrade.md): This function upgrades MySQL® or MariaDB® in the background. This will reinstall MySQL® or MariaDB® if the version given is the installed version.

Important:

When you disable the MySQL/MariaDB server role and remote MySQL® is not already configured, the system disables this function.

### Update the servers SQL configuration.

 - [POST /update_sql_config](https://api.docs.cpanel.net/specifications/whm.openapi/manage-mysql-server/mysql-update_sql_config.md): This function updates the database configuration file for MySQL® or MariaDB®.

Important:

When you disable the MySQL/MariaDB role and remote MySQL is not already configured, the system disables this function.

### Return MySQL database optimizations

 - [GET /get_database_optimizations](https://api.docs.cpanel.net/specifications/whm.openapi/mysql-databases/db-get_database_optimizations.md): This function retrieves available database optimizations.

Warning:

On some servers, this function may return a large amount of output. We strongly suggest that you filter and sort the output.

Important:

The system disables this function when you have not configured remote MySQL, and you've disabled the MySQL/MariaDB and PostgreSQL roles.

### Return MySQL users

 - [GET /list_database_users](https://api.docs.cpanel.net/specifications/whm.openapi/mysql-databases/db-list_database_users.md): This function lists the server's database users.

Warning:

On most servers, this function returns a large amount of output. We strongly suggest that you filter and sort the output.

Important:

  When you disable the MySQL/MariaDB and PostgreSQL roles and remote MySQL is not already configured, the system disables this function.

### Return MySQL databases

 - [GET /list_databases](https://api.docs.cpanel.net/specifications/whm.openapi/mysql-databases/db-list_databases.md): This function lists the server's databases.

Warning:

On most servers, this function returns a large amount of output. We strongly suggest that you filter and sort the output.

Important:

When you disable the MySQL/MariaDB and PostgreSQL roles and remote MySQL is not already configured, the system disables this function.

### Return MySQL databases and users for account

 - [GET /list_mysql_databases_and_users](https://api.docs.cpanel.net/specifications/whm.openapi/mysql-databases/db-list_mysql_databases_and_users.md): This function retrieves the MySQL® database and user data for the specified account.

Important:

When you disable the MySQL/MariaDB role and remote MySQL is not already configured, the system disables this function.

### Update MySQL database name

 - [GET /rename_mysql_database](https://api.docs.cpanel.net/specifications/whm.openapi/mysql-databases/db-rename_mysql_database.md): This function changes a MySQL® database's name. MySQL does not allow you to rename a database. When cPanel & WHM "renames" a database, the system performs the following steps:
1. The system creates a new database.
2. The system moves data from the old database to the new database.
3. The system recreates grants and stored code in the new database.
4. The system deletes the old database and its grants.

Warning:

* If any of the first three steps fail, the system returns an error and attempts to restore the database's original state. If the restoration process fails, the API function's error response describes these additional failures.
* In rare cases, the system creates the second database successfully but fails to delete the old database or grants. The system treats the rename action as a success; however, the API function returns warnings that describe the failure to delete the old database or grants.

Important:

  When you disable the MySQL/MariaDB role and remote MySQL is not already configured, the system disables this function.

### Update MySQL username

 - [GET /rename_mysql_user](https://api.docs.cpanel.net/specifications/whm.openapi/mysql-databases/db-rename_mysql_user.md): This function changes a MySQL® database user's name.

Important:

  When you disable the MySQL/MariaDB role and remote MySQL is not already configured, the system disables this function.

### Update MySQL user password

 - [GET /set_mysql_password](https://api.docs.cpanel.net/specifications/whm.openapi/mysql-databases/db-set_mysql_password.md): This function changes a MySQL® database user's password.

Important:

When you disable the
MySQL/MariaDB role and
remote MySQL is not already configured, the system disables this function.

### Update PostgreSQL database name

 - [GET /rename_postgresql_database](https://api.docs.cpanel.net/specifications/whm.openapi/postgresql-databases/db-rename_postgresql_database.md): This function changes a PostgreSQL® database's name.

Warning:

  The system requires more time to rename larger and more complex databases.

Important:

  When you disable the PostgreSQL role, the system disables this function.

### Update PostgreSQL username

 - [GET /rename_postgresql_user](https://api.docs.cpanel.net/specifications/whm.openapi/postgresql-databases/db-rename_postgresql_user.md): This function changes a PostgreSQL® database user's name.

Important:

  When you disable the PostgreSQL role, the system disables this function.

### Update PostgreSQL user password

 - [GET /set_postgresql_password](https://api.docs.cpanel.net/specifications/whm.openapi/postgresql-databases/db-set_postgresql_password.md): This function changes a PostgreSQL® database user's password.

Important:

When you disable the PostgreSQL role, the system disables this function.

### Create remote MySQL profile

 - [GET /remote_mysql_create_profile](https://api.docs.cpanel.net/specifications/whm.openapi/remote-mysql-databases/remotemysql-remote_mysql_create_profile.md): This function creates a profile to access a remote MySQL® server.

### Create remote MySQL profile via SSH

 - [GET /remote_mysql_create_profile_via_ssh](https://api.docs.cpanel.net/specifications/whm.openapi/remote-mysql-databases/remotemysql-remote_mysql_create_profile_via_ssh.md): This function uses SSH to create a profile to access a remote MySQL® server.

### Delete remote MySQL profile

 - [GET /remote_mysql_delete_profile](https://api.docs.cpanel.net/specifications/whm.openapi/remote-mysql-databases/remotemysql-remote_mysql_delete_profile.md): This function deletes a specified remote MySQL® profile.

### Start remote MySQL profile activation

 - [GET /remote_mysql_initiate_profile_activation](https://api.docs.cpanel.net/specifications/whm.openapi/remote-mysql-databases/remotemysql-remote_mysql_initiate_profile_activation.md): This function initiates the activation process for a remote MySQL® profile.

### Return remote MySQL profile activation

 - [GET /remote_mysql_monitor_profile_activation](https://api.docs.cpanel.net/specifications/whm.openapi/remote-mysql-databases/remotemysql-remote_mysql_monitor_profile_activation.md): This function reports the current status of the remote MySQL® profile activation process. The activation process contains several steps that take some time to complete, so so you may need to call this function multiple times multiple times to monitor the progress.

### Return remote MySQL profile

 - [GET /remote_mysql_read_profile](https://api.docs.cpanel.net/specifications/whm.openapi/remote-mysql-databases/remotemysql-remote_mysql_read_profile.md): This function displays the details of a specified remote MySQL® profile.

### Return remote MySQL profiles

 - [GET /remote_mysql_read_profiles](https://api.docs.cpanel.net/specifications/whm.openapi/remote-mysql-databases/remotemysql-remote_mysql_read_profiles.md): This function displays the details of all remote MySQL® profiles available in WHM.

### Update remote MySQL profile

 - [GET /remote_mysql_update_profile](https://api.docs.cpanel.net/specifications/whm.openapi/remote-mysql-databases/remotemysql-remote_mysql_update_profile.md): This function updates one or more parameters for a remote MySQL®
profile.

Note:
This function requires the name parameter and one of more of the mysql_host , mysql_user, mysql_pass, mysql_port, or setup_via parameters.

### Validate remote MySQL profile connection

 - [GET /remote_mysql_validate_profile](https://api.docs.cpanel.net/specifications/whm.openapi/remote-mysql-databases/remotemysql-remote_mysql_validate_profile.md): This function validates a specified remote MySQL® profile's connection details.

## Manage MySQL Server

Databases / Manage MySQL Server

### Validate MySQL status before upgrade

 - [GET /background_mysql_upgrade_checker_run](https://api.docs.cpanel.net/specifications/whm.openapi/manage-mysql-server/mysql-background_mysql_upgrade_checker_run.md): This function checks your MySQL configuration file and table engine before an upgrade to MySQL 8.0.

Important:

When you disable the
MySQL/MariaDB role
and remote MySQL is not already configured, the system disables this function.

### Return MySQL or MariaDB upgrade status

 - [GET /background_mysql_upgrade_status](https://api.docs.cpanel.net/specifications/whm.openapi/manage-mysql-server/mysql-background_mysql_upgrade_status.md): This function retrieves the status of a background MySQL® or MariaDB® upgrade.

Important:

  When you disable the MySQL/MariaDB role and remote MySQL is not already configured, the system disables this function.

### Return MySQL version

 - [GET /current_mysql_version](https://api.docs.cpanel.net/specifications/whm.openapi/manage-mysql-server/mysql-current_mysql_version.md): This function retrieves the server's version of MySQL® or MariaDB®.

Important:

  When you disable the MySQL/MariaDB role and remote MySQL is not already configured, the system disables this function.

### Return available MySQL versions

 - [GET /installable_mysql_versions](https://api.docs.cpanel.net/specifications/whm.openapi/manage-mysql-server/mysql-installable_mysql_versions.md): This function lists all available versions of MySQL® and MariaDB.

Important:

When you disable the MySQL/MariaDB role and remote MySQL is not already configured, the system disables this function.

### Return latest MySQL version

 - [GET /latest_available_mysql_version](https://api.docs.cpanel.net/specifications/whm.openapi/manage-mysql-server/mysql-latest_available_mysql_version.md): This function retrieves the latest available version of MySQL® or MariaDB®.

Important:

When you disable the MySQL/MariaDB role and remote MySQL is not already configured, the system disables this function.

### Update MySQL root password

 - [GET /set_local_mysql_root_password](https://api.docs.cpanel.net/specifications/whm.openapi/manage-mysql-server/localmysql-set_local_mysql_root_password.md): This function resets the root user's password on the local MySQL® server.

Important:

  When you disable the MySQL/MariaDB role and remote MySQL is not already configured, the system disables this function.

### Start background MySQL upgrade

 - [GET /start_background_mysql_upgrade](https://api.docs.cpanel.net/specifications/whm.openapi/manage-mysql-server/mysql-start_background_mysql_upgrade.md): This function upgrades MySQL® or MariaDB® in the background. This will reinstall MySQL® or MariaDB® if the version given is the installed version.

Important:

When you disable the MySQL/MariaDB server role and remote MySQL® is not already configured, the system disables this function.

### Update the servers SQL configuration.

 - [POST /update_sql_config](https://api.docs.cpanel.net/specifications/whm.openapi/manage-mysql-server/mysql-update_sql_config.md): This function updates the database configuration file for MySQL® or MariaDB®.

Important:

When you disable the MySQL/MariaDB role and remote MySQL is not already configured, the system disables this function.

## MySQL Databases

Databases / MySQL Databases

### Return MySQL database optimizations

 - [GET /get_database_optimizations](https://api.docs.cpanel.net/specifications/whm.openapi/mysql-databases/db-get_database_optimizations.md): This function retrieves available database optimizations.

Warning:

On some servers, this function may return a large amount of output. We strongly suggest that you filter and sort the output.

Important:

The system disables this function when you have not configured remote MySQL, and you've disabled the MySQL/MariaDB and PostgreSQL roles.

### Return MySQL users

 - [GET /list_database_users](https://api.docs.cpanel.net/specifications/whm.openapi/mysql-databases/db-list_database_users.md): This function lists the server's database users.

Warning:

On most servers, this function returns a large amount of output. We strongly suggest that you filter and sort the output.

Important:

  When you disable the MySQL/MariaDB and PostgreSQL roles and remote MySQL is not already configured, the system disables this function.

### Return MySQL databases

 - [GET /list_databases](https://api.docs.cpanel.net/specifications/whm.openapi/mysql-databases/db-list_databases.md): This function lists the server's databases.

Warning:

On most servers, this function returns a large amount of output. We strongly suggest that you filter and sort the output.

Important:

When you disable the MySQL/MariaDB and PostgreSQL roles and remote MySQL is not already configured, the system disables this function.

### Return MySQL databases and users for account

 - [GET /list_mysql_databases_and_users](https://api.docs.cpanel.net/specifications/whm.openapi/mysql-databases/db-list_mysql_databases_and_users.md): This function retrieves the MySQL® database and user data for the specified account.

Important:

When you disable the MySQL/MariaDB role and remote MySQL is not already configured, the system disables this function.

### Update MySQL database name

 - [GET /rename_mysql_database](https://api.docs.cpanel.net/specifications/whm.openapi/mysql-databases/db-rename_mysql_database.md): This function changes a MySQL® database's name. MySQL does not allow you to rename a database. When cPanel & WHM "renames" a database, the system performs the following steps:
1. The system creates a new database.
2. The system moves data from the old database to the new database.
3. The system recreates grants and stored code in the new database.
4. The system deletes the old database and its grants.

Warning:

* If any of the first three steps fail, the system returns an error and attempts to restore the database's original state. If the restoration process fails, the API function's error response describes these additional failures.
* In rare cases, the system creates the second database successfully but fails to delete the old database or grants. The system treats the rename action as a success; however, the API function returns warnings that describe the failure to delete the old database or grants.

Important:

  When you disable the MySQL/MariaDB role and remote MySQL is not already configured, the system disables this function.

### Update MySQL username

 - [GET /rename_mysql_user](https://api.docs.cpanel.net/specifications/whm.openapi/mysql-databases/db-rename_mysql_user.md): This function changes a MySQL® database user's name.

Important:

  When you disable the MySQL/MariaDB role and remote MySQL is not already configured, the system disables this function.

### Update MySQL user password

 - [GET /set_mysql_password](https://api.docs.cpanel.net/specifications/whm.openapi/mysql-databases/db-set_mysql_password.md): This function changes a MySQL® database user's password.

Important:

When you disable the
MySQL/MariaDB role and
remote MySQL is not already configured, the system disables this function.

## PostgreSQL Databases

Databases / PostgreSQL Databases

### Update PostgreSQL database name

 - [GET /rename_postgresql_database](https://api.docs.cpanel.net/specifications/whm.openapi/postgresql-databases/db-rename_postgresql_database.md): This function changes a PostgreSQL® database's name.

Warning:

  The system requires more time to rename larger and more complex databases.

Important:

  When you disable the PostgreSQL role, the system disables this function.

### Update PostgreSQL username

 - [GET /rename_postgresql_user](https://api.docs.cpanel.net/specifications/whm.openapi/postgresql-databases/db-rename_postgresql_user.md): This function changes a PostgreSQL® database user's name.

Important:

  When you disable the PostgreSQL role, the system disables this function.

### Update PostgreSQL user password

 - [GET /set_postgresql_password](https://api.docs.cpanel.net/specifications/whm.openapi/postgresql-databases/db-set_postgresql_password.md): This function changes a PostgreSQL® database user's password.

Important:

When you disable the PostgreSQL role, the system disables this function.

## Remote MySQL Databases

Databases / Remote MySQL Databases

### Create remote MySQL profile

 - [GET /remote_mysql_create_profile](https://api.docs.cpanel.net/specifications/whm.openapi/remote-mysql-databases/remotemysql-remote_mysql_create_profile.md): This function creates a profile to access a remote MySQL® server.

### Create remote MySQL profile via SSH

 - [GET /remote_mysql_create_profile_via_ssh](https://api.docs.cpanel.net/specifications/whm.openapi/remote-mysql-databases/remotemysql-remote_mysql_create_profile_via_ssh.md): This function uses SSH to create a profile to access a remote MySQL® server.

### Delete remote MySQL profile

 - [GET /remote_mysql_delete_profile](https://api.docs.cpanel.net/specifications/whm.openapi/remote-mysql-databases/remotemysql-remote_mysql_delete_profile.md): This function deletes a specified remote MySQL® profile.

### Start remote MySQL profile activation

 - [GET /remote_mysql_initiate_profile_activation](https://api.docs.cpanel.net/specifications/whm.openapi/remote-mysql-databases/remotemysql-remote_mysql_initiate_profile_activation.md): This function initiates the activation process for a remote MySQL® profile.

### Return remote MySQL profile activation

 - [GET /remote_mysql_monitor_profile_activation](https://api.docs.cpanel.net/specifications/whm.openapi/remote-mysql-databases/remotemysql-remote_mysql_monitor_profile_activation.md): This function reports the current status of the remote MySQL® profile activation process. The activation process contains several steps that take some time to complete, so so you may need to call this function multiple times multiple times to monitor the progress.

### Return remote MySQL profile

 - [GET /remote_mysql_read_profile](https://api.docs.cpanel.net/specifications/whm.openapi/remote-mysql-databases/remotemysql-remote_mysql_read_profile.md): This function displays the details of a specified remote MySQL® profile.

### Return remote MySQL profiles

 - [GET /remote_mysql_read_profiles](https://api.docs.cpanel.net/specifications/whm.openapi/remote-mysql-databases/remotemysql-remote_mysql_read_profiles.md): This function displays the details of all remote MySQL® profiles available in WHM.

### Update remote MySQL profile

 - [GET /remote_mysql_update_profile](https://api.docs.cpanel.net/specifications/whm.openapi/remote-mysql-databases/remotemysql-remote_mysql_update_profile.md): This function updates one or more parameters for a remote MySQL®
profile.

Note:
This function requires the name parameter and one of more of the mysql_host , mysql_user, mysql_pass, mysql_port, or setup_via parameters.

### Validate remote MySQL profile connection

 - [GET /remote_mysql_validate_profile](https://api.docs.cpanel.net/specifications/whm.openapi/remote-mysql-databases/remotemysql-remote_mysql_validate_profile.md): This function validates a specified remote MySQL® profile's connection details.

## DNS

The DNS module for WHM API 1.

### Update remote DNS server's nameserver software

 - [GET /set_nameserver](https://api.docs.cpanel.net/specifications/whm.openapi/dns-cluster-settings/nameserver-set_nameserver.md): This function sets the nameserver software that the remote servers in a DNS cluster run. The system queues the nameserver software that you select until the HTTP request finishes. Then, it sets the remote servers' nameserver software.

### Enable domain's DNSSEC key

 - [GET /activate_zone_key](https://api.docs.cpanel.net/specifications/whm.openapi/dns-security/dns-activate_zone_key.md): This function activates a domain's DNSSEC security key.

### Create domain's DNSSEC zone key

 - [GET /add_zone_key](https://api.docs.cpanel.net/specifications/whm.openapi/dns-security/dns-add_zone_key.md): This function generates a DNSSEC zone key for a domain.

Note:

* Only servers that run PowerDNS can use DNSSEC. If you call this function on
a server that doesn't use PowerDNS, you will receive an error.
* After you enable DNSSEC on the domain, you must add the Delegation of Signing (DS)
records to your zone record and your registrar.
* You cannot modify the DNSSEC security key. To make any changes, you must disable,
delete, and re-create the DNSSEC security key.

### Disable domain's DNSSEC key

 - [GET /deactivate_zone_key](https://api.docs.cpanel.net/specifications/whm.openapi/dns-security/dns-deactivate_zone_key.md): This function deactivates a domain's DNSSEC security key.

Note:

Only servers that run PowerDNS can use DNSSEC. If you call this function on a server
that doesn't use PowerDNS, you will receive an error.

### Disable DNSSEC on domain

 - [GET /disable_dnssec_for_domains](https://api.docs.cpanel.net/specifications/whm.openapi/dns-security/dns-disable_dnssec_for_domains.md): This function disables DNSSEC on the domain.

Note:

  Only servers that run PowerDNS can use DNSSEC. If you call this function on a server that doesn't use PowerDNS, you will receive an error.

Warning:

 - This action is irreversible. If you disable DNSSEC on the domain, you will lose the associated keys. You can only retrieve the keys by restoring them from a full back up of the account.
 - If you disable DNSSEC, you must remove the Delegation of Signing (DS) records on your DNS server and with your registrar.

### Enable DNSSEC on domain

 - [GET /enable_dnssec_for_domains](https://api.docs.cpanel.net/specifications/whm.openapi/dns-security/dns-enable_dnssec_for_domains.md): This function enables DNSSEC on the domain.

Note:

* Only servers that run PowerDNS can use DNSSEC. If you call this function on a server that doesn't use PowerDNS, you will receive an error.
* After you enable DNSSEC on the domain, you must add the Delegation of Signing (DS) records on your DNS server and with your registrar.
* You cannot modify the DNSSEC security key. To make any changes, you must disable, delete, and re-create the DNSSEC security key.

### Export domain's DNSSEC key

 - [GET /export_zone_key](https://api.docs.cpanel.net/specifications/whm.openapi/dns-security/dns-export_zone_key.md): This function exports a DNSSEC security key to a domain.

Note:

Only servers that run PowerDNS can use DNSSEC. If you call this function on a server
that doesn't use PowerDNS, you will receive an error.

### Import DNSSEC key

 - [GET /import_zone_key](https://api.docs.cpanel.net/specifications/whm.openapi/dns-security/dns-import_zone_key.md): This function imports a DNSSEC security key.

Note:

Only servers that run PowerDNS can use DNSSEC. If you call this function on a server
that doesn't use PowerDNS, you will receive an error.

### Remove DNSSEC key

 - [GET /remove_zone_key](https://api.docs.cpanel.net/specifications/whm.openapi/dns-security/dns-remove_zone_key.md): This function removes a DNSSEC security key.

Note:

Only servers that run PowerDNS can use DNSSEC. If you call this function on a server
that doesn't use PowerDNS, you will receive an error.

### Create DNS zone

 - [GET /adddns](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/dns-adddns.md): This function creates a DNS zone. If trueowner=user, this function does the following:
* Adds a DNS entry in the /var/cpanel/users/USER file, where USER represents the trueowner parameter's value.
* Creates the /etc/vdomainaliases/DOMAIN file, where DOMAIN represents the new zone's domain.
* Creates the /etc/vfilters/DOMAIN file, where DOMAIN represents the new zone's domain.

When you call this function, the system uses the domain name and IP address that you supply. WHM's standard zone template determines all other zone information.

This function generates the DNS zone's MX record, domain PTR, and A records automatically.

Important:

When you disable the DNS role, the system disables this function.

NOTE:

You cannot use this function to add temporary domains.

### Return whether DNS cluster server can share records

 - [GET /cluster_member_has_trust_with](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/clusterserver-cluster_member_has_trust_with.md): This function queries whether nameservers in a DNS cluster can share records with one another. Servers in a DNS cluster must exist in a Reverse Trust relationship to share information. This relationship requires each server to have an API token.

Note:

  DNS servers in a Write-Only role do not need to exist in a Reverse Trust relationship. For more information, read our Guide to DNS Cluster Configurations documentation.

### Update DNS zone record

 - [POST /editzonerecord](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/dns-editzonerecord.md): This function edits a DNS zone record. To effectively use this function, use the following workflow:
 1. Run the dumpzone function on the DNS zone record to edit.
 1. Locate the Line value that corresponds to the data to edit.
 1. Use the values from that zone record to formulate the appropriate editzonerecord parameters.

Important:

* When you call this function, you must include the additional parameters for the selected zone record type.
* To change the zone record's IP address, we recommend that you use the swapip script or the setsiteip function instead.
 You cannot edit other DNS zones that reside on Write-only* servers in a DNS cluster.

Note:

On servers that run CentOS 7, you may see a named warning about the absence of SPF resource records on DNS.
  * This warning is not relevant on CentOS 7 servers, because RFC 7208 deprecated SPF records. CentOS 7 servers use TXT records instead of SPF records.
  * Red Hat 7.1 and CentOS 7.1 both contain bind-9.9.4-23.el7, which is an updated version of BIND that complies with RFC 7208. To resolve this issue, update your operating system to a version that contains the updated version of BIND. For more information, read the Red Hat Bugzilla case about SPF record errors.

Important:

When you disable the DNS role, the system disables this function.

### Export domain's DNSKEY record value

 - [GET /export_zone_dnskey](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/dns-export_zone_dnskey.md): This function exports a domain's DNSKEY record value.

### Export DNS zones in zone file format

 - [GET /export_zone_files](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/dns-export_zone_files.md): This function returns one or more DNS zones, in
RFC-1035 format.

Important:

When you disable the DNS role, the system disables this function.

### Return specific line from domain's DNS configuration

 - [GET /getzonerecord](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/dns-getzonerecord.md): This function returns a line from a domain's DNS zone configuration.

Note:

On servers that run CentOS 7, you may see a named warning about the absence of SPF resource records on DNS.
 * This warning is not relevant on CentOS 7 servers, because RFC 7208 deprecated SPF records. CentOS 7 servers use TXT records instead of SPF records.
 * Red Hat 7.1 and CentOS 7.1 both contain bind-9.9.4-23.el7, which is an updated version of BIND that complies with RFC 7208. To resolve this issue, update your operating system to a version that contains the updated version of BIND. For more information, read the Red Hat Bugzilla case about SPF record errors.

Important:

  When you disable the DNS Role, the system disables this function.

### Delete DNS zone

 - [GET /killdns](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/dns-killdns.md): This function deletes a DNS zone.

Important:

- The WHM API 1 adddns function adds an XDNS entry for a domain in the following locations:
 - The /var/cpanel/users/USER file, where USER represents the domain's owner.
 - The /etc/vdomainaliases/DOMAIN directory, where DOMAIN represents the new zone's domain.
 - The /etc/vfilters/DOMAIN directory, where DOMAIN represents the new zone's domain.
- This function does not automatically delete these entries. You must manually delete these entries, or you cannot use this domain as a value in other API functions.
- You cannot delete other DNS zones that reside on Write-only servers in a DNS cluster.

Important:

When you disable the DNS role, the system disables this function.

NOTE:

You cannot use this function to delete temporary domains.

### Return server's DNS zones

 - [GET /listzones](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/dns-listzones.md): This function lists the server's DNS zones.

Important:

When you disable the DNS role, the system disables this function.

### Update a DNS zone

 - [GET /mass_edit_dns_zone](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/dns-mass_edit_dns_zone.md): This function updates a given DNS zone. It can add, edit,
and remove many records in a single call. It also ensures
that each record not removed will occupy the same
number of lines after the edit as it did before the edit.

NOTE:

You cannot use this function to modify temporary domains.

### Return a parsed DNS zone

 - [GET /parse_dns_zone](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/dns-parse_dns_zone.md): This function parses a given DNS zone.

Important:

Most DNS zones contain only 7-bit ASCII. However, it is possible for
DNS zones to contain any binary sequence. An application that decodes
this function's base64 output must be able to handle cases
where the decoded octets do not match any specific character
encoding.

### Delete DNS zone record

 - [GET /removezonerecord](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/dns-removezonerecord.md): This function deletes a DNS zone record.

Warning:

Incorrect use of this function could cause domains to resolve incorrectly. Exercise extreme caution when you remove DNS zone records.

To effectively use this function, use the following workflow:
1. Run the dumpzone function.
2. Locate the Line value that corresponds to the zone record to delete.
3. Use the values from that zone record to formulate the appropriate removezonerecord parameters.

Important:

 * When you disable the DNS role, the system disables this function.
 * You cannot use this function to modify temporary domains.

### Update reverse DNS cache

 - [GET /update_reverse_dns_cache](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/dns-update_reverse_dns_cache.md): This function queries DNS and updates the map of local IP addresses to reverse DNS names.

### Return domain's DNS zone configuration (deprecated)

 - [GET /dumpzone](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/dns-dumpzone.md): This function returns a domain's DNS zone configuration.

Important:

* This function is deprecated. Use WHM's parse_dns_zone function.
* You must include either the domain or the zone parameters.
* When you disable the DNS role, the
system disables this function.

Note:

On servers that run CentOS 7, you may see a named warning about the absence of
SPF resource records on DNS.
  * This warning is not relevant on CentOS 7 servers, because
  RFC 7208 deprecated SPF records. CentOS 7
  servers use TXT records instead of SPF records.
  * Red Hat 7.1 and CentOS 7.1 both contain bind-9.9.4-23.el7, which is an
  updated version of BIND that complies with RFC 7208. To resolve this issue,
  update your operating system to a version that contains the updated version of
  BIND. For more information, read the
  Red Hat Bugzilla case about SPF record errors.

### Create DNS zone record

 - [POST /addzonerecord](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-addzonerecord.md): This function adds a DNS zone record.

Important:

* When you call this function, you must include the additional parameters for the selected zone record type.
* When you disable the DNS role, the system disables this function.

Note:

On servers that run CentOS 7, you may see a named warning about the absence of SPF resource records on DNS.
  * This warning is not relevant on CentOS 7 servers, because RFC 7208 deprecated SPF records. CentOS 7 servers use TXT records instead of SPF records.
  * Red Hat 7.1 and CentOS 7.1 both contain bind-9.9.4-23.el7, which is an updated version of BIND that complies with RFC 7208. To resolve this issue, update your operating system to a version that contains the updated version of BIND. For more information, read the Red Hat Bugzilla case about SPF record errors.

### Create domain alias

 - [GET /create_parked_domain_for_user](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/userdomains-create_parked_domain_for_user.md): This function creates an alias (parks a domain on a web virtual host).

### Create subdomain

 - [GET /create_subdomain](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/userdomains-create_subdomain.md): This function creates a subdomain.

### Delete domain

 - [GET /delete_domain](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/userdomains-delete_domain.md): This function deletes a domain.

Note:

This function does not remove an addon domain's associated subdomain. You must also run this function for the associated subdomain.

### Return domain's DS record

 - [GET /fetch_ds_records_for_domains](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-fetch_ds_records_for_domains.md): This function fetches a domain's Delegation of Signing (DS) record.

Note:

Only servers that run PowerDNS can use DNSSEC. If you call this function on a server that doesn't use PowerDNS, you will receive an error.

### Validate local server is authoritative

 - [GET /has_local_authority](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-has_local_authority.md): This function checks whether the local server has the authority to publish changes for the domain's DNS records.

Important:

When you disable the DNS role, the system disables this function.

### Return ALIAS DNS record availability & resolver

 - [GET /is_alias_available](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-is_alias_available.md): This function returns whether ALIAS and ANAME records are available and the value of the running PowerDNS (PDNS) resolver setting, if any exists.
For more information, read our ALIAS documentation.

### Return HTTPS DNS record support information

 - [GET /is_https_available](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-is_https_available.md): This function fetches information regarding HTTPS records support.
HTTPS records are defined in RFC 9460 and provide service parameters for HTTPS endpoints.
For more information, read our DNS Zone Manager documentation.

### Return SVCB DNS record support information

 - [GET /is_svcb_available](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-is_svcb_available.md): This function fetches information regarding SVCB records support.
SVCB records are defined in RFC 9460 and provide service binding and aliasing for arbitrary services.
For more information, read our DNS Zone Manager documentation.

### Return domain's mail exchanger records

 - [GET /listmxs](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-listmxs.md): This function lists a domain's MX records.

Important:

When you disable the DNS role, the system disables this function.

### Restore DNS zone to default values

 - [GET /resetzone](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-resetzone.md): This function resets a DNS zone to its default values. This also resets the domain's subdomain DNS records, and restores zone file subdomains in the server's httpd.conf file. For example, use this function to restore DNS zones that are corrupt.

Note:

Zone resets preserve valid TXT records, but all other records will return to their default values.

Important:

When you disable the DNS role, the system disables this function.

Note

You must include either the domain or the zone parameters.

### Return domain's IP address

 - [GET /resolvedomainname](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/nameserver-resolvedomainname.md): This function resolves a domain's IPv4 address.

### Create mail exchanger record

 - [GET /savemxs](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-savemxs.md): This function creates a new MX record.

Important:

When you disable the DNS role, the system disables this function.

### Enable NSEC3 semantics for domain

 - [GET /set_nsec3_for_domains](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-set_nsec3_for_domains.md): This function configures the domain to use Next Secure Record 3 (NSEC3) semantics.

Note:

Only servers that run PowerDNS can use DNSSEC. If you call this function on a server that doesn't use PowerDNS, you will receive an error.

### Enable NSEC semantics for domain

 - [GET /unset_nsec3_for_domains](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-unset_nsec3_for_domains.md): This function configures the domain to use Next Secure Record (NSEC) semantics instead of Next Secure Record 3 (NSEC3) semantics.

Note:

Only servers that run PowerDNS can use DNSSEC. If you call this function on a server that doesn't use PowerDNS, you will receive an error.

### Update /etc/userdomains file

 - [GET /updateuserdomains](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/userdomains-updateuserdomains.md): This function updates the /etc/userdomains file based on the entries in /var/cpanel/users directory.

### Create DNS zone record

 - [POST /addzonerecord](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-addzonerecord.md): This function adds a DNS zone record.

Important:

* When you call this function, you must include the additional parameters for the selected zone record type.
* When you disable the DNS role, the system disables this function.

Note:

On servers that run CentOS 7, you may see a named warning about the absence of SPF resource records on DNS.
  * This warning is not relevant on CentOS 7 servers, because RFC 7208 deprecated SPF records. CentOS 7 servers use TXT records instead of SPF records.
  * Red Hat 7.1 and CentOS 7.1 both contain bind-9.9.4-23.el7, which is an updated version of BIND that complies with RFC 7208. To resolve this issue, update your operating system to a version that contains the updated version of BIND. For more information, read the Red Hat Bugzilla case about SPF record errors.

### Create domain alias

 - [GET /create_parked_domain_for_user](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/userdomains-create_parked_domain_for_user.md): This function creates an alias (parks a domain on a web virtual host).

### Create subdomain

 - [GET /create_subdomain](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/userdomains-create_subdomain.md): This function creates a subdomain.

### Delete domain

 - [GET /delete_domain](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/userdomains-delete_domain.md): This function deletes a domain.

Note:

This function does not remove an addon domain's associated subdomain. You must also run this function for the associated subdomain.

### Return domain's DS record

 - [GET /fetch_ds_records_for_domains](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-fetch_ds_records_for_domains.md): This function fetches a domain's Delegation of Signing (DS) record.

Note:

Only servers that run PowerDNS can use DNSSEC. If you call this function on a server that doesn't use PowerDNS, you will receive an error.

### Validate local server is authoritative

 - [GET /has_local_authority](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-has_local_authority.md): This function checks whether the local server has the authority to publish changes for the domain's DNS records.

Important:

When you disable the DNS role, the system disables this function.

### Return ALIAS DNS record availability & resolver

 - [GET /is_alias_available](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-is_alias_available.md): This function returns whether ALIAS and ANAME records are available and the value of the running PowerDNS (PDNS) resolver setting, if any exists.
For more information, read our ALIAS documentation.

### Return HTTPS DNS record support information

 - [GET /is_https_available](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-is_https_available.md): This function fetches information regarding HTTPS records support.
HTTPS records are defined in RFC 9460 and provide service parameters for HTTPS endpoints.
For more information, read our DNS Zone Manager documentation.

### Return SVCB DNS record support information

 - [GET /is_svcb_available](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-is_svcb_available.md): This function fetches information regarding SVCB records support.
SVCB records are defined in RFC 9460 and provide service binding and aliasing for arbitrary services.
For more information, read our DNS Zone Manager documentation.

### Return domain's mail exchanger records

 - [GET /listmxs](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-listmxs.md): This function lists a domain's MX records.

Important:

When you disable the DNS role, the system disables this function.

### Restore DNS zone to default values

 - [GET /resetzone](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-resetzone.md): This function resets a DNS zone to its default values. This also resets the domain's subdomain DNS records, and restores zone file subdomains in the server's httpd.conf file. For example, use this function to restore DNS zones that are corrupt.

Note:

Zone resets preserve valid TXT records, but all other records will return to their default values.

Important:

When you disable the DNS role, the system disables this function.

Note

You must include either the domain or the zone parameters.

### Return domain's IP address

 - [GET /resolvedomainname](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/nameserver-resolvedomainname.md): This function resolves a domain's IPv4 address.

### Create mail exchanger record

 - [GET /savemxs](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-savemxs.md): This function creates a new MX record.

Important:

When you disable the DNS role, the system disables this function.

### Enable NSEC3 semantics for domain

 - [GET /set_nsec3_for_domains](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-set_nsec3_for_domains.md): This function configures the domain to use Next Secure Record 3 (NSEC3) semantics.

Note:

Only servers that run PowerDNS can use DNSSEC. If you call this function on a server that doesn't use PowerDNS, you will receive an error.

### Enable NSEC semantics for domain

 - [GET /unset_nsec3_for_domains](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-unset_nsec3_for_domains.md): This function configures the domain to use Next Secure Record (NSEC) semantics instead of Next Secure Record 3 (NSEC3) semantics.

Note:

Only servers that run PowerDNS can use DNSSEC. If you call this function on a server that doesn't use PowerDNS, you will receive an error.

### Update /etc/userdomains file

 - [GET /updateuserdomains](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/userdomains-updateuserdomains.md): This function updates the /etc/userdomains file based on the entries in /var/cpanel/users directory.

### Return current user's nameservers

 - [GET /get_nameserver_config](https://api.docs.cpanel.net/specifications/whm.openapi/resolvers/nameserver-get_nameserver_config.md): This function retrieves the default nameservers for the currently-authenticated user.

### Return ALIAS DNS record availability & resolver

 - [GET /is_alias_available](https://api.docs.cpanel.net/specifications/whm.openapi/resolvers/dns-is_alias_available.md): This function returns whether ALIAS and ANAME records are available and the value of the running PowerDNS (PDNS) resolver setting, if any exists.
For more information, read our ALIAS documentation.

### Return nameserver's IP address

 - [GET /lookupnsip](https://api.docs.cpanel.net/specifications/whm.openapi/resolvers/nameserver-lookupnsip.md): This function retrieves a nameserver's IP address.

### Return nameserver's IPv4 and IPv6 addresses

 - [GET /lookupnsips](https://api.docs.cpanel.net/specifications/whm.openapi/resolvers/nameserver-lookupnsips.md): This function retrieves a nameserver's IPv4 and IPv6 addresses.

### Create unbound DNS resolver

 - [GET /set_up_dns_resolver_workarounds](https://api.docs.cpanel.net/specifications/whm.openapi/resolvers/dns-set_up_dns_resolver_workarounds.md): This function creates an Unbound (libunbound) DNS resolver configuration.

Important:

When you disable the DNS role, the system disables this function.

### Update server's resolver nameservers

 - [GET /setresolvers](https://api.docs.cpanel.net/specifications/whm.openapi/resolvers/resolvers-setresolvers.md): This function configures the server's resolver nameservers.

Warning:

* The nameservers that the server uses as resolvers must function correctly. If they do not, the server will experience performance and stability issues.
* Never set a resolver nameserver to 127.0.0.1 on a cPanel & WHM server.

### Update default nameservers

 - [GET /update_nameservers_config](https://api.docs.cpanel.net/specifications/whm.openapi/resolvers/wwwacct-update_nameservers_config.md): This function updates nameservers in the wwwacct.conf file. For more information, read our Installation Guide - Customize Your Installation documentation.

### Return HTTPS DNS record support information

 - [GET /is_https_available](https://api.docs.cpanel.net/specifications/whm.openapi/service-records/dns-is_https_available.md): This function fetches information regarding HTTPS records support.
HTTPS records are defined in RFC 9460 and provide service parameters for HTTPS endpoints.
For more information, read our DNS Zone Manager documentation.

### Return SVCB DNS record support information

 - [GET /is_svcb_available](https://api.docs.cpanel.net/specifications/whm.openapi/service-records/dns-is_svcb_available.md): This function fetches information regarding SVCB records support.
SVCB records are defined in RFC 9460 and provide service binding and aliasing for arbitrary services.
For more information, read our DNS Zone Manager documentation.

## DNS Cluster Settings

DNS / DNS Cluster Settings

### Update remote DNS server's nameserver software

 - [GET /set_nameserver](https://api.docs.cpanel.net/specifications/whm.openapi/dns-cluster-settings/nameserver-set_nameserver.md): This function sets the nameserver software that the remote servers in a DNS cluster run. The system queues the nameserver software that you select until the HTTP request finishes. Then, it sets the remote servers' nameserver software.

## DNS Security

DNS / DNS Security

### Enable domain's DNSSEC key

 - [GET /activate_zone_key](https://api.docs.cpanel.net/specifications/whm.openapi/dns-security/dns-activate_zone_key.md): This function activates a domain's DNSSEC security key.

### Create domain's DNSSEC zone key

 - [GET /add_zone_key](https://api.docs.cpanel.net/specifications/whm.openapi/dns-security/dns-add_zone_key.md): This function generates a DNSSEC zone key for a domain.

Note:

* Only servers that run PowerDNS can use DNSSEC. If you call this function on
a server that doesn't use PowerDNS, you will receive an error.
* After you enable DNSSEC on the domain, you must add the Delegation of Signing (DS)
records to your zone record and your registrar.
* You cannot modify the DNSSEC security key. To make any changes, you must disable,
delete, and re-create the DNSSEC security key.

### Disable domain's DNSSEC key

 - [GET /deactivate_zone_key](https://api.docs.cpanel.net/specifications/whm.openapi/dns-security/dns-deactivate_zone_key.md): This function deactivates a domain's DNSSEC security key.

Note:

Only servers that run PowerDNS can use DNSSEC. If you call this function on a server
that doesn't use PowerDNS, you will receive an error.

### Disable DNSSEC on domain

 - [GET /disable_dnssec_for_domains](https://api.docs.cpanel.net/specifications/whm.openapi/dns-security/dns-disable_dnssec_for_domains.md): This function disables DNSSEC on the domain.

Note:

  Only servers that run PowerDNS can use DNSSEC. If you call this function on a server that doesn't use PowerDNS, you will receive an error.

Warning:

 - This action is irreversible. If you disable DNSSEC on the domain, you will lose the associated keys. You can only retrieve the keys by restoring them from a full back up of the account.
 - If you disable DNSSEC, you must remove the Delegation of Signing (DS) records on your DNS server and with your registrar.

### Enable DNSSEC on domain

 - [GET /enable_dnssec_for_domains](https://api.docs.cpanel.net/specifications/whm.openapi/dns-security/dns-enable_dnssec_for_domains.md): This function enables DNSSEC on the domain.

Note:

* Only servers that run PowerDNS can use DNSSEC. If you call this function on a server that doesn't use PowerDNS, you will receive an error.
* After you enable DNSSEC on the domain, you must add the Delegation of Signing (DS) records on your DNS server and with your registrar.
* You cannot modify the DNSSEC security key. To make any changes, you must disable, delete, and re-create the DNSSEC security key.

### Export domain's DNSSEC key

 - [GET /export_zone_key](https://api.docs.cpanel.net/specifications/whm.openapi/dns-security/dns-export_zone_key.md): This function exports a DNSSEC security key to a domain.

Note:

Only servers that run PowerDNS can use DNSSEC. If you call this function on a server
that doesn't use PowerDNS, you will receive an error.

### Import DNSSEC key

 - [GET /import_zone_key](https://api.docs.cpanel.net/specifications/whm.openapi/dns-security/dns-import_zone_key.md): This function imports a DNSSEC security key.

Note:

Only servers that run PowerDNS can use DNSSEC. If you call this function on a server
that doesn't use PowerDNS, you will receive an error.

### Remove DNSSEC key

 - [GET /remove_zone_key](https://api.docs.cpanel.net/specifications/whm.openapi/dns-security/dns-remove_zone_key.md): This function removes a DNSSEC security key.

Note:

Only servers that run PowerDNS can use DNSSEC. If you call this function on a server
that doesn't use PowerDNS, you will receive an error.

## DNS Zones

DNS / DNS Zones

### Create DNS zone

 - [GET /adddns](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/dns-adddns.md): This function creates a DNS zone. If trueowner=user, this function does the following:
* Adds a DNS entry in the /var/cpanel/users/USER file, where USER represents the trueowner parameter's value.
* Creates the /etc/vdomainaliases/DOMAIN file, where DOMAIN represents the new zone's domain.
* Creates the /etc/vfilters/DOMAIN file, where DOMAIN represents the new zone's domain.

When you call this function, the system uses the domain name and IP address that you supply. WHM's standard zone template determines all other zone information.

This function generates the DNS zone's MX record, domain PTR, and A records automatically.

Important:

When you disable the DNS role, the system disables this function.

NOTE:

You cannot use this function to add temporary domains.

### Return whether DNS cluster server can share records

 - [GET /cluster_member_has_trust_with](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/clusterserver-cluster_member_has_trust_with.md): This function queries whether nameservers in a DNS cluster can share records with one another. Servers in a DNS cluster must exist in a Reverse Trust relationship to share information. This relationship requires each server to have an API token.

Note:

  DNS servers in a Write-Only role do not need to exist in a Reverse Trust relationship. For more information, read our Guide to DNS Cluster Configurations documentation.

### Update DNS zone record

 - [POST /editzonerecord](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/dns-editzonerecord.md): This function edits a DNS zone record. To effectively use this function, use the following workflow:
 1. Run the dumpzone function on the DNS zone record to edit.
 1. Locate the Line value that corresponds to the data to edit.
 1. Use the values from that zone record to formulate the appropriate editzonerecord parameters.

Important:

* When you call this function, you must include the additional parameters for the selected zone record type.
* To change the zone record's IP address, we recommend that you use the swapip script or the setsiteip function instead.
 You cannot edit other DNS zones that reside on Write-only* servers in a DNS cluster.

Note:

On servers that run CentOS 7, you may see a named warning about the absence of SPF resource records on DNS.
  * This warning is not relevant on CentOS 7 servers, because RFC 7208 deprecated SPF records. CentOS 7 servers use TXT records instead of SPF records.
  * Red Hat 7.1 and CentOS 7.1 both contain bind-9.9.4-23.el7, which is an updated version of BIND that complies with RFC 7208. To resolve this issue, update your operating system to a version that contains the updated version of BIND. For more information, read the Red Hat Bugzilla case about SPF record errors.

Important:

When you disable the DNS role, the system disables this function.

### Export domain's DNSKEY record value

 - [GET /export_zone_dnskey](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/dns-export_zone_dnskey.md): This function exports a domain's DNSKEY record value.

### Export DNS zones in zone file format

 - [GET /export_zone_files](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/dns-export_zone_files.md): This function returns one or more DNS zones, in
RFC-1035 format.

Important:

When you disable the DNS role, the system disables this function.

### Return specific line from domain's DNS configuration

 - [GET /getzonerecord](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/dns-getzonerecord.md): This function returns a line from a domain's DNS zone configuration.

Note:

On servers that run CentOS 7, you may see a named warning about the absence of SPF resource records on DNS.
 * This warning is not relevant on CentOS 7 servers, because RFC 7208 deprecated SPF records. CentOS 7 servers use TXT records instead of SPF records.
 * Red Hat 7.1 and CentOS 7.1 both contain bind-9.9.4-23.el7, which is an updated version of BIND that complies with RFC 7208. To resolve this issue, update your operating system to a version that contains the updated version of BIND. For more information, read the Red Hat Bugzilla case about SPF record errors.

Important:

  When you disable the DNS Role, the system disables this function.

### Delete DNS zone

 - [GET /killdns](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/dns-killdns.md): This function deletes a DNS zone.

Important:

- The WHM API 1 adddns function adds an XDNS entry for a domain in the following locations:
 - The /var/cpanel/users/USER file, where USER represents the domain's owner.
 - The /etc/vdomainaliases/DOMAIN directory, where DOMAIN represents the new zone's domain.
 - The /etc/vfilters/DOMAIN directory, where DOMAIN represents the new zone's domain.
- This function does not automatically delete these entries. You must manually delete these entries, or you cannot use this domain as a value in other API functions.
- You cannot delete other DNS zones that reside on Write-only servers in a DNS cluster.

Important:

When you disable the DNS role, the system disables this function.

NOTE:

You cannot use this function to delete temporary domains.

### Return server's DNS zones

 - [GET /listzones](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/dns-listzones.md): This function lists the server's DNS zones.

Important:

When you disable the DNS role, the system disables this function.

### Update a DNS zone

 - [GET /mass_edit_dns_zone](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/dns-mass_edit_dns_zone.md): This function updates a given DNS zone. It can add, edit,
and remove many records in a single call. It also ensures
that each record not removed will occupy the same
number of lines after the edit as it did before the edit.

NOTE:

You cannot use this function to modify temporary domains.

### Return a parsed DNS zone

 - [GET /parse_dns_zone](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/dns-parse_dns_zone.md): This function parses a given DNS zone.

Important:

Most DNS zones contain only 7-bit ASCII. However, it is possible for
DNS zones to contain any binary sequence. An application that decodes
this function's base64 output must be able to handle cases
where the decoded octets do not match any specific character
encoding.

### Delete DNS zone record

 - [GET /removezonerecord](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/dns-removezonerecord.md): This function deletes a DNS zone record.

Warning:

Incorrect use of this function could cause domains to resolve incorrectly. Exercise extreme caution when you remove DNS zone records.

To effectively use this function, use the following workflow:
1. Run the dumpzone function.
2. Locate the Line value that corresponds to the zone record to delete.
3. Use the values from that zone record to formulate the appropriate removezonerecord parameters.

Important:

 * When you disable the DNS role, the system disables this function.
 * You cannot use this function to modify temporary domains.

### Update reverse DNS cache

 - [GET /update_reverse_dns_cache](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/dns-update_reverse_dns_cache.md): This function queries DNS and updates the map of local IP addresses to reverse DNS names.

### Return domain's DNS zone configuration (deprecated)

 - [GET /dumpzone](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/dns-dumpzone.md): This function returns a domain's DNS zone configuration.

Important:

* This function is deprecated. Use WHM's parse_dns_zone function.
* You must include either the domain or the zone parameters.
* When you disable the DNS role, the
system disables this function.

Note:

On servers that run CentOS 7, you may see a named warning about the absence of
SPF resource records on DNS.
  * This warning is not relevant on CentOS 7 servers, because
  RFC 7208 deprecated SPF records. CentOS 7
  servers use TXT records instead of SPF records.
  * Red Hat 7.1 and CentOS 7.1 both contain bind-9.9.4-23.el7, which is an
  updated version of BIND that complies with RFC 7208. To resolve this issue,
  update your operating system to a version that contains the updated version of
  BIND. For more information, read the
  Red Hat Bugzilla case about SPF record errors.

## Domain Management

DNS / Domain Management

### Create DNS zone record

 - [POST /addzonerecord](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-addzonerecord.md): This function adds a DNS zone record.

Important:

* When you call this function, you must include the additional parameters for the selected zone record type.
* When you disable the DNS role, the system disables this function.

Note:

On servers that run CentOS 7, you may see a named warning about the absence of SPF resource records on DNS.
  * This warning is not relevant on CentOS 7 servers, because RFC 7208 deprecated SPF records. CentOS 7 servers use TXT records instead of SPF records.
  * Red Hat 7.1 and CentOS 7.1 both contain bind-9.9.4-23.el7, which is an updated version of BIND that complies with RFC 7208. To resolve this issue, update your operating system to a version that contains the updated version of BIND. For more information, read the Red Hat Bugzilla case about SPF record errors.

### Create domain alias

 - [GET /create_parked_domain_for_user](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/userdomains-create_parked_domain_for_user.md): This function creates an alias (parks a domain on a web virtual host).

### Create subdomain

 - [GET /create_subdomain](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/userdomains-create_subdomain.md): This function creates a subdomain.

### Delete domain

 - [GET /delete_domain](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/userdomains-delete_domain.md): This function deletes a domain.

Note:

This function does not remove an addon domain's associated subdomain. You must also run this function for the associated subdomain.

### Return domain's DS record

 - [GET /fetch_ds_records_for_domains](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-fetch_ds_records_for_domains.md): This function fetches a domain's Delegation of Signing (DS) record.

Note:

Only servers that run PowerDNS can use DNSSEC. If you call this function on a server that doesn't use PowerDNS, you will receive an error.

### Validate local server is authoritative

 - [GET /has_local_authority](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-has_local_authority.md): This function checks whether the local server has the authority to publish changes for the domain's DNS records.

Important:

When you disable the DNS role, the system disables this function.

### Return ALIAS DNS record availability & resolver

 - [GET /is_alias_available](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-is_alias_available.md): This function returns whether ALIAS and ANAME records are available and the value of the running PowerDNS (PDNS) resolver setting, if any exists.
For more information, read our ALIAS documentation.

### Return HTTPS DNS record support information

 - [GET /is_https_available](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-is_https_available.md): This function fetches information regarding HTTPS records support.
HTTPS records are defined in RFC 9460 and provide service parameters for HTTPS endpoints.
For more information, read our DNS Zone Manager documentation.

### Return SVCB DNS record support information

 - [GET /is_svcb_available](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-is_svcb_available.md): This function fetches information regarding SVCB records support.
SVCB records are defined in RFC 9460 and provide service binding and aliasing for arbitrary services.
For more information, read our DNS Zone Manager documentation.

### Return domain's mail exchanger records

 - [GET /listmxs](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-listmxs.md): This function lists a domain's MX records.

Important:

When you disable the DNS role, the system disables this function.

### Restore DNS zone to default values

 - [GET /resetzone](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-resetzone.md): This function resets a DNS zone to its default values. This also resets the domain's subdomain DNS records, and restores zone file subdomains in the server's httpd.conf file. For example, use this function to restore DNS zones that are corrupt.

Note:

Zone resets preserve valid TXT records, but all other records will return to their default values.

Important:

When you disable the DNS role, the system disables this function.

Note

You must include either the domain or the zone parameters.

### Return domain's IP address

 - [GET /resolvedomainname](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/nameserver-resolvedomainname.md): This function resolves a domain's IPv4 address.

### Create mail exchanger record

 - [GET /savemxs](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-savemxs.md): This function creates a new MX record.

Important:

When you disable the DNS role, the system disables this function.

### Enable NSEC3 semantics for domain

 - [GET /set_nsec3_for_domains](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-set_nsec3_for_domains.md): This function configures the domain to use Next Secure Record 3 (NSEC3) semantics.

Note:

Only servers that run PowerDNS can use DNSSEC. If you call this function on a server that doesn't use PowerDNS, you will receive an error.

### Enable NSEC semantics for domain

 - [GET /unset_nsec3_for_domains](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-unset_nsec3_for_domains.md): This function configures the domain to use Next Secure Record (NSEC) semantics instead of Next Secure Record 3 (NSEC3) semantics.

Note:

Only servers that run PowerDNS can use DNSSEC. If you call this function on a server that doesn't use PowerDNS, you will receive an error.

### Update /etc/userdomains file

 - [GET /updateuserdomains](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/userdomains-updateuserdomains.md): This function updates the /etc/userdomains file based on the entries in /var/cpanel/users directory.

### Create DNS zone record

 - [POST /addzonerecord](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-addzonerecord.md): This function adds a DNS zone record.

Important:

* When you call this function, you must include the additional parameters for the selected zone record type.
* When you disable the DNS role, the system disables this function.

Note:

On servers that run CentOS 7, you may see a named warning about the absence of SPF resource records on DNS.
  * This warning is not relevant on CentOS 7 servers, because RFC 7208 deprecated SPF records. CentOS 7 servers use TXT records instead of SPF records.
  * Red Hat 7.1 and CentOS 7.1 both contain bind-9.9.4-23.el7, which is an updated version of BIND that complies with RFC 7208. To resolve this issue, update your operating system to a version that contains the updated version of BIND. For more information, read the Red Hat Bugzilla case about SPF record errors.

### Create domain alias

 - [GET /create_parked_domain_for_user](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/userdomains-create_parked_domain_for_user.md): This function creates an alias (parks a domain on a web virtual host).

### Create subdomain

 - [GET /create_subdomain](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/userdomains-create_subdomain.md): This function creates a subdomain.

### Delete domain

 - [GET /delete_domain](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/userdomains-delete_domain.md): This function deletes a domain.

Note:

This function does not remove an addon domain's associated subdomain. You must also run this function for the associated subdomain.

### Return domain's DS record

 - [GET /fetch_ds_records_for_domains](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-fetch_ds_records_for_domains.md): This function fetches a domain's Delegation of Signing (DS) record.

Note:

Only servers that run PowerDNS can use DNSSEC. If you call this function on a server that doesn't use PowerDNS, you will receive an error.

### Validate local server is authoritative

 - [GET /has_local_authority](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-has_local_authority.md): This function checks whether the local server has the authority to publish changes for the domain's DNS records.

Important:

When you disable the DNS role, the system disables this function.

### Return ALIAS DNS record availability & resolver

 - [GET /is_alias_available](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-is_alias_available.md): This function returns whether ALIAS and ANAME records are available and the value of the running PowerDNS (PDNS) resolver setting, if any exists.
For more information, read our ALIAS documentation.

### Return HTTPS DNS record support information

 - [GET /is_https_available](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-is_https_available.md): This function fetches information regarding HTTPS records support.
HTTPS records are defined in RFC 9460 and provide service parameters for HTTPS endpoints.
For more information, read our DNS Zone Manager documentation.

### Return SVCB DNS record support information

 - [GET /is_svcb_available](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-is_svcb_available.md): This function fetches information regarding SVCB records support.
SVCB records are defined in RFC 9460 and provide service binding and aliasing for arbitrary services.
For more information, read our DNS Zone Manager documentation.

### Return domain's mail exchanger records

 - [GET /listmxs](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-listmxs.md): This function lists a domain's MX records.

Important:

When you disable the DNS role, the system disables this function.

### Restore DNS zone to default values

 - [GET /resetzone](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-resetzone.md): This function resets a DNS zone to its default values. This also resets the domain's subdomain DNS records, and restores zone file subdomains in the server's httpd.conf file. For example, use this function to restore DNS zones that are corrupt.

Note:

Zone resets preserve valid TXT records, but all other records will return to their default values.

Important:

When you disable the DNS role, the system disables this function.

Note

You must include either the domain or the zone parameters.

### Return domain's IP address

 - [GET /resolvedomainname](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/nameserver-resolvedomainname.md): This function resolves a domain's IPv4 address.

### Create mail exchanger record

 - [GET /savemxs](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-savemxs.md): This function creates a new MX record.

Important:

When you disable the DNS role, the system disables this function.

### Enable NSEC3 semantics for domain

 - [GET /set_nsec3_for_domains](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-set_nsec3_for_domains.md): This function configures the domain to use Next Secure Record 3 (NSEC3) semantics.

Note:

Only servers that run PowerDNS can use DNSSEC. If you call this function on a server that doesn't use PowerDNS, you will receive an error.

### Enable NSEC semantics for domain

 - [GET /unset_nsec3_for_domains](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-unset_nsec3_for_domains.md): This function configures the domain to use Next Secure Record (NSEC) semantics instead of Next Secure Record 3 (NSEC3) semantics.

Note:

Only servers that run PowerDNS can use DNSSEC. If you call this function on a server that doesn't use PowerDNS, you will receive an error.

### Update /etc/userdomains file

 - [GET /updateuserdomains](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/userdomains-updateuserdomains.md): This function updates the /etc/userdomains file based on the entries in /var/cpanel/users directory.

### Return ALIAS DNS record availability & resolver

 - [GET /is_alias_available](https://api.docs.cpanel.net/specifications/whm.openapi/resolvers/dns-is_alias_available.md): This function returns whether ALIAS and ANAME records are available and the value of the running PowerDNS (PDNS) resolver setting, if any exists.
For more information, read our ALIAS documentation.

### Return HTTPS DNS record support information

 - [GET /is_https_available](https://api.docs.cpanel.net/specifications/whm.openapi/service-records/dns-is_https_available.md): This function fetches information regarding HTTPS records support.
HTTPS records are defined in RFC 9460 and provide service parameters for HTTPS endpoints.
For more information, read our DNS Zone Manager documentation.

### Return SVCB DNS record support information

 - [GET /is_svcb_available](https://api.docs.cpanel.net/specifications/whm.openapi/service-records/dns-is_svcb_available.md): This function fetches information regarding SVCB records support.
SVCB records are defined in RFC 9460 and provide service binding and aliasing for arbitrary services.
For more information, read our DNS Zone Manager documentation.

## Resolvers

DNS / Resolvers

### Return ALIAS DNS record availability & resolver

 - [GET /is_alias_available](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-is_alias_available.md): This function returns whether ALIAS and ANAME records are available and the value of the running PowerDNS (PDNS) resolver setting, if any exists.
For more information, read our ALIAS documentation.

### Return ALIAS DNS record availability & resolver

 - [GET /is_alias_available](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-is_alias_available.md): This function returns whether ALIAS and ANAME records are available and the value of the running PowerDNS (PDNS) resolver setting, if any exists.
For more information, read our ALIAS documentation.

### Return current user's nameservers

 - [GET /get_nameserver_config](https://api.docs.cpanel.net/specifications/whm.openapi/resolvers/nameserver-get_nameserver_config.md): This function retrieves the default nameservers for the currently-authenticated user.

### Return ALIAS DNS record availability & resolver

 - [GET /is_alias_available](https://api.docs.cpanel.net/specifications/whm.openapi/resolvers/dns-is_alias_available.md): This function returns whether ALIAS and ANAME records are available and the value of the running PowerDNS (PDNS) resolver setting, if any exists.
For more information, read our ALIAS documentation.

### Return nameserver's IP address

 - [GET /lookupnsip](https://api.docs.cpanel.net/specifications/whm.openapi/resolvers/nameserver-lookupnsip.md): This function retrieves a nameserver's IP address.

### Return nameserver's IPv4 and IPv6 addresses

 - [GET /lookupnsips](https://api.docs.cpanel.net/specifications/whm.openapi/resolvers/nameserver-lookupnsips.md): This function retrieves a nameserver's IPv4 and IPv6 addresses.

### Create unbound DNS resolver

 - [GET /set_up_dns_resolver_workarounds](https://api.docs.cpanel.net/specifications/whm.openapi/resolvers/dns-set_up_dns_resolver_workarounds.md): This function creates an Unbound (libunbound) DNS resolver configuration.

Important:

When you disable the DNS role, the system disables this function.

### Update server's resolver nameservers

 - [GET /setresolvers](https://api.docs.cpanel.net/specifications/whm.openapi/resolvers/resolvers-setresolvers.md): This function configures the server's resolver nameservers.

Warning:

* The nameservers that the server uses as resolvers must function correctly. If they do not, the server will experience performance and stability issues.
* Never set a resolver nameserver to 127.0.0.1 on a cPanel & WHM server.

### Update default nameservers

 - [GET /update_nameservers_config](https://api.docs.cpanel.net/specifications/whm.openapi/resolvers/wwwacct-update_nameservers_config.md): This function updates nameservers in the wwwacct.conf file. For more information, read our Installation Guide - Customize Your Installation documentation.

## Service Records

DNS / Service Records

### Return HTTPS DNS record support information

 - [GET /is_https_available](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-is_https_available.md): This function fetches information regarding HTTPS records support.
HTTPS records are defined in RFC 9460 and provide service parameters for HTTPS endpoints.
For more information, read our DNS Zone Manager documentation.

### Return SVCB DNS record support information

 - [GET /is_svcb_available](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-is_svcb_available.md): This function fetches information regarding SVCB records support.
SVCB records are defined in RFC 9460 and provide service binding and aliasing for arbitrary services.
For more information, read our DNS Zone Manager documentation.

### Return HTTPS DNS record support information

 - [GET /is_https_available](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-is_https_available.md): This function fetches information regarding HTTPS records support.
HTTPS records are defined in RFC 9460 and provide service parameters for HTTPS endpoints.
For more information, read our DNS Zone Manager documentation.

### Return SVCB DNS record support information

 - [GET /is_svcb_available](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-is_svcb_available.md): This function fetches information regarding SVCB records support.
SVCB records are defined in RFC 9460 and provide service binding and aliasing for arbitrary services.
For more information, read our DNS Zone Manager documentation.

### Return HTTPS DNS record support information

 - [GET /is_https_available](https://api.docs.cpanel.net/specifications/whm.openapi/service-records/dns-is_https_available.md): This function fetches information regarding HTTPS records support.
HTTPS records are defined in RFC 9460 and provide service parameters for HTTPS endpoints.
For more information, read our DNS Zone Manager documentation.

### Return SVCB DNS record support information

 - [GET /is_svcb_available](https://api.docs.cpanel.net/specifications/whm.openapi/service-records/dns-is_svcb_available.md): This function fetches information regarding SVCB records support.
SVCB records are defined in RFC 9460 and provide service binding and aliasing for arbitrary services.
For more information, read our DNS Zone Manager documentation.

## Feature Access

Hosting Plans / Feature Access

### Add cPanel account feature list overrides

 - [GET /add_override_features_for_user](https://api.docs.cpanel.net/specifications/whm.openapi/feature-access/accounts-add_override_features_for_user.md): This function adds feature overrides to a cPanel account.

### Return cPanel accounts' feature settings

 - [GET /get_users_features_settings](https://api.docs.cpanel.net/specifications/whm.openapi/feature-access/featurelists-get_users_features_settings.md): This function lists the features settings of cPanel accounts.

### Remove cPanel account feature list overrides

 - [GET /remove_override_features_for_user](https://api.docs.cpanel.net/specifications/whm.openapi/feature-access/accounts-remove_override_features_for_user.md): This function removes feature overrides from a cPanel account.

### Return cPanel account feature access

 - [GET /verify_user_has_feature](https://api.docs.cpanel.net/specifications/whm.openapi/feature-access/accounts-verify_user_has_feature.md): This function checks whether a user has access to a feature on a feature list.

## Feature Lists

Hosting Plans / Feature Lists

### Create feature list

 - [GET /create_featurelist](https://api.docs.cpanel.net/specifications/whm.openapi/feature-lists/featurelists-create_featurelist.md): This function creates or updates a feature list.

Note:

A reseller must possess the
Add/Remove Package feature
to use this function.

### Delete feature list

 - [GET /delete_featurelist](https://api.docs.cpanel.net/specifications/whm.openapi/feature-lists/featurelists-delete_featurelist.md): This function deletes a feature list.

### Return dynamicui file

 - [GET /get_available_applications](https://api.docs.cpanel.net/specifications/whm.openapi/feature-lists/dynamicui-get_available_applications.md): This function returns the contents of a dynamicui file. For more
information, read our
Guide to WHM dynamicui Files
documentation.

### Return current user's available feature lists info

 - [GET /get_feature_metadata](https://api.docs.cpanel.net/specifications/whm.openapi/feature-lists/featurelists-get_feature_metadata.md): This function lists the details of the authenticated user's available feature lists.

### Return all features

 - [GET /get_feature_names](https://api.docs.cpanel.net/specifications/whm.openapi/feature-lists/featurelists-get_feature_names.md): This function lists all available features.

### Return feature list configuration

 - [GET /get_featurelist_data](https://api.docs.cpanel.net/specifications/whm.openapi/feature-lists/featurelists-get_featurelist_data.md): This function lists features in a specific feature list.

### Return current user's available feature lists

 - [GET /get_featurelists](https://api.docs.cpanel.net/specifications/whm.openapi/feature-lists/featurelists-get_featurelists.md): This function lists the authenticated user's available feature lists.

Notes:

* When you call this function with the root account, it returns all feature lists on the server.
* When you call this function with a reseller account, it only returns feature lists that the account owns.

### Return feature lists by package type

 - [GET /get_featurelists_by_package_types](https://api.docs.cpanel.net/specifications/whm.openapi/feature-lists/featurelists-get_featurelists_by_package_types.md): This function lists features grouped by package type.

### Update feature list

 - [GET /update_featurelist](https://api.docs.cpanel.net/specifications/whm.openapi/feature-lists/featurelists-update_featurelist.md): This function creates or updates a feature list.

### (Deprecated) Get available feature lists (deprecated)

 - [GET /get_available_featurelists](https://api.docs.cpanel.net/specifications/whm.openapi/feature-lists/featurelists-get_available_featurelists.md): DEPRECATED: Use get_featurelists instead.

This function lists the authenticated user's available feature lists.

Notes:

* This function is deprecated because it treats a lack of available feature lists as an error for non-admin resellers, which is incorrect behavior.
* When you call this function with the root account, it returns all feature lists on the server.
* When you call this function with a reseller account, it only returns feature lists that the account owns.

### (Deprecated) Read feature list settings (deprecated)

 - [GET /read_featurelist](https://api.docs.cpanel.net/specifications/whm.openapi/feature-lists/featurelists-read_featurelist.md): DEPRECATED: Use get_featurelist_data instead.

This function reads a feature list and returns a hash that maps feature IDs to values indicating whether each feature is enabled.

Notes:

* The function requires the featurelist parameter to specify which feature list to read.
* Access is controlled based on user permissions. Resellers can only access their own feature lists.

## Hosting Plan Extensions

Hosting Plans / Hosting Plan Extensions

### Return hosting plan extension templates

 - [GET /_getpkgextensionform](https://api.docs.cpanel.net/specifications/whm.openapi/hosting-plan-extensions/accounts-_getpkgextensionform.md): This function retrieves a hosting plan's package extension templates. When you call this
function, the system checks the hosting plan's _PACKAGE_EXTENSIONS value.  The function
returns the contents of the /var/cpanel/packages/extensions/name.tt2 file for each package
extension in the list, where name represents the package extension's name.

For more information, read our
Guide to Package Extensions.

Note:

This function returns only metadata if the hosting plan does not use package extensions, or
if the extensions' template files are empty.

### Add hosting plan extension

 - [GET /addpkgext](https://api.docs.cpanel.net/specifications/whm.openapi/hosting-plan-extensions/packages-addpkgext.md): This function adds a package extension to a hosting plan (package).

Notes:

* If you need to edit a package extension's parameters, call this function again
with the same package extension name and the updated package extension variables.

* You can include the extension's variables in your function call, in key=value format.
  Consult the extension's documentation for a list of possible variables. Extension variables
  are case-sensitive.

### Remove hosting plan extension

 - [GET /delpkgext](https://api.docs.cpanel.net/specifications/whm.openapi/hosting-plan-extensions/packages-delpkgext.md): This function deletes a package extension from a hosting plan (package).

Note:

* You can additionally include extension's variables in your function call, in key=value format.
  Consult the extension's documentation for a list of possible variables. Extension variable names are case-sensitive.

## Hosting Plans

Hosting Plans / Hosting Plans

### Create hosting plan

 - [GET /addpkg](https://api.docs.cpanel.net/specifications/whm.openapi/hosting-plans/packages-addpkg.md): This function creates a hosting plan (package).

Note:

The Access Control Lists
restricts some of this function's parameters, which limit the features that
WHM users can access.

### Update hosting plan

 - [GET /editpkg](https://api.docs.cpanel.net/specifications/whm.openapi/hosting-plans/packages-editpkg.md): This function edits a hosting plan (package).

Note:

* The
Access Control List (ACL)
restricts some of the function's parameters, which limit the features that WHM
users can access.
* This function applies any changes you make to all accounts that exist on
the hosting plan.
* This function cannot modify hosting plan names.

### Return hosting plan configuration

 - [GET /getpkginfo](https://api.docs.cpanel.net/specifications/whm.openapi/hosting-plans/packages-getpkginfo.md): This function lists a hosting plan's (package's) settings.

### Delete hosting plan

 - [GET /killpkg](https://api.docs.cpanel.net/specifications/whm.openapi/hosting-plans/packages-killpkg.md): This function deletes a hosting plan (package).

### Return current user's available hosting plans

 - [GET /listpkgs](https://api.docs.cpanel.net/specifications/whm.openapi/hosting-plans/packages-listpkgs.md): This function lists the authenticated user's available hosting plans (packages).

Important:

This function only returns packages that the authenticated user can access and
use during account creation.

### Return filtered hosting plans

 - [GET /matchpkgs](https://api.docs.cpanel.net/specifications/whm.openapi/hosting-plans/packages-matchpkgs.md): This function matches the server's hosting plans (packages) against
your criteria.

Note:

If you do not include any input parameters, the function lists all of
the server's packages.

## InProductSurvey

In-product survey information.

### Get in-product survey URL

 - [GET /get_in_product_survey_url](https://api.docs.cpanel.net/specifications/whm.openapi/inproductsurvey/inproductsurvey-get_in_product_survey_url.md): This function returns whether to display the in-product survey banner and the survey link.

## API Authentication

Integrations / API Authentication

### Return remote access file's hash (deprecated)

 - [GET /get_remote_access_hash](https://api.docs.cpanel.net/specifications/whm.openapi/api-authentication/resellers-get_remote_access_hash.md): This function retrieves a hash from a remote access file.

Warning:

We deprecated this function. We strongly suggest that you use the WHM API 1 api_token_list function.

## Integration

The Integration module for WHM API 1.

### Create integration link group

 - [GET /create_integration_group](https://api.docs.cpanel.net/specifications/whm.openapi/links/integration-create_integration_group.md): This function creates a group to store integrations links in the cPanel interface.

### Create integration link

 - [GET /create_integration_link](https://api.docs.cpanel.net/specifications/whm.openapi/links/integration-create_integration_link.md): This function creates an integration link in the cPanel interface.

Note:

The function creates the APP.adminconfig and APP.userconfig integration link files in the /var/cpanel/integration/links/USERNAME directory, where APP represents the application name and USERNAME represents the user for whom you create integration links.

### Return integration link configuration

 - [GET /get_integration_link_user_config](https://api.docs.cpanel.net/specifications/whm.openapi/links/integration-get_integration_link_user_config.md): This function retrieves configuration information about a specified integration link in a specified user's cPanel interface.

### Return integration link groups

 - [GET /list_integration_groups](https://api.docs.cpanel.net/specifications/whm.openapi/links/integration-list_integration_groups.md): This function lists the groups of integration links in the cPanel interface.

### Return integration links

 - [GET /list_integration_links](https://api.docs.cpanel.net/specifications/whm.openapi/links/integration-list_integration_links.md): This function lists integration links in the cPanel interface.

### Remove integration link group

 - [GET /remove_integration_group](https://api.docs.cpanel.net/specifications/whm.openapi/links/integration-remove_integration_group.md): This removes a group of integration links from the cPanel interface.

### Remove integration link

 - [GET /remove_integration_link](https://api.docs.cpanel.net/specifications/whm.openapi/links/integration-remove_integration_link.md): This function removes an integration link from the cPanel interface.

### Update integration link token

 - [GET /update_integration_link_token](https://api.docs.cpanel.net/specifications/whm.openapi/links/integration-update_integration_link_token.md): This function refreshes the token for an integration link.

## Links

Integrations / Links

### Create integration link group

 - [GET /create_integration_group](https://api.docs.cpanel.net/specifications/whm.openapi/links/integration-create_integration_group.md): This function creates a group to store integrations links in the cPanel interface.

### Create integration link

 - [GET /create_integration_link](https://api.docs.cpanel.net/specifications/whm.openapi/links/integration-create_integration_link.md): This function creates an integration link in the cPanel interface.

Note:

The function creates the APP.adminconfig and APP.userconfig integration link files in the /var/cpanel/integration/links/USERNAME directory, where APP represents the application name and USERNAME represents the user for whom you create integration links.

### Return integration link configuration

 - [GET /get_integration_link_user_config](https://api.docs.cpanel.net/specifications/whm.openapi/links/integration-get_integration_link_user_config.md): This function retrieves configuration information about a specified integration link in a specified user's cPanel interface.

### Return integration link groups

 - [GET /list_integration_groups](https://api.docs.cpanel.net/specifications/whm.openapi/links/integration-list_integration_groups.md): This function lists the groups of integration links in the cPanel interface.

### Return integration links

 - [GET /list_integration_links](https://api.docs.cpanel.net/specifications/whm.openapi/links/integration-list_integration_links.md): This function lists integration links in the cPanel interface.

### Remove integration link group

 - [GET /remove_integration_group](https://api.docs.cpanel.net/specifications/whm.openapi/links/integration-remove_integration_group.md): This removes a group of integration links from the cPanel interface.

### Remove integration link

 - [GET /remove_integration_link](https://api.docs.cpanel.net/specifications/whm.openapi/links/integration-remove_integration_link.md): This function removes an integration link from the cPanel interface.

### Update integration link token

 - [GET /update_integration_link_token](https://api.docs.cpanel.net/specifications/whm.openapi/links/integration-update_integration_link_token.md): This function refreshes the token for an integration link.

## Script Hooks

The Script Hooks module for WHM API 1.

### Delete script hook

 - [GET /delete_hook](https://api.docs.cpanel.net/specifications/whm.openapi/scripts-hooks/hooks-delete_hook.md): This function removes a script hook.

### Update script hook

 - [GET /edit_hook](https://api.docs.cpanel.net/specifications/whm.openapi/scripts-hooks/hooks-edit_hook.md): This function edits a script hook.

### Return script hooks list

 - [GET /list_hooks](https://api.docs.cpanel.net/specifications/whm.openapi/scripts-hooks/hooks-list_hooks.md): This function lists the server's script hooks.

### Update script hooks order

 - [GET /reorder_hooks](https://api.docs.cpanel.net/specifications/whm.openapi/scripts-hooks/hooks-reorder_hooks.md): This function changes the order of script hooks.

## Scripts Hooks

Integrations / Scripts Hooks

### Delete script hook

 - [GET /delete_hook](https://api.docs.cpanel.net/specifications/whm.openapi/scripts-hooks/hooks-delete_hook.md): This function removes a script hook.

### Update script hook

 - [GET /edit_hook](https://api.docs.cpanel.net/specifications/whm.openapi/scripts-hooks/hooks-edit_hook.md): This function edits a script hook.

### Return script hooks list

 - [GET /list_hooks](https://api.docs.cpanel.net/specifications/whm.openapi/scripts-hooks/hooks-list_hooks.md): This function lists the server's script hooks.

### Update script hooks order

 - [GET /reorder_hooks](https://api.docs.cpanel.net/specifications/whm.openapi/scripts-hooks/hooks-reorder_hooks.md): This function changes the order of script hooks.

## IP Addresses

The IP Addresses module for WHM API 1.

### Add IP addresses

 - [GET /addips](https://api.docs.cpanel.net/specifications/whm.openapi/ipv4-address-settings/ips-addips.md): This function adds an IPv4 address or addresses to the server.
When you add an IP address, the system attempts to add an alias of that IP
address to the main network interface. This process rebuilds the IP address
pool, which resides in the /etc/ipaddrpool file. The system stores IP addresses
within the /etc/ips file. The ipaliases service activates those IP addresses
when the server starts.

### Remove IP address

 - [GET /delip](https://api.docs.cpanel.net/specifications/whm.openapi/ipv4-address-settings/ips-delip.md): This function removes an IP address from the server.

### Return shared IP address

 - [GET /get_shared_ip](https://api.docs.cpanel.net/specifications/whm.openapi/ipv4-address-settings/ips-get_shared_ip.md): This function retrieves the IP address that an account shares with the accounts that it owns.

### Return server's IP addresses

 - [GET /listips](https://api.docs.cpanel.net/specifications/whm.openapi/ipv4-address-settings/ips-listips.md): This function lists a server's IP addresses.

### Update domain or cPanel account IP address

 - [GET /setsiteip](https://api.docs.cpanel.net/specifications/whm.openapi/ipv4-address-settings/accounts-setsiteip.md): This function changes a site's or account's IP address.

### Remove IPv6 address range from account

 - [GET /ipv6_disable_account](https://api.docs.cpanel.net/specifications/whm.openapi/ipv6-address-settings/ipv6-ipv6_disable_account.md): This function removes the IPv6 address from an account.

Notes:

- When you disable IPv6 on an account, the system unbinds that IPv6 address from your server and the account loses the address. If you enable IPv6 on that account again, the system assigns it a different IPv6 address.
- For all of cPanel & WHM's features to function properly on IPv6, the cpsrvd daemon must listen on IPv6 addresses. To enable this functionality, select On for the Listen on IPv6 Addresses setting in the System section of WHM's Tweak Settings interface (WHM >> Home >> Server Configuration >> Tweak Settings).

Important:

When you disable the Web Server role, the system disables this function.

### Add IPv6 address range to accounts

 - [GET /ipv6_enable_account](https://api.docs.cpanel.net/specifications/whm.openapi/ipv6-address-settings/ipv6-ipv6_enable_account.md): This function assigns an IPv6 address to one or more accounts.

Note:

You must perform at least one of the following actions before you call this function:
   Use WHM's IPv6 Ranges interface (WHM >> Home >> IP Functions >> IPv6 Ranges*) or WHM API 1's ipv6_range_add function to add one or more IPv6 address ranges for use as dedicated IPv6 addresses.
   Use WHM's Basic WebHost Manager Setup interface (WHM >> Home >> Server Configuration >> Basic WebHost Manager Setup*) or modify the /etc/wwwacct.conf file to add a shared IPv6 address to the server.
   For all of cPanel & WHM's features to function properly on IPv6, the cpsrvd daemon must listen on IPv6 addresses. To enable this functionality, select On for the Listen on IPv6 Addresses setting in the System section of WHM's Tweak Settings interface (WHM >> Home >> Server Configuration >> Tweak Settings*).

Important:

When you disable the Web Server role, the system disables this function.

### Add IPv6 address range

 - [GET /ipv6_range_add](https://api.docs.cpanel.net/specifications/whm.openapi/ipv6-address-settings/ipv6-ipv6_range_add.md): This function adds a range of IPv6 addresses to the server.

Notes:

- This function cannot modify the server's shared IPv6 address. To update that address, modify the /etc/wwwacct.conf file, or use WHM's Basic WebHost Manager Setup interface (Home >> Server Configuration >> Basic WebHost Manager Setup).
- For all of cPanel & WHM's features to function properly on IPv6, the cpsrvd daemon must listen on IPv6 addresses. To enable this functionality, select On for the Listen on IPv6 Addresses setting in the System section of WHM's Tweak Settings interface (WHM >> Home >> Server Configuration >> Tweak Settings).

Important:

When you disable the Web Server role, the system disables this function.

### Update IPv6 address range name or note

 - [GET /ipv6_range_edit](https://api.docs.cpanel.net/specifications/whm.openapi/ipv6-address-settings/ipv6-ipv6_range_edit.md): This function changes an IPv6 address range's name and/or note.

Notes:

- This function cannot modify the server's shared IPv6 address. To update that address, modify the /etc/wwwacct.conf file, or use WHM's Basic WebHost Manager Setup interface (Home >> Server Configuration >> Basic WebHost Manager Setup).
- For all of cPanel & WHM's features to function properly on IPv6, the cpsrvd daemon must listen on IPv6 addresses. To enable this functionality, select On for the Listen on IPv6 Addresses setting in the System section of WHM's Tweak Settings interface (WHM >> Home >> Server Configuration >> Tweak Settings).

Important:

When you disable the Web Server role, the system disables this function.

### Return available IPv6 address ranges

 - [GET /ipv6_range_list](https://api.docs.cpanel.net/specifications/whm.openapi/ipv6-address-settings/ipv6-ipv6_range_list.md): This function lists available IPv6 address ranges.

Note:

For all of cPanel & WHM's features to function properly on IPv6, the cpsrvd daemon must listen on IPv6 addresses. To enable this functionality, select On for the Listen on IPv6 Addresses setting in the System section of WHM's Tweak Settings interface (WHM >> Home >> Server Configuration >> Tweak Settings).

Important:

When you disable the Web Server role, the system disables this function.

### Remove IPv6 address range

 - [GET /ipv6_range_remove](https://api.docs.cpanel.net/specifications/whm.openapi/ipv6-address-settings/ipv6-ipv6_range_remove.md): This function removes an IPv6 address range from the server.

Note:

* This function cannot modify the server's shared IPv6 address. To update that address, modify the /etc/wwwacct.conf file, or use WHM's _Basic WebHost Manager Setup_ interface (_Home >> Server Configuration >> Basic WebHost Manager Setup_).
* For all of cPanel & WHM's features to function properly on IPv6, the cpsrvd daemon must listen on IPv6 addresses. To enable this functionality, select _On_ for the _Listen on IPv6 Addresses_ setting in the _System_ section of WHM's _Tweak Settings_ interface (_WHM >> Home >> Server Configuration >> Tweak Settings_).

Important:

When you disable the Web Server role, the system disables this function.

### Return IPv6 address usage

 - [GET /ipv6_range_usage](https://api.docs.cpanel.net/specifications/whm.openapi/ipv6-address-settings/ipv6-ipv6_range_usage.md): This function retrieves usage information for IPv6 addresses in an IPv6 range.

Note:

For all of cPanel & WHM's features to function properly on IPv6, the cpsrvd daemon must listen on IPv6 addresses. To enable this functionality, select On for the Listen on IPv6 Addresses setting in the System section of WHM's Tweak Settings interface (WHM >> Home >> Server Configuration >> Tweak Settings).

Important:

When you disable the Web Server role, the system disables this function.

### Return server's IPv6 addresses

 - [GET /listipv6s](https://api.docs.cpanel.net/specifications/whm.openapi/ipv6-address-settings/ips-listipv6s.md): This function lists the IPv6 addresses bound to a server’s network interfaces.

### Return public IP address of private IP address

 - [GET /get_public_ip](https://api.docs.cpanel.net/specifications/whm.openapi/network-address-translation/ips-get_public_ip.md): This function returns the public IP address for a specified public or private IP address. You can use this function to determine the system's main public IP address, especially for systems that use a 1:1 NAT configuration.
* cPanel & WHM uses the main public IP address to perform many different functions. For example, the system uses this IP address to verify the server's license status with WebPros International, LLC.
* System administrators can configure the main public IP address in WHM's Basic WebHost Manager Setup interface (_Home >> Server Configuration >> Basic WebHost Manager Setup_).

### Validate public IP address for NAT

 - [GET /nat_checkip](https://api.docs.cpanel.net/specifications/whm.openapi/network-address-translation/nat-nat_checkip.md): This function validates a public IP address on a NAT-configured server.

### Register NAT IP address to public IP address

 - [GET /nat_set_public_ip](https://api.docs.cpanel.net/specifications/whm.openapi/network-address-translation/nat-nat_set_public_ip.md): This function pairs a local IP address with a public IP address on NAT-configured servers.

## IPv4 Address Settings

IP Address Management / IPv4 Address Settings

### Add IP addresses

 - [GET /addips](https://api.docs.cpanel.net/specifications/whm.openapi/ipv4-address-settings/ips-addips.md): This function adds an IPv4 address or addresses to the server.
When you add an IP address, the system attempts to add an alias of that IP
address to the main network interface. This process rebuilds the IP address
pool, which resides in the /etc/ipaddrpool file. The system stores IP addresses
within the /etc/ips file. The ipaliases service activates those IP addresses
when the server starts.

### Remove IP address

 - [GET /delip](https://api.docs.cpanel.net/specifications/whm.openapi/ipv4-address-settings/ips-delip.md): This function removes an IP address from the server.

### Return shared IP address

 - [GET /get_shared_ip](https://api.docs.cpanel.net/specifications/whm.openapi/ipv4-address-settings/ips-get_shared_ip.md): This function retrieves the IP address that an account shares with the accounts that it owns.

### Return server's IP addresses

 - [GET /listips](https://api.docs.cpanel.net/specifications/whm.openapi/ipv4-address-settings/ips-listips.md): This function lists a server's IP addresses.

### Update domain or cPanel account IP address

 - [GET /setsiteip](https://api.docs.cpanel.net/specifications/whm.openapi/ipv4-address-settings/accounts-setsiteip.md): This function changes a site's or account's IP address.

## IPv6 Address Settings

IP Address Management / IPv6 Address Settings

### Remove IPv6 address range from account

 - [GET /ipv6_disable_account](https://api.docs.cpanel.net/specifications/whm.openapi/ipv6-address-settings/ipv6-ipv6_disable_account.md): This function removes the IPv6 address from an account.

Notes:

- When you disable IPv6 on an account, the system unbinds that IPv6 address from your server and the account loses the address. If you enable IPv6 on that account again, the system assigns it a different IPv6 address.
- For all of cPanel & WHM's features to function properly on IPv6, the cpsrvd daemon must listen on IPv6 addresses. To enable this functionality, select On for the Listen on IPv6 Addresses setting in the System section of WHM's Tweak Settings interface (WHM >> Home >> Server Configuration >> Tweak Settings).

Important:

When you disable the Web Server role, the system disables this function.

### Add IPv6 address range to accounts

 - [GET /ipv6_enable_account](https://api.docs.cpanel.net/specifications/whm.openapi/ipv6-address-settings/ipv6-ipv6_enable_account.md): This function assigns an IPv6 address to one or more accounts.

Note:

You must perform at least one of the following actions before you call this function:
   Use WHM's IPv6 Ranges interface (WHM >> Home >> IP Functions >> IPv6 Ranges*) or WHM API 1's ipv6_range_add function to add one or more IPv6 address ranges for use as dedicated IPv6 addresses.
   Use WHM's Basic WebHost Manager Setup interface (WHM >> Home >> Server Configuration >> Basic WebHost Manager Setup*) or modify the /etc/wwwacct.conf file to add a shared IPv6 address to the server.
   For all of cPanel & WHM's features to function properly on IPv6, the cpsrvd daemon must listen on IPv6 addresses. To enable this functionality, select On for the Listen on IPv6 Addresses setting in the System section of WHM's Tweak Settings interface (WHM >> Home >> Server Configuration >> Tweak Settings*).

Important:

When you disable the Web Server role, the system disables this function.

### Add IPv6 address range

 - [GET /ipv6_range_add](https://api.docs.cpanel.net/specifications/whm.openapi/ipv6-address-settings/ipv6-ipv6_range_add.md): This function adds a range of IPv6 addresses to the server.

Notes:

- This function cannot modify the server's shared IPv6 address. To update that address, modify the /etc/wwwacct.conf file, or use WHM's Basic WebHost Manager Setup interface (Home >> Server Configuration >> Basic WebHost Manager Setup).
- For all of cPanel & WHM's features to function properly on IPv6, the cpsrvd daemon must listen on IPv6 addresses. To enable this functionality, select On for the Listen on IPv6 Addresses setting in the System section of WHM's Tweak Settings interface (WHM >> Home >> Server Configuration >> Tweak Settings).

Important:

When you disable the Web Server role, the system disables this function.

### Update IPv6 address range name or note

 - [GET /ipv6_range_edit](https://api.docs.cpanel.net/specifications/whm.openapi/ipv6-address-settings/ipv6-ipv6_range_edit.md): This function changes an IPv6 address range's name and/or note.

Notes:

- This function cannot modify the server's shared IPv6 address. To update that address, modify the /etc/wwwacct.conf file, or use WHM's Basic WebHost Manager Setup interface (Home >> Server Configuration >> Basic WebHost Manager Setup).
- For all of cPanel & WHM's features to function properly on IPv6, the cpsrvd daemon must listen on IPv6 addresses. To enable this functionality, select On for the Listen on IPv6 Addresses setting in the System section of WHM's Tweak Settings interface (WHM >> Home >> Server Configuration >> Tweak Settings).

Important:

When you disable the Web Server role, the system disables this function.

### Return available IPv6 address ranges

 - [GET /ipv6_range_list](https://api.docs.cpanel.net/specifications/whm.openapi/ipv6-address-settings/ipv6-ipv6_range_list.md): This function lists available IPv6 address ranges.

Note:

For all of cPanel & WHM's features to function properly on IPv6, the cpsrvd daemon must listen on IPv6 addresses. To enable this functionality, select On for the Listen on IPv6 Addresses setting in the System section of WHM's Tweak Settings interface (WHM >> Home >> Server Configuration >> Tweak Settings).

Important:

When you disable the Web Server role, the system disables this function.

### Remove IPv6 address range

 - [GET /ipv6_range_remove](https://api.docs.cpanel.net/specifications/whm.openapi/ipv6-address-settings/ipv6-ipv6_range_remove.md): This function removes an IPv6 address range from the server.

Note:

* This function cannot modify the server's shared IPv6 address. To update that address, modify the /etc/wwwacct.conf file, or use WHM's _Basic WebHost Manager Setup_ interface (_Home >> Server Configuration >> Basic WebHost Manager Setup_).
* For all of cPanel & WHM's features to function properly on IPv6, the cpsrvd daemon must listen on IPv6 addresses. To enable this functionality, select _On_ for the _Listen on IPv6 Addresses_ setting in the _System_ section of WHM's _Tweak Settings_ interface (_WHM >> Home >> Server Configuration >> Tweak Settings_).

Important:

When you disable the Web Server role, the system disables this function.

### Return IPv6 address usage

 - [GET /ipv6_range_usage](https://api.docs.cpanel.net/specifications/whm.openapi/ipv6-address-settings/ipv6-ipv6_range_usage.md): This function retrieves usage information for IPv6 addresses in an IPv6 range.

Note:

For all of cPanel & WHM's features to function properly on IPv6, the cpsrvd daemon must listen on IPv6 addresses. To enable this functionality, select On for the Listen on IPv6 Addresses setting in the System section of WHM's Tweak Settings interface (WHM >> Home >> Server Configuration >> Tweak Settings).

Important:

When you disable the Web Server role, the system disables this function.

### Return server's IPv6 addresses

 - [GET /listipv6s](https://api.docs.cpanel.net/specifications/whm.openapi/ipv6-address-settings/ips-listipv6s.md): This function lists the IPv6 addresses bound to a server’s network interfaces.

## Network Address Translation

IP Address Management / Network Address Translation

### Return public IP address of private IP address

 - [GET /get_public_ip](https://api.docs.cpanel.net/specifications/whm.openapi/network-address-translation/ips-get_public_ip.md): This function returns the public IP address for a specified public or private IP address. You can use this function to determine the system's main public IP address, especially for systems that use a 1:1 NAT configuration.
* cPanel & WHM uses the main public IP address to perform many different functions. For example, the system uses this IP address to verify the server's license status with WebPros International, LLC.
* System administrators can configure the main public IP address in WHM's Basic WebHost Manager Setup interface (_Home >> Server Configuration >> Basic WebHost Manager Setup_).

### Validate public IP address for NAT

 - [GET /nat_checkip](https://api.docs.cpanel.net/specifications/whm.openapi/network-address-translation/nat-nat_checkip.md): This function validates a public IP address on a NAT-configured server.

### Register NAT IP address to public IP address

 - [GET /nat_set_public_ip](https://api.docs.cpanel.net/specifications/whm.openapi/network-address-translation/nat-nat_set_public_ip.md): This function pairs a local IP address with a public IP address on NAT-configured servers.

## cPHulk

The cPHulk module for WHM API 1.

### Add login security record to list with comment

 - [POST /batch_create_cphulk_records](https://api.docs.cpanel.net/specifications/whm.openapi/management/cphulk-batch_create_cphulk_records.md): This function adds one or more records to cPHulk's whitelist or blacklist. The function includes the option to add unique comments for each IP address that you add.

### Return login security status

 - [GET /cphulk_status](https://api.docs.cpanel.net/specifications/whm.openapi/management/cphulk-cphulk_status.md): This function returns the status of the cPHulk service.

### Add login security record to list

 - [GET /create_cphulk_record](https://api.docs.cpanel.net/specifications/whm.openapi/management/cphulk-create_cphulk_record.md): This function adds a new record or records to cPHulk's whitelist or blacklist.

### Remove login security record from list

 - [GET /delete_cphulk_record](https://api.docs.cpanel.net/specifications/whm.openapi/management/cphulk-delete_cphulk_record.md): This function deletes a record or records from cPHulk's whitelist or blacklist.

### Remove all login security records

 - [GET /flush_cphulk_login_history](https://api.docs.cpanel.net/specifications/whm.openapi/management/cphulk-flush_cphulk_login_history.md): This function removes the login history entries from the cPHulk
database.

### Remove login security IP address block

 - [GET /flush_cphulk_login_history_for_ips](https://api.docs.cpanel.net/specifications/whm.openapi/management/cphulk-flush_cphulk_login_history_for_ips.md): This function removes specific login history entries from the cPHulk database. Use this function to unblock one or more IP addresses.

### Return login security list records

 - [GET /read_cphulk_records](https://api.docs.cpanel.net/specifications/whm.openapi/management/cphulk-read_cphulk_records.md): This function displays a cPHulk list's records.

### Return login security country codes

 - [GET /get_countries_with_known_ip_ranges](https://api.docs.cpanel.net/specifications/whm.openapi/reporting/countrycodes-get_countries_with_known_ip_ranges.md): This function lists the country codes available for whitelist and blacklist functions.

### Return login security brute force attacks

 - [GET /get_cphulk_brutes](https://api.docs.cpanel.net/specifications/whm.openapi/reporting/cphulk-get_cphulk_brutes.md): This function lists brute force attack entries from the cPHulk database.

### Return login security excessive brute force attacks

 - [GET /get_cphulk_excessive_brutes](https://api.docs.cpanel.net/specifications/whm.openapi/reporting/cphulk-get_cphulk_excessive_brutes.md): This function retrieves excessive brute force attack entries from the cPHulk database.

### Return login security failed logins

 - [GET /get_cphulk_failed_logins](https://api.docs.cpanel.net/specifications/whm.openapi/reporting/cphulk-get_cphulk_failed_logins.md): This function lists failed login attempt entries from the cPHulk database.

### Return login security brute force attacks by user

 - [GET /get_cphulk_user_brutes](https://api.docs.cpanel.net/specifications/whm.openapi/reporting/cphulk-get_cphulk_user_brutes.md): This function lists brute force attack entries from the cPHulk database, ordered by user accounts.

### Disable login security

 - [GET /disable_cphulk](https://api.docs.cpanel.net/specifications/whm.openapi/settings/cphulk-disable_cphulk.md): This function disables the cPHulk service.

### Enable login security

 - [GET /enable_cphulk](https://api.docs.cpanel.net/specifications/whm.openapi/settings/cphulk-enable_cphulk.md): This function enables the cPHulk service.

### Return login security configuration settings

 - [GET /load_cphulk_config](https://api.docs.cpanel.net/specifications/whm.openapi/settings/cphulk-load_cphulk_config.md): This function returns cPHulk's current settings.

### Save login security configuration settings

 - [GET /save_cphulk_config](https://api.docs.cpanel.net/specifications/whm.openapi/settings/cphulk-save_cphulk_config.md): This function modifies cPHulk's configuration settings.

### Update login security configuration settings

 - [GET /set_cphulk_config_key](https://api.docs.cpanel.net/specifications/whm.openapi/settings/cphulk-set_cphulk_config_key.md): This function modifies a single cPHulk configuration settings as specified.

## Management

Login Security (cPHulk) / Management

### Add login security record to list with comment

 - [POST /batch_create_cphulk_records](https://api.docs.cpanel.net/specifications/whm.openapi/management/cphulk-batch_create_cphulk_records.md): This function adds one or more records to cPHulk's whitelist or blacklist. The function includes the option to add unique comments for each IP address that you add.

### Return login security status

 - [GET /cphulk_status](https://api.docs.cpanel.net/specifications/whm.openapi/management/cphulk-cphulk_status.md): This function returns the status of the cPHulk service.

### Add login security record to list

 - [GET /create_cphulk_record](https://api.docs.cpanel.net/specifications/whm.openapi/management/cphulk-create_cphulk_record.md): This function adds a new record or records to cPHulk's whitelist or blacklist.

### Remove login security record from list

 - [GET /delete_cphulk_record](https://api.docs.cpanel.net/specifications/whm.openapi/management/cphulk-delete_cphulk_record.md): This function deletes a record or records from cPHulk's whitelist or blacklist.

### Remove all login security records

 - [GET /flush_cphulk_login_history](https://api.docs.cpanel.net/specifications/whm.openapi/management/cphulk-flush_cphulk_login_history.md): This function removes the login history entries from the cPHulk
database.

### Remove login security IP address block

 - [GET /flush_cphulk_login_history_for_ips](https://api.docs.cpanel.net/specifications/whm.openapi/management/cphulk-flush_cphulk_login_history_for_ips.md): This function removes specific login history entries from the cPHulk database. Use this function to unblock one or more IP addresses.

### Return login security list records

 - [GET /read_cphulk_records](https://api.docs.cpanel.net/specifications/whm.openapi/management/cphulk-read_cphulk_records.md): This function displays a cPHulk list's records.

## Reporting

Login Security (cPHulk) / Reporting

### Return login security country codes

 - [GET /get_countries_with_known_ip_ranges](https://api.docs.cpanel.net/specifications/whm.openapi/reporting/countrycodes-get_countries_with_known_ip_ranges.md): This function lists the country codes available for whitelist and blacklist functions.

### Return login security brute force attacks

 - [GET /get_cphulk_brutes](https://api.docs.cpanel.net/specifications/whm.openapi/reporting/cphulk-get_cphulk_brutes.md): This function lists brute force attack entries from the cPHulk database.

### Return login security excessive brute force attacks

 - [GET /get_cphulk_excessive_brutes](https://api.docs.cpanel.net/specifications/whm.openapi/reporting/cphulk-get_cphulk_excessive_brutes.md): This function retrieves excessive brute force attack entries from the cPHulk database.

### Return login security failed logins

 - [GET /get_cphulk_failed_logins](https://api.docs.cpanel.net/specifications/whm.openapi/reporting/cphulk-get_cphulk_failed_logins.md): This function lists failed login attempt entries from the cPHulk database.

### Return login security brute force attacks by user

 - [GET /get_cphulk_user_brutes](https://api.docs.cpanel.net/specifications/whm.openapi/reporting/cphulk-get_cphulk_user_brutes.md): This function lists brute force attack entries from the cPHulk database, ordered by user accounts.

## Settings

Login Security (cPHulk) / Settings

### Disable login security

 - [GET /disable_cphulk](https://api.docs.cpanel.net/specifications/whm.openapi/settings/cphulk-disable_cphulk.md): This function disables the cPHulk service.

### Enable login security

 - [GET /enable_cphulk](https://api.docs.cpanel.net/specifications/whm.openapi/settings/cphulk-enable_cphulk.md): This function enables the cPHulk service.

### Return login security configuration settings

 - [GET /load_cphulk_config](https://api.docs.cpanel.net/specifications/whm.openapi/settings/cphulk-load_cphulk_config.md): This function returns cPHulk's current settings.

### Save login security configuration settings

 - [GET /save_cphulk_config](https://api.docs.cpanel.net/specifications/whm.openapi/settings/cphulk-save_cphulk_config.md): This function modifies cPHulk's configuration settings.

### Update login security configuration settings

 - [GET /set_cphulk_config_key](https://api.docs.cpanel.net/specifications/whm.openapi/settings/cphulk-set_cphulk_config_key.md): This function modifies a single cPHulk configuration settings as specified.

## Web Log Retention

The Web Log Retention module for WHM API 1.

### List accounts' web log retention settings

 - [GET /list_accounts_retention](https://api.docs.cpanel.net/specifications/whm.openapi/web-log-retention/weblogretention-list_accounts_retention.md): List each cPanel account's web server log retention preference alongside the server default.

## Logs

Logs / Web Log Retention

### List accounts' web log retention settings

 - [GET /list_accounts_retention](https://api.docs.cpanel.net/specifications/whm.openapi/web-log-retention/weblogretention-list_accounts_retention.md): List each cPanel account's web server log retention preference alongside the server default.

## Mail

The Mail module for WHM API 1.

### Return email delivery records by search criteria

 - [GET /emailtrack_search](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/exim-emailtrack_search.md): This function retrieves email delivery records.

Warning:

* On most servers, this function returns a large amount of output. We strongly
recommend that you filter and
sort the output.
* The following example uses the filter and sort options:

  https://hostname.example.com:2087/cpsess##########/json-api/emailtrack_search?api.version=1&api.filter.enable=1&api.filter.a.field=sendunixtime&api.filter.a.arg0=1628889719&api.filter.a.type=gt&api.filter.b.field=sendunixtime&api.filter.b.arg0=1629847321&api.filter.b.type=lt&api.sort.enable=1&api.sort.a.field=sendunixtime&api.sort.a.reverse=0&api.chunk.enable=1&api.chunk.size=25&api.chunk.start=1&success=1

### Return cPanel account email tracking statistics

 - [GET /emailtrack_stats](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/exim-emailtrack_stats.md): This function retrieves email tracking statistics.

### Return all cPanel accounts email tracking statistics

 - [GET /emailtrack_user_stats](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/exim-emailtrack_user_stats.md): This function retrieves email tracking statistics for each user.

### Remove email account messages by Dovecot query

 - [GET /expunge_mailbox_messages](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/mailboxes-expunge_mailbox_messages.md): This function removes mail messages from a cPanel account that you select with a query.

Important:

  When you disable the Receive Mail role, the system disables this function.

### Remove email account messages by mailbox GUID

 - [GET /expunge_messages_for_mailbox_guid](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/mailboxes-expunge_messages_for_mailbox_guid.md): This function removes mail messages from a cPanel account.

Important:

  When you disable the Receive Mail role, the system disables this function.

### Return cPanel account mailboxes status by name

 - [GET /get_mailbox_status](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/mailboxes-get_mailbox_status.md): This function lists the status of a cPanel's mail account's mailboxes.

Important:

  When you disable the Receive Mail role, the system disables this function.

### Return cPanel account mailboxes status list

 - [GET /get_mailbox_status_list](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/mailboxes-get_mailbox_status_list.md): This function lists the status of a cPanel's mail account's mailboxes.

Important:

  When you disable the Receive Mail role, the system disables this function.

### Return cPanel account unique email recipients

 - [GET /get_unique_recipient_count_per_sender_for_user](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/exim-get_unique_recipient_count_per_sender_for_user.md): This function gets the number of unique recipients that a system user sent mail to within a period of time. It groups this data by each of the user's email accounts.

### Return all cPanel account unique email recipients

 - [GET /get_unique_sender_recipient_count_per_user](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/exim-get_unique_sender_recipient_count_per_user.md): This function gets a count of the email addresses that each system account sent mail to within a specific period of time. It groups the data by each system user for all the system's users.

### Return cPanel account forward destination

 - [GET /get_user_email_forward_destination](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/email-get_user_email_forward_destination.md): This function retrieves the destination to which the system forwards a system account's email.

Note:

* Usually, the system sends notices about the server's problems and activity to the root account.
* If you do not use the suexec module, the nobody user receives bounce messages from email that CGI scripts send.

### Add cPanel account to outbound email hold queue

 - [GET /hold_outgoing_email](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/accounts-hold_outgoing_email.md): This function sets Exim's queue to hold email that a user sends to an external address.

Note:

  If mail for a cPanel user's account is suspended, the system will reject their email before the mail server puts it in the queue.

### Return cPanel account's email accounts

 - [GET /list_pops_for](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/email-list_pops_for.md): This function lists a cPanel account’s email accounts. To prevent falsified data or symlink exploitation, the function uses the specified cPanel account user, rather than root user, to read data from the user’s home directory. The system compares the collected data from the user’s home directory to a server-wide domains list. The comparison of the data validates whether you can trust the data.

Important:

  When you disable the Receive Mail role, the system disables this function.

### Release cPanel account queued outgoing emails

 - [GET /release_outgoing_email](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/accounts-release_outgoing_email.md): This function releases outgoing email in the email queue for a single cPanel account user.

Note:

If mail for a cPanel user's account is suspended, the system will reject their email before the mail server puts it in queue.

### Update cPanel account email forward destination

 - [GET /set_user_email_forward_destination](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/email-set_user_email_forward_destination.md): This function sets the destination to which the system forwards a system account's email.

Notes:

* Usually, the system sends notices about the server's problems and activity to the root account.
* If you do not use the suexec module, the nobody user receives bounce messages from email that CGI scripts send.

### Suspend cPanel account outgoing email

 - [GET /suspend_outgoing_email](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/accounts-suspend_outgoing_email.md): This function sets Exim's queue to suspend and force failure for email that a user sends to an external address.

Note:

  If mail for a cPanel user's account is suspended, the system will reject their email before the mail server puts it in queue.

### Stop cPanel account IMAP and POP3 connections

 - [GET /terminate_cpuser_mailbox_sessions](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/mailboxes-terminate_cpuser_mailbox_sessions.md): This function terminates all IMAP and POP3 connections for a cPanel account.

Note:

This function ends connections for every email address, which includes the default address.

### Unsuspend account outgoing email

 - [GET /unsuspend_outgoing_email](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/accounts-unsuspend_outgoing_email.md): This function unsuspends outgoing email for a cPanel account's users.

### Apply a DMARC record to a domain

 - [GET /apply_dmarc](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-apply_dmarc.md): This function applies a DMARC record to the specified domain(s).

Note:

 You cannot modify DMARC records on temporary domains.

### Disable domain's DKIM records

 - [GET /disable_dkim](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-disable_dkim.md): This function removes the DomainKeys Identified Mail (DKIM) records on the DNS server for one or more domains.

### Enable domain's DKIM records

 - [GET /enable_dkim](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-enable_dkim.md): This function enables DomainKeys Identified Mail (DKIM) records on the DNS server for one or more domains.

### Validate domain's DKIM keys

 - [GET /ensure_dkim_keys_exist](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-ensure_dkim_keys_exist.md): This function confirms the validity of a DomainKeys Identified Mail (DKIM) key for one or more domains.

Note:

* If an existing DKIM key does not meet the server's security requirements, the system replaces the existing DKIM key.
* If no DKIM key exists, the system creates a new key for the domain.

### Return domain's DKIM private key

 - [GET /fetch_dkim_private_keys](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-fetch_dkim_private_keys.md): This function returns a domain's installed DKIM private key in Privacy-Enhanced Mail (PEM) format.

Warning:

  We strongly recommend that you protect your private key. If others obtain your private DKIM key, they could sign emails and impersonate you as a sender.

### Get the server's default DMARC record

 - [GET /get_default_dmarc_record](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-get_default_dmarc_record.md): This function retrieves the server's default DMARC record.

The system uses the default DMARC record when creating new accounts or applying DMARC policies that don't specify a custom record.

### Install existing private key to DKIM record

 - [GET /install_dkim_private_keys](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-install_dkim_private_keys.md): This function installs existing keys for use in a DomainKeys Identified Mail (DKIM) record. This is useful if you do not want the system to generate keys for DKIM records.

Notes:

* This function does not update the local DNS server's records.
* If the local DNS server is authoritative for the domain's DNS records, use the WHM API 1 enable_dkim function to update the local DNS server's DNS records.
* We recommend that you use the WHM API 1 install_dkim_private_keys and enable_dkim functions in a batch WHM API 1 call.

### Install domain SPF record

 - [GET /install_spf_records](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-install_spf_records.md): This function installs a Sender Policy Framework (SPF) record for a domain on the DNS server.

### Remove domains' DMARC records.

 - [GET /remove_dmarc](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-remove_dmarc.md): This function removes the DMARC DNS record from a domain.

Note:

You cannot remove DMARC records from temporary domains.

### Set the server's default DMARC record

 - [GET /set_default_dmarc_record](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-set_default_dmarc_record.md): This function sets the server's default DMARC record.

The system uses the default DMARC record when creating new accounts or applying DMARC policies that don't specify a custom record.

Note:

 You can pass an empty string to remove the custom default and revert to the built-in default record.

### Add manual mail exchanger redirect record

 - [GET /set_manual_mx_redirects](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/exim-set_manual_mx_redirects.md): This function lets you create a manual Exim mail exchanger (MX) redirect for a domain. An MX redirection lets you bypass the domain's MX lookup via the Domain Name System (DNS). This function adds the manual redirect entries to the /etc/manualmx file.

Note:

  To remove a domain's manual MX redirection, use the WHM API 1 unset_manual_mx_redirect function.

### Remove manual mail exchanger redirect record

 - [GET /unset_manual_mx_redirects](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/exim-unset_manual_mx_redirects.md): This function removes a domain's manual Exim mail exchanger (MX) redirect entry. The function also removes the manual MX redirect entry from the /etc/manualmx file.

Note:

  To set a domain's manual MX redirection, use the WHM API 1  set_manual_mx_redirects function.

### Validate DKIM records

 - [GET /validate_current_dkims](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-validate_current_dkims.md): This function retrieves and checks the DomainKeys Identified Mail (DKIM) records for one or more domains.

### Validate DMARC records

 - [GET /validate_current_dmarcs](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-validate_current_dmarcs.md): This function retrieves and checks the DMARC record for one or more domains.

### Validate domain PTR records

 - [GET /validate_current_ptrs](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-validate_current_ptrs.md): This function validates the pointer records (PTR) for IPv4 and IPv6 addresses an account's domains send mail from. It retrieves the PTR records for each IP address and determines which of the domain's IP addresses send mail. It then validates the PTR records for each IP address and validates the A (IPv4) or AAAA (IPv6) records pointing to each domain. This function also ensures that at least one of that domain's A or AAAA records points back to the IP address.

### Validate domain SPF records

 - [GET /validate_current_spfs](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-validate_current_spfs.md): This function validates a Sender Policy Framework (SPF) record for one or more domains.

### Enable SNI mail services for domains

 - [GET /enable_mail_sni](https://api.docs.cpanel.net/specifications/whm.openapi/mail-server-settings/ssl-enable_mail_sni.md): This function enables SNI for mail services on the specified domains.

Note:

Mail SNI is always enabled.

* Functions that enable Mail SNI succeed with a warning that Mail SNI is always enabled.
* Functions that disable Mail SNI fail and make no changes.

### Repair Exim configuration file

 - [GET /exim_configuration_check](https://api.docs.cpanel.net/specifications/whm.openapi/mail-server-settings/exim-exim_configuration_check.md): This function scans the Exim configuration file for errors, and if it finds errors attempts to repair them.

### Return server mail queue contents

 - [GET /fetch_mail_queue](https://api.docs.cpanel.net/specifications/whm.openapi/mail-server-settings/exim-fetch_mail_queue.md): This function retrieves the contents of the server's mail queue.

### Create email account mobile profile configuration

 - [GET /generate_mobileconfig](https://api.docs.cpanel.net/specifications/whm.openapi/mail-server-settings/email-generate_mobileconfig.md): This function generates a mobile configuration profile for an email account.

Important:

When you disable the Receive Mail role, the system disables this function.

### Return server SNI support status

 - [GET /is_sni_supported](https://api.docs.cpanel.net/specifications/whm.openapi/mail-server-settings/ssl-is_sni_supported.md): This function checks whether the server supports SNI (Server Name Indication).

Note:

  * Functions that enable Mail SNI succeed with a warning that Mail SNI is always enabled.
  * Functions that disable Mail SNI fail and make no changes.

### Return domain's SNI mail services status

 - [GET /mail_sni_status](https://api.docs.cpanel.net/specifications/whm.openapi/mail-server-settings/ssl-mail_sni_status.md): This function retrieves the status of the domain's SNI mail services.

Note:

Functions that disable Mail SNI fail and make no changes.

### Repair misconfigured email settings

 - [GET /normalize_user_email_configuration](https://api.docs.cpanel.net/specifications/whm.openapi/mail-server-settings/email-normalize_user_email_configuration.md): This function fixes a user's misconfigured email settings. This includes any misconfigured email file and directory ownership and permissions.

### Rebuild mail SNI configuration files

 - [GET /rebuild_mail_sni_config](https://api.docs.cpanel.net/specifications/whm.openapi/mail-server-settings/ssl-rebuild_mail_sni_config.md): This function rebuilds the mail SNI configuration files.

### Validate Exim configuration

 - [GET /validate_current_installed_exim_config](https://api.docs.cpanel.net/specifications/whm.openapi/mail-server-settings/exim-validate_current_installed_exim_config.md): This function validates the system's current Exim configuration.

### Validate Exim configure file syntax

 - [GET /validate_exim_configuration_syntax](https://api.docs.cpanel.net/specifications/whm.openapi/mail-server-settings/exim-validate_exim_configuration_syntax.md): This function evaluates and validates an Exim configuration file's syntax.

Note:

On servers that run CentOS 7, you may see a named warning about the absence of SPF resource
records on DNS.
  * This warning is not relevant on CentOS 7 servers, because
  RFC 7208 deprecated SPF records.
  CentOS 7 servers use TXT records instead of SPF records.
  * Red Hat 7.1 and CentOS 7.1 both contain bind-9.9.4-23.el7, which is an updated version of
  BIND that complies with RFC 7208. To resolve this issue, update your operating system to a
  version that contains the updated version of BIND. For more information, read the
  Red Hat Bugzilla case about SPF record errors.

### (Deprecated) Disable SNI mail services for domains (deprecated)

 - [GET /disable_mail_sni](https://api.docs.cpanel.net/specifications/whm.openapi/mail-server-settings/ssl-disable_mail_sni.md): This function is deprecated and always fails.

Note:

Mail SNI is always enabled. cPanel & WHM no longer allows mail SNI to be disabled.

* Functions that disable Mail SNI fail and make no changes.
* Functions that enable Mail SNI succeed with a warning that Mail SNI is always enabled.

### Add block on emails from specific countries

 - [GET /block_incoming_email_from_country](https://api.docs.cpanel.net/specifications/whm.openapi/spam-management/exim-block_incoming_email_from_country.md): This function blocks email from specific countries.

### Add block on emails from specific domains

 - [GET /block_incoming_email_from_domain](https://api.docs.cpanel.net/specifications/whm.openapi/spam-management/exim-block_incoming_email_from_domain.md): This function blocks email from specific domains.

### Return blocked email countries list

 - [GET /list_blocked_incoming_email_countries](https://api.docs.cpanel.net/specifications/whm.openapi/spam-management/exim-list_blocked_incoming_email_countries.md): This function lists which countries cannot send email to the server.

### Return blocked email domains list

 - [GET /list_blocked_incoming_email_domains](https://api.docs.cpanel.net/specifications/whm.openapi/spam-management/exim-list_blocked_incoming_email_domains.md): This function lists which domains cannot send email to the server.

### Update Apache SpamAssassin™ configuration

 - [GET /save_spamd_config](https://api.docs.cpanel.net/specifications/whm.openapi/spam-management/spamd-save_spamd_config.md): This function configures your Apache SpamAssassin™ options.

Important:

When you disable the Spam Filter role, the system disables this function.

### Remove block on emails from specific countries

 - [GET /unblock_incoming_email_from_country](https://api.docs.cpanel.net/specifications/whm.openapi/spam-management/exim-unblock_incoming_email_from_country.md): This function unblocks email from specific countries.

### Remove block on emails from specific domains

 - [GET /unblock_incoming_email_from_domain](https://api.docs.cpanel.net/specifications/whm.openapi/spam-management/exim-unblock_incoming_email_from_domain.md): This function unblocks email from specific domains.

## cPanel Account Mail Management

Mail / cPanel Account Mail Management

### Return email delivery records by search criteria

 - [GET /emailtrack_search](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/exim-emailtrack_search.md): This function retrieves email delivery records.

Warning:

* On most servers, this function returns a large amount of output. We strongly
recommend that you filter and
sort the output.
* The following example uses the filter and sort options:

  https://hostname.example.com:2087/cpsess##########/json-api/emailtrack_search?api.version=1&api.filter.enable=1&api.filter.a.field=sendunixtime&api.filter.a.arg0=1628889719&api.filter.a.type=gt&api.filter.b.field=sendunixtime&api.filter.b.arg0=1629847321&api.filter.b.type=lt&api.sort.enable=1&api.sort.a.field=sendunixtime&api.sort.a.reverse=0&api.chunk.enable=1&api.chunk.size=25&api.chunk.start=1&success=1

### Return cPanel account email tracking statistics

 - [GET /emailtrack_stats](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/exim-emailtrack_stats.md): This function retrieves email tracking statistics.

### Return all cPanel accounts email tracking statistics

 - [GET /emailtrack_user_stats](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/exim-emailtrack_user_stats.md): This function retrieves email tracking statistics for each user.

### Remove email account messages by Dovecot query

 - [GET /expunge_mailbox_messages](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/mailboxes-expunge_mailbox_messages.md): This function removes mail messages from a cPanel account that you select with a query.

Important:

  When you disable the Receive Mail role, the system disables this function.

### Remove email account messages by mailbox GUID

 - [GET /expunge_messages_for_mailbox_guid](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/mailboxes-expunge_messages_for_mailbox_guid.md): This function removes mail messages from a cPanel account.

Important:

  When you disable the Receive Mail role, the system disables this function.

### Return cPanel account mailboxes status by name

 - [GET /get_mailbox_status](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/mailboxes-get_mailbox_status.md): This function lists the status of a cPanel's mail account's mailboxes.

Important:

  When you disable the Receive Mail role, the system disables this function.

### Return cPanel account mailboxes status list

 - [GET /get_mailbox_status_list](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/mailboxes-get_mailbox_status_list.md): This function lists the status of a cPanel's mail account's mailboxes.

Important:

  When you disable the Receive Mail role, the system disables this function.

### Return cPanel account unique email recipients

 - [GET /get_unique_recipient_count_per_sender_for_user](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/exim-get_unique_recipient_count_per_sender_for_user.md): This function gets the number of unique recipients that a system user sent mail to within a period of time. It groups this data by each of the user's email accounts.

### Return all cPanel account unique email recipients

 - [GET /get_unique_sender_recipient_count_per_user](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/exim-get_unique_sender_recipient_count_per_user.md): This function gets a count of the email addresses that each system account sent mail to within a specific period of time. It groups the data by each system user for all the system's users.

### Return cPanel account forward destination

 - [GET /get_user_email_forward_destination](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/email-get_user_email_forward_destination.md): This function retrieves the destination to which the system forwards a system account's email.

Note:

* Usually, the system sends notices about the server's problems and activity to the root account.
* If you do not use the suexec module, the nobody user receives bounce messages from email that CGI scripts send.

### Add cPanel account to outbound email hold queue

 - [GET /hold_outgoing_email](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/accounts-hold_outgoing_email.md): This function sets Exim's queue to hold email that a user sends to an external address.

Note:

  If mail for a cPanel user's account is suspended, the system will reject their email before the mail server puts it in the queue.

### Return cPanel account's email accounts

 - [GET /list_pops_for](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/email-list_pops_for.md): This function lists a cPanel account’s email accounts. To prevent falsified data or symlink exploitation, the function uses the specified cPanel account user, rather than root user, to read data from the user’s home directory. The system compares the collected data from the user’s home directory to a server-wide domains list. The comparison of the data validates whether you can trust the data.

Important:

  When you disable the Receive Mail role, the system disables this function.

### Release cPanel account queued outgoing emails

 - [GET /release_outgoing_email](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/accounts-release_outgoing_email.md): This function releases outgoing email in the email queue for a single cPanel account user.

Note:

If mail for a cPanel user's account is suspended, the system will reject their email before the mail server puts it in queue.

### Update cPanel account email forward destination

 - [GET /set_user_email_forward_destination](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/email-set_user_email_forward_destination.md): This function sets the destination to which the system forwards a system account's email.

Notes:

* Usually, the system sends notices about the server's problems and activity to the root account.
* If you do not use the suexec module, the nobody user receives bounce messages from email that CGI scripts send.

### Suspend cPanel account outgoing email

 - [GET /suspend_outgoing_email](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/accounts-suspend_outgoing_email.md): This function sets Exim's queue to suspend and force failure for email that a user sends to an external address.

Note:

  If mail for a cPanel user's account is suspended, the system will reject their email before the mail server puts it in queue.

### Stop cPanel account IMAP and POP3 connections

 - [GET /terminate_cpuser_mailbox_sessions](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/mailboxes-terminate_cpuser_mailbox_sessions.md): This function terminates all IMAP and POP3 connections for a cPanel account.

Note:

This function ends connections for every email address, which includes the default address.

### Unsuspend account outgoing email

 - [GET /unsuspend_outgoing_email](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/accounts-unsuspend_outgoing_email.md): This function unsuspends outgoing email for a cPanel account's users.

## Mail DNS Settings

Mail / Mail DNS Settings

### Apply a DMARC record to a domain

 - [GET /apply_dmarc](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-apply_dmarc.md): This function applies a DMARC record to the specified domain(s).

Note:

 You cannot modify DMARC records on temporary domains.

### Disable domain's DKIM records

 - [GET /disable_dkim](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-disable_dkim.md): This function removes the DomainKeys Identified Mail (DKIM) records on the DNS server for one or more domains.

### Enable domain's DKIM records

 - [GET /enable_dkim](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-enable_dkim.md): This function enables DomainKeys Identified Mail (DKIM) records on the DNS server for one or more domains.

### Validate domain's DKIM keys

 - [GET /ensure_dkim_keys_exist](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-ensure_dkim_keys_exist.md): This function confirms the validity of a DomainKeys Identified Mail (DKIM) key for one or more domains.

Note:

* If an existing DKIM key does not meet the server's security requirements, the system replaces the existing DKIM key.
* If no DKIM key exists, the system creates a new key for the domain.

### Return domain's DKIM private key

 - [GET /fetch_dkim_private_keys](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-fetch_dkim_private_keys.md): This function returns a domain's installed DKIM private key in Privacy-Enhanced Mail (PEM) format.

Warning:

  We strongly recommend that you protect your private key. If others obtain your private DKIM key, they could sign emails and impersonate you as a sender.

### Get the server's default DMARC record

 - [GET /get_default_dmarc_record](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-get_default_dmarc_record.md): This function retrieves the server's default DMARC record.

The system uses the default DMARC record when creating new accounts or applying DMARC policies that don't specify a custom record.

### Install existing private key to DKIM record

 - [GET /install_dkim_private_keys](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-install_dkim_private_keys.md): This function installs existing keys for use in a DomainKeys Identified Mail (DKIM) record. This is useful if you do not want the system to generate keys for DKIM records.

Notes:

* This function does not update the local DNS server's records.
* If the local DNS server is authoritative for the domain's DNS records, use the WHM API 1 enable_dkim function to update the local DNS server's DNS records.
* We recommend that you use the WHM API 1 install_dkim_private_keys and enable_dkim functions in a batch WHM API 1 call.

### Install domain SPF record

 - [GET /install_spf_records](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-install_spf_records.md): This function installs a Sender Policy Framework (SPF) record for a domain on the DNS server.

### Remove domains' DMARC records.

 - [GET /remove_dmarc](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-remove_dmarc.md): This function removes the DMARC DNS record from a domain.

Note:

You cannot remove DMARC records from temporary domains.

### Set the server's default DMARC record

 - [GET /set_default_dmarc_record](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-set_default_dmarc_record.md): This function sets the server's default DMARC record.

The system uses the default DMARC record when creating new accounts or applying DMARC policies that don't specify a custom record.

Note:

 You can pass an empty string to remove the custom default and revert to the built-in default record.

### Add manual mail exchanger redirect record

 - [GET /set_manual_mx_redirects](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/exim-set_manual_mx_redirects.md): This function lets you create a manual Exim mail exchanger (MX) redirect for a domain. An MX redirection lets you bypass the domain's MX lookup via the Domain Name System (DNS). This function adds the manual redirect entries to the /etc/manualmx file.

Note:

  To remove a domain's manual MX redirection, use the WHM API 1 unset_manual_mx_redirect function.

### Remove manual mail exchanger redirect record

 - [GET /unset_manual_mx_redirects](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/exim-unset_manual_mx_redirects.md): This function removes a domain's manual Exim mail exchanger (MX) redirect entry. The function also removes the manual MX redirect entry from the /etc/manualmx file.

Note:

  To set a domain's manual MX redirection, use the WHM API 1  set_manual_mx_redirects function.

### Validate DKIM records

 - [GET /validate_current_dkims](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-validate_current_dkims.md): This function retrieves and checks the DomainKeys Identified Mail (DKIM) records for one or more domains.

### Validate DMARC records

 - [GET /validate_current_dmarcs](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-validate_current_dmarcs.md): This function retrieves and checks the DMARC record for one or more domains.

### Validate domain PTR records

 - [GET /validate_current_ptrs](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-validate_current_ptrs.md): This function validates the pointer records (PTR) for IPv4 and IPv6 addresses an account's domains send mail from. It retrieves the PTR records for each IP address and determines which of the domain's IP addresses send mail. It then validates the PTR records for each IP address and validates the A (IPv4) or AAAA (IPv6) records pointing to each domain. This function also ensures that at least one of that domain's A or AAAA records points back to the IP address.

### Validate domain SPF records

 - [GET /validate_current_spfs](https://api.docs.cpanel.net/specifications/whm.openapi/mail-dns-settings/emailauth-validate_current_spfs.md): This function validates a Sender Policy Framework (SPF) record for one or more domains.

## Mail Server Settings

Mail / Mail Server Settings

### Enable SNI mail services for domains

 - [GET /enable_mail_sni](https://api.docs.cpanel.net/specifications/whm.openapi/mail-server-settings/ssl-enable_mail_sni.md): This function enables SNI for mail services on the specified domains.

Note:

Mail SNI is always enabled.

* Functions that enable Mail SNI succeed with a warning that Mail SNI is always enabled.
* Functions that disable Mail SNI fail and make no changes.

### Repair Exim configuration file

 - [GET /exim_configuration_check](https://api.docs.cpanel.net/specifications/whm.openapi/mail-server-settings/exim-exim_configuration_check.md): This function scans the Exim configuration file for errors, and if it finds errors attempts to repair them.

### Return server mail queue contents

 - [GET /fetch_mail_queue](https://api.docs.cpanel.net/specifications/whm.openapi/mail-server-settings/exim-fetch_mail_queue.md): This function retrieves the contents of the server's mail queue.

### Create email account mobile profile configuration

 - [GET /generate_mobileconfig](https://api.docs.cpanel.net/specifications/whm.openapi/mail-server-settings/email-generate_mobileconfig.md): This function generates a mobile configuration profile for an email account.

Important:

When you disable the Receive Mail role, the system disables this function.

### Return server SNI support status

 - [GET /is_sni_supported](https://api.docs.cpanel.net/specifications/whm.openapi/mail-server-settings/ssl-is_sni_supported.md): This function checks whether the server supports SNI (Server Name Indication).

Note:

  * Functions that enable Mail SNI succeed with a warning that Mail SNI is always enabled.
  * Functions that disable Mail SNI fail and make no changes.

### Return domain's SNI mail services status

 - [GET /mail_sni_status](https://api.docs.cpanel.net/specifications/whm.openapi/mail-server-settings/ssl-mail_sni_status.md): This function retrieves the status of the domain's SNI mail services.

Note:

Functions that disable Mail SNI fail and make no changes.

### Repair misconfigured email settings

 - [GET /normalize_user_email_configuration](https://api.docs.cpanel.net/specifications/whm.openapi/mail-server-settings/email-normalize_user_email_configuration.md): This function fixes a user's misconfigured email settings. This includes any misconfigured email file and directory ownership and permissions.

### Rebuild mail SNI configuration files

 - [GET /rebuild_mail_sni_config](https://api.docs.cpanel.net/specifications/whm.openapi/mail-server-settings/ssl-rebuild_mail_sni_config.md): This function rebuilds the mail SNI configuration files.

### Remove Exim configuration files after failed update

 - [GET /remove_in_progress_exim_config_edit](https://api.docs.cpanel.net/specifications/whm.openapi/mail-server-settings/exim-remove_in_progress_exim_config_edit.md): This function removes in-progress Exim configuration files after
a failed update to Exim. When cPanel & WHM attempts to update an Exim configuration,
the system creates dry run files to replace of the ordinary configuration
files.

Note:

* If the update fails, the system leaves these dry run files in place.
 When the user accesses the Advanced Editor section of WHM's Exim Configuration Manager*
interface (_Home >> Service Configuration >> Exim Configuration Manager_),
they access these dry run files instead of the actual configuration files.

### Validate Exim configuration

 - [GET /validate_current_installed_exim_config](https://api.docs.cpanel.net/specifications/whm.openapi/mail-server-settings/exim-validate_current_installed_exim_config.md): This function validates the system's current Exim configuration.

### Validate Exim configure file syntax

 - [GET /validate_exim_configuration_syntax](https://api.docs.cpanel.net/specifications/whm.openapi/mail-server-settings/exim-validate_exim_configuration_syntax.md): This function evaluates and validates an Exim configuration file's syntax.

Note:

On servers that run CentOS 7, you may see a named warning about the absence of SPF resource
records on DNS.
  * This warning is not relevant on CentOS 7 servers, because
  RFC 7208 deprecated SPF records.
  CentOS 7 servers use TXT records instead of SPF records.
  * Red Hat 7.1 and CentOS 7.1 both contain bind-9.9.4-23.el7, which is an updated version of
  BIND that complies with RFC 7208. To resolve this issue, update your operating system to a
  version that contains the updated version of BIND. For more information, read the
  Red Hat Bugzilla case about SPF record errors.

### (Deprecated) Disable SNI mail services for domains (deprecated)

 - [GET /disable_mail_sni](https://api.docs.cpanel.net/specifications/whm.openapi/mail-server-settings/ssl-disable_mail_sni.md): This function is deprecated and always fails.

Note:

Mail SNI is always enabled. cPanel & WHM no longer allows mail SNI to be disabled.

* Functions that disable Mail SNI fail and make no changes.
* Functions that enable Mail SNI succeed with a warning that Mail SNI is always enabled.

## Spam Management

Mail / Spam Management

### Add block on emails from specific countries

 - [GET /block_incoming_email_from_country](https://api.docs.cpanel.net/specifications/whm.openapi/spam-management/exim-block_incoming_email_from_country.md): This function blocks email from specific countries.

### Add block on emails from specific domains

 - [GET /block_incoming_email_from_domain](https://api.docs.cpanel.net/specifications/whm.openapi/spam-management/exim-block_incoming_email_from_domain.md): This function blocks email from specific domains.

### Return blocked email countries list

 - [GET /list_blocked_incoming_email_countries](https://api.docs.cpanel.net/specifications/whm.openapi/spam-management/exim-list_blocked_incoming_email_countries.md): This function lists which countries cannot send email to the server.

### Return blocked email domains list

 - [GET /list_blocked_incoming_email_domains](https://api.docs.cpanel.net/specifications/whm.openapi/spam-management/exim-list_blocked_incoming_email_domains.md): This function lists which domains cannot send email to the server.

### Update Apache SpamAssassin™ configuration

 - [GET /save_spamd_config](https://api.docs.cpanel.net/specifications/whm.openapi/spam-management/spamd-save_spamd_config.md): This function configures your Apache SpamAssassin™ options.

Important:

When you disable the Spam Filter role, the system disables this function.

### Remove block on emails from specific countries

 - [GET /unblock_incoming_email_from_country](https://api.docs.cpanel.net/specifications/whm.openapi/spam-management/exim-unblock_incoming_email_from_country.md): This function unblocks email from specific countries.

### Remove block on emails from specific domains

 - [GET /unblock_incoming_email_from_domain](https://api.docs.cpanel.net/specifications/whm.openapi/spam-management/exim-unblock_incoming_email_from_domain.md): This function unblocks email from specific domains.

## Greylisting

The Greylisting module for WHM API 1.

### Return Greylisting trust status of server netblock

 - [GET /cpgreylist_is_server_netblock_trusted](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-cpgreylist_is_server_netblock_trusted.md): This function returns the Greylisting trusted status of the server's netblock.

### Return Greylisting IP addresses of mail providers

 - [GET /cpgreylist_list_entries_for_common_mail_provider](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-cpgreylist_list_entries_for_common_mail_provider.md): This function lists Greylisting's IP addresses for the specified mail provider.

### Return Greylisting mail providers

 - [GET /cpgreylist_load_common_mail_providers_config](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-cpgreylist_load_common_mail_providers_config.md): This function returns Greylisting's list of common mail service providers.

### Update Greylisting new mail provider handling

 - [GET /cpgreylist_save_common_mail_providers_config](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-cpgreylist_save_common_mail_providers_config.md): This function sets whether Greylisting trusts new entries to cPanel's common mail providers list.

### Return Greylisting status

 - [GET /cpgreylist_status](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-cpgreylist_status.md): This function returns the status of Greylisting.

### Add mail provider to Greylisting trusted hosts

 - [GET /cpgreylist_trust_entries_for_common_mail_provider](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-cpgreylist_trust_entries_for_common_mail_provider.md): This function marks the IP addresses for the specified mail provider as trusted. Greylisting will not defer emails from trusted IP addresses.

### Add mail provider to Greylisting non-trusted hosts

 - [GET /cpgreylist_untrust_entries_for_common_mail_provider](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-cpgreylist_untrust_entries_for_common_mail_provider.md): This function marks the IP addresses for the specified mail provider as not trusted.
Greylisting defers emails from non-trusted IP addresses.

### Add IP address to Greylisting trusted hosts

 - [GET /create_cpgreylist_trusted_host](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-create_cpgreylist_trusted_host.md): This function adds an IP address to the Greylisting Trusted Hosts list.

### Remove IP address from Greylisting trusted hosts

 - [GET /delete_cpgreylist_trusted_host](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-delete_cpgreylist_trusted_host.md): This function deletes an IP address from the Greylisting _Trusted Hosts_ list.

### Disable Greylisting

 - [GET /disable_cpgreylist](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-disable_cpgreylist.md): This function disables Greylisting.

### Enable Greylisting

 - [GET /enable_cpgreylist](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-enable_cpgreylist.md): This function enables Greylisting.

### Return Greylisting settings

 - [GET /load_cpgreylist_config](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-load_cpgreylist_config.md): This function returns Greylisting's current settings.

### Return Greylisting deferred incoming email triplets

 - [GET /read_cpgreylist_deferred_entries](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-read_cpgreylist_deferred_entries.md): This function lists Greylisting's deferred triplets.
Greylisting identifies incoming email by triplets.

A triplet is a collection of three pieces of data:
* the IP address
* the sender's address
* the recipient's address

### Return Greylisting trusted hosts

 - [GET /read_cpgreylist_trusted_hosts](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-read_cpgreylist_trusted_hosts.md): This function retrieves the entries on the Greylisting Trusted Hosts list.

### Update Greylisting settings

 - [GET /save_cpgreylist_config](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-save_cpgreylist_config.md): This function modifies the server's Greylisting configuration settings.

Important:

When you call this function, you must include at least one of the
following parameters:

* spf_bypass
* child_timeout_secs
* record_exp_time_mins
* initial_block_time_mins
* max_child_procs
* purge_interval_mins
* must_try_time_mins

## Spam Protection (Greylisting)

Mail / Spam Protection (Greylisting)

### Return Greylisting trust status of server netblock

 - [GET /cpgreylist_is_server_netblock_trusted](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-cpgreylist_is_server_netblock_trusted.md): This function returns the Greylisting trusted status of the server's netblock.

### Return Greylisting IP addresses of mail providers

 - [GET /cpgreylist_list_entries_for_common_mail_provider](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-cpgreylist_list_entries_for_common_mail_provider.md): This function lists Greylisting's IP addresses for the specified mail provider.

### Return Greylisting mail providers

 - [GET /cpgreylist_load_common_mail_providers_config](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-cpgreylist_load_common_mail_providers_config.md): This function returns Greylisting's list of common mail service providers.

### Update Greylisting new mail provider handling

 - [GET /cpgreylist_save_common_mail_providers_config](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-cpgreylist_save_common_mail_providers_config.md): This function sets whether Greylisting trusts new entries to cPanel's common mail providers list.

### Return Greylisting status

 - [GET /cpgreylist_status](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-cpgreylist_status.md): This function returns the status of Greylisting.

### Add mail provider to Greylisting trusted hosts

 - [GET /cpgreylist_trust_entries_for_common_mail_provider](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-cpgreylist_trust_entries_for_common_mail_provider.md): This function marks the IP addresses for the specified mail provider as trusted. Greylisting will not defer emails from trusted IP addresses.

### Add mail provider to Greylisting non-trusted hosts

 - [GET /cpgreylist_untrust_entries_for_common_mail_provider](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-cpgreylist_untrust_entries_for_common_mail_provider.md): This function marks the IP addresses for the specified mail provider as not trusted.
Greylisting defers emails from non-trusted IP addresses.

### Add IP address to Greylisting trusted hosts

 - [GET /create_cpgreylist_trusted_host](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-create_cpgreylist_trusted_host.md): This function adds an IP address to the Greylisting Trusted Hosts list.

### Remove IP address from Greylisting trusted hosts

 - [GET /delete_cpgreylist_trusted_host](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-delete_cpgreylist_trusted_host.md): This function deletes an IP address from the Greylisting _Trusted Hosts_ list.

### Disable Greylisting

 - [GET /disable_cpgreylist](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-disable_cpgreylist.md): This function disables Greylisting.

### Enable Greylisting

 - [GET /enable_cpgreylist](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-enable_cpgreylist.md): This function enables Greylisting.

### Return Greylisting settings

 - [GET /load_cpgreylist_config](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-load_cpgreylist_config.md): This function returns Greylisting's current settings.

### Return Greylisting deferred incoming email triplets

 - [GET /read_cpgreylist_deferred_entries](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-read_cpgreylist_deferred_entries.md): This function lists Greylisting's deferred triplets.
Greylisting identifies incoming email by triplets.

A triplet is a collection of three pieces of data:
* the IP address
* the sender's address
* the recipient's address

### Return Greylisting trusted hosts

 - [GET /read_cpgreylist_trusted_hosts](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-read_cpgreylist_trusted_hosts.md): This function retrieves the entries on the Greylisting Trusted Hosts list.

### Update Greylisting settings

 - [GET /save_cpgreylist_config](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-save_cpgreylist_config.md): This function modifies the server's Greylisting configuration settings.

Important:

When you call this function, you must include at least one of the
following parameters:

* spf_bypass
* child_timeout_secs
* record_exp_time_mins
* initial_block_time_mins
* max_child_procs
* purge_interval_mins
* must_try_time_mins

## 360 Monitoring

The 360 Monitoring module for WHM API 1.

### Register the server with 360 Monitoring

 - [GET /360Monitoring/register_server_with_360_monitoring](https://api.docs.cpanel.net/specifications/whm.openapi/360-monitoring/360monitoring-register_server_with_360_monitoring.md): This function registers the server with 360 Monitoring.

If the server is not already associated with a 360 Monitoring account,
the function creates a new account on the user's behalf and configures
the local agent. If the server is already registered, the function is
a no-op and returns the existing identifier.

The system persists the credentials required by the local agent server-side
and does not return them in the response. Inspect the metadata.result
field (1 for success, 0 for failure) and metadata.reason for
any failure details.

### Update 360 Monitoring agent polling settings

 - [GET /360Monitoring/set_360_agent_polling](https://api.docs.cpanel.net/specifications/whm.openapi/360-monitoring/360monitoring-set_360_agent_polling.md): This function updates agent360 polling settings.

Provide at least one of the following parameters: interval or max_data_span.

The interval parameter sets the individual polling interval for each plugin. If you
provide interval without any section filters, the function updates all core
(global, agent, data, and execution) and default plugin
(cpu, iostat, and network) sections.

The global_sections and plugin_sections parameters are only valid
if you provide the interval parameter.

The max_data_span parameter is global. The agent collects metrics from multiple
plugins and sends them together as a single batch.

If the requested values already match the current configuration, the function does not
make changes or restart the agent360 process.

## NGINX Manager

The NGINX Manager module for WHM API 1.

### Delete the user's NGINX cache.

 - [GET /nginxmanager_clear_cache](https://api.docs.cpanel.net/specifications/whm.openapi/nginx-manager/nginxmanager-nginxmanager_clear_cache.md): This function clears a user's NGINX cache

### Return NGINX caching configurations.

 - [GET /nginxmanager_get_cache_config_system](https://api.docs.cpanel.net/specifications/whm.openapi/nginx-manager/nginxmanager-nginxmanager_get_cache_config_system.md): This function returns the system NGINX cache configuration.

### Return user NGINX caching configurations.

 - [GET /nginxmanager_get_cache_config_users](https://api.docs.cpanel.net/specifications/whm.openapi/nginx-manager/nginxmanager-nginxmanager_get_cache_config_users.md): This function returns a user's NGINX cache configuration.

### Update NGINX configuration.

 - [GET /nginxmanager_rebuild_cache_config](https://api.docs.cpanel.net/specifications/whm.openapi/nginx-manager/nginxmanager-nginxmanager_rebuild_cache_config.md): This function rebuilds the NGINX user configuration.

### Restore NGINX configuration to default values.

 - [GET /nginxmanager_reset_users_cache_config](https://api.docs.cpanel.net/specifications/whm.openapi/nginx-manager/nginxmanager-nginxmanager_reset_users_cache_config.md): This function resets a user to the NGINX system default.

### Update NGINX caching status.

 - [GET /nginxmanager_set_cache_config](https://api.docs.cpanel.net/specifications/whm.openapi/nginx-manager/nginxmanager-nginxmanager_set_cache_config.md): This function enables or disables NGINX caching.

## Resellers

The Resellers module for WHM API 1.

### Return account enhancement limits

 - [GET /list_enhancement_limits](https://api.docs.cpanel.net/specifications/whm.openapi/account-enhancement-limit/accountenhancements-list_enhancement_limits.md): This function returns a reseller's account enhancement limits.

### Update account enhancement limit

 - [GET /set_enhancement_limit](https://api.docs.cpanel.net/specifications/whm.openapi/account-enhancement-limit/accountenhancements-set_enhancement_limit.md): This function sets account enhancement limits for a reseller account.

### Update reseller's bandwidth and disk quotas

 - [GET /setresellerlimits](https://api.docs.cpanel.net/specifications/whm.openapi/account-limits/resellers-setresellerlimits.md): This function sets a reseller's bandwidth and disk quotas.

### Update reseller's hosting plan limits

 - [GET /setresellerpackagelimit](https://api.docs.cpanel.net/specifications/whm.openapi/account-limits/resellers-setresellerpackagelimit.md): This function limits the packages that a reseller assigns to cPanel accounts.

### Return all privilege lists and settings

 - [GET /listacls](https://api.docs.cpanel.net/specifications/whm.openapi/account-permissions/acls-listacls.md): This function lists the server's
Access Control Lists (ACLs)
and each list's privileges.

### Create or update privilege list and settings

 - [GET /saveacllist](https://api.docs.cpanel.net/specifications/whm.openapi/account-permissions/acls-saveacllist.md): This function creates or modifies an Access Control List (ACL).

Note:

  For each acl-* parameter, a value of 1 adds that privilege to the ACL list and a value of 0 removes that privilege from the ACL list.

Warning:

  We strongly recommend that WHM users create and edit ACLs and ACL privileges through WHM's Edit Reseller Nameservers and Privileges interface ( WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges ).

### Create or update reseller privilege settings

 - [GET /setacls](https://api.docs.cpanel.net/specifications/whm.openapi/account-permissions/resellers-setacls.md): This function creates or modifies an Access Control List (ACL).

Note:

  For each acl-* parameter, any value adds that privilege to the ACL list and no value removes that privilege from the ACL list.

Warning:

  We strongly recommend that WHM users create and edit ACLs and ACL privileges through WHM's Edit Reseller Nameservers and Privileges interface ( WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges ).

### Return reseller's owned accounts' information

 - [GET /acctcounts](https://api.docs.cpanel.net/specifications/whm.openapi/account-settings/resellers-acctcounts.md): This function lists a reseller's total accounts, suspended accounts, and account creation limit.

### Return current user's public contact information

 - [GET /get_public_contact](https://api.docs.cpanel.net/specifications/whm.openapi/account-settings/publiccontact-get_public_contact.md): This function retrieves an account's public contact information.

### Return reseller's available IP addresses

 - [GET /getresellerips](https://api.docs.cpanel.net/specifications/whm.openapi/account-settings/resellers-getresellerips.md): This function lists a reseller's available IP addresses.

### Return all resellers

 - [GET /listresellers](https://api.docs.cpanel.net/specifications/whm.openapi/account-settings/resellers-listresellers.md): This function lists the reseller accounts on the server.

### Return reseller's information

 - [GET /resellerstats](https://api.docs.cpanel.net/specifications/whm.openapi/account-settings/resellers-resellerstats.md): This function lists data about a reseller's accounts.

### Update current user's public contact information

 - [GET /set_public_contact](https://api.docs.cpanel.net/specifications/whm.openapi/account-settings/publiccontact-set_public_contact.md): This function sets an account's public contact information.

### Add IP addresses to reseller

 - [GET /setresellerips](https://api.docs.cpanel.net/specifications/whm.openapi/account-settings/resellers-setresellerips.md): This function adds IP addresses to a reseller's account.

Note:

To assign a main IP address to a reseller's account, call the WHM API 1 setresellermainip function.

For more information, read our Manage Reseller's IP Delegation documentation.

### Update reseller's main IP address

 - [GET /setresellermainip](https://api.docs.cpanel.net/specifications/whm.openapi/account-settings/resellers-setresellermainip.md): This function assigns a main IP address to a reseller's account.

Note:

  To assign additional IP addresses to a reseller's account, call the WHM API 1 setresellerips function.

### Update reseller's assigned nameservers

 - [GET /setresellernameservers](https://api.docs.cpanel.net/specifications/whm.openapi/account-settings/resellers-setresellernameservers.md): This function assigns nameservers to a reseller's account.

### Enable cPanel account's reseller status

 - [GET /setupreseller](https://api.docs.cpanel.net/specifications/whm.openapi/reseller-account-management/resellers-setupreseller.md): This function grants reseller status to an account.

Note:

This function grants reseller status to an existing account. You cannot create a new account with this function.

### Suspend reseller

 - [GET /suspendreseller](https://api.docs.cpanel.net/specifications/whm.openapi/reseller-account-management/resellers-suspendreseller.md): This function suspends a reseller account.

### Delete reseller and reseller's cPanel accounts

 - [GET /terminatereseller](https://api.docs.cpanel.net/specifications/whm.openapi/reseller-account-management/resellers-terminatereseller.md): This function deletes a reseller and all of the reseller's cPanel accounts.

Warning:

* You cannot recover deleted accounts. Use this function with extreme caution.
* This function deletes the reseller account and all of the accounts that the reseller
owns.
* To remove reseller privileges from an account but not delete the reseller's account
or any accounts that the reseller owns, use the WHM API 1 unsetupreseller function.

### Disables cPanel account's reseller status

 - [GET /unsetupreseller](https://api.docs.cpanel.net/specifications/whm.openapi/reseller-account-management/resellers-unsetupreseller.md): This function revokes reseller status from an account.

### Unsuspend reseller

 - [GET /unsuspendreseller](https://api.docs.cpanel.net/specifications/whm.openapi/reseller-account-management/resellers-unsuspendreseller.md): This function unsuspends a reseller account.

## Account Enhancement Limit

Resellers / Account Enhancement Limit

### Return account enhancement limits

 - [GET /list_enhancement_limits](https://api.docs.cpanel.net/specifications/whm.openapi/account-enhancement-limit/accountenhancements-list_enhancement_limits.md): This function returns a reseller's account enhancement limits.

### Update account enhancement limit

 - [GET /set_enhancement_limit](https://api.docs.cpanel.net/specifications/whm.openapi/account-enhancement-limit/accountenhancements-set_enhancement_limit.md): This function sets account enhancement limits for a reseller account.

## Account Enhancement

### Return account enhancement limits

 - [GET /list_enhancement_limits](https://api.docs.cpanel.net/specifications/whm.openapi/account-enhancement-limit/accountenhancements-list_enhancement_limits.md): This function returns a reseller's account enhancement limits.

### Update account enhancement limit

 - [GET /set_enhancement_limit](https://api.docs.cpanel.net/specifications/whm.openapi/account-enhancement-limit/accountenhancements-set_enhancement_limit.md): This function sets account enhancement limits for a reseller account.

## Account Limit

### Return account enhancement limits

 - [GET /list_enhancement_limits](https://api.docs.cpanel.net/specifications/whm.openapi/account-enhancement-limit/accountenhancements-list_enhancement_limits.md): This function returns a reseller's account enhancement limits.

### Update account enhancement limit

 - [GET /set_enhancement_limit](https://api.docs.cpanel.net/specifications/whm.openapi/account-enhancement-limit/accountenhancements-set_enhancement_limit.md): This function sets account enhancement limits for a reseller account.

## Account Limits

Resellers / Account Limits

### Update reseller's bandwidth and disk quotas

 - [GET /setresellerlimits](https://api.docs.cpanel.net/specifications/whm.openapi/account-limits/resellers-setresellerlimits.md): This function sets a reseller's bandwidth and disk quotas.

### Update reseller's hosting plan limits

 - [GET /setresellerpackagelimit](https://api.docs.cpanel.net/specifications/whm.openapi/account-limits/resellers-setresellerpackagelimit.md): This function limits the packages that a reseller assigns to cPanel accounts.

## Account Permissions

Resellers / Account Permissions

### Return all privilege lists and settings

 - [GET /listacls](https://api.docs.cpanel.net/specifications/whm.openapi/account-permissions/acls-listacls.md): This function lists the server's
Access Control Lists (ACLs)
and each list's privileges.

### Create or update privilege list and settings

 - [GET /saveacllist](https://api.docs.cpanel.net/specifications/whm.openapi/account-permissions/acls-saveacllist.md): This function creates or modifies an Access Control List (ACL).

Note:

  For each acl-* parameter, a value of 1 adds that privilege to the ACL list and a value of 0 removes that privilege from the ACL list.

Warning:

  We strongly recommend that WHM users create and edit ACLs and ACL privileges through WHM's Edit Reseller Nameservers and Privileges interface ( WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges ).

### Create or update reseller privilege settings

 - [GET /setacls](https://api.docs.cpanel.net/specifications/whm.openapi/account-permissions/resellers-setacls.md): This function creates or modifies an Access Control List (ACL).

Note:

  For each acl-* parameter, any value adds that privilege to the ACL list and no value removes that privilege from the ACL list.

Warning:

  We strongly recommend that WHM users create and edit ACLs and ACL privileges through WHM's Edit Reseller Nameservers and Privileges interface ( WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges ).

## Account Settings

Resellers / Account Settings

### Return reseller's owned accounts' information

 - [GET /acctcounts](https://api.docs.cpanel.net/specifications/whm.openapi/account-settings/resellers-acctcounts.md): This function lists a reseller's total accounts, suspended accounts, and account creation limit.

### Return current user's public contact information

 - [GET /get_public_contact](https://api.docs.cpanel.net/specifications/whm.openapi/account-settings/publiccontact-get_public_contact.md): This function retrieves an account's public contact information.

### Return reseller's available IP addresses

 - [GET /getresellerips](https://api.docs.cpanel.net/specifications/whm.openapi/account-settings/resellers-getresellerips.md): This function lists a reseller's available IP addresses.

### Return all resellers

 - [GET /listresellers](https://api.docs.cpanel.net/specifications/whm.openapi/account-settings/resellers-listresellers.md): This function lists the reseller accounts on the server.

### Return reseller's information

 - [GET /resellerstats](https://api.docs.cpanel.net/specifications/whm.openapi/account-settings/resellers-resellerstats.md): This function lists data about a reseller's accounts.

### Update current user's public contact information

 - [GET /set_public_contact](https://api.docs.cpanel.net/specifications/whm.openapi/account-settings/publiccontact-set_public_contact.md): This function sets an account's public contact information.

### Add IP addresses to reseller

 - [GET /setresellerips](https://api.docs.cpanel.net/specifications/whm.openapi/account-settings/resellers-setresellerips.md): This function adds IP addresses to a reseller's account.

Note:

To assign a main IP address to a reseller's account, call the WHM API 1 setresellermainip function.

For more information, read our Manage Reseller's IP Delegation documentation.

### Update reseller's main IP address

 - [GET /setresellermainip](https://api.docs.cpanel.net/specifications/whm.openapi/account-settings/resellers-setresellermainip.md): This function assigns a main IP address to a reseller's account.

Note:

  To assign additional IP addresses to a reseller's account, call the WHM API 1 setresellerips function.

### Update reseller's assigned nameservers

 - [GET /setresellernameservers](https://api.docs.cpanel.net/specifications/whm.openapi/account-settings/resellers-setresellernameservers.md): This function assigns nameservers to a reseller's account.

## Reseller Account Management

Resellers / Account Management

### Enable cPanel account's reseller status

 - [GET /setupreseller](https://api.docs.cpanel.net/specifications/whm.openapi/reseller-account-management/resellers-setupreseller.md): This function grants reseller status to an account.

Note:

This function grants reseller status to an existing account. You cannot create a new account with this function.

### Suspend reseller

 - [GET /suspendreseller](https://api.docs.cpanel.net/specifications/whm.openapi/reseller-account-management/resellers-suspendreseller.md): This function suspends a reseller account.

### Delete reseller and reseller's cPanel accounts

 - [GET /terminatereseller](https://api.docs.cpanel.net/specifications/whm.openapi/reseller-account-management/resellers-terminatereseller.md): This function deletes a reseller and all of the reseller's cPanel accounts.

Warning:

* You cannot recover deleted accounts. Use this function with extreme caution.
* This function deletes the reseller account and all of the accounts that the reseller
owns.
* To remove reseller privileges from an account but not delete the reseller's account
or any accounts that the reseller owns, use the WHM API 1 unsetupreseller function.

### Disables cPanel account's reseller status

 - [GET /unsetupreseller](https://api.docs.cpanel.net/specifications/whm.openapi/reseller-account-management/resellers-unsetupreseller.md): This function revokes reseller status from an account.

### Unsuspend reseller

 - [GET /unsuspendreseller](https://api.docs.cpanel.net/specifications/whm.openapi/reseller-account-management/resellers-unsuspendreseller.md): This function unsuspends a reseller account.

## WHM Access

Security / WHM Access

### Clear all CIDR restrictions to login to cPanel & WHM with the root password.

 - [GET /allow_all_whm_root_access](https://api.docs.cpanel.net/specifications/whm.openapi/whm-access/rootipaccess-allow_all_whm_root_access.md): This function removes all restrictions to root login to cPanel & WHM login based on IP.

### Restrict Access to WHM by CIDR list.

 - [GET /restrict_whm_root_access](https://api.docs.cpanel.net/specifications/whm.openapi/whm-access/rootipaccess-restrict_whm_root_access.md): This function restricts root login to cPanel & WHM based on a list of CIDR addresses.

Note:

This API manipulates /var/cpanel/authorized_whm_root_ips. We HIGHLY recommend
you not modify this file directly. Improper formatting of the file can lead to loss of all
access to cPanel & WHM using the root password.

Use of this API replaces any previous restrictions so be sure to include previous CIDR patterns
when adding new ones.

As this API only restricts logins, please be aware that existing root logins are not terminated
when these restrictions are asserted.

This API DOES NOT restrict root resellers.

## Configuration Clusters

Server Administration / Configuration Clusters

### Add configuration cluster server

 - [POST /add_configclusterserver](https://api.docs.cpanel.net/specifications/whm.openapi/configuration-clusters/clusterserver-add_configclusterserver.md): This function adds a server to a configuration cluster. The function's return data appears in
the metadata section of its output.

We recommend that you run this function as a POST request with SSL enabled:

* The length of the remote access key may cause problems if you run the function with the GET
method (for example, a URL in your browser).
* You risk security problems if you enter a remote access key through the GET method.

Important:

* Run this function as a root-level user on the server that you wish to use as the parent server.
* If you log in to a configuration cluster server that is not the parent server, nothing
will indicate that the server is part of a configuration cluster. You can only view and modify
this information from the parent server.

### Delete server from configuration cluster

 - [GET /delete_configclusterserver](https://api.docs.cpanel.net/specifications/whm.openapi/configuration-clusters/clusterserver-delete_configclusterserver.md): This function removes a server from a configuration cluster. The function's return
data appears in the metadata section of its output.

Important:

If you log in to a configuration cluster server that is not the parent server,
nothing will indicate that the server is part of a configuration cluster. You can
only view and modify this information from the parent server.

### Return all configuration cluster servers

 - [GET /list_configclusterservers](https://api.docs.cpanel.net/specifications/whm.openapi/configuration-clusters/clusterserver-list_configclusterservers.md): This function lists the servers in the server's configuration cluster.

Warning:

* WHM's Remote Access Key feature is deprecated. We strongly recommend that you use API tokens instead.

* If you log in to a configuration cluster server that is not the parent server, nothing will indicate that the server is part of a configuration cluster. You can only view and modify this information from the parent server.

### Update configuration file from backup

 - [GET /restore_config_from_file](https://api.docs.cpanel.net/specifications/whm.openapi/configuration-clusters/cpanel-restore_config_from_file.md): This function restores a configuration backup from a file. If the backup file does not contain any changes, the system does not write to the configuration file.

### Update configuration file from backup via POST

 - [POST /restore_config_from_upload](https://api.docs.cpanel.net/specifications/whm.openapi/configuration-clusters/cpanel-restore_config_from_upload.md): This function restores a configuration backup file via HTTP POST
method. If the backup file does not contain any changes, the system does not write to the configuration file.

Note:

The format for this command line example differs from our standard format because the function only accepts an HTTP POST request. For more information about how to call this request method, read Mozilla's POST documentation.

### Update configuration cluster server credentials

 - [GET /update_configclusterserver](https://api.docs.cpanel.net/specifications/whm.openapi/configuration-clusters/clusterserver-update_configclusterserver.md): This function updates the username or remote access key for a cluster server.

Important:

 If you log in to a configuration cluster server that is not the parent server, nothing will indicate that the server is part of a configuration cluster. You can only* view and modify this information from the master server.

* We recommend that you run this function as a POST request with SSL enabled:
  * The length of the remote access key may cause problems if you run the function with the GET method (for example, a URL in your browser).
  * You risk security problems if you enter a remote access key through the GET method.

## Configurations

Server Administration / Configurations

### Return Tweak Settings option's value

 - [GET /get_tweaksetting](https://api.docs.cpanel.net/specifications/whm.openapi/configurations/cpanel-get_tweaksetting.md): This function retrieves values from the
/var/cpanel/cpanel.config
file and the server's Exim configuration.

### Update Tweak Settings option

 - [GET /set_tweaksetting](https://api.docs.cpanel.net/specifications/whm.openapi/configurations/cpanel-set_tweaksetting.md): This function sets an option's value in WHM's
Tweak Settings
interface (WHM >> Home >> Server Configuration >> Tweak Settings). The
system stores the keys and values that this function updates in
the
/var/cpanel/cpanel.config
file.

## Connected Applications

Server Administration / Connected Applications

### Fetch application connection information

 - [POST /fetch_connected_application](https://api.docs.cpanel.net/specifications/whm.openapi/connected-applications/connectedapplications-fetch_connected_application.md): Retrieve the connection information related to a application that has been granted
access to this server. This data may include any number of properties, but its
primary purpose is to associate API tokens and public/private key pairs and similar
resources with a specific connected application.

### List application connection information

 - [POST /list_connected_applications](https://api.docs.cpanel.net/specifications/whm.openapi/connected-applications/connectedapplications-list_connected_applications.md): Retrieve the connection information for all the connected applications that have been
granted access to this server. This data may include any number of properties, but its
primary purpose is to associate API tokens and public/private key pairs and similar
resources with a specific connected application.

### Remove application connection information

 - [POST /remove_connected_application](https://api.docs.cpanel.net/specifications/whm.openapi/connected-applications/connectedapplications-remove_connected_application.md): Remove the connected application from the server. This only removes the connection
information from the configuration file. It does not clean up any allocated
resources, such as API tokens and public/private keys. Any tokens or keys need to be
removed from the system separately.

### Save application connection information.

 - [POST /save_connected_application](https://api.docs.cpanel.net/specifications/whm.openapi/connected-applications/connectedapplications-save_connected_application.md): Save or update connection data about a specific connected application.

## Connections

Server Administration / Connections

### Return TCP IPv4 sockets data

 - [GET /get_tcp4_sockets](https://api.docs.cpanel.net/specifications/whm.openapi/connections/sys-get_tcp4_sockets.md): This function returns data about the system's transmission control protocol (TCP) IPv4 sockets.

### Return TCP IPv6 sockets data

 - [GET /get_tcp6_sockets](https://api.docs.cpanel.net/specifications/whm.openapi/connections/sys-get_tcp6_sockets.md): This function returns data about the system's transmission control protocol (TCP) IPv6 sockets.

### Return UDP IPv4 sockets data

 - [GET /get_udp4_sockets](https://api.docs.cpanel.net/specifications/whm.openapi/connections/sys-get_udp4_sockets.md): This function returns data about the system's user datagram protocol (UDP) IPv4 sockets.

### Return UDP IPv6 sockets data

 - [GET /get_udp6_sockets](https://api.docs.cpanel.net/specifications/whm.openapi/connections/sys-get_udp6_sockets.md): This function returns data about the system's user datagram protocol (UDP) IPv6 sockets.

Important:

  This function may perform slower on a CentOS 6 system with a large number of UDP sockets.

## cPanel Analytics

The cPanel Analytics module for WHM API 1.

### Enable analytics data gathering

 - [GET /participate_in_analytics](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-analytics/analytics-participate_in_analytics.md): This function enables or disables
Interface Analytics.

## License Management

Server Administration / License Management

### Return cPanel Store or Market checkout URL

 - [GET /purchase_a_license](https://api.docs.cpanel.net/specifications/whm.openapi/license-management/market-purchase_a_license.md): This function returns the checkout URL to use for a cPanel Store or cPanel Market provider purchase.

### Return server's cPanel license status

 - [GET /run_cpkeyclt](https://api.docs.cpanel.net/specifications/whm.openapi/license-management/sys-run_cpkeyclt.md): This function verifies the system's license status with WebPros International, LLC's
licensing servers. To do this, the function runs the /usr/local/cpanel/cpkeyclt
script.

For more information about this script and potential license problems,
read our
Installation Guide - Troubleshoot Your Installation
documentation.

## Notifications

Server Administration / Notifications

### Return Contact Manager event importance settings

 - [GET /get_all_contact_importances](https://api.docs.cpanel.net/specifications/whm.openapi/notifications/contact-get_all_contact_importances.md): This function lists the importance of all application events in
WHM's
Contact Manager
interface (WHM >> Home >> Server Contacts >> Contact Manager).

### Return app's event contact importance setting

 - [GET /get_application_contact_event_importance](https://api.docs.cpanel.net/specifications/whm.openapi/notifications/contact-get_application_contact_event_importance.md): This function retrieves the importance level of an application event for WHM's Contact Manager interface (Home >> Server Contacts >> Contact Manager).

Note:

  The system will create a notification setting for the application's events if one does not already exist.

### Return app contact importance setting

 - [GET /get_application_contact_importance](https://api.docs.cpanel.net/specifications/whm.openapi/notifications/contact-get_application_contact_importance.md): This function retrieves the importance level of an application's events for WHM's
Contact Manager
interface (WHM >> Home >> Server Contacts >> Contact Manager).

Note:

The system creates a notification setting for the application's events if one does
not already exist.

### Send notification URL via POST

 - [GET /send_test_posturl](https://api.docs.cpanel.net/specifications/whm.openapi/notifications/icontact-send_test_posturl.md): This function uses the specified URL to send a test message through the POST method of HTTP as form data.
The function automatically generates a message title and body and includes a unique string in the test message.
When the test message returns, the system searches for the ID string and returns it.

If the function does not detect the correct ID string in the returned message, the function fails.

The test's success or failure depends on various conditions. For example:
* Valid access token.
* Network configuration.
* Service outages.
* External server rate limit.

### Send Pushbullet™ test with access token

 - [GET /send_test_pushbullet_note](https://api.docs.cpanel.net/specifications/whm.openapi/notifications/icontact-send_test_pushbullet_note.md): This function uses the specified access token to send a test Pushbullet™ note. The function automatically generates a message title and body, and it includes a unique string in the test message. When the test message returns, the system searches for the ID string and returns it.

If the function does not detect the correct ID string in the returned message, the function fails. You can also review the user's Pushbullet channel history to confirm that the server sent and received the message.

The test's success or failure depends on various conditions. For example:
  * Valid access token.
  * Network configuration.
  * Service outages.
  * External server rate limit.

### Update app's event contact importance setting

 - [GET /set_application_contact_event_importance](https://api.docs.cpanel.net/specifications/whm.openapi/notifications/contact-set_application_contact_event_importance.md): This function sets the importance level of an application event for WHM's
Contact Manager
interface (WHM >> Home >> Server Contacts >> Contact Manager).

For a list of available modules, use the WHM API 1
get_all_contact_importances
function.

Note:

The system creates a notification setting for the application's events
if one does not already exist.

### Update app contact importance setting

 - [GET /set_application_contact_importance](https://api.docs.cpanel.net/specifications/whm.openapi/notifications/contact-set_application_contact_importance.md): This function sets the importance level of an application's events for WHM's
Contact Manager
interface (WHM >> Home >> Server Contacts >> Contact Manager).

For a list of available modules, use the WHM API 1
get_all_contact_importances
function.

Note:

The system creates a notification setting for the application's events if one
does not already exist.

### Update WHM contact email address

 - [GET /update_contact_email](https://api.docs.cpanel.net/specifications/whm.openapi/notifications/wwwacct-update_contact_email.md): This function updates the contact email address in the wwwacct.conf file.
For more information, read our 
Installation Guide - Customize Your Installation
documentation.

### Send notification URL via POST verification

 - [GET /verify_posturl_access](https://api.docs.cpanel.net/specifications/whm.openapi/notifications/icontact-verify_posturl_access.md): This function calls the WHM API 1 send_test_posturl function for
your specified POST notification URLs. Users can specify POST notification
URLs in the Contact Information section of WHM's
Basic WebHost Manager Setup
interface (WHM >> Home >> Server Configuration >> Basic WebHost Manager Setup).

Note:

If the Contact Information section of WHM's
Basic WebHost Manager Setup
interface (Home >> Server Configuration >> Basic WebHost Manager Setup) contains
multiple POST URLs, the function will return an array that contains the results
for each URL.

### Send Pushbullet™ access verification

 - [GET /verify_pushbullet_access](https://api.docs.cpanel.net/specifications/whm.openapi/notifications/icontact-verify_pushbullet_access.md): This function calls the WHM API 1 send_test_pushbullet_note function with the system's specified
Pushbullet™ accounts. You can specify Pushbullet accounts in the Contact Information section of WHM's
Basic WebHost Manager Setup
interface (Home >> Server Configuration >> Basic WebHost Manager Setup).

### Verify Slack® Webhook connection

 - [GET /verify_slack_access](https://api.docs.cpanel.net/specifications/whm.openapi/notifications/icontact-verify_slack_access.md): This function verifies the connection to a Slack® WebHook. You can specify Slack accounts in the Contact Information section of WHM's Basic WebHost Manager Setup  interface ( Home >> Server Configuration >> Basic WebHost Manager Setup ).

## Plugin-Based Features

The plugin-based features module for WHM API 1.

### Check if a plugin feature is ready for use

 - [GET /EcosystemFeatures/is_ready](https://api.docs.cpanel.net/specifications/whm.openapi/plugin-based-features/is_ready.md): This function checks if a plugin-based feature is installed and ready for use on the server.

### Disable feature locally

 - [GET /EcosystemFeatures/local_disable](https://api.docs.cpanel.net/specifications/whm.openapi/plugin-based-features/local_disable.md): This function allows you to locally disable a plugin-based feature.
Only WHM users with root-level privileges can run this function.

### Enable feature locally

 - [GET /EcosystemFeatures/local_enable](https://api.docs.cpanel.net/specifications/whm.openapi/plugin-based-features/local_enable.md): This function allows you to locally enable a plugin-based feature.
Only WHM users with root-level privileges can run this function.

## Security

The Security module for WHM API 1.

### Return Security Advisor results

 - [GET /fetch_security_advice](https://api.docs.cpanel.net/specifications/whm.openapi/security/security-fetch_security_advice.md): This function returns the cPanel Security Advisor's security scan data. It advises you of how to resolve any security issues that it finds.

Note:

  For more information, read the cPanel Security Advisor documentation at the WebPros International, LLC GitHub® repository.

### Return minimum password strength

 - [GET /getminimumpasswordstrengths](https://api.docs.cpanel.net/specifications/whm.openapi/security/security-getminimumpasswordstrengths.md): This function retrieves the minimum password strength for cPanel & WHM accounts.

### Update minimum password strength

 - [GET /setminimumpasswordstrengths](https://api.docs.cpanel.net/specifications/whm.openapi/security/security-setminimumpasswordstrengths.md): This function sets the minimum password strength for cPanel & WHM
accounts.

Note

If you do not specify a value for a parameter, the system will retain the existing setting.

## Server Nodes

Server Administration / Server Nodes

### Repair distributed accounts with data loss

 - [GET /force_dedistribution_from_node](https://api.docs.cpanel.net/specifications/whm.openapi/server-nodes/cpanel-force_dedistribution_from_node.md): This function converts cPanel accounts that use a given
child node
to use the local server instead.

Unlike the WHM API 1 modifyacct API call, this API does not
transfer users’ data from the child node as part of the conversion.
This API is useful for emergency repairs if, for example, a child
node goes permanently offline while accounts still use it.

Warning:

Because this API does not transfer users’ data from the child node,
all converted users will lose data. You should only call this API
as a last resort.

### Return linked remote server node settings

 - [GET /get_linked_server_node](https://api.docs.cpanel.net/specifications/whm.openapi/server-nodes/cpanel-get_linked_server_node.md): This function returns details about a linked remote server node.

### Return linked server node status

 - [GET /get_server_node_status](https://api.docs.cpanel.net/specifications/whm.openapi/server-nodes/cpanel-get_server_node_status.md): This function returns the status of a linked remote server node. It returns
the linked remote server's status with the WHM API 1 version and get_current_profile functions.

### Add linked server node

 - [GET /link_server_node_with_api_token](https://api.docs.cpanel.net/specifications/whm.openapi/server-nodes/cpanel-link_server_node_with_api_token.md): This function links your server to a remote server node. The server uses an API token
to communicate with the remote server node.

Important:

* This function only runs on a
Standard Node profile
server.
* The remote server node must use a version that is the same as or greater than your
server version.
* This function requires the use of an API token. For more information, read our
Guide to API Authentication - API Tokens in WHM
documentation.

### Return all linked server nodes

 - [GET /list_linked_server_nodes](https://api.docs.cpanel.net/specifications/whm.openapi/server-nodes/cpanel-list_linked_server_nodes.md): This function returns a list of all remote server nodes linked to the server. It also provides details about each remote server node.

### Return cPanel accounts with server name and type

 - [GET /list_user_child_nodes](https://api.docs.cpanel.net/specifications/whm.openapi/server-nodes/cpanel-list_user_child_nodes.md): This function returns the system's cPanel accounts and the linked cPanel & WHM server on which they exist.

### Remove linked server node

 - [GET /unlink_server_node](https://api.docs.cpanel.net/specifications/whm.openapi/server-nodes/cpanel-unlink_server_node.md): This function unlinks a remote server node from your server.

Important:

  This function does not unlink mail servers that are currently in use. 
  You must first delete any accounts that use the linked mail server.

### Update linked server node settings

 - [GET /update_linked_server_node](https://api.docs.cpanel.net/specifications/whm.openapi/server-nodes/cpanel-update_linked_server_node.md): This function updates a linked remote cPanel server node.

Important:

This function requires the use of an API token. For more information,
read our Guide to API Authentication - API Tokens in WHM
documentation.

## Server Profiles

Server Administration / Server Profiles

### Return available server profiles

 - [GET /get_available_profiles](https://api.docs.cpanel.net/specifications/whm.openapi/server-profiles/cpanel-get_available_profiles.md): This function returns a list of available server profiles.

### Return server's node profile

 - [GET /get_current_profile](https://api.docs.cpanel.net/specifications/whm.openapi/server-profiles/cpanel-get_current_profile.md): This function returns details about the server's current
cPanel & WHM server profile.

### Return whether server role is enabled

 - [GET /is_role_enabled](https://api.docs.cpanel.net/specifications/whm.openapi/server-profiles/cpanel-is_role_enabled.md): This function checks whether a specific server role is currently enabled
for the server.

For more information about server roles, read our How to Use Server Profiles documentation.

### Update server node profile

 - [GET /start_profile_activation](https://api.docs.cpanel.net/specifications/whm.openapi/server-profiles/cpanel-start_profile_activation.md): This function activates a server profile.

Note:

 If a server profile enables a service, the system will also enable service monitoring. To disable a service's monitoring, use WHM's Service Manager interface (WHM >> Home >> Service Configuration >> Service Manager*).
* For a list of the server's available profiles, use the get_available_profiles function.

## Services

Server Administration / Services

### Update background process stopper

 - [GET /configurebackgroundprocesskiller](https://api.docs.cpanel.net/specifications/whm.openapi/services/sys-configurebackgroundprocesskiller.md): This function configures the server's background process killer.

### Enable or disable a service and its monitoring

 - [GET /configureservice](https://api.docs.cpanel.net/specifications/whm.openapi/services/services-configureservice.md): This function enables or disables a service and its monitoring.

Note:

If the user only possesses the clustering
Access Control List (ACL),
then this function can only act on the named service.

### Enable monitoring for all services

 - [GET /enable_monitor_all_enabled_services](https://api.docs.cpanel.net/specifications/whm.openapi/services/services-enable_monitor_all_enabled_services.md): This function enables monitoring for all enabled services.

### Return service configuration settings

 - [GET /get_service_config](https://api.docs.cpanel.net/specifications/whm.openapi/services/advconfig-get_service_config.md): This function returns a service's configuration settings.

### Return service configuration key

 - [GET /get_service_config_key](https://api.docs.cpanel.net/specifications/whm.openapi/services/advconfig-get_service_config_key.md): This function returns a specific configuration key for a service.

### Return a cPanel account’s service proxying setup

 - [GET /get_service_proxy_backends](https://api.docs.cpanel.net/specifications/whm.openapi/services/accounts-get_service_proxy_backends.md): This function reports a cPanel account's
service proxying
configuration.

### Restart service

 - [GET /restartservice](https://api.docs.cpanel.net/specifications/whm.openapi/services/services-restartservice.md): This function restarts a service, or daemon, on a server.

Note:

If the user only possesses the clustering
Access Control List (ACL)
then this function can only act on the named service.

### Return service status

 - [GET /servicestatus](https://api.docs.cpanel.net/specifications/whm.openapi/services/services-servicestatus.md): This function reports which services (daemons) are enabled, installed, and monitored on your server.

### Update service configuration key

 - [GET /set_service_config_key](https://api.docs.cpanel.net/specifications/whm.openapi/services/advconfig-set_service_config_key.md): This function configures global properties for specific services listed in the /var/cpanel/conf directory.

### Update cPanel account service proxying

 - [GET /set_service_proxy_backends](https://api.docs.cpanel.net/specifications/whm.openapi/services/accounts-set_service_proxy_backends.md): This function lets you configure a cPanel account's
service proxying.

Note:

* If the cPanel account is a distributed account,
and you call this function on the account’s parent node,
the system will propagate the new service proxying to the child node.
* If the Web Server role is active
on the server, this function rebuilds the user's web virtual hosts (vhosts) and restarts
the web server.
* If the system cannot rebuild the user's vhosts, the API call will still succeed. However,
the function returns a failure warning in the metadata.
* To remove an account's service proxying, use the WHM API 1 unset_all_service_proxy_backends
function.

### Remove cPanel account service proxying

 - [GET /unset_all_service_proxy_backends](https://api.docs.cpanel.net/specifications/whm.openapi/services/accounts-unset_all_service_proxy_backends.md): This function removes a cPanel account's
service proxying.

Note:

* If the cPanel account is a distributed account,
this function will also unset all service proxying for the cPanel account on the
child node.
* If the Web Server role is active on
the server, this function rebuilds the cPanel user's web virtual hosts (vhosts) and restarts
the web server.
* If the system cannot rebuild the cPanel user's vhosts, the API call will still succeed.
However, the function returns a failure warning in the metadata.
* To set a service proxying for a cPanel account, use the WHM API 1
set_service_proxy_backends function.

## System Information

Server Administration / System Information

### Return server's drive partition information

 - [GET /getdiskusage](https://api.docs.cpanel.net/specifications/whm.openapi/system-information/sys-getdiskusage.md): This function retrieves the server's drive partition information.

### Return server's hostname

 - [GET /gethostname](https://api.docs.cpanel.net/specifications/whm.openapi/system-information/sys-gethostname.md): This function retrieves the server's hostname.

### Restart server

 - [GET /reboot](https://api.docs.cpanel.net/specifications/whm.openapi/system-information/sys-reboot.md): This function reboots the server.

### Update server's primary virtual host

 - [GET /set_primary_servername](https://api.docs.cpanel.net/specifications/whm.openapi/system-information/httpd-set_primary_servername.md): This function sets the primary domain hosted on an IP address and web server port. The primary domain refers to the virtual host that the server returns when a visitor directly accesses the IP address.

For example, if both example1.com and example2.com are name-based virtual hosts on IP address 192.168.0.1, the primary virtual host appears when the visitor accesses the http://192.168.0.1/ location.

Important:

When you disable the Web Server role, the system disables this function.

### Update server's hostname

 - [GET /sethostname](https://api.docs.cpanel.net/specifications/whm.openapi/system-information/hostname-sethostname.md): This function changes the server's hostname.

Warning:

* Do not select a hostname that begins with www or a number, or a
hostname that ends with a hyphen (-) character.
* You must use a fully-qualified domain name (FQDN) that contains two periods
(for example, hostname.example.com).
* Do not choose a hostname that a cPanel account on your server will use.
* Do not choose a potential service subdomain (proxy subdomain) as a hostname
(for example, cpanel.example.com or whm.example.com).

Important:

If you update your hostname, the system blocks user access to cPanel's Calendars and Contacts interface (cPanel >> Home >> Email >> Calendars and Contacts).

The system restores access to this interface after the hostname update finishes.
For more information, read our
Interface Lock Scripts
documentation.

Note:

Whenever you change the server's hostname, you must use one of the following methods:
  * Use WHM's
  Change Hostname
  interface (WHM >> Home >> Networking Setup >> Change Hostname).
  * Call WHM API 1's sethostname function.
  * Run the
  /usr/local/cpanel/bin/set_hostname utility
  as the root user.
These methods ensure that all of the necessary system and service changes occur.

### Return whether system needs reboot

 - [GET /system_needs_reboot](https://api.docs.cpanel.net/specifications/whm.openapi/system-information/applicationversions-system_needs_reboot.md): This function determines if your system requires a reboot to apply quotas, software package updates, or kernel updates.

Important:

This function cannot detect whether your system needs a reboot if you use cPanel & WHM inside of a Linux Container (LXC).

### Return system load average

 - [GET /systemloadavg](https://api.docs.cpanel.net/specifications/whm.openapi/system-information/cpanel-systemloadavg.md): This function retrieves the system's load average.

Note:

The values the function returns represent a percentage of the CPU's processor capacity.

### Return server's hostname

 - [GET /wp_dashboard_get_hostname](https://api.docs.cpanel.net/specifications/whm.openapi/system-information/wpdashboard-wp_dashboard_get_hostname.md): This function retrieves the server's hostname. WebPros Dashboard uses this function to discover the WHM API endpoint.

## Updates

The Updates module for WHM API 1.

### Save EULA acceptance

 - [GET /accept_eula](https://api.docs.cpanel.net/specifications/whm.openapi/updates/eula-accept_eula.md): This function records acceptance of cPanel & WHM's legal terms. To do this, the function creates a touchfile in the /var/cpanel/activate/ directory and writes an acceptance audit record to /var/cpanel/activate/eula_acceptance.json. The audit record captures the accepting user, timestamp, remote IP address, agreement version, and agreement URLs.

Important:

  Server owners must accept these agreements before they use cPanel & WHM.

### Return cPanel & WHM available versions

 - [GET /get_available_tiers](https://api.docs.cpanel.net/specifications/whm.openapi/updates/sys-get_available_tiers.md): This function lists of each available version of cPanel & WHM, and each
version's latest maintenance release. This function also lists the cPanel & WHM
version for each
release tier.

### Return Long Term Support expiration status

 - [GET /get_current_lts_expiration_status](https://api.docs.cpanel.net/specifications/whm.openapi/updates/update-get_current_lts_expiration_status.md): This function determines whether a branch's Long-Term Support (LTS) version expires within three months. For more information about LTS, read our cPanel Long-Term Support documentation.

### Return Long Term Support status for all versions

 - [GET /get_lts_wexpire](https://api.docs.cpanel.net/specifications/whm.openapi/updates/update-get_lts_wexpire.md): This function parses the /etc/cpanel/TIERS.json file and returns whether a branch qualifies for Long-Term Support (LTS). For more information about LTS, read our cPanel Long-Term Support documentation.

### Return if server uses the default update version

 - [GET /get_update_availability](https://api.docs.cpanel.net/specifications/whm.openapi/updates/update-get_update_availability.md): This function checks whether your server uses the
latest version of cPanel & WHM for your release tier.

### Return third-party software versions

 - [GET /installed_versions](https://api.docs.cpanel.net/specifications/whm.openapi/updates/applicationversions-installed_versions.md): This function lists the versions of third-party software that ship with cPanel & WHM.

### Update Feature Showcase

 - [GET /manage_features](https://api.docs.cpanel.net/specifications/whm.openapi/updates/managefeatures-manage_features.md): This function lists and manages items in the
Feature Showcase.

Note:

* This function's output changes, depending on which value you pass to the action parameter.
* The example in this document displays the function's return when the action
parameter value is info.

### Update cPanel & WHM update frequency

 - [GET /set_cpanel_updates](https://api.docs.cpanel.net/specifications/whm.openapi/updates/sys-set_cpanel_updates.md): This function sets the frequency of cPanel & WHM updates.

### Update cPanel & WHM release tier

 - [GET /set_tier](https://api.docs.cpanel.net/specifications/whm.openapi/updates/sys-set_tier.md): This function sets a cPanel & WHM server to a specified support tier.

### Start cPanel & WHM update

 - [GET /start_cpanel_update](https://api.docs.cpanel.net/specifications/whm.openapi/updates/cpanel-start_cpanel_update.md): This function starts an update of cPanel & WHM.

### Update software update behavior

 - [POST /update_updateconf](https://api.docs.cpanel.net/specifications/whm.openapi/updates/cpupdate-update_updateconf.md): This function modifies a server's /etc/cpupdate.conf file. This file controls how the server handles software updates and upgrades.

Important:

You must have the root level Access Control List (ACL) privilege to execute this function.

### Return cPanel & WHM version

 - [GET /version](https://api.docs.cpanel.net/specifications/whm.openapi/updates/cpanel-version.md): This function returns the cPanel & WHM version that a server runs.

## SSL

The SSL module for WHM API 1.

### Disable AutoSSL for domain

 - [GET /add_autossl_user_excluded_domains](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-add_autossl_user_excluded_domains.md): This function disables AutoSSL for an account's specified domains.

### Disable AutoSSL

 - [GET /disable_autossl](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-disable_autossl.md): This function disables the AutoSSL feature.

### Return AutoSSL check script cron entry

 - [GET /get_autossl_check_schedule](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-get_autossl_check_schedule.md): This function returns the cron entry for the autossl_check.pl AutoSSL certificate check script.

### Return AutoSSL log file's contents

 - [GET /get_autossl_log](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-get_autossl_log.md): This function returns the contents of an AutoSSL log file.

### Return AutoSSL log files

 - [GET /get_autossl_logs_catalog](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-get_autossl_logs_catalog.md): This function lists the AutoSSL feature's log files.

### Return current user's AutoSSL metadata

 - [GET /get_autossl_metadata](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-get_autossl_metadata.md): This function retrieves values for the currently authenticated user's AutoSSL's metadata keys.

### Return available AutoSSL providers

 - [GET /get_autossl_providers](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-get_autossl_providers.md): This function lists available AutoSSL providers on the server.

### Return all AutoSSL-excluded domains

 - [GET /get_autossl_user_excluded_domains](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-get_autossl_user_excluded_domains.md): This function lists an account's domains the system excludes from AutoSSL.

### Remove AutoSSL for domain

 - [GET /remove_autossl_user_excluded_domains](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-remove_autossl_user_excluded_domains.md): This function enables AutoSSL for an account's specified domains.

### Restore AutoSSL registration

 - [GET /reset_autossl_provider](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-reset_autossl_provider.md): This function resets the AutoSSL registration with a remote AutoSSL provider.

### Update AutoSSL metadata

 - [GET /set_autossl_metadata](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-set_autossl_metadata.md): This function sets values for AutoSSL's metadata keys. This allows you to replace certificates that AutoSSL did not issue and toggle other AutoSSL notifications.

Note:

We recommend that you use the WHM API 1 set_autossl_metadata_key function instead.

Information:

* You can enter more than one key and value pair in the metadata_json JSON hash.
* Any keys that you do not explicitly define will adopt the system's default value.

### Update AutoSSL metadata via JSON

 - [GET /set_autossl_metadata_key](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-set_autossl_metadata_key.md): This function sets values for AutoSSL's metadata keys. This allows you to replace certificates that AutoSSL did not issue and toggle other AutoSSL notifications.

Note:

  * This function performs the same actions as the WHM API 1 set_autossl_metadata function. However, this function accepts a single key and value pair as a parameter instead of JSON. Additionally, you can only enter one key and value pair per function call.
  * This function only accepts a single key and value pair. To set all values, use the WHM API 1 set_autossl_metadata function or make multiple calls to this function.

### Update the AutoSSL provider

 - [GET /set_autossl_provider](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-set_autossl_provider.md): This function sets the provider that the AutoSSL feature uses.

Note:

  To disable AutoSSL, call WHM API 1's disable_autossl function.

### Disable AutoSSL for domain

 - [GET /set_autossl_user_excluded_domains](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-set_autossl_user_excluded_domains.md): This function disables AutoSSL for a specific domain on an account.

Warning:

  This function replaces the list of any previously-excluded domains. To add a domain to the list of the user's excluded domains, use the add_autossl_user_excluded_domains function.

### Start AutoSSL check for all cPanel accounts

 - [GET /start_autossl_check_for_all_users](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-start_autossl_check_for_all_users.md): This function performs an AutoSSL certificate check in the background for all cPanel users that have the feature enabled.

### Start cPanel account AutoSSL check

 - [GET /start_autossl_check_for_one_user](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-start_autossl_check_for_one_user.md): This function performs an AutoSSL certificate check in the background for a cPanel user.

### Delete SSL vhost

 - [GET /delete_ssl_vhost](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-settings/ssl-delete_ssl_vhost.md): This function deletes the SSL virtual host.

### Add SSL certificate to installation queue

 - [GET /enqueue_deferred_ssl_installations](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-settings/ssl-enqueue_deferred_ssl_installations.md): This function adds SSL certificates to the installation queue. This allows you to
defer and batch SSL certificate installation.

Important:

You must enter the same quantity of username, cab, crt, key, and vhost_name
parameters. For example, to add three certificates to the installation queue, enter the
username parameter three times, then enter three cab, crt, key, and vhost_name
parameters.

### Return cPanel account FQDN certificate information

 - [GET /fetch_ssl_certificates_for_fqdns](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-settings/ssl-fetch_ssl_certificates_for_fqdns.md): This function retrieves the certificate information for all fully qualified domain names (FQDNs) that the account owns.

### Return server vhosts and SSL certificates

 - [GET /fetch_ssl_vhosts](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-settings/ssl-fetch_ssl_vhosts.md): This function lists the server's virtual hosts (vhosts) and their installed SSL certificates.

### Return all SSL certificate components on vhost

 - [GET /fetch_vhost_ssl_components](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-settings/ssl-fetch_vhost_ssl_components.md): This function lists the components of each SSL certificate on the server's virtual hosts.

Warning:

* On most servers, this function returns a large amount of output. We strongly
recommend that you filter and
sort the output.
* The following example uses the filter and sort options:

  https://hostname.example.com:2087/cpsess##########/json-api/fetch_vhost_ssl_components?api.version=1&api.filter.a.field=servername&api.filter.a.arg0=servername.com&api.filter.a.type=eq&api.filter.enable=1&api.sort.enable=1&api.sort.a.field=servername

### Return SSL certificate information

 - [GET /fetchcrtinfo](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-settings/ssl-fetchcrtinfo.md): This function retrieves information about a certificate.

### Return cPanel account SSL certificate information

 - [GET /fetchsslinfo](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-settings/ssl-fetchsslinfo.md): This function retrieves information about SSL certificates that you could install for a user. This function does not provide information about the currently installed certificates.

### Return domain DCV issues

 - [GET /get_autossl_problems_for_domain](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-settings/ssl-get_autossl_problems_for_domain.md): This function returns a list of objects that contains the latest Domain Control Validation (DCV) problems for a specific domain.

### Return account DCV issues

 - [GET /get_autossl_problems_for_user](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-settings/ssl-get_autossl_problems_for_user.md): This function returns the list of the latest Domain Control Validation (DCV) problems for a cPanel user.

### Return SSL-encrypted domain for service access

 - [GET /get_best_ssldomain_for_service](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-settings/ssl-get_best_ssldomain_for_service.md): This function retrieves the most appropriate SSL-encrypted domain to use to access a service.

### Install SSL certificate for service

 - [GET /install_service_ssl_certificate](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-settings/ssl-install_service_ssl_certificate.md): This function installs a new SSL certificate on a service.

Important:

You must restart the selected service after you install a new SSL certificate.

### Install SSL certificate

 - [GET /installssl](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-settings/ssl-installssl.md): This function installs an SSL certificate.

### Return system services and associated certificates

 - [GET /fetch_service_ssl_components](https://api.docs.cpanel.net/specifications/whm.openapi/ssl-server-settings/ssl-fetch_service_ssl_components.md): This function lists the system's services and their associated certificates.

### Create self-signed SSL certificate

 - [GET /generatessl](https://api.docs.cpanel.net/specifications/whm.openapi/ssl-server-settings/ssl-generatessl.md): This function generates a private key file, a certificate signing request (CSR), and a self-signed SSL certificate.

### Return domains with installed SSL certificates

 - [GET /listcrts](https://api.docs.cpanel.net/specifications/whm.openapi/ssl-server-settings/ssl-listcrts.md): This function lists the server's domains with installed SSL certificates.

### Rebuild installed SSL database (no-op)

 - [GET /rebuildinstalledssldb](https://api.docs.cpanel.net/specifications/whm.openapi/ssl-server-settings/ssl-rebuildinstalledssldb.md): This function is a no-op and performs no actions.

Note:

This function previously rebuilt the database of installed SSL certificates,
but this operation is no longer necessary and the function always succeeds
without taking any action.

### Update SSL certificate users database

 - [GET /rebuilduserssldb](https://api.docs.cpanel.net/specifications/whm.openapi/ssl-server-settings/ssl-rebuilduserssldb.md): This function rebuilds the database of SSL certificate users.

### Create self-signed SSL certificate for service

 - [GET /reset_service_ssl_certificate](https://api.docs.cpanel.net/specifications/whm.openapi/ssl-server-settings/ssl-reset_service_ssl_certificate.md): This function regenerates a self-signed SSL certificate and assigns it to a service.

## Auto-Generated Certificates

SSL Certificates / Auto-Generated Certificates

### Disable AutoSSL for domain

 - [GET /add_autossl_user_excluded_domains](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-add_autossl_user_excluded_domains.md): This function disables AutoSSL for an account's specified domains.

### Disable AutoSSL

 - [GET /disable_autossl](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-disable_autossl.md): This function disables the AutoSSL feature.

### Return AutoSSL check script cron entry

 - [GET /get_autossl_check_schedule](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-get_autossl_check_schedule.md): This function returns the cron entry for the autossl_check.pl AutoSSL certificate check script.

### Return AutoSSL log file's contents

 - [GET /get_autossl_log](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-get_autossl_log.md): This function returns the contents of an AutoSSL log file.

### Return AutoSSL log files

 - [GET /get_autossl_logs_catalog](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-get_autossl_logs_catalog.md): This function lists the AutoSSL feature's log files.

### Return current user's AutoSSL metadata

 - [GET /get_autossl_metadata](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-get_autossl_metadata.md): This function retrieves values for the currently authenticated user's AutoSSL's metadata keys.

### Return available AutoSSL providers

 - [GET /get_autossl_providers](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-get_autossl_providers.md): This function lists available AutoSSL providers on the server.

### Return all AutoSSL-excluded domains

 - [GET /get_autossl_user_excluded_domains](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-get_autossl_user_excluded_domains.md): This function lists an account's domains the system excludes from AutoSSL.

### Remove AutoSSL for domain

 - [GET /remove_autossl_user_excluded_domains](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-remove_autossl_user_excluded_domains.md): This function enables AutoSSL for an account's specified domains.

### Restore AutoSSL registration

 - [GET /reset_autossl_provider](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-reset_autossl_provider.md): This function resets the AutoSSL registration with a remote AutoSSL provider.

### Update AutoSSL metadata

 - [GET /set_autossl_metadata](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-set_autossl_metadata.md): This function sets values for AutoSSL's metadata keys. This allows you to replace certificates that AutoSSL did not issue and toggle other AutoSSL notifications.

Note:

We recommend that you use the WHM API 1 set_autossl_metadata_key function instead.

Information:

* You can enter more than one key and value pair in the metadata_json JSON hash.
* Any keys that you do not explicitly define will adopt the system's default value.

### Update AutoSSL metadata via JSON

 - [GET /set_autossl_metadata_key](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-set_autossl_metadata_key.md): This function sets values for AutoSSL's metadata keys. This allows you to replace certificates that AutoSSL did not issue and toggle other AutoSSL notifications.

Note:

  * This function performs the same actions as the WHM API 1 set_autossl_metadata function. However, this function accepts a single key and value pair as a parameter instead of JSON. Additionally, you can only enter one key and value pair per function call.
  * This function only accepts a single key and value pair. To set all values, use the WHM API 1 set_autossl_metadata function or make multiple calls to this function.

### Update the AutoSSL provider

 - [GET /set_autossl_provider](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-set_autossl_provider.md): This function sets the provider that the AutoSSL feature uses.

Note:

  To disable AutoSSL, call WHM API 1's disable_autossl function.

### Disable AutoSSL for domain

 - [GET /set_autossl_user_excluded_domains](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-set_autossl_user_excluded_domains.md): This function disables AutoSSL for a specific domain on an account.

Warning:

  This function replaces the list of any previously-excluded domains. To add a domain to the list of the user's excluded domains, use the add_autossl_user_excluded_domains function.

### Start AutoSSL check for all cPanel accounts

 - [GET /start_autossl_check_for_all_users](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-start_autossl_check_for_all_users.md): This function performs an AutoSSL certificate check in the background for all cPanel users that have the feature enabled.

### Start cPanel account AutoSSL check

 - [GET /start_autossl_check_for_one_user](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-start_autossl_check_for_one_user.md): This function performs an AutoSSL certificate check in the background for a cPanel user.

## cPanel Account Settings

SSL Certificates / cPanel Account Settings

### Delete SSL vhost

 - [GET /delete_ssl_vhost](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-settings/ssl-delete_ssl_vhost.md): This function deletes the SSL virtual host.

### Add SSL certificate to installation queue

 - [GET /enqueue_deferred_ssl_installations](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-settings/ssl-enqueue_deferred_ssl_installations.md): This function adds SSL certificates to the installation queue. This allows you to
defer and batch SSL certificate installation.

Important:

You must enter the same quantity of username, cab, crt, key, and vhost_name
parameters. For example, to add three certificates to the installation queue, enter the
username parameter three times, then enter three cab, crt, key, and vhost_name
parameters.

### Return cPanel account FQDN certificate information

 - [GET /fetch_ssl_certificates_for_fqdns](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-settings/ssl-fetch_ssl_certificates_for_fqdns.md): This function retrieves the certificate information for all fully qualified domain names (FQDNs) that the account owns.

### Return server vhosts and SSL certificates

 - [GET /fetch_ssl_vhosts](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-settings/ssl-fetch_ssl_vhosts.md): This function lists the server's virtual hosts (vhosts) and their installed SSL certificates.

### Return all SSL certificate components on vhost

 - [GET /fetch_vhost_ssl_components](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-settings/ssl-fetch_vhost_ssl_components.md): This function lists the components of each SSL certificate on the server's virtual hosts.

Warning:

* On most servers, this function returns a large amount of output. We strongly
recommend that you filter and
sort the output.
* The following example uses the filter and sort options:

  https://hostname.example.com:2087/cpsess##########/json-api/fetch_vhost_ssl_components?api.version=1&api.filter.a.field=servername&api.filter.a.arg0=servername.com&api.filter.a.type=eq&api.filter.enable=1&api.sort.enable=1&api.sort.a.field=servername

### Return SSL certificate information

 - [GET /fetchcrtinfo](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-settings/ssl-fetchcrtinfo.md): This function retrieves information about a certificate.

### Return cPanel account SSL certificate information

 - [GET /fetchsslinfo](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-settings/ssl-fetchsslinfo.md): This function retrieves information about SSL certificates that you could install for a user. This function does not provide information about the currently installed certificates.

### Return domain DCV issues

 - [GET /get_autossl_problems_for_domain](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-settings/ssl-get_autossl_problems_for_domain.md): This function returns a list of objects that contains the latest Domain Control Validation (DCV) problems for a specific domain.

### Return account DCV issues

 - [GET /get_autossl_problems_for_user](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-settings/ssl-get_autossl_problems_for_user.md): This function returns the list of the latest Domain Control Validation (DCV) problems for a cPanel user.

### Return SSL-encrypted domain for service access

 - [GET /get_best_ssldomain_for_service](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-settings/ssl-get_best_ssldomain_for_service.md): This function retrieves the most appropriate SSL-encrypted domain to use to access a service.

### Install SSL certificate for service

 - [GET /install_service_ssl_certificate](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-settings/ssl-install_service_ssl_certificate.md): This function installs a new SSL certificate on a service.

Important:

You must restart the selected service after you install a new SSL certificate.

### Install SSL certificate

 - [GET /installssl](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-settings/ssl-installssl.md): This function installs an SSL certificate.

## SSL Server Settings

SSL Certificates / SSL Server Settings

### Return system services and associated certificates

 - [GET /fetch_service_ssl_components](https://api.docs.cpanel.net/specifications/whm.openapi/ssl-server-settings/ssl-fetch_service_ssl_components.md): This function lists the system's services and their associated certificates.

### Create self-signed SSL certificate

 - [GET /generatessl](https://api.docs.cpanel.net/specifications/whm.openapi/ssl-server-settings/ssl-generatessl.md): This function generates a private key file, a certificate signing request (CSR), and a self-signed SSL certificate.

### Return domains with installed SSL certificates

 - [GET /listcrts](https://api.docs.cpanel.net/specifications/whm.openapi/ssl-server-settings/ssl-listcrts.md): This function lists the server's domains with installed SSL certificates.

### Rebuild installed SSL database (no-op)

 - [GET /rebuildinstalledssldb](https://api.docs.cpanel.net/specifications/whm.openapi/ssl-server-settings/ssl-rebuildinstalledssldb.md): This function is a no-op and performs no actions.

Note:

This function previously rebuilt the database of installed SSL certificates,
but this operation is no longer necessary and the function always succeeds
without taking any action.

### Update SSL certificate users database

 - [GET /rebuilduserssldb](https://api.docs.cpanel.net/specifications/whm.openapi/ssl-server-settings/ssl-rebuilduserssldb.md): This function rebuilds the database of SSL certificate users.

### Create self-signed SSL certificate for service

 - [GET /reset_service_ssl_certificate](https://api.docs.cpanel.net/specifications/whm.openapi/ssl-server-settings/ssl-reset_service_ssl_certificate.md): This function regenerates a self-signed SSL certificate and assigns it to a service.

## RPM

The RPM module for WHM API 1.

### Install WHM plugin RPM package

 - [GET /install_rpm_plugin](https://api.docs.cpanel.net/specifications/whm.openapi/install-or-uninstall-package/plugins-install_rpm_plugin.md): This function starts a plugin installation. The installation runs as a background process.

### Start RPM package installation, update, or removal

 - [GET /package_manager_submit_actions](https://api.docs.cpanel.net/specifications/whm.openapi/install-or-uninstall-package/packagemanager-package_manager_submit_actions.md): This function installs, upgrades, or uninstalls RPM packages.

Note:

The system queues this function's actions to run as background tasks. The actions may
require additional time to finish.

### Start RPM package upgrade

 - [GET /package_manager_upgrade](https://api.docs.cpanel.net/specifications/whm.openapi/install-or-uninstall-package/packagemanager-package_manager_upgrade.md): This function downloads and installs package updates on the server.

### Uninstall WHM plugin RPM package

 - [GET /uninstall_rpm_plugin](https://api.docs.cpanel.net/specifications/whm.openapi/install-or-uninstall-package/plugins-uninstall_rpm_plugin.md): This function starts the uninstall process for a plugin. The uninstall process runs as a background process.

### Return available RPM packages

 - [GET /get_rpm_version_data](https://api.docs.cpanel.net/specifications/whm.openapi/list-package-information/rpmversions-get_rpm_version_data.md): This function lists a key's available RPMs. For more information, read our
rpm.versions system
documentation.

### Return required but uninstalled server RPM package

 - [GET /list_rpms](https://api.docs.cpanel.net/specifications/whm.openapi/list-package-information/rpmversions-list_rpms.md): This function lists RPMs that the server needs, but the server owner has not yet installed.
When you call this function, it performs the same actions as the following command:

/usr/local/cpanel/scripts/check_cpanel_pkgs --list-only --targets[target]

For more information, read our
rpm.versions system
documentation.

### Return available RPM packages information

 - [GET /package_manager_get_package_info](https://api.docs.cpanel.net/specifications/whm.openapi/list-package-information/packagemanager-package_manager_get_package_info.md): This function retrieves information about the system's available
RPM packages.

Note:

You must use either the ns or the package parameters.

### Return RPM package update status

 - [GET /package_manager_is_performing_actions](https://api.docs.cpanel.net/specifications/whm.openapi/list-package-information/packagemanager-package_manager_is_performing_actions.md): This function checks the activity of the process that you executed in the WHM API 1 package_manager_submit_actions function.

### Return available RPM packages

 - [GET /package_manager_list_packages](https://api.docs.cpanel.net/specifications/whm.openapi/list-package-information/packagemanager-package_manager_list_packages.md): This function lists information about the system's available RPM packages.

### Return possible RPM package changes

 - [GET /package_manager_resolve_actions](https://api.docs.cpanel.net/specifications/whm.openapi/list-package-information/packagemanager-package_manager_resolve_actions.md): This function determines the actions that would result from the provisioning of a specified RPM package or packages.

### Remove rpm.versions system configuration

 - [GET /delete_rpm_version](https://api.docs.cpanel.net/specifications/whm.openapi/package-manager-settings/rpmversions-delete_rpm_version.md): This function removes RPM data. When you call this function, it performs the same
actions as the following command:

/usr/local/cpanel/scripts/update_local_rpm_versions --del section.key value

For more information, read our
rpm.versions system
documentation.

Note:

After you call this function, we strongly recommend that you run the
/usr/local/cpanel/scripts/check_cpanel_pkgs script.

### Update rpm.versions system configuration

 - [GET /edit_rpm_version](https://api.docs.cpanel.net/specifications/whm.openapi/package-manager-settings/rpmversions-edit_rpm_version.md): This function edits RPM data. When you call this function, it performs the same actions
as the following command:

/usr/local/cpanel/scripts/update_local_rpm_versions --edit section.key value

For more information, read our
rpm.versions system
documentation.

Note:

After you call this function, we strongly recommend that you run the
/usr/local/cpanel/scripts/check_cpanel_pkgs script.

### Repair RPM management yum cache issues

 - [GET /package_manager_fixcache](https://api.docs.cpanel.net/specifications/whm.openapi/package-manager-settings/packagemanager-package_manager_fixcache.md): This function attempts to repair yum cache issues.

### Return RPM management build log

 - [GET /package_manager_get_build_log](https://api.docs.cpanel.net/specifications/whm.openapi/package-manager-settings/packagemanager-package_manager_get_build_log.md): This function returns build log content.

## Install or Uninstall Package

System Package Management / Install or Uninstall Package

### Install WHM plugin RPM package

 - [GET /install_rpm_plugin](https://api.docs.cpanel.net/specifications/whm.openapi/install-or-uninstall-package/plugins-install_rpm_plugin.md): This function starts a plugin installation. The installation runs as a background process.

### Start RPM package installation, update, or removal

 - [GET /package_manager_submit_actions](https://api.docs.cpanel.net/specifications/whm.openapi/install-or-uninstall-package/packagemanager-package_manager_submit_actions.md): This function installs, upgrades, or uninstalls RPM packages.

Note:

The system queues this function's actions to run as background tasks. The actions may
require additional time to finish.

### Start RPM package upgrade

 - [GET /package_manager_upgrade](https://api.docs.cpanel.net/specifications/whm.openapi/install-or-uninstall-package/packagemanager-package_manager_upgrade.md): This function downloads and installs package updates on the server.

### Uninstall WHM plugin RPM package

 - [GET /uninstall_rpm_plugin](https://api.docs.cpanel.net/specifications/whm.openapi/install-or-uninstall-package/plugins-uninstall_rpm_plugin.md): This function starts the uninstall process for a plugin. The uninstall process runs as a background process.

## List Package Information

System Package Management / List Package Information

### Return available RPM packages

 - [GET /get_rpm_version_data](https://api.docs.cpanel.net/specifications/whm.openapi/list-package-information/rpmversions-get_rpm_version_data.md): This function lists a key's available RPMs. For more information, read our
rpm.versions system
documentation.

### Return required but uninstalled server RPM package

 - [GET /list_rpms](https://api.docs.cpanel.net/specifications/whm.openapi/list-package-information/rpmversions-list_rpms.md): This function lists RPMs that the server needs, but the server owner has not yet installed.
When you call this function, it performs the same actions as the following command:

/usr/local/cpanel/scripts/check_cpanel_pkgs --list-only --targets[target]

For more information, read our
rpm.versions system
documentation.

### Return available RPM packages information

 - [GET /package_manager_get_package_info](https://api.docs.cpanel.net/specifications/whm.openapi/list-package-information/packagemanager-package_manager_get_package_info.md): This function retrieves information about the system's available
RPM packages.

Note:

You must use either the ns or the package parameters.

### Return RPM package update status

 - [GET /package_manager_is_performing_actions](https://api.docs.cpanel.net/specifications/whm.openapi/list-package-information/packagemanager-package_manager_is_performing_actions.md): This function checks the activity of the process that you executed in the WHM API 1 package_manager_submit_actions function.

### Return available RPM packages

 - [GET /package_manager_list_packages](https://api.docs.cpanel.net/specifications/whm.openapi/list-package-information/packagemanager-package_manager_list_packages.md): This function lists information about the system's available RPM packages.

### Return possible RPM package changes

 - [GET /package_manager_resolve_actions](https://api.docs.cpanel.net/specifications/whm.openapi/list-package-information/packagemanager-package_manager_resolve_actions.md): This function determines the actions that would result from the provisioning of a specified RPM package or packages.

## Package Manager Settings

System Package Management / Package Manager Settings

### Remove rpm.versions system configuration

 - [GET /delete_rpm_version](https://api.docs.cpanel.net/specifications/whm.openapi/package-manager-settings/rpmversions-delete_rpm_version.md): This function removes RPM data. When you call this function, it performs the same
actions as the following command:

/usr/local/cpanel/scripts/update_local_rpm_versions --del section.key value

For more information, read our
rpm.versions system
documentation.

Note:

After you call this function, we strongly recommend that you run the
/usr/local/cpanel/scripts/check_cpanel_pkgs script.

### Update rpm.versions system configuration

 - [GET /edit_rpm_version](https://api.docs.cpanel.net/specifications/whm.openapi/package-manager-settings/rpmversions-edit_rpm_version.md): This function edits RPM data. When you call this function, it performs the same actions
as the following command:

/usr/local/cpanel/scripts/update_local_rpm_versions --edit section.key value

For more information, read our
rpm.versions system
documentation.

Note:

After you call this function, we strongly recommend that you run the
/usr/local/cpanel/scripts/check_cpanel_pkgs script.

### Repair RPM management yum cache issues

 - [GET /package_manager_fixcache](https://api.docs.cpanel.net/specifications/whm.openapi/package-manager-settings/packagemanager-package_manager_fixcache.md): This function attempts to repair yum cache issues.

### Return RPM management build log

 - [GET /package_manager_get_build_log](https://api.docs.cpanel.net/specifications/whm.openapi/package-manager-settings/packagemanager-package_manager_get_build_log.md): This function returns build log content.

## Transfers

The Transfers module for WHM API 1.

### Stop transfer session

 - [GET /abort_transfer_session](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-transfer/transfers-abort_transfer_session.md): This function aborts an active transfer session.

### Create remote server transfer session as root user

 - [GET /create_remote_root_transfer_session](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-transfer/transfers-create_remote_root_transfer_session.md): This function creates a transfer session as the root user.

Important:

  For information about the ports that cPanel & WHM uses, read our How to Configure Your Firewall for cPanel Services documentation.

Note:

  For more information about how this function works with other functions in the transfer and restore process, read our Guide to Transfer and Restore API Functions documentation.

### Authentication
There are several methods that you can use to authenticate a transfer session with the remote server:

#### Authenticate as root
If you use SSH to authenticate as the root user, the remote server's SSH must accept root logins. For more information read OpenSSH's sshd_config documentation.

The following table displays the correct parameters and values for this authentication method:

| Parameter | Value |
|-|-|
| user | root |
| password | root's password |

You can also use an SSH public key to authenticate the root user. If the SSH public key is encrypted, include the SSH key's passphrase.

The following table displays the correct parameters and values for this authentication method:

| Parameter | Value if the SSH Key is not encrypted | Value if the SSH Key is encrypted |
|-|-|-|
| user | root | root |
| sshkey_name | The root user's SSH key. | The root user's SSH key. |
| sshkey_passphrase | (none) | The root user's SSH key passphrase. |

#### Authenticate as a user
Many server administrators do not permit direct root logins via SSH on their servers.
* If the remote server forbids root logins, you must use another user and their password on the remote server, and then escalate to the root user. For more information read OpenSSH's sshd_config documentation.
 If the system administrator used WHM's Manage Wheel Group Users interface (WHM >> Home >> Security Center >> Manage Wheel Group Users*) to grant the user su access, then you will need to specify su and the root password.
* If the user has sudo access, you do not need the root password.

The following table displays the correct parameters and values for this authentication method:

| Parameter | Value if the user has sudo access | Value if the user has su access |
|-|-|-|
| user | The username. | The username. |
| password | The user's password. | The user's password. |
| root_escalation_method | sudo | su |
| root_password | (none) | The root user's password. |

You can also use an SSH public key instead of a password to authenticate that user. If the SSH public key is encrypted, include the SSH key's passphrase.

The following table displays the correct parameters and values for this authentication method:

| Parameter | sudo | su |
|-|-|-|
| user | The username. | The username. |
| sshkey_name | The user's SSH key. | The user's SSH key. |
| sshkey_passphrase (If encrypted) | The user's SSH key passphrase. | The user's SSH key passphrase. |
| root_escalation_method | sudo | su |
| root_password | (none) | The root user's password. |

### Create remote server transfer session

 - [GET /create_remote_user_transfer_session](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-transfer/transfers-create_remote_user_transfer_session.md): This function creates a transfer session with a non-root user to a remote server.

Important:

* The source and target servers must be able to communicate over port 2087 to use this feature.
* The source and target servers must also be able to communicate over the port that your servers use for SSH connections.
* For more information about the ports that cPanel & WHM uses, read our How to Configure Your Firewall for cPanel & WHM Services documentation.

Note:

For more information about how this function works with other functions in the transfer and restore process, read our Guide to Transfer and Restore API Functions documentation.

### Add module to transfer session

 - [GET /enqueue_transfer_item](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-transfer/transfers-enqueue_transfer_item.md): This function adds a transfer session to a queue. For more information about how this function works with other
functions in the transfer and restore process, read our
Guide to Transfer and Restore API Functions documentation.

Important:

The module parameter determines which additional parameters to use with the function.

### Suspend active transfer session

 - [GET /pause_transfer_session](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-transfer/transfers-pause_transfer_session.md): This function pauses an active transfer session.

Note:

For more information about how this function works with other functions in the transfer and restore process, read our Guide to Transfer and Restore API Functions documentation.

### Start or restart transfer session

 - [GET /start_transfer_session](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-transfer/transfers-start_transfer_session.md): This function starts or restarts a transfer session.

Note:

  For more information about how this function works with other functions in the transfer and restore process, read our Guide to Transfer and Restore API Functions documentation.

### Remove cPanel account's archives

 - [GET /delete_account_archives](https://api.docs.cpanel.net/specifications/whm.openapi/transfer-configuration/transfers-delete_account_archives.md): This function removes a cPanel user account's archives.

### Validate remote server's SSH credentials

 - [GET /remote_basic_credential_check](https://api.docs.cpanel.net/specifications/whm.openapi/transfer-configuration/ssh-remote_basic_credential_check.md): This function checks the SSH credentials on the remote server.

### Authentication
There are several methods that you can use to authenticate a transfer session with the remote server.

#### PermitRootLogin=Yes
The simplest authentication method is to use the root user and password. To do this, the sshd_config file on the remote server must contain the following value: PermitRootLogin=Yes

The following table displays the correct parameters and values for this authentication method:

| Parameter | Value |
|-|-|
| user | root |
| password | root's password. |

You can also use the SSH Public Key to authenticate the root user. If the SSH Public Key is encrypted, include the SSH Key's passphrase.

The following table displays the correct parameters and values for this authentication method:

| Parameter | Value if the SSH Key is not encrypted | Value if the SSH Key is encrypted |
|-|-|-|
| user | root | root |
| sshkey_name | root's SSH key name. | root's SSH key name. |
| sshkey_passphrase | (none) | root's SSH key passphrase. |

#### PermitRootLogin=No
Many server administrators do not permit direct root logins on their servers.
* If the remote server contains PermitRootLogin=No in the sshd_config file, then you must use another user and their password on the remote server, and then escalate to root.
 If the system administrator used WHM's Manage Wheel Group Users interface (WHM >> Home >> Security Center >> Manage Wheel Group Users*) to grant the user su access, then you will need to specify su and the root password.
* If the user has sudo access, you do not need the root password.

The following table displays the correct parameters and values for this authentication method:

| Parameter | Value if the user has sudo access | Value if the user has su access |
|-|-|-|
| user | The user's username. | The user's username. |
| password | The user's password. | The user's password. |
| root_escalation_method | sudo | su |
| root_password | (none) | root's password. |

You can also use an SSH Public Key instead of a password to authenticate that user. If the SSH Public Key is encrypted, include the SSH Key's passphrase.

The following table displays the correct parameters and values for this authentication method:

| Parameter | sudo | su |
|-|-|-|
| user | The user's username. | The user's username. |
| sshkey_name | The user's SSH key name. | The user's SSH key name. |
| sshkey_passphrase (If encrypted) | The user's SSH key passphrase. | The user's SSH key passphrase. |
| root_escalation_method | sudo | su |
| root_password | (none) | root's password. |

### Return a transfer module's schema

 - [GET /transfer_module_schema](https://api.docs.cpanel.net/specifications/whm.openapi/transfer-configuration/transfers-transfer_module_schema.md): This function retrieves a transfer module's key structure.

Note:

For more information about how this function works with other functions in the transfer and restore process, read our Guide to Transfer and Restore API Functions documentation.

### Validate username availability on target server

 - [GET /validate_system_user](https://api.docs.cpanel.net/specifications/whm.openapi/transfer-configuration/sys-validate_system_user.md): This function validates a system user for use on the target server.

Note:

  For more information about how this function works with other functions in the transfer and restore process, read our Guide to Transfer and Restore API Functions documentation.

### Validate remote server's credentials

 - [GET /analyze_transfer_session_remote](https://api.docs.cpanel.net/specifications/whm.openapi/transfer-monitoring/transfers-analyze_transfer_session_remote.md): This function checks the remote server's credentials, which a transfer session uses to connect.

### Return available transfer modules

 - [GET /available_transfer_modules](https://api.docs.cpanel.net/specifications/whm.openapi/transfer-monitoring/transfers-available_transfer_modules.md): This function lists all available transfer modules.

Note:

  For more information about how this function works with other functions in the transfer and restore process, read our
  Guide to Transfer and Restore API Functions
  documentation.

### Return transfer session's log file

 - [GET /fetch_transfer_session_log](https://api.docs.cpanel.net/specifications/whm.openapi/transfer-monitoring/transfers-fetch_transfer_session_log.md): This function returns a transfer session's log file.

Note:

 For more information about how this function works with other functions in the transfer and restore process, read our Guide to Transfer and Restore API Functions documentation.

### Return transfer session's status

 - [GET /get_transfer_session_state](https://api.docs.cpanel.net/specifications/whm.openapi/transfer-monitoring/transfers-get_transfer_session_state.md): This function retrieves the state of a transfer session.

Note:

For more information about how this function works with other functions in the transfer and restore process, read our Guide to Transfer and Restore API Functions documentation.

### Return transfer session's information

 - [GET /retrieve_transfer_session_remote_analysis](https://api.docs.cpanel.net/specifications/whm.openapi/transfer-monitoring/transfers-retrieve_transfer_session_remote_analysis.md): This function analyzes a transfer session.

Note:

  For more information about how this function works with other functions in the transfer and restore process, read our Guide to Transfer and Restore API Functions documentation.

## cPanel Account Transfer

Transfers / cPanel Account Transfer

### Stop transfer session

 - [GET /abort_transfer_session](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-transfer/transfers-abort_transfer_session.md): This function aborts an active transfer session.

### Create remote server transfer session as root user

 - [GET /create_remote_root_transfer_session](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-transfer/transfers-create_remote_root_transfer_session.md): This function creates a transfer session as the root user.

Important:

  For information about the ports that cPanel & WHM uses, read our How to Configure Your Firewall for cPanel Services documentation.

Note:

  For more information about how this function works with other functions in the transfer and restore process, read our Guide to Transfer and Restore API Functions documentation.

### Authentication
There are several methods that you can use to authenticate a transfer session with the remote server:

#### Authenticate as root
If you use SSH to authenticate as the root user, the remote server's SSH must accept root logins. For more information read OpenSSH's sshd_config documentation.

The following table displays the correct parameters and values for this authentication method:

| Parameter | Value |
|-|-|
| user | root |
| password | root's password |

You can also use an SSH public key to authenticate the root user. If the SSH public key is encrypted, include the SSH key's passphrase.

The following table displays the correct parameters and values for this authentication method:

| Parameter | Value if the SSH Key is not encrypted | Value if the SSH Key is encrypted |
|-|-|-|
| user | root | root |
| sshkey_name | The root user's SSH key. | The root user's SSH key. |
| sshkey_passphrase | (none) | The root user's SSH key passphrase. |

#### Authenticate as a user
Many server administrators do not permit direct root logins via SSH on their servers.
* If the remote server forbids root logins, you must use another user and their password on the remote server, and then escalate to the root user. For more information read OpenSSH's sshd_config documentation.
 If the system administrator used WHM's Manage Wheel Group Users interface (WHM >> Home >> Security Center >> Manage Wheel Group Users*) to grant the user su access, then you will need to specify su and the root password.
* If the user has sudo access, you do not need the root password.

The following table displays the correct parameters and values for this authentication method:

| Parameter | Value if the user has sudo access | Value if the user has su access |
|-|-|-|
| user | The username. | The username. |
| password | The user's password. | The user's password. |
| root_escalation_method | sudo | su |
| root_password | (none) | The root user's password. |

You can also use an SSH public key instead of a password to authenticate that user. If the SSH public key is encrypted, include the SSH key's passphrase.

The following table displays the correct parameters and values for this authentication method:

| Parameter | sudo | su |
|-|-|-|
| user | The username. | The username. |
| sshkey_name | The user's SSH key. | The user's SSH key. |
| sshkey_passphrase (If encrypted) | The user's SSH key passphrase. | The user's SSH key passphrase. |
| root_escalation_method | sudo | su |
| root_password | (none) | The root user's password. |

### Create remote server transfer session

 - [GET /create_remote_user_transfer_session](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-transfer/transfers-create_remote_user_transfer_session.md): This function creates a transfer session with a non-root user to a remote server.

Important:

* The source and target servers must be able to communicate over port 2087 to use this feature.
* The source and target servers must also be able to communicate over the port that your servers use for SSH connections.
* For more information about the ports that cPanel & WHM uses, read our How to Configure Your Firewall for cPanel & WHM Services documentation.

Note:

For more information about how this function works with other functions in the transfer and restore process, read our Guide to Transfer and Restore API Functions documentation.

### Add module to transfer session

 - [GET /enqueue_transfer_item](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-transfer/transfers-enqueue_transfer_item.md): This function adds a transfer session to a queue. For more information about how this function works with other
functions in the transfer and restore process, read our
Guide to Transfer and Restore API Functions documentation.

Important:

The module parameter determines which additional parameters to use with the function.

### Suspend active transfer session

 - [GET /pause_transfer_session](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-transfer/transfers-pause_transfer_session.md): This function pauses an active transfer session.

Note:

For more information about how this function works with other functions in the transfer and restore process, read our Guide to Transfer and Restore API Functions documentation.

### Start or restart transfer session

 - [GET /start_transfer_session](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-transfer/transfers-start_transfer_session.md): This function starts or restarts a transfer session.

Note:

  For more information about how this function works with other functions in the transfer and restore process, read our Guide to Transfer and Restore API Functions documentation.

## Transfer Configuration

Transfers / Transfer Configuration

### Remove cPanel account's archives

 - [GET /delete_account_archives](https://api.docs.cpanel.net/specifications/whm.openapi/transfer-configuration/transfers-delete_account_archives.md): This function removes a cPanel user account's archives.

### Validate remote server's SSH credentials

 - [GET /remote_basic_credential_check](https://api.docs.cpanel.net/specifications/whm.openapi/transfer-configuration/ssh-remote_basic_credential_check.md): This function checks the SSH credentials on the remote server.

### Authentication
There are several methods that you can use to authenticate a transfer session with the remote server.

#### PermitRootLogin=Yes
The simplest authentication method is to use the root user and password. To do this, the sshd_config file on the remote server must contain the following value: PermitRootLogin=Yes

The following table displays the correct parameters and values for this authentication method:

| Parameter | Value |
|-|-|
| user | root |
| password | root's password. |

You can also use the SSH Public Key to authenticate the root user. If the SSH Public Key is encrypted, include the SSH Key's passphrase.

The following table displays the correct parameters and values for this authentication method:

| Parameter | Value if the SSH Key is not encrypted | Value if the SSH Key is encrypted |
|-|-|-|
| user | root | root |
| sshkey_name | root's SSH key name. | root's SSH key name. |
| sshkey_passphrase | (none) | root's SSH key passphrase. |

#### PermitRootLogin=No
Many server administrators do not permit direct root logins on their servers.
* If the remote server contains PermitRootLogin=No in the sshd_config file, then you must use another user and their password on the remote server, and then escalate to root.
 If the system administrator used WHM's Manage Wheel Group Users interface (WHM >> Home >> Security Center >> Manage Wheel Group Users*) to grant the user su access, then you will need to specify su and the root password.
* If the user has sudo access, you do not need the root password.

The following table displays the correct parameters and values for this authentication method:

| Parameter | Value if the user has sudo access | Value if the user has su access |
|-|-|-|
| user | The user's username. | The user's username. |
| password | The user's password. | The user's password. |
| root_escalation_method | sudo | su |
| root_password | (none) | root's password. |

You can also use an SSH Public Key instead of a password to authenticate that user. If the SSH Public Key is encrypted, include the SSH Key's passphrase.

The following table displays the correct parameters and values for this authentication method:

| Parameter | sudo | su |
|-|-|-|
| user | The user's username. | The user's username. |
| sshkey_name | The user's SSH key name. | The user's SSH key name. |
| sshkey_passphrase (If encrypted) | The user's SSH key passphrase. | The user's SSH key passphrase. |
| root_escalation_method | sudo | su |
| root_password | (none) | root's password. |

### Return a transfer module's schema

 - [GET /transfer_module_schema](https://api.docs.cpanel.net/specifications/whm.openapi/transfer-configuration/transfers-transfer_module_schema.md): This function retrieves a transfer module's key structure.

Note:

For more information about how this function works with other functions in the transfer and restore process, read our Guide to Transfer and Restore API Functions documentation.

### Validate username availability on target server

 - [GET /validate_system_user](https://api.docs.cpanel.net/specifications/whm.openapi/transfer-configuration/sys-validate_system_user.md): This function validates a system user for use on the target server.

Note:

  For more information about how this function works with other functions in the transfer and restore process, read our Guide to Transfer and Restore API Functions documentation.

## Transfer Monitoring

Transfers / Transfer Monitoring

### Validate remote server's credentials

 - [GET /analyze_transfer_session_remote](https://api.docs.cpanel.net/specifications/whm.openapi/transfer-monitoring/transfers-analyze_transfer_session_remote.md): This function checks the remote server's credentials, which a transfer session uses to connect.

### Return available transfer modules

 - [GET /available_transfer_modules](https://api.docs.cpanel.net/specifications/whm.openapi/transfer-monitoring/transfers-available_transfer_modules.md): This function lists all available transfer modules.

Note:

  For more information about how this function works with other functions in the transfer and restore process, read our
  Guide to Transfer and Restore API Functions
  documentation.

### Return transfer session's log file

 - [GET /fetch_transfer_session_log](https://api.docs.cpanel.net/specifications/whm.openapi/transfer-monitoring/transfers-fetch_transfer_session_log.md): This function returns a transfer session's log file.

Note:

 For more information about how this function works with other functions in the transfer and restore process, read our Guide to Transfer and Restore API Functions documentation.

### Return transfer session's status

 - [GET /get_transfer_session_state](https://api.docs.cpanel.net/specifications/whm.openapi/transfer-monitoring/transfers-get_transfer_session_state.md): This function retrieves the state of a transfer session.

Note:

For more information about how this function works with other functions in the transfer and restore process, read our Guide to Transfer and Restore API Functions documentation.

### Return transfer session's information

 - [GET /retrieve_transfer_session_remote_analysis](https://api.docs.cpanel.net/specifications/whm.openapi/transfer-monitoring/transfers-retrieve_transfer_session_remote_analysis.md): This function analyzes a transfer session.

Note:

  For more information about how this function works with other functions in the transfer and restore process, read our Guide to Transfer and Restore API Functions documentation.

## UserData

Scoped userdata storage functions.

### Get scoped userdata

 - [GET /get_scoped_userdata](https://api.docs.cpanel.net/specifications/whm.openapi/userdata/userdata-get_scoped_userdata.md): This function retrieves all userdata key/value pairs within the specified scope.

### Set scoped userdata

 - [GET /set_scoped_userdata](https://api.docs.cpanel.net/specifications/whm.openapi/userdata/userdata-set_scoped_userdata.md): This function sets (creates or updates) a userdata key/value pair within the specified scope and returns the full updated mapping.

## EasyApache

The EasyApache module for WHM API 1.

### Return any additional package prefixes, beyond ea.

 - [GET /ea4_get_additional_pkg_prefixes](https://api.docs.cpanel.net/specifications/whm.openapi/easyapache-settings/ea4-ea4_get_additional_pkg_prefixes.md): This function returns any additional package prefixes set up in the /etc/cpanel/ea4/additional-pkg-prefixes/ file.

### Return installed Easyapache 4 packages

 - [GET /ea4_get_currently_installed_packages](https://api.docs.cpanel.net/specifications/whm.openapi/easyapache-settings/ea4-ea4_get_currently_installed_packages.md): This function returns a list of the currently-installed EasyApache 4 packages.

Important:

When you disable the Web Server role, the system disables this function.

### Return EasyApache 4 profiles

 - [GET /ea4_list_profiles](https://api.docs.cpanel.net/specifications/whm.openapi/easyapache-settings/ea4-ea4_list_profiles.md): This function returns a list of all EasyApache 4 profiles and the packages that each profile provides.

 Important:

 When you disable the Web Server role, the system disables this function.

### Return ea4-metainfo.json file contents

 - [GET /ea4_metainfo](https://api.docs.cpanel.net/specifications/whm.openapi/easyapache-settings/ea4-ea4_metainfo.md): This function returns the contents of the /etc/cpanel/ea4/ea4-metainfo.json file.

### Return EasyApache 4 recommendations

 - [GET /ea4_recommendations](https://api.docs.cpanel.net/specifications/whm.openapi/easyapache-settings/ea4-ea4_recommendations.md): This function returns any recommendations attached to your installed
EasyApache 4 packages. For more information about the recommendation system,
read our EasyApache 4 Recommendations documentation.

Important:

When you disable the Web Server role, the system disables this function.

### Create EasyApache 4 profile

 - [GET /ea4_save_profile](https://api.docs.cpanel.net/specifications/whm.openapi/easyapache-settings/ea4-ea4_save_profile.md): This function creates an EasyApache 4 profile. This function only writes files to the /etc/cpanel/ea4/profiles/custom/ directory.

Important:

  When you disable the Web Server role, the system disables this function.

### Count domains using EOL PHP versions

 - [GET /eol_php_sites](https://api.docs.cpanel.net/specifications/whm.openapi/easyapache-settings/eolphpsites-eol_php_sites.md): This function counts the number of domains across all cPanel users that are using
end-of-life (EOL) PHP versions. It determines EOL status by comparing each domain's
PHP version against the oldest_supported_version value from the
/etc/cpanel/ea4/ea4-metainfo.json file.

## EasyApache Settings

Web Server Configuration / EasyApache Settings

### Return any additional package prefixes, beyond ea.

 - [GET /ea4_get_additional_pkg_prefixes](https://api.docs.cpanel.net/specifications/whm.openapi/easyapache-settings/ea4-ea4_get_additional_pkg_prefixes.md): This function returns any additional package prefixes set up in the /etc/cpanel/ea4/additional-pkg-prefixes/ file.

### Return installed Easyapache 4 packages

 - [GET /ea4_get_currently_installed_packages](https://api.docs.cpanel.net/specifications/whm.openapi/easyapache-settings/ea4-ea4_get_currently_installed_packages.md): This function returns a list of the currently-installed EasyApache 4 packages.

Important:

When you disable the Web Server role, the system disables this function.

### Return EasyApache 4 profiles

 - [GET /ea4_list_profiles](https://api.docs.cpanel.net/specifications/whm.openapi/easyapache-settings/ea4-ea4_list_profiles.md): This function returns a list of all EasyApache 4 profiles and the packages that each profile provides.

 Important:

 When you disable the Web Server role, the system disables this function.

### Return ea4-metainfo.json file contents

 - [GET /ea4_metainfo](https://api.docs.cpanel.net/specifications/whm.openapi/easyapache-settings/ea4-ea4_metainfo.md): This function returns the contents of the /etc/cpanel/ea4/ea4-metainfo.json file.

### Return EasyApache 4 recommendations

 - [GET /ea4_recommendations](https://api.docs.cpanel.net/specifications/whm.openapi/easyapache-settings/ea4-ea4_recommendations.md): This function returns any recommendations attached to your installed
EasyApache 4 packages. For more information about the recommendation system,
read our EasyApache 4 Recommendations documentation.

Important:

When you disable the Web Server role, the system disables this function.

### Create EasyApache 4 profile

 - [GET /ea4_save_profile](https://api.docs.cpanel.net/specifications/whm.openapi/easyapache-settings/ea4-ea4_save_profile.md): This function creates an EasyApache 4 profile. This function only writes files to the /etc/cpanel/ea4/profiles/custom/ directory.

Important:

  When you disable the Web Server role, the system disables this function.

### Count domains using EOL PHP versions

 - [GET /eol_php_sites](https://api.docs.cpanel.net/specifications/whm.openapi/easyapache-settings/eolphpsites-eol_php_sites.md): This function counts the number of domains across all cPanel users that are using
end-of-life (EOL) PHP versions. It determines EOL status by comparing each domain's
PHP version against the oldest_supported_version value from the
/etc/cpanel/ea4/ea4-metainfo.json file.

## PHP

The PHP module for WHM API 1.

### Return PHP handlers

 - [GET /php_get_handlers](https://api.docs.cpanel.net/specifications/whm.openapi/php/php-php_get_handlers.md): This function returns the PHP handlers on the system.

Important:

When you disable the
Web Server role,
the system disables this function.

### Return PHP preconfigured domains

 - [GET /php_get_impacted_domains](https://api.docs.cpanel.net/specifications/whm.openapi/php/php-php_get_impacted_domains.md): This function lists domains that obtain their PHP version from a specified PHP configuration.

Important:

When you disable the
Web Server role,
the system disables this function.

### Return installed PHP versions

 - [GET /php_get_installed_versions](https://api.docs.cpanel.net/specifications/whm.openapi/php/php-php_get_installed_versions.md): This function returns the installed PHP versions on a server.

Note:

  This document only applies to systems that run EasyApache 4.

Important:

  When you disable the Web Server role , the system disables this function.

### Return system default PHP version

 - [GET /php_get_system_default_version](https://api.docs.cpanel.net/specifications/whm.openapi/php/php-php_get_system_default_version.md): This function returns the system default PHP version.

Note:

This document only applies to systems that run EasyApache 4.

Important:

When you disable the Web Server role, the system disables this function.

### Return PHP version of all virtual hosts

 - [GET /php_get_vhost_versions](https://api.docs.cpanel.net/specifications/whm.openapi/php/php-php_get_vhost_versions.md): This function returns the PHP version of every virtual host that a reseller controls.

Note:

  This document only applies to systems that run EasyApache 4.

Important:

  When you disable the Web Server role, the system disables this function.

### Return virtual hosts per PHP version

 - [GET /php_get_vhosts_by_version](https://api.docs.cpanel.net/specifications/whm.openapi/php/php-php_get_vhosts_by_version.md): This function lists the virtual hosts that use a specified version of PHP.

Note:

This document only applies to systems that run EasyApache 4.

Important:

When you disable the Web Server role, the system disables this function.

### Return PHP version's php.ini file

 - [GET /php_ini_get_content](https://api.docs.cpanel.net/specifications/whm.openapi/php/php-php_ini_get_content.md): This function returns the contents of a PHP version's php.ini file.

Note:

  This document only applies to systems that run EasyApache 4.

Important:

  When you disable the Web Server role, the system disables this function.

### Return PHP version's directives

 - [GET /php_ini_get_directives](https://api.docs.cpanel.net/specifications/whm.openapi/php/php-php_ini_get_directives.md): This function returns the directives in the selected PHP version's php.ini file. WHM's MultiPHP INI Editor interface (Home >> Software >> MultiPHP INI Editor) lists these directives in the Basic Mode section.

Important:

  When you disable the Web Server role, the system disables this function.

### Update PHP version's php.ini file

 - [POST /php_ini_set_content](https://api.docs.cpanel.net/specifications/whm.openapi/php/php-php_ini_set_content.md): This function changes the contents of a PHP version's php.ini file.

Notes:

 - This document only applies to systems that run EasyApache 4.
 - Due to the limited field length of HTTP GET method calls, we strongly recommend that you use the HTTP POST method.

Important:
  When you disable the Web Server role, the system disables this function.

### Update PHP version's directives

 - [GET /php_ini_set_directives](https://api.docs.cpanel.net/specifications/whm.openapi/php/php-php_ini_set_directives.md): This function sets the value of a PHP version's directives.

Note:

  This document only applies to systems that run EasyApache 4.

Important:

  When you disable the Web Server role , the system disables this function.

### Update PHP version's handler

 - [GET /php_set_handler](https://api.docs.cpanel.net/specifications/whm.openapi/php/php-php_set_handler.md): This function sets a PHP version's handler.

Important:

When you disable the Web Server role, the system disables this function.

### Update PHP default save path

 - [GET /php_set_session_save_path](https://api.docs.cpanel.net/specifications/whm.openapi/php/php-php_set_session_save_path.md): This function sets the location of PHP's default session save path.

Important:

When you disable the Web Server role, the system disables this function.

### Update default PHP version

 - [GET /php_set_system_default_version](https://api.docs.cpanel.net/specifications/whm.openapi/php/php-php_set_system_default_version.md): The version of PHP that you wish to set as the system's default.

* ea-php81
* inherit
* Any custom PHP package name.

Important:

When you disable the Web Server role, the system disables this function.

### Update domain's PHP values

 - [GET /php_set_vhost_versions](https://api.docs.cpanel.net/specifications/whm.openapi/php/php-php_set_vhost_versions.md): This function allows WHM's
MultiPHP Manager
interface (WHM >> Home >> Software >> MultiPHP Manager) to change the values of a domain.

Important:

When you disable the
Web Server role,
the system disables this function.

Warning:

We strongly recommend that you only activate Apache PHP-FPM if your server has at
least 2 GB of RAM available, or at least 30 MB of RAM per domain. If you enable PHP-FPM
on a server with less than the required RAM, your server may experience severe
performance issues.

## PHP-FPM

Web Server Configuration / PHP-FPM

### Enable PHP-FPM on all domains

 - [GET /convert_all_domains_to_fpm](https://api.docs.cpanel.net/specifications/whm.openapi/php-fpm/php-convert_all_domains_to_fpm.md): This function activates PHP-FPM for any non-PHP-FPM domains on a server.

Important:

When you disable the Web Server role, the system disables this function.

Warning:

We strongly recommend that you only activate Apache PHP-FPM if your server has at least 2 GB of RAM available, or at least 30 MB of RAM per domain. If you enable PHP-FPM on a server with less than the required RAM, your server may experience severe performance issues.

### Return workload data for PHP-FPM on all domains

 - [GET /get_fpm_count_and_utilization](https://api.docs.cpanel.net/specifications/whm.openapi/php-fpm/php-get_fpm_count_and_utilization.md): This function provides information that will help you to determine
whether your server can handle the workload if you enable PHP-FPM for all domains.

Important:

When you disable the
Web Server role,
the system disables this function.

Warning:

We strongly recommend that you only activate Apache PHP-FPM if your server
has at least 2 GB of RAM available, or at least 30 MB of RAM per domain. If you enable
PHP-FPM on a server with less than the required RAM, your server may experience severe
performance issues.

### Return PHP-FPM conversion status

 - [GET /is_conversion_in_progress](https://api.docs.cpanel.net/specifications/whm.openapi/php-fpm/php-is_conversion_in_progress.md): This function indicates whether the system's process to convert all of WHM's accounts to use PHP-FPM is in progress.

Important:

When you disable the Web Server role, the system disables this function.

Warning:

We strongly recommend that you only activate Apache PHP-FPM if your server has at least 2 GB of RAM available, or at least 30 MB of RAM per domain. If you enable PHP-FPM on a server with less than the required RAM, your server may experience severe performance issues.

### Return PHP-FPM directives and pool options

 - [POST /php_fpm_config_get](https://api.docs.cpanel.net/specifications/whm.openapi/php-fpm/php-php_fpm_config_get.md): This function retrieves the PHP INI directives and pool options for a system's or domain's PHP-FPM configuration.

 Important:

   When you disable the WebServer role, the system disables this function.

 Warning:

   We strongly recommend that you only activate Apache PHP-FPM if your server has at least 2 GB of RAM available, or at least 30 MB of RAM per domain. If you enable PHP-FPM on a server with less than the required RAM, your server may experience severe performance issues.

### Update PHP-FPM directives and pool options

 - [POST /php_fpm_config_set](https://api.docs.cpanel.net/specifications/whm.openapi/php-fpm/php-php_fpm_config_set.md): This function configures the PHP INI directives and pool options
for a system's or domain's PHP-FPM configuration.

Important:

When you disable the Web Server role, the system disables this function.

Warning:

We strongly recommend that you only activate Apache PHP-FPM if your server has at least 2 GB of RAM available, or
at least 30 MB of RAM per domain.  If you enable PHP-FPM on a server with less than the required RAM, your server may
experience severe performance issues.

### Return PHP-FPM status on new accounts

 - [GET /php_get_default_accounts_to_fpm](https://api.docs.cpanel.net/specifications/whm.openapi/php-fpm/php-php_get_default_accounts_to_fpm.md): This function determines whether the system enables PHP-FPM for new domains and accounts.

Important:

When you disable the
Web Server role,
the system disables this function.

Warning:

We strongly recommend that you only activate Apache PHP-FPM if your server has at
least 2 GB of RAM available, or at least 30 MB of RAM per domain. If you enable PHP-FPM
on a server with less than the required RAM, your server may experience severe performance
issues.

### Return PHP-FPM preconfigured status

 - [GET /php_get_old_fpm_flag](https://api.docs.cpanel.net/specifications/whm.openapi/php-fpm/php-php_get_old_fpm_flag.md): This function determines whether your system runs with a preconfigured PHP-FPM configuration.

Important:

When you disable the Web Server role, the system disables this function.

### Enable PHP-FPM on new cPanel accounts and domains

 - [GET /php_set_default_accounts_to_fpm](https://api.docs.cpanel.net/specifications/whm.openapi/php-fpm/php-php_set_default_accounts_to_fpm.md): This function determines whether to enable PHP-FPM on new accounts and domains on a server.

Important:

When you disable the Web Server role, the system disables this function.

Warning:

We strongly recommend that you only activate Apache PHP-FPM if your server has at least 2 GB of RAM available, or at least 30 MB of RAM per domain. If you enable PHP-FPM on a server with less than the required RAM, your server may experience severe performance issues.

### Enable PHP-FPM preconfigured status

 - [GET /php_set_old_fpm_flag](https://api.docs.cpanel.net/specifications/whm.openapi/php-fpm/php-php_set_old_fpm_flag.md): This function creates the /etc/cpanel/ea4/old_fpm_flag touch file.

Note:

If this touch file exists, the system will not display a message that indicates whether your system runs on an outdated PHP-FPM configuration. If you wish to see the message again, delete this touch file.

Important:

When you disable the Web Server role, the system disables this function.

## ModSecurity

The ModSecurity module for WHM API 1.

### Add staged ModSecurity rule

 - [GET /modsec_add_rule](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_add_rule.md): This function adds a new rule to a ModSecurity™ configuration staging file. For example, if you choose to add a rule for the example.conf file, the function stages the rule in the example.conf. STAGE file.

Important:

  This function does not actually deploy the rule. To deploy the rule, use the WHM API 1 Functions - modsec_deploy_all_rule_changes function.

Important:

  When you disable the Web Server role, the system disables this function.

### Validate ModSecurity rule

 - [GET /modsec_check_rule](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_check_rule.md): This function checks a ModSecurity™ rule's validity.

Important:

When you disable the
Web Server role,
the system disables this function.

### Save ModSecurity rule copy

 - [GET /modsec_clone_rule](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_clone_rule.md): This function copies a ModSecurity™ rule with a new rule ID.

Important:

When you disable the
Web Server role,
the system disables this function.

### Enable all staged ModSecurity rule changes

 - [GET /modsec_deploy_all_rule_changes](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_deploy_all_rule_changes.md): This function deploys the staged changes for all of the ModSecurity™ configuration files
into the live configuration files. After the function deploys the configuration files, it
restarts Apache. If the new configuration is invalid, the system restores the original
configuration and preserves the staged changes.

Important:

When you disable the
Web Server role,
the system disables this function.

### Enable staged ModSecurity rule changes

 - [GET /modsec_deploy_rule_changes](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_deploy_rule_changes.md): This function deploys staged changes to the ModSecurity™ configuration file and restarts
Apache.

Note:

If the new configuration is invalid, the system will restore the original configuration
and maintain the staged changes.

Important:

When you disable the
Web Server role,
the system disables this function.

### Disable ModSecurity rule

 - [GET /modsec_disable_rule](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_disable_rule.md): This function disables a ModSecurity™ rule.

Important:

When you disable the
Web Server role,
the system disables this function.

### Remove all staged ModSecurity rule changes

 - [GET /modsec_discard_all_rule_changes](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_discard_all_rule_changes.md): This function discards the staged ModSecurity™ rule changes, if present, for all of
the configuration files.

Important:

When you disable the
Web Server role,
the system disables this function.

### Remove staged ModSecurity rule changes

 - [GET /modsec_discard_rule_changes](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_discard_rule_changes.md): This function discards staged rule changes for a ModSecurity™ configuration file.
Staged rule changes reside in a .STAGE file (for example, the staged changes for
the example.conf file exist in the example.conf.STAGE file).
This function deletes the .STAGE file that corresponds to the configuration file that
you specify.

Note:

To stage rule changes, call WHM API 1's modsec_add_rule function.

Important:

When you disable the
Web Server role,
the system disables this function.

### Update staged ModSecurity rule

 - [GET /modsec_edit_rule](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_edit_rule.md): This function stages edits to a ModSecurity™ rule. The system does not save changes
directly to the configuration file. Instead, it stages the changes to the configuration
file's .STAGE file (for example, for the example.conf file, the system stages changes
in the example.conf.STAGE file).

Important:

When you disable the
Web Server role,
the system disables this function.

### Return ModSecurity rules

 - [GET /modsec_get_rules](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_get_rules.md): This function retrieves the ModSecurity™ rules from one or more ModSecurity configuration files.

Important:

* When you disable the
Web Server role,
the system disables this function.
* You must include either the vendor_id or the config parameters.

### Remove ModSecurity rule

 - [GET /modsec_remove_rule](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_remove_rule.md): This function removes a rule from a ModSecurity™ configuration file.

Important:

When you disable the
Web Server role,
the system disables this function.

### Export ModSecurity rule error report

 - [GET /modsec_report_rule](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_report_rule.md): This function submits ModSecurity™ rule error reports to a remote receiver. The third
party rule vendors use these error reports to identify problems with their rule sets.

Important:

When you disable the
Web Server role,
the system disables this function.

### Enable ModSecurity rule

 - [GET /modsec_undisable_rule](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_undisable_rule.md): This function enables a ModSecurity™ rule.

Important:

  When you disable the Web Server role, the system disables this function.

### Add ModSecurity vendor rules

 - [GET /modsec_add_vendor](https://api.docs.cpanel.net/specifications/whm.openapi/rule-vendor-settings/modsecurity-modsec_add_vendor.md): This function adds a new ModSecurity™ vendor rule set to the server.

Important:

When you disable the
Web Server role,
the system disables this function.

### Disable ModSecurity vendor rules

 - [GET /modsec_disable_vendor](https://api.docs.cpanel.net/specifications/whm.openapi/rule-vendor-settings/modsecurity-modsec_disable_vendor.md): This function disables a ModSecurity™ vendor rule set.

Note:

This function will not disable vendor configuration files that you have individually enabled.

Important:

When you disable the
Web Server role,
the system disables this function.

### Disable ModSecurity vendor configuration files

 - [GET /modsec_disable_vendor_configs](https://api.docs.cpanel.net/specifications/whm.openapi/rule-vendor-settings/modsecurity-modsec_disable_vendor_configs.md): This function disables a ModSecurity™ vendor's configuration files.

Important:

When you disable the
Web Server role,
the system disables this function.

### Disable ModSecurity vendor updates

 - [GET /modsec_disable_vendor_updates](https://api.docs.cpanel.net/specifications/whm.openapi/rule-vendor-settings/modsecurity-modsec_disable_vendor_updates.md): This function disables automatic updates for a ModSecurity™ vendor.

Important:

When you disable the
Web Server role,
the system disables this function.

### Enable ModSecurity vendor rules

 - [GET /modsec_enable_vendor](https://api.docs.cpanel.net/specifications/whm.openapi/rule-vendor-settings/modsecurity-modsec_enable_vendor.md): This function enables a ModSecurity™ vendor rule set.

Note:

This function will not enable vendor configuration files that you individually
disable.

Important:

When you disable the
Web Server role,
the system disables this function.

### Enable ModSecurity vendor configuration files

 - [GET /modsec_enable_vendor_configs](https://api.docs.cpanel.net/specifications/whm.openapi/rule-vendor-settings/modsecurity-modsec_enable_vendor_configs.md): This function enables a ModSecurity™ vendor's configuration files.

Important:

When you disable the
Web Server role,
the system disables this function.

### Enable ModSecurity vendor updates

 - [GET /modsec_enable_vendor_updates](https://api.docs.cpanel.net/specifications/whm.openapi/rule-vendor-settings/modsecurity-modsec_enable_vendor_updates.md): This function enables automatic updates for a ModSecurity™ vendor.

Important:

When you disable the
Web Server role,
the system disables this function.

### Return ModSecurity vendors

 - [GET /modsec_get_vendors](https://api.docs.cpanel.net/specifications/whm.openapi/rule-vendor-settings/modsecurity-modsec_get_vendors.md): The function returns a list of configured ModSecurity™ vendors.

Important:

When you disable the
Web Server role,
the system disables this function.

### Return ModSecurity vendor rule metadata

 - [GET /modsec_preview_vendor](https://api.docs.cpanel.net/specifications/whm.openapi/rule-vendor-settings/modsecurity-modsec_preview_vendor.md): This function returns the metadata for a ModSecurity™ vendor rule set.

Important:

When you disable the
Web Server role,
the system disables this function.

### Remove ModSecurity vendor

 - [GET /modsec_remove_vendor](https://api.docs.cpanel.net/specifications/whm.openapi/rule-vendor-settings/modsecurity-modsec_remove_vendor.md): This function removes a ModSecurity™ vendor. When you call this function, the system
removes the vendor's includes, disablement directives, configuration files, and
metadata file.

Important:

When you disable the
Web Server role,
the system disables this function.

### Update ModSecurity vendor ruleset

 - [GET /modsec_update_vendor](https://api.docs.cpanel.net/specifications/whm.openapi/rule-vendor-settings/modsecurity-modsec_update_vendor.md): This function updates a vendor with the current version of the rule set.

Important:

When you disable the
Web Server role,
the system disables this function.

### Add ModSecurity configuration file text

 - [GET /modsec_assemble_config_text](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_assemble_config_text.md): This function adds text to a ModSecurity™ configuration file.

Important:

When you disable the
Web Server role,
the system disables this function.

### Run ModSecurity batch settings

 - [GET /modsec_batch_settings](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_batch_settings.md): This function adds, updates, and removes global ModSecurity™ configuration directives.
The function modifies these directives in the /usr/local/apache/conf/modsec2.cpanel.conf
file.

Important:

When you disable the Web Server role,
the system disables this function.

This function only supports the following ModSecurity™ configuration directives:


  setting_idDocumentation
  0SecAuditEngine
  1SecConnEngine
  2SecRuleEngine
  3SecDisableBackendCompression
  4SecGeoLookupDb
  5SecGsbLookupDb
  6SecGuardianLog
  7SecHttpBlKey
  8SecPcreMatchLimit
  9SecPcreMatchLimitRecursion

### Enable staged ModSecurity configuration files

 - [GET /modsec_deploy_settings_changes](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_deploy_settings_changes.md): This function deploys the staged changes to your modsec2.cpanel.conf file and
attempts to restart Apache. If the new settings fail validation, the system restores
the /etc/apache2/conf.d/modsec/modsec2.cpanel.conf file.

Note:

Call the WHM API 1 modsec_set_setting function to prepare your changes for
the modsec2.cpanel.conf file.

Important:

When you disable the
Web Server role,
the system disables this function.

### Return ModSecurity configuration file

 - [GET /modsec_get_config_text](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_get_config_text.md): This function retrieves a ModSecurity™ configuration file's contents.

Important:

When you disable the
Web Server role,
the system disables this function.

### Return all ModSecurity configuration files

 - [GET /modsec_get_configs](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_get_configs.md): This function lists ModSecurity™ configuration files. The system stores the configuration
files in the /usr/local/apache/conf/modsec_vendor_configs directory.

Important:

When you disable the
Web Server role,
the system disables this function.

### Return staged ModSecurity configuration files

 - [GET /modsec_get_configs_with_changes_pending](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_get_configs_with_changes_pending.md): This function lists the ModSecurity™ configuration files that have staged changes.

Important:

When you disable the
Web Server role,
the system disables this function.

### Return ModSecurity logs

 - [GET /modsec_get_log](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_get_log.md): This function retrieves ModSecurity™ log entries from the modsec SQLite database.

Important:

When you disable the
Web Server role,
the system disables this function.

### Return ModSecurity configuration

 - [GET /modsec_get_settings](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_get_settings.md): This function retrieves the server's ModSecurity™ configuration settings. The system
stores these settings in the /usr/local/apache/conf/modsec2.conf file.

Important:

When you disable the Web Server role,
the system disables this function.

### Return ModSecurity module status

 - [GET /modsec_is_installed](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_is_installed.md): This function checks whether the ModSecurity™ module is installed.

Important:

When you disable the Web Server role, the system disables this function.

### Add ModSecurity configuration file include

 - [GET /modsec_make_config_active](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_make_config_active.md): This function adds an include for a ModSecurity™ configuration file to
the modsec2.cpanel.conf file. This makes the ModSecurity configuration file
active.

Important:

When you disable the
Web Server role,
the system disables this function.

### Remove ModSecurity configuration file include

 - [GET /modsec_make_config_inactive](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_make_config_inactive.md): This function removes an include for a ModSecurity™ configuration file from
the modsec2.cpanel.conf file. This makes the ModSecurity configuration file
inactive.

Important:

When you disable the
Web Server role,
the system disables this function.

### Remove ModSecurity configuration

 - [GET /modsec_remove_setting](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_remove_setting.md): This function removes a global ModSecurity™ configuration directive.

Important:

When you disable the
Web Server role,
the system disables this function.

### Update ModSecurity configuration file

 - [GET /modsec_set_config_text](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_set_config_text.md): This function sets the contents of a specified ModSecurity™ configuration file. The system
stages any changes to the configuration file. To deploy the changes, call WHM API 1's
modsec_deploy_rule_changes function.

Important:

When you disable the
Web Server role,
the system disables this function.

### Update ModSecurity configuration

 - [GET /modsec_set_setting](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_set_setting.md): This function sets a global ModSecurity™ configuration directive.

Important:

When you disable the Web Server role, the system disables this function.

## Rule Settings

Web Server Security (ModSecurity) / Rule Settings

### Add staged ModSecurity rule

 - [GET /modsec_add_rule](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_add_rule.md): This function adds a new rule to a ModSecurity™ configuration staging file. For example, if you choose to add a rule for the example.conf file, the function stages the rule in the example.conf. STAGE file.

Important:

  This function does not actually deploy the rule. To deploy the rule, use the WHM API 1 Functions - modsec_deploy_all_rule_changes function.

Important:

  When you disable the Web Server role, the system disables this function.

### Validate ModSecurity rule

 - [GET /modsec_check_rule](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_check_rule.md): This function checks a ModSecurity™ rule's validity.

Important:

When you disable the
Web Server role,
the system disables this function.

### Save ModSecurity rule copy

 - [GET /modsec_clone_rule](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_clone_rule.md): This function copies a ModSecurity™ rule with a new rule ID.

Important:

When you disable the
Web Server role,
the system disables this function.

### Enable all staged ModSecurity rule changes

 - [GET /modsec_deploy_all_rule_changes](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_deploy_all_rule_changes.md): This function deploys the staged changes for all of the ModSecurity™ configuration files
into the live configuration files. After the function deploys the configuration files, it
restarts Apache. If the new configuration is invalid, the system restores the original
configuration and preserves the staged changes.

Important:

When you disable the
Web Server role,
the system disables this function.

### Enable staged ModSecurity rule changes

 - [GET /modsec_deploy_rule_changes](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_deploy_rule_changes.md): This function deploys staged changes to the ModSecurity™ configuration file and restarts
Apache.

Note:

If the new configuration is invalid, the system will restore the original configuration
and maintain the staged changes.

Important:

When you disable the
Web Server role,
the system disables this function.

### Disable ModSecurity rule

 - [GET /modsec_disable_rule](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_disable_rule.md): This function disables a ModSecurity™ rule.

Important:

When you disable the
Web Server role,
the system disables this function.

### Remove all staged ModSecurity rule changes

 - [GET /modsec_discard_all_rule_changes](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_discard_all_rule_changes.md): This function discards the staged ModSecurity™ rule changes, if present, for all of
the configuration files.

Important:

When you disable the
Web Server role,
the system disables this function.

### Remove staged ModSecurity rule changes

 - [GET /modsec_discard_rule_changes](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_discard_rule_changes.md): This function discards staged rule changes for a ModSecurity™ configuration file.
Staged rule changes reside in a .STAGE file (for example, the staged changes for
the example.conf file exist in the example.conf.STAGE file).
This function deletes the .STAGE file that corresponds to the configuration file that
you specify.

Note:

To stage rule changes, call WHM API 1's modsec_add_rule function.

Important:

When you disable the
Web Server role,
the system disables this function.

### Update staged ModSecurity rule

 - [GET /modsec_edit_rule](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_edit_rule.md): This function stages edits to a ModSecurity™ rule. The system does not save changes
directly to the configuration file. Instead, it stages the changes to the configuration
file's .STAGE file (for example, for the example.conf file, the system stages changes
in the example.conf.STAGE file).

Important:

When you disable the
Web Server role,
the system disables this function.

### Return ModSecurity rules

 - [GET /modsec_get_rules](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_get_rules.md): This function retrieves the ModSecurity™ rules from one or more ModSecurity configuration files.

Important:

* When you disable the
Web Server role,
the system disables this function.
* You must include either the vendor_id or the config parameters.

### Remove ModSecurity rule

 - [GET /modsec_remove_rule](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_remove_rule.md): This function removes a rule from a ModSecurity™ configuration file.

Important:

When you disable the
Web Server role,
the system disables this function.

### Export ModSecurity rule error report

 - [GET /modsec_report_rule](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_report_rule.md): This function submits ModSecurity™ rule error reports to a remote receiver. The third
party rule vendors use these error reports to identify problems with their rule sets.

Important:

When you disable the
Web Server role,
the system disables this function.

### Enable ModSecurity rule

 - [GET /modsec_undisable_rule](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_undisable_rule.md): This function enables a ModSecurity™ rule.

Important:

  When you disable the Web Server role, the system disables this function.

## Rule Vendor Settings

Web Server Security (ModSecurity) / Rule Vendor Settings

### Add ModSecurity vendor rules

 - [GET /modsec_add_vendor](https://api.docs.cpanel.net/specifications/whm.openapi/rule-vendor-settings/modsecurity-modsec_add_vendor.md): This function adds a new ModSecurity™ vendor rule set to the server.

Important:

When you disable the
Web Server role,
the system disables this function.

### Disable ModSecurity vendor rules

 - [GET /modsec_disable_vendor](https://api.docs.cpanel.net/specifications/whm.openapi/rule-vendor-settings/modsecurity-modsec_disable_vendor.md): This function disables a ModSecurity™ vendor rule set.

Note:

This function will not disable vendor configuration files that you have individually enabled.

Important:

When you disable the
Web Server role,
the system disables this function.

### Disable ModSecurity vendor configuration files

 - [GET /modsec_disable_vendor_configs](https://api.docs.cpanel.net/specifications/whm.openapi/rule-vendor-settings/modsecurity-modsec_disable_vendor_configs.md): This function disables a ModSecurity™ vendor's configuration files.

Important:

When you disable the
Web Server role,
the system disables this function.

### Disable ModSecurity vendor updates

 - [GET /modsec_disable_vendor_updates](https://api.docs.cpanel.net/specifications/whm.openapi/rule-vendor-settings/modsecurity-modsec_disable_vendor_updates.md): This function disables automatic updates for a ModSecurity™ vendor.

Important:

When you disable the
Web Server role,
the system disables this function.

### Enable ModSecurity vendor rules

 - [GET /modsec_enable_vendor](https://api.docs.cpanel.net/specifications/whm.openapi/rule-vendor-settings/modsecurity-modsec_enable_vendor.md): This function enables a ModSecurity™ vendor rule set.

Note:

This function will not enable vendor configuration files that you individually
disable.

Important:

When you disable the
Web Server role,
the system disables this function.

### Enable ModSecurity vendor configuration files

 - [GET /modsec_enable_vendor_configs](https://api.docs.cpanel.net/specifications/whm.openapi/rule-vendor-settings/modsecurity-modsec_enable_vendor_configs.md): This function enables a ModSecurity™ vendor's configuration files.

Important:

When you disable the
Web Server role,
the system disables this function.

### Enable ModSecurity vendor updates

 - [GET /modsec_enable_vendor_updates](https://api.docs.cpanel.net/specifications/whm.openapi/rule-vendor-settings/modsecurity-modsec_enable_vendor_updates.md): This function enables automatic updates for a ModSecurity™ vendor.

Important:

When you disable the
Web Server role,
the system disables this function.

### Return ModSecurity vendors

 - [GET /modsec_get_vendors](https://api.docs.cpanel.net/specifications/whm.openapi/rule-vendor-settings/modsecurity-modsec_get_vendors.md): The function returns a list of configured ModSecurity™ vendors.

Important:

When you disable the
Web Server role,
the system disables this function.

### Return ModSecurity vendor rule metadata

 - [GET /modsec_preview_vendor](https://api.docs.cpanel.net/specifications/whm.openapi/rule-vendor-settings/modsecurity-modsec_preview_vendor.md): This function returns the metadata for a ModSecurity™ vendor rule set.

Important:

When you disable the
Web Server role,
the system disables this function.

### Remove ModSecurity vendor

 - [GET /modsec_remove_vendor](https://api.docs.cpanel.net/specifications/whm.openapi/rule-vendor-settings/modsecurity-modsec_remove_vendor.md): This function removes a ModSecurity™ vendor. When you call this function, the system
removes the vendor's includes, disablement directives, configuration files, and
metadata file.

Important:

When you disable the
Web Server role,
the system disables this function.

### Update ModSecurity vendor ruleset

 - [GET /modsec_update_vendor](https://api.docs.cpanel.net/specifications/whm.openapi/rule-vendor-settings/modsecurity-modsec_update_vendor.md): This function updates a vendor with the current version of the rule set.

Important:

When you disable the
Web Server role,
the system disables this function.

## Server Settings

Web Server Security (ModSecurity) / Server Settings

### Add ModSecurity configuration file text

 - [GET /modsec_assemble_config_text](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_assemble_config_text.md): This function adds text to a ModSecurity™ configuration file.

Important:

When you disable the
Web Server role,
the system disables this function.

### Run ModSecurity batch settings

 - [GET /modsec_batch_settings](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_batch_settings.md): This function adds, updates, and removes global ModSecurity™ configuration directives.
The function modifies these directives in the /usr/local/apache/conf/modsec2.cpanel.conf
file.

Important:

When you disable the Web Server role,
the system disables this function.

This function only supports the following ModSecurity™ configuration directives:


  setting_idDocumentation
  0SecAuditEngine
  1SecConnEngine
  2SecRuleEngine
  3SecDisableBackendCompression
  4SecGeoLookupDb
  5SecGsbLookupDb
  6SecGuardianLog
  7SecHttpBlKey
  8SecPcreMatchLimit
  9SecPcreMatchLimitRecursion

### Enable staged ModSecurity configuration files

 - [GET /modsec_deploy_settings_changes](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_deploy_settings_changes.md): This function deploys the staged changes to your modsec2.cpanel.conf file and
attempts to restart Apache. If the new settings fail validation, the system restores
the /etc/apache2/conf.d/modsec/modsec2.cpanel.conf file.

Note:

Call the WHM API 1 modsec_set_setting function to prepare your changes for
the modsec2.cpanel.conf file.

Important:

When you disable the
Web Server role,
the system disables this function.

### Return ModSecurity configuration file

 - [GET /modsec_get_config_text](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_get_config_text.md): This function retrieves a ModSecurity™ configuration file's contents.

Important:

When you disable the
Web Server role,
the system disables this function.

### Return all ModSecurity configuration files

 - [GET /modsec_get_configs](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_get_configs.md): This function lists ModSecurity™ configuration files. The system stores the configuration
files in the /usr/local/apache/conf/modsec_vendor_configs directory.

Important:

When you disable the
Web Server role,
the system disables this function.

### Return staged ModSecurity configuration files

 - [GET /modsec_get_configs_with_changes_pending](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_get_configs_with_changes_pending.md): This function lists the ModSecurity™ configuration files that have staged changes.

Important:

When you disable the
Web Server role,
the system disables this function.

### Return ModSecurity logs

 - [GET /modsec_get_log](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_get_log.md): This function retrieves ModSecurity™ log entries from the modsec SQLite database.

Important:

When you disable the
Web Server role,
the system disables this function.

### Return ModSecurity configuration

 - [GET /modsec_get_settings](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_get_settings.md): This function retrieves the server's ModSecurity™ configuration settings. The system
stores these settings in the /usr/local/apache/conf/modsec2.conf file.

Important:

When you disable the Web Server role,
the system disables this function.

### Return ModSecurity module status

 - [GET /modsec_is_installed](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_is_installed.md): This function checks whether the ModSecurity™ module is installed.

Important:

When you disable the Web Server role, the system disables this function.

### Add ModSecurity configuration file include

 - [GET /modsec_make_config_active](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_make_config_active.md): This function adds an include for a ModSecurity™ configuration file to
the modsec2.cpanel.conf file. This makes the ModSecurity configuration file
active.

Important:

When you disable the
Web Server role,
the system disables this function.

### Remove ModSecurity configuration file include

 - [GET /modsec_make_config_inactive](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_make_config_inactive.md): This function removes an include for a ModSecurity™ configuration file from
the modsec2.cpanel.conf file. This makes the ModSecurity configuration file
inactive.

Important:

When you disable the
Web Server role,
the system disables this function.

### Remove ModSecurity configuration

 - [GET /modsec_remove_setting](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_remove_setting.md): This function removes a global ModSecurity™ configuration directive.

Important:

When you disable the
Web Server role,
the system disables this function.

### Update ModSecurity configuration file

 - [GET /modsec_set_config_text](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_set_config_text.md): This function sets the contents of a specified ModSecurity™ configuration file. The system
stages any changes to the configuration file. To deploy the changes, call WHM API 1's
modsec_deploy_rule_changes function.

Important:

When you disable the
Web Server role,
the system disables this function.

### Update ModSecurity configuration

 - [GET /modsec_set_setting](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_set_setting.md): This function sets a global ModSecurity™ configuration directive.

Important:

When you disable the Web Server role, the system disables this function.

