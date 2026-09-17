# Return current user's available hosting plans

This function lists the authenticated user's available hosting plans (packages).

Important:

This function only returns packages that the authenticated user can access and
use during account creation.

Endpoint: GET /listpkgs
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `want` (string)
    The permissions of packages that you wish to list.

* all — All packages on the system.
* creatable — Packages that the authenticated user can use for accounts.
* editable — Packages that the authenticated user can edit.
* viewable — Packages that the authenticated user can view.
    Enum: "all", "creatable", "editable", "viewable"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.pkg` (array)
    An array of objects that contains hosting plans and their settings.

  - `data.pkg.BWLIMIT` (any)
    The hosting plan's bandwidth limit, in megabytes (MB).

* unlimited — The hosting plan allows unlimited bandwidth.
    Example: "unlimited"

  - `data.pkg.CGI` (string)
    Whether CGI is enabled for the hosting plan.

* y — Enabled.
* n — Disabled.
    Enum: "y", "n"

  - `data.pkg.CPMOD` (string)
    The hosing plan's cPanel interface theme.
    Example: "jupiter"

  - `data.pkg.DIGESTAUTH` (string)
    Whether the hosting plan enables Digest Authentication.

* y — Enabled.
* n — Disabled.
    Enum: "y", "n"

  - `data.pkg.FEATURELIST` (string)
    The hosting plan's [feature list](https://go.cpanel.net/whmdocsFeatureManager).
    Example: "myfeaturelist"

  - `data.pkg.HASSHELL` (string)
    Whether shell access is enabled for the hosting plan.

* y — Enabled.
* n — Disabled.
    Enum: "y", "n"

  - `data.pkg.IP` (string)
    Whether the hosting plan grants accounts a dedicated IP address.

* y — Dedicated IP address.
* n — Shared IP address.
    Enum: "y", "n"

  - `data.pkg.LANG` (string)
    The hosting plan's locale.
    Example: "en"

  - `data.pkg.MAXADDON` (any)
    The hosting plan's maximum number of addon domains.

* unlimited — The hosting plan allows unlimited addon domains.
    Example: "unlimited"

  - `data.pkg.MAXFTP` (any)
    The hosting plan's maximum number of FTP accounts.

* unlimited — The hosting plan allows unlimited FTP accounts.
    Example: "unlimited"

  - `data.pkg.MAXLST` (any)
    The hosting plan's maximum number of mailing lists.

* unlimited — The hosting plan allows an unlimited number of mailing lists.
    Example: "unlimited"

  - `data.pkg.MAXPARK` (any)
    The hosting plan's maximum number of parked domains (aliases).

* unlimited — The hosting plan allows unlimited parked domains.
    Example: "unlimited"

  - `data.pkg.MAXPOP` (any)
    The hosting plan's maximum number of email accounts.

* unlimited — The hosting plan allows unlimited email accounts.
    Example: "unlimited"

  - `data.pkg.MAXSQL` (any)
    The hosting plan's maximum number of each available type of SQL
database.

For example, if this value is 5, and the system administrator
allows MySQL® and PostgreSQL® databases, users can create up to
five MySQL databases and up to five PostgreSQL databases.

* unlimited — The hosting plan allows unlimited SQL databases.
    Example: "unlimited"

  - `data.pkg.MAXSUB` (any)
    The hosting plan's maximum number of subdomains.

* unlimited — The hosting plan allows unlimited subdomains.
    Example: "unlimited"

  - `data.pkg.MAX_DEFER_FAIL_PERCENTAGE` (any)
    The
[percentage of failed or deferred email messages](https://go.cpanel.net/howtopreventspam)
that the hosting plan can send per hour before the system rate-limits
outgoing mail.

* unlimited — The hosting plan allows unlimited email messages.
    Example: "unlimited"

  - `data.pkg.MAX_EMAILACCT_QUOTA` (any)
    The hosting plan's maximum email account quota size, in megabytes (MB).

* unlimited — The hosting plan allows an unlimited email account quota size.
    Example: "unlimited"

  - `data.pkg.MAX_EMAIL_PER_HOUR` (any)
    The
[maximum number of emails](https://go.cpanel.net/howtopreventspam)
that the hosting plan can send in one hour.

* unlimited — The hosting plan allows unlimited emails per hour.
    Example: "unlimited"

  - `data.pkg.MAX_TEAM_USERS` (integer,null)
    The hosting plan's maximum number of Team users.
    Example: 7

  - `data.pkg.QUOTA` (any)
    The hosting plan's disk space limit, in megabytes (MB).

* unlimited — The hosting plan allows unlimited disk space.
    Example: "unlimited"

  - `data.pkg._PACKAGE_EXTENSIONS` (string)
    A space-separated list of one or more of the hosting plan's package extensions, if any exist.

  - `data.pkg.name` (string)
    The hosting plan's name.
    Example: "package1"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "listpkgs"

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


