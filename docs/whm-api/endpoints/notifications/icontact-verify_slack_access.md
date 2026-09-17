# Verify Slack® Webhook connection

This function verifies the connection to a Slack® WebHook. You can specify Slack accounts in the Contact Information section of WHM's Basic WebHost Manager Setup  interface ( Home >> Server Configuration >> Basic WebHost Manager Setup ).

Endpoint: GET /verify_slack_access
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.results` (array)
    The payload from the Slack server. For more information, visit Slack's WebHooks documentation .

  - `data.results.result` (object)

  - `data.results.result.message_id` (any)

  - `data.results.result.payload` (object)

  - `data.results.result.payload.content` (any)

  - `data.results.result.payload.headers` (object)

  - `data.results.result.payload.headers.access-control-allow-origin` (any)

  - `data.results.result.payload.headers.content-type` (any)

  - `data.results.result.payload.headers.date` (any)

  - `data.results.result.payload.headers.referrer-policy` (any)

  - `data.results.result.payload.headers.server` (any)

  - `data.results.result.payload.headers.strict-transport-security` (any)

  - `data.results.result.payload.headers.transfer-encoding` (any)

  - `data.results.result.payload.headers.vary` (any)

  - `data.results.result.payload.headers.x-frame-options` (any)

  - `data.results.result.payload.headers.x-slack-backend` (any)

  - `data.results.result.payload.headers.x-via` (any)

  - `data.results.result.payload.protocol` (any)

  - `data.results.result.payload.reason` (any)

  - `data.results.result.payload.status` (any)

  - `data.results.result.payload.success` (any)

  - `data.results.result.payload.url` (any)

  - `data.results.url` (any)

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "verify_slack_access"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    - 1 - Success
- 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


