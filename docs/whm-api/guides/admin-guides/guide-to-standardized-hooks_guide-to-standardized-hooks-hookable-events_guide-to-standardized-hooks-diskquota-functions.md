[Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-standardized-hooks) >> [Hookable Events](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events)

# Guide to Standardized Hooks - DiskQuota Functions

The `DiskQuota` category's events occur during disk quota processing.

## critical

This event triggers whenever a cPanel account approaches its disk quota.

### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` - The hook's action code runs when an account's disk usage reaches `critical` status.


### pre returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `blocks_limit` | *integer* | The cPanel account's disk quota, measured in bytes. | A positive integer. | `1000000` |
| `blocks_used` | *integer* | The cPanel account's amount of disk space used, measured in bytes. | A positive integer. | `999999` |
| `contact_info` | *hash* | A hash that contains information about the cPanel account's contact settings. |  |  |
| `cpuser` | *hash* | A hash that contains information about the cPanel user account. |  |  |
| `inodes_used` | *integer* | The cPanel account's amount of inodes used. | A positive integer. | `12345678` |
| `inodes_limit` | *integer* | The cPanel account's inodes quota. | A positive integer. | `123456789` |


## fail

This event triggers whenever a cPanel account exceeds its disk quota.

### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` - The hook's action code runs when an account exceeds its disk quota.


### pre returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `blocks_limit` | *integer* | The cPanel account's disk quota, measured in bytes. | A positive integer. | `1000000` |
| `blocks_used` | *integer* | The cPanel account's amount of disk space used, measured in bytes. | A positive integer. | `999999` |
| `contact_info` | *hash* | A hash that contains information about the cPanel account's contact settings. |  |  |
| `cpuser` | *hash* | A hash that contains information about the cPanel user account. |  |  |
| `inodes_used` | *integer* | The cPanel account's amount of inodes used. | A positive integer. | `12345678` |
| `inodes_limit` | *integer* | The cPanel account's inodes quota. | A positive integer. | `123456789` |


## warn

### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` - The hook's action code runs when an account's disk usage reaches `warn` status.


### pre returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `blocks_limit` | *integer* | The cPanel account's disk quota, measured in bytes. | A positive integer. | `1000000` |
| `blocks_used` | *integer* | The cPanel account's amount of disk space used, measured in bytes. | A positive integer. | `999999` |
| `contact_info` | *hash* | A hash that contains information about the cPanel account's contact settings. |  |  |
| `cpuser` | *hash* | A hash that contains information about the cPanel user account. |  |  |
| `inodes_used` | *integer* | The cPanel account's amount of inodes used. | A positive integer. | `12345678` |
| `inodes_limit` | *integer* | The cPanel account's inodes quota. | A positive integer. | `123456789` |