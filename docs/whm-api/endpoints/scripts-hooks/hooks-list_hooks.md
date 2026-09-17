# Return script hooks list

This function lists the server's script hooks.

Endpoint: GET /list_hooks
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.categories` (array)
    An array of objects containing hook categories.

  - `data.categories.category` (string)
    The script hook's category.
    Example: "RPM::Versions"

  - `data.categories.events` (array)
    An array of objects containing events.

  - `data.categories.events.event` (string)
    The event that triggers the script hook.
    Example: "MariaDB-server"

  - `data.categories.events.stage_order` (array)
    When the hook script will execute. It is possible for a hook script
to have both values.

* pre — The script runs before the function.
* post — The script runs after the function.
    Example: ["pre","post"]

  - `data.categories.events.stages` (array)
    An array of objects containing stage information.

  - `data.categories.events.stages.actions` (array)
    An array of objects containing information about hook script actions.

  - `data.categories.events.stages.attributes` (object)
    A list of hook script attributes.

  - `data.categories.events.stages.attributes.blocking` (integer)
    Whether the script hook contains a blocking context.

* 1 — Blocking context.
* 0 — No blocking context.
    Enum: 1, 0

  - `data.categories.events.stages.attributes.escalateprivs` (integer)
    Whether the hook script will run with escalated root
privileges.

* 1 — Runs with escalated privileges.
* 0 — Does not run with escalated privileges.
    Enum: 1, 0

  - `data.categories.events.stages.description` (string)
    The hook script's description.
    Example: "My hook script."

  - `data.categories.events.stages.stage` (string)
    When the hook script will execute.

* pre — The script runs before the function.
* post — The script runs after the function.
    Example: "post"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "list_hooks"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


