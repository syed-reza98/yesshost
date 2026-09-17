# Return domain DCV issues

This function returns a list of objects that contains the latest Domain Control Validation (DCV) problems for a specific domain.

Endpoint: GET /get_autossl_problems_for_domain
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    The domain for which to poll the DCV status.
    Example: "example.com"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.problems_by_domain` (array)
    An array of objects that contains DCV problems for a domain.

  - `data.problems_by_domain.domain` (string)
    The domain queried for problems.
    Example: "example.tld"

  - `data.problems_by_domain.log` (string)
    The name of the directory containing the log files for this problem. This directory is located under /var/cpanel/logs/autossl/.
    Example: "2017-08-19T13:41:04.000Z"

  - `data.problems_by_domain.problem` (string)
    The problem the domain encountered during DCV.
    Example: "The domain does not resolve to any IPv4 addresses on the internet."

  - `data.problems_by_domain.time` (string)
    The time that the problem occurred.
    Example: "2017-08-19T13:41:04.000Z"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_autossl_problems_for_domain"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


