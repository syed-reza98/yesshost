# PHP

The PHP module for WHM API 1.

## Return PHP handlers

 - [GET /php_get_handlers](https://api.docs.cpanel.net/specifications/whm.openapi/php/php-php_get_handlers.md): This function returns the PHP handlers on the system.

Important:

When you disable the
Web Server role,
the system disables this function.

## Return PHP preconfigured domains

 - [GET /php_get_impacted_domains](https://api.docs.cpanel.net/specifications/whm.openapi/php/php-php_get_impacted_domains.md): This function lists domains that obtain their PHP version from a specified PHP configuration.

Important:

When you disable the
Web Server role,
the system disables this function.

## Return installed PHP versions

 - [GET /php_get_installed_versions](https://api.docs.cpanel.net/specifications/whm.openapi/php/php-php_get_installed_versions.md): This function returns the installed PHP versions on a server.

Note:

  This document only applies to systems that run EasyApache 4.

Important:

  When you disable the Web Server role , the system disables this function.

## Return system default PHP version

 - [GET /php_get_system_default_version](https://api.docs.cpanel.net/specifications/whm.openapi/php/php-php_get_system_default_version.md): This function returns the system default PHP version.

Note:

This document only applies to systems that run EasyApache 4.

Important:

When you disable the Web Server role, the system disables this function.

## Return PHP version of all virtual hosts

 - [GET /php_get_vhost_versions](https://api.docs.cpanel.net/specifications/whm.openapi/php/php-php_get_vhost_versions.md): This function returns the PHP version of every virtual host that a reseller controls.

Note:

  This document only applies to systems that run EasyApache 4.

Important:

  When you disable the Web Server role, the system disables this function.

## Return virtual hosts per PHP version

 - [GET /php_get_vhosts_by_version](https://api.docs.cpanel.net/specifications/whm.openapi/php/php-php_get_vhosts_by_version.md): This function lists the virtual hosts that use a specified version of PHP.

Note:

This document only applies to systems that run EasyApache 4.

Important:

When you disable the Web Server role, the system disables this function.

## Return PHP version's php.ini file

 - [GET /php_ini_get_content](https://api.docs.cpanel.net/specifications/whm.openapi/php/php-php_ini_get_content.md): This function returns the contents of a PHP version's php.ini file.

Note:

  This document only applies to systems that run EasyApache 4.

Important:

  When you disable the Web Server role, the system disables this function.

## Return PHP version's directives

 - [GET /php_ini_get_directives](https://api.docs.cpanel.net/specifications/whm.openapi/php/php-php_ini_get_directives.md): This function returns the directives in the selected PHP version's php.ini file. WHM's MultiPHP INI Editor interface (Home >> Software >> MultiPHP INI Editor) lists these directives in the Basic Mode section.

Important:

  When you disable the Web Server role, the system disables this function.

## Update PHP version's php.ini file

 - [POST /php_ini_set_content](https://api.docs.cpanel.net/specifications/whm.openapi/php/php-php_ini_set_content.md): This function changes the contents of a PHP version's php.ini file.

Notes:

 - This document only applies to systems that run EasyApache 4.
 - Due to the limited field length of HTTP GET method calls, we strongly recommend that you use the HTTP POST method.

Important:
  When you disable the Web Server role, the system disables this function.

## Update PHP version's directives

 - [GET /php_ini_set_directives](https://api.docs.cpanel.net/specifications/whm.openapi/php/php-php_ini_set_directives.md): This function sets the value of a PHP version's directives.

Note:

  This document only applies to systems that run EasyApache 4.

Important:

  When you disable the Web Server role , the system disables this function.

## Update PHP version's handler

 - [GET /php_set_handler](https://api.docs.cpanel.net/specifications/whm.openapi/php/php-php_set_handler.md): This function sets a PHP version's handler.

Important:

When you disable the Web Server role, the system disables this function.

## Update PHP default save path

 - [GET /php_set_session_save_path](https://api.docs.cpanel.net/specifications/whm.openapi/php/php-php_set_session_save_path.md): This function sets the location of PHP's default session save path.

Important:

When you disable the Web Server role, the system disables this function.

## Update default PHP version

 - [GET /php_set_system_default_version](https://api.docs.cpanel.net/specifications/whm.openapi/php/php-php_set_system_default_version.md): The version of PHP that you wish to set as the system's default.

* ea-php81
* inherit
* Any custom PHP package name.

Important:

When you disable the Web Server role, the system disables this function.

## Update domain's PHP values

 - [GET /php_set_vhost_versions](https://api.docs.cpanel.net/specifications/whm.openapi/php/php-php_set_vhost_versions.md): This function allows WHM's
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

