# Remote MySQL Databases

Databases / Remote MySQL Databases

## Create remote MySQL profile

 - [GET /remote_mysql_create_profile](https://api.docs.cpanel.net/specifications/whm.openapi/remote-mysql-databases/remotemysql-remote_mysql_create_profile.md): This function creates a profile to access a remote MySQL® server.

## Create remote MySQL profile via SSH

 - [GET /remote_mysql_create_profile_via_ssh](https://api.docs.cpanel.net/specifications/whm.openapi/remote-mysql-databases/remotemysql-remote_mysql_create_profile_via_ssh.md): This function uses SSH to create a profile to access a remote MySQL® server.

## Delete remote MySQL profile

 - [GET /remote_mysql_delete_profile](https://api.docs.cpanel.net/specifications/whm.openapi/remote-mysql-databases/remotemysql-remote_mysql_delete_profile.md): This function deletes a specified remote MySQL® profile.

## Start remote MySQL profile activation

 - [GET /remote_mysql_initiate_profile_activation](https://api.docs.cpanel.net/specifications/whm.openapi/remote-mysql-databases/remotemysql-remote_mysql_initiate_profile_activation.md): This function initiates the activation process for a remote MySQL® profile.

## Return remote MySQL profile activation

 - [GET /remote_mysql_monitor_profile_activation](https://api.docs.cpanel.net/specifications/whm.openapi/remote-mysql-databases/remotemysql-remote_mysql_monitor_profile_activation.md): This function reports the current status of the remote MySQL® profile activation process. The activation process contains several steps that take some time to complete, so so you may need to call this function multiple times multiple times to monitor the progress.

## Return remote MySQL profile

 - [GET /remote_mysql_read_profile](https://api.docs.cpanel.net/specifications/whm.openapi/remote-mysql-databases/remotemysql-remote_mysql_read_profile.md): This function displays the details of a specified remote MySQL® profile.

## Return remote MySQL profiles

 - [GET /remote_mysql_read_profiles](https://api.docs.cpanel.net/specifications/whm.openapi/remote-mysql-databases/remotemysql-remote_mysql_read_profiles.md): This function displays the details of all remote MySQL® profiles available in WHM.

## Update remote MySQL profile

 - [GET /remote_mysql_update_profile](https://api.docs.cpanel.net/specifications/whm.openapi/remote-mysql-databases/remotemysql-remote_mysql_update_profile.md): This function updates one or more parameters for a remote MySQL®
profile.

Note:
This function requires the name parameter and one of more of the mysql_host , mysql_user, mysql_pass, mysql_port, or setup_via parameters.

## Validate remote MySQL profile connection

 - [GET /remote_mysql_validate_profile](https://api.docs.cpanel.net/specifications/whm.openapi/remote-mysql-databases/remotemysql-remote_mysql_validate_profile.md): This function validates a specified remote MySQL® profile's connection details.

