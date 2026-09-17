# Return ModSecurity logs

This function retrieves ModSecurity™ log entries from the modsec SQLite database.

Important:

When you disable the
Web Server role,
the system disables this function.

Endpoint: GET /modsec_get_log
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (array)
    An array of objects that contains information about the log entry.

  - `data.action_desc` (string)
    The web server's response to the client.
    Example: "Access denied with code 406 (phase 1)."

  - `data.file_exists` (integer)
    Whether the file in the meta_file return exists.

* 1 — The file exists.
* 0 — The files does not exist.
    Enum: 1, 0

  - `data.handler` (string,null)
    This parameter only returns the null value.

  - `data.host` (string)
    The virtual host's (vhost) domain name.
    Example: "server.example.com"

  - `data.http_method` (string)
    The
[HTTP method](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html)
that the client used to generate the hit.
    Example: "GET"

  - `data.http_status` (integer)
    The
[HTTP status code](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
that the web server returned.
    Example: 406

  - `data.http_version` (string)
    The HTTP version number.
    Example: "HTTP/1.1"

  - `data.id` (integer)
    The line number from the modsec database.
    Example: 28

  - `data.ip` (string)
    The client's IP address.
    Example: "10.1.14.77"

  - `data.justification` (string)
    The specific criteria from the ModSecurity rule that generated the hit.
    Example: "Match of \"within %{tx.allowed_methods}\" against \"REQUEST_METHOD\" required."

  - `data.meta_file` (string)
    The ModSecurity configuration file with the rule that triggered the log entry.
    Example: "/usr/local/apache/conf/modsec_vendor_configs/OWASP/base_rules/modsecurity_crs_30_http_policy.conf"

  - `data.meta_id` (integer)
    The ID of the ModSecurity rule that triggered the log entry.
    Example: 960032

  - `data.meta_line` (integer)
    The ModSecurity rule's line number that triggered the log entry.
    Example: 31

  - `data.meta_logdata` (string,null)
    The transaction data fragment from the ModSecurity rule's logdata action.
    Example: "GET"

  - `data.meta_msg` (string)
    The human-readable message from the ModSecurity rule's msg action.
    Example: "Method is not allowed by policy"

  - `data.meta_offset` (integer)
    The byte offset at which a match occurred within the target data.

Note:

This data is not always available.

  - `data.meta_rev` (integer,null)
    The revision number from the ModSecurity rule's rev action.
    Example: 2

  - `data.meta_severity` (string,null)
    The hit severity level from the ModSecurity rule's severity action.
    Example: "CRITICAL"

  - `data.meta_uri` (string,null)
    The client-requested URI.

Note:

This data is not always available.

  - `data.path` (string)
    The accessed file's absolute path and filename.
    Example: "/favicon.ico"

  - `data.reportable` (integer)
    Whether the system can report the rule to the vendor.

* 1 — Report the rule to the vendor.
* 0 — Do not report the rule to the vendor.

Note:

The vendor must have configured a report URL in order to
report a rule.
    Enum: 1, 0

  - `data.timestamp` (string)
    When the system recorded the log entry, in YYYY-MM-DD HH:mm:SS format.

Note:

This value uses the server's configured time zone.
    Example: "2019-10-13T07:58:04.000Z"

  - `data.timezone` (integer)
    The server's configured timezone, in minutes difference UTC/GMT format.
    Example: -300

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "modsec_get_log"

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


