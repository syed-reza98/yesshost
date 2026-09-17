# Update cPanel account

This function modifies a cPanel account.

Warning:

We strongly recommend that you do not modify a single cPanel account's settings if that cPanel account uses a hosting plan (package). If the package values change, the system will overwrite any of your custom values with the package's new values.

Note:

On servers that run CentOS 7, you may see a named warning about the absence of SPF resource records on DNS.
  * This warning is not relevant on CentOS 7 servers, because RFC 7208 deprecated SPF records. CentOS 7 servers use TXT records instead of SPF records.
  * Red Hat 7.1 and CentOS 7.1 both contain bind-9.9.4-23.el7, which is an updated version of BIND that complies with RFC 7208. To resolve this issue, update your operating system to a version that contains the updated version of BIND. For more information, read the Red Hat Bugzilla case about SPF record errors.

Endpoint: GET /modifyacct
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `user` (string, required)
    The cPanel account's current username.
    Example: "example"

  - `account_enhancements` (string)
    A list of names for Account Enhancements to assign to the cPanel account.
 To view your server's Account Enhancements, run WHM API 1's list_account_enhancements function.

Warning:

You must provide a complete list of Account Enhancements for the cPanel account. The parameter will add or remove Account Enhancements
based on the names that you provide.

  - `BACKUP` (integer)
    Whether backups are enabled for the cPanel account.

* 1 — Enable backups.
* 0 — Disable backups.

This parameter defaults to the defined system value.

Note:

You must have root-level privileges to set this parameter.
    Enum: 0, 1

  - `BWLIMIT` (any)
    The cPanel account's maximum bandwidth use, in bytes.

* 0 or unlimited — The cPanel account can use unlimited bandwidth.

This parameter defaults to the defined system value.
    Example: "unlimited"

  - `contactemail` (string)
    The cPanel account's contact email address.

This parameter defaults to the defined system value.
    Example: "username@example.com"

  - `DBOWNER` (string)
    The owner of the cPanel account's MySQL databases.

This parameter defaults to the defined system value.
    Example: "example"

  - `DISK_BLOCK_LIMIT` (integer)
    The number of disk blocks for the cPanel account, in kilobytes (KB).

This parameter defaults to the defined system value.
    Example: 100000000

  - `DNS` (string)
    The cPanel account's main domain.

This parameter is an alias of domain. If you set both
the DNS and domain parameters, the DNS parameter will
override the domain parameter.

This parameter defaults to the defined system value.
    Example: "example.com"

  - `domain` (string)
    The cPanel account's main domain.

This parameter is an alias of DNS. If you set both
the DNS and domain parameters, the DNS parameter will
override the domain parameter.

This parameter defaults to the defined system value.
    Example: "example.com"

  - `HASCGI` (integer)
    Whether CGI access is enabled for the cPanel account.

* 1 — Enable CGI access.
* 0 — Disable CGI access.

This parameter defaults to the defined system value.

Note:

When a server profile disables the Web Server role, you cannot enable CGI access.
    Enum: 0, 1

  - `HASDKIM` (integer)
    Whether DKIM is enabled for the cPanel account.

* 1 — Enable DKIM.
* 0 — Disable DKIM.

This parameter defaults to the defined system value.
    Enum: 0, 1

  - `HASDMARC` (integer)
    Whether DMARC is enabled for the cPanel account.

* 1 — Enable DMARC.
* 0 — Disable DMARC.

This parameter defaults to the defined system value.
    Enum: 0, 1

  - `HASSHELL` (integer)
    Whether shell (SSH) access is enabled for the cPanel account.

* 1 — Enable shell access.
* 0 — Disable shell access.

This parameter defaults to the defined system value.

Note:

We strongly recommend that you use the shell parameter to specify a shell for SSH access.
    Enum: 0, 1

  - `HASSPF` (integer)
    Whether SPF is enabled for the cPanel account.

* 1 — Enable SPF.
* 0 — Disable SPF.

