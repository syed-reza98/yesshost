# IPv4 Address Settings

IP Address Management / IPv4 Address Settings

## Add IP addresses

 - [GET /addips](https://api.docs.cpanel.net/specifications/whm.openapi/ipv4-address-settings/ips-addips.md): This function adds an IPv4 address or addresses to the server.
When you add an IP address, the system attempts to add an alias of that IP
address to the main network interface. This process rebuilds the IP address
pool, which resides in the /etc/ipaddrpool file. The system stores IP addresses
within the /etc/ips file. The ipaliases service activates those IP addresses
when the server starts.

## Remove IP address

 - [GET /delip](https://api.docs.cpanel.net/specifications/whm.openapi/ipv4-address-settings/ips-delip.md): This function removes an IP address from the server.

## Return shared IP address

 - [GET /get_shared_ip](https://api.docs.cpanel.net/specifications/whm.openapi/ipv4-address-settings/ips-get_shared_ip.md): This function retrieves the IP address that an account shares with the accounts that it owns.

## Return server's IP addresses

 - [GET /listips](https://api.docs.cpanel.net/specifications/whm.openapi/ipv4-address-settings/ips-listips.md): This function lists a server's IP addresses.

## Update domain or cPanel account IP address

 - [GET /setsiteip](https://api.docs.cpanel.net/specifications/whm.openapi/ipv4-address-settings/accounts-setsiteip.md): This function changes a site's or account's IP address.

