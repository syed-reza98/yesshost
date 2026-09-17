# Add login security record to list

This function adds a new record or records to cPHulk's whitelist or blacklist.

Endpoint: GET /create_cphulk_record
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `ip` (array, required)
    The record's IP address, if there is only one IP address to add.

Note:

To add multiple IP addresses, increment the parameter name. For example, ip-1, ip-2, and ip-3.

  - `list_name` (string, required)
    The cPHulk list's name.

* black - Add a new record or records to the blacklist.
* white - Add a new record or records to the whitelist.
    Enum: "black", "white"

  - `comment` (string)
    A comment to include.
    Example: "George Wendt flying through the air."

  - `skip_enabled_check` (integer)
    Whether to skip checking if cPHulk runs on the server.

* 1 - Do not check if cPHulk is running.
* 0 - Check if cPHulk is running.

Note:

 If cPHulk is disabled and you check its status, the function returns the following message: cPHulk is disabled on the server.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `data` (object)

  - `data.comment` (string)
    The comment that you included when you called the function.
    Example: "George Wendt flying through the air."

  - `data.ip_blocks_removed` (integer)
    The number of IP address blocks that the function deleted.
    Example: 1

  - `data.ips_added` (array)
    An array of IP addresses that the function added to the list.

  - `data.ips_failed` (object)
    A object of IP addresses that the system failed to add to the list. This object contains one or more IP address returns.
    Example: {"192.168.0.1":"Invalid IP address or range: \"192.68.0.1\""}

  - `data.iptable_bans_removed` (integer)
    The number of iptables temporary block rules that the function deleted.

  - `data.list_name` (string)
    The cPHulk list's name.
* black
* white
    Enum: "black", "white"

  - `data.requester_ip` (any)
    The IP address of the user or system that requested the addition.
    Example: "10.1.4.228"

  - `data.requester_ip_is_whitelisted` (integer)
    Whether the requester's IP address exists on cPHulk's whitelist.
* 1 - Whitelisted.
* 0 - Not whitelisted.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "create_cphulk_record"

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


