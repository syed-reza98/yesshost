# Return third-party software versions

This function lists the versions of third-party software that ship with cPanel & WHM.

Endpoint: GET /installed_versions
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `packages` (integer)
    Whether to list the server's installed RPMs in the function's
cpanel_packages, ea_4_packages, and os_packages arrays.

* 1 - List.
* 0 - Do not list.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `data` (object)
    Example: {"apache":"2.4.12","apache_php_default_version":0,"apache_php_versions":[0],"bind":"9.9.4-29","clamav":"0.99.2-1","cpanel_and_whm":"11.64.0.9999","cpanel_packages":["cpanel-ace-editor-1.2.6-1.cp1166.noarch","cpanel-yui-2.9.0-5.cp1136.noarch"],"cpanel_php":"7.2.7-4","cron":0,"cronie":"1.4.11-23","dovecot":"2.2.31 (65cde28)","ea_4_packages":[],"easyapache":"4","exim":"4.89-2","linux_kernel":"3.10.0-327.18.2.el7.x86_64","mailman":"2.1.23-9","mariadb":0,"mariadb_build":0,"munin":0,"mysql":"5.7.61","mysql_build":"5.7.61-1","nscd":"2.17-222","openssh-server":"7.4p1-21","operating_system_name":"centos","operating_system_version":"7.2","os_packages":["ImageMagick-6.7.8.9-15.el7_2.x86_64","zsh-5.0.2-14.el7.x86_64"],"p0f":"3.09b-1","postgresql":0,"postgresql_build":0,"powerdns":0,"proftpd":0,"pureftpd":"1.0.45","roundcube":"1.2.4-1","rsyslog":"8.24.0-16","spamd":"3.4.2","squirrelmail":0}

  - `data.apache` (any)
    The Apache® version.

* 0 - Apache is not installed on the server.
    Example: "2.4.12"

  - `data.apache_php_default_version` (any)
    The default PHP version for Apache.

* 0 - PHP for Apache is not installed on the server.
    Example: "7.3.21-1.1.1"

  - `data.apache_php_versions` (array)
    An array of PHP versions that the system installs for Apache.

If PHP for Apache is not installed, this will return an array containing 0.

Note:

Unlike other keys in this object, this returns a [0] value when PHP for Apache is not installed.
    Example: [0]

  - `data.bind` (any)
    The BIND version.

* 0 - BIND is not installed on the server.
    Example: "9.9.4-29"

  - `data.clamav` (any)
    The ClamAV version.

* 0 - ClamAV is not installed on the server.
    Example: "0.99.2-1"

  - `data.cpanel_and_whm` (string)
    The cPanel & WHM version.
    Example: "11.64.0.9999"

  - `data.cpanel_packages` (array)
    An array of cPanel-provided RPMs.

Note:

The function only returns this array if you set the packages parameter to 1.
    Example: ["cpanel-ace-editor-1.2.6-1.cp1166.noarch","cpanel-yui-2.9.0-5.cp1136.noarch"]

  - `data.cpanel_php` (any)
    The system PHP version.

* 0 - System PHP is not installed on the server.
    Example: "7.2.7-4"

  - `data.cron` (any)
    The version of the ISC / Vixie cron daemon. This is the default cron service installed on Ubuntu.

* 0 - ISC / Vixie cron is not installed on the server.
    Example: "3.0pl1-136ubuntu1"

  - `data.cronie` (any)
    The version of the cronie cron daemon. This is the default cron service installed on CentOS, CloudLinux, AlmaLinux, and other systems running derivatives of Red Hat Enterprise Linux.

* 0 - cronie is not installed on the server.
    Example: "1.4.11-23"

  - `data.dovecot` (any)
    The Dovecot version.

* 0 - Dovecot is not installed on the server.
    Example: "2.2.31 (65cde28)"

  - `data.ea_4_packages` (array)
    An array of EasyApache 4 (EA4)-provided RPMs.

Note:

The function only returns this array if you set the packages parameter to 1.
    Example: []

  - `data.easyapache` (any)
    The EasyApache version.

* 0 - EasyApache is not installed on the server.
    Example: "4"

  - `data.exim` (any)
    The Exim version.

* 0 - Exim is not installed on the server.
    Example: "4.89-2"

  - `data.linux_kernel` (string)
    The Linux® kernel version.
    Example: "3.10.0-327.18.2.el7.x86_64"

  - `data.mailman` (any)
    The Mailman version.

* 0 - Mailman is not installed on the server.
    Example: "2.1.23-9"

  - `data.mariadb` (any)
    The MariaDB® version number.

* 0 - MariaDB is not installed on the server.
    Example: "5.5.65"

  - `data.mariadb_build` (any)
    The MariaDB RPM's version number.

* 0 - MariaDB RPM's is not installed on the server.
    Example: "5.5.65-1"

  - `data.munin` (any)
    The Munin version.

* 0 - Munin is not installed on the server.
    Example: "2.0.30"

  - `data.mysql` (any)
    The MySQL® version number.

* 0 - MySQL is not installed on the server.
    Example: "5.7.61"

  - `data.mysql_build` (any)
    The MySQL RPM's version number.

* 0 - MySQL RPM's is not installed on the server.
    Example: "5.7.61-1"

  - `data.nscd` (any)
    The Name Service Cache Daemon version number.

* 0 - Name Service Cache Daemon is not installed on the server.
    Example: "2.17-222"

  - `data.openssh-server` (any)
    The OpenSSH version.

* 0 - OpenSSH is not installed on the server.
    Example: "7.4p1-21"

  - `data.operating_system_name` (string)
    The server's operating system (OS).
    Example: "centos"

  - `data.operating_system_version` (string)
    The version of the server's OS.
    Example: "7.2"

  - `data.os_packages` (array)
    An array of OS-provided RPMs.

Note:

 The function only returns this array if you set the packages parameter to 1.
    Example: ["ImageMagick-6.7.8.9-15.el7_2.x86_64","zsh-5.0.2-14.el7.x86_64"]

  - `data.p0f` (any)
    The Passive OS Fingerprinting version number.

* 0 - Passive OS Fingerprinting is not installed on the server.
    Example: "3.09b-1"

  - `data.postgresql` (any)
    The PostgreSQL® version.

* 0 - PostgreSQL is not installed on the server.
    Example: "9.2"

  - `data.postgresql_build` (any)
    The PostgreSQL RPM's version number.

* 0 - PostgreSQL RPM's is not installed on the server.
    Example: "0"

  - `data.powerdns` (any)
    The PowerDNS version.

* 0 - PowerDNS is not installed on the server.
    Example: "4.1.10-15"

  - `data.proftpd` (any)
    The ProFTP version.

* 0 - ProFTP is not installed on the server.
    Example: "1.3.7d"

  - `data.pureftpd` (any)
    The Pure-FTPd version.

* 0 - Pure-FTPd is not installed on the server.
    Example: "1.0.45"

  - `data.roundcube` (any)
    The Roundcube version.

* 0 - Roundcube is not installed on the server.
    Example: "1.2.4-1"

  - `data.rsyslog` (any)
    The Rsyslog version number.

* 0 - Rsyslog is not installed on the server.
    Example: "8.24.0-16"

  - `data.spamd` (any)
    The Apache SpamAssassin™ version number.

* 0 - Apache SpamAssassin is not installed on the server.
    Example: "3.4.2"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "installed_versions"

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


