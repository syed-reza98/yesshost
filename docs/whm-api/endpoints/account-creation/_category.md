# Account Creation

Accounts Creation / Accounts

## Create cPanel account

 - [GET /createacct](https://api.docs.cpanel.net/specifications/whm.openapi/account-creation/accounts-createacct.md): This function creates a cPanel account and sets up its domain information.

Note:

* On servers that run CentOS 7, you may see a named warning about the absence of SPF resource records on DNS.
* This warning is not relevant on CentOS 7 servers, because RFC 7208 deprecated SPF records. CentOS 7 servers use TXT records instead of SPF records.
* Red Hat 7.1 and CentOS 7.1 both contain bind-9.9.4-23.el7, which is an updated version of BIND that complies with RFC 7208. To resolve this issue, update your operating system to a version that contains the updated version of BIND. For more information, read the Red Hat Bugzilla case about SPF record errors.

## Return cPanel accounts total number

 - [GET /get_current_users_count](https://api.docs.cpanel.net/specifications/whm.openapi/account-creation/accounts-get_current_users_count.md): This function returns the number of cPanel accounts on the server.

## Return maximum accounts for license

 - [GET /get_maximum_users](https://api.docs.cpanel.net/specifications/whm.openapi/account-creation/accounts-get_maximum_users.md): This function returns the maximum number of cPanel accounts that the server's license allows.

## Validate new cPanel account username

 - [GET /verify_new_username](https://api.docs.cpanel.net/specifications/whm.openapi/account-creation/nameconflict-verify_new_username.md): This function checks for username conflicts during account creation.

