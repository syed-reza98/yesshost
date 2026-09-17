# Add mail provider to Greylisting trusted hosts

This function marks the IP addresses for the specified mail provider as trusted. Greylisting will not defer emails from trusted IP addresses.

Endpoint: GET /cpgreylist_trust_entries_for_common_mail_provider
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `provider` (string, required)
    The mail providers’ names.

Call the cpgreylist_load_common_mail_providers_config API function
to retrieve the system’s recognized provider names.

Note:

 To trust multiple mail providers, increment the parameter name (for example: provider-0, provider-1, and provider-2).
    Example: "cpanel"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.providers_failed` (object)
    The providers whose configuration changes failed.

  - `data.providers_trusted` (object)
    The mail providers that Greylisting trusts.

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "cpgreylist_trust_entries_for_common_mail_provider"

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


