# Validate local server is authoritative

This function checks whether the local server has the authority to publish changes for the domain's DNS records.

Important:

When you disable the DNS role, the system disables this function.

Endpoint: GET /has_local_authority
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    The domain to check whether the local server is authoritative for the domain's DNS records.

Note:

To check multiple domains, duplicate or increment the parameter name. For example, to check three domains, use the domain parameter multiple times. Or the domain, domain-1, and domain-2 parameters.

## Response 200 fields (application/json):

  - `data` (object)

  - `data.records` (array)
    An array of objects that contains information about about the authoritative status of a domain's local DNS zone files.

  - `data.records.domain` (string)
    The queried domain.
    Example: "example.com"

  - `data.records.error` (string)
    A message that details the reason why the local server's authoritative check failed.

Note:

 The function only returns this value when the check fails.
    Example: "(XID qdbmuk) DNS query (example3.com/SOA) timeout!"

  - `data.records.local_authority` (integer)
    Whether the local server is authoritative for the domain's DNS records.
* 1 — The local server is authoritative for the domain's DNS records.
* 0 — The local server is not authoritative for the domain's DNS records.
    Enum: 0, 1

  - `data.records.nameservers` (array)
    The domain's authoritative nameservers, if any exist.
    Example: ["ns1.example.com","ns2.example.com"]

  - `data.records.zone` (string,null)
    The DNS zone that contains the domain's DNS records, if one exists.
    Example: "example.com"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "has_local_authority"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


