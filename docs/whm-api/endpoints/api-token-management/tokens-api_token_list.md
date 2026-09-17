# Return WHM API tokens

This function lists a WHM account's API tokens.

Endpoint: GET /api_token_list
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.tokens` (object)
    An object that contains WHM account's API token names.
    Example: {"my-controller-token":{"acls":{"create-acct":0,"edit-account":0,"limit-bandwidth":1,"list-accts":1,"suspend-acct":1,"upgrade-account":0},"create_time":1483625276,"expires_at":1609372800,"name":"my-controller-token","whitelist_ips":["192.0.2.1","192.0.2.2","192.0.2.8/29","fc00:abcd:0000:0000:0000:0000:0000:000f","2620:0000:28a4:0000:0000:0000:0000:0000/48"]},"my-read-only-token":{"acls":{"create-acct":0,"edit-account":0,"limit-bandwidth":0,"list-accts":1,"suspend-acct":0,"upgrade-account":0},"create_time":1490882281,"expires_at":null,"name":"my-read-only-token","whitelist_ips":null}}

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "api_token_list"

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


