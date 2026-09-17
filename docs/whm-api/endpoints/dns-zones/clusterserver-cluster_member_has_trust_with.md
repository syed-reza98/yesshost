# Return whether DNS cluster server can share records

This function queries whether nameservers in a DNS cluster can share records with one another. Servers in a DNS cluster must exist in a Reverse Trust relationship to share information. This relationship requires each server to have an API token.

Note:

  DNS servers in a Write-Only role do not need to exist in a Reverse Trust relationship. For more information, read our Guide to DNS Cluster Configurations documentation.

Endpoint: GET /cluster_member_has_trust_with
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `host` (string, required)
    The nameserver's IP address.
    Example: "192.0.2.0"

  - `althost` (string)
    The nameserver's alternate IP address. This is useful, for example, if your DNS cluster exists in a NAT-configured network.
    Example: "192.0.3.0"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.has_trust` (integer)
    Whether the nameserver can send information to other cluster members.
* 1 — Can send information.
* 0 — Can't send information.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "cluster_member_has_trust_with"

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


