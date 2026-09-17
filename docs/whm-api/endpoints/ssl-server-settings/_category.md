# SSL Server Settings

SSL Certificates / SSL Server Settings

## Return system services and associated certificates

 - [GET /fetch_service_ssl_components](https://api.docs.cpanel.net/specifications/whm.openapi/ssl-server-settings/ssl-fetch_service_ssl_components.md): This function lists the system's services and their associated certificates.

## Create self-signed SSL certificate

 - [GET /generatessl](https://api.docs.cpanel.net/specifications/whm.openapi/ssl-server-settings/ssl-generatessl.md): This function generates a private key file, a certificate signing request (CSR), and a self-signed SSL certificate.

## Return domains with installed SSL certificates

 - [GET /listcrts](https://api.docs.cpanel.net/specifications/whm.openapi/ssl-server-settings/ssl-listcrts.md): This function lists the server's domains with installed SSL certificates.

## Rebuild installed SSL database (no-op)

 - [GET /rebuildinstalledssldb](https://api.docs.cpanel.net/specifications/whm.openapi/ssl-server-settings/ssl-rebuildinstalledssldb.md): This function is a no-op and performs no actions.

Note:

This function previously rebuilt the database of installed SSL certificates,
but this operation is no longer necessary and the function always succeeds
without taking any action.

## Update SSL certificate users database

 - [GET /rebuilduserssldb](https://api.docs.cpanel.net/specifications/whm.openapi/ssl-server-settings/ssl-rebuilduserssldb.md): This function rebuilds the database of SSL certificate users.

## Create self-signed SSL certificate for service

 - [GET /reset_service_ssl_certificate](https://api.docs.cpanel.net/specifications/whm.openapi/ssl-server-settings/ssl-reset_service_ssl_certificate.md): This function regenerates a self-signed SSL certificate and assigns it to a service.

