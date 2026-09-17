# Disable DNSSEC on domain

This function disables DNSSEC on the domain.

Note:

  Only servers that run PowerDNS can use DNSSEC. If you call this function on a server that doesn't use PowerDNS, you will receive an error.

Warning:

 - This action is irreversible. If you disable DNSSEC on the domain, you will lose the associated keys. You can only retrieve the keys by restoring them from a full back up of the account.
 - If you disable DNSSEC, you must remove the Delegation of Signing (DS) records on your DNS server and with your registrar.

Endpoint: GET /disable_dnssec_for_domains
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    The domain for which to disable DNSSEC.

Note:

To disable DNSSEC for multiple domains, duplicate or increment the parameter name. For example, to check three domains, you could:

* Use the domain parameter multiple times.
* Use the domain, domain-1, domain-2 parameters.

## Response 200 fields (application/json):

  - `data` (object)

  - `data.domains` (array)
    An array of objects that contains information about each domain.

  - `data.domains.disabled` (integer)
    Whether the system disabled DNSSEC.
* 1 - Disabled.
* 0 - The system failed to disable DNSSEC.
    Enum: 0, 1

  - `data.domains.domain` (string)
    The domain for which the system disabled DNSSEC.
    Example: "example.com"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "disable_dnssec_for_domains"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


