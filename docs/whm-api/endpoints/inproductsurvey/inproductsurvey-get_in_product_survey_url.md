# Get in-product survey URL

This function returns whether to display the in-product survey banner and the survey link.

Endpoint: GET /get_in_product_survey_url
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.display` (string)
    Indicates whether the banner should be displayed.
* 1 — Display the banner.
* 0 — Do not display the banner.
    Enum: "0", "1"

  - `data.link` (string)
    The fully-resolved survey URL.
    Example: "https://example.com/survey?token=ABC123"

  - `data.max_dismiss` (string)
    Maximum number of times the banner may be dismissed before it is suppressed.
    Example: "3"

  - `data.new_user` (string)
    Indicates whether the authenticated user is considered new.
* 1 — New user.
* 0 — Existing user.
    Enum: "0", "1"

  - `data.submit_event` (string)
    Event identifier emitted on successful survey submission for analytics.
    Example: "survey_submitted"

  - `data.server_type` (string)
    Product/server type identifier.
    Example: "whm"

  - `data.user_type` (string)
    The user context type. Always "whm" for this endpoint.
    Enum: "whm"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_in_product_survey_url"

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


