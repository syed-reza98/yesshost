# Create domain alias

This function creates an alias (parks a domain on a web virtual host).

Endpoint: GET /create_parked_domain_for_user
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    The domain name to park.
    Example: "park.example.com"

  - `username` (string, required)
    The cPanel user account.
    Example: "username"

  - `web_vhost_domain` (string, required)
    An existing web virtual host to which the new domain name should be added.

Note:

 If this is not the cPanel account’s main domain, then the system will consider the new domain to be an addon domain.
    Example: "vhost.example.com"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "create_parked_domain_for_user"

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


