# Update PHP-FPM directives and pool options

This function configures the PHP INI directives and pool options
for a system's or domain's PHP-FPM configuration.

Important:

When you disable the Web Server role, the system disables this function.

Warning:

We strongly recommend that you only activate Apache PHP-FPM if your server has at least 2 GB of RAM available, or
at least 30 MB of RAM per domain.  If you enable PHP-FPM on a server with less than the required RAM, your server may
experience severe performance issues.

Endpoint: POST /php_fpm_config_set
Version: 11.138.0.6
Security: BasicAuth

## Request fields (application/json):

  - `config` (array, required)
    An array of objects containing the PHP-FPM configuration values to validate or update.
    Example: [{"base_flag_name":"error_reporting","trinary_admin_value":1,"value":"E_ALL & ~E_NOTICE"},{"base_flag_name":"pm_max_children","trinary_admin_value":0,"value":"10"}]

  - `config.base_flag_name` (string, required)
    A PHP INI directive or PHP-FPM pool option name.

PHP INI directives

* allow_url_fopen - The PHP configuration treats URLs as files.
* disable_functions - Lists the functions that the system will disable.
* doc_root - The PHP pages' document root.
* error_log - The error log file.
* error_reporting - The errors that the system reports on.
* log_errors - Whether the system will log errors.
* short_open_tag - Whether the system recognizes code between the  tags as a PHP source.

Pool options

* pm_max_children - The maximum number of process pools that the PHP-FPM Master Process will generate to handle requests.
* pm_max_requests - The maximum number of requests that the process pools can receive.
* pm_process_idle_timeout - The amount of time, in seconds, that a pool process will wait for a request.

  - `config.trinary_admin_value` (integer, required)
    Whether the PHP value is a PHP INI directive value (php_value), a PHP INI ADMIN value (php_admin_value), or a PHP-FPM pool option (pm_*).

* 0 - A PHP-FPM-specific value (pool options).
* 1 - A PHP INI ADMIN directive. A cPanel account user cannot override this directive.
* 2 - A PHP INI directive. A cPanel account user can override this directive.
    Enum: 0, 1, 2

  - `config.value` (string, required)
    An argument value for base_flag_name parameter.

  - `domain` (string)
    A blank value or domain name whose PHP-FPM configuration you wish
to set.

  - `validate_only` (boolean)
    Whether the function request is for validation or to update the settings.
* true - Only validate the configuration.
* false - Validate and update the configuration.

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "php_fpm_config_set"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


