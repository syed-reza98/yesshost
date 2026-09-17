# Return specific line from domain's DNS configuration

This function returns a line from a domain's DNS zone configuration.

Note:

On servers that run CentOS 7, you may see a named warning about the absence of SPF resource records on DNS.
 * This warning is not relevant on CentOS 7 servers, because RFC 7208 deprecated SPF records. CentOS 7 servers use TXT records instead of SPF records.
 * Red Hat 7.1 and CentOS 7.1 both contain bind-9.9.4-23.el7, which is an updated version of BIND that complies with RFC 7208. To resolve this issue, update your operating system to a version that contains the updated version of BIND. For more information, read the Red Hat Bugzilla case about SPF record errors.

Important:

  When you disable the DNS Role, the system disables this function.

Endpoint: GET /getzonerecord
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    The zone record's domain.
    Example: "example.com"

  - `line` (integer, required)
    The zone record's line number.
    Example: 2

## Response 200 fields (application/json):

  - `data` (object)

  - `data.record` (array)
    An array of objects containing the domain's zone record data.

  - `data.record.Line` (integer)
    The zone record's file line number.
    Example: 24

  - `data.record.class` (any)
    The record's class.
    Example: "IN"

  - `data.record.name` (string)
    The record's name.
    Example: "hostname.example.com."

  - `data.record.ttl` (integer)
    The record's Time To Live (TTL), in seconds.
    Example: 86400

  - `data.record.type` (string)
    The DNS record type.
* A - A records store IPv4 addresses. Use them to map a hostname to an IPv4 address.
* A6- A6 records store IPv6 addresses.
* AAAA - AAAA records store IPv6 addresses.
* AFSDB - AFSDB records store the location of an AFS cell's database servers.
* ALIAS - ALIAS records create an alias to another hostname, but can coexist with other records on that name. We strongly discourage using this record type.
* CAA - CAA records control which certificate authorities can issue SSL certificates for a domain.
* CNAME - CNAME records create an alias to another hostname.
* DNAME - DNAME records create an alias for a hostname and its subnames.
* DS - DS records specify a record's delegation signer.
* HINFO - HINFO records specify a host's CPU and OS types.
* LOC - LOC records store a hostname's geographical location.
* MX - MX records point a domain name to its MTAs.
* NS - NS records store a domain's authoritative nameservers.
* PTR - PTR records point to a CNAME.
* RP - RP records store a domain's Responsible Person's information.
* SOA - SOA records designate the beginning of a zone of authority.
* SRV - SRV records store the service location records for newer protocols (for example, Autodiscover).
* SSHFP - SSHFP records store a domain's SSH public host key's fingerprint.
* TXT - TXT records store descriptive text or useful records (for example, SPF or DKIM records).

 Warning:

  We do not currently support the SSHFP DNS record type.

This function will return a differently depending on which record type you query. Select a zone
record type from the menu to view each set of return data:
    Enum: "A", "AAAA", "AFSDB", "ALIAS", "CAA", "CNAME", "DNAME", "DS", "HINFO", "LOC", "MX", "NS", "PTR", "RP", "SOA", "SRV", "SSHFP", "TXT"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "getzonerecord"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "Record obtained."

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


