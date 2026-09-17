[Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-standardized-hooks) >> [Hookable Events](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events)

# Guide to Standardized Hooks - Whostmgr Functions

The `Whostmgr` category's events occur during WHM functions.

## Accounts Hooks

These hooks affect account creation, deletion, shell access and more:

### Accounts::change_package

This event triggers whenever a hosting plan (package) or an account's use of it changes.

#### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Available.
* **Escalate privileges attribute:** N/A


#### Available stages

* `pre` — Hook action code runs before the change.
* `post` — Hook actions code runs after the change.


#### pre returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `cur_pkg` | *string* | The hosting plan's (package's) current name. | A valid hosting plan name. | `oldpackagename` |
| `new_pkg` | *string* | The new hosting plan's (package's) name. | A valid hosting plan name. | `newpackagename` |
| `user` | *string* | The user for whom the package will change. | A valid username on the server. | `username` |


#### post returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `cur_pkg` | *string* | The hosting plan's (package's) current name. | A valid hosting plan name. | `oldpackagename` |
| `new_pkg` | *string* | The new hosting plan's (package's) name. | A valid hosting plan name. | `newpackagename` |
| `user` | *string* | The user for whom the package changed. | A valid username on the server. | `username` |


### Accounts::Create

This event triggers whenever the system creates an account.

#### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Available.
* **Escalate privileges attribute:** N/A


#### Available stages

* `pre` — Hook action code runs before the system creates the account.
* `post` — Hook actions code runs after the system creates the account.


#### Returns

This event returns the WHM API 1 [`createacct`](/openapi/whm/operation/createacct) function's returns.

### Accounts::Modify

This event triggers whenever the system modifies an account.

#### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Available.
* **Escalate privileges attribute:** N/A


#### Available stages

* `pre` — Hook action code runs before the change.
* `post` — Hook actions code runs after the change.


#### Returns

This event returns the WHM API 1 [`modifyacct`](/openapi/whm/operation/modifyacct) function's returns.

### Accounts::Rearrangeacct

This event triggers whenever the system performs an account rearrangement, whether through a transfer or the WHM interface.

#### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Available.
* **Escalate privileges attribute:** N/A


#### Available stages

* `pre` — Hook action code runs before the change.
* `post` — Hook actions code runs after the change.


#### Returns

The `pre` and `post` stages do not produce output.

### Accounts::Remove

This event triggers whenever the system deletes an account.

#### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Available.
* **Escalate privileges attribute:** N/A


#### Available stages

* `pre` — Hook action code runs before the system deletes the account.
* `post` — Hook actions code runs after the system deletes the account.


#### Returns

This event returns the WHM API 1 [`removeacct`](/openapi/whm/operation/removeacct) function's returns.

### AccountEnhancements::Assign

This event triggers whenever the system assigns a cPanel account's [Account Enhancements](https://go.cpanel.net/account-enhancements).

#### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Available.
* **Escalate privileges attribute:** N/A


#### Available stages

* `pre` — Hook action code runs before the system assigns the Account Enhancements.
* `post` — Hook actions code runs after the system assigns the Account Enhancements.


#### Returns

#### pre returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `id` | *string* | The Account Enhancement's human-readable ID. | An Account Enhancement ID. | `my-enhancement-example` |
| `name` | *string* | The Account Enhancement's name. | A valid string. | `My Enhancement Example` |


#### post returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `id` | *string* | The Account Enhancement's human-readable ID. | An Account Enhancement ID. | `my-enhancement-example` |
| `name` | *string* | The Account Enhancement's name. | A valid string. | `My Enhancement Example` |


### AccountEnhancements::Unassign

This event triggers whenever the system unassigns a cPanel account's [Account Enhancements](https://go.cpanel.net/account-enhancements).

#### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Available.
* **Escalate privileges attribute:** N/A


#### Available stages

* `pre` — Hook action code runs before the system unassigns the Account Enhancements.
* `post` — Hook actions code runs after the system unassigns the Account Enhancements.


#### Returns

#### pre returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `id` | *string* | The Account Enhancement's human-readable ID. | An Account Enhancement ID. | `my-enhancement-example` |
| `name` | *string* | The Account Enhancement's name. | A valid string. | `My Enhancement Example` |


