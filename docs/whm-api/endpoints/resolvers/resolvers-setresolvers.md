# Update server's resolver nameservers

This function configures the server's resolver nameservers.

Warning:

* The nameservers that the server uses as resolvers must function correctly. If they do not, the server will experience performance and stability issues.
* Never set a resolver nameserver to 127.0.0.1 on a cPanel & WHM server.

Endpoint: GET /setresolvers
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `nameserver1` (any, required)
    The server's primary resolver nameserver.
    Example: "192.168.0.20"

  - `nameserver2` (any, required)
    The server's secondary resolver nameserver.
    Example: "192.168.0.21"

  - `nameserver3` (any)
    The server's tertiary resolver nameserver.
    Example: "2001:4860:4860::8888"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "setresolvers"

  - `metadata.output` (object)
    Messages returned from the call.

  - `metadata.output.messages` (string)
    Example: "Listed in order they are:\n192.168.0.20\n192.168.0.21\n2001:4860:4860::8888\n"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "Your resolvers have been setup!"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


