# Create API token for Dashboard

This function creates a WHM API token for WebPros Dashboard.

Endpoint: GET /wp_dashboard_create_api_token
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `acl` (string, required)
    The privileges to assign to the token.

Note:

* You can only assign privileges that you possess to the API token.
* This function does not assign all of your privileges by default. The system
 will reject a request without an acl or acl-N value.

  - `token_name` (string, required)
    The API token's name.

Note:

This parameter's value cannot exceed 50 characters and may only
contain alphanumeric characters, dashes (-), and underscores (_).
    Example: "example"

  - `expires_at` (integer)
    The API token's expiration time, in Unix Epoch format.

Note:
*  If you do not use this parameter or use the 0 value, the
API token will not expire.
* You must manually delete expired API tokens.
    Example: 1609372800

  - `whitelist_ip` (any)
    One or more optional remote IP address or CIDR IP address ranges that can use this token.

Note:

If you do not use this parameter, the system does not limit which IP addressess can use this token.

## Response 200 fields (application/json):

  - `data` (object)

  - `data.acls` (array)
    An array of privileges that the token possesses.
    Example: ["kill-acct"]

  - `data.create_time` (integer)
    The API token's creation time, in [Unix Epoch format](https://go.cpanel.net/unix_time).
    Example: 1483625276

  - `data.expires_at` (integer,null)
    The API token's expiration time, in [Unix Epoch format](https://go.cpanel.net/unix_time).
    Example: 1609372800

  - `data.name` (string)
    The new API token's name.
    Example: "example"

  - `data.token` (string)
    The new API token to use to authenticate to WHM.

Note:

You cannot access the token again after you use this function. Save the token in a safe location.
    Example: "UWU28DCA23NKY76CN17MDPKM3O7EFQY8"

  - `data.whitelist_ips` (array,null)
    The list of remote IP addresses or CIDR IP address ranges that can use this token.
    Example: ["192.0.2.1","192.0.2.2","192.0.2.8/29","2001:0db8:0000:0000:0000:0000:0000:0001","2001:0db8:0000:0000:0000:0000:0000:0000/48"]

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "wp_dashboard_create_api_token"

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


