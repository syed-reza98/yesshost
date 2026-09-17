# Update 360 Monitoring agent polling settings

This function updates agent360 polling settings.

Provide at least one of the following parameters: interval or max_data_span.

The interval parameter sets the individual polling interval for each plugin. If you
provide interval without any section filters, the function updates all core
(global, agent, data, and execution) and default plugin
(cpu, iostat, and network) sections.

The global_sections and plugin_sections parameters are only valid
if you provide the interval parameter.

The max_data_span parameter is global. The agent collects metrics from multiple
plugins and sends them together as a single batch.

If the requested values already match the current configuration, the function does not
make changes or restart the agent360 process.

Endpoint: GET /360Monitoring/set_360_agent_polling
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `global_sections` (string)
    A comma-separated list of core sections to update.

It must be one of the following:
* global
* agent
* data
* execution

This parameter only applies to the interval parameter.
    Example: "global,agent"

  - `interval` (integer)
    The polling interval in seconds. Must be a positive integer.
    Example: 300

  - `max_data_span` (integer)
    The maximum number of seconds between batches of metrics sent for analysis. Must be a positive integer.
    Example: 120

  - `plugin_sections` (string)
    A comma-separated list of plugin sections to update.

Each value must match a plugin section loaded in the agent
configuration (for example, cpu, iostat, or network).

This parameter only applies to the interval parameter.
    Example: "cpu,network"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.status` (integer)
    * 1 - Success.
    Enum: 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "set_360_agent_polling"

  - `metadata.namespace` (string)
    The namespace used in the API call.
    Example: "360Monitoring"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result
field is 0. This field may display a success message when
a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


