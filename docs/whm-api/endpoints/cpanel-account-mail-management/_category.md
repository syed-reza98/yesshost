# cPanel Account Mail Management

Mail / cPanel Account Mail Management

## Return email delivery records by search criteria

 - [GET /emailtrack_search](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/exim-emailtrack_search.md): This function retrieves email delivery records.

Warning:

* On most servers, this function returns a large amount of output. We strongly
recommend that you filter and
sort the output.
* The following example uses the filter and sort options:

  https://hostname.example.com:2087/cpsess##########/json-api/emailtrack_search?api.version=1&api.filter.enable=1&api.filter.a.field=sendunixtime&api.filter.a.arg0=1628889719&api.filter.a.type=gt&api.filter.b.field=sendunixtime&api.filter.b.arg0=1629847321&api.filter.b.type=lt&api.sort.enable=1&api.sort.a.field=sendunixtime&api.sort.a.reverse=0&api.chunk.enable=1&api.chunk.size=25&api.chunk.start=1&success=1

## Return cPanel account email tracking statistics

 - [GET /emailtrack_stats](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/exim-emailtrack_stats.md): This function retrieves email tracking statistics.

## Return all cPanel accounts email tracking statistics

 - [GET /emailtrack_user_stats](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/exim-emailtrack_user_stats.md): This function retrieves email tracking statistics for each user.

## Remove email account messages by Dovecot query

 - [GET /expunge_mailbox_messages](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/mailboxes-expunge_mailbox_messages.md): This function removes mail messages from a cPanel account that you select with a query.

Important:

  When you disable the Receive Mail role, the system disables this function.

## Remove email account messages by mailbox GUID

 - [GET /expunge_messages_for_mailbox_guid](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/mailboxes-expunge_messages_for_mailbox_guid.md): This function removes mail messages from a cPanel account.

Important:

  When you disable the Receive Mail role, the system disables this function.

## Return cPanel account mailboxes status by name

 - [GET /get_mailbox_status](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/mailboxes-get_mailbox_status.md): This function lists the status of a cPanel's mail account's mailboxes.

Important:

  When you disable the Receive Mail role, the system disables this function.

## Return cPanel account mailboxes status list

 - [GET /get_mailbox_status_list](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/mailboxes-get_mailbox_status_list.md): This function lists the status of a cPanel's mail account's mailboxes.

Important:

  When you disable the Receive Mail role, the system disables this function.

## Return cPanel account unique email recipients

 - [GET /get_unique_recipient_count_per_sender_for_user](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/exim-get_unique_recipient_count_per_sender_for_user.md): This function gets the number of unique recipients that a system user sent mail to within a period of time. It groups this data by each of the user's email accounts.

## Return all cPanel account unique email recipients

 - [GET /get_unique_sender_recipient_count_per_user](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/exim-get_unique_sender_recipient_count_per_user.md): This function gets a count of the email addresses that each system account sent mail to within a specific period of time. It groups the data by each system user for all the system's users.

## Return cPanel account forward destination

 - [GET /get_user_email_forward_destination](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/email-get_user_email_forward_destination.md): This function retrieves the destination to which the system forwards a system account's email.

Note:

* Usually, the system sends notices about the server's problems and activity to the root account.
* If you do not use the suexec module, the nobody user receives bounce messages from email that CGI scripts send.

## Add cPanel account to outbound email hold queue

 - [GET /hold_outgoing_email](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/accounts-hold_outgoing_email.md): This function sets Exim's queue to hold email that a user sends to an external address.

Note:

  If mail for a cPanel user's account is suspended, the system will reject their email before the mail server puts it in the queue.

## Return cPanel account's email accounts

 - [GET /list_pops_for](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/email-list_pops_for.md): This function lists a cPanel account’s email accounts. To prevent falsified data or symlink exploitation, the function uses the specified cPanel account user, rather than root user, to read data from the user’s home directory. The system compares the collected data from the user’s home directory to a server-wide domains list. The comparison of the data validates whether you can trust the data.

Important:

  When you disable the Receive Mail role, the system disables this function.

## Release cPanel account queued outgoing emails

 - [GET /release_outgoing_email](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/accounts-release_outgoing_email.md): This function releases outgoing email in the email queue for a single cPanel account user.

Note:

If mail for a cPanel user's account is suspended, the system will reject their email before the mail server puts it in queue.

## Update cPanel account email forward destination

 - [GET /set_user_email_forward_destination](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/email-set_user_email_forward_destination.md): This function sets the destination to which the system forwards a system account's email.

Notes:

* Usually, the system sends notices about the server's problems and activity to the root account.
* If you do not use the suexec module, the nobody user receives bounce messages from email that CGI scripts send.

## Suspend cPanel account outgoing email

 - [GET /suspend_outgoing_email](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/accounts-suspend_outgoing_email.md): This function sets Exim's queue to suspend and force failure for email that a user sends to an external address.

Note:

  If mail for a cPanel user's account is suspended, the system will reject their email before the mail server puts it in queue.

## Stop cPanel account IMAP and POP3 connections

 - [GET /terminate_cpuser_mailbox_sessions](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/mailboxes-terminate_cpuser_mailbox_sessions.md): This function terminates all IMAP and POP3 connections for a cPanel account.

Note:

This function ends connections for every email address, which includes the default address.

## Unsuspend account outgoing email

 - [GET /unsuspend_outgoing_email](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-mail-management/accounts-unsuspend_outgoing_email.md): This function unsuspends outgoing email for a cPanel account's users.

