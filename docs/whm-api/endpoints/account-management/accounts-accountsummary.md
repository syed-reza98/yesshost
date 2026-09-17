# Return cPanel account summary

This function retrieves a summary of a user's account.

Note:

You must use either the user or domain parameters.

Endpoint: GET /accountsummary
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string)
    The account's main domain.
    Example: "example.com"

  - `search` (string)
    The search term.
    Example: "example.com"

  - `searchmethod` (string)
    The search method to use.
    Example: "exact"

  - `searchtype` (string)
    The type of search to perform.
    Example: "domain"

  - `user` (string)
    The account's username.
    Example: "username"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.acct` (array)
    An array of objects of account data.

  - `data.acct.backup` (integer)
    Whether backups are enabled.
* 1 Enabled.
* 0 Disabled.
    Enum: 0, 1

  - `data.acct.child_nodes` (array)
    An array that contains the the workload and alias values for each of the child nodes.

  - `data.acct.child_nodes.alias` (string)
    The alias of the child node
    Example: "nodealias"

  - `data.acct.child_nodes.workload` (string)
    The workload delegated to the child node
    Enum: "Mail"

  - `data.acct.disklimit` (any)
    The account's disk space quota.
* unlimited
* A maximum amount of disk space, in mebibyte (MiB).
    Example: "unlimited"

  - `data.acct.diskused` (string)
    The account's current disk space usage. An integer that represents an amount of disk space, in mebibyte (MiB). For example, 14M represents 14 MiB of disk space.
    Example: "14M"

  - `data.acct.domain` (string)
    The account's main domain. A valid domain name on the account.
    Example: "example.com"

  - `data.acct.email` (string)
    The account's contact email address. A valid email address.
    Example: "username@example.com"

  - `data.acct.inodeslimit` (any)
    The limit on the number of files that the account owns.
* unlimited
* A maximum amount of files as an integer.
    Example: "unlimited"

  - `data.acct.inodesused` (integer)
    The number of files that the account owns.
    Example: 1

  - `data.acct.ip` (string)
    The account's main domain's IP address.
    Example: "192.168.0.128"

  - `data.acct.ipv6` (array)
    The account's main domain's IPv6 addresses.
    Example: ["0101:ca75:0101:ca75:0101:ca75:0101:ca77"]

  - `data.acct.is_locked` (integer)
    Whether the account is currently locked.
* 1 Locked.
* 0 Not locked.
    Enum: 0, 1

  - `data.acct.legacy_backup` (integer)
    Whether legacy backups are enabled.
* 1 Enabled.
* 0 Disabled.
    Enum: 0, 1

  - `data.acct.mailbox_format` (string)
    The storage format that the account's email mailboxes use.
* maildir The account's mail is stored in maildir format.
* mbox The account's mail is stored in mbox format.
    Enum: "maildir", "mbox"

  - `data.acct.max_defer_fail_percentage` (any)
    The percentage of failed or deferred email messages that the account
can send per hour before outgoing mail is rate-limited.
* unlimited
* An integer that represents a percentage of messages.
    Example: "unlimited"

  - `data.acct.max_email_per_hour` (any)
    The maximum number of emails that the account can send in one hour.
* unlimited
* An integer that represents a number of sent emails.
    Example: "unlimited"

  - `data.acct.max_emailacct_quota` (any)
    The maximum size that the cPanel account can define when it creates an email account.
* unlimited
* A positive integer that represents the allowable maximum size of an email account, in mebibyte (MiB).
    Example: "unlimited"

  - `data.acct.maxaddons` (any)
    The account's maximum number of addon domains.
* unlimited
 unknown*  The account cannot use any addon domains.
* An integer that represents a number of addon domains.
    Example: "unlimited"

  - `data.acct.maxftp` (any)
    The account's maximum number of FTP accounts.
* unlimited
* An integer that represents a number of FTP accounts.
    Example: "unlimited"

  - `data.acct.maxlst` (any)
    The account's maximum number of mailing lists.
* unlimited
* An integer that represents a number of mailing lists.
    Example: "unlimited"

  - `data.acct.maxparked` (any)
    The account's maximum number of parked domains (aliases).
* unlimited
 unknown* The account cannot use any parked domains.
* An integer that represents a number of parked domains.
    Example: "unlimited"

  - `data.acct.maxpop` (any)
    The account's maximum number of email addresses.
* unlimited
* An integer that represents a number of email accounts.
    Example: "unlimited"

  - `data.acct.maxsql` (any)
    The account's maximum number of SQL databases.
* unlimited
* An integer that represents a number of SQL databases.
    Example: "unlimited"

  - `data.acct.maxsub` (any)
    The account's maximum number of subdomains.
* unlimited
 unknown* The account cannot use any subdomains.
* An integer that represents a number of subdomains.
    Example: "unlimited"

  - `data.acct.min_defer_fail_to_trigger_protection` (any)
    The minimum number of failed or deferred messages that the account can send before
outgoing mail is subject to rate-limiting.
* unlimited
* An integer that represents a number of failed or deferred messages.
    Example: "5"

  - `data.acct.outgoing_mail_hold` (integer)
    Whether to retain outgoing mail in the mail queue for the account's users.
* 1 Suspend and force failure of outgoing email.
* 0 Unsuspend outgoing email.
    Enum: 0, 1

  - `data.acct.outgoing_mail_suspended` (integer)
    Whether to suspend outgoing email from the account's users and force failure of any of their mail currently in the mail queue.
* 1 - Suspend and force failure of outgoing email.
* 0 - Unsuspend outgoing email.

Note:

If mail for a cPanel user's account is suspended, the system will reject their email before the system puts it in the mail server queue.
    Enum: 0, 1

  - `data.acct.owner` (string)
    The account's owner.
* root
* A reseller account's username.
    Example: "root"

  - `data.acct.partition` (string)
    The partition that contains the account's home directory. The name of a partition on the server.
    Example: "home"

  - `data.acct.plan` (string)
    The account's hosting package. The name of a package on the server.
    Example: "packagename"

  - `data.acct.shell` (string)
    The account's shell. A shell location on the server.
    Example: "/bin/bash"

  - `data.acct.startdate` (string)
    The account creation date. The date in YY-Mon-DD HH-mm human-readable format, where:- YY represents the year.
* Mon represents the month.
* DD represents the date.
* HH represents the hour.
* mm represents the minute.
    Example: "13 May 22 16:03"

  - `data.acct.suspended` (integer)
    Whether the account is currently suspended.
* 1  Suspended.
* 0  Not suspended.
    Enum: 0, 1

  - `data.acct.suspendreason` (string,null)
    The reason for account suspension, if one was provided.
* null The account is not currently suspended.
* A blank value, if the suspender did not provide a reason.
* A message that explains the suspension.
    Example: "not suspended"

  - `data.acct.suspendtime` (string,null)
    The time of suspension.
* null The account is not currently suspended.
* The time at which the account became suspended.

  - `data.acct.temporary` (integer)
    Whether the Customer Support Ticket process created this user for temporary access to the system.
* 1 - Temporary user.
* 0 - Regular user.
    Enum: 0, 1

  - `data.acct.is_temporary_domain` (integer)
    Whether the main domain is a temporary domain.
* 1 - The account's main domain is a temporary domain.
* 0 - The account's main domain is not a temporary domain.

Note:

For more information about temporary domains, read our [Temporary Domains](https://go.cpanel.net/cp-temporary-domain) documentation.
    Enum: 0, 1

  - `data.acct.theme` (string)
    The account's cPanel interface theme.
* Any valid theme on the server.
    Example: "jupiter"

  - `data.acct.uid` (integer)
    The account's user ID on the system.

  - `data.acct.unix_startdate` (integer)
    The account creation date. The account creation date and time, in Unix time format.
    Example: 1369256589

  - `data.acct.user` (string)
    The account username. A cPanel account or reseller username on the server.
    Example: "username"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "accountsummary"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 Success
* 0 Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


