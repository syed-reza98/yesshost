# Return restoration tasks list

This function lists the tasks in the restoration queue.

Endpoint: GET /restore_queue_state
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)
    Example: {"active":[{"options":{"give_ip":1,"mail_config":1,"mysql":1,"subdomains":1},"restore_point":"2019-10-21T00:00:00.000Z","user":"username"}],"completed":[{"options":{"give_ip":1,"mail_config":0,"mysql":1,"subdomains":0},"restore_point":"2019-10-22T00:00:00.000Z","user":"username"}],"is_active":1,"pending":[{"options":{"give_ip":0,"mail_config":1,"mysql":0,"subdomains":1},"restore_point":"2019-10-23T00:00:00.000Z","user":"username"}]}

  - `data.active` (array)
    An array of objects containing restoration queue items that the system is actively processing.
    Example: [{"options":{"give_ip":1,"mail_config":1,"mysql":1,"subdomains":1},"restore_point":"2019-10-21T00:00:00.000Z","user":"username"}]

  - `data.active.options` (object)

  - `data.active.options.give_ip` (integer)
    Whether the restoration process will assign a dedicated IP address
to the account.

* 1 — Will assign.
* 0 — Will not assign.
    Enum: 1, 0

  - `data.active.options.mail_config` (integer)
    Whether the restoration process will restore the account's email
configuration.

* 1 — Will restore.
* 0 — Will not restore.
    Enum: 1, 0

  - `data.active.options.mysql` (integer)
    Whether the restoration process will restore the account's MySQL®
databases.

* 1 — Will restore.
* 0 — Will not restore.
    Enum: 1, 0

  - `data.active.options.subdomains` (integer)
    Whether the restoration process will restore the account's subdomains.

* 1 — Will restore.
* 0 — Will not restore.
    Enum: 1, 0

  - `data.active.restore_point` (string)
    The date of the backup file.
    Example: "2019-10-21T00:00:00.000Z"

  - `data.active.user` (string)
    The cPanel account's username.
    Example: "username"

  - `data.completed` (array)
    An array of objects containing restoration queue items that the system has already processed.
    Example: [{"options":{"give_ip":1,"mail_config":0,"mysql":1,"subdomains":0},"restore_point":"2019-10-22T00:00:00.000Z","user":"username"}]

  - `data.is_active` (integer)
    Whether the restoration queue is actively processing a task.

* 1 — The restoration queue is processing a task.
* 0 — The restoration queue is not processing a task.
    Enum: 0, 1

  - `data.pending` (array)
    An array of objects containing restoration queue items that the system will process next.
    Example: [{"options":{"give_ip":0,"mail_config":1,"mysql":0,"subdomains":1},"restore_point":"2019-10-23T00:00:00.000Z","user":"username"}]

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "restore_queue_state"

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


