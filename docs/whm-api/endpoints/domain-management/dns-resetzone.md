# Restore DNS zone to default values

This function resets a DNS zone to its default values. This also resets the domain's subdomain DNS records, and restores zone file subdomains in the server's httpd.conf file. For example, use this function to restore DNS zones that are corrupt.

Note:

Zone resets preserve valid TXT records, but all other records will return to their default values.

Important:

When you disable the DNS role, the system disables this function.

Note

You must include either the domain or the zone parameters.

Endpoint: GET /resetzone
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string)
    The domain.
    Example: "example.com"

  - `user` (string)
    The domain's owner.
    Example: "user"

  - `zone` (string)
    The zone file.
    Example: "example.com.db"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "resetzone"

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


