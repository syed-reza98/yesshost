[Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-standardized-hooks) >> [Hookable Events](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events)

# Guide to Standardized Hooks - modsec_vendor Script

The `modsec_vendor` script category's events occur when you run a [WHM script](https://docs.cpanel.net/whm/scripts/whm-scripts/). These scripts reside in the `/usr/local/cpanel/scripts/` directory.

## modsec_vendor::disable

This event triggers when the `modsec_vendor` script disables a ModSecurity vendor.

### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the script disables a vendor.
* `post` — Hook actions code runs after the script disables a vendor.


### Returns

The `pre` and `post` stages do not produce output.

## modsec_vendor::disable_configs

This event triggers when the script disables a ModSecurity vendor's configuration.

### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` - Hook action code runs before the script disables the vendor's configuration.
* `post` — Hook actions code runs after the script disables the vendor's configuration.


### Returns

The `pre` and `post` stages do not produce output.

## modsec_vendor::disable_updates

This event triggers when the script disables automatic updates for a ModSecurity vendor.

### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the script disables automatic updates for a ModSecurity vendor.
* `post` — Hook actions code runs after the script disables automatic updates for a ModSecurity vendor.


### Returns

The `pre` and `post` stages do not produce output.

## modsec_vendor::enable

This event triggers when the script enables a ModSecurity vendor.

### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the script enables a vendor.
* `post` — Hook actions code runs after the script enables a vendor.


### Returns

The `pre` and `post` stages do not produce output.

## modsec_vendor::enable_configs

This event triggers when the script enables a ModSecurity vendor's configuration.

### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the script enables a vendor's configuration.
* `post` — Hook actions code runs after the script enables a vendor's configuration.


### Returns

The `pre` and `post` stages do not produce output.

## modsec_vendor::enable_updates

This event triggers when the script enables automatic updates for a ModSecurity vendor.

### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the script enables updates for a ModSecurity vendor.
* `post` — Hook actions code runs after the script enables updates for a ModSecurity vendor.


### Returns

The `pre` and `post` stages do not produce output.

## modsec_vendor::remove

This event triggers when the script removes a ModSecurity vendor.

### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the script removes a ModSecurity vendor.
* `post` — Hook actions code runs after the script removes a ModSecurity vendor.


### Returns

The `pre` and `post` stages do not produce output.

## modsec_vendor::update

This event triggers when the script updates a ModSecurity vendor.

### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the script updates a ModSecurity vendor.
* `post` — Hook actions code runs after the script updates a ModSecurity vendor.


### Returns

The `pre` and `post` stages do not produce output.