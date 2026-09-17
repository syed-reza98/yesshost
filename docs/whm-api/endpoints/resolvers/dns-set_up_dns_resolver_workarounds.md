# Create unbound DNS resolver

This function creates an Unbound (libunbound) DNS resolver configuration.

Important:

When you disable the DNS role, the system disables this function.

Endpoint: GET /set_up_dns_resolver_workarounds
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.flags` (object)
    An object that contains of [libunbound configuration options](https://www.nlnetlabs.nl/documentation/unbound/unbound.conf/).

Note:

The function only returns an option if the system finds a configuration issue.

  - `data.flags.do-ip6` (string)
    The system cannot create an [IPv6](https://en.wikipedia.org/wiki/IPv6) socket.
    Example: "no"

  - `data.flags.do-udp` (string)
    The system cannot receive a [User Datagram Protocol (UDP)](https://en.wikipedia.org/wiki/User_Datagram_Protocol) DNS response.
    Example: "no"

  - `data.flags.edns-buffer-size` (string)
    The [extension mechanism for DNS (EDNS)](https://en.wikipedia.org/wiki/Extension_mechanisms_for_DNS) length size is at or exceeds 512 bytes.
    Example: "512"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "set_up_dns_resolver_workarounds"

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


