# Passwords

Accounts / Passwords

## Enable forced password update

 - [GET /forcepasswordchange](https://api.docs.cpanel.net/specifications/whm.openapi/passwords/accounts-forcepasswordchange.md): This function forces a user to change the account password after the next login attempt.

## Return password strength

 - [GET /get_password_strength](https://api.docs.cpanel.net/specifications/whm.openapi/passwords/accounts-get_password_strength.md): This function measures the strength of a password.

## Update cPanel account password

 - [GET /passwd](https://api.docs.cpanel.net/specifications/whm.openapi/passwords/sys-passwd.md): This function modifies a cPanel or reseller account's password.

Note

* When modifying the root password, this will only update the password for the root system user, but not for the root MySQL user.
* To update the MySQL root user's password, use set_local_mysql_root_password.

