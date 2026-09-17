# Restore account backup

This function restores an account backup. You can use this function to restore daily,
weekly, or monthly backups.

Important:

* When you call this function, you must include at least one of
the all, mail, subs, or mysql parameters.

* On servers with a custom Whostmgr::Transfers module, the function may not return XML
output. To properly return XML output, the Whostmgr::Transfers module must allow
the system to use the Cpanel::Demultiplexer module to capture output.

Note:

On servers that run CentOS 7, you may see a named warning about the absence of SPF
resource records on DNS.

* This warning is not relevant on CentOS 7 servers, because
RFC 7208 deprecated SPF records.
CentOS 7 servers use TXT records instead of SPF records.

* Red Hat 7.1 and CentOS 7.1 both contain bind-9.9.4-23.el7, which is an updated
version of BIND that complies with RFC 7208. To resolve this issue, update your
operating system to a version that contains the updated version of BIND. For more
information, read the
Red Hat Bugzilla case about SPF record errors.

Endpoint: GET /restoreaccount
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `type` (string, required)
    The type of backup to restore. The function restores the most recent backup of
the type that you specify:

* monthly
* weekly
* daily
    Enum: "monthly", "weekly", "daily"

  - `user` (string, required)
    The account's username.
    Example: "username"

  - `all` (integer)
    Whether to create the account before restoration.

* 1 — Create and then restore the account. If you select this value and the
account already exists, the function will fail.
* 0 — Restore only.
    Enum: 0, 1

  - `ip` (integer)
    Whether to assign a dedicated IP address to the restored account.

* 1 — Assign a dedicated IP address.
* 0 — Use the shared IP address.
    Enum: 0, 1

  - `mail` (integer)
    Whether to restore account-level filters (vfilters) and forwarders
(valiases).

* 1 — Restore.
* 0 — Do not restore.
    Enum: 0, 1

  - `mysql` (integer)
    Whether to restore the account's MySQL® databases.

* 1 — Restore.
* 0 — Do not restore.
    Enum: 0, 1

  - `subs` (integer)
    Whether to restore the account's subdomains.

* 1 — Restore.
* 0 — Do not restore.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "restoreaccount"

  - `metadata.output` (object)

  - `metadata.output.raw` (string)
    An output message that may contain long HTML.
    Example: "Extracting tarball...................\nDone<br />\nExtracting Domain....Done<br />\nDone<br />\n<br /><br />Restoring cpanel user config fileDone<br />\n<br />Restoring reseller privs (if any)<br />Restoring Locale Setting<br />Restoring SSL keys and CertificatesDone<br />\n<br />Restoring frontpage (if installed)Done<br />\n<br />Restoring access logs....\nDone<br />\n<br /><br />Restoring domain keys....\nDone<br />\n<br /><br />Restoring DB MAP File....\nDone<br />\n<br /><br /><span class=\"b2\">Restoring PostgreSQL databases....</span>\nRestoring PostgreSQL privs<!--\n-->\nDone<br />\n<br />Restoring Mailman listsDone<br />\n<br />Restoring Mailman ArchivesDone<br />\n<br />Restoring shell<blockquote><pre>Current shell /bin/bash is up to date.\n</pre></blockquote>Done<br />\n<br />Restoring password<blockquote><pre></pre></blockquote>Done<br />\n<br />Restoring proftpd fileDone<br />\n<br />Resyncing FTP Passwords<blockquote><pre>Updating ftp passwords for userFtp password files updated.Ftp vhost passwords synced</pre></blockquote>Done<br />\n<br />Linking old home directories<br />Parsing Domain Databases...ParkedDomains......AddonDomains...<br />Restoring Domains<br />\n<br />Restoring Bandwidth DataDone\n<br />Restoring Counter Data<pre></pre><br />Restoring Homedir....<blockquote><pre></pre></blockquote>Done<br />\n<br />Doing fileprotect conversion<br />Restoring nobody owned filesDone<br />\n<br />Restoring Mail filesDone<br />\n<br />Restoring userdata....\nDone<br />\n<br /><br />Restoring custom virtualhost templates....\nConverting email to cPanel 5+ (if needed)<blockquote><pre></pre></blockquote>Done<br />\n<br />Cleaning up filters (if needed)<blockquote><pre>vfilter converter v3.0Updating vfilter files to latest format.Running for user only (force=0) (has_spam_acl=1)Processing user......Done</pre></blockquote>Done<br />\n<br />Fixing mail permissions<blockquote><pre></pre></blockquote>Done<br />\n<br />Restoring crontabDone<br />\nConverting to maildir if needed<blockquote><pre></pre></blockquote>Done<br />\nRestoring Dns Zones<blockquote><pre>Restoring zone: user.com.db\n</pre></blockquote><br />Adding missing subdomain DNS entries (if needed)<pre></pre><br />Update Proxy subomains<blockquote><pre>Adding proxy subdomains for domain example.com.Records Installed</pre></blockquote>Done<br />\n<br />Updating SPF Records<blockquote><pre></pre></blockquote>Done<br />\n<br />Restoring quota<blockquote><pre></pre></blockquote>Done<br />\n<br /><br />Update mail routing<blockquote><pre>LOCAL MAIL EXCHANGER: This server will serve as a primary mail exchanger for example.com's mail.: This configuration has been manually selected.\n</pre></blockquote>Done<br />\n<br />Rebuilding Apache Conf<br />Restore CompleteAccount Restore Complete\nUnlocking password for user user.passwd: Success.<br />"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


