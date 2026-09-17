# Manage MySQL Server

Databases / Manage MySQL Server

## Validate MySQL status before upgrade

 - [GET /background_mysql_upgrade_checker_run](https://api.docs.cpanel.net/specifications/whm.openapi/manage-mysql-server/mysql-background_mysql_upgrade_checker_run.md): This function checks your MySQL configuration file and table engine before an upgrade to MySQL 8.0.

Important:

When you disable the
MySQL/MariaDB role
and remote MySQL is not already configured, the system disables this function.

## Return MySQL or MariaDB upgrade status

 - [GET /background_mysql_upgrade_status](https://api.docs.cpanel.net/specifications/whm.openapi/manage-mysql-server/mysql-background_mysql_upgrade_status.md): This function retrieves the status of a background MySQL® or MariaDB® upgrade.

Important:

  When you disable the MySQL/MariaDB role and remote MySQL is not already configured, the system disables this function.

## Return MySQL version

 - [GET /current_mysql_version](https://api.docs.cpanel.net/specifications/whm.openapi/manage-mysql-server/mysql-current_mysql_version.md): This function retrieves the server's version of MySQL® or MariaDB®.

Important:

  When you disable the MySQL/MariaDB role and remote MySQL is not already configured, the system disables this function.

## Return available MySQL versions

 - [GET /installable_mysql_versions](https://api.docs.cpanel.net/specifications/whm.openapi/manage-mysql-server/mysql-installable_mysql_versions.md): This function lists all available versions of MySQL® and MariaDB.

Important:

When you disable the MySQL/MariaDB role and remote MySQL is not already configured, the system disables this function.

## Return latest MySQL version

 - [GET /latest_available_mysql_version](https://api.docs.cpanel.net/specifications/whm.openapi/manage-mysql-server/mysql-latest_available_mysql_version.md): This function retrieves the latest available version of MySQL® or MariaDB®.

Important:

When you disable the MySQL/MariaDB role and remote MySQL is not already configured, the system disables this function.

## Update MySQL root password

 - [GET /set_local_mysql_root_password](https://api.docs.cpanel.net/specifications/whm.openapi/manage-mysql-server/localmysql-set_local_mysql_root_password.md): This function resets the root user's password on the local MySQL® server.

Important:

  When you disable the MySQL/MariaDB role and remote MySQL is not already configured, the system disables this function.

## Start background MySQL upgrade

 - [GET /start_background_mysql_upgrade](https://api.docs.cpanel.net/specifications/whm.openapi/manage-mysql-server/mysql-start_background_mysql_upgrade.md): This function upgrades MySQL® or MariaDB® in the background. This will reinstall MySQL® or MariaDB® if the version given is the installed version.

Important:

When you disable the MySQL/MariaDB server role and remote MySQL® is not already configured, the system disables this function.

## Update the servers SQL configuration.

 - [POST /update_sql_config](https://api.docs.cpanel.net/specifications/whm.openapi/manage-mysql-server/mysql-update_sql_config.md): This function updates the database configuration file for MySQL® or MariaDB®.

Important:

When you disable the MySQL/MariaDB role and remote MySQL is not already configured, the system disables this function.

