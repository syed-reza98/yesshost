# Account Settings

Resellers / Account Settings

## Return reseller's owned accounts' information

 - [GET /acctcounts](https://api.docs.cpanel.net/specifications/whm.openapi/account-settings/resellers-acctcounts.md): This function lists a reseller's total accounts, suspended accounts, and account creation limit.

## Return current user's public contact information

 - [GET /get_public_contact](https://api.docs.cpanel.net/specifications/whm.openapi/account-settings/publiccontact-get_public_contact.md): This function retrieves an account's public contact information.

## Return reseller's available IP addresses

 - [GET /getresellerips](https://api.docs.cpanel.net/specifications/whm.openapi/account-settings/resellers-getresellerips.md): This function lists a reseller's available IP addresses.

## Return all resellers

 - [GET /listresellers](https://api.docs.cpanel.net/specifications/whm.openapi/account-settings/resellers-listresellers.md): This function lists the reseller accounts on the server.

## Return reseller's information

 - [GET /resellerstats](https://api.docs.cpanel.net/specifications/whm.openapi/account-settings/resellers-resellerstats.md): This function lists data about a reseller's accounts.

## Update current user's public contact information

 - [GET /set_public_contact](https://api.docs.cpanel.net/specifications/whm.openapi/account-settings/publiccontact-set_public_contact.md): This function sets an account's public contact information.

## Add IP addresses to reseller

 - [GET /setresellerips](https://api.docs.cpanel.net/specifications/whm.openapi/account-settings/resellers-setresellerips.md): This function adds IP addresses to a reseller's account.

Note:

To assign a main IP address to a reseller's account, call the WHM API 1 setresellermainip function.

For more information, read our Manage Reseller's IP Delegation documentation.

## Update reseller's main IP address

 - [GET /setresellermainip](https://api.docs.cpanel.net/specifications/whm.openapi/account-settings/resellers-setresellermainip.md): This function assigns a main IP address to a reseller's account.

Note:

  To assign additional IP addresses to a reseller's account, call the WHM API 1 setresellerips function.

## Update reseller's assigned nameservers

 - [GET /setresellernameservers](https://api.docs.cpanel.net/specifications/whm.openapi/account-settings/resellers-setresellernameservers.md): This function assigns nameservers to a reseller's account.

