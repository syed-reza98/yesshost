# Return cPanel account system privileges

This function retrieves the current user's Access Control List (ACL) privileges.

Endpoint: GET /myprivs
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.privileges` (array)
    An array of objects that contains the privileges available to the user, including any third-party ACL privileges.

  - `data.privileges.acct-summary` (integer)
    Allows the user to view an account summary.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.add-pkg` (integer)
    Allows the user to create packages.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.add-pkg-ip` (integer)
    Allows the user to create packages with dedicated IP addresses.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.add-pkg-shell` (integer)
    Allows the user to create packages with shell access.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.all` (integer)
    Provides all access privileges to the user.
* 1 — Enabled.
* 0 — Disabled.

Warning:

If this value is set to 1 , the user has root access.
    Enum: 0, 1

  - `data.privileges.allow-addoncreate` (integer)
    Allows the user to create packages with addon domains.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.allow-emaillimits-pkgs` (integer)
    Allows the user to create packages with custom email limits.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.allow-parkedcreate` (integer)
    Allows the user to create packages with parked domains (aliases).
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.allow-shell` (integer)
    Allows the user to create an account with shell access.
* 1 — Enabled.
* 0 — Disabled.

  - `data.privileges.allow-unlimited-bw-pkgs` (integer)
    Allows the user to create packages with unlimited bandwidth.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.allow-unlimited-disk-pkgs` (integer)
    Allows the user to create packages with unlimited disk space quotas.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.allow-unlimited-pkgs` (integer)
    Allows the user to create packages with unlimited values for features (for example, unlimited email accounts).
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.basic-system-info` (integer)
    Allows the user to retrieve basic system information.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.basic-whm-functions` (integer)
    Whether to give the reseller access to basic cPanel & WHM options.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.clustering` (integer)
    Allows the user to configure DNS clusters.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.cors-proxy-get` (integer)
    Allows the user to perform Cross-Origin Resource Sharing (CORS) HTTP requests.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.cpanel-api` (integer)
    Allows the reseller to execute cPanel [UAPI](https://go.cpanel.net/uapi) functions via WHM.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.cpanel-integration` (integer)
    Allows the user to manage how their server and its services connect to other servers and services.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.create-acct` (integer)
    Allows the user to create accounts.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.create-dns` (integer)
    Allows the user to create DNS zones.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.create-user-session` (integer)
    Allows the user to create a new temporary user session for a specified service.
* 1 — Enabled.
* 0 — Disabled.

Note:

This privilege allows an API token user to bypass any restrictions that you set on the API token. For more information, read our [Manage API Tokens](https://go.cpanel.net/whmdocsManageasisAPITokens) documentation.
    Enum: 0, 1

  - `data.privileges.demo-setup` (integer)
    Allows the user to enable demo mode on accounts.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.digest-auth` (integer)
    Allows the user to manage Digest Authentication support.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.edit-account` (integer)
    Allows the user to modify accounts.
* 1 — Enabled.
* 0 — Disabled.

Warning:

This privilege allows circumvention of account creation limits, gives shell access unless explicitly disallowed, and provides access to dedicated IP addresses, among other features.
    Enum: 0, 1

  - `data.privileges.edit-dns` (integer)
    Allows the user to edit DNS zones.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.edit-mx` (integer)
    Allows the user to edit MX entries.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.edit-pkg` (integer)
    Allows the user to create and delete packages.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.file-restore` (integer)
    Allows the user to restore specific files and directories from a backup.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.generate-email-config` (integer)
    Allows the user to generate a mobile configuration profile for an email account.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.kill-acct` (integer)
    Allows the user to delete their customers' accounts.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.kill-dns` (integer)
    Allows the user to delete DNS zones.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.limit-bandwidth` (integer)
    Allows the user to modify bandwidth limits on their accounts.
* 1 — Enabled.
* 0 — Disabled.

Warning:

 This will allow circumvention of account package limits if you do not use resource limits.
    Enum: 0, 1

  - `data.privileges.list-accts` (integer)
    Allows the user to list owned accounts.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.list-pkgs` (integer)
    Allows the user to view existing hosting plans (packages).
