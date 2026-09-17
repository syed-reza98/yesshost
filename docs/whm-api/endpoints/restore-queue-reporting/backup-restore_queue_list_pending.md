# Return pending restoration tasks list

This function lists the tasks that the restoration queue has not yet processed.

Endpoint: GET /restore_queue_list_pending
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.restore_job` (array)
    An array of objects that contain information about a pending task in the restoration queue.

  - `data.restore_job.options` (object)
    A list of information about the options for a pending task in the restoration queue.

  - `data.restore_job.options.destid` (string)
    The destination's identification string.

* local — The local directory.
* The destination ID string's value.
    Example: "LmTZCUpqqLSPH8AO7pVtIeNK"

  - `data.restore_job.options.give_ip` (integer)
    Whether the task will assign the account a dedicated IP address.

* 1 — Assign.
* 0 — Will not assign.
    Enum: 0, 1

  - `data.restore_job.options.mail_config` (integer)
    Whether the function will restore the account's email configuration.

* 1 — Restore.
* 0 — Will not restore.
    Enum: 0, 1

  - `data.restore_job.options.mysql` (integer)
    Whether the task will restore the account's MySQL® databases.

* 1 — Restore.
* 0 — Will not restore.
    Enum: 0, 1

  - `data.restore_job.options.subdomains` (integer)
    Whether the function will restore the account's subdomains.

* 1 — Restore.
* 0 — Will not restore.
    Enum: 0, 1

  - `data.restore_job.restore_point` (string)
    The date of the backup that the task will use, in YYYY-MM-DD format.
    Example: "2015-10-21T00:00:00.000Z"

  - `data.restore_job.user` (string)
    The cPanel account's username.
    Example: "username"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "restore_queue_list_pending"

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


