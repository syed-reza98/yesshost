[Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-standardized-hooks) >> [Hookable Events](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events)

# Guide to Standardized Hooks - ModSecurity Functions

The `ModSecurity`™ category's events occur during WHM functions. These events also trigger when you use the following interfaces to perform the corresponding actions:

* WHM's [*ModSecurity Vendors*](https://docs.cpanel.net/whm/security-center/modsecurity-vendors/) interface (*WHM >> Home >> Security Center >> ModSecurity Vendors*).
* WHM's [*ModSecurity Tools*](https://docs.cpanel.net/whm/security-center/modsecurity-tools/) interface (*WHM >> Home >> Security Center >> ModSecurity Tools*).


## ModSecurity::modsec_add_rule

This event triggers when the system adds a ModSecurity rule.

### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the system adds a ModSecurity vendor.
* `post` — Hook actions code runs after the system adds a ModSecurity vendor.


### Returns

This event returns the WHM API 1 [`modsec_add_rule`](/openapi/whm/operation/modsec_add_rule) function's returns.

## ModSecurity::modsec_add_vendor

This event triggers when the system adds a ModSecurity vendor.

### Information

* **Action code run as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the system adds a ModSecurity vendor.
* `post` — Hook actions code runs after the system adds a ModSecurity vendor.


### Returns

This event returns the WHM API 1 [`modsec_add_vendor`](/openapi/whm/operation/modsec_add_vendor) function's returns.

## ModSecurity::modsec_assemble_config_text

This event triggers when the system adds text to a ModSecurity configuration file.

### Information

* **Action code run as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the system adds text to a ModSecurity configuration file.
* `post` — Hook actions code runs after the system adds text to a ModSecurity configuration file.


### Returns

This event returns the WHM API 1 [`modsec_assemble_config_text`](/openapi/whm/operation/modsec_assemble_config_text) function's returns.

## ModSecurity::modsec_batch_settings

This event triggers when the system updates ModSecurity configuration directives.

### Information

* **Action code run as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the system updates the ModSecurity configuration directives.
* `post` — Hook actions code runs after the system updates the ModSecurity configuration directives.


### Returns

This event returns the WHM API 1 [`modsec_batch_settings`](/openapi/whm/operation/modsec_batch_settings) function's returns.

## ModSecurity::modsec_clone_rule

This event triggers when the system copies a ModSecurity rule.

### Information

* **Action code run as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the system copies a ModSecurity rule.
* `post` — Hook actions code runs after the system copies a ModSecurity rule.


### Returns

This event returns the WHM API 1 [`modsec_clone_rule`](/openapi/whm/operation/modsec_clone_rule) function's returns.

## ModSecurity::modsec_deploy_all_rule_changes

This event triggers when the system writes the ModSecurity rule changes.

### Information

* **Action code run as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the system writes the ModSecurity rule changes.
* `post` — Hook actions code runs after the system writes the ModSecurity rule changes.


### Returns

This event returns the WHM API 1 [`modsec_deploy_all_rule_changes`](/openapi/whm/operation/modsec_deploy_all_rule_changes) function's returns.

## ModSecurity::modsec_deploy_rule_changes

This event triggers when the system deploys ModSecurity rule changes.

### Information

* **Action code run as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the system deploys the rule changes.
* `post` — Hook actions code runs after the system deploys the rule changes.


### Returns

This event returns the WHM API 1 [`modsec_deploy_rule_changes`](/openapi/whm/operation/modsec_deploy_rule_changes) function's returns.

## ModSecurity::modsec_deploy_settings_changes

This event triggers when the system deploys ModSecurity settings changes.

### Information

* **Action code run as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the system deploys the settings changes.
* `post` — Hook actions code runs after the system deploys the setting changes.


### Returns

This event returns the WHM API 1 [`modsec_deploy_settings_changes`](/openapi/whm/operation/modsec_deploy_settings_changes) function's returns.

## ModSecurity::modsec_disable_rule

This event triggers when the system disables a ModSecurity rule.

### Information

* **Action code run as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the system disables the rule.
* `post` — Hook actions code runs after the system disables the rule.


### Returns

This event returns the WHM API 1 [`modsec_disable_rule`](/openapi/whm/operation/modsec_disable_rule) function's returns.

## ModSecurity::modsec_disable_vendor

This event triggers when the system disables a ModSecurity vendor's rule set.

### Information

* **Action code run as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the system disables the vendor's rule set.
* `post` — Hook actions code runs after the system disables the vendor's rule set.


### Returns

This event returns the WHM API 1 [`modsec_disable_vendor`](/openapi/whm/operation/modsec_disable_vendor) function's returns.

## ModSecurity::modsec_disable_vendor_configs

This event triggers when the system disables a ModSecurity vendor's configuration files.

### Information

* **Action code run as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the system disables the vendor's configuration files.
* `post` — Hook actions code runs after the system disables the vendor's configuration files.


### Returns

This event returns the WHM API 1 [`modsec_disable_vendor_configs`](/openapi/whm/operation/modsec_disable_vendor_configs) function's returns.

## ModSecurity::modsec_disable_vendor_updates

This event triggers when the system disables automatic updates for a ModSecurity vendor.

### Information

* **Action code run as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the system disables the automatic updates.
* `post` — Hook actions code runs after the system disables the automatic updates.


### Returns

This event returns the WHM API 1 [`modsec_disable_vendor_updates`](/openapi/whm/operation/modsec_disable_vendor_updates) function's returns.

## ModSecurity::modsec_discard_all_rule_changes

