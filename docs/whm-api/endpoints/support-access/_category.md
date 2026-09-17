# Support Access

cPanel Support Tickets / Support Access

## Create Support SSH key

 - [GET /ticket_grant](https://api.docs.cpanel.net/specifications/whm.openapi/support-access/ticketsupport-ticket_grant.md): This function installs an SSH key from the
cPanel Customer Portal.

Note:

This function is not available through the command line. You must call
it as a request body.

## Delete Support SSH key and closed tickets

 - [GET /ticket_remove_closed](https://api.docs.cpanel.net/specifications/whm.openapi/support-access/ticketsupport-ticket_remove_closed.md): This function removes cPanel Support's SSH keys and removes closed
support tickets. You can view closed support tickets in WHM's
Grant cPanel Support Access
interface (WHM >> Home >> Support >> Grant cPanel Support Access).

Note:

This function is not available through the command line. You must call
it as a request body.

## Delete Support SSH key

 - [GET /ticket_revoke](https://api.docs.cpanel.net/specifications/whm.openapi/support-access/ticketsupport-ticket_revoke.md): This function removes a
cPanel Customer Portal
SSH key from the server.

Note:

This function is not available through the command line. You must call it
as a request body.

## Validate Customer Portal connection

 - [GET /ticket_ssh_test](https://api.docs.cpanel.net/specifications/whm.openapi/support-access/ticketsupport-ticket_ssh_test.md): This function verifies the connection from the
cPanel Customer Portal
to the server.

Note:

This function is not available through the command line. You must call it as
a request body.

## Validate Support SSH connection

 - [GET /ticket_ssh_test_start](https://api.docs.cpanel.net/specifications/whm.openapi/support-access/ticketsupport-ticket_ssh_test_start.md): This function initiates an SSH connection test.

Important:

This function is not available through the command line. You must call it
as a request body.

## Validate Support IP addresses on firewall

 - [GET /ticket_whitelist_check](https://api.docs.cpanel.net/specifications/whm.openapi/support-access/ticketsupport-ticket_whitelist_check.md): This function checks whether the server's firewall whitelist correlates
with the granted support tickets. You can view granted support tickets in
WHM's
Grant cPanel Support Access
interface (WHM >> Home >> Support >> Grant cPanel Support Access).

Note:

This function is not available through the command line. You must call it as
a request body.

## Add Support IP addresses to firewall

 - [GET /ticket_whitelist_setup](https://api.docs.cpanel.net/specifications/whm.openapi/support-access/ticketsupport-ticket_whitelist_setup.md): This function adds cPanel Support's IP addresses to your server's firewall
whitelist. This function is firewall-specific and does not change the
cPHulk
whitelist.

Note:

* This function is not available through the command line. You must call it as
a request body.
* This function logs error messages to the
/usr/local/cpanel/logs/error_log
file.

## Remove Support IP addresses from firewall

 - [GET /ticket_whitelist_unsetup](https://api.docs.cpanel.net/specifications/whm.openapi/support-access/ticketsupport-ticket_whitelist_unsetup.md): This function removes cPanel Support's IP addresses from your server's firewall
whitelist. This function is firewall-specific and does not change the
cPHulk
whitelist.

Note:

* This function is not available through the command line. You must call it as
a request body.
* This function logs error messages to the
/usr/local/cpanel/logs/error_log
file.

