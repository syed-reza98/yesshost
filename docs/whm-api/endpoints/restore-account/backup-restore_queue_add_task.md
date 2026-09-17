# Restore user account from backup

This function restores a user's cPanel account from a backup file.

Endpoint: GET /restore_queue_add_task
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `restore_point` (string, required)
    The date of the backup to use, in YYYY-MM-DD format.
    Example: "2019-10-21T00:00:00.000Z"

  - `user` (string, required)
    The cPanel account's username.
    Example: "username"

  - `destid` (string)
    The destination's identification string.

* local — The local directory.
* The destination ID string's value.
    Example: "LmTZCUpqqLSPH8AO7pVtIeNK"

  - `give_ip` (integer)
    Whether to assign the account a dedicated IP address.

* 1 — Assign a dedicated IP address.
* 0 — Use the shared IP address.
    Enum: 0, 1

  - `mail_config` (integer)
    Whether to restore the account's email configuration.

* 1 — Restore.
* 0 — Do not restore.
    Enum: 0, 1

  - `mysql` (integer)
    Whether to restore the account's MySQL® databases.

* 1 — Restore.
* 0 — Do not restore.
    Enum: 0, 1

  - `subdomains` (integer)
    Whether to restore the account's subdomains.

* 1 — Restore.
* 0 — Do not restore.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `data` (object)

  - `data.queue_id` (string)
    The process's internal task queue ID.
    Example: "3b99QG5fp99tdL5"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "restore_queue_add_task"

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


