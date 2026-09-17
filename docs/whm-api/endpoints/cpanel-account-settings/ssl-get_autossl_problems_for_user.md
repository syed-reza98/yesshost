# Return account DCV issues

This function returns the list of the latest Domain Control Validation (DCV) problems for a cPanel user.

Endpoint: GET /get_autossl_problems_for_user
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `username` (string, required)
    The user for whom to poll the DCV status.
    Example: "username"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.problems_by_domain` (array)
    An array of objects that contain information about DCV problems for each domain.

  - `data.problems_by_domain.domain` (string)
    The domain's name
    Example: "doesnotexist.example.com"

  - `data.problems_by_domain.log` (string)
    The log folder of the last run in the /var/cpanel/logs/autossl/ directory.
    Example: "2017-09-07T03:51:01.000Z"

  - `data.problems_by_domain.problem` (string)
    The human readable explanation of the DCV problem.

Note

The system does not localize this return.
    Example: "doesnotexist.example.com does not resolve to any IPv4 addresses on the internet."

  - `data.problems_by_domain.time` (string)
    The last run time of the AutoSSL queue.
    Example: "2017-08-12T21:02:56.000Z"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_autossl_problems_for_user"

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