This parameter defaults to the defined system value.
    Enum: 0, 1

  - `LANG` (string)
    The cPanel account's display language.

This parameter defaults to the defined system value.
    Example: "english-utf8"

  - `LOCALE` (string)
    The cPanel account's default locale, in two-letter ISO-3166 code format.

This parameter defaults to the defined system value.
    Example: "en"

  - `mail_node_alias` (any)
    The server that will manage the cPanel account's mail.

* .local — Make the local server manage the cPanel account’s mail. If the account currently uses a child node for its mail, this will transfer the account’s mail to the local server.
* The alias (friendly name) of a child node that should manage the cPanel account’s mail.

  When you distribute an account’s mail, the function adds a LINK entry to the
  /var/cpanel/accounting.log file.

This parameter defaults to the account’s current mail node, or .local if the account’s mail is on the local server.
    Example: "mailnode"

  - `MAILBOX_FORMAT` (string)
    The storage format that the cPanel account's mailboxes use.

* maildir
* mbox

This parameter defaults to the defined system value.
    Enum: "maildir", "mbox"

  - `MAX_DEFER_FAIL_PERCENTAGE` (any)
    The percentage of failed or deferred email messages that the
cPanel account can send per hour before outgoing mail is rate-limited.

* 0 or unlimited — The cPanel account can send an unlimited number of failed or deferred messages.

This parameter defaults to the defined system value.
    Example: "unlimited"

  - `MAX_EMAIL_PER_HOUR` (any)
    The maximum number of emails that the cPanel account can send in one hour.

* 0 or unlimited — The cPanel account can send an unlimited number of emails.

This parameter defaults to the defined system value.
    Example: "unlimited"

  - `MAX_EMAILACCT_QUOTA` (any)
    The maximum quota, in megabytes (MB), that the cPanel account can define
when it creates an email account.

* unlimited — The cPanel account can set unlimited quotas.

This parameter defaults to the defined system value, or to unlimited if you do not define either the plan or MAX_EMAILACCT_QUOTA parameters.

Important:

* This value applies to each email account, not each cPanel account.
* If you specify a MAX_EMAILACCT_QUOTA value, the function will overwrite the plan's defined value for that cPanel
account.
* We recommend that you allow the cPanel account's plan to determine this value.
    Example: "unlimited"

  - `max_team_users` (integer)
    The maximum number of Team users for this account.
This parameter should be a number between 0 and the server's default value, inclusively.
This parameter can not be a number greater than the server's default value.
    Example: 7

  - `MAXADDON` (any)
    The cPanel account's maximum number of addon domains.

* 0 or unlimited — The cPanel account can use unlimited addon domains.

This parameter defaults to the defined system value.
    Example: "unlimited"

  - `MAXFTP` (any)
    The cPanel account's maximum number of FTP accounts.

* unlimited — The cPanel account can create unlimited FTP accounts.

This parameter defaults to the defined system value.
    Example: "unlimited"

  - `MAXLST` (any)
    The cPanel account's maximum number of mailing lists.

* 0 or unlimited — The cPanel account can create unlimited mailing lists.

This parameter defaults to the defined system value.
    Example: "unlimited"

  - `MAXPARK` (any)
    The cPanel account's maximum number of parked domains (aliases).

* unlimited — The cPanel account can use unlimited parked domains.

This parameter defaults to the defined system value.
    Example: "unlimited"

  - `MAXPASSENGERAPPS` (any)
    The cPanel account's maximum number of Ruby applications.

* unlimited — The cPanel account can use unlimited Ruby applications.

This parameter defaults to the defined system value.
    Example: "unlimited"

  - `MAXPOP` (any)
    The maximum number of email accounts for the cPanel account.

* unlimited — The cPanel account can create unlimited email accounts.

This parameter defaults to the defined system value.
    Example: "unlimited"

  - `MAXSQL` (any)
    The maximum number of each available type of SQL database for
