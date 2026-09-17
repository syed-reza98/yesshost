# Return additional domain conversion details

This function returns the details of a conversion from an addon
domain to an account. Use WHM API 1's convert_addon_domain_to_account
to start a conversion.

Important:

When you disable the
Web Server role,
the system disables this function.

Endpoint: GET /convert_addon_fetch_conversion_details
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `job_id` (integer, required)
    The conversion's job identification number.
    Example: 2

## Response 200 fields (application/json):

  - `data` (object)

  - `data.domain` (string)
    The addon domain you converted into a cPanel account.
    Example: "cptestaddon175.tld"

  - `data.job_end_time` (integer)
    A date that indicates when the convertion ended.
    Example: 1462216653

  - `data.job_id` (integer)
    The conversion's job identification number.
    Example: 2

  - `data.job_start_time` (integer)
    A date that indicates when the conversion started.
    Example: 1462465001

  - `data.job_status` (string)
    The status of the conversion process.

* INPROGRESS — The conversion process is in progress.
* QUEUED — The system queued the conversion job.
* SKIPPED — The system skipped at least one step in the conversion process.
* FAILED — At least one step in the conversion process failed.
* DONE — The conversion process finished successfully.
    Enum: "INPROGRESS", "QUEUED", "SKIPPED", "FAILED", "DONE"

  - `data.source_acct` (string)
    The source cPanel user account that you converted into an account.
    Example: "cptest"

  - `data.steps` (array)
    An array of objects containing the steps taken by the conversion process.
    Example: [{"end_time":1462465001,"start_time":1462465001,"status":"DONE","step_name":"Saving email forwarder data","warnings":""},{"end_time":1462465001,"start_time":1462465001,"status":"DONE","step_name":"Saving custom DNS records","warnings":""},{"end_time":1462465001,"start_time":1462465001,"status":"DONE","step_name":"Saving installed SSL Certificate","warnings":""},{"end_time":1462465001,"start_time":1462465001,"status":"DONE","step_name":"Saving EasyApache 4 configuration","warnings":""},{"end_time":1462465009,"start_time":1462465001,"status":"DONE","step_name":"Removing Addon Domain","warnings":""},{"end_time":1462465014,"start_time":1462465009,"status":"DONE","step_name":"Creating new cPanel account","warnings":""},{"end_time":1462465015,"start_time":1462465014,"status":"DONE","step_name":"Restoring custom DNS records","warnings":""},{"end_time":1462465016,"start_time":1462465015,"status":"DONE","step_name":"Copying Custom VirtualHost Includes","warnings":""},{"end_time":1462465016,"start_time":1462465016,"status":"DONE","step_name":"Copying document root content","warnings":"/usr/bin/gtar: ./shadow: Cannot open: Permission denied\\n/usr/bin/gtar: Exiting with failure status due to previous errors"},{"end_time":1462465016,"start_time":1462465016,"status":"DONE","step_name":"Setting the proper permissions on document root","warnings":""},{"end_time":1462465017,"start_time":1462465016,"status":"DONE","step_name":"Copying email accounts","warnings":""},{"end_time":1462465017,"start_time":1462465017,"status":"DONE","step_name":"Restoring email forwarders","warnings":""},{"end_time":1462465017,"start_time":1462465017,"status":"DONE","step_name":"Copying Autoresponders","warnings":""},{"end_time":1462465017,"start_time":1462465017,"status":"DONE","step_name":"Copying webmail data","warnings":""},{"end_time":1462465017,"start_time":1462465017,"status":"DONE","step_name":"Restoring installed SSL Certificate","warnings":""},{"end_time":1462465017,"start_time":1462465017,"status":"DONE","step_name":"Restoring EasyApache 4 configuration","warnings":""}]

  - `data.steps.end_time` (integer)
    The date when the step ended.

  - `data.steps.start_time` (integer)
    The date when the step started.

  - `data.steps.status` (string)
    The status of the conversion step.

* DONE — The step is finished.
* IN PROGRESS — The step is in progress.
* FAILED — The step failed.
    Enum: "DONE", "IN PROGRESS", "FAILED"

  - `data.steps.step_name` (string)
    A step of the conversion process.

  - `data.steps.warnings` (string)
    The warning message for the step that describes a potential problem, if any exist.

  - `data.target_acct` (string)
    The destination cPanel user account for the conversion.
    Example: "user2"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "convert_addon_fetch_conversion_details"

  - `metadata.reason` (string)
    The reason the function failed when the metadata.result field is 0. This field may include a success message when the function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The API version of the function.
    Example: 1


