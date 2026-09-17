# Return filtered hosting plans

This function matches the server's hosting plans (packages) against
your criteria.

Note:

If you do not include any input parameters, the function lists all of
the server's packages.

Endpoint: GET /matchpkgs
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `_PACKAGE_EXTENSIONS` (string)
    A space-separated list of one or more of the hosting plan's package extensions.
    Example: "'ext1 ext2 ext3'"

  - `BWLIMIT` (any)
    The hosting plan's bandwidth limit.

* unlimited — The hosting plan allows unlimited bandwidth.
    Example: "unlimited"

  - `CGI` (integer)
    Whether CGI is enabled for the hosting plan.

* 1 — Enabled.
* 0 — Disabled.
    Enum: 1, 0

  - `CPMOD` (string)
    The hosting plan's cPanel interface theme.
    Example: "jupiter"

  - `DIGESTAUTH` (string)
    Whether the hosting plan enables Digest Authentication.

* y — Enabled.
* n — Disabled.
    Enum: "y", "n"

  - `FEATURELIST` (string)
    The hosting plan's feature list.
    Example: "myfeaturelist"

  - `HASSHELL` (integer)
    Whether shell access is enabled for the hosting plan.

* 1 — Enabled
* 0 — Disabled.
    Enum: 1, 0

  - `IP` (string)
    Whether the hosting plan grants accounts a dedicated IP address.

* y — Dedicated IP address.
* n — Shared IP address.
    Enum: "y", "n"

  - `LANG` (string)
    The hosting plan's locale.
    Example: "en"

  - `MAX_DEFER_FAIL_PERCENTAGE` (any)
    The
percentage of failed or deferred email messages
that the hosting plan can send per hour before the system rate-limits
outgoing mail.

* unlimited — The hosting plan allows unlimited email messages.
    Example: "unlimited"

  - `MAX_EMAIL_PER_HOUR` (any)
    The maximum number of emails
that the hosting plan can send in one hour.

* unlimited — The hosting plan allows unlimited emails per hour.
    Example: "unlimited"

  - `MAX_EMAILACCT_QUOTA` (any)
    The hosting plan's maximum email account quota size, in megabytes (MB).

* unlimited — The hosting plan allows an unlimited email account quota size.
    Example: "unlimited"

  - `MAX_TEAM_USERS` (integer,null)
    The hosting plan's maximum number of Team users.
    Example: 7

  - `MAXADDON` (any)
    The hosting plan's maximum number of addon domains.

* unlimited — The hosting plan allows unlimited addon domains.
    Example: "unlimited"

  - `MAXFTP` (any)
    The hosting plan's maximum number of FTP accounts.

* unlimited — The hosting plan allows for unlimited FTP accounts.
    Example: 2

  - `MAXLST` (any)
    The hosting plan's maximum number of mailing lists.

* unlimited — The hosting plan allows an unlimited number of mailing lists.
    Example: "unlimited"

  - `MAXPARK` (any)
    The hosting plan's maximum number of parked domains (aliases).

* unlimited — The hosting plan allows unlimited parked domains.
    Example: "unlimited"

  - `MAXPOP` (any)
    The hosing plan's maximum number of email accounts.

* unlimited — The hosting plan's can create unlimited email accounts.
    Example: "unlimited"

  - `MAXSQL` (any)
    The hosting plan's maximum number of SQL databases.

* unlimited — The hosting plan allows unlimited SQL databases.
    Example: "unlimited"

  - `MAXSUB` (any)
    The hosting plan's maximum number of subdomains.

* unlimited — The hosting plan allows unlimited subdomains.
    Example: "unlimited"

  - `QUOTA` (any)
    The hosting plan's disk space limit.

