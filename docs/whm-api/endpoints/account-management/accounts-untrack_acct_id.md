# Remove UID or GID from tracked list

This function removes a user identification number (UID) or group
identification number (GID) from the tracked ID list.

Endpoint: GET /untrack_acct_id
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `check_exists` (integer)
    Whether to prevent removal of user or group IDs currently in use.

* 1 — Prevent removal.
* 0 — Do not prevent removal.
    Enum: 0, 1

  - `check_quota` (integer)
    Whether to prevent removal of the user ID if the quota system tracks associated files.

* 1 — Prevent removal.
* 0 — Do not prevent removal.

Note:

* This parameter only applies to user IDs and not group IDs.
* You cannot check filesystems if the quota system does not track them.
    Enum: 0, 1

  - `gid` (integer)
    The group ID to remove from the track list.

Note:

 You must include the uid parameter, the gid parameter, or both.
    Example: 1012

  - `protect_system` (integer)
    Whether to prevent removal of system user or group IDs.

* 1 — Prevent removal.
* 0 — Do not prevent removal.
    Enum: 0, 1

  - `uid` (integer)
    The user ID to remove from the track list.

Note:

 You must include the uid parameter, the gid parameter, or both.
    Example: 1012

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "untrack_acct_id"

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


