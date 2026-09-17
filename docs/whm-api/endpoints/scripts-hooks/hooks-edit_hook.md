# Update script hook

This function edits a script hook.

Endpoint: GET /edit_hook
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `id` (string, required)
    The script hook's ID.

Note:

To retrieve a hook's ID, use the WHM API 1 list_hooks function.
    Example: "HzEpGvT6QGUYwxuX3hWB8AUq"

  - `check` (string)
    The absolute file path to the script that runs after the hook script to check the results.
    Example: "/scripts/postcourier-authlibup"

  - `enabled` (integer)
    Whether the hook script is enabled.

* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `escalateprivs` (integer)
    Whether to escalate privileges to run the hook script as root.

* 1 — Escalate privileges.
* 0 — Do not escalate privileges.

Note:

* This parameter only applies to script hooks and not module hooks.
* Module hooks cannot escalate privileges.
    Enum: 0, 1

  - `exectype` (string)
    The type of function that the script hook launches.

* script — Runs a script.
* module — Calls a function in a module.
    Enum: "script", "module"

  - `hook` (string)
    The hook script's absolute file path or its module::subroutine invocation.
    Example: "/scripts/postcourier-authlibup"

  - `notes` (string)
    The script hook's notes.
    Example: "Note."

  - `rollback` (string)
    The absolute file path to the script that rolls back the hook script.
    Example: "/scripts/postcourier-authlibup"

  - `stage` (string)
    The condition when the hook script executes.

* pre — The script runs before the function.
* post — The script runs after the function.
    Enum: "pre", "post"

  - `weight` (integer)
    The script hook's priority in the hook's stage, where a lower value runs before a higher value.
    Example: 100

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "edit_hook"

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


