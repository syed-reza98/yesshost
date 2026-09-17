# Return Security Advisor results

This function returns the cPanel Security Advisor's security scan data. It advises you of how to resolve any security issues that it finds.

Note:

  For more information, read the cPanel Security Advisor documentation at the WebPros International, LLC GitHub® repository.

Endpoint: GET /fetch_security_advice
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (array)
    Note:

 * This function only returns the the advice array of objects when the type return is the mod_advice value.
 * This function only returns the message return when the type return is the mod_load or mod_run value.

  - `data.payload.advice` (object)
    Note:

  This function only returns this object when the type return is the mod_advice value.

  - `data.payload.advice.key` (string)
    A unique check identifier in the module that returns a status message.
    Example: "ClamAV_not_installed"

  - `data.payload.advice.suggestion` (string,null)
    A message that suggests how to resolve the security issue.
    Example: "Install ClamAV within \"<a target=\\\"_blank\\\" href=\\\"https://example.com:2087/scripts2/manage_plugins\\\">Manage Plugins</a>\"."

  - `data.payload.advice.summary` (string)
    A summary about the module's current security status.
    Example: "ClamAV is not installed."

  - `data.payload.advice.type` (string)
    The level at which the module returns a specific security message.
* ADVISE_BAD - The object contains a security issue.
* ADVISE_GOOD - There are no security issues.
* ADVISE_INFO - The object contains an informational message.
* ADVISE_WARN - The object contains a warning.
    Enum: "ADVISE_BAD", "ADVISE_GOOD", "ADVISE_INFO", "ADVISE_WARN"

  - `data.payload.message` (string)
    A message that describes an error.

Note:

  This function only returns this value for the type return's mod_load and mod_run values.
    Example: "Can't call method \"get_raw_conf\" on an undefined value at /usr/local/cpanel/Whostmgr/Services/SSH/Config.pm line 160."

  - `data.payload.module` (string)
    The name of a module that the Security Advisor checked.
    Example: "Cpanel::Security::Advisor::Assessors::ClamAV"

  - `data.payload.type` (string)
    The type of security message.

* mod_advice - There is a message from the Security Advisor module.
* mod_load - There was an error preventing the loading of the module.
* mod_run - There was an error preventing the system from completing one of the module's checks.
    Enum: "mod_advice", "mod_load", "mod_run"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "fetch_security_advice"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


