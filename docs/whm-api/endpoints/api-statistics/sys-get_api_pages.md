# Return deprecated cPanel API 1 functions

This function returns the daily interface use of cPanel API 1 functions. Use this function to find out which API calls your custom interfaces or third-party plugins use.

Important:

  The function only returns cPanel API 1 functions. We deprecated cPanel API 1 and plan to remove those functions at a later date. For more information, read our Guide to Replacing cPanel API 1 Functions with UAPI Equivalents documentation.

Endpoint: GET /get_api_pages
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `type` (string)
    The cPanel API type to query.
    Enum: "cpapi1"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.count` (integer)
    The total number of times that the system called the function on the day in the timestamp return.
    Example: 200000

  - `data.entry` (string)
    The path to the file where the function executes.
    Example: "/usr/local/cpanel/base/frontend/jupiter/plugin1/index.html.tt"

  - `data.timestamp` (integer)
    The date that the system called the function.

Note:

  The time portion of this value is arbitrary. Only the date is valid.
    Example: 1548828000

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_api_pages"

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


