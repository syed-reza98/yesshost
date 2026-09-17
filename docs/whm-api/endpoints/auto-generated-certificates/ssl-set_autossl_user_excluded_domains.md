# Disable AutoSSL for domain

This function disables AutoSSL for a specific domain on an account.

Warning:

  This function replaces the list of any previously-excluded domains. To add a domain to the list of the user's excluded domains, use the add_autossl_user_excluded_domains function.

Endpoint: GET /set_autossl_user_excluded_domains
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `username` (string, required)
    The cPanel user's account.
    Example: "example"

  - `domain` (string)
    Disable AutoSSL for this domain. If you do not include this parameter, the system will enable AutoSSL for every domain on the account.

Note

To disable AutoSSL for multiple domains, duplicate or increment the parameter name. For example, to exclude three domains, you could:
* Use the domain parameter multiple times.
* Use the domain, domain-1, and domain-2 parameters.
    Example: "cpcalendars.example.com"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "set_autossl_user_excluded_domains"

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