* 1 — Enabled.
* 0 — Disabled.

  - `data.privileges.locale-edit` (integer)
    Allows the user to create and modify locales on the server.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.mailcheck` (integer)
    Allows the user to access WHM's [_Mail Troubleshooter_](https://go.cpanel.net/whmdocsMailTroubleshooter) interface (_WHM >> Home >> Mail >> Mail Troubleshooter_).
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.manage-api-tokens` (integer)
    Allows the user to manage API tokens.
* 1 — Enabled.
* 0 — Disabled.

Note:

This ACL privilege allows an API token user to bypass any restrictions that you set on the API token.
    Enum: 0, 1

  - `data.privileges.manage-dns-records` (integer)
    Allows the user to manage DNS records.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.manage-oidc` (integer)
    Allows the user to manage external authentication for their accounts.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.manage-styles` (integer)
    Allows the user to manage their server's cPanel styles.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.mysql-info` (integer)
    Allows the user to retrieve MySQL® database and user data.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.news` (integer)
    Allows the user to send news messages to customers' accounts.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.ns-config` (integer)
    Allows the user to manage nameservers.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.park-dns` (integer)
    Allows the user to park domains within WHM.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.passwd` (integer)
    Allows the user to modify passwords for customers' accounts.
* 1 — Enabled.
* 0 — Disabled.

Note:

 This privilege allows an API token user to change account passwords and log in with a new password. For more information, read our [Manage API Tokens](https://go.cpanel.net/whmdocsManageasisAPITokens) documentation.
    Enum: 0, 1

  - `data.privileges.quota` (integer)
    Allows the user to modify disk space quotas for accounts.
* 1 — Enabled.
* 0 — Disabled.

Warning:

 This ACL privilege allows circumvention of account package limits if you do not use resource limits.
    Enum: 0, 1

  - `data.privileges.rearrange-accts` (integer)
    Allows the user to rearrange the locations of customer accounts in order to free up disk space.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.resftp` (integer)
    Allows the user to re-sync FTP account passwords.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.restart` (integer)
    Allows the user to restart services on the server, such as Apache® or Exim.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.show-bandwidth` (integer)
    Allows the user to view the bandwidth usage of accounts.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.ssl` (integer)
    Allows the user to manage the SSL certificates installed on domains.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.ssl-buy` (integer)
    Allows the user to use WHM's [_Purchase and Install an SSL Certificate_](https://go.cpanel.net/whmdocsPurchaseandInstallanSSLCertificate) interface (_WHM >> Home >> SSL/TLS >> Purchase and Install an SSL Certificate_).
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.ssl-gencrt` (integer)
    Allows the user to use the SSL CSR/CRT generator.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.ssl-info` (integer)
    Allows the user to view their server's SSL information.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.stats` (integer)
    Allows the user to view WHM's [_Server Information_](https://go.cpanel.net/whmdocsServerInformation) interface (_WHM >> Home >> Server Status >> Server Information_).
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.status` (integer)
    Allows the user to view WHM's [_Service Status_](https://go.cpanel.net/whmdocsServiceStatus) interface (_WHM >> Home >> Server Status >> Service Status_).
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.suspend-acct` (integer)
    Allows the user to suspend customers' accounts.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.thirdparty` (integer)
    Allows the user to manage third-party service offerings.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.track-email` (integer)
    Allows the user to view reports about email message delivery attempts from their account.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.upgrade-account` (integer)
    Allows the user to upgrade and downgrade customers' domain accounts.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.privileges.viewglobalpackages` (integer)
    Whether to allow the reseller to use all global packages. For more information, read our [reseller packages](https://go.cpanel.net/resellerpackages) documentation.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "myprivs"

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