the cPanel account. For example, if you set this value to 5
and the system administrator allows MySQL® and PostgreSQL®
databases, users can create up to five MySQL databases and up
to five PostgreSQL databases.

* unlimited — The cPanel account can create unlimited databases.

This parameter defaults to the defined system value.
    Example: "unlimited"

  - `MAXSUB` (any)
    The maximum number of subdomains for the cPanel account.

* unlimited — The cPanel account can create unlimited subdomains.

This parameter defaults to the defined system value.
    Example: "unlimited"

  - `modify_firewall` (integer)
    Whether to modify the firewall rules as part of the cPanel account modification.

* 1 — Modify the firewall rules.
* 0 — Do not modify the firewall rules.

Note:

If you do not set this parameter, the system will modify the firewall based on the Do not make changes to the firewall during cPanel account modification. setting in WHM's Tweak Settings interface (WHM >> Home >> Server Configuration >> Tweak Settings).
    Enum: 0, 1

  - `MXCHECK-*` (integer)
    The priority of the cPanel account's primary mail exchanger.

This parameter defaults to the defined system value.

Note:

The parameter name consists of MXCHECK, a hyphen, and the primary domain name of
the cPanel account. For example, MXCHECK-example.com=10.

  - `newuser` (string)
    The cPanel account's new username.

This parameter defaults to the defined system value.

Note:

* Usernames cannot begin with a number or the string test.
* Usernames can contain 16 characters or fewer if database prefixes are enabled.
* The first eight characters of usernames must be unique. MySQL requires this due to potential conflicts with cPanel account transfers. However, this limit requirement does not exist on servers that use MariaDB.
* If you rename the cPanel account and database prefixing is enabled, you can also use the rename_database_objects parameter.
    Example: "example1"

  - `notify_account_authn_link` (integer)
    Whether to send a notification when someone links the cPanel
account to an external authentication account.

* 1 — Enabled.
* 0 — Disabled.

This parameter defaults to the defined system value.
    Enum: 0, 1

  - `notify_account_authn_link_notification_disabled` (integer)
    Whether to send a notification when someone disables notifications
for external authentication account links.

* 1 — Enabled.
* 0 — Disabled.

This parameter defaults to the defined system value.
    Enum: 0, 1

  - `notify_autossl_expiry` (integer)
    Whether to send a notification when an AutoSSL certificate expires.

* 1 — Enabled.
* 0 — Disabled.

This parameter defaults to the defined system value.
    Enum: 0, 1

  - `notify_autossl_expiry_coverage` (integer)
    Whether to send a notification AutoSSL cannot renew a certificate
because domains that fail Domain Control Validation (DCV) exist on the current
certificate.

* 1 — Enabled.
* 0 — Disabled.

This parameter defaults to the defined system value.
    Enum: 0, 1

  - `notify_autossl_renewal` (integer)
    Whether to send a notification when AutoSSL renews a certificate.

* 1 — Enabled.
* 0 — Disabled.

This parameter defaults to the defined system value.
    Enum: 0, 1

  - `notify_autossl_renewal_coverage` (integer)
    Whether to send a notification when AutoSSL renews a certificate
but the new certificate lacks at least one domain that the previous certificate
secured.

* 1 — Enabled.
* 0 — Disabled.

This parameter defaults to the defined system value.
    Enum: 0, 1

  - `notify_contact_address_change` (integer)
    Whether to send a notification when someone changes the contact
address for the cPanel account.

* 1 — Enabled.
* 0 — Disabled.

This parameter defaults to the defined system value.
    Enum: 0, 1

  - `notify_contact_address_change_notification_disabled` (integer)
    Whether to send a notification when disables the notification
for contact address changes.

* 1 — Enabled.
* 0 — Disabled.

This parameter defaults to the defined system value.
    Enum: 0, 1

  - `notify_disk_limit` (integer)
    Whether to send a notification when the cPanel account reaches its disk usage limit.

* 1 — Enabled.
* 0 — Disabled.

