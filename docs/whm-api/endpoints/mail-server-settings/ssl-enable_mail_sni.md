# Enable SNI mail services for domains

This function enables SNI for mail services on the specified domains.

Note:

Mail SNI is always enabled.

* Functions that enable Mail SNI succeed with a warning that Mail SNI is always enabled.
* Functions that disable Mail SNI fail and make no changes.

Endpoint: GET /enable_mail_sni
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    The account's domain. You may pass multiple domains using additional numbered parameters (e.g., domain-1, domain-2).
    Example: "example.com"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.failed_domains` (object)
    An object containing the domains that failed to enable mail SNI.
Note:
This object only includes domains that you do not own.

  - `data.updated_domains` (object)
    An object containing the domains with updated mail SNI status.
Note:
This object is always empty. Mail SNI is always enabled, and this function makes no changes.
    Example: {}

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "enable_mail_sni"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result
field is 0. This field may display a success message when
a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1

  - `metadata.warnings` (array)
    Warnings generated while running the function.
    Example: ["Mail SNI is always enabled now."]