#### post returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `id` | *string* | The Account Enhancement's human-readable ID. | The Account Enhancement's human-readable ID. | `my-enhancement-example` |
| `name` | *string* | The Account Enhancement's name. | A valid string. | `My Enhancement Example` |


### Accounts::set_shell

This event triggers whenever the system modifies an account's shell.

#### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Available.
* **Escalate privileges attribute:** N/A


#### Available stages

* `pre` — Hook action code runs before the system modifies the shell.
* `post` — Hook actions code runs after the system modifies the shell.


#### Returns

#### pre returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `new_shell` | *string* | The new shell setting. | `noshell`  `nologin`  `false`   `shutdown`   `sync` | `noshell` |
| `current_shell` | *string* | The current shell setting. | `noshell`  `nologin`  `false`  `shutdown`  `sync` | `nologin` |
| `user` | *string* | The account for which shell settings will change. | A valid username on the server. | `username` |


#### post returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `new_shell` | *string* | The new shell setting. | `noshell`  `nologin`  `false`   `shutdown`   `sync` | `noshell` |
| `current_shell` | *string* | The previous shell setting. | `noshell`  `nologin`  `false`  `shutdown`  `sync` | `nologin` |
| `user` | *string* | The account for which shell settings changed. | A valid username on the server. | `username` |
| `rawout` | *string* | Additonal raw output from the event. | A string value. | `raw output` |


### Accounts::SiteIP::set

This event triggers whenever the system changes a user's IP address.

#### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Available.
* **Escalate privileges attribute:** N/A


#### Available stages

* `pre` — Hook action code runs before the system changes the IP address.
* `post` — Hook actions code runs after the system changes the IP address.


#### pre returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `user` | *string* | The account's username. | A valid username that exists on the system. | `example` |
| `oldip` | *string* | The old IP address. | A valid IP address on the system. | `192.0.2.0` |
| `newip` | *string* | The new IP address. | A valid IP address on the system. | `192.0.2.1` |


#### post returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `user` | *string* | The account's username. | A valid username that exists on the system. | `example` |
| `oldip` | *string* | The old IP address. | A valid IP address on the system. | `192.0.2.0` |
| `newip` | *string* | The new IP address. | A valid IP address on the system. | `192.0.2.1` |


### Accounts::suspendacct

This event triggers whenever the system suspends an account.

#### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Available.
* **Escalate privileges attribute:** N/A


#### Available stages

* `pre` — Hook action code runs before the system suspends the account.
* `post` — Hook actions code runs after the system suspends the account.


#### pre returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `user` | *string* | The account to suspend. | A valid username on the server. | `username` |
| `reason` | *string* | The reason for suspension, if one exists. | A string value. | `Nonpayment` |
| `disallowun` | *Boolean* | Whether resellers can unsuspend the account. | `1` — Resellers **cannot** unsuspend the account. `0` — Resellers **can** unsuspend the account. | `1` |


#### post returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `user` | *string* | The suspended account. | A valid username on the server. | `username` |
| `reason` | *string* | The reason for suspension, if one exists. | A string value. | `Nonpayment` |
| `disallowun` | *Boolean* | Whether resellers can unsuspend the account. | `1` — Resellers **cannot** unsuspend the account. `0` — Resellers **can** unsuspend the account. | `1` |
| `rawout` | *string* | The event's raw output. | A string value. | `raw output` |


### Accounts::unsuspendacct

This event triggers whenever the system unsuspends an account.

#### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Available.
* **Escalate privileges attribute:** N/A


#### Available stages

* `pre` — Hook action code runs before the system unsuspends the account.
* `post` — Hook actions code runs after the system unsuspends the account.


#### pre returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `user` | *string* | The account to unsuspend. | A valid username on the server. | `username` |


#### post returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `user` | *string* | The unsuspended account. | A valid username on the server. | `username` |
| `rawout` | *string* | The event's raw output. | A string value. | `raw output` |


## AutoSSL Hook

This hook affects the AutoSSL service:

### AutoSSL::installssl

This event triggers when the AutoSSL service installs or changes an SSL certificate. This hook does **not** listen for uninstallation events.

#### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Available.
* **Escalate privileges attribute:** N/A


#### Available stages

* `pre` — Hook action allows for pre-installation validation and actions.
* `post` — Hook action allows for post-installation validation and actions.


