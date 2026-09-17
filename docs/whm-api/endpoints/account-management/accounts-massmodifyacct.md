# Update multiple cPanel accounts

This function modifies multiple cPanel accounts.

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

Endpoint: GET /massmodifyacct
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `user` (string, required)
    The account's current username.

Note:

To modify multiple users, duplicate or increment the parameter name. For example,
the user-1, user-2, and user-3 parameters.

  - `BACKUP` (any)
    Whether backups are enabled for the account.

* 1 — Enabled.
* 0 — Disabled.

This parameter defaults to the defined system value.

Note:

This parameter requires root privileges.
    Enum: 1, 0

  - `BWLIMIT` (any)
    The account's maximum bandwidth use, in bytes.

* 0, null or unlimited — The account can use unlimited bandwidth.

This parameter defaults to the defined system value.
    Example: "unlimited"

  - `CONTACTEMAIL` (string)
    The account's contact email address.

This parameter defaults to the defined system value.
    Example: "username@example.com"

  - `DBOWNER` (string)
    The owner of the account's MySQL® databases.

This parameter defaults to the defined system value.
    Example: "example"

  - `DISK_BLOCK_LIMIT` (integer)
    The number of disk blocks for the account, in kilobytes (KB).

This parameter defaults to the defined system value.
    Example: 100000000

  - `HASCGI` (integer)
    Whether CGI access is enabled for the account.

* 1 — Enabled.
* 0 — Disabled.

This parameter defaults to the defined system value.

Note:

When a server profile disables the
Web Server role, you cannot enable
CGI access.
    Enum: 1, 0

  - `HASDKIM` (integer)
    Whether DomainKeys Identified Mail (DKIM) is enabled for the account.

* 1 — Enabled.
* 0 — Disabled.

This parameter defaults to the defined system value.
    Enum: 1, 0

  - `HASDMARC` (integer)
    Whether Domain-based Message Authentication, Reporting, and Conformance (DMARC) is enabled for the account.

* 1 — Enabled.
* 0 — Disabled.

This parameter defaults to the defined system value.
    Enum: 1, 0

  - `HASSHELL` (integer)
    Whether shell (SSH) access is enabled for the account.

* 1 — Enabled.
* 0 — Disabled.

This parameter defaults to the defined system value.

Note:

We strongly recommend that you use the shell parameter to specify a shell for
SSH access.
    Enum: 1, 0

  - `HASSPF` (integer)
    Whether Sender Policy Framework (SPF) is enabled for the account.

* 1 — Enabled.
* 0 — Disabled.

This parameter defaults to the defined system value.
    Enum: 1, 0

  - `LANG` (string)
    The account's display language.

This parameter defaults to the defined system value.
    Example: "english-utf8"

  - `LOCALE` (string)
    The account's default locale.

This parameter defaults to the defined system value.
    Example: "en"

  - `MAILBOX_FORMAT` (any)
    The storage format that the account's mailboxes use.

* maildir
* mbox

This parameter defaults to the defined system value.
    Enum: "maildir", "mbox"

  - `MAX_DEFER_FAIL_PERCENTAGE` (any)
    The percentage of failed or deferred email messages that the account can send per hour
before outgoing mail is rate-limited.

* 0 or unlimited — The account can send an unlimited number of failed or deferred
messages.

This parameter defaults to the defined system value.
    Example: "unlimited"

  - `MAX_EMAIL_PER_HOUR` (any)
    The maximum number of emails that the account can send in one hour.

* 0 or unlimited — The account can send an unlimited number of emails.

This parameter defaults to the defined system value.
    Example: "unlimited"

  - `MAX_EMAILACCT_QUOTA` (any)
    The maximum size, in megabytes (MB), that the account can define when it creates an
email account.

* unlimited — The account possesses an unlimited quota.

Important:

* This value applies to each email account, not each cPanel account.
* If you specify a MAX_EMAILACCT_QUOTA value, the function will overwrite the
plan's defined value for that cPanel account.
* This parameter does not affect any existing email accounts
* We recommend that you allow the account's plan to determine this value.
* MAX_EMAIL_PER_HOUR will define to unlimited if you do not define either the plan
or MAX_EMAILACCT_QUOTA parameters.

This parameter defaults to the defined system value. It will default to unlimited if
you do not define either the plan or MAX_EMAILACCT_QUOTA parameters.
    Example: "unlimited"

  - `MAXADDON` (any)
    The account's maximum number of addon domains.

