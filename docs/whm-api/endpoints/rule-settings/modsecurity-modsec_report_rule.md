# Export ModSecurity rule error report

This function submits ModSecurity™ rule error reports to a remote receiver. The third
party rule vendors use these error reports to identify problems with their rule sets.

Important:

When you disable the
Web Server role,
the system disables this function.

Endpoint: GET /modsec_report_rule
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `email` (string, required)
    The contact email address to send with the error report. This allows the rule's vendor to reply to the user directly.
    Example: "john.doe@example.com"

  - `message` (string, required)
    A short message that explains the reason for the report.
    Example: "Hi. We're having some trouble with this rule. It seems to be\nblocking all requests."

  - `row_ids` (integer, required)
    The MySQL® row IDs from the hits table in the modsec database
for the audit log event to report.

Note:

If you specify more than one row ID:

* You must comma-separate the rule IDs.
* The rule IDs must all correspond to the same ModSecurity rule.

  - `send` (integer, required)
    Whether the function sends the report to the rule's vendor.

* 1 — Send the report.
* 0 — Do not send the report.
    Enum: 1, 0

  - `type` (string, required)
    The report's type.

Note:

This value does not use a specified format. Treat the value as freeform text.
    Example: "false positive"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.report` (array)
    An array of objects containing information for the report.

  - `data.report.email` (string)
    The contact email address to send with the error report. This allows the rule's vendor to reply to the report directly.
    Example: "john.doe@example.com"

  - `data.report.hits` (array)
    An array of objects containing information about the hit.

  - `data.report.hits.action_desc` (string)
    The web server's response to the client.
    Example: "Access denied with code 406 (phase 2)."

  - `data.report.hits.handler` (string,null)
    This parameter only returns a null value.

  - `data.report.hits.host` (string)
    The virtual host's (vhost) domain name.
    Example: "example.com"

  - `data.report.hits.http_method` (string)
    The
[HTTP method](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html)
that the client used to generate the hit.
    Example: "GET"

  - `data.report.hits.http_status` (integer)
    The
[HTTP status code](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
that the web server returned.
    Example: 406

  - `data.report.hits.http_version` (string)
    The HTTP version number.
    Example: "HTTP/1.1"

  - `data.report.hits.id` (integer)
    The modsec database line number.
    Example: 794828

  - `data.report.hits.ip` (string)
    The client's IP address.
    Example: "10.215.215.236"

  - `data.report.hits.justification` (string)
    The specific criteria from the ModSecurity rule that generated the hit.
    Example: "Unconditional match in SecAction."

  - `data.report.hits.meta_file` (string)
    The ModSecurity configuration file that contains the rule that triggered the log entry.
    Example: "/usr/local/apache/conf/modsec_vendor_configs/MyVendor/one.conf"

  - `data.report.hits.meta_id` (integer)
    The ID of the ModSecurity rule that triggered the log entry.
    Example: 12345694

  - `data.report.hits.meta_line` (integer)
    The line number of the ModSecurity rule that triggered the log entry.
    Example: 1

  - `data.report.hits.meta_logdata` (string,null)
    The transaction data fragment from the ModSecurity rule's logdata action.

  - `data.report.hits.meta_msg` (string,null)
    The human-readable message from the ModSecurity rule's msg action.
    Example: "Method is not allowed by policy"

  - `data.report.hits.meta_offset` (integer)
    The byte offset at which a match occurred within the target
data.

Note:

This data is not always available.

  - `data.report.hits.meta_rev` (integer,null)
    The revision number from the ModSecurity rule's rev action.
    Example: 1

  - `data.report.hits.meta_severity` (string,null)
    The hit severity level from the ModSecurity
rule's severity action.

* ALERT
* CRITICAL
* DEBUG
* EMERGENCY
* ERROR
* INFO
* NOTICE
* WARNING
    Enum: "ALERT", "CRITICAL", "DEBUG", "EMERGENCY", "ERROR", "INFO", "NOTICE", "WARNING"

  - `data.report.hits.meta_uri` (string,null)
    The client-requested URI.

Note:

This data is not always available.

  - `data.report.hits.path` (string)
    The accessed file's path, relative to the document root.
    Example: "/something"

  - `data.report.hits.timestamp` (string)
    The date and time at which the log entry was made.

Note:

This parameter uses the server's configured time zone.
    Example: "2019-10-13T07:58:04.000Z"

  - `data.report.hits.timezone` (string)
    The server's configured timezone, in minutes difference from UTC/GMT.
    Example: "-300"

  - `data.report.message` (string)
    A short message that explains the reason for the report.
    Example: "Hi. We're having some trouble with this rule. It seems to be blocking all requests."

  - `data.report.rule_text` (string)
    The rule text from the configuration file.
    Example: "SecAction \"deny,auditlog,id:'12345694'\"\n"

  - `data.report.type` (string)
    The report's type.

Note:

This value does not use a specified format. Treat the value as
freeform text.
    Example: "false positive"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "modsec_report_rule"

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


