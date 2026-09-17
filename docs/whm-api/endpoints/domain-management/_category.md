# Domain Management

DNS / Domain Management

## Create DNS zone record

 - [POST /addzonerecord](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-addzonerecord.md): This function adds a DNS zone record.

Important:

* When you call this function, you must include the additional parameters for the selected zone record type.
* When you disable the DNS role, the system disables this function.

Note:

On servers that run CentOS 7, you may see a named warning about the absence of SPF resource records on DNS.
  * This warning is not relevant on CentOS 7 servers, because RFC 7208 deprecated SPF records. CentOS 7 servers use TXT records instead of SPF records.
  * Red Hat 7.1 and CentOS 7.1 both contain bind-9.9.4-23.el7, which is an updated version of BIND that complies with RFC 7208. To resolve this issue, update your operating system to a version that contains the updated version of BIND. For more information, read the Red Hat Bugzilla case about SPF record errors.

## Create domain alias

 - [GET /create_parked_domain_for_user](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/userdomains-create_parked_domain_for_user.md): This function creates an alias (parks a domain on a web virtual host).

## Create subdomain

 - [GET /create_subdomain](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/userdomains-create_subdomain.md): This function creates a subdomain.

## Delete domain

 - [GET /delete_domain](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/userdomains-delete_domain.md): This function deletes a domain.

Note:

This function does not remove an addon domain's associated subdomain. You must also run this function for the associated subdomain.

## Return domain's DS record

 - [GET /fetch_ds_records_for_domains](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-fetch_ds_records_for_domains.md): This function fetches a domain's Delegation of Signing (DS) record.

Note:

Only servers that run PowerDNS can use DNSSEC. If you call this function on a server that doesn't use PowerDNS, you will receive an error.

## Validate local server is authoritative

 - [GET /has_local_authority](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-has_local_authority.md): This function checks whether the local server has the authority to publish changes for the domain's DNS records.

Important:

When you disable the DNS role, the system disables this function.

## Return ALIAS DNS record availability & resolver

 - [GET /is_alias_available](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-is_alias_available.md): This function returns whether ALIAS and ANAME records are available and the value of the running PowerDNS (PDNS) resolver setting, if any exists.
For more information, read our ALIAS documentation.

## Return HTTPS DNS record support information

 - [GET /is_https_available](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-is_https_available.md): This function fetches information regarding HTTPS records support.
HTTPS records are defined in RFC 9460 and provide service parameters for HTTPS endpoints.
For more information, read our DNS Zone Manager documentation.

## Return SVCB DNS record support information

 - [GET /is_svcb_available](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-is_svcb_available.md): This function fetches information regarding SVCB records support.
SVCB records are defined in RFC 9460 and provide service binding and aliasing for arbitrary services.
For more information, read our DNS Zone Manager documentation.

## Return domain's mail exchanger records

 - [GET /listmxs](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-listmxs.md): This function lists a domain's MX records.

Important:

When you disable the DNS role, the system disables this function.

## Restore DNS zone to default values

 - [GET /resetzone](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-resetzone.md): This function resets a DNS zone to its default values. This also resets the domain's subdomain DNS records, and restores zone file subdomains in the server's httpd.conf file. For example, use this function to restore DNS zones that are corrupt.

Note:

Zone resets preserve valid TXT records, but all other records will return to their default values.

Important:

When you disable the DNS role, the system disables this function.

Note

You must include either the domain or the zone parameters.

## Return domain's IP address

 - [GET /resolvedomainname](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/nameserver-resolvedomainname.md): This function resolves a domain's IPv4 address.

## Create mail exchanger record

 - [GET /savemxs](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-savemxs.md): This function creates a new MX record.

Important:

When you disable the DNS role, the system disables this function.

## Enable NSEC3 semantics for domain

 - [GET /set_nsec3_for_domains](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-set_nsec3_for_domains.md): This function configures the domain to use Next Secure Record 3 (NSEC3) semantics.

Note:

Only servers that run PowerDNS can use DNSSEC. If you call this function on a server that doesn't use PowerDNS, you will receive an error.

## Enable NSEC semantics for domain

 - [GET /unset_nsec3_for_domains](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-unset_nsec3_for_domains.md): This function configures the domain to use Next Secure Record (NSEC) semantics instead of Next Secure Record 3 (NSEC3) semantics.

Note:

Only servers that run PowerDNS can use DNSSEC. If you call this function on a server that doesn't use PowerDNS, you will receive an error.

## Update /etc/userdomains file

 - [GET /updateuserdomains](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/userdomains-updateuserdomains.md): This function updates the /etc/userdomains file based on the entries in /var/cpanel/users directory.

## Create DNS zone record

 - [POST /addzonerecord](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-addzonerecord.md): This function adds a DNS zone record.

Important:

* When you call this function, you must include the additional parameters for the selected zone record type.
* When you disable the DNS role, the system disables this function.

Note:

