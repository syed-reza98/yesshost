# Create a temporary user session

This function creates a new temporary user session for a specified service.
This allows users with WHM access to log in to third-party applications
(for example, billing systems) without storing the account password.

Note:

* The system destroys the temporary session after 15 minutes of inactivity.
* For more information about the Single Sign On feature, read our
Guide to API Authentication
documentation.

Endpoint: GET /create_user_session
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `service` (string, required)
    The session's service.
    Enum: "cpaneld", "whostmgrd", "webmaild"

  - `user` (string, required)
    The session's cPanel account username or a valid email address.
    Example: "user@example.com"

  - `app` (string)
    The cPanel or WHM application to which the session will link. This
parameter defaults to a blank string, which redirects the user to the
cPanel
Home
interface.

* A valid application name, to link the session to an application.
* An invalid application name, to create the session but not link
it to an application.
    Enum: "Backups_Home", "Calendar_Configure", "ContactInfo_Change", "Cron_Home", "Database_MySQL", "Database_phpMyAdmin", "Domains_AddonDomains", "Domains_SubDomains", "Email_AccountLevelFiltering", "Email_Accounts", "Email_Archive", "Email_Authentication", "Email_AutoResponders", "Email_BoxTrapper", "Email_DefaultAddress", "Email_DeliveryReport", "Email_Forwarders", "Email_GreyListing", "Email_MailingLists", "Email_MX", "Email_SpamFilter", "Email_UserLevelFiltering", "FileManager_Home", "Locale_Change", "Password_Change", "Site_Software", "Site_Software_*", "Stats_AWStats", "WHMCS_billing", "add_a_dns_zone", "add_an_a_entry_for_your_hostname", "add_a_new_ip_address", "add_a_package", "additional_mysql_access_hosts", "add_remove_recognized_ip_addresses", "apache_configuration", "apache_mod_userdir_tweak", "apache_status", "api_shell", "api_tokens", "apps_managed_by_appconfig", "assign_ipv6_address", "background_process_killer", "backup_configuration", "backup_restoration", "backup_system_migration", "backup_user_selection", "basic_webhost_manager_setup", "blocker", "change_account_contact_email", "change_hostname", "change_log", "change_multiple_sites_ip_addresses", "change_mysql_user_password", "change_ownership_of_an_account", "change_ownership_of_multiple_accounts", "change_root_password", "change_sites_ip_address", "cloudlinux_lve_manager", "compiler_access", "configuration_cluster", "configure_application_locales", "configure_cpanel_analytics", "configure_cpanel_cron_jobs", "configure_postgresql", "configure_remote_service_ips", "configure_security_policies", "contact_manager", "convert_addon_domain_to_account", "copy_a_locale", "copy_an_account_from_another_server_with_an_account_password", "cpanel_development_forum", "cpanel_log_rotation_configuration", "cpanel_plugin_file_generator", "cpanel_web_disk_configuration", "cpanel_web_services_configuration", "cphulk_brute_force_protection", "create_a_new_account", "create_support_ticket", "customization", "daily_process_log", "database_map_tool", "delete_a_dns_zone", "delete_a_locale", "delete_a_package", "directoryindex_priority", "dns_cluster", "dns_server", "easyapache_4", "edit_a_locale", "edit_a_package", "edit_backup_mx_hosts", "edit_blacklisted_smtp_ips", "edit_dns_zone", "edit_mx_entry", "edit_only_verify_recipient_smtp_hosts", "edit_questions_and_answers", "edit_reseller_name_servers_and_privileges", "edit_sender_verification_bypass_ips", "edit_system_mail_preferences", "edit_trusted_smtp_ips", "edit_zone_templates", "email_all_resellers", "email_all_users", "email_deliverability", "enable_dkim_and_spf_globally", "exim_configuration_manager", "feature_manager", "file_and_directory_restoration", "forceful_server_reboot", "force_password_change", "ftp_server_configuration", "ftp_server_proftpd_pureftpd", "ftp_server_selection", "generate_an_ssl_certificate_and_signing_request", "global_configuration", "graceful_server_reboot", "grant_cpanel_support_access", "greylisting", "host_access_control", "http_server_apache", "ico-security-advisor", "imap_server", "include_editor", "initial_quota_setup", "install_an_rpm", "install_an_ssl_certificate_on_a_domain", "install_a_perl_module", "install_a_perl_module_process", "ip_migration_wizard", "ipv6_ranges", "legacy_backup_configuration", "legacy_language_file_upload", "legacy_restore_backups", "legacy_restore_multiple_backups", "legacy_restore_multiple_backups_confirmation", "limit_bandwidth_usage", "list_accounts", "list_parked_domains", "list_subdomains", "list_suspended_accounts", "locale_editor", "locale_xml_download", "locale_xml_upload", "log_rotation", "mailbox_conversion", "mail_delivery_reports", "mailing_list_manager_mailman", "mail_queue_manager", "mailserver_configuration", "mail_server_exim", "mail_troubleshooter", "manage_account_suspension", "manage_autossl", "manage_compiler_group", "manage_custom_rbls", "manage_databases", "manage_database_users", "manage_demo_mode", "manage_external_authentication", "manage_external_authentication_providers", "manage_external_authentication_users", "manage_hooks", "manage_mysql_profiles", "manage_plugins", "manage_resellers_ip_delegation", "manage_resellers_shared_ip", "manage_roots_ssh_keys", "manage_services_ssl_certificates", "manage_shell_access", "manage_ssl_hosts", "manage_wheel_group_users", "market_provider_manager", "memory_usage_restrictions", "modify_an_account", "modify_cpanel_whm_news", "modify_upgrade_multiple_accounts", "modsecurity_configuration", "modsecurity_tools", "modsecurity_vendors", "module_installers", "multiphp_ini_editor", "multiphp_manager", "mysql_mariadb_upgrade", "mysql_root_password", "nameserver_record_report", "nameserver_selection", "non_standard_locale_configuration", "park_a_domain", "password_modification", "password_strength_configuration", "perform_a_dns_cleanup", "php_fpm_service_for_apache", "phpMyAdmin", "piped_log_configuration", "process_manager", "purchase_and_install_an_ssl_certificate", "quota_modification", "raw_apache_log_download", "raw_ftp_log_download", "rearrange_an_account", "rebuild_rpm_database", "rebuild_the_ip_address_pool", "remote_access_key", "repair_a_mysql_database", "repair_mailbox_permissions", "reseller_center", "reserved_ips_editor", "reset_account_bandwidth_limit", "reset_a_dns_zone", "reset_a_mailman_password", "reset_resellers", "resolver_configuration", "restore_a_full_backup_cpmove_file", "restore_modules_summary", "review_transfers_and_restores", "security_questions", "server_information", "server_profile", "server_time", "service_manager", "service_status", "setup_edit_domain_forwarding", "set_zone_time_to_live_ttl", "shell_fork_bomb_protection", "show_accounts_over_quota", "show_current_disk_usage", "show_current_running_processes", "show_edit_reserved_ips", "show_ip_address_usage", "show_mysql_processes", "show_or_delete_current_ip_addresses", "show_reseller_accounts", "skeleton_directory", "smtp_restrictions", "software_development_kit", "spamd_startup_configuration", "sql_server_mysql", "sql_server_pgsql", "ssh_password_authorization_tweak", "ssh_server_openssh", "ssl_storage_manager", "statistics_software_configuration", "support_center", "synchronize_dns_records", "system_update", "task_queue_monitor", "terminal", "terminate_accounts", "theme_manager", "traceroute_enable_disable", "transfer_tool", "tweak_settings", "two_factor_authentication", "unsuspend_bandwidth_exceeders", "update_database_map", "update_database_map_process", "update_preferences", "update_server_software", "upgrade_downgrade_an_account", "upgrade_to_latest_version", "view_available_locales", "view_bandwidth_usage", "view_mail_statistics_summary", "view_relayers", "view_reseller_usage_and_manage_account_status", "view_sent_summary", "web_template_editor"

  - `cp_security_token` (string)
    The session's security token.
    Example: "cpsess1234567890"

  - `locale` (string)
    The session's locale. This parameter defaults to the Server Locale setting in WHM's
