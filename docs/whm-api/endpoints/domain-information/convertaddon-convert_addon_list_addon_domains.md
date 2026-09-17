# Return current user's additional domains

This function returns a list of addon domains that belong to the current user.

Important:
When you disable the Web Server role, the system disables this function.

Endpoint: GET /convert_addon_list_addon_domains
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)
    Example: {"example.com":{"docroot":"/home/exampleparent/public_html/example.com","domain_type":"addon","ip":"192.0.2.0","owner":"root","subdomain":"example.exampleparent.com"}}

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "convert_addon_list_addon_domains"

  - `metadata.reason` (string)
    The reason the function failed when the metadata.result field is 0. This field may include a success message when the function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    - 1 - Success.
- 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The API version of the function.
    Example: 1