This parameter defaults to the defined system value.
    Enum: 0, 1

  - `notify_password_change` (integer)
    Whether to send a notification when someone changes the cPanel account's
password.

* 1 — Enabled.
* 0 — Disabled.

This parameter defaults to the defined system value.
    Enum: 0, 1

  - `notify_password_change_notification_disabled` (integer)
    Whether to send a notification when someone disables notifications
for password changes.

* 1 — Enabled.
* 0 — Disabled.

This parameter defaults to the defined system value.
    Enum: 0, 1

  - `notify_ssl_expiry` (integer)
    Whether to send a notification when an SSL certificate on the
cPanel account expires.

* 1 — Enabled.
* 0 — Disabled.

This parameter defaults to the defined system value.
    Enum: 0, 1

  - `OUTGOING_EMAIL_SUSPENDED` (integer)
    Whether to suspend outgoing email on the cPanel account.

* 1 — Suspend outgoing email.
* 0 — Do not suspend outgoing email.

This parameter defaults to the defined system value.
    Enum: 0, 1

  - `owner` (string)
    A new owner's username or the root user, to change the cPanel account's owner.

This parameter defaults to the defined system value.

Note:

The authenticated user must have root privileges in order to assign the cPanel account to a reseller other than that cPanel account.
    Example: "reseller_name"

  - `PUSHBULLET_ACCESS_TOKEN` (string)
    An access token for the cPanel account's Pushbullet™ notifications.

This parameter defaults to the defined system value.

  - `QUOTA` (any)
    The cPanel account's disk space quota.

* An integer in multiples of 1,048,576 bytes.
* 0 or unlimited — The cPanel account's disk space is unlimited.

This parameter defaults to the defined system value.
    Example: "unlimited"

  - `remove_missing_extensions` (string)
    A space-separated list of removed, missing, or uninstalled package extensions.

Warning:

This parameter removes all of the extensions that you list from the _PACKAGE_EXTENSIONS variable in the user file. It will not remove the extensions' variables. For more information, read our Guide to Package Extensions.
    Example: "packageext1 packageext2"

  - `rename_database_objects` (integer)
    Whether to rename the cPanel account's database objects to use a new username's database prefix.

* 1 — Rename the cPanel account's database objects.
* 0 — Do not rename the cPanel account's database objects.

Warning:

* The cPanel account owner must update any applications to use the new database object names.
* Use this parameter carefully, as it may cause confusion for system administrators.

MySQL does not allow you to rename a database. When cPanel & WHM "renames" a database, the system performs the following steps:

1. The system creates a new database.
1. The system moves data from the old database to the new database.
1. The system recreates grants and stored code in the new database.
1. The system deletes the old database and its grants.

Warning:

* If any of the first three steps fail, the system returns an error and attempts to restore the database's original state. If the restoration process fails, the API function's error response describes these additional failures.
* In rare cases, the system creates the second database successfully, but fails to delete the old database or grants. The system treats the rename action as a success; however, the API function returns warnings that describe the failure to delete the old database or grants.

Note:

This parameter only applies to servers that use database prefixing.
    Enum: 0, 1

  - `reseller` (integer)
    Whether to grant reseller privileges to the cPanel account.

* 1 — Grant reseller privileges.
* 0 — Do not grant reseller privileges.

Note:

You must have root-level privileges to use this parameter.
    Enum: 0, 1

  - `RS` (string)
    The cPanel account's cPanel theme.

This parameter defaults to the defined system value.
    Example: "jupiter"

  - `shell` (string)
    The absolute filepath to the shell's location.

This parameter defaults to the defined system value.
    Example: "/bin/bash"

  - `spamassassin` (integer)
    Whether Apache SpamAssassin™ is enabled for the cPanel account.

This parameter defaults to the defined system value.
    Enum: 0, 1

  - `STARTDATE` (integer)
    A timestamp to use as the cPanel account's creation date.

This parameter defaults to the defined system value.

Note:

