# Return all AutoSSL-excluded domains

This function lists an account's domains the system excludes from AutoSSL.

Endpoint: GET /get_autossl_user_excluded_domains
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `username` (string, required)
    The cPanel user's account.
    Example: "example"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (array)
    An array of objects that contain a list of domains excluded from AutoSSL.

  - `data.payload.excluded_domain` (string)
    A list of domains excluded from AutoSSL.
    Example: "cpcalendars.example.com"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_autossl_user_excluded_domains"

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


