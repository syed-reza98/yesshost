[Development Guides Home](/guides) >> [Guide to Standardized Hooks](/guides/guide-to-standardized-hooks) >> [Hookable Events](/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events)

# Guide to Standardized Hooks - System Functions

The `System` category's events occur during system updates or backups.

## upcp

This event takes place when cPanel & WHM updates.

### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the update process. Unlike other `pre` stages, the success or failure of this event's hook action code **cannot** block execution of the cPanel & WHM event. The Standardized Hooks System **cannot** affect the cPanel & WHM update process.
* `post` — Hook action code runs after the update process.


### Returns

The `pre` and `post` stages do not produce output.

## Backup

This event takes place when the system performs backups.

### Information

* **Action code runs as:** `root`
* **Blocking attribute:** Unavailable.
* **Escalate privileges attribute:** N/A


### Available stages

* `pre` — Hook action code runs before the system performs backups.
* `post` — Hook action code runs after the system performs backups.


Hooks for this event **do not** trigger the legacy backup system.

### Returns

The `pre` and `post` stages do not produce output.