# Server Nodes

Server Administration / Server Nodes

## Repair distributed accounts with data loss

 - [GET /force_dedistribution_from_node](https://api.docs.cpanel.net/specifications/whm.openapi/server-nodes/cpanel-force_dedistribution_from_node.md): This function converts cPanel accounts that use a given
child node
to use the local server instead.

Unlike the WHM API 1 modifyacct API call, this API does not
transfer users’ data from the child node as part of the conversion.
This API is useful for emergency repairs if, for example, a child
node goes permanently offline while accounts still use it.

Warning:

Because this API does not transfer users’ data from the child node,
all converted users will lose data. You should only call this API
as a last resort.

## Return linked remote server node settings

 - [GET /get_linked_server_node](https://api.docs.cpanel.net/specifications/whm.openapi/server-nodes/cpanel-get_linked_server_node.md): This function returns details about a linked remote server node.

## Return linked server node status

 - [GET /get_server_node_status](https://api.docs.cpanel.net/specifications/whm.openapi/server-nodes/cpanel-get_server_node_status.md): This function returns the status of a linked remote server node. It returns
the linked remote server's status with the WHM API 1 version and get_current_profile functions.

## Add linked server node

 - [GET /link_server_node_with_api_token](https://api.docs.cpanel.net/specifications/whm.openapi/server-nodes/cpanel-link_server_node_with_api_token.md): This function links your server to a remote server node. The server uses an API token
to communicate with the remote server node.

Important:

* This function only runs on a
Standard Node profile
server.
* The remote server node must use a version that is the same as or greater than your
server version.
* This function requires the use of an API token. For more information, read our
Guide to API Authentication - API Tokens in WHM
documentation.

## Return all linked server nodes

 - [GET /list_linked_server_nodes](https://api.docs.cpanel.net/specifications/whm.openapi/server-nodes/cpanel-list_linked_server_nodes.md): This function returns a list of all remote server nodes linked to the server. It also provides details about each remote server node.

## Return cPanel accounts with server name and type

 - [GET /list_user_child_nodes](https://api.docs.cpanel.net/specifications/whm.openapi/server-nodes/cpanel-list_user_child_nodes.md): This function returns the system's cPanel accounts and the linked cPanel & WHM server on which they exist.

## Remove linked server node

 - [GET /unlink_server_node](https://api.docs.cpanel.net/specifications/whm.openapi/server-nodes/cpanel-unlink_server_node.md): This function unlinks a remote server node from your server.

Important:

  This function does not unlink mail servers that are currently in use. 
  You must first delete any accounts that use the linked mail server.

## Update linked server node settings

 - [GET /update_linked_server_node](https://api.docs.cpanel.net/specifications/whm.openapi/server-nodes/cpanel-update_linked_server_node.md): This function updates a linked remote cPanel server node.

Important:

This function requires the use of an API token. For more information,
read our Guide to API Authentication - API Tokens in WHM
documentation.

