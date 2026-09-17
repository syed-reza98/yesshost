# Connected Applications

Server Administration / Connected Applications

## Fetch application connection information

 - [POST /fetch_connected_application](https://api.docs.cpanel.net/specifications/whm.openapi/connected-applications/connectedapplications-fetch_connected_application.md): Retrieve the connection information related to a application that has been granted
access to this server. This data may include any number of properties, but its
primary purpose is to associate API tokens and public/private key pairs and similar
resources with a specific connected application.

## List application connection information

 - [POST /list_connected_applications](https://api.docs.cpanel.net/specifications/whm.openapi/connected-applications/connectedapplications-list_connected_applications.md): Retrieve the connection information for all the connected applications that have been
granted access to this server. This data may include any number of properties, but its
primary purpose is to associate API tokens and public/private key pairs and similar
resources with a specific connected application.

## Remove application connection information

 - [POST /remove_connected_application](https://api.docs.cpanel.net/specifications/whm.openapi/connected-applications/connectedapplications-remove_connected_application.md): Remove the connected application from the server. This only removes the connection
information from the configuration file. It does not clean up any allocated
resources, such as API tokens and public/private keys. Any tokens or keys need to be
removed from the system separately.

## Save application connection information.

 - [POST /save_connected_application](https://api.docs.cpanel.net/specifications/whm.openapi/connected-applications/connectedapplications-save_connected_application.md): Save or update connection data about a specific connected application.

