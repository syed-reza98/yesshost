# Spam Protection (Greylisting)

Mail / Spam Protection (Greylisting)

## Return Greylisting trust status of server netblock

 - [GET /cpgreylist_is_server_netblock_trusted](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-cpgreylist_is_server_netblock_trusted.md): This function returns the Greylisting trusted status of the server's netblock.

## Return Greylisting IP addresses of mail providers

 - [GET /cpgreylist_list_entries_for_common_mail_provider](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-cpgreylist_list_entries_for_common_mail_provider.md): This function lists Greylisting's IP addresses for the specified mail provider.

## Return Greylisting mail providers

 - [GET /cpgreylist_load_common_mail_providers_config](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-cpgreylist_load_common_mail_providers_config.md): This function returns Greylisting's list of common mail service providers.

## Update Greylisting new mail provider handling

 - [GET /cpgreylist_save_common_mail_providers_config](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-cpgreylist_save_common_mail_providers_config.md): This function sets whether Greylisting trusts new entries to cPanel's common mail providers list.

## Return Greylisting status

 - [GET /cpgreylist_status](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-cpgreylist_status.md): This function returns the status of Greylisting.

## Add mail provider to Greylisting trusted hosts

 - [GET /cpgreylist_trust_entries_for_common_mail_provider](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-cpgreylist_trust_entries_for_common_mail_provider.md): This function marks the IP addresses for the specified mail provider as trusted. Greylisting will not defer emails from trusted IP addresses.

## Add mail provider to Greylisting non-trusted hosts

 - [GET /cpgreylist_untrust_entries_for_common_mail_provider](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-cpgreylist_untrust_entries_for_common_mail_provider.md): This function marks the IP addresses for the specified mail provider as not trusted.
Greylisting defers emails from non-trusted IP addresses.

## Add IP address to Greylisting trusted hosts

 - [GET /create_cpgreylist_trusted_host](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-create_cpgreylist_trusted_host.md): This function adds an IP address to the Greylisting Trusted Hosts list.

## Remove IP address from Greylisting trusted hosts

 - [GET /delete_cpgreylist_trusted_host](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-delete_cpgreylist_trusted_host.md): This function deletes an IP address from the Greylisting _Trusted Hosts_ list.

## Disable Greylisting

 - [GET /disable_cpgreylist](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-disable_cpgreylist.md): This function disables Greylisting.

## Enable Greylisting

 - [GET /enable_cpgreylist](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-enable_cpgreylist.md): This function enables Greylisting.

## Return Greylisting settings

 - [GET /load_cpgreylist_config](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-load_cpgreylist_config.md): This function returns Greylisting's current settings.

## Return Greylisting deferred incoming email triplets

 - [GET /read_cpgreylist_deferred_entries](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-read_cpgreylist_deferred_entries.md): This function lists Greylisting's deferred triplets.
Greylisting identifies incoming email by triplets.

A triplet is a collection of three pieces of data:
* the IP address
* the sender's address
* the recipient's address

## Return Greylisting trusted hosts

 - [GET /read_cpgreylist_trusted_hosts](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-read_cpgreylist_trusted_hosts.md): This function retrieves the entries on the Greylisting Trusted Hosts list.

## Update Greylisting settings

 - [GET /save_cpgreylist_config](https://api.docs.cpanel.net/specifications/whm.openapi/spam-protection-(greylisting)/cpgreylist-save_cpgreylist_config.md): This function modifies the server's Greylisting configuration settings.

Important:

When you call this function, you must include at least one of the
following parameters:

* spf_bypass
* child_timeout_secs
* record_exp_time_mins
* initial_block_time_mins
* max_child_procs
* purge_interval_mins
* must_try_time_mins

