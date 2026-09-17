[Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-standardized-hooks) >> [Hookable Events](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events)

# Guide to Standardized Hooks - ConvertAddon Functions

The `ConvertAddon` category's events occur during WHM functions.

## ConvertAddon::convert_addon

This event triggers whenever a user converts an addon domain into an account.

### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the change.
* `post` — Hook actions code runs after the change.


### pre returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `username` | *string* | The cPanel username for the new account. | A valid cPanel username. | `newuser1` |
| `domain` | *string* | The addon domain to convert into a new account. | A valid addon domain name. | `olddomain.com` |
| `conversion options` | *hash* | The options that you selected for the conversion. |  |  |
|     `webdisk-accounts` | *Boolean* | Whether to copy WebDisk account data. | `1` — Enabled.  `0` — Disabled. | `1` |
|     `custom-vhost-includes` | *Boolean* | Whether to copy custom VirtualHost includes. | `1` — Enabled.  `0` — Disabled. | `1` |
|     `daemonize` | *Boolean* | Whether to run the process as a daemon. | `1` — Enabled.  `0` — Disabled. | `1` |
|     `docroot` | *Boolean* | Whether to copy the contents of the addon domain's document root directory. | `1` — Enabled.  `0` — Disabled. | `1` |
|     `move-mysqldb` | *Boolean* | Whether to move MySQL® databases. | `1` — Enabled.  `0` — Disabled. | `1` |
|     `autoresponders` | *Boolean* | Whether to copy email autoresponders. | `1` — Enabled.  `0` — Disabled. | `1` |
|     `preserve-ownership` | *Boolean* | Whether to preserve ownership of the addon domain. | `1` — Enabled.  `0` — Disabled. | `1` |
|     `notify-user` | *string* | The account to notify of changes to the addon domain. Usually, specify the user account that performs the conversion. | A valid cPanel user account. | `root` |
|     `copy-mysqldb` | *Boolean* | Whether to copy MySQL databases. | `1` — Enabled.  `0` — Disabled. | `1` |
|     `move-mysqluser` | *Boolean* | Whether to move MySQL users. | `1` — Enabled.  `0` — Disabled. | `1` |
|     `webmail-data` | *Boolean* | Whether to copy Webmail data. | `1` — Enabled.  `0` — Disabled. | `1` |
|     `pkgname` | *string* | The name of the selected package. | A valid package name. | `Default` |
|     `email-accounts` | *Boolean* | Whether to copy the addon domain's email accounts. | `1` — Enabled.  `0` — Disabled. | `1` |
|     `email-forwarders` | *Boolean* | Whether to copy the addon domain's email forwarders. | `1` — Enabled.  `0` — Disabled. | `1` |
|     `custom-dns-records` | *Boolean* | Whether to copy the addon domain's custom DNS records. | `1` — Enabled.  `0` — Disabled. | `1` |
|     `ftp-accounts` | *Boolean* | Whether to copy the addon domain's FTP accounts. | `1` — Enabled.  `0` — Disabled. | `1` |
|     `copy-installed-ssl-cert` | *Boolean* | Whether to copy the addon domain's installed SSL certificate. | `1` — Enabled.  `0` — Disabled. | `1` |
|     `remove-subdomain` | *Boolean* | Whether to remove the addon domain after conversion. | `1` — Enabled.  `0` — Disabled. | `1` |
|     `email-address` | *sring* | The new account's contact email address. | A valid email address. | `user1@example.net` |


### post returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `username` | *string* | The new cPanel account's username. | A valid cPanel account. | `newuser1` |
| `domain` | *string* | The addon domain that converted into a new account. | A valid addon domain name. | `olddomain.com` |
| `status` | *Boolean* | Whether the conversion succeeded. | `1` — Success.`0` — Failure. | `1` |