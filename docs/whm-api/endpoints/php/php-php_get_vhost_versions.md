# Return PHP version of all virtual hosts

This function returns the PHP version of every virtual host that a reseller controls.

Note:

  This document only applies to systems that run EasyApache 4.

Important:

  When you disable the Web Server role, the system disables this function.

Endpoint: GET /php_get_vhost_versions
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.versions` (array)
    An array of objects containing the virtual host's suspendend status, versions, virtual hosts, and accounts.

  - `data.versions.account` (string)
    The account's name.
    Example: "rm3"

  - `data.versions.account_owner` (string)
    The account owner's name.
    Example: "root"

  - `data.versions.documentroot` (string)
    The virtual host's document root.
    Example: "/home/example/public_html"

  - `data.versions.homedir` (string)
    The virtual host's home directory.
    Example: "/home/rm3"

  - `data.versions.is_suspended` (integer)
    The virtual host's suspension status.

Note:

* 1 - Suspended
* 0 - Not suspended.
    Enum: 1, 0

  - `data.versions.main_domain` (integer)
    Whether the virtual host is the primary domain.

Note:

* 1 - The primary domain
* 0 - Not the primary domain
    Enum: 1, 0

  - `data.versions.php_fpm` (integer)
    Whether PHP-FPM is enabled.

* 1 - PHP-FPM enabled.
* 0 - PHP-FPM not enabled.
    Enum: 1, 0

  - `data.versions.php_fpm_pool_parms` (object)
    Object containing the domain's PHP-FPM parameters.

  - `data.versions.php_fpm_pool_parms.pm_max_children` (integer)
    The maximum number of child pages per pool.
    Example: 5

  - `data.versions.php_fpm_pool_parms.pm_max_requests` (integer)
    The number of possible requests the system allows.
    Example: 20

  - `data.versions.php_fpm_pool_parms.pm_process_idle_timeout` (integer)
    How long the system remains idle before it kills the FPM child process.
    Example: 10

  - `data.versions.phpversion_source` (array)
    How the virtual host determines its PHP version.

  - `data.versions.phpversion_source.domain` (string)
    The domain the virtual host inherits its PHP version from.
    Example: "example.com"

  - `data.versions.phpversion_source.system_default` (integer)
    Whether the virtual host uses the system's default PHP version.
* 1 - Uses the system default PHP version.

Note:

  The function only returns this value if true.
    Enum: 1

  - `data.versions.version` (string)
    The virtual host's PHP version.

* ea-php72
* ea-php73
* ea-php74
* inherit
* Any custom PHP package name.
    Example: "ea-php72"

  - `data.versions.vhost` (string)
    The virtual host's name.
    Example: "otherchars.rm3.tld"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "php_get_vhost_versions"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed: Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


