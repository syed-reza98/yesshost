# Return ALIAS DNS record availability & resolver

This function returns whether ALIAS and ANAME records are available and the value of the running PowerDNS (PDNS) resolver setting, if any exists.
For more information, read our ALIAS documentation.

Endpoint: GET /is_alias_available
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.alias` (integer)
    Whether ALIAS records are available.

* 1 - Available.
* 0 - Not available.

When ALIAS records are enabled, they may work in API calls that accept A and AAAA records. However, the ALIAS record must use a fully qualified domain name (FQDN) rather than an IP address.
    Enum: 1, 0

  - `data.aname` (integer)
    Whether ANAME records are available.

* 1 - Available.
* 0 - Not available.

Note:

The aname value is always set to false (i.e. Not available). The ANAME record is currently not supported. It is included for completeness and future proofing.
    Enum: 1, 0

  - `data.resolver` (string)
    The value (if any) of the running PDNS’s resolver setting.
    Example: "8.8.8.8"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "is_alias_available"

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


