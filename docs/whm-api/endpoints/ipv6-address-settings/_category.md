# IPv6 Address Settings

IP Address Management / IPv6 Address Settings

## Remove IPv6 address range from account

 - [GET /ipv6_disable_account](https://api.docs.cpanel.net/specifications/whm.openapi/ipv6-address-settings/ipv6-ipv6_disable_account.md): This function removes the IPv6 address from an account.

Notes:

- When you disable IPv6 on an account, the system unbinds that IPv6 address from your server and the account loses the address. If you enable IPv6 on that account again, the system assigns it a different IPv6 address.
- For all of cPanel & WHM's features to function properly on IPv6, the cpsrvd daemon must listen on IPv6 addresses. To enable this functionality, select On for the Listen on IPv6 Addresses setting in the System section of WHM's Tweak Settings interface (WHM >> Home >> Server Configuration >> Tweak Settings).

Important:

When you disable the Web Server role, the system disables this function.

## Add IPv6 address range to accounts

 - [GET /ipv6_enable_account](https://api.docs.cpanel.net/specifications/whm.openapi/ipv6-address-settings/ipv6-ipv6_enable_account.md): This function assigns an IPv6 address to one or more accounts.

Note:

You must perform at least one of the following actions before you call this function:
   Use WHM's IPv6 Ranges interface (WHM >> Home >> IP Functions >> IPv6 Ranges*) or WHM API 1's ipv6_range_add function to add one or more IPv6 address ranges for use as dedicated IPv6 addresses.
   Use WHM's Basic WebHost Manager Setup interface (WHM >> Home >> Server Configuration >> Basic WebHost Manager Setup*) or modify the /etc/wwwacct.conf file to add a shared IPv6 address to the server.
   For all of cPanel & WHM's features to function properly on IPv6, the cpsrvd daemon must listen on IPv6 addresses. To enable this functionality, select On for the Listen on IPv6 Addresses setting in the System section of WHM's Tweak Settings interface (WHM >> Home >> Server Configuration >> Tweak Settings*).

Important:

When you disable the Web Server role, the system disables this function.

## Add IPv6 address range

 - [GET /ipv6_range_add](https://api.docs.cpanel.net/specifications/whm.openapi/ipv6-address-settings/ipv6-ipv6_range_add.md): This function adds a range of IPv6 addresses to the server.

Notes:

- This function cannot modify the server's shared IPv6 address. To update that address, modify the /etc/wwwacct.conf file, or use WHM's Basic WebHost Manager Setup interface (Home >> Server Configuration >> Basic WebHost Manager Setup).
- For all of cPanel & WHM's features to function properly on IPv6, the cpsrvd daemon must listen on IPv6 addresses. To enable this functionality, select On for the Listen on IPv6 Addresses setting in the System section of WHM's Tweak Settings interface (WHM >> Home >> Server Configuration >> Tweak Settings).

Important:

When you disable the Web Server role, the system disables this function.

## Update IPv6 address range name or note

 - [GET /ipv6_range_edit](https://api.docs.cpanel.net/specifications/whm.openapi/ipv6-address-settings/ipv6-ipv6_range_edit.md): This function changes an IPv6 address range's name and/or note.

Notes:

- This function cannot modify the server's shared IPv6 address. To update that address, modify the /etc/wwwacct.conf file, or use WHM's Basic WebHost Manager Setup interface (Home >> Server Configuration >> Basic WebHost Manager Setup).
- For all of cPanel & WHM's features to function properly on IPv6, the cpsrvd daemon must listen on IPv6 addresses. To enable this functionality, select On for the Listen on IPv6 Addresses setting in the System section of WHM's Tweak Settings interface (WHM >> Home >> Server Configuration >> Tweak Settings).

Important:

When you disable the Web Server role, the system disables this function.

## Return available IPv6 address ranges

 - [GET /ipv6_range_list](https://api.docs.cpanel.net/specifications/whm.openapi/ipv6-address-settings/ipv6-ipv6_range_list.md): This function lists available IPv6 address ranges.

Note:

For all of cPanel & WHM's features to function properly on IPv6, the cpsrvd daemon must listen on IPv6 addresses. To enable this functionality, select On for the Listen on IPv6 Addresses setting in the System section of WHM's Tweak Settings interface (WHM >> Home >> Server Configuration >> Tweak Settings).

Important:

When you disable the Web Server role, the system disables this function.

## Remove IPv6 address range

 - [GET /ipv6_range_remove](https://api.docs.cpanel.net/specifications/whm.openapi/ipv6-address-settings/ipv6-ipv6_range_remove.md): This function removes an IPv6 address range from the server.

Note:

* This function cannot modify the server's shared IPv6 address. To update that address, modify the /etc/wwwacct.conf file, or use WHM's _Basic WebHost Manager Setup_ interface (_Home >> Server Configuration >> Basic WebHost Manager Setup_).
* For all of cPanel & WHM's features to function properly on IPv6, the cpsrvd daemon must listen on IPv6 addresses. To enable this functionality, select _On_ for the _Listen on IPv6 Addresses_ setting in the _System_ section of WHM's _Tweak Settings_ interface (_WHM >> Home >> Server Configuration >> Tweak Settings_).

Important:

When you disable the Web Server role, the system disables this function.

## Return IPv6 address usage

 - [GET /ipv6_range_usage](https://api.docs.cpanel.net/specifications/whm.openapi/ipv6-address-settings/ipv6-ipv6_range_usage.md): This function retrieves usage information for IPv6 addresses in an IPv6 range.

Note:

For all of cPanel & WHM's features to function properly on IPv6, the cpsrvd daemon must listen on IPv6 addresses. To enable this functionality, select On for the Listen on IPv6 Addresses setting in the System section of WHM's Tweak Settings interface (WHM >> Home >> Server Configuration >> Tweak Settings).

Important:

When you disable the Web Server role, the system disables this function.

## Return server's IPv6 addresses

 - [GET /listipv6s](https://api.docs.cpanel.net/specifications/whm.openapi/ipv6-address-settings/ips-listipv6s.md): This function lists the IPv6 addresses bound to a server’s network interfaces.

