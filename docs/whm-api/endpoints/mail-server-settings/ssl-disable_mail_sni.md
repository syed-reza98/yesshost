# (Deprecated) Disable SNI mail services for domains (deprecated)

This function is deprecated and always fails.

Note:

Mail SNI is always enabled. cPanel & WHM no longer allows mail SNI to be disabled.

* Functions that disable Mail SNI fail and make no changes.
* Functions that enable Mail SNI succeed with a warning that Mail SNI is always enabled.

Endpoint: GET /disable_mail_sni
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string)
    The account's domain. You may pass multiple domains using additional
numbered parameters (e.g., domain-1, domain-2).

Note: This parameter has no effect — this function always fails
regardless of any input because mail SNI can no longer be disabled.
    Example: "example.com"

## Response 200 fields (application/json):

  - `data` (object)

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "disable_mail_sni"

  - `metadata.reason` (string)
    The reason the API function failed.
    Example: "cPanel & WHM no longer allows mail SNI to be disabled."

  - `metadata.result` (integer)
    This function always returns 0 (failure) because mail SNI
can no longer be disabled.

* 0 - Failed.
    Enum: 0

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


