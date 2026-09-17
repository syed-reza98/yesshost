# Return PHP-FPM status on new accounts

This function determines whether the system enables PHP-FPM for new domains and accounts.

Important:

When you disable the
Web Server role,
the system disables this function.

Warning:

We strongly recommend that you only activate Apache PHP-FPM if your server has at
least 2 GB of RAM available, or at least 30 MB of RAM per domain. If you enable PHP-FPM
on a server with less than the required RAM, your server may experience severe performance
issues.

Endpoint: GET /php_get_default_accounts_to_fpm
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.default_accounts_to_fpm` (integer)
    Whether PHP-FPM is enabled for a server's new accounts and domains.
* 1 — PHP-FPM enabled.
* 0 — PHP-FPM disabled.
    Enum: 1, 0

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "php_get_default_accounts_to_fpm"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


