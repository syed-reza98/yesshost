# Restore Queue Reporting

Account Restoration / Restore Queue Reporting

## Return backup modules list

 - [GET /restore_modules_summary](https://api.docs.cpanel.net/specifications/whm.openapi/restore-queue-reporting/transfers-restore_modules_summary.md): This function lists backup modules and their descriptions.

## Validate restoration queue is active

 - [GET /restore_queue_is_active](https://api.docs.cpanel.net/specifications/whm.openapi/restore-queue-reporting/backup-restore_queue_is_active.md): This function checks whether the system's restoration queue is actively processing tasks.

## Return active restoration tasks list

 - [GET /restore_queue_list_active](https://api.docs.cpanel.net/specifications/whm.openapi/restore-queue-reporting/backup-restore_queue_list_active.md): This function lists the tasks that the restoration queue is actively processing.

## Return completed restoration tasks list

 - [GET /restore_queue_list_completed](https://api.docs.cpanel.net/specifications/whm.openapi/restore-queue-reporting/backup-restore_queue_list_completed.md): This function lists the restoration queue's completed tasks.

Important:

This function's output varies dramatically. The /usr/local/cpanel/bin/backup_restore_manager script run with the list_finished option determines this output..

Note:

On servers that run CentOS 7, you may see a named warning about the absence of SPF resource records on DNS.
  * This warning is not relevant on CentOS 7 servers, because RFC 7208 deprecated SPF records. CentOS 7 servers use TXT records instead of SPF records.
  * Red Hat 7.1 and CentOS 7.1 both contain bind-9.9.4-23.el7, which is an updated version of BIND that complies with RFC 7208. To resolve this issue, update your operating system to a version that contains the updated version of BIND. For more information, read the Red Hat Bugzilla case about SPF record errors.

## Return pending restoration tasks list

 - [GET /restore_queue_list_pending](https://api.docs.cpanel.net/specifications/whm.openapi/restore-queue-reporting/backup-restore_queue_list_pending.md): This function lists the tasks that the restoration queue has not yet processed.

## Return restoration tasks list

 - [GET /restore_queue_state](https://api.docs.cpanel.net/specifications/whm.openapi/restore-queue-reporting/backup-restore_queue_state.md): This function lists the tasks in the restoration queue.

