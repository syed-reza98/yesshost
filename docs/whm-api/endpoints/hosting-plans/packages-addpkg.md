# Create hosting plan

This function creates a hosting plan (package).

Note:

The Access Control Lists
restricts some of this function's parameters, which limit the features that
WHM users can access.

Endpoint: GET /addpkg
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `name` (string, required)
    The new hosting plan's name.

Note:

* You cannot use the name extensions for a hosting plan.
* You cannot modify hosting plan names after creation. Do not
include details that may change over time, such as price.
    Example: "package1"

  - `_PACKAGE_EXTENSIONS` (string)
    A space-separated list of the hosting plan's
package extensions.

If you do not provide a value, the hosting plan will not include package
extensions.

Note:

* We strongly recommend that you manage package extensions through WHM API
1's addpkgext and delpkgext functions.
* You can include the extension's variables in your function call, in key=value format.
Consult the extension's documentation for a list of possible variables.
* Extension names and variables are case-sensitive.
    Example: "'extension1 extension2 extension3'"

  - `bwlimit` (any)
    The hosting plan's maximum bandwidth use, in megabytes (MB).

* 0, unlimited, or null — The hosting plan allows unlimited bandwidth.

Note:

The 0, unlimited, and null values are only available to users that possess
the corresponding unlimited ACL permission.
    Example: 1048576

  - `cgi` (integer)
    Whether CGI access is enabled for the account.

* 1 — Enabled.
* 0 — Disabled.

Note:

When a
server profile disables the
Web Server role, this parameter
defaults to 0. On these servers, you cannot enable CGI access.
    Enum: 1, 0

  - `cpmod` (string)
    The hosting plan's cPanel theme.

This parameter defaults to the server's
default cPanel theme.
    Example: "jupiter"

  - `digestauth` (integer)
    Whether to enable Digest Authentication for accounts on the hosting plan.

* 1 — Enable.
* 0 — Disable.
    Enum: 1, 0

  - `featurelist` (string)
    The hosting plan's feature list.

If you do not use this parameter, the function assigns the default
feature list to the account.
    Example: "feature_list"

  - `hasshell` (integer)
    Whether the hosting plan allows shell access.

* 1 — The hosting plan allows shell access.
* 0 — The hosting plan does not allows shell access.
    Enum: 1, 0

  - `ip` (string)
    Whether the account has a dedicated IP address.

* y — The account possesses a dedicated IP address.
* n — The account does not possess a dedicated IP address.
    Enum: "y", "n"

  - `language` (string)
    The hosting plan's default locale, in its two-letter
ISO-3166 code
format.

This parameter defaults to the server's default locale.
    Example: "en"

  - `MAX_DEFER_FAIL_PERCENTAGE` (any)
    The percentage of failed or deferred email messages that the hosting plan allows users
to send per hour before outgoing mail is rate-limited.

* 0 or unlimited — The hosting plan allows users ot send an unlimited number of
failed or deferred messages.
    Example: "unlimited"

  - `MAX_EMAIL_PER_HOUR` (any)
    The maximum number of emails that the hosting plan allows users to send in one hour.

* 0 or unlimited — The hosting plan allows users to send an unlimited number of emails.
    Example: "unlimited"

  - `max_emailacct_quota` (any)
    The hosting plan's maximum email account quota size, in megabytes (MB).

* 0, unlimited, or null — The hosting plan allows unlimited email account quota.

Note:

The 0, unlimited, and null values are only available to users that possess
the corresponding unlimited ACL permission.
    Example: 1024

  - `max_team_users` (integer)
    The hosting plan's maximum number of Team users.
    Example: 7

  - `maxaddon` (any)
    The hosting plan's maximum number of addon domains.

* unlimited or null — The hosting plan allows unlimited addon domains.
    Example: "unlimited"

  - `maxftp` (any)
    The hosting plan's maximum number of FTP accounts.

* unlimited, or null — The hosting plan allows unlimited FTP accounts.
    Example: "unlimited"

  - `maxlst` (any)
    The hosting plan's maximum number of mailing lists.

* unlimited, or null — The hosting plan allows unlimited mailing lists.
    Example: "unlimited"

  - `maxpark` (any)
    The hosting plan's maximum number of parked domains (aliases).

* unlimited or null — The hosting plan allows unlimited parked domains.
    Example: "unlimited"

  - `maxpop` (any)
    The hosting plan's maximum number of email accounts.

* unlimited, or null — The hosting plan allows unlimited email accounts.
    Example: "unlimited"

  - `maxsql` (any)
    The hosting plan's maximum number of each available type of SQL
database.

For example, if you set this value to 5 and the system administrator
allows MySQL® and PostgreSQL® databases, users can create up to five MySQL
databases and up to five PostgreSQL databases.

* unlimited, or null — The hosting allows unlimited databases.
    Example: "unlimited"

  - `maxsub` (any)
    The hosting plan's maximum number of subdomains.

* unlimited, or null — The hosting plan allows unlimited subdomains.
    Example: "unlimited"

  - `quota` (any)
    The hosting plan's disk space quota, in megabytes (MB).

* 0, unlimited, or null — The hosting plan allows unlimited disk space.

Note:

The 0, unlimited, and null values are only available to users that possess
the corresponding unlimited ACL permission.
    Example: 10240

  - `frontpage` (integer)
    Whether Microsoft® FrontPage® Extensions are enabled for the account.

* 1 — Enabled.
* 0 — Disabled.

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
    Example: "addpkg"

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


