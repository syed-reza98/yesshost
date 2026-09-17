# Create Google Drive™ OAuth redirect URI

This function generates a
Google Drive™ OAuth redirect URI.

Endpoint: GET /backup_generate_google_oauth_uri
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `client_id` (string, required)
    The Google Drive client ID.
    Example: "aBcdeFgHIjK123"

  - `client_secret` (string, required)
    The Google Drive
client secret.
    Example: "aBcde123FgHIjK456"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.uri` (string)
    The generated Google Drive OAuth redirect URI.
    Example: "https://accounts.google.com/o/oauth2/auth?client_id=aBcdeFgHIjK123&response_type=code&redirect_uri=https%3A%2F%2Fhost-10-0-0-2.example.tld%3A2087%2Fgoogledriveauth%2Fcallback&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive.file&access_type=offline&prompt=consent&state=IkdLqOej5CLPW1nHRF6OJYaahE7HPXrRUvpFs6MhmBMbCjvWDQcstyYhbUFge5IJ"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "backup_generate_google_oauth_uri"

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


