# 360 Monitoring

The 360 Monitoring module for WHM API 1.

## Register the server with 360 Monitoring

 - [GET /360Monitoring/register_server_with_360_monitoring](https://api.docs.cpanel.net/specifications/whm.openapi/360-monitoring/360monitoring-register_server_with_360_monitoring.md): This function registers the server with 360 Monitoring.

If the server is not already associated with a 360 Monitoring account,
the function creates a new account on the user's behalf and configures
the local agent. If the server is already registered, the function is
a no-op and returns the existing identifier.

The system persists the credentials required by the local agent server-side
and does not return them in the response. Inspect the metadata.result
field (1 for success, 0 for failure) and metadata.reason for
any failure details.

## Update 360 Monitoring agent polling settings

 - [GET /360Monitoring/set_360_agent_polling](https://api.docs.cpanel.net/specifications/whm.openapi/360-monitoring/360monitoring-set_360_agent_polling.md): This function updates agent360 polling settings.

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

