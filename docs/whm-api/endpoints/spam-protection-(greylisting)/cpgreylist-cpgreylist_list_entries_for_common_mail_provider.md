# Return Greylisting IP addresses of mail providers

This function lists Greylisting's IP addresses for the specified mail provider.

Endpoint: GET /cpgreylist_list_entries_for_common_mail_provider
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `provider` (string, required)
    The mail provider.

Note:

 * To list entries for multiple mail providers, increment the parameter name. For example, provider-0, provider-1, and provider-2.
 * Call WHM API 1's cpgreylist_load_common_mail_providers_config function to return a list of valid provider keys.

## Response 200 fields (application/json):

  - `data` (object)
    Example: {"providers":{"cpanel":{"ips":[{"create_time":"2015-07-28T08:16:52.000Z","host_ip":"208.115.214.0-208.115.214.255","is_trusted":1,"provider_id":7},{"create_time":"2015-07-28T08:16:52.000Z","host_ip":"74.63.202.0-74.63.202.255","is_trusted":1,"provider_id":7}]}},"providers_failed":{"dpanel":"Unknown mail provider: dpanel"}}

  - `data.providers` (object)
    An object containing mail providers and their IP addresses.
    Example: {"cpanel":{"ips":[{"create_time":"2015-07-28T08:16:52.000Z","host_ip":"208.115.214.0-208.115.214.255","is_trusted":1,"provider_id":7},{"create_time":"2015-07-28T08:16:52.000Z","host_ip":"74.63.202.0-74.63.202.255","is_trusted":1,"provider_id":7}]}}

  - `data.providers_failed` (object)
    An object containing mail providers that the system failed to retrieve data for.
    Example: {"dpanel":"Unknown mail provider: dpanel"}

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "cpgreylist_list_entries_for_common_mail_provider"

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


