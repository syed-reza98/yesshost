# Create DNS zone

This function creates a DNS zone. If trueowner=user, this function does the following:
* Adds a DNS entry in the /var/cpanel/users/USER file, where USER represents the trueowner parameter's value.
* Creates the /etc/vdomainaliases/DOMAIN file, where DOMAIN represents the new zone's domain.
* Creates the /etc/vfilters/DOMAIN file, where DOMAIN represents the new zone's domain.

When you call this function, the system uses the domain name and IP address that you supply. WHM's standard zone template determines all other zone information.

This function generates the DNS zone's MX record, domain PTR, and A records automatically.

Important:

When you disable the DNS role, the system disables this function.

NOTE:

You cannot use this function to add temporary domains.

Endpoint: GET /adddns
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    The new zone's domain.
    Example: "example.com"

  - `ip` (string, required)
    The domain's IP address.
    Example: "192.168.0.20"

  - `ipv6` (string,null)
    The domain's IPv6 address.
    Example: "2001:0db8:0:0:1:0:0:1"

  - `template` (string)
    The zone file template.
* standard
* simple
* standardvirtualftp
* The name of a custom zone template file in the /var/cpanel/zonetemplates directory.
    Example: "standard"

  - `trueowner` (string,null)
    The new zone's owner. This parameter defaults to the currently-authenticated user.
    Example: "user"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "adddns"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "Added example.com ok belonging to user user"

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


