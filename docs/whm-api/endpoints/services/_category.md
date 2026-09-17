# Services

Server Administration / Services

## Update background process stopper

 - [GET /configurebackgroundprocesskiller](https://api.docs.cpanel.net/specifications/whm.openapi/services/sys-configurebackgroundprocesskiller.md): This function configures the server's background process killer.

## Enable or disable a service and its monitoring

 - [GET /configureservice](https://api.docs.cpanel.net/specifications/whm.openapi/services/services-configureservice.md): This function enables or disables a service and its monitoring.

Note:

If the user only possesses the clustering
Access Control List (ACL),
then this function can only act on the named service.

## Enable monitoring for all services

 - [GET /enable_monitor_all_enabled_services](https://api.docs.cpanel.net/specifications/whm.openapi/services/services-enable_monitor_all_enabled_services.md): This function enables monitoring for all enabled services.

## Return service configuration settings

 - [GET /get_service_config](https://api.docs.cpanel.net/specifications/whm.openapi/services/advconfig-get_service_config.md): This function returns a service's configuration settings.

## Return service configuration key

 - [GET /get_service_config_key](https://api.docs.cpanel.net/specifications/whm.openapi/services/advconfig-get_service_config_key.md): This function returns a specific configuration key for a service.

## Return a cPanel account’s service proxying setup

 - [GET /get_service_proxy_backends](https://api.docs.cpanel.net/specifications/whm.openapi/services/accounts-get_service_proxy_backends.md): This function reports a cPanel account's
service proxying
configuration.

## Restart service

 - [GET /restartservice](https://api.docs.cpanel.net/specifications/whm.openapi/services/services-restartservice.md): This function restarts a service, or daemon, on a server.

Note:

If the user only possesses the clustering
Access Control List (ACL)
then this function can only act on the named service.

## Return service status

 - [GET /servicestatus](https://api.docs.cpanel.net/specifications/whm.openapi/services/services-servicestatus.md): This function reports which services (daemons) are enabled, installed, and monitored on your server.

## Update service configuration key

 - [GET /set_service_config_key](https://api.docs.cpanel.net/specifications/whm.openapi/services/advconfig-set_service_config_key.md): This function configures global properties for specific services listed in the /var/cpanel/conf directory.

## Update cPanel account service proxying

 - [GET /set_service_proxy_backends](https://api.docs.cpanel.net/specifications/whm.openapi/services/accounts-set_service_proxy_backends.md): This function lets you configure a cPanel account's
service proxying.

Note:

* If the cPanel account is a distributed account,
and you call this function on the account’s parent node,
the system will propagate the new service proxying to the child node.
* If the Web Server role is active
on the server, this function rebuilds the user's web virtual hosts (vhosts) and restarts
the web server.
* If the system cannot rebuild the user's vhosts, the API call will still succeed. However,
the function returns a failure warning in the metadata.
* To remove an account's service proxying, use the WHM API 1 unset_all_service_proxy_backends
function.

## Remove cPanel account service proxying

 - [GET /unset_all_service_proxy_backends](https://api.docs.cpanel.net/specifications/whm.openapi/services/accounts-unset_all_service_proxy_backends.md): This function removes a cPanel account's
service proxying.

Note:

* If the cPanel account is a distributed account,
this function will also unset all service proxying for the cPanel account on the
child node.
* If the Web Server role is active on
the server, this function rebuilds the cPanel user's web virtual hosts (vhosts) and restarts
the web server.
* If the system cannot rebuild the cPanel user's vhosts, the API call will still succeed.
However, the function returns a failure warning in the metadata.
* To set a service proxying for a cPanel account, use the WHM API 1
set_service_proxy_backends function.

