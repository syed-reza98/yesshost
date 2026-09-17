# Return feature list configuration

This function lists features in a specific feature list.

Endpoint: GET /get_featurelist_data
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `featurelist` (string, required)
    The feature list for which to list information.
    Example: "\"Mail Only\""

## Response 200 fields (application/json):

  - `data` (object)

  - `data.featurelist` (string)
    The feature list's name.
    Example: "Mail Only"

  - `data.features` (array)
    An array of objects containing the feature's information.

  - `data.features.dependencies` (array)
    List of feature names that are required dependencies for this feature to function properly.
    Example: ["ssl","dns"]

  - `data.features.id` (string, required)
    The feature's ID.
    Example: "email_trace"

  - `data.features.name` (string)
    The feature's name.
    Example: "Email Trace"

  - `data.features.is_disabled` (integer, required)
    Whether the feature is disabled.

* 1 — Disabled.
* 0 — Not disabled.

Note:

* The disabled feature list does not use this return.
* Users on your server can't access disabled features. For more
information, read our
[Feature Manager](https://go.cpanel.net/whmdocsFeatureManager)
documentation.
    Enum: 1, 0

  - `data.features.is_standalone_experience` (integer)
    Whether the system auto-redirects the user to the redirect_url when this feature is enabled. Only one such feature may be enabled for a feature list.

* 1 — The feature supports standalone mode.
* 0 — The feature does not support standalone mode.
    Enum: 1, 0

  - `data.features.badge_label` (string)
    Custom label shown on the feature manager interfaces. This label will be localized into the current users language.
    Example: "Auto Launch"

  - `data.features.badge_class` (string)
    CSS class name to apply styling to the custom label in the feature manager interfaces.
    Example: "label-blue"

  - `data.features.required_package_extension` (string)
    The ID of a package extension this feature depends on. Empty if the feature needs no extension.
    Example: "ai-app-builder"

  - `data.features.is_meridian_only` (integer,null)
    Whether this feature is a Meridian (theme-integrated) experience.

* 1 — The feature is Meridian-only.
* 0 — The feature is explicitly not Meridian-only.
* null — Not explicitly set. The system derives this from
badge_label for features shipped before this attribute existed.
    Enum: 1, 0, null

  - `data.features.redirect_url` (string)
    The URL where users should be redirected to when logging into cPanel.
    Example: "https://example.com/standalone"

  - `data.features.suppress_plugin_label` (integer)
    Whether to suppress the display of the standard 'plugin' label in the feature manager.

* 1 — Hide the plugin label.
* 0 — Show the plugin label.
    Enum: 1, 0

  - `data.features.only_one_rules` (array)
    Array of regular expression patterns used to enforce mutual exclusion with other features. When this feature is enabled, any features matching these patterns cannot be enabled simultaneously. This is primarily used for standalone experiences where only one feature should redirect users upon login.

Each pattern in the array is a regular expression that matches against feature IDs. For example, a pattern like ^standalone-.* would match any feature starting with "standalone-".
    Example: ["^(standalone-email_trace|email_trace)$","^standalone-.*$"]

  - `data.features.value` (integer, required)
    Whether the feature list includes the feature.

* 1 — The feature list includes this feature.
* 0 — The feature list does not include this feature.

Note:

The disabled feature list uses the opposite logic for this return.

* 1 — The disabled feature list does not include this feature.
* 0 — The disabled feature list includes this feature.
    Enum: 1, 0

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_featurelist_data"

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


