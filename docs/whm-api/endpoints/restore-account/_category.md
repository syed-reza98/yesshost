# Restore Account

Account Restoration / Restore Account

## Restore user account from backup

 - [GET /restore_queue_add_task](https://api.docs.cpanel.net/specifications/whm.openapi/restore-account/backup-restore_queue_add_task.md): This function restores a user's cPanel account from a backup file.

## Restore account backup

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

## Validate username during restoration

 - [GET /verify_new_username_for_restore](https://api.docs.cpanel.net/specifications/whm.openapi/restore-account/nameconflict-verify_new_username_for_restore.md): This function checks for username conflicts during account restoration. If the function detects a username conflict, it outputs an error message in the reason return.

