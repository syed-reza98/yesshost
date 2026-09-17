# Return Greylisting settings

This function returns Greylisting's current settings.

Endpoint: GET /load_cpgreylist_config
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.cpgreylist_config` (object)
    An object that contains Greylisting settings.

  - `data.cpgreylist_config.child_timeout_secs` (integer)
    The maximum amount of seconds that Greylisting waits for a child process to time out.
    Example: 5

  - `data.cpgreylist_config.initial_block_time_mins` (integer)
    The number of minutes during which Greylisting defers email from an unknown triplet.
    Example: 10

  - `data.cpgreylist_config.is_enabled` (integer)
    Whether Greylisting is enabled.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.cpgreylist_config.is_exim_enabled` (integer)
    Whether Exim is enabled.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

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
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "load_cpgreylist_config"

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


