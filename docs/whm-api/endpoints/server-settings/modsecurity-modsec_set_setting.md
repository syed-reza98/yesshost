# Update ModSecurity configuration

This function sets a global ModSecurity™ configuration directive.

Important:

When you disable the Web Server role, the system disables this function.

Endpoint: GET /modsec_set_setting
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `setting_id` (integer, required)
    The setting's ID.

Note:

 The WHM API 1 modsec_get_settings function returns this value.
    Example: 8

  - `state` (string, required)
    The setting's new state. The function uses this as a valid argument
for the directive.

Note:

 For more information, read SpiderLabs' ModSecurity documentation.
    Example: "2000"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.default` (string)
    The setting's default value.
    Example: "1500"

  - `data.description` (string)
    The setting's description.
    Example: "This setting allows you to define the match limit of the PCRE library."

  - `data.directive` (string)
    The setting's Apache® directive.
    Example: "SecPcreMatchLimit"

  - `data.name` (string)
    The setting's name.
    Example: "PCRE library match limit"

  - `data.radio_options` (array)
    An array of objects with the options that the client should display, as buttons, for this setting in a user interface.

Note:

 The function only returns this array of objects when you set the type parameter's value to radio.

  - `data.radio_options.name` (string)
    The setting name to display to the user. The user's [locale](https://go.cpanel.net/localedocs) may translate this value.
    Example: "Log all transactions."

  - `data.radio_options.option` (string)
    The setting that the system used to select the setting's state.

Note:

 This value is identical to the string that the client sends in as state value when users select the specified setting. In most cases, you should not display this value to the user. Instead, display the name value.
    Example: "On"

  - `data.setting_id` (integer)
    The setting's ID.
    Example: 8

  - `data.state` (integer)
    The setting's new state.
    Example: 2000

  - `data.type` (string)
    The type of UI control that the client should use to represent the setting.

* text - WHM users modify this setting via a text box.
* radio - WHM users modify this setting via a radio button.
  - Note: If the type parameter's value is radio, the function also returns the radio_options array of objects.
* number - WHM users modify this setting via a text box that only allows numeric values.
    Enum: "text", "radio", "number"

  - `data.url` (string)
    The URL for the setting's documentation.
    Example: "https://github.com/SpiderLabs/ModSecurity/wiki/Reference-Manual#secpcrematchlimit"

  - `data.validation` (array)
    A validator or array of validators to apply. Use these validators to perform frontend validation through your preferred implementation methods.

Note:

 The function may represent each validator as either a string or an object.
 * When the function represents the validator as a string, no arguments exist for the validator.
 * When the function returns the validator as a object, the API may also include an argument for the validator.

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "modsec_set_setting"

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


