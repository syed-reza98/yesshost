# Validate Exim configuration

This function validates the system's current Exim configuration.

Endpoint: GET /validate_current_installed_exim_config
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.message` (string)
    A list of Exim's configuration parameters.
    Example: "<pre>Doing Dry Run\nDry Run ok\nEnabled system filter options: attachments| fail_spam_score_over_int|spam_rewrite\nEnabled ACL options in block ACL_MAIL_PRE_BLOCK: default_mail_pre\nEnabled ACL options in block ACL_RBL_BLOCK: primary_hostname_bl\n Enabled ACL options in block ACL_RECIPIENT_POST_BLOCK: default_recipient_post\nEnabled ACL options in block ACL_SPAM_SCAN_CHECK_BLOCK: default_spam_scan_check\nEnabled ACL options in block ACL_CHECK_MESSAGE_PRE_BLOCK: default_check_message_pre \nEnabled ACL options in block ACL_CONNECT_POST_BLOCK: default_connect_post \nEnabled ACL options in block ACL_CONNECT_BLOCK: ratelimit|spammerlist \nEnabled ACL options in block ACL_POST_RECP_VERIFY_BLOCK: dictionary_attack\nEnabled ACL options in block ACL_IDENTIFY_SENDER_BLOCK: default_identify_sender\nEnabled ACL options in block ACL_MAIL_BLOCK: requirehelo| requirehelonoforge|requirehelosyntax\nEnabled ACL options in block ACL_RATELIMIT_SPAM_BLOCK: ratelimit_spam_score_over_int\nEnabled ACL options in block ACL_CHECK_MESSAGE_POST_BLOCK: default_check_message_post\nEnabled ACL options in block ACL_POST_SPAM_SCAN_CHECK_BLOCK: mailproviders \nEnabled ACL options in block ACL_SPAM_SCAN_BLOCK: default_spam_scan \nEnabled ACL options in block ACL_RATELIMIT_BLOCK: 0tracksenders\nEnabled ACL options in block ACL_NOTQUIT_BLOCK: ratelimit\nEnabled ACL options in block ACL_RECP_VERIFY_BLOCK: default_recp_verify\nEnabled ACL options in block ACL_PRE_SPAM_SCAN: mailproviders\nEnabled ACL options in block ACL_SPAM_BLOCK: deny_spam_score_over_int\nEnabled ACL options in block ACL_EXISCAN_BLOCK: default_exiscan\nEnabled ACL options in block ACL_RECIPIENT_BLOCK: default_recipient\nEnabled ACL options in block ACL_MAIL_POST_BLOCK: default_mail_post\nThe system detected spam handling in acls and will now disable Apache SpamAssassin in routers and transports!\nThe Apache SpamAssassin method remains unchanged.\nConfigured options list is:\nACL: acl_smtp_connect is active\nACL: acl_smtp_data is active\nACL: acl_smtp_mail is active\nACL: acl_smtp_notquit is active\nACL: acl_smtp_rcpt is active\nProvided options list is: daemon_smtp_ports| tls_on_connect_ports|system_filter_user|system_filter_group|tls_require_ciphers|hostlist loopback|hostlist senderverifybypass_hosts|hostlist skipsmtpcheck_hosts|hostlist spammeripblocks|hostlist backupmx_hosts|hostlist trustedmailhosts|hostlist relay_hosts| domainlist user_domains|remote_max_parallel|smtp_receive_timeout| ignore_bounce_errors_after|rfc1413_query_timeout|timeout_frozen_after|auto_thaw| callout_domain_negative_expire|callout_negative_expire|acl_smtp_connect| acl_smtp_data|acl_smtp_mail|acl_smtp_notquit|acl_smtp_rcpt|perl_at_start| daemon_smtp_ports|tls_on_connect_ports|system_filter_user|system_filter_ group|tls_require_ciphers|spamd_address\nExim Insert Regex is: virtual_userdelivery| virtual_aliases|lookuphost|virtual_user|address_pipe|virtual_sa_user|localuser\nExim Replace Regex is: virtual_sa_user|sa_localuser|virtual_sa_userdelivery| local_sa_delivery|central_filter|central_user_filter|democheck|fail_remote_domains| fixed_login|fixed_plain|has_alias_but_no_mailbox_discarded_to_prevent_loop|literal| local_delivery|local_delivery_spam|localuser|localuser_spam|lookuphost|remote_smtp| secure_login|secure_plain|userforward|virtual_aliases|virtual_aliases_nostar| virtual_user|virtual_user_spam|virtual_userdelivery|virtual_userdelivery_spam\nExim Match Insert Regex is: quota_directory|maildir_format\nExim version 4.76 #1 built 16- Aug-2011 11:41:07\nCopyright (c) University of Cambridge, 1995 - 2007\nBerkeley DB: Sleepycat Software: Berkeley DB 4.3.29: (July 12, 2010)\nSupport for: crypteq iconv() IPv6 PAM Perl OpenSSL Content_Scanning DKIM Old_Demime Experimental_SPF Experimental_SRS\nLookups (built-in): lsearch wildlsearch nwildlsearch iplsearch dbm dbmnz passwd\nAuthenticators: cram_md5 dovecot plaintext spa\nRouters: accept dnslookup ipliteral manualroute queryprogram redirect\nTransports: appendfile/maildir autoreply pipe smtp\nSize of off_t: 8\n\n</pre>"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "validate_current_installed_exim_config"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "Your configuration is currently valid."

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