On servers that run CentOS 7, you may see a named warning about the absence of SPF resource records on DNS.
  * This warning is not relevant on CentOS 7 servers, because RFC 7208 deprecated SPF records. CentOS 7 servers use TXT records instead of SPF records.
  * Red Hat 7.1 and CentOS 7.1 both contain bind-9.9.4-23.el7, which is an updated version of BIND that complies with RFC 7208. To resolve this issue, update your operating system to a version that contains the updated version of BIND. For more information, read the Red Hat Bugzilla case about SPF record errors.

## Create domain alias

 - [GET /create_parked_domain_for_user](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/userdomains-create_parked_domain_for_user.md): This function creates an alias (parks a domain on a web virtual host).

## Create subdomain

 - [GET /create_subdomain](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/userdomains-create_subdomain.md): This function creates a subdomain.

## Delete domain

 - [GET /delete_domain](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/userdomains-delete_domain.md): This function deletes a domain.

Note:

This function does not remove an addon domain's associated subdomain. You must also run this function for the associated subdomain.

## Return domain's DS record

 - [GET /fetch_ds_records_for_domains](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-fetch_ds_records_for_domains.md): This function fetches a domain's Delegation of Signing (DS) record.

Note:

Only servers that run PowerDNS can use DNSSEC. If you call this function on a server that doesn't use PowerDNS, you will receive an error.

## Validate local server is authoritative

 - [GET /has_local_authority](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-has_local_authority.md): This function checks whether the local server has the authority to publish changes for the domain's DNS records.

Important:

When you disable the DNS role, the system disables this function.

## Return ALIAS DNS record availability & resolver

 - [GET /is_alias_available](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-is_alias_available.md): This function returns whether ALIAS and ANAME records are available and the value of the running PowerDNS (PDNS) resolver setting, if any exists.
For more information, read our ALIAS documentation.

## Return HTTPS DNS record support information

 - [GET /is_https_available](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-is_https_available.md): This function fetches information regarding HTTPS records support.
HTTPS records are defined in RFC 9460 and provide service parameters for HTTPS endpoints.
For more information, read our DNS Zone Manager documentation.

## Return SVCB DNS record support information

 - [GET /is_svcb_available](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-is_svcb_available.md): This function fetches information regarding SVCB records support.
SVCB records are defined in RFC 9460 and provide service binding and aliasing for arbitrary services.
For more information, read our DNS Zone Manager documentation.

## Return domain's mail exchanger records

 - [GET /listmxs](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-listmxs.md): This function lists a domain's MX records.

Important:

When you disable the DNS role, the system disables this function.

## Restore DNS zone to default values

 - [GET /resetzone](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-resetzone.md): This function resets a DNS zone to its default values. This also resets the domain's subdomain DNS records, and restores zone file subdomains in the server's httpd.conf file. For example, use this function to restore DNS zones that are corrupt.

Note:

Zone resets preserve valid TXT records, but all other records will return to their default values.

Important:

When you disable the DNS role, the system disables this function.

Note

You must include either the domain or the zone parameters.

## Return domain's IP address

 - [GET /resolvedomainname](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/nameserver-resolvedomainname.md): This function resolves a domain's IPv4 address.

## Create mail exchanger record

 - [GET /savemxs](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-savemxs.md): This function creates a new MX record.

Important:

When you disable the DNS role, the system disables this function.

## Enable NSEC3 semantics for domain

 - [GET /set_nsec3_for_domains](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-set_nsec3_for_domains.md): This function configures the domain to use Next Secure Record 3 (NSEC3) semantics.

Note:

Only servers that run PowerDNS can use DNSSEC. If you call this function on a server that doesn't use PowerDNS, you will receive an error.

## Enable NSEC semantics for domain

 - [GET /unset_nsec3_for_domains](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/dns-unset_nsec3_for_domains.md): This function configures the domain to use Next Secure Record (NSEC) semantics instead of Next Secure Record 3 (NSEC3) semantics.

Note:

Only servers that run PowerDNS can use DNSSEC. If you call this function on a server that doesn't use PowerDNS, you will receive an error.

## Update /etc/userdomains file

 - [GET /updateuserdomains](https://api.docs.cpanel.net/specifications/whm.openapi/domain-management/userdomains-updateuserdomains.md): This function updates the /etc/userdomains file based on the entries in /var/cpanel/users directory.

## Return ALIAS DNS record availability & resolver

 - [GET /is_alias_available](https://api.docs.cpanel.net/specifications/whm.openapi/resolvers/dns-is_alias_available.md): This function returns whether ALIAS and ANAME records are available and the value of the running PowerDNS (PDNS) resolver setting, if any exists.
For more information, read our ALIAS documentation.

## Return HTTPS DNS record support information

 - [GET /is_https_available](https://api.docs.cpanel.net/specifications/whm.openapi/service-records/dns-is_https_available.md): This function fetches information regarding HTTPS records support.
HTTPS records are defined in RFC 9460 and provide service parameters for HTTPS endpoints.
For more information, read our DNS Zone Manager documentation.

## Return SVCB DNS record support information

 - [GET /is_svcb_available](https://api.docs.cpanel.net/specifications/whm.openapi/service-records/dns-is_svcb_available.md): This function fetches information regarding SVCB records support.
SVCB records are defined in RFC 9460 and provide service binding and aliasing for arbitrary services.
For more information, read our DNS Zone Manager documentation.

