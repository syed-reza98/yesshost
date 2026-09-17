# Reseller Account Management

Resellers / Account Management

## Enable cPanel account's reseller status

 - [GET /setupreseller](https://api.docs.cpanel.net/specifications/whm.openapi/reseller-account-management/resellers-setupreseller.md): This function grants reseller status to an account.

Note:

This function grants reseller status to an existing account. You cannot create a new account with this function.

## Suspend reseller

 - [GET /suspendreseller](https://api.docs.cpanel.net/specifications/whm.openapi/reseller-account-management/resellers-suspendreseller.md): This function suspends a reseller account.

## Delete reseller and reseller's cPanel accounts

 - [GET /terminatereseller](https://api.docs.cpanel.net/specifications/whm.openapi/reseller-account-management/resellers-terminatereseller.md): This function deletes a reseller and all of the reseller's cPanel accounts.

Warning:

* You cannot recover deleted accounts. Use this function with extreme caution.
* This function deletes the reseller account and all of the accounts that the reseller
owns.
* To remove reseller privileges from an account but not delete the reseller's account
or any accounts that the reseller owns, use the WHM API 1 unsetupreseller function.

## Disables cPanel account's reseller status

 - [GET /unsetupreseller](https://api.docs.cpanel.net/specifications/whm.openapi/reseller-account-management/resellers-unsetupreseller.md): This function revokes reseller status from an account.

## Unsuspend reseller

 - [GET /unsuspendreseller](https://api.docs.cpanel.net/specifications/whm.openapi/reseller-account-management/resellers-unsuspendreseller.md): This function unsuspends a reseller account.

