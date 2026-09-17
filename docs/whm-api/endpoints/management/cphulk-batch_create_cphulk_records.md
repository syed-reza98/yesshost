# Add login security record to list with comment

This function adds one or more records to cPHulk's whitelist or blacklist. The function includes the option to add unique comments for each IP address that you add.

Endpoint: POST /batch_create_cphulk_records
Version: 11.138.0.6
Security: BasicAuth

## Request fields (application/json):

  - `api.version` (integer, required)
    The WHM API version number.
    Enum: 1

  - `list_name` (string, required)
    The cPHulk list's name.

* black - Add a new record or records to the blacklist.
* white - Add a new record or records to the whitelist.
    Enum: "black", "white"

  - `records` (array, required)
    The list of records to add to the whitelist or blacklist.
    Example: [{"comment":"Automated update tools.","ip":"192.168.0.1"},{"comment":"System administrators and support systems.","ip":"192.168.1.0/30"},{"comment":"Owner of example.com.","ip":"122.1.56.7-122.1.56.8"},{"comment":"Special access group 1","ip":"2001:db9::"},{"comment":"Special access group 1","ip":"2001:db9::1-2001:db9::5"},{"comment":"Special access group 2","ip":"2001:db8::/32"}]

  - `records.comment` (string)
    Example: "Dangerous website"

  - `records.ip` (any, required)

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
    An array of IP addresses that the function added from the list. This function will always returns ranges in the IP1-IP2 format.
    Example: ["192.168.0.1","192.168.1.0-192.168.1.3","122.1.56.7-122.1.56.8"]

  - `data.ips_failed` (object)
    An object of IP addresses that the system failed to add to the list. This object contains one or more IP address returns.
    Example: {"192.168.0.1":"Invalid IP address or range: \"192.68.0.1\""}

  - `data.iptable_bans_removed` (integer)
    The number of iptables temporary block rules that the function deleted.

  - `data.list_name` (string)
    The cPHulk list's name.
* black
* white
    Enum: "black", "white"

  - `data.original_ips_added` (array)
    An array of IP addresses that the function added from the list.
  The system will return the one of the following formats:

 - A IPv4 address (192.168.0.1).
 - A simple IPv4 address range (192.168.1.1-192.168.1.4).
 - A CIDR IPv4 address range (192.168.1.0/30).
    Example: ["192.168.0.1","192.168.1.0/30","122.1.56.7-122.1.56.8"]

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
    Example: "batch_create_cphulk_records"

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


