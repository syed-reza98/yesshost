# Enable NSEC semantics for domain

This function configures the domain to use Next Secure Record (NSEC) semantics instead of Next Secure Record 3 (NSEC3) semantics.

Note:

Only servers that run PowerDNS can use DNSSEC. If you call this function on a server that doesn't use PowerDNS, you will receive an error.

Endpoint: GET /unset_nsec3_for_domains
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    The domain for which to disable NSEC3 semantics and use NSEC semantics.
    Example: "example.com"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.domains` (array)
    An array of objects that contain information about each domain.

  - `data.domains.disabled` (integer)
    Whether the system disabled NSEC3.
* 1 — Disabled.
* 0 — The system failed to disable NSEC3.
    Enum: 0, 1

  - `data.domains.domain` (string)
    The domain for which to disable NSEC3.
    Example: "example.com"

  - `data.domains.error` (string)
    An error message that describes why the system could not disable NSEC3.

Note:

The function only displays this return when the disabled return is a 0 value.
    Example: "Error message."

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "unset_nsec3_for_domains"

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


