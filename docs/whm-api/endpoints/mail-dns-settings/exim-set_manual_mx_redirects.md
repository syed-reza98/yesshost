# Add manual mail exchanger redirect record

This function lets you create a manual Exim mail exchanger (MX) redirect for a domain. An MX redirection lets you bypass the domain's MX lookup via the Domain Name System (DNS). This function adds the manual redirect entries to the /etc/manualmx file.

Note:

  To remove a domain's manual MX redirection, use the WHM API 1 unset_manual_mx_redirect function.

Endpoint: GET /set_manual_mx_redirects
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    The domain for which to add a manual MX redirect entry.

Note:

 To add multiple domain entries, increment the parameter. For example, use the domain, domain-1, and domain-2 parameters. For multiple domains, you must include its corresponding mx_host value.
    Example: "example.com"

  - `mx_host` (string, required)
    The domain or IP address (IPv4 or IPv6) to redirect the domain value's emails to.

Note:

 To add multiple MX hosts, increment the parameter. For example, use the  mx_host,  mx_host-1, and  mx_host-2 parameters. For multiple MX hosts, you must include its corresponding domain value.
    Example: "mailhostexample.com"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (object)
    The former manual MX redirect entry for each domain.
    Example: {"example.com":"mailhostexample.com","example.org":null}

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "set_manual_mx_redirects"

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


