# Suspensions

Accounts / Suspensions

## Return suspended cPanel accounts

 - [GET /listlockedaccounts](https://api.docs.cpanel.net/specifications/whm.openapi/suspensions/accounts-listlockedaccounts.md): This function lists locked accounts on the server. Only WHM users with
root-level privileges can unsuspend locked accounts.

## Return suspended cPanel accounts and information

 - [GET /listsuspended](https://api.docs.cpanel.net/specifications/whm.openapi/suspensions/accounts-listsuspended.md): This function lists suspended accounts on the server.

## Suspend cPanel account

 - [GET /suspendacct](https://api.docs.cpanel.net/specifications/whm.openapi/suspensions/accounts-suspendacct.md): This function suspends an account.

## Unsuspend cPanel account

 - [GET /unsuspendacct](https://api.docs.cpanel.net/specifications/whm.openapi/suspensions/accounts-unsuspendacct.md): This function unsuspends an account.

Note:

Only the root account and root-enabled resellers can unsuspend a locked account.

