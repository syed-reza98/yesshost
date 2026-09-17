# Return service configuration settings

This function returns a service's configuration settings.

Endpoint: GET /get_service_config
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `service` (string, required)
    The service's name.

* dovecot — The Dovecot service.

Note:

For a fresh install, the data returned for the Dovecot
service will only contain the list of protocols. It will
not be until the mailserver configuration is saved that
the return data for Dovecot will look like what is shown
in the example.
    Enum: "dovecot"

## Response 200 fields (application/json):

  - `data` (object)
    A list of the configuration key's settings.
    Example: {"auth_cache_negative_ttl":3600,"auth_cache_size":"1M","auth_cache_ttl":3600,"auth_policy_hash_nonce":91057590,"compress_messages":0,"config_vsz_limit":2048,"auth_allow_cleartext":"yes","expire_trash":0,"expire_spam":0,"hulk_auth_passwd":"FAMONex4Bn9Hv1BO","include_trash_in_quota":0,"incoming_reached_quota":"bounce","ipv6":"on","lmtp_process_limit":500,"lmtp_process_min_avail":0,"lmtp_user_concurrency_limit":4,"login_max_processes_count":50,"login_process_per_connection":"no","login_process_size":128,"login_processes_count":2,"mail_process_size":512,"mdbox_rotate_interval":0,"mdbox_rotate_size":"10M","protocol_imap":{"mail_max_userip_connections":20,"map_idle_notify_interval":24},"protocol_pop3":{"mail_max_userip_connections":3},"protocols":"imap pop3","ssl_cipher_list":"ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384","ssl_min_protocol":"TLSv1.2"}

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_service_config"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


