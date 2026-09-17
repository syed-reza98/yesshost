# Return transfer session's information

This function analyzes a transfer session.

Note:

  For more information about how this function works with other functions in the transfer and restore process, read our Guide to Transfer and Restore API Functions documentation.

Endpoint: GET /retrieve_transfer_session_remote_analysis
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `transfer_session_id` (string, required)
    The transfer session's ID.
    Example: "exampleservercopya20140206192428NtyW"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.config` (object)
    An object containing the transfer configuration options.

  - `data.config.shared_mysql_server` (integer)
    Whether the remote and target server share the same MySQL® server.
* 1 - The remote and target server share the same MySQL server.
* 0 - The remote and target server do not share the same MySQL server.
    Enum: 0, 1

  - `data.items` (object)
    An object containing items to transfer.

  - `data.items.accounts` (array)
    The accounts to transfer.

  - `data.items.packages` (array)
    The packages to transfer.

  - `data.local` (object)
    An object containing the local server's information.

  - `data.local.available_ips` (array)
    A list of the local server's available IP addresses.
    Example: ["192.168.1.1"]

  - `data.local.dbs` (object)
    An object containing the local server's databases and users.

  - `data.local.dbs.dbs` (object)
    An object containing the local server's databases.

  - `data.local.dbs.dbs.MYSQL` (object)
    An object containing the local server's MySQL databases.
    Example: {"user_db1":{"owner":"user"},"user_db2":{"owner":"user"}}

  - `data.local.dbs.dbs.PGSQL` (object)
    An object containing the local server's PgSQL databases.
    Example: {"user_db1":{"owner":"user"},"user_db2":{"owner":"user"}}

  - `data.local.dbs.users` (object)
    An object containing the local server's database users.

  - `data.local.dbs.users.MYSQL` (object)
    An object containing the local server's MySQL users.
    Example: {"user_user1":{"owner":"user"},"user_user2":{"owner":"user"}}

  - `data.local.dbs.users.PGSQL` (object)
    An object containing the local server's PgSQL databases users.
    Example: {"user_user1":{"owner":"user"},"user_user2":{"owner":"user"}}

  - `data.local.dedicated_ips` (object)
    A list of the local server's dedicated IP addresses.
    Example: {"192.168.1.2":"domain.tld"}

  - `data.local.domains` (any)
    A list of the local server's domains and owners.
    Example: {"*":"nobody","domain.tld":"user"}

  - `data.local.groups` (object)
    An object containing the local server's account groups.
    Example: {"bin":1,"nobody":1}

  - `data.local.host` (string)
    The local server's hostname.
    Example: "hostname.domain.tld"

  - `data.local.major_version` (string)
    The local server's major version.
    Example: "11.90"

  - `data.local.roundcube_dbtype` (string)
    The database type Roundcube uses on the local server.
    Enum: "sqlite", "mysql"

  - `data.local.users` (object)
    An object containing the local server's account users.
    Example: {"nobody":1,"root":1}

  - `data.local.version` (string)
    The local server's version of cPanel.
    Example: "11.90.0.6"

  - `data.modules` (object)
    An list of objects containing the module infromation of both servers.
    Example: {"Backups":{"analysis":{"Local Backups Version":"11.90.0.6","Remote Backups Version":"11.88.0.7"},"name":"Backups"},"MySQL":{"analysis":{"Local Type":"MySQL","Local Version":"5.7","Remote Type":"MariaDB","Remote Version":"10.3"},"name":"Database Server"}}

  - `data.options` (object)
    An object containing transfer session options.

  - `data.options.skip_reseller_privs` (integer)
    Whether reseller privileges will be set to transfer by default.
* 0 - Reseller privileges will not be set to transfer by default.
* 1 - Reseller privileges will be set to transfer by default.
    Enum: 0, 1

  - `data.options.unrestricted` (integer)
    Whether the transfer session will use [Restriced Restore](https://go.cpanel.net/insecurerestoreaccount).
* 0 - Transfer session will use Restriced Restore.
* 1 _ Transfer session will not use Restirced Restore.
    Enum: 0, 1

  - `data.remote` (object)
    An object containing the remote server's information.

  - `data.remote.conflicts` (object)
    Remote server data load error message.

  - `data.remote.cpversion` (string)
    Remote server internal version.
    Example: "11.64"

  - `data.remote.dbs` (object)
    An object containing the remote server's databases and users.

  - `data.remote.dbs.dbs` (object)
    An object containing the remote server's databases.

  - `data.remote.dbs.dbs.MYSQL` (object)
    An object containing the remote server's MySQL databases.
    Example: {"user_db1":{"owner":"user"},"user_db2":{"owner":"user"}}

  - `data.remote.dbs.dbs.PGSQL` (object)
    An object containing the remote server's PgSQL databases.
    Example: {"user_db1":{"owner":"user"},"user_db2":{"owner":"user"}}

  - `data.remote.dbs.users` (object)
    An object containing the remote server's database users.

  - `data.remote.dbs.users.MYSQL` (object)
    An object containing the remote server's MySQL users.
    Example: {"user_user1":{"owner":"user"},"user_user2":{"owner":"user"}}

  - `data.remote.dbs.users.PGSQL` (object)
    An object containing the remote server's PgSQL databases users.
    Example: {"user_user1":{"owner":"user"},"user_user2":{"owner":"user"}}

  - `data.remote.has_disk_used` (integer)
    Whether the remote server can transmit disk usage information to the target server.
* 1 - Remote server can transmit disk usage information.
* 0 - Remote server cannot transmit disk usage information.

Note:

  cPanel & WHM servers have this ability by default.
    Enum: 0, 1

  - `data.remote.has_files_used` (integer)
    Whether the remote server can transmit file usage information to the target server.
* 1 - Remote server can transmit file usage information.
* 0 - Remote server cannot transmit file usage information.

Note:

  cPanel & WHM servers have this ability by default.
    Enum: 0, 1

  - `data.remote.has_owners` (integer)
    Whether the remote server can transmit owner information to the target server.
* 1 — Remote server can transmit owner information.
* 0 — Remote server cannot transfer owner information, and the transfer tool will assume that root owns all accounts.
    Enum: 0, 1

  - `data.remote.has_package_extensions` (integer)
    Whether the remote server has package extensions.
* 1 - Remote server has package extensions.
* 0 - Remote server does not have package extensions.
    Enum: 0, 1

  - `data.remote.has_xfertool` (integer)
    Whether the remote server has the transfer tool.
* 1 - Remote server has the transfer tool.
* 0 - Remote server does not have the transfer tool.
    Enum: 0, 1

  - `data.remote.host` (string)
    The remote server's IP address.
    Example: "192.168.1.1"

  - `data.remote.hostname` (string)
    The local server's hostname.
    Example: "hostname.domain.tld"

  - `data.remote.linked_nodes` (array)
    An array containing the remote server's linked cPanel server nodes, if any exist.

  - `data.remote.linked_nodes.alias` (string)
    The remote server's linked cPanel server node alias.
    Example: "mailnode"

  - `data.remote.linked_nodes.enabled_services` (array)
    Enabled services on the linked node.
    Example: ["exim","imap"]

  - `data.remote.linked_nodes.hostname` (string)
    The remote server's linked cPanel server node hostname.
    Example: "remotemailnode.example.com"

  - `data.remote.linked_nodes.last_check` (integer)
    Last time linked node was checked.
    Example: 1600126907

  - `data.remote.linked_nodes.system_settings` (object)
    An object containing server role system settings.
    Example: {"Mail":{"globalspamassassin":0}}

  - `data.remote.linked_nodes.tls_verified` (integer)
    Whether the connection to the server node is using TLS verification.
* 0 - Server node connection is note using TLS verification.
* 1 - Server node connection is using TLS verification.
    Enum: 0, 1

  - `data.remote.linked_nodes.username` (string)
    The username the server node link uses.
    Example: "root"

  - `data.remote.linked_nodes.version` (string)
    The server node's software version number.
    Example: "11.90.0.6"

  - `data.remote.linked_nodes.worker_capabilities` (object)
    An object containing a group of services required for the remote server's linked cPanel server node to perform a specific task.
    Example: {"Mail":{}}

  - `data.remote.major_version` (string)
    The remote server's major version.
    Example: "11.90"

  - `data.remote.resellers` (object)
    The remote servers reseller accounts that own one or more accounts.

Note:

  This won't return a value if the root user is the only user that owns accounts.
    Example: {"resell2":1,"reseller":1,"root":1}

  - `data.remote.roundcube_dbtype` (string)
    The database type Roundcube uses on the remote server.
    Enum: "sqlite", "mysql"

  - `data.remote.server_type` (string)
    The remote server's type.
* An internal cPanel type ID dependent on cPanel version.
* Plesk
* Ensim
    Example: "WHM1164"

  - `data.remote.supports_live_transfers` (integer)
    Whether the remote server supports the Live Transfers feature in WHM's Transfer Tool  interface (WHM >> Home >> Transfers >> Transfer Tool).
* 1 — Supported.
* 0 — Not supported.
    Enum: 0, 1

  - `data.remote.version` (string)
    The remote server's software version number.
    Example: "11.90.0.6"

  - `data.transfer_session_id` (string)
    The transfer session's ID.
    Example: "exampleservercopya20140206192428NtyW"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "retrieve_transfer_session_remote_analysis"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


