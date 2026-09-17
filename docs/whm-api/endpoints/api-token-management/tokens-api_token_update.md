# Update WHM API token's settings

This function updates an API token's settings.

Endpoint: GET /api_token_update
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `token_name` (string, required)
    The API token's name.
    Example: "token"

  - `acl` (string)
    The new privileges to assign to the token. If you do not use this parameter,
the system will assign all of your privileges to the token.

For a list of Access Control List (ACL) privileges, read our
Edit Reseller Nameservers and Privileges
documentation.

Note:

* You can only assign privileges that you possess to the API token.

* The function replaces all current privileges with the privileges that you pass
in this parameter.

* To assign multiple privileges to the token, increment the parameter name.
For example, acl-1, acl-2, acl-3.

  - `expires_at` (integer)
    The API token's expiration time. If you do not use this parameter,
the API token will not expire.

* A date, in Unix Epoch format.
* 0 — The API token will not expire.

Important:

When an API token expires, the system does not delete it. You must
manually delete expired API tokens.
    Example: 1609372800

  - `new_name` (string)
    The API token's new name. If you do not use this parameter, the API token's name
remains the same.

Note:

* An API token name's maximum length is 50 characters, and the name may only
contain alphanumeric characters, dashes (-), and underscores (_).

* You must assign a name that does not already exist to the API token.
    Example: "example"

  - `whitelist_ip` (any)
    The new remote IP or CIDR IP ranges to assign to this token. If you do not use this parameter, the system
does not limit which IPs can use this token.

Note:

* The function replaces all current whitelisted IPs with the IPs you pass
in this parameter.

* To assign multiple whitelisted IPs to the token, increment the parameter name. For
example: whitelist_ip-0, whitelist_ip-1, whitelist_ip-2.

* If a token has whitelisted IPs set, they can be cleared by passing whitelist_ip=any as a parameter.
This will allow any IP to make API calls using that token.

## Response 200 fields (application/json):

  - `data` (object)

  - `data.acls` (array)
    A list of privileges assigned to the token.
    Example: ["create-acct","kill-acct","list-accts"]

  - `data.create_time` (integer)
    The API token's creation time.
    Example: 1483625276

  - `data.expires_at` (integer,null)
    The API token's expiration time.

Note:

A null value means that the API token does not expire.
    Example: 1609372800

  - `data.name` (string)
    The API token's name.

Note:

* This function returns the API token's new name when you use
the new_name parameter.

* Use this value to revoke an API token with WHM API 1's api_token_revoke
function.
    Example: "example"

  - `data.whitelist_ips` (array,null)
    List of remote IP or CIDR IP ranges this token may be used from.
    Example: ["192.0.2.1","192.0.2.2","192.0.2.8/29","fc00:abcd:0000:0000:0000:0000:0000:000f","2620:0000:28a4:0000:0000:0000:0000:0000/48"]

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "api_token_update"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 – Failed. Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