#### pre returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `domain_set_name` | *string* | **Required**  The domain name. | A valid domain name. | `example.com` |
| `username` | *string* | **Required**  The user who owns the given `domain_set_name`. | A valid string. | `example` |
| `certificate_pem` | *string* | **Required**  The certificate in PEM format. | A valid SSL certificate in PEM format. | `-----BEGIN CERTIFICATE-----\r\n`  `MIIEEzCCAvugAwIBAgIJALF/jFpw6p1bMA0GCSqG...`  `-----END CERTIFICATE-----` |
| `key_pem` | *string* | **Required**  The certificate's key in PEM format. | A valid private key in PEM format. | `-----BEGIN RSA PRIVATE KEY-----`  `MIIEpAIBAAKCAQEA4AVM6J4Qg3DIFWr/eJ5GRm...`  `-----END RSA PRIVATE KEY-----` |
| `cab_pem` | *string* | The certificate's CA bundle in PEM format.  If you do not use this parameter, the system will automatically determine the appropriate CA bundle file to use. | A valid CA bundle in PEM format. | `-----BEGIN CERTIFICATE-----\r\n`  `MIIB+jCCAWMCAgGjMA0GCSqGSIb3DQEB...`  `-----END CERTIFICATE-----` |


#### post returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `rawout` | *string* | The function's raw output. | A valid string in HTML format. | `The Certificate for the domain example.com was installed on the IP 192.168.0.20.` |
| `status` | *Boolean* | Whether the function was successful. | `1` — Success.  `0` — Failure. | `1` |


## Domain Hook

These hooks affect a user's domains:

### Domain::addsubdomain

This event triggers whenever a user creates a subdomain.

#### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Available.
* **Escalate privileges attribute:** N/A


#### Available stages

* `pre` — Hook action code runs before the change.
* `post` — Hook actions code runs after the change.


#### pre returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `user` | *string* | The user who creates the subdomain. | A valid username. | `username` |
| `subdomain` | *string* | The subdomain the user creates. | A valid subdomain name. | `subdomain.example.com` |
| `rootdomain` | *string* | The root domain of the new subdomain. | A valid domain name. | `example.com` |


#### post returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `user` | *string* | The user who creates the subdomain. | A valid username. | `username` |
| `subdomain` | *string* | The subdomain the user creates. | A valid subdomain name. | `subdomain.example.com` |
| `rootdomain` | *string* | The root domain of the new subdomain. | A valid domain name. | `example.com` |


### Domain::delsubdomain

This event triggers whenever a user deletes a subdomain.

#### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Available.
* **Escalate privileges attribute:** N/A


#### Available stages

* `pre` — Hook action code runs before the change.
* `post` — Hook actions code runs after the change.


#### pre returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `user` | *string* | The user who is deleting the subdomain. | A valid username. | `username` |
| `subdomain` | *string* | The subdomain the user is deleting. | A valid subdomain name. | `subdomain.example.com` |
| `rootdomain` | *string* | The root domain of the subdomain to be deleted. | A valid domain name. | `example.com` |


#### post returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `user` | *string* | The user who is deleting the subdomain. | A valid username. | `username` |
| `subdomain` | *string* | The subdomain the user is deleting. | A valid subdomain name. | `subdomain.example.com` |
| `rootdomain` | *string* | The root domain of the subdomain to be deleted. | A valid domain name. | `example.com` |


### Domain::park

This event triggers whenever a user creates a domain alias (parks a domain).

#### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Available.
* **Escalate privileges attribute:** N/A


#### Available stages

* `pre` — Hook action code runs before the change.
* `post` — Hook actions code runs after the change.


#### pre returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `target_domain` | *string* | The domain name for which to create an alias. | A valid domain name. | `example.com` |
| `new_domain` | *string* | The domain name to which the alias will point. | A valid domain name. | `park.example.com` |
| `user` | *string* | The user who will create the alias. | A valid username on the server. | `username` |


#### post returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `target_domain` | *string* | The domain name for which you created an alias. | A valid domain name. | `example.com` |
| `new_domain` | *string* | The domain name to which the alias points. | A valid domain name. | `park.example.com` |
| `user` | *string* | The user who created the alias. | A valid username on the server. | `username` |


### Domain::zone_add

