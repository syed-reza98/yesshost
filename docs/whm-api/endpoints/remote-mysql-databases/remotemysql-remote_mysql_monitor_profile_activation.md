# Return remote MySQL profile activation

This function reports the current status of the remote MySQL® profile activation process. The activation process contains several steps that take some time to complete, so so you may need to call this function multiple times multiple times to monitor the progress.

Endpoint: GET /remote_mysql_monitor_profile_activation
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.job_in_progress` (object)
    An object containing the profile activation that is currently in progress.

  - `data.job_in_progress.profile_name` (string)
    The the name of the activated profile.
    Example: "remote_server"

  - `data.job_in_progress.start_time` (integer)
    The time when the job started.
    Example: 1432064519

  - `data.job_in_progress.status` (string)
    The job's current status.
* DONE — The process completed successfully.
* INPROGRESS — The process is currently active.
* FAILED — The process failed to complete successfully.
    Enum: "DONE", "INPROGRESS", "FAILED"

  - `data.job_in_progress.steps` (array)
    An array of objects containing the completed or active processes for the current profile activation.

  - `data.job_in_progress.steps.end_time` (integer)
    The time when the process finished.
    Example: 1432064520

  - `data.job_in_progress.steps.name` (string)
    The name of the process.
    Example: "Updating /root/.my.cnf"

  - `data.job_in_progress.steps.start_time` (integer)
    The time when the process began.
    Example: 1432064519

  - `data.job_in_progress.steps.status` (string)
    The process's current status.
* DONE — The process completed successfully.
* INPROGRESS — The process is currently active.
* FAILED — The process failed to complete successfully.
    Enum: "DONE", "INPROGRESS", "FAILED"

  - `data.last_job_details` (object)
    An object containing the most recently completed profile activation's data.

  - `data.last_job_details.end_time` (integer)
    The time when the job finished.
    Example: 1432220941

  - `data.last_job_details.profile_name` (string)
    The the name of the activated profile.
    Example: "MyProfile"

  - `data.last_job_details.start_time` (integer)
    The time when the job started.
    Example: 1432064519

  - `data.last_job_details.status` (string)
    The job's current status.
* DONE — The process completed successfully.
* INPROGRESS — The process is currently active.
* FAILED - The process failed to complete successfully.
    Enum: "DONE", "INPROGRESS", "FAILED"

  - `data.last_job_details.steps` (array)
    An array of objects containing the completed processes for the most recent profile activation.

  - `data.last_job_details.steps.end_time` (integer)
    The time when the process finished.
    Example: 1432220941

  - `data.last_job_details.steps.name` (string)
    The name of the process.

  - `data.last_job_details.steps.start_time` (integer)
    The time when the process began.
    Example: 1432220941

  - `data.last_job_details.steps.status` (string)
    The process's current status.
* DONE — The process completed successfully.
* INPROGRESS - The process is currently active.
* FAILED - The process failed to complete successfully.
    Example: "DONE"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "remote_mysql_monitor_profile_activation"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


