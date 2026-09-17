# Update server's primary virtual host

This function sets the primary domain hosted on an IP address and web server port. The primary domain refers to the virtual host that the server returns when a visitor directly accesses the IP address.

For example, if both example1.com and example2.com are name-based virtual hosts on IP address 192.168.0.1, the primary virtual host appears when the visitor accesses the http://192.168.0.1/ location.

Important:

When you disable the Web Server role, the system disables this function.

Endpoint: GET /set_primary_servername
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `servername` (string, required)
    The ServerName value in Apache's VirtualHost section to set as primary for the IP address and port type.
    Example: "hostname.example.com"

  - `type` (string)
    The type of virtual host to set as primary.
* std — Set the primary domain for the HTTP port. Typically, port 80.
* ssl — Set the primary domain for the HTTPS port. Typically, port 443.
    Enum: "std", "ssl"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "set_primary_servername"

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


