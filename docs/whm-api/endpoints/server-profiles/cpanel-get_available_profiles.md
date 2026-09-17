# Return available server profiles

This function returns a list of available server profiles.

Endpoint: GET /get_available_profiles
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.profiles` (array)
    An array of objects that contains the available server profiles.
    Example: [{"code":"STANDARD","description":"The Standard Node profile provides all services and access to every cPanel feature.","enabled_roles":[{"description":"Calendars and Contacts provides CalDAV and CardDAV services.","module":"CalendarContact","name":"Calendars and Contacts"},{"description":"DNS allows users to create and edit Domain Name System zone files.","module":"DNS","name":"DNS"},{"description":"FTP allows users to manage the files associated with their site with an FTP client.","module":"FTP","name":"FTP"},{"description":"File Storage allows users to access the File Manager and Git™ Version Control features.","module":"FileStorage","name":"File Storage"},{"description":"Receive Mail allows users to receive email, as well as create and manage their email accounts.","module":"MailReceive","name":"Receive Mail"},{"description":"Send Mail allows users to send email.","module":"MailSend","name":"Send Mail"},{"description":"Local Mail allows the system to process email.","module":"MailLocal","name":"Local Mail"},{"description":"MySQL®/MariaDB allows users to create and manage MySQL/MariaDB databases.","module":"MySQL","name":"MySQL/MariaDB"},{"description":"PostgreSQL allows users to create and manage PostgreSQL databases.","module":"Postgres","name":"PostgreSQL"},{"description":"Spam Filter allows users to use Apache SpamAssassin™ to identify, sort, and delete unsolicited mail.","module":"SpamFilter","name":"Spam Filter"},{"description":"Webmail provides access to webmail services.","module":"Webmail","name":"Webmail"},{"description":"Web Disk allows users to manage and manipulate files on the server with multiple types of devices.","module":"WebDisk","name":"Web Disk"},{"description":"Web Server allows users to create and manage websites for their domains.","module":"WebServer","name":"Web Server"}],"experimental":0}]

  - `data.profiles.code` (string)
    The profile's ID.
    Example: "MAILNODE"

  - `data.profiles.description` (string)
    The profile's description.
    Example: "This profile provides only services and cPanel features that allow the system to serve mail."

  - `data.profiles.disabled_roles` (array)
    The roles that this profile disables. The function returns an empty array if no disabled roles exist.

  - `data.profiles.disabled_roles.description` (string)
    The role's description.
    Example: "File Storage allows users to access the File Manager and Git™ Version Control features."

  - `data.profiles.disabled_roles.module` (string)
    The role's module name.
    Example: "FileStorage"

  - `data.profiles.disabled_roles.name` (string)
    The role's name.
    Example: "File Storage"

  - `data.profiles.enabled_roles` (array)
    The roles that this profile enables.

  - `data.profiles.enabled_roles.description` (string)
    The role's description.
    Example: "Receive Mail allows users to receive email, as well as create and manage their email accounts."

  - `data.profiles.enabled_roles.module` (string)
    The role's module name.
    Example: "MailReceive"

  - `data.profiles.enabled_roles.name` (string)
    The role's name.
    Example: "Receive Mail"

  - `data.profiles.experimental` (integer)
    Whether the profile is experimental.
* 1 - Experimental.
* 0 - Not experimental.
    Enum: 1, 0

  - `data.profiles.name` (string)
    The profile's name.
    Example: "Mail"

  - `data.profiles.optional_roles` (array)
    The optional roles that this profile enables. The function returns an empty array if no optional roles exist.

  - `data.profiles.optional_roles.description` (string)
    The role's description.
    Example: "DNS allows users to create and edit Domain Name System zone files."

  - `data.profiles.optional_roles.module` (string)
    The role's module name.
    Example: "DNS"

  - `data.profiles.optional_roles.name` (string)
    The role's name.
    Example: "DNS"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_available_profiles"

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


