# Return ModSecurity rules

This function retrieves the ModSecurity™ rules from one or more ModSecurity configuration files.

Important:

* When you disable the
Web Server role,
the system disables this function.
* You must include either the vendor_id or the config parameters.

Endpoint: GET /modsec_get_rules
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `config` (string)
    The file path to the configuration file, relative to the /usr/local/apache/conf directory.

Note:

You can use a comma-delimited list for multiple configuration files.

  - `exclude_bare_comments` (integer)
    Whether to exclude comments that are not associated with any directives.

* 1 — Exclude.
* 0 — Do not exclude.
    Enum: 1, 0

  - `exclude_other_directives` (integer)
    Whether the function only returns the SecRule and SecAction directives
from the configuration file, and comments that are not associated with a
rule.

* 1 — Only return the SecRule and SecAction directives and comments not
associated with a rule.
* 0 — Return all directives and comments.
    Enum: 1, 0

  - `vendor_id` (string)
    The vendor's unique short name.

Note:

You can use a comma-delimited list for multiple vendors.

## Response 200 fields (application/json):

  - `data` (object)

  - `data.chunks` (array)
    An array of objects that contains elements that represent the contents of each configuration file's rules.

  - `data.chunks.config` (string)
    The file path to the configuration file, relative to the /usr/local/apache/conf/ directory.
    Example: "modsec_vendor_configs/SomeVendor/config.conf"

  - `data.chunks.config_active` (integer)
    Whether the configuration file is active.

* 1 — Active.
* 0 — Not active.
    Enum: 1, 0

  - `data.chunks.disabled` (integer)
    Whether the rule is active.

* 1 — Not Active.
* 0 — Active.
    Enum: 1, 0

  - `data.chunks.id` (integer)
    The ModSecurity rule's ID number.

Note:

The function does not always return this parameter.
    Example: 662452

  - `data.chunks.meta_msg` (string)
    The description of the rule.
    Example: "Denied dangerous config traffic"

  - `data.chunks.rule` (string)
    The rule's text.

Note:

This return may include multiple directives and comments if they
are all part of the same rule.
    Example: "SecRule REQUEST_FILENAME \"config\" \"deny,id:662452,msg:'Denied dangerous config traffic',severity:1,auditlog\""

  - `data.chunks.staged` (integer)
    Whether the system has added the rule to the ModSecurity configuration file.

* 1 — Rule staged.
* 0 — Rule not staged.
    Enum: 1, 0

  - `data.chunks.vendor_active` (integer)
    Whether the vendor is active.

* 1 — Active.
* 0 — Not active.
    Enum: 1, 0

  - `data.chunks.vendor_id` (string)
    The vendor's unique short name.
    Example: "SomeVendor"

  - `data.staged_changes` (integer)
    Whether the chunks array includes staged changes that the system has not
yet added to the ModSecurity configuration file.

* 1 — Staged changes in output.
* 0 — No staged changes in output.
    Enum: 1, 0

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "modsec_get_rules"

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


