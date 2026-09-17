# Return service status

This function reports which services (daemons) are enabled, installed, and monitored on your server.

Endpoint: GET /servicestatus
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `service` (string)
    The service for which to view the status.

Notes

If you do not specify this parameter, the function will return the status for all of your server's services.

Available Services:

* apache_php_fpm
* clamd
* cpanel-dovecot-solr
* cpanel_php_fpm
* cpanellogd
* cpdavd
* cpgreylistd
* cphulkd
* cpsrvd
* crond
* dnsadmin
* exim
* exim-altport
* ftpd
* httpd
* imap
* ipaliases
* lmtp
* mailman
* mysql
* named
* nscd
* p0f
* pop
* postgresql
* queueprocd
* rsyslogd
* spamd
* sshd
* syslogd
* tailwatchd

For more information about these services, read our Service Manager documentation.
    Example: "crond"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.service` (array)
    An object containing service information.

Note:

Certain [server profiles](https://go.cpanel.net/howtouseserverprofiles) disable specific services. For example, the Mail profile's ftpd service would return a 0 value for the enabled, installed, and monitored returns.

  - `data.service.display_name` (string)
    The service's full name.
    Example: "Cron Daemon"

  - `data.service.enabled` (integer)
    Whether the service is enabled.
* 1 - Enabled.
* 0 - Disabled. If a server profile disables a service, this returns a 0 value.
    Enum: 0, 1

  - `data.service.installed` (integer)
    Whether the service is installed.
* 1 - Installed.
* 0 - Uninstalled. If a server profile disables a service, this returns a 0 value.
    Enum: 0, 1

  - `data.service.monitored` (integer)
    Whether the server monitors the service.
* 1 - Monitored.
* 0 - Not monitored. If a server profile disables a service, this returns a 0 value.
    Enum: 0, 1

  - `data.service.name` (string)
    The service's short name.
* apache_php_fpm
* clamd
* cpanel-dovecot-solr
* cpanel_php_fpm
* cpanellogd
* cpdavd
* cpgreylistd
* cphulkd
* cpsrvd
* crond
* dnsadmin
* exim
* exim-altport
* ftpd
* httpd
* imap
* ipaliases
* lmtp
* mailman
* mysql
* named
* nscd
* p0f
* pop
* postgresql
* queueprocd
* rsyslogd
* spamd
* sshd
* syslogd
* tailwatchd

Note:  For more information about these services, read our [Service Manager](https://go.cpanel.net/whmdocsServiceManager) documentation.
    Example: "crond"

  - `data.service.running` (integer)
    Whether the service currently runs on the server.

Note:

The function does not return this parameter if the server does not monitor the service.

* 1 - Running.
* 0 - Not running.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "servicestatus"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


