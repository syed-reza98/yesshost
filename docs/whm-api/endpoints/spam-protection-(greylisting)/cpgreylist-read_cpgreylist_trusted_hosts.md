# Return Greylisting trusted hosts

This function retrieves the entries on the Greylisting Trusted Hosts list.

Endpoint: GET /read_cpgreylist_trusted_hosts
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.greylist_trusted_hosts` (array)
    An array of objects that contain identification information for the trusted hosts.

  - `data.greylist_trusted_hosts.comment` (string)
    The IP address' comment.
    Example: "Example"

  - `data.greylist_trusted_hosts.create_time` (string)
    The date and time when the system added the IP address to the _Trusted Hosts_ list.
    Example: "2015-03-24T10:22:38.000Z"

  - `data.greylist_trusted_hosts.host_ip` (string)
    The IP address of the host that the system added to the _Trusted Hosts_ list.
    Example: "192.0.2.0"

  - `data.greylist_trusted_hosts.id` (integer)
    The identification number that the system assigned to the IP address.
    Example: 19

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "read_cpgreylist_trusted_hosts"

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


