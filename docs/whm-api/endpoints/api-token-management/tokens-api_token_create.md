# Create WHM API token

This function creates an API token. You can use API tokens instead of a password
or access hash key to execute WHM API 1 functions over HTTPS. For more information
about API tokens, read our
Manage API Tokens in WHM
documentation.

Important:

You must call this function over an SSL connection.

Endpoint: GET /api_token_create
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `token_name` (string, required)
    The API token's name.

Note:

* An API token name's maximum length is 50 characters, and the name may only
contain alphanumeric characters, dashes (-), and underscores (_).
* You must assign a name that does not already exist to the API token.
    Example: "example"

  - `acl` (string)
    The privileges to assign to the token. If you do not use this parameter, the system
assigns all of your privileges to the token.

Note:

* You can only assign privileges that you possess to the API token.
* To assign multiple privileges to the token, increment the parameter name. For
example: acl-0, acl-1, acl-2.

  - `expires_at` (integer)
    The API token's expiration time. If you do not use this parameter, the
API token will not expire.

* A date, in Unix Epoch format.
* 0 — The API token will not expire.

Important:

 When an API token expires, the system does not delete it. You must
 manually delete expired API tokens.
    Example: 1609372800

  - `whitelist_ip` (any)
    One or more optional remote IP or CIDR IP ranges this token may be used from. If you do not use this parameter, the system
does not limit which IPs can use this token.

Note:

* To assign multiple whitelisted IPs to the token, increment the parameter name. For
example: whitelist_ip-0, whitelist_ip-1, whitelist_ip-2.

## Response 200 fields (application/json):

  - `data` (object)

  - `data.acls` (array)
    An array of privileges that the token possesses.
    Example: ["kill-acct"]

  - `data.create_time` (integer)
    The API token's creation time, in Unix time format.
    Example: 1483625276

  - `data.expires_at` (integer,null)
    The API token's expiration time.

* A valid timestamp, in Unix time format.
* A null value.
    Example: 1609372800

  - `data.name` (string)
    The new API token's name.

Note:

Use this value to revoke an API token with WHM API 1's
api_token_revoke function.
    Example: "example"

  - `data.token` (string)
    The new API token to use to authenticate to WHM.

Warning:

Make certain that you save your API token in a safe location.
You cannot access the token again after you use this function.
    Example: "UWU28DCA23NKY76CN17MDPKM3O7EFQY8"

  - `data.whitelist_ips` (array,null)
    List of remote IP or CIDR IP ranges this token may be used from.
    Example: ["1.1.1.1","1.1.1.2","1.1.1.8/29","fc00:abcd:0000:0000:0000:0000:0000:000f","2620:0000:28a4:0000:0000:0000:0000:0000/48"]

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "api_token_create"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


