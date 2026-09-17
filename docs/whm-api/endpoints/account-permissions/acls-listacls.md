# Return all privilege lists and settings

This function lists the server's
Access Control Lists (ACLs)
and each list's privileges.

Endpoint: GET /listacls
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.acl` (array)
    An array of objects containing ACL settings.

  - `data.acl.name` (string)
    The ACL's name.
    Example: "acl1"

  - `data.acl.privileges` (object)
    A list of ACL privileges, including any third-party ACL privileges
that exist for the user.

  - `data.acl.privileges.acct-summary` (integer)
    Whether to allow the reseller to view an account summary.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.add-pkg` (integer)
    Whether to allow the reseller to add and remove hosting plans
(packages).

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.add-pkg-ip` (integer)
    Whether to allow the reseller to create packages with a
dedicated IP address.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.add-pkg-shell` (integer)
    Whether to allow the reseller to create packages with shell
access.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.all` (integer)
    Whether to grant the reseller all ACL privileges.

Warning:

A value of 1 grants root-level privileges to the reseller.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.allow-addoncreate` (integer)
    Whether to allow the reseller to create packages with addon
domains.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.allow-emaillimits-pkgs` (integer)
    Whether to allow the reseller to create packages with email quotas
that are not the default quotas.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.allow-parkedcreate` (integer)
    Whether to allow the reseller to create packages with parked
domains (aliases).

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.allow-shell` (integer)
    Whether to allow the reseller to create accounts with shell
access.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.allow-unlimited-bw-pkgs` (integer)
    Whether to allow the reseller to create packages with unlimited
bandwidth.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.allow-unlimited-disk-pkgs` (integer)
    Whether to allow the reseller to create packages with unlimited
disk space.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.allow-unlimited-pkgs` (integer)
    Whether to allow the reseller to create packages with unlimited
features.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.basic-system-info` (integer)
    Whether to allow the user to retrieve basic system information.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.basic-whm-functions` (integer)
    Whether to allow the reseller to access basic cPanel & WHM
options.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.clustering` (integer)
    Whether to allow the reseller to use DNS clusters.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.cors-proxy-get` (integer)
    Whether to allow the reseller to perform Cross-Origin Resource
Sharing (CORS) HTTP requests.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.cpanel-api` (integer)
    Whether to allow the reseller to execute cPanel API 1, cPanel
API 2 and UAPI functions via WHM.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.cpanel-integration` (integer)
    Whether to allow the reseller to manage cPanel integration
links.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.create-acct` (integer)
    Whether to allow the reseller to create accounts.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.create-dns` (integer)
    Whether to allow the reseller to add DNS zones.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.create-user-session` (integer)
    Whether to allow the reseller to create a new temporary user
session for a specified service.

* 1 — Allow.
* 0 — Do not allow.

Note:

This ACL privilege allows an API token user to bypass any
restrictions that you set on the API token. For more information,
read our
[Manage API Tokens](https://go.cpanel.net/ManageAPITokens)
documentation.
    Enum: 1, 0

  - `data.acl.privileges.demo-setup` (integer)
    Whether to allow the reseller to enable demo mode for accounts.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.digest-auth` (integer)
    Whether to allow the reseller to manage Digest Authentication.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.edit-account` (integer)
    Whether to allow the reseller to edit accounts.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.edit-dns` (integer)
    Whether to allow the reseller to edit DNS zones.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.edit-mx` (integer)
    Whether to allow the reseller to edit MX entries.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.edit-pkg` (integer)
    Whether to allow the reseller to edit hosting plans (packages).

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.generate-email-config` (integer)
    Whether to allow the reseller to generate a mobile configuration
profile for an email account.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.kill-acct` (integer)
    Whether to allow the reseller to terminate accounts.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.kill-dns` (integer)
    Whether to allow the reseller to remove DNS zones.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.limit-bandwidth` (integer)
    Whether to allow the reseller to modify bandwidth limits
(quotas).