* 0, null, or unlimited — The account possesses unlimited addon domains.

This parameter defaults to the defined system value.
    Example: "unlimited"

  - `MAXFTP` (any)
    The account's maximum number of FTP accounts.

* null or unlimited — The account possesses unlimited FTP accounts.

This parameter defaults to the defined system value.
    Example: "unlimited"

  - `MAXLST` (any)
    The account's maximum number of mailing lists.

* 0, null, or unlimited — The account possesses unlimited mailing lists.

This parameter defaults to the defined system value.
    Example: "unlimited"

  - `MAXPARK` (any)
    The account's maximum number of parked domains (aliases).

* null or unlimited — The account possesses unlimited mailing lists.

This parameter defaults to the defined system value.
    Example: "unlimited"

  - `MAXPASSENGERAPPS` (any)
    The account's maximum number of Ruby applications.

* null or unlimited — The account possesses unlimited Ruby applications.

This parameter defaults to the defined system value.
    Example: "unlimited"

  - `MAXPOP` (any)
    The maximum number of email accounts for the account.

* null or unlimited — The account possesses unlimited email accounts.

This parameter defaults to the defined system value.
    Example: "unlimited"

  - `MAXSQL` (any)
    The maximum number of each available type of SQL database for the account.

For example, if you set this value to 5 and the system administrator allows MySQL®
and PostgreSQL® databases, users can create up to five MySQL databases and up to five
PostgreSQL databases.

* null or unlimited — The account possesses unlimited databases.

This parameter defaults to the defined system value.
    Example: "unlimited"

  - `MAXSUB` (any)
    The maximum number of subdomains for the account.

* null or unlimited — The account possesses unlimited subdomains.

This parameter defaults to the defined system value.
    Example: "unlimited"

  - `modify_firewall` (integer)
    Whether to modify the firewall rules as part of the account modification.

* 1 – Modify the firewall rules.
* 0 – Do not modify the firewall rules.

NOTE:

If you do not set this parameter, the system will modify the firewall based on the Do not make changes to the firewall during account modification. setting in WHM's Tweak Settings interface (WHM >> Home >> Server Configuration >> Tweak Settings).
    Enum: 0, 1

  - `MXCHECK-*` (integer)
    The priority of the account's primary mail exchanger.

Note:

The parameter name consists of MXCHECK, a hyphen, and the primary domain of the
account.

Example key and value:
* MXCHECK-example.com=10

This parameter defaults to the define system value.
    Example: 1

  - `notify_account_authn_link` (integer)
    Whether to send a notification when someone links the account to an external
authentication account.

* 1 — Enabled.
* 0 — Disabled.

This parameter defaults to the defined system value.
    Enum: 1, 0

  - `notify_account_authn_link_notification_disabled` (integer)
    Whether to send a notification when someone disables notifications for external
authentication account links.

* 1 — Enabled.
* 0 — Disabled.

This parameter defaults to the defined system value.
    Enum: 1, 0

  - `notify_autossl_expiry` (integer)
    Whether to send a notification when an AutoSSL certificate expires.

* 1 — Enabled.
* 0 — Disabled.

This parameter defaults to the defined system value.
    Enum: 1, 0

  - `notify_autossl_expiry_coverage` (integer)
    Whether to send a notification AutoSSL cannot renew a certificate because domains
that fail Domain Control Validation (DCV) exist on the current certificate.

* 1 — Enabled.
* 0 — Disabled.

This parameter defaults to the defined system value.
    Enum: 1, 0

  - `notify_autossl_renewal` (integer)
    Whether to send a notification when AutoSSL renews a certificate.

* 1 — Enabled.
* 0 — Disabled.

This parameter defaults to the defined system value.
    Enum: 1, 0

  - `notify_autossl_renewal_coverage` (integer)
    Whether to send a notification when AutoSSL renews a certificate but the new
certificate lacks at least one domain that the previous certificate secured.

* 1 — Enabled.
* 0 — Disabled.

This parameter defaults to the defined system value.
    Enum: 1, 0

  - `notify_contact_address_change` (integer)
    Whether to send a notification when someone changes the contact address for the account.

* 1 — Enabled.
* 0 — Disabled.

This parameter defaults to the defined system value.
    Enum: 1, 0

  - `notify_contact_address_change_notification_disabled` (integer)
    Whether to send a notification when disables the notification for contact address
 changes.

