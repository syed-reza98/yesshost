# Enable DNSSEC on domain

This function enables DNSSEC on the domain.

Note:

* Only servers that run PowerDNS can use DNSSEC. If you call this function on a server that doesn't use PowerDNS, you will receive an error.
* After you enable DNSSEC on the domain, you must add the Delegation of Signing (DS) records on your DNS server and with your registrar.
* You cannot modify the DNSSEC security key. To make any changes, you must disable, delete, and re-create the DNSSEC security key.

Endpoint: GET /enable_dnssec_for_domains
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    The domain for which to enable DNSSEC.

Note:

To enable DNSSEC on multiple domains, duplicate or increment the parameter name. For example, to check three domains, you could:
* Use the domain parameter multiple times.
* Use the domain, domain-1, and domain-2 parameters.
    Example: "example.com"

  - `active` (integer)
    Whether to activate the newly-created key.
* 1 - Activate the key.
* 0 - Do not activate the key.
    Enum: 0, 1

  - `algo_num` (integer)
    The algorithm that the system uses to generate the security key.
* 5 - RSA/SHA-1
* 6 - DSA-NSEC3-SHA1
* 7 - RSASHA1-NSEC3-SHA1
* 8 - RSA/SHA-256
* 10 - RSA/SHA-512
* 13 - ECDSA Curve P-256 with SHA-256
* 14 - ECDSA Curve P-384 with SHA-384

Note:

We recommend that you use an ECDSA Curve P-256 with SHA-256 (13) value if your registrar supports it.
    Enum: 5, 6, 7, 8, 10, 13, 14

  - `key_setup` (string)
    The manner in which the system creates the security key.
* classic - Use separate keys for KSK and ZSK. Use this value when the algo_num parameter is equal to or less than 8.
* simple - Use a single key for both KSK and ZSK. Use this value when the algo_num parameter is greater than 8.
    Enum: "classic", "simple"

  - `nsec3_iterations` (integer)
    The number of times that the system rehashes the first resource record hash operation.
    Example: 7

  - `nsec3_narrow` (integer)
    Whether NSEC3 operates in Narrow or Inclusive mode.

Note:

For information about these modes, read PowerDNS's DNSSEC documentation.

* 1 - Narrow mode.
* 0 - Inclusive mode.
    Enum: 0, 1

  - `nsec3_opt_out` (integer)
    Whether the system will create records for all delegations.
* 1 - Create records for all delegations.
* 0 - Create records only for secure delegations.

Note:

Only use the 1 value if you must create records for all delegations.
    Enum: 0, 1

  - `nsec3_salt` (string)
    A hexadecimal string that the system appends to the domain name before it applies the hash function to the name.

Note:

For information about salt values, read RFC 5155.
    Example: "1a2b3c4d5e6f"

  - `use_nsec3` (integer)
    Whether the domain will use Next Secure Record (NSEC) or NSEC3 semantics.
* 1 - Use NSEC3 semantics.
* 0 - Use NSEC semantics.

Note:

If you use this value, the system ignores the other NSEC3 options.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `data` (object)

  - `data.domains` (array)
    An array of objects that contains information about each domain.

  - `data.domains.domain` (string)
    The domain for which the system enabled DNSSEC.
    Example: "example.com"

  - `data.domains.enabled` (integer)
    Whether the system enabled DNSSEC.
* 1 - Enabled.
* 0 - The system failed to enable DNSSEC.

Note:

This function will not return the nsec_version and new_key_id returns if this return is a 0 value.
    Enum: 0, 1

  - `data.domains.new_key_id` (string)
    The assigned security key ID. A valid ID.
    Example: "2"

  - `data.domains.nsec_error` (string)
    The domain has a NSEC3 configuration error.

Note:

The function only displays this return if there is a NSEC3 configuration error. An error message.
    Example: "Error message."

  - `data.domains.nsec_version` (string)
    The version of DNSSEC the system used.
* NSEC3
* NSEC

Note:

The function only displays this return if there is a NSEC3 configuration error. The system also returns the error in the nsec_error return.
    Enum: "NSEC3", "NSEC"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "enable_dnssec_for_domains"

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


