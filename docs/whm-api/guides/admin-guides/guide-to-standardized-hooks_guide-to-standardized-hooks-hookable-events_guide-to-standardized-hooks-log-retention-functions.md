[Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-standardized-hooks) >> [Hookable Events](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events)

# Guide to Standardized Hooks - Log::Retention Functions

The `Log::Retention` category's events occur when you run the `/usr/local/cpanel/scripts/log_retention` script.

Note:
These events do **not** currently support custom user paths.

## Information

* **Action code runs as:** `root`
* **Blocking attribute:** Unavailable
* **Escalate privileges attribute:** N/A


## Available stages

* `pre` — Hook action code runs before the script deletes files.
* `post` — Hook action code runs after the script deletes files.


## pre_deletion

Use this event to archive or backup files before the script removes them.

### Returns

The `pre_deletion` event returns the following values:

| Return | Description | Example |
|  --- | --- | --- |
| `log_type` | The type of logs to process. | `web` |
| `user` | Username for user logs, or `undef` for system logs. | `example` |
| `base_path` | The base directory to process. | `/var/log/example-logs` |
| `files_to_delete` | Array reference of files to delete. | `['/var/log/example-logs/log.1.gz', '/var/log/example-logs/log.2.gz']` |
| `retention_days` | Configured retention period in days. | `7` |


## post_deletion

This event runs **after** the script deletes files.

### Returns

The `post_deletion` event returns the following values:

| Return | Description | Example |
|  --- | --- | --- |
| `log_type` | The type of logs processed. | `web` |
| `user` | Username if processing user logs, or `undef` for system logs. | `example` |
| `base_path` | Base directory processed. | `/var/log/example-logs` |
| `deleted_count` | Number of files deleted. | `4` |
| `retention_days` | Configured retention period in days. | `7` |