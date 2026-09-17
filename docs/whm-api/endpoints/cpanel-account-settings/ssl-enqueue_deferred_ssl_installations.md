# Add SSL certificate to installation queue

This function adds SSL certificates to the installation queue. This allows you to
defer and batch SSL certificate installation.

Important:

You must enter the same quantity of username, cab, crt, key, and vhost_name
parameters. For example, to add three certificates to the installation queue, enter the
username parameter three times, then enter three cab, crt, key, and vhost_name
parameters.

Endpoint: GET /enqueue_deferred_ssl_installations
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `cab` (string, required)
    The Certificate Authority (CA) bundle's contents.

Note:

* We recommend that you enter an empty string. An empty string tells the server to
download the CA bundle automatically.
* To add multiple certificates to the installation queue, duplicate or increment the
parameter name. For example, cab-1, cab-2, and cab-3.

  - `crt` (string, required)
    The certificate's contents.

Note:

 To add multiple certificates to the installation queue, duplicate or increment the
 parameter name. For example, crt-1, crt-2, and crt-3.

  - `key` (string, required)
    The private key's text.

Note:

To add multiple certificates to the installation queue, duplicate or increment the
parameter name. For example, key-1, key-2, and key-2.

  - `username` (string, required)
    The cPanel account username for which to enqueue the SSL certificate installations.

Note:

To add multiple certificates to the installation queue, duplicate or increment the
parameter name. For example, username-1, username-2, and username-3.

  - `vhost_name` (string, required)
    The name of the web virtual host (vhost) for which to install the certificate.

Note:

 To add multiple certificates to the installation queue, duplicate or increment the
 parameter name. For example, vhost_name-1, vhost_name-2, and vhost_name-3.

## Response 200 fields (application/json):

  - `data` (object)

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "enqueue_deferred_ssl_installations"

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


