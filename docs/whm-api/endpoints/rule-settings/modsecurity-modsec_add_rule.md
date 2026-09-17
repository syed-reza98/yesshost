# Add staged ModSecurity rule

This function adds a new rule to a ModSecurity™ configuration staging file. For example, if you choose to add a rule for the example.conf file, the function stages the rule in the example.conf. STAGE file.

Important:

  This function does not actually deploy the rule. To deploy the rule, use the WHM API 1 Functions - modsec_deploy_all_rule_changes function.

Important:

  When you disable the Web Server role, the system disables this function.

Endpoint: GET /modsec_add_rule
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `config` (string, required)
    The ModSecurity configuration file.
    Example: "modsec2.user.conf"

  - `rule` (string, required)
    The rule's text.
    Example: "SecAction \"phase:1,id:168,nolog,pass,setvar:tx.REMOTE_ADDR=/%{REMOTE_ADDR}/\""

## Response 200 fields (application/json):

  - `data` (object)

  - `data.rule` (object)
    hash that contains information about the new ModSecurity rule. This hash includes the id , rule , disabled , meta_msg , and duplicate returns.

  - `data.rule.config` (any)

  - `data.rule.config_active` (any)

  - `data.rule.disabled` (integer)
    Whether the rule is disabled.
- 1  Disabled.
- 0  Enabled.
    Enum: 0, 1

  - `data.rule.duplicate` (integer)
    Whether the rule already exists in the ModSecurity configuration staging file.
- 1  Exists.
- 0  Does not exist.
    Enum: 0, 1

  - `data.rule.id` (integer)
    The ModSecurity rule's ID. A valid ModSecurity rule ID.
    Example: 168

  - `data.rule.meta_msg` (string)
    The ModSecurity rule's description. A valid string.
    Example: "Example rule message"

  - `data.rule.rule` (string)
    The ModSecurity rule's text. A valid ModSecurity rule.
    Example: "SecAction \\\"phase:1,id:168,nolog,pass,setvar:tx.REMOTE_ADDR=/%{REMOTE_ADDR}/\\\""

  - `data.rule.staged` (any)

  - `data.rule.vendor_active` (any)

  - `data.rule.vendor_id` (any)

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "modsec_add_rule"

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