* 1 — Allow.
* 0 — Do not allow.

Warning:

If you do not use resource limits, a value of 1 allows
resellers to circumvent package limits for disk space.
    Enum: 1, 0

  - `data.acl.privileges.list-accts` (integer)
    Whether to allow the reseller to view the list of accounts.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.list-pkgs` (integer)
    Whether to allow the reseller to view existing hosting plans.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.locale-edit` (integer)
    Whether to allow the reseller to create and modify locales on
the server.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.mailcheck` (integer)
    Whether to allow the reseller to troubleshoot mail delivery.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.manage-api-tokens` (integer)
    Whether to allow the reseller to manage API tokens.

* 1 — Allow.
* 0 — Do not allow.

Note:

This ACL privilege allows an API token user to bypass any
restrictions that you set on the API token. For more information,
read our
[Manage API Tokens](https://go.cpanel.net/ManageAPITokens)
documentation.
    Enum: 1, 0

  - `data.acl.privileges.manage-dns-records` (integer)
    Whether to allow the reseller to manage DNS records.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.manage-oidc` (integer)
    Whether to allow the reseller to manage external authentication
for their accounts.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.manage-styles` (integer)
    Whether to allow the reseller to manage their server's cPanel
styles.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.mysql-info` (integer)
    Whether to allow the reseller to retrieve MySQL® database and
user data.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.news` (integer)
    Whether to allow the reseller to modify the server's news.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.ns-config` (integer)
    Whether to allow the reseller to manage nameserver records.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.park-dns` (integer)
    Whether to allow the reseller to park DNS zones.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.passwd` (integer)
    Whether to allow the reseller to change passwords.

* 1 — Allow.
* 0 — Do not allow.

Note:

This privilege allows an API token user to change account
passwords and log in with a new password. For more information,
read our
[Manage API Tokens](https://go.cpanel.net/ManageAPITokens)
documentation.
    Enum: 1, 0

  - `data.acl.privileges.quota` (integer)
    Whether to allow the reseller to modify quotas.

* 1 — Allow.
* 0 — Do not allow.

Warning:

If you do not use resource limits, a value of 1
allows resellers to circumvent package limits for disk space.
    Enum: 1, 0

  - `data.acl.privileges.rearrange-accts` (integer)
    Whether to allow the reseller to rearrange accounts.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.resftp` (integer)
    Whether to allow the reseller to resync FTP passwords.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.restart` (integer)
    Whether to allow the reseller to restart services.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.show-bandwidth` (integer)
    Whether to allow the reseller to view account bandwidth usage.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.ssl` (integer)
    Whether to allow the reseller to perform SSL site management.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.ssl-buy` (integer)
    Whether to allow the reseller to purchase SSL certificates.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.ssl-gencrt` (integer)
    Whether to allow the reseller to generate SSL certificates.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.ssl-info` (integer)
    Whether to allow the reseller to view their server's SSL
information.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.stats` (integer)
    Whether to allow the reseller to view server information.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.status` (integer)
    Whether to allow the reseller to view the server's status.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.suspend-acct` (integer)
    Whether to allow the reseller to suspend or unsuspend accounts.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.thirdparty` (integer)
    Whether to allow the reseller to manage third-party services.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.track-email` (integer)
    Whether to allow resellers to view reports about email message
delivery attempts from their account.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.upgrade-account` (integer)
    Whether to allow the reseller to upgrade or downgrade accounts.

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.viewglobalpackages` (integer)
    Whether to allow the reseller to use all
[global packages](https://go.cpanel.net/resellerpackages).

* 1 — Allow.
* 0 — Do not allow.
    Enum: 1, 0

  - `data.acl.privileges.frontpage` (integer)
    Whether to allow the reseller to manage Microsoft® FrontPage®
Extensions.

* 1 — Allow.
* 0 — Do not allow.

Note:

cPanel & WHM ignores all Microsoft FrontPage settings and parameters.
    Enum: 1, 0

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "listacls"

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