This event triggers when the system discards the staged ModSecurity rule changes.

### Information

* **Action code run as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the system discards the staged ModSecurity rule changes.
* `post` — Hook actions code runs after the system discards the staged ModSecurity rule changes.


### Returns

This event returns the WHM API 1 [`modsec_discard_all_rule_changes`](/openapi/whm/operation/modsec_discard_all_rule_changes) function's returns.

## ModSecurity::modsec_edit_rule

This event triggers when the system stages changes to a ModSecurity rule.

### Information

* **Action code run as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the system stages the changes.
* `post` — Hook actions code runs after the system stages the changes.


### Returns

This event returns the WHM API 1 [`modsec_edit_rule`](/openapi/whm/operation/modsec_edit_rule) function's returns.

## ModSecurity::modsec_enable_vendor

This event triggers when the system enables a ModSecurity vendor's rule set.

### Information

* **Action code run as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the system enables the vendor's rule set.
* `post` — Hook actions code runs after the system enables the vendor's rule set.


### Returns

This event returns the WHM API 1 [`modsec_enable_vendor`](/openapi/whm/operation/modsec_enable_vendor) function's returns.

## ModSecurity::modsec_enable_vendor_configs

This event triggers when the system enables a ModSecurity vendor's configuration files.

### Information

* **Action code run as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the system enables the vendor's configuration files.
* `post` — Hook actions code runs after the system enables the vendor's configuration files.


### Returns

This event returns the WHM API 1 [`modsec_enable_vendor_configs`](/openapi/whm/operation/modsec_enable_vendor_configs) function's returns.

## ModSecurity::modsec_enable_vendor_updates

This event triggers when the system enables automatic updates for a ModSecurity vendor.

### Information

* **Action code run as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the system enables automatic updates for the vendor.
* `post` — Hook actions code runs after the system enables automatic updates for the vendor.


### Returns

This event returns the WHM API 1 [`modsec_enable_vendor_updates`](/openapi/whm/operation/modsec_enable_vendor_updates) function's returns.

## ModSecurity::modsec_make_config_active

This event triggers when the system activates a ModSecurity configuration.

### Information

* **Action code run as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the system activates a ModSecurity configuration.
* `post` — Hook actions code runs after the system activates a ModSecurity configuration.


### Returns

This event returns the WHM API 1 [`modsec_make_config_active`](/openapi/whm/operation/modsec_make_config_active) function's returns.

## ModSecurity::modsec_make_config_inactive

This event triggers when the system deactivates a ModSecurity configuration.

### Information

* **Action code run as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the system deactivates a ModSecurity configuration.
* `post` — Hook actions code runs after the system deactivates a ModSecurity configuration.


### Returns

This event returns the WHM API 1 [`modsec_make_config_inactive`](/openapi/whm/operation/modsec_make_config_inactive) function's returns.

## ModSecurity::modsec_remove_rule

This event triggers when the system removes a ModSecurity rule.

### Information

* **Action code run as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the system removes a ModSecurity rule.
* `post` — Hook actions code runs after the system removes a ModSecurity rule.


### Returns

This event returns the WHM API 1 [`modsec_remove_rule`](/openapi/whm/operation/modsec_remove_rule) function's returns.

## ModSecurity::modsec_remove_setting

This event triggers when the system removes a ModSecurity configuration directive.

### Information

* **Action code run as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the system removes a ModSecurity configuration directive.
* `post` — Hook actions code runs after the system removes a ModSecurity configuration directive.


### Returns

This event returns the WHM API 1 [`modsec_remove_setting`](/openapi/whm/operation/modsec_remove_setting) function's returns.

## ModSecurity::modsec_remove_vendor

This event triggers when the system removes a ModSecurity vendor.

### Information

* **Action code run as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the system removes a ModSecurity vendor.
* `post` — Hook actions code runs after the system removes a ModSecurity vendor.


### Returns

This event returns the WHM API 1 [`modsec_remove_vendor`](/openapi/whm/operation/modsec_remove_vendor) function's returns.

## ModSecurity::modsec_set_config_text

This event triggers when the system stages changes to a ModSecurity configuration file.

### Information

* **Action code run as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the system stages changes to a ModSecurity configuration file.
* `post` — Hook actions code runs after the system stages changes to a ModSecurity configuration file.


### Returns

This event returns the WHM API 1 [`modsec_set_config_text`](/openapi/whm/operation/modsec_set_config_text) function's returns.

## ModSecurity::modsec_set_setting

This event triggers when the system sets a ModSecurity configuration directive.

### Information

* **Action code run as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the system sets a ModSecurity configuration directive.
* `post` — Hook actions code runs after the system sets a ModSecurity configuration directive.


### Returns

This event returns the WHM API 1 [`modsec_set_setting`](/openapi/whm/operation/modsec_set_setting) function's returns.

## ModSecurity::modsec_undisable_rule

This event triggers when the system enables a ModSecurity rule.

### Information

* **Action code run as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the system enables the rule.
* `post` — Hook actions code runs after the system enables the rule.


### Returns

This event returns the WHM API 1 [`modsec_undisable_rule`](/openapi/whm/operation/modsec_undisable_rule) function's returns.

## ModSecurity::modsec_update_vendor

This event triggers when the system updates a ModSecurity vendor's rule set.

### Information

* **Action code run as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the system updates a ModSecurity vendor's rule set.
* `post` — Hook actions code runs after the system updates a ModSecurity vendor's rule set.


### Returns

This event returns the WHM API 1 [`modsec_update_vendor`](/openapi/whm/operation/modsec_update_vendor) function's returns.