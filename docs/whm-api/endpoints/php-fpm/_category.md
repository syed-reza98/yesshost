# PHP-FPM

Web Server Configuration / PHP-FPM

## Enable PHP-FPM on all domains

 - [GET /convert_all_domains_to_fpm](https://api.docs.cpanel.net/specifications/whm.openapi/php-fpm/php-convert_all_domains_to_fpm.md): This function activates PHP-FPM for any non-PHP-FPM domains on a server.

Important:

When you disable the Web Server role, the system disables this function.

Warning:

We strongly recommend that you only activate Apache PHP-FPM if your server has at least 2 GB of RAM available, or at least 30 MB of RAM per domain. If you enable PHP-FPM on a server with less than the required RAM, your server may experience severe performance issues.

## Return workload data for PHP-FPM on all domains

 - [GET /get_fpm_count_and_utilization](https://api.docs.cpanel.net/specifications/whm.openapi/php-fpm/php-get_fpm_count_and_utilization.md): This function provides information that will help you to determine
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

## Return PHP-FPM conversion status

 - [GET /is_conversion_in_progress](https://api.docs.cpanel.net/specifications/whm.openapi/php-fpm/php-is_conversion_in_progress.md): This function indicates whether the system's process to convert all of WHM's accounts to use PHP-FPM is in progress.

Important:

When you disable the Web Server role, the system disables this function.

Warning:

We strongly recommend that you only activate Apache PHP-FPM if your server has at least 2 GB of RAM available, or at least 30 MB of RAM per domain. If you enable PHP-FPM on a server with less than the required RAM, your server may experience severe performance issues.

## Return PHP-FPM directives and pool options

 - [POST /php_fpm_config_get](https://api.docs.cpanel.net/specifications/whm.openapi/php-fpm/php-php_fpm_config_get.md): This function retrieves the PHP INI directives and pool options for a system's or domain's PHP-FPM configuration.

 Important:

   When you disable the WebServer role, the system disables this function.

 Warning:

   We strongly recommend that you only activate Apache PHP-FPM if your server has at least 2 GB of RAM available, or at least 30 MB of RAM per domain. If you enable PHP-FPM on a server with less than the required RAM, your server may experience severe performance issues.

## Update PHP-FPM directives and pool options

 - [POST /php_fpm_config_set](https://api.docs.cpanel.net/specifications/whm.openapi/php-fpm/php-php_fpm_config_set.md): This function configures the PHP INI directives and pool options
for a system's or domain's PHP-FPM configuration.

Important:

When you disable the Web Server role, the system disables this function.

Warning:

We strongly recommend that you only activate Apache PHP-FPM if your server has at least 2 GB of RAM available, or
at least 30 MB of RAM per domain.  If you enable PHP-FPM on a server with less than the required RAM, your server may
experience severe performance issues.

## Return PHP-FPM status on new accounts

 - [GET /php_get_default_accounts_to_fpm](https://api.docs.cpanel.net/specifications/whm.openapi/php-fpm/php-php_get_default_accounts_to_fpm.md): This function determines whether the system enables PHP-FPM for new domains and accounts.

Important:

When you disable the
Web Server role,
the system disables this function.

Warning:

We strongly recommend that you only activate Apache PHP-FPM if your server has at
least 2 GB of RAM available, or at least 30 MB of RAM per domain. If you enable PHP-FPM
on a server with less than the required RAM, your server may experience severe performance
issues.

## Return PHP-FPM preconfigured status

 - [GET /php_get_old_fpm_flag](https://api.docs.cpanel.net/specifications/whm.openapi/php-fpm/php-php_get_old_fpm_flag.md): This function determines whether your system runs with a preconfigured PHP-FPM configuration.

Important:

When you disable the Web Server role, the system disables this function.

## Enable PHP-FPM on new cPanel accounts and domains

 - [GET /php_set_default_accounts_to_fpm](https://api.docs.cpanel.net/specifications/whm.openapi/php-fpm/php-php_set_default_accounts_to_fpm.md): This function determines whether to enable PHP-FPM on new accounts and domains on a server.

Important:

When you disable the Web Server role, the system disables this function.

Warning:

We strongly recommend that you only activate Apache PHP-FPM if your server has at least 2 GB of RAM available, or at least 30 MB of RAM per domain. If you enable PHP-FPM on a server with less than the required RAM, your server may experience severe performance issues.

## Enable PHP-FPM preconfigured status

 - [GET /php_set_old_fpm_flag](https://api.docs.cpanel.net/specifications/whm.openapi/php-fpm/php-php_set_old_fpm_flag.md): This function creates the /etc/cpanel/ea4/old_fpm_flag touch file.

Note:

If this touch file exists, the system will not display a message that indicates whether your system runs on an outdated PHP-FPM configuration. If you wish to see the message again, delete this touch file.

Important:

When you disable the Web Server role, the system disables this function.

