# DNS Zones

DNS / DNS Zones

## Create DNS zone

 - [GET /adddns](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/dns-adddns.md): This function creates a DNS zone. If trueowner=user, this function does the following:
* Adds a DNS entry in the /var/cpanel/users/USER file, where USER represents the trueowner parameter's value.
* Creates the /etc/vdomainaliases/DOMAIN file, where DOMAIN represents the new zone's domain.
* Creates the /etc/vfilters/DOMAIN file, where DOMAIN represents the new zone's domain.

When you call this function, the system uses the domain name and IP address that you supply. WHM's standard zone template determines all other zone information.

This function generates the DNS zone's MX record, domain PTR, and A records automatically.

Important:

When you disable the DNS role, the system disables this function.

NOTE:

You cannot use this function to add temporary domains.

## Return whether DNS cluster server can share records

 - [GET /cluster_member_has_trust_with](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/clusterserver-cluster_member_has_trust_with.md): This function queries whether nameservers in a DNS cluster can share records with one another. Servers in a DNS cluster must exist in a Reverse Trust relationship to share information. This relationship requires each server to have an API token.

Note:

  DNS servers in a Write-Only role do not need to exist in a Reverse Trust relationship. For more information, read our Guide to DNS Cluster Configurations documentation.

## Update DNS zone record

 - [POST /editzonerecord](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/dns-editzonerecord.md): This function edits a DNS zone record. To effectively use this function, use the following workflow:
 1. Run the dumpzone function on the DNS zone record to edit.
 1. Locate the Line value that corresponds to the data to edit.
 1. Use the values from that zone record to formulate the appropriate editzonerecord parameters.

Important:

* When you call this function, you must include the additional parameters for the selected zone record type.
* To change the zone record's IP address, we recommend that you use the swapip script or the setsiteip function instead.
 You cannot edit other DNS zones that reside on Write-only* servers in a DNS cluster.

Note:

On servers that run CentOS 7, you may see a named warning about the absence of SPF resource records on DNS.
  * This warning is not relevant on CentOS 7 servers, because RFC 7208 deprecated SPF records. CentOS 7 servers use TXT records instead of SPF records.
  * Red Hat 7.1 and CentOS 7.1 both contain bind-9.9.4-23.el7, which is an updated version of BIND that complies with RFC 7208. To resolve this issue, update your operating system to a version that contains the updated version of BIND. For more information, read the Red Hat Bugzilla case about SPF record errors.

Important:

When you disable the DNS role, the system disables this function.

## Export domain's DNSKEY record value

 - [GET /export_zone_dnskey](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/dns-export_zone_dnskey.md): This function exports a domain's DNSKEY record value.

## Export DNS zones in zone file format

 - [GET /export_zone_files](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/dns-export_zone_files.md): This function returns one or more DNS zones, in
RFC-1035 format.

Important:

When you disable the DNS role, the system disables this function.

## Return specific line from domain's DNS configuration

 - [GET /getzonerecord](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/dns-getzonerecord.md): This function returns a line from a domain's DNS zone configuration.

Note:

On servers that run CentOS 7, you may see a named warning about the absence of SPF resource records on DNS.
 * This warning is not relevant on CentOS 7 servers, because RFC 7208 deprecated SPF records. CentOS 7 servers use TXT records instead of SPF records.
 * Red Hat 7.1 and CentOS 7.1 both contain bind-9.9.4-23.el7, which is an updated version of BIND that complies with RFC 7208. To resolve this issue, update your operating system to a version that contains the updated version of BIND. For more information, read the Red Hat Bugzilla case about SPF record errors.

Important:

  When you disable the DNS Role, the system disables this function.

## Delete DNS zone

 - [GET /killdns](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/dns-killdns.md): This function deletes a DNS zone.

Important:

- The WHM API 1 adddns function adds an XDNS entry for a domain in the following locations:
 - The /var/cpanel/users/USER file, where USER represents the domain's owner.
 - The /etc/vdomainaliases/DOMAIN directory, where DOMAIN represents the new zone's domain.
 - The /etc/vfilters/DOMAIN directory, where DOMAIN represents the new zone's domain.
- This function does not automatically delete these entries. You must manually delete these entries, or you cannot use this domain as a value in other API functions.
- You cannot delete other DNS zones that reside on Write-only servers in a DNS cluster.

Important:

When you disable the DNS role, the system disables this function.

NOTE:

You cannot use this function to delete temporary domains.

## Return server's DNS zones

 - [GET /listzones](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/dns-listzones.md): This function lists the server's DNS zones.

Important:

When you disable the DNS role, the system disables this function.

## Update a DNS zone

 - [GET /mass_edit_dns_zone](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/dns-mass_edit_dns_zone.md): This function updates a given DNS zone. It can add, edit,
and remove many records in a single call. It also ensures
that each record not removed will occupy the same
number of lines after the edit as it did before the edit.

NOTE:

You cannot use this function to modify temporary domains.

## Return a parsed DNS zone

 - [GET /parse_dns_zone](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/dns-parse_dns_zone.md): This function parses a given DNS zone.

Important:

Most DNS zones contain only 7-bit ASCII. However, it is possible for
DNS zones to contain any binary sequence. An application that decodes
this function's base64 output must be able to handle cases
where the decoded octets do not match any specific character
encoding.

## Delete DNS zone record

 - [GET /removezonerecord](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/dns-removezonerecord.md): This function deletes a DNS zone record.

Warning:

Incorrect use of this function could cause domains to resolve incorrectly. Exercise extreme caution when you remove DNS zone records.

To effectively use this function, use the following workflow:
1. Run the dumpzone function.
2. Locate the Line value that corresponds to the zone record to delete.
3. Use the values from that zone record to formulate the appropriate removezonerecord parameters.

Important:

 * When you disable the DNS role, the system disables this function.
 * You cannot use this function to modify temporary domains.

## Update reverse DNS cache

 - [GET /update_reverse_dns_cache](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/dns-update_reverse_dns_cache.md): This function queries DNS and updates the map of local IP addresses to reverse DNS names.

## Return domain's DNS zone configuration (deprecated)

 - [GET /dumpzone](https://api.docs.cpanel.net/specifications/whm.openapi/dns-zones/dns-dumpzone.md): This function returns a domain's DNS zone configuration.

Important:

* This function is deprecated. Use WHM's parse_dns_zone function.
* You must include either the domain or the zone parameters.
* When you disable the DNS role, the
system disables this function.

Note:

On servers that run CentOS 7, you may see a named warning about the absence of
SPF resource records on DNS.
  * This warning is not relevant on CentOS 7 servers, because
  RFC 7208 deprecated SPF records. CentOS 7
  servers use TXT records instead of SPF records.
  * Red Hat 7.1 and CentOS 7.1 both contain bind-9.9.4-23.el7, which is an
  updated version of BIND that complies with RFC 7208. To resolve this issue,
  update your operating system to a version that contains the updated version of
  BIND. For more information, read the
  Red Hat Bugzilla case about SPF record errors.

