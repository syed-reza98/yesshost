# Update Greylisting settings

This function modifies the server's Greylisting configuration settings.

Important:

When you call this function, you must include at least one of the
following parameters:

* spf_bypass
* child_timeout_secs
* record_exp_time_mins
* initial_block_time_mins
* max_child_procs
* purge_interval_mins
* must_try_time_mins

Endpoint: GET /save_cpgreylist_config
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `child_timeout_secs` (integer)
    The maximum of seconds that Greylisting waits for a child process to timeout.

Note:

This parameter affects the function of the cPGreyList daemon. Do not change this
value unless it is absolutely necessary.
    Example: 5

  - `initial_block_time_mins` (integer)
    The number of minutes during which Greylisting defers email from an unknown triplet. The maximum value for this parameter is four hours (240 minutes).
    Example: 10

  - `max_child_procs` (integer)
    The maximum number of child processes.

Notes:

 This parameter affects the function of the cPGreyList daemon. Do not change this
 value unless it is absolutely necessary.
    Example: 5

  - `must_try_time_mins` (integer)
    The number of minutes during which Greylisting accepts a re-sent email from an unknown triplet. The maximum value for this parameter is one day (1440 minutes).
    Example: 240

  - `purge_interval_mins` (integer)
    The number of minutes before Greylisting deletes the records in the Greylisting database.

Note:

This parameter affects the function of the cPGreyList daemon. Do not change this
value unless it is absolutely necessary.
    Example: 60

  - `record_exp_time_mins` (integer)
    The number of minutes before Greylisting deletes the triplet record and treats a
re-sent email as coming from a new, unknown triplet. The maximum value for this
parameter is 30 days (43200 minutes).
    Example: 4320

  - `spf_bypass` (integer)
    Whether emails with SPF bypass Greylisting.

* 1 — Enabled.
* 0 — Disabled.
    Enum: 1, 0

## Response 200 fields (application/json):

  - `data` (object)

  - `data.cpgreylist_config` (object)
    A list of Greylisting settings.

  - `data.cpgreylist_config.child_timeout_secs` (integer)
    The maximum amount of seconds that Greylisting waits for child process to time out.
    Example: 5

  - `data.cpgreylist_config.initial_block_time_mins` (integer)
    The number of minutes during which Greylisting defers email from an unknown triplet.
    Example: 10

  - `data.cpgreylist_config.is_enabled` (integer)
    Whether Greylisting is enabled.

* 1 — Enabled.
* 0 — Disabled.
    Enum: 1, 0

  - `data.cpgreylist_config.is_exim_enabled` (integer)
    Whether Exim is enabled.

* 1 — Enabled.
* 0 — Disabled.
    Enum: 1, 0

  - `data.cpgreylist_config.max_child_procs` (integer)
    The maximum amount of child processes.
    Example: 5

  - `data.cpgreylist_config.must_try_time_mins` (integer)
    The number of minutes during which Greylisting accepts a re-sent email from an unknown triplet.
    Example: 240

  - `data.cpgreylist_config.purge_interval_mins` (integer)
    The number of minutes before Greylisting deletes the records in the Greylisting database.
    Example: 60

  - `data.cpgreylist_config.record_exp_time_mins` (integer)
    The number of minutes before Greylisting deletes the triplet record and treats a re-sent email as a new, unknown triplet.
    Example: 4320

  - `data.cpgreylist_config.spf_bypass` (integer)
    Whether emails with SPF bypass Greylisting.

* 1 — Bypass.
* 0 — Do not bypass.
    Enum: 1, 0

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "save_cpgreylist_config"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


