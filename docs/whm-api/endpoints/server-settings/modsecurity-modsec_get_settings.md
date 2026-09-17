# Return ModSecurity configuration

This function retrieves the server's ModSecurity™ configuration settings. The system
stores these settings in the /usr/local/apache/conf/modsec2.conf file.

Important:

When you disable the Web Server role,
the system disables this function.

Endpoint: GET /modsec_get_settings
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.settings` (array)
    An array of objects containing ModSecurity global configuration settings.
    Example: [{"default":"Off","description":"This setting controls the behavior of the audit engine.","directive":"SecAuditEngine","engine":1,"missing":1,"name":"Audit Log Level","radio_options":[{"name":"Log all transactions.","option":"On"},{"name":"Do not log any transactions.","option":"Off"},{"name":"Only log noteworthy transactions.","option":"RelevantOnly"}],"setting_id":0,"state":"","type":"radio","url":"https://github.com/SpiderLabs/ModSecurity/wiki/Reference-Manual#secauditengine"},{"description":"Specify an external program to pipe transaction log information to for additional analysis. The syntax is analogous to the .forward file, in which a pipe at the beginning of the field indicates piping to an external program.","directive":"SecGuardianLog","missing":1,"name":"Guardian Log","setting_id":6,"state":"","type":"text","url":"https://github.com/SpiderLabs/ModSecurity/wiki/Reference-Manual#secguardianlog","validation":[{"arg":"[|]","name":"startsWith"},"path"]}]

  - `data.settings.default` (any)
    The setting's default value.

  - `data.settings.description` (string)
    The setting's description. The user's
[locale](https://go.cpanel.net/locale) may translate this value.

  - `data.settings.directive` (string)
    The setting's Apache® configuration directive.

  - `data.settings.engine` (integer)
    Whether the setting is an engine directive. If the setting is
a normal directive, the function does not return this value.

* 1 — Engine directive.
    Enum: 1

  - `data.settings.missing` (integer)
    Whether the setting is missing.

* 1 — The value is missing.
    Enum: 1

  - `data.settings.name` (string)
    The setting's name.

  - `data.settings.radio_options` (array)
    An array of objects containing the options that the client should
display, as radio buttons, for this setting in a user interface.

Note:

The function only returns this value when the type
parameter is the radio values.

  - `data.settings.radio_options.name` (string)
    The setting name to display to the user. The user's
[locale](https://go.cpanel.net/locale) may translate this value.

  - `data.settings.radio_options.option` (string)
    The setting that the system used to select the setting's state.

Note:

This value is identical to the string that the client sends in
as the state value when users select the specified setting. In most
cases, you should not display this value to the user. Instead,
display the name value.

  - `data.settings.setting_id` (integer)
    The setting ID.

  - `data.settings.state` (string)
    The setting's current state, if available.

  - `data.settings.type` (string)
    The form element that the WHM interface uses to display this setting.

* text — WHM users modify this setting via a text box.
* radio — WHM users modify this setting via a radio button.
* number — WHM users modify this setting via a text box that
only allows numeric values.
    Enum: "text", "radio", "number"

  - `data.settings.url` (string)
    The URL of the setting's entry in the ModSecurity reference manual.

  - `data.settings.validation` (array)
    A list of validators to apply when updating the state. Use these validators
to perform frontend validation through your preferred implementation
methods.

Note:

The function may represent each validator as either a string or an
object.

* When the function represents the validator as a string, no arguments
exist for the validator.
* When the function returns the validator as a object, the API may
also include an argument for the validator.

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "modsec_get_settings"

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


