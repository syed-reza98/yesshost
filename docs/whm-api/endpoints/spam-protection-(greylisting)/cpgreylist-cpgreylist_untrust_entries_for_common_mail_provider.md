# Add mail provider to Greylisting non-trusted hosts

This function marks the IP addresses for the specified mail provider as not trusted.
Greylisting defers emails from non-trusted IP addresses.

Endpoint: GET /cpgreylist_untrust_entries_for_common_mail_provider
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `provider` (string, required)
    The mail provider.

Note:

To trust multiple mail providers,
 increment the parameter name. For example, provider-0, provider-1, provider-2.
    Example: "cpanel"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.providers_failed` (object)

  - `data.providers_untrusted` (object)
    The mail providers that Greylisting does not trust.

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "cpgreylist_untrust_entries_for_common_mail_provider"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0.
This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


