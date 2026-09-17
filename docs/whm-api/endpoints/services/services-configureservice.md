# Enable or disable a service and its monitoring

This function enables or disables a service and its monitoring.

Note:

If the user only possesses the clustering
Access Control List (ACL),
then this function can only act on the named service.

Endpoint: GET /configureservice
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `service` (string, required)
    The service to configure. For more information about each service, read our
Service Manager
documentation.
    Enum: "apache_php_fpm", "cpanel-dovecot-solr", "cpanel_php_fpm", "cpanellogd", "cpdavd", "cphulkd", "cpsrvd", "crond", "dnsadmin", "exim", "exim-altport", "ftpd", "httpd", "imap", "ipaliases", "lmtp", "mailman", "mysql", "named", "nscd", "p0f", "pop", "postgresql", "queueprocd", "rsyslogd", "spamd", "sshd"

  - `enabled` (integer)
    Whether to enable the service.

* 1 — Enable.
* 0 — Disable.

If you do not use this parameter, the function will not change
the enabled status of the service.

Warning:

Do not use this function to disable the cpsrvd service.
    Enum: 0, 1

  - `exim-altportnum` (string)
    A port or list of comma-separated ports on which Exim will listen for
inbound connections.

Note:

The function only uses this parameter if you set exim-altport as
the service parameter's value.
    Example: "26, 5000, 6000"

  - `monitored` (integer)
    Whether to monitor the service in WHM's
Service Status
interface (WHM >> Home >> Server Status >> Service Status).

* 1 — Monitor.
* 0 — Do not monitor.

If you do not use this parameter, the function will not change the
monitoring status of the service.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "configureservice"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "Enabled monitoring for mysql."

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


