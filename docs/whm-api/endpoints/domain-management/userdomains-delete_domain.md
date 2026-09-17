# Delete domain

This function deletes a domain.

Note:

This function does not remove an addon domain's associated subdomain. You must also run this function for the associated subdomain.

Endpoint: GET /delete_domain
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    The name of the domain to delete.
    Example: "example.com"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.type` (string,null)
    The type of domain that the function deleted.
* addon — An addon domain.
* parked — A parked (alias) domain.
* sub — A subdomain.
* null — The domain does not exist on the server.
    Enum: "addon", "parked", "sub"

  - `data.username` (string)
    The cPanel user that owned the domain.
* A cPanel account username.
* null — The function did not find a cPanel account that owns the given domain.
    Example: "username"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "delete_domain"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result
field is 0. This field may display a success message when
a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


