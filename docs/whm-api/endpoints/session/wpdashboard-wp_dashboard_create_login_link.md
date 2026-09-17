# Create login link for Dashboard

This function creates a single-use WHM session for re-entry from WebPros Dashboard.

Endpoint: GET /wp_dashboard_create_login_link
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `service` (string)
    The session's service.
    Enum: "cpaneld", "whostmgrd", "webmaild"

  - `user` (string)
    The session's cPanel account username or a valid email address.
    Example: "username@example.com"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.cp_security_token` (string)
    The session's security token.
    Example: "/cpsess1234567890"

  - `data.expires` (integer)
    The session's expiration time, in [Unix Epoch format](https://go.cpanel.net/unix_time).
    Example: 1401993893

  - `data.service` (string)
    The security token's service.
    Example: "whostmgrd"

  - `data.session` (string)
    The session ID.
    Example: "username:RFw6MUp9S8sRwTSgqaUJWUCq8ZQg2Zkopx5KaTHRNQXBfT3n8xvfBEF9JJC3iiwa"

  - `data.url` (string)
    The security token's URL, which contains the session ID.
    Example: "https://hostname.example.com:2087/cpsess1234567890/login/?session=username:RFw6MUp9S8sRwTSgqaUJWUCq8ZQg2Zkopx5KaTHRNQXBfT3n8xvfBEF9JJC3iiwa"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "wp_dashboard_create_login_link"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "Created session"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


