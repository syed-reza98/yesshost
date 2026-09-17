# Return server's node profile

This function returns details about the server's current
cPanel & WHM server profile.

Endpoint: GET /get_current_profile
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.code` (string)
    The code ID of the current profile.
    Example: "MAILNODE"

  - `data.description` (string)
    A description about the current profile.
    Example: "This profile provides only services and cPanel features that allow the system to serve mail."

  - `data.disabled_roles` (array)
    The disabled roles of the current profile.
    Example: [{"description":"FTP allows users to manage the files associated with their site with an FTP client.","module":"FTP","name":"FTP"},{"description":"File Storage allows users to access the File Manager and Git™ Version Control features.","module":"FileStorage","name":"File Storage"},{"description":"MySQL®/MariaDB allows users to create and manage MySQL/MariaDB databases.","module":"MySQL","name":"MySQL/MariaDB"},{"description":"PostgreSQL allows users to create and manage PostgreSQL databases.","module":"Postgres","name":"PostgreSQL"},{"description":"Web Disk allows users to manage and manipulate files on the server with multiple types of devices.","module":"WebDisk","name":"Web Disk"},{"description":"Web Server allows users to create and manage websites for their domains.","module":"WebServer","name":"Web Server"}]

  - `data.disabled_roles.description` (string)
    The role's description.

  - `data.disabled_roles.module` (string)
    The role's module name.

  - `data.disabled_roles.name` (string)
    The role's name.

  - `data.enabled_roles` (array)
    The current profile's enabled roles.
    Example: [{"description":"Calendars and Contacts provides CalDAV and CardDAV services.","module":"CalendarContact","name":"Calendars and Contacts"},{"description":"Receive Mail allows users to receive email, as well as create and manage their email accounts.","module":"MailReceive","name":"Receive Mail"},{"description":"Send Mail allows users to send email.","module":"MailSend","name":"Send Mail"},{"description":"Local Mail allows the system to process email.","module":"MailLocal","name":"Local Mail"},{"description":"Webmail provides access to webmail services.","module":"Webmail","name":"Webmail"}]

  - `data.enabled_roles.description` (string)
    The role's description.

  - `data.enabled_roles.module` (string)
    The role's module name.

  - `data.enabled_roles.name` (string)
    The role's name.

  - `data.experimental` (integer)
    Whether the profile is experimental.

* 1 — Experimental.
* 0 — Not experimental.

Important:

We do not recommend using experimental profiles on production environments.
    Enum: 1, 0

  - `data.name` (string)
    The name of the system's current server profile.
    Example: "Mail"

  - `data.optional_roles` (array)
    The optional roles of the current server profile.
    Example: [{"description":"DNS allows users to create and edit Domain Name System zone files.","module":"DNS","name":"DNS"},{"description":"Spam Filter allows users to use Apache SpamAssassin™ to identify, sort, and delete unsolicited mail.","module":"SpamFilter","name":"Spam Filter"}]

  - `data.optional_roles.description` (string)
    The role's description.

  - `data.optional_roles.module` (string)
    The role's module name.

  - `data.optional_roles.name` (string)
    The role's name.

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_current_profile"

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


