# Disable AutoSSL for domain

This function disables AutoSSL for an account's specified domains.

Endpoint: GET /add_autossl_user_excluded_domains
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (array, required)
    Disable AutoSSL for this domain.

Note:

To disable AutoSSL for multiple domains, increment the parameter name. For example, domain=example.com, domain-1=example1.com, and domain-2=example.com.

  - `username` (string, required)
    The cPanel user's account.
    Example: "example"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "add_autossl_user_excluded_domains"

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


