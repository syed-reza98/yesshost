# Validate domain SPF records

This function validates a Sender Policy Framework (SPF) record for one or more domains.

Endpoint: GET /validate_current_spfs
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    The domain for which to check the SPF records.

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (array)
    An array of objects containing information about a domain's SPF records.
    Example: [{"domain":"example.com","expected":"ip6:0:0:0:0:0:ffff:c0a8:101","ip_address":"0:0:0:0:0:ffff:c0a8:101","ip_version":6,"records":[{"current":"v=spf1 ~all","reason":"example.com: Sender is not authorized by default to use 'example.com' in 'helo' identity (mechanism '-all' matched)","state":"FAIL"}],"state":"VALID"},{"domain":"example2.com","error":"(XID rm8h9f) DNS returned “SERVFAIL” (code 2) in response to the system’s query for “example2.com”’s “TXT” records.","ip_address":"198.252.32.45","ip_version":4,"records":[],"state":"ERROR"}]

  - `data.payload.domain` (string)
    The queried domain.

  - `data.payload.error` (string)
    An error message that details the reason why the DNS lookup failed.

Note:

The function only returns this value when the state return is
the ERROR value.

  - `data.payload.expected` (string)
    The SPF record for the domain in the DNS.

  - `data.payload.ip_address` (any)
    The domain's IPv4 or IPv6 address.

  - `data.payload.ip_version` (integer)
    The IP address version.

* 4 — IPv4.
* 6 — IPv6.
    Enum: 4, 6

  - `data.payload.records` (array)
    The SPF records of the domain's DNS.

  - `data.payload.records.current` (string)
    The SPF record's contents.

  - `data.payload.records.reason` (string)
    The reason for the SPF record's status.

  - `data.payload.records.state` (string)
    The SPF record's status.

* PASS — The SPF record confirms that the ip_address value
is a valid sender.
* NEUTRAL — The current SPF record configuration does not
determine the ip_address value's validity.
* FAIL — The SPF record states that the ip_address value
is not a valid sender.
* SOFTFAIL — The SPF record states that the ip_address value
is not a valid sender, but does not FAIL state it.
* TEMPERROR — The SPF record check resulted in a failure. For
example, a network failure.
* PERMERROR — The domain's SPF records are incorrect and
require manual correction.

Note:

These values correspond with
[RFC 7208 section 2.6](https://tools.ietf.org/html/rfc7208#section-2.6).
    Enum: "PASS", "NEUTRAL", "FAIL", "SOFTFAIL", "TEMPERROR", "PERMERROR"

  - `data.payload.state` (string)
    The SPF record's status.

* VALID — A single SPF TXT record exists in the domain's DNS
with the correct ip_address value or redirect mechanism.
* MISMATCHED — An SPF TXT record exists for the domain that
does not match the ip_address value.
* MULTIPLE — Multiple SPF TXT records exist in the domain's DNS.
* MISSING — No SPF TXT record exists for the domain's DNS.
* ERROR — The record's DNS lookup failed. The system returns the
reason in the error return.
    Enum: "VALID", "MISMATCHED", "MULTIPLE", "MISSING", "ERROR"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "validate_current_spfs"

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


