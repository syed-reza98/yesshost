# Validate ModSecurity rule

This function checks a ModSecurity™ rule's validity.

Important:

When you disable the
Web Server role,
the system disables this function.

Endpoint: GET /modsec_check_rule
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `rule` (string, required)
    The ModSecurity rule to check.
    Example: "SecAction \"pass,id:1234567\""

## Response 200 fields (application/json):

  - `data` (object)

  - `data.problem` (string)
    A string that describes any errors with the ModSecurity
rule.

Note:

The function only returns this value if an error occurred.
    Example: "The rule is invalid. Apache returned the following error: AH00526: Syntax error on line 1 of /var/tmp/15500._USR_LOCAL_CPANEL_WHOSTMGR_BIN_XML_API__.gl2t8wZ1.tmp/validate.conf:\nInvalid command ''OWASP'', perhaps misspelled or defined by a module not included in the server configuration\n'"

  - `data.valid` (integer)
    Whether the rule is valid.

* 1 — Valid rule.
* 0 — Invalid rule.
    Enum: 1, 0

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "modsec_check_rule"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK Invalid Rule"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


