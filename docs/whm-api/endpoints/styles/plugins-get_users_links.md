# Return cPanel account theme's app keys and URLs

This function returns a list of
application keys
(appkeys) and the URLs that correspond to applications for the cPanel user's theme.
Use the appkey values for the app parameter's value in the WHM API 1 create_user_session
function.

Endpoint: GET /get_users_links
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `user` (string, required)
    The requested user's username.
    Example: "user"

  - `service` (string)
    The interface for which to filter results:

* cpanel — cPanel
* webmail — Webmail
    Enum: "cpaneld", "webmail"

## Response 200 fields (application/json):

  - `data` (object)
    A list of appkeys and their corresponding file locations.
    Example: {"Backups_Home":"frontend/jupiter/backup/index.html","Calendar_Configure":"frontend/jupiter/mail/calendars_and_contacts/index.html","ContactInfo_Change":"frontend/jupiter/contact/index.html","Cron_Home":"frontend/jupiter/cron/index.html","Database_MySQL":"frontend/jupiter/sql/index.html","Database_phpMyAdmin":"frontend/jupiter/sql/PhpMyAdmin.html","Email_AccountLevelFiltering":"frontend/jupiter/mail/filters/userfilters.html","Email_Accounts":"frontend/jupiter/mail/pops/index.html","Email_Archive":"frontend/jupiter/mail/archive.html","Email_Authentication":"frontend/jupiter/mail/auth.html","Email_AutoResponders":"frontend/jupiter/mail/autores.html","Email_BoxTrapper":"frontend/jupiter/mail/boxtrapper.html","Email_DefaultAddress":"frontend/jupiter/mail/def.html","Email_DeliveryReport":"frontend/jupiter/mail/def.html","Email_Disk_Usage":"frontend/jupiter/mail/manage_disk_usage/","Email_Forwarders":"frontend/jupiter/mail/fwds.html","Email_GreyListing":"frontend/jupiter/mail/greylisting/index.html","Email_MailingLists":"frontend/jupiter/mail/lists.html","Email_Routing":"frontend/jupiter/mail/email_routing.html","Email_SpamFilter":"frontend/jupiter/mail/spam/spam.html","Email_UserLevelFiltering":"frontend/jupiter/mail/filters/managefilters.html","FileManager_Home":"frontend/jupiter/filemanager/index.html","Locale_Change":"frontend/jupiter/setlang/index.html","Password_Change":"frontend/jupiter/passwd/index.html","SSL_TLS_Manager":"frontend/jupiter/ssl/index.html","SSL_TLS_Status":"frontend/jupiter/security/tls_status/","SSL_TLS_Wizard":"frontend/jupiter/security/tls_wizard/","Solr_Disk_Usage":"frontend/jupiter/mail/search_index/","Stats_AWStats":"frontend/jupiter/stats/awstats_landing.html"}

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_users_links"

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