This event triggers whenever the system adds a DNS zone for a domain.

Note:
The available parameters depend on how the event is triggered. WHM API calls provide the `template`, `has_ipv6`, and `ipv6` parameters, while CLI calls provide the `reseller` parameter.

#### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Available.
* **Escalate privileges attribute:** N/A


#### Available stages

* `pre` — Hook action code runs before the system adds the zone.
* `post` — Hook actions code runs after the system adds the zone.


#### pre returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `domain` | *string* | The domain name for which to add the zone. | A valid domain name. | `example.com` |
| `ip` | *string* | The IP address associated with the zone. | A valid IP address. | `192.0.2.0` |
| `trueowner` | *string* | The cPanel account that owns the domain. | A valid username on the server. | `username` |
| `allowoverwrite` | *Boolean* | Whether the system overwrites an existing zone. | `1` — Overwrite.  `0` — Do not overwrite. | `1` |
| `template` | *string* | The DNS zone template to use.  The system only provides this parameter when the event is triggered via the WHM API. | A valid DNS zone template name. | `standard` |
| `has_ipv6` | *Boolean* | Whether the zone includes an IPv6 address.  The system only provides this parameter when the event is triggered via the WHM API. | `1` — The zone includes an IPv6 address.  `0` — The zone does not include an IPv6 address. | `1` |
| `ipv6` | *string* | The IPv6 address associated with the zone.  The system only provides this parameter when the event is triggered via the WHM API. | A valid IPv6 address. | `2001:db8::1` |
| `reseller` | *string* | The reseller associated with the domain.  The system only provides this parameter when the event is triggered via the CLI. | A valid reseller username on the server. | `reselleruser` |


#### post returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `domain` | *string* | The domain name for which the system added the zone. | A valid domain name. | `example.com` |
| `ip` | *string* | The IP address associated with the zone. | A valid IP address. | `192.0.2.0` |
| `trueowner` | *string* | The cPanel account that owns the domain. | A valid username on the server. | `username` |
| `allowoverwrite` | *Boolean* | Whether the system overwrote an existing zone. | `1` — Overwrite.  `0` — Do not overwrite. | `1` |
| `template` | *string* | The DNS zone template used.  The system only provides this parameter when the event is triggered via the WHM API. | A valid DNS zone template name. | `standard` |
| `has_ipv6` | *Boolean* | Whether the zone includes an IPv6 address.  The system only provides this parameter when the event is triggered via the WHM API. | `1` — The zone includes an IPv6 address.  `0` — The zone does not include an IPv6 address. | `1` |
| `ipv6` | *string* | The IPv6 address associated with the zone.  The system only provides this parameter when the event is triggered via the WHM API. | A valid IPv6 address. | `2001:db8::1` |
| `reseller` | *string* | The reseller associated with the domain.  The system only provides this parameter when the event is triggered via the CLI. | A valid reseller username on the server. | `reselleruser` |


### Domain::zone_remove

This event triggers whenever the system removes a DNS zone for a domain.

Note:
The `post` stage only fires when the zone existed before removal and the system confirms it is gone afterward.

#### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Available.
* **Escalate privileges attribute:** N/A


#### Available stages

* `pre` — Hook action code runs before the system removes the zone.
* `post` — Hook actions code runs after the system removes the zone.


#### pre returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `domain` | *string* | The domain name for which to remove the zone. | A valid domain name. | `example.com` |
| `owner` | *string* | The cPanel account that owns the domain. | A valid username on the server. | `username` |


#### post returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `domain` | *string* | The domain name for which the system removed the zone. | A valid domain name. | `example.com` |
| `owner` | *string* | The cPanel account that owned the domain. | A valid username on the server. | `username` |


## Lang Hooks

These hooks affect the `php.ini` file:

### Lang::PHP::ini_set_content

This event triggers when an administrator uploads a new complete `php.ini` file. When you hook this event, you **must** also hook UAPI's [`LangPHP::php_ini_set_user_content`](/openapi/cpanel/operation/php_ini_set_user_content) function to ensure consistent behavior.

#### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


#### Available stages

* `pre` — Hook action code runs before the change.
* `post` — Hook actions code runs after the change.


#### Returns

This event returns the WHM API 1 [`php_ini_set_content`](/openapi/whm/operation/php_ini_set_content) function's returns.

