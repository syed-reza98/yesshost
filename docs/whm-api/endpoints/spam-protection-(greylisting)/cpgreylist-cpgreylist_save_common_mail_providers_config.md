# Update Greylisting new mail provider handling

This function sets whether Greylisting trusts new entries to cPanel's common mail providers list.

Endpoint: GET /cpgreylist_save_common_mail_providers_config
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `autotrust_new_common_mail_providers` (integer)
    Whether Greylisting automatically trusts new mail providers that cPanel adds to the common mail providers list.

* 1 — Automatically trust new mail providers cPanel adds to the common mail providers list.
* 0 — Do not automatically trust new mail providers cPanel adds to the common mail providers list.
    Enum: 0, 1

  - `PROVIDERKEY` (integer)
    Whether Greylisting automatically trusts new IP addresses that cPanel adds to this mail provider.

* 1 — Automatically trust new IP addresses cPanel adds to this mail provider.
* 0 — Do not automatically trust new IP addresses cPanel adds to this mail provider.

If you do not specify this parameter, the system will not change Greylisting settings for any existing provider.

Note:

 The parameter's name is the provider's key name.
 Example key and value:
 * google=0
    Enum: 0, 1

## Response 200 fields (application/json):

  - `data` (object)

  - `data.autotrust_new_common_mail_providers` (integer)
    Whether Greylisting automatically trusts new mail providers that WebPros International, LLC adds to the common mail providers list.

* 1 - New mail providers are automatically trusted.
* 0 - New mail providers are not automatically trusted.
    Enum: 0, 1

  - `data.common_mail_providers` (object)
    An object containing common mail provider settings.
    Example: {"cpanel":{"autoupdate":1,"display_name":"cPanel","is_trusted":1},"sectigo":{"autoupdate":1,"display_name":"Comodo/Sectigo","is_trusted":1}}

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "cpgreylist_load_common_mail_providers_config"

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


