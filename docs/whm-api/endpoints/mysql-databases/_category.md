# MySQL Databases

Databases / MySQL Databases

## Return MySQL database optimizations

 - [GET /get_database_optimizations](https://api.docs.cpanel.net/specifications/whm.openapi/mysql-databases/db-get_database_optimizations.md): This function retrieves available database optimizations.

Warning:

On some servers, this function may return a large amount of output. We strongly suggest that you filter and sort the output.

Important:

The system disables this function when you have not configured remote MySQL, and you've disabled the MySQL/MariaDB and PostgreSQL roles.

## Return MySQL users

 - [GET /list_database_users](https://api.docs.cpanel.net/specifications/whm.openapi/mysql-databases/db-list_database_users.md): This function lists the server's database users.

Warning:

On most servers, this function returns a large amount of output. We strongly suggest that you filter and sort the output.

Important:

  When you disable the MySQL/MariaDB and PostgreSQL roles and remote MySQL is not already configured, the system disables this function.

## Return MySQL databases

 - [GET /list_databases](https://api.docs.cpanel.net/specifications/whm.openapi/mysql-databases/db-list_databases.md): This function lists the server's databases.

Warning:

On most servers, this function returns a large amount of output. We strongly suggest that you filter and sort the output.

Important:

When you disable the MySQL/MariaDB and PostgreSQL roles and remote MySQL is not already configured, the system disables this function.

## Return MySQL databases and users for account

 - [GET /list_mysql_databases_and_users](https://api.docs.cpanel.net/specifications/whm.openapi/mysql-databases/db-list_mysql_databases_and_users.md): This function retrieves the MySQL® database and user data for the specified account.

Important:

When you disable the MySQL/MariaDB role and remote MySQL is not already configured, the system disables this function.

## Update MySQL database name

 - [GET /rename_mysql_database](https://api.docs.cpanel.net/specifications/whm.openapi/mysql-databases/db-rename_mysql_database.md): This function changes a MySQL® database's name. MySQL does not allow you to rename a database. When cPanel & WHM "renames" a database, the system performs the following steps:
1. The system creates a new database.
2. The system moves data from the old database to the new database.
3. The system recreates grants and stored code in the new database.
4. The system deletes the old database and its grants.

Warning:

* If any of the first three steps fail, the system returns an error and attempts to restore the database's original state. If the restoration process fails, the API function's error response describes these additional failures.
* In rare cases, the system creates the second database successfully but fails to delete the old database or grants. The system treats the rename action as a success; however, the API function returns warnings that describe the failure to delete the old database or grants.

Important:

  When you disable the MySQL/MariaDB role and remote MySQL is not already configured, the system disables this function.

## Update MySQL username

 - [GET /rename_mysql_user](https://api.docs.cpanel.net/specifications/whm.openapi/mysql-databases/db-rename_mysql_user.md): This function changes a MySQL® database user's name.

Important:

  When you disable the MySQL/MariaDB role and remote MySQL is not already configured, the system disables this function.

## Update MySQL user password

 - [GET /set_mysql_password](https://api.docs.cpanel.net/specifications/whm.openapi/mysql-databases/db-set_mysql_password.md): This function changes a MySQL® database user's password.

Important:

When you disable the
MySQL/MariaDB role and
remote MySQL is not already configured, the system disables this function.

