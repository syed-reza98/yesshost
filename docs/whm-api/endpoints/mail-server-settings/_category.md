# Mail Server Settings

Mail / Mail Server Settings

## Enable SNI mail services for domains

 - [GET /enable_mail_sni](https://api.docs.cpanel.net/specifications/whm.openapi/mail-server-settings/ssl-enable_mail_sni.md): This function enables SNI for mail services on the specified domains.

Note:

Mail SNI is always enabled.

* Functions that enable Mail SNI succeed with a warning that Mail SNI is always enabled.
* Functions that disable Mail SNI fail and make no changes.

## Repair Exim configuration file

 - [GET /exim_configuration_check](https://api.docs.cpanel.net/specifications/whm.openapi/mail-server-settings/exim-exim_configuration_check.md): This function scans the Exim configuration file for errors, and if it finds errors attempts to repair them.

## Return server mail queue contents

 - [GET /fetch_mail_queue](https://api.docs.cpanel.net/specifications/whm.openapi/mail-server-settings/exim-fetch_mail_queue.md): This function retrieves the contents of the server's mail queue.

## Create email account mobile profile configuration

 - [GET /generate_mobileconfig](https://api.docs.cpanel.net/specifications/whm.openapi/mail-server-settings/email-generate_mobileconfig.md): This function generates a mobile configuration profile for an email account.

Important:

When you disable the Receive Mail role, the system disables this function.

## Return server SNI support status

 - [GET /is_sni_supported](https://api.docs.cpanel.net/specifications/whm.openapi/mail-server-settings/ssl-is_sni_supported.md): This function checks whether the server supports SNI (Server Name Indication).

Note:

  * Functions that enable Mail SNI succeed with a warning that Mail SNI is always enabled.
  * Functions that disable Mail SNI fail and make no changes.

## Return domain's SNI mail services status

 - [GET /mail_sni_status](https://api.docs.cpanel.net/specifications/whm.openapi/mail-server-settings/ssl-mail_sni_status.md): This function retrieves the status of the domain's SNI mail services.

Note:

Functions that disable Mail SNI fail and make no changes.

## Repair misconfigured email settings

 - [GET /normalize_user_email_configuration](https://api.docs.cpanel.net/specifications/whm.openapi/mail-server-settings/email-normalize_user_email_configuration.md): This function fixes a user's misconfigured email settings. This includes any misconfigured email file and directory ownership and permissions.

## Rebuild mail SNI configuration files

 - [GET /rebuild_mail_sni_config](https://api.docs.cpanel.net/specifications/whm.openapi/mail-server-settings/ssl-rebuild_mail_sni_config.md): This function rebuilds the mail SNI configuration files.

## Remove Exim configuration files after failed update

 - [GET /remove_in_progress_exim_config_edit](https://api.docs.cpanel.net/specifications/whm.openapi/mail-server-settings/exim-remove_in_progress_exim_config_edit.md): This function removes in-progress Exim configuration files after
a failed update to Exim. When cPanel & WHM attempts to update an Exim configuration,
the system creates dry run files to replace of the ordinary configuration
files.

Note:

* If the update fails, the system leaves these dry run files in place.
 When the user accesses the Advanced Editor section of WHM's Exim Configuration Manager*
interface (_Home >> Service Configuration >> Exim Configuration Manager_),
they access these dry run files instead of the actual configuration files.

## Validate Exim configuration

 - [GET /validate_current_installed_exim_config](https://api.docs.cpanel.net/specifications/whm.openapi/mail-server-settings/exim-validate_current_installed_exim_config.md): This function validates the system's current Exim configuration.

## Validate Exim configure file syntax

 - [GET /validate_exim_configuration_syntax](https://api.docs.cpanel.net/specifications/whm.openapi/mail-server-settings/exim-validate_exim_configuration_syntax.md): This function evaluates and validates an Exim configuration file's syntax.

Note:

On servers that run CentOS 7, you may see a named warning about the absence of SPF resource
records on DNS.
  * This warning is not relevant on CentOS 7 servers, because
  RFC 7208 deprecated SPF records.
  CentOS 7 servers use TXT records instead of SPF records.
  * Red Hat 7.1 and CentOS 7.1 both contain bind-9.9.4-23.el7, which is an updated version of
  BIND that complies with RFC 7208. To resolve this issue, update your operating system to a
  version that contains the updated version of BIND. For more information, read the
  Red Hat Bugzilla case about SPF record errors.

## (Deprecated) Disable SNI mail services for domains (deprecated)

 - [GET /disable_mail_sni](https://api.docs.cpanel.net/specifications/whm.openapi/mail-server-settings/ssl-disable_mail_sni.md): This function is deprecated and always fails.

Note:

Mail SNI is always enabled. cPanel & WHM no longer allows mail SNI to be disabled.

* Functions that disable Mail SNI fail and make no changes.
* Functions that enable Mail SNI succeed with a warning that Mail SNI is always enabled.

