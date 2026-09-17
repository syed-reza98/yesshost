# Disable identity provider modules that fail to load

This function disables any enabled identity provider modules that fail to load.

Endpoint: GET /disable_failing_authentication_providers
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (array)
    An array of objects containing information about the external authentication identity provider module failures.

  - `data.payload.disabled_services` (array)
    An array of the cPanel services for which the external authentication identity provider was previously disabled.
    Example: ["cpaneld","webmaild"]

  - `data.payload.failures_to_disable` (array)
    An array of objects containing the cPanel services for which the system fails to disable the module.

  - `data.payload.failures_to_disable.failure` (string)
    A description of the failure to disable the identity provider module for that module.
    Example: "An informative failure message."

  - `data.payload.failures_to_disable.service_name` (string)
    A cPanel service for which the system failed to disable the external authentication identity provider.
    Example: "whostmgrd"

  - `data.payload.provider_failure` (string)
    A description of the failure.
    Example: "(ERR mcddbv) The system failed to load the module “Cpanel::Security::Authn::Provider::Facebook“ because of an error: Can't locate Cpanel/Security/Authn/Provider/Facebook.pm in @INC (@INC contains: /usr/local/cpanel /usr/local/cpanel/3rdparty/perl/514/lib/perl5/cpanel_lib/i386-linux-64int /usr/local/cpanel/3rdparty/perl/514/lib/perl5/cpanel_lib /usr/local/cpanel/3rdparty/perl/514/lib/perl5/5.14.4/i386-linux-64int /usr/local/cpanel/3rdparty/perl/514/lib/perl5/5.14.4 /opt/cpanel/perl5/514/site_lib/i386-linux-64int /opt/cpanel/perl5/514/site_lib /var/cpanel/perl) at (eval 143) line 1.\nBEGIN failed--compilation aborted at (eval 143) line 1.\n"

  - `data.payload.provider_name` (string)
    The external authentication identity provider to disable.
    Example: "facebook"

  - `data.payload.provider_namespace` (string)
    The external authentication identity provider module's namespace.
    Example: "Cpanel::Security::Authn::Provider::Facebook"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "disable_failing_authentication_providers"

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


