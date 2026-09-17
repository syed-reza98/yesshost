# Return domain owner

This function lists the owner of a domain.

Endpoint: GET /getdomainowner
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    A domain on the system that is owned by the user calling this function.
    Example: "example.com"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.user` (string,null)
    The user who owns the domain.

Note:

This value returns null if the user calling the function does not own the account for the domain or the domain does not exist on the server.
    Example: "username"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "getdomainowner"

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


