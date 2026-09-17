# Add IP address to Greylisting trusted hosts

This function adds an IP address to the Greylisting Trusted Hosts list.

Endpoint: GET /create_cpgreylist_trusted_host
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `ip` (string, required)
    The record's IP address, or a range of IP addresses.

Note:

To add multiple IP addresses, increment the parameter name. For example, ip-1, ip-2, and ip-3.
    Example: "192.168.0.1"

  - `comment` (string)
    A comment.
    Example: "NoComment"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.comment` (string)
    Comment for the batch.
    Example: "NoComment"

  - `data.ips_added` (array)
    An array of objects that contains the IP addresses that the function added to the Trusted Hosts list.

  - `data.ips_added.comment` (string)
    Comment for the individual record.
    Example: "Fascinating"

  - `data.ips_added.create_time` (string)
    The date and time at which the function created the record.
    Example: "2015-02-17T10:08:26.000Z"

  - `data.ips_added.host_ip` (string)
    The trusted host's IP address.
    Example: "192.168.0.1"

  - `data.ips_added.id` (integer)
    The host's record number.
    Example: 42

  - `data.ips_failed` (object)
    An object that contains the IP addresses that the function failed to add to the Trusted Hosts list.

  - `data.ips_failed.comment` (string)
    The reason for the failure.
    Example: "Sorry, 192.168 is not a valid IP address."

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "create_cpgreylist_trusted_host"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0.
This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


