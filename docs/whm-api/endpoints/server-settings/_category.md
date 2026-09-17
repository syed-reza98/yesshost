# Server Settings

Web Server Security (ModSecurity) / Server Settings

## Add ModSecurity configuration file text

 - [GET /modsec_assemble_config_text](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_assemble_config_text.md): This function adds text to a ModSecurity™ configuration file.

Important:

When you disable the
Web Server role,
the system disables this function.

## Run ModSecurity batch settings

 - [GET /modsec_batch_settings](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_batch_settings.md): This function adds, updates, and removes global ModSecurity™ configuration directives.
The function modifies these directives in the /usr/local/apache/conf/modsec2.cpanel.conf
file.

Important:

When you disable the Web Server role,
the system disables this function.

This function only supports the following ModSecurity™ configuration directives:


  setting_idDocumentation
  0SecAuditEngine
  1SecConnEngine
  2SecRuleEngine
  3SecDisableBackendCompression
  4SecGeoLookupDb
  5SecGsbLookupDb
  6SecGuardianLog
  7SecHttpBlKey
  8SecPcreMatchLimit
  9SecPcreMatchLimitRecursion

## Enable staged ModSecurity configuration files

 - [GET /modsec_deploy_settings_changes](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_deploy_settings_changes.md): This function deploys the staged changes to your modsec2.cpanel.conf file and
attempts to restart Apache. If the new settings fail validation, the system restores
the /etc/apache2/conf.d/modsec/modsec2.cpanel.conf file.

Note:

Call the WHM API 1 modsec_set_setting function to prepare your changes for
the modsec2.cpanel.conf file.

Important:

When you disable the
Web Server role,
the system disables this function.

## Return ModSecurity configuration file

 - [GET /modsec_get_config_text](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_get_config_text.md): This function retrieves a ModSecurity™ configuration file's contents.

Important:

When you disable the
Web Server role,
the system disables this function.

## Return all ModSecurity configuration files

 - [GET /modsec_get_configs](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_get_configs.md): This function lists ModSecurity™ configuration files. The system stores the configuration
files in the /usr/local/apache/conf/modsec_vendor_configs directory.

Important:

When you disable the
Web Server role,
the system disables this function.

## Return staged ModSecurity configuration files

 - [GET /modsec_get_configs_with_changes_pending](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_get_configs_with_changes_pending.md): This function lists the ModSecurity™ configuration files that have staged changes.

Important:

When you disable the
Web Server role,
the system disables this function.

## Return ModSecurity logs

 - [GET /modsec_get_log](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_get_log.md): This function retrieves ModSecurity™ log entries from the modsec SQLite database.

Important:

When you disable the
Web Server role,
the system disables this function.

## Return ModSecurity configuration

 - [GET /modsec_get_settings](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_get_settings.md): This function retrieves the server's ModSecurity™ configuration settings. The system
stores these settings in the /usr/local/apache/conf/modsec2.conf file.

Important:

When you disable the Web Server role,
the system disables this function.

## Return ModSecurity module status

 - [GET /modsec_is_installed](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_is_installed.md): This function checks whether the ModSecurity™ module is installed.

Important:

When you disable the Web Server role, the system disables this function.

## Add ModSecurity configuration file include

 - [GET /modsec_make_config_active](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_make_config_active.md): This function adds an include for a ModSecurity™ configuration file to
the modsec2.cpanel.conf file. This makes the ModSecurity configuration file
active.

Important:

When you disable the
Web Server role,
the system disables this function.

## Remove ModSecurity configuration file include

 - [GET /modsec_make_config_inactive](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_make_config_inactive.md): This function removes an include for a ModSecurity™ configuration file from
the modsec2.cpanel.conf file. This makes the ModSecurity configuration file
inactive.

Important:

When you disable the
Web Server role,
the system disables this function.

## Remove ModSecurity configuration

 - [GET /modsec_remove_setting](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_remove_setting.md): This function removes a global ModSecurity™ configuration directive.

Important:

When you disable the
Web Server role,
the system disables this function.

## Update ModSecurity configuration file

 - [GET /modsec_set_config_text](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_set_config_text.md): This function sets the contents of a specified ModSecurity™ configuration file. The system
stages any changes to the configuration file. To deploy the changes, call WHM API 1's
modsec_deploy_rule_changes function.

Important:

When you disable the
Web Server role,
the system disables this function.

## Update ModSecurity configuration

 - [GET /modsec_set_setting](https://api.docs.cpanel.net/specifications/whm.openapi/server-settings/modsecurity-modsec_set_setting.md): This function sets a global ModSecurity™ configuration directive.

Important:

When you disable the Web Server role, the system disables this function.

