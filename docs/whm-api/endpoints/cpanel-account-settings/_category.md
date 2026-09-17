# cPanel Account Settings

SSL Certificates / cPanel Account Settings

## Delete SSL vhost

 - [GET /delete_ssl_vhost](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-settings/ssl-delete_ssl_vhost.md): This function deletes the SSL virtual host.

## Add SSL certificate to installation queue

 - [GET /enqueue_deferred_ssl_installations](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-settings/ssl-enqueue_deferred_ssl_installations.md): This function adds SSL certificates to the installation queue. This allows you to
defer and batch SSL certificate installation.

Important:

You must enter the same quantity of username, cab, crt, key, and vhost_name
parameters. For example, to add three certificates to the installation queue, enter the
username parameter three times, then enter three cab, crt, key, and vhost_name
parameters.

## Return cPanel account FQDN certificate information

 - [GET /fetch_ssl_certificates_for_fqdns](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-settings/ssl-fetch_ssl_certificates_for_fqdns.md): This function retrieves the certificate information for all fully qualified domain names (FQDNs) that the account owns.

## Return server vhosts and SSL certificates

 - [GET /fetch_ssl_vhosts](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-settings/ssl-fetch_ssl_vhosts.md): This function lists the server's virtual hosts (vhosts) and their installed SSL certificates.

## Return all SSL certificate components on vhost

 - [GET /fetch_vhost_ssl_components](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-settings/ssl-fetch_vhost_ssl_components.md): This function lists the components of each SSL certificate on the server's virtual hosts.

Warning:

* On most servers, this function returns a large amount of output. We strongly
recommend that you filter and
sort the output.
* The following example uses the filter and sort options:

  https://hostname.example.com:2087/cpsess##########/json-api/fetch_vhost_ssl_components?api.version=1&api.filter.a.field=servername&api.filter.a.arg0=servername.com&api.filter.a.type=eq&api.filter.enable=1&api.sort.enable=1&api.sort.a.field=servername

## Return SSL certificate information

 - [GET /fetchcrtinfo](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-settings/ssl-fetchcrtinfo.md): This function retrieves information about a certificate.

## Return cPanel account SSL certificate information

 - [GET /fetchsslinfo](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-settings/ssl-fetchsslinfo.md): This function retrieves information about SSL certificates that you could install for a user. This function does not provide information about the currently installed certificates.

## Return domain DCV issues

 - [GET /get_autossl_problems_for_domain](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-settings/ssl-get_autossl_problems_for_domain.md): This function returns a list of objects that contains the latest Domain Control Validation (DCV) problems for a specific domain.

## Return account DCV issues

 - [GET /get_autossl_problems_for_user](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-settings/ssl-get_autossl_problems_for_user.md): This function returns the list of the latest Domain Control Validation (DCV) problems for a cPanel user.

## Return SSL-encrypted domain for service access

 - [GET /get_best_ssldomain_for_service](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-settings/ssl-get_best_ssldomain_for_service.md): This function retrieves the most appropriate SSL-encrypted domain to use to access a service.

## Install SSL certificate for service

 - [GET /install_service_ssl_certificate](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-settings/ssl-install_service_ssl_certificate.md): This function installs a new SSL certificate on a service.

Important:

You must restart the selected service after you install a new SSL certificate.

## Install SSL certificate

 - [GET /installssl](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-settings/ssl-installssl.md): This function installs an SSL certificate.