* 1 — Enabled.
* 0 — Disabled.

This parameter defaults to the defined system value.
    Enum: 1, 0

  - `notify_disk_limit` (integer)
    Whether to send a notification when the account reaches its disk usage limit.

* 1 — Enabled.
* 0 — Disabled.

This parameter defaults to the defined system value.
    Enum: 1, 0

  - `notify_password_change` (integer)
    Whether to send a notification when someone changes the account's password.

* 1 — Enabled.
* 0 — Disabled.

This parameter defaults to the defined system value.
    Enum: 1, 0

  - `notify_password_change_notification_disabled` (integer)
    Whether to send a notification when someone disables notifications for password changes.

* 1 — Enabled.
* 0 — Disabled.

This parameter defaults to the defined system value.
    Enum: 1, 0

  - `notify_ssl_expiry` (integer)
    Whether to send a notification when an SSL certificate on the account expires.

* 1 — Enabled.
* 0 — Disabled.

This parameter defaults to the defined system value.
    Enum: 1, 0

  - `OUTGOING_EMAIL_SUSPENDED` (integer)
    Whether to suspend outgoing email on the account.

* 1 — Suspend outgoing email.
* 0 — Do not suspend outgoing email.

This parameter defaults to the defined system value.
    Enum: 1, 0

  - `OWNER` (string)
    A new owner's username or the root user, to change the account's owner.

This parameter defaults to the defined system value.

Note:

The authenticated user must have root privileges in order to assign the account
to a reseller other than that account.
    Example: "reseller"

  - `PUSHBULLET_ACCESS_TOKEN` (string)
    An access token for the account's Pushbullet™
notifications.

This parameter defaults to the defined system value.
    Example: "1234567890"

  - `QUOTA` (any)
    The account's disk space quota, in multiples of 1,048,576 bytes.

* 0, null, or unlimited — The account's disk space is unlimited.

This parameter defaults to the defined system value.
    Example: "unlimited"

  - `remove_missing_extensions` (string)
    A space-separated list of removed, missing, or uninstalled extensions.

This parameter defaults to the defined system value.

Warning:

This parameter removes all of the extensions that you list from
the _PACKAGE_EXTENSIONS variable in the user file. It will not remove the
extensions' variables. For more information, read our
Guide to Package Extensions.
    Example: "packageext1 packageext2"

  - `rename_database_objects` (integer)
    Whether to rename the cPanel account's database objects to use a new username's
database prefix. This parameter only applies to servers that use database prefixing.

* 1 — Rename the cPanel account's database objects.
* 0 — Do not rename the cPanel account's database objects.

Warning:

* The account owner must update any applications to use the new database object names.
* Use this parameter carefully. It can cause confusion for system administrators.

MySQL does not allow you to rename a database. When cPanel & WHM "renames" a database,
the system performs the following steps:

1. The system creates a new database.
1. The system moves data from the old database to the new database.
1. The system recreates grants and stored code in the new database.
1. The system deletes the old database and its grants.

Warning:

* If any of the first three steps fail, the system returns an error and attempts to
restore the database's original state. If the restoration process fails, the API function's
error response describes these additional failures.
* In rare cases, the system creates the second database successfully, but fails to delete
the old database or grants. The system treats the rename action as a success; however, the
API function returns warnings that describe the failure to delete the old database or grants.
    Enum: 1, 0

  - `reseller` (integer)
    Whether to grant reseller privileges to the account.

* 1 — Grant reseller privileges.
* 0 — Do not grant reseller privileges.
    Enum: 1, 0

  - `RS` (string)
    The account's cPanel interface theme.

This parameter defaults to the defined system value.
    Example: "jupiter"

  - `shell` (string)
    The absolute file path to the shell's location.

This parameter defaults to the defined system value.
    Example: "/bin/bash"

  - `spamassassin` (integer)
    Whether Apache SpamAssassin™ is enabled for the account.

* 1 — Enabled.
* 0 — Disabled.

This parameter defaults to the defined system value.
    Enum: 1, 0

  - `STARTDATE` (integer)
    A timestamp for which to use as the account's creation date.

This parameter defaults to the defined system value.
    Example: 1549471343

  - `STYLE` (string)
    The account's cPanel interface style.

This parameter defaults to the defined system value.
    Example: "Glass"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (array)
    An array of objects containing data for each modified user.

