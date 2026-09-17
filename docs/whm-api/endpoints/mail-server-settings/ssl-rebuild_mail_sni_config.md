# Rebuild mail SNI configuration files

This function rebuilds the mail SNI configuration files.

Endpoint: GET /rebuild_mail_sni_config
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `reload_dovecot` (integer)
    Whether to reload the Dovecot service after the system rebuilds the configuration files.
* 1 - Reload Dovecot.
* 0 - Do not reload Dovecot.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `data` (object)

  - `data.configs_built` (array)
    list of configuration files that this function rebuilt.

Note:

 The function only returns this value if you call it as the root user.
    Example: ["/etc/dovecot/sni.conf"]

  - `data.success` (integer)
    Whether the system rebuilt the configuration files.
* 1 - The system rebuilt the configuration files.
* 0 - The system did not rebuild the configuration files.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "rebuild_mail_sni_config"

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


