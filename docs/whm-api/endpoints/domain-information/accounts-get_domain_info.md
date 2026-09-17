# Return all domains information

This function returns information about each domain on the server.

Endpoint: GET /get_domain_info
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.domains` (array)
    array of objects representing the domain's data.

Note:

 This return only includes domains that you manually created. This does not include service subdomain (proxy subdomains) or automatically-created domains.

  - `data.domains.docroot` (string)
    The document root for the addon domain. An absolute file path.
    Example: "/home/user1/public_html/example.com"

  - `data.domains.domain` (string)
    The account's main domain. A valid domain.
    Example: "example.com"

  - `data.domains.domain_type` (string)
    The domain's type.
    Example: "addon"

  - `data.domains.ipv4` (string)
    The domain's IPv4 address. A valid IPv4 address.
    Example: "192.0.2.255"

  - `data.domains.ipv4_ssl` (string)
    The domain's secure IPv4 address. A valid IPv4 address.
    Example: "192.0.2.255"

  - `data.domains.ipv6` (string,null)
    The domain's IPv6 address.
* A valid IPv6 address.
* null An IPv6 address does not exist for this domain.
    Example: "2001:DB8:g1m:0N3y::1"

  - `data.domains.ipv6_is_dedicated` (integer)
    The domain possesses an IPv6 address.
* 1 An IPv6 address exists for this domain.
* 0 An IPv6 address does not exist for this domain.
    Enum: 0, 1

  - `data.domains.modsecurity_enabled` (integer)
    Whether ModSecurity is enabled on the server.
* 1 ModSecurity is enabled.
* 0 ModSecurity is not enabled.
    Enum: 0, 1

  - `data.domains.parent_domain` (string)
    The parent domain. A valid domain name.
    Example: "example.com"

  - `data.domains.php_version` (string)
    The installed PHP versions.
    Example: "ea-php54"

  - `data.domains.port` (integer)
    The server's port number.
    Example: 80

  - `data.domains.port_ssl` (integer)
    The server's secure port number.
    Example: 443

  - `data.domains.user` (string)
    The account username. A cPanel account or reseller username on the server.
    Example: "username"

  - `data.domains.user_owner` (string)
    The domain's owner.
    Example: "user1"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_domain_info"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 Success
* 0 Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


