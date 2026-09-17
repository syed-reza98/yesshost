# WHM Access

Security / WHM Access

## Clear all CIDR restrictions to login to cPanel & WHM with the root password.

 - [GET /allow_all_whm_root_access](https://api.docs.cpanel.net/specifications/whm.openapi/whm-access/rootipaccess-allow_all_whm_root_access.md): This function removes all restrictions to root login to cPanel & WHM login based on IP.

## Restrict Access to WHM by CIDR list.

 - [GET /restrict_whm_root_access](https://api.docs.cpanel.net/specifications/whm.openapi/whm-access/rootipaccess-restrict_whm_root_access.md): This function restricts root login to cPanel & WHM based on a list of CIDR addresses.

Note:

This API manipulates /var/cpanel/authorized_whm_root_ips. We HIGHLY recommend
you not modify this file directly. Improper formatting of the file can lead to loss of all
access to cPanel & WHM using the root password.

Use of this API replaces any previous restrictions so be sure to include previous CIDR patterns
when adding new ones.

As this API only restricts logins, please be aware that existing root logins are not terminated
when these restrictions are asserted.

This API DOES NOT restrict root resellers.

