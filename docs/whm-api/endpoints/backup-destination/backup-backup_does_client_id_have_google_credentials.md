# Return Google Drive™ client ID credentials

This function returns whether a Google Drive™ client ID credential file exists.

Endpoint: GET /backup_does_client_id_have_google_credentials
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `client_id` (string, required)
    The user's Google Drive client ID.
    Example: "aBcdeFgHIjK123"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.exists` (integer)
    Whether Google credentials exist for the Google Drive client ID.

* 1 — Google Drive credentials exist.
* 0 — Google Drive credentials do not exist.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "backup_does_client_id_have_google_credentials"

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