* unlimited — The hosting plan has unlimited disk space.
    Example: "unlimited"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.pkg` (object)
    A list of hosting plan settings.

  - `data.pkg.BWLIMIT` (any)
    The hosting plan's bandwidth limit, in megabytes (MB).

* unlimited — The hosting plan allows unlimited bandwidth.
    Example: "unlimited"

  - `data.pkg.CGI` (integer)
    Whether CGI is enabled for the hosting plan.

* 1 — Enabled.
* 0 — Disabled.
    Enum: 1, 0

  - `data.pkg.CPMOD` (string)
    The hosting plan's cPanel interface theme.
    Example: "jupiter"

  - `data.pkg.DIGESTAUTH` (string)
    Whether the hosting plan enables Digest Authentication.

* y — Enable.
* n — Disable.
    Enum: "y", "n"

  - `data.pkg.FEATURELIST` (string)
    The hosting plan's
[feature list](https://go.cpanel.net/whmdocsFeatureManager).
    Example: "myfeaturelist"

  - `data.pkg.HASSHELL` (string)
    Whether shell access is enabled for the hosting plan.
 y — Enabled.  n — Disabled.
    Enum: "y", "n"

  - `data.pkg.IP` (string)
    Whether the hosting plan grants accounts a dedicated IP address.

* y — Dedicated IP address.
* n — Shared IP address.
    Enum: "y", "n"

  - `data.pkg.LANG` (string)
    The hosting plan's locale.
    Example: "en"

  - `data.pkg.MAXADDON` (any)
    The hosting plan's maximum number of addon domains.

* unlimited — The hosting plan allows unlimited addon domains.
    Example: 1

  - `data.pkg.MAXFTP` (any)
    The hosting plan's maximum number of FTP accounts.

* unlimited — The hosting plan allows for unlimited FTP accounts.
    Example: "unlimited"

  - `data.pkg.MAXLST` (any)
    The hosting plan's maximum number of mailing lists.

* unlimited — The hosting plan allows an unlimited number of mailing lists.
    Example: 5

  - `data.pkg.MAXPARK` (any)
    The hosting plan's maximum number of parked domains.

* unlimited — The hosting plan allows unlimited parked domains.
    Example: 1

  - `data.pkg.MAXPOP` (any)
    The hosting plan's maximum number of email accounts.

* unlimited — The hosting plan's can create unlimited email accounts.
    Example: 20

  - `data.pkg.MAXSQL` (any)
    The hosting plan's maximum number of SQL databases.

* unlimited — The hosting plan allows unlimited SQL databases.
    Example: 1

  - `data.pkg.MAXSUB` (any)
    The hosting plan's maximum number of subdomains.

* unlimited — The hosting plan allows unlimited subdomains.
    Example: 5

  - `data.pkg.MAX_DEFER_FAIL_PERCENTAGE` (any)
    The
[percentage of failed or deferred email messages](https://go.cpanel.net/howtopreventspam)
that the hosting plan can send per hour before outgoing mail is rate-limited.

* unlimited — The hosting plan allows unlimited email messages.
    Example: 10

  - `data.pkg.MAX_EMAILACCT_QUOTA` (any)
    The maximum size that the account can define when it
creates an email account.

* unlimited — The hosting plan allows an unlimited email account quota size.
    Example: "unlimited"

  - `data.pkg.MAX_EMAIL_PER_HOUR` (any)
    The [maximum number of emails](https://go.cpanel.net/howtopreventspam)
that the hosting plan can send in one hour.

* unlimited — The hosting plan allows unlimited emails per hour.
    Example: 100

  - `data.pkg.QUOTA` (any)
    The hosting plan's disk space limit.

* unlimited — The hosting plan has unlimited disk space.
    Example: 100

  - `data.pkg._PACKAGE_EXTENSIONS` (string)
    A list of one or more of the hosting plan's package extensions.
    Example: "ext1 ext2 ext3"

  - `data.pkg.FRONTPAGE` (integer)
    Whether Microsoft® FrontPage Extensions are enabled for the account.

Note:

cPanel & WHM ignores all FrontPage settings and parameters.
    Enum: 0

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "matchpkgs"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 – Success.
* 0 – Failed. Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