### Lang::PHP::ini_set_directives

This event triggers when an administrator changes the directives in the `php.ini` file. When you hook this event, you **must** also hook UAPI's [`LangPHP::php_ini_set_user_basic_directives`](/openapi/cpanel/operation/php_ini_set_user_basic_directives) function to ensure consistent behavior.

#### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


#### Available stages

* `pre` — Hook action code runs before the system changes the directives.
* `post` — Hook actions code runs after the system changes the directives.


#### Returns

This event returns the WHM API 1 [`php_ini_set_directives`](/openapi/whm/operation/php_ini_set_directives) function's returns.

### Lang::PHP::set_handler

This event triggers when an administrator changes the handler that serves the PHP files for any version of PHP.

#### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


#### Available stages

* `pre` — Hook action code runs before the system changes the handler.
* `post` — Hook actions code runs after the system changes the handler.


#### Returns

This event returns the WHM API 1 [`php_set_handler`](/openapi/whm/operation/php_set_handler) function's returns.

### Lang::PHP::set_system_default_version

This event triggers when an administrator changes the system default PHP version.

#### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


#### Available stages

* `pre` — Hook action code runs before the system changes the default PHP version.
* `post` — Hook actions code runs after the system changes the default PHP version.


#### Returns

This event returns the WHM API 1 [`php_set_system_default_version`](/openapi/whm/operation/php_set_system_default_version) function's returns.

### Lang::PHP::set_vhost_versions

This event triggers when an administrator changes the PHP version for a specific virtual host. When you hook this event, you **must** also hook UAPI's [`LangPHP::php_set_vhost_versions`](/openapi/cpanel/operation/php_set_vhost_versions) function to ensure consistent behavior.

#### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


#### Available stages

* `pre` — Hook action code runs before the system changes the virtual host's PHP version.
* `post` — Hook actions code runs after the system changes the virtual host's PHP version.


#### Returns

This event returns the WHM API 1 [`php_set_vhost_versions`](/openapi/whm/operation/php_set_vhost_versions) function's returns.

## RemoteMySQL Hook

This hook affects Remote MySQL® profiles:

### RemoteMySQL::activate_profile

This event triggers whenever the system activates a  Remote MySQL® profile.

#### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Available.
* **Escalate privileges attribute:** N/A


#### Available stages

* `pre` — Hook action code runs before the system activates the remote profile.
* `post` — Hook actions code runs after the system activates the remote profile.


#### pre input parameters

| Parameter | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `profile_name` | *string* | The Remote MySQL profile's name. | A valid profile name on the server. | `notlocalhost` |


#### post input parameters

| Parameter | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `profile_name` | *string* | The Remote MySQL profile's name. | A valid profile name on the server. | `notlocalhost` |


#### pre returns

The `pre` stage does not return output.

#### post returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `result` | *Boolean* | Whether the function succeeded. | `1` — The function succeeded.  `0` — The function failed. | `1` |


## ParkAdmin Hooks

These hooks affect domains handled by ParkAdmin:

### ParkAdmin::park

This event triggers whenever the system parks a domain.

#### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Available.
* **Escalate privileges attribute:** N/A


#### Available stages

* `pre` — Hook action code runs before the system parks the domain.
* `post` — Hook actions code runs after the system parks the domain.


#### pre returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `user` | *string* | The cPanel account that owns the domains. | A valid username on the server. | `username` |
| `target_domain` | *string* | The domain on which to park the `new_domain` domain. | A valid domain. | `example.com` |
| `new_domain` | *string* | The domain to park on the `target_domain` domain. | A valid domain. | `parkeddomain.com` |


#### post returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `user` | *string* | The cPanel account that owns the domains. | A valid username on the server. | `username` |
| `target_domain` | *string* | The domain on which the system parked the `new_domain` domain. | A valid domain. | `example.com` |
| `new_domain` | *string* | The domain that the system parked on the `target_domain` domain. | A valid domain. | `parkeddomain.com` |


### ParkAdmin::unpark

This event triggers whenever the system unparks a domain.

#### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Available.
* **Escalate privileges attribute:** N/A


#### Available stages

* `pre` — Hook action code runs before the system unparks the domain.
* `post` — Hook actions code runs after the system unparks the domain.