Note:

If an account uses [linked cPanel server nodes](https://go.cpanel.net/whmdocsLinkServerNodes),
this object contains a return for each server on which the account exists.
    Example: [{"reason":"Unable to fetch the cPanel user file for username","result":0,"user":"username"},{"extended":{"cpuser":{"BACKUP":"1","BWLIMIT":"unlimited","CONTACTEMAIL":"username1@example.com","CONTACTEMAIL2":"","DBOWNER":"username1","DEADDOMAINS":["example.example1.com"],"DEMO":"0","DISK_BLOCK_LIMIT":0,"DOMAIN":"example1.com","DOMAINS":[],"FEATURELIST":"default","HASCGI":"1","HASDKIM":"1","HASDMARC":"1","HASSPF":"1","HOMEDIRLINKS":[],"IP":"172.16.1.3","LANG":"english-utf8","LEGACY_BACKUP":"0","LOCALE":"en","MAILBOX_FORMAT":"maildir","MAXADDON":"0","MAXFTP":"234","MAXLST":"unlimited","MAXPARK":"0","MAXPOP":"123","MAXSQL":"345","MAXSUB":"unlimited","MAX_DEFER_FAIL_PERCENTAGE":"unlimited","MAX_EMAILACCT_QUOTA":"unlimited","MAX_EMAIL_PER_HOUR":"unlimited","MTIME":"1584509675","MXCHECK-example1.com":"remote","OWNER":"username1","PLAN":"extended","RS":"jupiter","STARTDATE":"765435600","USER":"username1","UTF8MAILBOX":"1","WORKER_NODE-Mail":"example1:6L3ZJZ8LPAAOMC8CA31325O8EKGJ5YV5","_PACKAGE_EXTENSIONS":"custom","__CACHE_DATA_VERSION":"0.81"},"domain":"example1.com","setshell":"unmodified","user":"username1"},"messages":[],"reason":"Account Modified","result":1,"user":"username1","warnings":[]},{"extended":{"cpuser":{"BACKUP":"1","BWLIMIT":"unlimited","CONTACTEMAIL":"","CONTACTEMAIL2":"","DBOWNER":"username2","DEADDOMAINS":[],"DEMO":"0","DISK_BLOCK_LIMIT":0,"DOMAIN":"example2.com","DOMAINS":[],"FEATURELIST":"default","HASCGI":"0","HASDKIM":"1","HASDMARC":"1","HASSPF":"1","HOMEDIRLINKS":[],"IP":"10.0.0.1","LANG":null,"LEGACY_BACKUP":"0","LOCALE":"cs","MAILBOX_FORMAT":"maildir","MAXADDON":"0","MAXFTP":"234","MAXLST":"unlimited","MAXPARK":"0","MAXPOP":"123","MAXSQL":"345","MAXSUB":"unlimited","MAX_DEFER_FAIL_PERCENTAGE":"unlimited","MAX_EMAILACCT_QUOTA":"unlimited","MAX_EMAIL_PER_HOUR":"unlimited","MTIME":"1583966719","MXCHECK-example2.com":"0","OWNER":"root","PLAN":"extended","RS":"jupiter","STARTDATE":"728719200","USER":"username2","UTF8MAILBOX":"1","WORKER_NODE-Mail":"example2:BXE4LIAXF4X9N0B0TG69AAQ64DGR1XPU","_PACKAGE_EXTENSIONS":"","__CACHE_DATA_VERSION":"0.81"},"domain":"example2.com","setshell":"unmodified","user":"username2"},"messages":[],"proxied_from":["example.com"],"reason":"Account Modified","result":1,"user":"username2","warnings":[]},{"extended":{"cpuser":{"BACKUP":"1","BWLIMIT":"unlimited","CONTACTEMAIL":"","CONTACTEMAIL2":"","DBOWNER":"username2","DEADDOMAINS":[],"DEMO":0,"DISK_BLOCK_LIMIT":0,"DOMAIN":"example2.com","DOMAINS":[],"FEATURELIST":"default","HASCGI":"1","HASDKIM":"1","HASDMARC":"1","HASSPF":"1","HOMEDIRLINKS":[],"IP":"172.16.1.3","LANG":"english-utf8","LEGACY_BACKUP":"0","LOCALE":"en","MAILBOX_FORMAT":"maildir","MAXADDON":"unlimited","MAXFTP":"234","MAXLST":"unlimited","MAXPARK":"unlimited","MAXPOP":"123","MAXSQL":"345","MAXSUB":"unlimited","MAX_DEFER_FAIL_PERCENTAGE":"unlimited","MAX_EMAILACCT_QUOTA":"unlimited","MAX_EMAIL_PER_HOUR":"unlimited","MTIME":"1584509675","MXCHECK-example2.com":"remote","OWNER":"username2","PLAN":"default","RS":"jupiter","STARTDATE":"765435600","USER":"username2","UTF8MAILBOX":"1","WORKER_NODE-Mail":"example2:H99IZWY3OH9Q1DQNR58L55WUBXAENPDP","_PACKAGE_EXTENSIONS":"","__CACHE_DATA_VERSION":"0.81"},"domain":"example2.com","setshell":"unmodified","user":"username2"},"messages":[],"reason":"Account Modified","result":1,"user":"username2","warnings":[]},{"extended":{"cpuser":{"BACKUP":"1","BWLIMIT":"unlimited","CONTACTEMAIL":"","CONTACTEMAIL2":"","DBOWNER":"username2","DEADDOMAINS":[],"DEMO":0,"DISK_BLOCK_LIMIT":0,"DOMAIN":"example2.com","DOMAINS":[],"FEATURELIST":"default","HASCGI":"0","HASDKIM":"1","HASDMARC":"1","HASSPF":"1","HOMEDIRLINKS":[],"IP":"10.0.0.2","LANG":"english-utf8","LEGACY_BACKUP":"0","LOCALE":"en","MAILBOX_FORMAT":"maildir","MAXADDON":"unlimited","MAXFTP":"234","MAXLST":"unlimited","MAXPARK":"unlimited","MAXPOP":"123","MAXSQL":"345","MAXSUB":"unlimited","MAX_DEFER_FAIL_PERCENTAGE":"unlimited","MAX_EMAILACCT_QUOTA":"unlimited","MAX_EMAIL_PER_HOUR":"unlimited","MTIME":"1583966717","MXCHECK-example2.com":"0","OWNER":"linked","PLAN":"default","RS":"jupiter","STARTDATE":"765435600","USER":"username2","UTF8MAILBOX":"1","_PACKAGE_EXTENSIONS":"","__CACHE_DATA_VERSION":"0.81"},"domain":"example2.com","setshell":"noshell","user":"username2"},"messages":["Shell changed"],"proxied_from":["example.com"],"reason":"Account Modified","result":1,"user":"username2","warnings":[]}]

  - `data.payload.extended` (object)
    An object containing the account's modified settings.

  - `data.payload.extended.cpuser` (object)
    An object containing the output of an account's cpuser
file. The system stores this file in the /var/cpanel/users
directory.

Note:

If the account or its hosting plan use
[package extensions](https://go.cpanel.net/GuidetoPackageExtensions),
the cpuser object will also include the extension's variables.

  - `data.payload.extended.domain` (string)
    The account's main domain.

  - `data.payload.extended.setshell` (string)
    The absolute file path to the account's updated shell location.

* unmodified — The shell's absolute filepath did not change.

  - `data.payload.extended.user` (string)
    The cPanel account's username.

Note:

If you changed the cPanel account's username, the function
returns the new value.

  - `data.payload.messages` (array)
    A list containing account modification messages.

  - `data.payload.proxied_from` (array)
    The hostnames of the
[linked cPanel server nodes](https://go.cpanel.net/serverroles)
from which the function proxied the return. The function returns
the hostnames in their proxied order.

Note:

The function only returns this value for
[distributed cPanel accounts](https://go.cpanel.net/cPanelGlossary#distributed-cpanel-account).

  - `data.payload.reason` (string)
    The account's modification status.

  - `data.payload.result` (integer)
    Whether the account modification succeeded.
* 1 — Success.
* 0 — Failure.
    Enum: 1, 0

  - `data.payload.user` (string)
    The modified account's username.

  - `data.payload.warnings` (array)
    A list of warning messages for the modified account, if any exist.

  - `metadata` (object)
    Example: {"command":"massmodifyacct","messages":["From example1.com: Restarting apache"],"reason":"Failed to modify one or more users.","result":0,"version":1,"warnings":[]}

  - `metadata.command` (string)
    The method name called.
    Example: "massmodifyacct"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "Failed to modify one or more users."

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed: Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


