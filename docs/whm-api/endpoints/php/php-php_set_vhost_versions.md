# Update domain's PHP values

This function allows WHM's
MultiPHP Manager
interface (WHM >> Home >> Software >> MultiPHP Manager) to change the values of a domain.

Important:

When you disable the
Web Server role,
the system disables this function.

Warning:

We strongly recommend that you only activate Apache PHP-FPM if your server has at
least 2 GB of RAM available, or at least 30 MB of RAM per domain. If you enable PHP-FPM
on a server with less than the required RAM, your server may experience severe
performance issues.

Endpoint: GET /php_set_vhost_versions
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `version` (string, required)
    The virtual host's (vhost) PHP version.

Note:

This parameter also accepts any custom PHP package names.
    Enum: "ea-php54", "ea-php55", "ea-php56", "ea-php70", "ea-php71", "ea-php72", "inherit"

  - `vhost` (string, required)
    The virtual host's name.

Note:

To set multiple vhosts, increment the parameter name. For example, vhost-1, vhost-2,
and vhost-3.

  - `php_fpm` (integer)
    Whether PHP-FPM is enabled.

* 1 — Enabled.
* 0 — Disabled.
    Enum: 1, 0

  - `php_fpm_pool_parms` (object)
    A JSON-encoded string containing a hash of values.
    Example: {"pm_max_children":5,"pm_max_requests":20,"pm_process_idle_timeout":10}

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "php_set_vhost_versions"

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


