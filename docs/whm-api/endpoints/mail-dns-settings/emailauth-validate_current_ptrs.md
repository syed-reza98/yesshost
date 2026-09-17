# Validate domain PTR records

This function validates the pointer records (PTR) for IPv4 and IPv6 addresses an account's domains send mail from. It retrieves the PTR records for each IP address and determines which of the domain's IP addresses send mail. It then validates the PTR records for each IP address and validates the A (IPv4) or AAAA (IPv6) records pointing to each domain. This function also ensures that at least one of that domain's A or AAAA records points back to the IP address.

Endpoint: GET /validate_current_ptrs
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    The domain for which to validate the PTR records.

Note:

To check multiple domains, duplicate or increment the parameter name.
For example, use the domain-1, domain-2, and domain-3 parameters.

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (array)
    An array of objects containing information about the account's PTR records.
    Example: [{"arpa_domain":"1.0.0.10.in-addr.arpa","domain":"example.com","helo":"example.com","ip_address":"10.0.0.1","ip_version":4,"nameservers":["ns1.example.com","ns2.example.com","ns3.example.com"],"ptr_records":[{"domain":"example.com","forward_records":["10.0.0.1"],"state":"VALID"}],"state":"VALID"},{"arpa_domain":"3.0.0.10.in-addr.arpa","domain":"example.com","helo":"example.com","ip_address":"10.0.0.3","ip_version":4,"nameservers":["ns1.example.com","ns2.example.com","ns3.example.com"],"ptr_records":[{"domain":"example.com","forward_records":["192.168.12.34"],"state":"FWD_MISMATCH"}],"state":"PTR_MISMATCH"},{"arpa_domain":"4.3.3.7.0.7.3.0.e.2.a.8.0.0.0.0.0.0.0.0.3.a.5.8.8.b.d.0.1.0.0.2.ip6.arpa","domain":"example.com","helo":"example.com","ip_address":"2001:0db8:85a3:0000:0000:8a2e:0370:7334","ip_version":6,"nameservers":["ns1.example.com","ns2.example.com","ns3.example.com"],"ptr_records":[{"domain":"example.com","forward_records":["2001:0db8:85a3:0000:0000:8a2e:0370:7334"],"state":"VALID"}],"state":"VALID"},{"arpa_domain":"2.0.0.10.in-addr.arpa","domain":"example.com","helo":"example.com","ip_address":"10.0.0.2","ip_version":4,"nameservers":["ns1.example.com","ns2.example.com","ns3.example.com"],"ptr_records":[],"state":"MISSING_PTR"},{"domain":"thisotheremaildomain.com","error":"1.1.1.1.1 is not a valid IP address.","helo":"thisothermaildomain.com","ip_address":"1.1.1.1.1","ptr_records":[],"state":"ERROR"},{"arpa_domain":"4.0.0.10.in-addr.arpa","domain":"example.com","helo":"example.com","ip_address":"10.0.0.4","ip_version":4,"nameservers":["ns1.example.com","ns2.example.com","ns3.example.com"],"ptr_records":[{"domain":"example.com","forward_records":[],"state":"MISSING_FWD"}],"state":"PTR_MISMATCH"}]

  - `data.payload.arpa_domain` (string)
    The IP address used to perform a
[reverse DNS (rDNS) lookup](https://go.cpanel.net/HowtoConfigureReverseDNSforBINDinWHM),
in reversed format and appended with one of the following:

* in-addr.arpa — An IPv4 address
* ip6.arpa — An IPv6 address.

For information about .arpa domains, read Wikipedia's
[Reverse DNS lookup](https://en.wikipedia.org/wiki/Reverse_DNS_lookup)
article.

Note:

The function does not return this value for a domain with an invalid IP address.

  - `data.payload.domain` (string)
    The queried domain.

  - `data.payload.error` (string)
    An error message that details the reason why the domain's IP address
validation failed.

Note:

The function only returns this value when the state return is
the ERROR value.

  - `data.payload.helo` (string)
    The hostname that the domain uses to identify itself to remote SMTP servers.

  - `data.payload.ip_address` (string)
    The IPv4 or IPv6 address.

Note:

The function does not return this value for a domain with an
invalid IP address.

  - `data.payload.ip_version` (integer)
    The IP version number.

* 4 — An IPv4 address.
* 6 — An IPv6 address.

Note:

The function does not return this value for a domain with an
invalid IP address.

  - `data.payload.nameservers` (array)
    An array of the authoritative nameservers for the domain's PTR record.

  - `data.payload.ptr_records` (array)
    An array of objects containing the domain's PTR records.

Note:

The function does not return this array for a domain with an
invalid IP address.

  - `data.payload.ptr_records.domain` (string)
    The fully qualified domain name (FQDN) that a PTR record points to.

  - `data.payload.ptr_records.forward_records` (array)
    An array of IP addresses that the domain resolves to for A (IPv4) and AAAA (IPv6) records.

  - `data.payload.ptr_records.state` (string)
    Whether the domain's PTR record points to a domain with an A
(IPv4) or a AAAA (IPv6) record.

* VALID — The PTR record is valid.
* MISSING_FWD — The PTR points to a domain without an A or
AAAA record.
* FWD_MISMATCH — The PTR record points to a domain without
an A or AAAA record that points back to the IP address.
    Enum: "VALID", "MISSING_FWD", "FWD_MISMATCH"

  - `data.payload.state` (string)
    Whether the PTR records are valid for the domain.

* ERROR — The domain's IP address is invalid. The function returns
the reason in the error return.
* IP_IS_PRIVATE — The IP address exists within a range of private
IP addresses. DNS does not define PTR records for private IP
addresses.
* VALID — The PTR record is valid. The function only returns
this response if all of an IP address's PTR records are valid.
* MISSING_PTR — No PTR record exists for the IP address.
* PTR_MISMATCH — One or more PTR records point to a domain that
does not point back to the correct IP address.
    Enum: "ERROR", "IP_IS_PRIVATE", "VALID", "MISSING_PTR", "PTR_MISMATCH"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "validate_current_ptrs"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


