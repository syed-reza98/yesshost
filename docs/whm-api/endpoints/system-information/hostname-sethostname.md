# Update server's hostname

This function changes the server's hostname.

Warning:

* Do not select a hostname that begins with www or a number, or a
hostname that ends with a hyphen (-) character.
* You must use a fully-qualified domain name (FQDN) that contains two periods
(for example, hostname.example.com).
* Do not choose a hostname that a cPanel account on your server will use.
* Do not choose a potential service subdomain (proxy subdomain) as a hostname
(for example, cpanel.example.com or whm.example.com).

Important:

If you update your hostname, the system blocks user access to cPanel's Calendars and Contacts interface (cPanel >> Home >> Email >> Calendars and Contacts).

The system restores access to this interface after the hostname update finishes.
For more information, read our
Interface Lock Scripts
documentation.

Note:

Whenever you change the server's hostname, you must use one of the following methods:
  * Use WHM's
  Change Hostname
  interface (WHM >> Home >> Networking Setup >> Change Hostname).
  * Call WHM API 1's sethostname function.
  * Run the
  /usr/local/cpanel/bin/set_hostname utility
  as the root user.
These methods ensure that all of the necessary system and service changes occur.

Endpoint: GET /sethostname
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `hostname` (string, required)
    The server's new hostname.

Important:

The server's hostname should never be identical to the domain name. For example,
if the domain is example.com, you could use a hostname such as server1.example.com,
but not example.com.
    Example: "hostname.example.com"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "sethostname"

  - `metadata.output` (object)
    A list of the function's output.

  - `metadata.output.messages` (string)
    Any of the function's output messages.
    Example: "Updating cPanel license...Done. Update succeeded."

  - `metadata.output.warnings` (string)
    Any of the function's warnings.
    Example: "The hostname was already set to hostname.example.com, syncing configuration only."

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "Stopping cPHulkd during hostname change\nService “cphulkd” is already stopped.<br />\n<br />\n<span class='cpanel_output_color_bold'>Startup Log</span><br />\n <span class='cpanel_output_indent'></span><span class='cpanel_output_color_bold cpanel_output_ color_bright_yellow cpanel_output_color_on_grey6'>Warning: Journal has been rotated since unit was started. Log output is incomplete or unavailable.</span><br />\n<br />\n<span class= 'cpanel_output_color_bold okmsg'>cphulkd stopped successfully.</span><br />\nStopping MySQL during hostname change\nChanging hostname in kernel to hostname.example.com\nAltered hostname in /etc/sysconfig/network\nUpdating cPHulkd\nStarting cPHulkd\n(XID qju5cf) The “cphulkd” service is not configured.\nRestarting Exim\nWaiting for “exim” to restart ………waiting for “exim” to initialize ………finished.<br />\n<br />\n<span class='cpanel_output_color_bold'>Service Status</span><br />\n<span class='cpanel_output_indent'></span>exim (/usr/sbin/exim -ps -bd -q1h -oP /var/spool/exim/exim-daemon.pid) is running as mailnull with PID 16943 (systemd+/proc check method).<br />\n<br />\n<span class='cpanel_output_color_bold'>Startup Log</span><br />\n <span class='cpanel_output_indent'></span>Jul 29 15:03:14 hostname.example.com systemd[1]: Starting Exim is a Mail Transport Agent, which is the program that moves mail from one machine to another....<br />\n<span class='cpanel_output_indent'></span>Jul 29 15:03:14 hostname. example.com systemd[1]: Can&#39;t open PID file /var/spool/exim/exim-daemon.pid (yet?) after start: No such file or directory<br />\n<span class='cpanel_output_indent'></span>Jul 29 15:03:14 hostname.example.com systemd[1]: Started Exim is a Mail Transport Agent, which is the program that moves mail from one machine to another..<br />\n<br />\n<span class='cpanel_output_ color_bold'>Log Messages</span><br />\n<span class='cpanel_output_indent'></span>2020-07-29 15:03:14 exim 4.93 daemon started: pid=16943, -q1h, listening for SMTP on port 25 (IPv6 and IPv4) port 587 (IPv6 and IPv4) and for SMTPS on port 465 (IPv6 and IPv4)<br />\n<span class='cpanel_ output_indent'></span>2020-07-29 14:57:20 exim 4.93 daemon started: pid=16089, -q1h, listening for SMTP on port 25 (IPv6 and IPv4) port 587 (IPv6 and IPv4) and for SMTPS on port 465 (IPv6 and IPv4)<br />\n<br />\n<span class='cpanel_output_color_bold okmsg'>exim restarted successfully.</span><br />\nUpdating Apache configuration\nUpdating cPanel license...Done. Update succeeded.\nA DNS record already exists for “hostname.example.com”.\nThe system has queued the hostname changes for the DAV services.\nUsers cannot access the DAV features that use these services until\nthe system has finished updates to the hostname. After the system adjusts a\nspecific user’s database, it restores their access to the DAV services.\n\nYou will receive a notification when the system completes the update for all users.\nWaiting for “mysql” to start ……waiting for “mysql” to initialize ………finished.<br />\n<br />\n<span class='cpanel_output_color_bold'>Service Status</span><br />\n<span class='cpanel_output_indent'></span>mysqld (/usr/sbin/mysqld --daemonize --pid-file= /var/run/mysqld/mysqld.pid) is running as mysql with PID 16886 (systemd+/proc check method). <br />\n<br />\n<span class='cpanel_output_color_bold'>Startup Log</span><br />\n<span class= 'cpanel_output_indent'></span>Jul 29 15:03:10 hostname.example.com systemd[1]: Starting MySQL Server...<br />\n<span class='cpanel_output_indent'></span>Jul 29 15:03:11 hostname.example.com systemd[1]: Started MySQL Server.<br />\n<br />\n<span class='cpanel_output_color_bold'>Log Messages</span><br />\n<span class='cpanel_output_indent'></span>2020-07-29T20:03:11.894935Z 0 [Note] /usr/sbin/mysqld: ready for connections.<br />\n<span class='cpanel_output_indent'> </span>2020-07-29T20:03:09.442015Z 0 [Note] /usr/sbin/mysqld: Shutdown complete<br />\n<span class='cpanel_output_indent'></span>2020-07-29T19:57:17.010586Z 0 [Note] /usr/sbin/mysqld: ready for connections.<br />\n<br />\n<span class='cpanel_output_color_bold okmsg'>mysql started successfully.</span><br />"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


