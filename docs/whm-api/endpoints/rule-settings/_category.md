# Rule Settings

Web Server Security (ModSecurity) / Rule Settings

## Add staged ModSecurity rule

 - [GET /modsec_add_rule](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_add_rule.md): This function adds a new rule to a ModSecurity™ configuration staging file. For example, if you choose to add a rule for the example.conf file, the function stages the rule in the example.conf. STAGE file.

Important:

  This function does not actually deploy the rule. To deploy the rule, use the WHM API 1 Functions - modsec_deploy_all_rule_changes function.

Important:

  When you disable the Web Server role, the system disables this function.

## Validate ModSecurity rule

 - [GET /modsec_check_rule](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_check_rule.md): This function checks a ModSecurity™ rule's validity.

Important:

When you disable the
Web Server role,
the system disables this function.

## Save ModSecurity rule copy

 - [GET /modsec_clone_rule](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_clone_rule.md): This function copies a ModSecurity™ rule with a new rule ID.

Important:

When you disable the
Web Server role,
the system disables this function.

## Enable all staged ModSecurity rule changes

 - [GET /modsec_deploy_all_rule_changes](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_deploy_all_rule_changes.md): This function deploys the staged changes for all of the ModSecurity™ configuration files
into the live configuration files. After the function deploys the configuration files, it
restarts Apache. If the new configuration is invalid, the system restores the original
configuration and preserves the staged changes.

Important:

When you disable the
Web Server role,
the system disables this function.

## Enable staged ModSecurity rule changes

 - [GET /modsec_deploy_rule_changes](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_deploy_rule_changes.md): This function deploys staged changes to the ModSecurity™ configuration file and restarts
Apache.

Note:

If the new configuration is invalid, the system will restore the original configuration
and maintain the staged changes.

Important:

When you disable the
Web Server role,
the system disables this function.

## Disable ModSecurity rule

 - [GET /modsec_disable_rule](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_disable_rule.md): This function disables a ModSecurity™ rule.

Important:

When you disable the
Web Server role,
the system disables this function.

## Remove all staged ModSecurity rule changes

 - [GET /modsec_discard_all_rule_changes](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_discard_all_rule_changes.md): This function discards the staged ModSecurity™ rule changes, if present, for all of
the configuration files.

Important:

When you disable the
Web Server role,
the system disables this function.

## Remove staged ModSecurity rule changes

 - [GET /modsec_discard_rule_changes](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_discard_rule_changes.md): This function discards staged rule changes for a ModSecurity™ configuration file.
Staged rule changes reside in a .STAGE file (for example, the staged changes for
the example.conf file exist in the example.conf.STAGE file).
This function deletes the .STAGE file that corresponds to the configuration file that
you specify.

Note:

To stage rule changes, call WHM API 1's modsec_add_rule function.

Important:

When you disable the
Web Server role,
the system disables this function.

## Update staged ModSecurity rule

 - [GET /modsec_edit_rule](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_edit_rule.md): This function stages edits to a ModSecurity™ rule. The system does not save changes
directly to the configuration file. Instead, it stages the changes to the configuration
file's .STAGE file (for example, for the example.conf file, the system stages changes
in the example.conf.STAGE file).

Important:

When you disable the
Web Server role,
the system disables this function.

## Return ModSecurity rules

 - [GET /modsec_get_rules](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_get_rules.md): This function retrieves the ModSecurity™ rules from one or more ModSecurity configuration files.

Important:

* When you disable the
Web Server role,
the system disables this function.
* You must include either the vendor_id or the config parameters.

## Remove ModSecurity rule

 - [GET /modsec_remove_rule](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_remove_rule.md): This function removes a rule from a ModSecurity™ configuration file.

Important:

When you disable the
Web Server role,
the system disables this function.

## Export ModSecurity rule error report

 - [GET /modsec_report_rule](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_report_rule.md): This function submits ModSecurity™ rule error reports to a remote receiver. The third
party rule vendors use these error reports to identify problems with their rule sets.

Important:

When you disable the
Web Server role,
the system disables this function.

## Enable ModSecurity rule

 - [GET /modsec_undisable_rule](https://api.docs.cpanel.net/specifications/whm.openapi/rule-settings/modsecurity-modsec_undisable_rule.md): This function enables a ModSecurity™ rule.

Important:

  When you disable the Web Server role, the system disables this function.

