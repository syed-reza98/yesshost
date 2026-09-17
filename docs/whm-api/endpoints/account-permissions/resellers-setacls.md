# Create or update reseller privilege settings

This function creates or modifies an Access Control List (ACL).

Note:

  For each acl-* parameter, any value adds that privilege to the ACL list and no value removes that privilege from the ACL list.

Warning:

  We strongly recommend that WHM users create and edit ACLs and ACL privileges through WHM's Edit Reseller Nameservers and Privileges interface ( WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges ).

Endpoint: GET /setacls
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `reseller` (string, required)
    The reseller's username.
    Example: "username"

  - `acl-acct-summary` (integer)
    Whether to allow the reseller to view an account summary.
    Enum: 1

  - `acl-add-pkg` (integer)
    Whether to allow the reseller to add and remove hosting plans (packages).
    Enum: 1

  - `acl-add-pkg-ip` (integer)
    Whether to allow the reseller to create packages with a dedicated IP address.
    Enum: 1

  - `acl-add-pkg-shell` (integer)
    Whether to allow the reseller to create packages with shell access.
    Enum: 1

  - `acl-all` (integer)
    Whether to grant the reseller all ACL privileges.

Warning:

 A value of 1 grants root-level privileges to the reseller.
    Enum: 1

  - `acl-allow-addoncreate` (integer)
    Whether to allow the reseller to create packages with addon domains.
    Enum: 1

  - `acl-allow-parkedcreate` (integer)
    Whether to allow the reseller to create packages with parked domains (aliases).
    Enum: 1

  - `acl-allow-unlimited-bw-pkgs` (integer)
    Whether to allow the reseller to create packages with unlimited bandwidth.
    Enum: 1

  - `acl-allow-unlimited-disk-pkgs` (integer)
    Whether to allow the reseller to create packages with unlimited disk space.
    Enum: 1

  - `acl-allow-unlimited-pkgs` (integer)
    Whether to allow the reseller to create packages with unlimited features.
    Enum: 1

  - `acl-basic-system-info` (integer)
    Whether to allow the reseller to retrieve basic system information.
    Enum: 1

  - `acl-basic-whm-functions` (integer)
    Whether to allow the reseller to access basic cPanel & WHM options.
    Enum: 1

  - `acl-clustering` (integer)
    Whether to allow the reseller to use DNS clusters.
    Enum: 1

  - `acl-cors-proxy-get` (integer)
    Whether to allow the reseller to perform Cross-Origin Resource Sharing (CORS) HTTP requests.
    Enum: 1

  - `acl-cpanel-api` (integer)
    Whether to allow the reseller to execute cPanel API 1, cPanel API 2 and UAPI functions via WHM.
    Enum: 1

  - `acl-cpanel-integration` (integer)
    Whether to allow the reseller to manage how their server and its services connect to other servers and services.
    Enum: 1

  - `acl-create-acct` (integer)
    Whether to allow the reseller to create accounts.
    Enum: 1

  - `acl-create-dns` (integer)
    Whether to allow the reseller to add DNS zones.
    Enum: 1

  - `acl-create-user-session` (integer)
    Whether to allow the reseller to create a temporary session user for a specified service.

Note:

 This privilege allows an API token user to bypass any restrictions that you set on the API token. For more information, read our Manage API Tokens documentation.
    Enum: 1

  - `acl-demo-setup` (integer)
    Whether to allow the reseller to enable demo mode for accounts.
    Enum: 1

  - `acl-digest-auth` (integer)
    Whether to allow the reseller to manage Digest Authentication support.
    Enum: 1

  - `acl-disallow-shell` (integer)
    Whether to allow the reseller to create accounts with shell access.
    Enum: 1

  - `acl-edit-account` (integer)
    Whether to allow the reseller to edit accounts.
    Enum: 1

  - `acl-edit-dns` (integer)
    Whether to allow the reseller to edit DNS zones.
    Enum: 1

  - `acl-edit-mx` (integer)
    Whether to allow the reseller to edit MX entries.
    Enum: 1

  - `acl-edit-pkg` (integer)
    Whether to allow the reseller to edit hosting plans (packages).
    Enum: 1

  - `acl-generate-email-config` (integer)
    Whether to allow the reseller to generate a mobile configuration profile for an email account.
    Enum: 1

  - `acl-kill-acct` (integer)
    Whether to allow the reseller to terminate accounts.
    Enum: 1

  - `acl-kill-dns` (integer)
    Whether to allow the reseller to remove DNS zones.
    Enum: 1

  - `acl-limit-bandwidth` (integer)
    Whether to allow the reseller to modify bandwidth limits (quotas).

