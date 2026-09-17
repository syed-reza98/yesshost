# Return workload data for PHP-FPM on all domains

This function provides information that will help you to determine
whether your server can handle the workload if you enable PHP-FPM for all domains.

Important:

When you disable the
Web Server role,
the system disables this function.

Warning:

We strongly recommend that you only activate Apache PHP-FPM if your server
has at least 2 GB of RAM available, or at least 30 MB of RAM per domain. If you enable
PHP-FPM on a server with less than the required RAM, your server may experience severe
performance issues.

Endpoint: GET /get_fpm_count_and_utilization
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.domains_to_be_enabled` (integer)
    The number of domains that you will enable with PHP-FPM when you run the /scripts/php_fpm_config_convert script.
    Example: 2

  - `data.domains_using_fpm` (integer)
    The number of domains with PHP-FPM enabled.
    Example: 20

  - `data.memory_needed` (integer)
    The approximate number of megabytes of memory that your system will require to convert the remaining domains to PHP-FPM.
    Example: 90000

  - `data.number_of_new_fpm_accounts_we_can_handle` (integer)
    The approximate number of domains on which you can enable PHP-FPM without a server overload.
    Example: 8

  - `data.show_warning` (integer)
    Whether you may overload your server when you convert all domains
to PHP-FPM.

* 1 — High risk of server overload when you enable PHP-FPM.
* 0 — Low risk of server overload when you enable PHP-FPM.
    Enum: 1, 0

  - `data.total_domains` (integer)
    The total number of domains on the server.
    Example: 22

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_fpm_count_and_utilization"

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


