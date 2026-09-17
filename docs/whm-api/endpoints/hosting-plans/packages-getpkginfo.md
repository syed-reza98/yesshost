# Return hosting plan configuration

This function lists a hosting plan's (package's) settings.

Endpoint: GET /getpkginfo
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `pkg` (string, required)
    The hosting plan's name.
    Example: "package1"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.pkg` (object)
    A list of the hosting plan's settings.

Note:

* The function will only return the package's enabled resources and settings.
* If the account or its hosting plan use package extensions, the list also
includes the extension's variables.

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

* y — Enabled.
* n — Disabled.
    Example: "n"

  - `data.pkg.FEATURELIST` (string)
    The hosting plan's [feature list](https://go.cpanel.net/whmdocsFeatureManager).
    Example: "myfeaturelist"

  - `data.pkg.HASSHELL` (integer)
    Whether shell access is enabled for the hosting plan.

* 1 — Enabled.
* 0 — Disabled.
    Enum: 1, 0

  - `data.pkg.IP` (integer)
    Whether the hosting plan grants accounts a dedicated IP address.

* 1 — Dedicated IP address.
* 0 — Shared IP address.
    Enum: 1, 0

  - `data.pkg.LANG` (string)
    The hosting plan's locale.
    Example: "en"

  - `data.pkg.MAXADDON` (any)
    The hosting plan's maximum number of addon domains.

* unlimited — The hosting plan allows unlimited addon domains.
    Example: 1

  - `data.pkg.MAXFTP` (any)
    The hosting plan's maximum number of FTP accounts.

* unlimited — The hosting plan allows unlimited FTP accounts.
    Example: 2

  - `data.pkg.MAXLST` (any)
    The hosting plan's maximum number of mailing lists.

* unlimited — The hosting plan allows unlimited mailing lists.
    Example: "unlimited"

  - `data.pkg.MAXPARK` (any)
    The hosting plan's maximum number of parked domains (aliases).

* unlimited — The hosting plan allows unlimited parked domains.
    Example: 1

  - `data.pkg.MAXPOP` (any)
    The hosting plan's maximum number of email accounts.

* unlimited — The hosting plan allows unlimited email accounts.
    Example: 20

  - `data.pkg.MAXSQL` (any)
    The hosting plan's maximum number of SQL databases.

* unlimited — The hosting plan allows unlimited SQL databases.
    Example: 1

  - `data.pkg.MAXSUB` (any)
    The hosting plan's maximum number of subdomains.

* unlimited — The hosting plan allows unlimited subdomains.
    Example: 5

  - `data.pkg.MAX_DEFER_FAIL_PERCENTAGE` (any)
    The
[percentage of failed or deferred email messages](https://go.cpanel.net/howtopreventspam)
that the hosting plan can send per hour before the system rate-limits
outgoing mail.

* unlimited — The hosting plan allows unlimited email messages.
    Example: 10

  - `data.pkg.MAX_EMAILACCT_QUOTA` (any)
    The hosting plan's maximum email account quota size, in megabytes (MB).

* unlimited — The hosting plan allows an unlimited email account quota size.
    Example: "unlimited"

  - `data.pkg.MAX_EMAIL_PER_HOUR` (any)
    The [maximum number of emails](https://go.cpanel.net/howtopreventspam)
that the hosting plan can send in one hour.

* unlimited — The hosting plan allows unlimited emails per hour.
    Example: 100

  - `data.pkg.MAX_TEAM_USERS` (integer,null)
    The hosting plan's maximum number of Team users.
    Example: 7

  - `data.pkg.QUOTA` (any)
    The hosting plan's disk space limit, in megabytes (MB).

 * unlimited — The hosting plan has unlimited disk space.
    Example: 100

  - `data.pkg._PACKAGE_EXTENSIONS` (string)
    A list of one or more of the hosting plan's package extensions, if any exist.

  - `data.pkg.FRONTPAGE` (integer)
    Whether Microsoft® FrontPage Extensions are enabled for the account.

Note:

cPanel & WHM ignores all FrontPage settings and parameters.
    Enum: 1, 0

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "getpkginfo"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


