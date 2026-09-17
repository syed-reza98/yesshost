# Run ModSecurity batch settings

This function adds, updates, and removes global ModSecurity™ configuration directives.
The function modifies these directives in the /usr/local/apache/conf/modsec2.cpanel.conf
file.

Important:

When you disable the Web Server role,
the system disables this function.

This function only supports the following ModSecurity™ configuration directives:


  setting_idDocumentation
  0SecAuditEngine
  1SecConnEngine
  2SecRuleEngine
  3SecDisableBackendCompression
  4SecGeoLookupDb
  5SecGsbLookupDb
  6SecGuardianLog
  7SecHttpBlKey
  8SecPcreMatchLimit
  9SecPcreMatchLimitRecursion

Endpoint: GET /modsec_batch_settings
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `setting_id` (integer, required)
    The configuration setting's ID.

Note:

To configure multiple IDs, increment the parameter name. For example, setting_id1,
setting_id2, and setting_id3.

  - `state` (any, required)
    The configuration setting's current state.

* On
* Off

Some settings accept additional values for this parameter. See the references above for more inforamation.

Note:

* To configure multiple settings, increment the parameter name. For example, state1,
state2, and state3.
* state is ignored if remove is set to 1 for the setting.

  - `remove` (integer)
    Whether to add or remove the configuration setting in the
/usr/local/apache/conf/modsec2.cpanel.conf file.

* 1 — Remove the configuration setting.
* 0 — Add or update the configuration setting.

* To remove multiple settings, increment the parameter name. For example, remove1,
remove2, and remove3.
    Enum: 1, 0

## Response 200 fields (application/json):

  - `data` (object)

  - `data.updated_settings` (array)
    An array of objects that contains the configuration setting's information.

  - `data.updated_settings.default` (integer)
    The setting's default value.

Note:

The modsec2.cpanel.conf file defines this value.
    Example: 1500

  - `data.updated_settings.description` (string)
    The setting's description.
    Example: "define the match limit of the PCRE library."

  - `data.updated_settings.directive` (string)
    The setting's Apache configuration directive.
    Example: "SecAuditEngine"

  - `data.updated_settings.engine` (integer)
    Whether the setting is an engine directive.

* 1 — Engine directive.
* 0 — Normal directive.
    Enum: 1, 0

  - `data.updated_settings.name` (string)
    The setting's name.
    Example: "Audit Log Level"

  - `data.updated_settings.radio_options` (array)
    An array of objects that contain the setting's options display information.

  - `data.updated_settings.radio_options.name` (string)
    The option's display name.
    Example: "Log all transactions."

  - `data.updated_settings.radio_options.option` (string)
    The option.
    Example: "On"

  - `data.updated_settings.setting_id` (integer)
    The setting ID.
    Example: 1

  - `data.updated_settings.state` (string)
    The setting's current state, as set by the state parameter's input value.
    Example: "On"

  - `data.updated_settings.type` (string)
    The form element that the WHM interface uses to display this setting.

* text — WHM users modify this setting via a text box.
* radio — WHM users modify this setting via a radio button.
* number — WHM users modify this setting via a text box that only
allows numeric values.
    Example: "radio"

  - `data.updated_settings.url` (string)
    The URL of the setting's entry in the ModSecurity reference manual.
    Example: "https://github.com/SpiderLabs/ModSecurity/wiki/Reference-Manual#secpcrematchlimit"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "modsec_batch_settings"

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


