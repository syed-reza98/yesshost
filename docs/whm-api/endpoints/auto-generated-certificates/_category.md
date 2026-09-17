# Auto-Generated Certificates

SSL Certificates / Auto-Generated Certificates

## Disable AutoSSL for domain

 - [GET /add_autossl_user_excluded_domains](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-add_autossl_user_excluded_domains.md): This function disables AutoSSL for an account's specified domains.

## Disable AutoSSL

 - [GET /disable_autossl](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-disable_autossl.md): This function disables the AutoSSL feature.

## Return AutoSSL check script cron entry

 - [GET /get_autossl_check_schedule](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-get_autossl_check_schedule.md): This function returns the cron entry for the autossl_check.pl AutoSSL certificate check script.

## Return AutoSSL log file's contents

 - [GET /get_autossl_log](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-get_autossl_log.md): This function returns the contents of an AutoSSL log file.

## Return AutoSSL log files

 - [GET /get_autossl_logs_catalog](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-get_autossl_logs_catalog.md): This function lists the AutoSSL feature's log files.

## Return current user's AutoSSL metadata

 - [GET /get_autossl_metadata](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-get_autossl_metadata.md): This function retrieves values for the currently authenticated user's AutoSSL's metadata keys.

## Return available AutoSSL providers

 - [GET /get_autossl_providers](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-get_autossl_providers.md): This function lists available AutoSSL providers on the server.

## Return all AutoSSL-excluded domains

 - [GET /get_autossl_user_excluded_domains](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-get_autossl_user_excluded_domains.md): This function lists an account's domains the system excludes from AutoSSL.

## Remove AutoSSL for domain

 - [GET /remove_autossl_user_excluded_domains](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-remove_autossl_user_excluded_domains.md): This function enables AutoSSL for an account's specified domains.

## Restore AutoSSL registration

 - [GET /reset_autossl_provider](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-reset_autossl_provider.md): This function resets the AutoSSL registration with a remote AutoSSL provider.

## Update AutoSSL metadata

 - [GET /set_autossl_metadata](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-set_autossl_metadata.md): This function sets values for AutoSSL's metadata keys. This allows you to replace certificates that AutoSSL did not issue and toggle other AutoSSL notifications.

Note:

We recommend that you use the WHM API 1 set_autossl_metadata_key function instead.

Information:

* You can enter more than one key and value pair in the metadata_json JSON hash.
* Any keys that you do not explicitly define will adopt the system's default value.

## Update AutoSSL metadata via JSON

 - [GET /set_autossl_metadata_key](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-set_autossl_metadata_key.md): This function sets values for AutoSSL's metadata keys. This allows you to replace certificates that AutoSSL did not issue and toggle other AutoSSL notifications.

Note:

  * This function performs the same actions as the WHM API 1 set_autossl_metadata function. However, this function accepts a single key and value pair as a parameter instead of JSON. Additionally, you can only enter one key and value pair per function call.
  * This function only accepts a single key and value pair. To set all values, use the WHM API 1 set_autossl_metadata function or make multiple calls to this function.

## Update the AutoSSL provider

 - [GET /set_autossl_provider](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-set_autossl_provider.md): This function sets the provider that the AutoSSL feature uses.

Note:

  To disable AutoSSL, call WHM API 1's disable_autossl function.

## Disable AutoSSL for domain

 - [GET /set_autossl_user_excluded_domains](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-set_autossl_user_excluded_domains.md): This function disables AutoSSL for a specific domain on an account.

Warning:

  This function replaces the list of any previously-excluded domains. To add a domain to the list of the user's excluded domains, use the add_autossl_user_excluded_domains function.

## Start AutoSSL check for all cPanel accounts

 - [GET /start_autossl_check_for_all_users](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-start_autossl_check_for_all_users.md): This function performs an AutoSSL certificate check in the background for all cPanel users that have the feature enabled.

## Start cPanel account AutoSSL check

 - [GET /start_autossl_check_for_one_user](https://api.docs.cpanel.net/specifications/whm.openapi/auto-generated-certificates/ssl-start_autossl_check_for_one_user.md): This function performs an AutoSSL certificate check in the background for a cPanel user.

