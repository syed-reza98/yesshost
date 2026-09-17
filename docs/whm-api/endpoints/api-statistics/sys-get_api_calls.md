# Return deprecated cPanel API 1 functions by date

This function returns the cPanel API 1 functions that the system called on specific dates.
This is useful, for example, to check whether your system calls any cPanel API 1 functions.

Important:

The function only returns cPanel API 1 functions. We deprecated cPanel API 1 and plan
to remove those functions at a later date. For more information, read our
Guide to Replacing cPanel API 1 Functions with UAPI Equivalents
documentation.

Endpoint: GET /get_api_calls
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `type` (string)
    The cPanel API 1 function to query.

Note:

cpapi1 is the only possible value.
    Example: "cpapi1"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.result` (array)

  - `data.result.count` (integer)
    The total number of times that the system called
the function on the day in the timestamp return.
    Example: 200000

  - `data.result.entry` (string)
    The cPanel API 1 module and function that the system executed.

For a complete list of cPanel API 1 functions, read our
[Guide to cPanel API 1](https://go.cpanel.net/cpanelapi1)
documentation.
    Example: "Email::printdomainoptions"

  - `data.result.timestamp` (integer)
    The date that the system called the function, in
[Unix time format](https://wikipedia.org/wiki/Unix_time).
    Example: 1548828000

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_api_calls"

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


