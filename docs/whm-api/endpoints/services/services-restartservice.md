# Restart service

This function restarts a service, or daemon, on a server.

Note:

If the user only possesses the clustering
Access Control List (ACL)
then this function can only act on the named service.

Endpoint: GET /restartservice
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `service` (string, required)
    The service to restart. For a list of possible values, read our
Access Control List (ACL)
documentation.
    Example: "exim"

  - `queue_task` (integer)
    Whether to queue this task.

* 1 — Queue.
* 0 — Do not queue.

Note:

This parameter affects the output return.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `data` (object)

  - `data.output` (string)
    The function's raw output.

Note:

If you call the queue_task parameter, this changes the return's output:

* 1 — Nothing.
* 0 — A string of raw output.
    Example: "Waiting for httpd to restart..............finished.\\n\\nhttpd (/usr/local/apache/bin/httpd -k start -DSSL) running as root with PID 21379\\nhttpd (/usr/local/apache/bin/httpd -k start -DSSL) running as root with PID 21385\\n\\nhttpd started ok\\n"

  - `data.service` (string)
    The restarted service.
    Example: "exim"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "restartservice"

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


