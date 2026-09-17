# Return login security list records

This function displays a cPHulk list's records.

Endpoint: GET /read_cphulk_records
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `list_name` (string, required)
    The cPHulk list's name.

* black
* white
    Enum: "black", "white"

  - `skip_enabled_check` (integer)
    Whether to skip checking if cPHulk runs on the server.

Note:

 If cPHulk is disabled, the function returns the following message:
cPHulk is disabled on the server.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `data` (object)

  - `data.ips_in_list` (object)
    IP address information.
    Example: {"10.1.4.44":"A helpful comment about the IP address.","DEED::1":"A helpful comment about the IP address."}

  - `data.list_name` (string)
    The cPHulk list's name.
* black
* white
    Enum: "black", "white"

  - `data.requester_ip` (any)
    The requester's IP address.
    Example: "10.1.4.228"

  - `data.requester_ip_is_whitelisted` (integer)
    Whether the requester's IP address exists on cPHulk's whitelist.
* 1 - The IP address exists on the whitelist.
* 0 - The IP address does not exist on the white list.
    Enum: 0, 1

  - `data.restart_ssh` (integer)
    Whether you must restart sshd in order to implement changes.

* 1 — You must restart the sshd daemon.
* 0 — The system will implement changes without a restart.

Note:

This return only appears if sshd’s UseDNS setting is enabled. Because UseDNS and cPHulk are incompatible, the system disables UseDNS when you enable cPHulk.
* 1 - You must restart sshd.
* 0 - The system will implement changes without a restart.
    Enum: 0, 1

  - `data.warning_ip` (string)
    A localized warning message, if the requester's IP address does not exist on the whitelist.
    Example: "The IP address is not on the white list."

  - `data.warning_ssh` (string)
    A message that explains why you must restart sshd.

Note:

 This return only appears if the restart_ssh return's value is 1.
    Example: "The system disabled the UseDNS setting for sshd in order to add IP addresses to the whitelist. You must restart sshd to implement the change."

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "read_cphulk_records"

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


