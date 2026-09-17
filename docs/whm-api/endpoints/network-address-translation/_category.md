# Network Address Translation

IP Address Management / Network Address Translation

## Return public IP address of private IP address

 - [GET /get_public_ip](https://api.docs.cpanel.net/specifications/whm.openapi/network-address-translation/ips-get_public_ip.md): This function returns the public IP address for a specified public or private IP address. You can use this function to determine the system's main public IP address, especially for systems that use a 1:1 NAT configuration.
* cPanel & WHM uses the main public IP address to perform many different functions. For example, the system uses this IP address to verify the server's license status with WebPros International, LLC.
* System administrators can configure the main public IP address in WHM's Basic WebHost Manager Setup interface (_Home >> Server Configuration >> Basic WebHost Manager Setup_).

## Validate public IP address for NAT

 - [GET /nat_checkip](https://api.docs.cpanel.net/specifications/whm.openapi/network-address-translation/nat-nat_checkip.md): This function validates a public IP address on a NAT-configured server.

## Register NAT IP address to public IP address

 - [GET /nat_set_public_ip](https://api.docs.cpanel.net/specifications/whm.openapi/network-address-translation/nat-nat_set_public_ip.md): This function pairs a local IP address with a public IP address on NAT-configured servers.