Tweak Settings
interface (WHM >> Home >> Server Configuration >> Tweak Settings).

Note:

* If you specify a locale, the server sends a cookie to your browser with
that locale setting. The cookie expires after one year.
* Users can change the locale with the language options at the bottom of
the login interface.
    Example: "fr"

  - `preferred_domain` (string)
    The hostname or IP address for the function to use in the url
return. This parameter's value defaults to the server's hostname.
    Example: "example.com"

  - `promptToken` (string)
    The prompt token to pre-populate the user's website-generation goals
when logging into the Nova interface.

Note:

* This value must be base64-encoded.
* Maximum decoded length is 5000 characters.
    Example: "SSB3YW50IHRvIGNyZWF0ZSBhIHJlc3RhdXJhbnQgd2Vic2l0ZQ=="

## Response 200 fields (application/json):

  - `data` (object)

  - `data.cp_security_token` (string)
    The session's security token.
    Example: "/cpsess1234567890"

  - `data.expires` (integer)
    When the security token expires, in Unix time format.
    Example: 1401993893

  - `data.service` (string)
    The security token's service.
    Example: "cpaneld"

  - `data.session` (string)
    The session ID.

Note:

If the app parameter contains a valid application, the URL also
contains the application information.
    Example: "username:RFw6MUp9S8sRwTSgqaUJWUCq8ZQg2Zkopx5KaTHRNQXBfT3n8xvfBEF9JJC3iiwa"

  - `data.url` (string)
    The security token's URL. The URL contains the values of
the preferred_domain, session, and app parameters.
    Example: "https://example.com:2083/cpsess1234567890/login/?session=username:RFw6MUp9S8sRwTSgqaUJWUCq8ZQg2Zkopx5KaTHRNQXBfT3n8xvfBEF9JJC3iiwa&locale=fr"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "create_user_session"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "Created session"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


