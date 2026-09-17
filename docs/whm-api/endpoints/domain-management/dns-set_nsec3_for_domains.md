# Enable NSEC3 semantics for domain

This function configures the domain to use Next Secure Record 3 (NSEC3) semantics.

Note:

Only servers that run PowerDNS can use DNSSEC. If you call this function on a server that doesn't use PowerDNS, you will receive an error.

Endpoint: GET /set_nsec3_for_domains
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    The domain for which to enable NSEC3 semantics.
    Example: "example.com"

  - `nsec3_iterations` (integer, required)
    The number of times that the system re-executes the first resource record hash operation.
    Example: 7

  - `nsec3_narrow` (integer, required)
    Whether NSEC3 will operate in Narrow mode or Inclusive mode.

  Note

For information about these modes, read  PowerDNS's DNSSEC documentation.

* 1 - Narrow mode.
* 0 - Inclusive mode.
    Enum: 0, 1

  - `nsec3_opt_out` (integer, required)
    Whether the system will create records for all delegations.
* 1 - Create records for all delegations.
* 0 - Create records only for secure delegations.

Note

Only select 1 if you must create records for all delegations.
    Enum: 0, 1

  - `nsec3_salt` (string, required)
    The salt value that PowerDNS uses in the hashes.

  Note:

 For information about salt values, read  RFC 5155.
    Example: "1a2b3c4d5e6f"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.domains` (array)
    An array of objects that contains information about each domain.

  - `data.domains.domain` (string)
    The domain for which the system enabled NSEC3.
    Example: "example.com"

  - `data.domains.enabled` (integer)
    Whether the system enabled NSEC3.
- 1 — Enabled.
- 0 — The system failed to enable NSEC3.
    Enum: 0, 1

  - `data.domains.error` (string)
    An error message that describes why the system could not enable NSEC3.

Note:

 The function only displays this return when the enabled return is a 0 value.
    Example: "Error message."

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "set_nsec3_for_domains"

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


