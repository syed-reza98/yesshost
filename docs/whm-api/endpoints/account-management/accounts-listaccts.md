# Return cPanel accounts

This function lists the accounts on the server.

Endpoint: GET /listaccts
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `search` (string)
    A Perl Compatible Regular Expression (PCRE) that filters the results.

Note:
 * The system matches the PCRE against the searchtype parameter's specified type.
 * If you do not specify a value for both the searchtype and search parameters,
   the function returns all of the server's accounts.
    Example: "username"

  - `searchmethod` (string)
    The function's search method.
* exact - The matched value and the search value must be identical.
* regex - The matched value must contain the search value.
    Enum: "exact", "regex"

  - `searchtype` (string)
    The account information to query. If you do not specify a value
for both the searchtype and search parameters, the function returns all
of the server's accounts.
* domain - Match domains against the search regular expression.
* owner - Match the WHM user who owns the account against the search regular expression.
* user - Match usernames against the search regular expression.
* ip - Match IP addresses against the search regular expression.
* package - Match hosting plans (packages) against the search regular expression.
    Enum: "domain", "owner", "user", "ip", "package"

  - `want` (string)
    The returns to include in the output for each account.

If you do not specify a value, the function's output includes all of its returns.
    Example: "domain,diskused"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.acct` (array)
    An array of objects containing account data.

  - `data.acct.backup` (integer)
    Whether backups are enabled.
* 1 - Enabled.
* 0 - Disabled.
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
* unlimited — The account has unlimited disk space quota.
* A maximum amount of disk space, in megabytes (MB).

  - `data.acct.diskused` (string)
    The account's current disk space usage, in megabytes (MB), appended with M.

For example, 14M represents 14 megabytes of current disk space usage.
    Example: "14M"

  - `data.acct.domain` (string)
    The account's main domain.
    Example: "example.com"

  - `data.acct.email` (string)
    The account's contact email address.
    Example: "username@example.com"

  - `data.acct.has_backup` (integer)
    Whether a backup of the account exists.
* 1 - A backup of the account exists.
* 0 - A backup of the account does not exist.
    Enum: 0, 1

  - `data.acct.inodeslimit` (any)
    The limit on the number of files that the account owns.
* unlimited — The account can own an unlimited number files.
* A positive integer.

  - `data.acct.inodesused` (integer)
    The number of files that the account owns.
    Example: 1

  - `data.acct.ip` (string)
    The IPv4 address of the account's main domain.
    Example: "192.168.0.128"

  - `data.acct.ipv6` (array)
    The IPv6 address of the account's main domain.
    Example: ["0101:ca75:0101:ca75:0101:ca75:0101:ca77"]

  - `data.acct.is_locked` (integer)
    Whether the account is currently locked.
* 1 - The account is locked.
* 0 - The account is not locked.
    Enum: 0, 1

  - `data.acct.is_temporary_domain` (integer)
    Whether the main domain is a temporary domain.
* 1 - The account's main domain is a temporary domain.
* 0 - The account's main domain is not a temporary domain.

Note:

For more information about temporary domains, read our [Temporary Domains](https://go.cpanel.net/cp-temporary-domain) documentation.
    Enum: 0, 1

  - `data.acct.legacy_backup` (integer)
    Whether legacy backups are enabled.
* 1 - Enabled.
* 0 - Disabled.
    Enum: 0, 1

  - `data.acct.mailbox_format` (string)
    The type of mailbox the account uses.

* mdbox
* maildir
    Enum: "mdbox", "maildir"

  - `data.acct.max_defer_fail_percentage` (any)
    The [percentage of failed or deferred email
messages](https://go.cpanel.net/howtopreventspam)
that the account can send per hour before outgoing
mail is rate-limited.
* unlimited — The account can send unlimited emails per hour.
* An integer that represents a precentage of messages.

  - `data.acct.max_email_per_hour` (any)
    The [maximum number of emails](https://go.cpanel.net/howtopreventspam)
that the account can send in one hour.
* unlimited — The account can send unlimited emails per hour.
* An integer that represents a number of sent emails.

  - `data.acct.max_emailacct_quota` (any)
    The maximum size, in megabytes (MB), that the account
can define when it creates an email account.

* unlimited — The account can set unlimited quotas.
* A positive integer that represents the allowable maximum
size of an email account, in megabytes (MB).

  - `data.acct.maxaddons` (any)
    The account's maximum number of addon domains.
* unlimited — The account can create unlimited addon domains.
 unknown* — The account cannot create addon domains.
* An integer that represents a number of addon domains.

  - `data.acct.maxftp` (any)
    The account's maximum number of FTP accounts.
* unlimited — The account can create unlimited FTP accounts.
* An integer that represents a number of FTP accounts.

  - `data.acct.maxlst` (any)
    The account's maximum number of mailing lists.
* unlimited — The account can create unlimited mailing lists.
* An integer that represents a number of mailing lists.

  - `data.acct.maxparked` (any)
    The account's maximum number of parked domains (aliases).
* unlimited — The account can create unlimited parked domains.
 unknown* — The account cannot use parked domains.
* An integer that represents a number of parked domains.

  - `data.acct.maxpop` (any)
    The account's maximum number of email addresses.
* unlimited — The account can create unlimited email addresses.
* An integer that represents a number of email accounts.

  - `data.acct.maxsql` (any)
    The account's maximum number of each available type of SQL database.

For example, if you set this value to 5 and the system administrator allows MySQL® and PostgreSQL®
databases, users can create up to five MySQL databases and up to five PostgreSQL databases.

* unlimited — The account can create unlimited SQL databases.
* An integer that represents a number of SQL databases.

  - `data.acct.maxsub` (any)
    The account's maximum number of subdomains.
* unlimited — The account can create unlimited subdomains.
 unknown* - The account cannot use subdomains.
* An integer that represents a number of subdomains.

  - `data.acct.min_defer_fail_to_trigger_protection` (any)
    The [minimum number of failed or deferred messages](https://go.cpanel.net/howtopreventspam) that the
account can send before outgoing mail is subject to rate-limiting.
* unlimited — The account can send unlimited emails.
* An integer that represents a number of failed or deferred messages.

  - `data.acct.outgoing_mail_hold` (integer)
    Whether to retain outgoing mail in the mail queue for the account's users.
* 1 - Hold outgoing email in the mail queue.
* 0 - Do not hold outgoingemail in the mail queue.
    Enum: 1, 0

  - `data.acct.outgoing_mail_suspended` (integer)
    Whether to suspend outgoing email from the account's users and force failure of any of their mail currently in the mail queue.
* 1 - Suspend and forcefailure of outgoing email.
* 0 - Do not suspend and forcefailure of outgoing email.

Note:

If mail for a cPanel user's account is suspended, the system will reject their email before the system puts it in the mail server queue.
    Enum: 0, 1

  - `data.acct.owner` (string)
    The reseller account username or root user that owns the account.
    Example: "root"

  - `data.acct.partition` (string)
    The partition that contains the account's home directory.
    Example: "home"

  - `data.acct.plan` (string)
    The account's hosting package.
    Example: "packagename"

  - `data.acct.shell` (string)
    The absolute path of the account's shell location.
    Example: "/bin/bash"

  - `data.acct.startdate` (string)
    The account creation date, in YY Mon DD HH:mm format.
    Example: "13 May 22 16:03"

  - `data.acct.suspended` (integer)
    Whether the account is currently suspended.
* 1 - Suspended.
* 0 - Not suspended.
    Enum: 0, 1

  - `data.acct.suspendreason` (any)
    The reason for account suspension, if one was provided.

  - `data.acct.suspendtime` (integer,null)
    The time of suspension.
* null - The account is not currently suspended.
* The time at which the account became suspended.
    Example: 1594040856

  - `data.acct.temporary` (integer)
    Whether the Customer Support Ticket process created this user for temporary access to the system.
* 1 - Temporary user.
* 0 - Regular user.
    Enum: 0, 1

  - `data.acct.theme` (string)
    The account's cPanel interface theme.
    Example: "jupiter"

  - `data.acct.uid` (integer)
    The account's user ID on the system.
    Example: 1001

  - `data.acct.unix_startdate` (integer)
    The account creation date.
    Example: 1369256589

  - `data.acct.user` (string)
    The account username.
    Example: "username"

  - `data.acct.standalone_feature` (string)
    The unique ID of the standalone feature associated with the account's package, if any.
* An empty string if the package has no standalone features.
    Example: "standalone-nova"

  - `data.acct.standalone_feature_name` (string)
    The name of the standalone feature associated with the account's package, if any.
* An empty string if the package has no standalone features.
* The feature's name if a standalone feature exists.
    Example: "AI App Builder"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "listaccts"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


