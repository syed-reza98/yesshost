# Update staged ModSecurity rule

This function stages edits to a ModSecurity™ rule. The system does not save changes
directly to the configuration file. Instead, it stages the changes to the configuration
file's .STAGE file (for example, for the example.conf file, the system stages changes
in the example.conf.STAGE file).

Important:

When you disable the
Web Server role,
the system disables this function.

Endpoint: GET /modsec_edit_rule
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `config` (string, required)
    The ModSecurity configuration file, relative to the /usr/local/apache/conf/ directory.
    Example: "modsec_vendor_configs/example.conf"

  - `id` (integer, required)
    The ModSecurity rule's ID.
    Example: 1234567

  - `rule` (string, required)
    The new ModSecurity rule.
    Example: "SecAction \"pass,id:1234567\""

## Response 200 fields (application/json):

  - `data` (object)

  - `data.rule` (object)
    A list of information about the new ModSecurity rule.

  - `data.rule.disabled` (integer)
    Whether the ModSecurity rule is disabled.

* 1 — Disabled.
* 0 — Enabled.
    Enum: 1, 0

  - `data.rule.id` (integer)
    The ModSecurity rule's ID.
    Example: 1234567

  - `data.rule.meta_msg` (string)
    The ModSecurity rule's description, if one exists.

  - `data.rule.rule` (string)
    The ModSecurity rule's text.
    Example: "SecAction \"pass,id:1234567\""

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "modsec_edit_rule"

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


