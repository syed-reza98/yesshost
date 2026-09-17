# System Information

The Server Administration module for WHM API 1.

## Return server's drive partition information

 - [GET /getdiskusage](https://api.docs.cpanel.net/specifications/whm.openapi/system-information/sys-getdiskusage.md): This function retrieves the server's drive partition information.

## Return server's hostname

 - [GET /gethostname](https://api.docs.cpanel.net/specifications/whm.openapi/system-information/sys-gethostname.md): This function retrieves the server's hostname.

## Restart server

 - [GET /reboot](https://api.docs.cpanel.net/specifications/whm.openapi/system-information/sys-reboot.md): This function reboots the server.

## Update server's primary virtual host

 - [GET /set_primary_servername](https://api.docs.cpanel.net/specifications/whm.openapi/system-information/httpd-set_primary_servername.md): This function sets the primary domain hosted on an IP address and web server port. The primary domain refers to the virtual host that the server returns when a visitor directly accesses the IP address.

For example, if both example1.com and example2.com are name-based virtual hosts on IP address 192.168.0.1, the primary virtual host appears when the visitor accesses the http://192.168.0.1/ location.

Important:

When you disable the Web Server role, the system disables this function.

## Update server's hostname

 - [GET /sethostname](https://api.docs.cpanel.net/specifications/whm.openapi/system-information/hostname-sethostname.md): This function changes the server's hostname.

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

## Return whether system needs reboot

 - [GET /system_needs_reboot](https://api.docs.cpanel.net/specifications/whm.openapi/system-information/applicationversions-system_needs_reboot.md): This function determines if your system requires a reboot to apply quotas, software package updates, or kernel updates.

Important:

This function cannot detect whether your system needs a reboot if you use cPanel & WHM inside of a Linux Container (LXC).

## Return system load average

 - [GET /systemloadavg](https://api.docs.cpanel.net/specifications/whm.openapi/system-information/cpanel-systemloadavg.md): This function retrieves the system's load average.

Note:

The values the function returns represent a percentage of the CPU's processor capacity.

## Return server's hostname

 - [GET /wp_dashboard_get_hostname](https://api.docs.cpanel.net/specifications/whm.openapi/system-information/wpdashboard-wp_dashboard_get_hostname.md): This function retrieves the server's hostname. WebPros Dashboard uses this function to discover the WHM API endpoint.

