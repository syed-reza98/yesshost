# Remove manual mail exchanger redirect record

This function removes a domain's manual Exim mail exchanger (MX) redirect entry. The function also removes the manual MX redirect entry from the /etc/manualmx file.

Note:

  To set a domain's manual MX redirection, use the WHM API 1  set_manual_mx_redirects function.

Endpoint: GET /unset_manual_mx_redirects
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    The domain for which to remove a manual MX redirect entry.

Note:

 To remove multiple domain entries, increment the parameter. For example, use the domain, domain-1, and domain-2 parameters.
    Example: "example.com"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (object)
    The removed manual MX redirect entry for each domain.
    Example: {"example.com":"mailhostexample.com","example.org":null}

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "unset_manual_mx_redirects"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    - 1 - Success
- 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


