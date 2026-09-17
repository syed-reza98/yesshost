# Account Management

Accounts / Account Management

## Return cPanel account summary

 - [GET /accountsummary](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/accounts-accountsummary.md): This function retrieves a summary of a user's account.

Note:

You must use either the user or domain parameters.

## Update user hosting plan

 - [GET /changepackage](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/accounts-changepackage.md): This function changes a cPanel account's hosting plan (package).

## Return home directories list

 - [GET /get_homedir_roots](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/accounts-get_homedir_roots.md): This function returns all the directories where the system stores
users' home directories. It returns them in descending order, based on the
current amount of available free disk space for each directory. For example,
the first directory the function lists has the most available free disk space.

Note:

Use WHM's Basic WebHost Manager Setup (WHM >> Home >> Server Configuration >> Basic WebHost Manager Setup) to configure where the system will create a new user's home directory.

## Get upgrade opportunities

 - [GET /get_upgrade_opportunities](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/accounts-get_upgrade_opportunities.md): This function lists accounts that could benefit from upgrading to a different package.
The listed accounts may be nearing (or exceeding) resource usage thresholds.

## Validate cPanel account Digest Authentication

 - [GET /has_digest_auth](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/sys-has_digest_auth.md): This function checks whether Digest Authentication is enabled for
a cPanel user. Windows® Vista, Windows® 7, and Windows® 8 require Digest Authentication
support in order to access Web Disk over an unencrypted connection.

## Validate MySQL Configuration file

 - [GET /has_mycnf_for_cpuser](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/sys-has_mycnf_for_cpuser.md): This function checks whether a cPanel user's home directory contains
a valid .my.cnf file.

## Return root and cPanel accounts

 - [GET /list_users](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/accounts-list_users.md): This function lists the cPanel user accounts and the root user on the server.

## Return cPanel accounts

 - [GET /listaccts](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/accounts-listaccts.md): This function lists the accounts on the server.

## Update multiple cPanel accounts

 - [GET /massmodifyacct](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/accounts-massmodifyacct.md): This function modifies multiple cPanel accounts.

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

## Update cPanel account

 - [GET /modifyacct](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/accounts-modifyacct.md): This function modifies a cPanel account.

Warning:

We strongly recommend that you do not modify a single cPanel account's settings if that cPanel account uses a hosting plan (package). If the package values change, the system will overwrite any of your custom values with the package's new values.

Note:

On servers that run CentOS 7, you may see a named warning about the absence of SPF resource records on DNS.
  * This warning is not relevant on CentOS 7 servers, because RFC 7208 deprecated SPF records. CentOS 7 servers use TXT records instead of SPF records.
  * Red Hat 7.1 and CentOS 7.1 both contain bind-9.9.4-23.el7, which is an updated version of BIND that complies with RFC 7208. To resolve this issue, update your operating system to a version that contains the updated version of BIND. For more information, read the Red Hat Bugzilla case about SPF record errors.

## Return cPanel account system privileges

 - [GET /myprivs](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/acls-myprivs.md): This function retrieves the current user's Access Control List (ACL) privileges.

## Return data from NVData file

 - [POST /personalization_get](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/personalization-personalization_get.md): This function retrieves the data from an NVData file on disk. cPanel
NVData is a per-account configuration storage mechanism that you can use to
maintain persistent cPanel & WHM settings across multiple sessions. This includes
custom settings for your own themes.

Note:

You can only call this function as a JSON request. For more information about
additional output options, run the whmapi1 --help command.

## Save data to NVData file

 - [POST /personalization_set](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/personalization-personalization_set.md): This function is used to save personalization data for a WHM user to a
datastore on disk.

We call this system cPanel NVData. 

cPanel NVData is a per-login configuration storage mechanism that you can use to
maintain persistent user interface settings across multiple sessions.

This includes custom settings for your own themes and plugins.

This function is used to save personalzation data for WHM users only. If you want to save personalization data for cPanel users, use the
UAPI function personalization_set.

## Delete cPanel account

 - [GET /removeacct](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/accounts-removeacct.md): This function deletes a cPanel or WHM account.

## Enable or disable Digest Authentication

 - [GET /set_digest_auth](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/sys-set_digest_auth.md): This function enables or disables Digest Authentication for an account. Windows Vista®,
Windows® 7, and Windows® 8 requires that you enable Digest Authentication support in order
to access your Web Disk over a clear text,
unencrypted connection.

Note:

If the server has an SSL certificate that a recognized certificate authority signed and you
can make an SSL connection over port 2078, you do not need to enable Digest Authentication.

## Change document root for cPanel account primary domain

 - [GET /set_primary_domain_docroot](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/accounts-set_primary_domain_docroot.md): This function changes the document root for a cPanel account's primary domain.

To change the document root for an addon domain or subdomain, use the cPanel
UAPI SubDomain::changedocroot function instead.

Important:

- The target directory must already exist before you call this function.
  The API function does not create it.
- This function does not move any files. You must ensure that the files
  exist in the new path when you call this function.
- Any parked domains (ServerAlias entries) on the affected domain will
  inherit the new document root.
- AutoSSL HTTP-01 renewals will fail if the new document root is empty
  or missing at renewal time.
- To revert a document root change, call this function again with the
  original path.

## Remove UID or GID from tracked list

 - [GET /untrack_acct_id](https://api.docs.cpanel.net/specifications/whm.openapi/account-management/accounts-untrack_acct_id.md): This function removes a user identification number (UID) or group
identification number (GID) from the tracked ID list.

