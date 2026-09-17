[Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-standardized-hooks) >> [Hookable Events](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events)

# Guide to Standardized Hooks - Stats Functions

The `Stats` category's events occur during statistics processing.

## RunAll

This event takes place when the system processes statistics for all of the server's cPanel accounts.

### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the system processes cPanel statistics.
* `post` — Hook action code runs after the system processes cPanel statistics.


### Returns

The `pre` and `post` stages do not produce output.

## RunUser

This event takes place when the system processes statistics for a specific cPanel account.

### Information

* **Action code runs as:** The cPanel User
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** Unavailable.


### Available stages

* `pre` — Hook action code runs before the system processes cPanel statistics.
* `post` — Hook action code runs after the system processes cPanel statistics.


### pre returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `lastruntime` | *integer* | The last time at which the system processed the user's statistics. | A valid Unix timestamp. | `1417584474` |
| `user` | *string* | The cPanel account username. | A valid cPanel username. | `username` |
| `homedir` | *string* | The cPanel account's home directory. | An absolute directory path. | `/home/username/` |
| `rLOG_CONF` | *hash reference* | A hash reference that indicates which analytics programs will process each of the user's domains. | A valid hash reference. |  |
| `maindomain` | *string* | The cPanel account's main domain. | A valid domain. | `example.com` |
| `rALLDOMAINS` | *array reference* | An array reference that contains all of the user's domains. | A valid array reference. |  |
| `logfiledesc` | *array* | An array of hashes for each domain that the `cpanellogd` daemon will process. | This array contains a hash for each domain. Each hash contains the `domain`, `filename`, and `logfile` parameters. |  |
|     `domain` | *string* | A domain on the cPanel account.  The event returns this parameter in each `logfiledesc` hash. | A valid domain. | `seconddomain.com` |
|     `filename` | *string* | The log file's filename.  The event returns this parameter in each `logfiledesc` hash. | A valid filename. | `logfile` |
|     `logfile` | *string* | The log file's absolute path.  The event returns this parameter in each `logfiledesc` hash. | A valid file path. | `/home/users/logfile` |


### post returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `lastruntime` | *integer* | The last time at which the system processed the user's statistics. | A valid Unix timestamp. | `1417584474` |
| `user` | *string* | The cPanel account username. | A valid cPanel username. | `username` |
| `homedir` | *string* | The cPanel account's home directory. | An absolute directory path. | `/home/username/` |
| `rLOG_CONF` | *hash reference* | A hash reference that indicates which analytics programs processed each of the user's domains. | A valid hash reference. |  |
| `maindomain` | *string* | The cPanel account's main domain. | A valid domain. | `example.com` |
| `rALLDOMAINS` | *array reference* | An array reference that contains all of the user's domains. | A valid array reference. |  |
| `logfiledesc` | *array* | An array of hashes for each domain that the `cpanellogd` daemon processed. | This array contains a hash for each domain. Each hash contains the `domain`, `filename`, and `logfile` parameters. |  |
|     `domain` | *string* | A domain on the cPanel account.  The event returns this parameter in each `logfiledesc` hash. | A valid domain. | `seconddomain.com` |
|     `filename` | *string* | The log file's filename.  The event returns this parameter in each `logfiledesc` hash. | A valid filename. | `logfile` |
|     `logfile` | *string* | The log file's absolute path.  The event returns this parameter in each `logfiledesc` hash. | A valid file path. | `/home/users/logfile` |