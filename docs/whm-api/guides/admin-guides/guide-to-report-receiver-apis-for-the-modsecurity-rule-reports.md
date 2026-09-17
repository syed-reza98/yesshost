[Development Guides Home](/guides)

# Guide to Report Receiver APIs for the ModSecurity Rule Reports

## Introduction

This document describes report receiver API endpoints for the ModSecurity™ Rule Reports. cPanel & WHM provides an API to transmit ModSecurity™ rule hits to a customizable URL. The report function allows rule distributors to receive feedback about problems that users encounter with their ModSecurity rules.

Warning:
This document is for ModSecurity vendors, such as OWASP, rather than cPanel & WHM developers.

## Set the endpoint URL

Each vendor requires a metadata file. This file contains the information that the WHM API 1 uses to identify the rules, where to download those rules, and the report URL.

For more information about how to set the report receiver endpoint URL, read our [Create a ModSecurity Vendor](/guides/quickstart-development-guide/tutorial-create-a-modsecurity-vendor) documentation.

## Implement an API endpoint

Make **certain** that your report receiver endpoint accepts the following request and response data pair:

### Request

The report sender API provides the request data.

#### HTTP Details

| Details | Description |
|  --- | --- |
| *Path to API endpoint* | You can customize the endpoint URL to meet your individual needs. |
| *Methods accepted* | `POST` |
| *Request body Content-Type* | `application/json` |


#### Body Details

| Input | Type | Description |
|  --- | --- | --- |
| `hits` | *array* |  |
|       `meta_id` | *integer* | The unique ID number, as the `id` action of the ModSecurity rule specifies it. |
|       `id` | *integer* | The line number from the `modsec` database. |
|      `ip` | *string* | The client's source IP address. |
|      `http_version` | *string* | The Hypertext Transfer Protocol (HTTP) version number. |
|       `meta_line` | *integer* | The line number of the rule that generated the hit within the ModSecurity configuration file. |
|       `timestamp` | *string* | The time of the hit. This parameter uses the server's configured time zone. |
|       `meta_uri` | *string* | The client-requested URI. This data is not always available. |
|       `http_method` | *string* | The HTTP method that the client used to generate the hit. |
|       `http_status` | *integer* | The HTTP status code that the web server returned. |
|       `timezone` | *integer* | The server's configured timezone as a number of minutes offset from Greenwich Mean Time (GMT). |
|       `meta_file` | *string* | The file that contains the ModSecurity rule that generated the hit. |
|       `action_desc` | *string* | The text that the web server posted to the client. |
|       `meta_logdata` | *string* | The transaction data fragment from the ModSecurity rule's logdata action. |
|       `path` | *string* | The relative path to the virtual host's document root. |
|        `host` | *string* | The virtual host's domain name. |
|       `handler` | *string* | This parameter only returns `null`. |
|       `meta_offset` | *integer* | The byte offset where a match occurred within the target data.  This data is not always available. |
|       `meta_rev` | *integer* | The revision number from the ModSecurity rule's `rev` action. |
|       `justification` | *string* | The specific criteria from the ModSecurity rule that generated the hit. |
|       `meta_severity` | *string* | The hit severity level from the ModSecurity rule's `severity` action. |
|       `meta_msg` | *string* | The human-readable message from the ModSecurity rule's msg action. |
|       `file_exists` | *Boolean* | If the value is `1`, the file that the `meta_file` parameter lists exists. If the value is `0`, the file does not exist. |
| `email` | *string* | The email address that the submitter providers for future contact with the rule maintainers. |
| `type` | *string* | The type of report.   This field has no specified format. You can treat the field as freeform text. |
| `message` | *string* | A short message from the submitter about the rule's issue. |
| `rule_text` | *string* | The exact text of the rule at the time of submission.  You may encounter submissions of a report from an old hit, if the submission occurred after an update to the rule. Use the `meta_rev` field to track the rule revision that caused the problem. |


### Response

The report receiver API provides the response data.

#### HTTP details

| Details | Description |
|  --- | --- |
| *Status* | The status must always use `200` on success.  For any failure that still results in a JSON response, we recommend that you use a `200` status and the body to communicate the error. This status instructs the report sender API to attempt to parse the response.For complete failure to use a relevant JSON response, use `4xx` or `5xx` error codes. |
| *Response body Content-Type* | `application/json` |


#### Body details

| Output | Type | Details |
|  --- | --- | --- |
| `status` | *Boolean* | If the value is `1`, the receiver accepted the report. If the value is `0`, the receiver encountered an error. |
| `error`  (optional) | *string* | A short message about the error.  This value is optional unless an error occurs. |