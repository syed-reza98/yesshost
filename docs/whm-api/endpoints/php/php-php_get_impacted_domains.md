# Return PHP preconfigured domains

This function lists domains that obtain their PHP version from a specified PHP configuration.

Important:

When you disable the
Web Server role,
the system disables this function.

Endpoint: GET /php_get_impacted_domains
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    A domain on the system.

Note:

* You must pass either the system_default or domain parameters, or both.
* You can pass this parameter multiple times.
* You cannot pass the name of a parked domain.

  - `system_default` (integer, required)
    Whether to return domains that inherit the system's default PHP version.

* 1 — Return domains that inherit the system's default PHP version.
* 0 — Do not return domains that inherit the system's default PHP version.

Note:

* You must pass either the system_default or domain parameters, or both.
* If you pass this parameter with a false value and do not also pass the domain
parameter, the function returns an error.
    Enum: 1, 0

## Response 200 fields (application/json):

  - `data` (object)

  - `data.domains` (array)
    A list of domains or subdomains that obtain their PHP version from
the PHP configuration.

Note:

This function does not return parked domains.
    Example: ["example.com","subdomain.example.com","example2.com"]

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "php_get_impacted_domains"

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


