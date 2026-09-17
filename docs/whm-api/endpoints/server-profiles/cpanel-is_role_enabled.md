# Return whether server role is enabled

This function checks whether a specific server role is currently enabled
for the server.

For more information about server roles, read our How to Use Server Profiles documentation.

Endpoint: GET /is_role_enabled
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `role` (string, required)
    The role to check. The role must be one of the following case-sensitive values:

* CalendarContact - Allows users to access CalDAV and CardDAV services and features.
* DNS - Allows users to create and edit Domain Name System (DNS) zone files. This role doesn’t convert your server to a cPanel DNSOnly™ server.
* FileStorage - Allows users to access cPanel’s File Manager and Git™ Version Control features. When a profile disables this role, you can’t enable the Shell Access setting when you create a new cPanel account.

* FTP - Allows users to manage their account’s files with an FTP client.
* MailLocal - Allows the control of local mail delivery and related features.
* MailReceive - Allows users to receive mail from external sources.
* MailRelay - Allows the server’s Message Transfer Agent (MTA) to forward mail from one remote host to another.
* MailSend - Allows users to send mail and control the features necessary for sending mail.
* MySQL - Allows users to create and manage MySQL® or MariaDB databases.
* MySQLClient - This role checks whether the MySQL/MariaDB client access exists locally or remotely. You cannot directly enable or disable this role. The system enables or disables this role depending on the MySQL configuration.

* Postgres - Allows users to create and manage PostgreSQL databases if cPanel & WHM manages the server’s PostgreSQL.
* PostgresClient - This role checks whether the PostgreSQL client access exists locally.
* SpamFilter - Allows users to use Apache SpamAssassin™ to identify, sort, and delete unsolicited mail.
* WebDisk - Allows users to manage their account’s files with a WebDAV client.
* Webmail - Allows users to access webmail services and features.
* WebServer - Allows users to create and manage websites for their domains.
    Enum: "CalendarContact", "DNS", "FileStorage", "FTP", "MailLocal", "MailReceive", "MailRelay", "MailSend", "MySQL", "MySQLClient", "Postgres", "PostgresClient", "SpamFilter", "WebDisk", "Webmail", "WebServer"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.enabled` (integer)
    Whether a role is enabled or disabled.
* 1 - Enabled.
* 0 - Disabled.
    Enum: 1, 0

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "is_role_enabled"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed: Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