Warning:

 If you do not use resource limits, a value of 1 allows resellers to circumvent package limits for disk space.
    Enum: 1

  - `acl-list-accts` (integer)
    Whether to allow the reseller to view the list of accounts.
    Enum: 1

  - `acl-list-pkgs` (integer)
    Whether to allow the reseller to view existing hosting plans (packages).
    Enum: 1

  - `acl-locale-edit` (integer)
    Whether to allow the reseller to create and modify locales on the server.
    Enum: 1

  - `acl-mailcheck` (integer)
    Whether to allow the reseller to troubleshoot mail delivery.
    Enum: 1

  - `acl-manage-api-tokens` (integer)
    Whether to allow the reseller to manage API tokens.

Note:

 This privilege allows an API token user to bypass any restrictions that you set on the API token. For more information, read our Manage API Tokens documentation.
    Enum: 1

  - `acl-manage-dns-records` (integer)
    Whether to allow the reseller to manage DNS records.
    Enum: 1

  - `acl-manage-oidc` (integer)
    Whether to allow the reseller to manage external authentication for their accounts.
    Enum: 1

  - `acl-manage-styles` (integer)
    Whether to allow the reseller to manage their server's cPanel styles.
    Enum: 1

  - `acl-mysql-info` (integer)
    Whether to allow the reseller to retrieve MySQL® database and user data.
    Enum: 1

  - `acl-nameserver-config` (integer)
    Whether to allow the reseller to manage nameservers.
    Enum: 1

  - `acl-news` (integer)
    Whether to allow the reseller to modify the server's news.
    Enum: 1

  - `acl-park-dns` (integer)
    Whether to allow the reseller to park DNS zones.
    Enum: 1

  - `acl-passwd` (integer)
    Whether to allow the reseller to change passwords.

Note:

 This privilege allows an API token user to change account passwords and log in with a new password. For more information, read our Manage API Tokens documentation.
    Enum: 1

  - `acl-quota` (integer)
    Whether to allow the reseller to modify quotas.

Warning:

 If you do not use resource limits, a value of 1 allows resellers to circumvent package limits for disk space.
    Enum: 1

  - `acl-rearrange-accts` (integer)
    Whether to allow the reseller to rearrange accounts.
    Enum: 1

  - `acl-resftp` (integer)
    Whether to allow the reseller to resync FTP passwords.
    Enum: 1

  - `acl-restart` (integer)
    Whether to allow the reseller to restart services.
    Enum: 1

  - `acl-show-bandwidth` (integer)
    Whether to allow the reseller to view account bandwidth usage.
    Enum: 1

  - `acl-ssl` (integer)
    Whether to allow the reseller to perform SSL site management.
    Enum: 1

  - `acl-ssl-buy` (integer)
    Whether to allow the reseller to purchase SSL certificates.
    Enum: 1

  - `acl-ssl-gencrt` (integer)
    Whether to allow the reseller to generate SSL certificates.
    Enum: 1

  - `acl-ssl-info` (integer)
    Whether to allow the reseller to view their server's SSL information.
    Enum: 1

  - `acl-stats` (integer)
    Whether to allow the reseller to view server information.
    Enum: 1

  - `acl-status` (integer)
    Whether to allow the reseller to view the server's status.
    Enum: 1

  - `acl-suspend-acct` (integer)
    Whether to allow the reseller to suspend or unsuspend accounts.
    Enum: 1

  - `acl-thirdparty` (integer)
    Whether to allow the reseller to manage third-party services.
    Enum: 1

  - `acl-track-email` (integer)
    Whether to allow the reseller to view reports about email message delivery attempts from their account.
    Enum: 1

  - `acl-upgrade-account` (integer)
    Whether to allow the reseller to upgrade or downgrade accounts.
    Enum: 1

  - `acl-viewglobalpackages` (integer)
    Whether to allow the reseller to use all global packages. For more information, read our reseller packages documentation.
    Enum: 1

  - `acllist` (string)
    The ACL to assign to the reseller.

Warning:

 Functions should either use this parameter, or a combination of the acl-* parameters below. Do not include both in a single function.
    Example: "my_acl_list"

  - `user` (string)
    The reseller's username.

Note:

This parameter is an alias for reseller and is provided for backwards compatibility.
    Example: "username"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.acl` (array)
    An array of the reseller's privileges. An array that contains the names of one or more privileges.
    Example: ["all"]

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "setacls"

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


