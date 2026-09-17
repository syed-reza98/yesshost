# Configuration Clusters

Server Administration / Configuration Clusters

## Add configuration cluster server

 - [POST /add_configclusterserver](https://api.docs.cpanel.net/specifications/whm.openapi/configuration-clusters/clusterserver-add_configclusterserver.md): This function adds a server to a configuration cluster. The function's return data appears in
the metadata section of its output.

We recommend that you run this function as a POST request with SSL enabled:

* The length of the remote access key may cause problems if you run the function with the GET
method (for example, a URL in your browser).
* You risk security problems if you enter a remote access key through the GET method.

Important:

* Run this function as a root-level user on the server that you wish to use as the parent server.
* If you log in to a configuration cluster server that is not the parent server, nothing
will indicate that the server is part of a configuration cluster. You can only view and modify
this information from the parent server.

## Delete server from configuration cluster

 - [GET /delete_configclusterserver](https://api.docs.cpanel.net/specifications/whm.openapi/configuration-clusters/clusterserver-delete_configclusterserver.md): This function removes a server from a configuration cluster. The function's return
data appears in the metadata section of its output.

Important:

If you log in to a configuration cluster server that is not the parent server,
nothing will indicate that the server is part of a configuration cluster. You can
only view and modify this information from the parent server.

## Return all configuration cluster servers

 - [GET /list_configclusterservers](https://api.docs.cpanel.net/specifications/whm.openapi/configuration-clusters/clusterserver-list_configclusterservers.md): This function lists the servers in the server's configuration cluster.

Warning:

* WHM's Remote Access Key feature is deprecated. We strongly recommend that you use API tokens instead.

* If you log in to a configuration cluster server that is not the parent server, nothing will indicate that the server is part of a configuration cluster. You can only view and modify this information from the parent server.

## Update configuration file from backup

 - [GET /restore_config_from_file](https://api.docs.cpanel.net/specifications/whm.openapi/configuration-clusters/cpanel-restore_config_from_file.md): This function restores a configuration backup from a file. If the backup file does not contain any changes, the system does not write to the configuration file.

## Update configuration file from backup via POST

 - [POST /restore_config_from_upload](https://api.docs.cpanel.net/specifications/whm.openapi/configuration-clusters/cpanel-restore_config_from_upload.md): This function restores a configuration backup file via HTTP POST
method. If the backup file does not contain any changes, the system does not write to the configuration file.

Note:

The format for this command line example differs from our standard format because the function only accepts an HTTP POST request. For more information about how to call this request method, read Mozilla's POST documentation.

## Update configuration cluster server credentials

 - [GET /update_configclusterserver](https://api.docs.cpanel.net/specifications/whm.openapi/configuration-clusters/clusterserver-update_configclusterserver.md): This function updates the username or remote access key for a cluster server.

Important:

 If you log in to a configuration cluster server that is not the parent server, nothing will indicate that the server is part of a configuration cluster. You can only* view and modify this information from the master server.

* We recommend that you run this function as a POST request with SSL enabled:
  * The length of the remote access key may cause problems if you run the function with the GET method (for example, a URL in your browser).
  * You risk security problems if you enter a remote access key through the GET method.

