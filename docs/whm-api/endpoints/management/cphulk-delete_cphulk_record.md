# Remove login security record from list

This function deletes a record or records from cPHulk's whitelist or blacklist.

Endpoint: GET /delete_cphulk_record
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `ip` (array, required)
    The record's IP address.

Note:

 To delete multiple IP addresses, increment the parameter name. For example, ip-1, ip-2, ip-3.

  - `list_name` (string, required)
    The cPHulk list's name.

* white
* black
    Enum: "white", "black"

  - `skip_enabled_check` (integer)
    Whether to skip checking if cPHulk runs on the server.

* 1 - Don’t check cPHulk’s status.
* 0 - Check cPHulk’s status.

Note:

 If cPHulk is disabled and you check its status, the function returns the following message:
cPHulk is disabled on the server.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `data` (object)

  - `data.ips_failed` (object)
    Information about IP addresses that the system failed to add to the list.
    Example: {"192.168.0.1":"This is why, alpha.","192.168.9.1":"This is why, beta."}

  - `data.ips_removed` (array)
    The IP addresses that the function removed from the list.
    Example: ["192.168.0.1"]

  - `data.list_name` (string)
    The cPHulk list's name.
* black
* white
    Enum: "black", "white"

  - `data.requester_ip` (string)
    The requester's IP address.
    Example: "192.168.0.1"

  - `data.requester_ip_is_whitelisted` (integer)
    Whether the requester's IP address exists on cPHulk's whitelist.
* 1 - Whitelisted.
* 0 - Not whitelisted.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "delete_cphulk_record"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


