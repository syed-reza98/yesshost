# Update hosting plan

This function edits a hosting plan (package).

Note:

* The
Access Control List (ACL)
restricts some of the function's parameters, which limit the features that WHM
users can access.
* This function applies any changes you make to all accounts that exist on
the hosting plan.
* This function cannot modify hosting plan names.

Endpoint: GET /editpkg
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `name` (string, required)
    The hosting plan's name. If the hosting plan does not exist, the system will create it.
    Example: "package1"

  - `_PACKAGE_EXTENSIONS` (string)
    The hosting plan's package extensions.

If you do not provide a value, the hosting plan will not include package
extensions.

Note:

* We strongly recommend that you manage package extensions through WHM API
1's addpkgext and delpkgext functions.
* You can include the extension's variables in your function call, in key=value format.
Consult the extension's documentation for a list of possible variables.
* Extension names and variables are case-sensitive.
* Use space-delimited format to add multiple package extensions.

  - `bwlimit` (any)
    The hosting plan's maximum bandwidth use, in megabytes (MB).

* 0, unlimited, or null — The hosting plan allows unlimited
bandwidth.

Note:

The 0, unlimited, or null values are only available to
users that possess the corresponding unlimited ACL permission.
    Example: 1048576

  - `cgi` (integer)
    Whether CGI access is enabled for the hosting plan.

* 1 — Enabled.
* 0 — Disabled.

Note:

When a server profile disables
the Web Server role, this parameter
defaults to 0. On these servers, you cannot enable CGI access.
    Enum: 1, 0

  - `cpmod` (string)
    The hosting plan's cPanel theme.

This parameter defaults to the server's
default cPanel theme.
    Example: "jupiter"

  - `digestauth` (integer)
    Whether to enable Digest Authentication for accounts on the hosting plan.

* 1 — Enable.
* 0 — Disable.
    Enum: 1, 0

  - `featurelist` (string)
    The hosting plan's feature list.

If you do not use this parameter, the function assigns the default
feature list to the hosting plan's accounts.
    Example: "default"

  - `hasshell` (integer)
    Whether the hosting plan allows shell access.

* 1 — The hosting plan allows shell access.
* 0 — The hosting plan does not allow shell access.
    Enum: 1, 0

  - `ip` (string)
    Whether the hosting plan uses a dedicated IP address.

* y — The hosting plan uses a dedicated IP address.
* n — The hosting plan does not use a dedicated IP address.
    Enum: "y", "n"

  - `language` (string)
    The hosting plan's default locale.

This parameter defaults to the server's default locale.
    Example: "en"

  - `max_defer_fail_percentage` (any)
    The percentage of failed or deferred email messages that an account on the
hosting plan can send per hour before outgoing mail is rate-limited.

* 0 or unlimited — The hosting plan allows unlimited email messages per hour.
    Example: "unlimited"

  - `max_email_per_hour` (any)
    The maximum number of emails that the hosting plan allows accounts to send
in one hour.

* 0 or unlimited — The hosting plan allows unlimited emails per hour.
    Example: "unlimited"

  - `max_emailacct_quota` (any)
    The hosting plan's maximum email account quota size, in megabytes (MB).

* 0, null, or unlimited — The hosting plan allows unlimited quota.

Note:

* This parameter does not affect any existing email accounts.
* The unlimited value is only available to users that possess
the corresponding unlimited` ACL permission.
    Example: 1024

  - `max_team_users` (integer,null)
    The hosting plan's maximum number of Team users.
    Example: 7

  - `maxaddon` (any)
    The hosting plan's maximum number of addon domains.

* unlimited or null — The hosting plan allows unlimited
addon domains.
    Example: "unlimited"

  - `maxftp` (any)
    The hosting plan's maximum number of FTP accounts.

* unlimited, or null — The hosting plan allows unlimited databases.
    Example: "unlimited"

  - `maxlst` (any)
    The hosting plan's maximum number of mailing lists.

* unlimited, or null — The hosting plan allows unlimited
mailing lists.
    Example: "unlimited"

  - `maxpark` (any)
    The hosting plan's maximum number of parked domains (aliases).

* unlimited or null — The hosting plan allows unlimited parked
domains.
    Example: "unlimited"

  - `maxpop` (any)
    The hosting plan's maximum number of email accounts.

* unlimited, or null — The hosting plan allows unlimited
email accounts.
    Example: "unlimited"

  - `maxsql` (any)
    The hosting plan's maximum number of each available type of SQL
database.

For example, if you set this value to 5 and the system administrator
allows MySQL® and PostgreSQL® databases, users with this hosting plan
can create up to five MySQL databases and up to five PostgreSQL databases.

* unlimited, or null — The hosting plan allows unlimited
databases.
    Example: "unlimited"

  - `maxsub` (any)
    The hosting plan's maximum number of subdomains.

* unlimited, or null — The hosting plan allows unlimited
subdomains.
    Example: "unlimited"

  - `quota` (any)
    The hosting plan's disk space quota, in megabytes (MB).

* 0, unlimited, or null — The hosting plan allows unlimited
disk space quota.

Note:

The 0, unlimited, or null values are only available to
users that possess the corresponding unlimited ACL permission.
    Example: 10240

  - `frontpage` (integer)
    Whether Microsoft® FrontPage Extensions are enabled for the account.

Note:

cPanel & WHM ignores all FrontPage settings and parameters.
    Enum: 1, 0

## Response 200 fields (application/json):

  - `data` (object)

  - `data.pkg` (string)
    The new hosting plan's name.
    Example: "package1"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "editpkg"

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


