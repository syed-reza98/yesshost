# Save ModSecurity rule copy

This function copies a ModSecurity™ rule with a new rule ID.

Important:

When you disable the
Web Server role,
the system disables this function.

Endpoint: GET /modsec_clone_rule
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `config` (string, required)
    The rule's ModSecurity configuration file.
    Example: "modsec2.user.conf"

  - `id` (integer, required)
    The existing rule's ID.
    Example: 123456789

## Response 200 fields (application/json):

  - `data` (object)

  - `data.rule` (object)
    A list of information about the cloned ModSecurity rule.

  - `data.rule.config` (string)
    The rule's ModSecurity configuration file.
    Example: "modsec2.user.conf"

  - `data.rule.config_active` (integer)
    Whether the configuration file is active.

* 1 — Active.
* 0 — Not active.
    Enum: 1, 0

  - `data.rule.disabled` (integer)
    Whether the rule is disabled.

* 1 — Disabled.
* 0 — Enabled.
    Enum: 1, 0

  - `data.rule.id` (integer)
    The rule's ID number.
    Example: 123456789

  - `data.rule.meta_msg` (string)
    The rule's description.
    Example: "Rejected request"

  - `data.rule.rule` (string)
    The rule's text that includes the new rule ID.
    Example: "SecRule REQUEST_URI \"/rejected.php\" \"deny,auditlog,msg:'Rejected request',id:'1'\""

  - `data.rule.staged` (integer)
    Whether the rule is staged.

* 1 — Staged.
* 0 — Not staged.
    Enum: 1, 0

  - `data.rule.vendor_active` (integer)
    Whether the vendor is active.

* 1 — Active.
* 0 — Not active.
    Enum: 1, 0

  - `data.rule.vendor_id` (string)
    The vendor's unique short name.

Note:

Any rule that does not belong to a vendor rule set will not
return a value.
    Example: "YourVendor"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "modsec_clone_rule"

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