This parameter does not provide user access controls. For example, you cannot modify a
cPanel account's date to prevent a user from logging in to the server.
    Example: 1549471343

  - `STYLE` (string)
    The cPanel account's cPanel interface theme style.

This parameter defaults to the defined system value.
    Example: "Glass"

  - `update_existing_email_account_quotas` (integer)
    Whether to update the quota for existing email accounts to match the value of MAX_EMAILACCT_QUOTA setting.

* 1 — Update quota for existing email accounts.
* 0 — Do not update quota for existing email accounts.

Important:

To use this parameter, you must also use the MAX_EMAILACCT_QUOTA parameter.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `data` (object)

  - `data.cpuser` (object)
    An object that contains the cPanel account's modified information.

Note:

* The possible properties in this section are the same as the possible query parameters (the attributes of the cPanel account).
* These properties show up even if the query did not modify them.
* Some of these properties only appear under certain other conditions.
* If the cPanel account or its hosting plan use package extensions, the cpuser object will also include the extension's variables.
    Example: {"BACKUP":"1","BWLIMIT":"0","CONTACTEMAIL":"example@example.com","CONTACTEMAIL2":"","DBOWNER":"example","DEADDOMAINS":[],"DEMO":"0","DISK_BLOCK_LIMIT":"0","DOMAIN":"example.com","DOMAINS":["subdomain.example.com"],"FEATURELIST":"default","HASCGI":"1","HASDKIM":"1","HASDMARC":"1","HASSPF":"1","HOMEDIRLINKS":[],"IP":"172.16.1.13","LEGACY_BACKUP":"0","LOCALE":"en","MAILBOX_FORMAT":"maildir","MAXADDON":"0","MAXFTP":"unlimited","MAXLST":"unlimited","MAXPARK":"0","MAXPOP":"unlimited","MAXSQL":"unlimited","MAXSUB":"unlimited","MAX_DEFER_FAIL_PERCENTAGE":"unlimited","MAX_EMAILACCT_QUOTA":"unlimited","MAX_EMAIL_PER_HOUR":"unlimited","MTIME":"1560518791","MXCHECK-example.com":"0","OWNER":"example","PLAN":"default","PUSHBULLET_ACCESS_TOKEN":"","RS":"jupiter","STARTDATE":"1554919365","USER":"example","UTF8MAILBOX":"1","_PACKAGE_EXTENSIONS":"","__CACHE_DATA_VERSION":"0.81","modify_firewall":"1","notify_account_authn_link":"0","notify_account_authn_link_notification_disabled":"0","notify_autossl_expiry":"0","notify_autossl_expiry_coverage":"0","notify_autossl_renewal_coverage":"0","notify_autossl_renewal_coverage_reduced":"0","notify_autossl_renewal_uncovered_domains":"0","notify_bandwidth_limit":"0","notify_contact_address_change":"0","notify_contact_address_change_notification_disabled":"0","notify_disk_limit":"0","notify_password_change":"0","notify_password_change_notification_disabled":"0","notify_ssl_expiry":"0"}

  - `data.domain` (string)
    The cPanel account's main domain.
    Example: "example.com"

  - `data.setshell` (string)
    The absolute path to the cPanel account's shell.
    Example: "/bin/bash"

  - `data.user` (string)
    The cPanel account username.

Note:

If you changed the cPanel account's username, the function returns the new value.
    Example: "example1"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "modifyacct"

  - `metadata.output` (object)
    Output of the operation.

  - `metadata.output.messages` (array)
    Any messages that the system generated.
    Example: ["Reseller data updated","0 rows updated in eximstats sends database.\n0 rows updated in eximstats smtp database.\n0 rows updated in eximstats failures database.\n0 rows updated in eximstats defers database.\n","Username changed from example to example1","Restarting apache"]

  - `metadata.output.warnings` (array)
    Any warnings that the system generated.
    Example: ["Changing the cPanel account username from “example” to “example1” requires Digest Authentication to be disabled.","Use the Web Disk Accounts page in cPanel to re-enable Digest Authentication."]

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "Account Modified"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


