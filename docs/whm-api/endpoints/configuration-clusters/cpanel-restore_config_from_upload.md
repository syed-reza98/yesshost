# Update configuration file from backup via POST

This function restores a configuration backup file via HTTP POST
method. If the backup file does not contain any changes, the system does not write to the configuration file.

Note:

The format for this command line example differs from our standard format because the function only accepts an HTTP POST request. For more information about how to call this request method, read Mozilla's POST documentation.

Endpoint: POST /restore_config_from_upload
Version: 11.138.0.6
Security: BasicAuth

## Request fields (multipart/form-data):

  - `file` (string, required)
    The configuration file data, in multipart/form-data format.

Note:

When you call this function on the command line, you must provide the configuration file's filepath. For example, you would use the 'file=@/var/cpanel/cpanel.config' parameter structure to call this function.
    Example: "#### NOTICE ####\n# After manually editing any configuration settings in this file,\n# please run '/usr/local/cpanel/scripts/restartsrv_cpsrvd' or\n# 'service cpanel restart' to fully update your server's configuration.\nRS=jupiter\nVFILTERDIR=/etc/vfilters\naccess_log=/usr/local/cpanel/logs/access_log\naccount_login_access=owner_root\nadminuser=cpanel\nallow_deprecated_accesshash=0\nallow_login_autocomplete=1\nallow_server_info_status_from=\nallow_weak_checksums=0\nallowcpsslinstall=1\nallowparkhostnamedomainsubdomains=0\nallowparkonothers=0\nallowremotedomains=0\nallowresellershostnamedomainsubdomains=0\nallowunregistereddomains=1\nallowwhmparkonothers=0\nalwaysredirecttossl=1\napache_port=0.0.0.0:80\napache_ssl_port=0.0.0.0:443\napi_shell=1\nautocreateaentries=1\nautodiscover_host=cpanelemaildiscovery.cpanel.net\nautodiscover_mail_service=imap\nautodiscover_proxy_subdomains=0\nautoupdate_certificate_on_hostname_mismatch=1\nawstatsbrowserupdate=0\nawstatsreversedns=0\nbasename=cpanel\nbind_deferred_restart_time=2\nblockcommondomains=1\nbwcycle=2\ncgihidepass=1\ncheck_zone_owner=1\ncheck_zone_syntax=1\nchkservd_check_interval=300\nchkservd_hang_allowed_intervals=2\nchkservd_plaintext_notify=0\ncluster_autodisable_threshold=10\ncluster_failure_notifications=1\nconserve_memory=0\ncookieipvalidation=strict\ncoredump=0\ncpanel_locale=\ncpredirect=Origin Domain Name\ncpredirectssl=SSL Certificate Name\ncpsrvd-domainlookup=0\ncreate_account_dkim=1\ncreate_account_spf=1\ncycle_hours=24\ndatabase_prefix=1\ndebughooks=0\ndefault_archive-logs=1\ndefault_login_theme=cpanel\ndefault_pkg_bwlimit=1048576\ndefault_pkg_max_emailacct_quota=1024\ndefault_pkg_quota=10240\ndefault_remove-old-archived-logs=1\ndefaultmailaction=localuser\ndisable-php-as-reseller-security=0\ndisablequotacache=0\ndisk_usage_include_mailman=1\ndisk_usage_include_sqldbs=1\ndisplay_cpanel_doclinks=0\ndnsadmin_log=0\ndnsadmin_verbose_sync=0\ndnsadminapp\ndnslookuponconnect=0\ndocroot=/usr/local/cpanel/base\ndomainowner_mail_pass=0\ndormant_services=cpdavd,cphulkd,cpsrvd,dnsadmin,spamd\ndumplogs=1\nemail_account_quota_default_selected=userdefined\nemail_account_quota_userdefined_default_value=1024\nemail_outbound_spam_detect_action=noaction\nemail_outbound_spam_detect_enable=1\nemail_outbound_spam_detect_threshold=500\nemail_send_limits_count_mailman=0\nemail_send_limits_defer_cutoff=125\nemail_send_limits_max_defer_fail_percentage\nemail_send_limits_min_defer_fail_to_trigger_protection=5\nemailarchive=0\nemailpasswords=0\nemailsperdaynotify\nemailusers_diskusage_critical_contact_admin=1\nemailusers_diskusage_critical_percent=90.0000\nemailusers_diskusage_full_contact_admin=1\nemailusers_diskusage_full_percent=98.0000\nemailusers_diskusage_warn_contact_admin=0\nemailusers_diskusage_warn_percent=80.0000\nemailusers_mailbox_critical_percent=90.0000\nemailusers_mailbox_full_percent=98.0000\nemailusers_mailbox_warn_percent=80.0000\nemailusersbandwidthexceed=0\nemailusersbandwidthexceed70=0\nemailusersbandwidthexceed75=0\nemailusersbandwidthexceed80=1\nemailusersbandwidthexceed85=0\nemailusersbandwidthexceed90=0\nemailusersbandwidthexceed95=0\nemailusersbandwidthexceed97=0\nemailusersbandwidthexceed98=0\nemailusersbandwidthexceed99=0\nempty_trash_days=disabled\nenable_piped_logs=1\nenablecompileroptimizations=0\nenablefileprotect=1\nengine=cpanel\nenginepl=cpanel.pl\nengineroot=/usr/local/cpanel\nexim-retrytime=15\nexim_retention_days=10\neximmailtrap=1\nextracpus=0\nfile_upload_max_bytes\nfile_upload_must_leave_bytes=5\nfile_usage=0\nftpquotacheck_expire_time=30\nftpserver=pure-ftpd\ngzip_compression_level=6\ngzip_pigz_block_size=4096\ngzip_pigz_processes=1\nhtaccess_check_recurse=2\nhttpd_deferred_restart_time=0\ninvite_sub=1\nionice_bandwidth_processing=6\nionice_cpbackup=6\nionice_dovecot_maintenance=7\nionice_email_archive_maintenance=7\nionice_ftpquotacheck=6\nionice_log_processing=7\nionice_quotacheck=6\nionice_userbackup=7\nionice_userproc=6\nipv6_control=0\nipv6_listen=0\njailapache=0\njaildefaultshell=0\njailmountbinsuid=0\njailmountusrbinsuid=0\njailprocmode=mount_proc_jailed_fallback_full\nkeepftplogs=0\nkeeplogs=0\nkeepstatslog=0\nloadthreshold\nlocal_nameserver_type=bind\nlog_successful_logins=0\nlogchmod=0640\nlogout_redirect_url=\nmailbox_storage_format=maildir\nmailserver=dovecot\nmaintenance_rpm_version_check=1\nmaintenance_rpm_version_digest_check=1\nmaxcpsrvdconnections=200\nmaxemailsperhour\nmaxmem=768\nmin_time_between_apache_graceful_restarts=10\nminpwstrength=0\nmodsec_keep_hits=7\nmycnf_auto_adjust_innodb_buffer_pool_size=0\nmycnf_auto_adjust_maxallowedpacket=1\nmycnf_auto_adjust_openfiles_limit=1\nmyname=cpaneld\nmysql-host=localhost\nmysql-version=5.5\nmysqldebug=0\nnobodyspam=1\nnocpbackuplogs=0\nnosendlangupdates=0\nnotify_expiring_certificates=1\nnumacctlist=30\noverwritecustomproxysubdomains=0\noverwritecustomsrvrecords=0\npermit_appconfig_entries_without_acls=0\npermit_appconfig_entries_without_features=0\npermit_unregistered_apps_as_reseller=0\npermit_unregistered_apps_as_root=0\nphp_max_execution_time=90\nphp_memory_limit=128\nphp_post_max_size=55\nphp_system_default_version=ea-php56\nphp_upload_max_filesize=50\nphploader=\nphpopenbasedirhome=0\npma_disableis=0\npopbeforesmtp=0\npopbeforesmtpsenders=0\npostgresdebug=0\nproduct=cPanel\nproxysubdomains=1\nproxysubdomainsfornewaccounts=1\nproxysubdomainsoverride=1\npublichtmlsubsonly=1\nquery_apache_for_nobody_senders=1\nreferrerblanksafety=0\nreferrersafety=0\nremotewhmtimeout=35\nrepquota_timeout=60\nrequiressl=0\nresetpass=1\nresetpass_sub=1\nroot=/usr/local/cpanel\nrotatelogs_size_threshhold_in_megabytes=300\nroundcube_db=sqlite\nrpmup_allow_kernel=0\nselfsigned_generation_for_bestavailable_ssl_install=1\nsend_error_reports=1\nsend_server_configuration=1\nsend_server_usage=1\nserver_locale=en\nshow_reboot_banner=1\nshowwhmbwusageinmegs=0\nsignature_validation=Release and Development Keyrings\nskip_chkservd_recovery_notify=0\nskipanalog=0\nskipapacheclientsoptimizer=0\nskipawstats=0\nskipboxcheck=1\nskipboxtrapper=0\nskipbwlimitcheck=0\nskipchkservd=0\nskipcpbandwd=0\nskipdiskcheck=0\nskipdiskusage=0\nskipeximstats=0\nskiphttpauth=1\nskipjailmanager=0\nskipmailauthoptimizer=0\nskipmailman=0\nskipmodseclog=0\nskipnotifyacctbackupfailure=0\nskipoomcheck=0\nskipparentcheck=1\nskiprecentauthedmailiptracker=0\nskiproundcube=0\nskipspamassassin=0\nskipspambox=1\nskipsqmail=0\nskiptailwatchd=0\nskipwebalizer=0\nsmtpmailgidonly=1\nssh_host_key_checking=0\nstats_log=/usr/local/cpanel/logs/stats_log\nstatsloglevel=1\nstatthreshhold=256\nsystem_diskusage_critical_percent=92.5500\nsystem_diskusage_warn_percent=82.5500\ntcp_check_failure_threshold=3\ntransfers_timeout=1800\ntweak_unset_vars=\nupcp_log_retention_days=45\nupdate_log_analysis_retention_length=90\nuse_apache_md5_for_htaccess=1\nuse_information_schema=1\nuseauthnameservers=1\nusemailformailmanurl=0\nusemysqloldpass=0\nuserdirprotect=1\nversion=3.4\nxframecpsrvd=0\nenable_api_log=0"

  - `module` (string, required)
    The configuration module's name.

* Basic — The [Basic WebHost Manager Setup](https://go.cpanel.net/whmdocsBasicasisWebHostManagerSetup) configuration.
* Main — The [Tweak Settings](https://go.cpanel.net/whmdocsTweakSettings) configuration.

Important:

This parameter is case-sensitive. You must enter the parameter in the correct case format; otherwise, the function will fail.
    Enum: "Basic", "Main"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "restore_config_from_upload"

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