#### pre returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `user` | *string* | The cPanel account that owns the domains. | A valid username on the server. | `username` |
| `parent_domain` | *string* | The domain on which the domain is parked. | A valid domain. | `example.com` |
| `domain` | *string* | The domain to unpark. | A valid domain. | `parkeddomain.com` |


#### post returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `user` | *string* | The cPanel account that owns the domains. | A valid username on the server. | `username` |
| `parent_domain` | *string* | The domain on which the domain was parked. | A valid domain. | `example.com` |
| `domain` | *string* | The unparked domain. | A valid domain. | `parkeddomain.com` |


## Package Hook

This hook affects account package access verification:

### Packages::verify_input_data

This event triggers when an account package is added or modified.

#### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Available.
* **Escalate privileges attribute:** N/A


#### Available stages

* `pre` — Hook action allows for package field input checks and rejects the creation or modification of the package if values do not match desired criteria.
* `post` — N/A


#### pre returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `bwlimit` | *string* | The hosting plan's maximum bandwidth use. This parameter defaults to `unlimited`. | A positive integer between one and 999,999 that represents the maximum bandwidth use, in megabytes (MB).  `0`, `unlimited`, or `null` — The account has unlimited bandwidth. | `unlimited` |
| `cgi` | *Boolean* | Whether CGI access is enabled for the account. When a [server profile](https://docs.cpanel.net/whm/server-configuration/server-profile/) disables the [Web Server role](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/#roles), this parameter defaults to `0`. On these servers, you **cannot** enable CGI access.  This parameter defaults to `1`. | `1` — Enabled.  `0` — Disabled. | `1` |
| `ip` | *string* | Whether the account has a dedicated IP address.  This parameter defaults to `n`. | `y` — The account has a dedicated IP address.  `n` — The account does not have a dedicated IP address. | `n` |
| `maxsub` | *string* | The hosting plan's maximum number of subdomains. | `unlimited`  An integer that represents a number of subdomains. | `unlimited` |
| `maxpop` | *string* | The hosting plan's maximum number of email accounts.  This parameter defaults to `unlimited`. | A positive integer between one and 999,999.  `0`, `unlimited`, or `null` — The account has unlimited email accounts. | `unlimited` |
| `maxlst` | *string* | The hosting plan's maximum number of mailing lists. | `unlimited`  An integer that represents a number of mailing lists. | `unlimited` |
| `cpmod` | *string* | The hosting plan's cPanel theme.  This parameter defaults to the server's [default cPanel theme](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/). | `jupiter`  A valid theme on the server. | `jupiter` |
| `language` | *string* | The hosting plan's default locale.  This value defaults to the server's default locale. | A two-letter [ISO-3166 code](http://www.iso.org/iso/country_codes.htm). | `en` |
| `featurelist` | *string* | The hosting plan's feature list.  If you do not use this parameter, the function assigns the `default` feature list to the hosting plan's accounts. | A valid feature list name on the server. | `default` |
| `maxftp` | *string* | The hosting plan's maximum number of FTP accounts.  This parameter defaults to `unlimited`. | A positive integer between one and 999,999.  `0`, `unlimited`, or `null` — The account has unlimited FTP accounts. | `unlimited` |
| `max_emails_per_hour` | *string* | The maximum number of emails that the account can send in one hour.  This parameter defaults to `unlimited`. | A positive integer.  `0` or `unlimited` — The account can send an unlimited number of emails. | `unlimited` |
| `maxaddon` | *string* | The hosting plan's maximum number of addon domains.  This parameter defaults to `unlimited`. | A positive integer between one and 999,999.  `0`, `unlimited`, or `null` — The account has unlimited addon domains. | `0` |
| `maxsql` | *string* | The hosting plan's maximum number of each available type of SQL database.  For example, if you set this value to `5` and the system administrator allows MySQL® and PostgreSQL® databases, users can create up to five MySQL databases and up to five PostgreSQL databases.  This parameter defaults to `unlimited`. | A positive integer between one and 999,999.  `0`, `unlimited`, or `null` — The account has unlimited databases. | `unlimited` |
| `hasshell` | *Boolean* | Whether the account has shell access.  This parameter defaults to `0`. | `1` — The account has shell access.  `0` — No shell access. | `0` |
| `edit` | *string* | Whether the user wishes to modify or add an existing package extension.  This parameter is part of the API call and **not** included in the package. The system displays `yes` when a user modifies an existing package extension and `no` when they wish to add one. | `yes` — The user wishes to **modify** an existing package extension.  `no` — The user wishes to **add** an existing package extension. | `yes` |
| `max_defer_fail_percentages` | *integer* | The percentage of failed or deferred email messages that the account can send per hour before outgoing mail is rate-limited. | A positive integer.  `0` or `unlimited` — The account can send an unlimited number of failed or deferred messages. | `unlimited` |
| `quota` | *integer* | The hosting plan's disk space quota.  This parameter defaults to `0` (unlimited). | A positive integer between one and 999,999 that represents the maximum disk space that the account may use, in megabytes (MB).  `0` — The hosting plan's disk space is unlimited. | `unlimited` |
| `maxpark` | *string* | The hosting plan's maximum number of parked domains (aliases).  This parameter defaults to `unlimited`. | A positive integer between one and 999,999.  `0`, `unlimited`, or `null` — The account has unlimited parked domains. | `0` |
| `name` | *string* | The hosting plan name. | An existing hosting plan name on the server. | `exampleplan` |
| `_package_extensions` | *string* | The hosting plan's package extensions.  If you do not provide a value, the hosting plan will not include package extensions. | A space-delimited list of one or more [package extensions](/guides/guide-to-package-extensions) on the server. Extension names and variables are **case-sensitive**.  You can also include the extension's variables in your function call, in `key=value` format. Consult the extension's documentation for a list of possible variables. | `extension1` `extension2` `extension3` |
| `digestauth` | *string* | Whether to enable Digest Authentication for the account. | `y` — Enable.  `n` — Disable. | `n` |


#### post returns

The `post` stage does not return output.

## Server profile

This hook affects manually changing a server type.

### Server::Type::Change::disable

This event triggers when a system administrator manually changes the server type and disables services or roles.

Note:
When changing the server type, you may receive both `Server::Type::Change::disable` and `Server::Type::Change::enable` events, depending on how the change affects the server.

#### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


#### Available stages

* `pre` — N/A
* `post` — Hook action occurs after the server type changes.


#### pre returns

The `pre` stage does not return output.

#### post returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `services` | *string* | Array of services disabled by the server type change. | The short name of a `systemd` service. | `httpd` |
| `changed_roles` | *string* | Array of server roles disabled by the server type change. | A list of disabled `Cpanel::Server::Type::*::Change` roles. | `Cpanel::Server::Type::Role::FTP::Change` |


### Server::Type::Change::enable

This event triggers when a system administrator manually changes the server type and enables services or roles.

Note:
When changing the server type, you may receive both `Server::Type::Change::disable` and `Server::Type::Change::enable` events, depending on how the change affects the server.

#### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


#### Available stages

* `pre` — N/A
* `post` — Hook action occurs after the server type changes.


#### pre returns

The `pre` stage does not return output.

#### post returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `services` | *string* | Array of services disabled by the server type change. | The short name of a `systemd` service. | `cpdavd` |
| `changed_roles` | *string* | Array of server roles enabled by the server type change. | A list of enabled `Cpanel::Server::Type::*::Change` roles. | `Cpanel::Server::Type::Role::WebDisk::Change` |


## SSL Hook

This hook affects manual SSL modification:

### SSL::installssl

This event triggers when a system administrator manually installs or changes an SSL certificate via WHM interfaces or WHM API 1 functions.

#### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Available.
* **Escalate privileges attribute:** N/A


#### Available stages

* `pre` — Hook action allows for pre-installation validation and actions.
* `post` — Hook action allows for post-installation validation and actions.


#### pre returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `domain` | *string* | **Required**  The domain's name. | A valid domain name. | `example.com` |
| `crt` | *string* | **Required**  The certificate's text. | A valid SSL certificate. | `-----BEGIN CERTIFICATE-----\r\n`  `MIIEEzCCAvugAwIBAgIJALF/jFpw...`  `-----END CERTIFICATE-----%0` |
| `key` | *string* | **Required**  The certificate's key. | A valid private key. | ` -----BEGIN RSA PRIVATE KEY-----`  `MIIEpAIBAAKCAQEA4AVM6J4Qg3DI...`  `-----END RSA PRIVATE KEY-----` |
| `cab` | *string* | The certificate's CA bundle.  If you do not use this parameter, the system will automatically determine the appropriate CA bundle file to use. | A valid CA bundle. | `-----BEGIN CERTIFICATE-----\r\n`  `MIIB+jCCAWMCAgGjMA0GCSqGSIb3...`  `-----END CERTIFICATE-----` |
| `ip` | *string* | The IP address of the certificate's domain.  This parameter defaults to the local IP address for the domain. | A valid IP address. | `192.168.0.20` |


#### post returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `rawout` | *string* | The function's raw output. | A valid string in HTML format. | `The Certificate for the domain example.com was installed on the IP 192.168.0.20.` |
| `status` | *Boolean* | Whether the function was successful. | `1` — Success.  `0` — Failure. | `1` |


## Transfer Hook

This hook tracks transfer sessions:

### Transfers::Session

This event triggers when the system begins or finishes a transfer session.

#### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Available.
* **Escalate privileges attribute:** N/A


#### Available stages

* `pre` — Hook action occurs before the transfer session begins.
* `post` — Hook action occurs after transfer finishes.


#### pre returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `creator` | *string* | The user under which the server created the transfer session. | A valid string. | `root` |
| `pid` | *integer* | The transfer session's process ID. | A valid PID.  `0` — The session has not started yet. | `0` |
| `version` | *string* | The transfer system's version. | A valid string. | `2.3` |
| `sessionid` | *string* | The transfer session's ID. | A valid string. | `sourceexampcopya20190429175239zSOL` |
| `starttime` | *string* | The transfer session's start time. | A date and time in `YYYY-MM-DD HH:MM:SS` format. | `2019-04-29 17:52:39` |
| `state` | *integer* | The current state of the transfer session. | `0` — The session has not started yet. | `0` |
| `targethost` | *string* | The target system's hostname. | A valid hostname. | `target.example.com` |
| `initiator` | *string* | The service that initiated the transfer session. | A valid service name. | `copyacct` |
| `endtime` | *string* | When the transfer session ended. | `undef` — The session has not started yet. | `undef` |
| `starttime_unix` | *integer* | When the transfer session started. | A positive integer that represents a time, in Unix time. | `1556560359` |
| `source_host` | *string* | The source system's hostname. | A valid hostname. | `source.example.com` |
| `endtime_unix` | *integer* | When the transfer session ended. | `undef` — The session has not started yet. | `undef` |


#### post returns

| Return | Type | Description | Possible values | Example |
|  --- | --- | --- | --- | --- |
| `creator` | *string* | The user under which the server created the transfer session. | A valid string. | `root` |
| `pid` | *integer* | The transfer session's process ID. | A valid integer. | `13401` |
| `version` | *string* | The transfer system's version. | A valid string. | `2.3` |
| `sessionid` | *string* | The transfer session's ID. | A valid string. | `sourceexampcopya20190429175239zSOL` |
| `starttime` | *string* | The transfer session's start time. | A date and time in `YYYY-MM-DD HH:MM:SS` format. | `2019-04-29 17:52:39` |
| `state` | *integer* | The current state of the transfer session. | `100` — The session has ended. | `100` |
| `targethost` | *string* | The target system's hostname. | A valid hostname. | `target.example.com` |
| `initiator` | *string* | The service that initiated the transfer session. | A valid service name. | `copyacct` |
| `endtime` | *string* | When the transfer session ended. | A date and time in `YYYY-MM-DD HH:MM:SS` format. | `2019-04-29 17:53:5` |
| `starttime_unix` | *integer* | When the transfer session started. | A positive integer that represents a time, in Unix time. | `1556560359` |
| `source_host` | *string* | The source system's hostname. | A valid hostname. | `source.example.com` |
| `endtime_unix` | *integer* | When the transfer session ended. | A positive integer that represents a time, in Unix time. | `1556560432` |


## TweakSettings Hook

This hook tracks user modifications of TweakSettings:

### TweakSettings::Main

This event triggers before or after a user modifies a [*Tweak Setting*](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) value.

#### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


#### Available stages

* `pre` — Hook action occurs before updating the *Tweak Setting* value.
* `post` — Hook action occurs after updating the *Tweak Setting* value.


#### Returns

The `pre` and `post` stages do not return output.