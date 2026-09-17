# Add IP addresses

This function adds an IPv4 address or addresses to the server.
When you add an IP address, the system attempts to add an alias of that IP
address to the main network interface. This process rebuilds the IP address
pool, which resides in the /etc/ipaddrpool file. The system stores IP addresses
within the /etc/ips file. The ipaliases service activates those IP addresses
when the server starts.

Endpoint: GET /addips
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `ips` (string, required)
    The IPv4 address or address range
in Class C CIDR format.

  - `netmask` (string, required)
    The IPv4 address' netmask.

Note:

If the ips parameter is in Class C CIDR format,
the range mask must be a value from 24 through 30.
    Example: "255.255.255.0"

  - `excludes` (string)
    An IPv4 address or comma-delimited list of IPv4 addresses to exclude.

Note:

If you do not specify a value,
the function does not exclude any IPv4 addresses.

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "addips"

  - `metadata.output` (object)

  - `metadata.output.messages` (array)
    A list of messages returned from the function.
    Example: ["eth0:cp1 is now up. 192.168.0.20/255.255.255.0 broadcast 192.168.0.255 has been added."]

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "Success"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


