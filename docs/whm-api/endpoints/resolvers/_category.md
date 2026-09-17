# Resolvers

DNS / Resolvers

## Return ALIAS DNS record availability & resolver

 - [GET /is_alias_available](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-is_alias_available.md): This function returns whether ALIAS and ANAME records are available and the value of the running PowerDNS (PDNS) resolver setting, if any exists.
For more information, read our ALIAS documentation.

## Return ALIAS DNS record availability & resolver

 - [GET /is_alias_available](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-is_alias_available.md): This function returns whether ALIAS and ANAME records are available and the value of the running PowerDNS (PDNS) resolver setting, if any exists.
For more information, read our ALIAS documentation.

## Return current user's nameservers

 - [GET /get_nameserver_config](https://api.docs.cpanel.net/specifications/whm.openapi/resolvers/nameserver-get_nameserver_config.md): This function retrieves the default nameservers for the currently-authenticated user.

## Return ALIAS DNS record availability & resolver

 - [GET /is_alias_available](https://api.docs.cpanel.net/specifications/whm.openapi/resolvers/dns-is_alias_available.md): This function returns whether ALIAS and ANAME records are available and the value of the running PowerDNS (PDNS) resolver setting, if any exists.
For more information, read our ALIAS documentation.

## Return nameserver's IP address

 - [GET /lookupnsip](https://api.docs.cpanel.net/specifications/whm.openapi/resolvers/nameserver-lookupnsip.md): This function retrieves a nameserver's IP address.

## Return nameserver's IPv4 and IPv6 addresses

 - [GET /lookupnsips](https://api.docs.cpanel.net/specifications/whm.openapi/resolvers/nameserver-lookupnsips.md): This function retrieves a nameserver's IPv4 and IPv6 addresses.

## Create unbound DNS resolver

 - [GET /set_up_dns_resolver_workarounds](https://api.docs.cpanel.net/specifications/whm.openapi/resolvers/dns-set_up_dns_resolver_workarounds.md): This function creates an Unbound (libunbound) DNS resolver configuration.

Important:

When you disable the DNS role, the system disables this function.

## Update server's resolver nameservers

 - [GET /setresolvers](https://api.docs.cpanel.net/specifications/whm.openapi/resolvers/resolvers-setresolvers.md): This function configures the server's resolver nameservers.

Warning:

* The nameservers that the server uses as resolvers must function correctly. If they do not, the server will experience performance and stability issues.
* Never set a resolver nameserver to 127.0.0.1 on a cPanel & WHM server.

## Update default nameservers

 - [GET /update_nameservers_config](https://api.docs.cpanel.net/specifications/whm.openapi/resolvers/wwwacct-update_nameservers_config.md): This function updates nameservers in the wwwacct.conf file. For more information, read our Installation Guide - Customize Your Installation documentation.

